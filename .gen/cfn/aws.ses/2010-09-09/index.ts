import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class ConfigurationSet
	extends CfnResource<ConfigurationSetComponentInputs>
	implements ConfigurationSetComponentOutputs
{
	constructor(entity: ADKEntity, options: ConfigurationSetComponentInputs) {
		super(entity, options.LogicalId, "AWS::SES::ConfigurationSet", options);
	}
}
export interface ConfigurationSetComponentOutputs {}
export interface ConfigurationSetComponentInputs {
	readonly DeliveryOptions?: DeliveryOptions | undefined;
	readonly Name?: string | undefined;
	readonly ReputationOptions?: ReputationOptions | undefined;
	readonly SendingOptions?: SendingOptions | undefined;
	readonly SuppressionOptions?: SuppressionOptions | undefined;
	readonly TrackingOptions?: TrackingOptions | undefined;
	readonly VdmOptions?: VdmOptions | undefined;
	readonly LogicalId: string;
}
export class ConfigurationSetEventDestination
	extends CfnResource<ConfigurationSetEventDestinationComponentInputs>
	implements ConfigurationSetEventDestinationComponentOutputs
{
	constructor(entity: ADKEntity, options: ConfigurationSetEventDestinationComponentInputs) {
		super(entity, options.LogicalId, "AWS::SES::ConfigurationSetEventDestination", options);
	}
	public readonly Id: string;
}
export interface ConfigurationSetEventDestinationComponentOutputs {
	readonly Id: string;
}
export interface ConfigurationSetEventDestinationComponentInputs {
	readonly ConfigurationSetName: string;
	readonly EventDestination: EventDestination;
	readonly LogicalId: string;
}
export class ContactList extends CfnResource<ContactListComponentInputs> implements ContactListComponentOutputs {
	constructor(entity: ADKEntity, options: ContactListComponentInputs) {
		super(entity, options.LogicalId, "AWS::SES::ContactList", options);
	}
}
export interface ContactListComponentOutputs {}
export interface ContactListComponentInputs {
	readonly ContactListName?: string | undefined;
	readonly Description?: string | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly Topics?: Topic[] | undefined;
	readonly LogicalId: string;
}
export class DedicatedIpPool
	extends CfnResource<DedicatedIpPoolComponentInputs>
	implements DedicatedIpPoolComponentOutputs
{
	constructor(entity: ADKEntity, options: DedicatedIpPoolComponentInputs) {
		super(entity, options.LogicalId, "AWS::SES::DedicatedIpPool", options);
	}
}
export interface DedicatedIpPoolComponentOutputs {}
export interface DedicatedIpPoolComponentInputs {
	readonly PoolName?: string | undefined;
	readonly ScalingMode?: string | undefined;
	readonly LogicalId: string;
}
export class EmailIdentity extends CfnResource<EmailIdentityComponentInputs> implements EmailIdentityComponentOutputs {
	constructor(entity: ADKEntity, options: EmailIdentityComponentInputs) {
		super(entity, options.LogicalId, "AWS::SES::EmailIdentity", options);
	}
	public readonly DkimDnsTokenName1: string;
	public readonly DkimDnsTokenName2: string;
	public readonly DkimDnsTokenName3: string;
	public readonly DkimDnsTokenValue1: string;
	public readonly DkimDnsTokenValue2: string;
	public readonly DkimDnsTokenValue3: string;
}
export interface EmailIdentityComponentOutputs {
	readonly DkimDnsTokenName1: string;
	readonly DkimDnsTokenName2: string;
	readonly DkimDnsTokenName3: string;
	readonly DkimDnsTokenValue1: string;
	readonly DkimDnsTokenValue2: string;
	readonly DkimDnsTokenValue3: string;
}
export interface EmailIdentityComponentInputs {
	readonly EmailIdentity: string;
	readonly ConfigurationSetAttributes?: ConfigurationSetAttributes | undefined;
	readonly DkimAttributes?: DkimAttributes | undefined;
	readonly DkimSigningAttributes?: DkimSigningAttributes | undefined;
	readonly FeedbackAttributes?: FeedbackAttributes | undefined;
	readonly MailFromAttributes?: MailFromAttributes | undefined;
	readonly LogicalId: string;
}
export class ReceiptFilter extends CfnResource<ReceiptFilterComponentInputs> implements ReceiptFilterComponentOutputs {
	constructor(entity: ADKEntity, options: ReceiptFilterComponentInputs) {
		super(entity, options.LogicalId, "AWS::SES::ReceiptFilter", options);
	}
}
export interface ReceiptFilterComponentOutputs {}
export interface ReceiptFilterComponentInputs {
	readonly Filter: Filter;
	readonly LogicalId: string;
}
export class ReceiptRule extends CfnResource<ReceiptRuleComponentInputs> implements ReceiptRuleComponentOutputs {
	constructor(entity: ADKEntity, options: ReceiptRuleComponentInputs) {
		super(entity, options.LogicalId, "AWS::SES::ReceiptRule", options);
	}
}
export interface ReceiptRuleComponentOutputs {}
export interface ReceiptRuleComponentInputs {
	readonly Rule: Rule;
	readonly RuleSetName: string;
	readonly After?: string | undefined;
	readonly LogicalId: string;
}
export class ReceiptRuleSet extends CfnResource<ReceiptRuleSetComponentInputs> implements ReceiptRuleSetComponentOutputs {
	constructor(entity: ADKEntity, options: ReceiptRuleSetComponentInputs) {
		super(entity, options.LogicalId, "AWS::SES::ReceiptRuleSet", options);
	}
}
export interface ReceiptRuleSetComponentOutputs {}
export interface ReceiptRuleSetComponentInputs {
	readonly RuleSetName?: string | undefined;
	readonly LogicalId: string;
}
export class Template extends CfnResource<TemplateComponentInputs> implements TemplateComponentOutputs {
	constructor(entity: ADKEntity, options: TemplateComponentInputs) {
		super(entity, options.LogicalId, "AWS::SES::Template", options);
	}
	public readonly Id: string;
}
export interface TemplateComponentOutputs {
	readonly Id: string;
}
export interface TemplateComponentInputs {
	readonly Template?: Template | undefined;
	readonly LogicalId: string;
}
export class VdmAttributes extends CfnResource<VdmAttributesComponentInputs> implements VdmAttributesComponentOutputs {
	constructor(entity: ADKEntity, options: VdmAttributesComponentInputs) {
		super(entity, options.LogicalId, "AWS::SES::VdmAttributes", options);
	}
	public readonly VdmAttributesResourceId: string;
}
export interface VdmAttributesComponentOutputs {
	readonly VdmAttributesResourceId: string;
}
export interface VdmAttributesComponentInputs {
	readonly DashboardAttributes?: DashboardAttributes | undefined;
	readonly GuardianAttributes?: GuardianAttributes | undefined;
	readonly LogicalId: string;
}
export interface DashboardOptions {
	readonly EngagementMetrics: string;
}
export interface DeliveryOptions {
	readonly SendingPoolName?: string | undefined;
	readonly TlsPolicy?: string | undefined;
}
export interface GuardianOptions {
	readonly OptimizedSharedDelivery: string;
}
export interface ReputationOptions {
	readonly ReputationMetricsEnabled?: boolean | undefined;
}
export interface SendingOptions {
	readonly SendingEnabled?: boolean | undefined;
}
export interface SuppressionOptions {
	readonly SuppressedReasons?: string[] | undefined;
}
export interface TrackingOptions {
	readonly CustomRedirectDomain?: string | undefined;
}
export interface VdmOptions {
	readonly DashboardOptions?: DashboardOptions | undefined;
	readonly GuardianOptions?: GuardianOptions | undefined;
}
export interface CloudWatchDestination {
	readonly DimensionConfigurations?: DimensionConfiguration[] | undefined;
}
export interface DimensionConfiguration {
	readonly DefaultDimensionValue: string;
	readonly DimensionName: string;
	readonly DimensionValueSource: string;
}
export interface EventDestination {
	readonly CloudWatchDestination?: CloudWatchDestination | undefined;
	readonly Enabled?: boolean | undefined;
	readonly KinesisFirehoseDestination?: KinesisFirehoseDestination | undefined;
	readonly MatchingEventTypes: string[];
	readonly Name?: string | undefined;
	readonly SnsDestination?: SnsDestination | undefined;
}
export interface KinesisFirehoseDestination {
	readonly DeliveryStreamARN: string;
	readonly IAMRoleARN: string;
}
export interface SnsDestination {
	readonly TopicARN: string;
}
export interface Topic {
	readonly DefaultSubscriptionStatus: string;
	readonly Description?: string | undefined;
	readonly DisplayName: string;
	readonly TopicName: string;
}
export interface ConfigurationSetAttributes {
	readonly ConfigurationSetName?: string | undefined;
}
export interface DkimAttributes {
	readonly SigningEnabled?: boolean | undefined;
}
export interface DkimSigningAttributes {
	readonly DomainSigningPrivateKey?: string | undefined;
	readonly DomainSigningSelector?: string | undefined;
	readonly NextSigningKeyLength?: string | undefined;
}
export interface FeedbackAttributes {
	readonly EmailForwardingEnabled?: boolean | undefined;
}
export interface MailFromAttributes {
	readonly BehaviorOnMxFailure?: string | undefined;
	readonly MailFromDomain?: string | undefined;
}
export interface Filter {
	readonly IpFilter: IpFilter;
	readonly Name?: string | undefined;
}
export interface IpFilter {
	readonly Cidr: string;
	readonly Policy: string;
}
export interface Action {
	readonly AddHeaderAction?: AddHeaderAction | undefined;
	readonly BounceAction?: BounceAction | undefined;
	readonly LambdaAction?: LambdaAction | undefined;
	readonly S3Action?: S3Action | undefined;
	readonly SNSAction?: SNSAction | undefined;
	readonly StopAction?: StopAction | undefined;
	readonly WorkmailAction?: WorkmailAction | undefined;
}
export interface AddHeaderAction {
	readonly HeaderName: string;
	readonly HeaderValue: string;
}
export interface BounceAction {
	readonly Message: string;
	readonly Sender: string;
	readonly SmtpReplyCode: string;
	readonly StatusCode?: string | undefined;
	readonly TopicArn?: string | undefined;
}
export interface LambdaAction {
	readonly FunctionArn: string;
	readonly InvocationType?: string | undefined;
	readonly TopicArn?: string | undefined;
}
export interface Rule {
	readonly Actions?: Action[] | undefined;
	readonly Enabled?: boolean | undefined;
	readonly Name?: string | undefined;
	readonly Recipients?: string[] | undefined;
	readonly ScanEnabled?: boolean | undefined;
	readonly TlsPolicy?: string | undefined;
}
export interface S3Action {
	readonly BucketName: string;
	readonly KmsKeyArn?: string | undefined;
	readonly ObjectKeyPrefix?: string | undefined;
	readonly TopicArn?: string | undefined;
}
export interface SNSAction {
	readonly Encoding?: string | undefined;
	readonly TopicArn?: string | undefined;
}
export interface StopAction {
	readonly Scope: string;
	readonly TopicArn?: string | undefined;
}
export interface WorkmailAction {
	readonly OrganizationArn: string;
	readonly TopicArn?: string | undefined;
}
export interface Template {
	readonly HtmlPart?: string | undefined;
	readonly SubjectPart: string;
	readonly TemplateName?: string | undefined;
	readonly TextPart?: string | undefined;
}
export interface DashboardAttributes {
	readonly EngagementMetrics?: string | undefined;
}
export interface GuardianAttributes {
	readonly OptimizedSharedDelivery?: string | undefined;
}
export default {
	ConfigurationSet: ConfigurationSet,
	ConfigurationSetEventDestination: ConfigurationSetEventDestination,
	ContactList: ContactList,
	DedicatedIpPool: DedicatedIpPool,
	EmailIdentity: EmailIdentity,
	ReceiptFilter: ReceiptFilter,
	ReceiptRule: ReceiptRule,
	ReceiptRuleSet: ReceiptRuleSet,
	Template: Template,
	VdmAttributes: VdmAttributes,
};
