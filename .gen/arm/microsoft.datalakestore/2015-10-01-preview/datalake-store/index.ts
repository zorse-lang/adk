import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class accounts extends ArmResource<accountsComponentInputs> implements accountsComponentOutputs {
	constructor(entity: ADKEntity, options: accountsComponentInputs) {
		super(entity, options.name, "Microsoft.DataLakeStore/accounts", "2015-10-01-preview", options);
	}
	public readonly apiVersion: "2015-10-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.DataLakeStore/accounts";
}
export interface accountsComponentOutputs {
	readonly apiVersion: "2015-10-01-preview";
	readonly id: string;
	readonly type: "Microsoft.DataLakeStore/accounts";
}
export interface accountsComponentInputs {
	readonly identity?: EncryptionIdentity;
	readonly location?: string;
	readonly name: string;
	readonly properties?: DataLakeStoreAccountProperties;
	readonly tags?: DataLakeStoreAccountTags;
}
export class accounts_firewallRules
	extends ArmResource<accounts_firewallRulesComponentInputs>
	implements accounts_firewallRulesComponentOutputs
{
	constructor(entity: ADKEntity, options: accounts_firewallRulesComponentInputs) {
		super(entity, options.name, "Microsoft.DataLakeStore/accounts/firewallRules", "2015-10-01-preview", options);
	}
	public readonly apiVersion: "2015-10-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.DataLakeStore/accounts/firewallRules";
}
export interface accounts_firewallRulesComponentOutputs {
	readonly apiVersion: "2015-10-01-preview";
	readonly id: string;
	readonly type: "Microsoft.DataLakeStore/accounts/firewallRules";
}
export interface accounts_firewallRulesComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly properties?: FirewallRuleProperties;
}
export interface DataLakeStoreAccountProperties {
	readonly creationTime?: string;
	readonly defaultGroup?: string;
	readonly encryptionConfig?: EncryptionConfig;
	readonly encryptionProvisioningState?: "Creating";
	readonly encryptionState?: "Disabled";
	readonly endpoint?: string;
	readonly lastModifiedTime?: string;
	readonly provisioningState?:
		| "Creating"
		| "Deleted"
		| "Deleting"
		| "Failed"
		| "Patching"
		| "Resuming"
		| "Running"
		| "Succeeded";
	readonly state?: "active";
}
export interface DataLakeStoreAccountTags {
	readonly [key: string]: string;
}
export interface EncryptionConfig {
	readonly keyVaultMetaInfo?: KeyVaultMetaInfo;
	readonly type?: "ServiceManaged";
}
export interface EncryptionIdentity {
	readonly principalId?: string;
	readonly tenantId?: string;
	readonly type?: "SystemAssigned";
}
export interface FirewallRuleProperties {
	readonly endIpAddress?: string;
	readonly startIpAddress?: string;
}
export interface KeyVaultMetaInfo {
	readonly encryptionKeyName?: string;
	readonly encryptionKeyVersion?: string;
	readonly keyVaultResourceId?: string;
}
export default {
	accounts: accounts,
	"accounts/firewallRules": accounts_firewallRules,
};
