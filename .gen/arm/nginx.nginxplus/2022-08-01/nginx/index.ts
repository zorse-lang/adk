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
	readonly identity?: IdentityProperties | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: NginxDeploymentProperties | undefined;
	readonly sku?: ResourceSku | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: NginxDeploymentTags | undefined;
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
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: NginxCertificateProperties | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: NginxCertificateTags | undefined;
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
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: NginxConfigurationProperties | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: NginxConfigurationTags | undefined;
}
export interface IdentityProperties {
	readonly principalId?: string | undefined;
	readonly tenantId?: string | undefined;
	readonly type?: ("None" | "SystemAssigned" | "SystemAssigned, UserAssigned" | "UserAssigned") | undefined;
	readonly userAssignedIdentities?: IdentityPropertiesUserAssignedIdentities | undefined;
}
export interface IdentityPropertiesUserAssignedIdentities {
	readonly "[ key: string ]"?: UserIdentityProperties | undefined;
}
export interface NginxCertificateProperties {
	readonly certificateVirtualPath?: string | undefined;
	readonly keyVaultSecretId?: string | undefined;
	readonly keyVirtualPath?: string | undefined;
	readonly provisioningState?:
		| (
				| "Accepted"
				| "Canceled"
				| "Creating"
				| "Deleted"
				| "Deleting"
				| "Failed"
				| "NotSpecified"
				| "Succeeded"
				| "Updating"
		  )
		| undefined;
}
export interface NginxCertificateTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface NginxConfigurationFile {
	readonly content?: string | undefined;
	readonly virtualPath?: string | undefined;
}
export interface NginxConfigurationPackage {
	readonly data?: string | undefined;
}
export interface NginxConfigurationProperties {
	readonly files?: NginxConfigurationFile[] | undefined;
	readonly package?: NginxConfigurationPackage | undefined;
	readonly protectedFiles?: NginxConfigurationFile[] | undefined;
	readonly provisioningState?:
		| (
				| "Accepted"
				| "Canceled"
				| "Creating"
				| "Deleted"
				| "Deleting"
				| "Failed"
				| "NotSpecified"
				| "Succeeded"
				| "Updating"
		  )
		| undefined;
	readonly rootFile?: string | undefined;
}
export interface NginxConfigurationTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface NginxDeploymentProperties {
	readonly enableDiagnosticsSupport?: boolean | undefined;
	readonly ipAddress?: string | undefined;
	readonly logging?: NginxLogging | undefined;
	readonly managedResourceGroup?: string | undefined;
	readonly networkProfile?: NginxNetworkProfile | undefined;
	readonly nginxVersion?: string | undefined;
	readonly provisioningState?:
		| (
				| "Accepted"
				| "Canceled"
				| "Creating"
				| "Deleted"
				| "Deleting"
				| "Failed"
				| "NotSpecified"
				| "Succeeded"
				| "Updating"
		  )
		| undefined;
}
export interface NginxDeploymentTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface NginxFrontendIPConfiguration {
	readonly privateIPAddresses?: NginxPrivateIPAddress[] | undefined;
	readonly publicIPAddresses?: NginxPublicIPAddress[] | undefined;
}
export interface NginxLogging {
	readonly storageAccount?: NginxStorageAccount | undefined;
}
export interface NginxNetworkInterfaceConfiguration {
	readonly subnetId?: string | undefined;
}
export interface NginxNetworkProfile {
	readonly frontEndIPConfiguration?: NginxFrontendIPConfiguration | undefined;
	readonly networkInterfaceConfiguration?: NginxNetworkInterfaceConfiguration | undefined;
}
export interface NginxPrivateIPAddress {
	readonly privateIPAddress?: string | undefined;
	readonly privateIPAllocationMethod?: ("Dynamic" | "Static") | undefined;
	readonly subnetId?: string | undefined;
}
export interface NginxPublicIPAddress {
	readonly id?: string | undefined;
}
export interface NginxStorageAccount {
	readonly accountName?: string | undefined;
	readonly containerName?: string | undefined;
}
export interface ResourceSku {
	readonly name: string;
}
export interface SystemData {
	readonly createdAt?: string | undefined;
	readonly createdBy?: string | undefined;
	readonly createdByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
	readonly lastModifiedAt?: string | undefined;
	readonly lastModifiedBy?: string | undefined;
	readonly lastModifiedByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
}
export interface UserIdentityProperties {
	readonly clientId?: string | undefined;
	readonly principalId?: string | undefined;
}
export default {
	nginxDeployments: nginxDeployments,
	"nginxDeployments/certificates": nginxDeployments_certificates,
	"nginxDeployments/configurations": nginxDeployments_configurations,
};
