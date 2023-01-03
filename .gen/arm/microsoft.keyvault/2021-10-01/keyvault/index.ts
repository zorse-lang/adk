import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class managedHSMs extends ArmResource<managedHSMsComponentInputs> implements managedHSMsComponentOutputs {
	constructor(entity: ADKEntity, options: managedHSMsComponentInputs) {
		super(entity, options.name, "Microsoft.KeyVault/managedHSMs", "2021-10-01", options);
	}
	public readonly apiVersion: "2021-10-01";
	public readonly id: string;
	public readonly type: "Microsoft.KeyVault/managedHSMs";
}
export interface managedHSMsComponentOutputs {
	readonly apiVersion: "2021-10-01";
	readonly id: string;
	readonly type: "Microsoft.KeyVault/managedHSMs";
}
export interface managedHSMsComponentInputs {
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: ManagedHsmProperties | undefined;
	readonly sku?: ManagedHsmSku | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: ManagedHsmResourceTags | undefined;
}
export class managedHSMs_privateEndpointConnections
	extends ArmResource<managedHSMs_privateEndpointConnectionsComponentInputs>
	implements managedHSMs_privateEndpointConnectionsComponentOutputs
{
	constructor(entity: ADKEntity, options: managedHSMs_privateEndpointConnectionsComponentInputs) {
		super(entity, options.name, "Microsoft.KeyVault/managedHSMs/privateEndpointConnections", "2021-10-01", options);
	}
	public readonly apiVersion: "2021-10-01";
	public readonly id: string;
	public readonly type: "Microsoft.KeyVault/managedHSMs/privateEndpointConnections";
}
export interface managedHSMs_privateEndpointConnectionsComponentOutputs {
	readonly apiVersion: "2021-10-01";
	readonly id: string;
	readonly type: "Microsoft.KeyVault/managedHSMs/privateEndpointConnections";
}
export interface managedHSMs_privateEndpointConnectionsComponentInputs {
	readonly etag?: string | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: MhsmPrivateEndpointConnectionProperties | undefined;
	readonly sku?: ManagedHsmSku | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: ManagedHsmResourceTags | undefined;
}
export class vaults extends ArmResource<vaultsComponentInputs> implements vaultsComponentOutputs {
	constructor(entity: ADKEntity, options: vaultsComponentInputs) {
		super(entity, options.name, "Microsoft.KeyVault/vaults", "2021-10-01", options);
	}
	public readonly apiVersion: "2021-10-01";
	public readonly id: string;
	public readonly type: "Microsoft.KeyVault/vaults";
}
export interface vaultsComponentOutputs {
	readonly apiVersion: "2021-10-01";
	readonly id: string;
	readonly type: "Microsoft.KeyVault/vaults";
}
export interface vaultsComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties: VaultProperties;
	readonly systemData?: SystemData | undefined;
	readonly tags?: VaultCreateOrUpdateParametersTags | undefined;
}
export class vaults_accessPolicies
	extends ArmResource<vaults_accessPoliciesComponentInputs>
	implements vaults_accessPoliciesComponentOutputs
{
	constructor(entity: ADKEntity, options: vaults_accessPoliciesComponentInputs) {
		super(entity, options.name, "Microsoft.KeyVault/vaults/accessPolicies", "2021-10-01", options);
	}
	public readonly apiVersion: "2021-10-01";
	public readonly id: string;
	public readonly type: "Microsoft.KeyVault/vaults/accessPolicies";
}
export interface vaults_accessPoliciesComponentOutputs {
	readonly apiVersion: "2021-10-01";
	readonly id: string;
	readonly type: "Microsoft.KeyVault/vaults/accessPolicies";
}
export interface vaults_accessPoliciesComponentInputs {
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties: VaultAccessPolicyProperties;
}
export class vaults_keys extends ArmResource<vaults_keysComponentInputs> implements vaults_keysComponentOutputs {
	constructor(entity: ADKEntity, options: vaults_keysComponentInputs) {
		super(entity, options.name, "Microsoft.KeyVault/vaults/keys", "2021-10-01", options);
	}
	public readonly apiVersion: "2021-10-01";
	public readonly id: string;
	public readonly type: "Microsoft.KeyVault/vaults/keys";
}
export interface vaults_keysComponentOutputs {
	readonly apiVersion: "2021-10-01";
	readonly id: string;
	readonly type: "Microsoft.KeyVault/vaults/keys";
}
export interface vaults_keysComponentInputs {
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties: KeyProperties;
	readonly tags?: KeyCreateParametersTags | undefined;
}
export class vaults_keys_versions
	extends ArmResource<vaults_keys_versionsComponentInputs>
	implements vaults_keys_versionsComponentOutputs
{
	constructor(entity: ADKEntity, options: vaults_keys_versionsComponentInputs) {
		super(entity, options.name, "Microsoft.KeyVault/vaults/keys/versions", "2021-10-01", options);
	}
	public readonly apiVersion: "2021-10-01";
	public readonly id: string;
	public readonly type: "Microsoft.KeyVault/vaults/keys/versions";
}
export interface vaults_keys_versionsComponentOutputs {
	readonly apiVersion: "2021-10-01";
	readonly id: string;
	readonly type: "Microsoft.KeyVault/vaults/keys/versions";
}
export interface vaults_keys_versionsComponentInputs {
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: KeyProperties | undefined;
	readonly tags?: ResourceTags | undefined;
}
export class vaults_privateEndpointConnections
	extends ArmResource<vaults_privateEndpointConnectionsComponentInputs>
	implements vaults_privateEndpointConnectionsComponentOutputs
{
	constructor(entity: ADKEntity, options: vaults_privateEndpointConnectionsComponentInputs) {
		super(entity, options.name, "Microsoft.KeyVault/vaults/privateEndpointConnections", "2021-10-01", options);
	}
	public readonly apiVersion: "2021-10-01";
	public readonly id: string;
	public readonly type: "Microsoft.KeyVault/vaults/privateEndpointConnections";
}
export interface vaults_privateEndpointConnectionsComponentOutputs {
	readonly apiVersion: "2021-10-01";
	readonly id: string;
	readonly type: "Microsoft.KeyVault/vaults/privateEndpointConnections";
}
export interface vaults_privateEndpointConnectionsComponentInputs {
	readonly etag?: string | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: PrivateEndpointConnectionProperties | undefined;
	readonly tags?: ResourceTags | undefined;
}
export class vaults_secrets extends ArmResource<vaults_secretsComponentInputs> implements vaults_secretsComponentOutputs {
	constructor(entity: ADKEntity, options: vaults_secretsComponentInputs) {
		super(entity, options.name, "Microsoft.KeyVault/vaults/secrets", "2021-10-01", options);
	}
	public readonly apiVersion: "2021-10-01";
	public readonly id: string;
	public readonly type: "Microsoft.KeyVault/vaults/secrets";
}
export interface vaults_secretsComponentOutputs {
	readonly apiVersion: "2021-10-01";
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
export interface IPRule {
	readonly value: string;
}
export interface KeyAttributes {
	readonly created?: number | undefined;
	readonly enabled?: boolean | undefined;
	readonly exp?: number | undefined;
	readonly exportable?: boolean | undefined;
	readonly nbf?: number | undefined;
	readonly recoveryLevel?:
		| ("Purgeable" | "Recoverable" | "Recoverable+ProtectedSubscription" | "Recoverable+Purgeable")
		| undefined;
	readonly updated?: number | undefined;
}
export interface KeyCreateParametersTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface KeyProperties {
	readonly attributes?: KeyAttributes | undefined;
	readonly curveName?: ("P-256" | "P-256K" | "P-384" | "P-521") | undefined;
	readonly keyOps?: ("decrypt" | "encrypt" | "import" | "sign" | "unwrapKey" | "verify" | "wrapKey"[]) | undefined;
	readonly keySize?: number | undefined;
	readonly keyUri?: string | undefined;
	readonly keyUriWithVersion?: string | undefined;
	readonly kty?: ("EC" | "EC-HSM" | "RSA" | "RSA-HSM") | undefined;
}
export interface ManagedHsmProperties {
	readonly createMode?: "default" | undefined;
	readonly enablePurgeProtection?: boolean | undefined;
	readonly enableSoftDelete?: boolean | undefined;
	readonly hsmUri?: string | undefined;
	readonly initialAdminObjectIds?: string[] | undefined;
	readonly networkAcls?: MhsmNetworkRuleSet | undefined;
	readonly privateEndpointConnections?: MhsmPrivateEndpointConnectionItem[] | undefined;
	readonly provisioningState?:
		| (
				| "Activated"
				| "Deleting"
				| "Failed"
				| "Provisioning"
				| "Restoring"
				| "SecurityDomainRestore"
				| "Succeeded"
				| "Updating"
		  )
		| undefined;
	readonly publicNetworkAccess?: ("Disabled" | "Enabled") | undefined;
	readonly scheduledPurgeDate?: string | undefined;
	readonly softDeleteRetentionInDays?: number | undefined;
	readonly statusMessage?: string | undefined;
	readonly tenantId?: string | undefined;
}
export interface ManagedHsmResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface ManagedHsmSku {
	readonly family: "B";
	readonly name: "Custom_B32";
}
export interface MhsmipRule {
	readonly value: string;
}
export interface MhsmNetworkRuleSet {
	readonly bypass?: ("AzureServices" | "None") | undefined;
	readonly defaultAction?: ("Allow" | "Deny") | undefined;
	readonly ipRules?: MhsmipRule[] | undefined;
	readonly virtualNetworkRules?: MhsmVirtualNetworkRule[] | undefined;
}
export interface MhsmPrivateEndpoint {
	readonly id?: string | undefined;
}
export interface MhsmPrivateEndpointConnectionItem {
	readonly etag?: string | undefined;
	readonly id?: string | undefined;
	readonly properties?: MhsmPrivateEndpointConnectionProperties | undefined;
}
export interface MhsmPrivateEndpointConnectionProperties {
	readonly privateEndpoint?: MhsmPrivateEndpoint | undefined;
	readonly privateLinkServiceConnectionState?: MhsmPrivateLinkServiceConnectionState | undefined;
	readonly provisioningState?:
		| ("Creating" | "Deleting" | "Disconnected" | "Failed" | "Succeeded" | "Updating")
		| undefined;
}
export interface MhsmPrivateLinkServiceConnectionState {
	readonly actionsRequired?: "None" | undefined;
	readonly description?: string | undefined;
	readonly status?: ("Approved" | "Disconnected" | "Pending" | "Rejected") | undefined;
}
export interface MhsmVirtualNetworkRule {
	readonly id: string;
}
export interface NetworkRuleSet {
	readonly bypass?: ("AzureServices" | "None") | undefined;
	readonly defaultAction?: ("Allow" | "Deny") | undefined;
	readonly ipRules?: IPRule[] | undefined;
	readonly virtualNetworkRules?: VirtualNetworkRule[] | undefined;
}
export interface Permissions {
	readonly certificates?:
		| (
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
				| "update"[]
		  )
		| undefined;
	readonly keys?:
		| (
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
				| "wrapKey"[]
		  )
		| undefined;
	readonly secrets?:
		| ("all" | "backup" | "delete" | "get" | "list" | "purge" | "recover" | "restore" | "set"[])
		| undefined;
	readonly storage?:
		| (
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
				| "update"[]
		  )
		| undefined;
}
export interface PrivateEndpoint {
	readonly id?: string | undefined;
}
export interface PrivateEndpointConnectionItem {
	readonly etag?: string | undefined;
	readonly id?: string | undefined;
	readonly properties?: PrivateEndpointConnectionProperties | undefined;
}
export interface PrivateEndpointConnectionProperties {
	readonly privateEndpoint?: PrivateEndpoint | undefined;
	readonly privateLinkServiceConnectionState?: PrivateLinkServiceConnectionState | undefined;
	readonly provisioningState?:
		| ("Creating" | "Deleting" | "Disconnected" | "Failed" | "Succeeded" | "Updating")
		| undefined;
}
export interface PrivateLinkServiceConnectionState {
	readonly actionsRequired?: "None" | undefined;
	readonly description?: string | undefined;
	readonly status?: ("Approved" | "Disconnected" | "Pending" | "Rejected") | undefined;
}
export interface ResourceTags {
	readonly "[ key: string ]"?: string | undefined;
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
export interface SystemData {
	readonly createdAt?: string | undefined;
	readonly createdBy?: string | undefined;
	readonly createdByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
	readonly lastModifiedAt?: string | undefined;
	readonly lastModifiedBy?: string | undefined;
	readonly lastModifiedByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
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
	readonly enableRbacAuthorization?: boolean | undefined;
	readonly enableSoftDelete?: boolean | undefined;
	readonly hsmPoolResourceId?: string | undefined;
	readonly networkAcls?: NetworkRuleSet | undefined;
	readonly privateEndpointConnections?: PrivateEndpointConnectionItem[] | undefined;
	readonly provisioningState?: ("RegisteringDns" | "Succeeded") | undefined;
	readonly publicNetworkAccess?: string | undefined;
	readonly sku: Sku;
	readonly softDeleteRetentionInDays?: number | undefined;
	readonly tenantId: string;
	readonly vaultUri?: string | undefined;
}
export interface VirtualNetworkRule {
	readonly id: string;
	readonly ignoreMissingVnetServiceEndpoint?: boolean | undefined;
}
export default {
	managedHSMs: managedHSMs,
	"managedHSMs/privateEndpointConnections": managedHSMs_privateEndpointConnections,
	vaults: vaults,
	"vaults/accessPolicies": vaults_accessPolicies,
	"vaults/keys": vaults_keys,
	"vaults/keys/versions": vaults_keys_versions,
	"vaults/privateEndpointConnections": vaults_privateEndpointConnections,
	"vaults/secrets": vaults_secrets,
};
