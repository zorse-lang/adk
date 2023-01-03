import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class domainServices extends ArmResource<domainServicesComponentInputs> implements domainServicesComponentOutputs {
	constructor(entity: ADKEntity, options: domainServicesComponentInputs) {
		super(entity, options.name, "Microsoft.AAD/domainServices", "2020-01-01", options);
	}
	public readonly apiVersion: "2020-01-01";
	public readonly id: string;
	public readonly type: "Microsoft.AAD/domainServices";
}
export interface domainServicesComponentOutputs {
	readonly apiVersion: "2020-01-01";
	readonly id: string;
	readonly type: "Microsoft.AAD/domainServices";
}
export interface domainServicesComponentInputs {
	readonly etag?: string | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: DomainServiceProperties | undefined;
	readonly tags?: ResourceTags | undefined;
}
export class Microsoft_Aad_domainServices_ouContainer
	extends ArmResource<Microsoft_Aad_domainServices_ouContainerComponentInputs>
	implements Microsoft_Aad_domainServices_ouContainerComponentOutputs
{
	constructor(entity: ADKEntity, options: Microsoft_Aad_domainServices_ouContainerComponentInputs) {
		super(entity, options.name, "Microsoft.AAD/Microsoft.Aad/domainServices/ouContainer", "2020-01-01", options);
	}
	public readonly apiVersion: "2020-01-01";
	public readonly id: string;
	public readonly type: "Microsoft.Aad/domainServices/ouContainer";
}
export interface Microsoft_Aad_domainServices_ouContainerComponentOutputs {
	readonly apiVersion: "2020-01-01";
	readonly id: string;
	readonly type: "Microsoft.Aad/domainServices/ouContainer";
}
export interface Microsoft_Aad_domainServices_ouContainerComponentInputs {
	readonly accountName?: string | undefined;
	readonly etag?: string | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly password?: string | undefined;
	readonly properties?: OuContainerProperties | undefined;
	readonly spn?: string | undefined;
	readonly tags?: ResourceTags | undefined;
}
export interface ContainerAccount {
	readonly accountName?: string | undefined;
	readonly password?: string | undefined;
	readonly spn?: string | undefined;
}
export interface DomainSecuritySettings {
	readonly ntlmV1?: ("Disabled" | "Enabled") | undefined;
	readonly syncKerberosPasswords?: ("Disabled" | "Enabled") | undefined;
	readonly syncNtlmPasswords?: ("Disabled" | "Enabled") | undefined;
	readonly syncOnPremPasswords?: ("Disabled" | "Enabled") | undefined;
	readonly tlsV1?: ("Disabled" | "Enabled") | undefined;
}
export interface DomainServiceProperties {
	readonly deploymentId?: string | undefined;
	readonly domainConfigurationType?: string | undefined;
	readonly domainName?: string | undefined;
	readonly domainSecuritySettings?: DomainSecuritySettings | undefined;
	readonly filteredSync?: ("Disabled" | "Enabled") | undefined;
	readonly ldapsSettings?: LdapsSettings | undefined;
	readonly migrationProperties?: MigrationProperties | undefined;
	readonly notificationSettings?: NotificationSettings | undefined;
	readonly provisioningState?: string | undefined;
	readonly replicaSets?: ReplicaSet[] | undefined;
	readonly resourceForestSettings?: ResourceForestSettings | undefined;
	readonly sku?: string | undefined;
	readonly syncOwner?: string | undefined;
	readonly tenantId?: string | undefined;
	readonly version?: number | undefined;
}
export interface ForestTrust {
	readonly friendlyName?: string | undefined;
	readonly remoteDnsIps?: string | undefined;
	readonly trustDirection?: string | undefined;
	readonly trustedDomainFqdn?: string | undefined;
	readonly trustPassword?: string | undefined;
}
export interface HealthAlert {
	readonly id?: string | undefined;
	readonly issue?: string | undefined;
	readonly lastDetected?: string | undefined;
	readonly name?: string | undefined;
	readonly raised?: string | undefined;
	readonly resolutionUri?: string | undefined;
	readonly severity?: string | undefined;
}
export interface HealthMonitor {
	readonly details?: string | undefined;
	readonly id?: string | undefined;
	readonly name?: string | undefined;
}
export interface LdapsSettings {
	readonly certificateNotAfter?: string | undefined;
	readonly certificateThumbprint?: string | undefined;
	readonly externalAccess?: ("Disabled" | "Enabled") | undefined;
	readonly ldaps?: ("Disabled" | "Enabled") | undefined;
	readonly pfxCertificate?: string | undefined;
	readonly pfxCertificatePassword?: string | undefined;
	readonly publicCertificate?: string | undefined;
}
export interface MigrationProgress {
	readonly completionPercentage?: number | undefined;
	readonly progressMessage?: string | undefined;
}
export interface MigrationProperties {
	readonly migrationProgress?: MigrationProgress | undefined;
	readonly oldSubnetId?: string | undefined;
	readonly oldVnetSiteId?: string | undefined;
}
export interface NotificationSettings {
	readonly additionalRecipients?: string[] | undefined;
	readonly notifyDcAdmins?: ("Disabled" | "Enabled") | undefined;
	readonly notifyGlobalAdmins?: ("Disabled" | "Enabled") | undefined;
}
export interface OuContainerProperties {
	readonly accounts?: ContainerAccount[] | undefined;
	readonly containerId?: string | undefined;
	readonly deploymentId?: string | undefined;
	readonly distinguishedName?: string | undefined;
	readonly domainName?: string | undefined;
	readonly provisioningState?: string | undefined;
	readonly serviceStatus?: string | undefined;
	readonly tenantId?: string | undefined;
}
export interface ReplicaSet {
	readonly domainControllerIpAddress?: string[] | undefined;
	readonly externalAccessIpAddress?: string | undefined;
	readonly healthAlerts?: HealthAlert[] | undefined;
	readonly healthLastEvaluated?: string | undefined;
	readonly healthMonitors?: HealthMonitor[] | undefined;
	readonly location?: string | undefined;
	readonly replicaSetId?: string | undefined;
	readonly serviceStatus?: string | undefined;
	readonly subnetId?: string | undefined;
	readonly vnetSiteId?: string | undefined;
}
export interface ResourceForestSettings {
	readonly resourceForest?: string | undefined;
	readonly settings?: ForestTrust[] | undefined;
}
export interface ResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export default {
	domainServices: domainServices,
	"Microsoft.Aad/domainServices/ouContainer": Microsoft_Aad_domainServices_ouContainer,
};
