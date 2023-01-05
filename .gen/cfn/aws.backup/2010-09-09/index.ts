import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class BackupPlan extends CfnResource<BackupPlanComponentInputs> implements BackupPlanComponentOutputs {
	constructor(entity: ADKEntity, options: BackupPlanComponentInputs) {
		super(entity, options.LogicalId, "AWS::Backup::BackupPlan", options);
	}
	public readonly BackupPlanArn: string;
	public readonly BackupPlanId: string;
	public readonly VersionId: string;
}
export interface BackupPlanComponentOutputs {
	readonly BackupPlanArn: string;
	readonly BackupPlanId: string;
	readonly VersionId: string;
}
export interface BackupPlanComponentInputs {
	readonly BackupPlan: BackupPlanResourceType;
	readonly BackupPlanTags?: { [key: string]: string } | undefined;
	readonly LogicalId: string;
}
export class BackupSelection
	extends CfnResource<BackupSelectionComponentInputs>
	implements BackupSelectionComponentOutputs
{
	constructor(entity: ADKEntity, options: BackupSelectionComponentInputs) {
		super(entity, options.LogicalId, "AWS::Backup::BackupSelection", options);
	}
	public readonly BackupPlanId: string;
	public readonly Id: string;
	public readonly SelectionId: string;
}
export interface BackupSelectionComponentOutputs {
	readonly BackupPlanId: string;
	readonly Id: string;
	readonly SelectionId: string;
}
export interface BackupSelectionComponentInputs {
	readonly BackupPlanId: string;
	readonly BackupSelection: BackupSelectionResourceType;
	readonly LogicalId: string;
}
export class BackupVault extends CfnResource<BackupVaultComponentInputs> implements BackupVaultComponentOutputs {
	constructor(entity: ADKEntity, options: BackupVaultComponentInputs) {
		super(entity, options.LogicalId, "AWS::Backup::BackupVault", options);
	}
	public readonly BackupVaultArn: string;
	public readonly BackupVaultName: string;
}
export interface BackupVaultComponentOutputs {
	readonly BackupVaultArn: string;
	readonly BackupVaultName: string;
}
export interface BackupVaultComponentInputs {
	readonly BackupVaultName: string;
	readonly AccessPolicy?: any | undefined;
	readonly BackupVaultTags?: { [key: string]: string } | undefined;
	readonly EncryptionKeyArn?: string | undefined;
	readonly LockConfiguration?: LockConfigurationType | undefined;
	readonly Notifications?: NotificationObjectType | undefined;
	readonly LogicalId: string;
}
export class Framework extends CfnResource<FrameworkComponentInputs> implements FrameworkComponentOutputs {
	constructor(entity: ADKEntity, options: FrameworkComponentInputs) {
		super(entity, options.LogicalId, "AWS::Backup::Framework", options);
	}
	public readonly CreationTime: string;
	public readonly DeploymentStatus: string;
	public readonly FrameworkArn: string;
	public readonly FrameworkStatus: string;
}
export interface FrameworkComponentOutputs {
	readonly CreationTime: string;
	readonly DeploymentStatus: string;
	readonly FrameworkArn: string;
	readonly FrameworkStatus: string;
}
export interface FrameworkComponentInputs {
	readonly FrameworkControls: FrameworkControl[];
	readonly FrameworkDescription?: string | undefined;
	readonly FrameworkName?: string | undefined;
	readonly FrameworkTags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export class ReportPlan extends CfnResource<ReportPlanComponentInputs> implements ReportPlanComponentOutputs {
	constructor(entity: ADKEntity, options: ReportPlanComponentInputs) {
		super(entity, options.LogicalId, "AWS::Backup::ReportPlan", options);
	}
	public readonly ReportPlanArn: string;
}
export interface ReportPlanComponentOutputs {
	readonly ReportPlanArn: string;
}
export interface ReportPlanComponentInputs {
	readonly ReportDeliveryChannel: ReportDeliveryChannel;
	readonly ReportSetting: ReportSetting;
	readonly ReportPlanDescription?: string | undefined;
	readonly ReportPlanName?: string | undefined;
	readonly ReportPlanTags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export interface AdvancedBackupSettingResourceType {
	readonly BackupOptions: any;
	readonly ResourceType: string;
}
export interface BackupPlanResourceType {
	readonly AdvancedBackupSettings?: AdvancedBackupSettingResourceType[] | undefined;
	readonly BackupPlanName: string;
	readonly BackupPlanRule: BackupRuleResourceType[];
}
export interface BackupRuleResourceType {
	readonly CompletionWindowMinutes?: number | undefined;
	readonly CopyActions?: CopyActionResourceType[] | undefined;
	readonly EnableContinuousBackup?: boolean | undefined;
	readonly Lifecycle?: LifecycleResourceType | undefined;
	readonly RecoveryPointTags?: { [key: string]: string } | undefined;
	readonly RuleName: string;
	readonly ScheduleExpression?: string | undefined;
	readonly StartWindowMinutes?: number | undefined;
	readonly TargetBackupVault: string;
}
export interface CopyActionResourceType {
	readonly DestinationBackupVaultArn: string;
	readonly Lifecycle?: LifecycleResourceType | undefined;
}
export interface LifecycleResourceType {
	readonly DeleteAfterDays?: number | undefined;
	readonly MoveToColdStorageAfterDays?: number | undefined;
}
export interface BackupSelectionResourceType {
	readonly Conditions?: Conditions | undefined;
	readonly IamRoleArn: string;
	readonly ListOfTags?: ConditionResourceType[] | undefined;
	readonly NotResources?: string[] | undefined;
	readonly Resources?: string[] | undefined;
	readonly SelectionName: string;
}
export interface ConditionParameter {
	readonly ConditionKey?: string | undefined;
	readonly ConditionValue?: string | undefined;
}
export interface ConditionResourceType {
	readonly ConditionKey: string;
	readonly ConditionType: string;
	readonly ConditionValue: string;
}
export interface Conditions {
	readonly StringEquals?: ConditionParameter[] | undefined;
	readonly StringLike?: ConditionParameter[] | undefined;
	readonly StringNotEquals?: ConditionParameter[] | undefined;
	readonly StringNotLike?: ConditionParameter[] | undefined;
}
export interface LockConfigurationType {
	readonly ChangeableForDays?: number | undefined;
	readonly MaxRetentionDays?: number | undefined;
	readonly MinRetentionDays: number;
}
export interface NotificationObjectType {
	readonly BackupVaultEvents: string[];
	readonly SNSTopicArn: string;
}
export interface ControlInputParameter {
	readonly ParameterName: string;
	readonly ParameterValue: string;
}
export interface ControlScope {
	readonly ComplianceResourceIds?: string[] | undefined;
	readonly ComplianceResourceTypes?: string[] | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
}
export interface FrameworkControl {
	readonly ControlInputParameters?: ControlInputParameter[] | undefined;
	readonly ControlName: string;
	readonly ControlScope?: ControlScope | undefined;
}
export interface ReportDeliveryChannel {
	readonly Formats?: string[] | undefined;
	readonly S3BucketName: string;
	readonly S3KeyPrefix?: string | undefined;
}
export interface ReportSetting {
	readonly Accounts?: string[] | undefined;
	readonly FrameworkArns?: string[] | undefined;
	readonly OrganizationUnits?: string[] | undefined;
	readonly Regions?: string[] | undefined;
	readonly ReportTemplate: string;
}
export default {
	BackupPlan: BackupPlan,
	BackupSelection: BackupSelection,
	BackupVault: BackupVault,
	Framework: Framework,
	ReportPlan: ReportPlan,
};
