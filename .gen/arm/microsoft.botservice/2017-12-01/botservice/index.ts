import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class botServices extends ArmResource<botServicesComponentInputs> implements botServicesComponentOutputs {
	constructor(entity: ADKEntity, options: botServicesComponentInputs) {
		super(entity, options.name, "Microsoft.BotService/botServices", "2017-12-01", options);
	}
	public readonly apiVersion: "2017-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.BotService/botServices";
}
export interface botServicesComponentOutputs {
	readonly apiVersion: "2017-12-01";
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
		super(entity, options.name, "Microsoft.BotService/botServices/channels", "2017-12-01", options);
	}
	public readonly apiVersion: "2017-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.BotService/botServices/channels";
}
export interface botServices_channelsComponentOutputs {
	readonly apiVersion: "2017-12-01";
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
export class botServices_Connections
	extends ArmResource<botServices_ConnectionsComponentInputs>
	implements botServices_ConnectionsComponentOutputs
{
	constructor(entity: ADKEntity, options: botServices_ConnectionsComponentInputs) {
		super(entity, options.name, "Microsoft.BotService/botServices/Connections", "2017-12-01", options);
	}
	public readonly apiVersion: "2017-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.BotService/botServices/Connections";
}
export interface botServices_ConnectionsComponentOutputs {
	readonly apiVersion: "2017-12-01";
	readonly id: string;
	readonly type: "Microsoft.BotService/botServices/Connections";
}
export interface botServices_ConnectionsComponentInputs {
	readonly etag?: string;
	readonly kind?: "bot" | "designer" | "function" | "sdk";
	readonly location?: string;
	readonly name: string;
	readonly properties?: ConnectionSettingProperties;
	readonly sku?: Sku;
	readonly tags?: ResourceTags;
}
export function listChannelWithKeys(resource: botServices_channels): BotChannel {
	if (resource.apiVersion !== "2017-12-01") {
		throw new Error(`listChannelWithKeys is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.BotService/botServices/channels") {
		throw new Error(`listChannelWithKeys is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export function listWithSecrets(resource: botServices_Connections): ConnectionSetting {
	if (resource.apiVersion !== "2017-12-01") {
		throw new Error(`listWithSecrets is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.BotService/botServices/Connections") {
		throw new Error(`listWithSecrets is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
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
	readonly isV1Enabled: boolean;
	readonly isV3Enabled: boolean;
	readonly key?: string;
	readonly key2?: string;
	readonly siteId?: string;
	readonly siteName: string;
}
export interface EmailChannelProperties {
	readonly emailAddress: string;
	readonly isEnabled: boolean;
	readonly password: string;
}
export interface FacebookChannelProperties {
	readonly appId: string;
	readonly appSecret: string;
	readonly callbackUrl?: string;
	readonly isEnabled: boolean;
	readonly pages?: FacebookPage[];
	readonly verifyToken?: string;
}
export interface FacebookPage {
	readonly accessToken: string;
	readonly id: string;
}
export interface KikChannelProperties {
	readonly apiKey: string;
	readonly isEnabled: boolean;
	readonly isValidated?: boolean;
	readonly userName: string;
}
export interface MsTeamsChannelProperties {
	readonly callMode?: string;
	readonly enableCalling?: boolean;
	readonly enableMediaCards?: boolean;
	readonly enableMessaging?: boolean;
	readonly enableVideo?: boolean;
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
	readonly clientId: string;
	readonly clientSecret: string;
	readonly isEnabled: boolean;
	readonly isValidated?: boolean;
	readonly landingPageUrl?: string;
	readonly lastSubmissionId?: string;
	readonly redirectAction?: string;
	readonly registerBeforeOAuthFlow?: boolean;
	readonly verificationToken: string;
}
export interface SmsChannelProperties {
	readonly accountSID: string;
	readonly authToken: string;
	readonly isEnabled: boolean;
	readonly isValidated?: boolean;
	readonly phone: string;
}
export interface TelegramChannelProperties {
	readonly accessToken: string;
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
	"botServices/Connections": botServices_Connections,
};
