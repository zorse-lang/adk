import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class devices extends ArmResource<devicesComponentInputs> implements devicesComponentOutputs {
	constructor(entity: ADKEntity, options: devicesComponentInputs) {
		super(entity, options.name, "Microsoft.HybridNetwork/devices", "2020-01-01-preview", options);
	}
	public readonly apiVersion: "2020-01-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.HybridNetwork/devices";
}
export interface devicesComponentOutputs {
	readonly apiVersion: "2020-01-01-preview";
	readonly id: string;
	readonly type: "Microsoft.HybridNetwork/devices";
}
export interface devicesComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: DevicePropertiesFormat;
	readonly tags?: TrackedResourceTags;
}
export class locations_vendors_networkFunctions
	extends ArmResource<locations_vendors_networkFunctionsComponentInputs>
	implements locations_vendors_networkFunctionsComponentOutputs
{
	constructor(entity: ADKEntity, options: locations_vendors_networkFunctionsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.HybridNetwork/locations/vendors/networkFunctions",
			"2020-01-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2020-01-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.HybridNetwork/locations/vendors/networkFunctions";
}
export interface locations_vendors_networkFunctionsComponentOutputs {
	readonly apiVersion: "2020-01-01-preview";
	readonly id: string;
	readonly type: "Microsoft.HybridNetwork/locations/vendors/networkFunctions";
}
export interface locations_vendors_networkFunctionsComponentInputs {
	readonly name: string;
	readonly properties?: VendorNetworkFunctionPropertiesFormat;
}
export class locations_vendors_networkFunctions_roleInstances
	extends ArmResource<locations_vendors_networkFunctions_roleInstancesComponentInputs>
	implements locations_vendors_networkFunctions_roleInstancesComponentOutputs
{
	constructor(entity: ADKEntity, options: locations_vendors_networkFunctions_roleInstancesComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.HybridNetwork/locations/vendors/networkFunctions/roleInstances",
			"2020-01-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2020-01-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.HybridNetwork/locations/vendors/networkFunctions/roleInstances";
}
export interface locations_vendors_networkFunctions_roleInstancesComponentOutputs {
	readonly apiVersion: "2020-01-01-preview";
	readonly id: string;
	readonly type: "Microsoft.HybridNetwork/locations/vendors/networkFunctions/roleInstances";
}
export interface locations_vendors_networkFunctions_roleInstancesComponentInputs {
	readonly name: string;
	readonly properties?: RoleInstanceProperties;
}
export class networkFunctions
	extends ArmResource<networkFunctionsComponentInputs>
	implements networkFunctionsComponentOutputs
{
	constructor(entity: ADKEntity, options: networkFunctionsComponentInputs) {
		super(entity, options.name, "Microsoft.HybridNetwork/networkFunctions", "2020-01-01-preview", options);
	}
	public readonly apiVersion: "2020-01-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.HybridNetwork/networkFunctions";
}
export interface networkFunctionsComponentOutputs {
	readonly apiVersion: "2020-01-01-preview";
	readonly id: string;
	readonly type: "Microsoft.HybridNetwork/networkFunctions";
}
export interface networkFunctionsComponentInputs {
	readonly etag?: string;
	readonly location: string;
	readonly name: string;
	readonly properties?: NetworkFunctionPropertiesFormat;
	readonly tags?: TrackedResourceTags;
}
export class vendors extends ArmResource<vendorsComponentInputs> implements vendorsComponentOutputs {
	constructor(entity: ADKEntity, options: vendorsComponentInputs) {
		super(entity, options.name, "Microsoft.HybridNetwork/vendors", "2020-01-01-preview", options);
	}
	public readonly apiVersion: "2020-01-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.HybridNetwork/vendors";
}
export interface vendorsComponentOutputs {
	readonly apiVersion: "2020-01-01-preview";
	readonly id: string;
	readonly type: "Microsoft.HybridNetwork/vendors";
}
export interface vendorsComponentInputs {
	readonly name: string;
	readonly properties?: VendorPropertiesFormat;
}
export class vendors_vendorSkus
	extends ArmResource<vendors_vendorSkusComponentInputs>
	implements vendors_vendorSkusComponentOutputs
{
	constructor(entity: ADKEntity, options: vendors_vendorSkusComponentInputs) {
		super(entity, options.name, "Microsoft.HybridNetwork/vendors/vendorSkus", "2020-01-01-preview", options);
	}
	public readonly apiVersion: "2020-01-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.HybridNetwork/vendors/vendorSkus";
}
export interface vendors_vendorSkusComponentOutputs {
	readonly apiVersion: "2020-01-01-preview";
	readonly id: string;
	readonly type: "Microsoft.HybridNetwork/vendors/vendorSkus";
}
export interface vendors_vendorSkusComponentInputs {
	readonly name: string;
	readonly properties?: VendorSkuPropertiesFormat;
}
export class vendors_vendorSkus_previewSubscriptions
	extends ArmResource<vendors_vendorSkus_previewSubscriptionsComponentInputs>
	implements vendors_vendorSkus_previewSubscriptionsComponentOutputs
{
	constructor(entity: ADKEntity, options: vendors_vendorSkus_previewSubscriptionsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.HybridNetwork/vendors/vendorSkus/previewSubscriptions",
			"2020-01-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2020-01-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.HybridNetwork/vendors/vendorSkus/previewSubscriptions";
}
export interface vendors_vendorSkus_previewSubscriptionsComponentOutputs {
	readonly apiVersion: "2020-01-01-preview";
	readonly id: string;
	readonly type: "Microsoft.HybridNetwork/vendors/vendorSkus/previewSubscriptions";
}
export interface vendors_vendorSkus_previewSubscriptionsComponentInputs {
	readonly name: string;
}
export function listRegistrationKey(resource: devices): DeviceRegistrationKey {
	if (resource.apiVersion !== "2020-01-01-preview") {
		throw new Error(`listRegistrationKey is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.HybridNetwork/devices") {
		throw new Error(`listRegistrationKey is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export interface CustomProfile {
	readonly metadataConfigurationPath?: string;
}
export interface DataDisk {
	readonly createOption?: "Empty" | "Unknown";
	readonly diskSizeGB?: number;
	readonly name?: string;
}
export interface DevicePropertiesFormat {
	readonly networkFunctions?: SubResource[];
	readonly provisioningState?: "Accepted" | "Canceled" | "Deleted" | "Deleting" | "Failed" | "Succeeded" | "Unknown";
	readonly status?: "Deleted" | "NotRegistered" | "Registered" | "Unknown";
}
export interface DeviceRegistrationKey {
	readonly registrationKey?: string;
}
export interface ImageReference {
	readonly exactVersion?: string;
	readonly offer?: string;
	readonly publisher?: string;
	readonly sku?: string;
	readonly version?: string;
}
export interface LinuxConfiguration {
	readonly ssh?: SshConfiguration;
}
export interface NetworkFunctionPropertiesFormat {
	readonly device?: SubResource;
	readonly managedApplication?: SubResource;
	readonly managedApplicationParameters?: any;
	readonly networkFunctionUserConfigurations?: NetworkFunctionUserConfiguration[];
	readonly provisioningState?: "Accepted" | "Canceled" | "Deleted" | "Deleting" | "Failed" | "Succeeded" | "Unknown";
	readonly serviceKey?: string;
	readonly skuName?: string;
	readonly skuType?: "EvolvedPacketCore" | "Firewall" | "SDWAN" | "Unknown";
	readonly vendorName?: string;
	readonly vendorProvisioningState?:
		| "Deprovisioned"
		| "NotProvisioned"
		| "Provisioned"
		| "Provisioning"
		| "Unknown"
		| "UserDataValidationFailed";
}
export interface NetworkFunctionRoleConfiguration {
	readonly customProfile?: CustomProfile;
	readonly networkInterfaces?: NetworkInterface[];
	readonly osProfile?: OsProfile;
	readonly roleName?: string;
	readonly roleType?: "Unknown" | "VirtualMachine";
	readonly storageProfile?: StorageProfile;
	readonly userDataParameters?: any;
	readonly userDataTemplate?: any;
	readonly virtualMachineSize?:
		| "Standard_D11_v2"
		| "Standard_D12_v2"
		| "Standard_D13_v2"
		| "Standard_D1_v2"
		| "Standard_D2_v2"
		| "Standard_D3_v2"
		| "Standard_D4_v2"
		| "Standard_D5_v2"
		| "Standard_DS11_v2"
		| "Standard_DS12_v2"
		| "Standard_DS13_v2"
		| "Standard_DS1_v2"
		| "Standard_DS2_v2"
		| "Standard_DS3_v2"
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
		| "Unknown";
}
export interface NetworkFunctionTemplate {
	readonly networkFunctionRoleConfigurations?: NetworkFunctionRoleConfiguration[];
}
export interface NetworkFunctionUserConfiguration {
	readonly networkInterfaces?: NetworkInterface[];
	readonly osProfile?: NetworkFunctionUserConfigurationOsProfile;
	readonly roleName?: string;
	readonly userDataParameters?: any;
}
export interface NetworkFunctionUserConfigurationOsProfile {
	readonly customData?: string;
}
export interface NetworkFunctionVendorConfiguration {
	readonly networkInterfaces?: NetworkInterface[];
	readonly osProfile?: OsProfile;
	readonly roleName?: string;
	readonly userDataParameters?: any;
}
export interface NetworkInterface {
	readonly ipConfigurations?: NetworkInterfaceIPConfiguration[];
	readonly macAddress?: string;
	readonly networkInterfaceName?: string;
	readonly vmSwitchType?: "Lan" | "Management" | "Unknown" | "Wan";
}
export interface NetworkInterfaceIPConfiguration {
	readonly dnsServers?: string[];
	readonly gateway?: string;
	readonly ipAddress?: string;
	readonly ipAllocationMethod?: "Dynamic" | "Static" | "Unknown";
	readonly ipVersion?: "IPv4" | "Unknown";
	readonly subnet?: string;
}
export interface OsDisk {
	readonly diskSizeGB?: number;
	readonly name?: string;
	readonly osType?: "Linux" | "Unknown" | "Windows";
	readonly vhd?: VirtualHardDisk;
}
export interface OsProfile {
	readonly adminUsername?: string;
	readonly customData?: string;
	readonly customDataRequired?: boolean;
	readonly linuxConfiguration?: LinuxConfiguration;
}
export interface RoleInstanceProperties {
	readonly operationalState?: "Running" | "Starting" | "Stopped" | "Stopping" | "Unknown";
}
export interface SshConfiguration {
	readonly publicKeys?: SshPublicKey[];
}
export interface SshPublicKey {
	readonly keyData?: string;
	readonly path?: string;
}
export interface StorageProfile {
	readonly dataDisks?: DataDisk[];
	readonly imageReference?: ImageReference;
	readonly osDisk?: OsDisk;
}
export interface SubResource {
	readonly id?: string;
}
export interface TrackedResourceTags {
	readonly [key: string]: string;
}
export interface VendorNetworkFunctionPropertiesFormat {
	readonly networkFunctionVendorConfigurations?: NetworkFunctionVendorConfiguration[];
	readonly provisioningState?: "Accepted" | "Canceled" | "Deleted" | "Deleting" | "Failed" | "Succeeded" | "Unknown";
	readonly skuName?: string;
	readonly skuType?: "EvolvedPacketCore" | "Firewall" | "SDWAN" | "Unknown";
	readonly vendorProvisioningState?:
		| "Deprovisioned"
		| "NotProvisioned"
		| "Provisioned"
		| "Provisioning"
		| "Unknown"
		| "UserDataValidationFailed";
}
export interface VendorPropertiesFormat {
	readonly provisioningState?: "Accepted" | "Canceled" | "Deleted" | "Deleting" | "Failed" | "Succeeded" | "Unknown";
	readonly skus?: SubResource[];
}
export interface VendorSkuPropertiesFormat {
	readonly deploymentMode?: "Azure" | "PrivateEdgeZone" | "Unknown";
	readonly managedApplicationParameters?: any;
	readonly managedApplicationTemplate?: any;
	readonly networkFunctionTemplate?: NetworkFunctionTemplate;
	readonly preview?: boolean;
	readonly provisioningState?: "Accepted" | "Canceled" | "Deleted" | "Deleting" | "Failed" | "Succeeded" | "Unknown";
	readonly skuType?: "EvolvedPacketCore" | "Firewall" | "SDWAN" | "Unknown";
}
export interface VirtualHardDisk {
	readonly uri?: string;
}
export default {
	devices: devices,
	"locations/vendors/networkFunctions": locations_vendors_networkFunctions,
	"locations/vendors/networkFunctions/roleInstances": locations_vendors_networkFunctions_roleInstances,
	networkFunctions: networkFunctions,
	vendors: vendors,
	"vendors/vendorSkus": vendors_vendorSkus,
	"vendors/vendorSkus/previewSubscriptions": vendors_vendorSkus_previewSubscriptions,
};
