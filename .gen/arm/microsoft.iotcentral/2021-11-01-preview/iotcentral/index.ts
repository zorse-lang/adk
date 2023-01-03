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
	readonly identity?: SystemAssignedServiceIdentity | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties?: AppProperties | undefined;
	readonly sku: AppSkuInfo;
	readonly systemData?: SystemData | undefined;
	readonly tags?: TrackedResourceTags | undefined;
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
	readonly properties?: PrivateEndpointConnectionProperties | undefined;
	readonly systemData?: SystemData | undefined;
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
	readonly properties?: PrivateLinkResourceProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export interface AppProperties {
	readonly applicationId?: string | undefined;
	readonly displayName?: string | undefined;
	readonly networkRuleSets?: NetworkRuleSets | undefined;
	readonly privateEndpointConnections?: PrivateEndpointConnection[] | undefined;
	readonly provisioningState?: ("Canceled" | "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly publicNetworkAccess?: ("Disabled" | "Enabled") | undefined;
	readonly state?: ("created" | "suspended") | undefined;
	readonly subdomain?: string | undefined;
	readonly template?: string | undefined;
}
export interface AppSkuInfo {
	readonly name: "ST0" | "ST1" | "ST2";
}
export interface NetworkRuleSetIpRule {
	readonly action?: "Allow" | undefined;
	readonly filterName?: string | undefined;
	readonly ipMask?: string | undefined;
}
export interface NetworkRuleSets {
	readonly applyToDevices?: boolean | undefined;
	readonly applyToIoTCentral?: boolean | undefined;
	readonly defaultAction?: ("Allow" | "Deny") | undefined;
	readonly ipRules?: NetworkRuleSetIpRule[] | undefined;
}
export interface PrivateEndpoint {
	readonly id?: string | undefined;
}
export interface PrivateEndpointConnection {
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: PrivateEndpointConnectionProperties | undefined;
	readonly systemData?: SystemData | undefined;
	readonly type?: string | undefined;
}
export interface PrivateEndpointConnectionProperties {
	readonly groupIds?: string[] | undefined;
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
export interface SystemAssignedServiceIdentity {
	readonly principalId?: string | undefined;
	readonly tenantId?: string | undefined;
	readonly type: "None" | "SystemAssigned";
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
	iotApps: iotApps,
	"iotApps/privateEndpointConnections": iotApps_privateEndpointConnections,
	"iotApps/privateLinkResources": iotApps_privateLinkResources,
};
