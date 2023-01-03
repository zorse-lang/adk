import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class loadTests extends ArmResource<loadTestsComponentInputs> implements loadTestsComponentOutputs {
	constructor(entity: ADKEntity, options: loadTestsComponentInputs) {
		super(entity, options.name, "Microsoft.LoadTestService/loadTests", "2021-12-01-preview", options);
	}
	public readonly apiVersion: "2021-12-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.LoadTestService/loadTests";
}
export interface loadTestsComponentOutputs {
	readonly apiVersion: "2021-12-01-preview";
	readonly id: string;
	readonly type: "Microsoft.LoadTestService/loadTests";
}
export interface loadTestsComponentInputs {
	readonly identity?: SystemAssignedServiceIdentity | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties?: LoadTestProperties | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: TrackedResourceTags | undefined;
}
export interface LoadTestProperties {
	readonly dataPlaneURI?: string | undefined;
	readonly description?: string | undefined;
	readonly provisioningState?: ("Canceled" | "Deleted" | "Failed" | "Succeeded") | undefined;
}
export interface SystemAssignedServiceIdentity {
	readonly principalId?: string | undefined;
	readonly tenantId?: string | undefined;
	readonly type: "None" | "SystemAssigned";
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
export default {
	loadTests: loadTests,
};
