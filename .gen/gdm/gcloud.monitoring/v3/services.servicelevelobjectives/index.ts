import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ServicesServiceLevelObjectives
	extends GdmResource<ServicesServiceLevelObjectivesComponentInputs>
	implements ServicesServiceLevelObjectivesComponentOutputs
{
	constructor(entity: ADKEntity, options: ServicesServiceLevelObjectivesComponentInputs) {
		super(entity, options.name, "monitoring.v3.ServicesServiceLevelObjectives", options);
	}
}
export interface ServicesServiceLevelObjectivesComponentOutputs {}
export interface ServicesServiceLevelObjectivesComponentInputs {
	readonly calendarPeriod?: string | undefined;
	readonly displayName?: string | undefined;
	readonly goal?: number | undefined;
	readonly name: string;
	readonly parent: string;
	readonly rollingPeriod?: string | undefined;
	readonly serviceLevelIndicator?: ServiceLevelIndicator | undefined;
	readonly serviceLevelObjectiveId?: string | undefined;
	readonly userLabels?: { [P in string]: string } | undefined;
	readonly type: string;
}
export interface AvailabilityCriteria {}
export interface BasicSli {
	readonly availability?: any | undefined;
	readonly latency?: LatencyCriteria | undefined;
	readonly location?: string[] | undefined;
	readonly method?: string[] | undefined;
	readonly version?: string[] | undefined;
}
export interface DistributionCut {
	readonly distributionFilter?: string | undefined;
	readonly range?: GoogleMonitoringV3Range | undefined;
}
export interface GoogleMonitoringV3Range {
	readonly max?: number | undefined;
	readonly min?: number | undefined;
}
export interface LatencyCriteria {
	readonly threshold?: string | undefined;
}
export interface MetricRange {
	readonly range?: GoogleMonitoringV3Range | undefined;
	readonly timeSeries?: string | undefined;
}
export interface PerformanceThreshold {
	readonly basicSliPerformance?: BasicSli | undefined;
	readonly performance?: RequestBasedSli | undefined;
	readonly threshold?: number | undefined;
}
export interface RequestBasedSli {
	readonly distributionCut?: DistributionCut | undefined;
	readonly goodTotalRatio?: TimeSeriesRatio | undefined;
}
export interface ServiceLevelIndicator {
	readonly basicSli?: BasicSli | undefined;
	readonly requestBased?: RequestBasedSli | undefined;
	readonly windowsBased?: WindowsBasedSli | undefined;
}
export interface ServiceLevelObjective {
	readonly calendarPeriod?: string | undefined;
	readonly displayName?: string | undefined;
	readonly goal?: number | undefined;
	readonly name?: string | undefined;
	readonly rollingPeriod?: string | undefined;
	readonly serviceLevelIndicator?: ServiceLevelIndicator | undefined;
	readonly userLabels?: { [P in string]: string } | undefined;
}
export interface TimeSeriesRatio {
	readonly badServiceFilter?: string | undefined;
	readonly goodServiceFilter?: string | undefined;
	readonly totalServiceFilter?: string | undefined;
}
export interface WindowsBasedSli {
	readonly goodBadMetricFilter?: string | undefined;
	readonly goodTotalRatioThreshold?: PerformanceThreshold | undefined;
	readonly metricMeanInRange?: MetricRange | undefined;
	readonly metricSumInRange?: MetricRange | undefined;
	readonly windowPeriod?: string | undefined;
}
export default {
	ServicesServiceLevelObjectives: ServicesServiceLevelObjectives,
};
