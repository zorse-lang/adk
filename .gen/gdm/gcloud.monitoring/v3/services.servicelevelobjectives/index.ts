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
	readonly calendarPeriod?: string;
	readonly displayName?: string;
	readonly goal?: number;
	readonly name: string;
	readonly parent: string;
	readonly rollingPeriod?: string;
	readonly serviceLevelIndicator?: ServiceLevelIndicator;
	readonly serviceLevelObjectiveId?: string;
	readonly userLabels?: { [P in string]: string };
}
export interface AvailabilityCriteria {}
export interface BasicSli {
	readonly availability?: any;
	readonly latency?: LatencyCriteria;
	readonly location?: string[];
	readonly method?: string[];
	readonly version?: string[];
}
export interface DistributionCut {
	readonly distributionFilter?: string;
	readonly range?: GoogleMonitoringV3Range;
}
export interface GoogleMonitoringV3Range {
	readonly max?: number;
	readonly min?: number;
}
export interface LatencyCriteria {
	readonly threshold?: string;
}
export interface MetricRange {
	readonly range?: GoogleMonitoringV3Range;
	readonly timeSeries?: string;
}
export interface PerformanceThreshold {
	readonly basicSliPerformance?: BasicSli;
	readonly performance?: RequestBasedSli;
	readonly threshold?: number;
}
export interface RequestBasedSli {
	readonly distributionCut?: DistributionCut;
	readonly goodTotalRatio?: TimeSeriesRatio;
}
export interface ServiceLevelIndicator {
	readonly basicSli?: BasicSli;
	readonly requestBased?: RequestBasedSli;
	readonly windowsBased?: WindowsBasedSli;
}
export interface ServiceLevelObjective {
	readonly calendarPeriod?: string;
	readonly displayName?: string;
	readonly goal?: number;
	readonly name?: string;
	readonly rollingPeriod?: string;
	readonly serviceLevelIndicator?: ServiceLevelIndicator;
	readonly userLabels?: { [P in string]: string };
}
export interface TimeSeriesRatio {
	readonly badServiceFilter?: string;
	readonly goodServiceFilter?: string;
	readonly totalServiceFilter?: string;
}
export interface WindowsBasedSli {
	readonly goodBadMetricFilter?: string;
	readonly goodTotalRatioThreshold?: PerformanceThreshold;
	readonly metricMeanInRange?: MetricRange;
	readonly metricSumInRange?: MetricRange;
	readonly windowPeriod?: string;
}
export default {
	ServicesServiceLevelObjectives: ServicesServiceLevelObjectives,
};
