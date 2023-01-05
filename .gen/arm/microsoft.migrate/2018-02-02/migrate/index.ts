import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class projects extends ArmResource<projectsComponentInputs> implements projectsComponentOutputs {
	constructor(entity: ADKEntity, options: projectsComponentInputs) {
		super(entity, options.name, "Microsoft.Migrate/projects", "2018-02-02", options);
	}
	public readonly apiVersion: "2018-02-02";
	public readonly id: string;
	public readonly type: "Microsoft.Migrate/projects";
}
export interface projectsComponentOutputs {
	readonly apiVersion: "2018-02-02";
	readonly id: string;
	readonly type: "Microsoft.Migrate/projects";
}
export interface projectsComponentInputs {
	readonly eTag?: string;
	readonly location?: string;
	readonly name: string;
	readonly properties?: ProjectProperties;
	readonly tags?: any;
}
export class projects_groups
	extends ArmResource<projects_groupsComponentInputs>
	implements projects_groupsComponentOutputs
{
	constructor(entity: ADKEntity, options: projects_groupsComponentInputs) {
		super(entity, options.name, "Microsoft.Migrate/projects/groups", "2018-02-02", options);
	}
	public readonly apiVersion: "2018-02-02";
	public readonly id: string;
	public readonly type: "Microsoft.Migrate/projects/groups";
}
export interface projects_groupsComponentOutputs {
	readonly apiVersion: "2018-02-02";
	readonly id: string;
	readonly type: "Microsoft.Migrate/projects/groups";
}
export interface projects_groupsComponentInputs {
	readonly eTag?: string;
	readonly name: string;
	readonly properties: GroupProperties;
}
export class projects_groups_assessments
	extends ArmResource<projects_groups_assessmentsComponentInputs>
	implements projects_groups_assessmentsComponentOutputs
{
	constructor(entity: ADKEntity, options: projects_groups_assessmentsComponentInputs) {
		super(entity, options.name, "Microsoft.Migrate/projects/groups/assessments", "2018-02-02", options);
	}
	public readonly apiVersion: "2018-02-02";
	public readonly id: string;
	public readonly type: "Microsoft.Migrate/projects/groups/assessments";
}
export interface projects_groups_assessmentsComponentOutputs {
	readonly apiVersion: "2018-02-02";
	readonly id: string;
	readonly type: "Microsoft.Migrate/projects/groups/assessments";
}
export interface projects_groups_assessmentsComponentInputs {
	readonly eTag?: string;
	readonly name: string;
	readonly properties: AssessmentProperties;
}
export class projects_groups_assessments_assessedMachines
	extends ArmResource<projects_groups_assessments_assessedMachinesComponentInputs>
	implements projects_groups_assessments_assessedMachinesComponentOutputs
{
	constructor(entity: ADKEntity, options: projects_groups_assessments_assessedMachinesComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.Migrate/projects/groups/assessments/assessedMachines",
			"2018-02-02",
			options,
		);
	}
	public readonly apiVersion: "2018-02-02";
	public readonly id: string;
	public readonly type: "Microsoft.Migrate/projects/groups/assessments/assessedMachines";
}
export interface projects_groups_assessments_assessedMachinesComponentOutputs {
	readonly apiVersion: "2018-02-02";
	readonly id: string;
	readonly type: "Microsoft.Migrate/projects/groups/assessments/assessedMachines";
}
export interface projects_groups_assessments_assessedMachinesComponentInputs {
	readonly eTag?: string;
	readonly name: string;
	readonly properties?: AssessedMachineProperties;
}
export class projects_machines
	extends ArmResource<projects_machinesComponentInputs>
	implements projects_machinesComponentOutputs
{
	constructor(entity: ADKEntity, options: projects_machinesComponentInputs) {
		super(entity, options.name, "Microsoft.Migrate/projects/machines", "2018-02-02", options);
	}
	public readonly apiVersion: "2018-02-02";
	public readonly id: string;
	public readonly type: "Microsoft.Migrate/projects/machines";
}
export interface projects_machinesComponentOutputs {
	readonly apiVersion: "2018-02-02";
	readonly id: string;
	readonly type: "Microsoft.Migrate/projects/machines";
}
export interface projects_machinesComponentInputs {
	readonly eTag?: string;
	readonly name: string;
	readonly properties?: MachineProperties;
}
export interface AssessedDisk {
	readonly gigabytesConsumed?: number;
	readonly gigabytesForRecommendedDiskSize?: number;
	readonly gigabytesProvisioned?: number;
	readonly megabytesPerSecondOfRead?: number;
	readonly megabytesPerSecondOfReadDataPointsExpected?: number;
	readonly megabytesPerSecondOfReadDataPointsReceived?: number;
	readonly megabytesPerSecondOfWrite?: number;
	readonly megabytesPerSecondOfWriteDataPointsExpected?: number;
	readonly megabytesPerSecondOfWriteDataPointsReceived?: number;
	readonly monthlyStorageCost?: number;
	readonly name?: string;
	readonly numberOfReadOperationsPerSecond?: number;
	readonly numberOfReadOperationsPerSecondDataPointsExpected?: number;
	readonly numberOfReadOperationsPerSecondDataPointsReceived?: number;
	readonly numberOfWriteOperationsPerSecond?: number;
	readonly numberOfWriteOperationsPerSecondDataPointsExpected?: number;
	readonly numberOfWriteOperationsPerSecondDataPointsReceived?: number;
	readonly recommendedDiskSize?:
		| "Premium_P10"
		| "Premium_P20"
		| "Premium_P30"
		| "Premium_P4"
		| "Premium_P40"
		| "Premium_P50"
		| "Premium_P6"
		| "Standard_S10"
		| "Standard_S20"
		| "Standard_S30"
		| "Standard_S4"
		| "Standard_S40"
		| "Standard_S50"
		| "Standard_S6"
		| "Unknown";
	readonly recommendedDiskType?: "Premium" | "Standard" | "Unknown";
	readonly suitability?: "ConditionallySuitable" | "NotSuitable" | "ReadinessUnknown" | "Suitable" | "Unknown";
	readonly suitabilityExplanation?:
		| "DiskSizeGreaterThanSupported"
		| "InternalErrorOccurredForDiskEvaluation"
		| "NoDiskSizeFoundForSelectedRedundancy"
		| "NoDiskSizeFoundInSelectedLocation"
		| "NoSuitableDiskSizeForIops"
		| "NoSuitableDiskSizeForThroughput"
		| "NotApplicable"
		| "Unknown";
}
export interface AssessedMachineProperties {
	readonly bootType?: "BIOS" | "EFI" | "Unknown";
	readonly createdTimestamp?: string;
	readonly datacenterContainer?: string;
	readonly datacenterMachineId?: string;
	readonly datacenterManagementServer?: string;
	readonly datacenterManagementServerId?: string;
	readonly description?: string;
	readonly discoveredTimestamp?: string;
	readonly disks?: AssessedMachinePropertiesDisks;
	readonly displayName?: string;
	readonly groups?: string[];
	readonly megabytesOfMemory?: number;
	readonly megabytesOfMemoryForRecommendedSize?: number;
	readonly monthlyBandwidthCost?: number;
	readonly monthlyComputeCostForRecommendedSize?: number;
	readonly monthlyStorageCost?: number;
	readonly networkAdapters?: AssessedMachinePropertiesNetworkAdapters;
	readonly numberOfCores?: number;
	readonly numberOfCoresForRecommendedSize?: number;
	readonly operatingSystem?: string;
	readonly percentageCoresUtilization?: number;
	readonly percentageCoresUtilizationDataPointsExpected?: number;
	readonly percentageCoresUtilizationDataPointsReceived?: number;
	readonly percentageMemoryUtilization?: number;
	readonly percentageMemoryUtilizationDataPointsExpected?: number;
	readonly percentageMemoryUtilizationDataPointsReceived?: number;
	readonly recommendedSize?:
		| "Basic_A0"
		| "Basic_A1"
		| "Basic_A2"
		| "Basic_A3"
		| "Basic_A4"
		| "Standard_A0"
		| "Standard_A1"
		| "Standard_A10"
		| "Standard_A11"
		| "Standard_A1_v2"
		| "Standard_A2"
		| "Standard_A2_v2"
		| "Standard_A2m_v2"
		| "Standard_A3"
		| "Standard_A4"
		| "Standard_A4_v2"
		| "Standard_A4m_v2"
		| "Standard_A5"
		| "Standard_A6"
		| "Standard_A7"
		| "Standard_A8"
		| "Standard_A8_v2"
		| "Standard_A8m_v2"
		| "Standard_A9"
		| "Standard_D1"
		| "Standard_D11"
		| "Standard_D11_v2"
		| "Standard_D12"
		| "Standard_D12_v2"
		| "Standard_D13"
		| "Standard_D13_v2"
		| "Standard_D14"
		| "Standard_D14_v2"
		| "Standard_D15_v2"
		| "Standard_D1_v2"
		| "Standard_D2"
		| "Standard_D2_v2"
		| "Standard_D3"
		| "Standard_D3_v2"
		| "Standard_D4"
		| "Standard_D4_v2"
		| "Standard_D5_v2"
		| "Standard_DS1"
		| "Standard_DS11"
		| "Standard_DS11_v2"
		| "Standard_DS12"
		| "Standard_DS12_v2"
		| "Standard_DS13"
		| "Standard_DS13_v2"
		| "Standard_DS14"
		| "Standard_DS14_v2"
		| "Standard_DS15_v2"
		| "Standard_DS1_v2"
		| "Standard_DS2"
		| "Standard_DS2_v2"
		| "Standard_DS3"
		| "Standard_DS3_v2"
		| "Standard_DS4"
		| "Standard_DS4_v2"
		| "Standard_DS5_v2"
		| "Standard_F1"
		| "Standard_F16"
		| "Standard_F16s"
		| "Standard_F1s"
		| "Standard_F2"
		| "Standard_F2s"
		| "Standard_F4"
		| "Standard_F4s"
		| "Standard_F8"
		| "Standard_F8s"
		| "Standard_G1"
		| "Standard_G2"
		| "Standard_G3"
		| "Standard_G4"
		| "Standard_G5"
		| "Standard_GS1"
		| "Standard_GS2"
		| "Standard_GS3"
		| "Standard_GS4"
		| "Standard_GS5"
		| "Standard_H16"
		| "Standard_H16m"
		| "Standard_H16mr"
		| "Standard_H16r"
		| "Standard_H8"
		| "Standard_H8m"
		| "Standard_L16s"
		| "Standard_L32s"
		| "Standard_L4s"
		| "Standard_L8s"
		| "Unknown";
	readonly suitability?: "ConditionallySuitable" | "NotSuitable" | "ReadinessUnknown" | "Suitable" | "Unknown";
	readonly suitabilityExplanation?:
		| "BootTypeNotSupported"
		| "BootTypeUnknown"
		| "CheckCentOsVersion"
		| "CheckCoreOsLinuxVersion"
		| "CheckDebianLinuxVersion"
		| "CheckOpenSuseLinuxVersion"
		| "CheckOracleLinuxVersion"
		| "CheckRedHatLinuxVersion"
		| "CheckSuseLinuxVersion"
		| "CheckUbuntuLinuxVersion"
		| "CheckWindowsServer2008R2Version"
		| "EndorsedWithConditionsLinuxDistributions"
		| "GuestOperatingSystemArchitectureNotSupported"
		| "GuestOperatingSystemNotSupported"
		| "GuestOperatingSystemUnknown"
		| "InternalErrorOccuredDuringComputeEvaluation"
		| "InternalErrorOccuredDuringNetworkEvaluation"
		| "InternalErrorOccuredDuringStorageEvaluation"
		| "MoreDisksThanSupported"
		| "NoGuestOperatingSystemConditionallySupported"
		| "NoSuitableVmSizeFound"
		| "NoVmSizeForBasicPricingTier"
		| "NoVmSizeForSelectedAzureLocation"
		| "NoVmSizeForSelectedPricingTier"
		| "NoVmSizeForStandardPricingTier"
		| "NoVmSizeSupportsNetworkPerformance"
		| "NoVmSizeSupportsStoragePerformance"
		| "NotApplicable"
		| "OneOrMoreAdaptersNotSuitable"
		| "OneOrMoreDisksNotSuitable"
		| "UnendorsedLinuxDistributions"
		| "Unknown"
		| "WindowsClientVersionsConditionallySupported"
		| "WindowsOSNoLongerUnderMSSupport"
		| "WindowsServerVersionConditionallySupported"
		| "WindowsServerVersionsSupportedWithCaveat";
	readonly updatedTimestamp?: string;
}
export interface AssessedMachinePropertiesDisks {
	readonly [key: string]: AssessedDisk;
}
export interface AssessedMachinePropertiesNetworkAdapters {
	readonly [key: string]: AssessedNetworkAdapter;
}
export interface AssessedNetworkAdapter {
	readonly ipAddresses?: string[];
	readonly macAddress?: string;
	readonly megabytesPerSecondOfReadDataPointsReceived?: number;
	readonly megabytesPerSecondReceived?: number;
	readonly megabytesPerSecondReceivedDataPointsExpected?: number;
	readonly megabytesPerSecondTransmitted?: number;
	readonly megabytesPerSecondTransmittedDataPointsExpected?: number;
	readonly megabytesPerSecondTransmittedDataPointsReceived?: number;
	readonly monthlyBandwidthCosts?: number;
	readonly netGigabytesTransmittedPerMonth?: number;
	readonly suitability?: "ConditionallySuitable" | "NotSuitable" | "ReadinessUnknown" | "Suitable" | "Unknown";
	readonly suitabilityExplanation?: "InternalErrorOccured" | "NotApplicable" | "Unknown";
}
export interface AssessmentProperties {
	readonly azureHybridUseBenefit: "No" | "Unknown" | "Yes";
	readonly azureLocation:
		| "AustraliaEast"
		| "AustraliaSoutheast"
		| "BrazilSouth"
		| "CanadaCentral"
		| "CanadaEast"
		| "CentralIndia"
		| "CentralUs"
		| "ChinaEast"
		| "ChinaNorth"
		| "EastAsia"
		| "EastUs"
		| "EastUs2"
		| "GermanyCentral"
		| "GermanyNortheast"
		| "JapanEast"
		| "JapanWest"
		| "KoreaCentral"
		| "KoreaSouth"
		| "NorthCentralUs"
		| "NorthEurope"
		| "SouthCentralUs"
		| "SouthIndia"
		| "SoutheastAsia"
		| "UkSouth"
		| "UkWest"
		| "Unknown"
		| "WestCentralUs"
		| "WestEurope"
		| "WestIndia"
		| "WestUs"
		| "WestUs2";
	readonly azureOfferCode:
		| "MSAZR0003P"
		| "MSAZR0022P"
		| "MSAZR0023P"
		| "MSAZR0025P"
		| "MSAZR0029P"
		| "MSAZR0036P"
		| "MSAZR0044P"
		| "MSAZR0059P"
		| "MSAZR0060P"
		| "MSAZR0062P"
		| "MSAZR0063P"
		| "MSAZR0064P"
		| "MSAZR0111P"
		| "MSAZR0120P"
		| "MSAZR0121P"
		| "MSAZR0122P"
		| "MSAZR0123P"
		| "MSAZR0124P"
		| "MSAZR0125P"
		| "MSAZR0126P"
		| "MSAZR0127P"
		| "MSAZR0128P"
		| "MSAZR0129P"
		| "MSAZR0130P"
		| "MSAZR0144P"
		| "MSAZR0148P"
		| "MSAZR0149P"
		| "MSAZRDE0003P"
		| "MSAZRDE0044P"
		| "MSMCAZR0044P"
		| "MSMCAZR0059P"
		| "MSMCAZR0060P"
		| "MSMCAZR0063P"
		| "MSMCAZR0120P"
		| "MSMCAZR0121P"
		| "MSMCAZR0125P"
		| "MSMCAZR0128P"
		| "Unknown";
	readonly azurePricingTier: "Basic" | "Standard";
	readonly azureStorageRedundancy:
		| "GeoRedundant"
		| "LocallyRedundant"
		| "ReadAccessGeoRedundant"
		| "Unknown"
		| "ZoneRedundant";
	readonly confidenceRatingInPercentage?: number;
	readonly createdTimestamp?: string;
	readonly currency:
		| "ARS"
		| "AUD"
		| "BRL"
		| "CAD"
		| "CHF"
		| "CNY"
		| "DKK"
		| "EUR"
		| "GBP"
		| "HKD"
		| "IDR"
		| "INR"
		| "JPY"
		| "KRW"
		| "MXN"
		| "MYR"
		| "NOK"
		| "NZD"
		| "RUB"
		| "SAR"
		| "SEK"
		| "TRY"
		| "TWD"
		| "USD"
		| "Unknown"
		| "ZAR";
	readonly discountPercentage: number;
	readonly monthlyBandwidthCost?: number;
	readonly monthlyComputeCost?: number;
	readonly monthlyStorageCost?: number;
	readonly numberOfMachines?: number;
	readonly percentile: "Percentile50" | "Percentile90" | "Percentile95" | "Percentile99";
	readonly pricesTimestamp?: string;
	readonly scalingFactor: number;
	readonly sizingCriterion: "AsOnPremises" | "PerformanceBased";
	readonly stage: "Approved" | "InProgress" | "UnderReview";
	readonly status?: "Completed" | "Created" | "Invalid" | "Running" | "Updated";
	readonly timeRange: "Day" | "Month" | "Week";
	readonly updatedTimestamp?: string;
}
export interface Disk {
	readonly gigabytesAllocated?: number;
	readonly gigabytesConsumed?: number;
}
export interface GroupProperties {
	readonly assessments?: string[];
	readonly createdTimestamp?: string;
	readonly machines: string[];
	readonly updatedTimestamp?: string;
}
export interface MachineProperties {
	readonly bootType?: "BIOS" | "EFI" | "Unknown";
	readonly createdTimestamp?: string;
	readonly datacenterContainer?: string;
	readonly datacenterMachineId?: string;
	readonly datacenterManagementServer?: string;
	readonly datacenterManagementServerId?: string;
	readonly description?: string;
	readonly discoveredTimestamp?: string;
	readonly disks?: MachinePropertiesDisks;
	readonly displayName?: string;
	readonly groups?: string[];
	readonly megabytesOfMemory?: number;
	readonly networkAdapters?: MachinePropertiesNetworkAdapters;
	readonly numberOfCores?: number;
	readonly operatingSystem?: string;
	readonly updatedTimestamp?: string;
}
export interface MachinePropertiesDisks {
	readonly [key: string]: Disk;
}
export interface MachinePropertiesNetworkAdapters {
	readonly [key: string]: NetworkAdapter;
}
export interface NetworkAdapter {
	readonly ipAddresses?: string[];
	readonly macAddress?: string;
}
export interface ProjectProperties {
	readonly createdTimestamp?: string;
	readonly customerWorkspaceId?: string;
	readonly customerWorkspaceLocation?: string;
	readonly discoveryStatus?: "Completed" | "InProgress" | "NotStarted" | "Unknown";
	readonly lastAssessmentTimestamp?: string;
	readonly lastDiscoverySessionId?: string;
	readonly lastDiscoveryTimestamp?: string;
	readonly numberOfAssessments?: number;
	readonly numberOfGroups?: number;
	readonly numberOfMachines?: number;
	readonly provisioningState?: "Accepted" | "Creating" | "Deleting" | "Failed" | "Moving" | "Succeeded";
	readonly updatedTimestamp?: string;
}
export default {
	projects: projects,
	"projects/groups": projects_groups,
	"projects/groups/assessments": projects_groups_assessments,
	"projects/groups/assessments/assessedMachines": projects_groups_assessments_assessedMachines,
	"projects/machines": projects_machines,
};
