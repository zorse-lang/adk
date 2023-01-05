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
	readonly properties?: BuildProperties;
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
	readonly properties?: BuildTaskProperties;
	readonly tags?: ResourceTags;
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
	readonly properties?: BuildStepProperties;
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
	readonly digest?: string;
	readonly registry?: string;
	readonly repository?: string;
	readonly tag?: string;
	readonly type?: "BuildTime" | "RunTime";
}
export interface BuildArgument {
	readonly isSecret?: boolean;
	readonly name: string;
	readonly type: "DockerBuildArgument";
	readonly value: string;
}
export interface BuildArgumentList {
	readonly nextLink?: string;
	readonly value?: BuildArgument[];
}
export interface BuildProperties {
	readonly buildId?: string;
	readonly buildTask?: string;
	readonly buildType?: "AutoBuild" | "QuickBuild";
	readonly createTime?: string;
	readonly finishTime?: string;
	readonly gitCommitTrigger?: GitCommitTrigger;
	readonly imageUpdateTrigger?: ImageUpdateTrigger;
	readonly isArchiveEnabled?: boolean;
	readonly lastUpdatedTime?: string;
	readonly outputImages?: ImageDescriptor[];
	readonly platform?: PlatformProperties;
	readonly provisioningState?: "Canceled" | "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly startTime?: string;
	readonly status?: "Canceled" | "Error" | "Failed" | "Queued" | "Running" | "Started" | "Succeeded" | "Timeout";
}
export interface BuildStepProperties {
	readonly provisioningState?: "Canceled" | "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating";
}
export interface BuildTaskProperties {
	readonly alias: string;
	readonly creationDate?: string;
	readonly platform: PlatformProperties;
	readonly provisioningState?: "Canceled" | "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly sourceRepository: SourceRepositoryProperties;
	readonly status?: "Disabled" | "Enabled";
	readonly timeout?: number;
}
export interface GitCommitTrigger {
	readonly branchName?: string;
	readonly commitId?: string;
	readonly id?: string;
	readonly providerType?: string;
	readonly repositoryUrl?: string;
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
	readonly cpu?: number;
	readonly osType: "Linux" | "Windows";
}
export interface ResourceTags {
	readonly [key: string]: string;
}
export interface SourceControlAuthInfo {
	readonly expiresIn?: number;
	readonly refreshToken?: string;
	readonly scope?: string;
	readonly token: string;
	readonly tokenType?: "OAuth" | "PAT";
}
export interface SourceRepositoryProperties {
	readonly isCommitTriggerEnabled?: boolean;
	readonly repositoryUrl: string;
	readonly sourceControlAuthProperties?: SourceControlAuthInfo;
	readonly sourceControlType: "Github" | "VisualStudioTeamService";
}
export default {
	"registries/builds": registries_builds,
	"registries/buildTasks": registries_buildTasks,
	"registries/buildTasks/steps": registries_buildTasks_steps,
};
