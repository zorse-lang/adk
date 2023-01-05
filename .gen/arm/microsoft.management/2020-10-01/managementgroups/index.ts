import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class managementGroups
	extends ArmResource<managementGroupsComponentInputs>
	implements managementGroupsComponentOutputs
{
	constructor(entity: ADKEntity, options: managementGroupsComponentInputs) {
		super(entity, options.name, "Microsoft.Management/managementGroups", "2020-10-01", options);
	}
	public readonly apiVersion: "2020-10-01";
	public readonly id: string;
	public readonly type: "Microsoft.Management/managementGroups";
}
export interface managementGroupsComponentOutputs {
	readonly apiVersion: "2020-10-01";
	readonly id: string;
	readonly type: "Microsoft.Management/managementGroups";
}
export interface managementGroupsComponentInputs {
	readonly name: string;
	readonly properties?: CreateManagementGroupPropertiesOrManagementGroupProperties;
}
export class managementGroups_settings
	extends ArmResource<managementGroups_settingsComponentInputs>
	implements managementGroups_settingsComponentOutputs
{
	constructor(entity: ADKEntity, options: managementGroups_settingsComponentInputs) {
		super(entity, options.name, "Microsoft.Management/managementGroups/settings", "2020-10-01", options);
	}
	public readonly apiVersion: "2020-10-01";
	public readonly id: string;
	public readonly type: "Microsoft.Management/managementGroups/settings";
}
export interface managementGroups_settingsComponentOutputs {
	readonly apiVersion: "2020-10-01";
	readonly id: string;
	readonly type: "Microsoft.Management/managementGroups/settings";
}
export interface managementGroups_settingsComponentInputs {
	readonly name: string;
	readonly properties?: CreateOrUpdateSettingsPropertiesOrHierarchySettingsProperties;
}
export class managementGroups_subscriptions
	extends ArmResource<managementGroups_subscriptionsComponentInputs>
	implements managementGroups_subscriptionsComponentOutputs
{
	constructor(entity: ADKEntity, options: managementGroups_subscriptionsComponentInputs) {
		super(entity, options.name, "Microsoft.Management/managementGroups/subscriptions", "2020-10-01", options);
	}
	public readonly apiVersion: "2020-10-01";
	public readonly id: string;
	public readonly type: "Microsoft.Management/managementGroups/subscriptions";
}
export interface managementGroups_subscriptionsComponentOutputs {
	readonly apiVersion: "2020-10-01";
	readonly id: string;
	readonly type: "Microsoft.Management/managementGroups/subscriptions";
}
export interface managementGroups_subscriptionsComponentInputs {
	readonly name: string;
	readonly properties?: SubscriptionUnderManagementGroupProperties;
}
export interface CreateManagementGroupChildInfoOrManagementGroupChildInfo {
	readonly children?: CreateManagementGroupChildInfoOrManagementGroupChildInfo[];
	readonly displayName?: string;
	readonly id?: string;
	readonly name?: string;
	readonly type?: "/subscriptions" | "Microsoft.Management/managementGroups";
}
export interface CreateManagementGroupDetailsOrManagementGroupDetails {
	readonly managementGroupAncestors?: string[];
	readonly parent?: CreateParentGroupInfoOrParentGroupInfo;
	readonly path?: ManagementGroupPathElement[];
	readonly updatedBy?: string;
	readonly updatedTime?: string;
	readonly version?: number;
}
export interface CreateManagementGroupPropertiesOrManagementGroupProperties {
	readonly children?: CreateManagementGroupChildInfoOrManagementGroupChildInfo[];
	readonly details?: CreateManagementGroupDetailsOrManagementGroupDetails;
	readonly displayName?: string;
	readonly tenantId?: string;
}
export interface CreateOrUpdateSettingsPropertiesOrHierarchySettingsProperties {
	readonly defaultManagementGroup?: string;
	readonly requireAuthorizationForGroupCreation?: boolean;
	readonly tenantId?: string;
}
export interface CreateParentGroupInfoOrParentGroupInfo {
	readonly displayName?: string;
	readonly id?: string;
	readonly name?: string;
}
export interface ManagementGroupPathElement {
	readonly displayName?: string;
	readonly name?: string;
}
export interface ParentGroupBagInfo {
	readonly displayName?: string;
	readonly id?: string;
	readonly name?: string;
}
export interface SubscriptionUnderManagementGroupProperties {
	readonly displayName?: string;
	readonly parent?: ParentGroupBagInfo;
	readonly state?: string;
	readonly tenant?: string;
}
export default {
	managementGroups: managementGroups,
	"managementGroups/settings": managementGroups_settings,
	"managementGroups/subscriptions": managementGroups_subscriptions,
};
