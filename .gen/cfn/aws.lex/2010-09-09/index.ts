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
	readonly AutoBuildBotLocales?: (boolean | undefined) | undefined;
	readonly BotFileS3Location?: (S3Location | undefined) | undefined;
	readonly BotLocales?: (BotLocale[] | undefined) | undefined;
	readonly BotTags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly Description?: (string | undefined) | undefined;
	readonly TestBotAliasSettings?: (TestBotAliasSettings | undefined) | undefined;
	readonly TestBotAliasTags?: ({ key: string; value: string }[] | undefined) | undefined;
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
	readonly BotAliasLocaleSettings?: (BotAliasLocaleSettingsItem[] | undefined) | undefined;
	readonly BotAliasTags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly BotVersion?: (string | undefined) | undefined;
	readonly ConversationLogSettings?: (ConversationLogSettings | undefined) | undefined;
	readonly Description?: (string | undefined) | undefined;
	readonly SentimentAnalysisSettings?: (SentimentAnalysisSettings | undefined) | undefined;
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
	readonly Description?: (string | undefined) | undefined;
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
	readonly AudioRecognitionStrategy?: (string | undefined) | undefined;
}
export interface AllowedInputTypes {
	readonly AllowAudioInput: boolean;
	readonly AllowDTMFInput: boolean;
}
export interface AudioAndDTMFInputSpecification {
	readonly AudioSpecification?: (AudioSpecification | undefined) | undefined;
	readonly DTMFSpecification?: (DTMFSpecification | undefined) | undefined;
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
	readonly CodeHookSpecification?: (CodeHookSpecification | undefined) | undefined;
	readonly Enabled: boolean;
}
export interface BotAliasLocaleSettingsItem {
	readonly BotAliasLocaleSetting: BotAliasLocaleSettings;
	readonly LocaleId: string;
}
export interface BotLocale {
	readonly CustomVocabulary?: (CustomVocabulary | undefined) | undefined;
	readonly Description?: (string | undefined) | undefined;
	readonly Intents?: (Intent[] | undefined) | undefined;
	readonly LocaleId: string;
	readonly NluConfidenceThreshold: number;
	readonly SlotTypes?: (SlotType[] | undefined) | undefined;
	readonly VoiceSettings?: (VoiceSettings | undefined) | undefined;
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
	readonly AudioLogSettings?: (AudioLogSetting[] | undefined) | undefined;
	readonly TextLogSettings?: (TextLogSetting[] | undefined) | undefined;
}
export interface CustomPayload {
	readonly Value: string;
}
export interface CustomVocabulary {
	readonly CustomVocabularyItems: CustomVocabularyItem[];
}
export interface CustomVocabularyItem {
	readonly Phrase: string;
	readonly Weight?: (number | undefined) | undefined;
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
	readonly GrammarSlotTypeSetting?: (GrammarSlotTypeSetting | undefined) | undefined;
}
export interface FulfillmentCodeHookSetting {
	readonly Enabled: boolean;
	readonly FulfillmentUpdatesSpecification?: (FulfillmentUpdatesSpecification | undefined) | undefined;
	readonly PostFulfillmentStatusSpecification?: (PostFulfillmentStatusSpecification | undefined) | undefined;
}
export interface FulfillmentStartResponseSpecification {
	readonly AllowInterrupt?: (boolean | undefined) | undefined;
	readonly DelayInSeconds: number;
	readonly MessageGroups: MessageGroup[];
}
export interface FulfillmentUpdateResponseSpecification {
	readonly AllowInterrupt?: (boolean | undefined) | undefined;
	readonly FrequencyInSeconds: number;
	readonly MessageGroups: MessageGroup[];
}
export interface FulfillmentUpdatesSpecification {
	readonly Active: boolean;
	readonly StartResponse?: (FulfillmentStartResponseSpecification | undefined) | undefined;
	readonly TimeoutInSeconds?: (number | undefined) | undefined;
	readonly UpdateResponse?: (FulfillmentUpdateResponseSpecification | undefined) | undefined;
}
export interface GrammarSlotTypeSetting {
	readonly Source?: (GrammarSlotTypeSource | undefined) | undefined;
}
export interface GrammarSlotTypeSource {
	readonly KmsKeyArn?: (string | undefined) | undefined;
	readonly S3BucketName: string;
	readonly S3ObjectKey: string;
}
export interface ImageResponseCard {
	readonly Buttons?: (Button[] | undefined) | undefined;
	readonly ImageUrl?: (string | undefined) | undefined;
	readonly Subtitle?: (string | undefined) | undefined;
	readonly Title: string;
}
export interface InputContext {
	readonly Name: string;
}
export interface Intent {
	readonly Description?: (string | undefined) | undefined;
	readonly DialogCodeHook?: (DialogCodeHookSetting | undefined) | undefined;
	readonly FulfillmentCodeHook?: (FulfillmentCodeHookSetting | undefined) | undefined;
	readonly InputContexts?: (InputContext[] | undefined) | undefined;
	readonly IntentClosingSetting?: (IntentClosingSetting | undefined) | undefined;
	readonly IntentConfirmationSetting?: (IntentConfirmationSetting | undefined) | undefined;
	readonly KendraConfiguration?: (KendraConfiguration | undefined) | undefined;
	readonly Name: string;
	readonly OutputContexts?: (OutputContext[] | undefined) | undefined;
	readonly ParentIntentSignature?: (string | undefined) | undefined;
	readonly SampleUtterances?: (SampleUtterance[] | undefined) | undefined;
	readonly SlotPriorities?: (SlotPriority[] | undefined) | undefined;
	readonly Slots?: (Slot[] | undefined) | undefined;
}
export interface IntentClosingSetting {
	readonly ClosingResponse: ResponseSpecification;
	readonly IsActive?: (boolean | undefined) | undefined;
}
export interface IntentConfirmationSetting {
	readonly DeclinationResponse: ResponseSpecification;
	readonly IsActive?: (boolean | undefined) | undefined;
	readonly PromptSpecification: PromptSpecification;
}
export interface KendraConfiguration {
	readonly KendraIndex: string;
	readonly QueryFilterString?: (string | undefined) | undefined;
	readonly QueryFilterStringEnabled?: (boolean | undefined) | undefined;
}
export interface LambdaCodeHook {
	readonly CodeHookInterfaceVersion: string;
	readonly LambdaArn: string;
}
export interface Message {
	readonly CustomPayload?: (CustomPayload | undefined) | undefined;
	readonly ImageResponseCard?: (ImageResponseCard | undefined) | undefined;
	readonly PlainTextMessage?: (PlainTextMessage | undefined) | undefined;
	readonly SSMLMessage?: (SSMLMessage | undefined) | undefined;
}
export interface MessageGroup {
	readonly Message: Message;
	readonly Variations?: (Message[] | undefined) | undefined;
}
export interface MultipleValuesSetting {
	readonly AllowMultipleValues?: (boolean | undefined) | undefined;
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
	readonly FailureResponse?: (ResponseSpecification | undefined) | undefined;
	readonly SuccessResponse?: (ResponseSpecification | undefined) | undefined;
	readonly TimeoutResponse?: (ResponseSpecification | undefined) | undefined;
}
export interface PromptAttemptSpecification {
	readonly AllowInterrupt?: (boolean | undefined) | undefined;
	readonly AllowedInputTypes: AllowedInputTypes;
	readonly AudioAndDTMFInputSpecification?: (AudioAndDTMFInputSpecification | undefined) | undefined;
	readonly TextInputSpecification?: (TextInputSpecification | undefined) | undefined;
}
export interface PromptSpecification {
	readonly AllowInterrupt?: (boolean | undefined) | undefined;
	readonly MaxRetries: number;
	readonly MessageGroupsList: MessageGroup[];
	readonly MessageSelectionStrategy?: (string | undefined) | undefined;
	readonly PromptAttemptsSpecification?: ({ [key: string]: PromptAttemptSpecification } | undefined) | undefined;
}
export interface ResponseSpecification {
	readonly AllowInterrupt?: (boolean | undefined) | undefined;
	readonly MessageGroupsList: MessageGroup[];
}
export interface S3BucketLogDestination {
	readonly KmsKeyArn?: (string | undefined) | undefined;
	readonly LogPrefix: string;
	readonly S3BucketArn: string;
}
export interface S3Location {
	readonly S3Bucket: string;
	readonly S3ObjectKey: string;
	readonly S3ObjectVersion?: (string | undefined) | undefined;
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
	readonly Description?: (string | undefined) | undefined;
	readonly MultipleValuesSetting?: (MultipleValuesSetting | undefined) | undefined;
	readonly Name: string;
	readonly ObfuscationSetting?: (ObfuscationSetting | undefined) | undefined;
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
	readonly Description?: (string | undefined) | undefined;
	readonly ExternalSourceSetting?: (ExternalSourceSetting | undefined) | undefined;
	readonly Name: string;
	readonly ParentSlotTypeSignature?: (string | undefined) | undefined;
	readonly SlotTypeValues?: (SlotTypeValue[] | undefined) | undefined;
	readonly ValueSelectionSetting?: (SlotValueSelectionSetting | undefined) | undefined;
}
export interface SlotTypeValue {
	readonly SampleValue: SampleValue;
	readonly Synonyms?: (SampleValue[] | undefined) | undefined;
}
export interface SlotValueElicitationSetting {
	readonly DefaultValueSpecification?: (SlotDefaultValueSpecification | undefined) | undefined;
	readonly PromptSpecification?: (PromptSpecification | undefined) | undefined;
	readonly SampleUtterances?: (SampleUtterance[] | undefined) | undefined;
	readonly SlotConstraint: string;
	readonly WaitAndContinueSpecification?: (WaitAndContinueSpecification | undefined) | undefined;
}
export interface SlotValueRegexFilter {
	readonly Pattern: string;
}
export interface SlotValueSelectionSetting {
	readonly AdvancedRecognitionSetting?: (AdvancedRecognitionSetting | undefined) | undefined;
	readonly RegexFilter?: (SlotValueRegexFilter | undefined) | undefined;
	readonly ResolutionStrategy: string;
}
export interface StillWaitingResponseSpecification {
	readonly AllowInterrupt?: (boolean | undefined) | undefined;
	readonly FrequencyInSeconds: number;
	readonly MessageGroupsList: MessageGroup[];
	readonly TimeoutInSeconds: number;
}
export interface TestBotAliasSettings {
	readonly BotAliasLocaleSettings?: (BotAliasLocaleSettingsItem[] | undefined) | undefined;
	readonly ConversationLogSettings?: (ConversationLogSettings | undefined) | undefined;
	readonly Description?: (string | undefined) | undefined;
	readonly SentimentAnalysisSettings?: (SentimentAnalysisSettings | undefined) | undefined;
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
	readonly Engine?: (string | undefined) | undefined;
	readonly VoiceId: string;
}
export interface WaitAndContinueSpecification {
	readonly ContinueResponse: ResponseSpecification;
	readonly IsActive?: (boolean | undefined) | undefined;
	readonly StillWaitingResponse?: (StillWaitingResponseSpecification | undefined) | undefined;
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
