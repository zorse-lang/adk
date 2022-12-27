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
export const assert = { true: ok, false: no };
export namespace errors {
	export class InvalidTokenName extends Exception {}
	export class CyclicComponentTokenPair extends Exception {}
	export class CyclicDependencyResolver extends Exception {}
	export class SceneVerificationViolation extends Exception {}
	export class ComponentVerificationViolation extends Exception {}
}
