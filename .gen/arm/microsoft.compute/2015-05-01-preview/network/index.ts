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
	readonly etag?: string | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: NetworkInterfacePropertiesFormat | undefined;
	readonly tags?: ResourceTags | undefined;
}
export interface NetworkInterfaceDnsSettings {
	readonly appliedDnsServers?: string[] | undefined;
	readonly dnsServers?: string[] | undefined;
	readonly internalDnsNameLabel?: string | undefined;
	readonly internalFqdn?: string | undefined;
}
export interface NetworkInterfaceIpConfiguration {
	readonly etag?: string | undefined;
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: NetworkInterfaceIpConfigurationPropertiesFormat | undefined;
}
export interface NetworkInterfaceIpConfigurationPropertiesFormat {
	readonly loadBalancerBackendAddressPools?: SubResource[] | undefined;
	readonly loadBalancerInboundNatRules?: SubResource[] | undefined;
	readonly privateIPAddress?: string | undefined;
	readonly privateIPAllocationMethod?: ("Dynamic" | "Static") | undefined;
	readonly provisioningState?: string | undefined;
	readonly publicIPAddress?: SubResource | undefined;
	readonly subnet?: SubResource | undefined;
}
export interface NetworkInterfacePropertiesFormat {
	readonly dnsSettings?: NetworkInterfaceDnsSettings | undefined;
	readonly enableIPForwarding?: boolean | undefined;
	readonly ipConfigurations?: NetworkInterfaceIpConfiguration[] | undefined;
	readonly macAddress?: string | undefined;
	readonly networkSecurityGroup?: SubResource | undefined;
	readonly primary?: boolean | undefined;
	readonly provisioningState?: string | undefined;
	readonly resourceGuid?: string | undefined;
	readonly virtualMachine?: SubResource | undefined;
}
export interface ResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface SubResource {
	readonly id?: string | undefined;
}
export default {
	"virtualMachineScaleSets/virtualMachines/networkInterfaces":
		virtualMachineScaleSets_virtualMachines_networkInterfaces,
};
