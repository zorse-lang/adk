import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class managementGroups
	extends ArmResource<managementGroupsComponentInputs>
	implements managementGroupsComponentOutputs
{
	constructor(entity: ADKEntity, options: managementGroupsComponentInputs) {
		super(entity, options.name, "Microsoft.Management/managementGroups", "2018-03-01-preview", options);
	}
	public readonly apiVersion: "2018-03-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Management/managementGroups";
}
export interface managementGroupsComponentOutputs {
	readonly apiVersion: "2018-03-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Management/managementGroups";
}
export interface managementGroupsComponentInputs {
	readonly name: string;
	readonly properties?: CreateManagementGroupPropertiesOrManagementGroupProperties | undefined;
}
export class managementGroups_subscriptions
	extends ArmResource<managementGroups_subscriptionsComponentInputs>
	implements managementGroups_subscriptionsComponentOutputs
{
	constructor(entity: ADKEntity, options: managementGroups_subscriptionsComponentInputs) {
		super(entity, options.name, "Microsoft.Management/managementGroups/subscriptions", "2018-03-01-preview", options);
	}
	public readonly apiVersion: "2018-03-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Management/managementGroups/subscriptions";
}
export interface managementGroups_subscriptionsComponentOutputs {
	readonly apiVersion: "2018-03-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Management/managementGroups/subscriptions";
}
export interface managementGroups_subscriptionsComponentInputs {
	readonly name: string;
}
export interface CreateManagementGroupChildInfoOrManagementGroupChildInfo {
	readonly children?: CreateManagementGroupChildInfoOrManagementGroupChildInfo[] | undefined;
	readonly displayName?: string | undefined;
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly roles?: string[] | undefined;
	readonly type?: ("/providers/Microsoft.Management/managementGroups" | "/subscriptions") | undefined;
}
export interface CreateManagementGroupDetailsOrManagementGroupDetails {
	readonly parent?: CreateParentGroupInfoOrParentGroupInfo | undefined;
	readonly updatedBy?: string | undefined;
	readonly updatedTime?: string | undefined;
	readonly version?: number | undefined;
}
export interface CreateManagementGroupPropertiesOrManagementGroupProperties {
	readonly children?: CreateManagementGroupChildInfoOrManagementGroupChildInfo[] | undefined;
	readonly details?: CreateManagementGroupDetailsOrManagementGroupDetails | undefined;
	readonly displayName?: string | undefined;
	readonly roles?: string[] | undefined;
	readonly tenantId?: string | undefined;
}
export interface CreateParentGroupInfoOrParentGroupInfo {
	readonly displayName?: string | undefined;
	readonly id?: string | undefined;
	readonly name?: string | undefined;
}
export default {
	managementGroups: managementGroups,
	"managementGroups/subscriptions": managementGroups_subscriptions,
};