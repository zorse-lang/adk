import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class imageTemplates extends ArmResource<imageTemplatesComponentInputs> implements imageTemplatesComponentOutputs {
	constructor(entity: ADKEntity, options: imageTemplatesComponentInputs) {
		super(entity, options.name, "Microsoft.VirtualMachineImages/imageTemplates", "2019-02-01-preview", options);
	}
	public readonly apiVersion: "2019-02-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.VirtualMachineImages/imageTemplates";
}
export interface imageTemplatesComponentOutputs {
	readonly apiVersion: "2019-02-01-preview";
	readonly id: string;
	readonly type: "Microsoft.VirtualMachineImages/imageTemplates";
}
export interface imageTemplatesComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: ImageTemplateProperties;
	readonly tags?: ResourceTags;
}
export interface ImageTemplateCustomizer {
	readonly name?: string;
}
export interface ImageTemplateDistributor {
	readonly artifactTags?: ImageTemplateDistributorArtifactTags;
	readonly runOutputName: string;
}
export interface ImageTemplateDistributorArtifactTags {
	readonly [key: string]: string;
}
export interface ImageTemplateLastRunStatus {
	readonly endTime?: string;
	readonly message?: string;
	readonly runState?: "Failed" | "PartiallySucceeded" | "Running" | "Succeeded";
	readonly runSubState?: "Building" | "Customizing" | "Distributing" | "Queued";
	readonly startTime?: string;
}
export interface ImageTemplateProperties {
	readonly customize?: ImageTemplateCustomizer[];
	readonly distribute: ImageTemplateDistributor[];
	readonly lastRunStatus?: ImageTemplateLastRunStatus;
	readonly provisioningError?: ProvisioningError;
	readonly provisioningState?: "Creating" | "Deleting" | "Failed" | "Succeeded";
	readonly source: ImageTemplateSource;
}
export interface ImageTemplateSource {}
export interface ProvisioningError {
	readonly message?: string;
	readonly provisioningErrorCode?:
		| "BadCustomizerType"
		| "BadDistributeType"
		| "BadISOSource"
		| "BadManagedImageSource"
		| "BadPIRSource"
		| "BadSharedImageDistribute"
		| "BadSourceType"
		| "NoCustomizerScript"
		| "Other"
		| "ServerError"
		| "UnsupportedCustomizerType";
}
export interface ResourceTags {
	readonly [key: string]: string;
}
export default {
	imageTemplates: imageTemplates,
};
