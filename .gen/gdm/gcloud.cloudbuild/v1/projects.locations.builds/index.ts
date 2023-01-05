import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ProjectsLocationsBuilds
	extends GdmResource<ProjectsLocationsBuildsComponentInputs>
	implements ProjectsLocationsBuildsComponentOutputs
{
	constructor(entity: ADKEntity, options: ProjectsLocationsBuildsComponentInputs) {
		super(entity, options.name, "cloudbuild.v1.ProjectsLocationsBuilds", options);
	}
	public readonly approval?: BuildApproval;
	public readonly buildTriggerId?: string;
	public readonly createTime?: string;
	public readonly failureInfo?: FailureInfo;
	public readonly finishTime?: string;
	public readonly id?: string;
	public readonly logUrl?: string;
	public readonly projectId?: string;
	public readonly results?: Results;
	public readonly sourceProvenance?: SourceProvenance;
	public readonly startTime?: string;
	public readonly status?: string;
	public readonly statusDetail?: string;
	public readonly timing?: { [P in string]: TimeSpan
	};
	public readonly warnings?: Warning[];
}
export interface ProjectsLocationsBuildsComponentOutputs {
	readonly approval?: BuildApproval;
	readonly buildTriggerId?: string;
	readonly createTime?: string;
	readonly failureInfo?: FailureInfo;
	readonly finishTime?: string;
	readonly id?: string;
	readonly logUrl?: string;
	readonly projectId?: string;
	readonly results?: Results;
	readonly sourceProvenance?: SourceProvenance;
	readonly startTime?: string;
	readonly status?: string;
	readonly statusDetail?: string;
	readonly timing?: { [P in string]: TimeSpan };
	readonly warnings?: Warning[];
}
export interface ProjectsLocationsBuildsComponentInputs {
	readonly artifacts?: Artifacts;
	readonly availableSecrets?: Secrets;
	readonly images?: string[];
	readonly logsBucket?: string;
	readonly name: string;
	readonly options?: BuildOptions;
	readonly parent: string;
	readonly queueTtl?: string;
	readonly secrets?: Secret[];
	readonly serviceAccount?: string;
	readonly source?: Source;
	readonly steps: BuildStep[];
	readonly substitutions?: { [P in string]: string };
	readonly tags?: string[];
	readonly timeout?: string;
}
export interface ApprovalConfig {
	readonly approvalRequired?: boolean;
}
export interface ApprovalResult {
	readonly approvalTime?: string;
	readonly approverAccount?: string;
	readonly comment?: string;
	readonly decision: string;
	readonly url?: string;
}
export interface ArtifactObjects {
	readonly location?: string;
	readonly paths?: string[];
	readonly timing?: TimeSpan;
}
export interface Artifacts {
	readonly images?: string[];
	readonly mavenArtifacts?: MavenArtifact[];
	readonly objects?: ArtifactObjects;
	readonly pythonPackages?: PythonPackage[];
}
export interface Build {
	readonly approval?: BuildApproval;
	readonly artifacts?: Artifacts;
	readonly availableSecrets?: Secrets;
	readonly buildTriggerId?: string;
	readonly createTime?: string;
	readonly failureInfo?: FailureInfo;
	readonly finishTime?: string;
	readonly id?: string;
	readonly images?: string[];
	readonly logsBucket?: string;
	readonly logUrl?: string;
	readonly name?: string;
	readonly options?: BuildOptions;
	readonly projectId?: string;
	readonly queueTtl?: string;
	readonly results?: Results;
	readonly secrets?: Secret[];
	readonly serviceAccount?: string;
	readonly source?: Source;
	readonly sourceProvenance?: SourceProvenance;
	readonly startTime?: string;
	readonly status?: string;
	readonly statusDetail?: string;
	readonly steps: BuildStep[];
	readonly substitutions?: { [P in string]: string };
	readonly tags?: string[];
	readonly timeout?: string;
	readonly timing?: { [P in string]: TimeSpan };
	readonly warnings?: Warning[];
}
export interface BuildApproval {
	readonly config?: ApprovalConfig;
	readonly result?: ApprovalResult;
	readonly state?: string;
}
export interface BuildOptions {
	readonly diskSizeGb?: string;
	readonly dynamicSubstitutions?: boolean;
	readonly env?: string[];
	readonly logging?: string;
	readonly logStreamingOption?: string;
	readonly machineType?: string;
	readonly pool?: PoolOption;
	readonly requestedVerifyOption?: string;
	readonly secretEnv?: string[];
	readonly sourceProvenanceHash?: string[];
	readonly substitutionOption?: string;
	readonly volumes?: Volume[];
	readonly workerPool?: string;
}
export interface BuildStep {
	readonly allowExitCodes?: number[];
	readonly allowFailure?: boolean;
	readonly args?: string[];
	readonly dir?: string;
	readonly entrypoint?: string;
	readonly env?: string[];
	readonly exitCode?: number;
	readonly id?: string;
	readonly name: string;
	readonly pullTiming?: TimeSpan;
	readonly script?: string;
	readonly secretEnv?: string[];
	readonly status?: string;
	readonly timeout?: string;
	readonly timing?: TimeSpan;
	readonly volumes?: Volume[];
	readonly waitFor?: string[];
}
export interface BuiltImage {
	readonly digest?: string;
	readonly name?: string;
	readonly pushTiming?: TimeSpan;
}
export interface FailureInfo {
	readonly detail?: string;
	readonly type?: string;
}
export interface FileHashes {
	readonly fileHash?: Hash[];
}
export interface Hash {
	readonly type?: string;
	readonly value?: string;
}
export interface InlineSecret {
	readonly envMap?: { [P in string]: string };
	readonly kmsKeyName?: string;
}
export interface MavenArtifact {
	readonly artifactId?: string;
	readonly groupId?: string;
	readonly path?: string;
	readonly repository?: string;
	readonly version?: string;
}
export interface PoolOption {
	readonly name?: string;
}
export interface PythonPackage {
	readonly paths?: string[];
	readonly repository?: string;
}
export interface RepoSource {
	readonly branchName?: string;
	readonly commitSha?: string;
	readonly dir?: string;
	readonly invertRegex?: boolean;
	readonly projectId?: string;
	readonly repoName?: string;
	readonly substitutions?: { [P in string]: string };
	readonly tagName?: string;
}
export interface Results {
	readonly artifactManifest?: string;
	readonly artifactTiming?: TimeSpan;
	readonly buildStepImages?: string[];
	readonly buildStepOutputs?: string[];
	readonly images?: BuiltImage[];
	readonly mavenArtifacts?: UploadedMavenArtifact[];
	readonly numArtifacts?: string;
	readonly pythonPackages?: UploadedPythonPackage[];
}
export interface Secret {
	readonly kmsKeyName?: string;
	readonly secretEnv?: { [P in string]: string };
}
export interface SecretManagerSecret {
	readonly env?: string;
	readonly versionName?: string;
}
export interface Secrets {
	readonly inline?: InlineSecret[];
	readonly secretManager?: SecretManagerSecret[];
}
export interface Source {
	readonly repoSource?: RepoSource;
	readonly storageSource?: StorageSource;
	readonly storageSourceManifest?: StorageSourceManifest;
}
export interface SourceProvenance {
	readonly fileHashes?: { [P in string]: FileHashes };
	readonly resolvedRepoSource?: RepoSource;
	readonly resolvedStorageSource?: StorageSource;
	readonly resolvedStorageSourceManifest?: StorageSourceManifest;
}
export interface StorageSource {
	readonly bucket?: string;
	readonly generation?: string;
	readonly object?: string;
}
export interface StorageSourceManifest {
	readonly bucket?: string;
	readonly generation?: string;
	readonly object?: string;
}
export interface TimeSpan {
	readonly endTime?: string;
	readonly startTime?: string;
}
export interface UploadedMavenArtifact {
	readonly fileHashes?: FileHashes;
	readonly pushTiming?: TimeSpan;
	readonly uri?: string;
}
export interface UploadedPythonPackage {
	readonly fileHashes?: FileHashes;
	readonly pushTiming?: TimeSpan;
	readonly uri?: string;
}
export interface Volume {
	readonly name?: string;
	readonly path?: string;
}
export interface Warning {
	readonly priority?: string;
	readonly text?: string;
}
export default {
	ProjectsLocationsBuilds: ProjectsLocationsBuilds,
};
