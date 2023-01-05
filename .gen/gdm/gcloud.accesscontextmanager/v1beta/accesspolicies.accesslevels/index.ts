import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class AccessPoliciesAccessLevels
	extends GdmResource<AccessPoliciesAccessLevelsComponentInputs>
	implements AccessPoliciesAccessLevelsComponentOutputs
{
	constructor(entity: ADKEntity, options: AccessPoliciesAccessLevelsComponentInputs) {
		super(entity, options.name, "accesscontextmanager.v1beta.AccessPoliciesAccessLevels", options);
	}
	public readonly createTime?: string;
	public readonly updateTime?: string;
}
export interface AccessPoliciesAccessLevelsComponentOutputs {
	readonly createTime?: string;
	readonly updateTime?: string;
}
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
	readonly createTime?: string;
	readonly custom?: CustomLevel;
	readonly description?: string;
	readonly name?: string;
	readonly title?: string;
	readonly updateTime?: string;
}
export interface BasicLevel {
	readonly combiningFunction?: string;
	readonly conditions: Condition[];
}
export interface Condition {
	readonly dateTimeRestriction?: DateTimeRestriction;
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
export interface DateTimeRestriction {
	readonly allowedDays?: string[];
	readonly earliestTime?: TimeOfDay;
	readonly latestTime?: TimeOfDay;
	readonly timeZone?: string;
}
export interface DevicePolicy {
	readonly allowedDeviceManagementLevels?: string[];
	readonly allowedEncryptionStatuses?: string[];
	readonly osConstraints?: OsConstraint[];
	readonly requireAdminApproval?: boolean;
	readonly requireCorpOwned?: boolean;
	readonly requireManagedBrowserProfile?: boolean;
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
	readonly requireComplianceWithEmmPolicy?: boolean;
	readonly requireVerifiedChromeOs?: boolean;
}
export interface TimeOfDay {
	readonly hours?: number;
	readonly minutes?: number;
	readonly nanos?: number;
	readonly seconds?: number;
}
export default {
	AccessPoliciesAccessLevels: AccessPoliciesAccessLevels,
};
