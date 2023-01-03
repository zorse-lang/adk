import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ProjectsSchemas
	extends GdmResource<ProjectsSchemasComponentInputs>
	implements ProjectsSchemasComponentOutputs
{
	constructor(entity: ADKEntity, options: ProjectsSchemasComponentInputs) {
		super(entity, options.name, "pubsub.v1.ProjectsSchemas", options);
	}
	public readonly revisionCreateTime?: string | undefined;
	public readonly revisionId?: string | undefined;
}
export interface ProjectsSchemasComponentOutputs {
	readonly revisionCreateTime?: string | undefined;
	readonly revisionId?: string | undefined;
}
export interface ProjectsSchemasComponentInputs {
	readonly definition?: string | undefined;
	readonly name: string;
	readonly parent: string;
	readonly schemaId?: string | undefined;
	readonly type: string;
}
export interface Schema {
	readonly definition?: string | undefined;
	readonly name: string;
	readonly revisionCreateTime?: string | undefined;
	readonly revisionId?: string | undefined;
	readonly type?: string | undefined;
}
export default {
	ProjectsSchemas: ProjectsSchemas,
};
