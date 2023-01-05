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
	readonly identity?: SystemAssignedServiceIdentity;
	readonly location: string;
	readonly name: string;
	readonly properties?: LoadTestProperties;
	readonly systemData?: SystemData;
	readonly tags?: TrackedResourceTags;
}
export interface LoadTestProperties {
	readonly dataPlaneURI?: string;
	readonly description?: string;
	readonly provisioningState?: "Canceled" | "Deleted" | "Failed" | "Succeeded";
}
export interface SystemAssignedServiceIdentity {
	readonly principalId?: string;
	readonly tenantId?: string;
	readonly type: "None" | "SystemAssigned";
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
export default {
	loadTests: loadTests,
};
