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
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: SystemAssignedIdentityProperties | undefined;
	readonly tags?: SystemAssignedIdentityTags | undefined;
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
	readonly properties?: UserAssignedIdentityProperties | undefined;
	readonly tags?: TrackedResourceTags | undefined;
}
export interface SystemAssignedIdentityProperties {
	readonly clientId?: string | undefined;
	readonly clientSecretUrl?: string | undefined;
	readonly principalId?: string | undefined;
	readonly tenantId?: string | undefined;
}
export interface SystemAssignedIdentityTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface TrackedResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface UserAssignedIdentityProperties {
	readonly clientId?: string | undefined;
	readonly principalId?: string | undefined;
	readonly tenantId?: string | undefined;
}
export default {
	identities: identities,
	userAssignedIdentities: userAssignedIdentities,
};
