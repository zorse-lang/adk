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
	readonly tags?: PrivateLinkScopesResourceTags | undefined;
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
	readonly properties?: PrivateEndpointConnectionProperties | undefined;
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
	readonly properties?: PrivateLinkResourceProperties | undefined;
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
	readonly properties?: ScopedResourceProperties | undefined;
}
export interface AzureMonitorPrivateLinkScopeProperties {
	readonly privateEndpointConnections?: PrivateEndpointConnection[] | undefined;
	readonly provisioningState?: string | undefined;
}
export interface PrivateEndpointConnection {
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: PrivateEndpointConnectionProperties | undefined;
	readonly type?: string | undefined;
}
export interface PrivateEndpointConnectionProperties {
	readonly privateEndpoint?: PrivateEndpointProperty | undefined;
	readonly privateLinkServiceConnectionState?: PrivateLinkServiceConnectionStateProperty | undefined;
	readonly provisioningState?: string | undefined;
}
export interface PrivateEndpointProperty {
	readonly id?: string | undefined;
}
export interface PrivateLinkResourceProperties {
	readonly groupId?: string | undefined;
	readonly requiredMembers?: string[] | undefined;
}
export interface PrivateLinkScopesResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface PrivateLinkServiceConnectionStateProperty {
	readonly actionsRequired?: string | undefined;
	readonly description: string;
	readonly status: string;
}
export interface ScopedResourceProperties {
	readonly linkedResourceId?: string | undefined;
	readonly provisioningState?: string | undefined;
}
export default {
	privateLinkScopes: privateLinkScopes,
	"Microsoft.Insights/privateLinkScopes/privateEndpointConnections":
		Microsoft_Insights_privateLinkScopes_privateEndpointConnections,
	"Microsoft.Insights/privateLinkScopes/privateLinkResources":
		Microsoft_Insights_privateLinkScopes_privateLinkResources,
	"Microsoft.Insights/privateLinkScopes/scopedResources": Microsoft_Insights_privateLinkScopes_scopedResources,
};
