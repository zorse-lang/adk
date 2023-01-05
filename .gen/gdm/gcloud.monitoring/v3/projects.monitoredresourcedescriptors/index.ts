import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ProjectsMonitoredResourceDescriptors
	extends GdmResource<ProjectsMonitoredResourceDescriptorsComponentInputs>
	implements ProjectsMonitoredResourceDescriptorsComponentOutputs
{
	constructor(entity: ADKEntity, options: ProjectsMonitoredResourceDescriptorsComponentInputs) {
		super(entity, options.name, "monitoring.v3.ProjectsMonitoredResourceDescriptors", options);
	}
}
export interface ProjectsMonitoredResourceDescriptorsComponentOutputs {}
export interface ProjectsMonitoredResourceDescriptorsComponentInputs {
	readonly description?: string;
	readonly displayName?: string;
	readonly labels: LabelDescriptor[];
	readonly launchStage?: string;
	readonly name: string;
}
export interface LabelDescriptor {
	readonly description?: string;
	readonly key?: string;
	readonly valueType?: string;
}
export interface MonitoredResourceDescriptor {
	readonly description?: string;
	readonly displayName?: string;
	readonly labels: LabelDescriptor[];
	readonly launchStage?: string;
	readonly name?: string;
	readonly type: string;
}
export default {
	ProjectsMonitoredResourceDescriptors: ProjectsMonitoredResourceDescriptors,
};
