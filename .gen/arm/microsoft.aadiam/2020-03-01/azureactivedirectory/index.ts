import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class privateLinkForAzureAd
	extends ArmResource<privateLinkForAzureAdComponentInputs>
	implements privateLinkForAzureAdComponentOutputs
{
	constructor(entity: ADKEntity, options: privateLinkForAzureAdComponentInputs) {
		super(entity, options.name, "microsoft.aadiam/privateLinkForAzureAd", "2020-03-01", options);
	}
	public readonly apiVersion: "2020-03-01";
	public readonly id: string;
	public readonly type: "microsoft.aadiam/privateLinkForAzureAd";
}
export interface privateLinkForAzureAdComponentOutputs {
	readonly apiVersion: "2020-03-01";
	readonly id: string;
	readonly type: "microsoft.aadiam/privateLinkForAzureAd";
}
export interface privateLinkForAzureAdComponentInputs {
	readonly allTenants?: boolean | undefined;
	readonly name: string;
	readonly ownerTenantId?: string | undefined;
	readonly resourceGroup?: string | undefined;
	readonly resourceName?: string | undefined;
	readonly subscriptionId?: string | undefined;
	readonly tags?: PrivateLinkPolicyTags | undefined;
	readonly tenants?: string[] | undefined;
}
export class privateLinkForAzureAd_privateEndpointConnections
	extends ArmResource<privateLinkForAzureAd_privateEndpointConnectionsComponentInputs>
	implements privateLinkForAzureAd_privateEndpointConnectionsComponentOutputs
{
	constructor(entity: ADKEntity, options: privateLinkForAzureAd_privateEndpointConnectionsComponentInputs) {
		super(
			entity,
			options.name,
			"microsoft.aadiam/privateLinkForAzureAd/privateEndpointConnections",
			"2020-03-01",
			options,
		);
	}
	public readonly apiVersion: "2020-03-01";
	public readonly id: string;
	public readonly type: "microsoft.aadiam/privateLinkForAzureAd/privateEndpointConnections";
}
export interface privateLinkForAzureAd_privateEndpointConnectionsComponentOutputs {
	readonly apiVersion: "2020-03-01";
	readonly id: string;
	readonly type: "microsoft.aadiam/privateLinkForAzureAd/privateEndpointConnections";
}
export interface privateLinkForAzureAd_privateEndpointConnectionsComponentInputs {
	readonly name: string;
	readonly properties?: PrivateEndpointConnectionProperties | undefined;
}
export class privateLinkForAzureAd_privateLinkResources
	extends ArmResource<privateLinkForAzureAd_privateLinkResourcesComponentInputs>
	implements privateLinkForAzureAd_privateLinkResourcesComponentOutputs
{
	constructor(entity: ADKEntity, options: privateLinkForAzureAd_privateLinkResourcesComponentInputs) {
		super(entity, options.name, "microsoft.aadiam/privateLinkForAzureAd/privateLinkResources", "2020-03-01", options);
	}
	public readonly apiVersion: "2020-03-01";
	public readonly id: string;
	public readonly type: "microsoft.aadiam/privateLinkForAzureAd/privateLinkResources";
}
export interface privateLinkForAzureAd_privateLinkResourcesComponentOutputs {
	readonly apiVersion: "2020-03-01";
	readonly id: string;
	readonly type: "microsoft.aadiam/privateLinkForAzureAd/privateLinkResources";
}
export interface privateLinkForAzureAd_privateLinkResourcesComponentInputs {
	readonly name: string;
	readonly properties?: PrivateLinkResourceProperties | undefined;
}
export interface PrivateEndpoint {
	readonly id?: string | undefined;
}
export interface PrivateEndpointConnectionProperties {
	readonly privateEndpoint?: PrivateEndpoint | undefined;
	readonly privateLinkConnectionTags?: TagsResource | undefined;
	readonly privateLinkServiceConnectionState?: PrivateLinkServiceConnectionState | undefined;
	readonly provisioningState?: ("Failed" | "Provisioning" | "Succeeded") | undefined;
}
export interface PrivateLinkPolicyTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface PrivateLinkResourceProperties {
	readonly groupId?: string | undefined;
	readonly requiredMembers?: string[] | undefined;
}
export interface PrivateLinkServiceConnectionState {
	readonly actionsRequired?: string | undefined;
	readonly description?: string | undefined;
	readonly status?: ("Approved" | "Disconnected" | "Pending" | "Rejected") | undefined;
}
export interface TagsResource {
	readonly tags?: TagsResourceTags | undefined;
}
export interface TagsResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export default {
	privateLinkForAzureAd: privateLinkForAzureAd,
	"privateLinkForAzureAd/privateEndpointConnections": privateLinkForAzureAd_privateEndpointConnections,
	"privateLinkForAzureAd/privateLinkResources": privateLinkForAzureAd_privateLinkResources,
};
