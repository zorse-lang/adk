// This file contains the implementation of the "Token-Tech".
// This implementation heavily relies on JavaScript's Proxy mechanic which was
// introduced in ES6. As a result of using Proxies, the implementation is light.
// This implementation heavily relies on TypeScript's type system for safety.

import { assert, errors } from "@zorse/adk/core";

const TOKEN_TAG_OPENING = "@@{";
const TOKEN_TAG_CLOSING = "}@@";
const TOKEN_NAME_REGEXP = /[^\}]+/;
const TOKEN_FULL_REGEXP = new RegExp(`${TOKEN_TAG_OPENING}(${TOKEN_NAME_REGEXP.source})${TOKEN_TAG_CLOSING}`);

const normalizeTokenName = (name?: Token.Name): (() => string) => {
	const getName = name ? (typeof name === "function" ? name : () => name as string) : () => "<token>";
	return () => getName();
};

export namespace Token {
	export type Name = string | (() => string);
	export type Options = MakeOptions | WrapOptions;
	export type Resolver<ConcreteType = any> = () => ConcreteType | Promise<ConcreteType>;
	export interface BaseOptions<ConcreteType> {
		resolver?: Resolver<ConcreteType>;
		name?: Name;
	}
	export interface MakeOptions<ConcreteType = any, UserDataType = any> extends BaseOptions<ConcreteType> {
		data?: UserDataType;
	}
	export interface WrapOptions<ConcreteType = any> extends BaseOptions<ConcreteType> {
		wrap: ConcreteType;
	}
}

export class Token<ConcreteType = any, UserDataType = any> {
	public readonly data: UserDataType;
	public readonly resolver: Token.Resolver<ConcreteType>;
	public readonly name: () => string;
	public constructor(opts: Token.WrapOptions<ConcreteType>);
	public constructor(opts?: Token.MakeOptions<ConcreteType, UserDataType>);
	public constructor(opts?: Token.Options) {
		const _opts = opts ? opts : {};
		this.name = normalizeTokenName(_opts.name);
		if ("wrap" in _opts) {
			return new Proxy(_opts.wrap as any, {
				get: (target, prop, receiver) => {
					if (typeof prop === "symbol" || prop in target) {
						return Reflect.get(target, prop, receiver);
					} else {
						return new Token({
							name: () => `${this.name()}["${prop}"]`,
							resolver: _opts.resolver,
							data: _opts.wrap,
						});
					}
				},
			}) as any;
		} else {
			this.data = _opts.data;
			this.resolver = _opts.resolver ? _opts.resolver : (): ConcreteType => proxy;
			const proxy: any = new Proxy(this, {
				get(target, prop, receiver) {
					if (prop === Symbol.toPrimitive) {
						return () => target.serialize();
					}
					if (typeof prop === "symbol" || prop in target) {
						return Reflect.get(target, prop, receiver);
					}
					const name = target.name();
					assert.true(errors.InvalidTokenName, TOKEN_NAME_REGEXP.test(name), TOKEN_NAME_REGEXP.source, name);
					const nestedTokenName = `${name}["${prop}"]`;
					const nestedTokenResolver = async () => {
						const rootValue: any = await target.resolver();
						return rootValue[prop];
					};
					return new Token({
						name: nestedTokenName,
						resolver: nestedTokenResolver,
						data: _opts.data,
					});
				},
			});
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
	public static IsToken(...any: any[]): boolean {
		const maybeSerialized = any[0];
		return (
			(typeof maybeSerialized === "object" && maybeSerialized instanceof Token) ||
			(typeof maybeSerialized === "string" && TOKEN_FULL_REGEXP.test(maybeSerialized))
		);
	}
	public static ParseNames(text: string): Set<string> {
		const tokens = text.matchAll(new RegExp(TOKEN_FULL_REGEXP, "g"));
		return new Set([...tokens].map((match) => match[1]));
	}
}
