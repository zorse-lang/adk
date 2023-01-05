import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class Projects extends GdmResource<ProjectsComponentInputs> implements ProjectsComponentOutputs {
	constructor(entity: ADKEntity, options: ProjectsComponentInputs) {
		super(entity, options.name, "bigquery.v2.Projects", options);
	}
}
export interface ProjectsComponentOutputs {}
export interface ProjectsComponentInputs {
	readonly name: string;
}
export default {
	Projects: Projects,
};
