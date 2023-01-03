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
	readonly identity?: ManagedServiceIdentity | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties?: LoadTestProperties | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: TrackedResourceTags | undefined;
}
export interface EncryptionProperties {
	readonly identity?: EncryptionPropertiesIdentity | undefined;
	readonly keyUrl?: string | undefined;
}
export interface EncryptionPropertiesIdentity {
	readonly resourceId?: string | undefined;
	readonly type?: ("SystemAssigned" | "UserAssigned") | undefined;
}
export interface LoadTestProperties {
	readonly dataPlaneURI?: string | undefined;
	readonly description?: string | undefined;
	readonly encryption?: EncryptionProperties | undefined;
	readonly provisioningState?: ("Canceled" | "Deleted" | "Failed" | "Succeeded") | undefined;
}
export interface ManagedServiceIdentity {
	readonly principalId?: string | undefined;
	readonly tenantId?: string | undefined;
	readonly type: "None" | "SystemAssigned" | "SystemAssigned,UserAssigned" | "UserAssigned";
	readonly userAssignedIdentities?: UserAssignedIdentities | undefined;
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
	loadTests: loadTests,
};
