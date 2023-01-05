import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class loadTests extends ArmResource<loadTestsComponentInputs> implements loadTestsComponentOutputs {
	constructor(entity: ADKEntity, options: loadTestsComponentInputs) {
		super(entity, options.name, "Microsoft.LoadTestService/loadTests", "2022-04-15-preview", options);
	}
	public readonly apiVersion: "2022-04-15-preview";
	public readonly id: string;
	public readonly type: "Microsoft.LoadTestService/loadTests";
}
export interface loadTestsComponentOutputs {
	readonly apiVersion: "2022-04-15-preview";
	readonly id: string;
	readonly type: "Microsoft.LoadTestService/loadTests";
}
export interface loadTestsComponentInputs {
	readonly identity?: ManagedServiceIdentity;
	readonly location: string;
	readonly name: string;
	readonly properties?: LoadTestProperties;
	readonly systemData?: SystemData;
	readonly tags?: TrackedResourceTags;
}
export interface EncryptionProperties {
	readonly identity?: EncryptionPropertiesIdentity;
	readonly keyUrl?: string;
}
export interface EncryptionPropertiesIdentity {
	readonly resourceId?: string;
	readonly type?: "SystemAssigned" | "UserAssigned";
}
export interface LoadTestProperties {
	readonly dataPlaneURI?: string;
	readonly description?: string;
	readonly encryption?: EncryptionProperties;
	readonly provisioningState?: "Canceled" | "Deleted" | "Failed" | "Succeeded";
}
export interface ManagedServiceIdentity {
	readonly principalId?: string;
	readonly tenantId?: string;
	readonly type: "None" | "SystemAssigned" | "SystemAssigned,UserAssigned" | "UserAssigned";
	readonly userAssignedIdentities?: UserAssignedIdentities;
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
	loadTests: loadTests,
};
