import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ProjectsLocationsFunctions
	extends GdmResource<ProjectsLocationsFunctionsComponentInputs>
	implements ProjectsLocationsFunctionsComponentOutputs
{
	constructor(entity: ADKEntity, options: ProjectsLocationsFunctionsComponentInputs) {
		super(entity, options.name, "cloudfunctions.v1.ProjectsLocationsFunctions", options);
	}
	public readonly buildId?: string | undefined;
	public readonly buildName?: string | undefined;
	public readonly status?: string | undefined;
	public readonly updateTime?: string | undefined;
	public readonly versionId?: string | undefined;
}
export interface ProjectsLocationsFunctionsComponentOutputs {
	readonly buildId?: string | undefined;
	readonly buildName?: string | undefined;
	readonly status?: string | undefined;
	readonly updateTime?: string | undefined;
	readonly versionId?: string | undefined;
}
export interface ProjectsLocationsFunctionsComponentInputs {
	readonly availableMemoryMb?: number | undefined;
	readonly buildDockerfile?: string | undefined;
	readonly buildEnvironmentVariables?: { [P in string]: string } | undefined;
	readonly buildpackStack?: string | undefined;
	readonly buildWorkerPool?: string | undefined;
	readonly corsPolicy?: CorsPolicy | undefined;
	readonly customStackUri?: string | undefined;
	readonly description?: string | undefined;
	readonly dockerRegistry?: string | undefined;
	readonly dockerRepository?: string | undefined;
	readonly entryPoint?: string | undefined;
	readonly environmentVariables?: { [P in string]: string } | undefined;
	readonly eventTrigger?: EventTrigger | undefined;
	readonly httpsTrigger?: HttpsTrigger | undefined;
	readonly ingressSettings?: string | undefined;
	readonly kmsKeyName?: string | undefined;
	readonly labels?: { [P in string]: string } | undefined;
	readonly location: string;
	readonly maxInstances?: number | undefined;
	readonly minInstances?: number | undefined;
	readonly name: string;
	readonly network?: string | undefined;
	readonly runDockerfile?: string | undefined;
	readonly runtime?: string | undefined;
	readonly secretEnvironmentVariables?: SecretEnvVar[] | undefined;
	readonly secretVolumes?: SecretVolume[] | undefined;
	readonly serviceAccountEmail?: string | undefined;
	readonly sourceArchiveUrl?: string | undefined;
	readonly sourceRepository?: SourceRepository | undefined;
	readonly sourceToken?: string | undefined;
	readonly sourceUploadUrl?: string | undefined;
	readonly timeout?: string | undefined;
	readonly vpcConnector?: string | undefined;
	readonly vpcConnectorEgressSettings?: string | undefined;
	readonly type: string;
}
export interface CloudFunction {
	readonly availableMemoryMb?: number | undefined;
	readonly buildDockerfile?: string | undefined;
	readonly buildEnvironmentVariables?: { [P in string]: string } | undefined;
	readonly buildId?: string | undefined;
	readonly buildName?: string | undefined;
	readonly buildpackStack?: string | undefined;
	readonly buildWorkerPool?: string | undefined;
	readonly corsPolicy?: CorsPolicy | undefined;
	readonly customStackUri?: string | undefined;
	readonly description?: string | undefined;
	readonly dockerRegistry?: string | undefined;
	readonly dockerRepository?: string | undefined;
	readonly entryPoint?: string | undefined;
	readonly environmentVariables?: { [P in string]: string } | undefined;
	readonly eventTrigger?: EventTrigger | undefined;
	readonly httpsTrigger?: HttpsTrigger | undefined;
	readonly ingressSettings?: string | undefined;
	readonly kmsKeyName?: string | undefined;
	readonly labels?: { [P in string]: string } | undefined;
	readonly maxInstances?: number | undefined;
	readonly minInstances?: number | undefined;
	readonly name?: string | undefined;
	readonly network?: string | undefined;
	readonly runDockerfile?: string | undefined;
	readonly runtime?: string | undefined;
	readonly secretEnvironmentVariables?: SecretEnvVar[] | undefined;
	readonly secretVolumes?: SecretVolume[] | undefined;
	readonly serviceAccountEmail?: string | undefined;
	readonly sourceArchiveUrl?: string | undefined;
	readonly sourceRepository?: SourceRepository | undefined;
	readonly sourceToken?: string | undefined;
	readonly sourceUploadUrl?: string | undefined;
	readonly status?: string | undefined;
	readonly timeout?: string | undefined;
	readonly updateTime?: string | undefined;
	readonly versionId?: string | undefined;
	readonly vpcConnector?: string | undefined;
	readonly vpcConnectorEgressSettings?: string | undefined;
}
export interface CorsPolicy {
	readonly allowCredentials?: boolean | undefined;
	readonly allowHeaders?: string[] | undefined;
	readonly allowMethods?: string[] | undefined;
	readonly allowOrigin?: string[] | undefined;
	readonly exposeHeaders?: string[] | undefined;
	readonly maxAge?: string | undefined;
}
export interface EventTrigger {
	readonly eventType: string;
	readonly failurePolicy?: FailurePolicy | undefined;
	readonly resource: string;
	readonly service?: string | undefined;
}
export interface FailurePolicy {
	readonly retry?: any | undefined;
}
export interface HttpsTrigger {
	readonly securityLevel?: string | undefined;
	readonly url?: string | undefined;
}
export interface Retry {}
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
export interface SourceRepository {
	readonly deployedUrl?: string | undefined;
	readonly url?: string | undefined;
}
export default {
	ProjectsLocationsFunctions: ProjectsLocationsFunctions,
};
