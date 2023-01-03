import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class privateLinkScopes
	extends ArmResource<privateLinkScopesComponentInputs>
	implements privateLinkScopesComponentOutputs
{
	constructor(entity: ADKEntity, options: privateLinkScopesComponentInputs) {
		super(entity, options.name, "microsoft.insights/privateLinkScopes", "2021-07-01-preview", options);
	}
	public readonly apiVersion: "2021-07-01-preview";
	public readonly id: string;
	public readonly type: "microsoft.insights/privateLinkScopes";
}
export interface privateLinkScopesComponentOutputs {
	readonly apiVersion: "2021-07-01-preview";
	readonly id: string;
	readonly type: "microsoft.insights/privateLinkScopes";
}
export interface privateLinkScopesComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties: AzureMonitorPrivateLinkScopeProperties;
	readonly systemData?: SystemData | undefined;
	readonly tags?: TrackedResourceTags | undefined;
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
			"2021-07-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2021-07-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Insights/privateLinkScopes/privateEndpointConnections";
}
export interface Microsoft_Insights_privateLinkScopes_privateEndpointConnectionsComponentOutputs {
	readonly apiVersion: "2021-07-01-preview";
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
			"2021-07-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2021-07-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Insights/privateLinkScopes/privateLinkResources";
}
export interface Microsoft_Insights_privateLinkScopes_privateLinkResourcesComponentOutputs {
	readonly apiVersion: "2021-07-01-preview";
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
			"2021-07-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2021-07-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Insights/privateLinkScopes/scopedResources";
}
export interface Microsoft_Insights_privateLinkScopes_scopedResourcesComponentOutputs {
	readonly apiVersion: "2021-07-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Insights/privateLinkScopes/scopedResources";
}
export interface Microsoft_Insights_privateLinkScopes_scopedResourcesComponentInputs {
	readonly name: string;
	readonly properties?: ScopedResourceProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export interface AccessModeSettings {
	readonly exclusions?: AccessModeSettingsExclusion[] | undefined;
	readonly ingestionAccessMode: "Open" | "PrivateOnly";
	readonly queryAccessMode: "Open" | "PrivateOnly";
}
export interface AccessModeSettingsExclusion {
	readonly ingestionAccessMode?: ("Open" | "PrivateOnly") | undefined;
	readonly privateEndpointConnectionName?: string | undefined;
	readonly queryAccessMode?: ("Open" | "PrivateOnly") | undefined;
}
export interface AzureMonitorPrivateLinkScopeProperties {
	readonly accessModeSettings: AccessModeSettings;
	readonly privateEndpointConnections?: PrivateEndpointConnection[] | undefined;
	readonly provisioningState?: string | undefined;
}
export interface PrivateEndpoint {
	readonly id?: string | undefined;
}
export interface PrivateEndpointConnection {
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: PrivateEndpointConnectionProperties | undefined;
	readonly type?: string | undefined;
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
export interface ScopedResourceProperties {
	readonly linkedResourceId?: string | undefined;
	readonly provisioningState?: string | undefined;
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
export default {
	privateLinkScopes: privateLinkScopes,
	"Microsoft.Insights/privateLinkScopes/privateEndpointConnections":
		Microsoft_Insights_privateLinkScopes_privateEndpointConnections,
	"Microsoft.Insights/privateLinkScopes/privateLinkResources":
		Microsoft_Insights_privateLinkScopes_privateLinkResources,
	"Microsoft.Insights/privateLinkScopes/scopedResources": Microsoft_Insights_privateLinkScopes_scopedResources,
};
