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
	readonly properties?: ConnectorSettingProperties | undefined;
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
	readonly properties?: SecureScoreItemProperties | undefined;
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
	readonly properties?: SecurityContactProperties | undefined;
}
export interface AuthenticationDetailsProperties {
	readonly authenticationProvisioningState?: ("Expired" | "IncorrectPolicy" | "Invalid" | "Valid") | undefined;
	readonly grantedPermissions?:
		| (
				| "AWS::AWSSecurityHubReadOnlyAccess"
				| "AWS::AmazonSSMAutomationRole"
				| "AWS::SecurityAudit"
				| "GCP::Security Center Admin Viewer"[]
		  )
		| undefined;
}
export interface ConnectorSettingProperties {
	readonly authenticationDetails?: AuthenticationDetailsProperties | undefined;
	readonly hybridComputeSettings?: HybridComputeSettingsProperties | undefined;
}
export interface HybridComputeSettingsProperties {
	readonly autoProvision: "Off" | "On";
	readonly hybridComputeProvisioningState?: ("Expired" | "Invalid" | "Valid") | undefined;
	readonly proxyServer?: ProxyServerProperties | undefined;
	readonly region?: string | undefined;
	readonly resourceGroupName?: string | undefined;
	readonly servicePrincipal?: ServicePrincipalProperties | undefined;
}
export interface ProxyServerProperties {
	readonly ip?: string | undefined;
	readonly port?: string | undefined;
}
export interface ScoreDetails {
	readonly current?: number | undefined;
	readonly max?: number | undefined;
	readonly percentage?: number | undefined;
}
export interface SecureScoreItemProperties {
	readonly displayName?: string | undefined;
	readonly score?: ScoreDetails | undefined;
	readonly weight?: number | undefined;
}
export interface SecurityContactProperties {
	readonly alertNotifications?: SecurityContactPropertiesAlertNotifications | undefined;
	readonly emails?: string | undefined;
	readonly notificationsByRole?: SecurityContactPropertiesNotificationsByRole | undefined;
	readonly phone?: string | undefined;
}
export interface SecurityContactPropertiesAlertNotifications {
	readonly minimalSeverity?: ("High" | "Low" | "Medium") | undefined;
	readonly state?: ("Off" | "On") | undefined;
}
export interface SecurityContactPropertiesNotificationsByRole {
	readonly roles?: ("AccountAdmin" | "Contributor" | "Owner" | "ServiceAdmin"[]) | undefined;
	readonly state?: ("Off" | "On") | undefined;
}
export interface ServicePrincipalProperties {
	readonly applicationId?: string | undefined;
	readonly secret?: string | undefined;
}
export default {
	connectors: connectors,
	secureScores: secureScores,
	securityContacts: securityContacts,
};
