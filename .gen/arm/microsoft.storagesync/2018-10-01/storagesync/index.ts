import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class storageSyncServices
	extends ArmResource<storageSyncServicesComponentInputs>
	implements storageSyncServicesComponentOutputs
{
	constructor(entity: ADKEntity, options: storageSyncServicesComponentInputs) {
		super(entity, options.name, "Microsoft.StorageSync/storageSyncServices", "2018-10-01", options);
	}
	public readonly apiVersion: "2018-10-01";
	public readonly id: string;
	public readonly type: "Microsoft.StorageSync/storageSyncServices";
}
export interface storageSyncServicesComponentOutputs {
	readonly apiVersion: "2018-10-01";
	readonly id: string;
	readonly type: "Microsoft.StorageSync/storageSyncServices";
}
export interface storageSyncServicesComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: any | undefined;
	readonly tags?: StorageSyncServiceCreateParametersTags | undefined;
}
export class storageSyncServices_registeredServers
	extends ArmResource<storageSyncServices_registeredServersComponentInputs>
	implements storageSyncServices_registeredServersComponentOutputs
{
	constructor(entity: ADKEntity, options: storageSyncServices_registeredServersComponentInputs) {
		super(entity, options.name, "Microsoft.StorageSync/storageSyncServices/registeredServers", "2018-10-01", options);
	}
	public readonly apiVersion: "2018-10-01";
	public readonly id: string;
	public readonly type: "Microsoft.StorageSync/storageSyncServices/registeredServers";
}
export interface storageSyncServices_registeredServersComponentOutputs {
	readonly apiVersion: "2018-10-01";
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
		super(entity, options.name, "Microsoft.StorageSync/storageSyncServices/syncGroups", "2018-10-01", options);
	}
	public readonly apiVersion: "2018-10-01";
	public readonly id: string;
	public readonly type: "Microsoft.StorageSync/storageSyncServices/syncGroups";
}
export interface storageSyncServices_syncGroupsComponentOutputs {
	readonly apiVersion: "2018-10-01";
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
			"2018-10-01",
			options,
		);
	}
	public readonly apiVersion: "2018-10-01";
	public readonly id: string;
	public readonly type: "Microsoft.StorageSync/storageSyncServices/syncGroups/cloudEndpoints";
}
export interface storageSyncServices_syncGroups_cloudEndpointsComponentOutputs {
	readonly apiVersion: "2018-10-01";
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
			"2018-10-01",
			options,
		);
	}
	public readonly apiVersion: "2018-10-01";
	public readonly id: string;
	public readonly type: "Microsoft.StorageSync/storageSyncServices/syncGroups/serverEndpoints";
}
export interface storageSyncServices_syncGroups_serverEndpointsComponentOutputs {
	readonly apiVersion: "2018-10-01";
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
		super(entity, options.name, "Microsoft.StorageSync/storageSyncServices/workflows", "2018-10-01", options);
	}
	public readonly apiVersion: "2018-10-01";
	public readonly id: string;
	public readonly type: "Microsoft.StorageSync/storageSyncServices/workflows";
}
export interface storageSyncServices_workflowsComponentOutputs {
	readonly apiVersion: "2018-10-01";
	readonly id: string;
	readonly type: "Microsoft.StorageSync/storageSyncServices/workflows";
}
export interface storageSyncServices_workflowsComponentInputs {
	readonly name: string;
	readonly properties?: WorkflowProperties | undefined;
}
export interface CloudEndpointCreateParametersPropertiesOrCloudEndpointProperties {
	readonly backupEnabled?: string | undefined;
	readonly friendlyName?: string | undefined;
	readonly lastOperationName?: string | undefined;
	readonly lastWorkflowId?: string | undefined;
	readonly partnershipId?: string | undefined;
	readonly provisioningState?: string | undefined;
	readonly storageAccountResourceId?: string | undefined;
	readonly storageAccountShareName?: string | undefined;
	readonly storageAccountTenantId?: string | undefined;
}
export interface RegisteredServerCreateParametersPropertiesOrRegisteredServerProperties {
	readonly agentVersion?: string | undefined;
	readonly clusterId?: string | undefined;
	readonly clusterName?: string | undefined;
	readonly discoveryEndpointUri?: string | undefined;
	readonly friendlyName?: string | undefined;
	readonly lastHeartBeat?: string | undefined;
	readonly lastOperationName?: string | undefined;
	readonly lastWorkflowId?: string | undefined;
	readonly managementEndpointUri?: string | undefined;
	readonly monitoringConfiguration?: string | undefined;
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
export interface ServerEndpointCreateParametersPropertiesOrServerEndpointProperties {
	readonly cloudTiering?: ("off" | "on") | undefined;
	readonly friendlyName?: string | undefined;
	readonly lastOperationName?: string | undefined;
	readonly lastWorkflowId?: string | undefined;
	readonly offlineDataTransfer?: ("off" | "on") | undefined;
	readonly offlineDataTransferShareName?: string | undefined;
	readonly offlineDataTransferStorageAccountResourceId?: string | undefined;
	readonly offlineDataTransferStorageAccountTenantId?: string | undefined;
	readonly provisioningState?: string | undefined;
	readonly serverLocalPath?: string | undefined;
	readonly serverResourceId?: string | undefined;
	readonly syncStatus?: ServerEndpointHealth | undefined;
	readonly tierFilesOlderThanDays?: number | undefined;
	readonly volumeFreeSpacePercent?: number | undefined;
}
export interface ServerEndpointHealth {
	readonly combinedHealth?:
		| ("Error" | "Healthy" | "NoActivity" | "SyncBlockedForChangeDetectionPostRestore" | "SyncBlockedForRestore")
		| undefined;
	readonly currentProgress?: SyncProgressStatus | undefined;
	readonly downloadHealth?:
		| ("Error" | "Healthy" | "NoActivity" | "SyncBlockedForChangeDetectionPostRestore" | "SyncBlockedForRestore")
		| undefined;
	readonly downloadStatus?: SyncSessionStatus | undefined;
	readonly lastUpdatedTimestamp?: string | undefined;
	readonly offlineDataTransferStatus?: ("Complete" | "InProgress" | "NotRunning" | "Stopping") | undefined;
	readonly uploadHealth?:
		| ("Error" | "Healthy" | "NoActivity" | "SyncBlockedForChangeDetectionPostRestore" | "SyncBlockedForRestore")
		| undefined;
	readonly uploadStatus?: SyncSessionStatus | undefined;
}
export interface StorageSyncServiceCreateParametersTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface SyncProgressStatus {
	readonly appliedBytes?: number | undefined;
	readonly appliedItemCount?: number | undefined;
	readonly perItemErrorCount?: number | undefined;
	readonly progressTimestamp?: string | undefined;
	readonly syncDirection?: ("download" | "initialize" | "none" | "recall" | "upload") | undefined;
	readonly totalBytes?: number | undefined;
	readonly totalItemCount?: number | undefined;
}
export interface SyncSessionStatus {
	readonly lastSyncPerItemErrorCount?: number | undefined;
	readonly lastSyncResult?: number | undefined;
	readonly lastSyncSuccessTimestamp?: string | undefined;
	readonly lastSyncTimestamp?: string | undefined;
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
	"storageSyncServices/registeredServers": storageSyncServices_registeredServers,
	"storageSyncServices/syncGroups": storageSyncServices_syncGroups,
	"storageSyncServices/syncGroups/cloudEndpoints": storageSyncServices_syncGroups_cloudEndpoints,
	"storageSyncServices/syncGroups/serverEndpoints": storageSyncServices_syncGroups_serverEndpoints,
	"storageSyncServices/workflows": storageSyncServices_workflows,
};
