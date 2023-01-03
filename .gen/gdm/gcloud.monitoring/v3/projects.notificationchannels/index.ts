import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ProjectsNotificationChannels
	extends GdmResource<ProjectsNotificationChannelsComponentInputs>
	implements ProjectsNotificationChannelsComponentOutputs
{
	constructor(entity: ADKEntity, options: ProjectsNotificationChannelsComponentInputs) {
		super(entity, options.name, "monitoring.v3.ProjectsNotificationChannels", options);
	}
}
export interface ProjectsNotificationChannelsComponentOutputs {}
export interface ProjectsNotificationChannelsComponentInputs {
	readonly creationRecord?: MutationRecord | undefined;
	readonly description?: string | undefined;
	readonly displayName?: string | undefined;
	readonly enabled?: boolean | undefined;
	readonly labels?: { [P in string]: string } | undefined;
	readonly mutationRecords?: MutationRecord[] | undefined;
	readonly name: string;
	readonly type: string;
	readonly userLabels?: { [P in string]: string } | undefined;
	readonly verificationStatus?: string | undefined;
}
export interface MutationRecord {
	readonly mutatedBy?: string | undefined;
	readonly mutateTime?: string | undefined;
}
export interface NotificationChannel {
	readonly creationRecord?: MutationRecord | undefined;
	readonly description?: string | undefined;
	readonly displayName?: string | undefined;
	readonly enabled?: boolean | undefined;
	readonly labels?: { [P in string]: string } | undefined;
	readonly mutationRecords?: MutationRecord[] | undefined;
	readonly name?: string | undefined;
	readonly type?: string | undefined;
	readonly userLabels?: { [P in string]: string } | undefined;
	readonly verificationStatus?: string | undefined;
}
export default {
	ProjectsNotificationChannels: ProjectsNotificationChannels,
};
