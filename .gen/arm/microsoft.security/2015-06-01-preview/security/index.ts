import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class adaptiveNetworkHardenings
	extends ArmResource<adaptiveNetworkHardeningsComponentInputs>
	implements adaptiveNetworkHardeningsComponentOutputs
{
	constructor(entity: ADKEntity, options: adaptiveNetworkHardeningsComponentInputs) {
		super(entity, options.name, "Microsoft.Security/adaptiveNetworkHardenings", "2015-06-01-preview", options);
	}
	public readonly apiVersion: "2015-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Security/adaptiveNetworkHardenings";
}
export interface adaptiveNetworkHardeningsComponentOutputs {
	readonly apiVersion: "2015-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Security/adaptiveNetworkHardenings";
}
export interface adaptiveNetworkHardeningsComponentInputs {
	readonly name: string;
	readonly properties?: AdaptiveNetworkHardeningProperties;
}
export class locations extends ArmResource<locationsComponentInputs> implements locationsComponentOutputs {
	constructor(entity: ADKEntity, options: locationsComponentInputs) {
		super(entity, options.name, "Microsoft.Security/locations", "2015-06-01-preview", options);
	}
	public readonly apiVersion: "2015-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Security/locations";
}
export interface locationsComponentOutputs {
	readonly apiVersion: "2015-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Security/locations";
}
export interface locationsComponentInputs {
	readonly name: string;
	readonly properties?: any;
}
export class locations_alerts
	extends ArmResource<locations_alertsComponentInputs>
	implements locations_alertsComponentOutputs
{
	constructor(entity: ADKEntity, options: locations_alertsComponentInputs) {
		super(entity, options.name, "Microsoft.Security/locations/alerts", "2015-06-01-preview", options);
	}
	public readonly apiVersion: "2015-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Security/locations/alerts";
}
export interface locations_alertsComponentOutputs {
	readonly apiVersion: "2015-06-01-preview";
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
		super(entity, options.name, "Microsoft.Security/locations/allowedConnections", "2015-06-01-preview", options);
	}
	public readonly apiVersion: "2015-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Security/locations/allowedConnections";
}
export interface locations_allowedConnectionsComponentOutputs {
	readonly apiVersion: "2015-06-01-preview";
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
		super(entity, options.name, "Microsoft.Security/locations/applicationWhitelistings", "2015-06-01-preview", options);
	}
	public readonly apiVersion: "2015-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Security/locations/applicationWhitelistings";
}
export interface locations_applicationWhitelistingsComponentOutputs {
	readonly apiVersion: "2015-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Security/locations/applicationWhitelistings";
}
export interface locations_applicationWhitelistingsComponentInputs {
	readonly enforcementMode?: "Audit" | "Enforce" | "None";
	readonly location?: string;
	readonly name: string;
	readonly pathRecommendations?: PathRecommendation[];
	readonly properties?: AppWhitelistingGroupData;
	readonly protectionMode?: ProtectionMode;
	readonly vmRecommendations?: VmRecommendation[];
}
export class locations_discoveredSecuritySolutions
	extends ArmResource<locations_discoveredSecuritySolutionsComponentInputs>
	implements locations_discoveredSecuritySolutionsComponentOutputs
{
	constructor(entity: ADKEntity, options: locations_discoveredSecuritySolutionsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.Security/locations/discoveredSecuritySolutions",
			"2015-06-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2015-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Security/locations/discoveredSecuritySolutions";
}
export interface locations_discoveredSecuritySolutionsComponentOutputs {
	readonly apiVersion: "2015-06-01-preview";
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
		super(
			entity,
			options.name,
			"Microsoft.Security/locations/ExternalSecuritySolutions",
			"2015-06-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2015-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Security/locations/ExternalSecuritySolutions";
}
export interface locations_ExternalSecuritySolutionsComponentOutputs {
	readonly apiVersion: "2015-06-01-preview";
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
		super(entity, options.name, "Microsoft.Security/locations/jitNetworkAccessPolicies", "2015-06-01-preview", options);
	}
	public readonly apiVersion: "2015-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Security/locations/jitNetworkAccessPolicies";
}
export interface locations_jitNetworkAccessPoliciesComponentOutputs {
	readonly apiVersion: "2015-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Security/locations/jitNetworkAccessPolicies";
}
export interface locations_jitNetworkAccessPoliciesComponentInputs {
	readonly kind?: string;
	readonly location?: string;
	readonly name: string;
	readonly properties: JitNetworkAccessPolicyProperties;
}
export class locations_tasks
	extends ArmResource<locations_tasksComponentInputs>
	implements locations_tasksComponentOutputs
{
	constructor(entity: ADKEntity, options: locations_tasksComponentInputs) {
		super(entity, options.name, "Microsoft.Security/locations/tasks", "2015-06-01-preview", options);
	}
	public readonly apiVersion: "2015-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Security/locations/tasks";
}
export interface locations_tasksComponentOutputs {
	readonly apiVersion: "2015-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Security/locations/tasks";
}
export interface locations_tasksComponentInputs {
	readonly name: string;
	readonly properties?: SecurityTaskProperties;
}
export class locations_topologies
	extends ArmResource<locations_topologiesComponentInputs>
	implements locations_topologiesComponentOutputs
{
	constructor(entity: ADKEntity, options: locations_topologiesComponentInputs) {
		super(entity, options.name, "Microsoft.Security/locations/topologies", "2015-06-01-preview", options);
	}
	public readonly apiVersion: "2015-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Security/locations/topologies";
}
export interface locations_topologiesComponentOutputs {
	readonly apiVersion: "2015-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Security/locations/topologies";
}
export interface locations_topologiesComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly properties?: TopologyResourceProperties;
}
export interface AdaptiveNetworkHardeningProperties {
	readonly effectiveNetworkSecurityGroups?: EffectiveNetworkSecurityGroups[];
	readonly rules?: Rule[];
	readonly rulesCalculationTime?: string;
}
export interface AlertConfidenceReason {
	readonly reason?: string;
	readonly type?: string;
}
export interface AlertEntity {
	readonly type?: string;
	readonly [key: string]: any;
}
export interface AlertExtendedProperties {
	readonly [key: string]: any;
}
export interface AlertProperties {
	readonly actionTaken?: string;
	readonly alertDisplayName?: string;
	readonly alertName?: string;
	readonly associatedResource?: string;
	readonly canBeInvestigated?: boolean;
	readonly compromisedEntity?: string;
	readonly confidenceReasons?: AlertConfidenceReason[];
	readonly confidenceScore?: number;
	readonly correlationKey?: string;
	readonly description?: string;
	readonly detectedTimeUtc?: string;
	readonly entities?: AlertEntity[];
	readonly extendedProperties?: AlertExtendedProperties;
	readonly instanceId?: string;
	readonly isIncident?: boolean;
	readonly remediationSteps?: string;
	readonly reportedSeverity?: "High" | "Information" | "Low" | "Silent";
	readonly reportedTimeUtc?: string;
	readonly state?: string;
	readonly subscriptionId?: string;
	readonly systemSource?: string;
	readonly vendorName?: string;
	readonly workspaceArmId?: string;
}
export interface AllowedConnectionsResourceProperties {
	readonly calculatedDateTime?: string;
	readonly connectableResources?: ConnectableResource[];
}
export interface AppWhitelistingGroupData {
	readonly configurationStatus?: "Configured" | "Failed" | "InProgress" | "NoStatus" | "NotConfigured";
	readonly enforcementMode?: "Audit" | "Enforce" | "None";
	readonly issues?: AppWhitelistingIssueSummary[];
	readonly pathRecommendations?: PathRecommendation[];
	readonly protectionMode?: ProtectionMode;
	readonly recommendationStatus?: "NoStatus" | "NotAvailable" | "NotRecommended" | "Recommended";
	readonly sourceSystem?: "Azure_AppLocker" | "Azure_AuditD" | "NonAzure_AppLocker" | "NonAzure_AuditD" | "None";
	readonly vmRecommendations?: VmRecommendation[];
}
export interface AppWhitelistingIssueSummary {
	readonly issue?:
		| "ExecutableViolationsAudited"
		| "MsiAndScriptViolationsAudited"
		| "MsiAndScriptViolationsBlocked"
		| "RulesViolatedManually"
		| "ViolationsAudited"
		| "ViolationsBlocked";
	readonly numberOfVms?: number;
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
export interface Rule {
	readonly destinationPort?: number;
	readonly direction?: "Inbound" | "Outbound";
	readonly ipAddresses?: string[];
	readonly name?: string;
	readonly protocols?: "TCP" | "UDP"[];
}
export interface SecurityTaskParameters {
	readonly name?: string;
	readonly [key: string]: any;
}
export interface SecurityTaskProperties {
	readonly creationTimeUtc?: string;
	readonly lastStateChangeTimeUtc?: string;
	readonly securityTaskParameters?: SecurityTaskParameters;
	readonly state?: string;
	readonly subState?: string;
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
	locations: locations,
	"locations/alerts": locations_alerts,
	"locations/allowedConnections": locations_allowedConnections,
	"locations/applicationWhitelistings": locations_applicationWhitelistings,
	"locations/discoveredSecuritySolutions": locations_discoveredSecuritySolutions,
	"locations/ExternalSecuritySolutions": locations_ExternalSecuritySolutions,
	"locations/jitNetworkAccessPolicies": locations_jitNetworkAccessPolicies,
	"locations/tasks": locations_tasks,
	"locations/topologies": locations_topologies,
};
