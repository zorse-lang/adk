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
	readonly displayName?: string;
	readonly name: string;
	readonly parentId?: string;
	readonly properties?: ManagementGroupProperties;
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
	readonly childId?: string;
	readonly children?: ManagementGroupChildInfo[];
	readonly childType?: "ManagementGroup" | "Subscription";
	readonly displayName?: string;
}
export interface ManagementGroupDetails {
	readonly parent?: ParentGroupInfo;
	readonly updatedBy?: string;
	readonly updatedTime?: string;
	readonly version?: number;
}
export interface ManagementGroupProperties {
	readonly children?: ManagementGroupChildInfo[];
	readonly details?: ManagementGroupDetails;
	readonly displayName?: string;
	readonly tenantId?: string;
}
export interface ParentGroupInfo {
	readonly displayName?: string;
	readonly parentId?: string;
}
export default {
	managementGroups: managementGroups,
	"managementGroups/subscriptions": managementGroups_subscriptions,
};
