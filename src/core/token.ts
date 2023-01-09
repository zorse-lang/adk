// This file contains the implementation of the "Token-Tech". This implementation heavily relies on JavaScript's Proxy
// mechanic which was introduced in ES6. As a result of using Proxies, the implementation is light. This implementation
// heavily relies on TypeScript's type system for safety.

import { assert, errors } from "./errors";

import { Tree } from "./tree";

const TOKEN_DEFAULT_SEP = "/";
const TOKEN_WRAP_SYMBOL = Symbol();
const TOKEN_MADE_SYMBOL = Symbol();
const TOKEN_TAG_OPENING = "@@{";
const TOKEN_TAG_CLOSING = "}@@";
const TOKEN_NAME_REGEXP = /[^}]+/;
const TOKEN_FULL_REGEXP = new RegExp(`${TOKEN_TAG_OPENING}(${TOKEN_NAME_REGEXP.source})${TOKEN_TAG_CLOSING}`);
const TOKEN_LINE_REGEXP = new RegExp(`^${TOKEN_FULL_REGEXP.source}$`);
const _wrappable = (value: any) =>
	value &&
	(typeof value === "object" || Array.isArray(value)) &&
	!Token.IsToken(value) &&
	!(TOKEN_WRAP_SYMBOL in value);

/**
 * A Token is a value that's not available yet, but has an async resolver that can potentially resolve it later.
 * You can use Tokens to "record" accesses to an object or method calls on it, recursively and strongly typed.
 * Once the Token is resolved, it will return the value it was resolved to.
 * @noInheritDoc
 */
