import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class vaults extends ArmResource<vaultsComponentInputs> implements vaultsComponentOutputs {
	constructor(entity: ADKEntity, options: vaultsComponentInputs) {
		super(entity, options.name, "Microsoft.RecoveryServices/vaults", "2016-06-01", options);
	}
	public readonly apiVersion: "2016-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.RecoveryServices/vaults";
}
export interface vaultsComponentOutputs {
	readonly apiVersion: "2016-06-01";
	readonly id: string;
	readonly type: "Microsoft.RecoveryServices/vaults";
}
export interface vaultsComponentInputs {
	readonly eTag?: string | undefined;
	readonly identity?: IdentityData | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties?: VaultProperties | undefined;
	readonly sku?: Sku | undefined;
	readonly tags?: TrackedResourceTags | undefined;
}
export class vaults_certificates
	extends ArmResource<vaults_certificatesComponentInputs>
	implements vaults_certificatesComponentOutputs
{
	constructor(entity: ADKEntity, options: vaults_certificatesComponentInputs) {
		super(entity, options.name, "Microsoft.RecoveryServices/vaults/certificates", "2016-06-01", options);
	}
	public readonly apiVersion: "2016-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.RecoveryServices/vaults/certificates";
}
export interface vaults_certificatesComponentOutputs {
	readonly apiVersion: "2016-06-01";
	readonly id: string;
	readonly type: "Microsoft.RecoveryServices/vaults/certificates";
}
export interface vaults_certificatesComponentInputs {
	readonly name: string;
	readonly properties?: RawCertificateData | undefined;
}
export class vaults_extendedInformation
	extends ArmResource<vaults_extendedInformationComponentInputs>
	implements vaults_extendedInformationComponentOutputs
{
	constructor(entity: ADKEntity, options: vaults_extendedInformationComponentInputs) {
		super(entity, options.name, "Microsoft.RecoveryServices/vaults/extendedInformation", "2016-06-01", options);
	}
	public readonly apiVersion: "2016-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.RecoveryServices/vaults/extendedInformation";
}
export interface vaults_extendedInformationComponentOutputs {
	readonly apiVersion: "2016-06-01";
	readonly id: string;
	readonly type: "Microsoft.RecoveryServices/vaults/extendedInformation";
}
export interface vaults_extendedInformationComponentInputs {
	readonly eTag?: string | undefined;
	readonly name: string;
	readonly properties?: VaultExtendedInfo | undefined;
}
export interface IdentityData {
	readonly principalId?: string | undefined;
	readonly tenantId?: string | undefined;
	readonly type: "None" | "SystemAssigned";
}
export interface PrivateEndpoint {
	readonly id?: string | undefined;
}
export interface PrivateEndpointConnection {
	readonly privateEndpoint?: PrivateEndpoint | undefined;
	readonly privateLinkServiceConnectionState?: PrivateLinkServiceConnectionState | undefined;
	readonly provisioningState?: ("Deleting" | "Failed" | "Pending" | "Succeeded") | undefined;
}
export interface PrivateEndpointConnectionVaultProperties {
	readonly id?: string | undefined;
	readonly properties?: PrivateEndpointConnection | undefined;
}
export interface PrivateLinkServiceConnectionState {
	readonly actionsRequired?: string | undefined;
	readonly description?: string | undefined;
	readonly status?: ("Approved" | "Disconnected" | "Pending" | "Rejected") | undefined;
}
export interface RawCertificateData {
	readonly authType?: ("AAD" | "ACS" | "AccessControlService" | "AzureActiveDirectory" | "Invalid") | undefined;
	readonly certificate?: any | undefined;
}
export interface Sku {
	readonly name: "RS0" | "Standard";
}
export interface TrackedResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface UpgradeDetails {
	readonly endTimeUtc?: string | undefined;
	readonly lastUpdatedTimeUtc?: string | undefined;
	readonly message?: string | undefined;
	readonly operationId?: string | undefined;
	readonly previousResourceId?: string | undefined;
	readonly startTimeUtc?: string | undefined;
	readonly status?: ("Failed" | "InProgress" | "Unknown" | "Upgraded") | undefined;
	readonly triggerType?: ("ForcedUpgrade" | "UserTriggered") | undefined;
	readonly upgradedResourceId?: string | undefined;
}
export interface VaultExtendedInfo {
	readonly algorithm?: string | undefined;
	readonly encryptionKey?: string | undefined;
	readonly encryptionKeyThumbprint?: string | undefined;
	readonly integrityKey?: string | undefined;
}
export interface VaultProperties {
	readonly privateEndpointConnections?: PrivateEndpointConnectionVaultProperties[] | undefined;
	readonly privateEndpointStateForBackup?: ("Enabled" | "None") | undefined;
	readonly privateEndpointStateForSiteRecovery?: ("Enabled" | "None") | undefined;
	readonly provisioningState?: string | undefined;
	readonly upgradeDetails?: UpgradeDetails | undefined;
}
export default {
	vaults: vaults,
	"vaults/certificates": vaults_certificates,
	"vaults/extendedInformation": vaults_extendedInformation,
};
