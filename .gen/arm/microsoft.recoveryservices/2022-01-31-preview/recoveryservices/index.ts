import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class vaults extends ArmResource<vaultsComponentInputs> implements vaultsComponentOutputs {
	constructor(entity: ADKEntity, options: vaultsComponentInputs) {
		super(entity, options.name, "Microsoft.RecoveryServices/vaults", "2022-01-31-preview", options);
	}
	public readonly apiVersion: "2022-01-31-preview";
	public readonly id: string;
	public readonly type: "Microsoft.RecoveryServices/vaults";
}
export interface vaultsComponentOutputs {
	readonly apiVersion: "2022-01-31-preview";
	readonly id: string;
	readonly type: "Microsoft.RecoveryServices/vaults";
}
export interface vaultsComponentInputs {
	readonly etag?: string;
	readonly identity?: IdentityData;
	readonly location: string;
	readonly name: string;
	readonly properties?: VaultProperties;
	readonly sku?: Sku;
	readonly systemData?: SystemData;
	readonly tags?: TrackedResourceTags;
}
export class vaults_certificates
	extends ArmResource<vaults_certificatesComponentInputs>
	implements vaults_certificatesComponentOutputs
{
	constructor(entity: ADKEntity, options: vaults_certificatesComponentInputs) {
		super(entity, options.name, "Microsoft.RecoveryServices/vaults/certificates", "2022-01-31-preview", options);
	}
	public readonly apiVersion: "2022-01-31-preview";
	public readonly id: string;
	public readonly type: "Microsoft.RecoveryServices/vaults/certificates";
}
export interface vaults_certificatesComponentOutputs {
	readonly apiVersion: "2022-01-31-preview";
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
		super(entity, options.name, "Microsoft.RecoveryServices/vaults/extendedInformation", "2022-01-31-preview", options);
	}
	public readonly apiVersion: "2022-01-31-preview";
	public readonly id: string;
	public readonly type: "Microsoft.RecoveryServices/vaults/extendedInformation";
}
export interface vaults_extendedInformationComponentOutputs {
	readonly apiVersion: "2022-01-31-preview";
	readonly id: string;
	readonly type: "Microsoft.RecoveryServices/vaults/extendedInformation";
}
export interface vaults_extendedInformationComponentInputs {
	readonly etag?: string;
	readonly name: string;
	readonly properties?: VaultExtendedInfo;
}
export class vaults_operationResults
	extends ArmResource<vaults_operationResultsComponentInputs>
	implements vaults_operationResultsComponentOutputs
{
	constructor(entity: ADKEntity, options: vaults_operationResultsComponentInputs) {
		super(entity, options.name, "Microsoft.RecoveryServices/vaults/operationResults", "2022-01-31-preview", options);
	}
	public readonly apiVersion: "2022-01-31-preview";
	public readonly id: string;
	public readonly type: "Microsoft.RecoveryServices/vaults/operationResults";
}
export interface vaults_operationResultsComponentOutputs {
	readonly apiVersion: "2022-01-31-preview";
	readonly id: string;
	readonly type: "Microsoft.RecoveryServices/vaults/operationResults";
}
export interface vaults_operationResultsComponentInputs {
	readonly etag?: string;
	readonly identity?: IdentityData;
	readonly location?: string;
	readonly name: string;
	readonly properties?: VaultProperties;
	readonly sku?: Sku;
	readonly systemData?: SystemData;
	readonly tags?: TrackedResourceTags;
}
export interface CmkKekIdentity {
	readonly userAssignedIdentity?: string;
	readonly useSystemAssignedIdentity?: boolean;
}
export interface CmkKeyVaultProperties {
	readonly keyUri?: string;
}
export interface IdentityData {
	readonly principalId?: string;
	readonly tenantId?: string;
	readonly type: "None" | "SystemAssigned" | "SystemAssigned, UserAssigned" | "UserAssigned";
	readonly userAssignedIdentities?: IdentityDataUserAssignedIdentities;
}
export interface IdentityDataUserAssignedIdentities {
	readonly [key: string]: UserIdentity;
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
	readonly location?: string;
	readonly name?: string;
	readonly properties?: PrivateEndpointConnection;
	readonly type?: string;
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
	readonly capacity?: string;
	readonly family?: string;
	readonly name: "RS0" | "Standard";
	readonly size?: string;
	readonly tier?: string;
}
export interface SystemData {
	readonly createdAt?: string;
	readonly createdBy?: string;
	readonly createdByType?: "Application" | "Key" | "ManagedIdentity" | "User";
	readonly lastModifiedAt?: string;
	readonly lastModifiedBy?: string;
	readonly lastModifiedByType?: "Application" | "Key" | "ManagedIdentity" | "User";
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
export interface UserIdentity {
	readonly clientId?: string;
	readonly principalId?: string;
}
export interface VaultExtendedInfo {
	readonly algorithm?: string;
	readonly encryptionKey?: string;
	readonly encryptionKeyThumbprint?: string;
	readonly integrityKey?: string;
}
export interface VaultProperties {
	readonly backupStorageVersion?: "Unassigned" | "V1" | "V2";
	readonly encryption?: VaultPropertiesEncryption;
	readonly moveDetails?: VaultPropertiesMoveDetails;
	readonly moveState?:
		| "CommitFailed"
		| "CommitTimedout"
		| "CriticalFailure"
		| "Failure"
		| "InProgress"
		| "MoveSucceeded"
		| "PartialSuccess"
		| "PrepareFailed"
		| "PrepareTimedout"
		| "Unknown";
	readonly privateEndpointConnections?: PrivateEndpointConnectionVaultProperties[];
	readonly privateEndpointStateForBackup?: "Enabled" | "None";
	readonly privateEndpointStateForSiteRecovery?: "Enabled" | "None";
	readonly provisioningState?: string;
	readonly upgradeDetails?: UpgradeDetails;
}
export interface VaultPropertiesEncryption {
	readonly infrastructureEncryption?: "Disabled" | "Enabled";
	readonly kekIdentity?: CmkKekIdentity;
	readonly keyVaultProperties?: CmkKeyVaultProperties;
}
export interface VaultPropertiesMoveDetails {
	readonly completionTimeUtc?: string;
	readonly operationId?: string;
	readonly sourceResourceId?: string;
	readonly startTimeUtc?: string;
	readonly targetResourceId?: string;
}
export default {
	vaults: vaults,
	"vaults/certificates": vaults_certificates,
	"vaults/extendedInformation": vaults_extendedInformation,
	"vaults/operationResults": vaults_operationResults,
};
