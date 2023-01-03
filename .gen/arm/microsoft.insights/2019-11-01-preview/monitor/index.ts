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
	readonly etag?: string | undefined;
	readonly name: string;
	readonly properties?: DataCollectionRuleAssociationProxyOnlyResourceProperties | undefined;
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
	readonly etag?: string | undefined;
	readonly kind?: ("Linux" | "Windows") | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties?: DataCollectionRuleResourceProperties | undefined;
	readonly tags?: DataCollectionRuleResourceTags | undefined;
}
export interface DataCollectionRuleAssociationProxyOnlyResourceProperties {
	readonly dataCollectionRuleId?: string | undefined;
	readonly description?: string | undefined;
	readonly provisioningState?: ("Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
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
	dataCollectionRuleAssociations: dataCollectionRuleAssociations,
	dataCollectionRules: dataCollectionRules,
};
