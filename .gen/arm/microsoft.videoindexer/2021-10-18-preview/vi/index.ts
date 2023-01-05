import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class accounts extends ArmResource<accountsComponentInputs> implements accountsComponentOutputs {
	constructor(entity: ADKEntity, options: accountsComponentInputs) {
		super(entity, options.name, "Microsoft.VideoIndexer/accounts", "2021-10-18-preview", options);
	}
	public readonly apiVersion: "2021-10-18-preview";
	public readonly id: string;
	public readonly type: "Microsoft.VideoIndexer/accounts";
}
export interface accountsComponentOutputs {
	readonly apiVersion: "2021-10-18-preview";
	readonly id: string;
	readonly type: "Microsoft.VideoIndexer/accounts";
}
export interface accountsComponentInputs {
	readonly identity?: ManagedServiceIdentity;
	readonly location: string;
	readonly name: string;
	readonly properties?: AccountPropertiesForPutRequest;
	readonly systemData?: SystemData;
	readonly tags?: TrackedResourceTags;
}
export interface AccountPropertiesForPutRequest {
	readonly accountId?: string;
	readonly accountName?: string;
	readonly mediaServices?: MediaServicesForPutRequest;
	readonly provisioningState?: "Accepted" | "Canceled" | "Deleting" | "Failed" | "Provisioning" | "Succeeded";
	readonly tenantId?: string;
}
export interface ManagedServiceIdentity {
	readonly principalId?: string;
	readonly tenantId?: string;
	readonly type: "None" | "SystemAssigned" | "SystemAssigned,UserAssigned" | "UserAssigned";
	readonly userAssignedIdentities?: UserAssignedIdentities;
}
export interface MediaServicesForPutRequest {
	readonly resourceId?: string;
	readonly userAssignedIdentity?: string;
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
export interface UserAssignedIdentities {
	readonly [key: string]: UserAssignedIdentity;
}
export interface UserAssignedIdentity {
	readonly clientId?: string;
	readonly principalId?: string;
}
export default {
	accounts: accounts,
};
