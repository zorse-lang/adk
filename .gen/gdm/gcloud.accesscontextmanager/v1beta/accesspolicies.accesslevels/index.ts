import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class AccessPoliciesAccessLevels
	extends GdmResource<AccessPoliciesAccessLevelsComponentInputs>
	implements AccessPoliciesAccessLevelsComponentOutputs
{
	constructor(entity: ADKEntity, options: AccessPoliciesAccessLevelsComponentInputs) {
		super(entity, options.name, "accesscontextmanager.v1beta.AccessPoliciesAccessLevels", options);
	}
	public readonly createTime?: string | undefined;
	public readonly updateTime?: string | undefined;
}
export interface AccessPoliciesAccessLevelsComponentOutputs {
	readonly createTime?: string | undefined;
	readonly updateTime?: string | undefined;
}
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
	readonly createTime?: string | undefined;
	readonly custom?: CustomLevel | undefined;
	readonly description?: string | undefined;
	readonly name?: string | undefined;
	readonly title?: string | undefined;
	readonly updateTime?: string | undefined;
}
export interface BasicLevel {
	readonly combiningFunction?: string | undefined;
	readonly conditions: Condition[];
}
export interface Condition {
	readonly dateTimeRestriction?: DateTimeRestriction | undefined;
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
export interface DateTimeRestriction {
	readonly allowedDays?: string[] | undefined;
	readonly earliestTime?: TimeOfDay | undefined;
	readonly latestTime?: TimeOfDay | undefined;
	readonly timeZone?: string | undefined;
}
export interface DevicePolicy {
	readonly allowedDeviceManagementLevels?: string[] | undefined;
	readonly allowedEncryptionStatuses?: string[] | undefined;
	readonly osConstraints?: OsConstraint[] | undefined;
	readonly requireAdminApproval?: boolean | undefined;
	readonly requireCorpOwned?: boolean | undefined;
	readonly requireManagedBrowserProfile?: boolean | undefined;
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
	readonly requireComplianceWithEmmPolicy?: boolean | undefined;
	readonly requireVerifiedChromeOs?: boolean | undefined;
}
export interface TimeOfDay {
	readonly hours?: number | undefined;
	readonly minutes?: number | undefined;
	readonly nanos?: number | undefined;
	readonly seconds?: number | undefined;
}
export default {
	AccessPoliciesAccessLevels: AccessPoliciesAccessLevels,
};
