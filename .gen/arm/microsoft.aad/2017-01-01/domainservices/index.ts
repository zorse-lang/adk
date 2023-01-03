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
	readonly etag?: string | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: DomainServiceProperties | undefined;
	readonly tags?: ResourceTags | undefined;
}
export interface DomainSecuritySettings {
	readonly ntlmV1?: ("Disabled" | "Enabled") | undefined;
	readonly syncNtlmPasswords?: ("Disabled" | "Enabled") | undefined;
	readonly tlsV1?: ("Disabled" | "Enabled") | undefined;
}
export interface DomainServiceProperties {
	readonly deploymentId?: string | undefined;
	readonly domainControllerIpAddress?: string[] | undefined;
	readonly domainName?: string | undefined;
	readonly domainSecuritySettings?: DomainSecuritySettings | undefined;
	readonly filteredSync?: ("Disabled" | "Enabled") | undefined;
	readonly healthAlerts?: HealthAlert[] | undefined;
	readonly healthLastEvaluated?: string | undefined;
	readonly healthMonitors?: HealthMonitor[] | undefined;
	readonly ldapsSettings?: LdapsSettings | undefined;
	readonly notificationSettings?: NotificationSettings | undefined;
	readonly provisioningState?: string | undefined;
	readonly serviceStatus?: string | undefined;
	readonly subnetId?: string | undefined;
	readonly tenantId?: string | undefined;
	readonly vnetSiteId?: string | undefined;
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
	readonly externalAccessIpAddress?: string | undefined;
	readonly ldaps?: ("Disabled" | "Enabled") | undefined;
	readonly pfxCertificate?: string | undefined;
	readonly pfxCertificatePassword?: string | undefined;
	readonly publicCertificate?: string | undefined;
}
export interface NotificationSettings {
	readonly additionalRecipients?: string[] | undefined;
	readonly notifyDcAdmins?: ("Disabled" | "Enabled") | undefined;
	readonly notifyGlobalAdmins?: ("Disabled" | "Enabled") | undefined;
}
export interface ResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export default {
	domainServices: domainServices,
};
