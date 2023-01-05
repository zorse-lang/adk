import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class namespaces extends ArmResource<namespacesComponentInputs> implements namespacesComponentOutputs {
	constructor(entity: ADKEntity, options: namespacesComponentInputs) {
		super(entity, options.name, "Microsoft.EventHub/namespaces", "2017-04-01", options);
	}
	public readonly apiVersion: "2017-04-01";
	public readonly id: string;
	public readonly type: "Microsoft.EventHub/namespaces";
}
export interface namespacesComponentOutputs {
	readonly apiVersion: "2017-04-01";
	readonly id: string;
	readonly type: "Microsoft.EventHub/namespaces";
}
export interface namespacesComponentInputs {
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
		super(entity, options.name, "Microsoft.EventHub/namespaces/authorizationRules", "2017-04-01", options);
	}
	public readonly apiVersion: "2017-04-01";
	public readonly id: string;
	public readonly type: "Microsoft.EventHub/namespaces/authorizationRules";
}
export interface namespaces_authorizationRulesComponentOutputs {
	readonly apiVersion: "2017-04-01";
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
		super(entity, options.name, "Microsoft.EventHub/namespaces/disasterRecoveryConfigs", "2017-04-01", options);
	}
	public readonly apiVersion: "2017-04-01";
	public readonly id: string;
	public readonly type: "Microsoft.EventHub/namespaces/disasterRecoveryConfigs";
}
export interface namespaces_disasterRecoveryConfigsComponentOutputs {
	readonly apiVersion: "2017-04-01";
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
			"2017-04-01",
			options,
		);
	}
	public readonly apiVersion: "2017-04-01";
	public readonly id: string;
	public readonly type: "Microsoft.EventHub/namespaces/disasterRecoveryConfigs/authorizationRules";
}
export interface namespaces_disasterRecoveryConfigs_authorizationRulesComponentOutputs {
	readonly apiVersion: "2017-04-01";
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
		super(entity, options.name, "Microsoft.EventHub/namespaces/eventhubs", "2017-04-01", options);
	}
	public readonly apiVersion: "2017-04-01";
	public readonly id: string;
	public readonly type: "Microsoft.EventHub/namespaces/eventhubs";
}
export interface namespaces_eventhubsComponentOutputs {
	readonly apiVersion: "2017-04-01";
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
		super(entity, options.name, "Microsoft.EventHub/namespaces/eventhubs/authorizationRules", "2017-04-01", options);
	}
	public readonly apiVersion: "2017-04-01";
	public readonly id: string;
	public readonly type: "Microsoft.EventHub/namespaces/eventhubs/authorizationRules";
}
export interface namespaces_eventhubs_authorizationRulesComponentOutputs {
	readonly apiVersion: "2017-04-01";
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
		super(entity, options.name, "Microsoft.EventHub/namespaces/eventhubs/consumergroups", "2017-04-01", options);
	}
	public readonly apiVersion: "2017-04-01";
	public readonly id: string;
	public readonly type: "Microsoft.EventHub/namespaces/eventhubs/consumergroups";
}
export interface namespaces_eventhubs_consumergroupsComponentOutputs {
	readonly apiVersion: "2017-04-01";
	readonly id: string;
	readonly type: "Microsoft.EventHub/namespaces/eventhubs/consumergroups";
}
export interface namespaces_eventhubs_consumergroupsComponentInputs {
	readonly name: string;
	readonly properties?: ConsumerGroupProperties;
}
export class namespaces_networkRuleSets
	extends ArmResource<namespaces_networkRuleSetsComponentInputs>
	implements namespaces_networkRuleSetsComponentOutputs
{
	constructor(entity: ADKEntity, options: namespaces_networkRuleSetsComponentInputs) {
		super(entity, options.name, "Microsoft.EventHub/namespaces/networkRuleSets", "2017-04-01", options);
	}
	public readonly apiVersion: "2017-04-01";
	public readonly id: string;
	public readonly type: "Microsoft.EventHub/namespaces/networkRuleSets";
}
export interface namespaces_networkRuleSetsComponentOutputs {
	readonly apiVersion: "2017-04-01";
	readonly id: string;
	readonly type: "Microsoft.EventHub/namespaces/networkRuleSets";
}
export interface namespaces_networkRuleSetsComponentInputs {
	readonly name: string;
	readonly properties?: NetworkRuleSetProperties;
}
export function listKeys(resource: namespaces_authorizationRules): AccessKeys {
	if (resource.apiVersion !== "2017-04-01") {
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
	readonly createdAt?: string;
	readonly isAutoInflateEnabled?: boolean;
	readonly kafkaEnabled?: boolean;
	readonly maximumThroughputUnits?: number;
	readonly metricId?: string;
	readonly provisioningState?: string;
	readonly serviceBusEndpoint?: string;
	readonly updatedAt?: string;
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
export interface NetworkRuleSetProperties {
	readonly defaultAction?: "Allow" | "Deny";
	readonly ipRules?: NWRuleSetIpRules[];
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
export interface Sku {
	readonly capacity?: number;
	readonly name: "Basic" | "Standard";
	readonly tier?: "Basic" | "Standard";
}
export interface Subnet {
	readonly id: string;
}
export interface TrackedResourceTags {
	readonly [key: string]: string;
}
export default {
	namespaces: namespaces,
	"namespaces/authorizationRules": namespaces_authorizationRules,
	"namespaces/disasterRecoveryConfigs": namespaces_disasterRecoveryConfigs,
	"namespaces/disasterRecoveryConfigs/authorizationRules": namespaces_disasterRecoveryConfigs_authorizationRules,
	"namespaces/eventhubs": namespaces_eventhubs,
	"namespaces/eventhubs/authorizationRules": namespaces_eventhubs_authorizationRules,
	"namespaces/eventhubs/consumergroups": namespaces_eventhubs_consumergroups,
	"namespaces/networkRuleSets": namespaces_networkRuleSets,
};
