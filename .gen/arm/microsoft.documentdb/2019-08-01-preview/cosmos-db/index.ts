import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class databaseAccounts_privateEndpointConnections
	extends ArmResource<databaseAccounts_privateEndpointConnectionsComponentInputs>
	implements databaseAccounts_privateEndpointConnectionsComponentOutputs
{
	constructor(entity: ADKEntity, options: databaseAccounts_privateEndpointConnectionsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.DocumentDB/databaseAccounts/privateEndpointConnections",
			"2019-08-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2019-08-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.DocumentDB/databaseAccounts/privateEndpointConnections";
}
export interface databaseAccounts_privateEndpointConnectionsComponentOutputs {
	readonly apiVersion: "2019-08-01-preview";
	readonly id: string;
	readonly type: "Microsoft.DocumentDB/databaseAccounts/privateEndpointConnections";
}
export interface databaseAccounts_privateEndpointConnectionsComponentInputs {
	readonly name: string;
	readonly properties?: PrivateEndpointConnectionProperties;
}
export class databaseAccounts_privateLinkResources
	extends ArmResource<databaseAccounts_privateLinkResourcesComponentInputs>
	implements databaseAccounts_privateLinkResourcesComponentOutputs
{
	constructor(entity: ADKEntity, options: databaseAccounts_privateLinkResourcesComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.DocumentDB/databaseAccounts/privateLinkResources",
			"2019-08-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2019-08-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.DocumentDB/databaseAccounts/privateLinkResources";
}
export interface databaseAccounts_privateLinkResourcesComponentOutputs {
	readonly apiVersion: "2019-08-01-preview";
	readonly id: string;
	readonly type: "Microsoft.DocumentDB/databaseAccounts/privateLinkResources";
}
export interface databaseAccounts_privateLinkResourcesComponentInputs {
	readonly name: string;
	readonly properties?: PrivateLinkResourceProperties;
}
export interface PrivateEndpointConnectionProperties {
	readonly groupId?: string;
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
	readonly requiredZoneNames?: string[];
}
export interface PrivateLinkServiceConnectionStateProperty {
	readonly actionsRequired?: string;
	readonly description?: string;
	readonly status?: string;
}
export default {
	"databaseAccounts/privateEndpointConnections": databaseAccounts_privateEndpointConnections,
	"databaseAccounts/privateLinkResources": databaseAccounts_privateLinkResources,
};
