import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class devices extends ArmResource<devicesComponentInputs> implements devicesComponentOutputs {
	constructor(entity: ADKEntity, options: devicesComponentInputs) {
		super(entity, options.name, "Microsoft.HybridNetwork/devices", "2022-01-01-preview", options);
	}
	public readonly apiVersion: "2022-01-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.HybridNetwork/devices";
}
export interface devicesComponentOutputs {
	readonly apiVersion: "2022-01-01-preview";
	readonly id: string;
	readonly type: "Microsoft.HybridNetwork/devices";
}
export interface devicesComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: DevicePropertiesFormat | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: TrackedResourceTags | undefined;
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
			"2022-01-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2022-01-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.HybridNetwork/locations/vendors/networkFunctions";
}
export interface locations_vendors_networkFunctionsComponentOutputs {
	readonly apiVersion: "2022-01-01-preview";
	readonly id: string;
	readonly type: "Microsoft.HybridNetwork/locations/vendors/networkFunctions";
}
export interface locations_vendors_networkFunctionsComponentInputs {
	readonly name: string;
	readonly properties?: VendorNetworkFunctionPropertiesFormat | undefined;
	readonly systemData?: SystemData | undefined;
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
			"2022-01-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2022-01-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.HybridNetwork/locations/vendors/networkFunctions/roleInstances";
}
export interface locations_vendors_networkFunctions_roleInstancesComponentOutputs {
	readonly apiVersion: "2022-01-01-preview";
	readonly id: string;
	readonly type: "Microsoft.HybridNetwork/locations/vendors/networkFunctions/roleInstances";
}
export interface locations_vendors_networkFunctions_roleInstancesComponentInputs {
	readonly name: string;
	readonly properties?: RoleInstanceProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export class networkFunctions
	extends ArmResource<networkFunctionsComponentInputs>
	implements networkFunctionsComponentOutputs
{
	constructor(entity: ADKEntity, options: networkFunctionsComponentInputs) {
		super(entity, options.name, "Microsoft.HybridNetwork/networkFunctions", "2022-01-01-preview", options);
	}
	public readonly apiVersion: "2022-01-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.HybridNetwork/networkFunctions";
}
export interface networkFunctionsComponentOutputs {
	readonly apiVersion: "2022-01-01-preview";
	readonly id: string;
	readonly type: "Microsoft.HybridNetwork/networkFunctions";
}
export interface networkFunctionsComponentInputs {
	readonly etag?: string | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties?: NetworkFunctionPropertiesFormat | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: TrackedResourceTags | undefined;
}
export class vendors extends ArmResource<vendorsComponentInputs> implements vendorsComponentOutputs {
	constructor(entity: ADKEntity, options: vendorsComponentInputs) {
		super(entity, options.name, "Microsoft.HybridNetwork/vendors", "2022-01-01-preview", options);
	}
	public readonly apiVersion: "2022-01-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.HybridNetwork/vendors";
}
export interface vendorsComponentOutputs {
	readonly apiVersion: "2022-01-01-preview";
	readonly id: string;
	readonly type: "Microsoft.HybridNetwork/vendors";
}
export interface vendorsComponentInputs {
	readonly name: string;
	readonly properties?: VendorPropertiesFormat | undefined;
	readonly systemData?: SystemData | undefined;
}
export class vendors_vendorSkus
	extends ArmResource<vendors_vendorSkusComponentInputs>
	implements vendors_vendorSkusComponentOutputs
{
	constructor(entity: ADKEntity, options: vendors_vendorSkusComponentInputs) {
		super(entity, options.name, "Microsoft.HybridNetwork/vendors/vendorSkus", "2022-01-01-preview", options);
	}
	public readonly apiVersion: "2022-01-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.HybridNetwork/vendors/vendorSkus";
}
export interface vendors_vendorSkusComponentOutputs {
	readonly apiVersion: "2022-01-01-preview";
	readonly id: string;
	readonly type: "Microsoft.HybridNetwork/vendors/vendorSkus";
}
export interface vendors_vendorSkusComponentInputs {
	readonly name: string;
	readonly properties?: VendorSkuPropertiesFormat | undefined;
	readonly systemData?: SystemData | undefined;
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
			"2022-01-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2022-01-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.HybridNetwork/vendors/vendorSkus/previewSubscriptions";
}
export interface vendors_vendorSkus_previewSubscriptionsComponentOutputs {
	readonly apiVersion: "2022-01-01-preview";
	readonly id: string;
	readonly type: "Microsoft.HybridNetwork/vendors/vendorSkus/previewSubscriptions";
}
export interface vendors_vendorSkus_previewSubscriptionsComponentInputs {
	readonly name: string;
	readonly properties?: PreviewSubscriptionProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export function listCredential(resource: vendors_vendorSkus): SkuCredential {
	if (resource.apiVersion !== "2022-01-01-preview") {
		throw new Error(`listCredential is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.HybridNetwork/vendors/vendorSkus") {
		throw new Error(`listCredential is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export function listRegistrationKey(resource: devices): DeviceRegistrationKey {
	if (resource.apiVersion !== "2022-01-01-preview") {
		throw new Error(`listRegistrationKey is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.HybridNetwork/devices") {
		throw new Error(`listRegistrationKey is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export interface CustomProfile {
	readonly metadataConfigurationPath?: string | undefined;
}
export interface DataDisk {
	readonly createOption?: ("Empty" | "Unknown") | undefined;
	readonly diskSizeGB?: number | undefined;
	readonly name?: string | undefined;
}
export interface DevicePropertiesFormat {
	readonly networkFunctions?: SubResource[] | undefined;
	readonly provisioningState?:
		| ("Accepted" | "Canceled" | "Deleted" | "Deleting" | "Failed" | "Succeeded" | "Unknown")
		| undefined;
	readonly status?: ("Deleted" | "NotRegistered" | "Registered" | "Unknown") | undefined;
}
export interface DeviceRegistrationKey {
	readonly registrationKey?: string | undefined;
}
export interface ImageReference {
	readonly exactVersion?: string | undefined;
	readonly offer?: string | undefined;
	readonly publisher?: string | undefined;
	readonly sku?: string | undefined;
	readonly version?: string | undefined;
}
export interface LinuxConfiguration {
	readonly ssh?: SshConfiguration | undefined;
}
export interface NetworkFunctionPropertiesFormat {
	readonly device?: SubResource | undefined;
	readonly managedApplication?: SubResource | undefined;
	readonly managedApplicationParameters?: any | undefined;
	readonly networkFunctionContainerConfigurations?: any | undefined;
	readonly networkFunctionUserConfigurations?: NetworkFunctionUserConfiguration[] | undefined;
	readonly provisioningState?:
		| ("Accepted" | "Canceled" | "Deleted" | "Deleting" | "Failed" | "Succeeded" | "Unknown")
		| undefined;
	readonly serviceKey?: string | undefined;
	readonly skuName?: string | undefined;
	readonly skuType?: ("EvolvedPacketCore" | "Firewall" | "SDWAN" | "Unknown") | undefined;
	readonly vendorName?: string | undefined;
	readonly vendorProvisioningState?:
		| ("Deprovisioned" | "NotProvisioned" | "Provisioned" | "Provisioning" | "Unknown" | "UserDataValidationFailed")
		| undefined;
}
export interface NetworkFunctionRoleConfiguration {
	readonly customProfile?: CustomProfile | undefined;
	readonly networkInterfaces?: NetworkInterface[] | undefined;
	readonly osProfile?: OsProfile | undefined;
	readonly roleName?: string | undefined;
	readonly roleType?: ("Unknown" | "VirtualMachine") | undefined;
	readonly storageProfile?: StorageProfile | undefined;
	readonly userDataParameters?: any | undefined;
	readonly userDataTemplate?: any | undefined;
	readonly virtualMachineSize?:
		| (
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
				| "Unknown"
		  )
		| undefined;
}
export interface NetworkFunctionTemplate {
	readonly networkFunctionRoleConfigurations?: NetworkFunctionRoleConfiguration[] | undefined;
}
export interface NetworkFunctionUserConfiguration {
	readonly networkInterfaces?: NetworkInterface[] | undefined;
	readonly osProfile?: NetworkFunctionUserConfigurationOsProfile | undefined;
	readonly roleName?: string | undefined;
	readonly userDataParameters?: any | undefined;
}
export interface NetworkFunctionUserConfigurationOsProfile {
	readonly customData?: string | undefined;
}
export interface NetworkFunctionVendorConfiguration {
	readonly networkInterfaces?: NetworkInterface[] | undefined;
	readonly osProfile?: OsProfile | undefined;
	readonly roleName?: string | undefined;
	readonly userDataParameters?: any | undefined;
}
export interface NetworkInterface {
	readonly ipConfigurations?: NetworkInterfaceIPConfiguration[] | undefined;
	readonly macAddress?: string | undefined;
	readonly networkInterfaceName?: string | undefined;
	readonly vmSwitchType?: ("Lan" | "Management" | "Unknown" | "Wan") | undefined;
}
export interface NetworkInterfaceIPConfiguration {
	readonly dnsServers?: string[] | undefined;
	readonly gateway?: string | undefined;
	readonly ipAddress?: string | undefined;
	readonly ipAllocationMethod?: ("Dynamic" | "Static" | "Unknown") | undefined;
	readonly ipVersion?: ("IPv4" | "Unknown") | undefined;
	readonly subnet?: string | undefined;
}
export interface OsDisk {
	readonly diskSizeGB?: number | undefined;
	readonly name?: string | undefined;
	readonly osType?: ("Linux" | "Unknown" | "Windows") | undefined;
	readonly vhd?: VirtualHardDisk | undefined;
}
export interface OsProfile {
	readonly adminUsername?: string | undefined;
	readonly customData?: string | undefined;
	readonly customDataRequired?: boolean | undefined;
	readonly linuxConfiguration?: LinuxConfiguration | undefined;
}
export interface PreviewSubscriptionProperties {
	readonly provisioningState?:
		| ("Accepted" | "Canceled" | "Deleted" | "Deleting" | "Failed" | "Succeeded" | "Unknown")
		| undefined;
}
export interface RoleInstanceProperties {
	readonly operationalState?: ("Running" | "Starting" | "Stopped" | "Stopping" | "Unknown") | undefined;
	readonly provisioningState?:
		| ("Accepted" | "Canceled" | "Deleted" | "Deleting" | "Failed" | "Succeeded" | "Unknown")
		| undefined;
}
export interface SkuCredential {
	readonly acrServerUrl?: string | undefined;
	readonly acrToken?: string | undefined;
	readonly expiry?: string | undefined;
	readonly repositories?: string[] | undefined;
	readonly username?: string | undefined;
}
export interface SshConfiguration {
	readonly publicKeys?: SshPublicKey[] | undefined;
}
export interface SshPublicKey {
	readonly keyData?: string | undefined;
	readonly path?: string | undefined;
}
export interface StorageProfile {
	readonly dataDisks?: DataDisk[] | undefined;
	readonly imageReference?: ImageReference | undefined;
	readonly osDisk?: OsDisk | undefined;
}
export interface SubResource {
	readonly id?: string | undefined;
}
export interface SystemData {
	readonly createdAt?: string | undefined;
	readonly createdBy?: string | undefined;
	readonly createdByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
	readonly lastModifiedAt?: string | undefined;
	readonly lastModifiedBy?: string | undefined;
	readonly lastModifiedByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
}
export interface TrackedResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface VendorNetworkFunctionPropertiesFormat {
	readonly networkFunctionVendorConfigurations?: NetworkFunctionVendorConfiguration[] | undefined;
	readonly provisioningState?:
		| ("Accepted" | "Canceled" | "Deleted" | "Deleting" | "Failed" | "Succeeded" | "Unknown")
		| undefined;
	readonly skuName?: string | undefined;
	readonly skuType?: ("EvolvedPacketCore" | "Firewall" | "SDWAN" | "Unknown") | undefined;
	readonly vendorProvisioningState?:
		| ("Deprovisioned" | "NotProvisioned" | "Provisioned" | "Provisioning" | "Unknown" | "UserDataValidationFailed")
		| undefined;
}
export interface VendorPropertiesFormat {
	readonly provisioningState?:
		| ("Accepted" | "Canceled" | "Deleted" | "Deleting" | "Failed" | "Succeeded" | "Unknown")
		| undefined;
	readonly skus?: SubResource[] | undefined;
}
export interface VendorSkuPropertiesFormat {
	readonly deploymentMode?: ("Azure" | "PrivateEdgeZone" | "Unknown") | undefined;
	readonly managedApplicationParameters?: any | undefined;
	readonly managedApplicationTemplate?: any | undefined;
	readonly networkFunctionTemplate?: NetworkFunctionTemplate | undefined;
	readonly networkFunctionType?: ("ContainerizedNetworkFunction" | "Unknown" | "VirtualNetworkFunction") | undefined;
	readonly preview?: boolean | undefined;
	readonly provisioningState?:
		| ("Accepted" | "Canceled" | "Deleted" | "Deleting" | "Failed" | "Succeeded" | "Unknown")
		| undefined;
	readonly skuType?: ("EvolvedPacketCore" | "Firewall" | "SDWAN" | "Unknown") | undefined;
}
export interface VirtualHardDisk {
	readonly uri?: string | undefined;
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
