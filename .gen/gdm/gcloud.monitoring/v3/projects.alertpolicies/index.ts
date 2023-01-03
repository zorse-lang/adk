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
	readonly alertStrategy?: AlertStrategy | undefined;
	readonly combiner?: string | undefined;
	readonly conditions?: Condition[] | undefined;
	readonly creationRecord?: MutationRecord | undefined;
	readonly displayName?: string | undefined;
	readonly documentation?: Documentation | undefined;
	readonly enabled?: boolean | undefined;
	readonly mutationRecord?: MutationRecord | undefined;
	readonly name: string;
	readonly notificationChannels?: string[] | undefined;
	readonly userLabels?: { [P in string]: string } | undefined;
	readonly validity?: Status | undefined;
	readonly type: string;
}
export interface Aggregation {
	readonly alignmentPeriod?: string | undefined;
	readonly crossSeriesReducer?: string | undefined;
	readonly groupByFields?: string[] | undefined;
	readonly perSeriesAligner?: string | undefined;
}
export interface AlertPolicy {
	readonly alertStrategy?: AlertStrategy | undefined;
	readonly combiner?: string | undefined;
	readonly conditions?: Condition[] | undefined;
	readonly creationRecord?: MutationRecord | undefined;
	readonly displayName?: string | undefined;
	readonly documentation?: Documentation | undefined;
	readonly enabled?: boolean | undefined;
	readonly mutationRecord?: MutationRecord | undefined;
	readonly name: string;
	readonly notificationChannels?: string[] | undefined;
	readonly userLabels?: { [P in string]: string } | undefined;
	readonly validity?: Status | undefined;
}
export interface AlertStrategy {
	readonly autoClose?: string | undefined;
	readonly notificationRateLimit: NotificationRateLimit;
}
export interface Condition {
	readonly conditionAbsent?: MetricAbsence | undefined;
	readonly conditionMatchedLog?: LogMatch | undefined;
	readonly conditionMonitoringQueryLanguage?: MonitoringQueryLanguageCondition | undefined;
	readonly conditionThreshold?: MetricThreshold | undefined;
	readonly displayName?: string | undefined;
	readonly name: string;
}
export interface Documentation {
	readonly content?: string | undefined;
	readonly mimeType?: string | undefined;
}
export interface ForecastOptions {
	readonly forecastHorizon: string;
}
export interface LogMatch {
	readonly filter: string;
	readonly labelExtractors?: { [P in string]: string } | undefined;
}
export interface MetricAbsence {
	readonly aggregations?: Aggregation[] | undefined;
	readonly duration?: string | undefined;
	readonly filter: string;
	readonly trigger?: Trigger | undefined;
}
export interface MetricThreshold {
	readonly aggregations?: Aggregation[] | undefined;
	readonly comparison?: string | undefined;
	readonly denominatorAggregations?: Aggregation[] | undefined;
	readonly denominatorFilter?: string | undefined;
	readonly duration?: string | undefined;
	readonly evaluationMissingData?: string | undefined;
	readonly filter: string;
	readonly forecastOptions?: ForecastOptions | undefined;
	readonly thresholdValue?: number | undefined;
	readonly trigger?: Trigger | undefined;
}
export interface MonitoringQueryLanguageCondition {
	readonly duration?: string | undefined;
	readonly evaluationMissingData?: string | undefined;
	readonly query?: string | undefined;
	readonly trigger?: Trigger | undefined;
}
export interface MutationRecord {
	readonly mutatedBy?: string | undefined;
	readonly mutateTime?: string | undefined;
}
export interface NotificationRateLimit {
	readonly period?: string | undefined;
}
export interface Status {
	readonly code?: number | undefined;
	readonly details?: Array<{ [P in string]: any }> | undefined;
	readonly message?: string | undefined;
}
export interface Trigger {
	readonly count?: number | undefined;
	readonly percent?: number | undefined;
}
export default {
	ProjectsAlertPolicies: ProjectsAlertPolicies,
};
