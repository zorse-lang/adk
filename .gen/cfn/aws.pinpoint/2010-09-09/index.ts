import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class ADMChannel extends CfnResource<ADMChannelComponentInputs> implements ADMChannelComponentOutputs {
	constructor(entity: ADKEntity, options: ADMChannelComponentInputs) {
		super(entity, options.LogicalId, "AWS::Pinpoint::ADMChannel", options);
	}
}
export interface ADMChannelComponentOutputs {}
export interface ADMChannelComponentInputs {
	readonly ApplicationId: string;
	readonly ClientId: string;
	readonly ClientSecret: string;
	readonly Enabled?: (boolean | undefined) | undefined;
	readonly LogicalId: string;
}
export class APNSChannel extends CfnResource<APNSChannelComponentInputs> implements APNSChannelComponentOutputs {
	constructor(entity: ADKEntity, options: APNSChannelComponentInputs) {
		super(entity, options.LogicalId, "AWS::Pinpoint::APNSChannel", options);
	}
}
export interface APNSChannelComponentOutputs {}
export interface APNSChannelComponentInputs {
	readonly ApplicationId: string;
	readonly BundleId?: (string | undefined) | undefined;
	readonly Certificate?: (string | undefined) | undefined;
	readonly DefaultAuthenticationMethod?: (string | undefined) | undefined;
	readonly Enabled?: (boolean | undefined) | undefined;
	readonly PrivateKey?: (string | undefined) | undefined;
	readonly TeamId?: (string | undefined) | undefined;
	readonly TokenKey?: (string | undefined) | undefined;
	readonly TokenKeyId?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export class APNSSandboxChannel
	extends CfnResource<APNSSandboxChannelComponentInputs>
	implements APNSSandboxChannelComponentOutputs
{
	constructor(entity: ADKEntity, options: APNSSandboxChannelComponentInputs) {
		super(entity, options.LogicalId, "AWS::Pinpoint::APNSSandboxChannel", options);
	}
}
export interface APNSSandboxChannelComponentOutputs {}
export interface APNSSandboxChannelComponentInputs {
	readonly ApplicationId: string;
	readonly BundleId?: (string | undefined) | undefined;
	readonly Certificate?: (string | undefined) | undefined;
	readonly DefaultAuthenticationMethod?: (string | undefined) | undefined;
	readonly Enabled?: (boolean | undefined) | undefined;
	readonly PrivateKey?: (string | undefined) | undefined;
	readonly TeamId?: (string | undefined) | undefined;
	readonly TokenKey?: (string | undefined) | undefined;
	readonly TokenKeyId?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export class APNSVoipChannel
	extends CfnResource<APNSVoipChannelComponentInputs>
	implements APNSVoipChannelComponentOutputs
{
	constructor(entity: ADKEntity, options: APNSVoipChannelComponentInputs) {
		super(entity, options.LogicalId, "AWS::Pinpoint::APNSVoipChannel", options);
	}
}
export interface APNSVoipChannelComponentOutputs {}
export interface APNSVoipChannelComponentInputs {
	readonly ApplicationId: string;
	readonly BundleId?: (string | undefined) | undefined;
	readonly Certificate?: (string | undefined) | undefined;
	readonly DefaultAuthenticationMethod?: (string | undefined) | undefined;
	readonly Enabled?: (boolean | undefined) | undefined;
	readonly PrivateKey?: (string | undefined) | undefined;
	readonly TeamId?: (string | undefined) | undefined;
	readonly TokenKey?: (string | undefined) | undefined;
	readonly TokenKeyId?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export class APNSVoipSandboxChannel
	extends CfnResource<APNSVoipSandboxChannelComponentInputs>
	implements APNSVoipSandboxChannelComponentOutputs
{
	constructor(entity: ADKEntity, options: APNSVoipSandboxChannelComponentInputs) {
		super(entity, options.LogicalId, "AWS::Pinpoint::APNSVoipSandboxChannel", options);
	}
}
export interface APNSVoipSandboxChannelComponentOutputs {}
export interface APNSVoipSandboxChannelComponentInputs {
	readonly ApplicationId: string;
	readonly BundleId?: (string | undefined) | undefined;
	readonly Certificate?: (string | undefined) | undefined;
	readonly DefaultAuthenticationMethod?: (string | undefined) | undefined;
	readonly Enabled?: (boolean | undefined) | undefined;
	readonly PrivateKey?: (string | undefined) | undefined;
	readonly TeamId?: (string | undefined) | undefined;
	readonly TokenKey?: (string | undefined) | undefined;
	readonly TokenKeyId?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export class App extends CfnResource<AppComponentInputs> implements AppComponentOutputs {
	constructor(entity: ADKEntity, options: AppComponentInputs) {
		super(entity, options.LogicalId, "AWS::Pinpoint::App", options);
	}
	public readonly Arn: string;
}
export interface AppComponentOutputs {
	readonly Arn: string;
}
export interface AppComponentInputs {
	readonly Name: string;
	readonly Tags?: (any | undefined) | undefined;
	readonly LogicalId: string;
}
export class ApplicationSettings
	extends CfnResource<ApplicationSettingsComponentInputs>
	implements ApplicationSettingsComponentOutputs
{
	constructor(entity: ADKEntity, options: ApplicationSettingsComponentInputs) {
		super(entity, options.LogicalId, "AWS::Pinpoint::ApplicationSettings", options);
	}
}
export interface ApplicationSettingsComponentOutputs {}
export interface ApplicationSettingsComponentInputs {
	readonly ApplicationId: string;
	readonly CampaignHook?: (CampaignHook | undefined) | undefined;
	readonly CloudWatchMetricsEnabled?: (boolean | undefined) | undefined;
	readonly Limits?: (Limits | undefined) | undefined;
	readonly QuietTime?: (QuietTime | undefined) | undefined;
	readonly LogicalId: string;
}
export class BaiduChannel extends CfnResource<BaiduChannelComponentInputs> implements BaiduChannelComponentOutputs {
	constructor(entity: ADKEntity, options: BaiduChannelComponentInputs) {
		super(entity, options.LogicalId, "AWS::Pinpoint::BaiduChannel", options);
	}
}
export interface BaiduChannelComponentOutputs {}
export interface BaiduChannelComponentInputs {
	readonly ApiKey: string;
	readonly ApplicationId: string;
	readonly SecretKey: string;
	readonly Enabled?: (boolean | undefined) | undefined;
	readonly LogicalId: string;
}
export class Campaign extends CfnResource<CampaignComponentInputs> implements CampaignComponentOutputs {
	constructor(entity: ADKEntity, options: CampaignComponentInputs) {
		super(entity, options.LogicalId, "AWS::Pinpoint::Campaign", options);
	}
	public readonly Arn: string;
	public readonly CampaignId: string;
}
export interface CampaignComponentOutputs {
	readonly Arn: string;
	readonly CampaignId: string;
}
export interface CampaignComponentInputs {
	readonly ApplicationId: string;
	readonly Name: string;
	readonly Schedule: Schedule;
	readonly SegmentId: string;
	readonly AdditionalTreatments?: (WriteTreatmentResource[] | undefined) | undefined;
	readonly CampaignHook?: (CampaignHook | undefined) | undefined;
	readonly CustomDeliveryConfiguration?: (CustomDeliveryConfiguration | undefined) | undefined;
	readonly Description?: (string | undefined) | undefined;
	readonly HoldoutPercent?: (number | undefined) | undefined;
	readonly IsPaused?: (boolean | undefined) | undefined;
	readonly Limits?: (Limits | undefined) | undefined;
	readonly MessageConfiguration?: (MessageConfiguration | undefined) | undefined;
	readonly Priority?: (number | undefined) | undefined;
	readonly SegmentVersion?: (number | undefined) | undefined;
	readonly Tags?: (any | undefined) | undefined;
	readonly TemplateConfiguration?: (TemplateConfiguration | undefined) | undefined;
	readonly TreatmentDescription?: (string | undefined) | undefined;
	readonly TreatmentName?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export class EmailChannel extends CfnResource<EmailChannelComponentInputs> implements EmailChannelComponentOutputs {
	constructor(entity: ADKEntity, options: EmailChannelComponentInputs) {
		super(entity, options.LogicalId, "AWS::Pinpoint::EmailChannel", options);
	}
}
export interface EmailChannelComponentOutputs {}
export interface EmailChannelComponentInputs {
	readonly ApplicationId: string;
	readonly FromAddress: string;
	readonly Identity: string;
	readonly ConfigurationSet?: (string | undefined) | undefined;
	readonly Enabled?: (boolean | undefined) | undefined;
	readonly RoleArn?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export class EmailTemplate extends CfnResource<EmailTemplateComponentInputs> implements EmailTemplateComponentOutputs {
	constructor(entity: ADKEntity, options: EmailTemplateComponentInputs) {
		super(entity, options.LogicalId, "AWS::Pinpoint::EmailTemplate", options);
	}
	public readonly Arn: string;
}
export interface EmailTemplateComponentOutputs {
	readonly Arn: string;
}
export interface EmailTemplateComponentInputs {
	readonly Subject: string;
	readonly TemplateName: string;
	readonly DefaultSubstitutions?: (string | undefined) | undefined;
	readonly HtmlPart?: (string | undefined) | undefined;
	readonly Tags?: (any | undefined) | undefined;
	readonly TemplateDescription?: (string | undefined) | undefined;
	readonly TextPart?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export class EventStream extends CfnResource<EventStreamComponentInputs> implements EventStreamComponentOutputs {
	constructor(entity: ADKEntity, options: EventStreamComponentInputs) {
		super(entity, options.LogicalId, "AWS::Pinpoint::EventStream", options);
	}
}
export interface EventStreamComponentOutputs {}
export interface EventStreamComponentInputs {
	readonly ApplicationId: string;
	readonly DestinationStreamArn: string;
	readonly RoleArn: string;
	readonly LogicalId: string;
}
export class GCMChannel extends CfnResource<GCMChannelComponentInputs> implements GCMChannelComponentOutputs {
	constructor(entity: ADKEntity, options: GCMChannelComponentInputs) {
		super(entity, options.LogicalId, "AWS::Pinpoint::GCMChannel", options);
	}
}
export interface GCMChannelComponentOutputs {}
export interface GCMChannelComponentInputs {
	readonly ApiKey: string;
	readonly ApplicationId: string;
	readonly Enabled?: (boolean | undefined) | undefined;
	readonly LogicalId: string;
}
export class InAppTemplate extends CfnResource<InAppTemplateComponentInputs> implements InAppTemplateComponentOutputs {
	constructor(entity: ADKEntity, options: InAppTemplateComponentInputs) {
		super(entity, options.LogicalId, "AWS::Pinpoint::InAppTemplate", options);
	}
	public readonly Arn: string;
}
export interface InAppTemplateComponentOutputs {
	readonly Arn: string;
}
export interface InAppTemplateComponentInputs {
	readonly TemplateName: string;
	readonly Content?: (InAppMessageContent[] | undefined) | undefined;
	readonly CustomConfig?: (any | undefined) | undefined;
	readonly Layout?: (string | undefined) | undefined;
	readonly Tags?: (any | undefined) | undefined;
	readonly TemplateDescription?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export class PushTemplate extends CfnResource<PushTemplateComponentInputs> implements PushTemplateComponentOutputs {
	constructor(entity: ADKEntity, options: PushTemplateComponentInputs) {
		super(entity, options.LogicalId, "AWS::Pinpoint::PushTemplate", options);
	}
	public readonly Arn: string;
}
export interface PushTemplateComponentOutputs {
	readonly Arn: string;
}
export interface PushTemplateComponentInputs {
	readonly TemplateName: string;
	readonly ADM?: (AndroidPushNotificationTemplate | undefined) | undefined;
	readonly APNS?: (APNSPushNotificationTemplate | undefined) | undefined;
	readonly Baidu?: (AndroidPushNotificationTemplate | undefined) | undefined;
	readonly Default?: (DefaultPushNotificationTemplate | undefined) | undefined;
	readonly DefaultSubstitutions?: (string | undefined) | undefined;
	readonly GCM?: (AndroidPushNotificationTemplate | undefined) | undefined;
	readonly Tags?: (any | undefined) | undefined;
	readonly TemplateDescription?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export class SMSChannel extends CfnResource<SMSChannelComponentInputs> implements SMSChannelComponentOutputs {
	constructor(entity: ADKEntity, options: SMSChannelComponentInputs) {
		super(entity, options.LogicalId, "AWS::Pinpoint::SMSChannel", options);
	}
}
export interface SMSChannelComponentOutputs {}
export interface SMSChannelComponentInputs {
	readonly ApplicationId: string;
	readonly Enabled?: (boolean | undefined) | undefined;
	readonly SenderId?: (string | undefined) | undefined;
	readonly ShortCode?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export class Segment extends CfnResource<SegmentComponentInputs> implements SegmentComponentOutputs {
	constructor(entity: ADKEntity, options: SegmentComponentInputs) {
		super(entity, options.LogicalId, "AWS::Pinpoint::Segment", options);
	}
	public readonly Arn: string;
	public readonly SegmentId: string;
}
export interface SegmentComponentOutputs {
	readonly Arn: string;
	readonly SegmentId: string;
}
export interface SegmentComponentInputs {
	readonly ApplicationId: string;
	readonly Name: string;
	readonly Dimensions?: (SegmentDimensions | undefined) | undefined;
	readonly SegmentGroups?: (SegmentGroups | undefined) | undefined;
	readonly Tags?: (any | undefined) | undefined;
	readonly LogicalId: string;
}
export class SmsTemplate extends CfnResource<SmsTemplateComponentInputs> implements SmsTemplateComponentOutputs {
	constructor(entity: ADKEntity, options: SmsTemplateComponentInputs) {
		super(entity, options.LogicalId, "AWS::Pinpoint::SmsTemplate", options);
	}
	public readonly Arn: string;
}
export interface SmsTemplateComponentOutputs {
	readonly Arn: string;
}
export interface SmsTemplateComponentInputs {
	readonly Body: string;
	readonly TemplateName: string;
	readonly DefaultSubstitutions?: (string | undefined) | undefined;
	readonly Tags?: (any | undefined) | undefined;
	readonly TemplateDescription?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export class VoiceChannel extends CfnResource<VoiceChannelComponentInputs> implements VoiceChannelComponentOutputs {
	constructor(entity: ADKEntity, options: VoiceChannelComponentInputs) {
		super(entity, options.LogicalId, "AWS::Pinpoint::VoiceChannel", options);
	}
}
export interface VoiceChannelComponentOutputs {}
export interface VoiceChannelComponentInputs {
	readonly ApplicationId: string;
	readonly Enabled?: (boolean | undefined) | undefined;
	readonly LogicalId: string;
}
export interface CampaignHook {
	readonly LambdaFunctionName?: (string | undefined) | undefined;
	readonly Mode?: (string | undefined) | undefined;
	readonly WebUrl?: (string | undefined) | undefined;
}
export interface Limits {
	readonly Daily?: (number | undefined) | undefined;
	readonly MaximumDuration?: (number | undefined) | undefined;
	readonly MessagesPerSecond?: (number | undefined) | undefined;
	readonly Total?: (number | undefined) | undefined;
}
export interface QuietTime {
	readonly End: string;
	readonly Start: string;
}
export interface AttributeDimension {
	readonly AttributeType?: (string | undefined) | undefined;
	readonly Values?: (string[] | undefined) | undefined;
}
export interface CampaignCustomMessage {
	readonly Data?: (string | undefined) | undefined;
}
export interface CampaignEmailMessage {
	readonly Body?: (string | undefined) | undefined;
	readonly FromAddress?: (string | undefined) | undefined;
	readonly HtmlBody?: (string | undefined) | undefined;
	readonly Title?: (string | undefined) | undefined;
}
export interface CampaignEventFilter {
	readonly Dimensions?: (EventDimensions | undefined) | undefined;
	readonly FilterType?: (string | undefined) | undefined;
}
export interface CampaignInAppMessage {
	readonly Content?: (InAppMessageContent[] | undefined) | undefined;
	readonly CustomConfig?: (any | undefined) | undefined;
	readonly Layout?: (string | undefined) | undefined;
}
export interface CampaignSmsMessage {
	readonly Body?: (string | undefined) | undefined;
	readonly EntityId?: (string | undefined) | undefined;
	readonly MessageType?: (string | undefined) | undefined;
	readonly OriginationNumber?: (string | undefined) | undefined;
	readonly SenderId?: (string | undefined) | undefined;
	readonly TemplateId?: (string | undefined) | undefined;
}
export interface CustomDeliveryConfiguration {
	readonly DeliveryUri?: (string | undefined) | undefined;
	readonly EndpointTypes?: (string[] | undefined) | undefined;
}
export interface DefaultButtonConfiguration {
	readonly BackgroundColor?: (string | undefined) | undefined;
	readonly BorderRadius?: (number | undefined) | undefined;
	readonly ButtonAction?: (string | undefined) | undefined;
	readonly Link?: (string | undefined) | undefined;
	readonly Text?: (string | undefined) | undefined;
	readonly TextColor?: (string | undefined) | undefined;
}
export interface EventDimensions {
	readonly Attributes?: (any | undefined) | undefined;
	readonly EventType?: (SetDimension | undefined) | undefined;
	readonly Metrics?: (any | undefined) | undefined;
}
export interface InAppMessageBodyConfig {
	readonly Alignment?: (string | undefined) | undefined;
	readonly Body?: (string | undefined) | undefined;
	readonly TextColor?: (string | undefined) | undefined;
}
export interface InAppMessageButton {
	readonly Android?: (OverrideButtonConfiguration | undefined) | undefined;
	readonly DefaultConfig?: (DefaultButtonConfiguration | undefined) | undefined;
	readonly IOS?: (OverrideButtonConfiguration | undefined) | undefined;
	readonly Web?: (OverrideButtonConfiguration | undefined) | undefined;
}
export interface InAppMessageContent {
	readonly BackgroundColor?: (string | undefined) | undefined;
	readonly BodyConfig?: (InAppMessageBodyConfig | undefined) | undefined;
	readonly HeaderConfig?: (InAppMessageHeaderConfig | undefined) | undefined;
	readonly ImageUrl?: (string | undefined) | undefined;
	readonly PrimaryBtn?: (InAppMessageButton | undefined) | undefined;
	readonly SecondaryBtn?: (InAppMessageButton | undefined) | undefined;
}
export interface InAppMessageHeaderConfig {
	readonly Alignment?: (string | undefined) | undefined;
	readonly Header?: (string | undefined) | undefined;
	readonly TextColor?: (string | undefined) | undefined;
}
export interface Message {
	readonly Action?: (string | undefined) | undefined;
	readonly Body?: (string | undefined) | undefined;
	readonly ImageIconUrl?: (string | undefined) | undefined;
	readonly ImageSmallIconUrl?: (string | undefined) | undefined;
	readonly ImageUrl?: (string | undefined) | undefined;
	readonly JsonBody?: (string | undefined) | undefined;
	readonly MediaUrl?: (string | undefined) | undefined;
	readonly RawContent?: (string | undefined) | undefined;
	readonly SilentPush?: (boolean | undefined) | undefined;
	readonly TimeToLive?: (number | undefined) | undefined;
	readonly Title?: (string | undefined) | undefined;
	readonly Url?: (string | undefined) | undefined;
}
export interface MessageConfiguration {
	readonly ADMMessage?: (Message | undefined) | undefined;
	readonly APNSMessage?: (Message | undefined) | undefined;
	readonly BaiduMessage?: (Message | undefined) | undefined;
	readonly CustomMessage?: (CampaignCustomMessage | undefined) | undefined;
	readonly DefaultMessage?: (Message | undefined) | undefined;
	readonly EmailMessage?: (CampaignEmailMessage | undefined) | undefined;
	readonly GCMMessage?: (Message | undefined) | undefined;
	readonly InAppMessage?: (CampaignInAppMessage | undefined) | undefined;
	readonly SMSMessage?: (CampaignSmsMessage | undefined) | undefined;
}
export interface MetricDimension {
	readonly ComparisonOperator?: (string | undefined) | undefined;
	readonly Value?: (number | undefined) | undefined;
}
export interface OverrideButtonConfiguration {
	readonly ButtonAction?: (string | undefined) | undefined;
	readonly Link?: (string | undefined) | undefined;
}
export interface Schedule {
	readonly EndTime?: (string | undefined) | undefined;
	readonly EventFilter?: (CampaignEventFilter | undefined) | undefined;
	readonly Frequency?: (string | undefined) | undefined;
	readonly IsLocalTime?: (boolean | undefined) | undefined;
	readonly QuietTime?: (QuietTime | undefined) | undefined;
	readonly StartTime?: (string | undefined) | undefined;
	readonly TimeZone?: (string | undefined) | undefined;
}
export interface SetDimension {
	readonly DimensionType?: (string | undefined) | undefined;
	readonly Values?: (string[] | undefined) | undefined;
}
export interface Template {
	readonly Name?: (string | undefined) | undefined;
	readonly Version?: (string | undefined) | undefined;
}
export interface TemplateConfiguration {
	readonly EmailTemplate?: (Template | undefined) | undefined;
	readonly PushTemplate?: (Template | undefined) | undefined;
	readonly SMSTemplate?: (Template | undefined) | undefined;
	readonly VoiceTemplate?: (Template | undefined) | undefined;
}
export interface WriteTreatmentResource {
	readonly CustomDeliveryConfiguration?: (CustomDeliveryConfiguration | undefined) | undefined;
	readonly MessageConfiguration?: (MessageConfiguration | undefined) | undefined;
	readonly Schedule?: (Schedule | undefined) | undefined;
	readonly SizePercent?: (number | undefined) | undefined;
	readonly TemplateConfiguration?: (TemplateConfiguration | undefined) | undefined;
	readonly TreatmentDescription?: (string | undefined) | undefined;
	readonly TreatmentName?: (string | undefined) | undefined;
}
export interface BodyConfig {
	readonly Alignment?: (string | undefined) | undefined;
	readonly Body?: (string | undefined) | undefined;
	readonly TextColor?: (string | undefined) | undefined;
}
export interface ButtonConfig {
	readonly Android?: (OverrideButtonConfiguration | undefined) | undefined;
	readonly DefaultConfig?: (DefaultButtonConfiguration | undefined) | undefined;
	readonly IOS?: (OverrideButtonConfiguration | undefined) | undefined;
	readonly Web?: (OverrideButtonConfiguration | undefined) | undefined;
}
export interface HeaderConfig {
	readonly Alignment?: (string | undefined) | undefined;
	readonly Header?: (string | undefined) | undefined;
	readonly TextColor?: (string | undefined) | undefined;
}
export interface APNSPushNotificationTemplate {
	readonly Action?: (string | undefined) | undefined;
	readonly Body?: (string | undefined) | undefined;
	readonly MediaUrl?: (string | undefined) | undefined;
	readonly Sound?: (string | undefined) | undefined;
	readonly Title?: (string | undefined) | undefined;
	readonly Url?: (string | undefined) | undefined;
}
export interface AndroidPushNotificationTemplate {
	readonly Action?: (string | undefined) | undefined;
	readonly Body?: (string | undefined) | undefined;
	readonly ImageIconUrl?: (string | undefined) | undefined;
	readonly ImageUrl?: (string | undefined) | undefined;
	readonly SmallImageIconUrl?: (string | undefined) | undefined;
	readonly Sound?: (string | undefined) | undefined;
	readonly Title?: (string | undefined) | undefined;
	readonly Url?: (string | undefined) | undefined;
}
export interface DefaultPushNotificationTemplate {
	readonly Action?: (string | undefined) | undefined;
	readonly Body?: (string | undefined) | undefined;
	readonly Sound?: (string | undefined) | undefined;
	readonly Title?: (string | undefined) | undefined;
	readonly Url?: (string | undefined) | undefined;
}
export interface Behavior {
	readonly Recency?: (Recency | undefined) | undefined;
}
export interface Coordinates {
	readonly Latitude: number;
	readonly Longitude: number;
}
export interface Demographic {
	readonly AppVersion?: (SetDimension | undefined) | undefined;
	readonly Channel?: (SetDimension | undefined) | undefined;
	readonly DeviceType?: (SetDimension | undefined) | undefined;
	readonly Make?: (SetDimension | undefined) | undefined;
	readonly Model?: (SetDimension | undefined) | undefined;
	readonly Platform?: (SetDimension | undefined) | undefined;
}
export interface GPSPoint {
	readonly Coordinates: Coordinates;
	readonly RangeInKilometers: number;
}
export interface Groups {
	readonly Dimensions?: (SegmentDimensions[] | undefined) | undefined;
	readonly SourceSegments?: (SourceSegments[] | undefined) | undefined;
	readonly SourceType?: (string | undefined) | undefined;
	readonly Type?: (string | undefined) | undefined;
}
export interface Location {
	readonly Country?: (SetDimension | undefined) | undefined;
	readonly GPSPoint?: (GPSPoint | undefined) | undefined;
}
export interface Recency {
	readonly Duration: string;
	readonly RecencyType: string;
}
export interface SegmentDimensions {
	readonly Attributes?: (any | undefined) | undefined;
	readonly Behavior?: (Behavior | undefined) | undefined;
	readonly Demographic?: (Demographic | undefined) | undefined;
	readonly Location?: (Location | undefined) | undefined;
	readonly Metrics?: (any | undefined) | undefined;
	readonly UserAttributes?: (any | undefined) | undefined;
}
export interface SegmentGroups {
	readonly Groups?: (Groups[] | undefined) | undefined;
	readonly Include?: (string | undefined) | undefined;
}
export interface SourceSegments {
	readonly Id: string;
	readonly Version?: (number | undefined) | undefined;
}
export default {
	ADMChannel: ADMChannel,
	APNSChannel: APNSChannel,
	APNSSandboxChannel: APNSSandboxChannel,
	APNSVoipChannel: APNSVoipChannel,
	APNSVoipSandboxChannel: APNSVoipSandboxChannel,
	App: App,
	ApplicationSettings: ApplicationSettings,
	BaiduChannel: BaiduChannel,
	Campaign: Campaign,
	EmailChannel: EmailChannel,
	EmailTemplate: EmailTemplate,
	EventStream: EventStream,
	GCMChannel: GCMChannel,
	InAppTemplate: InAppTemplate,
	PushTemplate: PushTemplate,
	SMSChannel: SMSChannel,
	Segment: Segment,
	SmsTemplate: SmsTemplate,
	VoiceChannel: VoiceChannel,
};
