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
	readonly properties?: CloudServiceProperties;
	readonly systemData?: SystemData;
	readonly tags?: CloudServiceTags;
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
	readonly extensions?: Extension[];
}
export interface CloudServiceExtensionProperties {
	readonly autoUpgradeMinorVersion?: boolean;
	readonly forceUpdateTag?: string;
	readonly protectedSettings?: any;
	readonly protectedSettingsFromKeyVault?: CloudServiceVaultAndSecretReference;
	readonly provisioningState?: string;
	readonly publisher?: string;
	readonly rolesAppliedTo?: string[];
	readonly settings?: any;
	readonly type?: string;
	readonly typeHandlerVersion?: string;
}
export interface CloudServiceNetworkProfile {
	readonly loadBalancerConfigurations?: LoadBalancerConfiguration[];
	readonly slotType?: "Production" | "Staging";
	readonly swappableCloudService?: SubResource;
}
export interface CloudServiceOsProfile {
	readonly secrets?: CloudServiceVaultSecretGroup[];
}
export interface CloudServiceProperties {
	readonly allowModelOverride?: boolean;
	readonly configuration?: string;
	readonly configurationUrl?: string;
	readonly extensionProfile?: CloudServiceExtensionProfile;
	readonly networkProfile?: CloudServiceNetworkProfile;
	readonly osProfile?: CloudServiceOsProfile;
	readonly packageUrl?: string;
	readonly provisioningState?: string;
	readonly roleProfile?: CloudServiceRoleProfile;
	readonly startCloudService?: boolean;
	readonly uniqueId?: string;
	readonly upgradeMode?: "Auto" | "Manual" | "Simultaneous";
}
export interface CloudServiceRoleProfile {
	readonly roles?: CloudServiceRoleProfileProperties[];
}
export interface CloudServiceRoleProfileProperties {
	readonly name?: string;
	readonly sku?: CloudServiceRoleSku;
}
export interface CloudServiceRoleSku {
	readonly capacity?: number;
	readonly name?: string;
	readonly tier?: string;
}
export interface CloudServiceTags {
	readonly [key: string]: string;
}
export interface CloudServiceVaultAndSecretReference {
	readonly secretUrl?: string;
	readonly sourceVault?: SubResource;
}
export interface CloudServiceVaultCertificate {
	readonly certificateUrl?: string;
}
export interface CloudServiceVaultSecretGroup {
	readonly sourceVault?: SubResource;
	readonly vaultCertificates?: CloudServiceVaultCertificate[];
}
export interface Extension {
	readonly name?: string;
	readonly properties?: CloudServiceExtensionProperties;
}
export interface LoadBalancerConfiguration {
	readonly id?: string;
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
	readonly privateIPAddress?: string;
	readonly publicIPAddress?: SubResource;
	readonly subnet?: SubResource;
}
export interface SubResource {
	readonly id?: string;
}
export interface SystemData {
	readonly createdAt?: string;
	readonly lastModifiedAt?: string;
}
export default {
	cloudServices: cloudServices,
	"cloudServices/updateDomains": cloudServices_updateDomains,
};
