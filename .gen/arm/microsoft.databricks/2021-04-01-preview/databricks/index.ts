import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class workspaces extends ArmResource<workspacesComponentInputs> implements workspacesComponentOutputs {
	constructor(entity: ADKEntity, options: workspacesComponentInputs) {
		super(entity, options.name, "Microsoft.Databricks/workspaces", "2021-04-01-preview", options);
	}
	public readonly apiVersion: "2021-04-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Databricks/workspaces";
}
export interface workspacesComponentOutputs {
	readonly apiVersion: "2021-04-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Databricks/workspaces";
}
export interface workspacesComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties: WorkspaceProperties;
	readonly sku?: Sku;
	readonly systemData?: SystemData;
	readonly tags?: TrackedResourceTags;
}
export class workspaces_privateEndpointConnections
	extends ArmResource<workspaces_privateEndpointConnectionsComponentInputs>
	implements workspaces_privateEndpointConnectionsComponentOutputs
{
	constructor(entity: ADKEntity, options: workspaces_privateEndpointConnectionsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.Databricks/workspaces/privateEndpointConnections",
			"2021-04-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2021-04-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Databricks/workspaces/privateEndpointConnections";
}
export interface workspaces_privateEndpointConnectionsComponentOutputs {
	readonly apiVersion: "2021-04-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Databricks/workspaces/privateEndpointConnections";
}
export interface workspaces_privateEndpointConnectionsComponentInputs {
	readonly name: string;
	readonly properties: PrivateEndpointConnectionProperties;
}
export class workspaces_privateLinkResources
	extends ArmResource<workspaces_privateLinkResourcesComponentInputs>
	implements workspaces_privateLinkResourcesComponentOutputs
{
	constructor(entity: ADKEntity, options: workspaces_privateLinkResourcesComponentInputs) {
		super(entity, options.name, "Microsoft.Databricks/workspaces/privateLinkResources", "2021-04-01-preview", options);
	}
	public readonly apiVersion: "2021-04-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Databricks/workspaces/privateLinkResources";
}
export interface workspaces_privateLinkResourcesComponentOutputs {
	readonly apiVersion: "2021-04-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Databricks/workspaces/privateLinkResources";
}
export interface workspaces_privateLinkResourcesComponentInputs {
	readonly name: string;
	readonly properties?: GroupIdInformationProperties;
}
export class workspaces_virtualNetworkPeerings
	extends ArmResource<workspaces_virtualNetworkPeeringsComponentInputs>
	implements workspaces_virtualNetworkPeeringsComponentOutputs
{
	constructor(entity: ADKEntity, options: workspaces_virtualNetworkPeeringsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.Databricks/workspaces/virtualNetworkPeerings",
			"2021-04-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2021-04-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Databricks/workspaces/virtualNetworkPeerings";
}
export interface workspaces_virtualNetworkPeeringsComponentOutputs {
	readonly apiVersion: "2021-04-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Databricks/workspaces/virtualNetworkPeerings";
}
export interface workspaces_virtualNetworkPeeringsComponentInputs {
	readonly name: string;
	readonly properties: VirtualNetworkPeeringPropertiesFormat;
}
export interface AddressSpace {
	readonly addressPrefixes?: string[];
}
export interface CreatedBy {
	readonly applicationId?: string;
	readonly oid?: string;
	readonly puid?: string;
}
export interface Encryption {
	readonly KeyName?: string;
	readonly keySource?: "Default" | "Microsoft.Keyvault";
	readonly keyvaulturi?: string;
	readonly keyversion?: string;
}
export interface EncryptionEntitiesDefinition {
	readonly managedServices?: EncryptionV2;
}
export interface EncryptionV2 {
	readonly keySource: "Microsoft.Keyvault";
	readonly keyVaultProperties?: EncryptionV2KeyVaultProperties;
}
export interface EncryptionV2KeyVaultProperties {
	readonly keyName: string;
	readonly keyVaultUri: string;
	readonly keyVersion: string;
}
export interface GroupIdInformationProperties {
	readonly groupId?: string;
	readonly requiredMembers?: string[];
	readonly requiredZoneNames?: string[];
}
export interface ManagedIdentityConfiguration {
	readonly principalId?: string;
	readonly tenantId?: string;
	readonly type?: string;
}
export interface PrivateEndpoint {
	readonly id?: string;
}
export interface PrivateEndpointConnection {
	readonly id?: string;
	readonly name?: string;
	readonly properties: PrivateEndpointConnectionProperties;
	readonly type?: string;
}
export interface PrivateEndpointConnectionProperties {
	readonly privateEndpoint?: PrivateEndpoint;
	readonly privateLinkServiceConnectionState: PrivateLinkServiceConnectionState;
	readonly provisioningState?: "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating";
}
export interface PrivateLinkServiceConnectionState {
	readonly actionRequired?: string;
	readonly description?: string;
	readonly status: "Approved" | "Disconnected" | "Pending" | "Rejected";
}
export interface Sku {
	readonly name: string;
	readonly tier?: string;
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
export interface VirtualNetworkPeeringPropertiesFormat {
	readonly allowForwardedTraffic?: boolean;
	readonly allowGatewayTransit?: boolean;
	readonly allowVirtualNetworkAccess?: boolean;
	readonly databricksAddressSpace?: AddressSpace;
	readonly databricksVirtualNetwork?: VirtualNetworkPeeringPropertiesFormatDatabricksVirtualNetwork;
	readonly peeringState?: "Connected" | "Disconnected" | "Initiated";
	readonly provisioningState?: "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly remoteAddressSpace?: AddressSpace;
	readonly remoteVirtualNetwork: VirtualNetworkPeeringPropertiesFormatRemoteVirtualNetwork;
	readonly useRemoteGateways?: boolean;
}
export interface VirtualNetworkPeeringPropertiesFormatDatabricksVirtualNetwork {
	readonly id?: string;
}
export interface VirtualNetworkPeeringPropertiesFormatRemoteVirtualNetwork {
	readonly id?: string;
}
export interface WorkspaceCustomBooleanParameter {
	readonly type?: "Bool" | "Object" | "String";
	readonly value: boolean;
}
export interface WorkspaceCustomObjectParameter {
	readonly type?: "Bool" | "Object" | "String";
	readonly value: any;
}
export interface WorkspaceCustomParameters {
	readonly amlWorkspaceId?: WorkspaceCustomStringParameter;
	readonly customPrivateSubnetName?: WorkspaceCustomStringParameter;
	readonly customPublicSubnetName?: WorkspaceCustomStringParameter;
	readonly customVirtualNetworkId?: WorkspaceCustomStringParameter;
	readonly enableNoPublicIp?: WorkspaceCustomBooleanParameter;
	readonly encryption?: WorkspaceEncryptionParameter;
	readonly loadBalancerBackendPoolName?: WorkspaceCustomStringParameter;
	readonly loadBalancerId?: WorkspaceCustomStringParameter;
	readonly natGatewayName?: WorkspaceCustomStringParameter;
	readonly prepareEncryption?: WorkspaceCustomBooleanParameter;
	readonly publicIpName?: WorkspaceCustomStringParameter;
	readonly requireInfrastructureEncryption?: WorkspaceCustomBooleanParameter;
	readonly resourceTags?: WorkspaceCustomObjectParameter;
	readonly storageAccountName?: WorkspaceCustomStringParameter;
	readonly storageAccountSkuName?: WorkspaceCustomStringParameter;
	readonly vnetAddressPrefix?: WorkspaceCustomStringParameter;
}
export interface WorkspaceCustomStringParameter {
	readonly type?: "Bool" | "Object" | "String";
	readonly value: string;
}
export interface WorkspaceEncryptionParameter {
	readonly type?: "Bool" | "Object" | "String";
	readonly value?: Encryption;
}
export interface WorkspaceProperties {
	readonly authorizations?: WorkspaceProviderAuthorization[];
	readonly createdBy?: CreatedBy;
	readonly createdDateTime?: string;
	readonly encryption?: WorkspacePropertiesEncryption;
	readonly managedResourceGroupId: string;
	readonly parameters?: WorkspaceCustomParameters;
	readonly privateEndpointConnections?: PrivateEndpointConnection[];
	readonly provisioningState?:
		| "Accepted"
		| "Canceled"
		| "Created"
		| "Creating"
		| "Deleted"
		| "Deleting"
		| "Failed"
		| "Ready"
		| "Running"
		| "Succeeded"
		| "Updating";
	readonly publicNetworkAccess?: "Disabled" | "Enabled";
	readonly requiredNsgRules?: "AllRules" | "NoAzureDatabricksRules" | "NoAzureServiceRules";
	readonly storageAccountIdentity?: ManagedIdentityConfiguration;
	readonly uiDefinitionUri?: string;
	readonly updatedBy?: CreatedBy;
	readonly workspaceId?: string;
	readonly workspaceUrl?: string;
}
export interface WorkspacePropertiesEncryption {
	readonly entities: EncryptionEntitiesDefinition;
}
export interface WorkspaceProviderAuthorization {
	readonly principalId: string;
	readonly roleDefinitionId: string;
}
export default {
	workspaces: workspaces,
	"workspaces/privateEndpointConnections": workspaces_privateEndpointConnections,
	"workspaces/privateLinkResources": workspaces_privateLinkResources,
	"workspaces/virtualNetworkPeerings": workspaces_virtualNetworkPeerings,
};
