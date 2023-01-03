import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class registries_builds
	extends ArmResource<registries_buildsComponentInputs>
	implements registries_buildsComponentOutputs
{
	constructor(entity: ADKEntity, options: registries_buildsComponentInputs) {
		super(entity, options.name, "Microsoft.ContainerRegistry/registries/builds", "2018-02-01-preview", options);
	}
	public readonly apiVersion: "2018-02-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ContainerRegistry/registries/builds";
}
export interface registries_buildsComponentOutputs {
	readonly apiVersion: "2018-02-01-preview";
	readonly id: string;
	readonly type: "Microsoft.ContainerRegistry/registries/builds";
}
export interface registries_buildsComponentInputs {
	readonly name: string;
	readonly properties?: BuildProperties | undefined;
}
export class registries_buildTasks
	extends ArmResource<registries_buildTasksComponentInputs>
	implements registries_buildTasksComponentOutputs
{
	constructor(entity: ADKEntity, options: registries_buildTasksComponentInputs) {
		super(entity, options.name, "Microsoft.ContainerRegistry/registries/buildTasks", "2018-02-01-preview", options);
	}
	public readonly apiVersion: "2018-02-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ContainerRegistry/registries/buildTasks";
}
export interface registries_buildTasksComponentOutputs {
	readonly apiVersion: "2018-02-01-preview";
	readonly id: string;
	readonly type: "Microsoft.ContainerRegistry/registries/buildTasks";
}
export interface registries_buildTasksComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: BuildTaskProperties | undefined;
	readonly tags?: ResourceTags | undefined;
}
export class registries_buildTasks_steps
	extends ArmResource<registries_buildTasks_stepsComponentInputs>
	implements registries_buildTasks_stepsComponentOutputs
{
	constructor(entity: ADKEntity, options: registries_buildTasks_stepsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.ContainerRegistry/registries/buildTasks/steps",
			"2018-02-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2018-02-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ContainerRegistry/registries/buildTasks/steps";
}
export interface registries_buildTasks_stepsComponentOutputs {
	readonly apiVersion: "2018-02-01-preview";
	readonly id: string;
	readonly type: "Microsoft.ContainerRegistry/registries/buildTasks/steps";
}
export interface registries_buildTasks_stepsComponentInputs {
	readonly name: string;
	readonly properties?: BuildStepProperties | undefined;
}
export function listBuildArguments(resource: registries_buildTasks_steps): BuildArgumentList {
	if (resource.apiVersion !== "2018-02-01-preview") {
		throw new Error(`listBuildArguments is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.ContainerRegistry/registries/buildTasks/steps") {
		throw new Error(`listBuildArguments is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export function listSourceRepositoryProperties(resource: registries_buildTasks): SourceRepositoryProperties {
	if (resource.apiVersion !== "2018-02-01-preview") {
		throw new Error(`listSourceRepositoryProperties is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.ContainerRegistry/registries/buildTasks") {
		throw new Error(`listSourceRepositoryProperties is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export interface BaseImageDependency {
	readonly digest?: string | undefined;
	readonly registry?: string | undefined;
	readonly repository?: string | undefined;
	readonly tag?: string | undefined;
	readonly type?: ("BuildTime" | "RunTime") | undefined;
}
export interface BuildArgument {
	readonly isSecret?: boolean | undefined;
	readonly name: string;
	readonly type: "DockerBuildArgument";
	readonly value: string;
}
export interface BuildArgumentList {
	readonly nextLink?: string | undefined;
	readonly value?: BuildArgument[] | undefined;
}
export interface BuildProperties {
	readonly buildId?: string | undefined;
	readonly buildTask?: string | undefined;
	readonly buildType?: ("AutoBuild" | "QuickBuild") | undefined;
	readonly createTime?: string | undefined;
	readonly finishTime?: string | undefined;
	readonly gitCommitTrigger?: GitCommitTrigger | undefined;
	readonly imageUpdateTrigger?: ImageUpdateTrigger | undefined;
	readonly isArchiveEnabled?: boolean | undefined;
	readonly lastUpdatedTime?: string | undefined;
	readonly outputImages?: ImageDescriptor[] | undefined;
	readonly platform?: PlatformProperties | undefined;
	readonly provisioningState?: ("Canceled" | "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly startTime?: string | undefined;
	readonly status?:
		| ("Canceled" | "Error" | "Failed" | "Queued" | "Running" | "Started" | "Succeeded" | "Timeout")
		| undefined;
}
export interface BuildStepProperties {
	readonly provisioningState?: ("Canceled" | "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
}
export interface BuildTaskProperties {
	readonly alias: string;
	readonly creationDate?: string | undefined;
	readonly platform: PlatformProperties;
	readonly provisioningState?: ("Canceled" | "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly sourceRepository: SourceRepositoryProperties;
	readonly status?: ("Disabled" | "Enabled") | undefined;
	readonly timeout?: number | undefined;
}
export interface GitCommitTrigger {
	readonly branchName?: string | undefined;
	readonly commitId?: string | undefined;
	readonly id?: string | undefined;
	readonly providerType?: string | undefined;
	readonly repositoryUrl?: string | undefined;
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
	readonly cpu?: number | undefined;
	readonly osType: "Linux" | "Windows";
}
export interface ResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface SourceControlAuthInfo {
	readonly expiresIn?: number | undefined;
	readonly refreshToken?: string | undefined;
	readonly scope?: string | undefined;
	readonly token: string;
	readonly tokenType?: ("OAuth" | "PAT") | undefined;
}
export interface SourceRepositoryProperties {
	readonly isCommitTriggerEnabled?: boolean | undefined;
	readonly repositoryUrl: string;
	readonly sourceControlAuthProperties?: SourceControlAuthInfo | undefined;
	readonly sourceControlType: "Github" | "VisualStudioTeamService";
}
export default {
	"registries/builds": registries_builds,
	"registries/buildTasks": registries_buildTasks,
	"registries/buildTasks/steps": registries_buildTasks_steps,
};
