import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class clusters extends ArmResource<clustersComponentInputs> implements clustersComponentOutputs {
	constructor(entity: ADKEntity, options: clustersComponentInputs) {
		super(entity, options.name, "Microsoft.EventHub/clusters", "2018-01-01-preview", options);
	}
	public readonly apiVersion: "2018-01-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.EventHub/clusters";
}
export interface clustersComponentOutputs {
	readonly apiVersion: "2018-01-01-preview";
	readonly id: string;
	readonly type: "Microsoft.EventHub/clusters";
}
export interface clustersComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly properties?: ClusterProperties;
	readonly sku?: ClusterSku;
	readonly tags?: TrackedResourceTags;
}
export class namespaces extends ArmResource<namespacesComponentInputs> implements namespacesComponentOutputs {
	constructor(entity: ADKEntity, options: namespacesComponentInputs) {
		super(entity, options.name, "Microsoft.EventHub/namespaces", "2018-01-01-preview", options);
	}
	public readonly apiVersion: "2018-01-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.EventHub/namespaces";
}
export interface namespacesComponentOutputs {
	readonly apiVersion: "2018-01-01-preview";
	readonly id: string;
	readonly type: "Microsoft.EventHub/namespaces";
}
export interface namespacesComponentInputs {
	readonly identity?: Identity;
	readonly location?: string;
	readonly name: string;
	readonly properties?: EHNamespaceProperties;
	readonly sku?: Sku;
	readonly tags?: TrackedResourceTags;
}
export class namespaces_authorizationRules
	extends ArmResource<namespaces_authorizationRulesComponentInputs>
	implements namespaces_authorizationRulesComponentOutputs
{
	constructor(entity: ADKEntity, options: namespaces_authorizationRulesComponentInputs) {
		super(entity, options.name, "Microsoft.EventHub/namespaces/authorizationRules", "2018-01-01-preview", options);
	}
	public readonly apiVersion: "2018-01-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.EventHub/namespaces/authorizationRules";
}
export interface namespaces_authorizationRulesComponentOutputs {
	readonly apiVersion: "2018-01-01-preview";
	readonly id: string;
	readonly type: "Microsoft.EventHub/namespaces/authorizationRules";
}
export interface namespaces_authorizationRulesComponentInputs {
	readonly name: string;
	readonly properties?: AuthorizationRuleProperties;
}
export class namespaces_disasterRecoveryConfigs
	extends ArmResource<namespaces_disasterRecoveryConfigsComponentInputs>
	implements namespaces_disasterRecoveryConfigsComponentOutputs
{
	constructor(entity: ADKEntity, options: namespaces_disasterRecoveryConfigsComponentInputs) {
		super(entity, options.name, "Microsoft.EventHub/namespaces/disasterRecoveryConfigs", "2018-01-01-preview", options);
	}
	public readonly apiVersion: "2018-01-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.EventHub/namespaces/disasterRecoveryConfigs";
}
export interface namespaces_disasterRecoveryConfigsComponentOutputs {
	readonly apiVersion: "2018-01-01-preview";
	readonly id: string;
	readonly type: "Microsoft.EventHub/namespaces/disasterRecoveryConfigs";
}
export interface namespaces_disasterRecoveryConfigsComponentInputs {
	readonly name: string;
	readonly properties?: ArmDisasterRecoveryProperties;
}
export class namespaces_disasterRecoveryConfigs_authorizationRules
	extends ArmResource<namespaces_disasterRecoveryConfigs_authorizationRulesComponentInputs>
	implements namespaces_disasterRecoveryConfigs_authorizationRulesComponentOutputs
{
	constructor(entity: ADKEntity, options: namespaces_disasterRecoveryConfigs_authorizationRulesComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.EventHub/namespaces/disasterRecoveryConfigs/authorizationRules",
			"2018-01-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2018-01-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.EventHub/namespaces/disasterRecoveryConfigs/authorizationRules";
}
export interface namespaces_disasterRecoveryConfigs_authorizationRulesComponentOutputs {
	readonly apiVersion: "2018-01-01-preview";
	readonly id: string;
	readonly type: "Microsoft.EventHub/namespaces/disasterRecoveryConfigs/authorizationRules";
}
export interface namespaces_disasterRecoveryConfigs_authorizationRulesComponentInputs {
	readonly name: string;
	readonly properties?: AuthorizationRuleProperties;
}
export class namespaces_eventhubs
	extends ArmResource<namespaces_eventhubsComponentInputs>
	implements namespaces_eventhubsComponentOutputs
{
	constructor(entity: ADKEntity, options: namespaces_eventhubsComponentInputs) {
		super(entity, options.name, "Microsoft.EventHub/namespaces/eventhubs", "2018-01-01-preview", options);
	}
	public readonly apiVersion: "2018-01-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.EventHub/namespaces/eventhubs";
}
export interface namespaces_eventhubsComponentOutputs {
	readonly apiVersion: "2018-01-01-preview";
	readonly id: string;
	readonly type: "Microsoft.EventHub/namespaces/eventhubs";
}
export interface namespaces_eventhubsComponentInputs {
	readonly name: string;
	readonly properties?: EventhubProperties;
}
export class namespaces_eventhubs_authorizationRules
	extends ArmResource<namespaces_eventhubs_authorizationRulesComponentInputs>
	implements namespaces_eventhubs_authorizationRulesComponentOutputs
{
	constructor(entity: ADKEntity, options: namespaces_eventhubs_authorizationRulesComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.EventHub/namespaces/eventhubs/authorizationRules",
			"2018-01-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2018-01-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.EventHub/namespaces/eventhubs/authorizationRules";
}
export interface namespaces_eventhubs_authorizationRulesComponentOutputs {
	readonly apiVersion: "2018-01-01-preview";
	readonly id: string;
	readonly type: "Microsoft.EventHub/namespaces/eventhubs/authorizationRules";
}
export interface namespaces_eventhubs_authorizationRulesComponentInputs {
	readonly name: string;
	readonly properties?: AuthorizationRuleProperties;
}
export class namespaces_eventhubs_consumergroups
	extends ArmResource<namespaces_eventhubs_consumergroupsComponentInputs>
	implements namespaces_eventhubs_consumergroupsComponentOutputs
{
	constructor(entity: ADKEntity, options: namespaces_eventhubs_consumergroupsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.EventHub/namespaces/eventhubs/consumergroups",
			"2018-01-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2018-01-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.EventHub/namespaces/eventhubs/consumergroups";
}
export interface namespaces_eventhubs_consumergroupsComponentOutputs {
	readonly apiVersion: "2018-01-01-preview";
	readonly id: string;
	readonly type: "Microsoft.EventHub/namespaces/eventhubs/consumergroups";
}
export interface namespaces_eventhubs_consumergroupsComponentInputs {
	readonly name: string;
	readonly properties?: ConsumerGroupProperties;
}
export class namespaces_ipfilterrules
	extends ArmResource<namespaces_ipfilterrulesComponentInputs>
	implements namespaces_ipfilterrulesComponentOutputs
{
	constructor(entity: ADKEntity, options: namespaces_ipfilterrulesComponentInputs) {
		super(entity, options.name, "Microsoft.EventHub/namespaces/ipfilterrules", "2018-01-01-preview", options);
	}
	public readonly apiVersion: "2018-01-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.EventHub/namespaces/ipfilterrules";
}
export interface namespaces_ipfilterrulesComponentOutputs {
	readonly apiVersion: "2018-01-01-preview";
	readonly id: string;
	readonly type: "Microsoft.EventHub/namespaces/ipfilterrules";
}
export interface namespaces_ipfilterrulesComponentInputs {
	readonly name: string;
	readonly properties?: IpFilterRuleProperties;
}
export class namespaces_networkRuleSets
	extends ArmResource<namespaces_networkRuleSetsComponentInputs>
	implements namespaces_networkRuleSetsComponentOutputs
{
	constructor(entity: ADKEntity, options: namespaces_networkRuleSetsComponentInputs) {
		super(entity, options.name, "Microsoft.EventHub/namespaces/networkRuleSets", "2018-01-01-preview", options);
	}
	public readonly apiVersion: "2018-01-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.EventHub/namespaces/networkRuleSets";
}
export interface namespaces_networkRuleSetsComponentOutputs {
	readonly apiVersion: "2018-01-01-preview";
	readonly id: string;
	readonly type: "Microsoft.EventHub/namespaces/networkRuleSets";
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
		super(
			entity,
			options.name,
			"Microsoft.EventHub/namespaces/privateEndpointConnections",
			"2018-01-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2018-01-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.EventHub/namespaces/privateEndpointConnections";
}
export interface namespaces_privateEndpointConnectionsComponentOutputs {
	readonly apiVersion: "2018-01-01-preview";
	readonly id: string;
	readonly type: "Microsoft.EventHub/namespaces/privateEndpointConnections";
}
export interface namespaces_privateEndpointConnectionsComponentInputs {
	readonly name: string;
	readonly properties?: PrivateEndpointConnectionProperties;
}
export class namespaces_virtualnetworkrules
	extends ArmResource<namespaces_virtualnetworkrulesComponentInputs>
	implements namespaces_virtualnetworkrulesComponentOutputs
{
	constructor(entity: ADKEntity, options: namespaces_virtualnetworkrulesComponentInputs) {
		super(entity, options.name, "Microsoft.EventHub/namespaces/virtualnetworkrules", "2018-01-01-preview", options);
	}
	public readonly apiVersion: "2018-01-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.EventHub/namespaces/virtualnetworkrules";
}
export interface namespaces_virtualnetworkrulesComponentOutputs {
	readonly apiVersion: "2018-01-01-preview";
	readonly id: string;
	readonly type: "Microsoft.EventHub/namespaces/virtualnetworkrules";
}
export interface namespaces_virtualnetworkrulesComponentInputs {
	readonly name: string;
	readonly properties?: VirtualNetworkRuleProperties;
}
export function listKeys(resource: namespaces_authorizationRules): AccessKeys {
	if (resource.apiVersion !== "2018-01-01-preview") {
		throw new Error(`listKeys is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.EventHub/namespaces/authorizationRules") {
		throw new Error(`listKeys is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export interface AccessKeys {
	readonly aliasPrimaryConnectionString?: string;
	readonly aliasSecondaryConnectionString?: string;
	readonly keyName?: string;
	readonly primaryConnectionString?: string;
	readonly primaryKey?: string;
	readonly secondaryConnectionString?: string;
	readonly secondaryKey?: string;
}
export interface ArmDisasterRecoveryProperties {
	readonly alternateName?: string;
	readonly partnerNamespace?: string;
	readonly pendingReplicationOperationsCount?: number;
	readonly provisioningState?: "Accepted" | "Failed";
	readonly role?: "Primary" | "PrimaryNotReplicating";
}
export interface AuthorizationRuleProperties {
	readonly rights: "Listen" | "Manage" | "Send"[];
}
export interface CaptureDescription {
	readonly destination?: Destination;
	readonly enabled?: boolean;
	readonly encoding?: "Avro";
	readonly intervalInSeconds?: number;
	readonly sizeLimitInBytes?: number;
	readonly skipEmptyArchives?: boolean;
}
export interface ClusterProperties {
	readonly createdAt?: string;
	readonly metricId?: string;
	readonly status?: string;
	readonly updatedAt?: string;
}
export interface ClusterSku {
	readonly capacity?: number;
	readonly name: "Dedicated";
}
export interface ConnectionState {
	readonly description?: string;
	readonly status?: "Approved" | "Disconnected" | "Pending" | "Rejected";
}
export interface ConsumerGroupProperties {
	readonly createdAt?: string;
	readonly updatedAt?: string;
	readonly userMetadata?: string;
}
export interface Destination {
	readonly name?: string;
	readonly properties?: DestinationProperties;
}
export interface DestinationProperties {
	readonly archiveNameFormat?: string;
	readonly blobContainer?: string;
	readonly storageAccountResourceId?: string;
}
export interface EHNamespaceProperties {
	readonly clusterArmId?: string;
	readonly createdAt?: string;
	readonly encryption?: Encryption;
	readonly isAutoInflateEnabled?: boolean;
	readonly kafkaEnabled?: boolean;
	readonly maximumThroughputUnits?: number;
	readonly metricId?: string;
	readonly provisioningState?: string;
	readonly serviceBusEndpoint?: string;
	readonly status?: string;
	readonly updatedAt?: string;
	readonly zoneRedundant?: boolean;
}
export interface Encryption {
	readonly keySource?: "Microsoft.KeyVault";
	readonly keyVaultProperties?: KeyVaultProperties[];
}
export interface EventhubProperties {
	readonly captureDescription?: CaptureDescription;
	readonly createdAt?: string;
	readonly messageRetentionInDays?: number;
	readonly partitionCount?: number;
	readonly partitionIds?: string[];
	readonly status?:
		| "Active"
		| "Creating"
		| "Deleting"
		| "Disabled"
		| "ReceiveDisabled"
		| "Renaming"
		| "Restoring"
		| "SendDisabled";
	readonly updatedAt?: string;
}
export interface Identity {
	readonly principalId?: string;
	readonly tenantId?: string;
	readonly type?: "SystemAssigned";
}
export interface IpFilterRuleProperties {
	readonly action?: "Accept" | "Reject";
	readonly filterName?: string;
	readonly ipMask?: string;
}
export interface KeyVaultProperties {
	readonly keyName?: string;
	readonly keyVaultUri?: string;
	readonly keyVersion?: string;
}
export interface NetworkRuleSetProperties {
	readonly defaultAction?: "Allow" | "Deny";
	readonly ipRules?: NWRuleSetIpRules[];
	readonly trustedServiceAccessEnabled?: boolean;
	readonly virtualNetworkRules?: NWRuleSetVirtualNetworkRules[];
}
export interface NWRuleSetIpRules {
	readonly action?: "Allow";
	readonly ipMask?: string;
}
export interface NWRuleSetVirtualNetworkRules {
	readonly ignoreMissingVnetServiceEndpoint?: boolean;
	readonly subnet?: Subnet;
}
export interface PrivateEndpoint {
	readonly id?: string;
}
export interface PrivateEndpointConnectionProperties {
	readonly privateEndpoint?: PrivateEndpoint;
	readonly privateLinkServiceConnectionState?: ConnectionState;
	readonly provisioningState?: "Canceled" | "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating";
}
export interface Sku {
	readonly capacity?: number;
	readonly name: "Basic" | "Standard";
	readonly tier?: "Basic" | "Standard";
}
export interface Subnet {
	readonly id?: string;
}
export interface TrackedResourceTags {
	readonly [key: string]: string;
}
export interface VirtualNetworkRuleProperties {
	readonly virtualNetworkSubnetId?: string;
}
export default {
	clusters: clusters,
	namespaces: namespaces,
	"namespaces/authorizationRules": namespaces_authorizationRules,
	"namespaces/disasterRecoveryConfigs": namespaces_disasterRecoveryConfigs,
	"namespaces/disasterRecoveryConfigs/authorizationRules": namespaces_disasterRecoveryConfigs_authorizationRules,
	"namespaces/eventhubs": namespaces_eventhubs,
	"namespaces/eventhubs/authorizationRules": namespaces_eventhubs_authorizationRules,
	"namespaces/eventhubs/consumergroups": namespaces_eventhubs_consumergroups,
	"namespaces/ipfilterrules": namespaces_ipfilterrules,
	"namespaces/networkRuleSets": namespaces_networkRuleSets,
	"namespaces/privateEndpointConnections": namespaces_privateEndpointConnections,
	"namespaces/virtualnetworkrules": namespaces_virtualnetworkrules,
};
