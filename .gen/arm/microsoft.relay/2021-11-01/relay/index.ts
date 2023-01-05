import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class namespaces extends ArmResource<namespacesComponentInputs> implements namespacesComponentOutputs {
	constructor(entity: ADKEntity, options: namespacesComponentInputs) {
		super(entity, options.name, "Microsoft.Relay/namespaces", "2021-11-01", options);
	}
	public readonly apiVersion: "2021-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Relay/namespaces";
}
export interface namespacesComponentOutputs {
	readonly apiVersion: "2021-11-01";
	readonly id: string;
	readonly type: "Microsoft.Relay/namespaces";
}
export interface namespacesComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: RelayNamespaceProperties;
	readonly sku?: Sku;
	readonly systemData?: SystemData;
	readonly tags?: TrackedResourceTags;
}
export class namespaces_authorizationRules
	extends ArmResource<namespaces_authorizationRulesComponentInputs>
	implements namespaces_authorizationRulesComponentOutputs
{
	constructor(entity: ADKEntity, options: namespaces_authorizationRulesComponentInputs) {
		super(entity, options.name, "Microsoft.Relay/namespaces/authorizationRules", "2021-11-01", options);
	}
	public readonly apiVersion: "2021-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Relay/namespaces/authorizationRules";
}
export interface namespaces_authorizationRulesComponentOutputs {
	readonly apiVersion: "2021-11-01";
	readonly id: string;
	readonly type: "Microsoft.Relay/namespaces/authorizationRules";
}
export interface namespaces_authorizationRulesComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly properties?: AuthorizationRuleProperties;
	readonly systemData?: SystemData;
}
export class namespaces_hybridConnections
	extends ArmResource<namespaces_hybridConnectionsComponentInputs>
	implements namespaces_hybridConnectionsComponentOutputs
{
	constructor(entity: ADKEntity, options: namespaces_hybridConnectionsComponentInputs) {
		super(entity, options.name, "Microsoft.Relay/namespaces/hybridConnections", "2021-11-01", options);
	}
	public readonly apiVersion: "2021-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Relay/namespaces/hybridConnections";
}
export interface namespaces_hybridConnectionsComponentOutputs {
	readonly apiVersion: "2021-11-01";
	readonly id: string;
	readonly type: "Microsoft.Relay/namespaces/hybridConnections";
}
export interface namespaces_hybridConnectionsComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly properties?: HybridConnectionProperties;
	readonly systemData?: SystemData;
}
export class namespaces_hybridConnections_authorizationRules
	extends ArmResource<namespaces_hybridConnections_authorizationRulesComponentInputs>
	implements namespaces_hybridConnections_authorizationRulesComponentOutputs
{
	constructor(entity: ADKEntity, options: namespaces_hybridConnections_authorizationRulesComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.Relay/namespaces/hybridConnections/authorizationRules",
			"2021-11-01",
			options,
		);
	}
	public readonly apiVersion: "2021-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Relay/namespaces/hybridConnections/authorizationRules";
}
export interface namespaces_hybridConnections_authorizationRulesComponentOutputs {
	readonly apiVersion: "2021-11-01";
	readonly id: string;
	readonly type: "Microsoft.Relay/namespaces/hybridConnections/authorizationRules";
}
export interface namespaces_hybridConnections_authorizationRulesComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly properties?: AuthorizationRuleProperties;
	readonly systemData?: SystemData;
}
export class namespaces_networkRuleSets
	extends ArmResource<namespaces_networkRuleSetsComponentInputs>
	implements namespaces_networkRuleSetsComponentOutputs
{
	constructor(entity: ADKEntity, options: namespaces_networkRuleSetsComponentInputs) {
		super(entity, options.name, "Microsoft.Relay/namespaces/networkRuleSets", "2021-11-01", options);
	}
	public readonly apiVersion: "2021-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Relay/namespaces/networkRuleSets";
}
export interface namespaces_networkRuleSetsComponentOutputs {
	readonly apiVersion: "2021-11-01";
	readonly id: string;
	readonly type: "Microsoft.Relay/namespaces/networkRuleSets";
}
export interface namespaces_networkRuleSetsComponentInputs {
	readonly name: string;
	readonly properties?: NetworkRuleSetProperties;
	readonly systemData?: SystemData;
}
export class namespaces_privateEndpointConnections
	extends ArmResource<namespaces_privateEndpointConnectionsComponentInputs>
	implements namespaces_privateEndpointConnectionsComponentOutputs
{
	constructor(entity: ADKEntity, options: namespaces_privateEndpointConnectionsComponentInputs) {
		super(entity, options.name, "Microsoft.Relay/namespaces/privateEndpointConnections", "2021-11-01", options);
	}
	public readonly apiVersion: "2021-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Relay/namespaces/privateEndpointConnections";
}
export interface namespaces_privateEndpointConnectionsComponentOutputs {
	readonly apiVersion: "2021-11-01";
	readonly id: string;
	readonly type: "Microsoft.Relay/namespaces/privateEndpointConnections";
}
export interface namespaces_privateEndpointConnectionsComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly properties?: PrivateEndpointConnectionProperties;
	readonly systemData?: SystemData;
}
export class namespaces_wcfRelays
	extends ArmResource<namespaces_wcfRelaysComponentInputs>
	implements namespaces_wcfRelaysComponentOutputs
{
	constructor(entity: ADKEntity, options: namespaces_wcfRelaysComponentInputs) {
		super(entity, options.name, "Microsoft.Relay/namespaces/wcfRelays", "2021-11-01", options);
	}
	public readonly apiVersion: "2021-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Relay/namespaces/wcfRelays";
}
export interface namespaces_wcfRelaysComponentOutputs {
	readonly apiVersion: "2021-11-01";
	readonly id: string;
	readonly type: "Microsoft.Relay/namespaces/wcfRelays";
}
export interface namespaces_wcfRelaysComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly properties?: WcfRelayProperties;
	readonly systemData?: SystemData;
}
export class namespaces_wcfRelays_authorizationRules
	extends ArmResource<namespaces_wcfRelays_authorizationRulesComponentInputs>
	implements namespaces_wcfRelays_authorizationRulesComponentOutputs
{
	constructor(entity: ADKEntity, options: namespaces_wcfRelays_authorizationRulesComponentInputs) {
		super(entity, options.name, "Microsoft.Relay/namespaces/wcfRelays/authorizationRules", "2021-11-01", options);
	}
	public readonly apiVersion: "2021-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Relay/namespaces/wcfRelays/authorizationRules";
}
export interface namespaces_wcfRelays_authorizationRulesComponentOutputs {
	readonly apiVersion: "2021-11-01";
	readonly id: string;
	readonly type: "Microsoft.Relay/namespaces/wcfRelays/authorizationRules";
}
export interface namespaces_wcfRelays_authorizationRulesComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly properties?: AuthorizationRuleProperties;
	readonly systemData?: SystemData;
}
export function listKeys(resource: namespaces_authorizationRules): AccessKeys {
	if (resource.apiVersion !== "2021-11-01") {
		throw new Error(`listKeys is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.Relay/namespaces/authorizationRules") {
		throw new Error(`listKeys is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export interface AccessKeys {
	readonly keyName?: string;
	readonly primaryConnectionString?: string;
	readonly primaryKey?: string;
	readonly secondaryConnectionString?: string;
	readonly secondaryKey?: string;
}
export interface AuthorizationRuleProperties {
	readonly rights: "Listen" | "Manage" | "Send"[];
}
export interface ConnectionState {
	readonly description?: string;
	readonly status?: "Approved" | "Disconnected" | "Pending" | "Rejected";
}
export interface HybridConnectionProperties {
	readonly createdAt?: string;
	readonly listenerCount?: number;
	readonly requiresClientAuthorization?: boolean;
	readonly updatedAt?: string;
	readonly userMetadata?: string;
}
export interface NetworkRuleSetProperties {
	readonly defaultAction?: "Allow" | "Deny";
	readonly ipRules?: NWRuleSetIpRules[];
	readonly publicNetworkAccess?: "Disabled" | "Enabled" | "SecuredByPerimeter";
}
export interface NWRuleSetIpRules {
	readonly action?: "Allow";
	readonly ipMask?: string;
}
export interface PrivateEndpoint {
	readonly id?: string;
}
export interface PrivateEndpointConnection {
	readonly id?: string;
	readonly location?: string;
	readonly name?: string;
	readonly properties?: PrivateEndpointConnectionProperties;
	readonly systemData?: SystemData;
	readonly type?: string;
}
export interface PrivateEndpointConnectionProperties {
	readonly privateEndpoint?: PrivateEndpoint;
	readonly privateLinkServiceConnectionState?: ConnectionState;
	readonly provisioningState?: "Canceled" | "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating";
}
export interface RelayNamespaceProperties {
	readonly createdAt?: string;
	readonly metricId?: string;
	readonly privateEndpointConnections?: PrivateEndpointConnection[];
	readonly provisioningState?: string;
	readonly publicNetworkAccess?: "Disabled" | "Enabled" | "SecuredByPerimeter";
	readonly serviceBusEndpoint?: string;
	readonly status?: string;
	readonly updatedAt?: string;
}
export interface Sku {
	readonly name: "Standard";
	readonly tier?: "Standard";
}
export interface SystemData {
	readonly createdAt?: string;
	readonly createdBy?: string;
	readonly createdByType?: "Application" | "Key" | "ManagedIdentity" | "User";
	readonly lastModifiedAt?: string;
	readonly lastModifiedBy?: string;
	readonly lastModifiedByType?: "Application" | "Key" | "ManagedIdentity" | "User";
}
export interface TrackedResourceTags {
	readonly [key: string]: string;
}
export interface WcfRelayProperties {
	readonly createdAt?: string;
	readonly isDynamic?: boolean;
	readonly listenerCount?: number;
	readonly relayType?: "Http";
	readonly requiresClientAuthorization?: boolean;
	readonly requiresTransportSecurity?: boolean;
	readonly updatedAt?: string;
	readonly userMetadata?: string;
}
export default {
	namespaces: namespaces,
	"namespaces/authorizationRules": namespaces_authorizationRules,
	"namespaces/hybridConnections": namespaces_hybridConnections,
	"namespaces/hybridConnections/authorizationRules": namespaces_hybridConnections_authorizationRules,
	"namespaces/networkRuleSets": namespaces_networkRuleSets,
	"namespaces/privateEndpointConnections": namespaces_privateEndpointConnections,
	"namespaces/wcfRelays": namespaces_wcfRelays,
	"namespaces/wcfRelays/authorizationRules": namespaces_wcfRelays_authorizationRules,
};
