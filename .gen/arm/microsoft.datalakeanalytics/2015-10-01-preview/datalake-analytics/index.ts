import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class accounts extends ArmResource<accountsComponentInputs> implements accountsComponentOutputs {
	constructor(entity: ADKEntity, options: accountsComponentInputs) {
		super(entity, options.name, "Microsoft.DataLakeAnalytics/accounts", "2015-10-01-preview", options);
	}
	public readonly apiVersion: "2015-10-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.DataLakeAnalytics/accounts";
}
export interface accountsComponentOutputs {
	readonly apiVersion: "2015-10-01-preview";
	readonly id: string;
	readonly type: "Microsoft.DataLakeAnalytics/accounts";
}
export interface accountsComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties: CreateDataLakeAnalyticsAccountPropertiesOrDataLakeAnalyticsAccountProperties;
	readonly tags?: CreateDataLakeAnalyticsAccountParametersTags | undefined;
}
export class accounts_computePolicies
	extends ArmResource<accounts_computePoliciesComponentInputs>
	implements accounts_computePoliciesComponentOutputs
{
	constructor(entity: ADKEntity, options: accounts_computePoliciesComponentInputs) {
		super(entity, options.name, "Microsoft.DataLakeAnalytics/accounts/computePolicies", "2015-10-01-preview", options);
	}
	public readonly apiVersion: "2015-10-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.DataLakeAnalytics/accounts/computePolicies";
}
export interface accounts_computePoliciesComponentOutputs {
	readonly apiVersion: "2015-10-01-preview";
	readonly id: string;
	readonly type: "Microsoft.DataLakeAnalytics/accounts/computePolicies";
}
export interface accounts_computePoliciesComponentInputs {
	readonly name: string;
	readonly properties: CreateOrUpdateComputePolicyPropertiesOrComputePolicyProperties;
}
export class accounts_DataLakeStoreAccounts
	extends ArmResource<accounts_DataLakeStoreAccountsComponentInputs>
	implements accounts_DataLakeStoreAccountsComponentOutputs
{
	constructor(entity: ADKEntity, options: accounts_DataLakeStoreAccountsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.DataLakeAnalytics/accounts/DataLakeStoreAccounts",
			"2015-10-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2015-10-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.DataLakeAnalytics/accounts/DataLakeStoreAccounts";
}
export interface accounts_DataLakeStoreAccountsComponentOutputs {
	readonly apiVersion: "2015-10-01-preview";
	readonly id: string;
	readonly type: "Microsoft.DataLakeAnalytics/accounts/DataLakeStoreAccounts";
}
export interface accounts_DataLakeStoreAccountsComponentInputs {
	readonly name: string;
	readonly properties?: AddDataLakeStorePropertiesOrDataLakeStoreAccountInfoProperties | undefined;
}
export class accounts_firewallRules
	extends ArmResource<accounts_firewallRulesComponentInputs>
	implements accounts_firewallRulesComponentOutputs
{
	constructor(entity: ADKEntity, options: accounts_firewallRulesComponentInputs) {
		super(entity, options.name, "Microsoft.DataLakeAnalytics/accounts/firewallRules", "2015-10-01-preview", options);
	}
	public readonly apiVersion: "2015-10-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.DataLakeAnalytics/accounts/firewallRules";
}
export interface accounts_firewallRulesComponentOutputs {
	readonly apiVersion: "2015-10-01-preview";
	readonly id: string;
	readonly type: "Microsoft.DataLakeAnalytics/accounts/firewallRules";
}
export interface accounts_firewallRulesComponentInputs {
	readonly name: string;
	readonly properties: CreateOrUpdateFirewallRulePropertiesOrFirewallRuleProperties;
}
export class accounts_StorageAccounts
	extends ArmResource<accounts_StorageAccountsComponentInputs>
	implements accounts_StorageAccountsComponentOutputs
{
	constructor(entity: ADKEntity, options: accounts_StorageAccountsComponentInputs) {
		super(entity, options.name, "Microsoft.DataLakeAnalytics/accounts/StorageAccounts", "2015-10-01-preview", options);
	}
	public readonly apiVersion: "2015-10-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.DataLakeAnalytics/accounts/StorageAccounts";
}
export interface accounts_StorageAccountsComponentOutputs {
	readonly apiVersion: "2015-10-01-preview";
	readonly id: string;
	readonly type: "Microsoft.DataLakeAnalytics/accounts/StorageAccounts";
}
export interface accounts_StorageAccountsComponentInputs {
	readonly name: string;
	readonly properties: StorageAccountPropertiesOrStorageAccountInformationProperties;
}
export class accounts_storageAccounts_containers
	extends ArmResource<accounts_storageAccounts_containersComponentInputs>
	implements accounts_storageAccounts_containersComponentOutputs
{
	constructor(entity: ADKEntity, options: accounts_storageAccounts_containersComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.DataLakeAnalytics/accounts/storageAccounts/containers",
			"2015-10-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2015-10-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.DataLakeAnalytics/accounts/storageAccounts/containers";
}
export interface accounts_storageAccounts_containersComponentOutputs {
	readonly apiVersion: "2015-10-01-preview";
	readonly id: string;
	readonly type: "Microsoft.DataLakeAnalytics/accounts/storageAccounts/containers";
}
export interface accounts_storageAccounts_containersComponentInputs {
	readonly name: string;
	readonly properties?: StorageContainerProperties | undefined;
}
export function listSasTokens(resource: accounts_storageAccounts_containers): SasTokenInformationListResult {
	if (resource.apiVersion !== "2015-10-01-preview") {
		throw new Error(`listSasTokens is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.DataLakeAnalytics/accounts/storageAccounts/containers") {
		throw new Error(`listSasTokens is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export interface AddDataLakeStorePropertiesOrDataLakeStoreAccountInfoProperties {
	readonly suffix?: string | undefined;
}
export interface AddDataLakeStoreWithAccountParametersOrDataLakeStoreAccountInformation {
	readonly id?: string | undefined;
	readonly name: string;
	readonly properties?: AddDataLakeStorePropertiesOrDataLakeStoreAccountInfoProperties | undefined;
	readonly type?: string | undefined;
}
export interface AddStorageAccountWithAccountParametersOrStorageAccountInformation {
	readonly id?: string | undefined;
	readonly name: string;
	readonly properties: StorageAccountPropertiesOrStorageAccountInformationProperties;
	readonly type?: string | undefined;
}
export interface CreateComputePolicyWithAccountParametersOrComputePolicy {
	readonly id?: string | undefined;
	readonly name: string;
	readonly properties: CreateOrUpdateComputePolicyPropertiesOrComputePolicyProperties;
	readonly type?: string | undefined;
}
export interface CreateDataLakeAnalyticsAccountParametersTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface CreateDataLakeAnalyticsAccountPropertiesOrDataLakeAnalyticsAccountProperties {
	readonly accountId?: string | undefined;
	readonly computePolicies?: CreateComputePolicyWithAccountParametersOrComputePolicy[] | undefined;
	readonly creationTime?: string | undefined;
	readonly currentTier?:
		| (
				| "Commitment_100000AUHours"
				| "Commitment_10000AUHours"
				| "Commitment_1000AUHours"
				| "Commitment_100AUHours"
				| "Commitment_500000AUHours"
				| "Commitment_50000AUHours"
				| "Commitment_5000AUHours"
				| "Commitment_500AUHours"
		  )
		| undefined;
	readonly dataLakeStoreAccounts: AddDataLakeStoreWithAccountParametersOrDataLakeStoreAccountInformation[];
	readonly debugDataAccessLevel?: ("All" | "Customer") | undefined;
	readonly defaultDataLakeStoreAccount: string;
	readonly endpoint?: string | undefined;
	readonly firewallAllowAzureIps?: "Disabled" | undefined;
	readonly firewallRules?: CreateFirewallRuleWithAccountParametersOrFirewallRule[] | undefined;
	readonly firewallState?: "Disabled" | undefined;
	readonly hierarchicalQueueState?: string | undefined;
	readonly hiveMetastores?: HiveMetastore[] | undefined;
	readonly lastModifiedTime?: string | undefined;
	readonly maxDegreeOfParallelism?: number | undefined;
	readonly maxDegreeOfParallelismPerJob?: number | undefined;
	readonly maxJobCount?: number | undefined;
	readonly minPriorityPerJob?: number | undefined;
	readonly newTier?:
		| (
				| "Commitment_100000AUHours"
				| "Commitment_10000AUHours"
				| "Commitment_1000AUHours"
				| "Commitment_100AUHours"
				| "Commitment_500000AUHours"
				| "Commitment_50000AUHours"
				| "Commitment_5000AUHours"
				| "Commitment_500AUHours"
		  )
		| undefined;
	readonly provisioningState?:
		| ("Creating" | "Deleted" | "Deleting" | "Failed" | "Patching" | "Resuming" | "Running" | "Succeeded")
		| undefined;
	readonly publicDataLakeStoreAccounts?: DataLakeStoreAccountInformation[] | undefined;
	readonly queryStoreRetention?: number | undefined;
	readonly state?: "active" | undefined;
	readonly storageAccounts?: AddStorageAccountWithAccountParametersOrStorageAccountInformation[] | undefined;
	readonly systemMaxDegreeOfParallelism?: number | undefined;
	readonly systemMaxJobCount?: number | undefined;
	readonly virtualNetworkRules?: VirtualNetworkRule[] | undefined;
}
export interface CreateFirewallRuleWithAccountParametersOrFirewallRule {
	readonly id?: string | undefined;
	readonly name: string;
	readonly properties: CreateOrUpdateFirewallRulePropertiesOrFirewallRuleProperties;
	readonly type?: string | undefined;
}
export interface CreateOrUpdateComputePolicyPropertiesOrComputePolicyProperties {
	readonly maxDegreeOfParallelismPerJob?: number | undefined;
	readonly minPriorityPerJob?: number | undefined;
	readonly objectId: string;
	readonly objectType: "Group" | "ServicePrincipal" | "User";
}
export interface CreateOrUpdateFirewallRulePropertiesOrFirewallRuleProperties {
	readonly endIpAddress: string;
	readonly startIpAddress: string;
}
export interface DataLakeStoreAccountInfoProperties {
	readonly suffix?: string | undefined;
}
export interface DataLakeStoreAccountInformation {
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: DataLakeStoreAccountInfoProperties | undefined;
	readonly type?: string | undefined;
}
export interface HiveMetastore {
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: HiveMetastoreProperties | undefined;
	readonly type?: string | undefined;
}
export interface HiveMetastoreProperties {
	readonly databaseName?: string | undefined;
	readonly nestedResourceProvisioningState?: ("Canceled" | "Failed") | undefined;
	readonly password?: string | undefined;
	readonly runtimeVersion?: string | undefined;
	readonly serverUri?: string | undefined;
	readonly userName?: string | undefined;
}
export interface SasTokenInformation {
	readonly accessToken?: string | undefined;
}
export interface SasTokenInformationListResult {
	readonly nextLink?: string | undefined;
	readonly value?: SasTokenInformation[] | undefined;
}
export interface StorageAccountPropertiesOrStorageAccountInformationProperties {
	readonly accessKey: string;
	readonly suffix?: string | undefined;
}
export interface StorageContainerProperties {
	readonly lastModifiedTime?: string | undefined;
}
export interface VirtualNetworkRule {
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: VirtualNetworkRuleProperties | undefined;
	readonly type?: string | undefined;
}
export interface VirtualNetworkRuleProperties {
	readonly subnetId?: string | undefined;
	readonly virtualNetworkRuleState?: ("Active" | "Failed") | undefined;
}
export default {
	accounts: accounts,
	"accounts/computePolicies": accounts_computePolicies,
	"accounts/DataLakeStoreAccounts": accounts_DataLakeStoreAccounts,
	"accounts/firewallRules": accounts_firewallRules,
	"accounts/StorageAccounts": accounts_StorageAccounts,
	"accounts/storageAccounts/containers": accounts_storageAccounts_containers,
};
