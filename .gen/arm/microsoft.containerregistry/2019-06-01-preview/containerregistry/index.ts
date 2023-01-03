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
	readonly properties?: AgentPoolProperties | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: ResourceTags | undefined;
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
	readonly properties?: RunProperties | undefined;
	readonly systemData?: SystemData | undefined;
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
	readonly identity?: IdentityProperties | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: TaskRunProperties | undefined;
	readonly systemData?: SystemData | undefined;
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
	readonly identity?: IdentityProperties | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties?: TaskProperties | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: ResourceTags | undefined;
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
	readonly count?: number | undefined;
	readonly os?: ("Linux" | "Windows") | undefined;
	readonly provisioningState?: ("Canceled" | "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly tier?: string | undefined;
	readonly virtualNetworkSubnetResourceId?: string | undefined;
}
export interface AgentPoolQueueStatus {
	readonly count?: number | undefined;
}
export interface AgentProperties {
	readonly cpu?: number | undefined;
}
export interface Argument {
	readonly isSecret?: boolean | undefined;
	readonly name: string;
	readonly value: string;
}
export interface AuthInfo {
	readonly expiresIn?: number | undefined;
	readonly refreshToken?: string | undefined;
	readonly scope?: string | undefined;
	readonly token: string;
	readonly tokenType: "OAuth" | "PAT";
}
export interface BaseImageDependency {
	readonly digest?: string | undefined;
	readonly registry?: string | undefined;
	readonly repository?: string | undefined;
	readonly tag?: string | undefined;
	readonly type?: ("BuildTime" | "RunTime") | undefined;
}
export interface BaseImageTrigger {
	readonly baseImageTriggerType: "All" | "Runtime";
	readonly name: string;
	readonly status?: ("Disabled" | "Enabled") | undefined;
	readonly updateTriggerEndpoint?: string | undefined;
	readonly updateTriggerPayloadType?: ("Default" | "Token") | undefined;
}
export interface Credentials {
	readonly customRegistries?: CredentialsCustomRegistries | undefined;
	readonly sourceRegistry?: SourceRegistryCredentials | undefined;
}
export interface CredentialsCustomRegistries {
	readonly "[ key: string ]"?: CustomRegistryCredentials | undefined;
}
export interface CustomRegistryCredentials {
	readonly identity?: string | undefined;
	readonly password?: SecretObject | undefined;
	readonly userName?: SecretObject | undefined;
}
export interface IdentityProperties {
	readonly principalId?: string | undefined;
	readonly tenantId?: string | undefined;
	readonly type?: ("None" | "SystemAssigned" | "SystemAssigned, UserAssigned") | undefined;
	readonly userAssignedIdentities?: IdentityPropertiesUserAssignedIdentities | undefined;
}
export interface IdentityPropertiesUserAssignedIdentities {
	readonly "[ key: string ]"?: UserIdentityProperties | undefined;
}
export interface ImageDescriptor {
	readonly digest?: string | undefined;
	readonly registry?: string | undefined;
	readonly repository?: string | undefined;
	readonly tag?: string | undefined;
}
export interface ImageUpdateTrigger {
	readonly id?: string | undefined;
	readonly images?: ImageDescriptor[] | undefined;
	readonly timestamp?: string | undefined;
}
export interface OverrideTaskStepProperties {
	readonly arguments?: Argument[] | undefined;
	readonly contextPath?: string | undefined;
	readonly file?: string | undefined;
	readonly target?: string | undefined;
	readonly updateTriggerToken?: string | undefined;
	readonly values?: SetValue[] | undefined;
}
export interface PlatformProperties {
	readonly architecture?: ("386" | "amd64" | "arm" | "arm64" | "x86") | undefined;
	readonly os: "Linux" | "Windows";
	readonly variant?: ("v6" | "v7" | "v8") | undefined;
}
export interface ResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface Run {
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: RunProperties | undefined;
	readonly systemData?: SystemData | undefined;
	readonly type?: string | undefined;
}
export interface RunGetLogResult {
	readonly logArtifactLink?: string | undefined;
	readonly logLink?: string | undefined;
}
export interface RunProperties {
	readonly agentConfiguration?: AgentProperties | undefined;
	readonly agentPoolName?: string | undefined;
	readonly createTime?: string | undefined;
	readonly customRegistries?: string[] | undefined;
	readonly finishTime?: string | undefined;
	readonly imageUpdateTrigger?: ImageUpdateTrigger | undefined;
	readonly isArchiveEnabled?: boolean | undefined;
	readonly lastUpdatedTime?: string | undefined;
	readonly logArtifact?: ImageDescriptor | undefined;
	readonly outputImages?: ImageDescriptor[] | undefined;
	readonly platform?: PlatformProperties | undefined;
	readonly provisioningState?: ("Canceled" | "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly runErrorMessage?: string | undefined;
	readonly runId?: string | undefined;
	readonly runType?: ("AutoBuild" | "AutoRun" | "QuickBuild" | "QuickRun") | undefined;
	readonly sourceRegistryAuth?: string | undefined;
	readonly sourceTrigger?: SourceTriggerDescriptor | undefined;
	readonly startTime?: string | undefined;
	readonly status?:
		| ("Canceled" | "Error" | "Failed" | "Queued" | "Running" | "Started" | "Succeeded" | "Timeout")
		| undefined;
	readonly task?: string | undefined;
	readonly timerTrigger?: TimerTriggerDescriptor | undefined;
	readonly updateTriggerToken?: string | undefined;
}
export interface RunRequest {
	readonly agentPoolName?: string | undefined;
	readonly isArchiveEnabled?: boolean | undefined;
	readonly logTemplate?: string | undefined;
}
export interface SecretObject {
	readonly type?: ("Opaque" | "Vaultsecret") | undefined;
	readonly value?: string | undefined;
}
export interface SetValue {
	readonly isSecret?: boolean | undefined;
	readonly name: string;
	readonly value: string;
}
export interface SourceProperties {
	readonly branch?: string | undefined;
	readonly repositoryUrl: string;
	readonly sourceControlAuthProperties?: AuthInfo | undefined;
	readonly sourceControlType: "Github" | "VisualStudioTeamService";
}
export interface SourceRegistryCredentials {
	readonly loginMode?: ("Default" | "None") | undefined;
}
export interface SourceTrigger {
	readonly name: string;
	readonly sourceRepository: SourceProperties;
	readonly sourceTriggerEvents: "commit" | "pullrequest"[];
	readonly status?: ("Disabled" | "Enabled") | undefined;
}
export interface SourceTriggerDescriptor {
	readonly branchName?: string | undefined;
	readonly commitId?: string | undefined;
	readonly eventType?: string | undefined;
	readonly id?: string | undefined;
	readonly providerType?: string | undefined;
	readonly pullRequestId?: string | undefined;
	readonly repositoryUrl?: string | undefined;
}
export interface SourceUploadDefinition {
	readonly relativePath?: string | undefined;
	readonly uploadUrl?: string | undefined;
}
export interface SystemData {
	readonly createdAt?: string | undefined;
	readonly createdBy?: string | undefined;
	readonly createdByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
	readonly lastModifiedAt?: string | undefined;
	readonly lastModifiedBy?: string | undefined;
	readonly lastModifiedByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
}
export interface Task {
	readonly id?: string | undefined;
	readonly identity?: IdentityProperties | undefined;
	readonly location: string;
	readonly name?: string | undefined;
	readonly properties?: TaskProperties | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: ResourceTags | undefined;
	readonly type?: string | undefined;
}
export interface TaskProperties {
	readonly agentConfiguration?: AgentProperties | undefined;
	readonly agentPoolName?: string | undefined;
	readonly creationDate?: string | undefined;
	readonly credentials?: Credentials | undefined;
	readonly isSystemTask?: boolean | undefined;
	readonly logTemplate?: string | undefined;
	readonly platform?: PlatformProperties | undefined;
	readonly provisioningState?: ("Canceled" | "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly status?: ("Disabled" | "Enabled") | undefined;
	readonly step?: TaskStepProperties | undefined;
	readonly timeout?: number | undefined;
	readonly trigger?: TriggerProperties | undefined;
}
export interface TaskRun {
	readonly id?: string | undefined;
	readonly identity?: IdentityProperties | undefined;
	readonly location?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: TaskRunProperties | undefined;
	readonly systemData?: SystemData | undefined;
	readonly type?: string | undefined;
}
export interface TaskRunProperties {
	readonly forceUpdateTag?: string | undefined;
	readonly provisioningState?: ("Canceled" | "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly runRequest?: RunRequest | undefined;
	readonly runResult?: Run | undefined;
}
export interface TaskStepProperties {
	readonly baseImageDependencies?: BaseImageDependency[] | undefined;
	readonly contextAccessToken?: string | undefined;
	readonly contextPath?: string | undefined;
}
export interface TimerTrigger {
	readonly name: string;
	readonly schedule: string;
	readonly status?: ("Disabled" | "Enabled") | undefined;
}
export interface TimerTriggerDescriptor {
	readonly scheduleOccurrence?: string | undefined;
	readonly timerTriggerName?: string | undefined;
}
export interface TriggerProperties {
	readonly baseImageTrigger?: BaseImageTrigger | undefined;
	readonly sourceTriggers?: SourceTrigger[] | undefined;
	readonly timerTriggers?: TimerTrigger[] | undefined;
}
export interface UserIdentityProperties {
	readonly clientId?: string | undefined;
	readonly principalId?: string | undefined;
}
export default {
	"registries/agentPools": registries_agentPools,
	"registries/runs": registries_runs,
	"registries/taskRuns": registries_taskRuns,
	"registries/tasks": registries_tasks,
};
