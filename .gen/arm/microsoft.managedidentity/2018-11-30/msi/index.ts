import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class identities extends ArmResource<identitiesComponentInputs> implements identitiesComponentOutputs {
	constructor(entity: ADKEntity, options: identitiesComponentInputs) {
		super(entity, options.name, "Microsoft.ManagedIdentity/identities", "2018-11-30", options);
	}
	public readonly apiVersion: "2018-11-30";
	public readonly id: string;
	public readonly type: "Microsoft.ManagedIdentity/identities";
}
export interface identitiesComponentOutputs {
	readonly apiVersion: "2018-11-30";
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
		super(entity, options.name, "Microsoft.ManagedIdentity/userAssignedIdentities", "2018-11-30", options);
	}
	public readonly apiVersion: "2018-11-30";
	public readonly id: string;
	public readonly type: "Microsoft.ManagedIdentity/userAssignedIdentities";
}
export interface userAssignedIdentitiesComponentOutputs {
	readonly apiVersion: "2018-11-30";
	readonly id: string;
	readonly type: "Microsoft.ManagedIdentity/userAssignedIdentities";
}
export interface userAssignedIdentitiesComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: UserAssignedIdentityProperties;
	readonly tags?: TrackedResourceTags;
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
