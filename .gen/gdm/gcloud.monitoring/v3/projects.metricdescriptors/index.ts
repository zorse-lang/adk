import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ProjectsMetricDescriptors
	extends GdmResource<ProjectsMetricDescriptorsComponentInputs>
	implements ProjectsMetricDescriptorsComponentOutputs
{
	constructor(entity: ADKEntity, options: ProjectsMetricDescriptorsComponentInputs) {
		super(entity, options.name, "monitoring.v3.ProjectsMetricDescriptors", options);
	}
}
export interface ProjectsMetricDescriptorsComponentOutputs {}
export interface ProjectsMetricDescriptorsComponentInputs {
	readonly description?: string;
	readonly displayName?: string;
	readonly labels?: LabelDescriptor[];
	readonly launchStage?: string;
	readonly metadata?: MetricDescriptorMetadata;
	readonly metricKind?: string;
	readonly monitoredResourceTypes?: string[];
	readonly name: string;
	readonly unit?: string;
	readonly valueType?: string;
}
export interface LabelDescriptor {
	readonly description?: string;
	readonly key?: string;
	readonly valueType?: string;
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
	ProjectsMetricDescriptors: ProjectsMetricDescriptors,
};
