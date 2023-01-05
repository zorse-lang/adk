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
	readonly collectdPayloads?: CollectdPayload[];
	readonly collectdVersion?: string;
	readonly name: string;
	readonly resource?: MonitoredResource;
}
export interface BucketOptions {
	readonly explicitBuckets?: Explicit;
	readonly exponentialBuckets?: Exponential;
	readonly linearBuckets?: Linear;
}
export interface CollectdPayload {
	readonly endTime?: string;
	readonly metadata?: { [P in string]: TypedValue };
	readonly plugin?: string;
	readonly pluginInstance?: string;
	readonly startTime?: string;
	readonly type?: string;
	readonly typeInstance?: string;
	readonly values?: CollectdValue[];
}
export interface CollectdValue {
	readonly dataSourceName?: string;
	readonly dataSourceType?: string;
	readonly value?: TypedValue;
}
export interface CreateCollectdTimeSeriesRequest {
	readonly collectdPayloads?: CollectdPayload[];
	readonly collectdVersion?: string;
	readonly resource?: MonitoredResource;
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
export interface MonitoredResource {
	readonly labels: { [P in string]: string };
	readonly type: string;
}
export interface Range {
	readonly max?: number;
	readonly min?: number;
}
export interface TypedValue {
	readonly boolValue?: boolean;
	readonly distributionValue?: Distribution;
	readonly doubleValue?: number;
	readonly int64Value?: string;
	readonly stringValue?: string;
}
export default {
	ProjectsCollectdTimeSeries: ProjectsCollectdTimeSeries,
};
