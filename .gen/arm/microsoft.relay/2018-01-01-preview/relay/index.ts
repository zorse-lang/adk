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
	readonly properties?: RelayNamespaceProperties | undefined;
	readonly sku?: Sku | undefined;
	readonly tags?: TrackedResourceTags | undefined;
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
	readonly properties?: NetworkRuleSetProperties | undefined;
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
	readonly properties?: PrivateEndpointConnectionProperties | undefined;
	readonly tags?: TrackedResourceTags | undefined;
}
export interface NetworkRuleSetProperties {
	readonly defaultAction?: ("Allow" | "Deny") | undefined;
	readonly ipRules?: NWRuleSetIpRules[] | undefined;
}
export interface NWRuleSetIpRules {
	readonly action?: "Allow" | undefined;
	readonly ipMask?: string | undefined;
}
export interface PrivateEndpoint {
	readonly id?: string | undefined;
}
export interface PrivateEndpointConnectionProperties {
	readonly privateEndpoint?: PrivateEndpoint | undefined;
	readonly privateLinkServiceConnectionState?: PrivateLinkServiceConnectionState | undefined;
	readonly provisioningState?:
		| ("Creating" | "Deleting" | "DeletingByProxy" | "Succeeded" | "Unknown" | "Updating" | "UpdatingByProxy")
		| undefined;
}
export interface PrivateLinkServiceConnectionState {
	readonly actionRequired?: string | undefined;
	readonly description?: string | undefined;
	readonly status?: ("Approved" | "Disconnected" | "Pending" | "Rejected") | undefined;
}
export interface RelayNamespaceProperties {
	readonly createdAt?: string | undefined;
	readonly metricId?: string | undefined;
	readonly provisioningState?: ("Created" | "Deleted" | "Failed" | "Succeeded" | "Unknown") | undefined;
	readonly serviceBusEndpoint?: string | undefined;
	readonly updatedAt?: string | undefined;
}
export interface Sku {
	readonly name: "Standard";
	readonly tier?: "Standard" | undefined;
}
export interface TrackedResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export default {
	namespaces: namespaces,
	"namespaces/networkRuleSets": namespaces_networkRuleSets,
	"namespaces/privateEndpointConnections": namespaces_privateEndpointConnections,
};
