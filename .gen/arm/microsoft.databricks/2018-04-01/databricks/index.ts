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
	readonly sku?: Sku | undefined;
	readonly tags?: TrackedResourceTags | undefined;
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
	readonly addressPrefixes?: string[] | undefined;
}
export interface CreatedBy {
	readonly applicationId?: string | undefined;
	readonly oid?: string | undefined;
	readonly puid?: string | undefined;
}
export interface Encryption {
	readonly KeyName?: string | undefined;
	readonly keySource?: ("Default" | "Microsoft.Keyvault") | undefined;
	readonly keyvaulturi?: string | undefined;
	readonly keyversion?: string | undefined;
}
export interface ManagedIdentityConfiguration {
	readonly principalId?: string | undefined;
	readonly tenantId?: string | undefined;
	readonly type?: string | undefined;
}
export interface Sku {
	readonly name: string;
	readonly tier?: string | undefined;
}
export interface TrackedResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface VirtualNetworkPeeringPropertiesFormat {
	readonly allowForwardedTraffic?: boolean | undefined;
	readonly allowGatewayTransit?: boolean | undefined;
	readonly allowVirtualNetworkAccess?: boolean | undefined;
	readonly databricksAddressSpace?: AddressSpace | undefined;
	readonly databricksVirtualNetwork?: VirtualNetworkPeeringPropertiesFormatDatabricksVirtualNetwork | undefined;
	readonly peeringState?: ("Connected" | "Disconnected" | "Initiated") | undefined;
	readonly provisioningState?: ("Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly remoteAddressSpace?: AddressSpace | undefined;
	readonly remoteVirtualNetwork: VirtualNetworkPeeringPropertiesFormatRemoteVirtualNetwork;
	readonly useRemoteGateways?: boolean | undefined;
}
export interface VirtualNetworkPeeringPropertiesFormatDatabricksVirtualNetwork {
	readonly id?: string | undefined;
}
export interface VirtualNetworkPeeringPropertiesFormatRemoteVirtualNetwork {
	readonly id?: string | undefined;
}
export interface WorkspaceCustomBooleanParameter {
	readonly type?: ("Bool" | "Object" | "String") | undefined;
	readonly value: boolean;
}
export interface WorkspaceCustomObjectParameter {
	readonly type?: ("Bool" | "Object" | "String") | undefined;
	readonly value: any;
}
export interface WorkspaceCustomParameters {
	readonly amlWorkspaceId?: WorkspaceCustomStringParameter | undefined;
	readonly customPrivateSubnetName?: WorkspaceCustomStringParameter | undefined;
	readonly customPublicSubnetName?: WorkspaceCustomStringParameter | undefined;
	readonly customVirtualNetworkId?: WorkspaceCustomStringParameter | undefined;
	readonly enableNoPublicIp?: WorkspaceCustomBooleanParameter | undefined;
	readonly encryption?: WorkspaceEncryptionParameter | undefined;
	readonly loadBalancerBackendPoolName?: WorkspaceCustomStringParameter | undefined;
	readonly loadBalancerId?: WorkspaceCustomStringParameter | undefined;
	readonly natGatewayName?: WorkspaceCustomStringParameter | undefined;
	readonly prepareEncryption?: WorkspaceCustomBooleanParameter | undefined;
	readonly publicIpName?: WorkspaceCustomStringParameter | undefined;
	readonly requireInfrastructureEncryption?: WorkspaceCustomBooleanParameter | undefined;
	readonly resourceTags?: WorkspaceCustomObjectParameter | undefined;
	readonly storageAccountName?: WorkspaceCustomStringParameter | undefined;
	readonly storageAccountSkuName?: WorkspaceCustomStringParameter | undefined;
	readonly vnetAddressPrefix?: WorkspaceCustomStringParameter | undefined;
}
export interface WorkspaceCustomStringParameter {
	readonly type?: ("Bool" | "Object" | "String") | undefined;
	readonly value: string;
}
export interface WorkspaceEncryptionParameter {
	readonly type?: ("Bool" | "Object" | "String") | undefined;
	readonly value?: Encryption | undefined;
}
export interface WorkspaceProperties {
	readonly authorizations?: WorkspaceProviderAuthorization[] | undefined;
	readonly createdBy?: CreatedBy | undefined;
	readonly createdDateTime?: string | undefined;
	readonly managedResourceGroupId: string;
	readonly parameters?: WorkspaceCustomParameters | undefined;
	readonly provisioningState?:
		| (
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
				| "Updating"
		  )
		| undefined;
	readonly storageAccountIdentity?: ManagedIdentityConfiguration | undefined;
	readonly uiDefinitionUri?: string | undefined;
	readonly updatedBy?: CreatedBy | undefined;
	readonly workspaceId?: string | undefined;
	readonly workspaceUrl?: string | undefined;
}
export interface WorkspaceProviderAuthorization {
	readonly principalId: string;
	readonly roleDefinitionId: string;
}
export default {
	workspaces: workspaces,
	"workspaces/virtualNetworkPeerings": workspaces_virtualNetworkPeerings,
};
