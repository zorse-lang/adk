import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class nginxDeployments
	extends ArmResource<nginxDeploymentsComponentInputs>
	implements nginxDeploymentsComponentOutputs
{
	constructor(entity: ADKEntity, options: nginxDeploymentsComponentInputs) {
		super(entity, options.name, "Nginx.NginxPlus/nginxDeployments", "2022-08-01", options);
	}
	public readonly apiVersion: "2022-08-01";
	public readonly id: string;
	public readonly type: "Nginx.NginxPlus/nginxDeployments";
}
export interface nginxDeploymentsComponentOutputs {
	readonly apiVersion: "2022-08-01";
	readonly id: string;
	readonly type: "Nginx.NginxPlus/nginxDeployments";
}
export interface nginxDeploymentsComponentInputs {
	readonly identity?: IdentityProperties;
	readonly location?: string;
	readonly name: string;
	readonly properties?: NginxDeploymentProperties;
	readonly sku?: ResourceSku;
	readonly systemData?: SystemData;
	readonly tags?: NginxDeploymentTags;
}
export class nginxDeployments_certificates
	extends ArmResource<nginxDeployments_certificatesComponentInputs>
	implements nginxDeployments_certificatesComponentOutputs
{
	constructor(entity: ADKEntity, options: nginxDeployments_certificatesComponentInputs) {
		super(entity, options.name, "Nginx.NginxPlus/nginxDeployments/certificates", "2022-08-01", options);
	}
	public readonly apiVersion: "2022-08-01";
	public readonly id: string;
	public readonly type: "Nginx.NginxPlus/nginxDeployments/certificates";
}
export interface nginxDeployments_certificatesComponentOutputs {
	readonly apiVersion: "2022-08-01";
	readonly id: string;
	readonly type: "Nginx.NginxPlus/nginxDeployments/certificates";
}
export interface nginxDeployments_certificatesComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly properties?: NginxCertificateProperties;
	readonly systemData?: SystemData;
	readonly tags?: NginxCertificateTags;
}
export class nginxDeployments_configurations
	extends ArmResource<nginxDeployments_configurationsComponentInputs>
	implements nginxDeployments_configurationsComponentOutputs
{
	constructor(entity: ADKEntity, options: nginxDeployments_configurationsComponentInputs) {
		super(entity, options.name, "Nginx.NginxPlus/nginxDeployments/configurations", "2022-08-01", options);
	}
	public readonly apiVersion: "2022-08-01";
	public readonly id: string;
	public readonly type: "Nginx.NginxPlus/nginxDeployments/configurations";
}
export interface nginxDeployments_configurationsComponentOutputs {
	readonly apiVersion: "2022-08-01";
	readonly id: string;
	readonly type: "Nginx.NginxPlus/nginxDeployments/configurations";
}
export interface nginxDeployments_configurationsComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly properties?: NginxConfigurationProperties;
	readonly systemData?: SystemData;
	readonly tags?: NginxConfigurationTags;
}
export interface IdentityProperties {
	readonly principalId?: string;
	readonly tenantId?: string;
	readonly type?: "None" | "SystemAssigned" | "SystemAssigned, UserAssigned" | "UserAssigned";
	readonly userAssignedIdentities?: IdentityPropertiesUserAssignedIdentities;
}
export interface IdentityPropertiesUserAssignedIdentities {
	readonly [key: string]: UserIdentityProperties;
}
export interface NginxCertificateProperties {
	readonly certificateVirtualPath?: string;
	readonly keyVaultSecretId?: string;
	readonly keyVirtualPath?: string;
	readonly provisioningState?:
		| "Accepted"
		| "Canceled"
		| "Creating"
		| "Deleted"
		| "Deleting"
		| "Failed"
		| "NotSpecified"
		| "Succeeded"
		| "Updating";
}
export interface NginxCertificateTags {
	readonly [key: string]: string;
}
export interface NginxConfigurationFile {
	readonly content?: string;
	readonly virtualPath?: string;
}
export interface NginxConfigurationPackage {
	readonly data?: string;
}
export interface NginxConfigurationProperties {
	readonly files?: NginxConfigurationFile[];
	readonly package?: NginxConfigurationPackage;
	readonly protectedFiles?: NginxConfigurationFile[];
	readonly provisioningState?:
		| "Accepted"
		| "Canceled"
		| "Creating"
		| "Deleted"
		| "Deleting"
		| "Failed"
		| "NotSpecified"
		| "Succeeded"
		| "Updating";
	readonly rootFile?: string;
}
export interface NginxConfigurationTags {
	readonly [key: string]: string;
}
export interface NginxDeploymentProperties {
	readonly enableDiagnosticsSupport?: boolean;
	readonly ipAddress?: string;
	readonly logging?: NginxLogging;
	readonly managedResourceGroup?: string;
	readonly networkProfile?: NginxNetworkProfile;
	readonly nginxVersion?: string;
	readonly provisioningState?:
		| "Accepted"
		| "Canceled"
		| "Creating"
		| "Deleted"
		| "Deleting"
		| "Failed"
		| "NotSpecified"
		| "Succeeded"
		| "Updating";
}
export interface NginxDeploymentTags {
	readonly [key: string]: string;
}
export interface NginxFrontendIPConfiguration {
	readonly privateIPAddresses?: NginxPrivateIPAddress[];
	readonly publicIPAddresses?: NginxPublicIPAddress[];
}
export interface NginxLogging {
	readonly storageAccount?: NginxStorageAccount;
}
export interface NginxNetworkInterfaceConfiguration {
	readonly subnetId?: string;
}
export interface NginxNetworkProfile {
	readonly frontEndIPConfiguration?: NginxFrontendIPConfiguration;
	readonly networkInterfaceConfiguration?: NginxNetworkInterfaceConfiguration;
}
export interface NginxPrivateIPAddress {
	readonly privateIPAddress?: string;
	readonly privateIPAllocationMethod?: "Dynamic" | "Static";
	readonly subnetId?: string;
}
export interface NginxPublicIPAddress {
	readonly id?: string;
}
export interface NginxStorageAccount {
	readonly accountName?: string;
	readonly containerName?: string;
}
export interface ResourceSku {
	readonly name: string;
}
export interface SystemData {
	readonly createdAt?: string;
	readonly createdBy?: string;
	readonly createdByType?: "Application" | "Key" | "ManagedIdentity" | "User";
	readonly lastModifiedAt?: string;
	readonly lastModifiedBy?: string;
	readonly lastModifiedByType?: "Application" | "Key" | "ManagedIdentity" | "User";
}
export interface UserIdentityProperties {
	readonly clientId?: string;
	readonly principalId?: string;
}
export default {
	nginxDeployments: nginxDeployments,
	"nginxDeployments/certificates": nginxDeployments_certificates,
	"nginxDeployments/configurations": nginxDeployments_configurations,
};
