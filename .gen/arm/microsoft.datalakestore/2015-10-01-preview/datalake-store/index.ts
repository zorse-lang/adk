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
	readonly identity?: EncryptionIdentity | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: DataLakeStoreAccountProperties | undefined;
	readonly tags?: DataLakeStoreAccountTags | undefined;
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
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: FirewallRuleProperties | undefined;
}
export interface DataLakeStoreAccountProperties {
	readonly creationTime?: string | undefined;
	readonly defaultGroup?: string | undefined;
	readonly encryptionConfig?: EncryptionConfig | undefined;
	readonly encryptionProvisioningState?: "Creating" | undefined;
	readonly encryptionState?: "Disabled" | undefined;
	readonly endpoint?: string | undefined;
	readonly lastModifiedTime?: string | undefined;
	readonly provisioningState?:
		| ("Creating" | "Deleted" | "Deleting" | "Failed" | "Patching" | "Resuming" | "Running" | "Succeeded")
		| undefined;
	readonly state?: "active" | undefined;
}
export interface DataLakeStoreAccountTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface EncryptionConfig {
	readonly keyVaultMetaInfo?: KeyVaultMetaInfo | undefined;
	readonly type?: "ServiceManaged" | undefined;
}
export interface EncryptionIdentity {
	readonly principalId?: string | undefined;
	readonly tenantId?: string | undefined;
	readonly type?: "SystemAssigned" | undefined;
}
export interface FirewallRuleProperties {
	readonly endIpAddress?: string | undefined;
	readonly startIpAddress?: string | undefined;
}
export interface KeyVaultMetaInfo {
	readonly encryptionKeyName?: string | undefined;
	readonly encryptionKeyVersion?: string | undefined;
	readonly keyVaultResourceId?: string | undefined;
}
export default {
	accounts: accounts,
	"accounts/firewallRules": accounts_firewallRules,
};
