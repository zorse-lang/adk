/** Base Error class of anything thrown in the code */
export class Exception extends Error {
	constructor(...args: any[]) {
		super();
		this.name = this.constructor.name;
		this.message = this.name.replace(/([A-Z])/g, " $1").trim().toLowerCase();
		Object.assign(this, { additionalData: args });
	}
}
function ok<errT extends Exception, condT = boolean>(
	errFactory: new (
		...args: any[]
	) => errT,
	condition: condT,
	...args: any[]
) {
	if (!condition) {
		throw new errFactory(...args);
	}
}
function no<errT extends Exception, condT = boolean>(
	errFactory: new (
		...args: any[]
	) => errT,
	condition: condT,
	...args: any[]
) {
	ok(errFactory, !condition, ...args);
}
/** tiny assertion helper */
export const assert = { true: ok, false: no };
export namespace errors {
	/** Thrown on a bad cast to Token */
	export class NotToken extends Exception {}
	/** Thrown when something is not implemented yet */
	export class NotSupportedYet extends Exception {}
	/** Thrown when Token names are invalid */
	export class InvalidTokenName extends Exception {}
	/** Thrown when a Component points to itself through Token chains */
	export class CyclicComponentTokenPair extends Exception {}
	/** Thrown when a Component has a cyclic dependency chain through Tokens */
	export class CyclicDependencyResolver extends Exception {}
	/** Thrown when Component verify() method fails */
	export class ComponentVerificationViolation extends Exception {}
	/** Thrown when Component backing a Token shared across scenes has multiple Scenes filtering it */
	export class AmbiguousCrossSceneReference extends Exception {}
	/** Thrown when Component shared across Scenes has multiple Scenes filtering it */
	export class DuplicateComponentScenePair extends Exception {}
}
