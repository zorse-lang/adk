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
	readonly properties?: any;
	readonly tags?: StorageSyncServiceCreateParametersTags;
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
	readonly properties?: RegisteredServerCreateParametersPropertiesOrRegisteredServerProperties;
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
	readonly properties?: ServerEndpointCreateParametersPropertiesOrServerEndpointProperties;
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
	readonly properties?: WorkflowProperties;
}
export interface CloudEndpointCreateParametersPropertiesOrCloudEndpointProperties {
	readonly backupEnabled?: string;
	readonly friendlyName?: string;
	readonly lastOperationName?: string;
	readonly lastWorkflowId?: string;
	readonly partnershipId?: string;
	readonly provisioningState?: string;
	readonly storageAccountResourceId?: string;
	readonly storageAccountShareName?: string;
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
export interface ServerEndpointCreateParametersPropertiesOrServerEndpointProperties {
	readonly cloudTiering?: "off" | "on";
	readonly friendlyName?: string;
	readonly lastOperationName?: string;
	readonly lastWorkflowId?: string;
	readonly offlineDataTransfer?: "off" | "on";
	readonly offlineDataTransferShareName?: string;
	readonly offlineDataTransferStorageAccountResourceId?: string;
	readonly offlineDataTransferStorageAccountTenantId?: string;
	readonly provisioningState?: string;
	readonly serverLocalPath?: string;
	readonly serverResourceId?: string;
	readonly syncStatus?: ServerEndpointHealth;
	readonly tierFilesOlderThanDays?: number;
	readonly volumeFreeSpacePercent?: number;
}
export interface ServerEndpointHealth {
	readonly combinedHealth?:
		| "Error"
		| "Healthy"
		| "NoActivity"
		| "SyncBlockedForChangeDetectionPostRestore"
		| "SyncBlockedForRestore";
	readonly currentProgress?: SyncProgressStatus;
	readonly downloadHealth?:
		| "Error"
		| "Healthy"
		| "NoActivity"
		| "SyncBlockedForChangeDetectionPostRestore"
		| "SyncBlockedForRestore";
	readonly downloadStatus?: SyncSessionStatus;
	readonly lastUpdatedTimestamp?: string;
	readonly offlineDataTransferStatus?: "Complete" | "InProgress" | "NotRunning" | "Stopping";
	readonly uploadHealth?:
		| "Error"
		| "Healthy"
		| "NoActivity"
		| "SyncBlockedForChangeDetectionPostRestore"
		| "SyncBlockedForRestore";
	readonly uploadStatus?: SyncSessionStatus;
}
export interface StorageSyncServiceCreateParametersTags {
	readonly [key: string]: string;
}
export interface SyncProgressStatus {
	readonly appliedBytes?: number;
	readonly appliedItemCount?: number;
	readonly perItemErrorCount?: number;
	readonly progressTimestamp?: string;
	readonly syncDirection?: "download" | "initialize" | "none" | "recall" | "upload";
	readonly totalBytes?: number;
	readonly totalItemCount?: number;
}
export interface SyncSessionStatus {
	readonly lastSyncPerItemErrorCount?: number;
	readonly lastSyncResult?: number;
	readonly lastSyncSuccessTimestamp?: string;
	readonly lastSyncTimestamp?: string;
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
