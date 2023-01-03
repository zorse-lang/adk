import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class managementGroups
	extends ArmResource<managementGroupsComponentInputs>
	implements managementGroupsComponentOutputs
{
	constructor(entity: ADKEntity, options: managementGroupsComponentInputs) {
		super(entity, options.name, "Microsoft.Management/managementGroups", "2021-04-01", options);
	}
	public readonly apiVersion: "2021-04-01";
	public readonly id: string;
	public readonly type: "Microsoft.Management/managementGroups";
}
export interface managementGroupsComponentOutputs {
	readonly apiVersion: "2021-04-01";
	readonly id: string;
	readonly type: "Microsoft.Management/managementGroups";
}
export interface managementGroupsComponentInputs {
	readonly name: string;
	readonly properties?: CreateManagementGroupPropertiesOrManagementGroupProperties | undefined;
}
export class managementGroups_settings
	extends ArmResource<managementGroups_settingsComponentInputs>
	implements managementGroups_settingsComponentOutputs
{
	constructor(entity: ADKEntity, options: managementGroups_settingsComponentInputs) {
		super(entity, options.name, "Microsoft.Management/managementGroups/settings", "2021-04-01", options);
	}
	public readonly apiVersion: "2021-04-01";
	public readonly id: string;
	public readonly type: "Microsoft.Management/managementGroups/settings";
}
export interface managementGroups_settingsComponentOutputs {
	readonly apiVersion: "2021-04-01";
	readonly id: string;
	readonly type: "Microsoft.Management/managementGroups/settings";
}
export interface managementGroups_settingsComponentInputs {
	readonly name: string;
	readonly properties?: CreateOrUpdateSettingsPropertiesOrHierarchySettingsProperties | undefined;
}
export class managementGroups_subscriptions
	extends ArmResource<managementGroups_subscriptionsComponentInputs>
	implements managementGroups_subscriptionsComponentOutputs
{
	constructor(entity: ADKEntity, options: managementGroups_subscriptionsComponentInputs) {
		super(entity, options.name, "Microsoft.Management/managementGroups/subscriptions", "2021-04-01", options);
	}
	public readonly apiVersion: "2021-04-01";
	public readonly id: string;
	public readonly type: "Microsoft.Management/managementGroups/subscriptions";
}
export interface managementGroups_subscriptionsComponentOutputs {
	readonly apiVersion: "2021-04-01";
	readonly id: string;
	readonly type: "Microsoft.Management/managementGroups/subscriptions";
}
export interface managementGroups_subscriptionsComponentInputs {
	readonly name: string;
	readonly properties?: SubscriptionUnderManagementGroupProperties | undefined;
}
export interface CreateManagementGroupChildInfoOrManagementGroupChildInfo {
	readonly children?: CreateManagementGroupChildInfoOrManagementGroupChildInfo[] | undefined;
	readonly displayName?: string | undefined;
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly type?: "/subscriptions" | undefined;
}
export interface CreateManagementGroupDetailsOrManagementGroupDetails {
	readonly managementGroupAncestors?: string[] | undefined;
	readonly managementGroupAncestorsChain?: ManagementGroupPathElement[] | undefined;
	readonly parent?: CreateParentGroupInfoOrParentGroupInfo | undefined;
	readonly path?: ManagementGroupPathElement[] | undefined;
	readonly updatedBy?: string | undefined;
	readonly updatedTime?: string | undefined;
	readonly version?: number | undefined;
}
export interface CreateManagementGroupPropertiesOrManagementGroupProperties {
	readonly children?: CreateManagementGroupChildInfoOrManagementGroupChildInfo[] | undefined;
	readonly details?: CreateManagementGroupDetailsOrManagementGroupDetails | undefined;
	readonly displayName?: string | undefined;
	readonly tenantId?: string | undefined;
}
export interface CreateOrUpdateSettingsPropertiesOrHierarchySettingsProperties {
	readonly defaultManagementGroup?: string | undefined;
	readonly requireAuthorizationForGroupCreation?: boolean | undefined;
	readonly tenantId?: string | undefined;
}
export interface CreateParentGroupInfoOrParentGroupInfo {
	readonly displayName?: string | undefined;
	readonly id?: string | undefined;
	readonly name?: string | undefined;
}
export interface ManagementGroupPathElement {
	readonly displayName?: string | undefined;
	readonly name?: string | undefined;
}
export interface ParentGroupBagInfo {
	readonly displayName?: string | undefined;
	readonly id?: string | undefined;
	readonly name?: string | undefined;
}
export interface SubscriptionUnderManagementGroupProperties {
	readonly displayName?: string | undefined;
	readonly parent?: ParentGroupBagInfo | undefined;
	readonly state?: string | undefined;
	readonly tenant?: string | undefined;
}
export default {
	managementGroups: managementGroups,
	"managementGroups/settings": managementGroups_settings,
	"managementGroups/subscriptions": managementGroups_subscriptions,
};
