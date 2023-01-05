import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class botServices extends ArmResource<botServicesComponentInputs> implements botServicesComponentOutputs {
	constructor(entity: ADKEntity, options: botServicesComponentInputs) {
		super(entity, options.name, "Microsoft.BotService/botServices", "2020-06-02", options);
	}
	public readonly apiVersion: "2020-06-02";
	public readonly id: string;
	public readonly type: "Microsoft.BotService/botServices";
}
export interface botServicesComponentOutputs {
	readonly apiVersion: "2020-06-02";
	readonly id: string;
	readonly type: "Microsoft.BotService/botServices";
}
export interface botServicesComponentInputs {
	readonly etag?: string;
	readonly kind?: "bot" | "designer" | "function" | "sdk";
	readonly location?: string;
	readonly name: string;
	readonly properties?: BotProperties;
	readonly sku?: Sku;
	readonly tags?: ResourceTags;
}
export class botServices_channels
	extends ArmResource<botServices_channelsComponentInputs>
	implements botServices_channelsComponentOutputs
{
	constructor(entity: ADKEntity, options: botServices_channelsComponentInputs) {
		super(entity, options.name, "Microsoft.BotService/botServices/channels", "2020-06-02", options);
	}
	public readonly apiVersion: "2020-06-02";
	public readonly id: string;
	public readonly type: "Microsoft.BotService/botServices/channels";
}
export interface botServices_channelsComponentOutputs {
	readonly apiVersion: "2020-06-02";
	readonly id: string;
	readonly type: "Microsoft.BotService/botServices/channels";
}
export interface botServices_channelsComponentInputs {
	readonly etag?: string;
	readonly kind?: "bot" | "designer" | "function" | "sdk";
	readonly location?: string;
	readonly name: string;
	readonly properties?: Channel;
	readonly sku?: Sku;
	readonly tags?: ResourceTags;
}
export class botServices_connections
	extends ArmResource<botServices_connectionsComponentInputs>
	implements botServices_connectionsComponentOutputs
{
	constructor(entity: ADKEntity, options: botServices_connectionsComponentInputs) {
		super(entity, options.name, "Microsoft.BotService/botServices/connections", "2020-06-02", options);
	}
	public readonly apiVersion: "2020-06-02";
	public readonly id: string;
	public readonly type: "Microsoft.BotService/botServices/connections";
}
export interface botServices_connectionsComponentOutputs {
	readonly apiVersion: "2020-06-02";
	readonly id: string;
	readonly type: "Microsoft.BotService/botServices/connections";
}
export interface botServices_connectionsComponentInputs {
	readonly etag?: string;
	readonly kind?: "bot" | "designer" | "function" | "sdk";
	readonly location?: string;
	readonly name: string;
	readonly properties?: ConnectionSettingProperties;
	readonly sku?: Sku;
	readonly tags?: ResourceTags;
}
export function listChannelWithKeys(resource: botServices_channels): BotChannel {
	if (resource.apiVersion !== "2020-06-02") {
		throw new Error(`listChannelWithKeys is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.BotService/botServices/channels") {
		throw new Error(`listChannelWithKeys is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export function listWithSecrets(resource: botServices_connections): ConnectionSetting {
	if (resource.apiVersion !== "2020-06-02") {
		throw new Error(`listWithSecrets is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.BotService/botServices/connections") {
		throw new Error(`listWithSecrets is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export interface AlexaChannelProperties {
	readonly alexaSkillId: string;
	readonly isEnabled: boolean;
	readonly serviceEndpointUri?: string;
	readonly urlFragment?: string;
}
export interface BotChannel {
	readonly etag?: string;
	readonly id?: string;
	readonly kind?: "bot" | "designer" | "function" | "sdk";
	readonly location?: string;
	readonly name?: string;
	readonly properties?: Channel;
	readonly sku?: Sku;
	readonly tags?: ResourceTags;
	readonly type?: string;
}
export interface BotProperties {
	readonly cmekKeyVaultUrl?: string;
	readonly configuredChannels?: string[];
	readonly description?: string;
	readonly developerAppInsightKey?: string;
	readonly developerAppInsightsApiKey?: string;
	readonly developerAppInsightsApplicationId?: string;
	readonly displayName: string;
	readonly enabledChannels?: string[];
	readonly endpoint: string;
	readonly endpointVersion?: string;
	readonly iconUrl?: string;
	readonly isCmekEnabled?: boolean;
	readonly luisAppIds?: string[];
	readonly luisKey?: string;
	readonly msaAppId: string;
}
export interface Channel {}
export interface ConnectionSetting {
	readonly etag?: string;
	readonly id?: string;
	readonly kind?: "bot" | "designer" | "function" | "sdk";
	readonly location?: string;
	readonly name?: string;
	readonly properties?: ConnectionSettingProperties;
	readonly sku?: Sku;
	readonly tags?: ResourceTags;
	readonly type?: string;
}
export interface ConnectionSettingParameter {
	readonly key?: string;
	readonly value?: string;
}
export interface ConnectionSettingProperties {
	readonly clientId?: string;
	readonly clientSecret?: string;
	readonly parameters?: ConnectionSettingParameter[];
	readonly scopes?: string;
	readonly serviceProviderDisplayName?: string;
	readonly serviceProviderId?: string;
	readonly settingId?: string;
}
export interface DirectLineChannelProperties {
	readonly sites?: DirectLineSite[];
}
export interface DirectLineSite {
	readonly isEnabled: boolean;
	readonly isSecureSiteEnabled?: boolean;
	readonly isV1Enabled: boolean;
	readonly isV3Enabled: boolean;
	readonly key?: string;
	readonly key2?: string;
	readonly siteId?: string;
	readonly siteName: string;
	readonly trustedOrigins?: string[];
}
export interface DirectLineSpeechChannelProperties {
	readonly cognitiveServicesSubscriptionId: string;
	readonly customSpeechModelId?: string;
	readonly customVoiceDeploymentId?: string;
	readonly isDefaultBotForCogSvcAccount?: boolean;
	readonly isEnabled?: boolean;
}
export interface EmailChannelProperties {
	readonly emailAddress: string;
	readonly isEnabled: boolean;
	readonly password?: string;
}
export interface FacebookChannelProperties {
	readonly appId: string;
	readonly appSecret?: string;
	readonly callbackUrl?: string;
	readonly isEnabled: boolean;
	readonly pages?: FacebookPage[];
	readonly verifyToken?: string;
}
export interface FacebookPage {
	readonly accessToken?: string;
	readonly id: string;
}
export interface KikChannelProperties {
	readonly apiKey?: string;
	readonly isEnabled: boolean;
	readonly isValidated?: boolean;
	readonly userName: string;
}
export interface LineChannelProperties {
	readonly callbackUrl?: string;
	readonly isValidated?: boolean;
	readonly lineRegistrations: LineRegistration[];
}
export interface LineRegistration {
	readonly channelAccessToken?: string;
	readonly channelSecret?: string;
	readonly generatedId?: string;
}
export interface MsTeamsChannelProperties {
	readonly callingWebHook?: string;
	readonly enableCalling?: boolean;
	readonly isEnabled: boolean;
}
export interface ResourceTags {
	readonly [key: string]: string;
}
export interface Sku {
	readonly name: "F0" | "S1";
	readonly tier?: "Free" | "Standard";
}
export interface SkypeChannelProperties {
	readonly callingWebHook?: string;
	readonly enableCalling?: boolean;
	readonly enableGroups?: boolean;
	readonly enableMediaCards?: boolean;
	readonly enableMessaging?: boolean;
	readonly enableScreenSharing?: boolean;
	readonly enableVideo?: boolean;
	readonly groupsMode?: string;
	readonly isEnabled: boolean;
}
export interface SlackChannelProperties {
	readonly clientId?: string;
	readonly clientSecret?: string;
	readonly isEnabled: boolean;
	readonly isValidated?: boolean;
	readonly landingPageUrl?: string;
	readonly lastSubmissionId?: string;
	readonly redirectAction?: string;
	readonly registerBeforeOAuthFlow?: boolean;
	readonly signingSecret?: string;
	readonly verificationToken?: string;
}
export interface SmsChannelProperties {
	readonly accountSID: string;
	readonly authToken?: string;
	readonly isEnabled: boolean;
	readonly isValidated?: boolean;
	readonly phone: string;
}
export interface TelegramChannelProperties {
	readonly accessToken?: string;
	readonly isEnabled: boolean;
	readonly isValidated?: boolean;
}
export interface WebChatChannelProperties {
	readonly sites?: WebChatSite[];
	readonly webChatEmbedCode?: string;
}
export interface WebChatSite {
	readonly enablePreview: boolean;
	readonly isEnabled: boolean;
	readonly key?: string;
	readonly key2?: string;
	readonly siteId?: string;
	readonly siteName: string;
}
export default {
	botServices: botServices,
	"botServices/channels": botServices_channels,
	"botServices/connections": botServices_connections,
};
