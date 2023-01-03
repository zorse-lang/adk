import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class LogMetric extends GdmResource<LogMetricComponentInputs> implements LogMetricComponentOutputs {
	constructor(entity: ADKEntity, options: LogMetricComponentInputs) {
		super(entity, options.name, "logging.v2beta1.LogMetric", options);
	}
	public readonly createTime?: string | undefined;
	public readonly metricDescriptor?: MetricDescriptor | undefined;
	public readonly updateTime?: string | undefined;
}
export interface LogMetricComponentOutputs {
	readonly createTime?: string | undefined;
	readonly metricDescriptor?: MetricDescriptor | undefined;
	readonly updateTime?: string | undefined;
}
export interface LogMetricComponentInputs {
	readonly bucketOptions?: BucketOptions | undefined;
	readonly description?: string | undefined;
	readonly filter: string;
	readonly labelExtractors?: { [P in string]: string } | undefined;
	readonly name: string;
	readonly valueExtractor?: string | undefined;
	readonly version?: string | undefined;
	readonly type: string;
}
export interface BucketOptions {
	readonly explicitBuckets?: Explicit | undefined;
	readonly exponentialBuckets?: Exponential | undefined;
	readonly linearBuckets?: Linear | undefined;
}
export interface Explicit {
	readonly bounds?: number[] | undefined;
}
export interface Exponential {
	readonly growthFactor?: number | undefined;
	readonly numFiniteBuckets?: number | undefined;
	readonly scale?: number | undefined;
}
export interface LabelDescriptor {
	readonly description?: string | undefined;
	readonly key?: string | undefined;
	readonly valueType?: string | undefined;
}
export interface Linear {
	readonly numFiniteBuckets?: number | undefined;
	readonly offset?: number | undefined;
	readonly width?: number | undefined;
}
export interface MetricDescriptor {
	readonly description?: string | undefined;
	readonly displayName?: string | undefined;
	readonly labels?: LabelDescriptor[] | undefined;
	readonly metadata?: MetricDescriptorMetadata | undefined;
	readonly metricKind?: string | undefined;
	readonly name?: string | undefined;
	readonly type?: string | undefined;
	readonly unit?: string | undefined;
	readonly valueType?: string | undefined;
}
export interface MetricDescriptorMetadata {
	readonly ingestDelay?: string | undefined;
	readonly launchStage?: string | undefined;
	readonly samplePeriod?: string | undefined;
}
export default {
	LogMetric: LogMetric,
};
