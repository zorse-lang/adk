import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class storageSyncServices
	extends ArmResource<storageSyncServicesComponentInputs>
	implements storageSyncServicesComponentOutputs
{
	constructor(entity: ADKEntity, options: storageSyncServicesComponentInputs) {
		super(entity, options.name, "Microsoft.StorageSync/storageSyncServices", "2019-06-01", options);
	}
	public readonly apiVersion: "2019-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.StorageSync/storageSyncServices";
}
export interface storageSyncServicesComponentOutputs {
	readonly apiVersion: "2019-06-01";
	readonly id: string;
	readonly type: "Microsoft.StorageSync/storageSyncServices";
}
export interface storageSyncServicesComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: any;
	readonly tags?: StorageSyncServiceCreateParametersTags;
}
export class storageSyncServices_registeredServers
	extends ArmResource<storageSyncServices_registeredServersComponentInputs>
	implements storageSyncServices_registeredServersComponentOutputs
{
	constructor(entity: ADKEntity, options: storageSyncServices_registeredServersComponentInputs) {
		super(entity, options.name, "Microsoft.StorageSync/storageSyncServices/registeredServers", "2019-06-01", options);
	}
	public readonly apiVersion: "2019-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.StorageSync/storageSyncServices/registeredServers";
}
export interface storageSyncServices_registeredServersComponentOutputs {
	readonly apiVersion: "2019-06-01";
	readonly id: string;
	readonly type: "Microsoft.StorageSync/storageSyncServices/registeredServers";
}
export interface storageSyncServices_registeredServersComponentInputs {
	readonly name: string;
	readonly properties?: RegisteredServerCreateParametersPropertiesOrRegisteredServerProperties;
}
export class storageSyncServices_syncGroups
	extends ArmResource<storageSyncServices_syncGroupsComponentInputs>
	implements storageSyncServices_syncGroupsComponentOutputs
{
	constructor(entity: ADKEntity, options: storageSyncServices_syncGroupsComponentInputs) {
		super(entity, options.name, "Microsoft.StorageSync/storageSyncServices/syncGroups", "2019-06-01", options);
	}
	public readonly apiVersion: "2019-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.StorageSync/storageSyncServices/syncGroups";
}
export interface storageSyncServices_syncGroupsComponentOutputs {
	readonly apiVersion: "2019-06-01";
	readonly id: string;
	readonly type: "Microsoft.StorageSync/storageSyncServices/syncGroups";
}
export interface storageSyncServices_syncGroupsComponentInputs {
	readonly name: string;
	readonly properties?: any;
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
			"2019-06-01",
			options,
		);
	}
	public readonly apiVersion: "2019-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.StorageSync/storageSyncServices/syncGroups/cloudEndpoints";
}
export interface storageSyncServices_syncGroups_cloudEndpointsComponentOutputs {
	readonly apiVersion: "2019-06-01";
	readonly id: string;
	readonly type: "Microsoft.StorageSync/storageSyncServices/syncGroups/cloudEndpoints";
}
export interface storageSyncServices_syncGroups_cloudEndpointsComponentInputs {
	readonly name: string;
	readonly properties?: CloudEndpointCreateParametersPropertiesOrCloudEndpointProperties;
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
			"2019-06-01",
			options,
		);
	}
	public readonly apiVersion: "2019-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.StorageSync/storageSyncServices/syncGroups/serverEndpoints";
}
export interface storageSyncServices_syncGroups_serverEndpointsComponentOutputs {
	readonly apiVersion: "2019-06-01";
	readonly id: string;
	readonly type: "Microsoft.StorageSync/storageSyncServices/syncGroups/serverEndpoints";
}
export interface storageSyncServices_syncGroups_serverEndpointsComponentInputs {
	readonly name: string;
	readonly properties?: ServerEndpointCreateParametersPropertiesOrServerEndpointProperties;
}
export class storageSyncServices_workflows
	extends ArmResource<storageSyncServices_workflowsComponentInputs>
	implements storageSyncServices_workflowsComponentOutputs
{
	constructor(entity: ADKEntity, options: storageSyncServices_workflowsComponentInputs) {
		super(entity, options.name, "Microsoft.StorageSync/storageSyncServices/workflows", "2019-06-01", options);
	}
	public readonly apiVersion: "2019-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.StorageSync/storageSyncServices/workflows";
}
export interface storageSyncServices_workflowsComponentOutputs {
	readonly apiVersion: "2019-06-01";
	readonly id: string;
	readonly type: "Microsoft.StorageSync/storageSyncServices/workflows";
}
export interface storageSyncServices_workflowsComponentInputs {
	readonly name: string;
	readonly properties?: WorkflowProperties;
}
export interface CloudEndpointCreateParametersPropertiesOrCloudEndpointProperties {
	readonly azureFileShareName?: string;
	readonly backupEnabled?: string;
	readonly friendlyName?: string;
	readonly lastOperationName?: string;
	readonly lastWorkflowId?: string;
	readonly partnershipId?: string;
	readonly provisioningState?: string;
	readonly storageAccountResourceId?: string;
	readonly storageAccountTenantId?: string;
}
export interface RegisteredServerCreateParametersPropertiesOrRegisteredServerProperties {
	readonly agentVersion?: string;
	readonly clusterId?: string;
	readonly clusterName?: string;
	readonly discoveryEndpointUri?: string;
	readonly friendlyName?: string;
	readonly lastHeartBeat?: string;
	readonly lastOperationName?: string;
	readonly lastWorkflowId?: string;
	readonly managementEndpointUri?: string;
	readonly monitoringConfiguration?: string;
	readonly provisioningState?: string;
	readonly resourceLocation?: string;
	readonly serverCertificate?: string;
	readonly serverId?: string;
	readonly serverManagementErrorCode?: number;
	readonly serverOSVersion?: string;
	readonly serverRole?: string;
	readonly serviceLocation?: string;
	readonly storageSyncServiceUid?: string;
}
export interface ServerEndpointCloudTieringStatus {
	readonly health?: "Error" | "Healthy";
	readonly lastCloudTieringResult?: number;
	readonly lastSuccessTimestamp?: string;
	readonly lastUpdatedTimestamp?: string;
}
export interface ServerEndpointCreateParametersPropertiesOrServerEndpointProperties {
	readonly cloudTiering?: "off" | "on";
	readonly cloudTieringStatus?: ServerEndpointCloudTieringStatus;
	readonly friendlyName?: string;
	readonly lastOperationName?: string;
	readonly lastWorkflowId?: string;
	readonly offlineDataTransfer?: "off" | "on";
	readonly offlineDataTransferShareName?: string;
	readonly offlineDataTransferStorageAccountResourceId?: string;
	readonly offlineDataTransferStorageAccountTenantId?: string;
	readonly provisioningState?: string;
	readonly recallStatus?: ServerEndpointRecallStatus;
	readonly serverLocalPath?: string;
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
	readonly timestamp?: string;
	readonly totalBytes?: number;
	readonly totalItemCount?: number;
}
export interface ServerEndpointSyncSessionStatus {
	readonly filesNotSyncingErrors?: ServerEndpointFilesNotSyncingError[];
	readonly lastSyncPerItemErrorCount?: number;
	readonly lastSyncResult?: number;
	readonly lastSyncSuccessTimestamp?: string;
	readonly lastSyncTimestamp?: string;
	readonly persistentFilesNotSyncingCount?: number;
	readonly transientFilesNotSyncingCount?: number;
}
export interface ServerEndpointSyncStatus {
	readonly combinedHealth?:
		| "Error"
		| "Healthy"
		| "NoActivity"
		| "SyncBlockedForChangeDetectionPostRestore"
		| "SyncBlockedForRestore";
	readonly downloadActivity?: ServerEndpointSyncActivityStatus;
	readonly downloadHealth?:
		| "Error"
		| "Healthy"
		| "NoActivity"
		| "SyncBlockedForChangeDetectionPostRestore"
		| "SyncBlockedForRestore";
	readonly downloadStatus?: ServerEndpointSyncSessionStatus;
	readonly lastUpdatedTimestamp?: string;
	readonly offlineDataTransferStatus?: "Complete" | "InProgress" | "NotRunning" | "Stopping";
	readonly syncActivity?: "Download" | "Upload" | "UploadAndDownload";
	readonly totalPersistentFilesNotSyncingCount?: number;
	readonly uploadActivity?: ServerEndpointSyncActivityStatus;
	readonly uploadHealth?:
		| "Error"
		| "Healthy"
		| "NoActivity"
		| "SyncBlockedForChangeDetectionPostRestore"
		| "SyncBlockedForRestore";
	readonly uploadStatus?: ServerEndpointSyncSessionStatus;
}
export interface StorageSyncServiceCreateParametersTags {
	readonly [key: string]: string;
}
export interface WorkflowProperties {
	readonly lastOperationId?: string;
	readonly lastStepName?: string;
	readonly operation?: "cancel" | "do" | "undo";
	readonly status?: "aborted" | "active" | "expired" | "failed" | "succeeded";
	readonly steps?: string;
}
export default {
	storageSyncServices: storageSyncServices,
	"storageSyncServices/registeredServers": storageSyncServices_registeredServers,
	"storageSyncServices/syncGroups": storageSyncServices_syncGroups,
	"storageSyncServices/syncGroups/cloudEndpoints": storageSyncServices_syncGroups_cloudEndpoints,
	"storageSyncServices/syncGroups/serverEndpoints": storageSyncServices_syncGroups_serverEndpoints,
	"storageSyncServices/workflows": storageSyncServices_workflows,
};
