import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class accounts extends ArmResource<accountsComponentInputs> implements accountsComponentOutputs {
	constructor(entity: ADKEntity, options: accountsComponentInputs) {
		super(entity, options.name, "Microsoft.CognitiveServices/accounts", "2021-04-30", options);
	}
	public readonly apiVersion: "2021-04-30";
	public readonly id: string;
	public readonly type: "Microsoft.CognitiveServices/accounts";
}
export interface accountsComponentOutputs {
	readonly apiVersion: "2021-04-30";
	readonly id: string;
	readonly type: "Microsoft.CognitiveServices/accounts";
}
export interface accountsComponentInputs {
	readonly etag?: string | undefined;
	readonly identity?: Identity | undefined;
	readonly kind?: string | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: AccountProperties | undefined;
	readonly sku?: Sku | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: AccountTags | undefined;
}
export class accounts_privateEndpointConnections
	extends ArmResource<accounts_privateEndpointConnectionsComponentInputs>
	implements accounts_privateEndpointConnectionsComponentOutputs
{
	constructor(entity: ADKEntity, options: accounts_privateEndpointConnectionsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.CognitiveServices/accounts/privateEndpointConnections",
			"2021-04-30",
			options,
		);
	}
	public readonly apiVersion: "2021-04-30";
	public readonly id: string;
	public readonly type: "Microsoft.CognitiveServices/accounts/privateEndpointConnections";
}
export interface accounts_privateEndpointConnectionsComponentOutputs {
	readonly apiVersion: "2021-04-30";
	readonly id: string;
	readonly type: "Microsoft.CognitiveServices/accounts/privateEndpointConnections";
}
export interface accounts_privateEndpointConnectionsComponentInputs {
	readonly etag?: string | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: PrivateEndpointConnectionProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export class locations_resourceGroups_deletedAccounts
	extends ArmResource<locations_resourceGroups_deletedAccountsComponentInputs>
	implements locations_resourceGroups_deletedAccountsComponentOutputs
{
	constructor(entity: ADKEntity, options: locations_resourceGroups_deletedAccountsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.CognitiveServices/locations/resourceGroups/deletedAccounts",
			"2021-04-30",
			options,
		);
	}
	public readonly apiVersion: "2021-04-30";
	public readonly id: string;
	public readonly type: "Microsoft.CognitiveServices/locations/resourceGroups/deletedAccounts";
}
export interface locations_resourceGroups_deletedAccountsComponentOutputs {
	readonly apiVersion: "2021-04-30";
	readonly id: string;
	readonly type: "Microsoft.CognitiveServices/locations/resourceGroups/deletedAccounts";
}
export interface locations_resourceGroups_deletedAccountsComponentInputs {
	readonly etag?: string | undefined;
	readonly identity?: Identity | undefined;
	readonly kind?: string | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: AccountProperties | undefined;
	readonly sku?: Sku | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: AccountTags | undefined;
}
export function listKeys(resource: accounts): ApiKeys {
	if (resource.apiVersion !== "2021-04-30") {
		throw new Error(`listKeys is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.CognitiveServices/accounts") {
		throw new Error(`listKeys is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export interface AccountProperties {
	readonly allowedFqdnList?: string[] | undefined;
	readonly apiProperties?: ApiProperties | undefined;
	readonly callRateLimit?: CallRateLimit | undefined;
	readonly capabilities?: SkuCapability[] | undefined;
	readonly customSubDomainName?: string | undefined;
	readonly dateCreated?: string | undefined;
	readonly disableLocalAuth?: boolean | undefined;
	readonly encryption?: Encryption | undefined;
	readonly endpoint?: string | undefined;
	readonly endpoints?: AccountPropertiesEndpoints | undefined;
	readonly internalId?: string | undefined;
	readonly isMigrated?: boolean | undefined;
	readonly migrationToken?: string | undefined;
	readonly networkAcls?: NetworkRuleSet | undefined;
	readonly privateEndpointConnections?: PrivateEndpointConnection[] | undefined;
	readonly provisioningState?:
		| ("Accepted" | "Creating" | "Deleting" | "Failed" | "Moving" | "ResolvingDNS" | "Succeeded")
		| undefined;
	readonly publicNetworkAccess?: ("Disabled" | "Enabled") | undefined;
	readonly quotaLimit?: QuotaLimit | undefined;
	readonly restore?: boolean | undefined;
	readonly restrictOutboundNetworkAccess?: boolean | undefined;
	readonly skuChangeInfo?: SkuChangeInfo | undefined;
	readonly userOwnedStorage?: UserOwnedStorage[] | undefined;
}
export interface AccountPropertiesEndpoints {
	readonly "[ key: string ]"?: string | undefined;
}
export interface AccountTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface ApiKeys {
	readonly key1?: string | undefined;
	readonly key2?: string | undefined;
}
export interface ApiProperties {
	readonly aadClientId?: string | undefined;
	readonly aadTenantId?: string | undefined;
	readonly eventHubConnectionString?: string | undefined;
	readonly qnaAzureSearchEndpointId?: string | undefined;
	readonly qnaAzureSearchEndpointKey?: string | undefined;
	readonly qnaRuntimeEndpoint?: string | undefined;
	readonly statisticsEnabled?: boolean | undefined;
	readonly storageAccountConnectionString?: string | undefined;
	readonly superUser?: string | undefined;
	readonly websiteName?: string | undefined;
	readonly "[ key: string ]"?: any | undefined;
}
export interface CallRateLimit {
	readonly count?: number | undefined;
	readonly renewalPeriod?: number | undefined;
	readonly rules?: ThrottlingRule[] | undefined;
}
export interface Encryption {
	readonly keySource?: ("Microsoft.CognitiveServices" | "Microsoft.KeyVault") | undefined;
	readonly keyVaultProperties?: KeyVaultProperties | undefined;
}
export interface Identity {
	readonly principalId?: string | undefined;
	readonly tenantId?: string | undefined;
	readonly type?: ("None" | "SystemAssigned" | "SystemAssigned, UserAssigned") | undefined;
	readonly userAssignedIdentities?: IdentityUserAssignedIdentities | undefined;
}
export interface IdentityUserAssignedIdentities {
	readonly "[ key: string ]"?: UserAssignedIdentity | undefined;
}
export interface IpRule {
	readonly value: string;
}
export interface KeyVaultProperties {
	readonly identityClientId?: string | undefined;
	readonly keyName?: string | undefined;
	readonly keyVaultUri?: string | undefined;
	readonly keyVersion?: string | undefined;
}
export interface NetworkRuleSet {
	readonly defaultAction?: ("Allow" | "Deny") | undefined;
	readonly ipRules?: IpRule[] | undefined;
	readonly virtualNetworkRules?: VirtualNetworkRule[] | undefined;
}
export interface PrivateEndpoint {
	readonly id?: string | undefined;
}
export interface PrivateEndpointConnection {
	readonly etag?: string | undefined;
	readonly id?: string | undefined;
	readonly location?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: PrivateEndpointConnectionProperties | undefined;
	readonly systemData?: SystemData | undefined;
	readonly type?: string | undefined;
}
export interface PrivateEndpointConnectionProperties {
	readonly groupIds?: string[] | undefined;
	readonly privateEndpoint?: PrivateEndpoint | undefined;
	readonly privateLinkServiceConnectionState: PrivateLinkServiceConnectionState;
	readonly provisioningState?: ("Creating" | "Deleting" | "Failed" | "Succeeded") | undefined;
}
export interface PrivateLinkServiceConnectionState {
	readonly actionsRequired?: string | undefined;
	readonly description?: string | undefined;
	readonly status?: ("Approved" | "Pending" | "Rejected") | undefined;
}
export interface QuotaLimit {
	readonly count?: number | undefined;
	readonly renewalPeriod?: number | undefined;
	readonly rules?: ThrottlingRule[] | undefined;
}
export interface RequestMatchPattern {
	readonly method?: string | undefined;
	readonly path?: string | undefined;
}
export interface Sku {
	readonly capacity?: number | undefined;
	readonly family?: string | undefined;
	readonly name: string;
	readonly size?: string | undefined;
	readonly tier?: ("Basic" | "Enterprise" | "Free" | "Premium" | "Standard") | undefined;
}
export interface SkuCapability {
	readonly name?: string | undefined;
	readonly value?: string | undefined;
}
export interface SkuChangeInfo {
	readonly countOfDowngrades?: number | undefined;
	readonly countOfUpgradesAfterDowngrades?: number | undefined;
	readonly lastChangeDate?: string | undefined;
}
export interface SystemData {
	readonly createdAt?: string | undefined;
	readonly createdBy?: string | undefined;
	readonly createdByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
	readonly lastModifiedAt?: string | undefined;
	readonly lastModifiedBy?: string | undefined;
	readonly lastModifiedByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
}
export interface ThrottlingRule {
	readonly count?: number | undefined;
	readonly dynamicThrottlingEnabled?: boolean | undefined;
	readonly key?: string | undefined;
	readonly matchPatterns?: RequestMatchPattern[] | undefined;
	readonly minCount?: number | undefined;
	readonly renewalPeriod?: number | undefined;
}
export interface UserAssignedIdentity {
	readonly clientId?: string | undefined;
	readonly principalId?: string | undefined;
}
export interface UserOwnedStorage {
	readonly identityClientId?: string | undefined;
	readonly resourceId?: string | undefined;
}
export interface VirtualNetworkRule {
	readonly id: string;
	readonly ignoreMissingVnetServiceEndpoint?: boolean | undefined;
	readonly state?: string | undefined;
}
export default {
	accounts: accounts,
	"accounts/privateEndpointConnections": accounts_privateEndpointConnections,
	"locations/resourceGroups/deletedAccounts": locations_resourceGroups_deletedAccounts,
};
