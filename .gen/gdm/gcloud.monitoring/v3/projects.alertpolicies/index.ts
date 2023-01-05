import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ProjectsAlertPolicies
	extends GdmResource<ProjectsAlertPoliciesComponentInputs>
	implements ProjectsAlertPoliciesComponentOutputs
{
	constructor(entity: ADKEntity, options: ProjectsAlertPoliciesComponentInputs) {
		super(entity, options.name, "monitoring.v3.ProjectsAlertPolicies", options);
	}
}
export interface ProjectsAlertPoliciesComponentOutputs {}
export interface ProjectsAlertPoliciesComponentInputs {
	readonly alertStrategy?: AlertStrategy;
	readonly combiner?: string;
	readonly conditions?: Condition[];
	readonly creationRecord?: MutationRecord;
	readonly displayName?: string;
	readonly documentation?: Documentation;
	readonly enabled?: boolean;
	readonly mutationRecord?: MutationRecord;
	readonly name: string;
	readonly notificationChannels?: string[];
	readonly userLabels?: { [P in string]: string };
	readonly validity?: Status;
}
export interface Aggregation {
	readonly alignmentPeriod?: string;
	readonly crossSeriesReducer?: string;
	readonly groupByFields?: string[];
	readonly perSeriesAligner?: string;
}
export interface AlertPolicy {
	readonly alertStrategy?: AlertStrategy;
	readonly combiner?: string;
	readonly conditions?: Condition[];
	readonly creationRecord?: MutationRecord;
	readonly displayName?: string;
	readonly documentation?: Documentation;
	readonly enabled?: boolean;
	readonly mutationRecord?: MutationRecord;
	readonly name: string;
	readonly notificationChannels?: string[];
	readonly userLabels?: { [P in string]: string };
	readonly validity?: Status;
}
export interface AlertStrategy {
	readonly autoClose?: string;
	readonly notificationRateLimit: NotificationRateLimit;
}
export interface Condition {
	readonly conditionAbsent?: MetricAbsence;
	readonly conditionMatchedLog?: LogMatch;
	readonly conditionMonitoringQueryLanguage?: MonitoringQueryLanguageCondition;
	readonly conditionThreshold?: MetricThreshold;
	readonly displayName?: string;
	readonly name: string;
}
export interface Documentation {
	readonly content?: string;
	readonly mimeType?: string;
}
export interface ForecastOptions {
	readonly forecastHorizon: string;
}
export interface LogMatch {
	readonly filter: string;
	readonly labelExtractors?: { [P in string]: string };
}
export interface MetricAbsence {
	readonly aggregations?: Aggregation[];
	readonly duration?: string;
	readonly filter: string;
	readonly trigger?: Trigger;
}
export interface MetricThreshold {
	readonly aggregations?: Aggregation[];
	readonly comparison?: string;
	readonly denominatorAggregations?: Aggregation[];
	readonly denominatorFilter?: string;
	readonly duration?: string;
	readonly evaluationMissingData?: string;
	readonly filter: string;
	readonly forecastOptions?: ForecastOptions;
	readonly thresholdValue?: number;
	readonly trigger?: Trigger;
}
export interface MonitoringQueryLanguageCondition {
	readonly duration?: string;
	readonly evaluationMissingData?: string;
	readonly query?: string;
	readonly trigger?: Trigger;
}
export interface MutationRecord {
	readonly mutatedBy?: string;
	readonly mutateTime?: string;
}
export interface NotificationRateLimit {
	readonly period?: string;
}
export interface Status {
	readonly code?: number;
	readonly details?: Array<{ [P in string]: any }>;
	readonly message?: string;
}
export interface Trigger {
	readonly count?: number;
	readonly percent?: number;
}
export default {
	ProjectsAlertPolicies: ProjectsAlertPolicies,
};
