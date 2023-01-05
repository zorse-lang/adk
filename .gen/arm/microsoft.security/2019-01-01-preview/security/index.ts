import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class alertsSuppressionRules
	extends ArmResource<alertsSuppressionRulesComponentInputs>
	implements alertsSuppressionRulesComponentOutputs
{
	constructor(entity: ADKEntity, options: alertsSuppressionRulesComponentInputs) {
		super(entity, options.name, "Microsoft.Security/alertsSuppressionRules", "2019-01-01-preview", options);
	}
	public readonly apiVersion: "2019-01-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Security/alertsSuppressionRules";
}
export interface alertsSuppressionRulesComponentOutputs {
	readonly apiVersion: "2019-01-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Security/alertsSuppressionRules";
}
export interface alertsSuppressionRulesComponentInputs {
	readonly name: string;
	readonly properties?: AlertsSuppressionRuleProperties;
}
export class assessmentMetadata
	extends ArmResource<assessmentMetadataComponentInputs>
	implements assessmentMetadataComponentOutputs
{
	constructor(entity: ADKEntity, options: assessmentMetadataComponentInputs) {
		super(entity, options.name, "Microsoft.Security/assessmentMetadata", "2019-01-01-preview", options);
	}
	public readonly apiVersion: "2019-01-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Security/assessmentMetadata";
}
export interface assessmentMetadataComponentOutputs {
	readonly apiVersion: "2019-01-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Security/assessmentMetadata";
}
export interface assessmentMetadataComponentInputs {
	readonly name: string;
	readonly properties?: SecurityAssessmentMetadataProperties;
}
export class assessments extends ArmResource<assessmentsComponentInputs> implements assessmentsComponentOutputs {
	constructor(entity: ADKEntity, options: assessmentsComponentInputs) {
		super(entity, options.name, "Microsoft.Security/assessments", "2019-01-01-preview", options);
	}
	public readonly apiVersion: "2019-01-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Security/assessments";
}
export interface assessmentsComponentOutputs {
	readonly apiVersion: "2019-01-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Security/assessments";
}
export interface assessmentsComponentInputs {
	readonly name: string;
	readonly properties?: SecurityAssessmentProperties;
}
export class assessments_subAssessments
	extends ArmResource<assessments_subAssessmentsComponentInputs>
	implements assessments_subAssessmentsComponentOutputs
{
	constructor(entity: ADKEntity, options: assessments_subAssessmentsComponentInputs) {
		super(entity, options.name, "Microsoft.Security/assessments/subAssessments", "2019-01-01-preview", options);
	}
	public readonly apiVersion: "2019-01-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Security/assessments/subAssessments";
}
export interface assessments_subAssessmentsComponentOutputs {
	readonly apiVersion: "2019-01-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Security/assessments/subAssessments";
}
export interface assessments_subAssessmentsComponentInputs {
	readonly name: string;
	readonly properties?: SecuritySubAssessmentProperties;
}
export class automations extends ArmResource<automationsComponentInputs> implements automationsComponentOutputs {
	constructor(entity: ADKEntity, options: automationsComponentInputs) {
		super(entity, options.name, "Microsoft.Security/automations", "2019-01-01-preview", options);
	}
	public readonly apiVersion: "2019-01-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Security/automations";
}
export interface automationsComponentOutputs {
	readonly apiVersion: "2019-01-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Security/automations";
}
export interface automationsComponentInputs {
	readonly etag?: string;
	readonly kind?: string;
	readonly location?: string;
	readonly name: string;
	readonly properties?: AutomationProperties;
	readonly tags?: Tags;
}
export class regulatoryComplianceStandards
	extends ArmResource<regulatoryComplianceStandardsComponentInputs>
	implements regulatoryComplianceStandardsComponentOutputs
{
	constructor(entity: ADKEntity, options: regulatoryComplianceStandardsComponentInputs) {
		super(entity, options.name, "Microsoft.Security/regulatoryComplianceStandards", "2019-01-01-preview", options);
	}
	public readonly apiVersion: "2019-01-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Security/regulatoryComplianceStandards";
}
export interface regulatoryComplianceStandardsComponentOutputs {
	readonly apiVersion: "2019-01-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Security/regulatoryComplianceStandards";
}
export interface regulatoryComplianceStandardsComponentInputs {
	readonly name: string;
	readonly properties?: RegulatoryComplianceStandardProperties;
}
export class regulatoryComplianceStandards_regulatoryComplianceControls
	extends ArmResource<regulatoryComplianceStandards_regulatoryComplianceControlsComponentInputs>
	implements regulatoryComplianceStandards_regulatoryComplianceControlsComponentOutputs
{
	constructor(entity: ADKEntity, options: regulatoryComplianceStandards_regulatoryComplianceControlsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.Security/regulatoryComplianceStandards/regulatoryComplianceControls",
			"2019-01-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2019-01-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Security/regulatoryComplianceStandards/regulatoryComplianceControls";
}
export interface regulatoryComplianceStandards_regulatoryComplianceControlsComponentOutputs {
	readonly apiVersion: "2019-01-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Security/regulatoryComplianceStandards/regulatoryComplianceControls";
}
export interface regulatoryComplianceStandards_regulatoryComplianceControlsComponentInputs {
	readonly name: string;
	readonly properties?: RegulatoryComplianceControlProperties;
}
export class regulatoryComplianceStandards_regulatoryComplianceControls_regulatoryComplianceAssessments
	extends ArmResource<regulatoryComplianceStandards_regulatoryComplianceControls_regulatoryComplianceAssessmentsComponentInputs>
	implements regulatoryComplianceStandards_regulatoryComplianceControls_regulatoryComplianceAssessmentsComponentOutputs
{
	constructor(
		entity: ADKEntity,
		options: regulatoryComplianceStandards_regulatoryComplianceControls_regulatoryComplianceAssessmentsComponentInputs,
	) {
		super(
			entity,
			options.name,
			"Microsoft.Security/regulatoryComplianceStandards/regulatoryComplianceControls/regulatoryComplianceAssessments",
			"2019-01-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2019-01-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Security/regulatoryComplianceStandards/regulatoryComplianceControls/regulatoryComplianceAssessments";
}
export interface regulatoryComplianceStandards_regulatoryComplianceControls_regulatoryComplianceAssessmentsComponentOutputs {
	readonly apiVersion: "2019-01-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Security/regulatoryComplianceStandards/regulatoryComplianceControls/regulatoryComplianceAssessments";
}
export interface regulatoryComplianceStandards_regulatoryComplianceControls_regulatoryComplianceAssessmentsComponentInputs {
	readonly name: string;
	readonly properties?: RegulatoryComplianceAssessmentProperties;
}
export interface AdditionalData {}
export interface AlertsSuppressionRuleProperties {
	readonly alertType: string;
	readonly comment?: string;
	readonly expirationDateUtc?: string;
	readonly lastModifiedUtc?: string;
	readonly reason: string;
	readonly state: "Disabled" | "Enabled";
	readonly suppressionAlertsScope?: SuppressionAlertsScope;
}
export interface AssessmentLinks {
	readonly azurePortalUri?: string;
}
export interface AssessmentStatus {
	readonly cause?: string;
	readonly code: "Healthy" | "NotApplicable" | "Unhealthy";
	readonly description?: string;
}
export interface AutomationAction {}
export interface AutomationProperties {
	readonly actions?: AutomationAction[];
	readonly description?: string;
	readonly isEnabled?: boolean;
	readonly scopes?: AutomationScope[];
	readonly sources?: AutomationSource[];
}
export interface AutomationRuleSet {
	readonly rules?: AutomationTriggeringRule[];
}
export interface AutomationScope {
	readonly description?: string;
	readonly scopePath?: string;
}
export interface AutomationSource {
	readonly eventSource?:
		| "Alerts"
		| "Assessments"
		| "AssessmentsSnapshot"
		| "RegulatoryComplianceAssessment"
		| "RegulatoryComplianceAssessmentSnapshot"
		| "SecureScoreControls"
		| "SecureScoreControlsSnapshot"
		| "SecureScores"
		| "SecureScoresSnapshot"
		| "SubAssessments"
		| "SubAssessmentsSnapshot";
	readonly ruleSets?: AutomationRuleSet[];
}
export interface AutomationTriggeringRule {
	readonly expectedValue?: string;
	readonly operator?:
		| "Contains"
		| "EndsWith"
		| "Equals"
		| "GreaterThan"
		| "GreaterThanOrEqualTo"
		| "LesserThan"
		| "LesserThanOrEqualTo"
		| "NotEquals"
		| "StartsWith";
	readonly propertyJPath?: string;
	readonly propertyType?: "Boolean" | "Integer" | "Number" | "String";
}
export interface ContainerRegistryVulnerabilityPropertiesCvss {
	readonly [key: string]: Cvss;
}
export interface CVE {
	readonly link?: string;
	readonly title?: string;
}
export interface Cvss {
	readonly base?: number;
}
export interface RegulatoryComplianceAssessmentProperties {
	readonly assessmentDetailsLink?: string;
	readonly assessmentType?: string;
	readonly description?: string;
	readonly failedResources?: number;
	readonly passedResources?: number;
	readonly skippedResources?: number;
	readonly state?: "Failed" | "Passed" | "Skipped" | "Unsupported";
	readonly unsupportedResources?: number;
}
export interface RegulatoryComplianceControlProperties {
	readonly description?: string;
	readonly failedAssessments?: number;
	readonly passedAssessments?: number;
	readonly skippedAssessments?: number;
	readonly state?: "Failed" | "Passed" | "Skipped" | "Unsupported";
}
export interface RegulatoryComplianceStandardProperties {
	readonly failedControls?: number;
	readonly passedControls?: number;
	readonly skippedControls?: number;
	readonly state?: "Failed" | "Passed" | "Skipped" | "Unsupported";
	readonly unsupportedControls?: number;
}
export interface ResourceDetails {}
export interface ScopeElement {
	readonly field?: string;
	readonly [key: string]: any;
}
export interface SecurityAssessmentMetadataProperties {
	readonly assessmentType: "BuiltIn" | "CustomPolicy" | "CustomerManaged";
	readonly categories?: "Compute" | "Data" | "IdentityAndAccess" | "IoT" | "Networking"[];
	readonly description?: string;
	readonly displayName: string;
	readonly implementationEffort?: "High" | "Low" | "Moderate";
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
export interface SecurityAssessmentProperties {
	readonly additionalData?: SecurityAssessmentPropertiesAdditionalData;
	readonly displayName?: string;
	readonly links?: AssessmentLinks;
	readonly resourceDetails: ResourceDetails;
	readonly status: AssessmentStatus;
}
export interface SecurityAssessmentPropertiesAdditionalData {
	readonly [key: string]: string;
}
export interface SecuritySubAssessmentProperties {
	readonly additionalData?: AdditionalData;
	readonly category?: string;
	readonly description?: string;
	readonly displayName?: string;
	readonly id?: string;
	readonly impact?: string;
	readonly remediation?: string;
	readonly resourceDetails?: ResourceDetails;
	readonly status?: SubAssessmentStatus;
	readonly timeGenerated?: string;
}
export interface ServerVulnerabilityPropertiesCvss {
	readonly [key: string]: Cvss;
}
export interface SubAssessmentStatus {
	readonly cause?: string;
	readonly code?: "Healthy" | "NotApplicable" | "Unhealthy";
	readonly description?: string;
	readonly severity?: "High" | "Low" | "Medium";
}
export interface SuppressionAlertsScope {
	readonly allOf: ScopeElement[];
}
export interface Tags {
	readonly [key: string]: string;
}
export interface VendorReference {
	readonly link?: string;
	readonly title?: string;
}
export default {
	alertsSuppressionRules: alertsSuppressionRules,
	assessmentMetadata: assessmentMetadata,
	assessments: assessments,
	"assessments/subAssessments": assessments_subAssessments,
	automations: automations,
	regulatoryComplianceStandards: regulatoryComplianceStandards,
	"regulatoryComplianceStandards/regulatoryComplianceControls":
		regulatoryComplianceStandards_regulatoryComplianceControls,
	"regulatoryComplianceStandards/regulatoryComplianceControls/regulatoryComplianceAssessments":
		regulatoryComplianceStandards_regulatoryComplianceControls_regulatoryComplianceAssessments,
};
