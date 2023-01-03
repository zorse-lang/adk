import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class Application extends CfnResource<ApplicationComponentInputs> implements ApplicationComponentOutputs {
	constructor(entity: ADKEntity, options: ApplicationComponentInputs) {
		super(entity, options.LogicalId, "AWS::ApplicationInsights::Application", options);
	}
	public readonly ApplicationArn: string;
}
export interface ApplicationComponentOutputs {
	readonly ApplicationArn: string;
}
export interface ApplicationComponentInputs {
	readonly ResourceGroupName: string;
	readonly AutoConfigurationEnabled?: (boolean | undefined) | undefined;
	readonly ComponentMonitoringSettings?: (ComponentMonitoringSetting[] | undefined) | undefined;
	readonly CustomComponents?: (CustomComponent[] | undefined) | undefined;
	readonly CWEMonitorEnabled?: (boolean | undefined) | undefined;
	readonly GroupingType?: (string | undefined) | undefined;
	readonly LogPatternSets?: (LogPatternSet[] | undefined) | undefined;
	readonly OpsCenterEnabled?: (boolean | undefined) | undefined;
	readonly OpsItemSNSTopicArn?: (string | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly LogicalId: string;
}
export interface Alarm {
	readonly AlarmName: string;
	readonly Severity?: (string | undefined) | undefined;
}
export interface AlarmMetric {
	readonly AlarmMetricName: string;
}
export interface ComponentConfiguration {
	readonly ConfigurationDetails?: (ConfigurationDetails | undefined) | undefined;
	readonly SubComponentTypeConfigurations?: (SubComponentTypeConfiguration[] | undefined) | undefined;
}
export interface ComponentMonitoringSetting {
	readonly ComponentARN?: (string | undefined) | undefined;
	readonly ComponentConfigurationMode: string;
	readonly ComponentName?: (string | undefined) | undefined;
	readonly CustomComponentConfiguration?: (ComponentConfiguration | undefined) | undefined;
	readonly DefaultOverwriteComponentConfiguration?: (ComponentConfiguration | undefined) | undefined;
	readonly Tier: string;
}
export interface ConfigurationDetails {
	readonly AlarmMetrics?: (AlarmMetric[] | undefined) | undefined;
	readonly Alarms?: (Alarm[] | undefined) | undefined;
	readonly HAClusterPrometheusExporter?: (HAClusterPrometheusExporter | undefined) | undefined;
	readonly HANAPrometheusExporter?: (HANAPrometheusExporter | undefined) | undefined;
	readonly JMXPrometheusExporter?: (JMXPrometheusExporter | undefined) | undefined;
	readonly Logs?: (Log[] | undefined) | undefined;
	readonly WindowsEvents?: (WindowsEvent[] | undefined) | undefined;
}
export interface CustomComponent {
	readonly ComponentName: string;
	readonly ResourceList: string[];
}
export interface HAClusterPrometheusExporter {
	readonly PrometheusPort?: (string | undefined) | undefined;
}
export interface HANAPrometheusExporter {
	readonly AgreeToInstallHANADBClient: boolean;
	readonly HANAPort: string;
	readonly HANASID: string;
	readonly HANASecretName: string;
	readonly PrometheusPort?: (string | undefined) | undefined;
}
export interface JMXPrometheusExporter {
	readonly HostPort?: (string | undefined) | undefined;
	readonly JMXURL?: (string | undefined) | undefined;
	readonly PrometheusPort?: (string | undefined) | undefined;
}
export interface Log {
	readonly Encoding?: (string | undefined) | undefined;
	readonly LogGroupName?: (string | undefined) | undefined;
	readonly LogPath?: (string | undefined) | undefined;
	readonly LogType: string;
	readonly PatternSet?: (string | undefined) | undefined;
}
export interface LogPattern {
	readonly Pattern: string;
	readonly PatternName: string;
	readonly Rank: number;
}
export interface LogPatternSet {
	readonly LogPatterns: LogPattern[];
	readonly PatternSetName: string;
}
export interface SubComponentConfigurationDetails {
	readonly AlarmMetrics?: (AlarmMetric[] | undefined) | undefined;
	readonly Logs?: (Log[] | undefined) | undefined;
	readonly WindowsEvents?: (WindowsEvent[] | undefined) | undefined;
}
export interface SubComponentTypeConfiguration {
	readonly SubComponentConfigurationDetails: SubComponentConfigurationDetails;
	readonly SubComponentType: string;
}
export interface WindowsEvent {
	readonly EventLevels: string[];
	readonly EventName: string;
	readonly LogGroupName: string;
	readonly PatternSet?: (string | undefined) | undefined;
}
export default {
	Application: Application,
};
