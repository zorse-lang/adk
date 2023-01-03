import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class managementGroups
	extends ArmResource<managementGroupsComponentInputs>
	implements managementGroupsComponentOutputs
{
	constructor(entity: ADKEntity, options: managementGroupsComponentInputs) {
		super(entity, options.name, "Microsoft.Management/managementGroups", "2017-11-01-preview", options);
	}
	public readonly apiVersion: "2017-11-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Management/managementGroups";
}
export interface managementGroupsComponentOutputs {
	readonly apiVersion: "2017-11-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Management/managementGroups";
}
export interface managementGroupsComponentInputs {
	readonly displayName?: string | undefined;
	readonly name: string;
	readonly parentId?: string | undefined;
	readonly properties?: ManagementGroupProperties | undefined;
}
export class managementGroups_subscriptions
	extends ArmResource<managementGroups_subscriptionsComponentInputs>
	implements managementGroups_subscriptionsComponentOutputs
{
	constructor(entity: ADKEntity, options: managementGroups_subscriptionsComponentInputs) {
		super(entity, options.name, "Microsoft.Management/managementGroups/subscriptions", "2017-11-01-preview", options);
	}
	public readonly apiVersion: "2017-11-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Management/managementGroups/subscriptions";
}
export interface managementGroups_subscriptionsComponentOutputs {
	readonly apiVersion: "2017-11-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Management/managementGroups/subscriptions";
}
export interface managementGroups_subscriptionsComponentInputs {
	readonly name: string;
}
export interface ManagementGroupChildInfo {
	readonly childId?: string | undefined;
	readonly children?: ManagementGroupChildInfo[] | undefined;
	readonly childType?: ("ManagementGroup" | "Subscription") | undefined;
	readonly displayName?: string | undefined;
}
export interface ManagementGroupDetails {
	readonly parent?: ParentGroupInfo | undefined;
	readonly updatedBy?: string | undefined;
	readonly updatedTime?: string | undefined;
	readonly version?: number | undefined;
}
export interface ManagementGroupProperties {
	readonly children?: ManagementGroupChildInfo[] | undefined;
	readonly details?: ManagementGroupDetails | undefined;
	readonly displayName?: string | undefined;
	readonly tenantId?: string | undefined;
}
export interface ParentGroupInfo {
	readonly displayName?: string | undefined;
	readonly parentId?: string | undefined;
}
export default {
	managementGroups: managementGroups,
	"managementGroups/subscriptions": managementGroups_subscriptions,
};
