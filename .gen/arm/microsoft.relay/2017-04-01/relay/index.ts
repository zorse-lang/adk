import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class namespaces extends ArmResource<namespacesComponentInputs> implements namespacesComponentOutputs {
	constructor(entity: ADKEntity, options: namespacesComponentInputs) {
		super(entity, options.name, "Microsoft.Relay/namespaces", "2017-04-01", options);
	}
	public readonly apiVersion: "2017-04-01";
	public readonly id: string;
	public readonly type: "Microsoft.Relay/namespaces";
}
export interface namespacesComponentOutputs {
	readonly apiVersion: "2017-04-01";
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
export class namespaces_authorizationRules
	extends ArmResource<namespaces_authorizationRulesComponentInputs>
	implements namespaces_authorizationRulesComponentOutputs
{
	constructor(entity: ADKEntity, options: namespaces_authorizationRulesComponentInputs) {
		super(entity, options.name, "Microsoft.Relay/namespaces/authorizationRules", "2017-04-01", options);
	}
	public readonly apiVersion: "2017-04-01";
	public readonly id: string;
	public readonly type: "Microsoft.Relay/namespaces/authorizationRules";
}
export interface namespaces_authorizationRulesComponentOutputs {
	readonly apiVersion: "2017-04-01";
	readonly id: string;
	readonly type: "Microsoft.Relay/namespaces/authorizationRules";
}
export interface namespaces_authorizationRulesComponentInputs {
	readonly name: string;
	readonly properties: AuthorizationRuleProperties;
}
export class namespaces_hybridConnections
	extends ArmResource<namespaces_hybridConnectionsComponentInputs>
	implements namespaces_hybridConnectionsComponentOutputs
{
	constructor(entity: ADKEntity, options: namespaces_hybridConnectionsComponentInputs) {
		super(entity, options.name, "Microsoft.Relay/namespaces/hybridConnections", "2017-04-01", options);
	}
	public readonly apiVersion: "2017-04-01";
	public readonly id: string;
	public readonly type: "Microsoft.Relay/namespaces/hybridConnections";
}
export interface namespaces_hybridConnectionsComponentOutputs {
	readonly apiVersion: "2017-04-01";
	readonly id: string;
	readonly type: "Microsoft.Relay/namespaces/hybridConnections";
}
export interface namespaces_hybridConnectionsComponentInputs {
	readonly name: string;
	readonly properties?: HybridConnectionProperties;
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
			"2017-04-01",
			options,
		);
	}
	public readonly apiVersion: "2017-04-01";
	public readonly id: string;
	public readonly type: "Microsoft.Relay/namespaces/hybridConnections/authorizationRules";
}
export interface namespaces_hybridConnections_authorizationRulesComponentOutputs {
	readonly apiVersion: "2017-04-01";
	readonly id: string;
	readonly type: "Microsoft.Relay/namespaces/hybridConnections/authorizationRules";
}
export interface namespaces_hybridConnections_authorizationRulesComponentInputs {
	readonly name: string;
	readonly properties: AuthorizationRuleProperties;
}
export class namespaces_wcfRelays
	extends ArmResource<namespaces_wcfRelaysComponentInputs>
	implements namespaces_wcfRelaysComponentOutputs
{
	constructor(entity: ADKEntity, options: namespaces_wcfRelaysComponentInputs) {
		super(entity, options.name, "Microsoft.Relay/namespaces/wcfRelays", "2017-04-01", options);
	}
	public readonly apiVersion: "2017-04-01";
	public readonly id: string;
	public readonly type: "Microsoft.Relay/namespaces/wcfRelays";
}
export interface namespaces_wcfRelaysComponentOutputs {
	readonly apiVersion: "2017-04-01";
	readonly id: string;
	readonly type: "Microsoft.Relay/namespaces/wcfRelays";
}
export interface namespaces_wcfRelaysComponentInputs {
	readonly name: string;
	readonly properties?: WcfRelayProperties;
}
export class namespaces_wcfRelays_authorizationRules
	extends ArmResource<namespaces_wcfRelays_authorizationRulesComponentInputs>
	implements namespaces_wcfRelays_authorizationRulesComponentOutputs
{
	constructor(entity: ADKEntity, options: namespaces_wcfRelays_authorizationRulesComponentInputs) {
		super(entity, options.name, "Microsoft.Relay/namespaces/wcfRelays/authorizationRules", "2017-04-01", options);
	}
	public readonly apiVersion: "2017-04-01";
	public readonly id: string;
	public readonly type: "Microsoft.Relay/namespaces/wcfRelays/authorizationRules";
}
export interface namespaces_wcfRelays_authorizationRulesComponentOutputs {
	readonly apiVersion: "2017-04-01";
	readonly id: string;
	readonly type: "Microsoft.Relay/namespaces/wcfRelays/authorizationRules";
}
export interface namespaces_wcfRelays_authorizationRulesComponentInputs {
	readonly name: string;
	readonly properties: AuthorizationRuleProperties;
}
export function listKeys(resource: namespaces_authorizationRules): AccessKeys {
	if (resource.apiVersion !== "2017-04-01") {
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
	readonly rights: "Listen" | "Manage"[];
}
export interface HybridConnectionProperties {
	readonly createdAt?: string;
	readonly listenerCount?: number;
	readonly requiresClientAuthorization?: boolean;
	readonly updatedAt?: string;
	readonly userMetadata?: string;
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
	"namespaces/wcfRelays": namespaces_wcfRelays,
	"namespaces/wcfRelays/authorizationRules": namespaces_wcfRelays_authorizationRules,
};
