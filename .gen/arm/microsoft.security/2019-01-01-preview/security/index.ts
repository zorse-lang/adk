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
	readonly properties?: AlertsSuppressionRuleProperties | undefined;
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
	readonly properties?: SecurityAssessmentMetadataProperties | undefined;
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
	readonly properties?: SecurityAssessmentProperties | undefined;
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
	readonly properties?: SecuritySubAssessmentProperties | undefined;
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
	readonly etag?: string | undefined;
	readonly kind?: string | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: AutomationProperties | undefined;
	readonly tags?: Tags | undefined;
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
	readonly properties?: RegulatoryComplianceStandardProperties | undefined;
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
	readonly properties?: RegulatoryComplianceControlProperties | undefined;
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
	readonly properties?: RegulatoryComplianceAssessmentProperties | undefined;
}
export interface AdditionalData {}
export interface AlertsSuppressionRuleProperties {
	readonly alertType: string;
	readonly comment?: string | undefined;
	readonly expirationDateUtc?: string | undefined;
	readonly lastModifiedUtc?: string | undefined;
	readonly reason: string;
	readonly state: "Disabled" | "Enabled";
	readonly suppressionAlertsScope?: SuppressionAlertsScope | undefined;
}
export interface AssessmentLinks {
	readonly azurePortalUri?: string | undefined;
}
export interface AssessmentStatus {
	readonly cause?: string | undefined;
	readonly code: "Healthy" | "NotApplicable" | "Unhealthy";
	readonly description?: string | undefined;
}
export interface AutomationAction {}
export interface AutomationProperties {
	readonly actions?: AutomationAction[] | undefined;
	readonly description?: string | undefined;
	readonly isEnabled?: boolean | undefined;
	readonly scopes?: AutomationScope[] | undefined;
	readonly sources?: AutomationSource[] | undefined;
}
export interface AutomationRuleSet {
	readonly rules?: AutomationTriggeringRule[] | undefined;
}
export interface AutomationScope {
	readonly description?: string | undefined;
	readonly scopePath?: string | undefined;
}
export interface AutomationSource {
	readonly eventSource?:
		| (
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
				| "SubAssessmentsSnapshot"
		  )
		| undefined;
	readonly ruleSets?: AutomationRuleSet[] | undefined;
}
export interface AutomationTriggeringRule {
	readonly expectedValue?: string | undefined;
	readonly operator?:
		| (
				| "Contains"
				| "EndsWith"
				| "Equals"
				| "GreaterThan"
				| "GreaterThanOrEqualTo"
				| "LesserThan"
				| "LesserThanOrEqualTo"
				| "NotEquals"
				| "StartsWith"
		  )
		| undefined;
	readonly propertyJPath?: string | undefined;
	readonly propertyType?: ("Boolean" | "Integer" | "Number" | "String") | undefined;
}
export interface ContainerRegistryVulnerabilityPropertiesCvss {
	readonly "[ key: string ]"?: Cvss | undefined;
}
export interface CVE {
	readonly link?: string | undefined;
	readonly title?: string | undefined;
}
export interface Cvss {
	readonly base?: number | undefined;
}
export interface RegulatoryComplianceAssessmentProperties {
	readonly assessmentDetailsLink?: string | undefined;
	readonly assessmentType?: string | undefined;
	readonly description?: string | undefined;
	readonly failedResources?: number | undefined;
	readonly passedResources?: number | undefined;
	readonly skippedResources?: number | undefined;
	readonly state?: ("Failed" | "Passed" | "Skipped" | "Unsupported") | undefined;
	readonly unsupportedResources?: number | undefined;
}
export interface RegulatoryComplianceControlProperties {
	readonly description?: string | undefined;
	readonly failedAssessments?: number | undefined;
	readonly passedAssessments?: number | undefined;
	readonly skippedAssessments?: number | undefined;
	readonly state?: ("Failed" | "Passed" | "Skipped" | "Unsupported") | undefined;
}
export interface RegulatoryComplianceStandardProperties {
	readonly failedControls?: number | undefined;
	readonly passedControls?: number | undefined;
	readonly skippedControls?: number | undefined;
	readonly state?: ("Failed" | "Passed" | "Skipped" | "Unsupported") | undefined;
	readonly unsupportedControls?: number | undefined;
}
export interface ResourceDetails {}
export interface ScopeElement {
	readonly field?: string | undefined;
	readonly "[ key: string ]"?: any | undefined;
}
export interface SecurityAssessmentMetadataProperties {
	readonly assessmentType: "BuiltIn" | "CustomPolicy" | "CustomerManaged";
	readonly categories?: ("Compute" | "Data" | "IdentityAndAccess" | "IoT" | "Networking"[]) | undefined;
	readonly description?: string | undefined;
	readonly displayName: string;
	readonly implementationEffort?: ("High" | "Low" | "Moderate") | undefined;
	readonly policyDefinitionId?: string | undefined;
	readonly preview?: boolean | undefined;
	readonly remediationDescription?: string | undefined;
	readonly severity: "High" | "Low" | "Medium";
	readonly threats?:
		| (
				| "accountBreach"
				| "dataExfiltration"
				| "dataSpillage"
				| "denialOfService"
				| "elevationOfPrivilege"
				| "maliciousInsider"
				| "missingCoverage"
				| "threatResistance"[]
		  )
		| undefined;
	readonly userImpact?: ("High" | "Low" | "Moderate") | undefined;
}
export interface SecurityAssessmentProperties {
	readonly additionalData?: SecurityAssessmentPropertiesAdditionalData | undefined;
	readonly displayName?: string | undefined;
	readonly links?: AssessmentLinks | undefined;
	readonly resourceDetails: ResourceDetails;
	readonly status: AssessmentStatus;
}
export interface SecurityAssessmentPropertiesAdditionalData {
	readonly "[ key: string ]"?: string | undefined;
}
export interface SecuritySubAssessmentProperties {
	readonly additionalData?: AdditionalData | undefined;
	readonly category?: string | undefined;
	readonly description?: string | undefined;
	readonly displayName?: string | undefined;
	readonly id?: string | undefined;
	readonly impact?: string | undefined;
	readonly remediation?: string | undefined;
	readonly resourceDetails?: ResourceDetails | undefined;
	readonly status?: SubAssessmentStatus | undefined;
	readonly timeGenerated?: string | undefined;
}
export interface ServerVulnerabilityPropertiesCvss {
	readonly "[ key: string ]"?: Cvss | undefined;
}
export interface SubAssessmentStatus {
	readonly cause?: string | undefined;
	readonly code?: ("Healthy" | "NotApplicable" | "Unhealthy") | undefined;
	readonly description?: string | undefined;
	readonly severity?: ("High" | "Low" | "Medium") | undefined;
}
export interface SuppressionAlertsScope {
	readonly allOf: ScopeElement[];
}
export interface Tags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface VendorReference {
	readonly link?: string | undefined;
	readonly title?: string | undefined;
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
