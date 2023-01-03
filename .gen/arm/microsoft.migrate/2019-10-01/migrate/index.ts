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
	readonly eTag?: string | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: ProjectProperties | undefined;
	readonly tags?: any | undefined;
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
	readonly properties?: AssessmentOptionsProperties | undefined;
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
	readonly eTag?: string | undefined;
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
	readonly eTag?: string | undefined;
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
	readonly eTag?: string | undefined;
	readonly name: string;
	readonly properties?: AssessedMachineProperties | undefined;
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
	readonly eTag?: string | undefined;
	readonly name: string;
	readonly properties?: CollectorProperties | undefined;
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
	readonly eTag?: string | undefined;
	readonly name: string;
	readonly properties?: ImportCollectorProperties | undefined;
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
	readonly eTag?: string | undefined;
	readonly name: string;
	readonly properties?: MachineProperties | undefined;
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
	readonly eTag?: string | undefined;
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
	readonly properties?: PrivateLinkResourceProperties | undefined;
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
	readonly eTag?: string | undefined;
	readonly name: string;
	readonly properties?: CollectorProperties | undefined;
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
	readonly eTag?: string | undefined;
	readonly name: string;
	readonly properties?: CollectorProperties | undefined;
}
export interface AssessedDisk {
	readonly displayName?: string | undefined;
	readonly gigabytesForRecommendedDiskSize?: number | undefined;
	readonly gigabytesProvisioned?: number | undefined;
	readonly megabytesPerSecondOfRead?: number | undefined;
	readonly megabytesPerSecondOfWrite?: number | undefined;
	readonly monthlyStorageCost?: number | undefined;
	readonly name?: string | undefined;
	readonly numberOfReadOperationsPerSecond?: number | undefined;
	readonly numberOfWriteOperationsPerSecond?: number | undefined;
	readonly recommendedDiskSize?:
		| (
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
				| "Unknown"
		  )
		| undefined;
	readonly recommendedDiskType?: ("Premium" | "Standard" | "StandardOrPremium" | "StandardSSD" | "Unknown") | undefined;
	readonly suitability?:
		| ("ConditionallySuitable" | "NotSuitable" | "ReadinessUnknown" | "Suitable" | "Unknown")
		| undefined;
	readonly suitabilityDetail?:
		| (
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
				| "NumberOfWriteOperationsPerSecondOutOfRange"
		  )
		| undefined;
	readonly suitabilityExplanation?:
		| (
				| "DiskSizeGreaterThanSupported"
				| "InternalErrorOccurredForDiskEvaluation"
				| "NoDiskSizeFoundForSelectedRedundancy"
				| "NoDiskSizeFoundInSelectedLocation"
				| "NoEaPriceFoundForDiskSize"
				| "NoSuitableDiskSizeForIops"
				| "NoSuitableDiskSizeForThroughput"
				| "NotApplicable"
				| "Unknown"
		  )
		| undefined;
}
export interface AssessedMachineProperties {
	readonly bootType?: ("BIOS" | "EFI" | "Unknown") | undefined;
	readonly confidenceRatingInPercentage?: number | undefined;
	readonly createdTimestamp?: string | undefined;
	readonly datacenterMachineArmId?: string | undefined;
	readonly datacenterManagementServerArmId?: string | undefined;
	readonly datacenterManagementServerName?: string | undefined;
	readonly description?: string | undefined;
	readonly disks?: AssessedMachinePropertiesDisks | undefined;
	readonly displayName?: string | undefined;
	readonly megabytesOfMemory?: number | undefined;
	readonly megabytesOfMemoryForRecommendedSize?: number | undefined;
	readonly monthlyBandwidthCost?: number | undefined;
	readonly monthlyComputeCostForRecommendedSize?: number | undefined;
	readonly monthlyPremiumStorageCost?: number | undefined;
	readonly monthlyStandardSSDStorageCost?: number | undefined;
	readonly monthlyStorageCost?: number | undefined;
	readonly networkAdapters?: AssessedMachinePropertiesNetworkAdapters | undefined;
	readonly numberOfCores?: number | undefined;
	readonly numberOfCoresForRecommendedSize?: number | undefined;
	readonly operatingSystemName?: string | undefined;
	readonly operatingSystemType?: string | undefined;
	readonly operatingSystemVersion?: string | undefined;
	readonly percentageCoresUtilization?: number | undefined;
	readonly percentageMemoryUtilization?: number | undefined;
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
				| "Unknown"
		  )
		| undefined;
	readonly suitability?:
		| ("ConditionallySuitable" | "NotSuitable" | "ReadinessUnknown" | "Suitable" | "Unknown")
		| undefined;
	readonly suitabilityDetail?:
		| (
				| "CannotReportBandwidthCosts"
				| "CannotReportComputeCost"
				| "CannotReportStorageCost"
				| "None"
				| "PercentageOfCoresUtilizedMissing"
				| "PercentageOfCoresUtilizedOutOfRange"
				| "PercentageOfMemoryUtilizedMissing"
				| "PercentageOfMemoryUtilizedOutOfRange"
				| "RecommendedSizeHasLessNetworkAdapters"
		  )
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
	readonly displayName?: string | undefined;
	readonly ipAddresses?: string[] | undefined;
	readonly macAddress?: string | undefined;
	readonly megabytesPerSecondReceived?: number | undefined;
	readonly megabytesPerSecondTransmitted?: number | undefined;
	readonly monthlyBandwidthCosts?: number | undefined;
	readonly netGigabytesTransmittedPerMonth?: number | undefined;
	readonly suitability?:
		| ("ConditionallySuitable" | "NotSuitable" | "ReadinessUnknown" | "Suitable" | "Unknown")
		| undefined;
	readonly suitabilityDetail?:
		| ("MegabytesOfDataTransmittedMissing" | "MegabytesOfDataTransmittedOutOfRange" | "None")
		| undefined;
	readonly suitabilityExplanation?: ("InternalErrorOccurred" | "NotApplicable" | "Unknown") | undefined;
}
export interface AssessmentOptionsProperties {
	readonly reservedInstanceSupportedCurrencies?: string[] | undefined;
	readonly reservedInstanceSupportedLocations?: string[] | undefined;
	readonly reservedInstanceSupportedOffers?: string[] | undefined;
	readonly reservedInstanceVmFamilies?: string[] | undefined;
	readonly vmFamilies?: VmFamily[] | undefined;
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
	readonly eaSubscriptionId?: string | undefined;
	readonly monthlyBandwidthCost?: number | undefined;
	readonly monthlyComputeCost?: number | undefined;
	readonly monthlyPremiumStorageCost?: number | undefined;
	readonly monthlyStandardSSDStorageCost?: number | undefined;
	readonly monthlyStorageCost?: number | undefined;
	readonly numberOfMachines?: number | undefined;
	readonly percentile: "Percentile50" | "Percentile90" | "Percentile95" | "Percentile99";
	readonly perfDataEndTime?: string | undefined;
	readonly perfDataStartTime?: string | undefined;
	readonly pricesTimestamp?: string | undefined;
	readonly reservedInstance: "None" | "RI1Year" | "RI3Year";
	readonly scalingFactor: number;
	readonly sizingCriterion: "AsOnPremises" | "PerformanceBased";
	readonly stage: "Approved" | "InProgress" | "UnderReview";
	readonly status?:
		| ("Completed" | "Created" | "Invalid" | "OutDated" | "OutOfSync" | "Running" | "Updated")
		| undefined;
	readonly timeRange: "Custom" | "Day" | "Month" | "Week";
	readonly updatedTimestamp?: string | undefined;
	readonly vmUptime: VmUptime;
}
export interface CollectorAgentProperties {
	readonly id?: string | undefined;
	readonly lastHeartbeatUtc?: string | undefined;
	readonly spnDetails?: CollectorBodyAgentSpnProperties | undefined;
	readonly version?: string | undefined;
}
export interface CollectorBodyAgentSpnProperties {
	readonly applicationId?: string | undefined;
	readonly audience?: string | undefined;
	readonly authority?: string | undefined;
	readonly objectId?: string | undefined;
	readonly tenantId?: string | undefined;
}
export interface CollectorProperties {
	readonly agentProperties?: CollectorAgentProperties | undefined;
	readonly createdTimestamp?: string | undefined;
	readonly discoverySiteId?: string | undefined;
	readonly updatedTimestamp?: string | undefined;
}
export interface Disk {
	readonly displayName?: string | undefined;
	readonly gigabytesAllocated?: number | undefined;
}
export interface GroupProperties {
	readonly areAssessmentsRunning?: boolean | undefined;
	readonly assessments?: string[] | undefined;
	readonly createdTimestamp?: string | undefined;
	readonly groupStatus?: ("Completed" | "Created" | "Invalid" | "Running" | "Updated") | undefined;
	readonly groupType?: string | undefined;
	readonly machineCount?: number | undefined;
	readonly updatedTimestamp?: string | undefined;
}
export interface ImportCollectorProperties {
	readonly createdTimestamp?: string | undefined;
	readonly discoverySiteId?: string | undefined;
	readonly updatedTimestamp?: string | undefined;
}
export interface MachineProperties {
	readonly bootType?: ("BIOS" | "EFI" | "Unknown") | undefined;
	readonly createdTimestamp?: string | undefined;
	readonly datacenterManagementServerArmId?: string | undefined;
	readonly datacenterManagementServerName?: string | undefined;
	readonly description?: string | undefined;
	readonly discoveryMachineArmId?: string | undefined;
	readonly disks?: MachinePropertiesDisks | undefined;
	readonly displayName?: string | undefined;
	readonly groups?: string[] | undefined;
	readonly megabytesOfMemory?: number | undefined;
	readonly networkAdapters?: MachinePropertiesNetworkAdapters | undefined;
	readonly numberOfCores?: number | undefined;
	readonly operatingSystemName?: string | undefined;
	readonly operatingSystemType?: string | undefined;
	readonly operatingSystemVersion?: string | undefined;
	readonly updatedTimestamp?: string | undefined;
}
export interface MachinePropertiesDisks {
	readonly "[ key: string ]"?: Disk | undefined;
}
export interface MachinePropertiesNetworkAdapters {
	readonly "[ key: string ]"?: NetworkAdapter | undefined;
}
export interface NetworkAdapter {
	readonly displayName?: string | undefined;
	readonly ipAddresses?: string[] | undefined;
	readonly macAddress?: string | undefined;
}
export interface PrivateEndpointConnection {
	readonly eTag?: string | undefined;
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly properties: PrivateEndpointConnectionProperties;
	readonly type?: string | undefined;
}
export interface PrivateEndpointConnectionProperties {
	readonly privateEndpoint?: ResourceId | undefined;
	readonly privateLinkServiceConnectionState?: PrivateLinkServiceConnectionState | undefined;
	readonly provisioningState?: ("Accepted" | "Failed" | "InProgress" | "Succeeded") | undefined;
}
export interface PrivateLinkResourceProperties {
	readonly groupId?: string | undefined;
	readonly requiredMembers?: string[] | undefined;
	readonly requiredZoneNames?: string[] | undefined;
}
export interface PrivateLinkServiceConnectionState {
	readonly actionsRequired?: string | undefined;
	readonly description?: string | undefined;
	readonly status?: ("Approved" | "Disconnected" | "Pending" | "Rejected") | undefined;
}
export interface ProjectProperties {
	readonly assessmentSolutionId?: string | undefined;
	readonly createdTimestamp?: string | undefined;
	readonly customerStorageAccountArmId?: string | undefined;
	readonly customerWorkspaceId?: string | undefined;
	readonly customerWorkspaceLocation?: string | undefined;
	readonly lastAssessmentTimestamp?: string | undefined;
	readonly numberOfAssessments?: number | undefined;
	readonly numberOfGroups?: number | undefined;
	readonly numberOfMachines?: number | undefined;
	readonly privateEndpointConnections?: PrivateEndpointConnection[] | undefined;
	readonly projectStatus?: ("Active" | "Inactive") | undefined;
	readonly provisioningState?: ("Accepted" | "Creating" | "Deleting" | "Failed" | "Moving" | "Succeeded") | undefined;
	readonly publicNetworkAccess?: string | undefined;
	readonly serviceEndpoint?: string | undefined;
	readonly updatedTimestamp?: string | undefined;
}
export interface ResourceId {
	readonly id?: string | undefined;
}
export interface VmFamily {
	readonly category?: string[] | undefined;
	readonly familyName?: string | undefined;
	readonly targetLocations?: string[] | undefined;
}
export interface VmUptime {
	readonly daysPerMonth?: number | undefined;
	readonly hoursPerDay?: number | undefined;
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
