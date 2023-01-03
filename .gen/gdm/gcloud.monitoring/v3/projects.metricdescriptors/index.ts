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
	readonly description?: string | undefined;
	readonly displayName?: string | undefined;
	readonly labels?: LabelDescriptor[] | undefined;
	readonly launchStage?: string | undefined;
	readonly metadata?: MetricDescriptorMetadata | undefined;
	readonly metricKind?: string | undefined;
	readonly monitoredResourceTypes?: string[] | undefined;
	readonly name: string;
	readonly type: string;
	readonly unit?: string | undefined;
	readonly valueType?: string | undefined;
}
export interface LabelDescriptor {
	readonly description?: string | undefined;
	readonly key?: string | undefined;
	readonly valueType?: string | undefined;
}
export interface MetricDescriptor {
	readonly description?: string | undefined;
	readonly displayName?: string | undefined;
	readonly labels?: LabelDescriptor[] | undefined;
	readonly launchStage?: string | undefined;
	readonly metadata?: MetricDescriptorMetadata | undefined;
	readonly metricKind?: string | undefined;
	readonly monitoredResourceTypes?: string[] | undefined;
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
	ProjectsMetricDescriptors: ProjectsMetricDescriptors,
};
