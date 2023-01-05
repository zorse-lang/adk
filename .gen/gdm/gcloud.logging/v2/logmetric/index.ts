import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class LogMetric extends GdmResource<LogMetricComponentInputs> implements LogMetricComponentOutputs {
	constructor(entity: ADKEntity, options: LogMetricComponentInputs) {
		super(entity, options.name, "logging.v2.LogMetric", options);
	}
	public readonly createTime?: string;
	public readonly metricDescriptor?: MetricDescriptor;
	public readonly updateTime?: string;
}
export interface LogMetricComponentOutputs {
	readonly createTime?: string;
	readonly metricDescriptor?: MetricDescriptor;
	readonly updateTime?: string;
}
export interface LogMetricComponentInputs {
	readonly bucketName?: string;
	readonly bucketOptions?: BucketOptions;
	readonly description?: string;
	readonly disabled?: boolean;
	readonly filter: string;
	readonly labelExtractors?: { [P in string]: string };
	readonly name: string;
	readonly valueExtractor?: string;
	readonly version?: string;
}
export interface BucketOptions {
	readonly explicitBuckets?: Explicit;
	readonly exponentialBuckets?: Exponential;
	readonly linearBuckets?: Linear;
}
export interface Explicit {
	readonly bounds?: number[];
}
export interface Exponential {
	readonly growthFactor?: number;
	readonly numFiniteBuckets?: number;
	readonly scale?: number;
}
export interface LabelDescriptor {
	readonly description?: string;
	readonly key?: string;
	readonly valueType?: string;
}
export interface Linear {
	readonly numFiniteBuckets?: number;
	readonly offset?: number;
	readonly width?: number;
}
export interface MetricDescriptor {
	readonly description?: string;
	readonly displayName?: string;
	readonly labels?: LabelDescriptor[];
	readonly launchStage?: string;
	readonly metadata?: MetricDescriptorMetadata;
	readonly metricKind?: string;
	readonly monitoredResourceTypes?: string[];
	readonly name?: string;
	readonly type?: string;
	readonly unit?: string;
	readonly valueType?: string;
}
export interface MetricDescriptorMetadata {
	readonly ingestDelay?: string;
	readonly launchStage?: string;
	readonly samplePeriod?: string;
}
export default {
	LogMetric: LogMetric,
};
