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
	readonly location?: string;
	readonly name: string;
	readonly properties?: LabProperties;
	readonly tags?: LabTags;
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
	readonly location?: string;
	readonly name: string;
	readonly properties?: ArtifactSourceProperties;
	readonly tags?: ArtifactSourceTags;
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
	readonly location?: string;
	readonly name: string;
	readonly properties?: ArtifactProperties;
	readonly tags?: ArtifactTags;
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
	readonly location?: string;
	readonly name: string;
	readonly properties?: CostInsightProperties;
	readonly tags?: CostInsightTags;
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
	readonly location?: string;
	readonly name: string;
	readonly properties?: CostProperties;
	readonly tags?: CostTags;
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
	readonly location?: string;
	readonly name: string;
	readonly properties?: CustomImageProperties;
	readonly tags?: CustomImageTags;
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
	readonly location?: string;
	readonly name: string;
	readonly properties?: FormulaProperties;
	readonly tags?: FormulaTags;
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
	readonly location?: string;
	readonly name: string;
	readonly properties?: PolicyProperties;
	readonly tags?: PolicyTags;
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
	readonly location?: string;
	readonly name: string;
	readonly properties?: ScheduleProperties;
	readonly tags?: ScheduleTags;
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
	readonly location?: string;
	readonly name: string;
	readonly properties?: LabVirtualMachineProperties;
	readonly tags?: LabVirtualMachineTags;
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
	readonly location?: string;
	readonly name: string;
	readonly properties?: VirtualNetworkProperties;
	readonly tags?: VirtualNetworkTags;
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
	readonly artifactsApplied?: number;
	readonly deploymentStatus?: string;
	readonly totalArtifacts?: number;
}
export interface ArtifactInstallProperties {
	readonly artifactId?: string;
	readonly parameters?: ArtifactParameterProperties[];
}
export interface ArtifactParameterProperties {
	readonly name?: string;
	readonly value?: string;
}
export interface ArtifactProperties {
	readonly description?: string;
	readonly filePath?: string;
	readonly icon?: string;
	readonly parameters?: any;
	readonly targetOsType?: string;
	readonly title?: string;
}
export interface ArtifactSourceProperties {
	readonly branchRef?: string;
	readonly displayName?: string;
	readonly folderPath?: string;
	readonly provisioningState?: string;
	readonly securityToken?: string;
	readonly sourceType?: "GitHub" | "VsoGit";
	readonly status?: "Disabled" | "Enabled";
	readonly uri?: string;
}
export interface ArtifactSourceTags {
	readonly [key: string]: string;
}
export interface ArtifactTags {
	readonly [key: string]: string;
}
export interface CostInsightProperties {
	readonly currencyCode?: string;
	readonly provisioningState?: string;
	readonly vmCosts?: VMCostProperties[];
}
export interface CostInsightTags {
	readonly [key: string]: string;
}
export interface CostPerDayProperties {
	readonly cost?: number;
	readonly costType?: "Projected" | "Reported" | "Unavailable";
	readonly date?: string;
}
export interface CostProperties {
	readonly costs?: CostPerDayProperties[];
	readonly currencyCode?: string;
}
export interface CostTags {
	readonly [key: string]: string;
}
export interface CustomImageProperties {
	readonly author?: string;
	readonly creationDate?: string;
	readonly description?: string;
	readonly osType?: "Linux" | "None" | "Windows";
	readonly provisioningState?: string;
	readonly vhd?: CustomImagePropertiesCustom;
	readonly vm?: CustomImagePropertiesFromVm;
}
export interface CustomImagePropertiesCustom {
	readonly imageName?: string;
	readonly sysPrep?: boolean;
}
export interface CustomImagePropertiesFromVm {
	readonly linuxOsInfo?: LinuxOsInfo;
	readonly sourceVmId?: string;
	readonly sysPrep?: boolean;
	readonly windowsOsInfo?: WindowsOsInfo;
}
export interface CustomImageTags {
	readonly [key: string]: string;
}
export interface DayDetails {
	readonly time?: string;
}
export interface FormulaProperties {
	readonly author?: string;
	readonly creationDate?: string;
	readonly description?: string;
	readonly formulaContent?: LabVirtualMachine;
	readonly osType?: string;
	readonly provisioningState?: string;
	readonly vm?: FormulaPropertiesFromVm;
}
export interface FormulaPropertiesFromVm {
	readonly labVmId?: string;
}
export interface FormulaTags {
	readonly [key: string]: string;
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
export interface LabProperties {
	readonly artifactsStorageAccount?: string;
	readonly createdDate?: string;
	readonly defaultStorageAccount?: string;
	readonly defaultVirtualNetworkId?: string;
	readonly labStorageType?: "Premium" | "Standard";
	readonly provisioningState?: string;
	readonly storageAccounts?: string[];
	readonly vaultName?: string;
}
export interface LabTags {
	readonly [key: string]: string;
}
export interface LabVhd {
	readonly id?: string;
}
export interface LabVirtualMachine {
	readonly id?: string;
	readonly location?: string;
	readonly name?: string;
	readonly properties?: LabVirtualMachineProperties;
	readonly tags?: LabVirtualMachineTags;
	readonly type?: string;
}
export interface LabVirtualMachineProperties {
	readonly artifactDeploymentStatus?: ArtifactDeploymentStatusProperties;
	readonly artifacts?: ArtifactInstallProperties[];
	readonly computeId?: string;
	readonly createdByUser?: string;
	readonly createdByUserId?: string;
	readonly customImageId?: string;
	readonly disallowPublicIpAddress?: boolean;
	readonly fqdn?: string;
	readonly galleryImageReference?: GalleryImageReference;
	readonly isAuthenticationWithSshKey?: boolean;
	readonly labSubnetName?: string;
	readonly labVirtualNetworkId?: string;
	readonly notes?: string;
	readonly osType?: string;
	readonly ownerObjectId?: string;
	readonly password?: string;
	readonly provisioningState?: string;
	readonly size?: string;
	readonly sshKey?: string;
	readonly userName?: string;
}
export interface LabVirtualMachineTags {
	readonly [key: string]: string;
}
export interface LinuxOsInfo {
	readonly linuxOsState?: "DeprovisionApplied" | "DeprovisionRequested" | "NonDeprovisioned";
}
export interface PolicyProperties {
	readonly description?: string;
	readonly evaluatorType?: "AllowedValuesPolicy" | "MaxValuePolicy";
	readonly factData?: string;
	readonly factName?:
		| "GalleryImage"
		| "LabVmCount"
		| "LabVmSize"
		| "UserOwnedLabVmCount"
		| "UserOwnedLabVmCountInSubnet";
	readonly provisioningState?: string;
	readonly status?: "Disabled" | "Enabled";
	readonly threshold?: string;
}
export interface PolicyTags {
	readonly [key: string]: string;
}
export interface ResponseWithContinuationLabVhd {
	readonly nextLink?: string;
	readonly value?: LabVhd[];
}
export interface ScheduleProperties {
	readonly dailyRecurrence?: DayDetails;
	readonly hourlyRecurrence?: HourDetails;
	readonly provisioningState?: string;
	readonly status?: "Disabled" | "Enabled";
	readonly taskType?: "LabBillingTask" | "LabVmsShutdownTask" | "LabVmsStartupTask";
	readonly timeZoneId?: string;
	readonly weeklyRecurrence?: WeekDetails;
}
export interface ScheduleTags {
	readonly [key: string]: string;
}
export interface Subnet {
	readonly allowPublicIp?: "Allow" | "Default" | "Deny";
	readonly labSubnetName?: string;
	readonly resourceId?: string;
}
export interface SubnetOverride {
	readonly labSubnetName?: string;
	readonly resourceId?: string;
	readonly useInVmCreationPermission?: "Allow" | "Default" | "Deny";
	readonly usePublicIpAddressPermission?: "Allow" | "Default" | "Deny";
}
export interface VirtualNetworkProperties {
	readonly allowedSubnets?: Subnet[];
	readonly description?: string;
	readonly externalProviderResourceId?: string;
	readonly provisioningState?: string;
	readonly subnetOverrides?: SubnetOverride[];
}
export interface VirtualNetworkTags {
	readonly [key: string]: string;
}
export interface VMCostProperties {
	readonly cost?: number;
	readonly name?: string;
	readonly resourceGroupName?: string;
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
