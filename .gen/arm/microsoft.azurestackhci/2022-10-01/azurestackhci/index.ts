import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class clusters extends ArmResource<clustersComponentInputs> implements clustersComponentOutputs {
	constructor(entity: ADKEntity, options: clustersComponentInputs) {
		super(entity, options.name, "Microsoft.AzureStackHCI/clusters", "2022-10-01", options);
	}
	public readonly apiVersion: "2022-10-01";
	public readonly id: string;
	public readonly type: "Microsoft.AzureStackHCI/clusters";
}
export interface clustersComponentOutputs {
	readonly apiVersion: "2022-10-01";
	readonly id: string;
	readonly type: "Microsoft.AzureStackHCI/clusters";
}
export interface clustersComponentInputs {
	readonly identity?: ManagedServiceIdentity;
	readonly location: string;
	readonly name: string;
	readonly properties?: ClusterProperties;
	readonly systemData?: SystemData;
	readonly tags?: TrackedResourceTags;
}
export class clusters_arcSettings
	extends ArmResource<clusters_arcSettingsComponentInputs>
	implements clusters_arcSettingsComponentOutputs
{
	constructor(entity: ADKEntity, options: clusters_arcSettingsComponentInputs) {
		super(entity, options.name, "Microsoft.AzureStackHCI/clusters/arcSettings", "2022-10-01", options);
	}
	public readonly apiVersion: "2022-10-01";
	public readonly id: string;
	public readonly type: "Microsoft.AzureStackHCI/clusters/arcSettings";
}
export interface clusters_arcSettingsComponentOutputs {
	readonly apiVersion: "2022-10-01";
	readonly id: string;
	readonly type: "Microsoft.AzureStackHCI/clusters/arcSettings";
}
export interface clusters_arcSettingsComponentInputs {
	readonly name: string;
	readonly properties?: ArcSettingProperties;
	readonly systemData?: SystemData;
}
export class clusters_arcSettings_extensions
	extends ArmResource<clusters_arcSettings_extensionsComponentInputs>
	implements clusters_arcSettings_extensionsComponentOutputs
{
	constructor(entity: ADKEntity, options: clusters_arcSettings_extensionsComponentInputs) {
		super(entity, options.name, "Microsoft.AzureStackHCI/clusters/arcSettings/extensions", "2022-10-01", options);
	}
	public readonly apiVersion: "2022-10-01";
	public readonly id: string;
	public readonly type: "Microsoft.AzureStackHCI/clusters/arcSettings/extensions";
}
export interface clusters_arcSettings_extensionsComponentOutputs {
	readonly apiVersion: "2022-10-01";
	readonly id: string;
	readonly type: "Microsoft.AzureStackHCI/clusters/arcSettings/extensions";
}
export interface clusters_arcSettings_extensionsComponentInputs {
	readonly name: string;
	readonly properties?: ExtensionProperties;
	readonly systemData?: SystemData;
}
export class clusters_publishers
	extends ArmResource<clusters_publishersComponentInputs>
	implements clusters_publishersComponentOutputs
{
	constructor(entity: ADKEntity, options: clusters_publishersComponentInputs) {
		super(entity, options.name, "Microsoft.AzureStackHCI/clusters/publishers", "2022-10-01", options);
	}
	public readonly apiVersion: "2022-10-01";
	public readonly id: string;
	public readonly type: "Microsoft.AzureStackHCI/clusters/publishers";
}
export interface clusters_publishersComponentOutputs {
	readonly apiVersion: "2022-10-01";
	readonly id: string;
	readonly type: "Microsoft.AzureStackHCI/clusters/publishers";
}
export interface clusters_publishersComponentInputs {
	readonly name: string;
	readonly properties?: PublisherProperties;
	readonly systemData?: SystemData;
}
export class clusters_publishers_offers
	extends ArmResource<clusters_publishers_offersComponentInputs>
	implements clusters_publishers_offersComponentOutputs
{
	constructor(entity: ADKEntity, options: clusters_publishers_offersComponentInputs) {
		super(entity, options.name, "Microsoft.AzureStackHCI/clusters/publishers/offers", "2022-10-01", options);
	}
	public readonly apiVersion: "2022-10-01";
	public readonly id: string;
	public readonly type: "Microsoft.AzureStackHCI/clusters/publishers/offers";
}
export interface clusters_publishers_offersComponentOutputs {
	readonly apiVersion: "2022-10-01";
	readonly id: string;
	readonly type: "Microsoft.AzureStackHCI/clusters/publishers/offers";
}
export interface clusters_publishers_offersComponentInputs {
	readonly name: string;
	readonly properties?: OfferProperties;
	readonly systemData?: SystemData;
}
export class clusters_publishers_offers_skus
	extends ArmResource<clusters_publishers_offers_skusComponentInputs>
	implements clusters_publishers_offers_skusComponentOutputs
{
	constructor(entity: ADKEntity, options: clusters_publishers_offers_skusComponentInputs) {
		super(entity, options.name, "Microsoft.AzureStackHCI/clusters/publishers/offers/skus", "2022-10-01", options);
	}
	public readonly apiVersion: "2022-10-01";
	public readonly id: string;
	public readonly type: "Microsoft.AzureStackHCI/clusters/publishers/offers/skus";
}
export interface clusters_publishers_offers_skusComponentOutputs {
	readonly apiVersion: "2022-10-01";
	readonly id: string;
	readonly type: "Microsoft.AzureStackHCI/clusters/publishers/offers/skus";
}
export interface clusters_publishers_offers_skusComponentInputs {
	readonly name: string;
	readonly properties?: SkuProperties;
	readonly systemData?: SystemData;
}
export class clusters_updates
	extends ArmResource<clusters_updatesComponentInputs>
	implements clusters_updatesComponentOutputs
{
	constructor(entity: ADKEntity, options: clusters_updatesComponentInputs) {
		super(entity, options.name, "Microsoft.AzureStackHCI/clusters/updates", "2022-10-01", options);
	}
	public readonly apiVersion: "2022-10-01";
	public readonly id: string;
	public readonly type: "Microsoft.AzureStackHCI/clusters/updates";
}
export interface clusters_updatesComponentOutputs {
	readonly apiVersion: "2022-10-01";
	readonly id: string;
	readonly type: "Microsoft.AzureStackHCI/clusters/updates";
}
export interface clusters_updatesComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly properties?: UpdateProperties;
	readonly systemData?: SystemData;
}
export class clusters_updates_updateRuns
	extends ArmResource<clusters_updates_updateRunsComponentInputs>
	implements clusters_updates_updateRunsComponentOutputs
{
	constructor(entity: ADKEntity, options: clusters_updates_updateRunsComponentInputs) {
		super(entity, options.name, "Microsoft.AzureStackHCI/clusters/updates/updateRuns", "2022-10-01", options);
	}
	public readonly apiVersion: "2022-10-01";
	public readonly id: string;
	public readonly type: "Microsoft.AzureStackHCI/clusters/updates/updateRuns";
}
export interface clusters_updates_updateRunsComponentOutputs {
	readonly apiVersion: "2022-10-01";
	readonly id: string;
	readonly type: "Microsoft.AzureStackHCI/clusters/updates/updateRuns";
}
export interface clusters_updates_updateRunsComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly properties?: UpdateRunProperties;
	readonly systemData?: SystemData;
}
export class clusters_updateSummaries
	extends ArmResource<clusters_updateSummariesComponentInputs>
	implements clusters_updateSummariesComponentOutputs
{
	constructor(entity: ADKEntity, options: clusters_updateSummariesComponentInputs) {
		super(entity, options.name, "Microsoft.AzureStackHCI/clusters/updateSummaries", "2022-10-01", options);
	}
	public readonly apiVersion: "2022-10-01";
	public readonly id: string;
	public readonly type: "Microsoft.AzureStackHCI/clusters/updateSummaries";
}
export interface clusters_updateSummariesComponentOutputs {
	readonly apiVersion: "2022-10-01";
	readonly id: string;
	readonly type: "Microsoft.AzureStackHCI/clusters/updateSummaries";
}
export interface clusters_updateSummariesComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly properties?: UpdateSummariesProperties;
	readonly systemData?: SystemData;
}
export interface ArcSettingProperties {
	readonly aggregateState?:
		| "Canceled"
		| "Connected"
		| "Creating"
		| "Deleted"
		| "Deleting"
		| "Disconnected"
		| "Error"
		| "Failed"
		| "InProgress"
		| "Moving"
		| "NotSpecified"
		| "PartiallyConnected"
		| "PartiallySucceeded"
		| "Succeeded"
		| "Updating";
	readonly arcApplicationClientId?: string;
	readonly arcApplicationObjectId?: string;
	readonly arcApplicationTenantId?: string;
	readonly arcInstanceResourceGroup?: string;
	readonly arcServicePrincipalObjectId?: string;
	readonly connectivityProperties?: any;
	readonly perNodeDetails?: PerNodeState[];
	readonly provisioningState?: "Accepted" | "Canceled" | "Failed" | "Provisioning" | "Succeeded";
}
export interface ClusterDesiredProperties {
	readonly diagnosticLevel?: "Basic" | "Enhanced" | "Off";
	readonly windowsServerSubscription?: "Disabled" | "Enabled";
}
export interface ClusterNode {
	readonly coreCount?: number;
	readonly id?: number;
	readonly manufacturer?: string;
	readonly memoryInGiB?: number;
	readonly model?: string;
	readonly name?: string;
	readonly nodeType?: "FirstParty" | "ThirdParty";
	readonly osDisplayVersion?: string;
	readonly osName?: string;
	readonly osVersion?: string;
	readonly serialNumber?: string;
	readonly windowsServerSubscription?: "Disabled" | "Enabled";
}
export interface ClusterProperties {
	readonly aadApplicationObjectId?: string;
	readonly aadClientId?: string;
	readonly aadServicePrincipalObjectId?: string;
	readonly aadTenantId?: string;
	readonly billingModel?: string;
	readonly cloudId?: string;
	readonly cloudManagementEndpoint?: string;
	readonly desiredProperties?: ClusterDesiredProperties;
	readonly lastBillingTimestamp?: string;
	readonly lastSyncTimestamp?: string;
	readonly provisioningState?: "Accepted" | "Canceled" | "Failed" | "Provisioning" | "Succeeded";
	readonly registrationTimestamp?: string;
	readonly reportedProperties?: ClusterReportedProperties;
	readonly serviceEndpoint?: string;
	readonly softwareAssuranceProperties?: SoftwareAssuranceProperties;
	readonly status?: "ConnectedRecently" | "Disconnected" | "Error" | "NotConnectedRecently" | "NotYetRegistered";
	readonly trialDaysRemaining?: number;
}
export interface ClusterReportedProperties {
	readonly clusterId?: string;
	readonly clusterName?: string;
	readonly clusterVersion?: string;
	readonly diagnosticLevel?: "Basic" | "Enhanced" | "Off";
	readonly imdsAttestation?: "Disabled" | "Enabled";
	readonly lastUpdated?: string;
	readonly nodes?: ClusterNode[];
}
export interface ExtensionParameters {
	readonly autoUpgradeMinorVersion?: boolean;
	readonly forceUpdateTag?: string;
	readonly protectedSettings?: any;
	readonly publisher?: string;
	readonly settings?: any;
	readonly type?: string;
	readonly typeHandlerVersion?: string;
}
export interface ExtensionProperties {
	readonly aggregateState?:
		| "Canceled"
		| "Connected"
		| "Creating"
		| "Deleted"
		| "Deleting"
		| "Disconnected"
		| "Error"
		| "Failed"
		| "InProgress"
		| "Moving"
		| "NotSpecified"
		| "PartiallyConnected"
		| "PartiallySucceeded"
		| "Succeeded"
		| "Updating";
	readonly extensionParameters?: ExtensionParameters;
	readonly perNodeExtensionDetails?: PerNodeExtensionState[];
	readonly provisioningState?: "Accepted" | "Canceled" | "Failed" | "Provisioning" | "Succeeded";
}
export interface ManagedServiceIdentity {
	readonly principalId?: string;
	readonly tenantId?: string;
	readonly type: "None" | "SystemAssigned" | "SystemAssigned, UserAssigned" | "UserAssigned";
	readonly userAssignedIdentities?: UserAssignedIdentities;
}
export interface OfferProperties {
	readonly content?: string;
	readonly contentVersion?: string;
	readonly provisioningState?: string;
	readonly publisherId?: string;
	readonly skuMappings?: SkuMappings[];
}
export interface PackageVersionInfo {
	readonly lastUpdated?: string;
	readonly packageType?: string;
	readonly version?: string;
}
export interface PerNodeExtensionState {
	readonly extension?: string;
	readonly name?: string;
	readonly state?:
		| "Canceled"
		| "Connected"
		| "Creating"
		| "Deleted"
		| "Deleting"
		| "Disconnected"
		| "Error"
		| "Failed"
		| "Moving"
		| "NotSpecified"
		| "Succeeded"
		| "Updating";
}
export interface PerNodeState {
	readonly arcInstance?: string;
	readonly name?: string;
	readonly state?:
		| "Canceled"
		| "Connected"
		| "Creating"
		| "Deleted"
		| "Deleting"
		| "Disconnected"
		| "Error"
		| "Failed"
		| "Moving"
		| "NotSpecified"
		| "Succeeded"
		| "Updating";
}
export interface PublisherProperties {
	readonly provisioningState?: string;
}
export interface SkuMappings {
	readonly catalogPlanId?: string;
	readonly marketplaceSkuId?: string;
	readonly marketplaceSkuVersions?: string[];
}
export interface SkuProperties {
	readonly content?: string;
	readonly contentVersion?: string;
	readonly offerId?: string;
	readonly provisioningState?: string;
	readonly publisherId?: string;
	readonly skuMappings?: SkuMappings[];
}
export interface SoftwareAssuranceProperties {
	readonly lastUpdated?: string;
	readonly softwareAssuranceIntent?: "Disable" | "Enable";
	readonly softwareAssuranceStatus?: "Disabled" | "Enabled";
}
export interface Step {
	readonly description?: string;
	readonly endTimeUtc?: string;
	readonly errorMessage?: string;
	readonly lastUpdatedTimeUtc?: string;
	readonly name?: string;
	readonly startTimeUtc?: string;
	readonly status?: string;
	readonly steps?: Step[];
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
export interface UpdatePrerequisite {
	readonly packageName?: string;
	readonly updateType?: string;
	readonly version?: string;
}
export interface UpdateProperties {
	readonly additionalProperties?: string;
	readonly availabilityType?: "Local" | "Notify" | "Online";
	readonly description?: string;
	readonly displayName?: string;
	readonly installedDate?: string;
	readonly packagePath?: string;
	readonly packageSizeInMb?: number;
	readonly packageType?: string;
	readonly prerequisites?: UpdatePrerequisite[];
	readonly provisioningState?: "Accepted" | "Canceled" | "Failed" | "Provisioning" | "Succeeded";
	readonly publisher?: string;
	readonly releaseLink?: string;
	readonly state?:
		| "DownloadFailed"
		| "Downloading"
		| "HasPrerequisite"
		| "HealthCheckFailed"
		| "HealthChecking"
		| "InstallationFailed"
		| "Installed"
		| "Installing"
		| "Invalid"
		| "NotApplicableBecauseAnotherUpdateIsInProgress"
		| "Obsolete"
		| "PreparationFailed"
		| "Preparing"
		| "Ready"
		| "ReadyToInstall"
		| "Recalled"
		| "ScanFailed"
		| "ScanInProgress";
	readonly updateStateProperties?: UpdateStateProperties;
	readonly version?: string;
}
export interface UpdateRunProperties {
	readonly duration?: string;
	readonly progress?: Step;
	readonly provisioningState?: "Accepted" | "Canceled" | "Failed" | "Provisioning" | "Succeeded";
	readonly state?: "Failed" | "InProgress" | "Succeeded" | "Unknown";
}
export interface UpdateStateProperties {
	readonly notifyMessage?: string;
	readonly progressPercentage?: number;
}
export interface UpdateSummariesProperties {
	readonly currentVersion?: string;
	readonly hardwareModel?: string;
	readonly oemFamily?: string;
	readonly packageVersions?: PackageVersionInfo[];
	readonly provisioningState?: "Accepted" | "Canceled" | "Failed" | "Provisioning" | "Succeeded";
	readonly state?:
		| "AppliedSuccessfully"
		| "NeedsAttention"
		| "PreparationFailed"
		| "PreparationInProgress"
		| "Unknown"
		| "UpdateAvailable"
		| "UpdateFailed"
		| "UpdateInProgress";
}
export interface UserAssignedIdentities {
	readonly [key: string]: UserAssignedIdentity;
}
export interface UserAssignedIdentity {
	readonly clientId?: string;
	readonly principalId?: string;
}
export default {
	clusters: clusters,
	"clusters/arcSettings": clusters_arcSettings,
	"clusters/arcSettings/extensions": clusters_arcSettings_extensions,
	"clusters/publishers": clusters_publishers,
	"clusters/publishers/offers": clusters_publishers_offers,
	"clusters/publishers/offers/skus": clusters_publishers_offers_skus,
	"clusters/updates": clusters_updates,
	"clusters/updates/updateRuns": clusters_updates_updateRuns,
	"clusters/updateSummaries": clusters_updateSummaries,
};
