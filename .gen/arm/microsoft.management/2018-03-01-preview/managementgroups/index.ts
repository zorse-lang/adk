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
	readonly properties?: CreateManagementGroupPropertiesOrManagementGroupProperties;
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
	readonly children?: CreateManagementGroupChildInfoOrManagementGroupChildInfo[];
	readonly displayName?: string;
	readonly id?: string;
	readonly name?: string;
	readonly roles?: string[];
	readonly type?: "/providers/Microsoft.Management/managementGroups" | "/subscriptions";
}
export interface CreateManagementGroupDetailsOrManagementGroupDetails {
	readonly parent?: CreateParentGroupInfoOrParentGroupInfo;
	readonly updatedBy?: string;
	readonly updatedTime?: string;
	readonly version?: number;
}
export interface CreateManagementGroupPropertiesOrManagementGroupProperties {
	readonly children?: CreateManagementGroupChildInfoOrManagementGroupChildInfo[];
	readonly details?: CreateManagementGroupDetailsOrManagementGroupDetails;
	readonly displayName?: string;
	readonly roles?: string[];
	readonly tenantId?: string;
}
export interface CreateParentGroupInfoOrParentGroupInfo {
	readonly displayName?: string;
	readonly id?: string;
	readonly name?: string;
}
export default {
	managementGroups: managementGroups,
	"managementGroups/subscriptions": managementGroups_subscriptions,
};
