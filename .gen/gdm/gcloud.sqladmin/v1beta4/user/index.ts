import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class User extends GdmResource<UserComponentInputs> implements UserComponentOutputs {
	constructor(entity: ADKEntity, options: UserComponentInputs) {
		super(entity, options.name, "sqladmin.v1beta4.user", options);
	}
}
export interface UserComponentOutputs {}
export interface UserComponentInputs {
	readonly dualPasswordType?: string;
	readonly etag?: string;
	readonly host?: string;
	readonly instance?: string;
	readonly kind?: string;
	readonly name: string;
	readonly password?: string;
	readonly passwordPolicy?: UserPasswordValidationPolicy;
	readonly project?: string;
	readonly sqlserverUserDetails?: SqlServerUserDetails;
}
export interface PasswordStatus {
	readonly locked?: boolean;
	readonly passwordExpirationTime?: string;
}
export interface SqlServerUserDetails {
	readonly disabled?: boolean;
	readonly serverRoles?: string[];
}
export interface UserPasswordValidationPolicy {
	readonly allowedFailedAttempts?: number;
	readonly enableFailedAttemptsCheck?: boolean;
	readonly enablePasswordVerification?: boolean;
	readonly passwordExpirationDuration?: string;
	readonly status?: PasswordStatus;
}
export default {
	User: User,
};
