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
}
export interface BucketOptions {
	readonly explicitBuckets?: Explicit;
	readonly exponentialBuckets?: Exponential;
	readonly linearBuckets?: Linear;
}
export interface CreateTimeSeriesRequest {
	readonly timeSeries: TimeSeries[];
}
export interface Distribution {
	readonly bucketCounts: string[];
	readonly bucketOptions: BucketOptions;
	readonly count?: string;
	readonly exemplars?: Exemplar[];
	readonly mean?: number;
	readonly range?: Range;
	readonly sumOfSquaredDeviation?: number;
}
export interface Exemplar {
	readonly attachments?: Array<{ [P in string]: any }>;
	readonly timestamp?: string;
	readonly value?: number;
}
export interface Explicit {
	readonly bounds?: number[];
}
export interface Exponential {
	readonly growthFactor?: number;
	readonly numFiniteBuckets?: number;
	readonly scale?: number;
}
export interface Linear {
	readonly numFiniteBuckets?: number;
	readonly offset?: number;
	readonly width?: number;
}
export interface Metric {
	readonly labels?: { [P in string]: string };
	readonly type?: string;
}
export interface MonitoredResource {
	readonly labels: { [P in string]: string };
	readonly type: string;
}
export interface MonitoredResourceMetadata {}
export interface Point {
	readonly interval?: TimeInterval;
	readonly value?: TypedValue;
}
export interface Range {
	readonly max?: number;
	readonly min?: number;
}
export interface TimeInterval {
	readonly endTime: string;
	readonly startTime?: string;
}
export interface TimeSeries {
	readonly metric?: Metric;
	readonly metricKind?: string;
	readonly points?: Point[];
	readonly resource?: MonitoredResource;
	readonly unit?: string;
	readonly valueType?: string;
}
export interface TypedValue {
	readonly boolValue?: boolean;
	readonly distributionValue?: Distribution;
	readonly doubleValue?: number;
	readonly int64Value?: string;
	readonly stringValue?: string;
}
export default {
	ProjectsTimeSeries: ProjectsTimeSeries,
};
