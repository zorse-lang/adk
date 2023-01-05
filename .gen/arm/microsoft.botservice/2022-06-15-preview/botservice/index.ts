import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class botServices extends ArmResource<botServicesComponentInputs> implements botServicesComponentOutputs {
	constructor(entity: ADKEntity, options: botServicesComponentInputs) {
		super(entity, options.name, "Microsoft.BotService/botServices", "2022-06-15-preview", options);
	}
	public readonly apiVersion: "2022-06-15-preview";
	public readonly id: string;
	public readonly type: "Microsoft.BotService/botServices";
}
export interface botServicesComponentOutputs {
	readonly apiVersion: "2022-06-15-preview";
	readonly id: string;
	readonly type: "Microsoft.BotService/botServices";
}
export interface botServicesComponentInputs {
	readonly etag?: string;
	readonly kind?: "azurebot" | "bot" | "designer" | "function" | "sdk";
	readonly location?: string;
	readonly name: string;
	readonly properties?: BotProperties;
	readonly sku?: Sku;
	readonly tags?: ResourceTags;
	readonly zones?: string[];
}
export class botServices_channels
	extends ArmResource<botServices_channelsComponentInputs>
	implements botServices_channelsComponentOutputs
{
	constructor(entity: ADKEntity, options: botServices_channelsComponentInputs) {
		super(entity, options.name, "Microsoft.BotService/botServices/channels", "2022-06-15-preview", options);
	}
	public readonly apiVersion: "2022-06-15-preview";
	public readonly id: string;
	public readonly type: "Microsoft.BotService/botServices/channels";
}
export interface botServices_channelsComponentOutputs {
	readonly apiVersion: "2022-06-15-preview";
	readonly id: string;
	readonly type: "Microsoft.BotService/botServices/channels";
}
export interface botServices_channelsComponentInputs {
	readonly etag?: string;
	readonly kind?: "azurebot" | "bot" | "designer" | "function" | "sdk";
	readonly location?: string;
	readonly name: string;
	readonly properties?: Channel;
	readonly sku?: Sku;
	readonly tags?: ResourceTags;
	readonly zones?: string[];
}
export class botServices_connections
	extends ArmResource<botServices_connectionsComponentInputs>
	implements botServices_connectionsComponentOutputs
{
	constructor(entity: ADKEntity, options: botServices_connectionsComponentInputs) {
		super(entity, options.name, "Microsoft.BotService/botServices/connections", "2022-06-15-preview", options);
	}
	public readonly apiVersion: "2022-06-15-preview";
	public readonly id: string;
	public readonly type: "Microsoft.BotService/botServices/connections";
}
export interface botServices_connectionsComponentOutputs {
	readonly apiVersion: "2022-06-15-preview";
	readonly id: string;
	readonly type: "Microsoft.BotService/botServices/connections";
}
export interface botServices_connectionsComponentInputs {
	readonly etag?: string;
	readonly kind?: "azurebot" | "bot" | "designer" | "function" | "sdk";
	readonly location?: string;
	readonly name: string;
	readonly properties?: ConnectionSettingProperties;
	readonly sku?: Sku;
	readonly tags?: ResourceTags;
	readonly zones?: string[];
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
			"2022-06-15-preview",
			options,
		);
	}
	public readonly apiVersion: "2022-06-15-preview";
	public readonly id: string;
	public readonly type: "Microsoft.BotService/botServices/privateEndpointConnections";
}
export interface botServices_privateEndpointConnectionsComponentOutputs {
	readonly apiVersion: "2022-06-15-preview";
	readonly id: string;
	readonly type: "Microsoft.BotService/botServices/privateEndpointConnections";
}
export interface botServices_privateEndpointConnectionsComponentInputs {
	readonly name: string;
	readonly properties?: PrivateEndpointConnectionProperties;
}
export function listChannelWithKeys(resource: botServices_channels): ListChannelWithKeysResponse {
	if (resource.apiVersion !== "2022-06-15-preview") {
		throw new Error(`listChannelWithKeys is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.BotService/botServices/channels") {
		throw new Error(`listChannelWithKeys is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export function listWithSecrets(resource: botServices_connections): ConnectionSetting {
	if (resource.apiVersion !== "2022-06-15-preview") {
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
export interface BotProperties {
	readonly allSettings?: BotPropertiesAllSettings;
	readonly appPasswordHint?: string;
	readonly cmekEncryptionStatus?: string;
	readonly cmekKeyVaultUrl?: string;
	readonly configuredChannels?: string[];
	readonly description?: string;
	readonly developerAppInsightKey?: string;
	readonly developerAppInsightsApiKey?: string;
	readonly developerAppInsightsApplicationId?: string;
	readonly disableLocalAuth?: boolean;
	readonly displayName: string;
	readonly enabledChannels?: string[];
	readonly endpoint: string;
	readonly endpointVersion?: string;
	readonly iconUrl?: string;
	readonly isCmekEnabled?: boolean;
	readonly isDeveloperAppInsightsApiKeySet?: boolean;
	readonly isStreamingSupported?: boolean;
	readonly luisAppIds?: string[];
	readonly luisKey?: string;
	readonly manifestUrl?: string;
	readonly migrationToken?: string;
	readonly msaAppId: string;
	readonly msaAppMSIResourceId?: string;
	readonly msaAppTenantId?: string;
	readonly msaAppType?: "MultiTenant" | "SingleTenant" | "UserAssignedMSI";
	readonly openWithHint?: string;
	readonly parameters?: BotPropertiesParameters;
	readonly privateEndpointConnections?: PrivateEndpointConnection[];
	readonly provisioningState?: string;
	readonly publicNetworkAccess?: "Disabled" | "Enabled";
	readonly publishingCredentials?: string;
	readonly schemaTransformationVersion?: string;
	readonly storageResourceId?: string;
	readonly tenantId?: string;
}
export interface BotPropertiesAllSettings {
	readonly [key: string]: string;
}
export interface BotPropertiesParameters {
	readonly [key: string]: string;
}
export interface Channel {
	readonly etag?: string;
	readonly location?: string;
	readonly provisioningState?: string;
}
export interface ChannelSettings {
	readonly botIconUrl?: string;
	readonly botId?: string;
	readonly channelDisplayName?: string;
	readonly channelId?: string;
	readonly disableLocalAuth?: boolean;
	readonly extensionKey1?: string;
	readonly extensionKey2?: string;
	readonly isEnabled?: boolean;
	readonly sites?: Site[];
}
export interface ConnectionSetting {
	readonly etag?: string;
	readonly id?: string;
	readonly kind?: "azurebot" | "bot" | "designer" | "function" | "sdk";
	readonly location?: string;
	readonly name?: string;
	readonly properties?: ConnectionSettingProperties;
	readonly sku?: Sku;
	readonly tags?: ResourceTags;
	readonly type?: string;
	readonly zones?: string[];
}
export interface ConnectionSettingParameter {
	readonly key?: string;
	readonly value?: string;
}
export interface ConnectionSettingProperties {
	readonly clientId?: string;
	readonly clientSecret?: string;
	readonly id?: string;
	readonly name?: string;
	readonly parameters?: ConnectionSettingParameter[];
	readonly provisioningState?: string;
	readonly scopes?: string;
	readonly serviceProviderDisplayName?: string;
	readonly serviceProviderId?: string;
	readonly settingId?: string;
}
export interface DirectLineChannelProperties {
	readonly DirectLineEmbedCode?: string;
	readonly extensionKey1?: string;
	readonly extensionKey2?: string;
	readonly sites?: DirectLineSite[];
}
export interface DirectLineSite {
	readonly appId?: string;
	readonly eTag?: string;
	readonly isBlockUserUploadEnabled?: boolean;
	readonly isDetailedLoggingEnabled?: boolean;
	readonly isEnabled: boolean;
	readonly isEndpointParametersEnabled?: boolean;
	readonly isNoStorageEnabled?: boolean;
	readonly isSecureSiteEnabled?: boolean;
	readonly isTokenEnabled?: boolean;
	readonly isV1Enabled?: boolean;
	readonly isV3Enabled?: boolean;
	readonly isWebchatPreviewEnabled?: boolean;
	readonly key?: string;
	readonly key2?: string;
	readonly siteId?: string;
	readonly siteName: string;
	readonly trustedOrigins?: string[];
}
export interface DirectLineSpeechChannelProperties {
	readonly cognitiveServiceRegion?: string;
	readonly cognitiveServiceResourceId?: string;
	readonly cognitiveServiceSubscriptionKey?: string;
	readonly customSpeechModelId?: string;
	readonly customVoiceDeploymentId?: string;
	readonly isDefaultBotForCogSvcAccount?: boolean;
	readonly isEnabled?: boolean;
}
export interface EmailChannelProperties {
	readonly authMethod?: number;
	readonly emailAddress: string;
	readonly isEnabled: boolean;
	readonly magicCode?: string;
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
export interface ListChannelWithKeysResponse {
	readonly changedTime?: string;
	readonly entityTag?: string;
	readonly etag?: string;
	readonly id?: string;
	readonly kind?: "azurebot" | "bot" | "designer" | "function" | "sdk";
	readonly location?: string;
	readonly name?: string;
	readonly properties?: Channel;
	readonly provisioningState?: string;
	readonly resource?: Channel;
	readonly setting?: ChannelSettings;
	readonly sku?: Sku;
	readonly tags?: ResourceTags;
	readonly type?: string;
	readonly zones?: string[];
}
export interface MsTeamsChannelProperties {
	readonly acceptedTerms?: boolean;
	readonly callingWebhook?: string;
	readonly deploymentEnvironment?: string;
	readonly enableCalling?: boolean;
	readonly incomingCallRoute?: string;
	readonly isEnabled: boolean;
}
export interface PrivateEndpoint {
	readonly id?: string;
}
export interface PrivateEndpointConnection {
	readonly id?: string;
	readonly name?: string;
	readonly properties?: PrivateEndpointConnectionProperties;
	readonly type?: string;
}
export interface PrivateEndpointConnectionProperties {
	readonly privateEndpoint?: PrivateEndpoint;
	readonly privateLinkServiceConnectionState: PrivateLinkServiceConnectionState;
	readonly provisioningState?: "Creating" | "Deleting" | "Failed" | "Succeeded";
}
export interface PrivateLinkServiceConnectionState {
	readonly actionsRequired?: string;
	readonly description?: string;
	readonly status?: "Approved" | "Pending" | "Rejected";
}
export interface ResourceTags {
	readonly [key: string]: string;
}
export interface Site {
	readonly appId?: string;
	readonly eTag?: string;
	readonly isBlockUserUploadEnabled?: boolean;
	readonly isDetailedLoggingEnabled?: boolean;
	readonly isEnabled: boolean;
	readonly isEndpointParametersEnabled?: boolean;
	readonly isNoStorageEnabled?: boolean;
	readonly isSecureSiteEnabled?: boolean;
	readonly isTokenEnabled?: boolean;
	readonly isV1Enabled?: boolean;
	readonly isV3Enabled?: boolean;
	readonly isWebchatPreviewEnabled?: boolean;
	readonly key?: string;
	readonly key2?: string;
	readonly siteId?: string;
	readonly siteName: string;
	readonly trustedOrigins?: string[];
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
	readonly incomingCallRoute?: string;
	readonly isEnabled: boolean;
}
export interface SlackChannelProperties {
	readonly clientId?: string;
	readonly clientSecret?: string;
	readonly isEnabled: boolean;
	readonly IsValidated?: boolean;
	readonly landingPageUrl?: string;
	readonly lastSubmissionId?: string;
	readonly redirectAction?: string;
	readonly registerBeforeOAuthFlow?: boolean;
	readonly scopes?: string;
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
	readonly appId?: string;
	readonly eTag?: string;
	readonly isBlockUserUploadEnabled?: boolean;
	readonly isDetailedLoggingEnabled?: boolean;
	readonly isEnabled: boolean;
	readonly isEndpointParametersEnabled?: boolean;
	readonly isNoStorageEnabled?: boolean;
	readonly isSecureSiteEnabled?: boolean;
	readonly isTokenEnabled?: boolean;
	readonly isV1Enabled?: boolean;
	readonly isV3Enabled?: boolean;
	readonly isWebchatPreviewEnabled?: boolean;
	readonly key?: string;
	readonly key2?: string;
	readonly siteId?: string;
	readonly siteName: string;
	readonly trustedOrigins?: string[];
}
export default {
	botServices: botServices,
	"botServices/channels": botServices_channels,
	"botServices/connections": botServices_connections,
	"botServices/privateEndpointConnections": botServices_privateEndpointConnections,
};
