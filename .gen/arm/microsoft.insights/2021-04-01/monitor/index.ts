import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class dataCollectionEndpoints
	extends ArmResource<dataCollectionEndpointsComponentInputs>
	implements dataCollectionEndpointsComponentOutputs
{
	constructor(entity: ADKEntity, options: dataCollectionEndpointsComponentInputs) {
		super(entity, options.name, "Microsoft.Insights/dataCollectionEndpoints", "2021-04-01", options);
	}
	public readonly apiVersion: "2021-04-01";
	public readonly id: string;
	public readonly type: "Microsoft.Insights/dataCollectionEndpoints";
}
export interface dataCollectionEndpointsComponentOutputs {
	readonly apiVersion: "2021-04-01";
	readonly id: string;
	readonly type: "Microsoft.Insights/dataCollectionEndpoints";
}
export interface dataCollectionEndpointsComponentInputs {
	readonly etag?: string | undefined;
	readonly kind?: ("Linux" | "Windows") | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties?: DataCollectionEndpointResourceProperties | undefined;
	readonly systemData?: DataCollectionEndpointResourceSystemData | undefined;
	readonly tags?: DataCollectionEndpointResourceTags | undefined;
}
export class dataCollectionRuleAssociations
	extends ArmResource<dataCollectionRuleAssociationsComponentInputs>
	implements dataCollectionRuleAssociationsComponentOutputs
{
	constructor(entity: ADKEntity, options: dataCollectionRuleAssociationsComponentInputs) {
		super(entity, options.name, "Microsoft.Insights/dataCollectionRuleAssociations", "2021-04-01", options);
	}
	public readonly apiVersion: "2021-04-01";
	public readonly id: string;
	public readonly type: "Microsoft.Insights/dataCollectionRuleAssociations";
}
export interface dataCollectionRuleAssociationsComponentOutputs {
	readonly apiVersion: "2021-04-01";
	readonly id: string;
	readonly type: "Microsoft.Insights/dataCollectionRuleAssociations";
}
export interface dataCollectionRuleAssociationsComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly properties?: DataCollectionRuleAssociationProxyOnlyResourceProperties | undefined;
	readonly systemData?: DataCollectionRuleAssociationProxyOnlyResourceSystemData | undefined;
}
export class dataCollectionRules
	extends ArmResource<dataCollectionRulesComponentInputs>
	implements dataCollectionRulesComponentOutputs
{
	constructor(entity: ADKEntity, options: dataCollectionRulesComponentInputs) {
		super(entity, options.name, "Microsoft.Insights/dataCollectionRules", "2021-04-01", options);
	}
	public readonly apiVersion: "2021-04-01";
	public readonly id: string;
	public readonly type: "Microsoft.Insights/dataCollectionRules";
}
export interface dataCollectionRulesComponentOutputs {
	readonly apiVersion: "2021-04-01";
	readonly id: string;
	readonly type: "Microsoft.Insights/dataCollectionRules";
}
export interface dataCollectionRulesComponentInputs {
	readonly etag?: string | undefined;
	readonly kind?: ("Linux" | "Windows") | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties?: DataCollectionRuleResourceProperties | undefined;
	readonly systemData?: DataCollectionRuleResourceSystemData | undefined;
	readonly tags?: DataCollectionRuleResourceTags | undefined;
}
export interface DataCollectionEndpointConfigurationAccess {
	readonly endpoint?: string | undefined;
}
export interface DataCollectionEndpointLogsIngestion {
	readonly endpoint?: string | undefined;
}
export interface DataCollectionEndpointNetworkAcls {
	readonly publicNetworkAccess?: ("Disabled" | "Enabled") | undefined;
}
export interface DataCollectionEndpointResourceProperties {
	readonly configurationAccess?: DataCollectionEndpointConfigurationAccess | undefined;
	readonly description?: string | undefined;
	readonly immutableId?: string | undefined;
	readonly logsIngestion?: DataCollectionEndpointLogsIngestion | undefined;
	readonly networkAcls?: DataCollectionEndpointNetworkAcls | undefined;
	readonly provisioningState?: ("Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
}
export interface DataCollectionEndpointResourceSystemData {
	readonly createdAt?: string | undefined;
	readonly createdBy?: string | undefined;
	readonly createdByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
	readonly lastModifiedAt?: string | undefined;
	readonly lastModifiedBy?: string | undefined;
	readonly lastModifiedByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
}
export interface DataCollectionEndpointResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface DataCollectionRuleAssociationProxyOnlyResourceProperties {
	readonly dataCollectionEndpointId?: string | undefined;
	readonly dataCollectionRuleId?: string | undefined;
	readonly description?: string | undefined;
	readonly provisioningState?: ("Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
}
export interface DataCollectionRuleAssociationProxyOnlyResourceSystemData {
	readonly createdAt?: string | undefined;
	readonly createdBy?: string | undefined;
	readonly createdByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
	readonly lastModifiedAt?: string | undefined;
	readonly lastModifiedBy?: string | undefined;
	readonly lastModifiedByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
}
export interface DataCollectionRuleDataSources {
	readonly extensions?: ExtensionDataSource[] | undefined;
	readonly performanceCounters?: PerfCounterDataSource[] | undefined;
	readonly syslog?: SyslogDataSource[] | undefined;
	readonly windowsEventLogs?: WindowsEventLogDataSource[] | undefined;
}
export interface DataCollectionRuleDestinations {
	readonly azureMonitorMetrics?: DestinationsSpecAzureMonitorMetrics | undefined;
	readonly logAnalytics?: LogAnalyticsDestination[] | undefined;
}
export interface DataCollectionRuleResourceProperties {
	readonly dataFlows?: DataFlow[] | undefined;
	readonly dataSources?: DataCollectionRuleDataSources | undefined;
	readonly description?: string | undefined;
	readonly destinations?: DataCollectionRuleDestinations | undefined;
	readonly immutableId?: string | undefined;
	readonly provisioningState?: ("Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
}
export interface DataCollectionRuleResourceSystemData {
	readonly createdAt?: string | undefined;
	readonly createdBy?: string | undefined;
	readonly createdByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
	readonly lastModifiedAt?: string | undefined;
	readonly lastModifiedBy?: string | undefined;
	readonly lastModifiedByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
}
export interface DataCollectionRuleResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface DataFlow {
	readonly destinations?: string[] | undefined;
	readonly streams?:
		| (
				| "Microsoft-Event"
				| "Microsoft-InsightsMetrics"
				| "Microsoft-Perf"
				| "Microsoft-Syslog"
				| "Microsoft-WindowsEvent"[]
		  )
		| undefined;
}
export interface DestinationsSpecAzureMonitorMetrics {
	readonly name?: string | undefined;
}
export interface ExtensionDataSource {
	readonly extensionName: string;
	readonly extensionSettings?: any | undefined;
	readonly inputDataSources?: string[] | undefined;
	readonly name?: string | undefined;
	readonly streams?:
		| (
				| "Microsoft-Event"
				| "Microsoft-InsightsMetrics"
				| "Microsoft-Perf"
				| "Microsoft-Syslog"
				| "Microsoft-WindowsEvent"[]
		  )
		| undefined;
}
export interface LogAnalyticsDestination {
	readonly name?: string | undefined;
	readonly workspaceId?: string | undefined;
	readonly workspaceResourceId?: string | undefined;
}
export interface PerfCounterDataSource {
	readonly counterSpecifiers?: string[] | undefined;
	readonly name?: string | undefined;
	readonly samplingFrequencyInSeconds?: number | undefined;
	readonly streams?: ("Microsoft-InsightsMetrics" | "Microsoft-Perf"[]) | undefined;
}
export interface SyslogDataSource {
	readonly facilityNames?:
		| (
				| "*"
				| "auth"
				| "authpriv"
				| "cron"
				| "daemon"
				| "kern"
				| "local0"
				| "local1"
				| "local2"
				| "local3"
				| "local4"
				| "local5"
				| "local6"
				| "local7"
				| "lpr"
				| "mail"
				| "mark"
				| "news"
				| "syslog"
				| "user"
				| "uucp"[]
		  )
		| undefined;
	readonly logLevels?:
		| ("*" | "Alert" | "Critical" | "Debug" | "Emergency" | "Error" | "Info" | "Notice" | "Warning"[])
		| undefined;
	readonly name?: string | undefined;
	readonly streams?: "Microsoft-Syslog"[] | undefined;
}
export interface WindowsEventLogDataSource {
	readonly name?: string | undefined;
	readonly streams?: ("Microsoft-Event" | "Microsoft-WindowsEvent"[]) | undefined;
	readonly xPathQueries?: string[] | undefined;
}
export default {
	dataCollectionEndpoints: dataCollectionEndpoints,
	dataCollectionRuleAssociations: dataCollectionRuleAssociations,
	dataCollectionRules: dataCollectionRules,
};
