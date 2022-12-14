import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class grafana extends ArmResource<grafanaComponentInputs> implements grafanaComponentOutputs {
	constructor(entity: ADKEntity, options: grafanaComponentInputs) {
		super(entity, options.name, "Microsoft.Dashboard/grafana", "2022-05-01-preview", options);
	}
	public readonly apiVersion: "2022-05-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Dashboard/grafana";
}
export interface grafanaComponentOutputs {
	readonly apiVersion: "2022-05-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Dashboard/grafana";
}
export interface grafanaComponentInputs {
	readonly identity?: ManagedServiceIdentity;
	readonly location?: string;
	readonly name: string;
	readonly properties?: ManagedGrafanaProperties;
	readonly sku?: ResourceSku;
	readonly systemData?: SystemData;
	readonly tags?: ManagedGrafanaTags;
}
export class grafana_privateEndpointConnections
	extends ArmResource<grafana_privateEndpointConnectionsComponentInputs>
	implements grafana_privateEndpointConnectionsComponentOutputs
{
	constructor(entity: ADKEntity, options: grafana_privateEndpointConnectionsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.Dashboard/grafana/privateEndpointConnections",
			"2022-05-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2022-05-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Dashboard/grafana/privateEndpointConnections";
}
export interface grafana_privateEndpointConnectionsComponentOutputs {
	readonly apiVersion: "2022-05-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Dashboard/grafana/privateEndpointConnections";
}
export interface grafana_privateEndpointConnectionsComponentInputs {
	readonly name: string;
	readonly properties?: PrivateEndpointConnectionProperties;
	readonly systemData?: SystemData;
}
export class grafana_privateLinkResources
	extends ArmResource<grafana_privateLinkResourcesComponentInputs>
	implements grafana_privateLinkResourcesComponentOutputs
{
	constructor(entity: ADKEntity, options: grafana_privateLinkResourcesComponentInputs) {
		super(entity, options.name, "Microsoft.Dashboard/grafana/privateLinkResources", "2022-05-01-preview", options);
	}
	public readonly apiVersion: "2022-05-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Dashboard/grafana/privateLinkResources";
}
export interface grafana_privateLinkResourcesComponentOutputs {
	readonly apiVersion: "2022-05-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Dashboard/grafana/privateLinkResources";
}
export interface grafana_privateLinkResourcesComponentInputs {
	readonly name: string;
	readonly properties?: PrivateLinkResourceProperties;
	readonly systemData?: SystemData;
}
export interface ManagedGrafanaProperties {
	readonly apiKey?: "Disabled" | "Enabled";
	readonly autoGeneratedDomainNameLabelScope?: "TenantReuse";
	readonly deterministicOutboundIP?: "Disabled" | "Enabled";
	readonly endpoint?: string;
	readonly grafanaVersion?: string;
	readonly outboundIPs?: string[];
	readonly privateEndpointConnections?: PrivateEndpointConnection[];
	readonly provisioningState?:
		| "Accepted"
		| "Canceled"
		| "Creating"
		| "Deleted"
		| "Deleting"
		| "Failed"
		| "NotSpecified"
		| "Succeeded"
		| "Updating";
	readonly publicNetworkAccess?: "Disabled" | "Enabled";
	readonly zoneRedundancy?: "Disabled" | "Enabled";
}
export interface ManagedGrafanaTags {
	readonly [key: string]: string;
}
export interface ManagedServiceIdentity {
	readonly principalId?: string;
	readonly tenantId?: string;
	readonly type: "None" | "SystemAssigned" | "SystemAssigned,UserAssigned" | "UserAssigned";
	readonly userAssignedIdentities?: UserAssignedIdentities;
}
export interface PrivateEndpoint {
	readonly id?: string;
}
export interface PrivateEndpointConnection {
	readonly id?: string;
	readonly name?: string;
	readonly properties?: PrivateEndpointConnectionProperties;
	readonly systemData?: SystemData;
	readonly type?: string;
}
export interface PrivateEndpointConnectionProperties {
	readonly groupIds?: string[];
	readonly privateEndpoint?: PrivateEndpoint;
	readonly privateLinkServiceConnectionState: PrivateLinkServiceConnectionState;
	readonly provisioningState?: "Creating" | "Deleting" | "Failed" | "Succeeded";
}
export interface PrivateLinkResourceProperties {
	readonly groupId?: string;
	readonly provisioningState?:
		| "Accepted"
		| "Canceled"
		| "Creating"
		| "Deleted"
		| "Deleting"
		| "Failed"
		| "NotSpecified"
		| "Succeeded"
		| "Updating";
	readonly requiredMembers?: string[];
	readonly requiredZoneNames?: string[];
}
export interface PrivateLinkServiceConnectionState {
	readonly actionsRequired?: string;
	readonly description?: string;
	readonly status?: "Approved" | "Pending" | "Rejected";
}
export interface ResourceSku {
	readonly name: string;
}
export interface SystemData {
	readonly createdAt?: string;
	readonly createdBy?: string;
	readonly createdByType?: "Application" | "Key" | "ManagedIdentity" | "User";
	readonly lastModifiedAt?: string;
	readonly lastModifiedBy?: string;
	readonly lastModifiedByType?: "Application" | "Key" | "ManagedIdentity" | "User";
}
export interface UserAssignedIdentities {
	readonly [key: string]: UserAssignedIdentity;
}
export interface UserAssignedIdentity {
	readonly clientId?: string;
	readonly principalId?: string;
}
export default {
	grafana: grafana,
	"grafana/privateEndpointConnections": grafana_privateEndpointConnections,
	"grafana/privateLinkResources": grafana_privateLinkResources,
};
