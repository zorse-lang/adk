import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class privateLinkScopes
	extends ArmResource<privateLinkScopesComponentInputs>
	implements privateLinkScopesComponentOutputs
{
	constructor(entity: ADKEntity, options: privateLinkScopesComponentInputs) {
		super(entity, options.name, "microsoft.insights/privateLinkScopes", "2019-10-17-preview", options);
	}
	public readonly apiVersion: "2019-10-17-preview";
	public readonly id: string;
	public readonly type: "microsoft.insights/privateLinkScopes";
}
export interface privateLinkScopesComponentOutputs {
	readonly apiVersion: "2019-10-17-preview";
	readonly id: string;
	readonly type: "microsoft.insights/privateLinkScopes";
}
export interface privateLinkScopesComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties: AzureMonitorPrivateLinkScopeProperties;
	readonly tags?: PrivateLinkScopesResourceTags;
}
export class Microsoft_Insights_privateLinkScopes_privateEndpointConnections
	extends ArmResource<Microsoft_Insights_privateLinkScopes_privateEndpointConnectionsComponentInputs>
	implements Microsoft_Insights_privateLinkScopes_privateEndpointConnectionsComponentOutputs
{
	constructor(
		entity: ADKEntity,
		options: Microsoft_Insights_privateLinkScopes_privateEndpointConnectionsComponentInputs,
	) {
		super(
			entity,
			options.name,
			"microsoft.insights/Microsoft.Insights/privateLinkScopes/privateEndpointConnections",
			"2019-10-17-preview",
			options,
		);
	}
	public readonly apiVersion: "2019-10-17-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Insights/privateLinkScopes/privateEndpointConnections";
}
export interface Microsoft_Insights_privateLinkScopes_privateEndpointConnectionsComponentOutputs {
	readonly apiVersion: "2019-10-17-preview";
	readonly id: string;
	readonly type: "Microsoft.Insights/privateLinkScopes/privateEndpointConnections";
}
export interface Microsoft_Insights_privateLinkScopes_privateEndpointConnectionsComponentInputs {
	readonly name: string;
	readonly properties?: PrivateEndpointConnectionProperties;
}
export class Microsoft_Insights_privateLinkScopes_privateLinkResources
	extends ArmResource<Microsoft_Insights_privateLinkScopes_privateLinkResourcesComponentInputs>
	implements Microsoft_Insights_privateLinkScopes_privateLinkResourcesComponentOutputs
{
	constructor(entity: ADKEntity, options: Microsoft_Insights_privateLinkScopes_privateLinkResourcesComponentInputs) {
		super(
			entity,
			options.name,
			"microsoft.insights/Microsoft.Insights/privateLinkScopes/privateLinkResources",
			"2019-10-17-preview",
			options,
		);
	}
	public readonly apiVersion: "2019-10-17-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Insights/privateLinkScopes/privateLinkResources";
}
export interface Microsoft_Insights_privateLinkScopes_privateLinkResourcesComponentOutputs {
	readonly apiVersion: "2019-10-17-preview";
	readonly id: string;
	readonly type: "Microsoft.Insights/privateLinkScopes/privateLinkResources";
}
export interface Microsoft_Insights_privateLinkScopes_privateLinkResourcesComponentInputs {
	readonly name: string;
	readonly properties?: PrivateLinkResourceProperties;
}
export class Microsoft_Insights_privateLinkScopes_scopedResources
	extends ArmResource<Microsoft_Insights_privateLinkScopes_scopedResourcesComponentInputs>
	implements Microsoft_Insights_privateLinkScopes_scopedResourcesComponentOutputs
{
	constructor(entity: ADKEntity, options: Microsoft_Insights_privateLinkScopes_scopedResourcesComponentInputs) {
		super(
			entity,
			options.name,
			"microsoft.insights/Microsoft.Insights/privateLinkScopes/scopedResources",
			"2019-10-17-preview",
			options,
		);
	}
	public readonly apiVersion: "2019-10-17-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Insights/privateLinkScopes/scopedResources";
}
export interface Microsoft_Insights_privateLinkScopes_scopedResourcesComponentOutputs {
	readonly apiVersion: "2019-10-17-preview";
	readonly id: string;
	readonly type: "Microsoft.Insights/privateLinkScopes/scopedResources";
}
export interface Microsoft_Insights_privateLinkScopes_scopedResourcesComponentInputs {
	readonly name: string;
	readonly properties?: ScopedResourceProperties;
}
export interface AzureMonitorPrivateLinkScopeProperties {
	readonly privateEndpointConnections?: PrivateEndpointConnection[];
	readonly provisioningState?: string;
}
export interface PrivateEndpointConnection {
	readonly id?: string;
	readonly name?: string;
	readonly properties?: PrivateEndpointConnectionProperties;
	readonly type?: string;
}
export interface PrivateEndpointConnectionProperties {
	readonly privateEndpoint?: PrivateEndpointProperty;
	readonly privateLinkServiceConnectionState?: PrivateLinkServiceConnectionStateProperty;
	readonly provisioningState?: string;
}
export interface PrivateEndpointProperty {
	readonly id?: string;
}
export interface PrivateLinkResourceProperties {
	readonly groupId?: string;
	readonly requiredMembers?: string[];
}
export interface PrivateLinkScopesResourceTags {
	readonly [key: string]: string;
}
export interface PrivateLinkServiceConnectionStateProperty {
	readonly actionsRequired?: string;
	readonly description: string;
	readonly status: string;
}
export interface ScopedResourceProperties {
	readonly linkedResourceId?: string;
	readonly provisioningState?: string;
}
export default {
	privateLinkScopes: privateLinkScopes,
	"Microsoft.Insights/privateLinkScopes/privateEndpointConnections":
		Microsoft_Insights_privateLinkScopes_privateEndpointConnections,
	"Microsoft.Insights/privateLinkScopes/privateLinkResources":
		Microsoft_Insights_privateLinkScopes_privateLinkResources,
	"Microsoft.Insights/privateLinkScopes/scopedResources": Microsoft_Insights_privateLinkScopes_scopedResources,
};
