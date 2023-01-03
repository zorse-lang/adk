import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ProjectsMetrics
	extends GdmResource<ProjectsMetricsComponentInputs>
	implements ProjectsMetricsComponentOutputs
{
	constructor(entity: ADKEntity, options: ProjectsMetricsComponentInputs) {
		super(entity, options.name, "logging.v2.ProjectsMetrics", options);
	}
	public readonly createTime?: string | undefined;
	public readonly metricDescriptor?: MetricDescriptor | undefined;
	public readonly updateTime?: string | undefined;
}
export interface ProjectsMetricsComponentOutputs {
	readonly createTime?: string | undefined;
	readonly metricDescriptor?: MetricDescriptor | undefined;
	readonly updateTime?: string | undefined;
}
export interface ProjectsMetricsComponentInputs {
	readonly bucketName?: string | undefined;
	readonly bucketOptions?: BucketOptions | undefined;
	readonly description?: string | undefined;
	readonly disabled?: boolean | undefined;
	readonly filter: string;
	readonly labelExtractors?: { [P in string]: string } | undefined;
	readonly name: string;
	readonly parent: string;
	readonly resolution?: string | undefined;
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
export interface LabelMapping {
	readonly destinationMetricLabel?: string | undefined;
	readonly destinationResourceLabel?: string | undefined;
	readonly sourceLabel?: string | undefined;
}
export interface Linear {
	readonly numFiniteBuckets?: number | undefined;
	readonly offset?: number | undefined;
	readonly width?: number | undefined;
}
export interface LogMetric {
	readonly bucketName?: string | undefined;
	readonly bucketOptions?: BucketOptions | undefined;
	readonly createTime?: string | undefined;
	readonly description?: string | undefined;
	readonly disabled?: boolean | undefined;
	readonly filter: string;
	readonly labelExtractors?: { [P in string]: string } | undefined;
	readonly metricDescriptor?: MetricDescriptor | undefined;
	readonly name: string;
	readonly resolution?: string | undefined;
	readonly updateTime?: string | undefined;
	readonly valueExtractor?: string | undefined;
	readonly version?: string | undefined;
}
export interface MetricDescriptor {
	readonly description?: string | undefined;
	readonly displayName?: string | undefined;
	readonly labels?: LabelDescriptor[] | undefined;
	readonly launchStage?: string | undefined;
	readonly metadata?: MetricDescriptorMetadata | undefined;
	readonly metricKind?: string | undefined;
	readonly monitoredResourceTypes?: string[] | undefined;
	readonly monitoringMigration?: MonitoringMigration | undefined;
	readonly name?: string | undefined;
	readonly type?: string | undefined;
	readonly unit?: string | undefined;
	readonly valueType?: string | undefined;
	readonly visibilityRestriction?: string | undefined;
}
export interface MetricDescriptorMetadata {
	readonly ingestDelay?: string | undefined;
	readonly launchStage?: string | undefined;
	readonly samplePeriod?: string | undefined;
}
export interface MetricMapping {
	readonly labelMappings?: LabelMapping[] | undefined;
	readonly metric?: string | undefined;
	readonly monitoredResource?: string | undefined;
}
export interface MonitoringMigration {
	readonly metricMappings?: MetricMapping | undefined;
	readonly monitoringBackend?: string | undefined;
}
export default {
	ProjectsMetrics: ProjectsMetrics,
};
