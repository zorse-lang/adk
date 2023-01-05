import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class ContactFlow extends CfnResource<ContactFlowComponentInputs> implements ContactFlowComponentOutputs {
	constructor(entity: ADKEntity, options: ContactFlowComponentInputs) {
		super(entity, options.LogicalId, "AWS::Connect::ContactFlow", options);
	}
	public readonly ContactFlowArn: string;
}
export interface ContactFlowComponentOutputs {
	readonly ContactFlowArn: string;
}
export interface ContactFlowComponentInputs {
	readonly Content: string;
	readonly InstanceArn: string;
	readonly Name: string;
	readonly Type: string;
	readonly Description?: string | undefined;
	readonly State?: string | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export class ContactFlowModule
	extends CfnResource<ContactFlowModuleComponentInputs>
	implements ContactFlowModuleComponentOutputs
{
	constructor(entity: ADKEntity, options: ContactFlowModuleComponentInputs) {
		super(entity, options.LogicalId, "AWS::Connect::ContactFlowModule", options);
	}
	public readonly ContactFlowModuleArn: string;
	public readonly Status: string;
}
export interface ContactFlowModuleComponentOutputs {
	readonly ContactFlowModuleArn: string;
	readonly Status: string;
}
export interface ContactFlowModuleComponentInputs {
	readonly Content: string;
	readonly InstanceArn: string;
	readonly Name: string;
	readonly Description?: string | undefined;
	readonly State?: string | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export class HoursOfOperation
	extends CfnResource<HoursOfOperationComponentInputs>
	implements HoursOfOperationComponentOutputs
{
	constructor(entity: ADKEntity, options: HoursOfOperationComponentInputs) {
		super(entity, options.LogicalId, "AWS::Connect::HoursOfOperation", options);
	}
	public readonly HoursOfOperationArn: string;
}
export interface HoursOfOperationComponentOutputs {
	readonly HoursOfOperationArn: string;
}
export interface HoursOfOperationComponentInputs {
	readonly Config: HoursOfOperationConfig[];
	readonly InstanceArn: string;
	readonly Name: string;
	readonly TimeZone: string;
	readonly Description?: string | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export class Instance extends CfnResource<InstanceComponentInputs> implements InstanceComponentOutputs {
	constructor(entity: ADKEntity, options: InstanceComponentInputs) {
		super(entity, options.LogicalId, "AWS::Connect::Instance", options);
	}
	public readonly Arn: string;
	public readonly CreatedTime: string;
	public readonly Id: string;
	public readonly InstanceStatus: string;
	public readonly ServiceRole: string;
}
export interface InstanceComponentOutputs {
	readonly Arn: string;
	readonly CreatedTime: string;
	readonly Id: string;
	readonly InstanceStatus: string;
	readonly ServiceRole: string;
}
export interface InstanceComponentInputs {
	readonly Attributes: Attributes;
	readonly IdentityManagementType: string;
	readonly DirectoryId?: string | undefined;
	readonly InstanceAlias?: string | undefined;
	readonly LogicalId: string;
}
export class InstanceStorageConfig
	extends CfnResource<InstanceStorageConfigComponentInputs>
	implements InstanceStorageConfigComponentOutputs
{
	constructor(entity: ADKEntity, options: InstanceStorageConfigComponentInputs) {
		super(entity, options.LogicalId, "AWS::Connect::InstanceStorageConfig", options);
	}
	public readonly AssociationId: string;
}
export interface InstanceStorageConfigComponentOutputs {
	readonly AssociationId: string;
}
export interface InstanceStorageConfigComponentInputs {
	readonly InstanceArn: string;
	readonly ResourceType: string;
	readonly StorageType: string;
	readonly KinesisFirehoseConfig?: KinesisFirehoseConfig | undefined;
	readonly KinesisStreamConfig?: KinesisStreamConfig | undefined;
	readonly KinesisVideoStreamConfig?: KinesisVideoStreamConfig | undefined;
	readonly S3Config?: S3Config | undefined;
	readonly LogicalId: string;
}
export class PhoneNumber extends CfnResource<PhoneNumberComponentInputs> implements PhoneNumberComponentOutputs {
	constructor(entity: ADKEntity, options: PhoneNumberComponentInputs) {
		super(entity, options.LogicalId, "AWS::Connect::PhoneNumber", options);
	}
	public readonly Address: string;
	public readonly PhoneNumberArn: string;
}
export interface PhoneNumberComponentOutputs {
	readonly Address: string;
	readonly PhoneNumberArn: string;
}
export interface PhoneNumberComponentInputs {
	readonly CountryCode: string;
	readonly TargetArn: string;
	readonly Type: string;
	readonly Description?: string | undefined;
	readonly Prefix?: string | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export class QuickConnect extends CfnResource<QuickConnectComponentInputs> implements QuickConnectComponentOutputs {
	constructor(entity: ADKEntity, options: QuickConnectComponentInputs) {
		super(entity, options.LogicalId, "AWS::Connect::QuickConnect", options);
	}
	public readonly QuickConnectArn: string;
}
export interface QuickConnectComponentOutputs {
	readonly QuickConnectArn: string;
}
export interface QuickConnectComponentInputs {
	readonly InstanceArn: string;
	readonly Name: string;
	readonly QuickConnectConfig: QuickConnectConfig;
	readonly Description?: string | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export class Rule extends CfnResource<RuleComponentInputs> implements RuleComponentOutputs {
	constructor(entity: ADKEntity, options: RuleComponentInputs) {
		super(entity, options.LogicalId, "AWS::Connect::Rule", options);
	}
	public readonly RuleArn: string;
}
export interface RuleComponentOutputs {
	readonly RuleArn: string;
}
export interface RuleComponentInputs {
	readonly Actions: Actions;
	readonly Function: string;
	readonly InstanceArn: string;
	readonly Name: string;
	readonly PublishStatus: string;
	readonly TriggerEventSource: RuleTriggerEventSource;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export class TaskTemplate extends CfnResource<TaskTemplateComponentInputs> implements TaskTemplateComponentOutputs {
	constructor(entity: ADKEntity, options: TaskTemplateComponentInputs) {
		super(entity, options.LogicalId, "AWS::Connect::TaskTemplate", options);
	}
	public readonly Arn: string;
}
export interface TaskTemplateComponentOutputs {
	readonly Arn: string;
}
export interface TaskTemplateComponentInputs {
	readonly InstanceArn: string;
	readonly ClientToken?: string | undefined;
	readonly Constraints?: Constraints | undefined;
	readonly ContactFlowArn?: string | undefined;
	readonly Defaults?: DefaultFieldValue[] | undefined;
	readonly Description?: string | undefined;
	readonly Fields?: Field[] | undefined;
	readonly Name?: string | undefined;
	readonly Status?: string | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export class User extends CfnResource<UserComponentInputs> implements UserComponentOutputs {
	constructor(entity: ADKEntity, options: UserComponentInputs) {
		super(entity, options.LogicalId, "AWS::Connect::User", options);
	}
	public readonly UserArn: string;
}
export interface UserComponentOutputs {
	readonly UserArn: string;
}
export interface UserComponentInputs {
	readonly InstanceArn: string;
	readonly PhoneConfig: UserPhoneConfig;
	readonly RoutingProfileArn: string;
	readonly SecurityProfileArns: string[];
	readonly Username: string;
	readonly DirectoryUserId?: string | undefined;
	readonly HierarchyGroupArn?: string | undefined;
	readonly IdentityInfo?: UserIdentityInfo | undefined;
	readonly Password?: string | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export class UserHierarchyGroup
	extends CfnResource<UserHierarchyGroupComponentInputs>
	implements UserHierarchyGroupComponentOutputs
{
	constructor(entity: ADKEntity, options: UserHierarchyGroupComponentInputs) {
		super(entity, options.LogicalId, "AWS::Connect::UserHierarchyGroup", options);
	}
	public readonly UserHierarchyGroupArn: string;
}
export interface UserHierarchyGroupComponentOutputs {
	readonly UserHierarchyGroupArn: string;
}
export interface UserHierarchyGroupComponentInputs {
	readonly InstanceArn: string;
	readonly Name: string;
	readonly ParentGroupArn?: string | undefined;
	readonly LogicalId: string;
}
export interface HoursOfOperationConfig {
	readonly Day: string;
	readonly EndTime: HoursOfOperationTimeSlice;
	readonly StartTime: HoursOfOperationTimeSlice;
}
export interface HoursOfOperationTimeSlice {
	readonly Hours: number;
	readonly Minutes: number;
}
export interface Attributes {
	readonly AutoResolveBestVoices?: boolean | undefined;
	readonly ContactLens?: boolean | undefined;
	readonly ContactflowLogs?: boolean | undefined;
	readonly EarlyMedia?: boolean | undefined;
	readonly InboundCalls: boolean;
	readonly OutboundCalls: boolean;
	readonly UseCustomTTSVoices?: boolean | undefined;
}
export interface EncryptionConfig {
	readonly EncryptionType: string;
	readonly KeyId: string;
}
export interface KinesisFirehoseConfig {
	readonly FirehoseArn: string;
}
export interface KinesisStreamConfig {
	readonly StreamArn: string;
}
export interface KinesisVideoStreamConfig {
	readonly EncryptionConfig?: EncryptionConfig | undefined;
	readonly Prefix: string;
	readonly RetentionPeriodHours: number;
}
export interface S3Config {
	readonly BucketName: string;
	readonly BucketPrefix: string;
	readonly EncryptionConfig?: EncryptionConfig | undefined;
}
export interface PhoneNumberQuickConnectConfig {
	readonly PhoneNumber: string;
}
export interface QueueQuickConnectConfig {
	readonly ContactFlowArn: string;
	readonly QueueArn: string;
}
export interface QuickConnectConfig {
	readonly PhoneConfig?: PhoneNumberQuickConnectConfig | undefined;
	readonly QueueConfig?: QueueQuickConnectConfig | undefined;
	readonly QuickConnectType: string;
	readonly UserConfig?: UserQuickConnectConfig | undefined;
}
export interface UserQuickConnectConfig {
	readonly ContactFlowArn: string;
	readonly UserArn: string;
}
export interface Actions {
	readonly AssignContactCategoryActions?: any[] | undefined;
	readonly EventBridgeActions?: EventBridgeAction[] | undefined;
	readonly SendNotificationActions?: SendNotificationAction[] | undefined;
	readonly TaskActions?: TaskAction[] | undefined;
}
export interface EventBridgeAction {
	readonly Name: string;
}
export interface NotificationRecipientType {
	readonly UserArns?: string[] | undefined;
	readonly UserTags?: { [key: string]: string } | undefined;
}
export interface Reference {
	readonly Type: string;
	readonly Value: string;
}
export interface RuleTriggerEventSource {
	readonly EventSourceName: string;
	readonly IntegrationAssociationArn?: string | undefined;
}
export interface SendNotificationAction {
	readonly Content: string;
	readonly ContentType: string;
	readonly DeliveryMethod: string;
	readonly Recipient: NotificationRecipientType;
	readonly Subject?: string | undefined;
}
export interface TaskAction {
	readonly ContactFlowArn: string;
	readonly Description?: string | undefined;
	readonly Name: string;
	readonly References?: { [key: string]: Reference } | undefined;
}
export interface Constraints {
	readonly InvisibleFields?: InvisibleFieldInfo[] | undefined;
	readonly ReadOnlyFields?: ReadOnlyFieldInfo[] | undefined;
	readonly RequiredFields?: RequiredFieldInfo[] | undefined;
}
export interface DefaultFieldValue {
	readonly DefaultValue: string;
	readonly Id: FieldIdentifier;
}
export interface Field {
	readonly Description?: string | undefined;
	readonly Id: FieldIdentifier;
	readonly SingleSelectOptions?: string[] | undefined;
	readonly Type: string;
}
export interface FieldIdentifier {
	readonly Name: string;
}
export interface InvisibleFieldInfo {
	readonly Id: FieldIdentifier;
}
export interface ReadOnlyFieldInfo {
	readonly Id: FieldIdentifier;
}
export interface RequiredFieldInfo {
	readonly Id: FieldIdentifier;
}
export interface UserIdentityInfo {
	readonly Email?: string | undefined;
	readonly FirstName?: string | undefined;
	readonly LastName?: string | undefined;
	readonly Mobile?: string | undefined;
	readonly SecondaryEmail?: string | undefined;
}
export interface UserPhoneConfig {
	readonly AfterContactWorkTimeLimit?: number | undefined;
	readonly AutoAccept?: boolean | undefined;
	readonly DeskPhoneNumber?: string | undefined;
	readonly PhoneType: string;
}
export default {
	ContactFlow: ContactFlow,
	ContactFlowModule: ContactFlowModule,
	HoursOfOperation: HoursOfOperation,
	Instance: Instance,
	InstanceStorageConfig: InstanceStorageConfig,
	PhoneNumber: PhoneNumber,
	QuickConnect: QuickConnect,
	Rule: Rule,
	TaskTemplate: TaskTemplate,
	User: User,
	UserHierarchyGroup: UserHierarchyGroup,
};
