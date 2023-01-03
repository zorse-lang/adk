import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class Alarm extends CfnResource<AlarmComponentInputs> implements AlarmComponentOutputs {
	constructor(entity: ADKEntity, options: AlarmComponentInputs) {
		super(entity, options.LogicalId, "AWS::CloudWatch::Alarm", options);
	}
	public readonly Arn: string;
}
export interface AlarmComponentOutputs {
	readonly Arn: string;
}
export interface AlarmComponentInputs {
	readonly ComparisonOperator: string;
	readonly EvaluationPeriods: number;
	readonly ActionsEnabled?: (boolean | undefined) | undefined;
	readonly AlarmActions?: (string[] | undefined) | undefined;
	readonly AlarmDescription?: (string | undefined) | undefined;
	readonly AlarmName?: (string | undefined) | undefined;
	readonly DatapointsToAlarm?: (number | undefined) | undefined;
	readonly Dimensions?: (Dimension[] | undefined) | undefined;
	readonly EvaluateLowSampleCountPercentile?: (string | undefined) | undefined;
	readonly ExtendedStatistic?: (string | undefined) | undefined;
	readonly InsufficientDataActions?: (string[] | undefined) | undefined;
	readonly MetricName?: (string | undefined) | undefined;
	readonly Metrics?: (MetricDataQuery[] | undefined) | undefined;
	readonly Namespace?: (string | undefined) | undefined;
	readonly OKActions?: (string[] | undefined) | undefined;
	readonly Period?: (number | undefined) | undefined;
	readonly Statistic?: (string | undefined) | undefined;
	readonly Threshold?: (number | undefined) | undefined;
	readonly ThresholdMetricId?: (string | undefined) | undefined;
	readonly TreatMissingData?: (string | undefined) | undefined;
	readonly Unit?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export class AnomalyDetector
	extends CfnResource<AnomalyDetectorComponentInputs>
	implements AnomalyDetectorComponentOutputs
{
	constructor(entity: ADKEntity, options: AnomalyDetectorComponentInputs) {
		super(entity, options.LogicalId, "AWS::CloudWatch::AnomalyDetector", options);
	}
}
export interface AnomalyDetectorComponentOutputs {}
export interface AnomalyDetectorComponentInputs {
	readonly Configuration?: (Configuration | undefined) | undefined;
	readonly Dimensions?: (Dimension[] | undefined) | undefined;
	readonly MetricMathAnomalyDetector?: (MetricMathAnomalyDetector | undefined) | undefined;
	readonly MetricName?: (string | undefined) | undefined;
	readonly Namespace?: (string | undefined) | undefined;
	readonly SingleMetricAnomalyDetector?: (SingleMetricAnomalyDetector | undefined) | undefined;
	readonly Stat?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export class CompositeAlarm extends CfnResource<CompositeAlarmComponentInputs> implements CompositeAlarmComponentOutputs {
	constructor(entity: ADKEntity, options: CompositeAlarmComponentInputs) {
		super(entity, options.LogicalId, "AWS::CloudWatch::CompositeAlarm", options);
	}
	public readonly Arn: string;
}
export interface CompositeAlarmComponentOutputs {
	readonly Arn: string;
}
export interface CompositeAlarmComponentInputs {
	readonly AlarmRule: string;
	readonly ActionsEnabled?: (boolean | undefined) | undefined;
	readonly ActionsSuppressor?: (string | undefined) | undefined;
	readonly ActionsSuppressorExtensionPeriod?: (number | undefined) | undefined;
	readonly ActionsSuppressorWaitPeriod?: (number | undefined) | undefined;
	readonly AlarmActions?: (string[] | undefined) | undefined;
	readonly AlarmDescription?: (string | undefined) | undefined;
	readonly AlarmName?: (string | undefined) | undefined;
	readonly InsufficientDataActions?: (string[] | undefined) | undefined;
	readonly OKActions?: (string[] | undefined) | undefined;
	readonly LogicalId: string;
}
export class Dashboard extends CfnResource<DashboardComponentInputs> implements DashboardComponentOutputs {
	constructor(entity: ADKEntity, options: DashboardComponentInputs) {
		super(entity, options.LogicalId, "AWS::CloudWatch::Dashboard", options);
	}
}
export interface DashboardComponentOutputs {}
export interface DashboardComponentInputs {
	readonly DashboardBody: string;
	readonly DashboardName?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export class InsightRule extends CfnResource<InsightRuleComponentInputs> implements InsightRuleComponentOutputs {
	constructor(entity: ADKEntity, options: InsightRuleComponentInputs) {
		super(entity, options.LogicalId, "AWS::CloudWatch::InsightRule", options);
	}
	public readonly Arn: string;
	public readonly RuleName: string;
}
export interface InsightRuleComponentOutputs {
	readonly Arn: string;
	readonly RuleName: string;
}
export interface InsightRuleComponentInputs {
	readonly RuleBody: string;
	readonly RuleName: string;
	readonly RuleState: string;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly LogicalId: string;
}
export class MetricStream extends CfnResource<MetricStreamComponentInputs> implements MetricStreamComponentOutputs {
	constructor(entity: ADKEntity, options: MetricStreamComponentInputs) {
		super(entity, options.LogicalId, "AWS::CloudWatch::MetricStream", options);
	}
	public readonly Arn: string;
	public readonly CreationDate: string;
	public readonly LastUpdateDate: string;
	public readonly State: string;
}
export interface MetricStreamComponentOutputs {
	readonly Arn: string;
	readonly CreationDate: string;
	readonly LastUpdateDate: string;
	readonly State: string;
}
export interface MetricStreamComponentInputs {
	readonly FirehoseArn: string;
	readonly OutputFormat: string;
	readonly RoleArn: string;
	readonly ExcludeFilters?: (MetricStreamFilter[] | undefined) | undefined;
	readonly IncludeFilters?: (MetricStreamFilter[] | undefined) | undefined;
	readonly Name?: (string | undefined) | undefined;
	readonly StatisticsConfigurations?: (MetricStreamStatisticsConfiguration[] | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly LogicalId: string;
}
export interface Dimension {
	readonly Name: string;
	readonly Value: string;
}
export interface Metric {
	readonly Dimensions?: (Dimension[] | undefined) | undefined;
	readonly MetricName?: (string | undefined) | undefined;
	readonly Namespace?: (string | undefined) | undefined;
}
export interface MetricDataQuery {
	readonly AccountId?: (string | undefined) | undefined;
	readonly Expression?: (string | undefined) | undefined;
	readonly Id: string;
	readonly Label?: (string | undefined) | undefined;
	readonly MetricStat?: (MetricStat | undefined) | undefined;
	readonly Period?: (number | undefined) | undefined;
	readonly ReturnData?: (boolean | undefined) | undefined;
}
export interface MetricStat {
	readonly Metric: Metric;
	readonly Period: number;
	readonly Stat: string;
	readonly Unit?: (string | undefined) | undefined;
}
export interface Configuration {
	readonly ExcludedTimeRanges?: (Range[] | undefined) | undefined;
	readonly MetricTimeZone?: (string | undefined) | undefined;
}
export interface MetricMathAnomalyDetector {
	readonly MetricDataQueries?: (MetricDataQuery[] | undefined) | undefined;
}
export interface Range {
	readonly EndTime: string;
	readonly StartTime: string;
}
export interface SingleMetricAnomalyDetector {
	readonly Dimensions?: (Dimension[] | undefined) | undefined;
	readonly MetricName?: (string | undefined) | undefined;
	readonly Namespace?: (string | undefined) | undefined;
	readonly Stat?: (string | undefined) | undefined;
}
export interface MetricStreamFilter {
	readonly Namespace: string;
}
export interface MetricStreamStatisticsConfiguration {
	readonly AdditionalStatistics: string[];
	readonly IncludeMetrics: MetricStreamStatisticsMetric[];
}
export interface MetricStreamStatisticsMetric {
	readonly MetricName: string;
	readonly Namespace: string;
}
export default {
	Alarm: Alarm,
	AnomalyDetector: AnomalyDetector,
	CompositeAlarm: CompositeAlarm,
	Dashboard: Dashboard,
	InsightRule: InsightRule,
	MetricStream: MetricStream,
};
