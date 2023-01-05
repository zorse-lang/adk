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
	readonly AutoConfigurationEnabled?: boolean | undefined;
	readonly ComponentMonitoringSettings?: ComponentMonitoringSetting[] | undefined;
	readonly CustomComponents?: CustomComponent[] | undefined;
	readonly CWEMonitorEnabled?: boolean | undefined;
	readonly GroupingType?: string | undefined;
	readonly LogPatternSets?: LogPatternSet[] | undefined;
	readonly OpsCenterEnabled?: boolean | undefined;
	readonly OpsItemSNSTopicArn?: string | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export interface Alarm {
	readonly AlarmName: string;
	readonly Severity?: string | undefined;
}
export interface AlarmMetric {
	readonly AlarmMetricName: string;
}
export interface ComponentConfiguration {
	readonly ConfigurationDetails?: ConfigurationDetails | undefined;
	readonly SubComponentTypeConfigurations?: SubComponentTypeConfiguration[] | undefined;
}
export interface ComponentMonitoringSetting {
	readonly ComponentARN?: string | undefined;
	readonly ComponentConfigurationMode: string;
	readonly ComponentName?: string | undefined;
	readonly CustomComponentConfiguration?: ComponentConfiguration | undefined;
	readonly DefaultOverwriteComponentConfiguration?: ComponentConfiguration | undefined;
	readonly Tier: string;
}
export interface ConfigurationDetails {
	readonly AlarmMetrics?: AlarmMetric[] | undefined;
	readonly Alarms?: Alarm[] | undefined;
	readonly HAClusterPrometheusExporter?: HAClusterPrometheusExporter | undefined;
	readonly HANAPrometheusExporter?: HANAPrometheusExporter | undefined;
	readonly JMXPrometheusExporter?: JMXPrometheusExporter | undefined;
	readonly Logs?: Log[] | undefined;
	readonly WindowsEvents?: WindowsEvent[] | undefined;
}
export interface CustomComponent {
	readonly ComponentName: string;
	readonly ResourceList: string[];
}
export interface HAClusterPrometheusExporter {
	readonly PrometheusPort?: string | undefined;
}
export interface HANAPrometheusExporter {
	readonly AgreeToInstallHANADBClient: boolean;
	readonly HANAPort: string;
	readonly HANASID: string;
	readonly HANASecretName: string;
	readonly PrometheusPort?: string | undefined;
}
export interface JMXPrometheusExporter {
	readonly HostPort?: string | undefined;
	readonly JMXURL?: string | undefined;
	readonly PrometheusPort?: string | undefined;
}
export interface Log {
	readonly Encoding?: string | undefined;
	readonly LogGroupName?: string | undefined;
	readonly LogPath?: string | undefined;
	readonly LogType: string;
	readonly PatternSet?: string | undefined;
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
	readonly AlarmMetrics?: AlarmMetric[] | undefined;
	readonly Logs?: Log[] | undefined;
	readonly WindowsEvents?: WindowsEvent[] | undefined;
}
export interface SubComponentTypeConfiguration {
	readonly SubComponentConfigurationDetails: SubComponentConfigurationDetails;
	readonly SubComponentType: string;
}
export interface WindowsEvent {
	readonly EventLevels: string[];
	readonly EventName: string;
	readonly LogGroupName: string;
	readonly PatternSet?: string | undefined;
}
export default {
	Application: Application,
};
