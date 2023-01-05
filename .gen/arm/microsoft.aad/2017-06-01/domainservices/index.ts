import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class domainServices extends ArmResource<domainServicesComponentInputs> implements domainServicesComponentOutputs {
	constructor(entity: ADKEntity, options: domainServicesComponentInputs) {
		super(entity, options.name, "Microsoft.AAD/domainServices", "2017-06-01", options);
	}
	public readonly apiVersion: "2017-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.AAD/domainServices";
}
export interface domainServicesComponentOutputs {
	readonly apiVersion: "2017-06-01";
	readonly id: string;
	readonly type: "Microsoft.AAD/domainServices";
}
export interface domainServicesComponentInputs {
	readonly etag?: string;
	readonly location?: string;
	readonly name: string;
	readonly properties?: DomainServiceProperties;
	readonly tags?: ResourceTags;
}
export class Microsoft_Aad_domainServices_ouContainer
	extends ArmResource<Microsoft_Aad_domainServices_ouContainerComponentInputs>
	implements Microsoft_Aad_domainServices_ouContainerComponentOutputs
{
	constructor(entity: ADKEntity, options: Microsoft_Aad_domainServices_ouContainerComponentInputs) {
		super(entity, options.name, "Microsoft.AAD/Microsoft.Aad/domainServices/ouContainer", "2017-06-01", options);
	}
	public readonly apiVersion: "2017-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Aad/domainServices/ouContainer";
}
export interface Microsoft_Aad_domainServices_ouContainerComponentOutputs {
	readonly apiVersion: "2017-06-01";
	readonly id: string;
	readonly type: "Microsoft.Aad/domainServices/ouContainer";
}
export interface Microsoft_Aad_domainServices_ouContainerComponentInputs {
	readonly accountName?: string;
	readonly etag?: string;
	readonly location?: string;
	readonly name: string;
	readonly password?: string;
	readonly properties?: OuContainerProperties;
	readonly spn?: string;
	readonly tags?: ResourceTags;
}
export interface ContainerAccount {
	readonly accountName?: string;
	readonly password?: string;
	readonly spn?: string;
}
export interface DomainSecuritySettings {
	readonly ntlmV1?: "Disabled" | "Enabled";
	readonly syncKerberosPasswords?: "Disabled" | "Enabled";
	readonly syncNtlmPasswords?: "Disabled" | "Enabled";
	readonly syncOnPremPasswords?: "Disabled" | "Enabled";
	readonly tlsV1?: "Disabled" | "Enabled";
}
export interface DomainServiceProperties {
	readonly deploymentId?: string;
	readonly domainConfigurationType?: string;
	readonly domainControllerIpAddress?: string[];
	readonly domainName?: string;
	readonly domainSecuritySettings?: DomainSecuritySettings;
	readonly filteredSync?: "Disabled" | "Enabled";
	readonly healthAlerts?: HealthAlert[];
	readonly healthLastEvaluated?: string;
	readonly healthMonitors?: HealthMonitor[];
	readonly ldapsSettings?: LdapsSettings;
	readonly migrationProperties?: MigrationProperties;
	readonly notificationSettings?: NotificationSettings;
	readonly provisioningState?: string;
	readonly resourceForestSettings?: ResourceForestSettings;
	readonly serviceStatus?: string;
	readonly sku?: string;
	readonly subnetId?: string;
	readonly tenantId?: string;
	readonly version?: number;
	readonly vnetSiteId?: string;
}
export interface ForestTrust {
	readonly friendlyName?: string;
	readonly remoteDnsIps?: string;
	readonly trustDirection?: string;
	readonly trustedDomainFqdn?: string;
	readonly trustPassword?: string;
}
export interface HealthAlert {
	readonly id?: string;
	readonly issue?: string;
	readonly lastDetected?: string;
	readonly name?: string;
	readonly raised?: string;
	readonly resolutionUri?: string;
	readonly severity?: string;
}
export interface HealthMonitor {
	readonly details?: string;
	readonly id?: string;
	readonly name?: string;
}
export interface LdapsSettings {
	readonly certificateNotAfter?: string;
	readonly certificateThumbprint?: string;
	readonly externalAccess?: "Disabled" | "Enabled";
	readonly externalAccessIpAddress?: string;
	readonly ldaps?: "Disabled" | "Enabled";
	readonly pfxCertificate?: string;
	readonly pfxCertificatePassword?: string;
	readonly publicCertificate?: string;
}
export interface MigrationProgress {
	readonly completionPercentage?: number;
	readonly progressMessage?: string;
}
export interface MigrationProperties {
	readonly migrationProgress?: MigrationProgress;
	readonly oldSubnetId?: string;
	readonly oldVnetSiteId?: string;
}
export interface NotificationSettings {
	readonly additionalRecipients?: string[];
	readonly notifyDcAdmins?: "Disabled" | "Enabled";
	readonly notifyGlobalAdmins?: "Disabled" | "Enabled";
}
export interface OuContainerProperties {
	readonly accounts?: ContainerAccount[];
	readonly containerId?: string;
	readonly deploymentId?: string;
	readonly distinguishedName?: string;
	readonly domainName?: string;
	readonly provisioningState?: string;
	readonly serviceStatus?: string;
	readonly tenantId?: string;
}
export interface ResourceForestSettings {
	readonly resourceForest?: string;
	readonly settings?: ForestTrust[];
}
export interface ResourceTags {
	readonly [key: string]: string;
}
export default {
	domainServices: domainServices,
	"Microsoft.Aad/domainServices/ouContainer": Microsoft_Aad_domainServices_ouContainer,
};
