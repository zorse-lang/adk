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
	readonly basic?: BasicLevel;
	readonly custom?: CustomLevel;
	readonly description?: string;
	readonly name: string;
	readonly parent: string;
	readonly title?: string;
}
export interface AccessLevel {
	readonly basic?: BasicLevel;
	readonly custom?: CustomLevel;
	readonly description?: string;
	readonly name?: string;
	readonly title?: string;
}
export interface BasicLevel {
	readonly combiningFunction?: string;
	readonly conditions: Condition[];
}
export interface Condition {
	readonly devicePolicy?: DevicePolicy;
	readonly ipSubnetworks?: string[];
	readonly members?: string[];
	readonly negate?: boolean;
	readonly regions?: string[];
	readonly requiredAccessLevels?: string[];
}
export interface CustomLevel {
	readonly expr: Expr;
}
export interface DevicePolicy {
	readonly allowedDeviceManagementLevels?: string[];
	readonly allowedEncryptionStatuses?: string[];
	readonly osConstraints?: OsConstraint[];
	readonly requireAdminApproval?: boolean;
	readonly requireCorpOwned?: boolean;
	readonly requireScreenlock?: boolean;
}
export interface Expr {
	readonly description?: string;
	readonly expression?: string;
	readonly location?: string;
	readonly title?: string;
}
export interface OsConstraint {
	readonly minimumVersion?: string;
	readonly osType: string;
	readonly requireVerifiedChromeOs?: boolean;
}
export default {
	AccessPoliciesAccessLevels: AccessPoliciesAccessLevels,
};
