import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class locks extends ArmResource<locksComponentInputs> implements locksComponentOutputs {
	constructor(entity: ADKEntity, options: locksComponentInputs) {
		super(entity, options.name, "Microsoft.Authorization/locks", "2020-05-01", options);
	}
	public readonly apiVersion: "2020-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Authorization/locks";
}
export interface locksComponentOutputs {
	readonly apiVersion: "2020-05-01";
	readonly id: string;
	readonly type: "Microsoft.Authorization/locks";
}
export interface locksComponentInputs {
	readonly name: string;
	readonly properties: ManagementLockProperties;
	readonly systemData?: SystemData;
}
export class privateLinkAssociations
	extends ArmResource<privateLinkAssociationsComponentInputs>
	implements privateLinkAssociationsComponentOutputs
{
	constructor(entity: ADKEntity, options: privateLinkAssociationsComponentInputs) {
		super(entity, options.name, "Microsoft.Authorization/privateLinkAssociations", "2020-05-01", options);
	}
	public readonly apiVersion: "2020-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Authorization/privateLinkAssociations";
}
export interface privateLinkAssociationsComponentOutputs {
	readonly apiVersion: "2020-05-01";
	readonly id: string;
	readonly type: "Microsoft.Authorization/privateLinkAssociations";
}
export interface privateLinkAssociationsComponentInputs {
	readonly name: string;
	readonly properties?: PrivateLinkAssociationPropertiesOrPrivateLinkAssociationPropertiesExpanded;
}
export class resourceManagementPrivateLinks
	extends ArmResource<resourceManagementPrivateLinksComponentInputs>
	implements resourceManagementPrivateLinksComponentOutputs
{
	constructor(entity: ADKEntity, options: resourceManagementPrivateLinksComponentInputs) {
		super(entity, options.name, "Microsoft.Authorization/resourceManagementPrivateLinks", "2020-05-01", options);
	}
	public readonly apiVersion: "2020-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Authorization/resourceManagementPrivateLinks";
}
export interface resourceManagementPrivateLinksComponentOutputs {
	readonly apiVersion: "2020-05-01";
	readonly id: string;
	readonly type: "Microsoft.Authorization/resourceManagementPrivateLinks";
}
export interface resourceManagementPrivateLinksComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly properties?: ResourceManagementPrivateLinkEndpointConnections;
}
export interface ManagementLockOwner {
	readonly applicationId?: string;
}
export interface ManagementLockProperties {
	readonly level: "CanNotDelete" | "NotSpecified" | "ReadOnly";
	readonly notes?: string;
	readonly owners?: ManagementLockOwner[];
}
export interface PrivateLinkAssociationPropertiesOrPrivateLinkAssociationPropertiesExpanded {
	readonly privateLink?: string;
	readonly publicNetworkAccess?: "Disabled" | "Enabled";
	readonly scope?: string;
	readonly tenantID?: string;
}
export interface ResourceManagementPrivateLinkEndpointConnections {
	readonly privateEndpointConnections?: string[];
}
export interface SystemData {
	readonly createdAt?: string;
	readonly createdBy?: string;
	readonly createdByType?: "Application" | "Key" | "ManagedIdentity" | "User";
	readonly lastModifiedAt?: string;
	readonly lastModifiedBy?: string;
	readonly lastModifiedByType?: "Application" | "Key" | "ManagedIdentity" | "User";
}
export default {
	locks: locks,
	privateLinkAssociations: privateLinkAssociations,
	resourceManagementPrivateLinks: resourceManagementPrivateLinks,
};
