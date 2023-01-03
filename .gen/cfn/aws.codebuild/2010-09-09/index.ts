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
	readonly BadgeEnabled?: (boolean | undefined) | undefined;
	readonly BuildBatchConfig?: (ProjectBuildBatchConfig | undefined) | undefined;
	readonly Cache?: (ProjectCache | undefined) | undefined;
	readonly ConcurrentBuildLimit?: (number | undefined) | undefined;
	readonly Description?: (string | undefined) | undefined;
	readonly EncryptionKey?: (string | undefined) | undefined;
	readonly FileSystemLocations?: (ProjectFileSystemLocation[] | undefined) | undefined;
	readonly LogsConfig?: (LogsConfig | undefined) | undefined;
	readonly Name?: (string | undefined) | undefined;
	readonly QueuedTimeoutInMinutes?: (number | undefined) | undefined;
	readonly ResourceAccessRole?: (string | undefined) | undefined;
	readonly SecondaryArtifacts?: (Artifacts[] | undefined) | undefined;
	readonly SecondarySources?: (Source[] | undefined) | undefined;
	readonly SecondarySourceVersions?: (ProjectSourceVersion[] | undefined) | undefined;
	readonly SourceVersion?: (string | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly TimeoutInMinutes?: (number | undefined) | undefined;
	readonly Triggers?: (ProjectTriggers | undefined) | undefined;
	readonly Visibility?: (string | undefined) | undefined;
	readonly VpcConfig?: (VpcConfig | undefined) | undefined;
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
	readonly DeleteReports?: (boolean | undefined) | undefined;
	readonly Name?: (string | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
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
	readonly Username?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export interface Artifacts {
	readonly ArtifactIdentifier?: (string | undefined) | undefined;
	readonly EncryptionDisabled?: (boolean | undefined) | undefined;
	readonly Location?: (string | undefined) | undefined;
	readonly Name?: (string | undefined) | undefined;
	readonly NamespaceType?: (string | undefined) | undefined;
	readonly OverrideArtifactName?: (boolean | undefined) | undefined;
	readonly Packaging?: (string | undefined) | undefined;
	readonly Path?: (string | undefined) | undefined;
	readonly Type: string;
}
export interface BatchRestrictions {
	readonly ComputeTypesAllowed?: (string[] | undefined) | undefined;
	readonly MaximumBuildsAllowed?: (number | undefined) | undefined;
}
export interface BuildStatusConfig {
	readonly Context?: (string | undefined) | undefined;
	readonly TargetUrl?: (string | undefined) | undefined;
}
export interface CloudWatchLogsConfig {
	readonly GroupName?: (string | undefined) | undefined;
	readonly Status: string;
	readonly StreamName?: (string | undefined) | undefined;
}
export interface Environment {
	readonly Certificate?: (string | undefined) | undefined;
	readonly ComputeType: string;
	readonly EnvironmentVariables?: (EnvironmentVariable[] | undefined) | undefined;
	readonly Image: string;
	readonly ImagePullCredentialsType?: (string | undefined) | undefined;
	readonly PrivilegedMode?: (boolean | undefined) | undefined;
	readonly RegistryCredential?: (RegistryCredential | undefined) | undefined;
	readonly Type: string;
}
export interface EnvironmentVariable {
	readonly Name: string;
	readonly Type?: (string | undefined) | undefined;
	readonly Value: string;
}
export interface GitSubmodulesConfig {
	readonly FetchSubmodules: boolean;
}
export interface LogsConfig {
	readonly CloudWatchLogs?: (CloudWatchLogsConfig | undefined) | undefined;
	readonly S3Logs?: (S3LogsConfig | undefined) | undefined;
}
export interface ProjectBuildBatchConfig {
	readonly BatchReportMode?: (string | undefined) | undefined;
	readonly CombineArtifacts?: (boolean | undefined) | undefined;
	readonly Restrictions?: (BatchRestrictions | undefined) | undefined;
	readonly ServiceRole?: (string | undefined) | undefined;
	readonly TimeoutInMins?: (number | undefined) | undefined;
}
export interface ProjectCache {
	readonly Location?: (string | undefined) | undefined;
	readonly Modes?: (string[] | undefined) | undefined;
	readonly Type: string;
}
export interface ProjectFileSystemLocation {
	readonly Identifier: string;
	readonly Location: string;
	readonly MountOptions?: (string | undefined) | undefined;
	readonly MountPoint: string;
	readonly Type: string;
}
export interface ProjectSourceVersion {
	readonly SourceIdentifier: string;
	readonly SourceVersion?: (string | undefined) | undefined;
}
export interface ProjectTriggers {
	readonly BuildType?: (string | undefined) | undefined;
	readonly FilterGroups?: (WebhookFilter[][] | undefined) | undefined;
	readonly Webhook?: (boolean | undefined) | undefined;
}
export interface RegistryCredential {
	readonly Credential: string;
	readonly CredentialProvider: string;
}
export interface S3LogsConfig {
	readonly EncryptionDisabled?: (boolean | undefined) | undefined;
	readonly Location?: (string | undefined) | undefined;
	readonly Status: string;
}
export interface Source {
	readonly Auth?: (SourceAuth | undefined) | undefined;
	readonly BuildSpec?: (string | undefined) | undefined;
	readonly BuildStatusConfig?: (BuildStatusConfig | undefined) | undefined;
	readonly GitCloneDepth?: (number | undefined) | undefined;
	readonly GitSubmodulesConfig?: (GitSubmodulesConfig | undefined) | undefined;
	readonly InsecureSsl?: (boolean | undefined) | undefined;
	readonly Location?: (string | undefined) | undefined;
	readonly ReportBuildStatus?: (boolean | undefined) | undefined;
	readonly SourceIdentifier?: (string | undefined) | undefined;
	readonly Type: string;
}
export interface SourceAuth {
	readonly Resource?: (string | undefined) | undefined;
	readonly Type: string;
}
export interface VpcConfig {
	readonly SecurityGroupIds?: (string[] | undefined) | undefined;
	readonly Subnets?: (string[] | undefined) | undefined;
	readonly VpcId?: (string | undefined) | undefined;
}
export interface WebhookFilter {
	readonly ExcludeMatchedPattern?: (boolean | undefined) | undefined;
	readonly Pattern: string;
	readonly Type: string;
}
export interface ReportExportConfig {
	readonly ExportConfigType: string;
	readonly S3Destination?: (S3ReportExportConfig | undefined) | undefined;
}
export interface S3ReportExportConfig {
	readonly Bucket: string;
	readonly BucketOwner?: (string | undefined) | undefined;
	readonly EncryptionDisabled?: (boolean | undefined) | undefined;
	readonly EncryptionKey?: (string | undefined) | undefined;
	readonly Packaging?: (string | undefined) | undefined;
	readonly Path?: (string | undefined) | undefined;
}
export default {
	Project: Project,
	ReportGroup: ReportGroup,
	SourceCredential: SourceCredential,
};
