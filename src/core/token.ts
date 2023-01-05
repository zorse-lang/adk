// This file contains the implementation of the "Token-Tech". This implementation heavily relies on JavaScript's Proxy
// mechanic which was introduced in ES6. As a result of using Proxies, the implementation is light. This implementation
// heavily relies on TypeScript's type system for safety.

import { assert, errors } from "@zorse/adk/core";

const TOKEN_WRAP_SYMBOL = Symbol();
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
 * Token design is inspired by the AWS CDK Token/Lazy system.
 */
export class Token<ConcreteType = any, UserDataType = any> {
	private _data: UserDataType;
	private _parent?: Token;
	private _resolver: Token.Resolver<ConcreteType>;
	public readonly name: string;
	public constructor(opts: Token.Options<ConcreteType, UserDataType> = {}) {
		this.name = opts.name || "<token>";
		if (opts.registry?.find(this.name)) {
			return opts.registry.find(this.name) as any;
		}
		this._data = opts.data;
		this._parent = opts.parent;
		this._resolver = opts.resolver ? opts.resolver : (): ConcreteType => proxy;
		const proxy: any = new Proxy(this, {
			get(target, prop, receiver) {
				if (prop === Symbol.toPrimitive) {
					return () => target.serialize();
				}
				if (typeof prop === "symbol" || prop in target) {
					return Token.Wrap(Reflect.get(target, prop, receiver), opts, target);
				}
				const name: string = target.name;
				assert.true(errors.InvalidTokenName, TOKEN_NAME_REGEXP.test(name), TOKEN_NAME_REGEXP.source, name);
				const nestedTokenName = `${name}["${prop}"]`;
				const nestedTokenResolver = async () => {
					const rootValue: any = await target.resolve();
					return rootValue[prop];
				};
				return new Token({
					name: nestedTokenName,
					registry: opts.registry,
					resolver: nestedTokenResolver,
					parent: target,
					data: opts.data,
				});
			},
		});
		opts.registry?.add(proxy);
		return proxy;
	}
	/**
	 * Wraps the given value so all its properties are Tokens. This is useful for creating a recursive Token from a plain object.
	 * @param value The value to wrap
	 * @param opts The options to use for the creations of sub-Tokens
	 * @param root The root Token that owns this value (used for naming)
	 * @returns The same object with all its properties wrapped in Tokens
	 */
	public static Wrap(value: any, opts?: Token.Options, root?: Token): any {
		if (_wrappable(value)) {
			Object.defineProperty(value, TOKEN_WRAP_SYMBOL, { value: true });
			return new Proxy(value, {
				get(target, prop, receiver) {
					if (typeof prop === "symbol" || prop in target) {
						return Token.Wrap(Reflect.get(target, prop, receiver), opts, root);
					} else {
						return new Token({
							...opts,
							name: `${root?.name ?? ""}["${prop}"]`,
						});
					}
				},
			});
		} else {
			return value;
		}
	}
	public get root(): Token {
		let iterator: Token;
		while ((iterator = this._parent)) {
			return iterator;
		}
		return this;
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
		return `${TOKEN_TAG_OPENING}${this.name}${TOKEN_TAG_CLOSING}`;
	}
	/** Returns the accessors part of this Token's name */
	public accessors(sep = "/"): string {
		const accessors = [...this.name.matchAll(/\[[^\]]+\]+/g)].map((match) => JSON.parse(match[0].slice(1, -1)));
		return accessors.join(sep);
	}
	/** Returns `true` if the entire string is a serialized Token */
	public static IsToken(serialized: string): boolean;
	/** Returns `true` if the entire object itself is an instance of a Token */
	public static IsToken(any: any): boolean;
	public static IsToken(any: any): any {
		const maybeSerialized = any;
		return (
			(typeof maybeSerialized === "object" && maybeSerialized instanceof Token) ||
			(typeof maybeSerialized === "string" && TOKEN_LINE_REGEXP.test(maybeSerialized))
		);
	}
	/**
	 * Helper function that returns `true` if a certain path can be resolved by this token or its child tokens.
	 * You can use this in your {@link core.Scene:class}s to do per-{@link core.Scene:class} updates of Tokens.
	 * @example
	 * ```typescript
	 * token.resolves<ComponentType>((c) => c.tokenProperty)
	 * ```
	 */
	public resolves<T = any>(cb?: (obj: T) => void): boolean {
		// neat trick picked up from:
		// https://github.com/PinkChampagne17/ts-nameof-proxy
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
		return this.accessors().startsWith(names.join("/"));
	}
}

export namespace Token {
	export type Resolver<ConcreteType = any> = (token: Token) => ConcreteType | Promise<ConcreteType>;
	export interface Options<ConcreteType = any, UserDataType = any> {
		resolver?: Resolver<ConcreteType>;
		registry?: Registry;
		parent?: Token;
		name?: string;
		data?: UserDataType;
	}

	/**
	 * Optional Token Registry to keep track of created Tokens in a given context.
	 * Token Registry can also be used to recursively resolve Tokens and strings associated with them.
	 */
	export class Registry {
		private readonly tokens = new Map<string, Token>();
		public add(token: Token): void {
			this.tokens.set(token.name, token);
		}
		public find(name: string): Token | undefined {
			return this.tokens.get(name);
		}
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
					const replaceTag = `${TOKEN_TAG_OPENING}${token.name}${TOKEN_TAG_CLOSING}`;
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
			if (arg instanceof Token) {
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
