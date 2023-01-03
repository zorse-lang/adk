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
	readonly properties?: ImageTemplateProperties | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: TrackedResourceTags | undefined;
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
	readonly properties?: RunOutputProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export interface ComponentsVrq145SchemasImagetemplateidentityPropertiesUserassignedidentitiesAdditionalproperties {
	readonly clientId?: string | undefined;
	readonly principalId?: string | undefined;
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
export interface ImageTemplateIdentity {
	readonly type?: "None" | undefined;
	readonly userAssignedIdentities?: ImageTemplateIdentityUserAssignedIdentities | undefined;
}
export interface ImageTemplateIdentityUserAssignedIdentities {
	readonly "[ key: string ]"?:
		| ComponentsVrq145SchemasImagetemplateidentityPropertiesUserassignedidentitiesAdditionalproperties
		| undefined;
}
export interface ImageTemplateInVMValidator {
	readonly name?: string | undefined;
}
export interface ImageTemplateLastRunStatus {
	readonly endTime?: string | undefined;
	readonly message?: string | undefined;
	readonly runState?: ("Canceled" | "Canceling" | "Failed" | "PartiallySucceeded" | "Running") | undefined;
	readonly runSubState?: ("Building" | "Customizing" | "Distributing" | "Queued") | undefined;
	readonly startTime?: string | undefined;
}
export interface ImageTemplateProperties {
	readonly buildTimeoutInMinutes?: number | undefined;
	readonly customize?: ImageTemplateCustomizer[] | undefined;
	readonly distribute: ImageTemplateDistributor[];
	readonly exactStagingResourceGroup?: string | undefined;
	readonly lastRunStatus?: ImageTemplateLastRunStatus | undefined;
	readonly provisioningError?: ProvisioningError | undefined;
	readonly provisioningState?: ("Creating" | "Deleting" | "Failed" | "Succeeded") | undefined;
	readonly source: ImageTemplateSource;
	readonly stagingResourceGroup?: string | undefined;
	readonly validate?: ImageTemplatePropertiesValidate | undefined;
	readonly vmProfile?: ImageTemplateVmProfile | undefined;
}
export interface ImageTemplatePropertiesValidate {
	readonly continueDistributeOnFailure?: boolean | undefined;
	readonly inVMValidations?: ImageTemplateInVMValidator[] | undefined;
	readonly sourceValidationOnly?: boolean | undefined;
}
export interface ImageTemplateSource {}
export interface ImageTemplateVmProfile {
	readonly osDiskSizeGB?: number | undefined;
	readonly userAssignedIdentities?: string[] | undefined;
	readonly vmSize?: string | undefined;
	readonly vnetConfig?: VirtualNetworkConfig | undefined;
}
export interface PlatformImagePurchasePlan {
	readonly planName: string;
	readonly planProduct: string;
	readonly planPublisher: string;
}
export interface ProvisioningError {
	readonly message?: string | undefined;
	readonly provisioningErrorCode?:
		| (
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
				| "UnsupportedValidatorType"
		  )
		| undefined;
}
export interface RunOutputProperties {
	readonly artifactId?: string | undefined;
	readonly artifactUri?: string | undefined;
	readonly provisioningState?: ("Creating" | "Deleting" | "Failed" | "Succeeded") | undefined;
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
export interface VirtualNetworkConfig {
	readonly proxyVmSize?: string | undefined;
	readonly subnetId?: string | undefined;
}
export default {
	imageTemplates: imageTemplates,
	"imageTemplates/runOutputs": imageTemplates_runOutputs,
};
