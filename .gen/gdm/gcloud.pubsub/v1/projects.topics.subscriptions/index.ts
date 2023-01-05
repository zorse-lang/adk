import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ProjectsTopicsSubscriptions
	extends GdmResource<ProjectsTopicsSubscriptionsComponentInputs>
	implements ProjectsTopicsSubscriptionsComponentOutputs
{
	constructor(entity: ADKEntity, options: ProjectsTopicsSubscriptionsComponentInputs) {
		super(entity, options.name, "pubsub.v1.ProjectsTopicsSubscriptions", options);
	}
}
export interface ProjectsTopicsSubscriptionsComponentOutputs {}
export interface ProjectsTopicsSubscriptionsComponentInputs {
	readonly name: string;
}
export default {
	ProjectsTopicsSubscriptions: ProjectsTopicsSubscriptions,
};
