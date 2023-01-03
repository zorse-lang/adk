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
	readonly properties?: ImageTemplateProperties | undefined;
	readonly tags?: ResourceTags | undefined;
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
export interface ImageTemplateLastRunStatus {
	readonly endTime?: string | undefined;
	readonly message?: string | undefined;
	readonly runState?: ("Canceled" | "Canceling" | "Failed" | "PartiallySucceeded" | "Running") | undefined;
	readonly runSubState?: ("Building" | "Customizing" | "Distributing") | undefined;
	readonly startTime?: string | undefined;
}
export interface ImageTemplateProperties {
	readonly buildTimeoutInMinutes?: number | undefined;
	readonly customize?: ImageTemplateCustomizer[] | undefined;
	readonly distribute: ImageTemplateDistributor[];
	readonly lastRunStatus?: ImageTemplateLastRunStatus | undefined;
	readonly provisioningError?: ProvisioningError | undefined;
	readonly provisioningState?: ("Creating" | "Deleting" | "Failed" | "Succeeded") | undefined;
	readonly source: ImageTemplateSource;
	readonly vmProfile?: ImageTemplateVmProfile | undefined;
}
export interface ImageTemplateSource {}
export interface ImageTemplateVmProfile {
	readonly osDiskSizeGB?: number | undefined;
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
				| "NoCustomizerScript"
				| "Other"
				| "ServerError"
				| "UnsupportedCustomizerType"
		  )
		| undefined;
}
export interface ResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface VirtualNetworkConfig {
	readonly subnetId?: string | undefined;
}
export default {
	imageTemplates: imageTemplates,
};
