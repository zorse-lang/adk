import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class imageTemplates extends ArmResource<imageTemplatesComponentInputs> implements imageTemplatesComponentOutputs {
	constructor(entity: ADKEntity, options: imageTemplatesComponentInputs) {
		super(entity, options.name, "Microsoft.VirtualMachineImages/imageTemplates", "2020-02-14", options);
	}
	public readonly apiVersion: "2020-02-14";
	public readonly id: string;
	public readonly type: "Microsoft.VirtualMachineImages/imageTemplates";
}
export interface imageTemplatesComponentOutputs {
	readonly apiVersion: "2020-02-14";
	readonly id: string;
	readonly type: "Microsoft.VirtualMachineImages/imageTemplates";
}
export interface imageTemplatesComponentInputs {
	readonly identity: ImageTemplateIdentity;
	readonly location: string;
	readonly name: string;
	readonly properties?: ImageTemplateProperties;
	readonly tags?: ResourceTags;
}
export interface ComponentsVrq145SchemasImagetemplateidentityPropertiesUserassignedidentitiesAdditionalproperties {
	readonly clientId?: string;
	readonly principalId?: string;
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
export interface ImageTemplateIdentity {
	readonly type?: "None";
	readonly userAssignedIdentities?: ImageTemplateIdentityUserAssignedIdentities;
}
export interface ImageTemplateIdentityUserAssignedIdentities {
	readonly [key: string]: ComponentsVrq145SchemasImagetemplateidentityPropertiesUserassignedidentitiesAdditionalproperties;
}
export interface ImageTemplateLastRunStatus {
	readonly endTime?: string;
	readonly message?: string;
	readonly runState?: "Canceled" | "Canceling" | "Failed" | "PartiallySucceeded" | "Running";
	readonly runSubState?: "Building" | "Customizing" | "Distributing";
	readonly startTime?: string;
}
export interface ImageTemplateProperties {
	readonly buildTimeoutInMinutes?: number;
	readonly customize?: ImageTemplateCustomizer[];
	readonly distribute: ImageTemplateDistributor[];
	readonly lastRunStatus?: ImageTemplateLastRunStatus;
	readonly provisioningError?: ProvisioningError;
	readonly provisioningState?: "Creating" | "Deleting" | "Failed" | "Succeeded";
	readonly source: ImageTemplateSource;
	readonly vmProfile?: ImageTemplateVmProfile;
}
export interface ImageTemplateSource {}
export interface ImageTemplateVmProfile {
	readonly osDiskSizeGB?: number;
	readonly vmSize?: string;
	readonly vnetConfig?: VirtualNetworkConfig;
}
export interface PlatformImagePurchasePlan {
	readonly planName: string;
	readonly planProduct: string;
	readonly planPublisher: string;
}
export interface ProvisioningError {
	readonly message?: string;
	readonly provisioningErrorCode?:
		| "BadCustomizerType"
		| "BadDistributeType"
		| "BadManagedImageSource"
		| "BadPIRSource"
		| "BadSharedImageDistribute"
		| "BadSharedImageVersionSource"
		| "BadSourceType"
		| "NoCustomizerScript"
		| "Other"
		| "ServerError"
		| "UnsupportedCustomizerType";
}
export interface ResourceTags {
	readonly [key: string]: string;
}
export interface VirtualNetworkConfig {
	readonly subnetId?: string;
}
export default {
	imageTemplates: imageTemplates,
};
