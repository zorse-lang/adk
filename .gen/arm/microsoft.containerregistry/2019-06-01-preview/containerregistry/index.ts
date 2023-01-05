import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class registries_agentPools
	extends ArmResource<registries_agentPoolsComponentInputs>
	implements registries_agentPoolsComponentOutputs
{
	constructor(entity: ADKEntity, options: registries_agentPoolsComponentInputs) {
		super(entity, options.name, "Microsoft.ContainerRegistry/registries/agentPools", "2019-06-01-preview", options);
	}
	public readonly apiVersion: "2019-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ContainerRegistry/registries/agentPools";
}
export interface registries_agentPoolsComponentOutputs {
	readonly apiVersion: "2019-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.ContainerRegistry/registries/agentPools";
}
export interface registries_agentPoolsComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: AgentPoolProperties;
	readonly systemData?: SystemData;
	readonly tags?: ResourceTags;
}
export class registries_runs
	extends ArmResource<registries_runsComponentInputs>
	implements registries_runsComponentOutputs
{
	constructor(entity: ADKEntity, options: registries_runsComponentInputs) {
		super(entity, options.name, "Microsoft.ContainerRegistry/registries/runs", "2019-06-01-preview", options);
	}
	public readonly apiVersion: "2019-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ContainerRegistry/registries/runs";
}
export interface registries_runsComponentOutputs {
	readonly apiVersion: "2019-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.ContainerRegistry/registries/runs";
}
export interface registries_runsComponentInputs {
	readonly name: string;
	readonly properties?: RunProperties;
	readonly systemData?: SystemData;
}
export class registries_taskRuns
	extends ArmResource<registries_taskRunsComponentInputs>
	implements registries_taskRunsComponentOutputs
{
	constructor(entity: ADKEntity, options: registries_taskRunsComponentInputs) {
		super(entity, options.name, "Microsoft.ContainerRegistry/registries/taskRuns", "2019-06-01-preview", options);
	}
	public readonly apiVersion: "2019-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ContainerRegistry/registries/taskRuns";
}
export interface registries_taskRunsComponentOutputs {
	readonly apiVersion: "2019-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.ContainerRegistry/registries/taskRuns";
}
export interface registries_taskRunsComponentInputs {
	readonly identity?: IdentityProperties;
	readonly location?: string;
	readonly name: string;
	readonly properties?: TaskRunProperties;
	readonly systemData?: SystemData;
}
export class registries_tasks
	extends ArmResource<registries_tasksComponentInputs>
	implements registries_tasksComponentOutputs
{
	constructor(entity: ADKEntity, options: registries_tasksComponentInputs) {
		super(entity, options.name, "Microsoft.ContainerRegistry/registries/tasks", "2019-06-01-preview", options);
	}
	public readonly apiVersion: "2019-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ContainerRegistry/registries/tasks";
}
export interface registries_tasksComponentOutputs {
	readonly apiVersion: "2019-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.ContainerRegistry/registries/tasks";
}
export interface registries_tasksComponentInputs {
	readonly identity?: IdentityProperties;
	readonly location: string;
	readonly name: string;
	readonly properties?: TaskProperties;
	readonly systemData?: SystemData;
	readonly tags?: ResourceTags;
}
export function listBuildSourceUploadUrl(resource: ArmResource): SourceUploadDefinition {
	if (resource.apiVersion !== "2019-06-01-preview") {
		throw new Error(`listBuildSourceUploadUrl is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.ContainerRegistry/registries") {
		throw new Error(`listBuildSourceUploadUrl is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export function listDetails(resource: registries_taskRuns): TaskRun {
	if (resource.apiVersion !== "2019-06-01-preview") {
		throw new Error(`listDetails is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.ContainerRegistry/registries/taskRuns") {
		throw new Error(`listDetails is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export function listLogSasUrl(resource: registries_runs): RunGetLogResult {
	if (resource.apiVersion !== "2019-06-01-preview") {
		throw new Error(`listLogSasUrl is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.ContainerRegistry/registries/runs") {
		throw new Error(`listLogSasUrl is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export function listQueueStatus(resource: registries_agentPools): AgentPoolQueueStatus {
	if (resource.apiVersion !== "2019-06-01-preview") {
		throw new Error(`listQueueStatus is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.ContainerRegistry/registries/agentPools") {
		throw new Error(`listQueueStatus is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export interface AgentPoolProperties {
	readonly count?: number;
	readonly os?: "Linux" | "Windows";
	readonly provisioningState?: "Canceled" | "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly tier?: string;
	readonly virtualNetworkSubnetResourceId?: string;
}
export interface AgentPoolQueueStatus {
	readonly count?: number;
}
export interface AgentProperties {
	readonly cpu?: number;
}
export interface Argument {
	readonly isSecret?: boolean;
	readonly name: string;
	readonly value: string;
}
export interface AuthInfo {
	readonly expiresIn?: number;
	readonly refreshToken?: string;
	readonly scope?: string;
	readonly token: string;
	readonly tokenType: "OAuth" | "PAT";
}
export interface BaseImageDependency {
	readonly digest?: string;
	readonly registry?: string;
	readonly repository?: string;
	readonly tag?: string;
	readonly type?: "BuildTime" | "RunTime";
}
export interface BaseImageTrigger {
	readonly baseImageTriggerType: "All" | "Runtime";
	readonly name: string;
	readonly status?: "Disabled" | "Enabled";
	readonly updateTriggerEndpoint?: string;
	readonly updateTriggerPayloadType?: "Default" | "Token";
}
export interface Credentials {
	readonly customRegistries?: CredentialsCustomRegistries;
	readonly sourceRegistry?: SourceRegistryCredentials;
}
export interface CredentialsCustomRegistries {
	readonly [key: string]: CustomRegistryCredentials;
}
export interface CustomRegistryCredentials {
	readonly identity?: string;
	readonly password?: SecretObject;
	readonly userName?: SecretObject;
}
export interface IdentityProperties {
	readonly principalId?: string;
	readonly tenantId?: string;
	readonly type?: "None" | "SystemAssigned" | "SystemAssigned, UserAssigned";
	readonly userAssignedIdentities?: IdentityPropertiesUserAssignedIdentities;
}
export interface IdentityPropertiesUserAssignedIdentities {
	readonly [key: string]: UserIdentityProperties;
}
export interface ImageDescriptor {
	readonly digest?: string;
	readonly registry?: string;
	readonly repository?: string;
	readonly tag?: string;
}
export interface ImageUpdateTrigger {
	readonly id?: string;
	readonly images?: ImageDescriptor[];
	readonly timestamp?: string;
}
export interface OverrideTaskStepProperties {
	readonly arguments?: Argument[];
	readonly contextPath?: string;
	readonly file?: string;
	readonly target?: string;
	readonly updateTriggerToken?: string;
	readonly values?: SetValue[];
}
export interface PlatformProperties {
	readonly architecture?: "386" | "amd64" | "arm" | "arm64" | "x86";
	readonly os: "Linux" | "Windows";
	readonly variant?: "v6" | "v7" | "v8";
}
export interface ResourceTags {
	readonly [key: string]: string;
}
export interface Run {
	readonly id?: string;
	readonly name?: string;
	readonly properties?: RunProperties;
	readonly systemData?: SystemData;
	readonly type?: string;
}
export interface RunGetLogResult {
	readonly logArtifactLink?: string;
	readonly logLink?: string;
}
export interface RunProperties {
	readonly agentConfiguration?: AgentProperties;
	readonly agentPoolName?: string;
	readonly createTime?: string;
	readonly customRegistries?: string[];
	readonly finishTime?: string;
	readonly imageUpdateTrigger?: ImageUpdateTrigger;
	readonly isArchiveEnabled?: boolean;
	readonly lastUpdatedTime?: string;
	readonly logArtifact?: ImageDescriptor;
	readonly outputImages?: ImageDescriptor[];
	readonly platform?: PlatformProperties;
	readonly provisioningState?: "Canceled" | "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly runErrorMessage?: string;
	readonly runId?: string;
	readonly runType?: "AutoBuild" | "AutoRun" | "QuickBuild" | "QuickRun";
	readonly sourceRegistryAuth?: string;
	readonly sourceTrigger?: SourceTriggerDescriptor;
	readonly startTime?: string;
	readonly status?: "Canceled" | "Error" | "Failed" | "Queued" | "Running" | "Started" | "Succeeded" | "Timeout";
	readonly task?: string;
	readonly timerTrigger?: TimerTriggerDescriptor;
	readonly updateTriggerToken?: string;
}
export interface RunRequest {
	readonly agentPoolName?: string;
	readonly isArchiveEnabled?: boolean;
	readonly logTemplate?: string;
}
export interface SecretObject {
	readonly type?: "Opaque" | "Vaultsecret";
	readonly value?: string;
}
export interface SetValue {
	readonly isSecret?: boolean;
	readonly name: string;
	readonly value: string;
}
export interface SourceProperties {
	readonly branch?: string;
	readonly repositoryUrl: string;
	readonly sourceControlAuthProperties?: AuthInfo;
	readonly sourceControlType: "Github" | "VisualStudioTeamService";
}
export interface SourceRegistryCredentials {
	readonly loginMode?: "Default" | "None";
}
export interface SourceTrigger {
	readonly name: string;
	readonly sourceRepository: SourceProperties;
	readonly sourceTriggerEvents: "commit" | "pullrequest"[];
	readonly status?: "Disabled" | "Enabled";
}
export interface SourceTriggerDescriptor {
	readonly branchName?: string;
	readonly commitId?: string;
	readonly eventType?: string;
	readonly id?: string;
	readonly providerType?: string;
	readonly pullRequestId?: string;
	readonly repositoryUrl?: string;
}
export interface SourceUploadDefinition {
	readonly relativePath?: string;
	readonly uploadUrl?: string;
}
export interface SystemData {
	readonly createdAt?: string;
	readonly createdBy?: string;
	readonly createdByType?: "Application" | "Key" | "ManagedIdentity" | "User";
	readonly lastModifiedAt?: string;
	readonly lastModifiedBy?: string;
	readonly lastModifiedByType?: "Application" | "Key" | "ManagedIdentity" | "User";
}
export interface Task {
	readonly id?: string;
	readonly identity?: IdentityProperties;
	readonly location: string;
	readonly name?: string;
	readonly properties?: TaskProperties;
	readonly systemData?: SystemData;
	readonly tags?: ResourceTags;
	readonly type?: string;
}
export interface TaskProperties {
	readonly agentConfiguration?: AgentProperties;
	readonly agentPoolName?: string;
	readonly creationDate?: string;
	readonly credentials?: Credentials;
	readonly isSystemTask?: boolean;
	readonly logTemplate?: string;
	readonly platform?: PlatformProperties;
	readonly provisioningState?: "Canceled" | "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly status?: "Disabled" | "Enabled";
	readonly step?: TaskStepProperties;
	readonly timeout?: number;
	readonly trigger?: TriggerProperties;
}
export interface TaskRun {
	readonly id?: string;
	readonly identity?: IdentityProperties;
	readonly location?: string;
	readonly name?: string;
	readonly properties?: TaskRunProperties;
	readonly systemData?: SystemData;
	readonly type?: string;
}
export interface TaskRunProperties {
	readonly forceUpdateTag?: string;
	readonly provisioningState?: "Canceled" | "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly runRequest?: RunRequest;
	readonly runResult?: Run;
}
export interface TaskStepProperties {
	readonly baseImageDependencies?: BaseImageDependency[];
	readonly contextAccessToken?: string;
	readonly contextPath?: string;
}
export interface TimerTrigger {
	readonly name: string;
	readonly schedule: string;
	readonly status?: "Disabled" | "Enabled";
}
export interface TimerTriggerDescriptor {
	readonly scheduleOccurrence?: string;
	readonly timerTriggerName?: string;
}
export interface TriggerProperties {
	readonly baseImageTrigger?: BaseImageTrigger;
	readonly sourceTriggers?: SourceTrigger[];
	readonly timerTriggers?: TimerTrigger[];
}
export interface UserIdentityProperties {
	readonly clientId?: string;
	readonly principalId?: string;
}
export default {
	"registries/agentPools": registries_agentPools,
	"registries/runs": registries_runs,
	"registries/taskRuns": registries_taskRuns,
	"registries/tasks": registries_tasks,
};
