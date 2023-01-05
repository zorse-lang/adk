import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ProjectsLocationsFunctions
	extends GdmResource<ProjectsLocationsFunctionsComponentInputs>
	implements ProjectsLocationsFunctionsComponentOutputs
{
	constructor(entity: ADKEntity, options: ProjectsLocationsFunctionsComponentInputs) {
		super(entity, options.name, "cloudfunctions.v1.ProjectsLocationsFunctions", options);
	}
	public readonly buildId?: string;
	public readonly buildName?: string;
	public readonly status?: string;
	public readonly updateTime?: string;
	public readonly versionId?: string;
}
export interface ProjectsLocationsFunctionsComponentOutputs {
	readonly buildId?: string;
	readonly buildName?: string;
	readonly status?: string;
	readonly updateTime?: string;
	readonly versionId?: string;
}
export interface ProjectsLocationsFunctionsComponentInputs {
	readonly availableMemoryMb?: number;
	readonly buildDockerfile?: string;
	readonly buildEnvironmentVariables?: { [P in string]: string };
	readonly buildpackStack?: string;
	readonly buildWorkerPool?: string;
	readonly corsPolicy?: CorsPolicy;
	readonly customStackUri?: string;
	readonly description?: string;
	readonly dockerRegistry?: string;
	readonly dockerRepository?: string;
	readonly entryPoint?: string;
	readonly environmentVariables?: { [P in string]: string };
	readonly eventTrigger?: EventTrigger;
	readonly httpsTrigger?: HttpsTrigger;
	readonly ingressSettings?: string;
	readonly kmsKeyName?: string;
	readonly labels?: { [P in string]: string };
	readonly location: string;
	readonly maxInstances?: number;
	readonly minInstances?: number;
	readonly name: string;
	readonly network?: string;
	readonly runDockerfile?: string;
	readonly runtime?: string;
	readonly secretEnvironmentVariables?: SecretEnvVar[];
	readonly secretVolumes?: SecretVolume[];
	readonly serviceAccountEmail?: string;
	readonly sourceArchiveUrl?: string;
	readonly sourceRepository?: SourceRepository;
	readonly sourceToken?: string;
	readonly sourceUploadUrl?: string;
	readonly timeout?: string;
	readonly vpcConnector?: string;
	readonly vpcConnectorEgressSettings?: string;
}
export interface CloudFunction {
	readonly availableMemoryMb?: number;
	readonly buildDockerfile?: string;
	readonly buildEnvironmentVariables?: { [P in string]: string };
	readonly buildId?: string;
	readonly buildName?: string;
	readonly buildpackStack?: string;
	readonly buildWorkerPool?: string;
	readonly corsPolicy?: CorsPolicy;
	readonly customStackUri?: string;
	readonly description?: string;
	readonly dockerRegistry?: string;
	readonly dockerRepository?: string;
	readonly entryPoint?: string;
	readonly environmentVariables?: { [P in string]: string };
	readonly eventTrigger?: EventTrigger;
	readonly httpsTrigger?: HttpsTrigger;
	readonly ingressSettings?: string;
	readonly kmsKeyName?: string;
	readonly labels?: { [P in string]: string };
	readonly maxInstances?: number;
	readonly minInstances?: number;
	readonly name?: string;
	readonly network?: string;
	readonly runDockerfile?: string;
	readonly runtime?: string;
	readonly secretEnvironmentVariables?: SecretEnvVar[];
	readonly secretVolumes?: SecretVolume[];
	readonly serviceAccountEmail?: string;
	readonly sourceArchiveUrl?: string;
	readonly sourceRepository?: SourceRepository;
	readonly sourceToken?: string;
	readonly sourceUploadUrl?: string;
	readonly status?: string;
	readonly timeout?: string;
	readonly updateTime?: string;
	readonly versionId?: string;
	readonly vpcConnector?: string;
	readonly vpcConnectorEgressSettings?: string;
}
export interface CorsPolicy {
	readonly allowCredentials?: boolean;
	readonly allowHeaders?: string[];
	readonly allowMethods?: string[];
	readonly allowOrigin?: string[];
	readonly exposeHeaders?: string[];
	readonly maxAge?: string;
}
export interface EventTrigger {
	readonly eventType: string;
	readonly failurePolicy?: FailurePolicy;
	readonly resource: string;
	readonly service?: string;
}
export interface FailurePolicy {
	readonly retry?: any;
}
export interface HttpsTrigger {
	readonly securityLevel?: string;
	readonly url?: string;
}
export interface Retry {}
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
export interface SourceRepository {
	readonly deployedUrl?: string;
	readonly url?: string;
}
export default {
	ProjectsLocationsFunctions: ProjectsLocationsFunctions,
};
