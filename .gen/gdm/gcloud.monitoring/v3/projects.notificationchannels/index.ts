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
	readonly creationRecord?: MutationRecord;
	readonly description?: string;
	readonly displayName?: string;
	readonly enabled?: boolean;
	readonly labels?: { [P in string]: string };
	readonly mutationRecords?: MutationRecord[];
	readonly name: string;
	readonly userLabels?: { [P in string]: string };
	readonly verificationStatus?: string;
}
export interface MutationRecord {
	readonly mutatedBy?: string;
	readonly mutateTime?: string;
}
export interface NotificationChannel {
	readonly creationRecord?: MutationRecord;
	readonly description?: string;
	readonly displayName?: string;
	readonly enabled?: boolean;
	readonly labels?: { [P in string]: string };
	readonly mutationRecords?: MutationRecord[];
	readonly name?: string;
	readonly type?: string;
	readonly userLabels?: { [P in string]: string };
	readonly verificationStatus?: string;
}
export default {
	ProjectsNotificationChannels: ProjectsNotificationChannels,
};
