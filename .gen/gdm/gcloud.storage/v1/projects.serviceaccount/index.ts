import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ProjectsServiceAccount
	extends GdmResource<ProjectsServiceAccountComponentInputs>
	implements ProjectsServiceAccountComponentOutputs
{
	constructor(entity: ADKEntity, options: ProjectsServiceAccountComponentInputs) {
		super(entity, options.name, "storage.v1.ProjectsServiceAccount", options);
	}
}
export interface ProjectsServiceAccountComponentOutputs {}
export interface ProjectsServiceAccountComponentInputs {
	readonly email_address?: string;
	readonly kind?: string;
	readonly name: string;
}
export interface ServiceAccount {
	readonly email_address?: string;
	readonly kind?: string;
}
export default {
	ProjectsServiceAccount: ProjectsServiceAccount,
};
