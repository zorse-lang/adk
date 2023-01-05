import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class storageSyncServices
	extends ArmResource<storageSyncServicesComponentInputs>
	implements storageSyncServicesComponentOutputs
{
	constructor(entity: ADKEntity, options: storageSyncServicesComponentInputs) {
		super(entity, options.name, "Microsoft.StorageSync/storageSyncServices", "2020-09-01", options);
	}
	public readonly apiVersion: "2020-09-01";
	public readonly id: string;
	public readonly type: "Microsoft.StorageSync/storageSyncServices";
}
export interface storageSyncServicesComponentOutputs {
	readonly apiVersion: "2020-09-01";
	readonly id: string;
	readonly type: "Microsoft.StorageSync/storageSyncServices";
}
export interface storageSyncServicesComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: StorageSyncServiceCreateParametersPropertiesOrStorageSyncServiceProperties;
	readonly systemData?: SystemData;
	readonly tags?: StorageSyncServiceCreateParametersTags;
}
export class storageSyncServices_privateEndpointConnections
	extends ArmResource<storageSyncServices_privateEndpointConnectionsComponentInputs>
	implements storageSyncServices_privateEndpointConnectionsComponentOutputs
{
	constructor(entity: ADKEntity, options: storageSyncServices_privateEndpointConnectionsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.StorageSync/storageSyncServices/privateEndpointConnections",
			"2020-09-01",
			options,
		);
	}
	public readonly apiVersion: "2020-09-01";
	public readonly id: string;
	public readonly type: "Microsoft.StorageSync/storageSyncServices/privateEndpointConnections";
}
export interface storageSyncServices_privateEndpointConnectionsComponentOutputs {
	readonly apiVersion: "2020-09-01";
	readonly id: string;
	readonly type: "Microsoft.StorageSync/storageSyncServices/privateEndpointConnections";
}
export interface storageSyncServices_privateEndpointConnectionsComponentInputs {
	readonly name: string;
	readonly properties?: PrivateEndpointConnectionProperties;
	readonly systemData?: SystemData;
}
export class storageSyncServices_registeredServers
	extends ArmResource<storageSyncServices_registeredServersComponentInputs>
	implements storageSyncServices_registeredServersComponentOutputs
{
	constructor(entity: ADKEntity, options: storageSyncServices_registeredServersComponentInputs) {
		super(entity, options.name, "Microsoft.StorageSync/storageSyncServices/registeredServers", "2020-09-01", options);
	}
	public readonly apiVersion: "2020-09-01";
	public readonly id: string;
	public readonly type: "Microsoft.StorageSync/storageSyncServices/registeredServers";
}
export interface storageSyncServices_registeredServersComponentOutputs {
	readonly apiVersion: "2020-09-01";
	readonly id: string;
	readonly type: "Microsoft.StorageSync/storageSyncServices/registeredServers";
}
export interface storageSyncServices_registeredServersComponentInputs {
	readonly name: string;
	readonly properties?: RegisteredServerCreateParametersPropertiesOrRegisteredServerProperties;
	readonly systemData?: SystemData;
}
export class storageSyncServices_syncGroups
	extends ArmResource<storageSyncServices_syncGroupsComponentInputs>
	implements storageSyncServices_syncGroupsComponentOutputs
{
	constructor(entity: ADKEntity, options: storageSyncServices_syncGroupsComponentInputs) {
		super(entity, options.name, "Microsoft.StorageSync/storageSyncServices/syncGroups", "2020-09-01", options);
	}
	public readonly apiVersion: "2020-09-01";
	public readonly id: string;
	public readonly type: "Microsoft.StorageSync/storageSyncServices/syncGroups";
}
export interface storageSyncServices_syncGroupsComponentOutputs {
	readonly apiVersion: "2020-09-01";
	readonly id: string;
	readonly type: "Microsoft.StorageSync/storageSyncServices/syncGroups";
}
export interface storageSyncServices_syncGroupsComponentInputs {
	readonly name: string;
	readonly properties?: any;
	readonly systemData?: SystemData;
}
export class storageSyncServices_syncGroups_cloudEndpoints
	extends ArmResource<storageSyncServices_syncGroups_cloudEndpointsComponentInputs>
	implements storageSyncServices_syncGroups_cloudEndpointsComponentOutputs
{
	constructor(entity: ADKEntity, options: storageSyncServices_syncGroups_cloudEndpointsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.StorageSync/storageSyncServices/syncGroups/cloudEndpoints",
			"2020-09-01",
			options,
		);
	}
	public readonly apiVersion: "2020-09-01";
	public readonly id: string;
	public readonly type: "Microsoft.StorageSync/storageSyncServices/syncGroups/cloudEndpoints";
}
export interface storageSyncServices_syncGroups_cloudEndpointsComponentOutputs {
	readonly apiVersion: "2020-09-01";
	readonly id: string;
	readonly type: "Microsoft.StorageSync/storageSyncServices/syncGroups/cloudEndpoints";
}
export interface storageSyncServices_syncGroups_cloudEndpointsComponentInputs {
	readonly name: string;
	readonly properties?: CloudEndpointCreateParametersPropertiesOrCloudEndpointProperties;
	readonly systemData?: SystemData;
}
export class storageSyncServices_syncGroups_serverEndpoints
	extends ArmResource<storageSyncServices_syncGroups_serverEndpointsComponentInputs>
	implements storageSyncServices_syncGroups_serverEndpointsComponentOutputs
{
	constructor(entity: ADKEntity, options: storageSyncServices_syncGroups_serverEndpointsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.StorageSync/storageSyncServices/syncGroups/serverEndpoints",
			"2020-09-01",
			options,
		);
	}
	public readonly apiVersion: "2020-09-01";
	public readonly id: string;
	public readonly type: "Microsoft.StorageSync/storageSyncServices/syncGroups/serverEndpoints";
}
export interface storageSyncServices_syncGroups_serverEndpointsComponentOutputs {
	readonly apiVersion: "2020-09-01";
	readonly id: string;
	readonly type: "Microsoft.StorageSync/storageSyncServices/syncGroups/serverEndpoints";
}
export interface storageSyncServices_syncGroups_serverEndpointsComponentInputs {
	readonly name: string;
	readonly properties?: ServerEndpointCreateParametersPropertiesOrServerEndpointProperties;
	readonly systemData?: SystemData;
}
export class storageSyncServices_workflows
	extends ArmResource<storageSyncServices_workflowsComponentInputs>
	implements storageSyncServices_workflowsComponentOutputs
{
	constructor(entity: ADKEntity, options: storageSyncServices_workflowsComponentInputs) {
		super(entity, options.name, "Microsoft.StorageSync/storageSyncServices/workflows", "2020-09-01", options);
	}
	public readonly apiVersion: "2020-09-01";
	public readonly id: string;
	public readonly type: "Microsoft.StorageSync/storageSyncServices/workflows";
}
export interface storageSyncServices_workflowsComponentOutputs {
	readonly apiVersion: "2020-09-01";
	readonly id: string;
	readonly type: "Microsoft.StorageSync/storageSyncServices/workflows";
}
export interface storageSyncServices_workflowsComponentInputs {
	readonly name: string;
	readonly properties?: WorkflowProperties;
	readonly systemData?: SystemData;
}
export interface CloudEndpointChangeEnumerationActivity {
	readonly deletesProgressPercent?: number;
	readonly lastUpdatedTimestamp?: string;
	readonly minutesRemaining?: number;
	readonly operationState?: "EnumerationInProgress" | "InitialEnumerationInProgress";
	readonly processedDirectoriesCount?: number;
	readonly processedFilesCount?: number;
	readonly progressPercent?: number;
	readonly startedTimestamp?: string;
	readonly statusCode?: number;
	readonly totalCountsState?: "Calculating" | "Final";
	readonly totalDirectoriesCount?: number;
	readonly totalFilesCount?: number;
	readonly totalSizeBytes?: number;
}
export interface CloudEndpointChangeEnumerationStatus {
	readonly activity?: CloudEndpointChangeEnumerationActivity;
	readonly lastEnumerationStatus?: CloudEndpointLastChangeEnumerationStatus;
	readonly lastUpdatedTimestamp?: string;
}
export interface CloudEndpointCreateParametersPropertiesOrCloudEndpointProperties {
	readonly azureFileShareName?: string;
	readonly backupEnabled?: string;
	readonly changeEnumerationStatus?: CloudEndpointChangeEnumerationStatus;
	readonly friendlyName?: string;
	readonly lastOperationName?: string;
	readonly lastWorkflowId?: string;
	readonly partnershipId?: string;
	readonly provisioningState?: string;
	readonly storageAccountResourceId?: string;
	readonly storageAccountTenantId?: string;
}
export interface CloudEndpointLastChangeEnumerationStatus {
	readonly completedTimestamp?: string;
	readonly namespaceDirectoriesCount?: number;
	readonly namespaceFilesCount?: number;
	readonly namespaceSizeBytes?: number;
	readonly nextRunTimestamp?: string;
	readonly startedTimestamp?: string;
}
export interface CloudTieringCachePerformance {
	readonly cacheHitBytes?: number;
	readonly cacheHitBytesPercent?: number;
	readonly cacheMissBytes?: number;
	readonly lastUpdatedTimestamp?: string;
}
export interface CloudTieringDatePolicyStatus {
	readonly lastUpdatedTimestamp?: string;
	readonly tieredFilesMostRecentAccessTimestamp?: string;
}
export interface CloudTieringFilesNotTiering {
	readonly errors?: FilesNotTieringError[];
	readonly lastUpdatedTimestamp?: string;
	readonly totalFileCount?: number;
}
export interface CloudTieringSpaceSavings {
	readonly cachedSizeBytes?: number;
	readonly lastUpdatedTimestamp?: string;
	readonly spaceSavingsBytes?: number;
	readonly spaceSavingsPercent?: number;
	readonly totalSizeCloudBytes?: number;
	readonly volumeSizeBytes?: number;
}
export interface CloudTieringVolumeFreeSpacePolicyStatus {
	readonly currentVolumeFreeSpacePercent?: number;
	readonly effectiveVolumeFreeSpacePolicy?: number;
	readonly lastUpdatedTimestamp?: string;
}
export interface FilesNotTieringError {
	readonly errorCode?: number;
	readonly fileCount?: number;
}
export interface PrivateEndpoint {
	readonly id?: string;
}
export interface PrivateEndpointConnection {
	readonly id?: string;
	readonly name?: string;
	readonly properties?: PrivateEndpointConnectionProperties;
	readonly systemData?: SystemData;
	readonly type?: string;
}
export interface PrivateEndpointConnectionProperties {
	readonly privateEndpoint?: PrivateEndpoint;
	readonly privateLinkServiceConnectionState: PrivateLinkServiceConnectionState;
	readonly provisioningState?: "Creating" | "Deleting" | "Failed" | "Succeeded";
}
export interface PrivateLinkServiceConnectionState {
	readonly actionsRequired?: string;
	readonly description?: string;
	readonly status?: "Approved" | "Pending" | "Rejected";
}
export interface RegisteredServerCreateParametersPropertiesOrRegisteredServerProperties {
	readonly agentVersion?: string;
	readonly agentVersionExpirationDate?: string;
	readonly agentVersionStatus?: "Blocked" | "Expired" | "NearExpiry" | "Ok";
	readonly clusterId?: string;
	readonly clusterName?: string;
	readonly discoveryEndpointUri?: string;
	readonly friendlyName?: string;
	readonly lastHeartBeat?: string;
	readonly lastOperationName?: string;
	readonly lastWorkflowId?: string;
	readonly managementEndpointUri?: string;
	readonly monitoringConfiguration?: string;
	readonly monitoringEndpointUri?: string;
	readonly provisioningState?: string;
	readonly resourceLocation?: string;
	readonly serverCertificate?: string;
	readonly serverId?: string;
	readonly serverManagementErrorCode?: number;
	readonly serverName?: string;
	readonly serverOSVersion?: string;
	readonly serverRole?: string;
	readonly serviceLocation?: string;
	readonly storageSyncServiceUid?: string;
}
export interface ServerEndpointBackgroundDataDownloadActivity {
	readonly downloadedBytes?: number;
	readonly percentProgress?: number;
	readonly startedTimestamp?: string;
	readonly timestamp?: string;
}
export interface ServerEndpointCloudTieringStatus {
	readonly cachePerformance?: CloudTieringCachePerformance;
	readonly datePolicyStatus?: CloudTieringDatePolicyStatus;
	readonly filesNotTiering?: CloudTieringFilesNotTiering;
	readonly health?: "Error" | "Healthy" | "Unavailable";
	readonly healthLastUpdatedTimestamp?: string;
	readonly lastCloudTieringResult?: number;
	readonly lastSuccessTimestamp?: string;
	readonly lastUpdatedTimestamp?: string;
	readonly spaceSavings?: CloudTieringSpaceSavings;
	readonly volumeFreeSpacePolicyStatus?: CloudTieringVolumeFreeSpacePolicyStatus;
}
export interface ServerEndpointCreateParametersPropertiesOrServerEndpointProperties {
	readonly cloudTiering?: "off" | "on";
	readonly cloudTieringStatus?: ServerEndpointCloudTieringStatus;
	readonly friendlyName?: string;
	readonly initialDownloadPolicy?: "AvoidTieredFiles" | "NamespaceOnly" | "NamespaceThenModifiedFiles";
	readonly initialUploadPolicy?: "Merge" | "ServerAuthoritative";
	readonly lastOperationName?: string;
	readonly lastWorkflowId?: string;
	readonly localCacheMode?: "DownloadNewAndModifiedFiles" | "UpdateLocallyCachedFiles";
	readonly offlineDataTransfer?: "off" | "on";
	readonly offlineDataTransferShareName?: string;
	readonly offlineDataTransferStorageAccountResourceId?: string;
	readonly offlineDataTransferStorageAccountTenantId?: string;
	readonly provisioningState?: string;
	readonly recallStatus?: ServerEndpointRecallStatus;
	readonly serverLocalPath?: string;
	readonly serverName?: string;
	readonly serverResourceId?: string;
	readonly syncStatus?: ServerEndpointSyncStatus;
	readonly tierFilesOlderThanDays?: number;
	readonly volumeFreeSpacePercent?: number;
}
export interface ServerEndpointFilesNotSyncingError {
	readonly errorCode?: number;
	readonly persistentCount?: number;
	readonly transientCount?: number;
}
export interface ServerEndpointRecallError {
	readonly count?: number;
	readonly errorCode?: number;
}
export interface ServerEndpointRecallStatus {
	readonly lastUpdatedTimestamp?: string;
	readonly recallErrors?: ServerEndpointRecallError[];
	readonly totalRecallErrorsCount?: number;
}
export interface ServerEndpointSyncActivityStatus {
	readonly appliedBytes?: number;
	readonly appliedItemCount?: number;
	readonly perItemErrorCount?: number;
	readonly sessionMinutesRemaining?: number;
	readonly syncMode?: "InitialFullDownload" | "InitialUpload" | "NamespaceDownload" | "Regular" | "SnapshotUpload";
	readonly timestamp?: string;
	readonly totalBytes?: number;
	readonly totalItemCount?: number;
}
export interface ServerEndpointSyncSessionStatus {
	readonly filesNotSyncingErrors?: ServerEndpointFilesNotSyncingError[];
	readonly lastSyncMode?: "InitialFullDownload" | "InitialUpload" | "NamespaceDownload" | "Regular" | "SnapshotUpload";
	readonly lastSyncPerItemErrorCount?: number;
	readonly lastSyncResult?: number;
	readonly lastSyncSuccessTimestamp?: string;
	readonly lastSyncTimestamp?: string;
	readonly persistentFilesNotSyncingCount?: number;
	readonly transientFilesNotSyncingCount?: number;
}
export interface ServerEndpointSyncStatus {
	readonly backgroundDataDownloadActivity?: ServerEndpointBackgroundDataDownloadActivity;
	readonly combinedHealth?: "Error" | "Healthy" | "Unavailable";
	readonly downloadActivity?: ServerEndpointSyncActivityStatus;
	readonly downloadHealth?: "Error" | "Healthy" | "Unavailable";
	readonly downloadStatus?: ServerEndpointSyncSessionStatus;
	readonly lastUpdatedTimestamp?: string;
	readonly offlineDataTransferStatus?: "Complete" | "InProgress" | "NotRunning" | "Stopping";
	readonly syncActivity?: "Download" | "Upload" | "UploadAndDownload";
	readonly totalPersistentFilesNotSyncingCount?: number;
	readonly uploadActivity?: ServerEndpointSyncActivityStatus;
	readonly uploadHealth?: "Error" | "Healthy" | "Unavailable";
	readonly uploadStatus?: ServerEndpointSyncSessionStatus;
}
export interface StorageSyncServiceCreateParametersPropertiesOrStorageSyncServiceProperties {
	readonly incomingTrafficPolicy?: "AllowAllTraffic" | "AllowVirtualNetworksOnly";
	readonly lastOperationName?: string;
	readonly lastWorkflowId?: string;
	readonly privateEndpointConnections?: PrivateEndpointConnection[];
	readonly provisioningState?: string;
	readonly storageSyncServiceStatus?: number;
	readonly storageSyncServiceUid?: string;
}
export interface StorageSyncServiceCreateParametersTags {
	readonly [key: string]: string;
}
export interface SystemData {
	readonly createdAt?: string;
	readonly createdBy?: string;
	readonly createdByType?: "Application" | "Key" | "ManagedIdentity" | "User";
	readonly lastModifiedAt?: string;
	readonly lastModifiedBy?: string;
	readonly lastModifiedByType?: "Application" | "Key" | "ManagedIdentity" | "User";
}
export interface WorkflowProperties {
	readonly commandName?: string;
	readonly createdTimestamp?: string;
	readonly lastOperationId?: string;
	readonly lastStatusTimestamp?: string;
	readonly lastStepName?: string;
	readonly operation?: "cancel" | "do" | "undo";
	readonly status?: "aborted" | "active" | "expired" | "failed" | "succeeded";
	readonly steps?: string;
}
export default {
	storageSyncServices: storageSyncServices,
	"storageSyncServices/privateEndpointConnections": storageSyncServices_privateEndpointConnections,
	"storageSyncServices/registeredServers": storageSyncServices_registeredServers,
	"storageSyncServices/syncGroups": storageSyncServices_syncGroups,
	"storageSyncServices/syncGroups/cloudEndpoints": storageSyncServices_syncGroups_cloudEndpoints,
	"storageSyncServices/syncGroups/serverEndpoints": storageSyncServices_syncGroups_serverEndpoints,
	"storageSyncServices/workflows": storageSyncServices_workflows,
};
