import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class storageSyncServices
	extends ArmResource<storageSyncServicesComponentInputs>
	implements storageSyncServicesComponentOutputs
{
	constructor(entity: ADKEntity, options: storageSyncServicesComponentInputs) {
		super(entity, options.name, "Microsoft.StorageSync/storageSyncServices", "2020-03-01", options);
	}
	public readonly apiVersion: "2020-03-01";
	public readonly id: string;
	public readonly type: "Microsoft.StorageSync/storageSyncServices";
}
export interface storageSyncServicesComponentOutputs {
	readonly apiVersion: "2020-03-01";
	readonly id: string;
	readonly type: "Microsoft.StorageSync/storageSyncServices";
}
export interface storageSyncServicesComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: StorageSyncServiceCreateParametersPropertiesOrStorageSyncServiceProperties | undefined;
	readonly tags?: StorageSyncServiceCreateParametersTags | undefined;
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
			"2020-03-01",
			options,
		);
	}
	public readonly apiVersion: "2020-03-01";
	public readonly id: string;
	public readonly type: "Microsoft.StorageSync/storageSyncServices/privateEndpointConnections";
}
export interface storageSyncServices_privateEndpointConnectionsComponentOutputs {
	readonly apiVersion: "2020-03-01";
	readonly id: string;
	readonly type: "Microsoft.StorageSync/storageSyncServices/privateEndpointConnections";
}
export interface storageSyncServices_privateEndpointConnectionsComponentInputs {
	readonly name: string;
	readonly properties?: PrivateEndpointConnectionProperties | undefined;
}
export class storageSyncServices_registeredServers
	extends ArmResource<storageSyncServices_registeredServersComponentInputs>
	implements storageSyncServices_registeredServersComponentOutputs
{
	constructor(entity: ADKEntity, options: storageSyncServices_registeredServersComponentInputs) {
		super(entity, options.name, "Microsoft.StorageSync/storageSyncServices/registeredServers", "2020-03-01", options);
	}
	public readonly apiVersion: "2020-03-01";
	public readonly id: string;
	public readonly type: "Microsoft.StorageSync/storageSyncServices/registeredServers";
}
export interface storageSyncServices_registeredServersComponentOutputs {
	readonly apiVersion: "2020-03-01";
	readonly id: string;
	readonly type: "Microsoft.StorageSync/storageSyncServices/registeredServers";
}
export interface storageSyncServices_registeredServersComponentInputs {
	readonly name: string;
	readonly properties?: RegisteredServerCreateParametersPropertiesOrRegisteredServerProperties | undefined;
}
export class storageSyncServices_syncGroups
	extends ArmResource<storageSyncServices_syncGroupsComponentInputs>
	implements storageSyncServices_syncGroupsComponentOutputs
{
	constructor(entity: ADKEntity, options: storageSyncServices_syncGroupsComponentInputs) {
		super(entity, options.name, "Microsoft.StorageSync/storageSyncServices/syncGroups", "2020-03-01", options);
	}
	public readonly apiVersion: "2020-03-01";
	public readonly id: string;
	public readonly type: "Microsoft.StorageSync/storageSyncServices/syncGroups";
}
export interface storageSyncServices_syncGroupsComponentOutputs {
	readonly apiVersion: "2020-03-01";
	readonly id: string;
	readonly type: "Microsoft.StorageSync/storageSyncServices/syncGroups";
}
export interface storageSyncServices_syncGroupsComponentInputs {
	readonly name: string;
	readonly properties?: any | undefined;
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
			"2020-03-01",
			options,
		);
	}
	public readonly apiVersion: "2020-03-01";
	public readonly id: string;
	public readonly type: "Microsoft.StorageSync/storageSyncServices/syncGroups/cloudEndpoints";
}
export interface storageSyncServices_syncGroups_cloudEndpointsComponentOutputs {
	readonly apiVersion: "2020-03-01";
	readonly id: string;
	readonly type: "Microsoft.StorageSync/storageSyncServices/syncGroups/cloudEndpoints";
}
export interface storageSyncServices_syncGroups_cloudEndpointsComponentInputs {
	readonly name: string;
	readonly properties?: CloudEndpointCreateParametersPropertiesOrCloudEndpointProperties | undefined;
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
			"2020-03-01",
			options,
		);
	}
	public readonly apiVersion: "2020-03-01";
	public readonly id: string;
	public readonly type: "Microsoft.StorageSync/storageSyncServices/syncGroups/serverEndpoints";
}
export interface storageSyncServices_syncGroups_serverEndpointsComponentOutputs {
	readonly apiVersion: "2020-03-01";
	readonly id: string;
	readonly type: "Microsoft.StorageSync/storageSyncServices/syncGroups/serverEndpoints";
}
export interface storageSyncServices_syncGroups_serverEndpointsComponentInputs {
	readonly name: string;
	readonly properties?: ServerEndpointCreateParametersPropertiesOrServerEndpointProperties | undefined;
}
export class storageSyncServices_workflows
	extends ArmResource<storageSyncServices_workflowsComponentInputs>
	implements storageSyncServices_workflowsComponentOutputs
{
	constructor(entity: ADKEntity, options: storageSyncServices_workflowsComponentInputs) {
		super(entity, options.name, "Microsoft.StorageSync/storageSyncServices/workflows", "2020-03-01", options);
	}
	public readonly apiVersion: "2020-03-01";
	public readonly id: string;
	public readonly type: "Microsoft.StorageSync/storageSyncServices/workflows";
}
export interface storageSyncServices_workflowsComponentOutputs {
	readonly apiVersion: "2020-03-01";
	readonly id: string;
	readonly type: "Microsoft.StorageSync/storageSyncServices/workflows";
}
export interface storageSyncServices_workflowsComponentInputs {
	readonly name: string;
	readonly properties?: WorkflowProperties | undefined;
}
export interface CloudEndpointCreateParametersPropertiesOrCloudEndpointProperties {
	readonly azureFileShareName?: string | undefined;
	readonly backupEnabled?: string | undefined;
	readonly friendlyName?: string | undefined;
	readonly lastOperationName?: string | undefined;
	readonly lastWorkflowId?: string | undefined;
	readonly partnershipId?: string | undefined;
	readonly provisioningState?: string | undefined;
	readonly storageAccountResourceId?: string | undefined;
	readonly storageAccountTenantId?: string | undefined;
}
export interface CloudTieringCachePerformance {
	readonly cacheHitBytes?: number | undefined;
	readonly cacheHitBytesPercent?: number | undefined;
	readonly cacheMissBytes?: number | undefined;
	readonly lastUpdatedTimestamp?: string | undefined;
}
export interface CloudTieringDatePolicyStatus {
	readonly lastUpdatedTimestamp?: string | undefined;
	readonly tieredFilesMostRecentAccessTimestamp?: string | undefined;
}
export interface CloudTieringFilesNotTiering {
	readonly errors?: FilesNotTieringError[] | undefined;
	readonly lastUpdatedTimestamp?: string | undefined;
	readonly totalFileCount?: number | undefined;
}
export interface CloudTieringSpaceSavings {
	readonly cachedSizeBytes?: number | undefined;
	readonly lastUpdatedTimestamp?: string | undefined;
	readonly spaceSavingsBytes?: number | undefined;
	readonly spaceSavingsPercent?: number | undefined;
	readonly totalSizeCloudBytes?: number | undefined;
	readonly volumeSizeBytes?: number | undefined;
}
export interface CloudTieringVolumeFreeSpacePolicyStatus {
	readonly currentVolumeFreeSpacePercent?: number | undefined;
	readonly effectiveVolumeFreeSpacePolicy?: number | undefined;
	readonly lastUpdatedTimestamp?: string | undefined;
}
export interface FilesNotTieringError {
	readonly errorCode?: number | undefined;
	readonly fileCount?: number | undefined;
}
export interface PrivateEndpoint {
	readonly id?: string | undefined;
}
export interface PrivateEndpointConnection {
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: PrivateEndpointConnectionProperties | undefined;
	readonly type?: string | undefined;
}
export interface PrivateEndpointConnectionProperties {
	readonly privateEndpoint?: PrivateEndpoint | undefined;
	readonly privateLinkServiceConnectionState: PrivateLinkServiceConnectionState;
	readonly provisioningState?: ("Creating" | "Deleting" | "Failed" | "Succeeded") | undefined;
}
export interface PrivateLinkServiceConnectionState {
	readonly actionsRequired?: string | undefined;
	readonly description?: string | undefined;
	readonly status?: ("Approved" | "Pending" | "Rejected") | undefined;
}
export interface RegisteredServerCreateParametersPropertiesOrRegisteredServerProperties {
	readonly agentVersion?: string | undefined;
	readonly agentVersionExpirationDate?: string | undefined;
	readonly agentVersionStatus?: ("Blocked" | "Expired" | "NearExpiry" | "Ok") | undefined;
	readonly clusterId?: string | undefined;
	readonly clusterName?: string | undefined;
	readonly discoveryEndpointUri?: string | undefined;
	readonly friendlyName?: string | undefined;
	readonly lastHeartBeat?: string | undefined;
	readonly lastOperationName?: string | undefined;
	readonly lastWorkflowId?: string | undefined;
	readonly managementEndpointUri?: string | undefined;
	readonly monitoringConfiguration?: string | undefined;
	readonly monitoringEndpointUri?: string | undefined;
	readonly provisioningState?: string | undefined;
	readonly resourceLocation?: string | undefined;
	readonly serverCertificate?: string | undefined;
	readonly serverId?: string | undefined;
	readonly serverManagementErrorCode?: number | undefined;
	readonly serverOSVersion?: string | undefined;
	readonly serverRole?: string | undefined;
	readonly serviceLocation?: string | undefined;
	readonly storageSyncServiceUid?: string | undefined;
}
export interface ServerEndpointCloudTieringStatus {
	readonly cachePerformance?: CloudTieringCachePerformance | undefined;
	readonly datePolicyStatus?: CloudTieringDatePolicyStatus | undefined;
	readonly filesNotTiering?: CloudTieringFilesNotTiering | undefined;
	readonly health?: ("Error" | "Healthy") | undefined;
	readonly healthLastUpdatedTimestamp?: string | undefined;
	readonly lastCloudTieringResult?: number | undefined;
	readonly lastSuccessTimestamp?: string | undefined;
	readonly lastUpdatedTimestamp?: string | undefined;
	readonly spaceSavings?: CloudTieringSpaceSavings | undefined;
	readonly volumeFreeSpacePolicyStatus?: CloudTieringVolumeFreeSpacePolicyStatus | undefined;
}
export interface ServerEndpointCreateParametersPropertiesOrServerEndpointProperties {
	readonly cloudTiering?: ("off" | "on") | undefined;
	readonly cloudTieringStatus?: ServerEndpointCloudTieringStatus | undefined;
	readonly friendlyName?: string | undefined;
	readonly initialDownloadPolicy?: ("AvoidTieredFiles" | "NamespaceOnly" | "NamespaceThenModifiedFiles") | undefined;
	readonly lastOperationName?: string | undefined;
	readonly lastWorkflowId?: string | undefined;
	readonly localCacheMode?: ("DownloadNewAndModifiedFiles" | "UpdateLocallyCachedFiles") | undefined;
	readonly offlineDataTransfer?: ("off" | "on") | undefined;
	readonly offlineDataTransferShareName?: string | undefined;
	readonly offlineDataTransferStorageAccountResourceId?: string | undefined;
	readonly offlineDataTransferStorageAccountTenantId?: string | undefined;
	readonly provisioningState?: string | undefined;
	readonly recallStatus?: ServerEndpointRecallStatus | undefined;
	readonly serverLocalPath?: string | undefined;
	readonly serverResourceId?: string | undefined;
	readonly syncStatus?: ServerEndpointSyncStatus | undefined;
	readonly tierFilesOlderThanDays?: number | undefined;
	readonly volumeFreeSpacePercent?: number | undefined;
}
export interface ServerEndpointFilesNotSyncingError {
	readonly errorCode?: number | undefined;
	readonly persistentCount?: number | undefined;
	readonly transientCount?: number | undefined;
}
export interface ServerEndpointRecallError {
	readonly count?: number | undefined;
	readonly errorCode?: number | undefined;
}
export interface ServerEndpointRecallStatus {
	readonly lastUpdatedTimestamp?: string | undefined;
	readonly recallErrors?: ServerEndpointRecallError[] | undefined;
	readonly totalRecallErrorsCount?: number | undefined;
}
export interface ServerEndpointSyncActivityStatus {
	readonly appliedBytes?: number | undefined;
	readonly appliedItemCount?: number | undefined;
	readonly perItemErrorCount?: number | undefined;
	readonly syncMode?:
		| ("InitialFullDownload" | "InitialUpload" | "NamespaceDownload" | "Regular" | "SnapshotUpload")
		| undefined;
	readonly timestamp?: string | undefined;
	readonly totalBytes?: number | undefined;
	readonly totalItemCount?: number | undefined;
}
export interface ServerEndpointSyncSessionStatus {
	readonly filesNotSyncingErrors?: ServerEndpointFilesNotSyncingError[] | undefined;
	readonly lastSyncMode?:
		| ("InitialFullDownload" | "InitialUpload" | "NamespaceDownload" | "Regular" | "SnapshotUpload")
		| undefined;
	readonly lastSyncPerItemErrorCount?: number | undefined;
	readonly lastSyncResult?: number | undefined;
	readonly lastSyncSuccessTimestamp?: string | undefined;
	readonly lastSyncTimestamp?: string | undefined;
	readonly persistentFilesNotSyncingCount?: number | undefined;
	readonly transientFilesNotSyncingCount?: number | undefined;
}
export interface ServerEndpointSyncStatus {
	readonly combinedHealth?:
		| ("Error" | "Healthy" | "NoActivity" | "SyncBlockedForChangeDetectionPostRestore" | "SyncBlockedForRestore")
		| undefined;
	readonly downloadActivity?: ServerEndpointSyncActivityStatus | undefined;
	readonly downloadHealth?:
		| ("Error" | "Healthy" | "NoActivity" | "SyncBlockedForChangeDetectionPostRestore" | "SyncBlockedForRestore")
		| undefined;
	readonly downloadStatus?: ServerEndpointSyncSessionStatus | undefined;
	readonly lastUpdatedTimestamp?: string | undefined;
	readonly offlineDataTransferStatus?: ("Complete" | "InProgress" | "NotRunning" | "Stopping") | undefined;
	readonly syncActivity?: ("Download" | "Upload" | "UploadAndDownload") | undefined;
	readonly totalPersistentFilesNotSyncingCount?: number | undefined;
	readonly uploadActivity?: ServerEndpointSyncActivityStatus | undefined;
	readonly uploadHealth?:
		| ("Error" | "Healthy" | "NoActivity" | "SyncBlockedForChangeDetectionPostRestore" | "SyncBlockedForRestore")
		| undefined;
	readonly uploadStatus?: ServerEndpointSyncSessionStatus | undefined;
}
export interface StorageSyncServiceCreateParametersPropertiesOrStorageSyncServiceProperties {
	readonly incomingTrafficPolicy?: ("AllowAllTraffic" | "AllowVirtualNetworksOnly") | undefined;
	readonly lastOperationName?: string | undefined;
	readonly lastWorkflowId?: string | undefined;
	readonly privateEndpointConnections?: PrivateEndpointConnection[] | undefined;
	readonly provisioningState?: string | undefined;
	readonly storageSyncServiceStatus?: number | undefined;
	readonly storageSyncServiceUid?: string | undefined;
}
export interface StorageSyncServiceCreateParametersTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface WorkflowProperties {
	readonly lastOperationId?: string | undefined;
	readonly lastStepName?: string | undefined;
	readonly operation?: ("cancel" | "do" | "undo") | undefined;
	readonly status?: ("aborted" | "active" | "expired" | "failed" | "succeeded") | undefined;
	readonly steps?: string | undefined;
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
