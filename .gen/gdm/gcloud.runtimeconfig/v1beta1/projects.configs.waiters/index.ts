import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ProjectsConfigsWaiters
	extends GdmResource<ProjectsConfigsWaitersComponentInputs>
	implements ProjectsConfigsWaitersComponentOutputs
{
	constructor(entity: ADKEntity, options: ProjectsConfigsWaitersComponentInputs) {
		super(entity, options.name, "runtimeconfig.v1beta1.ProjectsConfigsWaiters", options);
	}
	public readonly createTime?: string;
	public readonly done?: boolean;
	public readonly error?: Status;
}
export interface ProjectsConfigsWaitersComponentOutputs {
	readonly createTime?: string;
	readonly done?: boolean;
	readonly error?: Status;
}
export interface ProjectsConfigsWaitersComponentInputs {
	readonly failure?: EndCondition;
	readonly name: string;
	readonly parent: string;
	readonly requestId?: string;
	readonly success?: EndCondition;
	readonly timeout?: string;
}
export interface Cardinality {
	readonly number?: number;
	readonly path?: string;
}
export interface EndCondition {
	readonly cardinality?: Cardinality;
}
export interface Status {
	readonly code?: number;
	readonly details?: Array<{ [P in string]: any }>;
	readonly message?: string;
}
export interface Waiter {
	readonly createTime?: string;
	readonly done?: boolean;
	readonly error?: Status;
	readonly failure?: EndCondition;
	readonly name?: string;
	readonly success?: EndCondition;
	readonly timeout?: string;
}
export default {
	ProjectsConfigsWaiters: ProjectsConfigsWaiters,
};
