import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ProjectsBuilds extends GdmResource<ProjectsBuildsComponentInputs> implements ProjectsBuildsComponentOutputs {
	constructor(entity: ADKEntity, options: ProjectsBuildsComponentInputs) {
		super(entity, options.name, "cloudbuild.v1.ProjectsBuilds", options);
	}
	public readonly approval?: BuildApproval | undefined;
	public readonly buildTriggerId?: string | undefined;
	public readonly createTime?: string | undefined;
	public readonly failureInfo?: FailureInfo | undefined;
	public readonly finishTime?: string | undefined;
	public readonly id?: string | undefined;
	public readonly logUrl?: string | undefined;
	public readonly projectId?: string | undefined;
	public readonly results?: Results | undefined;
	public readonly sourceProvenance?: SourceProvenance | undefined;
	public readonly startTime?: string | undefined;
	public readonly status?: string | undefined;
	public readonly statusDetail?: string | undefined;
	public readonly timing?: { [P in string]: TimeSpan } | undefined;
	public readonly warnings?: Warning[] | undefined;
}
export interface ProjectsBuildsComponentOutputs {
	readonly approval?: BuildApproval | undefined;
	readonly buildTriggerId?: string | undefined;
	readonly createTime?: string | undefined;
	readonly failureInfo?: FailureInfo | undefined;
	readonly finishTime?: string | undefined;
	readonly id?: string | undefined;
	readonly logUrl?: string | undefined;
	readonly projectId?: string | undefined;
	readonly results?: Results | undefined;
	readonly sourceProvenance?: SourceProvenance | undefined;
	readonly startTime?: string | undefined;
	readonly status?: string | undefined;
	readonly statusDetail?: string | undefined;
	readonly timing?: { [P in string]: TimeSpan } | undefined;
	readonly warnings?: Warning[] | undefined;
}
export interface ProjectsBuildsComponentInputs {
	readonly artifacts?: Artifacts | undefined;
	readonly availableSecrets?: Secrets | undefined;
	readonly images?: string[] | undefined;
	readonly logsBucket?: string | undefined;
	readonly name: string;
	readonly options?: BuildOptions | undefined;
	readonly parent?: string | undefined;
	readonly queueTtl?: string | undefined;
	readonly secrets?: Secret[] | undefined;
	readonly serviceAccount?: string | undefined;
	readonly source?: Source | undefined;
	readonly steps: BuildStep[];
	readonly substitutions?: { [P in string]: string } | undefined;
	readonly tags?: string[] | undefined;
	readonly timeout?: string | undefined;
	readonly type: string;
}
export interface ApprovalConfig {
	readonly approvalRequired?: boolean | undefined;
}
export interface ApprovalResult {
	readonly approvalTime?: string | undefined;
	readonly approverAccount?: string | undefined;
	readonly comment?: string | undefined;
	readonly decision: string;
	readonly url?: string | undefined;
}
export interface ArtifactObjects {
	readonly location?: string | undefined;
	readonly paths?: string[] | undefined;
	readonly timing?: TimeSpan | undefined;
}
export interface Artifacts {
	readonly images?: string[] | undefined;
	readonly mavenArtifacts?: MavenArtifact[] | undefined;
	readonly objects?: ArtifactObjects | undefined;
	readonly pythonPackages?: PythonPackage[] | undefined;
}
export interface Build {
	readonly approval?: BuildApproval | undefined;
	readonly artifacts?: Artifacts | undefined;
	readonly availableSecrets?: Secrets | undefined;
	readonly buildTriggerId?: string | undefined;
	readonly createTime?: string | undefined;
	readonly failureInfo?: FailureInfo | undefined;
	readonly finishTime?: string | undefined;
	readonly id?: string | undefined;
	readonly images?: string[] | undefined;
	readonly logsBucket?: string | undefined;
	readonly logUrl?: string | undefined;
	readonly name?: string | undefined;
	readonly options?: BuildOptions | undefined;
	readonly projectId?: string | undefined;
	readonly queueTtl?: string | undefined;
	readonly results?: Results | undefined;
	readonly secrets?: Secret[] | undefined;
	readonly serviceAccount?: string | undefined;
	readonly source?: Source | undefined;
	readonly sourceProvenance?: SourceProvenance | undefined;
	readonly startTime?: string | undefined;
	readonly status?: string | undefined;
	readonly statusDetail?: string | undefined;
	readonly steps: BuildStep[];
	readonly substitutions?: { [P in string]: string } | undefined;
	readonly tags?: string[] | undefined;
	readonly timeout?: string | undefined;
	readonly timing?: { [P in string]: TimeSpan } | undefined;
	readonly warnings?: Warning[] | undefined;
}
export interface BuildApproval {
	readonly config?: ApprovalConfig | undefined;
	readonly result?: ApprovalResult | undefined;
	readonly state?: string | undefined;
}
export interface BuildOptions {
	readonly diskSizeGb?: string | undefined;
	readonly dynamicSubstitutions?: boolean | undefined;
	readonly env?: string[] | undefined;
	readonly logging?: string | undefined;
	readonly logStreamingOption?: string | undefined;
	readonly machineType?: string | undefined;
	readonly pool?: PoolOption | undefined;
	readonly requestedVerifyOption?: string | undefined;
	readonly secretEnv?: string[] | undefined;
	readonly sourceProvenanceHash?: string[] | undefined;
	readonly substitutionOption?: string | undefined;
	readonly volumes?: Volume[] | undefined;
	readonly workerPool?: string | undefined;
}
export interface BuildStep {
	readonly allowExitCodes?: number[] | undefined;
	readonly allowFailure?: boolean | undefined;
	readonly args?: string[] | undefined;
	readonly dir?: string | undefined;
	readonly entrypoint?: string | undefined;
	readonly env?: string[] | undefined;
	readonly exitCode?: number | undefined;
	readonly id?: string | undefined;
	readonly name: string;
	readonly pullTiming?: TimeSpan | undefined;
	readonly script?: string | undefined;
	readonly secretEnv?: string[] | undefined;
	readonly status?: string | undefined;
	readonly timeout?: string | undefined;
	readonly timing?: TimeSpan | undefined;
	readonly volumes?: Volume[] | undefined;
	readonly waitFor?: string[] | undefined;
}
export interface BuiltImage {
	readonly digest?: string | undefined;
	readonly name?: string | undefined;
	readonly pushTiming?: TimeSpan | undefined;
}
export interface FailureInfo {
	readonly detail?: string | undefined;
	readonly type?: string | undefined;
}
export interface FileHashes {
	readonly fileHash?: Hash[] | undefined;
}
export interface Hash {
	readonly type?: string | undefined;
	readonly value?: string | undefined;
}
export interface InlineSecret {
	readonly envMap?: { [P in string]: string } | undefined;
	readonly kmsKeyName?: string | undefined;
}
export interface MavenArtifact {
	readonly artifactId?: string | undefined;
	readonly groupId?: string | undefined;
	readonly path?: string | undefined;
	readonly repository?: string | undefined;
	readonly version?: string | undefined;
}
export interface PoolOption {
	readonly name?: string | undefined;
}
export interface PythonPackage {
	readonly paths?: string[] | undefined;
	readonly repository?: string | undefined;
}
export interface RepoSource {
	readonly branchName?: string | undefined;
	readonly commitSha?: string | undefined;
	readonly dir?: string | undefined;
	readonly invertRegex?: boolean | undefined;
	readonly projectId?: string | undefined;
	readonly repoName?: string | undefined;
	readonly substitutions?: { [P in string]: string } | undefined;
	readonly tagName?: string | undefined;
}
export interface Results {
	readonly artifactManifest?: string | undefined;
	readonly artifactTiming?: TimeSpan | undefined;
	readonly buildStepImages?: string[] | undefined;
	readonly buildStepOutputs?: string[] | undefined;
	readonly images?: BuiltImage[] | undefined;
	readonly mavenArtifacts?: UploadedMavenArtifact[] | undefined;
	readonly numArtifacts?: string | undefined;
	readonly pythonPackages?: UploadedPythonPackage[] | undefined;
}
export interface Secret {
	readonly kmsKeyName?: string | undefined;
	readonly secretEnv?: { [P in string]: string } | undefined;
}
export interface SecretManagerSecret {
	readonly env?: string | undefined;
	readonly versionName?: string | undefined;
}
export interface Secrets {
	readonly inline?: InlineSecret[] | undefined;
	readonly secretManager?: SecretManagerSecret[] | undefined;
}
export interface Source {
	readonly repoSource?: RepoSource | undefined;
	readonly storageSource?: StorageSource | undefined;
	readonly storageSourceManifest?: StorageSourceManifest | undefined;
}
export interface SourceProvenance {
	readonly fileHashes?: { [P in string]: FileHashes } | undefined;
	readonly resolvedRepoSource?: RepoSource | undefined;
	readonly resolvedStorageSource?: StorageSource | undefined;
	readonly resolvedStorageSourceManifest?: StorageSourceManifest | undefined;
}
export interface StorageSource {
	readonly bucket?: string | undefined;
	readonly generation?: string | undefined;
	readonly object?: string | undefined;
}
export interface StorageSourceManifest {
	readonly bucket?: string | undefined;
	readonly generation?: string | undefined;
	readonly object?: string | undefined;
}
export interface TimeSpan {
	readonly endTime?: string | undefined;
	readonly startTime?: string | undefined;
}
export interface UploadedMavenArtifact {
	readonly fileHashes?: FileHashes | undefined;
	readonly pushTiming?: TimeSpan | undefined;
	readonly uri?: string | undefined;
}
export interface UploadedPythonPackage {
	readonly fileHashes?: FileHashes | undefined;
	readonly pushTiming?: TimeSpan | undefined;
	readonly uri?: string | undefined;
}
export interface Volume {
	readonly name?: string | undefined;
	readonly path?: string | undefined;
}
export interface Warning {
	readonly priority?: string | undefined;
	readonly text?: string | undefined;
}
export default {
	ProjectsBuilds: ProjectsBuilds,
};
