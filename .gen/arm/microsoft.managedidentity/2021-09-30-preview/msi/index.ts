import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class identities extends ArmResource<identitiesComponentInputs> implements identitiesComponentOutputs {
	constructor(entity: ADKEntity, options: identitiesComponentInputs) {
		super(entity, options.name, "Microsoft.ManagedIdentity/identities", "2021-09-30-preview", options);
	}
	public readonly apiVersion: "2021-09-30-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ManagedIdentity/identities";
}
export interface identitiesComponentOutputs {
	readonly apiVersion: "2021-09-30-preview";
	readonly id: string;
	readonly type: "Microsoft.ManagedIdentity/identities";
}
export interface identitiesComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly properties?: SystemAssignedIdentityProperties;
	readonly tags?: SystemAssignedIdentityTags;
}
export class userAssignedIdentities
	extends ArmResource<userAssignedIdentitiesComponentInputs>
	implements userAssignedIdentitiesComponentOutputs
{
	constructor(entity: ADKEntity, options: userAssignedIdentitiesComponentInputs) {
		super(entity, options.name, "Microsoft.ManagedIdentity/userAssignedIdentities", "2021-09-30-preview", options);
	}
	public readonly apiVersion: "2021-09-30-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ManagedIdentity/userAssignedIdentities";
}
export interface userAssignedIdentitiesComponentOutputs {
	readonly apiVersion: "2021-09-30-preview";
	readonly id: string;
	readonly type: "Microsoft.ManagedIdentity/userAssignedIdentities";
}
export interface userAssignedIdentitiesComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: UserAssignedIdentityProperties;
	readonly tags?: TrackedResourceTags;
}
export function listAssociatedResources(resource: userAssignedIdentities): AssociatedResourcesListResult {
	if (resource.apiVersion !== "2021-09-30-preview") {
		throw new Error(`listAssociatedResources is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.ManagedIdentity/userAssignedIdentities") {
		throw new Error(`listAssociatedResources is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export interface AssociatedResourcesListResult {
	readonly nextLink?: string;
	readonly totalCount?: number;
	readonly value?: AzureResource[];
}
export interface AzureResource {
	readonly id?: string;
	readonly name?: string;
	readonly resourceGroup?: string;
	readonly subscriptionDisplayName?: string;
	readonly subscriptionId?: string;
	readonly type?: string;
}
export interface SystemAssignedIdentityProperties {
	readonly clientId?: string;
	readonly clientSecretUrl?: string;
	readonly principalId?: string;
	readonly tenantId?: string;
}
export interface SystemAssignedIdentityTags {
	readonly [key: string]: string;
}
export interface TrackedResourceTags {
	readonly [key: string]: string;
}
export interface UserAssignedIdentityProperties {
	readonly clientId?: string;
	readonly principalId?: string;
	readonly tenantId?: string;
}
export default {
	identities: identities,
	userAssignedIdentities: userAssignedIdentities,
};
