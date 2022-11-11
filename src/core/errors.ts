export class BaseError extends Error {
	constructor(...args: any[]) {
		super();
		this.name = this.constructor.name;
		this.message = this.name.replace(/([A-Z])/g, " $1").trim().toLowerCase();
		Object.assign(this, { additionalData: args });
	}
}
function ok<errT extends BaseError, condT = boolean>(
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
function no<errT extends BaseError, condT = boolean>(
	errFactory: new (
		...args: any[]
	) => errT,
	condition: condT,
	...args: any[]
) {
	if (!!condition) {
		throw new errFactory(...args);
	}
}
export const assert = { true: ok, false: no };
export namespace errors {
	export class InvalidTokenName extends BaseError {}
	export class CyclicComponentTokenPair extends BaseError {}
	export class CyclicDependencyResolver extends BaseError {}
	export class NonDirectionalSceneViolation extends BaseError {}
	export class UniDirectionalSceneViolation extends BaseError {}
	export class ComponentVerificationViolation extends BaseError {}
}
