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
	readonly properties?: AccountProperties | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: TrackedResourceTags | undefined;
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
	readonly identity?: EnterprisePolicyIdentity | undefined;
	readonly kind: "Encryption" | "Identity" | "Lockbox" | "NetworkInjection" | "PrivateEndpoint";
	readonly location: string;
	readonly name: string;
	readonly properties?: Properties | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: TrackedResourceTags | undefined;
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
	readonly properties?: PrivateEndpointConnectionProperties | undefined;
	readonly systemData?: SystemData | undefined;
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
	readonly properties?: PrivateLinkResourceProperties | undefined;
}
export interface AccountProperties {
	readonly description?: string | undefined;
	readonly systemId?: string | undefined;
}
export interface EnterprisePolicyIdentity {
	readonly systemAssignedIdentityPrincipalId?: string | undefined;
	readonly tenantId?: string | undefined;
	readonly type?: "None" | undefined;
}
export interface KeyProperties {
	readonly name?: string | undefined;
	readonly version?: string | undefined;
}
export interface KeyVaultProperties {
	readonly id?: string | undefined;
	readonly key?: KeyProperties | undefined;
}
export interface PrivateEndpoint {
	readonly id?: string | undefined;
}
export interface PrivateEndpointConnectionProperties {
	readonly privateEndpoint?: PrivateEndpoint | undefined;
	readonly privateLinkServiceConnectionState: PrivateLinkServiceConnectionState;
	readonly provisioningState?: ("Creating" | "Deleting" | "Failed" | "Succeeded") | undefined;
}
export interface PrivateLinkResourceProperties {
	readonly groupId?: string | undefined;
	readonly requiredMembers?: string[] | undefined;
	readonly requiredZoneNames?: string[] | undefined;
}
export interface PrivateLinkServiceConnectionState {
	readonly actionsRequired?: string | undefined;
	readonly description?: string | undefined;
	readonly status?: ("Approved" | "Pending" | "Rejected") | undefined;
}
export interface Properties {
	readonly encryption?: PropertiesEncryption | undefined;
	readonly lockbox?: PropertiesLockbox | undefined;
	readonly networkInjection?: PropertiesNetworkInjection | undefined;
	readonly systemId?: string | undefined;
}
export interface PropertiesEncryption {
	readonly keyVault?: KeyVaultProperties | undefined;
	readonly state?: ("Disabled" | "Enabled" | "NotConfigured") | undefined;
}
export interface PropertiesLockbox {
	readonly state?: ("Disabled" | "Enabled" | "NotConfigured") | undefined;
}
export interface PropertiesNetworkInjection {
	readonly virtualNetworks?: VirtualNetworkPropertiesList | undefined;
}
export interface SubnetProperties {
	readonly name?: string | undefined;
}
export interface SystemData {
	readonly createdAt?: string | undefined;
	readonly createdBy?: string | undefined;
	readonly createdByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
	readonly lastModifiedAt?: string | undefined;
	readonly lastModifiedBy?: string | undefined;
	readonly lastModifiedByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
}
export interface TrackedResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface VirtualNetworkProperties {
	readonly id?: string | undefined;
	readonly subnet?: SubnetProperties | undefined;
}
export interface VirtualNetworkPropertiesList {
	readonly nextLink?: string | undefined;
	readonly value?: VirtualNetworkProperties[] | undefined;
}
export default {
	accounts: accounts,
	enterprisePolicies: enterprisePolicies,
	"enterprisePolicies/privateEndpointConnections": enterprisePolicies_privateEndpointConnections,
	"enterprisePolicies/privateLinkResources": enterprisePolicies_privateLinkResources,
};
