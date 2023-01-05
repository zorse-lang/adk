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
	readonly Enabled?: boolean | undefined;
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
	readonly BundleId?: string | undefined;
	readonly Certificate?: string | undefined;
	readonly DefaultAuthenticationMethod?: string | undefined;
	readonly Enabled?: boolean | undefined;
	readonly PrivateKey?: string | undefined;
	readonly TeamId?: string | undefined;
	readonly TokenKey?: string | undefined;
	readonly TokenKeyId?: string | undefined;
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
	readonly BundleId?: string | undefined;
	readonly Certificate?: string | undefined;
	readonly DefaultAuthenticationMethod?: string | undefined;
	readonly Enabled?: boolean | undefined;
	readonly PrivateKey?: string | undefined;
	readonly TeamId?: string | undefined;
	readonly TokenKey?: string | undefined;
	readonly TokenKeyId?: string | undefined;
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
	readonly BundleId?: string | undefined;
	readonly Certificate?: string | undefined;
	readonly DefaultAuthenticationMethod?: string | undefined;
	readonly Enabled?: boolean | undefined;
	readonly PrivateKey?: string | undefined;
	readonly TeamId?: string | undefined;
	readonly TokenKey?: string | undefined;
	readonly TokenKeyId?: string | undefined;
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
	readonly BundleId?: string | undefined;
	readonly Certificate?: string | undefined;
	readonly DefaultAuthenticationMethod?: string | undefined;
	readonly Enabled?: boolean | undefined;
	readonly PrivateKey?: string | undefined;
	readonly TeamId?: string | undefined;
	readonly TokenKey?: string | undefined;
	readonly TokenKeyId?: string | undefined;
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
	readonly Tags?: any | undefined;
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
	readonly CampaignHook?: CampaignHook | undefined;
	readonly CloudWatchMetricsEnabled?: boolean | undefined;
	readonly Limits?: Limits | undefined;
	readonly QuietTime?: QuietTime | undefined;
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
	readonly Enabled?: boolean | undefined;
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
	readonly AdditionalTreatments?: WriteTreatmentResource[] | undefined;
	readonly CampaignHook?: CampaignHook | undefined;
	readonly CustomDeliveryConfiguration?: CustomDeliveryConfiguration | undefined;
	readonly Description?: string | undefined;
	readonly HoldoutPercent?: number | undefined;
	readonly IsPaused?: boolean | undefined;
	readonly Limits?: Limits | undefined;
	readonly MessageConfiguration?: MessageConfiguration | undefined;
	readonly Priority?: number | undefined;
	readonly SegmentVersion?: number | undefined;
	readonly Tags?: any | undefined;
	readonly TemplateConfiguration?: TemplateConfiguration | undefined;
	readonly TreatmentDescription?: string | undefined;
	readonly TreatmentName?: string | undefined;
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
	readonly ConfigurationSet?: string | undefined;
	readonly Enabled?: boolean | undefined;
	readonly RoleArn?: string | undefined;
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
	readonly DefaultSubstitutions?: string | undefined;
	readonly HtmlPart?: string | undefined;
	readonly Tags?: any | undefined;
	readonly TemplateDescription?: string | undefined;
	readonly TextPart?: string | undefined;
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
	readonly Enabled?: boolean | undefined;
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
	readonly Content?: InAppMessageContent[] | undefined;
	readonly CustomConfig?: any | undefined;
	readonly Layout?: string | undefined;
	readonly Tags?: any | undefined;
	readonly TemplateDescription?: string | undefined;
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
	readonly ADM?: AndroidPushNotificationTemplate | undefined;
	readonly APNS?: APNSPushNotificationTemplate | undefined;
	readonly Baidu?: AndroidPushNotificationTemplate | undefined;
	readonly Default?: DefaultPushNotificationTemplate | undefined;
	readonly DefaultSubstitutions?: string | undefined;
	readonly GCM?: AndroidPushNotificationTemplate | undefined;
	readonly Tags?: any | undefined;
	readonly TemplateDescription?: string | undefined;
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
	readonly Enabled?: boolean | undefined;
	readonly SenderId?: string | undefined;
	readonly ShortCode?: string | undefined;
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
	readonly Dimensions?: SegmentDimensions | undefined;
	readonly SegmentGroups?: SegmentGroups | undefined;
	readonly Tags?: any | undefined;
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
	readonly DefaultSubstitutions?: string | undefined;
	readonly Tags?: any | undefined;
	readonly TemplateDescription?: string | undefined;
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
	readonly Enabled?: boolean | undefined;
	readonly LogicalId: string;
}
export interface CampaignHook {
	readonly LambdaFunctionName?: string | undefined;
	readonly Mode?: string | undefined;
	readonly WebUrl?: string | undefined;
}
export interface Limits {
	readonly Daily?: number | undefined;
	readonly MaximumDuration?: number | undefined;
	readonly MessagesPerSecond?: number | undefined;
	readonly Total?: number | undefined;
}
export interface QuietTime {
	readonly End: string;
	readonly Start: string;
}
export interface AttributeDimension {
	readonly AttributeType?: string | undefined;
	readonly Values?: string[] | undefined;
}
export interface CampaignCustomMessage {
	readonly Data?: string | undefined;
}
export interface CampaignEmailMessage {
	readonly Body?: string | undefined;
	readonly FromAddress?: string | undefined;
	readonly HtmlBody?: string | undefined;
	readonly Title?: string | undefined;
}
export interface CampaignEventFilter {
	readonly Dimensions?: EventDimensions | undefined;
	readonly FilterType?: string | undefined;
}
export interface CampaignInAppMessage {
	readonly Content?: InAppMessageContent[] | undefined;
	readonly CustomConfig?: any | undefined;
	readonly Layout?: string | undefined;
}
export interface CampaignSmsMessage {
	readonly Body?: string | undefined;
	readonly EntityId?: string | undefined;
	readonly MessageType?: string | undefined;
	readonly OriginationNumber?: string | undefined;
	readonly SenderId?: string | undefined;
	readonly TemplateId?: string | undefined;
}
export interface CustomDeliveryConfiguration {
	readonly DeliveryUri?: string | undefined;
	readonly EndpointTypes?: string[] | undefined;
}
export interface DefaultButtonConfiguration {
	readonly BackgroundColor?: string | undefined;
	readonly BorderRadius?: number | undefined;
	readonly ButtonAction?: string | undefined;
	readonly Link?: string | undefined;
	readonly Text?: string | undefined;
	readonly TextColor?: string | undefined;
}
export interface EventDimensions {
	readonly Attributes?: any | undefined;
	readonly EventType?: SetDimension | undefined;
	readonly Metrics?: any | undefined;
}
export interface InAppMessageBodyConfig {
	readonly Alignment?: string | undefined;
	readonly Body?: string | undefined;
	readonly TextColor?: string | undefined;
}
export interface InAppMessageButton {
	readonly Android?: OverrideButtonConfiguration | undefined;
	readonly DefaultConfig?: DefaultButtonConfiguration | undefined;
	readonly IOS?: OverrideButtonConfiguration | undefined;
	readonly Web?: OverrideButtonConfiguration | undefined;
}
export interface InAppMessageContent {
	readonly BackgroundColor?: string | undefined;
	readonly BodyConfig?: InAppMessageBodyConfig | undefined;
	readonly HeaderConfig?: InAppMessageHeaderConfig | undefined;
	readonly ImageUrl?: string | undefined;
	readonly PrimaryBtn?: InAppMessageButton | undefined;
	readonly SecondaryBtn?: InAppMessageButton | undefined;
}
export interface InAppMessageHeaderConfig {
	readonly Alignment?: string | undefined;
	readonly Header?: string | undefined;
	readonly TextColor?: string | undefined;
}
export interface Message {
	readonly Action?: string | undefined;
	readonly Body?: string | undefined;
	readonly ImageIconUrl?: string | undefined;
	readonly ImageSmallIconUrl?: string | undefined;
	readonly ImageUrl?: string | undefined;
	readonly JsonBody?: string | undefined;
	readonly MediaUrl?: string | undefined;
	readonly RawContent?: string | undefined;
	readonly SilentPush?: boolean | undefined;
	readonly TimeToLive?: number | undefined;
	readonly Title?: string | undefined;
	readonly Url?: string | undefined;
}
export interface MessageConfiguration {
	readonly ADMMessage?: Message | undefined;
	readonly APNSMessage?: Message | undefined;
	readonly BaiduMessage?: Message | undefined;
	readonly CustomMessage?: CampaignCustomMessage | undefined;
	readonly DefaultMessage?: Message | undefined;
	readonly EmailMessage?: CampaignEmailMessage | undefined;
	readonly GCMMessage?: Message | undefined;
	readonly InAppMessage?: CampaignInAppMessage | undefined;
	readonly SMSMessage?: CampaignSmsMessage | undefined;
}
export interface MetricDimension {
	readonly ComparisonOperator?: string | undefined;
	readonly Value?: number | undefined;
}
export interface OverrideButtonConfiguration {
	readonly ButtonAction?: string | undefined;
	readonly Link?: string | undefined;
}
export interface Schedule {
	readonly EndTime?: string | undefined;
	readonly EventFilter?: CampaignEventFilter | undefined;
	readonly Frequency?: string | undefined;
	readonly IsLocalTime?: boolean | undefined;
	readonly QuietTime?: QuietTime | undefined;
	readonly StartTime?: string | undefined;
	readonly TimeZone?: string | undefined;
}
export interface SetDimension {
	readonly DimensionType?: string | undefined;
	readonly Values?: string[] | undefined;
}
export interface Template {
	readonly Name?: string | undefined;
	readonly Version?: string | undefined;
}
export interface TemplateConfiguration {
	readonly EmailTemplate?: Template | undefined;
	readonly PushTemplate?: Template | undefined;
	readonly SMSTemplate?: Template | undefined;
	readonly VoiceTemplate?: Template | undefined;
}
export interface WriteTreatmentResource {
	readonly CustomDeliveryConfiguration?: CustomDeliveryConfiguration | undefined;
	readonly MessageConfiguration?: MessageConfiguration | undefined;
	readonly Schedule?: Schedule | undefined;
	readonly SizePercent?: number | undefined;
	readonly TemplateConfiguration?: TemplateConfiguration | undefined;
	readonly TreatmentDescription?: string | undefined;
	readonly TreatmentName?: string | undefined;
}
export interface BodyConfig {
	readonly Alignment?: string | undefined;
	readonly Body?: string | undefined;
	readonly TextColor?: string | undefined;
}
export interface ButtonConfig {
	readonly Android?: OverrideButtonConfiguration | undefined;
	readonly DefaultConfig?: DefaultButtonConfiguration | undefined;
	readonly IOS?: OverrideButtonConfiguration | undefined;
	readonly Web?: OverrideButtonConfiguration | undefined;
}
export interface HeaderConfig {
	readonly Alignment?: string | undefined;
	readonly Header?: string | undefined;
	readonly TextColor?: string | undefined;
}
export interface APNSPushNotificationTemplate {
	readonly Action?: string | undefined;
	readonly Body?: string | undefined;
	readonly MediaUrl?: string | undefined;
	readonly Sound?: string | undefined;
	readonly Title?: string | undefined;
	readonly Url?: string | undefined;
}
export interface AndroidPushNotificationTemplate {
	readonly Action?: string | undefined;
	readonly Body?: string | undefined;
	readonly ImageIconUrl?: string | undefined;
	readonly ImageUrl?: string | undefined;
	readonly SmallImageIconUrl?: string | undefined;
	readonly Sound?: string | undefined;
	readonly Title?: string | undefined;
	readonly Url?: string | undefined;
}
export interface DefaultPushNotificationTemplate {
	readonly Action?: string | undefined;
	readonly Body?: string | undefined;
	readonly Sound?: string | undefined;
	readonly Title?: string | undefined;
	readonly Url?: string | undefined;
}
export interface Behavior {
	readonly Recency?: Recency | undefined;
}
export interface Coordinates {
	readonly Latitude: number;
	readonly Longitude: number;
}
export interface Demographic {
	readonly AppVersion?: SetDimension | undefined;
	readonly Channel?: SetDimension | undefined;
	readonly DeviceType?: SetDimension | undefined;
	readonly Make?: SetDimension | undefined;
	readonly Model?: SetDimension | undefined;
	readonly Platform?: SetDimension | undefined;
}
export interface GPSPoint {
	readonly Coordinates: Coordinates;
	readonly RangeInKilometers: number;
}
export interface Groups {
	readonly Dimensions?: SegmentDimensions[] | undefined;
	readonly SourceSegments?: SourceSegments[] | undefined;
	readonly SourceType?: string | undefined;
	readonly Type?: string | undefined;
}
export interface Location {
	readonly Country?: SetDimension | undefined;
	readonly GPSPoint?: GPSPoint | undefined;
}
export interface Recency {
	readonly Duration: string;
	readonly RecencyType: string;
}
export interface SegmentDimensions {
	readonly Attributes?: any | undefined;
	readonly Behavior?: Behavior | undefined;
	readonly Demographic?: Demographic | undefined;
	readonly Location?: Location | undefined;
	readonly Metrics?: any | undefined;
	readonly UserAttributes?: any | undefined;
}
export interface SegmentGroups {
	readonly Groups?: Groups[] | undefined;
	readonly Include?: string | undefined;
}
export interface SourceSegments {
	readonly Id: string;
	readonly Version?: number | undefined;
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
