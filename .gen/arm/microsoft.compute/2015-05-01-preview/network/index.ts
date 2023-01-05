import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class virtualMachineScaleSets_virtualMachines_networkInterfaces
	extends ArmResource<virtualMachineScaleSets_virtualMachines_networkInterfacesComponentInputs>
	implements virtualMachineScaleSets_virtualMachines_networkInterfacesComponentOutputs
{
	constructor(entity: ADKEntity, options: virtualMachineScaleSets_virtualMachines_networkInterfacesComponentInputs) {
		super(
			entity,
			options.name,
			"microsoft.compute/virtualMachineScaleSets/virtualMachines/networkInterfaces",
			"2015-05-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2015-05-01-preview";
	public readonly id: string;
	public readonly type: "microsoft.compute/virtualMachineScaleSets/virtualMachines/networkInterfaces";
}
export interface virtualMachineScaleSets_virtualMachines_networkInterfacesComponentOutputs {
	readonly apiVersion: "2015-05-01-preview";
	readonly id: string;
	readonly type: "microsoft.compute/virtualMachineScaleSets/virtualMachines/networkInterfaces";
}
export interface virtualMachineScaleSets_virtualMachines_networkInterfacesComponentInputs {
	readonly etag?: string;
	readonly location?: string;
	readonly name: string;
	readonly properties?: NetworkInterfacePropertiesFormat;
	readonly tags?: ResourceTags;
}
export interface NetworkInterfaceDnsSettings {
	readonly appliedDnsServers?: string[];
	readonly dnsServers?: string[];
	readonly internalDnsNameLabel?: string;
	readonly internalFqdn?: string;
}
export interface NetworkInterfaceIpConfiguration {
	readonly etag?: string;
	readonly id?: string;
	readonly name?: string;
	readonly properties?: NetworkInterfaceIpConfigurationPropertiesFormat;
}
export interface NetworkInterfaceIpConfigurationPropertiesFormat {
	readonly loadBalancerBackendAddressPools?: SubResource[];
	readonly loadBalancerInboundNatRules?: SubResource[];
	readonly privateIPAddress?: string;
	readonly privateIPAllocationMethod?: "Dynamic" | "Static";
	readonly provisioningState?: string;
	readonly publicIPAddress?: SubResource;
	readonly subnet?: SubResource;
}
export interface NetworkInterfacePropertiesFormat {
	readonly dnsSettings?: NetworkInterfaceDnsSettings;
	readonly enableIPForwarding?: boolean;
	readonly ipConfigurations?: NetworkInterfaceIpConfiguration[];
	readonly macAddress?: string;
	readonly networkSecurityGroup?: SubResource;
	readonly primary?: boolean;
	readonly provisioningState?: string;
	readonly resourceGuid?: string;
	readonly virtualMachine?: SubResource;
}
export interface ResourceTags {
	readonly [key: string]: string;
}
export interface SubResource {
	readonly id?: string;
}
export default {
	"virtualMachineScaleSets/virtualMachines/networkInterfaces":
		virtualMachineScaleSets_virtualMachines_networkInterfaces,
};