export class Token<ConcreteType = any, UserDataType = any> extends Tree {
	private _data: UserDataType;
	private _resolver: Token.Resolver<ConcreteType>;
	/** Optional name associated with this token. @default `"<token>"` */
	private readonly name: string;
	public constructor(opts: Token.Options<ConcreteType, UserDataType> = {}) {
		super(opts.parent, opts.name || "<token>");
		assert.true(errors.InvalidTokenName, TOKEN_NAME_REGEXP.test(this.name), TOKEN_NAME_REGEXP.source, this.name);
		if (opts.registry?.find(this.path())) {
			return opts.registry.find(this.path()) as any;
		}
		this._data = opts.data;
		this._resolver = opts.resolver ? opts.resolver : (): ConcreteType => _finalProxy;
		const _tokenInstance = this;
		const _function = function (...args: any[]) {
			const nestedTokenResolver = async () => {
				const context = await opts.parent.resolve();
				const rootValue: any = await _tokenInstance.resolve();
				return rootValue.apply(context, args);
			};
			return new Token({
				name: `(${JSON.stringify(args).slice(1, -1)})`,
				registry: opts.registry,
				resolver: nestedTokenResolver,
				parent: _finalProxy,
				data: opts.data,
			});
		};
		Object.defineProperty(_function, TOKEN_MADE_SYMBOL, { value: true });
		const _finalProxy: any = new Proxy(_function, {
			set(_proxyFunction, prop, value) {
				(_tokenInstance as any)[prop] = value;
				return true;
			},
			get(_proxyFunction, prop, receiver) {
				if (prop === Symbol.toPrimitive) {
					return () => _tokenInstance.serialize();
				}
				if (typeof prop === "symbol" || prop === "then" || prop.startsWith("to")) {
					return Reflect.get(_tokenInstance, prop, receiver);
				}
				if (prop in _tokenInstance) {
					return Token.Wrap(Reflect.get(_tokenInstance, prop, receiver), {
						...opts,
						parent: _finalProxy,
					});
				}
				const nestedTokenResolver = async () => {
					const rootValue: any = await _tokenInstance.resolve();
					return rootValue[prop];
				};
				return new Token({
					name: prop,
					registry: opts.registry,
					resolver: nestedTokenResolver,
					parent: _finalProxy,
					data: opts.data,
				});
			},
		});
		opts.registry?.add(_finalProxy);
		return _finalProxy;
	}
	/**
	 * Wraps the given value so all its properties are Tokens. This is useful for creating a recursive Token from a plain object.
	 * @param value The value to wrap
	 * @param opts The options to use for the creation of sub-Tokens
	 * @returns The same object with all its properties wrapped in Tokens
	 */
	public static Wrap<T = any>(value: T, opts: Token.Options = {}): T {
		if (_wrappable(value)) {
			Object.defineProperty(value, TOKEN_WRAP_SYMBOL, { value: true });
			return new Proxy(value as any, {
				get(target, prop, receiver) {
					if (typeof prop === "symbol" || prop === "then" || prop.startsWith("to")) {
						return Reflect.get(target, prop, receiver);
					} else if (prop in target) {
						const _nestedValue: any = Reflect.get(target, prop, receiver);
						const _nestedRootToken = new Token({ ...opts, name: prop, parent: opts.parent });
						return Token.Wrap(_nestedValue, { ...opts, parent: _nestedRootToken });
					} else {
						return new Token({ ...opts, name: prop });
					}
				},
			}) as any;
		} else {
			return value;
		}
	}
	/** Returns the user data associated with this Token */
	public get data(): UserDataType {
		return this._data;
	}
	/** Resets the resolver of this Token */
	public reset(resolver: Token.Resolver<ConcreteType>): void {
		this._resolver = resolver;
	}
	/** Resolves this Token and returns the concrete value or the same Token if it cannot be resolved yet */
	public async resolve(): Promise<ConcreteType> {
		return await this._resolver(this);
	}
	public toString(): string {
		return this.serialize();
	}
	public toJSON(): string {
		return this.serialize();
	}
	/** Format is `@@{<name>/child/nested["<string or number>"]...}@@` */
	public serialize(): string {
		return `${TOKEN_TAG_OPENING}${this.path()}${TOKEN_TAG_CLOSING}`;
	}
	/** Returns `true` if the entire string is a serialized Token */
	public static IsToken(serialized: string): boolean;
	/** Returns `true` if the entire object itself is an instance of a Token */
	public static IsToken(any: any): boolean;
	public static IsToken(any: any): any {
		const maybeSerialized = any;
		return (
			(typeof maybeSerialized === "object" && maybeSerialized instanceof Token) ||
			(typeof maybeSerialized === "function" && TOKEN_MADE_SYMBOL in maybeSerialized) ||
			(typeof maybeSerialized === "string" && TOKEN_LINE_REGEXP.test(maybeSerialized))
		);
	}
	/**
	 * Queries for the accessor used on `obj` in the given callback (`cb`) up the Token tree.
	 * You can use this in your {@link core.Scene:class}s to do per-{@link core.Scene:class} updates of Tokens.
	 * @example
	 * ```typescript
	 * token.query<ComponentType>((c) => c.tokenProperty)
	 * ```
	 */
	public query<T = any>(cb?: (obj: T) => void): Token | undefined {
		const name = Token.NameOf(cb);
		const root = this.path({ noroot: true });
		if (root.startsWith(name)) {
			let parent: Token = this;
			while (parent.parent) {
				if (parent.path({ noroot: true }) === name) {
					return parent;
				}

				parent = parent.parent as Token;
			}
		}
	}
	/**
	 * Helper to get the string name of a property. This is useful for creating Tokens.
	 * @see https://github.com/PinkChampagne17/ts-nameof-proxy
	 * @param cb The callback that accesses the property
	 * @param sep The separator to use for nested properties
	 * @returns The name of the property
	 */
	public static NameOf<T>(cb: (obj: T) => void, sep = TOKEN_DEFAULT_SEP): string {
		const names: string[] = [];
		const handler: ProxyHandler<object> = {
			get(_target, property) {
				assert.false(errors.InvalidTokenName, typeof property === "symbol", "Symbol");
				names.push(`${property as string}`);
				return new Proxy({}, handler);
			},
		};
		const proxy = new Proxy({}, handler);
		cb(proxy as T);
		return names.join(sep);
	}
	/**
	 * Helper cast utility from input to Token.
	 * @param value object to cast to Token
	 * @returns Token representing this object
	 */
	public static of<T = any>(value: T) {
		assert.true(errors.NotToken, Token.IsToken(value), value);
		return value as unknown as Token<T>;
	}
	/**
	 * Helper cast utility from Token to input.
	 * @returns what the resolver is supposed to resolve to.
	 */
	public to<T = any>() {
		return this as unknown as T;
	}
	/**
	 * Helper utility to construct and cast at the same time
	 * @returns a fictional JS value that's represented by a Token
	 */
	public static Make<T = any, U = any>(options?: Token.Options<T, U>): T & Token<T> {
		const token = new Token(options);
		return token.to<T & Token<T>>();
	}
}

