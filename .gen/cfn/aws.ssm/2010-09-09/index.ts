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
	readonly ApplyOnlyAtCronInterval?: boolean | undefined;
	readonly AssociationName?: string | undefined;
	readonly AutomationTargetParameterName?: string | undefined;
	readonly CalendarNames?: string[] | undefined;
	readonly ComplianceSeverity?: string | undefined;
	readonly DocumentVersion?: string | undefined;
	readonly InstanceId?: string | undefined;
	readonly MaxConcurrency?: string | undefined;
	readonly MaxErrors?: string | undefined;
	readonly OutputLocation?: InstanceAssociationOutputLocation | undefined;
	readonly Parameters?: any | undefined;
	readonly ScheduleExpression?: string | undefined;
	readonly ScheduleOffset?: number | undefined;
	readonly SyncCompliance?: string | undefined;
	readonly Targets?: Target[] | undefined;
	readonly WaitForSuccessTimeoutSeconds?: number | undefined;
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
	readonly Attachments?: AttachmentsSource[] | undefined;
	readonly DocumentFormat?: string | undefined;
	readonly DocumentType?: string | undefined;
	readonly Name?: string | undefined;
	readonly Requires?: DocumentRequires[] | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly TargetType?: string | undefined;
	readonly UpdateMethod?: string | undefined;
	readonly VersionName?: string | undefined;
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
	readonly Description?: string | undefined;
	readonly EndDate?: string | undefined;
	readonly ScheduleOffset?: number | undefined;
	readonly ScheduleTimezone?: string | undefined;
	readonly StartDate?: string | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
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
	readonly Description?: string | undefined;
	readonly Name?: string | undefined;
	readonly OwnerInformation?: string | undefined;
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
	readonly CutoffBehavior?: string | undefined;
	readonly Description?: string | undefined;
	readonly LoggingInfo?: LoggingInfo | undefined;
	readonly MaxConcurrency?: string | undefined;
	readonly MaxErrors?: string | undefined;
	readonly Name?: string | undefined;
	readonly ServiceRoleArn?: string | undefined;
	readonly Targets?: Target[] | undefined;
	readonly TaskInvocationParameters?: TaskInvocationParameters | undefined;
	readonly TaskParameters?: any | undefined;
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
	readonly AllowedPattern?: string | undefined;
	readonly DataType?: string | undefined;
	readonly Description?: string | undefined;
	readonly Name?: string | undefined;
	readonly Policies?: string | undefined;
	readonly Tags?: any | undefined;
	readonly Tier?: string | undefined;
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
	readonly ApprovalRules?: RuleGroup | undefined;
	readonly ApprovedPatches?: string[] | undefined;
	readonly ApprovedPatchesComplianceLevel?: string | undefined;
	readonly ApprovedPatchesEnableNonSecurity?: boolean | undefined;
	readonly Description?: string | undefined;
	readonly GlobalFilters?: PatchFilterGroup | undefined;
	readonly OperatingSystem?: string | undefined;
	readonly PatchGroups?: string[] | undefined;
	readonly RejectedPatches?: string[] | undefined;
	readonly RejectedPatchesAction?: string | undefined;
	readonly Sources?: PatchSource[] | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
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
	readonly BucketName?: string | undefined;
	readonly BucketPrefix?: string | undefined;
	readonly BucketRegion?: string | undefined;
	readonly KMSKeyArn?: string | undefined;
	readonly S3Destination?: S3Destination | undefined;
	readonly SyncFormat?: string | undefined;
	readonly SyncSource?: SyncSource | undefined;
	readonly SyncType?: string | undefined;
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
	readonly S3Location?: S3OutputLocation | undefined;
}
export interface S3OutputLocation {
	readonly OutputS3BucketName?: string | undefined;
	readonly OutputS3KeyPrefix?: string | undefined;
	readonly OutputS3Region?: string | undefined;
}
export interface Target {
	readonly Key: string;
	readonly Values: string[];
}
export interface AttachmentsSource {
	readonly Key?: string | undefined;
	readonly Name?: string | undefined;
	readonly Values?: string[] | undefined;
}
export interface DocumentRequires {
	readonly Name?: string | undefined;
	readonly Version?: string | undefined;
}
export interface Targets {
	readonly Key: string;
	readonly Values: string[];
}
export interface CloudWatchOutputConfig {
	readonly CloudWatchLogGroupName?: string | undefined;
	readonly CloudWatchOutputEnabled?: boolean | undefined;
}
export interface LoggingInfo {
	readonly Region: string;
	readonly S3Bucket: string;
	readonly S3Prefix?: string | undefined;
}
export interface MaintenanceWindowAutomationParameters {
	readonly DocumentVersion?: string | undefined;
	readonly Parameters?: any | undefined;
}
export interface MaintenanceWindowLambdaParameters {
	readonly ClientContext?: string | undefined;
	readonly Payload?: string | undefined;
	readonly Qualifier?: string | undefined;
}
export interface MaintenanceWindowRunCommandParameters {
	readonly CloudWatchOutputConfig?: CloudWatchOutputConfig | undefined;
	readonly Comment?: string | undefined;
	readonly DocumentHash?: string | undefined;
	readonly DocumentHashType?: string | undefined;
	readonly DocumentVersion?: string | undefined;
	readonly NotificationConfig?: NotificationConfig | undefined;
	readonly OutputS3BucketName?: string | undefined;
	readonly OutputS3KeyPrefix?: string | undefined;
	readonly Parameters?: any | undefined;
	readonly ServiceRoleArn?: string | undefined;
	readonly TimeoutSeconds?: number | undefined;
}
export interface MaintenanceWindowStepFunctionsParameters {
	readonly Input?: string | undefined;
	readonly Name?: string | undefined;
}
export interface NotificationConfig {
	readonly NotificationArn: string;
	readonly NotificationEvents?: string[] | undefined;
	readonly NotificationType?: string | undefined;
}
export interface TaskInvocationParameters {
	readonly MaintenanceWindowAutomationParameters?: MaintenanceWindowAutomationParameters | undefined;
	readonly MaintenanceWindowLambdaParameters?: MaintenanceWindowLambdaParameters | undefined;
	readonly MaintenanceWindowRunCommandParameters?: MaintenanceWindowRunCommandParameters | undefined;
	readonly MaintenanceWindowStepFunctionsParameters?: MaintenanceWindowStepFunctionsParameters | undefined;
}
export interface PatchFilter {
	readonly Key?: string | undefined;
	readonly Values?: string[] | undefined;
}
export interface PatchFilterGroup {
	readonly PatchFilters?: PatchFilter[] | undefined;
}
export interface PatchSource {
	readonly Configuration?: string | undefined;
	readonly Name?: string | undefined;
	readonly Products?: string[] | undefined;
}
export interface Rule {
	readonly ApproveAfterDays?: number | undefined;
	readonly ApproveUntilDate?: string | undefined;
	readonly ComplianceLevel?: string | undefined;
	readonly EnableNonSecurity?: boolean | undefined;
	readonly PatchFilterGroup?: PatchFilterGroup | undefined;
}
export interface RuleGroup {
	readonly PatchRules?: Rule[] | undefined;
}
export interface AwsOrganizationsSource {
	readonly OrganizationSourceType: string;
	readonly OrganizationalUnits?: string[] | undefined;
}
export interface S3Destination {
	readonly BucketName: string;
	readonly BucketPrefix?: string | undefined;
	readonly BucketRegion: string;
	readonly KMSKeyArn?: string | undefined;
	readonly SyncFormat: string;
}
export interface SyncSource {
	readonly AwsOrganizationsSource?: AwsOrganizationsSource | undefined;
	readonly IncludeFutureRegions?: boolean | undefined;
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
