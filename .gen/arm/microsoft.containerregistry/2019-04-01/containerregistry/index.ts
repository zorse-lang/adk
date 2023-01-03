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
	readonly properties?: RunProperties | undefined;
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
	readonly identity?: IdentityProperties | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties?: TaskProperties | undefined;
	readonly tags?: ResourceTags | undefined;
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
export interface PlatformProperties {
	readonly architecture?: ("amd64" | "arm" | "x86") | undefined;
	readonly os: "Linux" | "Windows";
	readonly variant?: ("v6" | "v7" | "v8") | undefined;
}
export interface ResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface RunGetLogResult {
	readonly logLink?: string | undefined;
}
export interface RunProperties {
	readonly agentConfiguration?: AgentProperties | undefined;
	readonly createTime?: string | undefined;
	readonly customRegistries?: string[] | undefined;
	readonly finishTime?: string | undefined;
	readonly imageUpdateTrigger?: ImageUpdateTrigger | undefined;
	readonly isArchiveEnabled?: boolean | undefined;
	readonly lastUpdatedTime?: string | undefined;
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
export interface Task {
	readonly id?: string | undefined;
	readonly identity?: IdentityProperties | undefined;
	readonly location: string;
	readonly name?: string | undefined;
	readonly properties?: TaskProperties | undefined;
	readonly tags?: ResourceTags | undefined;
	readonly type?: string | undefined;
}
export interface TaskProperties {
	readonly agentConfiguration?: AgentProperties | undefined;
	readonly creationDate?: string | undefined;
	readonly credentials?: Credentials | undefined;
	readonly platform: PlatformProperties;
	readonly provisioningState?: ("Canceled" | "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly status?: ("Disabled" | "Enabled") | undefined;
	readonly step: TaskStepProperties;
	readonly timeout?: number | undefined;
	readonly trigger?: TriggerProperties | undefined;
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
	"registries/runs": registries_runs,
	"registries/tasks": registries_tasks,
};
