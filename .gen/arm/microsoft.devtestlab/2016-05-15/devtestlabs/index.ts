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
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: LabProperties | undefined;
	readonly tags?: ResourceTags | undefined;
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
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties: ArtifactSourceProperties;
	readonly tags?: ResourceTags | undefined;
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
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: ArmTemplateProperties | undefined;
	readonly tags?: ResourceTags | undefined;
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
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: ArtifactProperties | undefined;
	readonly tags?: ResourceTags | undefined;
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
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties: LabCostProperties;
	readonly tags?: ResourceTags | undefined;
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
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties: CustomImageProperties;
	readonly tags?: ResourceTags | undefined;
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
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties: FormulaProperties;
	readonly tags?: ResourceTags | undefined;
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
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties: NotificationChannelProperties;
	readonly tags?: ResourceTags | undefined;
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
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties: PolicyProperties;
	readonly tags?: ResourceTags | undefined;
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
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties: ScheduleProperties;
	readonly tags?: ResourceTags | undefined;
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
	readonly identity?: IdentityProperties | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly tags?: ResourceTags | undefined;
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
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: UserProperties | undefined;
	readonly tags?: ResourceTags | undefined;
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
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties: DiskProperties;
	readonly tags?: ResourceTags | undefined;
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
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties: EnvironmentProperties;
	readonly tags?: ResourceTags | undefined;
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
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties: SecretProperties;
	readonly tags?: ResourceTags | undefined;
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
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties: LabVirtualMachineProperties;
	readonly tags?: ResourceTags | undefined;
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
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties: ScheduleProperties;
	readonly tags?: ResourceTags | undefined;
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
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: VirtualNetworkProperties | undefined;
	readonly tags?: ResourceTags | undefined;
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
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties: ScheduleProperties;
	readonly tags?: ResourceTags | undefined;
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
	readonly id?: string | undefined;
	readonly location?: string | undefined;
	readonly name?: string | undefined;
	readonly properties: ApplicableScheduleProperties;
	readonly tags?: ResourceTags | undefined;
	readonly type?: string | undefined;
}
export interface ApplicableScheduleProperties {
	readonly labVmsShutdown?: Schedule | undefined;
	readonly labVmsStartup?: Schedule | undefined;
}
export interface ArmTemplateParameterProperties {
	readonly name?: string | undefined;
	readonly value?: string | undefined;
}
export interface ArmTemplateProperties {
	readonly contents?: any | undefined;
	readonly createdDate?: string | undefined;
	readonly description?: string | undefined;
	readonly displayName?: string | undefined;
	readonly icon?: string | undefined;
	readonly parametersValueFilesInfo?: ParametersValueFileInfo[] | undefined;
	readonly publisher?: string | undefined;
}
export interface ArtifactDeploymentStatusProperties {
	readonly artifactsApplied?: number | undefined;
	readonly deploymentStatus?: string | undefined;
	readonly totalArtifacts?: number | undefined;
}
export interface ArtifactInstallProperties {
	readonly artifactId?: string | undefined;
	readonly deploymentStatusMessage?: string | undefined;
	readonly installTime?: string | undefined;
	readonly parameters?: ArtifactParameterProperties[] | undefined;
	readonly status?: string | undefined;
	readonly vmExtensionStatusMessage?: string | undefined;
}
export interface ArtifactParameterProperties {
	readonly name?: string | undefined;
	readonly value?: string | undefined;
}
export interface ArtifactProperties {
	readonly createdDate?: string | undefined;
	readonly description?: string | undefined;
	readonly filePath?: string | undefined;
	readonly icon?: string | undefined;
	readonly parameters?: any | undefined;
	readonly publisher?: string | undefined;
	readonly targetOsType?: string | undefined;
	readonly title?: string | undefined;
}
export interface ArtifactSourceProperties {
	readonly armTemplateFolderPath?: string | undefined;
	readonly branchRef?: string | undefined;
	readonly createdDate?: string | undefined;
	readonly displayName?: string | undefined;
	readonly folderPath?: string | undefined;
	readonly provisioningState?: string | undefined;
	readonly securityToken?: string | undefined;
	readonly sourceType?: ("GitHub" | "VsoGit") | undefined;
	readonly status?: ("Disabled" | "Enabled") | undefined;
	readonly uniqueIdentifier?: string | undefined;
	readonly uri?: string | undefined;
}
export interface BulkCreationParameters {
	readonly instanceCount?: number | undefined;
}
export interface ComputeDataDisk {
	readonly diskSizeGiB?: number | undefined;
	readonly diskUri?: string | undefined;
	readonly managedDiskId?: string | undefined;
	readonly name?: string | undefined;
}
export interface ComputeVmInstanceViewStatus {
	readonly code?: string | undefined;
	readonly displayStatus?: string | undefined;
	readonly message?: string | undefined;
}
export interface ComputeVmProperties {
	readonly dataDiskIds?: string[] | undefined;
	readonly dataDisks?: ComputeDataDisk[] | undefined;
	readonly networkInterfaceId?: string | undefined;
	readonly osDiskId?: string | undefined;
	readonly osType?: string | undefined;
	readonly statuses?: ComputeVmInstanceViewStatus[] | undefined;
	readonly vmSize?: string | undefined;
}
export interface CostThresholdProperties {
	readonly displayOnChart?: ("Disabled" | "Enabled") | undefined;
	readonly notificationSent?: string | undefined;
	readonly percentageThreshold?: PercentageCostThresholdProperties | undefined;
	readonly sendNotificationWhenExceeded?: ("Disabled" | "Enabled") | undefined;
	readonly thresholdId?: string | undefined;
}
export interface CustomImageProperties {
	readonly author?: string | undefined;
	readonly creationDate?: string | undefined;
	readonly description?: string | undefined;
	readonly managedImageId?: string | undefined;
	readonly provisioningState?: string | undefined;
	readonly uniqueIdentifier?: string | undefined;
	readonly vhd?: CustomImagePropertiesCustom | undefined;
	readonly vm?: CustomImagePropertiesFromVm | undefined;
}
export interface CustomImagePropertiesCustom {
	readonly imageName?: string | undefined;
	readonly osType: "Linux" | "None" | "Windows";
	readonly sysPrep?: boolean | undefined;
}
export interface CustomImagePropertiesFromVm {
	readonly linuxOsInfo?: LinuxOsInfo | undefined;
	readonly sourceVmId?: string | undefined;
	readonly windowsOsInfo?: WindowsOsInfo | undefined;
}
export interface DayDetails {
	readonly time?: string | undefined;
}
export interface DiskProperties {
	readonly createdDate?: string | undefined;
	readonly diskBlobName?: string | undefined;
	readonly diskSizeGiB?: number | undefined;
	readonly diskType?: ("Premium" | "Standard") | undefined;
	readonly diskUri?: string | undefined;
	readonly hostCaching?: string | undefined;
	readonly leasedByLabVmId?: string | undefined;
	readonly managedDiskId?: string | undefined;
	readonly provisioningState?: string | undefined;
	readonly uniqueIdentifier?: string | undefined;
}
export interface EnvironmentDeploymentProperties {
	readonly armTemplateId?: string | undefined;
	readonly parameters?: ArmTemplateParameterProperties[] | undefined;
}
export interface EnvironmentProperties {
	readonly armTemplateDisplayName?: string | undefined;
	readonly createdByUser?: string | undefined;
	readonly deploymentProperties?: EnvironmentDeploymentProperties | undefined;
	readonly provisioningState?: string | undefined;
	readonly resourceGroupId?: string | undefined;
	readonly uniqueIdentifier?: string | undefined;
}
export interface Event {
	readonly eventName?: ("AutoShutdown" | "Cost") | undefined;
}
export interface ExternalSubnet {
	readonly id?: string | undefined;
	readonly name?: string | undefined;
}
export interface FormulaProperties {
	readonly author?: string | undefined;
	readonly creationDate?: string | undefined;
	readonly description?: string | undefined;
	readonly formulaContent?: LabVirtualMachineCreationParameter | undefined;
	readonly osType?: string | undefined;
	readonly provisioningState?: string | undefined;
	readonly uniqueIdentifier?: string | undefined;
	readonly vm?: FormulaPropertiesFromVm | undefined;
}
export interface FormulaPropertiesFromVm {
	readonly labVmId?: string | undefined;
}
export interface GalleryImageReference {
	readonly offer?: string | undefined;
	readonly osType?: string | undefined;
	readonly publisher?: string | undefined;
	readonly sku?: string | undefined;
	readonly version?: string | undefined;
}
export interface HourDetails {
	readonly minute?: number | undefined;
}
export interface IdentityProperties {
	readonly clientSecretUrl?: string | undefined;
	readonly principalId?: string | undefined;
	readonly tenantId?: string | undefined;
	readonly type?: string | undefined;
}
export interface InboundNatRule {
	readonly backendPort?: number | undefined;
	readonly frontendPort?: number | undefined;
	readonly transportProtocol?: ("Tcp" | "Udp") | undefined;
}
export interface LabCostDetailsProperties {
	readonly cost?: number | undefined;
	readonly costType?: ("Projected" | "Reported" | "Unavailable") | undefined;
	readonly date?: string | undefined;
}
export interface LabCostProperties {
	readonly createdDate?: string | undefined;
	readonly currencyCode?: string | undefined;
	readonly endDateTime?: string | undefined;
	readonly labCostDetails?: LabCostDetailsProperties[] | undefined;
	readonly labCostSummary?: LabCostSummaryProperties | undefined;
	readonly provisioningState?: string | undefined;
	readonly resourceCosts?: LabResourceCostProperties[] | undefined;
	readonly startDateTime?: string | undefined;
	readonly targetCost?: TargetCostProperties | undefined;
	readonly uniqueIdentifier?: string | undefined;
}
export interface LabCostSummaryProperties {
	readonly estimatedLabCost?: number | undefined;
}
export interface LabProperties {
	readonly artifactsStorageAccount?: string | undefined;
	readonly createdDate?: string | undefined;
	readonly defaultPremiumStorageAccount?: string | undefined;
	readonly defaultStorageAccount?: string | undefined;
	readonly labStorageType?: ("Premium" | "Standard") | undefined;
	readonly premiumDataDisks?: ("Disabled" | "Enabled") | undefined;
	readonly premiumDataDiskStorageAccount?: string | undefined;
	readonly provisioningState?: string | undefined;
	readonly uniqueIdentifier?: string | undefined;
	readonly vaultName?: string | undefined;
}
export interface LabResourceCostProperties {
	readonly externalResourceId?: string | undefined;
	readonly resourceCost?: number | undefined;
	readonly resourceId?: string | undefined;
	readonly resourcename?: string | undefined;
	readonly resourceOwner?: string | undefined;
	readonly resourcePricingTier?: string | undefined;
	readonly resourceStatus?: string | undefined;
	readonly resourceType?: string | undefined;
	readonly resourceUId?: string | undefined;
}
export interface LabVhd {
	readonly id?: string | undefined;
}
export interface LabVirtualMachineCreationParameter {
	readonly location?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: LabVirtualMachineCreationParameterProperties | undefined;
	readonly tags?: LabVirtualMachineCreationParameterTags | undefined;
}
export interface LabVirtualMachineCreationParameterProperties {
	readonly allowClaim?: boolean | undefined;
	readonly applicableSchedule?: ApplicableSchedule | undefined;
	readonly artifactDeploymentStatus?: ArtifactDeploymentStatusProperties | undefined;
	readonly artifacts?: ArtifactInstallProperties[] | undefined;
	readonly bulkCreationParameters?: BulkCreationParameters | undefined;
	readonly computeVm?: ComputeVmProperties | undefined;
	readonly createdByUser?: string | undefined;
	readonly createdByUserId?: string | undefined;
	readonly createdDate?: string | undefined;
	readonly customImageId?: string | undefined;
	readonly disallowPublicIpAddress?: boolean | undefined;
	readonly environmentId?: string | undefined;
	readonly expirationDate?: string | undefined;
	readonly fqdn?: string | undefined;
	readonly galleryImageReference?: GalleryImageReference | undefined;
	readonly isAuthenticationWithSshKey?: boolean | undefined;
	readonly labSubnetName?: string | undefined;
	readonly labVirtualNetworkId?: string | undefined;
	readonly networkInterface?: NetworkInterfaceProperties | undefined;
	readonly notes?: string | undefined;
	readonly osType?: string | undefined;
	readonly ownerObjectId?: string | undefined;
	readonly ownerUserPrincipalName?: string | undefined;
	readonly password?: string | undefined;
	readonly provisioningState?: string | undefined;
	readonly size?: string | undefined;
	readonly sshKey?: string | undefined;
	readonly storageType?: string | undefined;
	readonly uniqueIdentifier?: string | undefined;
	readonly userName?: string | undefined;
	readonly virtualMachineCreationSource?: ("FromCustomImage" | "FromGalleryImage") | undefined;
}
export interface LabVirtualMachineCreationParameterTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface LabVirtualMachineProperties {
	readonly allowClaim?: boolean | undefined;
	readonly applicableSchedule?: ApplicableSchedule | undefined;
	readonly artifactDeploymentStatus?: ArtifactDeploymentStatusProperties | undefined;
	readonly artifacts?: ArtifactInstallProperties[] | undefined;
	readonly computeId?: string | undefined;
	readonly computeVm?: ComputeVmProperties | undefined;
	readonly createdByUser?: string | undefined;
	readonly createdByUserId?: string | undefined;
	readonly createdDate?: string | undefined;
	readonly customImageId?: string | undefined;
	readonly disallowPublicIpAddress?: boolean | undefined;
	readonly environmentId?: string | undefined;
	readonly expirationDate?: string | undefined;
	readonly fqdn?: string | undefined;
	readonly galleryImageReference?: GalleryImageReference | undefined;
	readonly isAuthenticationWithSshKey?: boolean | undefined;
	readonly labSubnetName?: string | undefined;
	readonly labVirtualNetworkId?: string | undefined;
	readonly networkInterface?: NetworkInterfaceProperties | undefined;
	readonly notes?: string | undefined;
	readonly osType?: string | undefined;
	readonly ownerObjectId?: string | undefined;
	readonly ownerUserPrincipalName?: string | undefined;
	readonly password?: string | undefined;
	readonly provisioningState?: string | undefined;
	readonly size?: string | undefined;
	readonly sshKey?: string | undefined;
	readonly storageType?: string | undefined;
	readonly uniqueIdentifier?: string | undefined;
	readonly userName?: string | undefined;
	readonly virtualMachineCreationSource?: ("FromCustomImage" | "FromGalleryImage") | undefined;
}
export interface LinuxOsInfo {
	readonly linuxOsState?: ("DeprovisionApplied" | "DeprovisionRequested" | "NonDeprovisioned") | undefined;
}
export interface NetworkInterfaceProperties {
	readonly dnsName?: string | undefined;
	readonly privateIpAddress?: string | undefined;
	readonly publicIpAddress?: string | undefined;
	readonly publicIpAddressId?: string | undefined;
	readonly rdpAuthority?: string | undefined;
	readonly sharedPublicIpAddressConfiguration?: SharedPublicIpAddressConfiguration | undefined;
	readonly sshAuthority?: string | undefined;
	readonly subnetId?: string | undefined;
	readonly virtualNetworkId?: string | undefined;
}
export interface NotificationChannelProperties {
	readonly createdDate?: string | undefined;
	readonly description?: string | undefined;
	readonly events?: Event[] | undefined;
	readonly provisioningState?: string | undefined;
	readonly uniqueIdentifier?: string | undefined;
	readonly webHookUrl?: string | undefined;
}
export interface NotificationSettings {
	readonly status?: ("Disabled" | "Enabled") | undefined;
	readonly timeInMinutes?: number | undefined;
	readonly webhookUrl?: string | undefined;
}
export interface ParametersValueFileInfo {
	readonly fileName?: string | undefined;
	readonly parametersValueInfo?: any | undefined;
}
export interface PercentageCostThresholdProperties {
	readonly thresholdValue?: number | undefined;
}
export interface PolicyProperties {
	readonly createdDate?: string | undefined;
	readonly description?: string | undefined;
	readonly evaluatorType?: ("AllowedValuesPolicy" | "MaxValuePolicy") | undefined;
	readonly factData?: string | undefined;
	readonly factName?:
		| (
				| "GalleryImage"
				| "LabPremiumVmCount"
				| "LabTargetCost"
				| "LabVmCount"
				| "LabVmSize"
				| "UserOwnedLabPremiumVmCount"
				| "UserOwnedLabVmCount"
				| "UserOwnedLabVmCountInSubnet"
		  )
		| undefined;
	readonly provisioningState?: string | undefined;
	readonly status?: ("Disabled" | "Enabled") | undefined;
	readonly threshold?: string | undefined;
	readonly uniqueIdentifier?: string | undefined;
}
export interface Port {
	readonly backendPort?: number | undefined;
	readonly transportProtocol?: ("Tcp" | "Udp") | undefined;
}
export interface ResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface ResponseWithContinuationLabVhd {
	readonly nextLink?: string | undefined;
	readonly value?: LabVhd[] | undefined;
}
export interface ResponseWithContinuationSchedule {
	readonly nextLink?: string | undefined;
	readonly value?: Schedule[] | undefined;
}
export interface Schedule {
	readonly id?: string | undefined;
	readonly location?: string | undefined;
	readonly name?: string | undefined;
	readonly properties: ScheduleProperties;
	readonly tags?: ResourceTags | undefined;
	readonly type?: string | undefined;
}
export interface ScheduleProperties {
	readonly createdDate?: string | undefined;
	readonly dailyRecurrence?: DayDetails | undefined;
	readonly hourlyRecurrence?: HourDetails | undefined;
	readonly notificationSettings?: NotificationSettings | undefined;
	readonly provisioningState?: string | undefined;
	readonly status?: ("Disabled" | "Enabled") | undefined;
	readonly targetResourceId?: string | undefined;
	readonly taskType?: string | undefined;
	readonly timeZoneId?: string | undefined;
	readonly uniqueIdentifier?: string | undefined;
	readonly weeklyRecurrence?: WeekDetails | undefined;
}
export interface SecretProperties {
	readonly provisioningState?: string | undefined;
	readonly uniqueIdentifier?: string | undefined;
	readonly value?: string | undefined;
}
export interface SharedPublicIpAddressConfiguration {
	readonly inboundNatRules?: InboundNatRule[] | undefined;
}
export interface Subnet {
	readonly allowPublicIp?: ("Allow" | "Default" | "Deny") | undefined;
	readonly labSubnetName?: string | undefined;
	readonly resourceId?: string | undefined;
}
export interface SubnetOverride {
	readonly labSubnetName?: string | undefined;
	readonly resourceId?: string | undefined;
	readonly sharedPublicIpAddressConfiguration?: SubnetSharedPublicIpAddressConfiguration | undefined;
	readonly useInVmCreationPermission?: ("Allow" | "Default" | "Deny") | undefined;
	readonly usePublicIpAddressPermission?: ("Allow" | "Default" | "Deny") | undefined;
	readonly virtualNetworkPoolName?: string | undefined;
}
export interface SubnetSharedPublicIpAddressConfiguration {
	readonly allowedPorts?: Port[] | undefined;
}
export interface TargetCostProperties {
	readonly costThresholds?: CostThresholdProperties[] | undefined;
	readonly cycleEndDateTime?: string | undefined;
	readonly cycleStartDateTime?: string | undefined;
	readonly cycleType?: ("CalendarMonth" | "Custom") | undefined;
	readonly status?: ("Disabled" | "Enabled") | undefined;
	readonly target?: number | undefined;
}
export interface UserIdentity {
	readonly appId?: string | undefined;
	readonly objectId?: string | undefined;
	readonly principalId?: string | undefined;
	readonly principalName?: string | undefined;
	readonly tenantId?: string | undefined;
}
export interface UserProperties {
	readonly createdDate?: string | undefined;
	readonly identity?: UserIdentity | undefined;
	readonly provisioningState?: string | undefined;
	readonly secretStore?: UserSecretStore | undefined;
	readonly uniqueIdentifier?: string | undefined;
}
export interface UserSecretStore {
	readonly keyVaultId?: string | undefined;
	readonly keyVaultUri?: string | undefined;
}
export interface VirtualNetworkProperties {
	readonly allowedSubnets?: Subnet[] | undefined;
	readonly createdDate?: string | undefined;
	readonly description?: string | undefined;
	readonly externalProviderResourceId?: string | undefined;
	readonly externalSubnets?: ExternalSubnet[] | undefined;
	readonly provisioningState?: string | undefined;
	readonly subnetOverrides?: SubnetOverride[] | undefined;
	readonly uniqueIdentifier?: string | undefined;
}
export interface WeekDetails {
	readonly time?: string | undefined;
	readonly weekdays?: string[] | undefined;
}
export interface WindowsOsInfo {
	readonly windowsOsState?: ("NonSysprepped" | "SysprepApplied" | "SysprepRequested") | undefined;
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
