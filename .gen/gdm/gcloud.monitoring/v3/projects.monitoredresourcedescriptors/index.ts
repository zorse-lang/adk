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
	readonly description?: string | undefined;
	readonly displayName?: string | undefined;
	readonly labels: LabelDescriptor[];
	readonly launchStage?: string | undefined;
	readonly name: string;
	readonly type: string;
}
export interface LabelDescriptor {
	readonly description?: string | undefined;
	readonly key?: string | undefined;
	readonly valueType?: string | undefined;
}
export interface MonitoredResourceDescriptor {
	readonly description?: string | undefined;
	readonly displayName?: string | undefined;
	readonly labels: LabelDescriptor[];
	readonly launchStage?: string | undefined;
	readonly name?: string | undefined;
	readonly type: string;
}
export default {
	ProjectsMonitoredResourceDescriptors: ProjectsMonitoredResourceDescriptors,
};
