import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class registries_runs
	extends ArmResource<registries_runsComponentInputs>
	implements registries_runsComponentOutputs
{
	constructor(entity: ADKEntity, options: registries_runsComponentInputs) {
		super(entity, options.name, "Microsoft.ContainerRegistry/registries/runs", "2019-04-01", options);
	}
	public readonly apiVersion: "2019-04-01";
	public readonly id: string;
	public readonly type: "Microsoft.ContainerRegistry/registries/runs";
}
export interface registries_runsComponentOutputs {
	readonly apiVersion: "2019-04-01";
	readonly id: string;
	readonly type: "Microsoft.ContainerRegistry/registries/runs";
}
export interface registries_runsComponentInputs {
	readonly name: string;
	readonly properties?: RunProperties;
}
export class registries_tasks
	extends ArmResource<registries_tasksComponentInputs>
	implements registries_tasksComponentOutputs
{
	constructor(entity: ADKEntity, options: registries_tasksComponentInputs) {
		super(entity, options.name, "Microsoft.ContainerRegistry/registries/tasks", "2019-04-01", options);
	}
	public readonly apiVersion: "2019-04-01";
	public readonly id: string;
	public readonly type: "Microsoft.ContainerRegistry/registries/tasks";
}
export interface registries_tasksComponentOutputs {
	readonly apiVersion: "2019-04-01";
	readonly id: string;
	readonly type: "Microsoft.ContainerRegistry/registries/tasks";
}
export interface registries_tasksComponentInputs {
	readonly identity?: IdentityProperties;
	readonly location: string;
	readonly name: string;
	readonly properties?: TaskProperties;
	readonly tags?: ResourceTags;
}
export function listBuildSourceUploadUrl(resource: ArmResource): SourceUploadDefinition {
	if (resource.apiVersion !== "2019-04-01") {
		throw new Error(`listBuildSourceUploadUrl is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.ContainerRegistry/registries") {
		throw new Error(`listBuildSourceUploadUrl is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export function listDetails(resource: registries_tasks): Task {
	if (resource.apiVersion !== "2019-04-01") {
		throw new Error(`listDetails is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.ContainerRegistry/registries/tasks") {
		throw new Error(`listDetails is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export function listLogSasUrl(resource: registries_runs): RunGetLogResult {
	if (resource.apiVersion !== "2019-04-01") {
		throw new Error(`listLogSasUrl is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.ContainerRegistry/registries/runs") {
		throw new Error(`listLogSasUrl is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
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
export interface PlatformProperties {
	readonly architecture?: "amd64" | "arm" | "x86";
	readonly os: "Linux" | "Windows";
	readonly variant?: "v6" | "v7" | "v8";
}
export interface ResourceTags {
	readonly [key: string]: string;
}
export interface RunGetLogResult {
	readonly logLink?: string;
}
export interface RunProperties {
	readonly agentConfiguration?: AgentProperties;
	readonly createTime?: string;
	readonly customRegistries?: string[];
	readonly finishTime?: string;
	readonly imageUpdateTrigger?: ImageUpdateTrigger;
	readonly isArchiveEnabled?: boolean;
	readonly lastUpdatedTime?: string;
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
export interface Task {
	readonly id?: string;
	readonly identity?: IdentityProperties;
	readonly location: string;
	readonly name?: string;
	readonly properties?: TaskProperties;
	readonly tags?: ResourceTags;
	readonly type?: string;
}
export interface TaskProperties {
	readonly agentConfiguration?: AgentProperties;
	readonly creationDate?: string;
	readonly credentials?: Credentials;
	readonly platform: PlatformProperties;
	readonly provisioningState?: "Canceled" | "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly status?: "Disabled" | "Enabled";
	readonly step: TaskStepProperties;
	readonly timeout?: number;
	readonly trigger?: TriggerProperties;
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
	"registries/runs": registries_runs,
	"registries/tasks": registries_tasks,
};
