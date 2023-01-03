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
	readonly identity?: ManagedServiceIdentity | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties?: ClusterProperties | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: TrackedResourceTags | undefined;
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
	readonly properties?: ArcSettingProperties | undefined;
	readonly systemData?: SystemData | undefined;
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
	readonly properties?: ExtensionProperties | undefined;
	readonly systemData?: SystemData | undefined;
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
	readonly properties?: PublisherProperties | undefined;
	readonly systemData?: SystemData | undefined;
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
	readonly properties?: OfferProperties | undefined;
	readonly systemData?: SystemData | undefined;
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
	readonly properties?: SkuProperties | undefined;
	readonly systemData?: SystemData | undefined;
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
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: UpdateProperties | undefined;
	readonly systemData?: SystemData | undefined;
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
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: UpdateRunProperties | undefined;
	readonly systemData?: SystemData | undefined;
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
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: UpdateSummariesProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export interface ArcSettingProperties {
	readonly aggregateState?:
		| (
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
				| "Updating"
		  )
		| undefined;
	readonly arcApplicationClientId?: string | undefined;
	readonly arcApplicationObjectId?: string | undefined;
	readonly arcApplicationTenantId?: string | undefined;
	readonly arcInstanceResourceGroup?: string | undefined;
	readonly arcServicePrincipalObjectId?: string | undefined;
	readonly connectivityProperties?: any | undefined;
	readonly perNodeDetails?: PerNodeState[] | undefined;
	readonly provisioningState?: ("Accepted" | "Canceled" | "Failed" | "Provisioning" | "Succeeded") | undefined;
}
export interface ClusterDesiredProperties {
	readonly diagnosticLevel?: ("Basic" | "Enhanced" | "Off") | undefined;
	readonly windowsServerSubscription?: ("Disabled" | "Enabled") | undefined;
}
export interface ClusterNode {
	readonly coreCount?: number | undefined;
	readonly id?: number | undefined;
	readonly manufacturer?: string | undefined;
	readonly memoryInGiB?: number | undefined;
	readonly model?: string | undefined;
	readonly name?: string | undefined;
	readonly nodeType?: ("FirstParty" | "ThirdParty") | undefined;
	readonly osDisplayVersion?: string | undefined;
	readonly osName?: string | undefined;
	readonly osVersion?: string | undefined;
	readonly serialNumber?: string | undefined;
	readonly windowsServerSubscription?: ("Disabled" | "Enabled") | undefined;
}
export interface ClusterProperties {
	readonly aadApplicationObjectId?: string | undefined;
	readonly aadClientId?: string | undefined;
	readonly aadServicePrincipalObjectId?: string | undefined;
	readonly aadTenantId?: string | undefined;
	readonly billingModel?: string | undefined;
	readonly cloudId?: string | undefined;
	readonly cloudManagementEndpoint?: string | undefined;
	readonly desiredProperties?: ClusterDesiredProperties | undefined;
	readonly lastBillingTimestamp?: string | undefined;
	readonly lastSyncTimestamp?: string | undefined;
	readonly provisioningState?: ("Accepted" | "Canceled" | "Failed" | "Provisioning" | "Succeeded") | undefined;
	readonly registrationTimestamp?: string | undefined;
	readonly reportedProperties?: ClusterReportedProperties | undefined;
	readonly serviceEndpoint?: string | undefined;
	readonly softwareAssuranceProperties?: SoftwareAssuranceProperties | undefined;
	readonly status?:
		| ("ConnectedRecently" | "Disconnected" | "Error" | "NotConnectedRecently" | "NotYetRegistered")
		| undefined;
	readonly trialDaysRemaining?: number | undefined;
}
export interface ClusterReportedProperties {
	readonly clusterId?: string | undefined;
	readonly clusterName?: string | undefined;
	readonly clusterVersion?: string | undefined;
	readonly diagnosticLevel?: ("Basic" | "Enhanced" | "Off") | undefined;
	readonly imdsAttestation?: ("Disabled" | "Enabled") | undefined;
	readonly lastUpdated?: string | undefined;
	readonly nodes?: ClusterNode[] | undefined;
}
export interface ExtensionParameters {
	readonly autoUpgradeMinorVersion?: boolean | undefined;
	readonly forceUpdateTag?: string | undefined;
	readonly protectedSettings?: any | undefined;
	readonly publisher?: string | undefined;
	readonly settings?: any | undefined;
	readonly type?: string | undefined;
	readonly typeHandlerVersion?: string | undefined;
}
export interface ExtensionProperties {
	readonly aggregateState?:
		| (
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
				| "Updating"
		  )
		| undefined;
	readonly extensionParameters?: ExtensionParameters | undefined;
	readonly perNodeExtensionDetails?: PerNodeExtensionState[] | undefined;
	readonly provisioningState?: ("Accepted" | "Canceled" | "Failed" | "Provisioning" | "Succeeded") | undefined;
}
export interface ManagedServiceIdentity {
	readonly principalId?: string | undefined;
	readonly tenantId?: string | undefined;
	readonly type: "None" | "SystemAssigned" | "SystemAssigned, UserAssigned" | "UserAssigned";
	readonly userAssignedIdentities?: UserAssignedIdentities | undefined;
}
export interface OfferProperties {
	readonly content?: string | undefined;
	readonly contentVersion?: string | undefined;
	readonly provisioningState?: string | undefined;
	readonly publisherId?: string | undefined;
	readonly skuMappings?: SkuMappings[] | undefined;
}
export interface PackageVersionInfo {
	readonly lastUpdated?: string | undefined;
	readonly packageType?: string | undefined;
	readonly version?: string | undefined;
}
export interface PerNodeExtensionState {
	readonly extension?: string | undefined;
	readonly name?: string | undefined;
	readonly state?:
		| (
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
				| "Updating"
		  )
		| undefined;
}
export interface PerNodeState {
	readonly arcInstance?: string | undefined;
	readonly name?: string | undefined;
	readonly state?:
		| (
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
				| "Updating"
		  )
		| undefined;
}
export interface PublisherProperties {
	readonly provisioningState?: string | undefined;
}
export interface SkuMappings {
	readonly catalogPlanId?: string | undefined;
	readonly marketplaceSkuId?: string | undefined;
	readonly marketplaceSkuVersions?: string[] | undefined;
}
export interface SkuProperties {
	readonly content?: string | undefined;
	readonly contentVersion?: string | undefined;
	readonly offerId?: string | undefined;
	readonly provisioningState?: string | undefined;
	readonly publisherId?: string | undefined;
	readonly skuMappings?: SkuMappings[] | undefined;
}
export interface SoftwareAssuranceProperties {
	readonly lastUpdated?: string | undefined;
	readonly softwareAssuranceIntent?: ("Disable" | "Enable") | undefined;
	readonly softwareAssuranceStatus?: ("Disabled" | "Enabled") | undefined;
}
export interface Step {
	readonly description?: string | undefined;
	readonly endTimeUtc?: string | undefined;
	readonly errorMessage?: string | undefined;
	readonly lastUpdatedTimeUtc?: string | undefined;
	readonly name?: string | undefined;
	readonly startTimeUtc?: string | undefined;
	readonly status?: string | undefined;
	readonly steps?: Step[] | undefined;
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
export interface UpdatePrerequisite {
	readonly packageName?: string | undefined;
	readonly updateType?: string | undefined;
	readonly version?: string | undefined;
}
export interface UpdateProperties {
	readonly additionalProperties?: string | undefined;
	readonly availabilityType?: ("Local" | "Notify" | "Online") | undefined;
	readonly description?: string | undefined;
	readonly displayName?: string | undefined;
	readonly installedDate?: string | undefined;
	readonly packagePath?: string | undefined;
	readonly packageSizeInMb?: number | undefined;
	readonly packageType?: string | undefined;
	readonly prerequisites?: UpdatePrerequisite[] | undefined;
	readonly provisioningState?: ("Accepted" | "Canceled" | "Failed" | "Provisioning" | "Succeeded") | undefined;
	readonly publisher?: string | undefined;
	readonly releaseLink?: string | undefined;
	readonly state?:
		| (
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
				| "ScanInProgress"
		  )
		| undefined;
	readonly updateStateProperties?: UpdateStateProperties | undefined;
	readonly version?: string | undefined;
}
export interface UpdateRunProperties {
	readonly duration?: string | undefined;
	readonly progress?: Step | undefined;
	readonly provisioningState?: ("Accepted" | "Canceled" | "Failed" | "Provisioning" | "Succeeded") | undefined;
	readonly state?: ("Failed" | "InProgress" | "Succeeded" | "Unknown") | undefined;
}
export interface UpdateStateProperties {
	readonly notifyMessage?: string | undefined;
	readonly progressPercentage?: number | undefined;
}
export interface UpdateSummariesProperties {
	readonly currentVersion?: string | undefined;
	readonly hardwareModel?: string | undefined;
	readonly oemFamily?: string | undefined;
	readonly packageVersions?: PackageVersionInfo[] | undefined;
	readonly provisioningState?: ("Accepted" | "Canceled" | "Failed" | "Provisioning" | "Succeeded") | undefined;
	readonly state?:
		| (
				| "AppliedSuccessfully"
				| "NeedsAttention"
				| "PreparationFailed"
				| "PreparationInProgress"
				| "Unknown"
				| "UpdateAvailable"
				| "UpdateFailed"
				| "UpdateInProgress"
		  )
		| undefined;
}
export interface UserAssignedIdentities {
	readonly "[ key: string ]"?: UserAssignedIdentity | undefined;
}
export interface UserAssignedIdentity {
	readonly clientId?: string | undefined;
	readonly principalId?: string | undefined;
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
