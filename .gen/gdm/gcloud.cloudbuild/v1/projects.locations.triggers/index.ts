import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ProjectsLocationsTriggers
	extends GdmResource<ProjectsLocationsTriggersComponentInputs>
	implements ProjectsLocationsTriggersComponentOutputs
{
	constructor(entity: ADKEntity, options: ProjectsLocationsTriggersComponentInputs) {
		super(entity, options.name, "cloudbuild.v1.ProjectsLocationsTriggers", options);
	}
	public readonly createTime?: string;
	public readonly id?: string;
}
export interface ProjectsLocationsTriggersComponentOutputs {
	readonly createTime?: string;
	readonly id?: string;
}
export interface ProjectsLocationsTriggersComponentInputs {
	readonly approvalConfig?: ApprovalConfig;
	readonly autodetect?: boolean;
	readonly bitbucketServerTriggerConfig?: BitbucketServerTriggerConfig;
	readonly build?: Build;
	readonly description?: string;
	readonly disabled?: boolean;
	readonly eventType?: string;
	readonly filename?: string;
	readonly filter?: string;
	readonly gitFileSource?: GitFileSource;
	readonly github?: GitHubEventsConfig;
	readonly gitlabEnterpriseEventsConfig?: GitLabEventsConfig;
	readonly ignoredFiles?: string[];
	readonly includeBuildLogs?: string;
	readonly includedFiles?: string[];
	readonly name: string;
	readonly parent: string;
	readonly pubsubConfig?: PubsubConfig;
	readonly repositoryEventConfig?: RepositoryEventConfig;
	readonly resourceName?: string;
	readonly serviceAccount?: string;
	readonly sourceToBuild?: GitRepoSource;
	readonly substitutions?: { [P in string]: string };
	readonly tags?: string[];
	readonly triggerTemplate?: RepoSource;
	readonly webhookConfig?: WebhookConfig;
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
export interface BitbucketServerConfig {
	readonly apiKey: string;
	readonly connectedRepositories?: BitbucketServerRepositoryId[];
	readonly createTime?: string;
	readonly hostUri: string;
	readonly name?: string;
	readonly peeredNetwork?: string;
	readonly secrets: BitbucketServerSecrets;
	readonly sslCa?: string;
	readonly username?: string;
	readonly webhookKey?: string;
}
export interface BitbucketServerRepositoryId {
	readonly projectKey: string;
	readonly repoSlug: string;
	readonly webhookId?: number;
}
export interface BitbucketServerSecrets {
	readonly adminAccessTokenVersionName: string;
	readonly readAccessTokenVersionName: string;
	readonly webhookSecretVersionName: string;
}
export interface BitbucketServerTriggerConfig {
	readonly bitbucketServerConfig?: BitbucketServerConfig;
	readonly bitbucketServerConfigResource: string;
	readonly projectKey: string;
	readonly pullRequest?: PullRequestFilter;
	readonly push?: PushFilter;
	readonly repoSlug: string;
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
export interface BuildTrigger {
	readonly approvalConfig?: ApprovalConfig;
	readonly autodetect?: boolean;
	readonly bitbucketServerTriggerConfig?: BitbucketServerTriggerConfig;
	readonly build?: Build;
	readonly createTime?: string;
	readonly description?: string;
	readonly disabled?: boolean;
	readonly eventType?: string;
	readonly filename?: string;
	readonly filter?: string;
	readonly gitFileSource?: GitFileSource;
	readonly github?: GitHubEventsConfig;
	readonly gitlabEnterpriseEventsConfig?: GitLabEventsConfig;
	readonly id?: string;
	readonly ignoredFiles?: string[];
	readonly includeBuildLogs?: string;
	readonly includedFiles?: string[];
	readonly name?: string;
	readonly pubsubConfig?: PubsubConfig;
	readonly repositoryEventConfig?: RepositoryEventConfig;
	readonly resourceName?: string;
	readonly serviceAccount?: string;
	readonly sourceToBuild?: GitRepoSource;
	readonly substitutions?: { [P in string]: string };
	readonly tags?: string[];
	readonly triggerTemplate?: RepoSource;
	readonly webhookConfig?: WebhookConfig;
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
export interface GitFileSource {
	readonly bitbucketServerConfig?: string;
	readonly githubEnterpriseConfig?: string;
	readonly path?: string;
	readonly repoType?: string;
	readonly revision?: string;
	readonly uri?: string;
}
export interface GitHubEventsConfig {
	readonly enterpriseConfigResourceName?: string;
	readonly installationId?: string;
	readonly name?: string;
	readonly owner?: string;
	readonly pullRequest?: PullRequestFilter;
	readonly push?: PushFilter;
}
export interface GitLabConfig {
	readonly connectedRepositories?: GitLabRepositoryId[];
	readonly createTime?: string;
	readonly enterpriseConfig?: GitLabEnterpriseConfig;
	readonly name?: string;
	readonly secrets: GitLabSecrets;
	readonly username?: string;
	readonly webhookKey?: string;
}
export interface GitLabEnterpriseConfig {
	readonly hostUri?: string;
	readonly serviceDirectoryConfig?: ServiceDirectoryConfig;
	readonly sslCa?: string;
}
export interface GitLabEventsConfig {
	readonly gitlabConfig?: GitLabConfig;
	readonly gitlabConfigResource?: string;
	readonly projectNamespace?: string;
	readonly pullRequest?: PullRequestFilter;
	readonly push?: PushFilter;
}
export interface GitLabRepositoryId {
	readonly id: string;
	readonly webhookId?: number;
}
export interface GitLabSecrets {
	readonly apiAccessTokenVersion: string;
	readonly apiKeyVersion: string;
	readonly readAccessTokenVersion: string;
	readonly webhookSecretVersion: string;
}
export interface GitRepoSource {
	readonly bitbucketServerConfig?: string;
	readonly githubEnterpriseConfig?: string;
	readonly ref?: string;
	readonly repoType?: string;
	readonly uri?: string;
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
export interface PubsubConfig {
	readonly serviceAccountEmail?: string;
	readonly state?: string;
	readonly subscription?: string;
	readonly topic?: string;
}
export interface PullRequestFilter {
	readonly branch?: string;
	readonly commentControl?: string;
	readonly invertRegex?: boolean;
}
export interface PushFilter {
	readonly branch?: string;
	readonly invertRegex?: boolean;
	readonly tag?: string;
}
export interface PythonPackage {
	readonly paths?: string[];
	readonly repository?: string;
}
export interface RepositoryEventConfig {
	readonly pullRequest?: PullRequestFilter;
	readonly push?: PushFilter;
	readonly repository?: string;
	readonly repositoryType?: string;
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
export interface ServiceDirectoryConfig {
	readonly service?: string;
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
export interface WebhookConfig {
	readonly secret: string;
	readonly state?: string;
}
export default {
	ProjectsLocationsTriggers: ProjectsLocationsTriggers,
};
