import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class workspaces extends ArmResource<workspacesComponentInputs> implements workspacesComponentOutputs {
	constructor(entity: ADKEntity, options: workspacesComponentInputs) {
		super(entity, options.name, "Microsoft.Databricks/workspaces", "2018-04-01", options);
	}
	public readonly apiVersion: "2018-04-01";
	public readonly id: string;
	public readonly type: "Microsoft.Databricks/workspaces";
}
export interface workspacesComponentOutputs {
	readonly apiVersion: "2018-04-01";
	readonly id: string;
	readonly type: "Microsoft.Databricks/workspaces";
}
export interface workspacesComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties: WorkspaceProperties;
	readonly sku?: Sku;
	readonly tags?: TrackedResourceTags;
}
export class workspaces_virtualNetworkPeerings
	extends ArmResource<workspaces_virtualNetworkPeeringsComponentInputs>
	implements workspaces_virtualNetworkPeeringsComponentOutputs
{
	constructor(entity: ADKEntity, options: workspaces_virtualNetworkPeeringsComponentInputs) {
		super(entity, options.name, "Microsoft.Databricks/workspaces/virtualNetworkPeerings", "2018-04-01", options);
	}
	public readonly apiVersion: "2018-04-01";
	public readonly id: string;
	public readonly type: "Microsoft.Databricks/workspaces/virtualNetworkPeerings";
}
export interface workspaces_virtualNetworkPeeringsComponentOutputs {
	readonly apiVersion: "2018-04-01";
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
export interface ManagedIdentityConfiguration {
	readonly principalId?: string;
	readonly tenantId?: string;
	readonly type?: string;
}
export interface Sku {
	readonly name: string;
	readonly tier?: string;
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
	readonly managedResourceGroupId: string;
	readonly parameters?: WorkspaceCustomParameters;
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
	readonly storageAccountIdentity?: ManagedIdentityConfiguration;
	readonly uiDefinitionUri?: string;
	readonly updatedBy?: CreatedBy;
	readonly workspaceId?: string;
	readonly workspaceUrl?: string;
}
export interface WorkspaceProviderAuthorization {
	readonly principalId: string;
	readonly roleDefinitionId: string;
}
export default {
	workspaces: workspaces,
	"workspaces/virtualNetworkPeerings": workspaces_virtualNetworkPeerings,
};
