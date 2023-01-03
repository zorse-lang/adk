import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class Association extends CfnResource<AssociationComponentInputs> implements AssociationComponentOutputs {
	constructor(entity: ADKEntity, options: AssociationComponentInputs) {
		super(entity, options.LogicalId, "AWS::SSM::Association", options);
	}
	public readonly AssociationId: string;
}
export interface AssociationComponentOutputs {
	readonly AssociationId: string;
}
export interface AssociationComponentInputs {
	readonly Name: string;
	readonly ApplyOnlyAtCronInterval?: (boolean | undefined) | undefined;
	readonly AssociationName?: (string | undefined) | undefined;
	readonly AutomationTargetParameterName?: (string | undefined) | undefined;
	readonly CalendarNames?: (string[] | undefined) | undefined;
	readonly ComplianceSeverity?: (string | undefined) | undefined;
	readonly DocumentVersion?: (string | undefined) | undefined;
	readonly InstanceId?: (string | undefined) | undefined;
	readonly MaxConcurrency?: (string | undefined) | undefined;
	readonly MaxErrors?: (string | undefined) | undefined;
	readonly OutputLocation?: (InstanceAssociationOutputLocation | undefined) | undefined;
	readonly Parameters?: (any | undefined) | undefined;
	readonly ScheduleExpression?: (string | undefined) | undefined;
	readonly ScheduleOffset?: (number | undefined) | undefined;
	readonly SyncCompliance?: (string | undefined) | undefined;
	readonly Targets?: (Target[] | undefined) | undefined;
	readonly WaitForSuccessTimeoutSeconds?: (number | undefined) | undefined;
	readonly LogicalId: string;
}
export class Document extends CfnResource<DocumentComponentInputs> implements DocumentComponentOutputs {
	constructor(entity: ADKEntity, options: DocumentComponentInputs) {
		super(entity, options.LogicalId, "AWS::SSM::Document", options);
	}
}
export interface DocumentComponentOutputs {}
export interface DocumentComponentInputs {
	readonly Content: any;
	readonly Attachments?: (AttachmentsSource[] | undefined) | undefined;
	readonly DocumentFormat?: (string | undefined) | undefined;
	readonly DocumentType?: (string | undefined) | undefined;
	readonly Name?: (string | undefined) | undefined;
	readonly Requires?: (DocumentRequires[] | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly TargetType?: (string | undefined) | undefined;
	readonly UpdateMethod?: (string | undefined) | undefined;
	readonly VersionName?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export class MaintenanceWindow
	extends CfnResource<MaintenanceWindowComponentInputs>
	implements MaintenanceWindowComponentOutputs
{
	constructor(entity: ADKEntity, options: MaintenanceWindowComponentInputs) {
		super(entity, options.LogicalId, "AWS::SSM::MaintenanceWindow", options);
	}
}
export interface MaintenanceWindowComponentOutputs {}
export interface MaintenanceWindowComponentInputs {
	readonly AllowUnassociatedTargets: boolean;
	readonly Cutoff: number;
	readonly Duration: number;
	readonly Name: string;
	readonly Schedule: string;
	readonly Description?: (string | undefined) | undefined;
	readonly EndDate?: (string | undefined) | undefined;
	readonly ScheduleOffset?: (number | undefined) | undefined;
	readonly ScheduleTimezone?: (string | undefined) | undefined;
	readonly StartDate?: (string | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly LogicalId: string;
}
export class MaintenanceWindowTarget
	extends CfnResource<MaintenanceWindowTargetComponentInputs>
	implements MaintenanceWindowTargetComponentOutputs
{
	constructor(entity: ADKEntity, options: MaintenanceWindowTargetComponentInputs) {
		super(entity, options.LogicalId, "AWS::SSM::MaintenanceWindowTarget", options);
	}
}
export interface MaintenanceWindowTargetComponentOutputs {}
export interface MaintenanceWindowTargetComponentInputs {
	readonly ResourceType: string;
	readonly Targets: Targets[];
	readonly WindowId: string;
	readonly Description?: (string | undefined) | undefined;
	readonly Name?: (string | undefined) | undefined;
	readonly OwnerInformation?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export class MaintenanceWindowTask
	extends CfnResource<MaintenanceWindowTaskComponentInputs>
	implements MaintenanceWindowTaskComponentOutputs
{
	constructor(entity: ADKEntity, options: MaintenanceWindowTaskComponentInputs) {
		super(entity, options.LogicalId, "AWS::SSM::MaintenanceWindowTask", options);
	}
}
export interface MaintenanceWindowTaskComponentOutputs {}
export interface MaintenanceWindowTaskComponentInputs {
	readonly Priority: number;
	readonly TaskArn: string;
	readonly TaskType: string;
	readonly WindowId: string;
	readonly CutoffBehavior?: (string | undefined) | undefined;
	readonly Description?: (string | undefined) | undefined;
	readonly LoggingInfo?: (LoggingInfo | undefined) | undefined;
	readonly MaxConcurrency?: (string | undefined) | undefined;
	readonly MaxErrors?: (string | undefined) | undefined;
	readonly Name?: (string | undefined) | undefined;
	readonly ServiceRoleArn?: (string | undefined) | undefined;
	readonly Targets?: (Target[] | undefined) | undefined;
	readonly TaskInvocationParameters?: (TaskInvocationParameters | undefined) | undefined;
	readonly TaskParameters?: (any | undefined) | undefined;
	readonly LogicalId: string;
}
export class Parameter extends CfnResource<ParameterComponentInputs> implements ParameterComponentOutputs {
	constructor(entity: ADKEntity, options: ParameterComponentInputs) {
		super(entity, options.LogicalId, "AWS::SSM::Parameter", options);
	}
	public readonly Type: string;
	public readonly Value: string;
}
export interface ParameterComponentOutputs {
	readonly Type: string;
	readonly Value: string;
}
export interface ParameterComponentInputs {
	readonly Type: string;
	readonly Value: string;
	readonly AllowedPattern?: (string | undefined) | undefined;
	readonly DataType?: (string | undefined) | undefined;
	readonly Description?: (string | undefined) | undefined;
	readonly Name?: (string | undefined) | undefined;
	readonly Policies?: (string | undefined) | undefined;
	readonly Tags?: (any | undefined) | undefined;
	readonly Tier?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export class PatchBaseline extends CfnResource<PatchBaselineComponentInputs> implements PatchBaselineComponentOutputs {
	constructor(entity: ADKEntity, options: PatchBaselineComponentInputs) {
		super(entity, options.LogicalId, "AWS::SSM::PatchBaseline", options);
	}
}
export interface PatchBaselineComponentOutputs {}
export interface PatchBaselineComponentInputs {
	readonly Name: string;
	readonly ApprovalRules?: (RuleGroup | undefined) | undefined;
	readonly ApprovedPatches?: (string[] | undefined) | undefined;
	readonly ApprovedPatchesComplianceLevel?: (string | undefined) | undefined;
	readonly ApprovedPatchesEnableNonSecurity?: (boolean | undefined) | undefined;
	readonly Description?: (string | undefined) | undefined;
	readonly GlobalFilters?: (PatchFilterGroup | undefined) | undefined;
	readonly OperatingSystem?: (string | undefined) | undefined;
	readonly PatchGroups?: (string[] | undefined) | undefined;
	readonly RejectedPatches?: (string[] | undefined) | undefined;
	readonly RejectedPatchesAction?: (string | undefined) | undefined;
	readonly Sources?: (PatchSource[] | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly LogicalId: string;
}
export class ResourceDataSync
	extends CfnResource<ResourceDataSyncComponentInputs>
	implements ResourceDataSyncComponentOutputs
{
	constructor(entity: ADKEntity, options: ResourceDataSyncComponentInputs) {
		super(entity, options.LogicalId, "AWS::SSM::ResourceDataSync", options);
	}
	public readonly SyncName: string;
}
export interface ResourceDataSyncComponentOutputs {
	readonly SyncName: string;
}
export interface ResourceDataSyncComponentInputs {
	readonly SyncName: string;
	readonly BucketName?: (string | undefined) | undefined;
	readonly BucketPrefix?: (string | undefined) | undefined;
	readonly BucketRegion?: (string | undefined) | undefined;
	readonly KMSKeyArn?: (string | undefined) | undefined;
	readonly S3Destination?: (S3Destination | undefined) | undefined;
	readonly SyncFormat?: (string | undefined) | undefined;
	readonly SyncSource?: (SyncSource | undefined) | undefined;
	readonly SyncType?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export class ResourcePolicy extends CfnResource<ResourcePolicyComponentInputs> implements ResourcePolicyComponentOutputs {
	constructor(entity: ADKEntity, options: ResourcePolicyComponentInputs) {
		super(entity, options.LogicalId, "AWS::SSM::ResourcePolicy", options);
	}
	public readonly PolicyHash: string;
	public readonly PolicyId: string;
}
export interface ResourcePolicyComponentOutputs {
	readonly PolicyHash: string;
	readonly PolicyId: string;
}
export interface ResourcePolicyComponentInputs {
	readonly Policy: any;
	readonly ResourceArn: string;
	readonly LogicalId: string;
}
export interface InstanceAssociationOutputLocation {
	readonly S3Location?: (S3OutputLocation | undefined) | undefined;
}
export interface S3OutputLocation {
	readonly OutputS3BucketName?: (string | undefined) | undefined;
	readonly OutputS3KeyPrefix?: (string | undefined) | undefined;
	readonly OutputS3Region?: (string | undefined) | undefined;
}
export interface Target {
	readonly Key: string;
	readonly Values: string[];
}
export interface AttachmentsSource {
	readonly Key?: (string | undefined) | undefined;
	readonly Name?: (string | undefined) | undefined;
	readonly Values?: (string[] | undefined) | undefined;
}
export interface DocumentRequires {
	readonly Name?: (string | undefined) | undefined;
	readonly Version?: (string | undefined) | undefined;
}
export interface Targets {
	readonly Key: string;
	readonly Values: string[];
}
export interface CloudWatchOutputConfig {
	readonly CloudWatchLogGroupName?: (string | undefined) | undefined;
	readonly CloudWatchOutputEnabled?: (boolean | undefined) | undefined;
}
export interface LoggingInfo {
	readonly Region: string;
	readonly S3Bucket: string;
	readonly S3Prefix?: (string | undefined) | undefined;
}
export interface MaintenanceWindowAutomationParameters {
	readonly DocumentVersion?: (string | undefined) | undefined;
	readonly Parameters?: (any | undefined) | undefined;
}
export interface MaintenanceWindowLambdaParameters {
	readonly ClientContext?: (string | undefined) | undefined;
	readonly Payload?: (string | undefined) | undefined;
	readonly Qualifier?: (string | undefined) | undefined;
}
export interface MaintenanceWindowRunCommandParameters {
	readonly CloudWatchOutputConfig?: (CloudWatchOutputConfig | undefined) | undefined;
	readonly Comment?: (string | undefined) | undefined;
	readonly DocumentHash?: (string | undefined) | undefined;
	readonly DocumentHashType?: (string | undefined) | undefined;
	readonly DocumentVersion?: (string | undefined) | undefined;
	readonly NotificationConfig?: (NotificationConfig | undefined) | undefined;
	readonly OutputS3BucketName?: (string | undefined) | undefined;
	readonly OutputS3KeyPrefix?: (string | undefined) | undefined;
	readonly Parameters?: (any | undefined) | undefined;
	readonly ServiceRoleArn?: (string | undefined) | undefined;
	readonly TimeoutSeconds?: (number | undefined) | undefined;
}
export interface MaintenanceWindowStepFunctionsParameters {
	readonly Input?: (string | undefined) | undefined;
	readonly Name?: (string | undefined) | undefined;
}
export interface NotificationConfig {
	readonly NotificationArn: string;
	readonly NotificationEvents?: (string[] | undefined) | undefined;
	readonly NotificationType?: (string | undefined) | undefined;
}
export interface TaskInvocationParameters {
	readonly MaintenanceWindowAutomationParameters?: (MaintenanceWindowAutomationParameters | undefined) | undefined;
	readonly MaintenanceWindowLambdaParameters?: (MaintenanceWindowLambdaParameters | undefined) | undefined;
	readonly MaintenanceWindowRunCommandParameters?: (MaintenanceWindowRunCommandParameters | undefined) | undefined;
	readonly MaintenanceWindowStepFunctionsParameters?:
		| (MaintenanceWindowStepFunctionsParameters | undefined)
		| undefined;
}
export interface PatchFilter {
	readonly Key?: (string | undefined) | undefined;
	readonly Values?: (string[] | undefined) | undefined;
}
export interface PatchFilterGroup {
	readonly PatchFilters?: (PatchFilter[] | undefined) | undefined;
}
export interface PatchSource {
	readonly Configuration?: (string | undefined) | undefined;
	readonly Name?: (string | undefined) | undefined;
	readonly Products?: (string[] | undefined) | undefined;
}
export interface Rule {
	readonly ApproveAfterDays?: (number | undefined) | undefined;
	readonly ApproveUntilDate?: (string | undefined) | undefined;
	readonly ComplianceLevel?: (string | undefined) | undefined;
	readonly EnableNonSecurity?: (boolean | undefined) | undefined;
	readonly PatchFilterGroup?: (PatchFilterGroup | undefined) | undefined;
}
export interface RuleGroup {
	readonly PatchRules?: (Rule[] | undefined) | undefined;
}
export interface AwsOrganizationsSource {
	readonly OrganizationSourceType: string;
	readonly OrganizationalUnits?: (string[] | undefined) | undefined;
}
export interface S3Destination {
	readonly BucketName: string;
	readonly BucketPrefix?: (string | undefined) | undefined;
	readonly BucketRegion: string;
	readonly KMSKeyArn?: (string | undefined) | undefined;
	readonly SyncFormat: string;
}
export interface SyncSource {
	readonly AwsOrganizationsSource?: (AwsOrganizationsSource | undefined) | undefined;
	readonly IncludeFutureRegions?: (boolean | undefined) | undefined;
	readonly SourceRegions: string[];
	readonly SourceType: string;
}
export default {
	Association: Association,
	Document: Document,
	MaintenanceWindow: MaintenanceWindow,
	MaintenanceWindowTarget: MaintenanceWindowTarget,
	MaintenanceWindowTask: MaintenanceWindowTask,
	Parameter: Parameter,
	PatchBaseline: PatchBaseline,
	ResourceDataSync: ResourceDataSync,
	ResourcePolicy: ResourcePolicy,
};
