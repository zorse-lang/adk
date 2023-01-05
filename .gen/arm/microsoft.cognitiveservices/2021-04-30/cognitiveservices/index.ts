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
	readonly etag?: string;
	readonly identity?: Identity;
	readonly kind?: string;
	readonly location?: string;
	readonly name: string;
	readonly properties?: AccountProperties;
	readonly sku?: Sku;
	readonly systemData?: SystemData;
	readonly tags?: AccountTags;
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
	readonly etag?: string;
	readonly location?: string;
	readonly name: string;
	readonly properties?: PrivateEndpointConnectionProperties;
	readonly systemData?: SystemData;
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
	readonly etag?: string;
	readonly identity?: Identity;
	readonly kind?: string;
	readonly location?: string;
	readonly name: string;
	readonly properties?: AccountProperties;
	readonly sku?: Sku;
	readonly systemData?: SystemData;
	readonly tags?: AccountTags;
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
	readonly allowedFqdnList?: string[];
	readonly apiProperties?: ApiProperties;
	readonly callRateLimit?: CallRateLimit;
	readonly capabilities?: SkuCapability[];
	readonly customSubDomainName?: string;
	readonly dateCreated?: string;
	readonly disableLocalAuth?: boolean;
	readonly encryption?: Encryption;
	readonly endpoint?: string;
	readonly endpoints?: AccountPropertiesEndpoints;
	readonly internalId?: string;
	readonly isMigrated?: boolean;
	readonly migrationToken?: string;
	readonly networkAcls?: NetworkRuleSet;
	readonly privateEndpointConnections?: PrivateEndpointConnection[];
	readonly provisioningState?:
		| "Accepted"
		| "Creating"
		| "Deleting"
		| "Failed"
		| "Moving"
		| "ResolvingDNS"
		| "Succeeded";
	readonly publicNetworkAccess?: "Disabled" | "Enabled";
	readonly quotaLimit?: QuotaLimit;
	readonly restore?: boolean;
	readonly restrictOutboundNetworkAccess?: boolean;
	readonly skuChangeInfo?: SkuChangeInfo;
	readonly userOwnedStorage?: UserOwnedStorage[];
}
export interface AccountPropertiesEndpoints {
	readonly [key: string]: string;
}
export interface AccountTags {
	readonly [key: string]: string;
}
export interface ApiKeys {
	readonly key1?: string;
	readonly key2?: string;
}
export interface ApiProperties {
	readonly aadClientId?: string;
	readonly aadTenantId?: string;
	readonly eventHubConnectionString?: string;
	readonly qnaAzureSearchEndpointId?: string;
	readonly qnaAzureSearchEndpointKey?: string;
	readonly qnaRuntimeEndpoint?: string;
	readonly statisticsEnabled?: boolean;
	readonly storageAccountConnectionString?: string;
	readonly superUser?: string;
	readonly websiteName?: string;
	readonly [key: string]: any;
}
export interface CallRateLimit {
	readonly count?: number;
	readonly renewalPeriod?: number;
	readonly rules?: ThrottlingRule[];
}
export interface Encryption {
	readonly keySource?: "Microsoft.CognitiveServices" | "Microsoft.KeyVault";
	readonly keyVaultProperties?: KeyVaultProperties;
}
export interface Identity {
	readonly principalId?: string;
	readonly tenantId?: string;
	readonly type?: "None" | "SystemAssigned" | "SystemAssigned, UserAssigned";
	readonly userAssignedIdentities?: IdentityUserAssignedIdentities;
}
export interface IdentityUserAssignedIdentities {
	readonly [key: string]: UserAssignedIdentity;
}
export interface IpRule {
	readonly value: string;
}
export interface KeyVaultProperties {
	readonly identityClientId?: string;
	readonly keyName?: string;
	readonly keyVaultUri?: string;
	readonly keyVersion?: string;
}
export interface NetworkRuleSet {
	readonly defaultAction?: "Allow" | "Deny";
	readonly ipRules?: IpRule[];
	readonly virtualNetworkRules?: VirtualNetworkRule[];
}
export interface PrivateEndpoint {
	readonly id?: string;
}
export interface PrivateEndpointConnection {
	readonly etag?: string;
	readonly id?: string;
	readonly location?: string;
	readonly name?: string;
	readonly properties?: PrivateEndpointConnectionProperties;
	readonly systemData?: SystemData;
	readonly type?: string;
}
export interface PrivateEndpointConnectionProperties {
	readonly groupIds?: string[];
	readonly privateEndpoint?: PrivateEndpoint;
	readonly privateLinkServiceConnectionState: PrivateLinkServiceConnectionState;
	readonly provisioningState?: "Creating" | "Deleting" | "Failed" | "Succeeded";
}
export interface PrivateLinkServiceConnectionState {
	readonly actionsRequired?: string;
	readonly description?: string;
	readonly status?: "Approved" | "Pending" | "Rejected";
}
export interface QuotaLimit {
	readonly count?: number;
	readonly renewalPeriod?: number;
	readonly rules?: ThrottlingRule[];
}
export interface RequestMatchPattern {
	readonly method?: string;
	readonly path?: string;
}
export interface Sku {
	readonly capacity?: number;
	readonly family?: string;
	readonly name: string;
	readonly size?: string;
	readonly tier?: "Basic" | "Enterprise" | "Free" | "Premium" | "Standard";
}
export interface SkuCapability {
	readonly name?: string;
	readonly value?: string;
}
export interface SkuChangeInfo {
	readonly countOfDowngrades?: number;
	readonly countOfUpgradesAfterDowngrades?: number;
	readonly lastChangeDate?: string;
}
export interface SystemData {
	readonly createdAt?: string;
	readonly createdBy?: string;
	readonly createdByType?: "Application" | "Key" | "ManagedIdentity" | "User";
	readonly lastModifiedAt?: string;
	readonly lastModifiedBy?: string;
	readonly lastModifiedByType?: "Application" | "Key" | "ManagedIdentity" | "User";
}
export interface ThrottlingRule {
	readonly count?: number;
	readonly dynamicThrottlingEnabled?: boolean;
	readonly key?: string;
	readonly matchPatterns?: RequestMatchPattern[];
	readonly minCount?: number;
	readonly renewalPeriod?: number;
}
export interface UserAssignedIdentity {
	readonly clientId?: string;
	readonly principalId?: string;
}
export interface UserOwnedStorage {
	readonly identityClientId?: string;
	readonly resourceId?: string;
}
export interface VirtualNetworkRule {
	readonly id: string;
	readonly ignoreMissingVnetServiceEndpoint?: boolean;
	readonly state?: string;
}
export default {
	accounts: accounts,
	"accounts/privateEndpointConnections": accounts_privateEndpointConnections,
	"locations/resourceGroups/deletedAccounts": locations_resourceGroups_deletedAccounts,
};
