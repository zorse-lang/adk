import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class assessmentProjects
	extends ArmResource<assessmentProjectsComponentInputs>
	implements assessmentProjectsComponentOutputs
{
	constructor(entity: ADKEntity, options: assessmentProjectsComponentInputs) {
		super(entity, options.name, "Microsoft.Migrate/assessmentProjects", "2019-10-01", options);
	}
	public readonly apiVersion: "2019-10-01";
	public readonly id: string;
	public readonly type: "Microsoft.Migrate/assessmentProjects";
}
export interface assessmentProjectsComponentOutputs {
	readonly apiVersion: "2019-10-01";
	readonly id: string;
	readonly type: "Microsoft.Migrate/assessmentProjects";
}
export interface assessmentProjectsComponentInputs {
	readonly eTag?: string;
	readonly location?: string;
	readonly name: string;
	readonly properties?: ProjectProperties;
	readonly tags?: any;
}
export class assessmentProjects_assessmentOptions
	extends ArmResource<assessmentProjects_assessmentOptionsComponentInputs>
	implements assessmentProjects_assessmentOptionsComponentOutputs
{
	constructor(entity: ADKEntity, options: assessmentProjects_assessmentOptionsComponentInputs) {
		super(entity, options.name, "Microsoft.Migrate/assessmentProjects/assessmentOptions", "2019-10-01", options);
	}
	public readonly apiVersion: "2019-10-01";
	public readonly id: string;
	public readonly type: "Microsoft.Migrate/assessmentProjects/assessmentOptions";
}
export interface assessmentProjects_assessmentOptionsComponentOutputs {
	readonly apiVersion: "2019-10-01";
	readonly id: string;
	readonly type: "Microsoft.Migrate/assessmentProjects/assessmentOptions";
}
export interface assessmentProjects_assessmentOptionsComponentInputs {
	readonly name: string;
	readonly properties?: AssessmentOptionsProperties;
}
export class assessmentProjects_groups
	extends ArmResource<assessmentProjects_groupsComponentInputs>
	implements assessmentProjects_groupsComponentOutputs
{
	constructor(entity: ADKEntity, options: assessmentProjects_groupsComponentInputs) {
		super(entity, options.name, "Microsoft.Migrate/assessmentProjects/groups", "2019-10-01", options);
	}
	public readonly apiVersion: "2019-10-01";
	public readonly id: string;
	public readonly type: "Microsoft.Migrate/assessmentProjects/groups";
}
export interface assessmentProjects_groupsComponentOutputs {
	readonly apiVersion: "2019-10-01";
	readonly id: string;
	readonly type: "Microsoft.Migrate/assessmentProjects/groups";
}
export interface assessmentProjects_groupsComponentInputs {
	readonly eTag?: string;
	readonly name: string;
	readonly properties: GroupProperties;
}
export class assessmentProjects_groups_assessments
	extends ArmResource<assessmentProjects_groups_assessmentsComponentInputs>
	implements assessmentProjects_groups_assessmentsComponentOutputs
{
	constructor(entity: ADKEntity, options: assessmentProjects_groups_assessmentsComponentInputs) {
		super(entity, options.name, "Microsoft.Migrate/assessmentProjects/groups/assessments", "2019-10-01", options);
	}
	public readonly apiVersion: "2019-10-01";
	public readonly id: string;
	public readonly type: "Microsoft.Migrate/assessmentProjects/groups/assessments";
}
export interface assessmentProjects_groups_assessmentsComponentOutputs {
	readonly apiVersion: "2019-10-01";
	readonly id: string;
	readonly type: "Microsoft.Migrate/assessmentProjects/groups/assessments";
}
export interface assessmentProjects_groups_assessmentsComponentInputs {
	readonly eTag?: string;
	readonly name: string;
	readonly properties: AssessmentProperties;
}
export class assessmentProjects_groups_assessments_assessedMachines
	extends ArmResource<assessmentProjects_groups_assessments_assessedMachinesComponentInputs>
	implements assessmentProjects_groups_assessments_assessedMachinesComponentOutputs
{
	constructor(entity: ADKEntity, options: assessmentProjects_groups_assessments_assessedMachinesComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.Migrate/assessmentProjects/groups/assessments/assessedMachines",
			"2019-10-01",
			options,
		);
	}
	public readonly apiVersion: "2019-10-01";
	public readonly id: string;
	public readonly type: "Microsoft.Migrate/assessmentProjects/groups/assessments/assessedMachines";
}
export interface assessmentProjects_groups_assessments_assessedMachinesComponentOutputs {
	readonly apiVersion: "2019-10-01";
	readonly id: string;
	readonly type: "Microsoft.Migrate/assessmentProjects/groups/assessments/assessedMachines";
}
export interface assessmentProjects_groups_assessments_assessedMachinesComponentInputs {
	readonly eTag?: string;
	readonly name: string;
	readonly properties?: AssessedMachineProperties;
}
export class assessmentProjects_hypervcollectors
	extends ArmResource<assessmentProjects_hypervcollectorsComponentInputs>
	implements assessmentProjects_hypervcollectorsComponentOutputs
{
	constructor(entity: ADKEntity, options: assessmentProjects_hypervcollectorsComponentInputs) {
		super(entity, options.name, "Microsoft.Migrate/assessmentProjects/hypervcollectors", "2019-10-01", options);
	}
	public readonly apiVersion: "2019-10-01";
	public readonly id: string;
	public readonly type: "Microsoft.Migrate/assessmentProjects/hypervcollectors";
}
export interface assessmentProjects_hypervcollectorsComponentOutputs {
	readonly apiVersion: "2019-10-01";
	readonly id: string;
	readonly type: "Microsoft.Migrate/assessmentProjects/hypervcollectors";
}
export interface assessmentProjects_hypervcollectorsComponentInputs {
	readonly eTag?: string;
	readonly name: string;
	readonly properties?: CollectorProperties;
}
export class assessmentProjects_importcollectors
	extends ArmResource<assessmentProjects_importcollectorsComponentInputs>
	implements assessmentProjects_importcollectorsComponentOutputs
{
	constructor(entity: ADKEntity, options: assessmentProjects_importcollectorsComponentInputs) {
		super(entity, options.name, "Microsoft.Migrate/assessmentProjects/importcollectors", "2019-10-01", options);
	}
	public readonly apiVersion: "2019-10-01";
	public readonly id: string;
	public readonly type: "Microsoft.Migrate/assessmentProjects/importcollectors";
}
export interface assessmentProjects_importcollectorsComponentOutputs {
	readonly apiVersion: "2019-10-01";
	readonly id: string;
	readonly type: "Microsoft.Migrate/assessmentProjects/importcollectors";
}
export interface assessmentProjects_importcollectorsComponentInputs {
	readonly eTag?: string;
	readonly name: string;
	readonly properties?: ImportCollectorProperties;
}
export class assessmentProjects_machines
	extends ArmResource<assessmentProjects_machinesComponentInputs>
	implements assessmentProjects_machinesComponentOutputs
{
	constructor(entity: ADKEntity, options: assessmentProjects_machinesComponentInputs) {
		super(entity, options.name, "Microsoft.Migrate/assessmentProjects/machines", "2019-10-01", options);
	}
	public readonly apiVersion: "2019-10-01";
	public readonly id: string;
	public readonly type: "Microsoft.Migrate/assessmentProjects/machines";
}
export interface assessmentProjects_machinesComponentOutputs {
	readonly apiVersion: "2019-10-01";
	readonly id: string;
	readonly type: "Microsoft.Migrate/assessmentProjects/machines";
}
export interface assessmentProjects_machinesComponentInputs {
	readonly eTag?: string;
	readonly name: string;
	readonly properties?: MachineProperties;
}
export class assessmentprojects_privateEndpointConnections
	extends ArmResource<assessmentprojects_privateEndpointConnectionsComponentInputs>
	implements assessmentprojects_privateEndpointConnectionsComponentOutputs
{
	constructor(entity: ADKEntity, options: assessmentprojects_privateEndpointConnectionsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.Migrate/assessmentprojects/privateEndpointConnections",
			"2019-10-01",
			options,
		);
	}
	public readonly apiVersion: "2019-10-01";
	public readonly id: string;
	public readonly type: "Microsoft.Migrate/assessmentprojects/privateEndpointConnections";
}
export interface assessmentprojects_privateEndpointConnectionsComponentOutputs {
	readonly apiVersion: "2019-10-01";
	readonly id: string;
	readonly type: "Microsoft.Migrate/assessmentprojects/privateEndpointConnections";
}
export interface assessmentprojects_privateEndpointConnectionsComponentInputs {
	readonly eTag?: string;
	readonly name: string;
	readonly properties: PrivateEndpointConnectionProperties;
}
export class assessmentprojects_privateLinkResources
	extends ArmResource<assessmentprojects_privateLinkResourcesComponentInputs>
	implements assessmentprojects_privateLinkResourcesComponentOutputs
{
	constructor(entity: ADKEntity, options: assessmentprojects_privateLinkResourcesComponentInputs) {
		super(entity, options.name, "Microsoft.Migrate/assessmentprojects/privateLinkResources", "2019-10-01", options);
	}
	public readonly apiVersion: "2019-10-01";
	public readonly id: string;
	public readonly type: "Microsoft.Migrate/assessmentprojects/privateLinkResources";
}
export interface assessmentprojects_privateLinkResourcesComponentOutputs {
	readonly apiVersion: "2019-10-01";
	readonly id: string;
	readonly type: "Microsoft.Migrate/assessmentprojects/privateLinkResources";
}
export interface assessmentprojects_privateLinkResourcesComponentInputs {
	readonly name: string;
	readonly properties?: PrivateLinkResourceProperties;
}
export class assessmentProjects_servercollectors
	extends ArmResource<assessmentProjects_servercollectorsComponentInputs>
	implements assessmentProjects_servercollectorsComponentOutputs
{
	constructor(entity: ADKEntity, options: assessmentProjects_servercollectorsComponentInputs) {
		super(entity, options.name, "Microsoft.Migrate/assessmentProjects/servercollectors", "2019-10-01", options);
	}
	public readonly apiVersion: "2019-10-01";
	public readonly id: string;
	public readonly type: "Microsoft.Migrate/assessmentProjects/servercollectors";
}
export interface assessmentProjects_servercollectorsComponentOutputs {
	readonly apiVersion: "2019-10-01";
	readonly id: string;
	readonly type: "Microsoft.Migrate/assessmentProjects/servercollectors";
}
export interface assessmentProjects_servercollectorsComponentInputs {
	readonly eTag?: string;
	readonly name: string;
	readonly properties?: CollectorProperties;
}
export class assessmentProjects_vmwarecollectors
	extends ArmResource<assessmentProjects_vmwarecollectorsComponentInputs>
	implements assessmentProjects_vmwarecollectorsComponentOutputs
{
	constructor(entity: ADKEntity, options: assessmentProjects_vmwarecollectorsComponentInputs) {
		super(entity, options.name, "Microsoft.Migrate/assessmentProjects/vmwarecollectors", "2019-10-01", options);
	}
	public readonly apiVersion: "2019-10-01";
	public readonly id: string;
	public readonly type: "Microsoft.Migrate/assessmentProjects/vmwarecollectors";
}
export interface assessmentProjects_vmwarecollectorsComponentOutputs {
	readonly apiVersion: "2019-10-01";
	readonly id: string;
	readonly type: "Microsoft.Migrate/assessmentProjects/vmwarecollectors";
}
export interface assessmentProjects_vmwarecollectorsComponentInputs {
	readonly eTag?: string;
	readonly name: string;
	readonly properties?: CollectorProperties;
}
export interface AssessedDisk {
	readonly displayName?: string;
	readonly gigabytesForRecommendedDiskSize?: number;
	readonly gigabytesProvisioned?: number;
	readonly megabytesPerSecondOfRead?: number;
	readonly megabytesPerSecondOfWrite?: number;
	readonly monthlyStorageCost?: number;
	readonly name?: string;
	readonly numberOfReadOperationsPerSecond?: number;
	readonly numberOfWriteOperationsPerSecond?: number;
	readonly recommendedDiskSize?:
		| "Premium_P10"
		| "Premium_P15"
		| "Premium_P20"
		| "Premium_P30"
		| "Premium_P4"
		| "Premium_P40"
		| "Premium_P50"
		| "Premium_P6"
		| "Premium_P60"
		| "Premium_P70"
		| "Premium_P80"
		| "StandardSSD_E10"
		| "StandardSSD_E15"
		| "StandardSSD_E20"
		| "StandardSSD_E30"
		| "StandardSSD_E4"
		| "StandardSSD_E40"
		| "StandardSSD_E50"
		| "StandardSSD_E6"
		| "StandardSSD_E60"
		| "StandardSSD_E70"
		| "StandardSSD_E80"
		| "Standard_S10"
		| "Standard_S15"
		| "Standard_S20"
		| "Standard_S30"
		| "Standard_S4"
		| "Standard_S40"
		| "Standard_S50"
		| "Standard_S6"
		| "Standard_S60"
		| "Standard_S70"
		| "Standard_S80"
		| "Unknown";
	readonly recommendedDiskType?: "Premium" | "Standard" | "StandardOrPremium" | "StandardSSD" | "Unknown";
	readonly suitability?: "ConditionallySuitable" | "NotSuitable" | "ReadinessUnknown" | "Suitable" | "Unknown";
	readonly suitabilityDetail?:
		| "DiskGigabytesConsumedMissing"
		| "DiskGigabytesConsumedOutOfRange"
		| "DiskGigabytesProvisionedMissing"
		| "DiskGigabytesProvisionedOutOfRange"
		| "MegabytesPerSecondOfReadMissing"
		| "MegabytesPerSecondOfReadOutOfRange"
		| "MegabytesPerSecondOfWriteMissing"
		| "MegabytesPerSecondOfWriteOutOfRange"
		| "None"
		| "NumberOfReadOperationsPerSecondMissing"
		| "NumberOfReadOperationsPerSecondOutOfRange"
		| "NumberOfWriteOperationsPerSecondMissing"
		| "NumberOfWriteOperationsPerSecondOutOfRange";
	readonly suitabilityExplanation?:
		| "DiskSizeGreaterThanSupported"
		| "InternalErrorOccurredForDiskEvaluation"
		| "NoDiskSizeFoundForSelectedRedundancy"
		| "NoDiskSizeFoundInSelectedLocation"
		| "NoEaPriceFoundForDiskSize"
		| "NoSuitableDiskSizeForIops"
		| "NoSuitableDiskSizeForThroughput"
		| "NotApplicable"
		| "Unknown";
}
export interface AssessedMachineProperties {
	readonly bootType?: "BIOS" | "EFI" | "Unknown";
	readonly confidenceRatingInPercentage?: number;
	readonly createdTimestamp?: string;
	readonly datacenterMachineArmId?: string;
	readonly datacenterManagementServerArmId?: string;
	readonly datacenterManagementServerName?: string;
	readonly description?: string;
	readonly disks?: AssessedMachinePropertiesDisks;
	readonly displayName?: string;
	readonly megabytesOfMemory?: number;
	readonly megabytesOfMemoryForRecommendedSize?: number;
	readonly monthlyBandwidthCost?: number;
	readonly monthlyComputeCostForRecommendedSize?: number;
	readonly monthlyPremiumStorageCost?: number;
	readonly monthlyStandardSSDStorageCost?: number;
	readonly monthlyStorageCost?: number;
	readonly networkAdapters?: AssessedMachinePropertiesNetworkAdapters;
	readonly numberOfCores?: number;
	readonly numberOfCoresForRecommendedSize?: number;
	readonly operatingSystemName?: string;
	readonly operatingSystemType?: string;
	readonly operatingSystemVersion?: string;
	readonly percentageCoresUtilization?: number;
	readonly percentageMemoryUtilization?: number;
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
		| "Standard_D16_v3"
		| "Standard_D16s_v3"
		| "Standard_D1_v2"
		| "Standard_D2"
		| "Standard_D2_v2"
		| "Standard_D2_v3"
		| "Standard_D2s_v3"
		| "Standard_D3"
		| "Standard_D32_v3"
		| "Standard_D32s_v3"
		| "Standard_D3_v2"
		| "Standard_D4"
		| "Standard_D4_v2"
		| "Standard_D4_v3"
		| "Standard_D4s_v3"
		| "Standard_D5_v2"
		| "Standard_D64_v3"
		| "Standard_D64s_v3"
		| "Standard_D8_v3"
		| "Standard_D8s_v3"
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
		| "Standard_E16_v3"
		| "Standard_E16s_v3"
		| "Standard_E2_v3"
		| "Standard_E2s_v3"
		| "Standard_E32_v3"
		| "Standard_E32s_v3"
		| "Standard_E4_v3"
		| "Standard_E4s_v3"
		| "Standard_E64_v3"
		| "Standard_E64s_v3"
		| "Standard_E8_v3"
		| "Standard_E8s_v3"
		| "Standard_F1"
		| "Standard_F16"
		| "Standard_F16s"
		| "Standard_F16s_v2"
		| "Standard_F1s"
		| "Standard_F2"
		| "Standard_F2s"
		| "Standard_F2s_v2"
		| "Standard_F32s_v2"
		| "Standard_F4"
		| "Standard_F4s"
		| "Standard_F4s_v2"
		| "Standard_F64s_v2"
		| "Standard_F72s_v2"
		| "Standard_F8"
		| "Standard_F8s"
		| "Standard_F8s_v2"
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
		| "Standard_M128ms"
		| "Standard_M128s"
		| "Standard_M64ms"
		| "Standard_M64s"
		| "Unknown";
	readonly suitability?: "ConditionallySuitable" | "NotSuitable" | "ReadinessUnknown" | "Suitable" | "Unknown";
	readonly suitabilityDetail?:
		| "CannotReportBandwidthCosts"
		| "CannotReportComputeCost"
		| "CannotReportStorageCost"
		| "None"
		| "PercentageOfCoresUtilizedMissing"
		| "PercentageOfCoresUtilizedOutOfRange"
		| "PercentageOfMemoryUtilizedMissing"
		| "PercentageOfMemoryUtilizedOutOfRange"
		| "RecommendedSizeHasLessNetworkAdapters";
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
		| "InternalErrorOccurredDuringComputeEvaluation"
		| "InternalErrorOccurredDuringNetworkEvaluation"
		| "InternalErrorOccurredDuringStorageEvaluation"
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
	readonly displayName?: string;
	readonly ipAddresses?: string[];
	readonly macAddress?: string;
	readonly megabytesPerSecondReceived?: number;
	readonly megabytesPerSecondTransmitted?: number;
	readonly monthlyBandwidthCosts?: number;
	readonly netGigabytesTransmittedPerMonth?: number;
	readonly suitability?: "ConditionallySuitable" | "NotSuitable" | "ReadinessUnknown" | "Suitable" | "Unknown";
	readonly suitabilityDetail?: "MegabytesOfDataTransmittedMissing" | "MegabytesOfDataTransmittedOutOfRange" | "None";
	readonly suitabilityExplanation?: "InternalErrorOccurred" | "NotApplicable" | "Unknown";
}
export interface AssessmentOptionsProperties {
	readonly reservedInstanceSupportedCurrencies?: string[];
	readonly reservedInstanceSupportedLocations?: string[];
	readonly reservedInstanceSupportedOffers?: string[];
	readonly reservedInstanceVmFamilies?: string[];
	readonly vmFamilies?: VmFamily[];
}
export interface AssessmentProperties {
	readonly azureDiskType: "Premium" | "Standard" | "StandardOrPremium" | "StandardSSD" | "Unknown";
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
		| "USDoDCentral"
		| "USDoDEast"
		| "USGovArizona"
		| "USGovIowa"
		| "USGovTexas"
		| "USGovVirginia"
		| "UkSouth"
		| "UkWest"
		| "Unknown"
		| "WestCentralUs"
		| "WestEurope"
		| "WestIndia"
		| "WestUs"
		| "WestUs2";
	readonly azureOfferCode:
		| "EA"
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
		| "MSAZRUSGOV0003P"
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
	readonly azureVmFamilies:
		| "Av2_series"
		| "Basic_A0_A4"
		| "DC_Series"
		| "DS_series"
		| "DSv2_series"
		| "D_series"
		| "Dsv3_series"
		| "Dv2_series"
		| "Dv3_series"
		| "Esv3_series"
		| "Ev3_series"
		| "F_series"
		| "Fs_series"
		| "Fsv2_series"
		| "GS_series"
		| "G_series"
		| "H_series"
		| "Ls_series"
		| "M_series"
		| "Standard_A0_A7"
		| "Standard_A8_A11"
		| "Unknown"[];
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
	readonly eaSubscriptionId?: string;
	readonly monthlyBandwidthCost?: number;
	readonly monthlyComputeCost?: number;
	readonly monthlyPremiumStorageCost?: number;
	readonly monthlyStandardSSDStorageCost?: number;
	readonly monthlyStorageCost?: number;
	readonly numberOfMachines?: number;
	readonly percentile: "Percentile50" | "Percentile90" | "Percentile95" | "Percentile99";
	readonly perfDataEndTime?: string;
	readonly perfDataStartTime?: string;
	readonly pricesTimestamp?: string;
	readonly reservedInstance: "None" | "RI1Year" | "RI3Year";
	readonly scalingFactor: number;
	readonly sizingCriterion: "AsOnPremises" | "PerformanceBased";
	readonly stage: "Approved" | "InProgress" | "UnderReview";
	readonly status?: "Completed" | "Created" | "Invalid" | "OutDated" | "OutOfSync" | "Running" | "Updated";
	readonly timeRange: "Custom" | "Day" | "Month" | "Week";
	readonly updatedTimestamp?: string;
	readonly vmUptime: VmUptime;
}
export interface CollectorAgentProperties {
	readonly id?: string;
	readonly lastHeartbeatUtc?: string;
	readonly spnDetails?: CollectorBodyAgentSpnProperties;
	readonly version?: string;
}
export interface CollectorBodyAgentSpnProperties {
	readonly applicationId?: string;
	readonly audience?: string;
	readonly authority?: string;
	readonly objectId?: string;
	readonly tenantId?: string;
}
export interface CollectorProperties {
	readonly agentProperties?: CollectorAgentProperties;
	readonly createdTimestamp?: string;
	readonly discoverySiteId?: string;
	readonly updatedTimestamp?: string;
}
export interface Disk {
	readonly displayName?: string;
	readonly gigabytesAllocated?: number;
}
export interface GroupProperties {
	readonly areAssessmentsRunning?: boolean;
	readonly assessments?: string[];
	readonly createdTimestamp?: string;
	readonly groupStatus?: "Completed" | "Created" | "Invalid" | "Running" | "Updated";
	readonly groupType?: string;
	readonly machineCount?: number;
	readonly updatedTimestamp?: string;
}
export interface ImportCollectorProperties {
	readonly createdTimestamp?: string;
	readonly discoverySiteId?: string;
	readonly updatedTimestamp?: string;
}
export interface MachineProperties {
	readonly bootType?: "BIOS" | "EFI" | "Unknown";
	readonly createdTimestamp?: string;
	readonly datacenterManagementServerArmId?: string;
	readonly datacenterManagementServerName?: string;
	readonly description?: string;
	readonly discoveryMachineArmId?: string;
	readonly disks?: MachinePropertiesDisks;
	readonly displayName?: string;
	readonly groups?: string[];
	readonly megabytesOfMemory?: number;
	readonly networkAdapters?: MachinePropertiesNetworkAdapters;
	readonly numberOfCores?: number;
	readonly operatingSystemName?: string;
	readonly operatingSystemType?: string;
	readonly operatingSystemVersion?: string;
	readonly updatedTimestamp?: string;
}
export interface MachinePropertiesDisks {
	readonly [key: string]: Disk;
}
export interface MachinePropertiesNetworkAdapters {
	readonly [key: string]: NetworkAdapter;
}
export interface NetworkAdapter {
	readonly displayName?: string;
	readonly ipAddresses?: string[];
	readonly macAddress?: string;
}
export interface PrivateEndpointConnection {
	readonly eTag?: string;
	readonly id?: string;
	readonly name?: string;
	readonly properties: PrivateEndpointConnectionProperties;
	readonly type?: string;
}
export interface PrivateEndpointConnectionProperties {
	readonly privateEndpoint?: ResourceId;
	readonly privateLinkServiceConnectionState?: PrivateLinkServiceConnectionState;
	readonly provisioningState?: "Accepted" | "Failed" | "InProgress" | "Succeeded";
}
export interface PrivateLinkResourceProperties {
	readonly groupId?: string;
	readonly requiredMembers?: string[];
	readonly requiredZoneNames?: string[];
}
export interface PrivateLinkServiceConnectionState {
	readonly actionsRequired?: string;
	readonly description?: string;
	readonly status?: "Approved" | "Disconnected" | "Pending" | "Rejected";
}
export interface ProjectProperties {
	readonly assessmentSolutionId?: string;
	readonly createdTimestamp?: string;
	readonly customerStorageAccountArmId?: string;
	readonly customerWorkspaceId?: string;
	readonly customerWorkspaceLocation?: string;
	readonly lastAssessmentTimestamp?: string;
	readonly numberOfAssessments?: number;
	readonly numberOfGroups?: number;
	readonly numberOfMachines?: number;
	readonly privateEndpointConnections?: PrivateEndpointConnection[];
	readonly projectStatus?: "Active" | "Inactive";
	readonly provisioningState?: "Accepted" | "Creating" | "Deleting" | "Failed" | "Moving" | "Succeeded";
	readonly publicNetworkAccess?: string;
	readonly serviceEndpoint?: string;
	readonly updatedTimestamp?: string;
}
export interface ResourceId {
	readonly id?: string;
}
export interface VmFamily {
	readonly category?: string[];
	readonly familyName?: string;
	readonly targetLocations?: string[];
}
export interface VmUptime {
	readonly daysPerMonth?: number;
	readonly hoursPerDay?: number;
}
export default {
	assessmentProjects: assessmentProjects,
	"assessmentProjects/assessmentOptions": assessmentProjects_assessmentOptions,
	"assessmentProjects/groups": assessmentProjects_groups,
	"assessmentProjects/groups/assessments": assessmentProjects_groups_assessments,
	"assessmentProjects/groups/assessments/assessedMachines": assessmentProjects_groups_assessments_assessedMachines,
	"assessmentProjects/hypervcollectors": assessmentProjects_hypervcollectors,
	"assessmentProjects/importcollectors": assessmentProjects_importcollectors,
	"assessmentProjects/machines": assessmentProjects_machines,
	"assessmentprojects/privateEndpointConnections": assessmentprojects_privateEndpointConnections,
	"assessmentprojects/privateLinkResources": assessmentprojects_privateLinkResources,
	"assessmentProjects/servercollectors": assessmentProjects_servercollectors,
	"assessmentProjects/vmwarecollectors": assessmentProjects_vmwarecollectors,
};
