import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class storageSyncServices
	extends ArmResource<storageSyncServicesComponentInputs>
	implements storageSyncServicesComponentOutputs
{
	constructor(entity: ADKEntity, options: storageSyncServicesComponentInputs) {
		super(entity, options.name, "Microsoft.StorageSync/storageSyncServices", "2017-06-05-preview", options);
	}
	public readonly apiVersion: "2017-06-05-preview";
	public readonly id: string;
	public readonly type: "Microsoft.StorageSync/storageSyncServices";
}
export interface storageSyncServicesComponentOutputs {
	readonly apiVersion: "2017-06-05-preview";
	readonly id: string;
	readonly type: "Microsoft.StorageSync/storageSyncServices";
}
export interface storageSyncServicesComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly properties?: StorageSyncServiceProperties;
	readonly tags?: any;
}
export class storageSyncServices_registeredServers
	extends ArmResource<storageSyncServices_registeredServersComponentInputs>
	implements storageSyncServices_registeredServersComponentOutputs
{
	constructor(entity: ADKEntity, options: storageSyncServices_registeredServersComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.StorageSync/storageSyncServices/registeredServers",
			"2017-06-05-preview",
			options,
		);
	}
	public readonly apiVersion: "2017-06-05-preview";
	public readonly id: string;
	public readonly type: "Microsoft.StorageSync/storageSyncServices/registeredServers";
}
export interface storageSyncServices_registeredServersComponentOutputs {
	readonly apiVersion: "2017-06-05-preview";
	readonly id: string;
	readonly type: "Microsoft.StorageSync/storageSyncServices/registeredServers";
}
export interface storageSyncServices_registeredServersComponentInputs {
	readonly name: string;
	readonly properties?: RegisteredServerProperties;
}
export class storageSyncServices_syncGroups
	extends ArmResource<storageSyncServices_syncGroupsComponentInputs>
	implements storageSyncServices_syncGroupsComponentOutputs
{
	constructor(entity: ADKEntity, options: storageSyncServices_syncGroupsComponentInputs) {
		super(entity, options.name, "Microsoft.StorageSync/storageSyncServices/syncGroups", "2017-06-05-preview", options);
	}
	public readonly apiVersion: "2017-06-05-preview";
	public readonly id: string;
	public readonly type: "Microsoft.StorageSync/storageSyncServices/syncGroups";
}
export interface storageSyncServices_syncGroupsComponentOutputs {
	readonly apiVersion: "2017-06-05-preview";
	readonly id: string;
	readonly type: "Microsoft.StorageSync/storageSyncServices/syncGroups";
}
export interface storageSyncServices_syncGroupsComponentInputs {
	readonly name: string;
	readonly properties?: SyncGroupProperties;
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
			"2017-06-05-preview",
			options,
		);
	}
	public readonly apiVersion: "2017-06-05-preview";
	public readonly id: string;
	public readonly type: "Microsoft.StorageSync/storageSyncServices/syncGroups/cloudEndpoints";
}
export interface storageSyncServices_syncGroups_cloudEndpointsComponentOutputs {
	readonly apiVersion: "2017-06-05-preview";
	readonly id: string;
	readonly type: "Microsoft.StorageSync/storageSyncServices/syncGroups/cloudEndpoints";
}
export interface storageSyncServices_syncGroups_cloudEndpointsComponentInputs {
	readonly name: string;
	readonly properties?: CloudEndpointProperties;
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
			"2017-06-05-preview",
			options,
		);
	}
	public readonly apiVersion: "2017-06-05-preview";
	public readonly id: string;
	public readonly type: "Microsoft.StorageSync/storageSyncServices/syncGroups/serverEndpoints";
}
export interface storageSyncServices_syncGroups_serverEndpointsComponentOutputs {
	readonly apiVersion: "2017-06-05-preview";
	readonly id: string;
	readonly type: "Microsoft.StorageSync/storageSyncServices/syncGroups/serverEndpoints";
}
export interface storageSyncServices_syncGroups_serverEndpointsComponentInputs {
	readonly name: string;
	readonly properties?: ServerEndpointProperties;
}
export class storageSyncServices_workflows
	extends ArmResource<storageSyncServices_workflowsComponentInputs>
	implements storageSyncServices_workflowsComponentOutputs
{
	constructor(entity: ADKEntity, options: storageSyncServices_workflowsComponentInputs) {
		super(entity, options.name, "Microsoft.StorageSync/storageSyncServices/workflows", "2017-06-05-preview", options);
	}
	public readonly apiVersion: "2017-06-05-preview";
	public readonly id: string;
	public readonly type: "Microsoft.StorageSync/storageSyncServices/workflows";
}
export interface storageSyncServices_workflowsComponentOutputs {
	readonly apiVersion: "2017-06-05-preview";
	readonly id: string;
	readonly type: "Microsoft.StorageSync/storageSyncServices/workflows";
}
export interface storageSyncServices_workflowsComponentInputs {
	readonly name: string;
	readonly properties?: WorkflowProperties;
}
export interface CloudEndpointProperties {
	readonly backupEnabled?: boolean;
	readonly friendlyName?: string;
	readonly lastWorkflowId?: string;
	readonly partnershipId?: string;
	readonly provisioningState?: string;
	readonly storageAccount?: string;
	readonly storageAccountKey?: string;
	readonly storageAccountResourceId?: string;
	readonly storageAccountShareName?: string;
	readonly storageAccountTenantId?: string;
}
export interface RegisteredServerProperties {
	readonly agentVersion?: string;
	readonly clusterId?: string;
	readonly clusterName?: string;
	readonly lastHeartBeat?: string;
	readonly lastWorkflowId?: string;
	readonly provisioningState?: string;
	readonly serverCertificate?: string;
	readonly serverId?: string;
	readonly serverManagementtErrorCode?: number;
	readonly serverOSVersion?: string;
	readonly serverRole?: string;
	readonly storageSyncServiceUid?: string;
}
export interface ServerEndpointProperties {
	readonly byteProgress?: number;
	readonly byteTotal?: number;
	readonly cloudTiering?: "off" | "on";
	readonly currentProgressType?: "download" | "initialize" | "none" | "recall" | "upload";
	readonly friendlyName?: string;
	readonly itemDownloadErrorCount?: number;
	readonly itemProgressCount?: number;
	readonly itemTotalCount?: number;
	readonly itemUploadErrorCount?: number;
	readonly lastSyncSuccess?: string;
	readonly lastWorkflowId?: string;
	readonly provisioningState?: string;
	readonly serverLocalPath?: string;
	readonly serverResourceId?: string;
	readonly syncErrorContext?: string;
	readonly syncErrorDirection?: "download" | "initialize" | "none" | "recall" | "upload";
	readonly syncErrorState?: string;
	readonly syncErrorStateTimestamp?: string;
	readonly totalProgress?: number;
	readonly volumeFreeSpacePercent?: number;
}
export interface StorageSyncServiceProperties {
	readonly storageSyncServiceStatus?: number;
	readonly storageSyncServiceUid?: string;
}
export interface SyncGroupProperties {
	readonly syncGroupStatus?: string;
	readonly uniqueId?: string;
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
