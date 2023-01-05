import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class imageTemplates extends ArmResource<imageTemplatesComponentInputs> implements imageTemplatesComponentOutputs {
	constructor(entity: ADKEntity, options: imageTemplatesComponentInputs) {
		super(entity, options.name, "Microsoft.VirtualMachineImages/imageTemplates", "2022-02-14", options);
	}
	public readonly apiVersion: "2022-02-14";
	public readonly id: string;
	public readonly type: "Microsoft.VirtualMachineImages/imageTemplates";
}
export interface imageTemplatesComponentOutputs {
	readonly apiVersion: "2022-02-14";
	readonly id: string;
	readonly type: "Microsoft.VirtualMachineImages/imageTemplates";
}
export interface imageTemplatesComponentInputs {
	readonly identity: ImageTemplateIdentity;
	readonly location: string;
	readonly name: string;
	readonly properties?: ImageTemplateProperties;
	readonly systemData?: SystemData;
	readonly tags?: TrackedResourceTags;
}
export class imageTemplates_runOutputs
	extends ArmResource<imageTemplates_runOutputsComponentInputs>
	implements imageTemplates_runOutputsComponentOutputs
{
	constructor(entity: ADKEntity, options: imageTemplates_runOutputsComponentInputs) {
		super(entity, options.name, "Microsoft.VirtualMachineImages/imageTemplates/runOutputs", "2022-02-14", options);
	}
	public readonly apiVersion: "2022-02-14";
	public readonly id: string;
	public readonly type: "Microsoft.VirtualMachineImages/imageTemplates/runOutputs";
}
export interface imageTemplates_runOutputsComponentOutputs {
	readonly apiVersion: "2022-02-14";
	readonly id: string;
	readonly type: "Microsoft.VirtualMachineImages/imageTemplates/runOutputs";
}
export interface imageTemplates_runOutputsComponentInputs {
	readonly name: string;
	readonly properties?: RunOutputProperties;
	readonly systemData?: SystemData;
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
export interface ImageTemplateInVMValidator {
	readonly name?: string;
}
export interface ImageTemplateLastRunStatus {
	readonly endTime?: string;
	readonly message?: string;
	readonly runState?: "Canceled" | "Canceling" | "Failed" | "PartiallySucceeded" | "Running";
	readonly runSubState?: "Building" | "Customizing" | "Distributing" | "Queued";
	readonly startTime?: string;
}
export interface ImageTemplateProperties {
	readonly buildTimeoutInMinutes?: number;
	readonly customize?: ImageTemplateCustomizer[];
	readonly distribute: ImageTemplateDistributor[];
	readonly exactStagingResourceGroup?: string;
	readonly lastRunStatus?: ImageTemplateLastRunStatus;
	readonly provisioningError?: ProvisioningError;
	readonly provisioningState?: "Creating" | "Deleting" | "Failed" | "Succeeded";
	readonly source: ImageTemplateSource;
	readonly stagingResourceGroup?: string;
	readonly validate?: ImageTemplatePropertiesValidate;
	readonly vmProfile?: ImageTemplateVmProfile;
}
export interface ImageTemplatePropertiesValidate {
	readonly continueDistributeOnFailure?: boolean;
	readonly inVMValidations?: ImageTemplateInVMValidator[];
	readonly sourceValidationOnly?: boolean;
}
export interface ImageTemplateSource {}
export interface ImageTemplateVmProfile {
	readonly osDiskSizeGB?: number;
	readonly userAssignedIdentities?: string[];
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
		| "BadStagingResourceGroup"
		| "BadValidatorType"
		| "NoCustomizerScript"
		| "NoValidatorScript"
		| "Other"
		| "ServerError"
		| "UnsupportedCustomizerType"
		| "UnsupportedValidatorType";
}
export interface RunOutputProperties {
	readonly artifactId?: string;
	readonly artifactUri?: string;
	readonly provisioningState?: "Creating" | "Deleting" | "Failed" | "Succeeded";
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
export interface VirtualNetworkConfig {
	readonly proxyVmSize?: string;
	readonly subnetId?: string;
}
export default {
	imageTemplates: imageTemplates,
	"imageTemplates/runOutputs": imageTemplates_runOutputs,
};
