import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class botServices extends ArmResource<botServicesComponentInputs> implements botServicesComponentOutputs {
	constructor(entity: ADKEntity, options: botServicesComponentInputs) {
		super(entity, options.name, "Microsoft.BotService/botServices", "2018-07-12", options);
	}
	public readonly apiVersion: "2018-07-12";
	public readonly id: string;
	public readonly type: "Microsoft.BotService/botServices";
}
export interface botServicesComponentOutputs {
	readonly apiVersion: "2018-07-12";
	readonly id: string;
	readonly type: "Microsoft.BotService/botServices";
}
export interface botServicesComponentInputs {
	readonly etag?: string | undefined;
	readonly kind?: ("bot" | "designer" | "function" | "sdk") | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: BotProperties | undefined;
	readonly sku?: Sku | undefined;
	readonly tags?: ResourceTags | undefined;
}
export class botServices_channels
	extends ArmResource<botServices_channelsComponentInputs>
	implements botServices_channelsComponentOutputs
{
	constructor(entity: ADKEntity, options: botServices_channelsComponentInputs) {
		super(entity, options.name, "Microsoft.BotService/botServices/channels", "2018-07-12", options);
	}
	public readonly apiVersion: "2018-07-12";
	public readonly id: string;
	public readonly type: "Microsoft.BotService/botServices/channels";
}
export interface botServices_channelsComponentOutputs {
	readonly apiVersion: "2018-07-12";
	readonly id: string;
	readonly type: "Microsoft.BotService/botServices/channels";
}
export interface botServices_channelsComponentInputs {
	readonly etag?: string | undefined;
	readonly kind?: ("bot" | "designer" | "function" | "sdk") | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: Channel | undefined;
	readonly sku?: Sku | undefined;
	readonly tags?: ResourceTags | undefined;
}
export class botServices_Connections
	extends ArmResource<botServices_ConnectionsComponentInputs>
	implements botServices_ConnectionsComponentOutputs
{
	constructor(entity: ADKEntity, options: botServices_ConnectionsComponentInputs) {
		super(entity, options.name, "Microsoft.BotService/botServices/Connections", "2018-07-12", options);
	}
	public readonly apiVersion: "2018-07-12";
	public readonly id: string;
	public readonly type: "Microsoft.BotService/botServices/Connections";
}
export interface botServices_ConnectionsComponentOutputs {
	readonly apiVersion: "2018-07-12";
	readonly id: string;
	readonly type: "Microsoft.BotService/botServices/Connections";
}
export interface botServices_ConnectionsComponentInputs {
	readonly etag?: string | undefined;
	readonly kind?: ("bot" | "designer" | "function" | "sdk") | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: ConnectionSettingProperties | undefined;
	readonly sku?: Sku | undefined;
	readonly tags?: ResourceTags | undefined;
}
export class enterpriseChannels
	extends ArmResource<enterpriseChannelsComponentInputs>
	implements enterpriseChannelsComponentOutputs
{
	constructor(entity: ADKEntity, options: enterpriseChannelsComponentInputs) {
		super(entity, options.name, "Microsoft.BotService/enterpriseChannels", "2018-07-12", options);
	}
	public readonly apiVersion: "2018-07-12";
	public readonly id: string;
	public readonly type: "Microsoft.BotService/enterpriseChannels";
}
export interface enterpriseChannelsComponentOutputs {
	readonly apiVersion: "2018-07-12";
	readonly id: string;
	readonly type: "Microsoft.BotService/enterpriseChannels";
}
export interface enterpriseChannelsComponentInputs {
	readonly etag?: string | undefined;
	readonly kind?: ("bot" | "designer" | "function" | "sdk") | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: EnterpriseChannelProperties | undefined;
	readonly sku?: Sku | undefined;
	readonly tags?: ResourceTags | undefined;
}
export function listChannelWithKeys(resource: botServices_channels): BotChannel {
	if (resource.apiVersion !== "2018-07-12") {
		throw new Error(`listChannelWithKeys is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.BotService/botServices/channels") {
		throw new Error(`listChannelWithKeys is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export function listWithSecrets(resource: botServices_Connections): ConnectionSetting {
	if (resource.apiVersion !== "2018-07-12") {
		throw new Error(`listWithSecrets is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.BotService/botServices/Connections") {
		throw new Error(`listWithSecrets is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export interface BotChannel {
	readonly etag?: string | undefined;
	readonly id?: string | undefined;
	readonly kind?: ("bot" | "designer" | "function" | "sdk") | undefined;
	readonly location?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: Channel | undefined;
	readonly sku?: Sku | undefined;
	readonly tags?: ResourceTags | undefined;
	readonly type?: string | undefined;
}
export interface BotProperties {
	readonly configuredChannels?: string[] | undefined;
	readonly description?: string | undefined;
	readonly developerAppInsightKey?: string | undefined;
	readonly developerAppInsightsApiKey?: string | undefined;
	readonly developerAppInsightsApplicationId?: string | undefined;
	readonly displayName: string;
	readonly enabledChannels?: string[] | undefined;
	readonly endpoint: string;
	readonly endpointVersion?: string | undefined;
	readonly iconUrl?: string | undefined;
	readonly luisAppIds?: string[] | undefined;
	readonly luisKey?: string | undefined;
	readonly msaAppId: string;
}
export interface Channel {}
export interface ConnectionSetting {
	readonly etag?: string | undefined;
	readonly id?: string | undefined;
	readonly kind?: ("bot" | "designer" | "function" | "sdk") | undefined;
	readonly location?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: ConnectionSettingProperties | undefined;
	readonly sku?: Sku | undefined;
	readonly tags?: ResourceTags | undefined;
	readonly type?: string | undefined;
}
export interface ConnectionSettingParameter {
	readonly key?: string | undefined;
	readonly value?: string | undefined;
}
export interface ConnectionSettingProperties {
	readonly clientId?: string | undefined;
	readonly clientSecret?: string | undefined;
	readonly parameters?: ConnectionSettingParameter[] | undefined;
	readonly scopes?: string | undefined;
	readonly serviceProviderDisplayName?: string | undefined;
	readonly serviceProviderId?: string | undefined;
	readonly settingId?: string | undefined;
}
export interface DirectLineChannelProperties {
	readonly sites?: DirectLineSite[] | undefined;
}
export interface DirectLineSite {
	readonly isEnabled: boolean;
	readonly isSecureSiteEnabled?: boolean | undefined;
	readonly isV1Enabled: boolean;
	readonly isV3Enabled: boolean;
	readonly key?: string | undefined;
	readonly key2?: string | undefined;
	readonly siteId?: string | undefined;
	readonly siteName: string;
	readonly trustedOrigins?: string[] | undefined;
}
export interface EmailChannelProperties {
	readonly emailAddress: string;
	readonly isEnabled: boolean;
	readonly password: string;
}
export interface EnterpriseChannelNode {
	readonly azureLocation: string;
	readonly azureSku: string;
	readonly id?: string | undefined;
	readonly name: string;
	readonly state?:
		| (
				| "CreateFailed"
				| "Creating"
				| "DeleteFailed"
				| "Deleting"
				| "StartFailed"
				| "Started"
				| "Starting"
				| "StopFailed"
				| "Stopped"
				| "Stopping"
		  )
		| undefined;
}
export interface EnterpriseChannelProperties {
	readonly nodes: EnterpriseChannelNode[];
	readonly state?:
		| (
				| "CreateFailed"
				| "Creating"
				| "DeleteFailed"
				| "Deleting"
				| "StartFailed"
				| "Started"
				| "Starting"
				| "StopFailed"
				| "Stopped"
				| "Stopping"
		  )
		| undefined;
}
export interface FacebookChannelProperties {
	readonly appId: string;
	readonly appSecret: string;
	readonly callbackUrl?: string | undefined;
	readonly isEnabled: boolean;
	readonly pages?: FacebookPage[] | undefined;
	readonly verifyToken?: string | undefined;
}
export interface FacebookPage {
	readonly accessToken: string;
	readonly id: string;
}
export interface KikChannelProperties {
	readonly apiKey: string;
	readonly isEnabled: boolean;
	readonly isValidated?: boolean | undefined;
	readonly userName: string;
}
export interface MsTeamsChannelProperties {
	readonly callingWebHook?: string | undefined;
	readonly enableCalling?: boolean | undefined;
	readonly isEnabled: boolean;
}
export interface ResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface Sku {
	readonly name: "F0" | "S1";
	readonly tier?: ("Free" | "Standard") | undefined;
}
export interface SkypeChannelProperties {
	readonly callingWebHook?: string | undefined;
	readonly enableCalling?: boolean | undefined;
	readonly enableGroups?: boolean | undefined;
	readonly enableMediaCards?: boolean | undefined;
	readonly enableMessaging?: boolean | undefined;
	readonly enableScreenSharing?: boolean | undefined;
	readonly enableVideo?: boolean | undefined;
	readonly groupsMode?: string | undefined;
	readonly isEnabled: boolean;
}
export interface SlackChannelProperties {
	readonly clientId: string;
	readonly clientSecret: string;
	readonly isEnabled: boolean;
	readonly isValidated?: boolean | undefined;
	readonly landingPageUrl?: string | undefined;
	readonly lastSubmissionId?: string | undefined;
	readonly redirectAction?: string | undefined;
	readonly registerBeforeOAuthFlow?: boolean | undefined;
	readonly verificationToken: string;
}
export interface SmsChannelProperties {
	readonly accountSID: string;
	readonly authToken: string;
	readonly isEnabled: boolean;
	readonly isValidated?: boolean | undefined;
	readonly phone: string;
}
export interface TelegramChannelProperties {
	readonly accessToken: string;
	readonly isEnabled: boolean;
	readonly isValidated?: boolean | undefined;
}
export interface WebChatChannelProperties {
	readonly sites?: WebChatSite[] | undefined;
	readonly webChatEmbedCode?: string | undefined;
}
export interface WebChatSite {
	readonly enablePreview: boolean;
	readonly isEnabled: boolean;
	readonly key?: string | undefined;
	readonly key2?: string | undefined;
	readonly siteId?: string | undefined;
	readonly siteName: string;
}
export default {
	botServices: botServices,
	"botServices/channels": botServices_channels,
	"botServices/Connections": botServices_Connections,
	enterpriseChannels: enterpriseChannels,
};
