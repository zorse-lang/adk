import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class defenderSettings
	extends ArmResource<defenderSettingsComponentInputs>
	implements defenderSettingsComponentOutputs
{
	constructor(entity: ADKEntity, options: defenderSettingsComponentInputs) {
		super(entity, options.name, "Microsoft.IoTSecurity/defenderSettings", "2021-02-01-preview", options);
	}
	public readonly apiVersion: "2021-02-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.IoTSecurity/defenderSettings";
}
export interface defenderSettingsComponentOutputs {
	readonly apiVersion: "2021-02-01-preview";
	readonly id: string;
	readonly type: "Microsoft.IoTSecurity/defenderSettings";
}
export interface defenderSettingsComponentInputs {
	readonly name: string;
	readonly properties?: DefenderSettingsProperties | undefined;
}
export class locations extends ArmResource<locationsComponentInputs> implements locationsComponentOutputs {
	constructor(entity: ADKEntity, options: locationsComponentInputs) {
		super(entity, options.name, "Microsoft.IoTSecurity/locations", "2021-02-01-preview", options);
	}
	public readonly apiVersion: "2021-02-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.IoTSecurity/locations";
}
export interface locationsComponentOutputs {
	readonly apiVersion: "2021-02-01-preview";
	readonly id: string;
	readonly type: "Microsoft.IoTSecurity/locations";
}
export interface locationsComponentInputs {
	readonly name: string;
	readonly properties?: any | undefined;
	readonly systemData?: SystemData | undefined;
}
export class locations_deviceGroups
	extends ArmResource<locations_deviceGroupsComponentInputs>
	implements locations_deviceGroupsComponentOutputs
{
	constructor(entity: ADKEntity, options: locations_deviceGroupsComponentInputs) {
		super(entity, options.name, "Microsoft.IoTSecurity/locations/deviceGroups", "2021-02-01-preview", options);
	}
	public readonly apiVersion: "2021-02-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.IoTSecurity/locations/deviceGroups";
}
export interface locations_deviceGroupsComponentOutputs {
	readonly apiVersion: "2021-02-01-preview";
	readonly id: string;
	readonly type: "Microsoft.IoTSecurity/locations/deviceGroups";
}
export interface locations_deviceGroupsComponentInputs {
	readonly name: string;
	readonly properties?: any | undefined;
	readonly systemData?: SystemData | undefined;
}
export class locations_deviceGroups_devices
	extends ArmResource<locations_deviceGroups_devicesComponentInputs>
	implements locations_deviceGroups_devicesComponentOutputs
{
	constructor(entity: ADKEntity, options: locations_deviceGroups_devicesComponentInputs) {
		super(entity, options.name, "Microsoft.IoTSecurity/locations/deviceGroups/devices", "2021-02-01-preview", options);
	}
	public readonly apiVersion: "2021-02-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.IoTSecurity/locations/deviceGroups/devices";
}
export interface locations_deviceGroups_devicesComponentOutputs {
	readonly apiVersion: "2021-02-01-preview";
	readonly id: string;
	readonly type: "Microsoft.IoTSecurity/locations/deviceGroups/devices";
}
export interface locations_deviceGroups_devicesComponentInputs {
	readonly name: string;
	readonly properties?: DeviceProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export class onPremiseSensors
	extends ArmResource<onPremiseSensorsComponentInputs>
	implements onPremiseSensorsComponentOutputs
{
	constructor(entity: ADKEntity, options: onPremiseSensorsComponentInputs) {
		super(entity, options.name, "Microsoft.IoTSecurity/onPremiseSensors", "2021-02-01-preview", options);
	}
	public readonly apiVersion: "2021-02-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.IoTSecurity/onPremiseSensors";
}
export interface onPremiseSensorsComponentOutputs {
	readonly apiVersion: "2021-02-01-preview";
	readonly id: string;
	readonly type: "Microsoft.IoTSecurity/onPremiseSensors";
}
export interface onPremiseSensorsComponentInputs {
	readonly name: string;
	readonly properties?: any | undefined;
	readonly systemData?: SystemData | undefined;
}
export class sensors extends ArmResource<sensorsComponentInputs> implements sensorsComponentOutputs {
	constructor(entity: ADKEntity, options: sensorsComponentInputs) {
		super(entity, options.name, "Microsoft.IoTSecurity/sensors", "2021-02-01-preview", options);
	}
	public readonly apiVersion: "2021-02-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.IoTSecurity/sensors";
}
export interface sensorsComponentOutputs {
	readonly apiVersion: "2021-02-01-preview";
	readonly id: string;
	readonly type: "Microsoft.IoTSecurity/sensors";
}
export interface sensorsComponentInputs {
	readonly name: string;
	readonly properties?: SensorProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export class sites extends ArmResource<sitesComponentInputs> implements sitesComponentOutputs {
	constructor(entity: ADKEntity, options: sitesComponentInputs) {
		super(entity, options.name, "Microsoft.IoTSecurity/sites", "2021-02-01-preview", options);
	}
	public readonly apiVersion: "2021-02-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.IoTSecurity/sites";
}
export interface sitesComponentOutputs {
	readonly apiVersion: "2021-02-01-preview";
	readonly id: string;
	readonly type: "Microsoft.IoTSecurity/sites";
}
export interface sitesComponentInputs {
	readonly name: string;
	readonly properties?: SiteProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export interface DefenderSettingsProperties {
	readonly deviceQuota: number;
	readonly evaluationEndTime?: string | undefined;
	readonly mdeIntegration: DefenderSettingsPropertiesMdeIntegration;
	readonly onboardingKind: "Default" | "Evaluation" | "MigratedToAzure" | "Purchased";
	readonly sentinelWorkspaceResourceIds: string[];
}
export interface DefenderSettingsPropertiesMdeIntegration {
	readonly status: "Disabled" | "Enabled";
}
export interface DeviceProperties {
	readonly additionalFields?: any | undefined;
	readonly authorizedState?: ("Authorized" | "Unauthorized") | undefined;
	readonly businessFunction?: string | undefined;
	readonly cpes?: string[] | undefined;
	readonly criticality?: ("High" | "Low" | "Normal") | undefined;
	readonly deviceCategoryDisplayName?: string | undefined;
	readonly deviceCategoryId?: number | undefined;
	readonly deviceDataSource?: ("CorpSensor" | "Mde" | "MicroAgent" | "OtSensor" | "Other") | undefined;
	readonly deviceName?: string | undefined;
	readonly deviceStatus?: ("Active" | "Deleted" | "Inactive" | "Removed") | undefined;
	readonly deviceSubTypeDisplayName?: string | undefined;
	readonly deviceSubTypeId?: number | undefined;
	readonly deviceTags?: string[] | undefined;
	readonly deviceTypeDisplayName?: string | undefined;
	readonly deviceTypeId?: number | undefined;
	readonly firmwares?: Firmware[] | undefined;
	readonly firstSeen?: string | undefined;
	readonly hardware?: Hardware | undefined;
	readonly lastProgrammingTime?: string | undefined;
	readonly lastSeen?: string | undefined;
	readonly lastUpdated?: string | undefined;
	readonly mergedDevices?: MergedDevice[] | undefined;
	readonly mergedToDeviceId?: string | undefined;
	readonly nics?: Nic[] | undefined;
	readonly onboardingStatus?: ("InsufficientInfo" | "NotOnboarded" | "NotSupported" | "Onboarded") | undefined;
	readonly operatingSystem?: OperatingSystem | undefined;
	readonly packages?: Package[] | undefined;
	readonly parentDeviceId?: string | undefined;
	readonly parentRackNumber?: number | undefined;
	readonly parentSlotNumber?: number | undefined;
	readonly profilingConfidence?: number | undefined;
	readonly programmingState?: ("NotProgrammingDevice" | "ProgrammingDevice") | undefined;
	readonly purdueLevel?: ("Enterprise" | "ProcessControl" | "Supervisory") | undefined;
	readonly riskScore?: number | undefined;
	readonly schemaVersion?: string | undefined;
	readonly sensor?: Sensor | undefined;
	readonly slots?: Slot[] | undefined;
}
export interface Firmware {
	readonly additionalFields?: any | undefined;
	readonly moduleAddress?: string | undefined;
	readonly name?: string | undefined;
	readonly serial?: string | undefined;
	readonly vendor?: string | undefined;
	readonly version?: string | undefined;
}
export interface Hardware {
	readonly model?: string | undefined;
	readonly serialNumber?: string | undefined;
	readonly vendor?: string | undefined;
}
export interface MergedDevice {
	readonly deviceDataSource?: ("CorpSensor" | "Mde" | "MicroAgent" | "OtSensor" | "Other") | undefined;
	readonly id?: string | undefined;
	readonly sensor?: Sensor | undefined;
}
export interface Nic {
	readonly ipv4Address?: string | undefined;
	readonly ipv6Address?: string | undefined;
	readonly lastSeen?: string | undefined;
	readonly macAddress?: string | undefined;
	readonly macCertainty?: ("Certain" | "Guess") | undefined;
	readonly networkAdapterVendor?: string | undefined;
	readonly vlans?: string[] | undefined;
}
export interface OperatingSystem {
	readonly architecture?: string | undefined;
	readonly build?: string | undefined;
	readonly distribution?: string | undefined;
	readonly platform?: string | undefined;
	readonly version?: string | undefined;
}
export interface Package {
	readonly name?: string | undefined;
	readonly version?: string | undefined;
}
export interface Sensor {
	readonly name?: string | undefined;
	readonly site?: string | undefined;
	readonly type?: ("Enterprise" | "Ot") | undefined;
	readonly zone?: string | undefined;
}
export interface SensorProperties {
	readonly connectivityTime?: string | undefined;
	readonly dynamicLearning?: boolean | undefined;
	readonly learningMode?: boolean | undefined;
	readonly sensorStatus?: ("Disconnected" | "Ok" | "Unavailable") | undefined;
	readonly sensorType?: ("Enterprise" | "Ot") | undefined;
	readonly sensorVersion?: string | undefined;
	readonly tiAutomaticUpdates?: boolean | undefined;
	readonly tiStatus?: ("Failed" | "InProgress" | "Ok" | "UpdateAvailable") | undefined;
	readonly tiVersion?: string | undefined;
	readonly zone?: string | undefined;
}
export interface SiteProperties {
	readonly displayName: string;
	readonly tags?: SitePropertiesTags | undefined;
}
export interface SitePropertiesTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface Slot {
	readonly additionalData?: any | undefined;
	readonly cpes?: string[] | undefined;
	readonly firmwareVersion?: string | undefined;
	readonly hardwareRevision?: string | undefined;
	readonly hardwareVendor?: string | undefined;
	readonly model?: string | undefined;
	readonly moduleVersion?: string | undefined;
	readonly productCode?: string | undefined;
	readonly rackNumber?: number | undefined;
	readonly serialNumber?: string | undefined;
	readonly slotNumber?: number | undefined;
	readonly slotType?: ("AnalogIO" | "CommAdapter" | "Cpu" | "DigitalIO" | "Generic" | "Hmi" | "Supply") | undefined;
}
export interface SystemData {
	readonly createdAt?: string | undefined;
	readonly createdBy?: string | undefined;
	readonly createdByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
	readonly lastModifiedAt?: string | undefined;
	readonly lastModifiedBy?: string | undefined;
	readonly lastModifiedByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
}
export default {
	defenderSettings: defenderSettings,
	locations: locations,
	"locations/deviceGroups": locations_deviceGroups,
	"locations/deviceGroups/devices": locations_deviceGroups_devices,
	onPremiseSensors: onPremiseSensors,
	sensors: sensors,
	sites: sites,
};
