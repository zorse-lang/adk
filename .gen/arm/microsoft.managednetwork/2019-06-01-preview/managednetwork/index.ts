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
	readonly location?: string;
	readonly name: string;
	readonly properties?: ManagedNetworkProperties;
	readonly tags?: TrackedResourceTags;
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
	readonly kind?: "Connectivity";
	readonly location?: string;
	readonly name: string;
	readonly properties?: ManagedNetworkGroupProperties;
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
	readonly location?: string;
	readonly name: string;
	readonly properties?: ManagedNetworkPeeringPolicyProperties;
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
	readonly location?: string;
	readonly name: string;
	readonly properties?: ScopeAssignmentProperties;
}
export interface ConnectivityCollection {
	readonly groups?: ManagedNetworkGroup[];
	readonly peerings?: ManagedNetworkPeeringPolicy[];
}
export interface ManagedNetworkGroup {
	readonly id?: string;
	readonly kind?: "Connectivity";
	readonly location?: string;
	readonly name?: string;
	readonly properties?: ManagedNetworkGroupProperties;
	readonly type?: string;
}
export interface ManagedNetworkGroupProperties {
	readonly etag?: string;
	readonly managementGroups?: ResourceId[];
	readonly provisioningState?: "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly subnets?: ResourceId[];
	readonly subscriptions?: ResourceId[];
	readonly virtualNetworks?: ResourceId[];
}
export interface ManagedNetworkPeeringPolicy {
	readonly id?: string;
	readonly location?: string;
	readonly name?: string;
	readonly properties?: ManagedNetworkPeeringPolicyProperties;
	readonly type?: string;
}
export interface ManagedNetworkPeeringPolicyProperties {
	readonly etag?: string;
	readonly hub?: ResourceId;
	readonly mesh?: ResourceId[];
	readonly provisioningState?: "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly spokes?: ResourceId[];
	readonly type: "HubAndSpokeTopology" | "MeshTopology";
}
export interface ManagedNetworkProperties {
	readonly connectivity?: ConnectivityCollection;
	readonly etag?: string;
	readonly provisioningState?: "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly scope?: Scope;
}
export interface ResourceId {
	readonly id?: string;
}
export interface Scope {
	readonly managementGroups?: ResourceId[];
	readonly subnets?: ResourceId[];
	readonly subscriptions?: ResourceId[];
	readonly virtualNetworks?: ResourceId[];
}
export interface ScopeAssignmentProperties {
	readonly assignedManagedNetwork?: string;
	readonly etag?: string;
	readonly provisioningState?: "Deleting" | "Failed" | "Succeeded" | "Updating";
}
export interface TrackedResourceTags {
	readonly [key: string]: string;
}
export default {
	managedNetworks: managedNetworks,
	"managedNetworks/managedNetworkGroups": managedNetworks_managedNetworkGroups,
	"managedNetworks/managedNetworkPeeringPolicies": managedNetworks_managedNetworkPeeringPolicies,
	scopeAssignments: scopeAssignments,
};
