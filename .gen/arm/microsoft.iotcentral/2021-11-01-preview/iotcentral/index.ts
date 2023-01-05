import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class iotApps extends ArmResource<iotAppsComponentInputs> implements iotAppsComponentOutputs {
	constructor(entity: ADKEntity, options: iotAppsComponentInputs) {
		super(entity, options.name, "Microsoft.IoTCentral/iotApps", "2021-11-01-preview", options);
	}
	public readonly apiVersion: "2021-11-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.IoTCentral/iotApps";
}
export interface iotAppsComponentOutputs {
	readonly apiVersion: "2021-11-01-preview";
	readonly id: string;
	readonly type: "Microsoft.IoTCentral/iotApps";
}
export interface iotAppsComponentInputs {
	readonly identity?: SystemAssignedServiceIdentity;
	readonly location: string;
	readonly name: string;
	readonly properties?: AppProperties;
	readonly sku: AppSkuInfo;
	readonly systemData?: SystemData;
	readonly tags?: TrackedResourceTags;
}
export class iotApps_privateEndpointConnections
	extends ArmResource<iotApps_privateEndpointConnectionsComponentInputs>
	implements iotApps_privateEndpointConnectionsComponentOutputs
{
	constructor(entity: ADKEntity, options: iotApps_privateEndpointConnectionsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.IoTCentral/iotApps/privateEndpointConnections",
			"2021-11-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2021-11-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.IoTCentral/iotApps/privateEndpointConnections";
}
export interface iotApps_privateEndpointConnectionsComponentOutputs {
	readonly apiVersion: "2021-11-01-preview";
	readonly id: string;
	readonly type: "Microsoft.IoTCentral/iotApps/privateEndpointConnections";
}
export interface iotApps_privateEndpointConnectionsComponentInputs {
	readonly name: string;
	readonly properties?: PrivateEndpointConnectionProperties;
	readonly systemData?: SystemData;
}
export class iotApps_privateLinkResources
	extends ArmResource<iotApps_privateLinkResourcesComponentInputs>
	implements iotApps_privateLinkResourcesComponentOutputs
{
	constructor(entity: ADKEntity, options: iotApps_privateLinkResourcesComponentInputs) {
		super(entity, options.name, "Microsoft.IoTCentral/iotApps/privateLinkResources", "2021-11-01-preview", options);
	}
	public readonly apiVersion: "2021-11-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.IoTCentral/iotApps/privateLinkResources";
}
export interface iotApps_privateLinkResourcesComponentOutputs {
	readonly apiVersion: "2021-11-01-preview";
	readonly id: string;
	readonly type: "Microsoft.IoTCentral/iotApps/privateLinkResources";
}
export interface iotApps_privateLinkResourcesComponentInputs {
	readonly name: string;
	readonly properties?: PrivateLinkResourceProperties;
	readonly systemData?: SystemData;
}
export interface AppProperties {
	readonly applicationId?: string;
	readonly displayName?: string;
	readonly networkRuleSets?: NetworkRuleSets;
	readonly privateEndpointConnections?: PrivateEndpointConnection[];
	readonly provisioningState?: "Canceled" | "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly publicNetworkAccess?: "Disabled" | "Enabled";
	readonly state?: "created" | "suspended";
	readonly subdomain?: string;
	readonly template?: string;
}
export interface AppSkuInfo {
	readonly name: "ST0" | "ST1" | "ST2";
}
export interface NetworkRuleSetIpRule {
	readonly action?: "Allow";
	readonly filterName?: string;
	readonly ipMask?: string;
}
export interface NetworkRuleSets {
	readonly applyToDevices?: boolean;
	readonly applyToIoTCentral?: boolean;
	readonly defaultAction?: "Allow" | "Deny";
	readonly ipRules?: NetworkRuleSetIpRule[];
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
	readonly requiredMembers?: string[];
	readonly requiredZoneNames?: string[];
}
export interface PrivateLinkServiceConnectionState {
	readonly actionsRequired?: string;
	readonly description?: string;
	readonly status?: "Approved" | "Pending" | "Rejected";
}
export interface SystemAssignedServiceIdentity {
	readonly principalId?: string;
	readonly tenantId?: string;
	readonly type: "None" | "SystemAssigned";
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
export default {
	iotApps: iotApps,
	"iotApps/privateEndpointConnections": iotApps_privateEndpointConnections,
	"iotApps/privateLinkResources": iotApps_privateLinkResources,
};
