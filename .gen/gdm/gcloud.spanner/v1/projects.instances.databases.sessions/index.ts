import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ProjectsInstancesDatabasesSessions
	extends GdmResource<ProjectsInstancesDatabasesSessionsComponentInputs>
	implements ProjectsInstancesDatabasesSessionsComponentOutputs
{
	constructor(entity: ADKEntity, options: ProjectsInstancesDatabasesSessionsComponentInputs) {
		super(entity, options.name, "spanner.v1.ProjectsInstancesDatabasesSessions", options);
	}
	public readonly approximateLastUseTime?: string;
	public readonly createTime?: string;
}
export interface ProjectsInstancesDatabasesSessionsComponentOutputs {
	readonly approximateLastUseTime?: string;
	readonly createTime?: string;
}
export interface ProjectsInstancesDatabasesSessionsComponentInputs {
	readonly creatorRole?: string;
	readonly database: string;
	readonly labels?: { [P in string]: string };
	readonly name: string;
	readonly session: Session;
}
export interface CreateSessionRequest {
	readonly session: Session;
}
export interface Session {
	readonly approximateLastUseTime?: string;
	readonly createTime?: string;
	readonly creatorRole?: string;
	readonly labels?: { [P in string]: string };
	readonly name?: string;
}
export default {
	ProjectsInstancesDatabasesSessions: ProjectsInstancesDatabasesSessions,
};
