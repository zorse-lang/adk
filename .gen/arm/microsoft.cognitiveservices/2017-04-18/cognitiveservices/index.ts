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
	readonly etag?: string | undefined;
	readonly identity?: Identity | undefined;
	readonly kind?: string | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: CognitiveServicesAccountProperties | undefined;
	readonly sku?: Sku | undefined;
	readonly tags?: CognitiveServicesAccountTags | undefined;
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
	readonly etag?: string | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: PrivateEndpointConnectionProperties | undefined;
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
}
export interface CognitiveServicesAccountKeys {
	readonly key1?: string | undefined;
	readonly key2?: string | undefined;
}
export interface CognitiveServicesAccountProperties {
	readonly apiProperties?: CognitiveServicesAccountApiProperties | undefined;
	readonly capabilities?: SkuCapability[] | undefined;
	readonly customSubDomainName?: string | undefined;
	readonly dateCreated?: string | undefined;
	readonly encryption?: Encryption | undefined;
	readonly endpoint?: string | undefined;
	readonly internalId?: string | undefined;
	readonly isMigrated?: boolean | undefined;
	readonly networkAcls?: NetworkRuleSet | undefined;
	readonly privateEndpointConnections?: PrivateEndpointConnection[] | undefined;
	readonly provisioningState?:
		| ("Creating" | "Deleting" | "Failed" | "Moving" | "ResolvingDNS" | "Succeeded")
		| undefined;
	readonly publicNetworkAccess?: ("Disabled" | "Enabled") | undefined;
	readonly skuChangeInfo?: CognitiveServicesAccountSkuChangeInfo | undefined;
	readonly userOwnedStorage?: UserOwnedStorage[] | undefined;
}
export interface CognitiveServicesAccountSkuChangeInfo {
	readonly countOfDowngrades?: number | undefined;
	readonly countOfUpgradesAfterDowngrades?: number | undefined;
	readonly lastChangeDate?: string | undefined;
}
export interface CognitiveServicesAccountTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface Encryption {
	readonly keySource?: ("Microsoft.CognitiveServices" | "Microsoft.KeyVault") | undefined;
	readonly keyVaultProperties?: KeyVaultProperties | undefined;
}
export interface Identity {
	readonly principalId?: string | undefined;
	readonly tenantId?: string | undefined;
	readonly type?: ("None" | "SystemAssigned") | undefined;
	readonly userAssignedIdentities?: IdentityUserAssignedIdentities | undefined;
}
export interface IdentityUserAssignedIdentities {
	readonly "[ key: string ]"?: UserAssignedIdentity | undefined;
}
export interface IpRule {
	readonly value: string;
}
export interface KeyVaultProperties {
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
	readonly type?: string | undefined;
}
export interface PrivateEndpointConnectionProperties {
	readonly groupIds?: string[] | undefined;
	readonly privateEndpoint?: PrivateEndpoint | undefined;
	readonly privateLinkServiceConnectionState: PrivateLinkServiceConnectionState;
}
export interface PrivateLinkServiceConnectionState {
	readonly actionsRequired?: string | undefined;
	readonly description?: string | undefined;
	readonly status?: ("Approved" | "Disconnected" | "Pending" | "Rejected") | undefined;
}
export interface Sku {
	readonly name: string;
	readonly tier?: ("Enterprise" | "Free" | "Premium" | "Standard") | undefined;
}
export interface SkuCapability {
	readonly name?: string | undefined;
	readonly value?: string | undefined;
}
export interface UserAssignedIdentity {
	readonly clientId?: string | undefined;
	readonly principalId?: string | undefined;
}
export interface UserOwnedStorage {
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
};
