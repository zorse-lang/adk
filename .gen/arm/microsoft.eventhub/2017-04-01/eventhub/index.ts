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
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: EHNamespaceProperties | undefined;
	readonly sku?: Sku | undefined;
	readonly tags?: TrackedResourceTags | undefined;
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
	readonly properties?: AuthorizationRuleProperties | undefined;
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
	readonly properties?: ArmDisasterRecoveryProperties | undefined;
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
	readonly properties?: AuthorizationRuleProperties | undefined;
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
	readonly properties?: EventhubProperties | undefined;
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
	readonly properties?: AuthorizationRuleProperties | undefined;
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
	readonly properties?: ConsumerGroupProperties | undefined;
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
	readonly properties?: NetworkRuleSetProperties | undefined;
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
	readonly aliasPrimaryConnectionString?: string | undefined;
	readonly aliasSecondaryConnectionString?: string | undefined;
	readonly keyName?: string | undefined;
	readonly primaryConnectionString?: string | undefined;
	readonly primaryKey?: string | undefined;
	readonly secondaryConnectionString?: string | undefined;
	readonly secondaryKey?: string | undefined;
}
export interface ArmDisasterRecoveryProperties {
	readonly alternateName?: string | undefined;
	readonly partnerNamespace?: string | undefined;
	readonly pendingReplicationOperationsCount?: number | undefined;
	readonly provisioningState?: ("Accepted" | "Failed") | undefined;
	readonly role?: ("Primary" | "PrimaryNotReplicating") | undefined;
}
export interface AuthorizationRuleProperties {
	readonly rights: "Listen" | "Manage" | "Send"[];
}
export interface CaptureDescription {
	readonly destination?: Destination | undefined;
	readonly enabled?: boolean | undefined;
	readonly encoding?: "Avro" | undefined;
	readonly intervalInSeconds?: number | undefined;
	readonly sizeLimitInBytes?: number | undefined;
	readonly skipEmptyArchives?: boolean | undefined;
}
export interface ConsumerGroupProperties {
	readonly createdAt?: string | undefined;
	readonly updatedAt?: string | undefined;
	readonly userMetadata?: string | undefined;
}
export interface Destination {
	readonly name?: string | undefined;
	readonly properties?: DestinationProperties | undefined;
}
export interface DestinationProperties {
	readonly archiveNameFormat?: string | undefined;
	readonly blobContainer?: string | undefined;
	readonly storageAccountResourceId?: string | undefined;
}
export interface EHNamespaceProperties {
	readonly createdAt?: string | undefined;
	readonly isAutoInflateEnabled?: boolean | undefined;
	readonly kafkaEnabled?: boolean | undefined;
	readonly maximumThroughputUnits?: number | undefined;
	readonly metricId?: string | undefined;
	readonly provisioningState?: string | undefined;
	readonly serviceBusEndpoint?: string | undefined;
	readonly updatedAt?: string | undefined;
}
export interface EventhubProperties {
	readonly captureDescription?: CaptureDescription | undefined;
	readonly createdAt?: string | undefined;
	readonly messageRetentionInDays?: number | undefined;
	readonly partitionCount?: number | undefined;
	readonly partitionIds?: string[] | undefined;
	readonly status?:
		| ("Active" | "Creating" | "Deleting" | "Disabled" | "ReceiveDisabled" | "Renaming" | "Restoring" | "SendDisabled")
		| undefined;
	readonly updatedAt?: string | undefined;
}
export interface NetworkRuleSetProperties {
	readonly defaultAction?: ("Allow" | "Deny") | undefined;
	readonly ipRules?: NWRuleSetIpRules[] | undefined;
	readonly virtualNetworkRules?: NWRuleSetVirtualNetworkRules[] | undefined;
}
export interface NWRuleSetIpRules {
	readonly action?: "Allow" | undefined;
	readonly ipMask?: string | undefined;
}
export interface NWRuleSetVirtualNetworkRules {
	readonly ignoreMissingVnetServiceEndpoint?: boolean | undefined;
	readonly subnet?: Subnet | undefined;
}
export interface Sku {
	readonly capacity?: number | undefined;
	readonly name: "Basic" | "Standard";
	readonly tier?: ("Basic" | "Standard") | undefined;
}
export interface Subnet {
	readonly id: string;
}
export interface TrackedResourceTags {
	readonly "[ key: string ]"?: string | undefined;
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
