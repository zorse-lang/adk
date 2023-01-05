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
	readonly properties?: DefenderSettingsProperties;
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
	readonly properties?: any;
	readonly systemData?: SystemData;
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
	readonly properties?: any;
	readonly systemData?: SystemData;
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
	readonly properties?: DeviceProperties;
	readonly systemData?: SystemData;
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
	readonly properties?: any;
	readonly systemData?: SystemData;
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
	readonly properties?: SensorProperties;
	readonly systemData?: SystemData;
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
	readonly properties?: SiteProperties;
	readonly systemData?: SystemData;
}
export interface DefenderSettingsProperties {
	readonly deviceQuota: number;
	readonly evaluationEndTime?: string;
	readonly mdeIntegration: DefenderSettingsPropertiesMdeIntegration;
	readonly onboardingKind: "Default" | "Evaluation" | "MigratedToAzure" | "Purchased";
	readonly sentinelWorkspaceResourceIds: string[];
}
export interface DefenderSettingsPropertiesMdeIntegration {
	readonly status: "Disabled" | "Enabled";
}
export interface DeviceProperties {
	readonly additionalFields?: any;
	readonly authorizedState?: "Authorized" | "Unauthorized";
	readonly businessFunction?: string;
	readonly cpes?: string[];
	readonly criticality?: "High" | "Low" | "Normal";
	readonly deviceCategoryDisplayName?: string;
	readonly deviceCategoryId?: number;
	readonly deviceDataSource?: "CorpSensor" | "Mde" | "MicroAgent" | "OtSensor" | "Other";
	readonly deviceName?: string;
	readonly deviceStatus?: "Active" | "Deleted" | "Inactive" | "Removed";
	readonly deviceSubTypeDisplayName?: string;
	readonly deviceSubTypeId?: number;
	readonly deviceTags?: string[];
	readonly deviceTypeDisplayName?: string;
	readonly deviceTypeId?: number;
	readonly firmwares?: Firmware[];
	readonly firstSeen?: string;
	readonly hardware?: Hardware;
	readonly lastProgrammingTime?: string;
	readonly lastSeen?: string;
	readonly lastUpdated?: string;
	readonly mergedDevices?: MergedDevice[];
	readonly mergedToDeviceId?: string;
	readonly nics?: Nic[];
	readonly onboardingStatus?: "InsufficientInfo" | "NotOnboarded" | "NotSupported" | "Onboarded";
	readonly operatingSystem?: OperatingSystem;
	readonly packages?: Package[];
	readonly parentDeviceId?: string;
	readonly parentRackNumber?: number;
	readonly parentSlotNumber?: number;
	readonly profilingConfidence?: number;
	readonly programmingState?: "NotProgrammingDevice" | "ProgrammingDevice";
	readonly purdueLevel?: "Enterprise" | "ProcessControl" | "Supervisory";
	readonly riskScore?: number;
	readonly schemaVersion?: string;
	readonly sensor?: Sensor;
	readonly slots?: Slot[];
}
export interface Firmware {
	readonly additionalFields?: any;
	readonly moduleAddress?: string;
	readonly name?: string;
	readonly serial?: string;
	readonly vendor?: string;
	readonly version?: string;
}
export interface Hardware {
	readonly model?: string;
	readonly serialNumber?: string;
	readonly vendor?: string;
}
export interface MergedDevice {
	readonly deviceDataSource?: "CorpSensor" | "Mde" | "MicroAgent" | "OtSensor" | "Other";
	readonly id?: string;
	readonly sensor?: Sensor;
}
export interface Nic {
	readonly ipv4Address?: string;
	readonly ipv6Address?: string;
	readonly lastSeen?: string;
	readonly macAddress?: string;
	readonly macCertainty?: "Certain" | "Guess";
	readonly networkAdapterVendor?: string;
	readonly vlans?: string[];
}
export interface OperatingSystem {
	readonly architecture?: string;
	readonly build?: string;
	readonly distribution?: string;
	readonly platform?: string;
	readonly version?: string;
}
export interface Package {
	readonly name?: string;
	readonly version?: string;
}
export interface Sensor {
	readonly name?: string;
	readonly site?: string;
	readonly type?: "Enterprise" | "Ot";
	readonly zone?: string;
}
export interface SensorProperties {
	readonly connectivityTime?: string;
	readonly dynamicLearning?: boolean;
	readonly learningMode?: boolean;
	readonly sensorStatus?: "Disconnected" | "Ok" | "Unavailable";
	readonly sensorType?: "Enterprise" | "Ot";
	readonly sensorVersion?: string;
	readonly tiAutomaticUpdates?: boolean;
	readonly tiStatus?: "Failed" | "InProgress" | "Ok" | "UpdateAvailable";
	readonly tiVersion?: string;
	readonly zone?: string;
}
export interface SiteProperties {
	readonly displayName: string;
	readonly tags?: SitePropertiesTags;
}
export interface SitePropertiesTags {
	readonly [key: string]: string;
}
export interface Slot {
	readonly additionalData?: any;
	readonly cpes?: string[];
	readonly firmwareVersion?: string;
	readonly hardwareRevision?: string;
	readonly hardwareVendor?: string;
	readonly model?: string;
	readonly moduleVersion?: string;
	readonly productCode?: string;
	readonly rackNumber?: number;
	readonly serialNumber?: string;
	readonly slotNumber?: number;
	readonly slotType?: "AnalogIO" | "CommAdapter" | "Cpu" | "DigitalIO" | "Generic" | "Hmi" | "Supply";
}
export interface SystemData {
	readonly createdAt?: string;
	readonly createdBy?: string;
	readonly createdByType?: "Application" | "Key" | "ManagedIdentity" | "User";
	readonly lastModifiedAt?: string;
	readonly lastModifiedBy?: string;
	readonly lastModifiedByType?: "Application" | "Key" | "ManagedIdentity" | "User";
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
