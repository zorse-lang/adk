import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ProjectsMetrics
	extends GdmResource<ProjectsMetricsComponentInputs>
	implements ProjectsMetricsComponentOutputs
{
	constructor(entity: ADKEntity, options: ProjectsMetricsComponentInputs) {
		super(entity, options.name, "logging.v2.ProjectsMetrics", options);
	}
	public readonly createTime?: string;
	public readonly metricDescriptor?: MetricDescriptor;
	public readonly updateTime?: string;
}
export interface ProjectsMetricsComponentOutputs {
	readonly createTime?: string;
	readonly metricDescriptor?: MetricDescriptor;
	readonly updateTime?: string;
}
export interface ProjectsMetricsComponentInputs {
	readonly bucketName?: string;
	readonly bucketOptions?: BucketOptions;
	readonly description?: string;
	readonly disabled?: boolean;
	readonly filter: string;
	readonly labelExtractors?: { [P in string]: string };
	readonly name: string;
	readonly parent: string;
	readonly resolution?: string;
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
export interface LabelMapping {
	readonly destinationMetricLabel?: string;
	readonly destinationResourceLabel?: string;
	readonly sourceLabel?: string;
}
export interface Linear {
	readonly numFiniteBuckets?: number;
	readonly offset?: number;
	readonly width?: number;
}
export interface LogMetric {
	readonly bucketName?: string;
	readonly bucketOptions?: BucketOptions;
	readonly createTime?: string;
	readonly description?: string;
	readonly disabled?: boolean;
	readonly filter: string;
	readonly labelExtractors?: { [P in string]: string };
	readonly metricDescriptor?: MetricDescriptor;
	readonly name: string;
	readonly resolution?: string;
	readonly updateTime?: string;
	readonly valueExtractor?: string;
	readonly version?: string;
}
export interface MetricDescriptor {
	readonly description?: string;
	readonly displayName?: string;
	readonly labels?: LabelDescriptor[];
	readonly launchStage?: string;
	readonly metadata?: MetricDescriptorMetadata;
	readonly metricKind?: string;
	readonly monitoredResourceTypes?: string[];
	readonly monitoringMigration?: MonitoringMigration;
	readonly name?: string;
	readonly type?: string;
	readonly unit?: string;
	readonly valueType?: string;
	readonly visibilityRestriction?: string;
}
export interface MetricDescriptorMetadata {
	readonly ingestDelay?: string;
	readonly launchStage?: string;
	readonly samplePeriod?: string;
}
export interface MetricMapping {
	readonly labelMappings?: LabelMapping[];
	readonly metric?: string;
	readonly monitoredResource?: string;
}
export interface MonitoringMigration {
	readonly metricMappings?: MetricMapping;
	readonly monitoringBackend?: string;
}
export default {
	ProjectsMetrics: ProjectsMetrics,
};
