import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class adaptiveNetworkHardenings
	extends ArmResource<adaptiveNetworkHardeningsComponentInputs>
	implements adaptiveNetworkHardeningsComponentOutputs
{
	constructor(entity: ADKEntity, options: adaptiveNetworkHardeningsComponentInputs) {
		super(entity, options.name, "Microsoft.Security/adaptiveNetworkHardenings", "2020-01-01", options);
	}
	public readonly apiVersion: "2020-01-01";
	public readonly id: string;
	public readonly type: "Microsoft.Security/adaptiveNetworkHardenings";
}
export interface adaptiveNetworkHardeningsComponentOutputs {
	readonly apiVersion: "2020-01-01";
	readonly id: string;
	readonly type: "Microsoft.Security/adaptiveNetworkHardenings";
}
export interface adaptiveNetworkHardeningsComponentInputs {
	readonly name: string;
	readonly properties?: AdaptiveNetworkHardeningProperties;
}
export class assessmentMetadata
	extends ArmResource<assessmentMetadataComponentInputs>
	implements assessmentMetadataComponentOutputs
{
	constructor(entity: ADKEntity, options: assessmentMetadataComponentInputs) {
		super(entity, options.name, "Microsoft.Security/assessmentMetadata", "2020-01-01", options);
	}
	public readonly apiVersion: "2020-01-01";
	public readonly id: string;
	public readonly type: "Microsoft.Security/assessmentMetadata";
}
export interface assessmentMetadataComponentOutputs {
	readonly apiVersion: "2020-01-01";
	readonly id: string;
	readonly type: "Microsoft.Security/assessmentMetadata";
}
export interface assessmentMetadataComponentInputs {
	readonly name: string;
	readonly properties?: SecurityAssessmentMetadataProperties;
}
export class assessments extends ArmResource<assessmentsComponentInputs> implements assessmentsComponentOutputs {
	constructor(entity: ADKEntity, options: assessmentsComponentInputs) {
		super(entity, options.name, "Microsoft.Security/assessments", "2020-01-01", options);
	}
	public readonly apiVersion: "2020-01-01";
	public readonly id: string;
	public readonly type: "Microsoft.Security/assessments";
}
export interface assessmentsComponentOutputs {
	readonly apiVersion: "2020-01-01";
	readonly id: string;
	readonly type: "Microsoft.Security/assessments";
}
export interface assessmentsComponentInputs {
	readonly name: string;
	readonly properties?: SecurityAssessmentProperties;
}
export class locations_alerts
	extends ArmResource<locations_alertsComponentInputs>
	implements locations_alertsComponentOutputs
{
	constructor(entity: ADKEntity, options: locations_alertsComponentInputs) {
		super(entity, options.name, "Microsoft.Security/locations/alerts", "2020-01-01", options);
	}
	public readonly apiVersion: "2020-01-01";
	public readonly id: string;
	public readonly type: "Microsoft.Security/locations/alerts";
}
export interface locations_alertsComponentOutputs {
	readonly apiVersion: "2020-01-01";
	readonly id: string;
	readonly type: "Microsoft.Security/locations/alerts";
}
export interface locations_alertsComponentInputs {
	readonly name: string;
	readonly properties?: AlertProperties;
}
export class locations_allowedConnections
	extends ArmResource<locations_allowedConnectionsComponentInputs>
	implements locations_allowedConnectionsComponentOutputs
{
	constructor(entity: ADKEntity, options: locations_allowedConnectionsComponentInputs) {
		super(entity, options.name, "Microsoft.Security/locations/allowedConnections", "2020-01-01", options);
	}
	public readonly apiVersion: "2020-01-01";
	public readonly id: string;
	public readonly type: "Microsoft.Security/locations/allowedConnections";
}
export interface locations_allowedConnectionsComponentOutputs {
	readonly apiVersion: "2020-01-01";
	readonly id: string;
	readonly type: "Microsoft.Security/locations/allowedConnections";
}
export interface locations_allowedConnectionsComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly properties?: AllowedConnectionsResourceProperties;
}
export class locations_applicationWhitelistings
	extends ArmResource<locations_applicationWhitelistingsComponentInputs>
	implements locations_applicationWhitelistingsComponentOutputs
{
	constructor(entity: ADKEntity, options: locations_applicationWhitelistingsComponentInputs) {
		super(entity, options.name, "Microsoft.Security/locations/applicationWhitelistings", "2020-01-01", options);
	}
	public readonly apiVersion: "2020-01-01";
	public readonly id: string;
	public readonly type: "Microsoft.Security/locations/applicationWhitelistings";
}
export interface locations_applicationWhitelistingsComponentOutputs {
	readonly apiVersion: "2020-01-01";
	readonly id: string;
	readonly type: "Microsoft.Security/locations/applicationWhitelistings";
}
export interface locations_applicationWhitelistingsComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly properties: AdaptiveApplicationControlGroupData;
}
export class locations_discoveredSecuritySolutions
	extends ArmResource<locations_discoveredSecuritySolutionsComponentInputs>
	implements locations_discoveredSecuritySolutionsComponentOutputs
{
	constructor(entity: ADKEntity, options: locations_discoveredSecuritySolutionsComponentInputs) {
		super(entity, options.name, "Microsoft.Security/locations/discoveredSecuritySolutions", "2020-01-01", options);
	}
	public readonly apiVersion: "2020-01-01";
	public readonly id: string;
	public readonly type: "Microsoft.Security/locations/discoveredSecuritySolutions";
}
export interface locations_discoveredSecuritySolutionsComponentOutputs {
	readonly apiVersion: "2020-01-01";
	readonly id: string;
	readonly type: "Microsoft.Security/locations/discoveredSecuritySolutions";
}
export interface locations_discoveredSecuritySolutionsComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly properties?: DiscoveredSecuritySolutionProperties;
}
export class locations_ExternalSecuritySolutions
	extends ArmResource<locations_ExternalSecuritySolutionsComponentInputs>
	implements locations_ExternalSecuritySolutionsComponentOutputs
{
	constructor(entity: ADKEntity, options: locations_ExternalSecuritySolutionsComponentInputs) {
		super(entity, options.name, "Microsoft.Security/locations/ExternalSecuritySolutions", "2020-01-01", options);
	}
	public readonly apiVersion: "2020-01-01";
	public readonly id: string;
	public readonly type: "Microsoft.Security/locations/ExternalSecuritySolutions";
}
export interface locations_ExternalSecuritySolutionsComponentOutputs {
	readonly apiVersion: "2020-01-01";
	readonly id: string;
	readonly type: "Microsoft.Security/locations/ExternalSecuritySolutions";
}
export interface locations_ExternalSecuritySolutionsComponentInputs {
	readonly kind?: "AAD" | "ATA" | "CEF";
	readonly location?: string;
	readonly name: string;
}
export class locations_jitNetworkAccessPolicies
	extends ArmResource<locations_jitNetworkAccessPoliciesComponentInputs>
	implements locations_jitNetworkAccessPoliciesComponentOutputs
{
	constructor(entity: ADKEntity, options: locations_jitNetworkAccessPoliciesComponentInputs) {
		super(entity, options.name, "Microsoft.Security/locations/jitNetworkAccessPolicies", "2020-01-01", options);
	}
	public readonly apiVersion: "2020-01-01";
	public readonly id: string;
	public readonly type: "Microsoft.Security/locations/jitNetworkAccessPolicies";
}
export interface locations_jitNetworkAccessPoliciesComponentOutputs {
	readonly apiVersion: "2020-01-01";
	readonly id: string;
	readonly type: "Microsoft.Security/locations/jitNetworkAccessPolicies";
}
export interface locations_jitNetworkAccessPoliciesComponentInputs {
	readonly kind?: string;
	readonly location?: string;
	readonly name: string;
	readonly properties: JitNetworkAccessPolicyProperties;
}
export class locations_securitySolutions
	extends ArmResource<locations_securitySolutionsComponentInputs>
	implements locations_securitySolutionsComponentOutputs
{
	constructor(entity: ADKEntity, options: locations_securitySolutionsComponentInputs) {
		super(entity, options.name, "Microsoft.Security/locations/securitySolutions", "2020-01-01", options);
	}
	public readonly apiVersion: "2020-01-01";
	public readonly id: string;
	public readonly type: "Microsoft.Security/locations/securitySolutions";
}
export interface locations_securitySolutionsComponentOutputs {
	readonly apiVersion: "2020-01-01";
	readonly id: string;
	readonly type: "Microsoft.Security/locations/securitySolutions";
}
export interface locations_securitySolutionsComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly properties?: SecuritySolutionProperties;
}
export class locations_topologies
	extends ArmResource<locations_topologiesComponentInputs>
	implements locations_topologiesComponentOutputs
{
	constructor(entity: ADKEntity, options: locations_topologiesComponentInputs) {
		super(entity, options.name, "Microsoft.Security/locations/topologies", "2020-01-01", options);
	}
	public readonly apiVersion: "2020-01-01";
	public readonly id: string;
	public readonly type: "Microsoft.Security/locations/topologies";
}
export interface locations_topologiesComponentOutputs {
	readonly apiVersion: "2020-01-01";
	readonly id: string;
	readonly type: "Microsoft.Security/locations/topologies";
}
export interface locations_topologiesComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly properties?: TopologyResourceProperties;
}
export class secureScores extends ArmResource<secureScoresComponentInputs> implements secureScoresComponentOutputs {
	constructor(entity: ADKEntity, options: secureScoresComponentInputs) {
		super(entity, options.name, "Microsoft.Security/secureScores", "2020-01-01", options);
	}
	public readonly apiVersion: "2020-01-01";
	public readonly id: string;
	public readonly type: "Microsoft.Security/secureScores";
}
export interface secureScoresComponentOutputs {
	readonly apiVersion: "2020-01-01";
	readonly id: string;
	readonly type: "Microsoft.Security/secureScores";
}
export interface secureScoresComponentInputs {
	readonly name: string;
	readonly properties?: SecureScoreItemProperties;
}
export class serverVulnerabilityAssessments
	extends ArmResource<serverVulnerabilityAssessmentsComponentInputs>
	implements serverVulnerabilityAssessmentsComponentOutputs
{
	constructor(entity: ADKEntity, options: serverVulnerabilityAssessmentsComponentInputs) {
		super(entity, options.name, "Microsoft.Security/serverVulnerabilityAssessments", "2020-01-01", options);
	}
	public readonly apiVersion: "2020-01-01";
	public readonly id: string;
	public readonly type: "Microsoft.Security/serverVulnerabilityAssessments";
}
export interface serverVulnerabilityAssessmentsComponentOutputs {
	readonly apiVersion: "2020-01-01";
	readonly id: string;
	readonly type: "Microsoft.Security/serverVulnerabilityAssessments";
}
export interface serverVulnerabilityAssessmentsComponentInputs {
	readonly name: string;
	readonly properties?: ServerVulnerabilityAssessmentProperties;
}
export interface AdaptiveApplicationControlGroupData {
	readonly configurationStatus?: "Configured" | "Failed" | "InProgress" | "NoStatus" | "NotConfigured";
	readonly enforcementMode?: "Audit" | "Enforce" | "None";
	readonly issues?: AdaptiveApplicationControlIssueSummary[];
	readonly pathRecommendations?: PathRecommendation[];
	readonly protectionMode?: ProtectionMode;
	readonly recommendationStatus?: "NoStatus" | "NotAvailable" | "NotRecommended" | "Recommended";
	readonly sourceSystem?: "Azure_AppLocker" | "Azure_AuditD" | "NonAzure_AppLocker" | "NonAzure_AuditD" | "None";
	readonly vmRecommendations?: VmRecommendation[];
}
export interface AdaptiveApplicationControlIssueSummary {
	readonly issue?:
		| "ExecutableViolationsAudited"
		| "MsiAndScriptViolationsAudited"
		| "MsiAndScriptViolationsBlocked"
		| "RulesViolatedManually"
		| "ViolationsAudited"
		| "ViolationsBlocked";
	readonly numberOfVms?: number;
}
export interface AdaptiveNetworkHardeningProperties {
	readonly effectiveNetworkSecurityGroups?: EffectiveNetworkSecurityGroups[];
	readonly rules?: Rule[];
	readonly rulesCalculationTime?: string;
}
export interface AlertEntity {
	readonly type?: string;
	readonly [key: string]: any;
}
export interface AlertExtendedLinks {
	readonly [key: string]: string;
}
export interface AlertExtendedProperties {
	readonly [key: string]: string;
}
export interface AlertProperties {
	readonly alertDisplayName?: string;
	readonly alertType?: string;
	readonly alertUri?: string;
	readonly compromisedEntity?: string;
	readonly correlationKey?: string;
	readonly description?: string;
	readonly endTimeUtc?: string;
	readonly entities?: AlertEntity[];
	readonly extendedLinks?: AlertExtendedLinks[];
	readonly extendedProperties?: AlertExtendedProperties;
	readonly intent?:
		| "Collection"
		| "CommandAndControl"
		| "CredentialAccess"
		| "DefenseEvasion"
		| "Discovery"
		| "Execution"
		| "Exfiltration"
		| "Exploitation"
		| "Impact"
		| "InitialAccess"
		| "LateralMovement"
		| "Persistence"
		| "PreAttack"
		| "PrivilegeEscalation"
		| "Probing"
		| "Unknown";
	readonly isIncident?: boolean;
	readonly processingEndTimeUtc?: string;
	readonly productComponentName?: string;
	readonly productName?: string;
	readonly remediationSteps?: string[];
	readonly resourceIdentifiers?: ResourceIdentifier[];
	readonly severity?: "High" | "Informational" | "Low" | "Medium";
	readonly startTimeUtc?: string;
	readonly status?: "Active" | "Dismissed" | "Resolved";
	readonly systemAlertId?: string;
	readonly timeGeneratedUtc?: string;
	readonly vendorName?: string;
}
export interface AllowedConnectionsResourceProperties {
	readonly calculatedDateTime?: string;
	readonly connectableResources?: ConnectableResource[];
}
export interface AssessmentLinks {
	readonly azurePortalUri?: string;
}
export interface AssessmentStatus {
	readonly cause?: string;
	readonly code: "Healthy" | "NotApplicable" | "Unhealthy";
	readonly description?: string;
}
export interface ConnectableResource {
	readonly id?: string;
	readonly inboundConnectedResources?: ConnectedResource[];
	readonly outboundConnectedResources?: ConnectedResource[];
}
export interface ConnectedResource {
	readonly connectedResourceId?: string;
	readonly tcpPorts?: string;
	readonly udpPorts?: string;
}
export interface DiscoveredSecuritySolutionProperties {
	readonly offer: string;
	readonly publisher: string;
	readonly securityFamily: "Ngfw" | "SaasWaf" | "Va" | "Waf";
	readonly sku: string;
}
export interface EffectiveNetworkSecurityGroups {
	readonly networkInterface?: string;
	readonly networkSecurityGroups?: string[];
}
export interface JitNetworkAccessPolicyProperties {
	readonly provisioningState?: string;
	readonly requests?: JitNetworkAccessRequest[];
	readonly virtualMachines: JitNetworkAccessPolicyVirtualMachine[];
}
export interface JitNetworkAccessPolicyVirtualMachine {
	readonly id: string;
	readonly ports: JitNetworkAccessPortRule[];
	readonly publicIpAddress?: string;
}
export interface JitNetworkAccessPortRule {
	readonly allowedSourceAddressPrefix?: string;
	readonly allowedSourceAddressPrefixes?: string[];
	readonly maxRequestAccessDuration: string;
	readonly number: number;
	readonly protocol: "*" | "TCP" | "UDP";
}
export interface JitNetworkAccessRequest {
	readonly justification?: string;
	readonly requestor: string;
	readonly startTimeUtc: string;
	readonly virtualMachines: JitNetworkAccessRequestVirtualMachine[];
}
export interface JitNetworkAccessRequestPort {
	readonly allowedSourceAddressPrefix?: string;
	readonly allowedSourceAddressPrefixes?: string[];
	readonly endTimeUtc: string;
	readonly mappedPort?: number;
	readonly number: number;
	readonly status: "Initiated" | "Revoked";
	readonly statusReason: "Expired" | "NewerRequestInitiated" | "UserRequested";
}
export interface JitNetworkAccessRequestVirtualMachine {
	readonly id: string;
	readonly ports: JitNetworkAccessRequestPort[];
}
export interface PathRecommendation {
	readonly action?: "Add" | "Recommended" | "Remove";
	readonly common?: boolean;
	readonly configurationStatus?: "Configured" | "Failed" | "InProgress" | "NoStatus" | "NotConfigured";
	readonly fileType?: "Dll" | "Exe" | "Executable" | "Msi" | "Script" | "Unknown";
	readonly path?: string;
	readonly publisherInfo?: PublisherInfo;
	readonly type?:
		| "BinarySignature"
		| "File"
		| "FileHash"
		| "ProductSignature"
		| "PublisherSignature"
		| "VersionAndAboveSignature";
	readonly usernames?: UserRecommendation[];
	readonly userSids?: string[];
}
export interface ProtectionMode {
	readonly exe?: "Audit" | "Enforce" | "None";
	readonly executable?: "Audit" | "Enforce" | "None";
	readonly msi?: "Audit" | "Enforce" | "None";
	readonly script?: "Audit" | "Enforce" | "None";
}
export interface PublisherInfo {
	readonly binaryName?: string;
	readonly productName?: string;
	readonly publisherName?: string;
	readonly version?: string;
}
export interface ResourceDetails {}
export interface ResourceIdentifier {}
export interface Rule {
	readonly destinationPort?: number;
	readonly direction?: "Inbound" | "Outbound";
	readonly ipAddresses?: string[];
	readonly name?: string;
	readonly protocols?: "TCP" | "UDP"[];
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
export interface SecurityAssessmentPartnerData {
	readonly partnerName: string;
	readonly secret: string;
}
export interface SecurityAssessmentProperties {
	readonly additionalData?: SecurityAssessmentPropertiesAdditionalData;
	readonly displayName?: string;
	readonly links?: AssessmentLinks;
	readonly metadata?: SecurityAssessmentMetadataProperties;
	readonly partnersData?: SecurityAssessmentPartnerData;
	readonly resourceDetails: ResourceDetails;
	readonly status: AssessmentStatus;
}
export interface SecurityAssessmentPropertiesAdditionalData {
	readonly [key: string]: string;
}
export interface SecuritySolutionProperties {
	readonly protectionStatus: string;
	readonly provisioningState: "Failed" | "Succeeded" | "Updating";
	readonly securityFamily: "Ngfw" | "SaasWaf" | "Va" | "Waf";
	readonly template: string;
}
export interface ServerVulnerabilityAssessmentProperties {
	readonly provisioningState?: "Canceled" | "Deprovisioning" | "Failed" | "Provisioning" | "Succeeded";
}
export interface TopologyResourceProperties {
	readonly calculatedDateTime?: string;
	readonly topologyResources?: TopologySingleResource[];
}
export interface TopologySingleResource {
	readonly children?: TopologySingleResourceChild[];
	readonly location?: string;
	readonly networkZones?: string;
	readonly parents?: TopologySingleResourceParent[];
	readonly recommendationsExist?: boolean;
	readonly resourceId?: string;
	readonly severity?: string;
	readonly topologyScore?: number;
}
export interface TopologySingleResourceChild {
	readonly resourceId?: string;
}
export interface TopologySingleResourceParent {
	readonly resourceId?: string;
}
export interface UserRecommendation {
	readonly recommendationAction?: "Add" | "Recommended" | "Remove";
	readonly username?: string;
}
export interface VmRecommendation {
	readonly configurationStatus?: "Configured" | "Failed" | "InProgress" | "NoStatus" | "NotConfigured";
	readonly enforcementSupport?: "NotSupported" | "Supported" | "Unknown";
	readonly recommendationAction?: "Add" | "Recommended" | "Remove";
	readonly resourceId?: string;
}
export default {
	adaptiveNetworkHardenings: adaptiveNetworkHardenings,
	assessmentMetadata: assessmentMetadata,
	assessments: assessments,
	"locations/alerts": locations_alerts,
	"locations/allowedConnections": locations_allowedConnections,
	"locations/applicationWhitelistings": locations_applicationWhitelistings,
	"locations/discoveredSecuritySolutions": locations_discoveredSecuritySolutions,
	"locations/ExternalSecuritySolutions": locations_ExternalSecuritySolutions,
	"locations/jitNetworkAccessPolicies": locations_jitNetworkAccessPolicies,
	"locations/securitySolutions": locations_securitySolutions,
	"locations/topologies": locations_topologies,
	secureScores: secureScores,
	serverVulnerabilityAssessments: serverVulnerabilityAssessments,
};
