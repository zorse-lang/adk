import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ProjectsLocationsFunctions
	extends GdmResource<ProjectsLocationsFunctionsComponentInputs>
	implements ProjectsLocationsFunctionsComponentOutputs
{
	constructor(entity: ADKEntity, options: ProjectsLocationsFunctionsComponentInputs) {
		super(entity, options.name, "cloudfunctions.v2beta.ProjectsLocationsFunctions", options);
	}
	public readonly state?: string | undefined;
	public readonly stateMessages?: GoogleCloudFunctionsV2betaStateMessage[] | undefined;
	public readonly updateTime?: string | undefined;
}
export interface ProjectsLocationsFunctionsComponentOutputs {
	readonly state?: string | undefined;
	readonly stateMessages?: GoogleCloudFunctionsV2betaStateMessage[] | undefined;
	readonly updateTime?: string | undefined;
}
export interface ProjectsLocationsFunctionsComponentInputs {
	readonly buildConfig?: BuildConfig | undefined;
	readonly description?: string | undefined;
	readonly environment?: string | undefined;
	readonly eventTrigger?: EventTrigger | undefined;
	readonly functionId?: string | undefined;
	readonly labels?: { [P in string]: string } | undefined;
	readonly name: string;
	readonly parent: string;
	readonly serviceConfig?: ServiceConfig | undefined;
	readonly type: string;
}
export interface BuildConfig {
	readonly build?: string | undefined;
	readonly buildpackStack?: string | undefined;
	readonly dockerRegistry?: string | undefined;
	readonly dockerRepository?: string | undefined;
	readonly entryPoint?: string | undefined;
	readonly environmentVariables?: { [P in string]: string } | undefined;
	readonly runtime?: string | undefined;
	readonly source?: Source | undefined;
	readonly sourceProvenance?: SourceProvenance | undefined;
	readonly workerPool?: string | undefined;
}
export interface EventFilter {
	readonly attribute: string;
	readonly operator?: string | undefined;
	readonly value: string;
}
export interface EventTrigger {
	readonly channel?: string | undefined;
	readonly eventFilters?: EventFilter[] | undefined;
	readonly eventType: string;
	readonly pubsubTopic?: string | undefined;
	readonly retryPolicy?: string | undefined;
	readonly serviceAccountEmail?: string | undefined;
	readonly trigger?: string | undefined;
	readonly triggerRegion?: string | undefined;
}
export interface FunctionInstance {
	readonly buildConfig?: BuildConfig | undefined;
	readonly description?: string | undefined;
	readonly environment?: string | undefined;
	readonly eventTrigger?: EventTrigger | undefined;
	readonly labels?: { [P in string]: string } | undefined;
	readonly name?: string | undefined;
	readonly serviceConfig?: ServiceConfig | undefined;
	readonly state?: string | undefined;
	readonly stateMessages?: GoogleCloudFunctionsV2betaStateMessage[] | undefined;
	readonly updateTime?: string | undefined;
}
export interface GoogleCloudFunctionsV2betaStateMessage {
	readonly message?: string | undefined;
	readonly severity?: string | undefined;
	readonly type?: string | undefined;
}
export interface RepoSource {
	readonly branchName?: string | undefined;
	readonly commitSha?: string | undefined;
	readonly dir?: string | undefined;
	readonly invertRegex?: boolean | undefined;
	readonly projectId?: string | undefined;
	readonly repoName?: string | undefined;
	readonly tagName?: string | undefined;
}
export interface SecretEnvVar {
	readonly key?: string | undefined;
	readonly projectId?: string | undefined;
	readonly secret?: string | undefined;
	readonly version?: string | undefined;
}
export interface SecretVersion {
	readonly path?: string | undefined;
	readonly version?: string | undefined;
}
export interface SecretVolume {
	readonly mountPath?: string | undefined;
	readonly projectId?: string | undefined;
	readonly secret?: string | undefined;
	readonly versions?: SecretVersion[] | undefined;
}
export interface ServiceConfig {
	readonly allTrafficOnLatestRevision?: boolean | undefined;
	readonly availableCpu?: string | undefined;
	readonly availableMemory?: string | undefined;
	readonly environmentVariables?: { [P in string]: string } | undefined;
	readonly ingressSettings?: string | undefined;
	readonly maxInstanceCount?: number | undefined;
	readonly maxInstanceRequestConcurrency?: number | undefined;
	readonly minInstanceCount?: number | undefined;
	readonly revision?: string | undefined;
	readonly secretEnvironmentVariables?: SecretEnvVar[] | undefined;
	readonly secretVolumes?: SecretVolume[] | undefined;
	readonly securityLevel?: string | undefined;
	readonly service?: string | undefined;
	readonly serviceAccountEmail?: string | undefined;
	readonly timeoutSeconds?: number | undefined;
	readonly uri?: string | undefined;
	readonly vpcConnector?: string | undefined;
	readonly vpcConnectorEgressSettings?: string | undefined;
}
export interface Source {
	readonly repoSource?: RepoSource | undefined;
	readonly storageSource?: StorageSource | undefined;
}
export interface SourceProvenance {
	readonly resolvedRepoSource?: RepoSource | undefined;
	readonly resolvedStorageSource?: StorageSource | undefined;
}
export interface StorageSource {
	readonly bucket?: string | undefined;
	readonly generation?: string | undefined;
	readonly object?: string | undefined;
}
export default {
	ProjectsLocationsFunctions: ProjectsLocationsFunctions,
};
