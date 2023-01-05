import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class namespaces extends ArmResource<namespacesComponentInputs> implements namespacesComponentOutputs {
	constructor(entity: ADKEntity, options: namespacesComponentInputs) {
		super(entity, options.name, "Microsoft.Relay/namespaces", "2018-01-01-preview", options);
	}
	public readonly apiVersion: "2018-01-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Relay/namespaces";
}
export interface namespacesComponentOutputs {
	readonly apiVersion: "2018-01-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Relay/namespaces";
}
export interface namespacesComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: RelayNamespaceProperties;
	readonly sku?: Sku;
	readonly tags?: TrackedResourceTags;
}
export class namespaces_networkRuleSets
	extends ArmResource<namespaces_networkRuleSetsComponentInputs>
	implements namespaces_networkRuleSetsComponentOutputs
{
	constructor(entity: ADKEntity, options: namespaces_networkRuleSetsComponentInputs) {
		super(entity, options.name, "Microsoft.Relay/namespaces/networkRuleSets", "2018-01-01-preview", options);
	}
	public readonly apiVersion: "2018-01-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Relay/namespaces/networkRuleSets";
}
export interface namespaces_networkRuleSetsComponentOutputs {
	readonly apiVersion: "2018-01-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Relay/namespaces/networkRuleSets";
}
export interface namespaces_networkRuleSetsComponentInputs {
	readonly name: string;
	readonly properties?: NetworkRuleSetProperties;
}
export class namespaces_privateEndpointConnections
	extends ArmResource<namespaces_privateEndpointConnectionsComponentInputs>
	implements namespaces_privateEndpointConnectionsComponentOutputs
{
	constructor(entity: ADKEntity, options: namespaces_privateEndpointConnectionsComponentInputs) {
		super(entity, options.name, "Microsoft.Relay/namespaces/privateEndpointConnections", "2018-01-01-preview", options);
	}
	public readonly apiVersion: "2018-01-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Relay/namespaces/privateEndpointConnections";
}
export interface namespaces_privateEndpointConnectionsComponentOutputs {
	readonly apiVersion: "2018-01-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Relay/namespaces/privateEndpointConnections";
}
export interface namespaces_privateEndpointConnectionsComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: PrivateEndpointConnectionProperties;
	readonly tags?: TrackedResourceTags;
}
export interface NetworkRuleSetProperties {
	readonly defaultAction?: "Allow" | "Deny";
	readonly ipRules?: NWRuleSetIpRules[];
}
export interface NWRuleSetIpRules {
	readonly action?: "Allow";
	readonly ipMask?: string;
}
export interface PrivateEndpoint {
	readonly id?: string;
}
export interface PrivateEndpointConnectionProperties {
	readonly privateEndpoint?: PrivateEndpoint;
	readonly privateLinkServiceConnectionState?: PrivateLinkServiceConnectionState;
	readonly provisioningState?:
		| "Creating"
		| "Deleting"
		| "DeletingByProxy"
		| "Succeeded"
		| "Unknown"
		| "Updating"
		| "UpdatingByProxy";
}
export interface PrivateLinkServiceConnectionState {
	readonly actionRequired?: string;
	readonly description?: string;
	readonly status?: "Approved" | "Disconnected" | "Pending" | "Rejected";
}
export interface RelayNamespaceProperties {
	readonly createdAt?: string;
	readonly metricId?: string;
	readonly provisioningState?: "Created" | "Deleted" | "Failed" | "Succeeded" | "Unknown";
	readonly serviceBusEndpoint?: string;
	readonly updatedAt?: string;
}
export interface Sku {
	readonly name: "Standard";
	readonly tier?: "Standard";
}
export interface TrackedResourceTags {
	readonly [key: string]: string;
}
export default {
	namespaces: namespaces,
	"namespaces/networkRuleSets": namespaces_networkRuleSets,
	"namespaces/privateEndpointConnections": namespaces_privateEndpointConnections,
};
