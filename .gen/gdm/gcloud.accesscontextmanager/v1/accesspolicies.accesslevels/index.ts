import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class AccessPoliciesAccessLevels
	extends GdmResource<AccessPoliciesAccessLevelsComponentInputs>
	implements AccessPoliciesAccessLevelsComponentOutputs
{
	constructor(entity: ADKEntity, options: AccessPoliciesAccessLevelsComponentInputs) {
		super(entity, options.name, "accesscontextmanager.v1.AccessPoliciesAccessLevels", options);
	}
}
export interface AccessPoliciesAccessLevelsComponentOutputs {}
export interface AccessPoliciesAccessLevelsComponentInputs {
	readonly basic?: BasicLevel | undefined;
	readonly custom?: CustomLevel | undefined;
	readonly description?: string | undefined;
	readonly name: string;
	readonly parent: string;
	readonly title?: string | undefined;
	readonly type: string;
}
export interface AccessLevel {
	readonly basic?: BasicLevel | undefined;
	readonly custom?: CustomLevel | undefined;
	readonly description?: string | undefined;
	readonly name?: string | undefined;
	readonly title?: string | undefined;
}
export interface BasicLevel {
	readonly combiningFunction?: string | undefined;
	readonly conditions: Condition[];
}
export interface Condition {
	readonly devicePolicy?: DevicePolicy | undefined;
	readonly ipSubnetworks?: string[] | undefined;
	readonly members?: string[] | undefined;
	readonly negate?: boolean | undefined;
	readonly regions?: string[] | undefined;
	readonly requiredAccessLevels?: string[] | undefined;
}
export interface CustomLevel {
	readonly expr: Expr;
}
export interface DevicePolicy {
	readonly allowedDeviceManagementLevels?: string[] | undefined;
	readonly allowedEncryptionStatuses?: string[] | undefined;
	readonly osConstraints?: OsConstraint[] | undefined;
	readonly requireAdminApproval?: boolean | undefined;
	readonly requireCorpOwned?: boolean | undefined;
	readonly requireScreenlock?: boolean | undefined;
}
export interface Expr {
	readonly description?: string | undefined;
	readonly expression?: string | undefined;
	readonly location?: string | undefined;
	readonly title?: string | undefined;
}
export interface OsConstraint {
	readonly minimumVersion?: string | undefined;
	readonly osType: string;
	readonly requireVerifiedChromeOs?: boolean | undefined;
}
export default {
	AccessPoliciesAccessLevels: AccessPoliciesAccessLevels,
};
