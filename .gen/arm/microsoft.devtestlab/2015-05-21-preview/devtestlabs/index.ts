import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class labs extends ArmResource<labsComponentInputs> implements labsComponentOutputs {
	constructor(entity: ADKEntity, options: labsComponentInputs) {
		super(entity, options.name, "Microsoft.DevTestLab/labs", "2015-05-21-preview", options);
	}
	public readonly apiVersion: "2015-05-21-preview";
	public readonly id: string;
	public readonly type: "Microsoft.DevTestLab/labs";
}
export interface labsComponentOutputs {
	readonly apiVersion: "2015-05-21-preview";
	readonly id: string;
	readonly type: "Microsoft.DevTestLab/labs";
}
export interface labsComponentInputs {
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: LabProperties | undefined;
	readonly tags?: LabTags | undefined;
}
export class labs_artifactsources
	extends ArmResource<labs_artifactsourcesComponentInputs>
	implements labs_artifactsourcesComponentOutputs
{
	constructor(entity: ADKEntity, options: labs_artifactsourcesComponentInputs) {
		super(entity, options.name, "Microsoft.DevTestLab/labs/artifactsources", "2015-05-21-preview", options);
	}
	public readonly apiVersion: "2015-05-21-preview";
	public readonly id: string;
	public readonly type: "Microsoft.DevTestLab/labs/artifactsources";
}
export interface labs_artifactsourcesComponentOutputs {
	readonly apiVersion: "2015-05-21-preview";
	readonly id: string;
	readonly type: "Microsoft.DevTestLab/labs/artifactsources";
}
export interface labs_artifactsourcesComponentInputs {
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: ArtifactSourceProperties | undefined;
	readonly tags?: ArtifactSourceTags | undefined;
}
export class labs_artifactsources_artifacts
	extends ArmResource<labs_artifactsources_artifactsComponentInputs>
	implements labs_artifactsources_artifactsComponentOutputs
{
	constructor(entity: ADKEntity, options: labs_artifactsources_artifactsComponentInputs) {
		super(entity, options.name, "Microsoft.DevTestLab/labs/artifactsources/artifacts", "2015-05-21-preview", options);
	}
	public readonly apiVersion: "2015-05-21-preview";
	public readonly id: string;
	public readonly type: "Microsoft.DevTestLab/labs/artifactsources/artifacts";
}
export interface labs_artifactsources_artifactsComponentOutputs {
	readonly apiVersion: "2015-05-21-preview";
	readonly id: string;
	readonly type: "Microsoft.DevTestLab/labs/artifactsources/artifacts";
}
export interface labs_artifactsources_artifactsComponentInputs {
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: ArtifactProperties | undefined;
	readonly tags?: ArtifactTags | undefined;
}
export class labs_costinsights
	extends ArmResource<labs_costinsightsComponentInputs>
	implements labs_costinsightsComponentOutputs
{
	constructor(entity: ADKEntity, options: labs_costinsightsComponentInputs) {
		super(entity, options.name, "Microsoft.DevTestLab/labs/costinsights", "2015-05-21-preview", options);
	}
	public readonly apiVersion: "2015-05-21-preview";
	public readonly id: string;
	public readonly type: "Microsoft.DevTestLab/labs/costinsights";
}
export interface labs_costinsightsComponentOutputs {
	readonly apiVersion: "2015-05-21-preview";
	readonly id: string;
	readonly type: "Microsoft.DevTestLab/labs/costinsights";
}
export interface labs_costinsightsComponentInputs {
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: CostInsightProperties | undefined;
	readonly tags?: CostInsightTags | undefined;
}
export class labs_costs extends ArmResource<labs_costsComponentInputs> implements labs_costsComponentOutputs {
	constructor(entity: ADKEntity, options: labs_costsComponentInputs) {
		super(entity, options.name, "Microsoft.DevTestLab/labs/costs", "2015-05-21-preview", options);
	}
	public readonly apiVersion: "2015-05-21-preview";
	public readonly id: string;
	public readonly type: "Microsoft.DevTestLab/labs/costs";
}
export interface labs_costsComponentOutputs {
	readonly apiVersion: "2015-05-21-preview";
	readonly id: string;
	readonly type: "Microsoft.DevTestLab/labs/costs";
}
export interface labs_costsComponentInputs {
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: CostProperties | undefined;
	readonly tags?: CostTags | undefined;
}
export class labs_customimages
	extends ArmResource<labs_customimagesComponentInputs>
	implements labs_customimagesComponentOutputs
{
	constructor(entity: ADKEntity, options: labs_customimagesComponentInputs) {
		super(entity, options.name, "Microsoft.DevTestLab/labs/customimages", "2015-05-21-preview", options);
	}
	public readonly apiVersion: "2015-05-21-preview";
	public readonly id: string;
	public readonly type: "Microsoft.DevTestLab/labs/customimages";
}
export interface labs_customimagesComponentOutputs {
	readonly apiVersion: "2015-05-21-preview";
	readonly id: string;
	readonly type: "Microsoft.DevTestLab/labs/customimages";
}
export interface labs_customimagesComponentInputs {
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: CustomImageProperties | undefined;
	readonly tags?: CustomImageTags | undefined;
}
export class labs_formulas extends ArmResource<labs_formulasComponentInputs> implements labs_formulasComponentOutputs {
	constructor(entity: ADKEntity, options: labs_formulasComponentInputs) {
		super(entity, options.name, "Microsoft.DevTestLab/labs/formulas", "2015-05-21-preview", options);
	}
	public readonly apiVersion: "2015-05-21-preview";
	public readonly id: string;
	public readonly type: "Microsoft.DevTestLab/labs/formulas";
}
export interface labs_formulasComponentOutputs {
	readonly apiVersion: "2015-05-21-preview";
	readonly id: string;
	readonly type: "Microsoft.DevTestLab/labs/formulas";
}
export interface labs_formulasComponentInputs {
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: FormulaProperties | undefined;
	readonly tags?: FormulaTags | undefined;
}
export class labs_policysets_policies
	extends ArmResource<labs_policysets_policiesComponentInputs>
	implements labs_policysets_policiesComponentOutputs
{
	constructor(entity: ADKEntity, options: labs_policysets_policiesComponentInputs) {
		super(entity, options.name, "Microsoft.DevTestLab/labs/policysets/policies", "2015-05-21-preview", options);
	}
	public readonly apiVersion: "2015-05-21-preview";
	public readonly id: string;
	public readonly type: "Microsoft.DevTestLab/labs/policysets/policies";
}
export interface labs_policysets_policiesComponentOutputs {
	readonly apiVersion: "2015-05-21-preview";
	readonly id: string;
	readonly type: "Microsoft.DevTestLab/labs/policysets/policies";
}
export interface labs_policysets_policiesComponentInputs {
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: PolicyProperties | undefined;
	readonly tags?: PolicyTags | undefined;
}
export class labs_schedules extends ArmResource<labs_schedulesComponentInputs> implements labs_schedulesComponentOutputs {
	constructor(entity: ADKEntity, options: labs_schedulesComponentInputs) {
		super(entity, options.name, "Microsoft.DevTestLab/labs/schedules", "2015-05-21-preview", options);
	}
	public readonly apiVersion: "2015-05-21-preview";
	public readonly id: string;
	public readonly type: "Microsoft.DevTestLab/labs/schedules";
}
export interface labs_schedulesComponentOutputs {
	readonly apiVersion: "2015-05-21-preview";
	readonly id: string;
	readonly type: "Microsoft.DevTestLab/labs/schedules";
}
export interface labs_schedulesComponentInputs {
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: ScheduleProperties | undefined;
	readonly tags?: ScheduleTags | undefined;
}
export class labs_virtualmachines
	extends ArmResource<labs_virtualmachinesComponentInputs>
	implements labs_virtualmachinesComponentOutputs
{
	constructor(entity: ADKEntity, options: labs_virtualmachinesComponentInputs) {
		super(entity, options.name, "Microsoft.DevTestLab/labs/virtualmachines", "2015-05-21-preview", options);
	}
	public readonly apiVersion: "2015-05-21-preview";
	public readonly id: string;
	public readonly type: "Microsoft.DevTestLab/labs/virtualmachines";
}
export interface labs_virtualmachinesComponentOutputs {
	readonly apiVersion: "2015-05-21-preview";
	readonly id: string;
	readonly type: "Microsoft.DevTestLab/labs/virtualmachines";
}
export interface labs_virtualmachinesComponentInputs {
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: LabVirtualMachineProperties | undefined;
	readonly tags?: LabVirtualMachineTags | undefined;
}
export class labs_virtualnetworks
	extends ArmResource<labs_virtualnetworksComponentInputs>
	implements labs_virtualnetworksComponentOutputs
{
	constructor(entity: ADKEntity, options: labs_virtualnetworksComponentInputs) {
		super(entity, options.name, "Microsoft.DevTestLab/labs/virtualnetworks", "2015-05-21-preview", options);
	}
	public readonly apiVersion: "2015-05-21-preview";
	public readonly id: string;
	public readonly type: "Microsoft.DevTestLab/labs/virtualnetworks";
}
export interface labs_virtualnetworksComponentOutputs {
	readonly apiVersion: "2015-05-21-preview";
	readonly id: string;
	readonly type: "Microsoft.DevTestLab/labs/virtualnetworks";
}
export interface labs_virtualnetworksComponentInputs {
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: VirtualNetworkProperties | undefined;
	readonly tags?: VirtualNetworkTags | undefined;
}
export function listVhds(resource: labs): ResponseWithContinuationLabVhd {
	if (resource.apiVersion !== "2015-05-21-preview") {
		throw new Error(`listVhds is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.DevTestLab/labs") {
		throw new Error(`listVhds is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export interface ArtifactDeploymentStatusProperties {
	readonly artifactsApplied?: number | undefined;
	readonly deploymentStatus?: string | undefined;
	readonly totalArtifacts?: number | undefined;
}
export interface ArtifactInstallProperties {
	readonly artifactId?: string | undefined;
	readonly parameters?: ArtifactParameterProperties[] | undefined;
}
export interface ArtifactParameterProperties {
	readonly name?: string | undefined;
	readonly value?: string | undefined;
}
export interface ArtifactProperties {
	readonly description?: string | undefined;
	readonly filePath?: string | undefined;
	readonly icon?: string | undefined;
	readonly parameters?: any | undefined;
	readonly targetOsType?: string | undefined;
	readonly title?: string | undefined;
}
export interface ArtifactSourceProperties {
	readonly branchRef?: string | undefined;
	readonly displayName?: string | undefined;
	readonly folderPath?: string | undefined;
	readonly provisioningState?: string | undefined;
	readonly securityToken?: string | undefined;
	readonly sourceType?: ("GitHub" | "VsoGit") | undefined;
	readonly status?: ("Disabled" | "Enabled") | undefined;
	readonly uri?: string | undefined;
}
export interface ArtifactSourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface ArtifactTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface CostInsightProperties {
	readonly currencyCode?: string | undefined;
	readonly provisioningState?: string | undefined;
	readonly vmCosts?: VMCostProperties[] | undefined;
}
export interface CostInsightTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface CostPerDayProperties {
	readonly cost?: number | undefined;
	readonly costType?: ("Projected" | "Reported" | "Unavailable") | undefined;
	readonly date?: string | undefined;
}
export interface CostProperties {
	readonly costs?: CostPerDayProperties[] | undefined;
	readonly currencyCode?: string | undefined;
}
export interface CostTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface CustomImageProperties {
	readonly author?: string | undefined;
	readonly creationDate?: string | undefined;
	readonly description?: string | undefined;
	readonly osType?: ("Linux" | "None" | "Windows") | undefined;
	readonly provisioningState?: string | undefined;
	readonly vhd?: CustomImagePropertiesCustom | undefined;
	readonly vm?: CustomImagePropertiesFromVm | undefined;
}
export interface CustomImagePropertiesCustom {
	readonly imageName?: string | undefined;
	readonly sysPrep?: boolean | undefined;
}
export interface CustomImagePropertiesFromVm {
	readonly linuxOsInfo?: LinuxOsInfo | undefined;
	readonly sourceVmId?: string | undefined;
	readonly sysPrep?: boolean | undefined;
	readonly windowsOsInfo?: WindowsOsInfo | undefined;
}
export interface CustomImageTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface DayDetails {
	readonly time?: string | undefined;
}
export interface FormulaProperties {
	readonly author?: string | undefined;
	readonly creationDate?: string | undefined;
	readonly description?: string | undefined;
	readonly formulaContent?: LabVirtualMachine | undefined;
	readonly osType?: string | undefined;
	readonly provisioningState?: string | undefined;
	readonly vm?: FormulaPropertiesFromVm | undefined;
}
export interface FormulaPropertiesFromVm {
	readonly labVmId?: string | undefined;
}
export interface FormulaTags {
	readonly "[ key: string ]"?: string | undefined;
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
export interface LabProperties {
	readonly artifactsStorageAccount?: string | undefined;
	readonly createdDate?: string | undefined;
	readonly defaultStorageAccount?: string | undefined;
	readonly defaultVirtualNetworkId?: string | undefined;
	readonly labStorageType?: ("Premium" | "Standard") | undefined;
	readonly provisioningState?: string | undefined;
	readonly storageAccounts?: string[] | undefined;
	readonly vaultName?: string | undefined;
}
export interface LabTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface LabVhd {
	readonly id?: string | undefined;
}
export interface LabVirtualMachine {
	readonly id?: string | undefined;
	readonly location?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: LabVirtualMachineProperties | undefined;
	readonly tags?: LabVirtualMachineTags | undefined;
	readonly type?: string | undefined;
}
export interface LabVirtualMachineProperties {
	readonly artifactDeploymentStatus?: ArtifactDeploymentStatusProperties | undefined;
	readonly artifacts?: ArtifactInstallProperties[] | undefined;
	readonly computeId?: string | undefined;
	readonly createdByUser?: string | undefined;
	readonly createdByUserId?: string | undefined;
	readonly customImageId?: string | undefined;
	readonly disallowPublicIpAddress?: boolean | undefined;
	readonly fqdn?: string | undefined;
	readonly galleryImageReference?: GalleryImageReference | undefined;
	readonly isAuthenticationWithSshKey?: boolean | undefined;
	readonly labSubnetName?: string | undefined;
	readonly labVirtualNetworkId?: string | undefined;
	readonly notes?: string | undefined;
	readonly osType?: string | undefined;
	readonly ownerObjectId?: string | undefined;
	readonly password?: string | undefined;
	readonly provisioningState?: string | undefined;
	readonly size?: string | undefined;
	readonly sshKey?: string | undefined;
	readonly userName?: string | undefined;
}
export interface LabVirtualMachineTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface LinuxOsInfo {
	readonly linuxOsState?: ("DeprovisionApplied" | "DeprovisionRequested" | "NonDeprovisioned") | undefined;
}
export interface PolicyProperties {
	readonly description?: string | undefined;
	readonly evaluatorType?: ("AllowedValuesPolicy" | "MaxValuePolicy") | undefined;
	readonly factData?: string | undefined;
	readonly factName?:
		| ("GalleryImage" | "LabVmCount" | "LabVmSize" | "UserOwnedLabVmCount" | "UserOwnedLabVmCountInSubnet")
		| undefined;
	readonly provisioningState?: string | undefined;
	readonly status?: ("Disabled" | "Enabled") | undefined;
	readonly threshold?: string | undefined;
}
export interface PolicyTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface ResponseWithContinuationLabVhd {
	readonly nextLink?: string | undefined;
	readonly value?: LabVhd[] | undefined;
}
export interface ScheduleProperties {
	readonly dailyRecurrence?: DayDetails | undefined;
	readonly hourlyRecurrence?: HourDetails | undefined;
	readonly provisioningState?: string | undefined;
	readonly status?: ("Disabled" | "Enabled") | undefined;
	readonly taskType?: ("LabBillingTask" | "LabVmsShutdownTask" | "LabVmsStartupTask") | undefined;
	readonly timeZoneId?: string | undefined;
	readonly weeklyRecurrence?: WeekDetails | undefined;
}
export interface ScheduleTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface Subnet {
	readonly allowPublicIp?: ("Allow" | "Default" | "Deny") | undefined;
	readonly labSubnetName?: string | undefined;
	readonly resourceId?: string | undefined;
}
export interface SubnetOverride {
	readonly labSubnetName?: string | undefined;
	readonly resourceId?: string | undefined;
	readonly useInVmCreationPermission?: ("Allow" | "Default" | "Deny") | undefined;
	readonly usePublicIpAddressPermission?: ("Allow" | "Default" | "Deny") | undefined;
}
export interface VirtualNetworkProperties {
	readonly allowedSubnets?: Subnet[] | undefined;
	readonly description?: string | undefined;
	readonly externalProviderResourceId?: string | undefined;
	readonly provisioningState?: string | undefined;
	readonly subnetOverrides?: SubnetOverride[] | undefined;
}
export interface VirtualNetworkTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface VMCostProperties {
	readonly cost?: number | undefined;
	readonly name?: string | undefined;
	readonly resourceGroupName?: string | undefined;
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
	"labs/artifactsources/artifacts": labs_artifactsources_artifacts,
	"labs/costinsights": labs_costinsights,
	"labs/costs": labs_costs,
	"labs/customimages": labs_customimages,
	"labs/formulas": labs_formulas,
	"labs/policysets/policies": labs_policysets_policies,
	"labs/schedules": labs_schedules,
	"labs/virtualmachines": labs_virtualmachines,
	"labs/virtualnetworks": labs_virtualnetworks,
};
