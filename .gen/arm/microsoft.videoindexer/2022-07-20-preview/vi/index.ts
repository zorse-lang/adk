import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class accounts extends ArmResource<accountsComponentInputs> implements accountsComponentOutputs {
	constructor(entity: ADKEntity, options: accountsComponentInputs) {
		super(entity, options.name, "Microsoft.VideoIndexer/accounts", "2022-07-20-preview", options);
	}
	public readonly apiVersion: "2022-07-20-preview";
	public readonly id: string;
	public readonly type: "Microsoft.VideoIndexer/accounts";
}
export interface accountsComponentOutputs {
	readonly apiVersion: "2022-07-20-preview";
	readonly id: string;
	readonly type: "Microsoft.VideoIndexer/accounts";
}
export interface accountsComponentInputs {
	readonly identity?: ManagedServiceIdentity | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties?: AccountPropertiesForPutRequest | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: TrackedResourceTags | undefined;
}
export interface AccountPropertiesForPutRequest {
	readonly accountId?: string | undefined;
	readonly accountName?: string | undefined;
	readonly mediaServices?: MediaServicesForPutRequest | undefined;
	readonly provisioningState?:
		| ("Accepted" | "Canceled" | "Deleting" | "Failed" | "Provisioning" | "Succeeded")
		| undefined;
	readonly tenantId?: string | undefined;
	readonly totalSecondsIndexed?: number | undefined;
}
export interface ManagedServiceIdentity {
	readonly principalId?: string | undefined;
	readonly tenantId?: string | undefined;
	readonly type: "None" | "SystemAssigned" | "SystemAssigned,UserAssigned" | "UserAssigned";
	readonly userAssignedIdentities?: UserAssignedIdentities | undefined;
}
export interface MediaServicesForPutRequest {
	readonly resourceId?: string | undefined;
	readonly userAssignedIdentity?: string | undefined;
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
export interface UserAssignedIdentities {
	readonly "[ key: string ]"?: UserAssignedIdentity | undefined;
}
export interface UserAssignedIdentity {
	readonly clientId?: string | undefined;
	readonly principalId?: string | undefined;
}
export default {
	accounts: accounts,
};
