import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class dataCollectionEndpoints
	extends ArmResource<dataCollectionEndpointsComponentInputs>
	implements dataCollectionEndpointsComponentOutputs
{
	constructor(entity: ADKEntity, options: dataCollectionEndpointsComponentInputs) {
		super(entity, options.name, "Microsoft.Insights/dataCollectionEndpoints", "2021-09-01-preview", options);
	}
	public readonly apiVersion: "2021-09-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Insights/dataCollectionEndpoints";
}
export interface dataCollectionEndpointsComponentOutputs {
	readonly apiVersion: "2021-09-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Insights/dataCollectionEndpoints";
}
export interface dataCollectionEndpointsComponentInputs {
	readonly etag?: string;
	readonly kind?: "Linux" | "Windows";
	readonly location: string;
	readonly name: string;
	readonly properties?: DataCollectionEndpointResourceProperties;
	readonly systemData?: DataCollectionEndpointResourceSystemData;
	readonly tags?: DataCollectionEndpointResourceTags;
}
export class dataCollectionRuleAssociations
	extends ArmResource<dataCollectionRuleAssociationsComponentInputs>
	implements dataCollectionRuleAssociationsComponentOutputs
{
	constructor(entity: ADKEntity, options: dataCollectionRuleAssociationsComponentInputs) {
		super(entity, options.name, "Microsoft.Insights/dataCollectionRuleAssociations", "2021-09-01-preview", options);
	}
	public readonly apiVersion: "2021-09-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Insights/dataCollectionRuleAssociations";
}
export interface dataCollectionRuleAssociationsComponentOutputs {
	readonly apiVersion: "2021-09-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Insights/dataCollectionRuleAssociations";
}
export interface dataCollectionRuleAssociationsComponentInputs {
	readonly etag?: string;
	readonly name: string;
	readonly properties?: DataCollectionRuleAssociationProxyOnlyResourceProperties;
	readonly systemData?: DataCollectionRuleAssociationProxyOnlyResourceSystemData;
}
export class dataCollectionRules
	extends ArmResource<dataCollectionRulesComponentInputs>
	implements dataCollectionRulesComponentOutputs
{
	constructor(entity: ADKEntity, options: dataCollectionRulesComponentInputs) {
		super(entity, options.name, "Microsoft.Insights/dataCollectionRules", "2021-09-01-preview", options);
	}
	public readonly apiVersion: "2021-09-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Insights/dataCollectionRules";
}
export interface dataCollectionRulesComponentOutputs {
	readonly apiVersion: "2021-09-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Insights/dataCollectionRules";
}
export interface dataCollectionRulesComponentInputs {
	readonly etag?: string;
	readonly kind?: "Linux" | "Windows";
	readonly location: string;
	readonly name: string;
	readonly properties?: DataCollectionRuleResourceProperties;
	readonly systemData?: DataCollectionRuleResourceSystemData;
	readonly tags?: DataCollectionRuleResourceTags;
}
export interface ColumnDefinition {
	readonly name?: string;
	readonly type?: "boolean" | "datetime" | "dynamic" | "int" | "long" | "real" | "string";
}
export interface DataCollectionEndpointConfigurationAccess {
	readonly endpoint?: string;
}
export interface DataCollectionEndpointLogsIngestion {
	readonly endpoint?: string;
}
export interface DataCollectionEndpointNetworkAcls {
	readonly publicNetworkAccess?: "Disabled" | "Enabled";
}
export interface DataCollectionEndpointResourceProperties {
	readonly configurationAccess?: DataCollectionEndpointConfigurationAccess;
	readonly description?: string;
	readonly immutableId?: string;
	readonly logsIngestion?: DataCollectionEndpointLogsIngestion;
	readonly networkAcls?: DataCollectionEndpointNetworkAcls;
	readonly provisioningState?: "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating";
}
export interface DataCollectionEndpointResourceSystemData {
	readonly createdAt?: string;
	readonly createdBy?: string;
	readonly createdByType?: "Application" | "Key" | "ManagedIdentity" | "User";
	readonly lastModifiedAt?: string;
	readonly lastModifiedBy?: string;
	readonly lastModifiedByType?: "Application" | "Key" | "ManagedIdentity" | "User";
}
export interface DataCollectionEndpointResourceTags {
	readonly [key: string]: string;
}
export interface DataCollectionRuleAssociationMetadata {
	readonly provisionedBy?: string;
}
export interface DataCollectionRuleAssociationProxyOnlyResourceProperties {
	readonly dataCollectionEndpointId?: string;
	readonly dataCollectionRuleId?: string;
	readonly description?: string;
	readonly metadata?: DataCollectionRuleAssociationMetadata;
	readonly provisioningState?: "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating";
}
export interface DataCollectionRuleAssociationProxyOnlyResourceSystemData {
	readonly createdAt?: string;
	readonly createdBy?: string;
	readonly createdByType?: "Application" | "Key" | "ManagedIdentity" | "User";
	readonly lastModifiedAt?: string;
	readonly lastModifiedBy?: string;
	readonly lastModifiedByType?: "Application" | "Key" | "ManagedIdentity" | "User";
}
export interface DataCollectionRuleDataSources {
	readonly extensions?: ExtensionDataSource[];
	readonly iisLogs?: IisLogsDataSource[];
	readonly logFiles?: LogFilesDataSource[];
	readonly performanceCounters?: PerfCounterDataSource[];
	readonly syslog?: SyslogDataSource[];
	readonly windowsEventLogs?: WindowsEventLogDataSource[];
}
export interface DataCollectionRuleDestinations {
	readonly azureMonitorMetrics?: DestinationsSpecAzureMonitorMetrics;
	readonly logAnalytics?: LogAnalyticsDestination[];
}
export interface DataCollectionRuleMetadata {
	readonly provisionedBy?: string;
}
export interface DataCollectionRuleResourceProperties {
	readonly dataCollectionEndpointId?: string;
	readonly dataFlows?: DataFlow[];
	readonly dataSources?: DataCollectionRuleDataSources;
	readonly description?: string;
	readonly destinations?: DataCollectionRuleDestinations;
	readonly immutableId?: string;
	readonly metadata?: DataCollectionRuleMetadata;
	readonly provisioningState?: "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly streamDeclarations?: DataCollectionRuleStreamDeclarations;
}
export interface DataCollectionRuleResourceSystemData {
	readonly createdAt?: string;
	readonly createdBy?: string;
	readonly createdByType?: "Application" | "Key" | "ManagedIdentity" | "User";
	readonly lastModifiedAt?: string;
	readonly lastModifiedBy?: string;
	readonly lastModifiedByType?: "Application" | "Key" | "ManagedIdentity" | "User";
}
export interface DataCollectionRuleResourceTags {
	readonly [key: string]: string;
}
export interface DataCollectionRuleStreamDeclarations {
	readonly [key: string]: StreamDeclaration;
}
export interface DataFlow {
	readonly destinations?: string[];
	readonly outputStream?: string;
	readonly streams?:
		| "Microsoft-Event"
		| "Microsoft-InsightsMetrics"
		| "Microsoft-Perf"
		| "Microsoft-Syslog"
		| "Microsoft-WindowsEvent"[];
	readonly transformKql?: string;
}
export interface DestinationsSpecAzureMonitorMetrics {
	readonly name?: string;
}
export interface ExtensionDataSource {
	readonly extensionName: string;
	readonly extensionSettings?: any;
	readonly inputDataSources?: string[];
	readonly name?: string;
	readonly streams?:
		| "Microsoft-Event"
		| "Microsoft-InsightsMetrics"
		| "Microsoft-Perf"
		| "Microsoft-Syslog"
		| "Microsoft-WindowsEvent"[];
}
export interface IisLogsDataSource {
	readonly logDirectories?: string[];
	readonly name?: string;
	readonly streams: string[];
}
export interface LogAnalyticsDestination {
	readonly name?: string;
	readonly workspaceId?: string;
	readonly workspaceResourceId?: string;
}
export interface LogFilesDataSource {
	readonly filePatterns: string[];
	readonly format: "text";
	readonly name?: string;
	readonly settings?: LogFilesDataSourceSettings;
	readonly streams: string[];
}
export interface LogFilesDataSourceSettings {
	readonly text?: LogFileSettingsText;
}
export interface LogFileSettingsText {
	readonly recordStartTimestampFormat:
		| "ISO 8601"
		| "M/D/YYYY HH:MM:SS AM/PM"
		| "MMM d hh:mm:ss"
		| "Mon DD, YYYY HH:MM:SS"
		| "YYYY-MM-DD HH:MM:SS"
		| "dd/MMM/yyyy:HH:mm:ss zzz"
		| "ddMMyy HH:mm:ss"
		| "yyMMdd HH:mm:ss"
		| "yyyy-MM-ddTHH:mm:ssK";
}
export interface PerfCounterDataSource {
	readonly counterSpecifiers?: string[];
	readonly name?: string;
	readonly samplingFrequencyInSeconds?: number;
	readonly streams?: "Microsoft-InsightsMetrics" | "Microsoft-Perf"[];
}
export interface StreamDeclaration {
	readonly columns?: ColumnDefinition[];
}
export interface SyslogDataSource {
	readonly facilityNames?:
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
		| "uucp"[];
	readonly logLevels?: "*" | "Alert" | "Critical" | "Debug" | "Emergency" | "Error" | "Info" | "Notice" | "Warning"[];
	readonly name?: string;
	readonly streams?: "Microsoft-Syslog"[];
}
export interface WindowsEventLogDataSource {
	readonly name?: string;
	readonly streams?: "Microsoft-Event" | "Microsoft-WindowsEvent"[];
	readonly xPathQueries?: string[];
}
export default {
	dataCollectionEndpoints: dataCollectionEndpoints,
	dataCollectionRuleAssociations: dataCollectionRuleAssociations,
	dataCollectionRules: dataCollectionRules,
};
