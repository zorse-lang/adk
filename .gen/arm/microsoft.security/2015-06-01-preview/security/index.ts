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
	readonly properties?: AdaptiveNetworkHardeningProperties | undefined;
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
	readonly properties?: any | undefined;
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
	readonly properties?: AlertProperties | undefined;
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
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: AllowedConnectionsResourceProperties | undefined;
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
	readonly enforcementMode?: ("Audit" | "Enforce" | "None") | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly pathRecommendations?: PathRecommendation[] | undefined;
	readonly properties?: AppWhitelistingGroupData | undefined;
	readonly protectionMode?: ProtectionMode | undefined;
	readonly vmRecommendations?: VmRecommendation[] | undefined;
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
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: DiscoveredSecuritySolutionProperties | undefined;
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
	readonly kind?: ("AAD" | "ATA" | "CEF") | undefined;
	readonly location?: string | undefined;
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
	readonly kind?: string | undefined;
	readonly location?: string | undefined;
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
	readonly properties?: SecurityTaskProperties | undefined;
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
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: TopologyResourceProperties | undefined;
}
export interface AdaptiveNetworkHardeningProperties {
	readonly effectiveNetworkSecurityGroups?: EffectiveNetworkSecurityGroups[] | undefined;
	readonly rules?: Rule[] | undefined;
	readonly rulesCalculationTime?: string | undefined;
}
export interface AlertConfidenceReason {
	readonly reason?: string | undefined;
	readonly type?: string | undefined;
}
export interface AlertEntity {
	readonly type?: string | undefined;
	readonly "[ key: string ]"?: any | undefined;
}
export interface AlertExtendedProperties {
	readonly "[ key: string ]"?: any | undefined;
}
export interface AlertProperties {
	readonly actionTaken?: string | undefined;
	readonly alertDisplayName?: string | undefined;
	readonly alertName?: string | undefined;
	readonly associatedResource?: string | undefined;
	readonly canBeInvestigated?: boolean | undefined;
	readonly compromisedEntity?: string | undefined;
	readonly confidenceReasons?: AlertConfidenceReason[] | undefined;
	readonly confidenceScore?: number | undefined;
	readonly correlationKey?: string | undefined;
	readonly description?: string | undefined;
	readonly detectedTimeUtc?: string | undefined;
	readonly entities?: AlertEntity[] | undefined;
	readonly extendedProperties?: AlertExtendedProperties | undefined;
	readonly instanceId?: string | undefined;
	readonly isIncident?: boolean | undefined;
	readonly remediationSteps?: string | undefined;
	readonly reportedSeverity?: ("High" | "Information" | "Low" | "Silent") | undefined;
	readonly reportedTimeUtc?: string | undefined;
	readonly state?: string | undefined;
	readonly subscriptionId?: string | undefined;
	readonly systemSource?: string | undefined;
	readonly vendorName?: string | undefined;
	readonly workspaceArmId?: string | undefined;
}
export interface AllowedConnectionsResourceProperties {
	readonly calculatedDateTime?: string | undefined;
	readonly connectableResources?: ConnectableResource[] | undefined;
}
export interface AppWhitelistingGroupData {
	readonly configurationStatus?: ("Configured" | "Failed" | "InProgress" | "NoStatus" | "NotConfigured") | undefined;
	readonly enforcementMode?: ("Audit" | "Enforce" | "None") | undefined;
	readonly issues?: AppWhitelistingIssueSummary[] | undefined;
	readonly pathRecommendations?: PathRecommendation[] | undefined;
	readonly protectionMode?: ProtectionMode | undefined;
	readonly recommendationStatus?: ("NoStatus" | "NotAvailable" | "NotRecommended" | "Recommended") | undefined;
	readonly sourceSystem?:
		| ("Azure_AppLocker" | "Azure_AuditD" | "NonAzure_AppLocker" | "NonAzure_AuditD" | "None")
		| undefined;
	readonly vmRecommendations?: VmRecommendation[] | undefined;
}
export interface AppWhitelistingIssueSummary {
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
export interface Rule {
	readonly destinationPort?: number | undefined;
	readonly direction?: ("Inbound" | "Outbound") | undefined;
	readonly ipAddresses?: string[] | undefined;
	readonly name?: string | undefined;
	readonly protocols?: ("TCP" | "UDP"[]) | undefined;
}
export interface SecurityTaskParameters {
	readonly name?: string | undefined;
	readonly "[ key: string ]"?: any | undefined;
}
export interface SecurityTaskProperties {
	readonly creationTimeUtc?: string | undefined;
	readonly lastStateChangeTimeUtc?: string | undefined;
	readonly securityTaskParameters?: SecurityTaskParameters | undefined;
	readonly state?: string | undefined;
	readonly subState?: string | undefined;
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
