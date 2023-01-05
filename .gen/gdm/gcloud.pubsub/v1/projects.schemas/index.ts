import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ProjectsSchemas
	extends GdmResource<ProjectsSchemasComponentInputs>
	implements ProjectsSchemasComponentOutputs
{
	constructor(entity: ADKEntity, options: ProjectsSchemasComponentInputs) {
		super(entity, options.name, "pubsub.v1.ProjectsSchemas", options);
	}
	public readonly revisionCreateTime?: string;
	public readonly revisionId?: string;
}
export interface ProjectsSchemasComponentOutputs {
	readonly revisionCreateTime?: string;
	readonly revisionId?: string;
}
export interface ProjectsSchemasComponentInputs {
	readonly definition?: string;
	readonly name: string;
	readonly parent: string;
	readonly schemaId?: string;
}
export interface Schema {
	readonly definition?: string;
	readonly name: string;
	readonly revisionCreateTime?: string;
	readonly revisionId?: string;
	readonly type?: string;
}
export default {
	ProjectsSchemas: ProjectsSchemas,
};
