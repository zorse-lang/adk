import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ProjectsCollectdTimeSeries
	extends GdmResource<ProjectsCollectdTimeSeriesComponentInputs>
	implements ProjectsCollectdTimeSeriesComponentOutputs
{
	constructor(entity: ADKEntity, options: ProjectsCollectdTimeSeriesComponentInputs) {
		super(entity, options.name, "monitoring.v3.ProjectsCollectdTimeSeries", options);
	}
}
export interface ProjectsCollectdTimeSeriesComponentOutputs {}
export interface ProjectsCollectdTimeSeriesComponentInputs {
	readonly collectdPayloads?: CollectdPayload[] | undefined;
	readonly collectdVersion?: string | undefined;
	readonly name: string;
	readonly resource?: MonitoredResource | undefined;
	readonly type: string;
}
export interface BucketOptions {
	readonly explicitBuckets?: Explicit | undefined;
	readonly exponentialBuckets?: Exponential | undefined;
	readonly linearBuckets?: Linear | undefined;
}
export interface CollectdPayload {
	readonly endTime?: string | undefined;
	readonly metadata?: { [P in string]: TypedValue } | undefined;
	readonly plugin?: string | undefined;
	readonly pluginInstance?: string | undefined;
	readonly startTime?: string | undefined;
	readonly type?: string | undefined;
	readonly typeInstance?: string | undefined;
	readonly values?: CollectdValue[] | undefined;
}
export interface CollectdValue {
	readonly dataSourceName?: string | undefined;
	readonly dataSourceType?: string | undefined;
	readonly value?: TypedValue | undefined;
}
export interface CreateCollectdTimeSeriesRequest {
	readonly collectdPayloads?: CollectdPayload[] | undefined;
	readonly collectdVersion?: string | undefined;
	readonly resource?: MonitoredResource | undefined;
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
export interface MonitoredResource {
	readonly labels: { [P in string]: string };
	readonly type: string;
}
export interface Range {
	readonly max?: number | undefined;
	readonly min?: number | undefined;
}
export interface TypedValue {
	readonly boolValue?: boolean | undefined;
	readonly distributionValue?: Distribution | undefined;
	readonly doubleValue?: number | undefined;
	readonly int64Value?: string | undefined;
	readonly stringValue?: string | undefined;
}
export default {
	ProjectsCollectdTimeSeries: ProjectsCollectdTimeSeries,
};
