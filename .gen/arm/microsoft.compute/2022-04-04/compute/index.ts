import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class cloudServices extends ArmResource<cloudServicesComponentInputs> implements cloudServicesComponentOutputs {
	constructor(entity: ADKEntity, options: cloudServicesComponentInputs) {
		super(entity, options.name, "Microsoft.Compute/cloudServices", "2022-04-04", options);
	}
	public readonly apiVersion: "2022-04-04";
	public readonly id: string;
	public readonly type: "Microsoft.Compute/cloudServices";
}
export interface cloudServicesComponentOutputs {
	readonly apiVersion: "2022-04-04";
	readonly id: string;
	readonly type: "Microsoft.Compute/cloudServices";
}
export interface cloudServicesComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: CloudServiceProperties | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: CloudServiceTags | undefined;
}
export class cloudServices_updateDomains
	extends ArmResource<cloudServices_updateDomainsComponentInputs>
	implements cloudServices_updateDomainsComponentOutputs
{
	constructor(entity: ADKEntity, options: cloudServices_updateDomainsComponentInputs) {
		super(entity, options.name, "Microsoft.Compute/cloudServices/updateDomains", "2022-04-04", options);
	}
	public readonly apiVersion: "2022-04-04";
	public readonly id: string;
	public readonly type: "Microsoft.Compute/cloudServices/updateDomains";
}
export interface cloudServices_updateDomainsComponentOutputs {
	readonly apiVersion: "2022-04-04";
	readonly id: string;
	readonly type: "Microsoft.Compute/cloudServices/updateDomains";
}
export interface cloudServices_updateDomainsComponentInputs {
	readonly name: string;
}
export interface CloudServiceExtensionProfile {
	readonly extensions?: Extension[] | undefined;
}
export interface CloudServiceExtensionProperties {
	readonly autoUpgradeMinorVersion?: boolean | undefined;
	readonly forceUpdateTag?: string | undefined;
	readonly protectedSettings?: any | undefined;
	readonly protectedSettingsFromKeyVault?: CloudServiceVaultAndSecretReference | undefined;
	readonly provisioningState?: string | undefined;
	readonly publisher?: string | undefined;
	readonly rolesAppliedTo?: string[] | undefined;
	readonly settings?: any | undefined;
	readonly type?: string | undefined;
	readonly typeHandlerVersion?: string | undefined;
}
export interface CloudServiceNetworkProfile {
	readonly loadBalancerConfigurations?: LoadBalancerConfiguration[] | undefined;
	readonly slotType?: ("Production" | "Staging") | undefined;
	readonly swappableCloudService?: SubResource | undefined;
}
export interface CloudServiceOsProfile {
	readonly secrets?: CloudServiceVaultSecretGroup[] | undefined;
}
export interface CloudServiceProperties {
	readonly allowModelOverride?: boolean | undefined;
	readonly configuration?: string | undefined;
	readonly configurationUrl?: string | undefined;
	readonly extensionProfile?: CloudServiceExtensionProfile | undefined;
	readonly networkProfile?: CloudServiceNetworkProfile | undefined;
	readonly osProfile?: CloudServiceOsProfile | undefined;
	readonly packageUrl?: string | undefined;
	readonly provisioningState?: string | undefined;
	readonly roleProfile?: CloudServiceRoleProfile | undefined;
	readonly startCloudService?: boolean | undefined;
	readonly uniqueId?: string | undefined;
	readonly upgradeMode?: ("Auto" | "Manual" | "Simultaneous") | undefined;
}
export interface CloudServiceRoleProfile {
	readonly roles?: CloudServiceRoleProfileProperties[] | undefined;
}
export interface CloudServiceRoleProfileProperties {
	readonly name?: string | undefined;
	readonly sku?: CloudServiceRoleSku | undefined;
}
export interface CloudServiceRoleSku {
	readonly capacity?: number | undefined;
	readonly name?: string | undefined;
	readonly tier?: string | undefined;
}
export interface CloudServiceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface CloudServiceVaultAndSecretReference {
	readonly secretUrl?: string | undefined;
	readonly sourceVault?: SubResource | undefined;
}
export interface CloudServiceVaultCertificate {
	readonly certificateUrl?: string | undefined;
}
export interface CloudServiceVaultSecretGroup {
	readonly sourceVault?: SubResource | undefined;
	readonly vaultCertificates?: CloudServiceVaultCertificate[] | undefined;
}
export interface Extension {
	readonly name?: string | undefined;
	readonly properties?: CloudServiceExtensionProperties | undefined;
}
export interface LoadBalancerConfiguration {
	readonly id?: string | undefined;
	readonly name: string;
	readonly properties: LoadBalancerConfigurationProperties;
}
export interface LoadBalancerConfigurationProperties {
	readonly frontendIPConfigurations: LoadBalancerFrontendIPConfiguration[];
}
export interface LoadBalancerFrontendIPConfiguration {
	readonly name: string;
	readonly properties: LoadBalancerFrontendIPConfigurationProperties;
}
export interface LoadBalancerFrontendIPConfigurationProperties {
	readonly privateIPAddress?: string | undefined;
	readonly publicIPAddress?: SubResource | undefined;
	readonly subnet?: SubResource | undefined;
}
export interface SubResource {
	readonly id?: string | undefined;
}
export interface SystemData {
	readonly createdAt?: string | undefined;
	readonly lastModifiedAt?: string | undefined;
}
export default {
	cloudServices: cloudServices,
	"cloudServices/updateDomains": cloudServices_updateDomains,
};