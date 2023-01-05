import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class accounts extends ArmResource<accountsComponentInputs> implements accountsComponentOutputs {
	constructor(entity: ADKEntity, options: accountsComponentInputs) {
		super(entity, options.name, "Microsoft.CognitiveServices/accounts", "2017-04-18", options);
	}
	public readonly apiVersion: "2017-04-18";
	public readonly id: string;
	public readonly type: "Microsoft.CognitiveServices/accounts";
}
export interface accountsComponentOutputs {
	readonly apiVersion: "2017-04-18";
	readonly id: string;
	readonly type: "Microsoft.CognitiveServices/accounts";
}
export interface accountsComponentInputs {
	readonly etag?: string;
	readonly identity?: Identity;
	readonly kind?: string;
	readonly location?: string;
	readonly name: string;
	readonly properties?: CognitiveServicesAccountProperties;
	readonly sku?: Sku;
	readonly tags?: CognitiveServicesAccountTags;
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
			"2017-04-18",
			options,
		);
	}
	public readonly apiVersion: "2017-04-18";
	public readonly id: string;
	public readonly type: "Microsoft.CognitiveServices/accounts/privateEndpointConnections";
}
export interface accounts_privateEndpointConnectionsComponentOutputs {
	readonly apiVersion: "2017-04-18";
	readonly id: string;
	readonly type: "Microsoft.CognitiveServices/accounts/privateEndpointConnections";
}
export interface accounts_privateEndpointConnectionsComponentInputs {
	readonly etag?: string;
	readonly location?: string;
	readonly name: string;
	readonly properties?: PrivateEndpointConnectionProperties;
}
export function listKeys(resource: accounts): CognitiveServicesAccountKeys {
	if (resource.apiVersion !== "2017-04-18") {
		throw new Error(`listKeys is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.CognitiveServices/accounts") {
		throw new Error(`listKeys is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export interface CognitiveServicesAccountApiProperties {
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
}
export interface CognitiveServicesAccountKeys {
	readonly key1?: string;
	readonly key2?: string;
}
export interface CognitiveServicesAccountProperties {
	readonly apiProperties?: CognitiveServicesAccountApiProperties;
	readonly capabilities?: SkuCapability[];
	readonly customSubDomainName?: string;
	readonly dateCreated?: string;
	readonly encryption?: Encryption;
	readonly endpoint?: string;
	readonly internalId?: string;
	readonly isMigrated?: boolean;
	readonly networkAcls?: NetworkRuleSet;
	readonly privateEndpointConnections?: PrivateEndpointConnection[];
	readonly provisioningState?: "Creating" | "Deleting" | "Failed" | "Moving" | "ResolvingDNS" | "Succeeded";
	readonly publicNetworkAccess?: "Disabled" | "Enabled";
	readonly skuChangeInfo?: CognitiveServicesAccountSkuChangeInfo;
	readonly userOwnedStorage?: UserOwnedStorage[];
}
export interface CognitiveServicesAccountSkuChangeInfo {
	readonly countOfDowngrades?: number;
	readonly countOfUpgradesAfterDowngrades?: number;
	readonly lastChangeDate?: string;
}
export interface CognitiveServicesAccountTags {
	readonly [key: string]: string;
}
export interface Encryption {
	readonly keySource?: "Microsoft.CognitiveServices" | "Microsoft.KeyVault";
	readonly keyVaultProperties?: KeyVaultProperties;
}
export interface Identity {
	readonly principalId?: string;
	readonly tenantId?: string;
	readonly type?: "None" | "SystemAssigned";
	readonly userAssignedIdentities?: IdentityUserAssignedIdentities;
}
export interface IdentityUserAssignedIdentities {
	readonly [key: string]: UserAssignedIdentity;
}
export interface IpRule {
	readonly value: string;
}
export interface KeyVaultProperties {
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
	readonly type?: string;
}
export interface PrivateEndpointConnectionProperties {
	readonly groupIds?: string[];
	readonly privateEndpoint?: PrivateEndpoint;
	readonly privateLinkServiceConnectionState: PrivateLinkServiceConnectionState;
}
export interface PrivateLinkServiceConnectionState {
	readonly actionsRequired?: string;
	readonly description?: string;
	readonly status?: "Approved" | "Disconnected" | "Pending" | "Rejected";
}
export interface Sku {
	readonly name: string;
	readonly tier?: "Enterprise" | "Free" | "Premium" | "Standard";
}
export interface SkuCapability {
	readonly name?: string;
	readonly value?: string;
}
export interface UserAssignedIdentity {
	readonly clientId?: string;
	readonly principalId?: string;
}
export interface UserOwnedStorage {
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
};
