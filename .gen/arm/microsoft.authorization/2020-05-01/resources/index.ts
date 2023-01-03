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
	readonly systemData?: SystemData | undefined;
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
	readonly properties?: PrivateLinkAssociationPropertiesOrPrivateLinkAssociationPropertiesExpanded | undefined;
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
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: ResourceManagementPrivateLinkEndpointConnections | undefined;
}
export interface ManagementLockOwner {
	readonly applicationId?: string | undefined;
}
export interface ManagementLockProperties {
	readonly level: "CanNotDelete" | "NotSpecified" | "ReadOnly";
	readonly notes?: string | undefined;
	readonly owners?: ManagementLockOwner[] | undefined;
}
export interface PrivateLinkAssociationPropertiesOrPrivateLinkAssociationPropertiesExpanded {
	readonly privateLink?: string | undefined;
	readonly publicNetworkAccess?: ("Disabled" | "Enabled") | undefined;
	readonly scope?: string | undefined;
	readonly tenantID?: string | undefined;
}
export interface ResourceManagementPrivateLinkEndpointConnections {
	readonly privateEndpointConnections?: string[] | undefined;
}
export interface SystemData {
	readonly createdAt?: string | undefined;
	readonly createdBy?: string | undefined;
	readonly createdByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
	readonly lastModifiedAt?: string | undefined;
	readonly lastModifiedBy?: string | undefined;
	readonly lastModifiedByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
}
export default {
	locks: locks,
	privateLinkAssociations: privateLinkAssociations,
	resourceManagementPrivateLinks: resourceManagementPrivateLinks,
};
