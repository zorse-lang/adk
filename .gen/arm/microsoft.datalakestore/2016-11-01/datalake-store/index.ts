import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class accounts extends ArmResource<accountsComponentInputs> implements accountsComponentOutputs {
	constructor(entity: ADKEntity, options: accountsComponentInputs) {
		super(entity, options.name, "Microsoft.DataLakeStore/accounts", "2016-11-01", options);
	}
	public readonly apiVersion: "2016-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.DataLakeStore/accounts";
}
export interface accountsComponentOutputs {
	readonly apiVersion: "2016-11-01";
	readonly id: string;
	readonly type: "Microsoft.DataLakeStore/accounts";
}
export interface accountsComponentInputs {
	readonly identity?: EncryptionIdentity | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties?: CreateDataLakeStoreAccountPropertiesOrDataLakeStoreAccountProperties | undefined;
	readonly tags?: CreateDataLakeStoreAccountParametersTags | undefined;
}
export class accounts_firewallRules
	extends ArmResource<accounts_firewallRulesComponentInputs>
	implements accounts_firewallRulesComponentOutputs
{
	constructor(entity: ADKEntity, options: accounts_firewallRulesComponentInputs) {
		super(entity, options.name, "Microsoft.DataLakeStore/accounts/firewallRules", "2016-11-01", options);
	}
	public readonly apiVersion: "2016-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.DataLakeStore/accounts/firewallRules";
}
export interface accounts_firewallRulesComponentOutputs {
	readonly apiVersion: "2016-11-01";
	readonly id: string;
	readonly type: "Microsoft.DataLakeStore/accounts/firewallRules";
}
export interface accounts_firewallRulesComponentInputs {
	readonly name: string;
	readonly properties: CreateOrUpdateFirewallRulePropertiesOrFirewallRuleProperties;
}
export class accounts_trustedIdProviders
	extends ArmResource<accounts_trustedIdProvidersComponentInputs>
	implements accounts_trustedIdProvidersComponentOutputs
{
	constructor(entity: ADKEntity, options: accounts_trustedIdProvidersComponentInputs) {
		super(entity, options.name, "Microsoft.DataLakeStore/accounts/trustedIdProviders", "2016-11-01", options);
	}
	public readonly apiVersion: "2016-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.DataLakeStore/accounts/trustedIdProviders";
}
export interface accounts_trustedIdProvidersComponentOutputs {
	readonly apiVersion: "2016-11-01";
	readonly id: string;
	readonly type: "Microsoft.DataLakeStore/accounts/trustedIdProviders";
}
export interface accounts_trustedIdProvidersComponentInputs {
	readonly name: string;
	readonly properties: CreateOrUpdateTrustedIdProviderPropertiesOrTrustedIdProviderProperties;
}
export class accounts_virtualNetworkRules
	extends ArmResource<accounts_virtualNetworkRulesComponentInputs>
	implements accounts_virtualNetworkRulesComponentOutputs
{
	constructor(entity: ADKEntity, options: accounts_virtualNetworkRulesComponentInputs) {
		super(entity, options.name, "Microsoft.DataLakeStore/accounts/virtualNetworkRules", "2016-11-01", options);
	}
	public readonly apiVersion: "2016-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.DataLakeStore/accounts/virtualNetworkRules";
}
export interface accounts_virtualNetworkRulesComponentOutputs {
	readonly apiVersion: "2016-11-01";
	readonly id: string;
	readonly type: "Microsoft.DataLakeStore/accounts/virtualNetworkRules";
}
export interface accounts_virtualNetworkRulesComponentInputs {
	readonly name: string;
	readonly properties: CreateOrUpdateVirtualNetworkRulePropertiesOrVirtualNetworkRuleProperties;
}
export interface CreateDataLakeStoreAccountParametersTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface CreateDataLakeStoreAccountPropertiesOrDataLakeStoreAccountProperties {
	readonly accountId?: string | undefined;
	readonly creationTime?: string | undefined;
	readonly currentTier?:
		| (
				| "Commitment_100TB"
				| "Commitment_10TB"
				| "Commitment_1PB"
				| "Commitment_1TB"
				| "Commitment_500TB"
				| "Commitment_5PB"
		  )
		| undefined;
	readonly defaultGroup?: string | undefined;
	readonly encryptionConfig?: EncryptionConfig | undefined;
	readonly encryptionProvisioningState?: "Creating" | undefined;
	readonly encryptionState?: "Disabled" | undefined;
	readonly endpoint?: string | undefined;
	readonly firewallAllowAzureIps?: "Disabled" | undefined;
	readonly firewallRules?: CreateFirewallRuleWithAccountParametersOrFirewallRule[] | undefined;
	readonly firewallState?: "Disabled" | undefined;
	readonly lastModifiedTime?: string | undefined;
	readonly newTier?:
		| (
				| "Commitment_100TB"
				| "Commitment_10TB"
				| "Commitment_1PB"
				| "Commitment_1TB"
				| "Commitment_500TB"
				| "Commitment_5PB"
		  )
		| undefined;
	readonly provisioningState?:
		| (
				| "Canceled"
				| "Creating"
				| "Deleted"
				| "Deleting"
				| "Failed"
				| "Patching"
				| "Resuming"
				| "Running"
				| "Succeeded"
				| "Suspending"
		  )
		| undefined;
	readonly state?: "Active" | undefined;
	readonly trustedIdProviders?: CreateTrustedIdProviderWithAccountParametersOrTrustedIdProvider[] | undefined;
	readonly trustedIdProviderState?: "Disabled" | undefined;
	readonly virtualNetworkRules?: CreateVirtualNetworkRuleWithAccountParametersOrVirtualNetworkRule[] | undefined;
}
export interface CreateFirewallRuleWithAccountParametersOrFirewallRule {
	readonly id?: string | undefined;
	readonly name: string;
	readonly properties: CreateOrUpdateFirewallRulePropertiesOrFirewallRuleProperties;
	readonly type?: string | undefined;
}
export interface CreateOrUpdateFirewallRulePropertiesOrFirewallRuleProperties {
	readonly endIpAddress: string;
	readonly startIpAddress: string;
}
export interface CreateOrUpdateTrustedIdProviderPropertiesOrTrustedIdProviderProperties {
	readonly idProvider: string;
}
export interface CreateOrUpdateVirtualNetworkRulePropertiesOrVirtualNetworkRuleProperties {
	readonly subnetId: string;
}
export interface CreateTrustedIdProviderWithAccountParametersOrTrustedIdProvider {
	readonly id?: string | undefined;
	readonly name: string;
	readonly properties: CreateOrUpdateTrustedIdProviderPropertiesOrTrustedIdProviderProperties;
	readonly type?: string | undefined;
}
export interface CreateVirtualNetworkRuleWithAccountParametersOrVirtualNetworkRule {
	readonly id?: string | undefined;
	readonly name: string;
	readonly properties: CreateOrUpdateVirtualNetworkRulePropertiesOrVirtualNetworkRuleProperties;
	readonly type?: string | undefined;
}
export interface EncryptionConfig {
	readonly keyVaultMetaInfo?: KeyVaultMetaInfo | undefined;
	readonly type: "ServiceManaged";
}
export interface EncryptionIdentity {
	readonly principalId?: string | undefined;
	readonly tenantId?: string | undefined;
	readonly type: "SystemAssigned";
}
export interface KeyVaultMetaInfo {
	readonly encryptionKeyName: string;
	readonly encryptionKeyVersion: string;
	readonly keyVaultResourceId: string;
}
export default {
	accounts: accounts,
	"accounts/firewallRules": accounts_firewallRules,
	"accounts/trustedIdProviders": accounts_trustedIdProviders,
	"accounts/virtualNetworkRules": accounts_virtualNetworkRules,
};
