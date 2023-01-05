import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class Project extends CfnResource<ProjectComponentInputs> implements ProjectComponentOutputs {
	constructor(entity: ADKEntity, options: ProjectComponentInputs) {
		super(entity, options.LogicalId, "AWS::CodeBuild::Project", options);
	}
	public readonly Arn: string;
}
export interface ProjectComponentOutputs {
	readonly Arn: string;
}
export interface ProjectComponentInputs {
	readonly Artifacts: Artifacts;
	readonly Environment: Environment;
	readonly ServiceRole: string;
	readonly Source: Source;
	readonly BadgeEnabled?: boolean | undefined;
	readonly BuildBatchConfig?: ProjectBuildBatchConfig | undefined;
	readonly Cache?: ProjectCache | undefined;
	readonly ConcurrentBuildLimit?: number | undefined;
	readonly Description?: string | undefined;
	readonly EncryptionKey?: string | undefined;
	readonly FileSystemLocations?: ProjectFileSystemLocation[] | undefined;
	readonly LogsConfig?: LogsConfig | undefined;
	readonly Name?: string | undefined;
	readonly QueuedTimeoutInMinutes?: number | undefined;
	readonly ResourceAccessRole?: string | undefined;
	readonly SecondaryArtifacts?: Artifacts[] | undefined;
	readonly SecondarySources?: Source[] | undefined;
	readonly SecondarySourceVersions?: ProjectSourceVersion[] | undefined;
	readonly SourceVersion?: string | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly TimeoutInMinutes?: number | undefined;
	readonly Triggers?: ProjectTriggers | undefined;
	readonly Visibility?: string | undefined;
	readonly VpcConfig?: VpcConfig | undefined;
	readonly LogicalId: string;
}
export class ReportGroup extends CfnResource<ReportGroupComponentInputs> implements ReportGroupComponentOutputs {
	constructor(entity: ADKEntity, options: ReportGroupComponentInputs) {
		super(entity, options.LogicalId, "AWS::CodeBuild::ReportGroup", options);
	}
	public readonly Arn: string;
}
export interface ReportGroupComponentOutputs {
	readonly Arn: string;
}
export interface ReportGroupComponentInputs {
	readonly ExportConfig: ReportExportConfig;
	readonly Type: string;
	readonly DeleteReports?: boolean | undefined;
	readonly Name?: string | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export class SourceCredential
	extends CfnResource<SourceCredentialComponentInputs>
	implements SourceCredentialComponentOutputs
{
	constructor(entity: ADKEntity, options: SourceCredentialComponentInputs) {
		super(entity, options.LogicalId, "AWS::CodeBuild::SourceCredential", options);
	}
}
export interface SourceCredentialComponentOutputs {}
export interface SourceCredentialComponentInputs {
	readonly AuthType: string;
	readonly ServerType: string;
	readonly Token: string;
	readonly Username?: string | undefined;
	readonly LogicalId: string;
}
export interface Artifacts {
	readonly ArtifactIdentifier?: string | undefined;
	readonly EncryptionDisabled?: boolean | undefined;
	readonly Location?: string | undefined;
	readonly Name?: string | undefined;
	readonly NamespaceType?: string | undefined;
	readonly OverrideArtifactName?: boolean | undefined;
	readonly Packaging?: string | undefined;
	readonly Path?: string | undefined;
	readonly Type: string;
}
export interface BatchRestrictions {
	readonly ComputeTypesAllowed?: string[] | undefined;
	readonly MaximumBuildsAllowed?: number | undefined;
}
export interface BuildStatusConfig {
	readonly Context?: string | undefined;
	readonly TargetUrl?: string | undefined;
}
export interface CloudWatchLogsConfig {
	readonly GroupName?: string | undefined;
	readonly Status: string;
	readonly StreamName?: string | undefined;
}
export interface Environment {
	readonly Certificate?: string | undefined;
	readonly ComputeType: string;
	readonly EnvironmentVariables?: EnvironmentVariable[] | undefined;
	readonly Image: string;
	readonly ImagePullCredentialsType?: string | undefined;
	readonly PrivilegedMode?: boolean | undefined;
	readonly RegistryCredential?: RegistryCredential | undefined;
	readonly Type: string;
}
export interface EnvironmentVariable {
	readonly Name: string;
	readonly Type?: string | undefined;
	readonly Value: string;
}
export interface GitSubmodulesConfig {
	readonly FetchSubmodules: boolean;
}
export interface LogsConfig {
	readonly CloudWatchLogs?: CloudWatchLogsConfig | undefined;
	readonly S3Logs?: S3LogsConfig | undefined;
}
export interface ProjectBuildBatchConfig {
	readonly BatchReportMode?: string | undefined;
	readonly CombineArtifacts?: boolean | undefined;
	readonly Restrictions?: BatchRestrictions | undefined;
	readonly ServiceRole?: string | undefined;
	readonly TimeoutInMins?: number | undefined;
}
export interface ProjectCache {
	readonly Location?: string | undefined;
	readonly Modes?: string[] | undefined;
	readonly Type: string;
}
export interface ProjectFileSystemLocation {
	readonly Identifier: string;
	readonly Location: string;
	readonly MountOptions?: string | undefined;
	readonly MountPoint: string;
	readonly Type: string;
}
export interface ProjectSourceVersion {
	readonly SourceIdentifier: string;
	readonly SourceVersion?: string | undefined;
}
export interface ProjectTriggers {
	readonly BuildType?: string | undefined;
	readonly FilterGroups?: WebhookFilter[][] | undefined;
	readonly Webhook?: boolean | undefined;
}
export interface RegistryCredential {
	readonly Credential: string;
	readonly CredentialProvider: string;
}
export interface S3LogsConfig {
	readonly EncryptionDisabled?: boolean | undefined;
	readonly Location?: string | undefined;
	readonly Status: string;
}
export interface Source {
	readonly Auth?: SourceAuth | undefined;
	readonly BuildSpec?: string | undefined;
	readonly BuildStatusConfig?: BuildStatusConfig | undefined;
	readonly GitCloneDepth?: number | undefined;
	readonly GitSubmodulesConfig?: GitSubmodulesConfig | undefined;
	readonly InsecureSsl?: boolean | undefined;
	readonly Location?: string | undefined;
	readonly ReportBuildStatus?: boolean | undefined;
	readonly SourceIdentifier?: string | undefined;
	readonly Type: string;
}
export interface SourceAuth {
	readonly Resource?: string | undefined;
	readonly Type: string;
}
export interface VpcConfig {
	readonly SecurityGroupIds?: string[] | undefined;
	readonly Subnets?: string[] | undefined;
	readonly VpcId?: string | undefined;
}
export interface WebhookFilter {
	readonly ExcludeMatchedPattern?: boolean | undefined;
	readonly Pattern: string;
	readonly Type: string;
}
export interface ReportExportConfig {
	readonly ExportConfigType: string;
	readonly S3Destination?: S3ReportExportConfig | undefined;
}
export interface S3ReportExportConfig {
	readonly Bucket: string;
	readonly BucketOwner?: string | undefined;
	readonly EncryptionDisabled?: boolean | undefined;
	readonly EncryptionKey?: string | undefined;
	readonly Packaging?: string | undefined;
	readonly Path?: string | undefined;
}
export default {
	Project: Project,
	ReportGroup: ReportGroup,
	SourceCredential: SourceCredential,
};
