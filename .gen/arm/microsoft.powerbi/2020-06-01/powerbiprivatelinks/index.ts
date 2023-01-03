import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class privateLinkServicesForPowerBI
	extends ArmResource<privateLinkServicesForPowerBIComponentInputs>
	implements privateLinkServicesForPowerBIComponentOutputs
{
	constructor(entity: ADKEntity, options: privateLinkServicesForPowerBIComponentInputs) {
		super(entity, options.name, "Microsoft.PowerBI/privateLinkServicesForPowerBI", "2020-06-01", options);
	}
	public readonly apiVersion: "2020-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.PowerBI/privateLinkServicesForPowerBI";
}
export interface privateLinkServicesForPowerBIComponentOutputs {
	readonly apiVersion: "2020-06-01";
	readonly id: string;
	readonly type: "Microsoft.PowerBI/privateLinkServicesForPowerBI";
}
export interface privateLinkServicesForPowerBIComponentInputs {
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: TenantProperties | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: TenantResourceTags | undefined;
}
export class privateLinkServicesForPowerBI_privateEndpointConnections
	extends ArmResource<privateLinkServicesForPowerBI_privateEndpointConnectionsComponentInputs>
	implements privateLinkServicesForPowerBI_privateEndpointConnectionsComponentOutputs
{
	constructor(entity: ADKEntity, options: privateLinkServicesForPowerBI_privateEndpointConnectionsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.PowerBI/privateLinkServicesForPowerBI/privateEndpointConnections",
			"2020-06-01",
			options,
		);
	}
	public readonly apiVersion: "2020-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.PowerBI/privateLinkServicesForPowerBI/privateEndpointConnections";
}
export interface privateLinkServicesForPowerBI_privateEndpointConnectionsComponentOutputs {
	readonly apiVersion: "2020-06-01";
	readonly id: string;
	readonly type: "Microsoft.PowerBI/privateLinkServicesForPowerBI/privateEndpointConnections";
}
export interface privateLinkServicesForPowerBI_privateEndpointConnectionsComponentInputs {
	readonly name: string;
	readonly properties?: PrivateEndpointConnectionProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export interface ConnectionState {
	readonly actionsRequired?: string | undefined;
	readonly description?: string | undefined;
	readonly status?: ("Approved" | "Disconnected" | "Pending" | "Rejected") | undefined;
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
	readonly privateEndpoint?: PrivateEndpoint | undefined;
	readonly privateLinkServiceConnectionState?: ConnectionState | undefined;
	readonly provisioningState?: ("Canceled" | "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
}
export interface SystemData {
	readonly createdAt?: string | undefined;
	readonly createdBy?: string | undefined;
	readonly createdByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
	readonly lastModifiedAt?: string | undefined;
	readonly lastModifiedBy?: string | undefined;
	readonly lastModifiedByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
}
export interface TenantProperties {
	readonly privateEndpointConnections?: PrivateEndpointConnection[] | undefined;
	readonly tenantId?: string | undefined;
}
export interface TenantResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export default {
	privateLinkServicesForPowerBI: privateLinkServicesForPowerBI,
	"privateLinkServicesForPowerBI/privateEndpointConnections": privateLinkServicesForPowerBI_privateEndpointConnections,
};
