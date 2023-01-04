import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class imageTemplates extends ArmResource<imageTemplatesComponentInputs> implements imageTemplatesComponentOutputs {
	constructor(entity: ADKEntity, options: imageTemplatesComponentInputs) {
		super(entity, options.name, "Microsoft.VirtualMachineImages/imageTemplates", "2018-02-01-preview", options);
	}
	public readonly apiVersion: "2018-02-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.VirtualMachineImages/imageTemplates";
}
export interface imageTemplatesComponentOutputs {
	readonly apiVersion: "2018-02-01-preview";
	readonly id: string;
	readonly type: "Microsoft.VirtualMachineImages/imageTemplates";
}
export interface imageTemplatesComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: ImageTemplateProperties | undefined;
	readonly tags?: ResourceTags | undefined;
}
export interface ImageTemplateCustomizer {
	readonly name?: string | undefined;
}
export interface ImageTemplateDistributor {
	readonly artifactTags?: ImageTemplateDistributorArtifactTags | undefined;
	readonly runOutputName: string;
}
export interface ImageTemplateDistributorArtifactTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface ImageTemplateLastRunStatus {
	readonly endTime?: string | undefined;
	readonly message?: string | undefined;
	readonly runState?: ("failed" | "partiallySucceeded" | "ready" | "running" | "succeeded") | undefined;
	readonly runSubState?: ("building" | "customizing" | "distributing" | "queued") | undefined;
	readonly startTime?: string | undefined;
}
export interface ImageTemplateProperties {
	readonly customize?: ImageTemplateCustomizer[] | undefined;
	readonly distribute: ImageTemplateDistributor[];
	readonly lastRunStatus?: ImageTemplateLastRunStatus | undefined;
	readonly provisioningError?: ProvisioningError | undefined;
	readonly provisioningState?: ("Creating" | "Deleting" | "Failed" | "Succeeded") | undefined;
	readonly source: ImageTemplateSource;
}
export interface ImageTemplateSource {}
export interface ProvisioningError {
	readonly message?: string | undefined;
	readonly provisioningErrorCode?:
		| (
				| "BadCustomizerType"
				| "BadISOSource"
				| "BadPIRSource"
				| "BadSourceType"
				| "NoCustomizerShellScript"
				| "Other"
				| "ServerError"
		  )
		| undefined;
}
export interface ResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export default {
	imageTemplates: imageTemplates,
};