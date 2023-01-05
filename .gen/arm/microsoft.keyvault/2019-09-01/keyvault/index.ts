import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class vaults extends ArmResource<vaultsComponentInputs> implements vaultsComponentOutputs {
	constructor(entity: ADKEntity, options: vaultsComponentInputs) {
		super(entity, options.name, "Microsoft.KeyVault/vaults", "2019-09-01", options);
	}
	public readonly apiVersion: "2019-09-01";
	public readonly id: string;
	public readonly type: "Microsoft.KeyVault/vaults";
}
export interface vaultsComponentOutputs {
	readonly apiVersion: "2019-09-01";
	readonly id: string;
	readonly type: "Microsoft.KeyVault/vaults";
}
export interface vaultsComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties: VaultProperties;
	readonly tags?: VaultCreateOrUpdateParametersTags;
}
export class vaults_accessPolicies
	extends ArmResource<vaults_accessPoliciesComponentInputs>
	implements vaults_accessPoliciesComponentOutputs
{
	constructor(entity: ADKEntity, options: vaults_accessPoliciesComponentInputs) {
		super(entity, options.name, "Microsoft.KeyVault/vaults/accessPolicies", "2019-09-01", options);
	}
	public readonly apiVersion: "2019-09-01";
	public readonly id: string;
	public readonly type: "Microsoft.KeyVault/vaults/accessPolicies";
}
export interface vaults_accessPoliciesComponentOutputs {
	readonly apiVersion: "2019-09-01";
	readonly id: string;
	readonly type: "Microsoft.KeyVault/vaults/accessPolicies";
}
export interface vaults_accessPoliciesComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly properties: VaultAccessPolicyProperties;
}
export class vaults_keys extends ArmResource<vaults_keysComponentInputs> implements vaults_keysComponentOutputs {
	constructor(entity: ADKEntity, options: vaults_keysComponentInputs) {
		super(entity, options.name, "Microsoft.KeyVault/vaults/keys", "2019-09-01", options);
	}
	public readonly apiVersion: "2019-09-01";
	public readonly id: string;
	public readonly type: "Microsoft.KeyVault/vaults/keys";
}
export interface vaults_keysComponentOutputs {
	readonly apiVersion: "2019-09-01";
	readonly id: string;
	readonly type: "Microsoft.KeyVault/vaults/keys";
}
export interface vaults_keysComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly properties: KeyProperties;
	readonly tags?: KeyCreateParametersTags;
}
export class vaults_keys_versions
	extends ArmResource<vaults_keys_versionsComponentInputs>
	implements vaults_keys_versionsComponentOutputs
{
	constructor(entity: ADKEntity, options: vaults_keys_versionsComponentInputs) {
		super(entity, options.name, "Microsoft.KeyVault/vaults/keys/versions", "2019-09-01", options);
	}
	public readonly apiVersion: "2019-09-01";
	public readonly id: string;
	public readonly type: "Microsoft.KeyVault/vaults/keys/versions";
}
export interface vaults_keys_versionsComponentOutputs {
	readonly apiVersion: "2019-09-01";
	readonly id: string;
	readonly type: "Microsoft.KeyVault/vaults/keys/versions";
}
export interface vaults_keys_versionsComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly properties?: KeyProperties;
	readonly tags?: ResourceTags;
}
export class vaults_privateEndpointConnections
	extends ArmResource<vaults_privateEndpointConnectionsComponentInputs>
	implements vaults_privateEndpointConnectionsComponentOutputs
{
	constructor(entity: ADKEntity, options: vaults_privateEndpointConnectionsComponentInputs) {
		super(entity, options.name, "Microsoft.KeyVault/vaults/privateEndpointConnections", "2019-09-01", options);
	}
	public readonly apiVersion: "2019-09-01";
	public readonly id: string;
	public readonly type: "Microsoft.KeyVault/vaults/privateEndpointConnections";
}
export interface vaults_privateEndpointConnectionsComponentOutputs {
	readonly apiVersion: "2019-09-01";
	readonly id: string;
	readonly type: "Microsoft.KeyVault/vaults/privateEndpointConnections";
}
export interface vaults_privateEndpointConnectionsComponentInputs {
	readonly etag?: string;
	readonly location?: string;
	readonly name: string;
	readonly properties?: PrivateEndpointConnectionProperties;
	readonly tags?: ResourceTags;
}
export class vaults_secrets extends ArmResource<vaults_secretsComponentInputs> implements vaults_secretsComponentOutputs {
	constructor(entity: ADKEntity, options: vaults_secretsComponentInputs) {
		super(entity, options.name, "Microsoft.KeyVault/vaults/secrets", "2019-09-01", options);
	}
	public readonly apiVersion: "2019-09-01";
	public readonly id: string;
	public readonly type: "Microsoft.KeyVault/vaults/secrets";
}
export interface vaults_secretsComponentOutputs {
	readonly apiVersion: "2019-09-01";
	readonly id: string;
	readonly type: "Microsoft.KeyVault/vaults/secrets";
}
export interface vaults_secretsComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly properties: SecretProperties;
	readonly tags?: SecretCreateOrUpdateParametersTags;
}
export interface AccessPolicyEntry {
	readonly applicationId?: string;
	readonly objectId: string;
	readonly permissions: Permissions;
	readonly tenantId: string;
}
export interface IPRule {
	readonly value: string;
}
export interface KeyAttributes {
	readonly created?: number;
	readonly enabled?: boolean;
	readonly exp?: number;
	readonly nbf?: number;
	readonly recoveryLevel?: "Purgeable" | "Recoverable" | "Recoverable+ProtectedSubscription" | "Recoverable+Purgeable";
	readonly updated?: number;
}
export interface KeyCreateParametersTags {
	readonly [key: string]: string;
}
export interface KeyProperties {
	readonly attributes?: KeyAttributes;
	readonly curveName?: "P-256" | "P-256K" | "P-384" | "P-521";
	readonly keyOps?: "decrypt" | "encrypt" | "import" | "sign" | "unwrapKey" | "verify" | "wrapKey"[];
	readonly keySize?: number;
	readonly keyUri?: string;
	readonly keyUriWithVersion?: string;
	readonly kty?: "EC" | "EC-HSM" | "RSA" | "RSA-HSM";
}
export interface NetworkRuleSet {
	readonly bypass?: "AzureServices" | "None";
	readonly defaultAction?: "Allow" | "Deny";
	readonly ipRules?: IPRule[];
	readonly virtualNetworkRules?: VirtualNetworkRule[];
}
export interface Permissions {
	readonly certificates?:
		| "all"
		| "backup"
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
		| "restore"
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
	readonly storage?:
		| "all"
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
		| "update"[];
}
export interface PrivateEndpoint {
	readonly id?: string;
}
export interface PrivateEndpointConnectionItem {
	readonly etag?: string;
	readonly id?: string;
	readonly properties?: PrivateEndpointConnectionProperties;
}
export interface PrivateEndpointConnectionProperties {
	readonly privateEndpoint?: PrivateEndpoint;
	readonly privateLinkServiceConnectionState?: PrivateLinkServiceConnectionState;
	readonly provisioningState?: "Creating" | "Deleting" | "Disconnected" | "Failed" | "Succeeded" | "Updating";
}
export interface PrivateLinkServiceConnectionState {
	readonly actionsRequired?: string;
	readonly description?: string;
	readonly status?: "Approved" | "Disconnected" | "Pending" | "Rejected";
}
export interface ResourceTags {
	readonly [key: string]: string;
}
export interface SecretAttributes {
	readonly created?: number;
	readonly enabled?: boolean;
	readonly exp?: number;
	readonly nbf?: number;
	readonly updated?: number;
}
export interface SecretCreateOrUpdateParametersTags {
	readonly [key: string]: string;
}
export interface SecretProperties {
	readonly attributes?: SecretAttributes;
	readonly contentType?: string;
	readonly secretUri?: string;
	readonly secretUriWithVersion?: string;
	readonly value?: string;
}
export interface Sku {
	readonly family: "A";
	readonly name: "premium";
}
export interface VaultAccessPolicyProperties {
	readonly accessPolicies: AccessPolicyEntry[];
}
export interface VaultCreateOrUpdateParametersTags {
	readonly [key: string]: string;
}
export interface VaultProperties {
	readonly accessPolicies?: AccessPolicyEntry[];
	readonly createMode?: "default";
	readonly enabledForDeployment?: boolean;
	readonly enabledForDiskEncryption?: boolean;
	readonly enabledForTemplateDeployment?: boolean;
	readonly enablePurgeProtection?: boolean;
	readonly enableRbacAuthorization?: boolean;
	readonly enableSoftDelete?: boolean;
	readonly hsmPoolResourceId?: string;
	readonly networkAcls?: NetworkRuleSet;
	readonly privateEndpointConnections?: PrivateEndpointConnectionItem[];
	readonly provisioningState?: "RegisteringDns" | "Succeeded";
	readonly sku: Sku;
	readonly softDeleteRetentionInDays?: number;
	readonly tenantId: string;
	readonly vaultUri?: string;
}
export interface VirtualNetworkRule {
	readonly id: string;
	readonly ignoreMissingVnetServiceEndpoint?: boolean;
}
export default {
	vaults: vaults,
	"vaults/accessPolicies": vaults_accessPolicies,
	"vaults/keys": vaults_keys,
	"vaults/keys/versions": vaults_keys_versions,
	"vaults/privateEndpointConnections": vaults_privateEndpointConnections,
	"vaults/secrets": vaults_secrets,
};
