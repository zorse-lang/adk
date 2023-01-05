import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ProjectsNotificationChannelDescriptors
	extends GdmResource<ProjectsNotificationChannelDescriptorsComponentInputs>
	implements ProjectsNotificationChannelDescriptorsComponentOutputs
{
	constructor(entity: ADKEntity, options: ProjectsNotificationChannelDescriptorsComponentInputs) {
		super(entity, options.name, "monitoring.v3.ProjectsNotificationChannelDescriptors", options);
	}
}
export interface ProjectsNotificationChannelDescriptorsComponentOutputs {}
export interface ProjectsNotificationChannelDescriptorsComponentInputs {
	readonly description?: string;
	readonly displayName?: string;
	readonly labels?: LabelDescriptor[];
	readonly launchStage?: string;
	readonly name: string;
	readonly supportedTiers?: string[];
}
export interface LabelDescriptor {
	readonly description?: string;
	readonly key?: string;
	readonly valueType?: string;
}
export interface NotificationChannelDescriptor {
	readonly description?: string;
	readonly displayName?: string;
	readonly labels?: LabelDescriptor[];
	readonly launchStage?: string;
	readonly name?: string;
	readonly supportedTiers?: string[];
	readonly type?: string;
}
export default {
	ProjectsNotificationChannelDescriptors: ProjectsNotificationChannelDescriptors,
};
