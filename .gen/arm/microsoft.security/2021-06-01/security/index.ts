import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class assessmentMetadata
	extends ArmResource<assessmentMetadataComponentInputs>
	implements assessmentMetadataComponentOutputs
{
	constructor(entity: ADKEntity, options: assessmentMetadataComponentInputs) {
		super(entity, options.name, "Microsoft.Security/assessmentMetadata", "2021-06-01", options);
	}
	public readonly apiVersion: "2021-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Security/assessmentMetadata";
}
export interface assessmentMetadataComponentOutputs {
	readonly apiVersion: "2021-06-01";
	readonly id: string;
	readonly type: "Microsoft.Security/assessmentMetadata";
}
export interface assessmentMetadataComponentInputs {
	readonly name: string;
	readonly properties?: SecurityAssessmentMetadataPropertiesResponse;
}
export class assessments extends ArmResource<assessmentsComponentInputs> implements assessmentsComponentOutputs {
	constructor(entity: ADKEntity, options: assessmentsComponentInputs) {
		super(entity, options.name, "Microsoft.Security/assessments", "2021-06-01", options);
	}
	public readonly apiVersion: "2021-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Security/assessments";
}
export interface assessmentsComponentOutputs {
	readonly apiVersion: "2021-06-01";
	readonly id: string;
	readonly type: "Microsoft.Security/assessments";
}
export interface assessmentsComponentInputs {
	readonly name: string;
	readonly properties?: SecurityAssessmentPropertiesOrSecurityAssessmentPropertiesResponse;
}
export class settings_AlertSyncSettings
	extends ArmResource<settings_AlertSyncSettingsComponentInputs>
	implements settings_AlertSyncSettingsComponentOutputs
{
	constructor(entity: ADKEntity, options: settings_AlertSyncSettingsComponentInputs) {
		super(entity, options.name, "Microsoft.Security/settings", "2021-06-01", options);
	}
	public readonly apiVersion: "2021-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Security/settings";
}
export interface settings_AlertSyncSettingsComponentOutputs {
	readonly apiVersion: "2021-06-01";
	readonly id: string;
	readonly type: "Microsoft.Security/settings";
}
export interface settings_AlertSyncSettingsComponentInputs {
	readonly name: string;
	readonly kind: "AlertSyncSettings";
	readonly properties?: AlertSyncSettingProperties;
}
export class settings_DataExportSettings
	extends ArmResource<settings_DataExportSettingsComponentInputs>
	implements settings_DataExportSettingsComponentOutputs
{
	constructor(entity: ADKEntity, options: settings_DataExportSettingsComponentInputs) {
		super(entity, options.name, "Microsoft.Security/settings", "2021-06-01", options);
	}
	public readonly apiVersion: "2021-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Security/settings";
}
export interface settings_DataExportSettingsComponentOutputs {
	readonly apiVersion: "2021-06-01";
	readonly id: string;
	readonly type: "Microsoft.Security/settings";
}
export interface settings_DataExportSettingsComponentInputs {
	readonly name: string;
	readonly kind: "DataExportSettings";
	readonly properties?: DataExportSettingProperties;
}
export interface AlertSyncSettingProperties {
	readonly enabled: boolean;
}
export interface AssessmentLinks {
	readonly azurePortalUri?: string;
}
export interface AssessmentStatusOrAssessmentStatusResponse {
	readonly cause?: string;
	readonly code: "Healthy" | "NotApplicable" | "Unhealthy";
	readonly description?: string;
	readonly firstEvaluationDate?: string;
	readonly statusChangeDate?: string;
}
export interface DataExportSettingProperties {
	readonly enabled: boolean;
}
export interface ResourceDetails {}
export interface SecurityAssessmentMetadataPartnerData {
	readonly partnerName: string;
	readonly productName?: string;
	readonly secret: string;
}
export interface SecurityAssessmentMetadataProperties {
	readonly assessmentType: "BuiltIn" | "CustomPolicy" | "CustomerManaged" | "VerifiedPartner";
	readonly categories?: "Compute" | "Data" | "IdentityAndAccess" | "IoT" | "Networking"[];
	readonly description?: string;
	readonly displayName: string;
	readonly implementationEffort?: "High" | "Low" | "Moderate";
	readonly partnerData?: SecurityAssessmentMetadataPartnerData;
	readonly policyDefinitionId?: string;
	readonly preview?: boolean;
	readonly remediationDescription?: string;
	readonly severity: "High" | "Low" | "Medium";
	readonly threats?:
		| "accountBreach"
		| "dataExfiltration"
		| "dataSpillage"
		| "denialOfService"
		| "elevationOfPrivilege"
		| "maliciousInsider"
		| "missingCoverage"
		| "threatResistance"[];
	readonly userImpact?: "High" | "Low" | "Moderate";
}
export interface SecurityAssessmentMetadataPropertiesResponse {
	readonly assessmentType: "BuiltIn" | "CustomPolicy" | "CustomerManaged" | "VerifiedPartner";
	readonly categories?: "Compute" | "Data" | "IdentityAndAccess" | "IoT" | "Networking"[];
	readonly description?: string;
	readonly displayName: string;
	readonly implementationEffort?: "High" | "Low" | "Moderate";
	readonly partnerData?: SecurityAssessmentMetadataPartnerData;
	readonly plannedDeprecationDate?: string;
	readonly policyDefinitionId?: string;
	readonly preview?: boolean;
	readonly publishDates?: SecurityAssessmentMetadataPropertiesResponsePublishDates;
	readonly remediationDescription?: string;
	readonly severity: "High" | "Low" | "Medium";
	readonly tactics?:
		| "Collection"
		| "Command and Control"
		| "Credential Access"
		| "Defense Evasion"
		| "Discovery"
		| "Execution"
		| "Exfiltration"
		| "Impact"
		| "Initial Access"
		| "Lateral Movement"
		| "Persistence"
		| "Privilege Escalation"
		| "Reconnaissance"
		| "Resource Development"[];
	readonly techniques?:
		| "Abuse Elevation Control Mechanism"
		| "Access Token Manipulation"
		| "Account Discovery"
		| "Account Manipulation"
		| "Active Scanning"
		| "Application Layer Protocol"
		| "Audio Capture"
		| "Boot or Logon Autostart Execution"
		| "Boot or Logon Initialization Scripts"
		| "Brute Force"
		| "Cloud Infrastructure Discovery"
		| "Cloud Service Dashboard"
		| "Cloud Service Discovery"
		| "Command and Scripting Interpreter"
		| "Compromise Client Software Binary"
		| "Compromise Infrastructure"
		| "Container and Resource Discovery"
		| "Create Account"
		| "Create or Modify System Process"
		| "Credentials from Password Stores"
		| "Data Destruction"
		| "Data Encrypted for Impact"
		| "Data Manipulation"
		| "Data Staged"
		| "Data from Cloud Storage Object"
		| "Data from Configuration Repository"
		| "Data from Information Repositories"
		| "Data from Local System"
		| "Defacement"
		| "Deobfuscate/Decode Files or Information"
		| "Disk Wipe"
		| "Domain Trust Discovery"
		| "Drive-by Compromise"
		| "Dynamic Resolution"
		| "Endpoint Denial of Service"
		| "Event Triggered Execution"
		| "Exfiltration Over Alternative Protocol"
		| "Exploit Public-Facing Application"
		| "Exploitation for Client Execution"
		| "Exploitation for Credential Access"
		| "Exploitation for Defense Evasion"
		| "Exploitation for Privilege Escalation"
		| "Exploitation of Remote Services"
		| "External Remote Services"
		| "Fallback Channels"
		| "File and Directory Discovery"
		| "File and Directory Permissions Modification"
		| "Gather Victim Network Information"
		| "Hide Artifacts"
		| "Hijack Execution Flow"
		| "Impair Defenses"
		| "Implant Container Image"
		| "Indicator Removal on Host"
		| "Indirect Command Execution"
		| "Ingress Tool Transfer"
		| "Input Capture"
		| "Inter-Process Communication"
		| "Lateral Tool Transfer"
		| "Man-in-the-Middle"
		| "Masquerading"
		| "Modify Authentication Process"
		| "Modify Registry"
		| "Network Denial of Service"
		| "Network Service Scanning"
		| "Network Sniffing"
		| "Non-Application Layer Protocol"
		| "Non-Standard Port"
		| "OS Credential Dumping"
		| "Obfuscated Files or Information"
		| "Obtain Capabilities"
		| "Office Application Startup"
		| "Permission Groups Discovery"
		| "Phishing"
		| "Pre-OS Boot"
		| "Process Discovery"
		| "Process Injection"
		| "Protocol Tunneling"
		| "Proxy"
		| "Query Registry"
		| "Remote Access Software"
		| "Remote Service Session Hijacking"
		| "Remote Services"
		| "Remote System Discovery"
		| "Resource Hijacking"
		| "SQL Stored Procedures"
		| "Scheduled Task/Job"
		| "Screen Capture"
		| "Search Victim-Owned Websites"
		| "Server Software Component"
		| "Service Stop"
		| "Signed Binary Proxy Execution"
		| "Software Deployment Tools"
		| "Steal or Forge Kerberos Tickets"
		| "Subvert Trust Controls"
		| "Supply Chain Compromise"
		| "System Information Discovery"
		| "Taint Shared Content"
		| "Traffic Signaling"
		| "Transfer Data to Cloud Account"
		| "Trusted Relationship"
		| "Unsecured Credentials"
		| "User Execution"
		| "Valid Accounts"
		| "Windows Management Instrumentation"[];
	readonly threats?:
		| "accountBreach"
		| "dataExfiltration"
		| "dataSpillage"
		| "denialOfService"
		| "elevationOfPrivilege"
		| "maliciousInsider"
		| "missingCoverage"
		| "threatResistance"[];
	readonly userImpact?: "High" | "Low" | "Moderate";
}
export interface SecurityAssessmentMetadataPropertiesResponsePublishDates {
	readonly GA?: string;
	readonly public: string;
}
export interface SecurityAssessmentPartnerData {
	readonly partnerName: string;
	readonly secret: string;
}
export interface SecurityAssessmentPropertiesBaseAdditionalData {
	readonly [key: string]: string;
}
export interface SecurityAssessmentPropertiesOrSecurityAssessmentPropertiesResponse {
	readonly additionalData?: SecurityAssessmentPropertiesBaseAdditionalData;
	readonly displayName?: string;
	readonly links?: AssessmentLinks;
	readonly metadata?: SecurityAssessmentMetadataProperties;
	readonly partnersData?: SecurityAssessmentPartnerData;
	readonly resourceDetails: ResourceDetails;
	readonly status: AssessmentStatusOrAssessmentStatusResponse;
}
export type settings = settings_AlertSyncSettings | settings_DataExportSettings;
export default {
	assessmentMetadata: assessmentMetadata,
	assessments: assessments,
	"settings/AlertSyncSettings": settings_AlertSyncSettings,
	"settings/DataExportSettings": settings_DataExportSettings,
};
