import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class labs extends ArmResource<labsComponentInputs> implements labsComponentOutputs {
	constructor(entity: ADKEntity, options: labsComponentInputs) {
		super(entity, options.name, "Microsoft.DevTestLab/labs", "2016-05-15", options);
	}
	public readonly apiVersion: "2016-05-15";
	public readonly id: string;
	public readonly type: "Microsoft.DevTestLab/labs";
}
export interface labsComponentOutputs {
	readonly apiVersion: "2016-05-15";
	readonly id: string;
	readonly type: "Microsoft.DevTestLab/labs";
}
export interface labsComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly properties?: LabProperties;
	readonly tags?: ResourceTags;
}
export class labs_artifactsources
	extends ArmResource<labs_artifactsourcesComponentInputs>
	implements labs_artifactsourcesComponentOutputs
{
	constructor(entity: ADKEntity, options: labs_artifactsourcesComponentInputs) {
		super(entity, options.name, "Microsoft.DevTestLab/labs/artifactsources", "2016-05-15", options);
	}
	public readonly apiVersion: "2016-05-15";
	public readonly id: string;
	public readonly type: "Microsoft.DevTestLab/labs/artifactsources";
}
export interface labs_artifactsourcesComponentOutputs {
	readonly apiVersion: "2016-05-15";
	readonly id: string;
	readonly type: "Microsoft.DevTestLab/labs/artifactsources";
}
export interface labs_artifactsourcesComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly properties: ArtifactSourceProperties;
	readonly tags?: ResourceTags;
}
export class labs_artifactsources_armtemplates
	extends ArmResource<labs_artifactsources_armtemplatesComponentInputs>
	implements labs_artifactsources_armtemplatesComponentOutputs
{
	constructor(entity: ADKEntity, options: labs_artifactsources_armtemplatesComponentInputs) {
		super(entity, options.name, "Microsoft.DevTestLab/labs/artifactsources/armtemplates", "2016-05-15", options);
	}
	public readonly apiVersion: "2016-05-15";
	public readonly id: string;
	public readonly type: "Microsoft.DevTestLab/labs/artifactsources/armtemplates";
}
export interface labs_artifactsources_armtemplatesComponentOutputs {
	readonly apiVersion: "2016-05-15";
	readonly id: string;
	readonly type: "Microsoft.DevTestLab/labs/artifactsources/armtemplates";
}
export interface labs_artifactsources_armtemplatesComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly properties?: ArmTemplateProperties;
	readonly tags?: ResourceTags;
}
export class labs_artifactsources_artifacts
	extends ArmResource<labs_artifactsources_artifactsComponentInputs>
	implements labs_artifactsources_artifactsComponentOutputs
{
	constructor(entity: ADKEntity, options: labs_artifactsources_artifactsComponentInputs) {
		super(entity, options.name, "Microsoft.DevTestLab/labs/artifactsources/artifacts", "2016-05-15", options);
	}
	public readonly apiVersion: "2016-05-15";
	public readonly id: string;
	public readonly type: "Microsoft.DevTestLab/labs/artifactsources/artifacts";
}
export interface labs_artifactsources_artifactsComponentOutputs {
	readonly apiVersion: "2016-05-15";
	readonly id: string;
	readonly type: "Microsoft.DevTestLab/labs/artifactsources/artifacts";
}
export interface labs_artifactsources_artifactsComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly properties?: ArtifactProperties;
	readonly tags?: ResourceTags;
}
export class labs_costs extends ArmResource<labs_costsComponentInputs> implements labs_costsComponentOutputs {
	constructor(entity: ADKEntity, options: labs_costsComponentInputs) {
		super(entity, options.name, "Microsoft.DevTestLab/labs/costs", "2016-05-15", options);
	}
	public readonly apiVersion: "2016-05-15";
	public readonly id: string;
	public readonly type: "Microsoft.DevTestLab/labs/costs";
}
export interface labs_costsComponentOutputs {
	readonly apiVersion: "2016-05-15";
	readonly id: string;
	readonly type: "Microsoft.DevTestLab/labs/costs";
}
export interface labs_costsComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly properties: LabCostProperties;
	readonly tags?: ResourceTags;
}
export class labs_customimages
	extends ArmResource<labs_customimagesComponentInputs>
	implements labs_customimagesComponentOutputs
{
	constructor(entity: ADKEntity, options: labs_customimagesComponentInputs) {
		super(entity, options.name, "Microsoft.DevTestLab/labs/customimages", "2016-05-15", options);
	}
	public readonly apiVersion: "2016-05-15";
	public readonly id: string;
	public readonly type: "Microsoft.DevTestLab/labs/customimages";
}
export interface labs_customimagesComponentOutputs {
	readonly apiVersion: "2016-05-15";
	readonly id: string;
	readonly type: "Microsoft.DevTestLab/labs/customimages";
}
export interface labs_customimagesComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly properties: CustomImageProperties;
	readonly tags?: ResourceTags;
}
export class labs_formulas extends ArmResource<labs_formulasComponentInputs> implements labs_formulasComponentOutputs {
	constructor(entity: ADKEntity, options: labs_formulasComponentInputs) {
		super(entity, options.name, "Microsoft.DevTestLab/labs/formulas", "2016-05-15", options);
	}
	public readonly apiVersion: "2016-05-15";
	public readonly id: string;
	public readonly type: "Microsoft.DevTestLab/labs/formulas";
}
export interface labs_formulasComponentOutputs {
	readonly apiVersion: "2016-05-15";
	readonly id: string;
	readonly type: "Microsoft.DevTestLab/labs/formulas";
}
export interface labs_formulasComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly properties: FormulaProperties;
	readonly tags?: ResourceTags;
}
export class labs_notificationchannels
	extends ArmResource<labs_notificationchannelsComponentInputs>
	implements labs_notificationchannelsComponentOutputs
{
	constructor(entity: ADKEntity, options: labs_notificationchannelsComponentInputs) {
		super(entity, options.name, "Microsoft.DevTestLab/labs/notificationchannels", "2016-05-15", options);
	}
	public readonly apiVersion: "2016-05-15";
	public readonly id: string;
	public readonly type: "Microsoft.DevTestLab/labs/notificationchannels";
}
export interface labs_notificationchannelsComponentOutputs {
	readonly apiVersion: "2016-05-15";
	readonly id: string;
	readonly type: "Microsoft.DevTestLab/labs/notificationchannels";
}
export interface labs_notificationchannelsComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly properties: NotificationChannelProperties;
	readonly tags?: ResourceTags;
}
export class labs_policysets_policies
	extends ArmResource<labs_policysets_policiesComponentInputs>
	implements labs_policysets_policiesComponentOutputs
{
	constructor(entity: ADKEntity, options: labs_policysets_policiesComponentInputs) {
		super(entity, options.name, "Microsoft.DevTestLab/labs/policysets/policies", "2016-05-15", options);
	}
	public readonly apiVersion: "2016-05-15";
	public readonly id: string;
	public readonly type: "Microsoft.DevTestLab/labs/policysets/policies";
}
export interface labs_policysets_policiesComponentOutputs {
	readonly apiVersion: "2016-05-15";
	readonly id: string;
	readonly type: "Microsoft.DevTestLab/labs/policysets/policies";
}
export interface labs_policysets_policiesComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly properties: PolicyProperties;
	readonly tags?: ResourceTags;
}
export class labs_schedules extends ArmResource<labs_schedulesComponentInputs> implements labs_schedulesComponentOutputs {
	constructor(entity: ADKEntity, options: labs_schedulesComponentInputs) {
		super(entity, options.name, "Microsoft.DevTestLab/labs/schedules", "2016-05-15", options);
	}
	public readonly apiVersion: "2016-05-15";
	public readonly id: string;
	public readonly type: "Microsoft.DevTestLab/labs/schedules";
}
export interface labs_schedulesComponentOutputs {
	readonly apiVersion: "2016-05-15";
	readonly id: string;
	readonly type: "Microsoft.DevTestLab/labs/schedules";
}
export interface labs_schedulesComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly properties: ScheduleProperties;
	readonly tags?: ResourceTags;
}
export class labs_servicerunners
	extends ArmResource<labs_servicerunnersComponentInputs>
	implements labs_servicerunnersComponentOutputs
{
	constructor(entity: ADKEntity, options: labs_servicerunnersComponentInputs) {
		super(entity, options.name, "Microsoft.DevTestLab/labs/servicerunners", "2016-05-15", options);
	}
	public readonly apiVersion: "2016-05-15";
	public readonly id: string;
	public readonly type: "Microsoft.DevTestLab/labs/servicerunners";
}
export interface labs_servicerunnersComponentOutputs {
	readonly apiVersion: "2016-05-15";
	readonly id: string;
	readonly type: "Microsoft.DevTestLab/labs/servicerunners";
}
export interface labs_servicerunnersComponentInputs {
	readonly identity?: IdentityProperties;
	readonly location?: string;
	readonly name: string;
	readonly tags?: ResourceTags;
}
export class labs_users extends ArmResource<labs_usersComponentInputs> implements labs_usersComponentOutputs {
	constructor(entity: ADKEntity, options: labs_usersComponentInputs) {
		super(entity, options.name, "Microsoft.DevTestLab/labs/users", "2016-05-15", options);
	}
	public readonly apiVersion: "2016-05-15";
	public readonly id: string;
	public readonly type: "Microsoft.DevTestLab/labs/users";
}
export interface labs_usersComponentOutputs {
	readonly apiVersion: "2016-05-15";
	readonly id: string;
	readonly type: "Microsoft.DevTestLab/labs/users";
}
export interface labs_usersComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly properties?: UserProperties;
	readonly tags?: ResourceTags;
}
export class labs_users_disks
	extends ArmResource<labs_users_disksComponentInputs>
	implements labs_users_disksComponentOutputs
{
	constructor(entity: ADKEntity, options: labs_users_disksComponentInputs) {
		super(entity, options.name, "Microsoft.DevTestLab/labs/users/disks", "2016-05-15", options);
	}
	public readonly apiVersion: "2016-05-15";
	public readonly id: string;
	public readonly type: "Microsoft.DevTestLab/labs/users/disks";
}
export interface labs_users_disksComponentOutputs {
	readonly apiVersion: "2016-05-15";
	readonly id: string;
	readonly type: "Microsoft.DevTestLab/labs/users/disks";
}
export interface labs_users_disksComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly properties: DiskProperties;
	readonly tags?: ResourceTags;
}
export class labs_users_environments
	extends ArmResource<labs_users_environmentsComponentInputs>
	implements labs_users_environmentsComponentOutputs
{
	constructor(entity: ADKEntity, options: labs_users_environmentsComponentInputs) {
		super(entity, options.name, "Microsoft.DevTestLab/labs/users/environments", "2016-05-15", options);
	}
	public readonly apiVersion: "2016-05-15";
	public readonly id: string;
	public readonly type: "Microsoft.DevTestLab/labs/users/environments";
}
export interface labs_users_environmentsComponentOutputs {
	readonly apiVersion: "2016-05-15";
	readonly id: string;
	readonly type: "Microsoft.DevTestLab/labs/users/environments";
}
export interface labs_users_environmentsComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly properties: EnvironmentProperties;
	readonly tags?: ResourceTags;
}
export class labs_users_secrets
	extends ArmResource<labs_users_secretsComponentInputs>
	implements labs_users_secretsComponentOutputs
{
	constructor(entity: ADKEntity, options: labs_users_secretsComponentInputs) {
		super(entity, options.name, "Microsoft.DevTestLab/labs/users/secrets", "2016-05-15", options);
	}
	public readonly apiVersion: "2016-05-15";
	public readonly id: string;
	public readonly type: "Microsoft.DevTestLab/labs/users/secrets";
}
export interface labs_users_secretsComponentOutputs {
	readonly apiVersion: "2016-05-15";
	readonly id: string;
	readonly type: "Microsoft.DevTestLab/labs/users/secrets";
}
export interface labs_users_secretsComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly properties: SecretProperties;
	readonly tags?: ResourceTags;
}
export class labs_virtualmachines
	extends ArmResource<labs_virtualmachinesComponentInputs>
	implements labs_virtualmachinesComponentOutputs
{
	constructor(entity: ADKEntity, options: labs_virtualmachinesComponentInputs) {
		super(entity, options.name, "Microsoft.DevTestLab/labs/virtualmachines", "2016-05-15", options);
	}
	public readonly apiVersion: "2016-05-15";
	public readonly id: string;
	public readonly type: "Microsoft.DevTestLab/labs/virtualmachines";
}
export interface labs_virtualmachinesComponentOutputs {
	readonly apiVersion: "2016-05-15";
	readonly id: string;
	readonly type: "Microsoft.DevTestLab/labs/virtualmachines";
}
export interface labs_virtualmachinesComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly properties: LabVirtualMachineProperties;
	readonly tags?: ResourceTags;
}
export class labs_virtualmachines_schedules
	extends ArmResource<labs_virtualmachines_schedulesComponentInputs>
	implements labs_virtualmachines_schedulesComponentOutputs
{
	constructor(entity: ADKEntity, options: labs_virtualmachines_schedulesComponentInputs) {
		super(entity, options.name, "Microsoft.DevTestLab/labs/virtualmachines/schedules", "2016-05-15", options);
	}
	public readonly apiVersion: "2016-05-15";
	public readonly id: string;
	public readonly type: "Microsoft.DevTestLab/labs/virtualmachines/schedules";
}
export interface labs_virtualmachines_schedulesComponentOutputs {
	readonly apiVersion: "2016-05-15";
	readonly id: string;
	readonly type: "Microsoft.DevTestLab/labs/virtualmachines/schedules";
}
export interface labs_virtualmachines_schedulesComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly properties: ScheduleProperties;
	readonly tags?: ResourceTags;
}
export class labs_virtualnetworks
	extends ArmResource<labs_virtualnetworksComponentInputs>
	implements labs_virtualnetworksComponentOutputs
{
	constructor(entity: ADKEntity, options: labs_virtualnetworksComponentInputs) {
		super(entity, options.name, "Microsoft.DevTestLab/labs/virtualnetworks", "2016-05-15", options);
	}
	public readonly apiVersion: "2016-05-15";
	public readonly id: string;
	public readonly type: "Microsoft.DevTestLab/labs/virtualnetworks";
}
export interface labs_virtualnetworksComponentOutputs {
	readonly apiVersion: "2016-05-15";
	readonly id: string;
	readonly type: "Microsoft.DevTestLab/labs/virtualnetworks";
}
export interface labs_virtualnetworksComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly properties?: VirtualNetworkProperties;
	readonly tags?: ResourceTags;
}
export class schedules extends ArmResource<schedulesComponentInputs> implements schedulesComponentOutputs {
	constructor(entity: ADKEntity, options: schedulesComponentInputs) {
		super(entity, options.name, "Microsoft.DevTestLab/schedules", "2016-05-15", options);
	}
	public readonly apiVersion: "2016-05-15";
	public readonly id: string;
	public readonly type: "Microsoft.DevTestLab/schedules";
}
export interface schedulesComponentOutputs {
	readonly apiVersion: "2016-05-15";
	readonly id: string;
	readonly type: "Microsoft.DevTestLab/schedules";
}
export interface schedulesComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly properties: ScheduleProperties;
	readonly tags?: ResourceTags;
}
export function listApplicable(resource: labs_schedules): ResponseWithContinuationSchedule {
	if (resource.apiVersion !== "2016-05-15") {
		throw new Error(`listApplicable is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.DevTestLab/labs/schedules") {
		throw new Error(`listApplicable is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export function listApplicableSchedules(resource: labs_virtualmachines): ApplicableSchedule {
	if (resource.apiVersion !== "2016-05-15") {
		throw new Error(`listApplicableSchedules is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.DevTestLab/labs/virtualmachines") {
		throw new Error(`listApplicableSchedules is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export function listVhds(resource: labs): ResponseWithContinuationLabVhd {
	if (resource.apiVersion !== "2016-05-15") {
		throw new Error(`listVhds is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.DevTestLab/labs") {
		throw new Error(`listVhds is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export interface ApplicableSchedule {
	readonly id?: string;
	readonly location?: string;
	readonly name?: string;
	readonly properties: ApplicableScheduleProperties;
	readonly tags?: ResourceTags;
	readonly type?: string;
}
export interface ApplicableScheduleProperties {
	readonly labVmsShutdown?: Schedule;
	readonly labVmsStartup?: Schedule;
}
export interface ArmTemplateParameterProperties {
	readonly name?: string;
	readonly value?: string;
}
export interface ArmTemplateProperties {
	readonly contents?: any;
	readonly createdDate?: string;
	readonly description?: string;
	readonly displayName?: string;
	readonly icon?: string;
	readonly parametersValueFilesInfo?: ParametersValueFileInfo[];
	readonly publisher?: string;
}
export interface ArtifactDeploymentStatusProperties {
	readonly artifactsApplied?: number;
	readonly deploymentStatus?: string;
	readonly totalArtifacts?: number;
}
export interface ArtifactInstallProperties {
	readonly artifactId?: string;
	readonly deploymentStatusMessage?: string;
	readonly installTime?: string;
	readonly parameters?: ArtifactParameterProperties[];
	readonly status?: string;
	readonly vmExtensionStatusMessage?: string;
}
export interface ArtifactParameterProperties {
	readonly name?: string;
	readonly value?: string;
}
export interface ArtifactProperties {
	readonly createdDate?: string;
	readonly description?: string;
	readonly filePath?: string;
	readonly icon?: string;
	readonly parameters?: any;
	readonly publisher?: string;
	readonly targetOsType?: string;
	readonly title?: string;
}
export interface ArtifactSourceProperties {
	readonly armTemplateFolderPath?: string;
	readonly branchRef?: string;
	readonly createdDate?: string;
	readonly displayName?: string;
	readonly folderPath?: string;
	readonly provisioningState?: string;
	readonly securityToken?: string;
	readonly sourceType?: "GitHub" | "VsoGit";
	readonly status?: "Disabled" | "Enabled";
	readonly uniqueIdentifier?: string;
	readonly uri?: string;
}
export interface BulkCreationParameters {
	readonly instanceCount?: number;
}
export interface ComputeDataDisk {
	readonly diskSizeGiB?: number;
	readonly diskUri?: string;
	readonly managedDiskId?: string;
	readonly name?: string;
}
export interface ComputeVmInstanceViewStatus {
	readonly code?: string;
	readonly displayStatus?: string;
	readonly message?: string;
}
export interface ComputeVmProperties {
	readonly dataDiskIds?: string[];
	readonly dataDisks?: ComputeDataDisk[];
	readonly networkInterfaceId?: string;
	readonly osDiskId?: string;
	readonly osType?: string;
	readonly statuses?: ComputeVmInstanceViewStatus[];
	readonly vmSize?: string;
}
export interface CostThresholdProperties {
	readonly displayOnChart?: "Disabled" | "Enabled";
	readonly notificationSent?: string;
	readonly percentageThreshold?: PercentageCostThresholdProperties;
	readonly sendNotificationWhenExceeded?: "Disabled" | "Enabled";
	readonly thresholdId?: string;
}
export interface CustomImageProperties {
	readonly author?: string;
	readonly creationDate?: string;
	readonly description?: string;
	readonly managedImageId?: string;
	readonly provisioningState?: string;
	readonly uniqueIdentifier?: string;
	readonly vhd?: CustomImagePropertiesCustom;
	readonly vm?: CustomImagePropertiesFromVm;
}
export interface CustomImagePropertiesCustom {
	readonly imageName?: string;
	readonly osType: "Linux" | "None" | "Windows";
	readonly sysPrep?: boolean;
}
export interface CustomImagePropertiesFromVm {
	readonly linuxOsInfo?: LinuxOsInfo;
	readonly sourceVmId?: string;
	readonly windowsOsInfo?: WindowsOsInfo;
}
export interface DayDetails {
	readonly time?: string;
}
export interface DiskProperties {
	readonly createdDate?: string;
	readonly diskBlobName?: string;
	readonly diskSizeGiB?: number;
	readonly diskType?: "Premium" | "Standard";
	readonly diskUri?: string;
	readonly hostCaching?: string;
	readonly leasedByLabVmId?: string;
	readonly managedDiskId?: string;
	readonly provisioningState?: string;
	readonly uniqueIdentifier?: string;
}
export interface EnvironmentDeploymentProperties {
	readonly armTemplateId?: string;
	readonly parameters?: ArmTemplateParameterProperties[];
}
export interface EnvironmentProperties {
	readonly armTemplateDisplayName?: string;
	readonly createdByUser?: string;
	readonly deploymentProperties?: EnvironmentDeploymentProperties;
	readonly provisioningState?: string;
	readonly resourceGroupId?: string;
	readonly uniqueIdentifier?: string;
}
export interface Event {
	readonly eventName?: "AutoShutdown" | "Cost";
}
export interface ExternalSubnet {
	readonly id?: string;
	readonly name?: string;
}
export interface FormulaProperties {
	readonly author?: string;
	readonly creationDate?: string;
	readonly description?: string;
	readonly formulaContent?: LabVirtualMachineCreationParameter;
	readonly osType?: string;
	readonly provisioningState?: string;
	readonly uniqueIdentifier?: string;
	readonly vm?: FormulaPropertiesFromVm;
}
export interface FormulaPropertiesFromVm {
	readonly labVmId?: string;
}
export interface GalleryImageReference {
	readonly offer?: string;
	readonly osType?: string;
	readonly publisher?: string;
	readonly sku?: string;
	readonly version?: string;
}
export interface HourDetails {
	readonly minute?: number;
}
export interface IdentityProperties {
	readonly clientSecretUrl?: string;
	readonly principalId?: string;
	readonly tenantId?: string;
	readonly type?: string;
}
export interface InboundNatRule {
	readonly backendPort?: number;
	readonly frontendPort?: number;
	readonly transportProtocol?: "Tcp" | "Udp";
}
export interface LabCostDetailsProperties {
	readonly cost?: number;
	readonly costType?: "Projected" | "Reported" | "Unavailable";
	readonly date?: string;
}
export interface LabCostProperties {
	readonly createdDate?: string;
	readonly currencyCode?: string;
	readonly endDateTime?: string;
	readonly labCostDetails?: LabCostDetailsProperties[];
	readonly labCostSummary?: LabCostSummaryProperties;
	readonly provisioningState?: string;
	readonly resourceCosts?: LabResourceCostProperties[];
	readonly startDateTime?: string;
	readonly targetCost?: TargetCostProperties;
	readonly uniqueIdentifier?: string;
}
export interface LabCostSummaryProperties {
	readonly estimatedLabCost?: number;
}
export interface LabProperties {
	readonly artifactsStorageAccount?: string;
	readonly createdDate?: string;
	readonly defaultPremiumStorageAccount?: string;
	readonly defaultStorageAccount?: string;
	readonly labStorageType?: "Premium" | "Standard";
	readonly premiumDataDisks?: "Disabled" | "Enabled";
	readonly premiumDataDiskStorageAccount?: string;
	readonly provisioningState?: string;
	readonly uniqueIdentifier?: string;
	readonly vaultName?: string;
}
export interface LabResourceCostProperties {
	readonly externalResourceId?: string;
	readonly resourceCost?: number;
	readonly resourceId?: string;
	readonly resourcename?: string;
	readonly resourceOwner?: string;
	readonly resourcePricingTier?: string;
	readonly resourceStatus?: string;
	readonly resourceType?: string;
	readonly resourceUId?: string;
}
export interface LabVhd {
	readonly id?: string;
}
export interface LabVirtualMachineCreationParameter {
	readonly location?: string;
	readonly name?: string;
	readonly properties?: LabVirtualMachineCreationParameterProperties;
	readonly tags?: LabVirtualMachineCreationParameterTags;
}
export interface LabVirtualMachineCreationParameterProperties {
	readonly allowClaim?: boolean;
	readonly applicableSchedule?: ApplicableSchedule;
	readonly artifactDeploymentStatus?: ArtifactDeploymentStatusProperties;
	readonly artifacts?: ArtifactInstallProperties[];
	readonly bulkCreationParameters?: BulkCreationParameters;
	readonly computeVm?: ComputeVmProperties;
	readonly createdByUser?: string;
	readonly createdByUserId?: string;
	readonly createdDate?: string;
	readonly customImageId?: string;
	readonly disallowPublicIpAddress?: boolean;
	readonly environmentId?: string;
	readonly expirationDate?: string;
	readonly fqdn?: string;
	readonly galleryImageReference?: GalleryImageReference;
	readonly isAuthenticationWithSshKey?: boolean;
	readonly labSubnetName?: string;
	readonly labVirtualNetworkId?: string;
	readonly networkInterface?: NetworkInterfaceProperties;
	readonly notes?: string;
	readonly osType?: string;
	readonly ownerObjectId?: string;
	readonly ownerUserPrincipalName?: string;
	readonly password?: string;
	readonly provisioningState?: string;
	readonly size?: string;
	readonly sshKey?: string;
	readonly storageType?: string;
	readonly uniqueIdentifier?: string;
	readonly userName?: string;
	readonly virtualMachineCreationSource?: "FromCustomImage" | "FromGalleryImage";
}
export interface LabVirtualMachineCreationParameterTags {
	readonly [key: string]: string;
}
export interface LabVirtualMachineProperties {
	readonly allowClaim?: boolean;
	readonly applicableSchedule?: ApplicableSchedule;
	readonly artifactDeploymentStatus?: ArtifactDeploymentStatusProperties;
	readonly artifacts?: ArtifactInstallProperties[];
	readonly computeId?: string;
	readonly computeVm?: ComputeVmProperties;
	readonly createdByUser?: string;
	readonly createdByUserId?: string;
	readonly createdDate?: string;
	readonly customImageId?: string;
	readonly disallowPublicIpAddress?: boolean;
	readonly environmentId?: string;
	readonly expirationDate?: string;
	readonly fqdn?: string;
	readonly galleryImageReference?: GalleryImageReference;
	readonly isAuthenticationWithSshKey?: boolean;
	readonly labSubnetName?: string;
	readonly labVirtualNetworkId?: string;
	readonly networkInterface?: NetworkInterfaceProperties;
	readonly notes?: string;
	readonly osType?: string;
	readonly ownerObjectId?: string;
	readonly ownerUserPrincipalName?: string;
	readonly password?: string;
	readonly provisioningState?: string;
	readonly size?: string;
	readonly sshKey?: string;
	readonly storageType?: string;
	readonly uniqueIdentifier?: string;
	readonly userName?: string;
	readonly virtualMachineCreationSource?: "FromCustomImage" | "FromGalleryImage";
}
export interface LinuxOsInfo {
	readonly linuxOsState?: "DeprovisionApplied" | "DeprovisionRequested" | "NonDeprovisioned";
}
export interface NetworkInterfaceProperties {
	readonly dnsName?: string;
	readonly privateIpAddress?: string;
	readonly publicIpAddress?: string;
	readonly publicIpAddressId?: string;
	readonly rdpAuthority?: string;
	readonly sharedPublicIpAddressConfiguration?: SharedPublicIpAddressConfiguration;
	readonly sshAuthority?: string;
	readonly subnetId?: string;
	readonly virtualNetworkId?: string;
}
export interface NotificationChannelProperties {
	readonly createdDate?: string;
	readonly description?: string;
	readonly events?: Event[];
	readonly provisioningState?: string;
	readonly uniqueIdentifier?: string;
	readonly webHookUrl?: string;
}
export interface NotificationSettings {
	readonly status?: "Disabled" | "Enabled";
	readonly timeInMinutes?: number;
	readonly webhookUrl?: string;
}
export interface ParametersValueFileInfo {
	readonly fileName?: string;
	readonly parametersValueInfo?: any;
}
export interface PercentageCostThresholdProperties {
	readonly thresholdValue?: number;
}
export interface PolicyProperties {
	readonly createdDate?: string;
	readonly description?: string;
	readonly evaluatorType?: "AllowedValuesPolicy" | "MaxValuePolicy";
	readonly factData?: string;
	readonly factName?:
		| "GalleryImage"
		| "LabPremiumVmCount"
		| "LabTargetCost"
		| "LabVmCount"
		| "LabVmSize"
		| "UserOwnedLabPremiumVmCount"
		| "UserOwnedLabVmCount"
		| "UserOwnedLabVmCountInSubnet";
	readonly provisioningState?: string;
	readonly status?: "Disabled" | "Enabled";
	readonly threshold?: string;
	readonly uniqueIdentifier?: string;
}
export interface Port {
	readonly backendPort?: number;
	readonly transportProtocol?: "Tcp" | "Udp";
}
export interface ResourceTags {
	readonly [key: string]: string;
}
export interface ResponseWithContinuationLabVhd {
	readonly nextLink?: string;
	readonly value?: LabVhd[];
}
export interface ResponseWithContinuationSchedule {
	readonly nextLink?: string;
	readonly value?: Schedule[];
}
export interface Schedule {
	readonly id?: string;
	readonly location?: string;
	readonly name?: string;
	readonly properties: ScheduleProperties;
	readonly tags?: ResourceTags;
	readonly type?: string;
}
export interface ScheduleProperties {
	readonly createdDate?: string;
	readonly dailyRecurrence?: DayDetails;
	readonly hourlyRecurrence?: HourDetails;
	readonly notificationSettings?: NotificationSettings;
	readonly provisioningState?: string;
	readonly status?: "Disabled" | "Enabled";
	readonly targetResourceId?: string;
	readonly taskType?: string;
	readonly timeZoneId?: string;
	readonly uniqueIdentifier?: string;
	readonly weeklyRecurrence?: WeekDetails;
}
export interface SecretProperties {
	readonly provisioningState?: string;
	readonly uniqueIdentifier?: string;
	readonly value?: string;
}
export interface SharedPublicIpAddressConfiguration {
	readonly inboundNatRules?: InboundNatRule[];
}
export interface Subnet {
	readonly allowPublicIp?: "Allow" | "Default" | "Deny";
	readonly labSubnetName?: string;
	readonly resourceId?: string;
}
export interface SubnetOverride {
	readonly labSubnetName?: string;
	readonly resourceId?: string;
	readonly sharedPublicIpAddressConfiguration?: SubnetSharedPublicIpAddressConfiguration;
	readonly useInVmCreationPermission?: "Allow" | "Default" | "Deny";
	readonly usePublicIpAddressPermission?: "Allow" | "Default" | "Deny";
	readonly virtualNetworkPoolName?: string;
}
export interface SubnetSharedPublicIpAddressConfiguration {
	readonly allowedPorts?: Port[];
}
export interface TargetCostProperties {
	readonly costThresholds?: CostThresholdProperties[];
	readonly cycleEndDateTime?: string;
	readonly cycleStartDateTime?: string;
	readonly cycleType?: "CalendarMonth" | "Custom";
	readonly status?: "Disabled" | "Enabled";
	readonly target?: number;
}
export interface UserIdentity {
	readonly appId?: string;
	readonly objectId?: string;
	readonly principalId?: string;
	readonly principalName?: string;
	readonly tenantId?: string;
}
export interface UserProperties {
	readonly createdDate?: string;
	readonly identity?: UserIdentity;
	readonly provisioningState?: string;
	readonly secretStore?: UserSecretStore;
	readonly uniqueIdentifier?: string;
}
export interface UserSecretStore {
	readonly keyVaultId?: string;
	readonly keyVaultUri?: string;
}
export interface VirtualNetworkProperties {
	readonly allowedSubnets?: Subnet[];
	readonly createdDate?: string;
	readonly description?: string;
	readonly externalProviderResourceId?: string;
	readonly externalSubnets?: ExternalSubnet[];
	readonly provisioningState?: string;
	readonly subnetOverrides?: SubnetOverride[];
	readonly uniqueIdentifier?: string;
}
export interface WeekDetails {
	readonly time?: string;
	readonly weekdays?: string[];
}
export interface WindowsOsInfo {
	readonly windowsOsState?: "NonSysprepped" | "SysprepApplied" | "SysprepRequested";
}
export default {
	labs: labs,
	"labs/artifactsources": labs_artifactsources,
	"labs/artifactsources/armtemplates": labs_artifactsources_armtemplates,
	"labs/artifactsources/artifacts": labs_artifactsources_artifacts,
	"labs/costs": labs_costs,
	"labs/customimages": labs_customimages,
	"labs/formulas": labs_formulas,
	"labs/notificationchannels": labs_notificationchannels,
	"labs/policysets/policies": labs_policysets_policies,
	"labs/schedules": labs_schedules,
	"labs/servicerunners": labs_servicerunners,
	"labs/users": labs_users,
	"labs/users/disks": labs_users_disks,
	"labs/users/environments": labs_users_environments,
	"labs/users/secrets": labs_users_secrets,
	"labs/virtualmachines": labs_virtualmachines,
	"labs/virtualmachines/schedules": labs_virtualmachines_schedules,
	"labs/virtualnetworks": labs_virtualnetworks,
	schedules: schedules,
};
