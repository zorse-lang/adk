import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class vaults extends ArmResource<vaultsComponentInputs> implements vaultsComponentOutputs {
	constructor(entity: ADKEntity, options: vaultsComponentInputs) {
		super(entity, options.name, "Microsoft.RecoveryServices/vaults", "2022-04-01", options);
	}
	public readonly apiVersion: "2022-04-01";
	public readonly id: string;
	public readonly type: "Microsoft.RecoveryServices/vaults";
}
export interface vaultsComponentOutputs {
	readonly apiVersion: "2022-04-01";
	readonly id: string;
	readonly type: "Microsoft.RecoveryServices/vaults";
}
export interface vaultsComponentInputs {
	readonly etag?: string | undefined;
	readonly identity?: IdentityData | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties?: VaultProperties | undefined;
	readonly sku?: Sku | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: TrackedResourceTags | undefined;
}
export class vaults_certificates
	extends ArmResource<vaults_certificatesComponentInputs>
	implements vaults_certificatesComponentOutputs
{
	constructor(entity: ADKEntity, options: vaults_certificatesComponentInputs) {
		super(entity, options.name, "Microsoft.RecoveryServices/vaults/certificates", "2022-04-01", options);
	}
	public readonly apiVersion: "2022-04-01";
	public readonly id: string;
	public readonly type: "Microsoft.RecoveryServices/vaults/certificates";
}
export interface vaults_certificatesComponentOutputs {
	readonly apiVersion: "2022-04-01";
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
		super(entity, options.name, "Microsoft.RecoveryServices/vaults/extendedInformation", "2022-04-01", options);
	}
	public readonly apiVersion: "2022-04-01";
	public readonly id: string;
	public readonly type: "Microsoft.RecoveryServices/vaults/extendedInformation";
}
export interface vaults_extendedInformationComponentOutputs {
	readonly apiVersion: "2022-04-01";
	readonly id: string;
	readonly type: "Microsoft.RecoveryServices/vaults/extendedInformation";
}
export interface vaults_extendedInformationComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly properties?: VaultExtendedInfo | undefined;
}
export class vaults_operationResults
	extends ArmResource<vaults_operationResultsComponentInputs>
	implements vaults_operationResultsComponentOutputs
{
	constructor(entity: ADKEntity, options: vaults_operationResultsComponentInputs) {
		super(entity, options.name, "Microsoft.RecoveryServices/vaults/operationResults", "2022-04-01", options);
	}
	public readonly apiVersion: "2022-04-01";
	public readonly id: string;
	public readonly type: "Microsoft.RecoveryServices/vaults/operationResults";
}
export interface vaults_operationResultsComponentOutputs {
	readonly apiVersion: "2022-04-01";
	readonly id: string;
	readonly type: "Microsoft.RecoveryServices/vaults/operationResults";
}
export interface vaults_operationResultsComponentInputs {
	readonly etag?: string | undefined;
	readonly identity?: IdentityData | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: VaultProperties | undefined;
	readonly sku?: Sku | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: TrackedResourceTags | undefined;
}
export interface AzureMonitorAlertSettings {
	readonly alertsForAllJobFailures?: ("Disabled" | "Enabled") | undefined;
}
export interface ClassicAlertSettings {
	readonly alertsForCriticalOperations?: ("Disabled" | "Enabled") | undefined;
}
export interface CmkKekIdentity {
	readonly userAssignedIdentity?: string | undefined;
	readonly useSystemAssignedIdentity?: boolean | undefined;
}
export interface CmkKeyVaultProperties {
	readonly keyUri?: string | undefined;
}
export interface IdentityData {
	readonly principalId?: string | undefined;
	readonly tenantId?: string | undefined;
	readonly type: "None" | "SystemAssigned" | "SystemAssigned, UserAssigned" | "UserAssigned";
	readonly userAssignedIdentities?: IdentityDataUserAssignedIdentities | undefined;
}
export interface IdentityDataUserAssignedIdentities {
	readonly "[ key: string ]"?: UserIdentity | undefined;
}
export interface MonitoringSettings {
	readonly azureMonitorAlertSettings?: AzureMonitorAlertSettings | undefined;
	readonly classicAlertSettings?: ClassicAlertSettings | undefined;
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
	readonly location?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: PrivateEndpointConnection | undefined;
	readonly type?: string | undefined;
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
	readonly capacity?: string | undefined;
	readonly family?: string | undefined;
	readonly name: "RS0" | "Standard";
	readonly size?: string | undefined;
	readonly tier?: string | undefined;
}
export interface SystemData {
	readonly createdAt?: string | undefined;
	readonly createdBy?: string | undefined;
	readonly createdByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
	readonly lastModifiedAt?: string | undefined;
	readonly lastModifiedBy?: string | undefined;
	readonly lastModifiedByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
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
export interface UserIdentity {
	readonly clientId?: string | undefined;
	readonly principalId?: string | undefined;
}
export interface VaultExtendedInfo {
	readonly algorithm?: string | undefined;
	readonly encryptionKey?: string | undefined;
	readonly encryptionKeyThumbprint?: string | undefined;
	readonly integrityKey?: string | undefined;
}
export interface VaultProperties {
	readonly backupStorageVersion?: ("Unassigned" | "V1" | "V2") | undefined;
	readonly encryption?: VaultPropertiesEncryption | undefined;
	readonly monitoringSettings?: MonitoringSettings | undefined;
	readonly moveDetails?: VaultPropertiesMoveDetails | undefined;
	readonly moveState?:
		| (
				| "CommitFailed"
				| "CommitTimedout"
				| "CriticalFailure"
				| "Failure"
				| "InProgress"
				| "MoveSucceeded"
				| "PartialSuccess"
				| "PrepareFailed"
				| "PrepareTimedout"
				| "Unknown"
		  )
		| undefined;
	readonly privateEndpointConnections?: PrivateEndpointConnectionVaultProperties[] | undefined;
	readonly privateEndpointStateForBackup?: ("Enabled" | "None") | undefined;
	readonly privateEndpointStateForSiteRecovery?: ("Enabled" | "None") | undefined;
	readonly provisioningState?: string | undefined;
	readonly redundancySettings?: VaultPropertiesRedundancySettings | undefined;
	readonly upgradeDetails?: UpgradeDetails | undefined;
}
export interface VaultPropertiesEncryption {
	readonly infrastructureEncryption?: ("Disabled" | "Enabled") | undefined;
	readonly kekIdentity?: CmkKekIdentity | undefined;
	readonly keyVaultProperties?: CmkKeyVaultProperties | undefined;
}
export interface VaultPropertiesMoveDetails {
	readonly completionTimeUtc?: string | undefined;
	readonly operationId?: string | undefined;
	readonly sourceResourceId?: string | undefined;
	readonly startTimeUtc?: string | undefined;
	readonly targetResourceId?: string | undefined;
}
export interface VaultPropertiesRedundancySettings {
	readonly crossRegionRestore?: ("Disabled" | "Enabled") | undefined;
	readonly standardTierStorageRedundancy?: ("GeoRedundant" | "LocallyRedundant" | "ZoneRedundant") | undefined;
}
export default {
	vaults: vaults,
	"vaults/certificates": vaults_certificates,
	"vaults/extendedInformation": vaults_extendedInformation,
	"vaults/operationResults": vaults_operationResults,
};
