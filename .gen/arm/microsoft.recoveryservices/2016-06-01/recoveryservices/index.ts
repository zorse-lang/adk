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
	readonly eTag?: string;
	readonly identity?: IdentityData;
	readonly location: string;
	readonly name: string;
	readonly properties?: VaultProperties;
	readonly sku?: Sku;
	readonly tags?: TrackedResourceTags;
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
	readonly properties?: RawCertificateData;
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
	readonly eTag?: string;
	readonly name: string;
	readonly properties?: VaultExtendedInfo;
}
export interface IdentityData {
	readonly principalId?: string;
	readonly tenantId?: string;
	readonly type: "None" | "SystemAssigned";
}
export interface PrivateEndpoint {
	readonly id?: string;
}
export interface PrivateEndpointConnection {
	readonly privateEndpoint?: PrivateEndpoint;
	readonly privateLinkServiceConnectionState?: PrivateLinkServiceConnectionState;
	readonly provisioningState?: "Deleting" | "Failed" | "Pending" | "Succeeded";
}
export interface PrivateEndpointConnectionVaultProperties {
	readonly id?: string;
	readonly properties?: PrivateEndpointConnection;
}
export interface PrivateLinkServiceConnectionState {
	readonly actionsRequired?: string;
	readonly description?: string;
	readonly status?: "Approved" | "Disconnected" | "Pending" | "Rejected";
}
export interface RawCertificateData {
	readonly authType?: "AAD" | "ACS" | "AccessControlService" | "AzureActiveDirectory" | "Invalid";
	readonly certificate?: any;
}
export interface Sku {
	readonly name: "RS0" | "Standard";
}
export interface TrackedResourceTags {
	readonly [key: string]: string;
}
export interface UpgradeDetails {
	readonly endTimeUtc?: string;
	readonly lastUpdatedTimeUtc?: string;
	readonly message?: string;
	readonly operationId?: string;
	readonly previousResourceId?: string;
	readonly startTimeUtc?: string;
	readonly status?: "Failed" | "InProgress" | "Unknown" | "Upgraded";
	readonly triggerType?: "ForcedUpgrade" | "UserTriggered";
	readonly upgradedResourceId?: string;
}
export interface VaultExtendedInfo {
	readonly algorithm?: string;
	readonly encryptionKey?: string;
	readonly encryptionKeyThumbprint?: string;
	readonly integrityKey?: string;
}
export interface VaultProperties {
	readonly privateEndpointConnections?: PrivateEndpointConnectionVaultProperties[];
	readonly privateEndpointStateForBackup?: "Enabled" | "None";
	readonly privateEndpointStateForSiteRecovery?: "Enabled" | "None";
	readonly provisioningState?: string;
	readonly upgradeDetails?: UpgradeDetails;
}
export default {
	vaults: vaults,
	"vaults/certificates": vaults_certificates,
	"vaults/extendedInformation": vaults_extendedInformation,
};
