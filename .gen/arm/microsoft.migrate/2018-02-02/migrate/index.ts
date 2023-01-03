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
	readonly eTag?: string | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: ProjectProperties | undefined;
	readonly tags?: any | undefined;
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
	readonly eTag?: string | undefined;
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
	readonly eTag?: string | undefined;
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
	readonly eTag?: string | undefined;
	readonly name: string;
	readonly properties?: AssessedMachineProperties | undefined;
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
	readonly eTag?: string | undefined;
	readonly name: string;
	readonly properties?: MachineProperties | undefined;
}
export interface AssessedDisk {
	readonly gigabytesConsumed?: number | undefined;
	readonly gigabytesForRecommendedDiskSize?: number | undefined;
	readonly gigabytesProvisioned?: number | undefined;
	readonly megabytesPerSecondOfRead?: number | undefined;
	readonly megabytesPerSecondOfReadDataPointsExpected?: number | undefined;
	readonly megabytesPerSecondOfReadDataPointsReceived?: number | undefined;
	readonly megabytesPerSecondOfWrite?: number | undefined;
	readonly megabytesPerSecondOfWriteDataPointsExpected?: number | undefined;
	readonly megabytesPerSecondOfWriteDataPointsReceived?: number | undefined;
	readonly monthlyStorageCost?: number | undefined;
	readonly name?: string | undefined;
	readonly numberOfReadOperationsPerSecond?: number | undefined;
	readonly numberOfReadOperationsPerSecondDataPointsExpected?: number | undefined;
	readonly numberOfReadOperationsPerSecondDataPointsReceived?: number | undefined;
	readonly numberOfWriteOperationsPerSecond?: number | undefined;
	readonly numberOfWriteOperationsPerSecondDataPointsExpected?: number | undefined;
	readonly numberOfWriteOperationsPerSecondDataPointsReceived?: number | undefined;
	readonly recommendedDiskSize?:
		| (
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
				| "Unknown"
		  )
		| undefined;
	readonly recommendedDiskType?: ("Premium" | "Standard" | "Unknown") | undefined;
	readonly suitability?:
		| ("ConditionallySuitable" | "NotSuitable" | "ReadinessUnknown" | "Suitable" | "Unknown")
		| undefined;
	readonly suitabilityExplanation?:
		| (
				| "DiskSizeGreaterThanSupported"
				| "InternalErrorOccurredForDiskEvaluation"
				| "NoDiskSizeFoundForSelectedRedundancy"
				| "NoDiskSizeFoundInSelectedLocation"
				| "NoSuitableDiskSizeForIops"
				| "NoSuitableDiskSizeForThroughput"
				| "NotApplicable"
				| "Unknown"
		  )
		| undefined;
}
export interface AssessedMachineProperties {
	readonly bootType?: ("BIOS" | "EFI" | "Unknown") | undefined;
	readonly createdTimestamp?: string | undefined;
	readonly datacenterContainer?: string | undefined;
	readonly datacenterMachineId?: string | undefined;
	readonly datacenterManagementServer?: string | undefined;
	readonly datacenterManagementServerId?: string | undefined;
	readonly description?: string | undefined;
	readonly discoveredTimestamp?: string | undefined;
	readonly disks?: AssessedMachinePropertiesDisks | undefined;
	readonly displayName?: string | undefined;
	readonly groups?: string[] | undefined;
	readonly megabytesOfMemory?: number | undefined;
	readonly megabytesOfMemoryForRecommendedSize?: number | undefined;
	readonly monthlyBandwidthCost?: number | undefined;
	readonly monthlyComputeCostForRecommendedSize?: number | undefined;
	readonly monthlyStorageCost?: number | undefined;
	readonly networkAdapters?: AssessedMachinePropertiesNetworkAdapters | undefined;
	readonly numberOfCores?: number | undefined;
	readonly numberOfCoresForRecommendedSize?: number | undefined;
	readonly operatingSystem?: string | undefined;
	readonly percentageCoresUtilization?: number | undefined;
	readonly percentageCoresUtilizationDataPointsExpected?: number | undefined;
	readonly percentageCoresUtilizationDataPointsReceived?: number | undefined;
	readonly percentageMemoryUtilization?: number | undefined;
	readonly percentageMemoryUtilizationDataPointsExpected?: number | undefined;
	readonly percentageMemoryUtilizationDataPointsReceived?: number | undefined;
	readonly recommendedSize?:
		| (
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
				| "Unknown"
		  )
		| undefined;
	readonly suitability?:
		| ("ConditionallySuitable" | "NotSuitable" | "ReadinessUnknown" | "Suitable" | "Unknown")
		| undefined;
	readonly suitabilityExplanation?:
		| (
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
				| "WindowsServerVersionsSupportedWithCaveat"
		  )
		| undefined;
	readonly updatedTimestamp?: string | undefined;
}
export interface AssessedMachinePropertiesDisks {
	readonly "[ key: string ]"?: AssessedDisk | undefined;
}
export interface AssessedMachinePropertiesNetworkAdapters {
	readonly "[ key: string ]"?: AssessedNetworkAdapter | undefined;
}
export interface AssessedNetworkAdapter {
	readonly ipAddresses?: string[] | undefined;
	readonly macAddress?: string | undefined;
	readonly megabytesPerSecondOfReadDataPointsReceived?: number | undefined;
	readonly megabytesPerSecondReceived?: number | undefined;
	readonly megabytesPerSecondReceivedDataPointsExpected?: number | undefined;
	readonly megabytesPerSecondTransmitted?: number | undefined;
	readonly megabytesPerSecondTransmittedDataPointsExpected?: number | undefined;
	readonly megabytesPerSecondTransmittedDataPointsReceived?: number | undefined;
	readonly monthlyBandwidthCosts?: number | undefined;
	readonly netGigabytesTransmittedPerMonth?: number | undefined;
	readonly suitability?:
		| ("ConditionallySuitable" | "NotSuitable" | "ReadinessUnknown" | "Suitable" | "Unknown")
		| undefined;
	readonly suitabilityExplanation?: ("InternalErrorOccured" | "NotApplicable" | "Unknown") | undefined;
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
	readonly confidenceRatingInPercentage?: number | undefined;
	readonly createdTimestamp?: string | undefined;
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
	readonly monthlyBandwidthCost?: number | undefined;
	readonly monthlyComputeCost?: number | undefined;
	readonly monthlyStorageCost?: number | undefined;
	readonly numberOfMachines?: number | undefined;
	readonly percentile: "Percentile50" | "Percentile90" | "Percentile95" | "Percentile99";
	readonly pricesTimestamp?: string | undefined;
	readonly scalingFactor: number;
	readonly sizingCriterion: "AsOnPremises" | "PerformanceBased";
	readonly stage: "Approved" | "InProgress" | "UnderReview";
	readonly status?: ("Completed" | "Created" | "Invalid" | "Running" | "Updated") | undefined;
	readonly timeRange: "Day" | "Month" | "Week";
	readonly updatedTimestamp?: string | undefined;
}
export interface Disk {
	readonly gigabytesAllocated?: number | undefined;
	readonly gigabytesConsumed?: number | undefined;
}
export interface GroupProperties {
	readonly assessments?: string[] | undefined;
	readonly createdTimestamp?: string | undefined;
	readonly machines: string[];
	readonly updatedTimestamp?: string | undefined;
}
export interface MachineProperties {
	readonly bootType?: ("BIOS" | "EFI" | "Unknown") | undefined;
	readonly createdTimestamp?: string | undefined;
	readonly datacenterContainer?: string | undefined;
	readonly datacenterMachineId?: string | undefined;
	readonly datacenterManagementServer?: string | undefined;
	readonly datacenterManagementServerId?: string | undefined;
	readonly description?: string | undefined;
	readonly discoveredTimestamp?: string | undefined;
	readonly disks?: MachinePropertiesDisks | undefined;
	readonly displayName?: string | undefined;
	readonly groups?: string[] | undefined;
	readonly megabytesOfMemory?: number | undefined;
	readonly networkAdapters?: MachinePropertiesNetworkAdapters | undefined;
	readonly numberOfCores?: number | undefined;
	readonly operatingSystem?: string | undefined;
	readonly updatedTimestamp?: string | undefined;
}
export interface MachinePropertiesDisks {
	readonly "[ key: string ]"?: Disk | undefined;
}
export interface MachinePropertiesNetworkAdapters {
	readonly "[ key: string ]"?: NetworkAdapter | undefined;
}
export interface NetworkAdapter {
	readonly ipAddresses?: string[] | undefined;
	readonly macAddress?: string | undefined;
}
export interface ProjectProperties {
	readonly createdTimestamp?: string | undefined;
	readonly customerWorkspaceId?: string | undefined;
	readonly customerWorkspaceLocation?: string | undefined;
	readonly discoveryStatus?: ("Completed" | "InProgress" | "NotStarted" | "Unknown") | undefined;
	readonly lastAssessmentTimestamp?: string | undefined;
	readonly lastDiscoverySessionId?: string | undefined;
	readonly lastDiscoveryTimestamp?: string | undefined;
	readonly numberOfAssessments?: number | undefined;
	readonly numberOfGroups?: number | undefined;
	readonly numberOfMachines?: number | undefined;
	readonly provisioningState?: ("Accepted" | "Creating" | "Deleting" | "Failed" | "Moving" | "Succeeded") | undefined;
	readonly updatedTimestamp?: string | undefined;
}
export default {
	projects: projects,
	"projects/groups": projects_groups,
	"projects/groups/assessments": projects_groups_assessments,
	"projects/groups/assessments/assessedMachines": projects_groups_assessments_assessedMachines,
	"projects/machines": projects_machines,
};
