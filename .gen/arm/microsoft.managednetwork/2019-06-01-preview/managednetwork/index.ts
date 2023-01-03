import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class managedNetworks
	extends ArmResource<managedNetworksComponentInputs>
	implements managedNetworksComponentOutputs
{
	constructor(entity: ADKEntity, options: managedNetworksComponentInputs) {
		super(entity, options.name, "Microsoft.ManagedNetwork/managedNetworks", "2019-06-01-preview", options);
	}
	public readonly apiVersion: "2019-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ManagedNetwork/managedNetworks";
}
export interface managedNetworksComponentOutputs {
	readonly apiVersion: "2019-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.ManagedNetwork/managedNetworks";
}
export interface managedNetworksComponentInputs {
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: ManagedNetworkProperties | undefined;
	readonly tags?: TrackedResourceTags | undefined;
}
export class managedNetworks_managedNetworkGroups
	extends ArmResource<managedNetworks_managedNetworkGroupsComponentInputs>
	implements managedNetworks_managedNetworkGroupsComponentOutputs
{
	constructor(entity: ADKEntity, options: managedNetworks_managedNetworkGroupsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.ManagedNetwork/managedNetworks/managedNetworkGroups",
			"2019-06-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2019-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ManagedNetwork/managedNetworks/managedNetworkGroups";
}
export interface managedNetworks_managedNetworkGroupsComponentOutputs {
	readonly apiVersion: "2019-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.ManagedNetwork/managedNetworks/managedNetworkGroups";
}
export interface managedNetworks_managedNetworkGroupsComponentInputs {
	readonly kind?: "Connectivity" | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: ManagedNetworkGroupProperties | undefined;
}
export class managedNetworks_managedNetworkPeeringPolicies
	extends ArmResource<managedNetworks_managedNetworkPeeringPoliciesComponentInputs>
	implements managedNetworks_managedNetworkPeeringPoliciesComponentOutputs
{
	constructor(entity: ADKEntity, options: managedNetworks_managedNetworkPeeringPoliciesComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.ManagedNetwork/managedNetworks/managedNetworkPeeringPolicies",
			"2019-06-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2019-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ManagedNetwork/managedNetworks/managedNetworkPeeringPolicies";
}
export interface managedNetworks_managedNetworkPeeringPoliciesComponentOutputs {
	readonly apiVersion: "2019-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.ManagedNetwork/managedNetworks/managedNetworkPeeringPolicies";
}
export interface managedNetworks_managedNetworkPeeringPoliciesComponentInputs {
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: ManagedNetworkPeeringPolicyProperties | undefined;
}
export class scopeAssignments
	extends ArmResource<scopeAssignmentsComponentInputs>
	implements scopeAssignmentsComponentOutputs
{
	constructor(entity: ADKEntity, options: scopeAssignmentsComponentInputs) {
		super(entity, options.name, "Microsoft.ManagedNetwork/scopeAssignments", "2019-06-01-preview", options);
	}
	public readonly apiVersion: "2019-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ManagedNetwork/scopeAssignments";
}
export interface scopeAssignmentsComponentOutputs {
	readonly apiVersion: "2019-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.ManagedNetwork/scopeAssignments";
}
export interface scopeAssignmentsComponentInputs {
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: ScopeAssignmentProperties | undefined;
}
export interface ConnectivityCollection {
	readonly groups?: ManagedNetworkGroup[] | undefined;
	readonly peerings?: ManagedNetworkPeeringPolicy[] | undefined;
}
export interface ManagedNetworkGroup {
	readonly id?: string | undefined;
	readonly kind?: "Connectivity" | undefined;
	readonly location?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: ManagedNetworkGroupProperties | undefined;
	readonly type?: string | undefined;
}
export interface ManagedNetworkGroupProperties {
	readonly etag?: string | undefined;
	readonly managementGroups?: ResourceId[] | undefined;
	readonly provisioningState?: ("Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly subnets?: ResourceId[] | undefined;
	readonly subscriptions?: ResourceId[] | undefined;
	readonly virtualNetworks?: ResourceId[] | undefined;
}
export interface ManagedNetworkPeeringPolicy {
	readonly id?: string | undefined;
	readonly location?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: ManagedNetworkPeeringPolicyProperties | undefined;
	readonly type?: string | undefined;
}
export interface ManagedNetworkPeeringPolicyProperties {
	readonly etag?: string | undefined;
	readonly hub?: ResourceId | undefined;
	readonly mesh?: ResourceId[] | undefined;
	readonly provisioningState?: ("Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly spokes?: ResourceId[] | undefined;
	readonly type: "HubAndSpokeTopology" | "MeshTopology";
}
export interface ManagedNetworkProperties {
	readonly connectivity?: ConnectivityCollection | undefined;
	readonly etag?: string | undefined;
	readonly provisioningState?: ("Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly scope?: Scope | undefined;
}
export interface ResourceId {
	readonly id?: string | undefined;
}
export interface Scope {
	readonly managementGroups?: ResourceId[] | undefined;
	readonly subnets?: ResourceId[] | undefined;
	readonly subscriptions?: ResourceId[] | undefined;
	readonly virtualNetworks?: ResourceId[] | undefined;
}
export interface ScopeAssignmentProperties {
	readonly assignedManagedNetwork?: string | undefined;
	readonly etag?: string | undefined;
	readonly provisioningState?: ("Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
}
export interface TrackedResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export default {
	managedNetworks: managedNetworks,
	"managedNetworks/managedNetworkGroups": managedNetworks_managedNetworkGroups,
	"managedNetworks/managedNetworkPeeringPolicies": managedNetworks_managedNetworkPeeringPolicies,
	scopeAssignments: scopeAssignments,
};
