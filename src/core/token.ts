// This file contains the implementation of the "Token-Tech". This implementation heavily relies on JavaScript's Proxy
// mechanic which was introduced in ES6. As a result of using Proxies, the implementation is light. This implementation
// heavily relies on TypeScript's type system for safety.

import { assert, errors } from "@zorse/adk/core";

const TOKEN_TAG_OPENING = "@@{";
const TOKEN_TAG_CLOSING = "}@@";
const TOKEN_NAME_REGEXP = /[^\}]+/;
const TOKEN_FULL_REGEXP = new RegExp(`${TOKEN_TAG_OPENING}(${TOKEN_NAME_REGEXP.source})${TOKEN_TAG_CLOSING}`);
const TOKEN_LINE_REGEXP = new RegExp(`^${TOKEN_FULL_REGEXP.source}$`);

const normalizeTokenName = (name?: Token.Name): (() => string) => {
	const getName = name ? (typeof name === "function" ? name : () => name as string) : () => "<token>";
	return () => getName();
};

/**
 * A Token is a value that's not available yet, but has an async resolver that can potentially resolve it later.
 * Token design is inspired by the AWS CDK Token/Lazy system.
 */
export class Token<ConcreteType = any, UserDataType = any> {
	public readonly data: UserDataType;
	public readonly resolver: Token.Resolver<ConcreteType>;
	public readonly name: () => string;
	/** Wrap an existing Object and return Tokens wherever its properties are missing (a.k.a Tokenizing the Object) */
	public constructor(opts: Token.WrapOptions<ConcreteType>);
	/** Create a new Token object directly */
	public constructor(opts?: Token.MakeOptions<ConcreteType, UserDataType>);
	public constructor(opts: Token.Options = {}) {
		this.name = normalizeTokenName(opts.name);
		if ("wrap" in opts) {
			return new Proxy(opts.wrap as any, {
				get: (target, prop, receiver) => {
					if (typeof prop === "symbol" || prop in target) {
						return Reflect.get(target, prop, receiver);
					} else {
						return new Token({
							name: () => `${this.name()}["${prop}"]`,
							issuer: opts.issuer,
							resolver: opts.resolver,
							data: opts.wrap,
						});
					}
				},
			}) as any;
		} else {
			this.data = opts.data;
			this.resolver = opts.resolver ? opts.resolver : (): ConcreteType => proxy;
			const proxy: any = new Proxy(this, {
				get(target, prop, receiver) {
					if (prop === Symbol.toPrimitive) {
						return () => target.serialize();
					}
					if (typeof prop === "symbol" || prop in target) {
						return Reflect.get(target, prop, receiver);
					}
					const name: string = target.name();
					assert.true(errors.InvalidTokenName, TOKEN_NAME_REGEXP.test(name), TOKEN_NAME_REGEXP.source, name);
					const nestedTokenName = `${name}["${prop}"]`;
					const nestedTokenResolver = async () => {
						const rootValue: any = await target.resolver();
						return rootValue[prop];
					};
					return new Token({
						name: nestedTokenName,
						issuer: opts.issuer,
						resolver: nestedTokenResolver,
						data: opts.data,
					});
				},
			});
			opts.issuer?.add(proxy);
			return proxy;
		}
	}
	public toString(): string {
		return this.serialize();
	}
	public serialize(): string {
		return `${TOKEN_TAG_OPENING}${this.name()}${TOKEN_TAG_CLOSING}`;
	}
	public static IsToken(serialized: string): boolean;
	public static IsToken(any: any): boolean;
	public static IsToken(any: any): any {
		const maybeSerialized = any;
		return (
			(typeof maybeSerialized === "object" && maybeSerialized instanceof Token) ||
			(typeof maybeSerialized === "string" && TOKEN_LINE_REGEXP.test(maybeSerialized))
		);
	}
}

export namespace Token {
	export type Name = string | (() => string);
	export type Options = MakeOptions | WrapOptions;
	export type Resolver<ConcreteType = any> = () => ConcreteType | Promise<ConcreteType>;
	export interface BaseOptions<ConcreteType> {
		resolver?: Resolver<ConcreteType>;
		issuer?: Issuer;
		name?: Name;
	}
	export interface MakeOptions<ConcreteType = any, UserDataType = any> extends BaseOptions<ConcreteType> {
		data?: UserDataType;
	}
	export interface WrapOptions<ConcreteType = any> extends BaseOptions<ConcreteType> {
		wrap: ConcreteType;
	}

	/**
	 * Optional Token Issuer to keep track of created Tokens in a given context.
	 * Token Issuer can also be used to recursively resolve Tokens and strings associated with them.
	 */
	export class Issuer {
		private readonly tokens: Set<Token> = new Set();
		public add(token: Token): void {
			this.tokens.add(token);
		}
		public find(name: string): Token | undefined {
			return [...this.tokens].find((token) => token.name() === name);
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
				const allTokensTags = text.matchAll(new RegExp(TOKEN_FULL_REGEXP, "g"));
				const allTokensNames = new Set([...allTokensTags].map((match) => match[1]));
				for (const name of allTokensNames) {
					const token = this.find(name);
					if (token) {
						const resolved = await token.resolver();
						text = text.replace(new RegExp(`${TOKEN_TAG_OPENING}${name}${TOKEN_TAG_CLOSING}`, "g"), resolved);
					}
				}
				return text;
			};
			const _resolveToken = async (token: Token): Promise<Token | any> => {
				const val = await token.resolver();
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
