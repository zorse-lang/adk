import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ProjectsInstancesDatabasesSessions
	extends GdmResource<ProjectsInstancesDatabasesSessionsComponentInputs>
	implements ProjectsInstancesDatabasesSessionsComponentOutputs
{
	constructor(entity: ADKEntity, options: ProjectsInstancesDatabasesSessionsComponentInputs) {
		super(entity, options.name, "spanner.v1.ProjectsInstancesDatabasesSessions", options);
	}
	public readonly approximateLastUseTime?: string | undefined;
	public readonly createTime?: string | undefined;
}
export interface ProjectsInstancesDatabasesSessionsComponentOutputs {
	readonly approximateLastUseTime?: string | undefined;
	readonly createTime?: string | undefined;
}
export interface ProjectsInstancesDatabasesSessionsComponentInputs {
	readonly creatorRole?: string | undefined;
	readonly database: string;
	readonly labels?: { [P in string]: string } | undefined;
	readonly name: string;
	readonly session: Session;
	readonly type: string;
}
export interface CreateSessionRequest {
	readonly session: Session;
}
export interface Session {
	readonly approximateLastUseTime?: string | undefined;
	readonly createTime?: string | undefined;
	readonly creatorRole?: string | undefined;
	readonly labels?: { [P in string]: string } | undefined;
	readonly name?: string | undefined;
}
export default {
	ProjectsInstancesDatabasesSessions: ProjectsInstancesDatabasesSessions,
};
