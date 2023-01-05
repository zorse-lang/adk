import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class vaults extends ArmResource<vaultsComponentInputs> implements vaultsComponentOutputs {
	constructor(entity: ADKEntity, options: vaultsComponentInputs) {
		super(entity, options.name, "Microsoft.KeyVault/vaults", "2015-06-01", options);
	}
	public readonly apiVersion: "2015-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.KeyVault/vaults";
}
export interface vaultsComponentOutputs {
	readonly apiVersion: "2015-06-01";
	readonly id: string;
	readonly type: "Microsoft.KeyVault/vaults";
}
export interface vaultsComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties: VaultProperties;
	readonly tags?: VaultCreateOrUpdateParametersTags;
}
export interface AccessPolicyEntry {
	readonly applicationId?: string;
	readonly objectId: string;
	readonly permissions: Permissions;
	readonly tenantId: string;
}
export interface Permissions {
	readonly certificates?:
		| "all"
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
		| "update"[];
	readonly keys?:
		| "all"
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
		| "wrapKey"[];
	readonly secrets?: "all" | "backup" | "delete" | "get" | "list" | "purge" | "recover" | "restore" | "set"[];
}
export interface Sku {
	readonly family: "A";
	readonly name: "premium";
}
export interface VaultCreateOrUpdateParametersTags {
	readonly [key: string]: string;
}
export interface VaultProperties {
	readonly accessPolicies: AccessPolicyEntry[];
	readonly enabledForDeployment?: boolean;
	readonly enabledForDiskEncryption?: boolean;
	readonly enabledForTemplateDeployment?: boolean;
	readonly enableSoftDelete?: boolean;
	readonly sku: Sku;
	readonly tenantId: string;
	readonly vaultUri?: string;
}
export default {
	vaults: vaults,
};
