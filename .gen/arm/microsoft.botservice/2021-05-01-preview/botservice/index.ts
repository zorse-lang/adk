import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class botServices extends ArmResource<botServicesComponentInputs> implements botServicesComponentOutputs {
	constructor(entity: ADKEntity, options: botServicesComponentInputs) {
		super(entity, options.name, "Microsoft.BotService/botServices", "2021-05-01-preview", options);
	}
	public readonly apiVersion: "2021-05-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.BotService/botServices";
}
export interface botServicesComponentOutputs {
	readonly apiVersion: "2021-05-01-preview";
	readonly id: string;
	readonly type: "Microsoft.BotService/botServices";
}
export interface botServicesComponentInputs {
	readonly etag?: string | undefined;
	readonly kind?: ("azurebot" | "bot" | "designer" | "function" | "sdk") | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: BotProperties | undefined;
	readonly sku?: Sku | undefined;
	readonly tags?: ResourceTags | undefined;
	readonly zones?: string[] | undefined;
}
export class botServices_channels
	extends ArmResource<botServices_channelsComponentInputs>
	implements botServices_channelsComponentOutputs
{
	constructor(entity: ADKEntity, options: botServices_channelsComponentInputs) {
		super(entity, options.name, "Microsoft.BotService/botServices/channels", "2021-05-01-preview", options);
	}
	public readonly apiVersion: "2021-05-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.BotService/botServices/channels";
}
export interface botServices_channelsComponentOutputs {
	readonly apiVersion: "2021-05-01-preview";
	readonly id: string;
	readonly type: "Microsoft.BotService/botServices/channels";
}
export interface botServices_channelsComponentInputs {
	readonly etag?: string | undefined;
	readonly kind?: ("azurebot" | "bot" | "designer" | "function" | "sdk") | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: Channel | undefined;
	readonly sku?: Sku | undefined;
	readonly tags?: ResourceTags | undefined;
	readonly zones?: string[] | undefined;
}
export class botServices_connections
	extends ArmResource<botServices_connectionsComponentInputs>
	implements botServices_connectionsComponentOutputs
{
	constructor(entity: ADKEntity, options: botServices_connectionsComponentInputs) {
		super(entity, options.name, "Microsoft.BotService/botServices/connections", "2021-05-01-preview", options);
	}
	public readonly apiVersion: "2021-05-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.BotService/botServices/connections";
}
export interface botServices_connectionsComponentOutputs {
	readonly apiVersion: "2021-05-01-preview";
	readonly id: string;
	readonly type: "Microsoft.BotService/botServices/connections";
}
export interface botServices_connectionsComponentInputs {
	readonly etag?: string | undefined;
	readonly kind?: ("azurebot" | "bot" | "designer" | "function" | "sdk") | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: ConnectionSettingProperties | undefined;
	readonly sku?: Sku | undefined;
	readonly tags?: ResourceTags | undefined;
	readonly zones?: string[] | undefined;
}
export class botServices_privateEndpointConnections
	extends ArmResource<botServices_privateEndpointConnectionsComponentInputs>
	implements botServices_privateEndpointConnectionsComponentOutputs
{
	constructor(entity: ADKEntity, options: botServices_privateEndpointConnectionsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.BotService/botServices/privateEndpointConnections",
			"2021-05-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2021-05-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.BotService/botServices/privateEndpointConnections";
}
export interface botServices_privateEndpointConnectionsComponentOutputs {
	readonly apiVersion: "2021-05-01-preview";
	readonly id: string;
	readonly type: "Microsoft.BotService/botServices/privateEndpointConnections";
}
export interface botServices_privateEndpointConnectionsComponentInputs {
	readonly name: string;
	readonly properties?: PrivateEndpointConnectionProperties | undefined;
}
export function listChannelWithKeys(resource: botServices_channels): ListChannelWithKeysResponse {
	if (resource.apiVersion !== "2021-05-01-preview") {
		throw new Error(`listChannelWithKeys is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.BotService/botServices/channels") {
		throw new Error(`listChannelWithKeys is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export function listWithSecrets(resource: botServices_connections): ConnectionSetting {
	if (resource.apiVersion !== "2021-05-01-preview") {
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
	readonly serviceEndpointUri?: string | undefined;
	readonly urlFragment?: string | undefined;
}
export interface BotProperties {
	readonly allSettings?: BotPropertiesAllSettings | undefined;
	readonly appPasswordHint?: string | undefined;
	readonly cmekEncryptionStatus?: string | undefined;
	readonly cmekKeyVaultUrl?: string | undefined;
	readonly configuredChannels?: string[] | undefined;
	readonly description?: string | undefined;
	readonly developerAppInsightKey?: string | undefined;
	readonly developerAppInsightsApiKey?: string | undefined;
	readonly developerAppInsightsApplicationId?: string | undefined;
	readonly disableLocalAuth?: boolean | undefined;
	readonly displayName: string;
	readonly enabledChannels?: string[] | undefined;
	readonly endpoint: string;
	readonly endpointVersion?: string | undefined;
	readonly iconUrl?: string | undefined;
	readonly isCmekEnabled?: boolean | undefined;
	readonly isDeveloperAppInsightsApiKeySet?: boolean | undefined;
	readonly isStreamingSupported?: boolean | undefined;
	readonly luisAppIds?: string[] | undefined;
	readonly luisKey?: string | undefined;
	readonly manifestUrl?: string | undefined;
	readonly migrationToken?: string | undefined;
	readonly msaAppId: string;
	readonly msaAppMSIResourceId?: string | undefined;
	readonly msaAppTenantId?: string | undefined;
	readonly msaAppType?: ("MultiTenant" | "SingleTenant" | "UserAssignedMSI") | undefined;
	readonly openWithHint?: string | undefined;
	readonly parameters?: BotPropertiesParameters | undefined;
	readonly privateEndpointConnections?: PrivateEndpointConnection[] | undefined;
	readonly provisioningState?: string | undefined;
	readonly publicNetworkAccess?: ("Disabled" | "Enabled") | undefined;
	readonly publishingCredentials?: string | undefined;
	readonly schemaTransformationVersion?: string | undefined;
	readonly storageResourceId?: string | undefined;
}
export interface BotPropertiesAllSettings {
	readonly "[ key: string ]"?: string | undefined;
}
export interface BotPropertiesParameters {
	readonly "[ key: string ]"?: string | undefined;
}
export interface Channel {
	readonly etag?: string | undefined;
	readonly location?: string | undefined;
	readonly provisioningState?: string | undefined;
}
export interface ChannelSettings {
	readonly botIconUrl?: string | undefined;
	readonly botId?: string | undefined;
	readonly channelDisplayName?: string | undefined;
	readonly channelId?: string | undefined;
	readonly disableLocalAuth?: boolean | undefined;
	readonly extensionKey1?: string | undefined;
	readonly extensionKey2?: string | undefined;
	readonly isEnabled?: boolean | undefined;
	readonly sites?: Site[] | undefined;
}
export interface ConnectionSetting {
	readonly etag?: string | undefined;
	readonly id?: string | undefined;
	readonly kind?: ("azurebot" | "bot" | "designer" | "function" | "sdk") | undefined;
	readonly location?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: ConnectionSettingProperties | undefined;
	readonly sku?: Sku | undefined;
	readonly tags?: ResourceTags | undefined;
	readonly type?: string | undefined;
	readonly zones?: string[] | undefined;
}
export interface ConnectionSettingParameter {
	readonly key?: string | undefined;
	readonly value?: string | undefined;
}
export interface ConnectionSettingProperties {
	readonly clientId?: string | undefined;
	readonly clientSecret?: string | undefined;
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly parameters?: ConnectionSettingParameter[] | undefined;
	readonly provisioningState?: string | undefined;
	readonly scopes?: string | undefined;
	readonly serviceProviderDisplayName?: string | undefined;
	readonly serviceProviderId?: string | undefined;
	readonly settingId?: string | undefined;
}
export interface DirectLineChannelProperties {
	readonly DirectLineEmbedCode?: string | undefined;
	readonly sites?: DirectLineSite[] | undefined;
}
export interface DirectLineSite {
	readonly isBlockUserUploadEnabled?: boolean | undefined;
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
export interface DirectLineSpeechChannelProperties {
	readonly cognitiveServiceRegion: string;
	readonly cognitiveServiceSubscriptionKey: string;
	readonly customSpeechModelId?: string | undefined;
	readonly customVoiceDeploymentId?: string | undefined;
	readonly isDefaultBotForCogSvcAccount?: boolean | undefined;
	readonly isEnabled?: boolean | undefined;
}
export interface EmailChannelProperties {
	readonly emailAddress: string;
	readonly isEnabled: boolean;
	readonly password?: string | undefined;
}
export interface FacebookChannelProperties {
	readonly appId: string;
	readonly appSecret?: string | undefined;
	readonly callbackUrl?: string | undefined;
	readonly isEnabled: boolean;
	readonly pages?: FacebookPage[] | undefined;
	readonly verifyToken?: string | undefined;
}
export interface FacebookPage {
	readonly accessToken?: string | undefined;
	readonly id: string;
}
export interface KikChannelProperties {
	readonly apiKey?: string | undefined;
	readonly isEnabled: boolean;
	readonly isValidated?: boolean | undefined;
	readonly userName: string;
}
export interface LineChannelProperties {
	readonly callbackUrl?: string | undefined;
	readonly isValidated?: boolean | undefined;
	readonly lineRegistrations: LineRegistration[];
}
export interface LineRegistration {
	readonly channelAccessToken?: string | undefined;
	readonly channelSecret?: string | undefined;
	readonly generatedId?: string | undefined;
}
export interface ListChannelWithKeysResponse {
	readonly changedTime?: string | undefined;
	readonly entityTag?: string | undefined;
	readonly etag?: string | undefined;
	readonly id?: string | undefined;
	readonly kind?: ("azurebot" | "bot" | "designer" | "function" | "sdk") | undefined;
	readonly location?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: Channel | undefined;
	readonly provisioningState?: string | undefined;
	readonly resource?: Channel | undefined;
	readonly setting?: ChannelSettings | undefined;
	readonly sku?: Sku | undefined;
	readonly tags?: ResourceTags | undefined;
	readonly type?: string | undefined;
	readonly zones?: string[] | undefined;
}
export interface MsTeamsChannelProperties {
	readonly acceptedTerms?: boolean | undefined;
	readonly callingWebHook?: string | undefined;
	readonly deploymentEnvironment?: string | undefined;
	readonly enableCalling?: boolean | undefined;
	readonly incomingCallRoute?: string | undefined;
	readonly isEnabled: boolean;
}
export interface PrivateEndpoint {
	readonly id?: string | undefined;
}
export interface PrivateEndpointConnection {
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: PrivateEndpointConnectionProperties | undefined;
	readonly type?: string | undefined;
}
export interface PrivateEndpointConnectionProperties {
	readonly privateEndpoint?: PrivateEndpoint | undefined;
	readonly privateLinkServiceConnectionState: PrivateLinkServiceConnectionState;
	readonly provisioningState?: ("Creating" | "Deleting" | "Failed" | "Succeeded") | undefined;
}
export interface PrivateLinkServiceConnectionState {
	readonly actionsRequired?: string | undefined;
	readonly description?: string | undefined;
	readonly status?: ("Approved" | "Pending" | "Rejected") | undefined;
}
export interface ResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface Site {
	readonly eTag?: string | undefined;
	readonly isBlockUserUploadEnabled?: boolean | undefined;
	readonly isEnabled: boolean;
	readonly isSecureSiteEnabled?: boolean | undefined;
	readonly isTokenEnabled?: boolean | undefined;
	readonly isV1Enabled: boolean;
	readonly isV3Enabled: boolean;
	readonly isWebchatPreviewEnabled: boolean;
	readonly key?: string | undefined;
	readonly key2?: string | undefined;
	readonly siteId?: string | undefined;
	readonly siteName: string;
	readonly trustedOrigins?: string[] | undefined;
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
	readonly incomingCallRoute?: string | undefined;
	readonly isEnabled: boolean;
}
export interface SlackChannelProperties {
	readonly clientId?: string | undefined;
	readonly clientSecret?: string | undefined;
	readonly isEnabled: boolean;
	readonly IsValidated?: boolean | undefined;
	readonly landingPageUrl?: string | undefined;
	readonly lastSubmissionId?: string | undefined;
	readonly redirectAction?: string | undefined;
	readonly registerBeforeOAuthFlow?: boolean | undefined;
	readonly scopes?: string | undefined;
	readonly signingSecret?: string | undefined;
	readonly verificationToken?: string | undefined;
}
export interface SmsChannelProperties {
	readonly accountSID: string;
	readonly authToken?: string | undefined;
	readonly isEnabled: boolean;
	readonly isValidated?: boolean | undefined;
	readonly phone: string;
}
export interface TelegramChannelProperties {
	readonly accessToken?: string | undefined;
	readonly isEnabled: boolean;
	readonly isValidated?: boolean | undefined;
}
export interface WebChatChannelProperties {
	readonly sites?: WebChatSite[] | undefined;
	readonly webChatEmbedCode?: string | undefined;
}
export interface WebChatSite {
	readonly isEnabled: boolean;
	readonly isWebchatPreviewEnabled: boolean;
	readonly key?: string | undefined;
	readonly key2?: string | undefined;
	readonly siteId?: string | undefined;
	readonly siteName: string;
}
export default {
	botServices: botServices,
	"botServices/channels": botServices_channels,
	"botServices/connections": botServices_connections,
	"botServices/privateEndpointConnections": botServices_privateEndpointConnections,
};
