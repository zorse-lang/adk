import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class User extends GdmResource<UserComponentInputs> implements UserComponentOutputs {
	constructor(entity: ADKEntity, options: UserComponentInputs) {
		super(entity, options.name, "sqladmin.v1beta4.user", options);
	}
}
export interface UserComponentOutputs {}
export interface UserComponentInputs {
	readonly dualPasswordType?: string | undefined;
	readonly etag?: string | undefined;
	readonly host?: string | undefined;
	readonly instance?: string | undefined;
	readonly kind?: string | undefined;
	readonly name: string;
	readonly password?: string | undefined;
	readonly passwordPolicy?: UserPasswordValidationPolicy | undefined;
	readonly project?: string | undefined;
	readonly sqlserverUserDetails?: SqlServerUserDetails | undefined;
	readonly type: string;
}
export interface PasswordStatus {
	readonly locked?: boolean | undefined;
	readonly passwordExpirationTime?: string | undefined;
}
export interface SqlServerUserDetails {
	readonly disabled?: boolean | undefined;
	readonly serverRoles?: string[] | undefined;
}
export interface UserPasswordValidationPolicy {
	readonly allowedFailedAttempts?: number | undefined;
	readonly enableFailedAttemptsCheck?: boolean | undefined;
	readonly enablePasswordVerification?: boolean | undefined;
	readonly passwordExpirationDuration?: string | undefined;
	readonly status?: PasswordStatus | undefined;
}
export default {
	User: User,
};
