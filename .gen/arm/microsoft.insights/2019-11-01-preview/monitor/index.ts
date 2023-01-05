import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class dataCollectionRuleAssociations
	extends ArmResource<dataCollectionRuleAssociationsComponentInputs>
	implements dataCollectionRuleAssociationsComponentOutputs
{
	constructor(entity: ADKEntity, options: dataCollectionRuleAssociationsComponentInputs) {
		super(entity, options.name, "Microsoft.Insights/dataCollectionRuleAssociations", "2019-11-01-preview", options);
	}
	public readonly apiVersion: "2019-11-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Insights/dataCollectionRuleAssociations";
}
export interface dataCollectionRuleAssociationsComponentOutputs {
	readonly apiVersion: "2019-11-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Insights/dataCollectionRuleAssociations";
}
export interface dataCollectionRuleAssociationsComponentInputs {
	readonly etag?: string;
	readonly name: string;
	readonly properties?: DataCollectionRuleAssociationProxyOnlyResourceProperties;
}
export class dataCollectionRules
	extends ArmResource<dataCollectionRulesComponentInputs>
	implements dataCollectionRulesComponentOutputs
{
	constructor(entity: ADKEntity, options: dataCollectionRulesComponentInputs) {
		super(entity, options.name, "Microsoft.Insights/dataCollectionRules", "2019-11-01-preview", options);
	}
	public readonly apiVersion: "2019-11-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Insights/dataCollectionRules";
}
export interface dataCollectionRulesComponentOutputs {
	readonly apiVersion: "2019-11-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Insights/dataCollectionRules";
}
export interface dataCollectionRulesComponentInputs {
	readonly etag?: string;
	readonly kind?: "Linux" | "Windows";
	readonly location: string;
	readonly name: string;
	readonly properties?: DataCollectionRuleResourceProperties;
	readonly tags?: DataCollectionRuleResourceTags;
}
export interface DataCollectionRuleAssociationProxyOnlyResourceProperties {
	readonly dataCollectionRuleId?: string;
	readonly description?: string;
	readonly provisioningState?: "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating";
}
export interface DataCollectionRuleDataSources {
	readonly extensions?: ExtensionDataSource[];
	readonly performanceCounters?: PerfCounterDataSource[];
	readonly syslog?: SyslogDataSource[];
	readonly windowsEventLogs?: WindowsEventLogDataSource[];
}
export interface DataCollectionRuleDestinations {
	readonly azureMonitorMetrics?: DestinationsSpecAzureMonitorMetrics;
	readonly logAnalytics?: LogAnalyticsDestination[];
}
export interface DataCollectionRuleResourceProperties {
	readonly dataFlows?: DataFlow[];
	readonly dataSources?: DataCollectionRuleDataSources;
	readonly description?: string;
	readonly destinations?: DataCollectionRuleDestinations;
	readonly immutableId?: string;
	readonly provisioningState?: "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating";
}
export interface DataCollectionRuleResourceTags {
	readonly [key: string]: string;
}
export interface DataFlow {
	readonly destinations?: string[];
	readonly streams?:
		| "Microsoft-Event"
		| "Microsoft-InsightsMetrics"
		| "Microsoft-Perf"
		| "Microsoft-Syslog"
		| "Microsoft-WindowsEvent"[];
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
export interface LogAnalyticsDestination {
	readonly name?: string;
	readonly workspaceId?: string;
	readonly workspaceResourceId?: string;
}
export interface PerfCounterDataSource {
	readonly counterSpecifiers?: string[];
	readonly name?: string;
	readonly samplingFrequencyInSeconds?: number;
	readonly streams?: "Microsoft-InsightsMetrics" | "Microsoft-Perf"[];
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
	dataCollectionRuleAssociations: dataCollectionRuleAssociations,
	dataCollectionRules: dataCollectionRules,
};
