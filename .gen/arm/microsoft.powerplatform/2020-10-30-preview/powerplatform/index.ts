import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class accounts extends ArmResource<accountsComponentInputs> implements accountsComponentOutputs {
	constructor(entity: ADKEntity, options: accountsComponentInputs) {
		super(entity, options.name, "Microsoft.PowerPlatform/accounts", "2020-10-30-preview", options);
	}
	public readonly apiVersion: "2020-10-30-preview";
	public readonly id: string;
	public readonly type: "Microsoft.PowerPlatform/accounts";
}
export interface accountsComponentOutputs {
	readonly apiVersion: "2020-10-30-preview";
	readonly id: string;
	readonly type: "Microsoft.PowerPlatform/accounts";
}
export interface accountsComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: AccountProperties;
	readonly systemData?: SystemData;
	readonly tags?: TrackedResourceTags;
}
export class enterprisePolicies
	extends ArmResource<enterprisePoliciesComponentInputs>
	implements enterprisePoliciesComponentOutputs
{
	constructor(entity: ADKEntity, options: enterprisePoliciesComponentInputs) {
		super(entity, options.name, "Microsoft.PowerPlatform/enterprisePolicies", "2020-10-30-preview", options);
	}
	public readonly apiVersion: "2020-10-30-preview";
	public readonly id: string;
	public readonly type: "Microsoft.PowerPlatform/enterprisePolicies";
}
export interface enterprisePoliciesComponentOutputs {
	readonly apiVersion: "2020-10-30-preview";
	readonly id: string;
	readonly type: "Microsoft.PowerPlatform/enterprisePolicies";
}
export interface enterprisePoliciesComponentInputs {
	readonly identity?: EnterprisePolicyIdentity;
	readonly kind: "Encryption" | "Identity" | "Lockbox" | "NetworkInjection" | "PrivateEndpoint";
	readonly location: string;
	readonly name: string;
	readonly properties?: Properties;
	readonly systemData?: SystemData;
	readonly tags?: TrackedResourceTags;
}
export class enterprisePolicies_privateEndpointConnections
	extends ArmResource<enterprisePolicies_privateEndpointConnectionsComponentInputs>
	implements enterprisePolicies_privateEndpointConnectionsComponentOutputs
{
	constructor(entity: ADKEntity, options: enterprisePolicies_privateEndpointConnectionsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.PowerPlatform/enterprisePolicies/privateEndpointConnections",
			"2020-10-30-preview",
			options,
		);
	}
	public readonly apiVersion: "2020-10-30-preview";
	public readonly id: string;
	public readonly type: "Microsoft.PowerPlatform/enterprisePolicies/privateEndpointConnections";
}
export interface enterprisePolicies_privateEndpointConnectionsComponentOutputs {
	readonly apiVersion: "2020-10-30-preview";
	readonly id: string;
	readonly type: "Microsoft.PowerPlatform/enterprisePolicies/privateEndpointConnections";
}
export interface enterprisePolicies_privateEndpointConnectionsComponentInputs {
	readonly name: string;
	readonly properties?: PrivateEndpointConnectionProperties;
	readonly systemData?: SystemData;
}
export class enterprisePolicies_privateLinkResources
	extends ArmResource<enterprisePolicies_privateLinkResourcesComponentInputs>
	implements enterprisePolicies_privateLinkResourcesComponentOutputs
{
	constructor(entity: ADKEntity, options: enterprisePolicies_privateLinkResourcesComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.PowerPlatform/enterprisePolicies/privateLinkResources",
			"2020-10-30-preview",
			options,
		);
	}
	public readonly apiVersion: "2020-10-30-preview";
	public readonly id: string;
	public readonly type: "Microsoft.PowerPlatform/enterprisePolicies/privateLinkResources";
}
export interface enterprisePolicies_privateLinkResourcesComponentOutputs {
	readonly apiVersion: "2020-10-30-preview";
	readonly id: string;
	readonly type: "Microsoft.PowerPlatform/enterprisePolicies/privateLinkResources";
}
export interface enterprisePolicies_privateLinkResourcesComponentInputs {
	readonly name: string;
	readonly properties?: PrivateLinkResourceProperties;
}
export interface AccountProperties {
	readonly description?: string;
	readonly systemId?: string;
}
export interface EnterprisePolicyIdentity {
	readonly systemAssignedIdentityPrincipalId?: string;
	readonly tenantId?: string;
	readonly type?: "None";
}
export interface KeyProperties {
	readonly name?: string;
	readonly version?: string;
}
export interface KeyVaultProperties {
	readonly id?: string;
	readonly key?: KeyProperties;
}
export interface PrivateEndpoint {
	readonly id?: string;
}
export interface PrivateEndpointConnectionProperties {
	readonly privateEndpoint?: PrivateEndpoint;
	readonly privateLinkServiceConnectionState: PrivateLinkServiceConnectionState;
	readonly provisioningState?: "Creating" | "Deleting" | "Failed" | "Succeeded";
}
export interface PrivateLinkResourceProperties {
	readonly groupId?: string;
	readonly requiredMembers?: string[];
	readonly requiredZoneNames?: string[];
}
export interface PrivateLinkServiceConnectionState {
	readonly actionsRequired?: string;
	readonly description?: string;
	readonly status?: "Approved" | "Pending" | "Rejected";
}
export interface Properties {
	readonly encryption?: PropertiesEncryption;
	readonly lockbox?: PropertiesLockbox;
	readonly networkInjection?: PropertiesNetworkInjection;
	readonly systemId?: string;
}
export interface PropertiesEncryption {
	readonly keyVault?: KeyVaultProperties;
	readonly state?: "Disabled" | "Enabled" | "NotConfigured";
}
export interface PropertiesLockbox {
	readonly state?: "Disabled" | "Enabled" | "NotConfigured";
}
export interface PropertiesNetworkInjection {
	readonly virtualNetworks?: VirtualNetworkPropertiesList;
}
export interface SubnetProperties {
	readonly name?: string;
}
export interface SystemData {
	readonly createdAt?: string;
	readonly createdBy?: string;
	readonly createdByType?: "Application" | "Key" | "ManagedIdentity" | "User";
	readonly lastModifiedAt?: string;
	readonly lastModifiedBy?: string;
	readonly lastModifiedByType?: "Application" | "Key" | "ManagedIdentity" | "User";
}
export interface TrackedResourceTags {
	readonly [key: string]: string;
}
export interface VirtualNetworkProperties {
	readonly id?: string;
	readonly subnet?: SubnetProperties;
}
export interface VirtualNetworkPropertiesList {
	readonly nextLink?: string;
	readonly value?: VirtualNetworkProperties[];
}
export default {
	accounts: accounts,
	enterprisePolicies: enterprisePolicies,
	"enterprisePolicies/privateEndpointConnections": enterprisePolicies_privateEndpointConnections,
	"enterprisePolicies/privateLinkResources": enterprisePolicies_privateLinkResources,
};
