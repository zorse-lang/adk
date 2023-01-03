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
	readonly properties?: AdaptiveNetworkHardeningProperties | undefined;
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
	readonly properties?: SecurityAssessmentMetadataProperties | undefined;
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
	readonly properties?: SecurityAssessmentProperties | undefined;
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
	readonly properties?: AlertProperties | undefined;
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
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: AllowedConnectionsResourceProperties | undefined;
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
	readonly location?: string | undefined;
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
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: DiscoveredSecuritySolutionProperties | undefined;
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
	readonly kind?: ("AAD" | "ATA" | "CEF") | undefined;
	readonly location?: string | undefined;
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
	readonly kind?: string | undefined;
	readonly location?: string | undefined;
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
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: SecuritySolutionProperties | undefined;
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
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: TopologyResourceProperties | undefined;
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
	readonly properties?: SecureScoreItemProperties | undefined;
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
	readonly properties?: ServerVulnerabilityAssessmentProperties | undefined;
}
export interface AdaptiveApplicationControlGroupData {
	readonly configurationStatus?: ("Configured" | "Failed" | "InProgress" | "NoStatus" | "NotConfigured") | undefined;
	readonly enforcementMode?: ("Audit" | "Enforce" | "None") | undefined;
	readonly issues?: AdaptiveApplicationControlIssueSummary[] | undefined;
	readonly pathRecommendations?: PathRecommendation[] | undefined;
	readonly protectionMode?: ProtectionMode | undefined;
	readonly recommendationStatus?: ("NoStatus" | "NotAvailable" | "NotRecommended" | "Recommended") | undefined;
	readonly sourceSystem?:
		| ("Azure_AppLocker" | "Azure_AuditD" | "NonAzure_AppLocker" | "NonAzure_AuditD" | "None")
		| undefined;
	readonly vmRecommendations?: VmRecommendation[] | undefined;
}
export interface AdaptiveApplicationControlIssueSummary {
	readonly issue?:
		| (
				| "ExecutableViolationsAudited"
				| "MsiAndScriptViolationsAudited"
				| "MsiAndScriptViolationsBlocked"
				| "RulesViolatedManually"
				| "ViolationsAudited"
				| "ViolationsBlocked"
		  )
		| undefined;
	readonly numberOfVms?: number | undefined;
}
export interface AdaptiveNetworkHardeningProperties {
	readonly effectiveNetworkSecurityGroups?: EffectiveNetworkSecurityGroups[] | undefined;
	readonly rules?: Rule[] | undefined;
	readonly rulesCalculationTime?: string | undefined;
}
export interface AlertEntity {
	readonly type?: string | undefined;
	readonly "[ key: string ]"?: any | undefined;
}
export interface AlertExtendedLinks {
	readonly "[ key: string ]"?: string | undefined;
}
export interface AlertExtendedProperties {
	readonly "[ key: string ]"?: string | undefined;
}
export interface AlertProperties {
	readonly alertDisplayName?: string | undefined;
	readonly alertType?: string | undefined;
	readonly alertUri?: string | undefined;
	readonly compromisedEntity?: string | undefined;
	readonly correlationKey?: string | undefined;
	readonly description?: string | undefined;
	readonly endTimeUtc?: string | undefined;
	readonly entities?: AlertEntity[] | undefined;
	readonly extendedLinks?: AlertExtendedLinks[] | undefined;
	readonly extendedProperties?: AlertExtendedProperties | undefined;
	readonly intent?:
		| (
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
				| "Unknown"
		  )
		| undefined;
	readonly isIncident?: boolean | undefined;
	readonly processingEndTimeUtc?: string | undefined;
	readonly productComponentName?: string | undefined;
	readonly productName?: string | undefined;
	readonly remediationSteps?: string[] | undefined;
	readonly resourceIdentifiers?: ResourceIdentifier[] | undefined;
	readonly severity?: ("High" | "Informational" | "Low" | "Medium") | undefined;
	readonly startTimeUtc?: string | undefined;
	readonly status?: ("Active" | "Dismissed" | "Resolved") | undefined;
	readonly systemAlertId?: string | undefined;
	readonly timeGeneratedUtc?: string | undefined;
	readonly vendorName?: string | undefined;
}
export interface AllowedConnectionsResourceProperties {
	readonly calculatedDateTime?: string | undefined;
	readonly connectableResources?: ConnectableResource[] | undefined;
}
export interface AssessmentLinks {
	readonly azurePortalUri?: string | undefined;
}
export interface AssessmentStatus {
	readonly cause?: string | undefined;
	readonly code: "Healthy" | "NotApplicable" | "Unhealthy";
	readonly description?: string | undefined;
}
export interface ConnectableResource {
	readonly id?: string | undefined;
	readonly inboundConnectedResources?: ConnectedResource[] | undefined;
	readonly outboundConnectedResources?: ConnectedResource[] | undefined;
}
export interface ConnectedResource {
	readonly connectedResourceId?: string | undefined;
	readonly tcpPorts?: string | undefined;
	readonly udpPorts?: string | undefined;
}
export interface DiscoveredSecuritySolutionProperties {
	readonly offer: string;
	readonly publisher: string;
	readonly securityFamily: "Ngfw" | "SaasWaf" | "Va" | "Waf";
	readonly sku: string;
}
export interface EffectiveNetworkSecurityGroups {
	readonly networkInterface?: string | undefined;
	readonly networkSecurityGroups?: string[] | undefined;
}
export interface JitNetworkAccessPolicyProperties {
	readonly provisioningState?: string | undefined;
	readonly requests?: JitNetworkAccessRequest[] | undefined;
	readonly virtualMachines: JitNetworkAccessPolicyVirtualMachine[];
}
export interface JitNetworkAccessPolicyVirtualMachine {
	readonly id: string;
	readonly ports: JitNetworkAccessPortRule[];
	readonly publicIpAddress?: string | undefined;
}
export interface JitNetworkAccessPortRule {
	readonly allowedSourceAddressPrefix?: string | undefined;
	readonly allowedSourceAddressPrefixes?: string[] | undefined;
	readonly maxRequestAccessDuration: string;
	readonly number: number;
	readonly protocol: "*" | "TCP" | "UDP";
}
export interface JitNetworkAccessRequest {
	readonly justification?: string | undefined;
	readonly requestor: string;
	readonly startTimeUtc: string;
	readonly virtualMachines: JitNetworkAccessRequestVirtualMachine[];
}
export interface JitNetworkAccessRequestPort {
	readonly allowedSourceAddressPrefix?: string | undefined;
	readonly allowedSourceAddressPrefixes?: string[] | undefined;
	readonly endTimeUtc: string;
	readonly mappedPort?: number | undefined;
	readonly number: number;
	readonly status: "Initiated" | "Revoked";
	readonly statusReason: "Expired" | "NewerRequestInitiated" | "UserRequested";
}
export interface JitNetworkAccessRequestVirtualMachine {
	readonly id: string;
	readonly ports: JitNetworkAccessRequestPort[];
}
export interface PathRecommendation {
	readonly action?: ("Add" | "Recommended" | "Remove") | undefined;
	readonly common?: boolean | undefined;
	readonly configurationStatus?: ("Configured" | "Failed" | "InProgress" | "NoStatus" | "NotConfigured") | undefined;
	readonly fileType?: ("Dll" | "Exe" | "Executable" | "Msi" | "Script" | "Unknown") | undefined;
	readonly path?: string | undefined;
	readonly publisherInfo?: PublisherInfo | undefined;
	readonly type?:
		| ("BinarySignature" | "File" | "FileHash" | "ProductSignature" | "PublisherSignature" | "VersionAndAboveSignature")
		| undefined;
	readonly usernames?: UserRecommendation[] | undefined;
	readonly userSids?: string[] | undefined;
}
export interface ProtectionMode {
	readonly exe?: ("Audit" | "Enforce" | "None") | undefined;
	readonly executable?: ("Audit" | "Enforce" | "None") | undefined;
	readonly msi?: ("Audit" | "Enforce" | "None") | undefined;
	readonly script?: ("Audit" | "Enforce" | "None") | undefined;
}
export interface PublisherInfo {
	readonly binaryName?: string | undefined;
	readonly productName?: string | undefined;
	readonly publisherName?: string | undefined;
	readonly version?: string | undefined;
}
export interface ResourceDetails {}
export interface ResourceIdentifier {}
export interface Rule {
	readonly destinationPort?: number | undefined;
	readonly direction?: ("Inbound" | "Outbound") | undefined;
	readonly ipAddresses?: string[] | undefined;
	readonly name?: string | undefined;
	readonly protocols?: ("TCP" | "UDP"[]) | undefined;
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
export interface SecurityAssessmentMetadataPartnerData {
	readonly partnerName: string;
	readonly productName?: string | undefined;
	readonly secret: string;
}
export interface SecurityAssessmentMetadataProperties {
	readonly assessmentType: "BuiltIn" | "CustomPolicy" | "CustomerManaged" | "VerifiedPartner";
	readonly categories?: ("Compute" | "Data" | "IdentityAndAccess" | "IoT" | "Networking"[]) | undefined;
	readonly description?: string | undefined;
	readonly displayName: string;
	readonly implementationEffort?: ("High" | "Low" | "Moderate") | undefined;
	readonly partnerData?: SecurityAssessmentMetadataPartnerData | undefined;
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
export interface SecurityAssessmentPartnerData {
	readonly partnerName: string;
	readonly secret: string;
}
export interface SecurityAssessmentProperties {
	readonly additionalData?: SecurityAssessmentPropertiesAdditionalData | undefined;
	readonly displayName?: string | undefined;
	readonly links?: AssessmentLinks | undefined;
	readonly metadata?: SecurityAssessmentMetadataProperties | undefined;
	readonly partnersData?: SecurityAssessmentPartnerData | undefined;
	readonly resourceDetails: ResourceDetails;
	readonly status: AssessmentStatus;
}
export interface SecurityAssessmentPropertiesAdditionalData {
	readonly "[ key: string ]"?: string | undefined;
}
export interface SecuritySolutionProperties {
	readonly protectionStatus: string;
	readonly provisioningState: "Failed" | "Succeeded" | "Updating";
	readonly securityFamily: "Ngfw" | "SaasWaf" | "Va" | "Waf";
	readonly template: string;
}
export interface ServerVulnerabilityAssessmentProperties {
	readonly provisioningState?: ("Canceled" | "Deprovisioning" | "Failed" | "Provisioning" | "Succeeded") | undefined;
}
export interface TopologyResourceProperties {
	readonly calculatedDateTime?: string | undefined;
	readonly topologyResources?: TopologySingleResource[] | undefined;
}
export interface TopologySingleResource {
	readonly children?: TopologySingleResourceChild[] | undefined;
	readonly location?: string | undefined;
	readonly networkZones?: string | undefined;
	readonly parents?: TopologySingleResourceParent[] | undefined;
	readonly recommendationsExist?: boolean | undefined;
	readonly resourceId?: string | undefined;
	readonly severity?: string | undefined;
	readonly topologyScore?: number | undefined;
}
export interface TopologySingleResourceChild {
	readonly resourceId?: string | undefined;
}
export interface TopologySingleResourceParent {
	readonly resourceId?: string | undefined;
}
export interface UserRecommendation {
	readonly recommendationAction?: ("Add" | "Recommended" | "Remove") | undefined;
	readonly username?: string | undefined;
}
export interface VmRecommendation {
	readonly configurationStatus?: ("Configured" | "Failed" | "InProgress" | "NoStatus" | "NotConfigured") | undefined;
	readonly enforcementSupport?: ("NotSupported" | "Supported" | "Unknown") | undefined;
	readonly recommendationAction?: ("Add" | "Recommended" | "Remove") | undefined;
	readonly resourceId?: string | undefined;
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
