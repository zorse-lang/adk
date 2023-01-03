import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class namespaces extends ArmResource<namespacesComponentInputs> implements namespacesComponentOutputs {
	constructor(entity: ADKEntity, options: namespacesComponentInputs) {
		super(entity, options.name, "Microsoft.Relay/namespaces", "2016-07-01", options);
	}
	public readonly apiVersion: "2016-07-01";
	public readonly id: string;
	public readonly type: "Microsoft.Relay/namespaces";
}
export interface namespacesComponentOutputs {
	readonly apiVersion: "2016-07-01";
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
export class namespaces_AuthorizationRules
	extends ArmResource<namespaces_AuthorizationRulesComponentInputs>
	implements namespaces_AuthorizationRulesComponentOutputs
{
	constructor(entity: ADKEntity, options: namespaces_AuthorizationRulesComponentInputs) {
		super(entity, options.name, "Microsoft.Relay/namespaces/AuthorizationRules", "2016-07-01", options);
	}
	public readonly apiVersion: "2016-07-01";
	public readonly id: string;
	public readonly type: "Microsoft.Relay/namespaces/AuthorizationRules";
}
export interface namespaces_AuthorizationRulesComponentOutputs {
	readonly apiVersion: "2016-07-01";
	readonly id: string;
	readonly type: "Microsoft.Relay/namespaces/AuthorizationRules";
}
export interface namespaces_AuthorizationRulesComponentInputs {
	readonly name: string;
	readonly properties: AuthorizationRuleProperties;
}
export class namespaces_HybridConnections
	extends ArmResource<namespaces_HybridConnectionsComponentInputs>
	implements namespaces_HybridConnectionsComponentOutputs
{
	constructor(entity: ADKEntity, options: namespaces_HybridConnectionsComponentInputs) {
		super(entity, options.name, "Microsoft.Relay/namespaces/HybridConnections", "2016-07-01", options);
	}
	public readonly apiVersion: "2016-07-01";
	public readonly id: string;
	public readonly type: "Microsoft.Relay/namespaces/HybridConnections";
}
export interface namespaces_HybridConnectionsComponentOutputs {
	readonly apiVersion: "2016-07-01";
	readonly id: string;
	readonly type: "Microsoft.Relay/namespaces/HybridConnections";
}
export interface namespaces_HybridConnectionsComponentInputs {
	readonly name: string;
	readonly properties?: HybridConnectionProperties | undefined;
}
export class namespaces_HybridConnections_authorizationRules
	extends ArmResource<namespaces_HybridConnections_authorizationRulesComponentInputs>
	implements namespaces_HybridConnections_authorizationRulesComponentOutputs
{
	constructor(entity: ADKEntity, options: namespaces_HybridConnections_authorizationRulesComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.Relay/namespaces/HybridConnections/authorizationRules",
			"2016-07-01",
			options,
		);
	}
	public readonly apiVersion: "2016-07-01";
	public readonly id: string;
	public readonly type: "Microsoft.Relay/namespaces/HybridConnections/authorizationRules";
}
export interface namespaces_HybridConnections_authorizationRulesComponentOutputs {
	readonly apiVersion: "2016-07-01";
	readonly id: string;
	readonly type: "Microsoft.Relay/namespaces/HybridConnections/authorizationRules";
}
export interface namespaces_HybridConnections_authorizationRulesComponentInputs {
	readonly name: string;
	readonly properties: AuthorizationRuleProperties;
}
export class namespaces_WcfRelays
	extends ArmResource<namespaces_WcfRelaysComponentInputs>
	implements namespaces_WcfRelaysComponentOutputs
{
	constructor(entity: ADKEntity, options: namespaces_WcfRelaysComponentInputs) {
		super(entity, options.name, "Microsoft.Relay/namespaces/WcfRelays", "2016-07-01", options);
	}
	public readonly apiVersion: "2016-07-01";
	public readonly id: string;
	public readonly type: "Microsoft.Relay/namespaces/WcfRelays";
}
export interface namespaces_WcfRelaysComponentOutputs {
	readonly apiVersion: "2016-07-01";
	readonly id: string;
	readonly type: "Microsoft.Relay/namespaces/WcfRelays";
}
export interface namespaces_WcfRelaysComponentInputs {
	readonly name: string;
	readonly properties?: WcfRelayProperties | undefined;
}
export class namespaces_WcfRelays_authorizationRules
	extends ArmResource<namespaces_WcfRelays_authorizationRulesComponentInputs>
	implements namespaces_WcfRelays_authorizationRulesComponentOutputs
{
	constructor(entity: ADKEntity, options: namespaces_WcfRelays_authorizationRulesComponentInputs) {
		super(entity, options.name, "Microsoft.Relay/namespaces/WcfRelays/authorizationRules", "2016-07-01", options);
	}
	public readonly apiVersion: "2016-07-01";
	public readonly id: string;
	public readonly type: "Microsoft.Relay/namespaces/WcfRelays/authorizationRules";
}
export interface namespaces_WcfRelays_authorizationRulesComponentOutputs {
	readonly apiVersion: "2016-07-01";
	readonly id: string;
	readonly type: "Microsoft.Relay/namespaces/WcfRelays/authorizationRules";
}
export interface namespaces_WcfRelays_authorizationRulesComponentInputs {
	readonly name: string;
	readonly properties: AuthorizationRuleProperties;
}
export function listKeys(resource: namespaces_AuthorizationRules): AuthorizationRuleKeys {
	if (resource.apiVersion !== "2016-07-01") {
		throw new Error(`listKeys is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.Relay/namespaces/AuthorizationRules") {
		throw new Error(`listKeys is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export interface AuthorizationRuleKeys {
	readonly keyName?: string | undefined;
	readonly primaryConnectionString?: string | undefined;
	readonly primaryKey?: string | undefined;
	readonly secondaryConnectionString?: string | undefined;
	readonly secondaryKey?: string | undefined;
}
export interface AuthorizationRuleProperties {
	readonly rights: "Listen" | "Manage" | "Send"[];
}
export interface HybridConnectionProperties {
	readonly createdAt?: string | undefined;
	readonly listenerCount?: number | undefined;
	readonly requiresClientAuthorization?: boolean | undefined;
	readonly updatedAt?: string | undefined;
	readonly userMetadata?: string | undefined;
}
export interface RelayNamespaceProperties {
	readonly createdAt?: string | undefined;
	readonly metricId?: string | undefined;
	readonly provisioningState?: string | undefined;
	readonly serviceBusEndpoint?: string | undefined;
	readonly updatedAt?: string | undefined;
}
export interface Sku {
	readonly name: "Standard";
	readonly tier: "Standard";
}
export interface TrackedResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface WcfRelayProperties {
	readonly createdAt?: string | undefined;
	readonly isDynamic?: boolean | undefined;
	readonly listenerCount?: number | undefined;
	readonly relayType?: ("Http" | "NetTcp") | undefined;
	readonly requiresClientAuthorization?: boolean | undefined;
	readonly requiresTransportSecurity?: boolean | undefined;
	readonly updatedAt?: string | undefined;
	readonly userMetadata?: string | undefined;
}
export default {
	namespaces: namespaces,
	"namespaces/AuthorizationRules": namespaces_AuthorizationRules,
	"namespaces/HybridConnections": namespaces_HybridConnections,
	"namespaces/HybridConnections/authorizationRules": namespaces_HybridConnections_authorizationRules,
	"namespaces/WcfRelays": namespaces_WcfRelays,
	"namespaces/WcfRelays/authorizationRules": namespaces_WcfRelays_authorizationRules,
};
