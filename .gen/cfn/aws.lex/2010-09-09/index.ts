import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class Bot extends CfnResource<BotComponentInputs> implements BotComponentOutputs {
	constructor(entity: ADKEntity, options: BotComponentInputs) {
		super(entity, options.LogicalId, "AWS::Lex::Bot", options);
	}
	public readonly Arn: string;
	public readonly Id: string;
}
export interface BotComponentOutputs {
	readonly Arn: string;
	readonly Id: string;
}
export interface BotComponentInputs {
	readonly DataPrivacy: DataPrivacy;
	readonly IdleSessionTTLInSeconds: number;
	readonly Name: string;
	readonly RoleArn: string;
	readonly AutoBuildBotLocales?: boolean | undefined;
	readonly BotFileS3Location?: S3Location | undefined;
	readonly BotLocales?: BotLocale[] | undefined;
	readonly BotTags?: { key: string; value: string }[] | undefined;
	readonly Description?: string | undefined;
	readonly TestBotAliasSettings?: TestBotAliasSettings | undefined;
	readonly TestBotAliasTags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export class BotAlias extends CfnResource<BotAliasComponentInputs> implements BotAliasComponentOutputs {
	constructor(entity: ADKEntity, options: BotAliasComponentInputs) {
		super(entity, options.LogicalId, "AWS::Lex::BotAlias", options);
	}
	public readonly Arn: string;
	public readonly BotAliasId: string;
	public readonly BotAliasStatus: string;
}
export interface BotAliasComponentOutputs {
	readonly Arn: string;
	readonly BotAliasId: string;
	readonly BotAliasStatus: string;
}
export interface BotAliasComponentInputs {
	readonly BotAliasName: string;
	readonly BotId: string;
	readonly BotAliasLocaleSettings?: BotAliasLocaleSettingsItem[] | undefined;
	readonly BotAliasTags?: { key: string; value: string }[] | undefined;
	readonly BotVersion?: string | undefined;
	readonly ConversationLogSettings?: ConversationLogSettings | undefined;
	readonly Description?: string | undefined;
	readonly SentimentAnalysisSettings?: SentimentAnalysisSettings | undefined;
	readonly LogicalId: string;
}
export class BotVersion extends CfnResource<BotVersionComponentInputs> implements BotVersionComponentOutputs {
	constructor(entity: ADKEntity, options: BotVersionComponentInputs) {
		super(entity, options.LogicalId, "AWS::Lex::BotVersion", options);
	}
	public readonly BotVersion: string;
}
export interface BotVersionComponentOutputs {
	readonly BotVersion: string;
}
export interface BotVersionComponentInputs {
	readonly BotId: string;
	readonly BotVersionLocaleSpecification: BotVersionLocaleSpecification[];
	readonly Description?: string | undefined;
	readonly LogicalId: string;
}
export class ResourcePolicy extends CfnResource<ResourcePolicyComponentInputs> implements ResourcePolicyComponentOutputs {
	constructor(entity: ADKEntity, options: ResourcePolicyComponentInputs) {
		super(entity, options.LogicalId, "AWS::Lex::ResourcePolicy", options);
	}
	public readonly Id: string;
	public readonly RevisionId: string;
}
export interface ResourcePolicyComponentOutputs {
	readonly Id: string;
	readonly RevisionId: string;
}
export interface ResourcePolicyComponentInputs {
	readonly Policy: any;
	readonly ResourceArn: string;
	readonly LogicalId: string;
}
export interface AdvancedRecognitionSetting {
	readonly AudioRecognitionStrategy?: string | undefined;
}
export interface AllowedInputTypes {
	readonly AllowAudioInput: boolean;
	readonly AllowDTMFInput: boolean;
}
export interface AudioAndDTMFInputSpecification {
	readonly AudioSpecification?: AudioSpecification | undefined;
	readonly DTMFSpecification?: DTMFSpecification | undefined;
	readonly StartTimeoutMs: number;
}
export interface AudioLogDestination {
	readonly S3Bucket: S3BucketLogDestination;
}
export interface AudioLogSetting {
	readonly Destination: AudioLogDestination;
	readonly Enabled: boolean;
}
export interface AudioSpecification {
	readonly EndTimeoutMs: number;
	readonly MaxLengthMs: number;
}
export interface BotAliasLocaleSettings {
	readonly CodeHookSpecification?: CodeHookSpecification | undefined;
	readonly Enabled: boolean;
}
export interface BotAliasLocaleSettingsItem {
	readonly BotAliasLocaleSetting: BotAliasLocaleSettings;
	readonly LocaleId: string;
}
export interface BotLocale {
	readonly CustomVocabulary?: CustomVocabulary | undefined;
	readonly Description?: string | undefined;
	readonly Intents?: Intent[] | undefined;
	readonly LocaleId: string;
	readonly NluConfidenceThreshold: number;
	readonly SlotTypes?: SlotType[] | undefined;
	readonly VoiceSettings?: VoiceSettings | undefined;
}
export interface Button {
	readonly Text: string;
	readonly Value: string;
}
export interface CloudWatchLogGroupLogDestination {
	readonly CloudWatchLogGroupArn: string;
	readonly LogPrefix: string;
}
export interface CodeHookSpecification {
	readonly LambdaCodeHook: LambdaCodeHook;
}
export interface ConversationLogSettings {
	readonly AudioLogSettings?: AudioLogSetting[] | undefined;
	readonly TextLogSettings?: TextLogSetting[] | undefined;
}
export interface CustomPayload {
	readonly Value: string;
}
export interface CustomVocabulary {
	readonly CustomVocabularyItems: CustomVocabularyItem[];
}
export interface CustomVocabularyItem {
	readonly Phrase: string;
	readonly Weight?: number | undefined;
}
export interface DTMFSpecification {
	readonly DeletionCharacter: string;
	readonly EndCharacter: string;
	readonly EndTimeoutMs: number;
	readonly MaxLength: number;
}
export interface DataPrivacy {
	readonly ChildDirected: boolean;
}
export interface DialogCodeHookSetting {
	readonly Enabled: boolean;
}
export interface ExternalSourceSetting {
	readonly GrammarSlotTypeSetting?: GrammarSlotTypeSetting | undefined;
}
export interface FulfillmentCodeHookSetting {
	readonly Enabled: boolean;
	readonly FulfillmentUpdatesSpecification?: FulfillmentUpdatesSpecification | undefined;
	readonly PostFulfillmentStatusSpecification?: PostFulfillmentStatusSpecification | undefined;
}
export interface FulfillmentStartResponseSpecification {
	readonly AllowInterrupt?: boolean | undefined;
	readonly DelayInSeconds: number;
	readonly MessageGroups: MessageGroup[];
}
export interface FulfillmentUpdateResponseSpecification {
	readonly AllowInterrupt?: boolean | undefined;
	readonly FrequencyInSeconds: number;
	readonly MessageGroups: MessageGroup[];
}
export interface FulfillmentUpdatesSpecification {
	readonly Active: boolean;
	readonly StartResponse?: FulfillmentStartResponseSpecification | undefined;
	readonly TimeoutInSeconds?: number | undefined;
	readonly UpdateResponse?: FulfillmentUpdateResponseSpecification | undefined;
}
export interface GrammarSlotTypeSetting {
	readonly Source?: GrammarSlotTypeSource | undefined;
}
export interface GrammarSlotTypeSource {
	readonly KmsKeyArn?: string | undefined;
	readonly S3BucketName: string;
	readonly S3ObjectKey: string;
}
export interface ImageResponseCard {
	readonly Buttons?: Button[] | undefined;
	readonly ImageUrl?: string | undefined;
	readonly Subtitle?: string | undefined;
	readonly Title: string;
}
export interface InputContext {
	readonly Name: string;
}
export interface Intent {
	readonly Description?: string | undefined;
	readonly DialogCodeHook?: DialogCodeHookSetting | undefined;
	readonly FulfillmentCodeHook?: FulfillmentCodeHookSetting | undefined;
	readonly InputContexts?: InputContext[] | undefined;
	readonly IntentClosingSetting?: IntentClosingSetting | undefined;
	readonly IntentConfirmationSetting?: IntentConfirmationSetting | undefined;
	readonly KendraConfiguration?: KendraConfiguration | undefined;
	readonly Name: string;
	readonly OutputContexts?: OutputContext[] | undefined;
	readonly ParentIntentSignature?: string | undefined;
	readonly SampleUtterances?: SampleUtterance[] | undefined;
	readonly SlotPriorities?: SlotPriority[] | undefined;
	readonly Slots?: Slot[] | undefined;
}
export interface IntentClosingSetting {
	readonly ClosingResponse: ResponseSpecification;
	readonly IsActive?: boolean | undefined;
}
export interface IntentConfirmationSetting {
	readonly DeclinationResponse: ResponseSpecification;
	readonly IsActive?: boolean | undefined;
	readonly PromptSpecification: PromptSpecification;
}
export interface KendraConfiguration {
	readonly KendraIndex: string;
	readonly QueryFilterString?: string | undefined;
	readonly QueryFilterStringEnabled?: boolean | undefined;
}
export interface LambdaCodeHook {
	readonly CodeHookInterfaceVersion: string;
	readonly LambdaArn: string;
}
export interface Message {
	readonly CustomPayload?: CustomPayload | undefined;
	readonly ImageResponseCard?: ImageResponseCard | undefined;
	readonly PlainTextMessage?: PlainTextMessage | undefined;
	readonly SSMLMessage?: SSMLMessage | undefined;
}
export interface MessageGroup {
	readonly Message: Message;
	readonly Variations?: Message[] | undefined;
}
export interface MultipleValuesSetting {
	readonly AllowMultipleValues?: boolean | undefined;
}
export interface ObfuscationSetting {
	readonly ObfuscationSettingType: string;
}
export interface OutputContext {
	readonly Name: string;
	readonly TimeToLiveInSeconds: number;
	readonly TurnsToLive: number;
}
export interface PlainTextMessage {
	readonly Value: string;
}
export interface PostFulfillmentStatusSpecification {
	readonly FailureResponse?: ResponseSpecification | undefined;
	readonly SuccessResponse?: ResponseSpecification | undefined;
	readonly TimeoutResponse?: ResponseSpecification | undefined;
}
export interface PromptAttemptSpecification {
	readonly AllowInterrupt?: boolean | undefined;
	readonly AllowedInputTypes: AllowedInputTypes;
	readonly AudioAndDTMFInputSpecification?: AudioAndDTMFInputSpecification | undefined;
	readonly TextInputSpecification?: TextInputSpecification | undefined;
}
export interface PromptSpecification {
	readonly AllowInterrupt?: boolean | undefined;
	readonly MaxRetries: number;
	readonly MessageGroupsList: MessageGroup[];
	readonly MessageSelectionStrategy?: string | undefined;
	readonly PromptAttemptsSpecification?: { [key: string]: PromptAttemptSpecification } | undefined;
}
export interface ResponseSpecification {
	readonly AllowInterrupt?: boolean | undefined;
	readonly MessageGroupsList: MessageGroup[];
}
export interface S3BucketLogDestination {
	readonly KmsKeyArn?: string | undefined;
	readonly LogPrefix: string;
	readonly S3BucketArn: string;
}
export interface S3Location {
	readonly S3Bucket: string;
	readonly S3ObjectKey: string;
	readonly S3ObjectVersion?: string | undefined;
}
export interface SSMLMessage {
	readonly Value: string;
}
export interface SampleUtterance {
	readonly Utterance: string;
}
export interface SampleValue {
	readonly Value: string;
}
export interface SentimentAnalysisSettings {
	readonly DetectSentiment: boolean;
}
export interface Slot {
	readonly Description?: string | undefined;
	readonly MultipleValuesSetting?: MultipleValuesSetting | undefined;
	readonly Name: string;
	readonly ObfuscationSetting?: ObfuscationSetting | undefined;
	readonly SlotTypeName: string;
	readonly ValueElicitationSetting: SlotValueElicitationSetting;
}
export interface SlotDefaultValue {
	readonly DefaultValue: string;
}
export interface SlotDefaultValueSpecification {
	readonly DefaultValueList: SlotDefaultValue[];
}
export interface SlotPriority {
	readonly Priority: number;
	readonly SlotName: string;
}
export interface SlotType {
	readonly Description?: string | undefined;
	readonly ExternalSourceSetting?: ExternalSourceSetting | undefined;
	readonly Name: string;
	readonly ParentSlotTypeSignature?: string | undefined;
	readonly SlotTypeValues?: SlotTypeValue[] | undefined;
	readonly ValueSelectionSetting?: SlotValueSelectionSetting | undefined;
}
export interface SlotTypeValue {
	readonly SampleValue: SampleValue;
	readonly Synonyms?: SampleValue[] | undefined;
}
export interface SlotValueElicitationSetting {
	readonly DefaultValueSpecification?: SlotDefaultValueSpecification | undefined;
	readonly PromptSpecification?: PromptSpecification | undefined;
	readonly SampleUtterances?: SampleUtterance[] | undefined;
	readonly SlotConstraint: string;
	readonly WaitAndContinueSpecification?: WaitAndContinueSpecification | undefined;
}
export interface SlotValueRegexFilter {
	readonly Pattern: string;
}
export interface SlotValueSelectionSetting {
	readonly AdvancedRecognitionSetting?: AdvancedRecognitionSetting | undefined;
	readonly RegexFilter?: SlotValueRegexFilter | undefined;
	readonly ResolutionStrategy: string;
}
export interface StillWaitingResponseSpecification {
	readonly AllowInterrupt?: boolean | undefined;
	readonly FrequencyInSeconds: number;
	readonly MessageGroupsList: MessageGroup[];
	readonly TimeoutInSeconds: number;
}
export interface TestBotAliasSettings {
	readonly BotAliasLocaleSettings?: BotAliasLocaleSettingsItem[] | undefined;
	readonly ConversationLogSettings?: ConversationLogSettings | undefined;
	readonly Description?: string | undefined;
	readonly SentimentAnalysisSettings?: SentimentAnalysisSettings | undefined;
}
export interface TextInputSpecification {
	readonly StartTimeoutMs: number;
}
export interface TextLogDestination {
	readonly CloudWatch: CloudWatchLogGroupLogDestination;
}
export interface TextLogSetting {
	readonly Destination: TextLogDestination;
	readonly Enabled: boolean;
}
export interface VoiceSettings {
	readonly Engine?: string | undefined;
	readonly VoiceId: string;
}
export interface WaitAndContinueSpecification {
	readonly ContinueResponse: ResponseSpecification;
	readonly IsActive?: boolean | undefined;
	readonly StillWaitingResponse?: StillWaitingResponseSpecification | undefined;
	readonly WaitingResponse: ResponseSpecification;
}
export interface BotVersionLocaleDetails {
	readonly SourceBotVersion: string;
}
export interface BotVersionLocaleSpecification {
	readonly BotVersionLocaleDetails: BotVersionLocaleDetails;
	readonly LocaleId: string;
}
export default {
	Bot: Bot,
	BotAlias: BotAlias,
	BotVersion: BotVersion,
	ResourcePolicy: ResourcePolicy,
};
