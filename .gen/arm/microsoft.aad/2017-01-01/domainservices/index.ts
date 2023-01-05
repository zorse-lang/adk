import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class domainServices extends ArmResource<domainServicesComponentInputs> implements domainServicesComponentOutputs {
	constructor(entity: ADKEntity, options: domainServicesComponentInputs) {
		super(entity, options.name, "Microsoft.AAD/domainServices", "2017-01-01", options);
	}
	public readonly apiVersion: "2017-01-01";
	public readonly id: string;
	public readonly type: "Microsoft.AAD/domainServices";
}
export interface domainServicesComponentOutputs {
	readonly apiVersion: "2017-01-01";
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
export interface DomainSecuritySettings {
	readonly ntlmV1?: "Disabled" | "Enabled";
	readonly syncNtlmPasswords?: "Disabled" | "Enabled";
	readonly tlsV1?: "Disabled" | "Enabled";
}
export interface DomainServiceProperties {
	readonly deploymentId?: string;
	readonly domainControllerIpAddress?: string[];
	readonly domainName?: string;
	readonly domainSecuritySettings?: DomainSecuritySettings;
	readonly filteredSync?: "Disabled" | "Enabled";
	readonly healthAlerts?: HealthAlert[];
	readonly healthLastEvaluated?: string;
	readonly healthMonitors?: HealthMonitor[];
	readonly ldapsSettings?: LdapsSettings;
	readonly notificationSettings?: NotificationSettings;
	readonly provisioningState?: string;
	readonly serviceStatus?: string;
	readonly subnetId?: string;
	readonly tenantId?: string;
	readonly vnetSiteId?: string;
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
export interface NotificationSettings {
	readonly additionalRecipients?: string[];
	readonly notifyDcAdmins?: "Disabled" | "Enabled";
	readonly notifyGlobalAdmins?: "Disabled" | "Enabled";
}
export interface ResourceTags {
	readonly [key: string]: string;
}
export default {
	domainServices: domainServices,
};
