import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class Projects extends GdmResource<ProjectsComponentInputs> implements ProjectsComponentOutputs {
	constructor(entity: ADKEntity, options: ProjectsComponentInputs) {
		super(entity, options.name, "logging.v2.Projects", options);
	}
}
export interface ProjectsComponentOutputs {}
export interface ProjectsComponentInputs {
	readonly type: string;
	readonly name: string;
}
export default {
	Projects: Projects,
};
