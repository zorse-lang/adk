import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class azureADMetrics extends ArmResource<azureADMetricsComponentInputs> implements azureADMetricsComponentOutputs {
	constructor(entity: ADKEntity, options: azureADMetricsComponentInputs) {
		super(entity, options.name, "microsoft.aadiam/azureADMetrics", "2020-07-01-preview", options);
	}
	public readonly apiVersion: "2020-07-01-preview";
	public readonly id: string;
	public readonly type: "microsoft.aadiam/azureADMetrics";
}
export interface azureADMetricsComponentOutputs {
	readonly apiVersion: "2020-07-01-preview";
	readonly id: string;
	readonly type: "microsoft.aadiam/azureADMetrics";
}
export interface azureADMetricsComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: AzureADMetricsPropertiesFormat | undefined;
	readonly tags?: TrackedResourceTags | undefined;
}
export interface AzureADMetricsPropertiesFormat {
	readonly provisioningState?: ("Created" | "Failed" | "Succeeded") | undefined;
}
export interface TrackedResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export default {
	azureADMetrics: azureADMetrics,
};
