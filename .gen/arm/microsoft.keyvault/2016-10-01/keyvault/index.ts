import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class vaults extends ArmResource<vaultsComponentInputs> implements vaultsComponentOutputs {
	constructor(entity: ADKEntity, options: vaultsComponentInputs) {
		super(entity, options.name, "Microsoft.KeyVault/vaults", "2016-10-01", options);
	}
	public readonly apiVersion: "2016-10-01";
	public readonly id: string;
	public readonly type: "Microsoft.KeyVault/vaults";
}
export interface vaultsComponentOutputs {
	readonly apiVersion: "2016-10-01";
	readonly id: string;
	readonly type: "Microsoft.KeyVault/vaults";
}
export interface vaultsComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties: VaultProperties;
	readonly tags?: VaultCreateOrUpdateParametersTags | undefined;
}
export class vaults_accessPolicies
	extends ArmResource<vaults_accessPoliciesComponentInputs>
	implements vaults_accessPoliciesComponentOutputs
{
	constructor(entity: ADKEntity, options: vaults_accessPoliciesComponentInputs) {
		super(entity, options.name, "Microsoft.KeyVault/vaults/accessPolicies", "2016-10-01", options);
	}
	public readonly apiVersion: "2016-10-01";
	public readonly id: string;
	public readonly type: "Microsoft.KeyVault/vaults/accessPolicies";
}
export interface vaults_accessPoliciesComponentOutputs {
	readonly apiVersion: "2016-10-01";
	readonly id: string;
	readonly type: "Microsoft.KeyVault/vaults/accessPolicies";
}
export interface vaults_accessPoliciesComponentInputs {
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties: VaultAccessPolicyProperties;
}
export class vaults_secrets extends ArmResource<vaults_secretsComponentInputs> implements vaults_secretsComponentOutputs {
	constructor(entity: ADKEntity, options: vaults_secretsComponentInputs) {
		super(entity, options.name, "Microsoft.KeyVault/vaults/secrets", "2016-10-01", options);
	}
	public readonly apiVersion: "2016-10-01";
	public readonly id: string;
	public readonly type: "Microsoft.KeyVault/vaults/secrets";
}
export interface vaults_secretsComponentOutputs {
	readonly apiVersion: "2016-10-01";
	readonly id: string;
	readonly type: "Microsoft.KeyVault/vaults/secrets";
}
export interface vaults_secretsComponentInputs {
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties: SecretProperties;
	readonly tags?: SecretCreateOrUpdateParametersTags | undefined;
}
export interface AccessPolicyEntry {
	readonly applicationId?: string | undefined;
	readonly objectId: string;
	readonly permissions: Permissions;
	readonly tenantId: string;
}
export interface Permissions {
	readonly certificates?:
		| (
				| "create"
				| "delete"
				| "deleteissuers"
				| "get"
				| "getissuers"
				| "import"
				| "list"
				| "listissuers"
				| "managecontacts"
				| "manageissuers"
				| "purge"
				| "recover"
				| "setissuers"
				| "update"[]
		  )
		| undefined;
	readonly keys?:
		| (
				| "backup"
				| "create"
				| "decrypt"
				| "delete"
				| "encrypt"
				| "get"
				| "import"
				| "list"
				| "purge"
				| "recover"
				| "restore"
				| "sign"
				| "unwrapKey"
				| "update"
				| "verify"
				| "wrapKey"[]
		  )
		| undefined;
	readonly secrets?: ("backup" | "delete" | "get" | "list" | "purge" | "recover" | "restore" | "set"[]) | undefined;
	readonly storage?:
		| (
				| "backup"
				| "delete"
				| "deletesas"
				| "get"
				| "getsas"
				| "list"
				| "listsas"
				| "purge"
				| "recover"
				| "regeneratekey"
				| "restore"
				| "set"
				| "setsas"
				| "update"[]
		  )
		| undefined;
}
export interface SecretAttributes {
	readonly created?: number | undefined;
	readonly enabled?: boolean | undefined;
	readonly exp?: number | undefined;
	readonly nbf?: number | undefined;
	readonly updated?: number | undefined;
}
export interface SecretCreateOrUpdateParametersTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface SecretProperties {
	readonly attributes?: SecretAttributes | undefined;
	readonly contentType?: string | undefined;
	readonly secretUri?: string | undefined;
	readonly secretUriWithVersion?: string | undefined;
	readonly value?: string | undefined;
}
export interface Sku {
	readonly family: "A";
	readonly name: "premium";
}
export interface VaultAccessPolicyProperties {
	readonly accessPolicies: AccessPolicyEntry[];
}
export interface VaultCreateOrUpdateParametersTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface VaultProperties {
	readonly accessPolicies?: AccessPolicyEntry[] | undefined;
	readonly createMode?: "default" | undefined;
	readonly enabledForDeployment?: boolean | undefined;
	readonly enabledForDiskEncryption?: boolean | undefined;
	readonly enabledForTemplateDeployment?: boolean | undefined;
	readonly enablePurgeProtection?: boolean | undefined;
	readonly enableSoftDelete?: boolean | undefined;
	readonly sku: Sku;
	readonly tenantId: string;
	readonly vaultUri?: string | undefined;
}
export default {
	vaults: vaults,
	"vaults/accessPolicies": vaults_accessPolicies,
	"vaults/secrets": vaults_secrets,
};
