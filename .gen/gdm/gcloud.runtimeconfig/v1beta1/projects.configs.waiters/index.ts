import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ProjectsConfigsWaiters
	extends GdmResource<ProjectsConfigsWaitersComponentInputs>
	implements ProjectsConfigsWaitersComponentOutputs
{
	constructor(entity: ADKEntity, options: ProjectsConfigsWaitersComponentInputs) {
		super(entity, options.name, "runtimeconfig.v1beta1.ProjectsConfigsWaiters", options);
	}
	public readonly createTime?: string | undefined;
	public readonly done?: boolean | undefined;
	public readonly error?: Status | undefined;
}
export interface ProjectsConfigsWaitersComponentOutputs {
	readonly createTime?: string | undefined;
	readonly done?: boolean | undefined;
	readonly error?: Status | undefined;
}
export interface ProjectsConfigsWaitersComponentInputs {
	readonly failure?: EndCondition | undefined;
	readonly name: string;
	readonly parent: string;
	readonly requestId?: string | undefined;
	readonly success?: EndCondition | undefined;
	readonly timeout?: string | undefined;
	readonly type: string;
}
export interface Cardinality {
	readonly number?: number | undefined;
	readonly path?: string | undefined;
}
export interface EndCondition {
	readonly cardinality?: Cardinality | undefined;
}
export interface Status {
	readonly code?: number | undefined;
	readonly details?: Array<{ [P in string]: any }> | undefined;
	readonly message?: string | undefined;
}
export interface Waiter {
	readonly createTime?: string | undefined;
	readonly done?: boolean | undefined;
	readonly error?: Status | undefined;
	readonly failure?: EndCondition | undefined;
	readonly name?: string | undefined;
	readonly success?: EndCondition | undefined;
	readonly timeout?: string | undefined;
}
export default {
	ProjectsConfigsWaiters: ProjectsConfigsWaiters,
};
