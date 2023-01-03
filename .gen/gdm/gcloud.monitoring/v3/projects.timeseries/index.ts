import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ProjectsTimeSeries
	extends GdmResource<ProjectsTimeSeriesComponentInputs>
	implements ProjectsTimeSeriesComponentOutputs
{
	constructor(entity: ADKEntity, options: ProjectsTimeSeriesComponentInputs) {
		super(entity, options.name, "monitoring.v3.ProjectsTimeSeries", options);
	}
}
export interface ProjectsTimeSeriesComponentOutputs {}
export interface ProjectsTimeSeriesComponentInputs {
	readonly name: string;
	readonly timeSeries: TimeSeries[];
	readonly type: string;
}
export interface BucketOptions {
	readonly explicitBuckets?: Explicit | undefined;
	readonly exponentialBuckets?: Exponential | undefined;
	readonly linearBuckets?: Linear | undefined;
}
export interface CreateTimeSeriesRequest {
	readonly timeSeries: TimeSeries[];
}
export interface Distribution {
	readonly bucketCounts: string[];
	readonly bucketOptions: BucketOptions;
	readonly count?: string | undefined;
	readonly exemplars?: Exemplar[] | undefined;
	readonly mean?: number | undefined;
	readonly range?: Range | undefined;
	readonly sumOfSquaredDeviation?: number | undefined;
}
export interface Exemplar {
	readonly attachments?: Array<{ [P in string]: any }> | undefined;
	readonly timestamp?: string | undefined;
	readonly value?: number | undefined;
}
export interface Explicit {
	readonly bounds?: number[] | undefined;
}
export interface Exponential {
	readonly growthFactor?: number | undefined;
	readonly numFiniteBuckets?: number | undefined;
	readonly scale?: number | undefined;
}
export interface Linear {
	readonly numFiniteBuckets?: number | undefined;
	readonly offset?: number | undefined;
	readonly width?: number | undefined;
}
export interface Metric {
	readonly labels?: { [P in string]: string } | undefined;
	readonly type?: string | undefined;
}
export interface MonitoredResource {
	readonly labels: { [P in string]: string };
	readonly type: string;
}
export interface MonitoredResourceMetadata {}
export interface Point {
	readonly interval?: TimeInterval | undefined;
	readonly value?: TypedValue | undefined;
}
export interface Range {
	readonly max?: number | undefined;
	readonly min?: number | undefined;
}
export interface TimeInterval {
	readonly endTime: string;
	readonly startTime?: string | undefined;
}
export interface TimeSeries {
	readonly metric?: Metric | undefined;
	readonly metricKind?: string | undefined;
	readonly points?: Point[] | undefined;
	readonly resource?: MonitoredResource | undefined;
	readonly unit?: string | undefined;
	readonly valueType?: string | undefined;
}
export interface TypedValue {
	readonly boolValue?: boolean | undefined;
	readonly distributionValue?: Distribution | undefined;
	readonly doubleValue?: number | undefined;
	readonly int64Value?: string | undefined;
	readonly stringValue?: string | undefined;
}
export default {
	ProjectsTimeSeries: ProjectsTimeSeries,
};
