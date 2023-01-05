import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class connectors extends ArmResource<connectorsComponentInputs> implements connectorsComponentOutputs {
	constructor(entity: ADKEntity, options: connectorsComponentInputs) {
		super(entity, options.name, "Microsoft.Security/connectors", "2020-01-01-preview", options);
	}
	public readonly apiVersion: "2020-01-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Security/connectors";
}
export interface connectorsComponentOutputs {
	readonly apiVersion: "2020-01-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Security/connectors";
}
export interface connectorsComponentInputs {
	readonly name: string;
	readonly properties?: ConnectorSettingProperties;
}
export class secureScores extends ArmResource<secureScoresComponentInputs> implements secureScoresComponentOutputs {
	constructor(entity: ADKEntity, options: secureScoresComponentInputs) {
		super(entity, options.name, "Microsoft.Security/secureScores", "2020-01-01-preview", options);
	}
	public readonly apiVersion: "2020-01-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Security/secureScores";
}
export interface secureScoresComponentOutputs {
	readonly apiVersion: "2020-01-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Security/secureScores";
}
export interface secureScoresComponentInputs {
	readonly name: string;
	readonly properties?: SecureScoreItemProperties;
}
export class securityContacts
	extends ArmResource<securityContactsComponentInputs>
	implements securityContactsComponentOutputs
{
	constructor(entity: ADKEntity, options: securityContactsComponentInputs) {
		super(entity, options.name, "Microsoft.Security/securityContacts", "2020-01-01-preview", options);
	}
	public readonly apiVersion: "2020-01-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Security/securityContacts";
}
export interface securityContactsComponentOutputs {
	readonly apiVersion: "2020-01-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Security/securityContacts";
}
export interface securityContactsComponentInputs {
	readonly name: string;
	readonly properties?: SecurityContactProperties;
}
export interface AuthenticationDetailsProperties {
	readonly authenticationProvisioningState?: "Expired" | "IncorrectPolicy" | "Invalid" | "Valid";
	readonly grantedPermissions?:
		| "AWS::AWSSecurityHubReadOnlyAccess"
		| "AWS::AmazonSSMAutomationRole"
		| "AWS::SecurityAudit"
		| "GCP::Security Center Admin Viewer"[];
}
export interface ConnectorSettingProperties {
	readonly authenticationDetails?: AuthenticationDetailsProperties;
	readonly hybridComputeSettings?: HybridComputeSettingsProperties;
}
export interface HybridComputeSettingsProperties {
	readonly autoProvision: "Off" | "On";
	readonly hybridComputeProvisioningState?: "Expired" | "Invalid" | "Valid";
	readonly proxyServer?: ProxyServerProperties;
	readonly region?: string;
	readonly resourceGroupName?: string;
	readonly servicePrincipal?: ServicePrincipalProperties;
}
export interface ProxyServerProperties {
	readonly ip?: string;
	readonly port?: string;
}
export interface ScoreDetails {
	readonly current?: number;
	readonly max?: number;
	readonly percentage?: number;
}
export interface SecureScoreItemProperties {
	readonly displayName?: string;
	readonly score?: ScoreDetails;
	readonly weight?: number;
}
export interface SecurityContactProperties {
	readonly alertNotifications?: SecurityContactPropertiesAlertNotifications;
	readonly emails?: string;
	readonly notificationsByRole?: SecurityContactPropertiesNotificationsByRole;
	readonly phone?: string;
}
export interface SecurityContactPropertiesAlertNotifications {
	readonly minimalSeverity?: "High" | "Low" | "Medium";
	readonly state?: "Off" | "On";
}
export interface SecurityContactPropertiesNotificationsByRole {
	readonly roles?: "AccountAdmin" | "Contributor" | "Owner" | "ServiceAdmin"[];
	readonly state?: "Off" | "On";
}
export interface ServicePrincipalProperties {
	readonly applicationId?: string;
	readonly secret?: string;
}
export default {
	connectors: connectors,
	secureScores: secureScores,
	securityContacts: securityContacts,
};