/** @see {@link core.Token:class} */
export namespace Token {
	/** Resolver callback of a {@link core.Token:class} */
	export type Resolver<ConcreteType = any> = (token: Token) => ConcreteType | Promise<ConcreteType>;
	/** Options to create a {@link core.Token:class} */
	export interface Options<ConcreteType = any, UserDataType = any> {
		/** The resolver callback of this Token */
		resolver?: Resolver<ConcreteType>;
		/** Registry that's keeping track of Tokens */
		registry?: Registry;
		/** The parent Token of this Token, used in naming of sub-Tokens */
		parent?: Token;
		/** The name of this Token @default "<token>" */
		name?: string;
		/** User data associated with this Token */
		data?: UserDataType;
	}

	/**
	 * Optional Token Registry to keep track of created Tokens in a given context.
	 * Token Registry can also be used to recursively resolve Tokens and strings associated with them.
	 */
	export class Registry {
		private readonly tokens = new Map<string, Token>();
		/** Adds a {@link core.Token:class} to the registry */
		public add(token: Token): void {
			this.tokens.set(token.path(), token);
		}
		/** Finds a {@link core.Token:class} by its name */
		public find(name: string): Token | undefined {
			return this.tokens.get(name);
		}
		/** Parses all the {@link core.Token:class}s encoded in a string and returns them */
		public parse(encoded: string): Token[] {
			const allTokensTags = encoded.matchAll(new RegExp(TOKEN_FULL_REGEXP, "g"));
			const allTokensNames = new Set([...allTokensTags].map((match) => match[1]));
			return [...allTokensNames].map((name) => this.find(name)).filter(Boolean);
		}
		/**
		 * Resolves a string. If the entire string is a Token serialized name, it tries to find the token and resolve it.
		 * Otherwise, it tries to resolve all the tokens in the string and replaced the resolved values as much as possible.
		 * Anything that fails to resolve is left untouched.
		 * @param serialized The string to resolve
		 */
		public async resolve(serialized: string): Promise<string>;
		/**
		 * Resolves the Token and if the resulting value is a Token, it resolves it recursively with the rules of the other overload.
		 * @param token the token to resolve
		 */
		public async resolve(token: Token): Promise<Token | any>;
		public async resolve(arg: any): Promise<any> {
			const _resolveString = async (text: string): Promise<string> => {
				const tokens = this.parse(text);
				for (const token of tokens) {
					const resolved = await token.resolve();
					const replaceTag = `${TOKEN_TAG_OPENING}${token.path()}${TOKEN_TAG_CLOSING}`;
					text = text.split(replaceTag).join(resolved);
				}
				return text;
			};
			const _resolveToken = async (token: Token): Promise<Token | any> => {
				const val = await token.resolve();
				if (typeof val === "string") {
					return await _resolveString(val);
				} else {
					return val;
				}
			};
			if (arg instanceof Token || (typeof arg === "function" && TOKEN_MADE_SYMBOL in arg)) {
				return await _resolveToken(arg);
			} else {
				if (Token.IsToken(arg)) {
					const actualName = arg.replace(new RegExp(TOKEN_FULL_REGEXP, "g"), "$1");
					const token = this.find(actualName);
					if (token) {
						return await _resolveToken(token);
					} else {
						return arg;
					}
				} else {
					return await _resolveString(arg);
				}
			}
		}
	}
}
