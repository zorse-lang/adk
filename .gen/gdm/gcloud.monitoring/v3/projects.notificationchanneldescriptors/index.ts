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
	readonly description?: string | undefined;
	readonly displayName?: string | undefined;
	readonly labels?: LabelDescriptor[] | undefined;
	readonly launchStage?: string | undefined;
	readonly name: string;
	readonly supportedTiers?: string[] | undefined;
	readonly type: string;
}
export interface LabelDescriptor {
	readonly description?: string | undefined;
	readonly key?: string | undefined;
	readonly valueType?: string | undefined;
}
export interface NotificationChannelDescriptor {
	readonly description?: string | undefined;
	readonly displayName?: string | undefined;
	readonly labels?: LabelDescriptor[] | undefined;
	readonly launchStage?: string | undefined;
	readonly name?: string | undefined;
	readonly supportedTiers?: string[] | undefined;
	readonly type?: string | undefined;
}
export default {
	ProjectsNotificationChannelDescriptors: ProjectsNotificationChannelDescriptors,
};
