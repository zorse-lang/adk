import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ProjectsLocationsFunctions
	extends GdmResource<ProjectsLocationsFunctionsComponentInputs>
	implements ProjectsLocationsFunctionsComponentOutputs
{
	constructor(entity: ADKEntity, options: ProjectsLocationsFunctionsComponentInputs) {
		super(entity, options.name, "cloudfunctions.v2beta.ProjectsLocationsFunctions", options);
	}
	public readonly state?: string;
	public readonly stateMessages?: GoogleCloudFunctionsV2betaStateMessage[];
	public readonly updateTime?: string;
}
export interface ProjectsLocationsFunctionsComponentOutputs {
	readonly state?: string;
	readonly stateMessages?: GoogleCloudFunctionsV2betaStateMessage[];
	readonly updateTime?: string;
}
export interface ProjectsLocationsFunctionsComponentInputs {
	readonly buildConfig?: BuildConfig;
	readonly description?: string;
	readonly environment?: string;
	readonly eventTrigger?: EventTrigger;
	readonly functionId?: string;
	readonly labels?: { [P in string]: string };
	readonly name: string;
	readonly parent: string;
	readonly serviceConfig?: ServiceConfig;
}
export interface BuildConfig {
	readonly build?: string;
	readonly buildpackStack?: string;
	readonly dockerRegistry?: string;
	readonly dockerRepository?: string;
	readonly entryPoint?: string;
	readonly environmentVariables?: { [P in string]: string };
	readonly runtime?: string;
	readonly source?: Source;
	readonly sourceProvenance?: SourceProvenance;
	readonly workerPool?: string;
}
export interface EventFilter {
	readonly attribute: string;
	readonly operator?: string;
	readonly value: string;
}
export interface EventTrigger {
	readonly channel?: string;
	readonly eventFilters?: EventFilter[];
	readonly eventType: string;
	readonly pubsubTopic?: string;
	readonly retryPolicy?: string;
	readonly serviceAccountEmail?: string;
	readonly trigger?: string;
	readonly triggerRegion?: string;
}
export interface FunctionInstance {
	readonly buildConfig?: BuildConfig;
	readonly description?: string;
	readonly environment?: string;
	readonly eventTrigger?: EventTrigger;
	readonly labels?: { [P in string]: string };
	readonly name?: string;
	readonly serviceConfig?: ServiceConfig;
	readonly state?: string;
	readonly stateMessages?: GoogleCloudFunctionsV2betaStateMessage[];
	readonly updateTime?: string;
}
export interface GoogleCloudFunctionsV2betaStateMessage {
	readonly message?: string;
	readonly severity?: string;
	readonly type?: string;
}
export interface RepoSource {
	readonly branchName?: string;
	readonly commitSha?: string;
	readonly dir?: string;
	readonly invertRegex?: boolean;
	readonly projectId?: string;
	readonly repoName?: string;
	readonly tagName?: string;
}
export interface SecretEnvVar {
	readonly key?: string;
	readonly projectId?: string;
	readonly secret?: string;
	readonly version?: string;
}
export interface SecretVersion {
	readonly path?: string;
	readonly version?: string;
}
export interface SecretVolume {
	readonly mountPath?: string;
	readonly projectId?: string;
	readonly secret?: string;
	readonly versions?: SecretVersion[];
}
export interface ServiceConfig {
	readonly allTrafficOnLatestRevision?: boolean;
	readonly availableCpu?: string;
	readonly availableMemory?: string;
	readonly environmentVariables?: { [P in string]: string };
	readonly ingressSettings?: string;
	readonly maxInstanceCount?: number;
	readonly maxInstanceRequestConcurrency?: number;
	readonly minInstanceCount?: number;
	readonly revision?: string;
	readonly secretEnvironmentVariables?: SecretEnvVar[];
	readonly secretVolumes?: SecretVolume[];
	readonly securityLevel?: string;
	readonly service?: string;
	readonly serviceAccountEmail?: string;
	readonly timeoutSeconds?: number;
	readonly uri?: string;
	readonly vpcConnector?: string;
	readonly vpcConnectorEgressSettings?: string;
}
export interface Source {
	readonly repoSource?: RepoSource;
	readonly storageSource?: StorageSource;
}
export interface SourceProvenance {
	readonly resolvedRepoSource?: RepoSource;
	readonly resolvedStorageSource?: StorageSource;
}
export interface StorageSource {
	readonly bucket?: string;
	readonly generation?: string;
	readonly object?: string;
}
export default {
	ProjectsLocationsFunctions: ProjectsLocationsFunctions,
};
