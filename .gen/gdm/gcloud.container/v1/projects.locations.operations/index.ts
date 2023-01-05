import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ProjectsLocationsOperations
	extends GdmResource<ProjectsLocationsOperationsComponentInputs>
	implements ProjectsLocationsOperationsComponentOutputs
{
	constructor(entity: ADKEntity, options: ProjectsLocationsOperationsComponentInputs) {
		super(entity, options.name, "container.v1.ProjectsLocationsOperations", options);
	}
	public readonly endTime?: string;
	public readonly location?: string;
	public readonly progress?: OperationProgress;
	public readonly startTime?: string;
	public readonly statusMessage?: string;
}
export interface ProjectsLocationsOperationsComponentOutputs {
	readonly endTime?: string;
	readonly location?: string;
	readonly progress?: OperationProgress;
	readonly startTime?: string;
	readonly statusMessage?: string;
}
export interface ProjectsLocationsOperationsComponentInputs {
	readonly clusterConditions?: StatusCondition[];
	readonly detail?: string;
	readonly error?: Status;
	readonly name: string;
	readonly nodepoolConditions?: StatusCondition[];
	readonly operationType?: string;
	readonly selfLink?: string;
	readonly status?: string;
	readonly targetLink?: string;
	readonly zone?: string;
}
export interface Metric {
	readonly doubleValue?: number;
	readonly intValue?: string;
	readonly name: string;
	readonly stringValue?: string;
}
export interface Operation {
	readonly clusterConditions?: StatusCondition[];
	readonly detail?: string;
	readonly endTime?: string;
	readonly error?: Status;
	readonly location?: string;
	readonly name?: string;
	readonly nodepoolConditions?: StatusCondition[];
	readonly operationType?: string;
	readonly progress?: OperationProgress;
	readonly selfLink?: string;
	readonly startTime?: string;
	readonly status?: string;
	readonly statusMessage?: string;
	readonly targetLink?: string;
	readonly zone?: string;
}
export interface OperationProgress {
	readonly metrics?: Metric[];
	readonly name?: string;
	readonly stages?: OperationProgress[];
	readonly status?: string;
}
export interface Status {
	readonly code?: number;
	readonly details?: Array<{ [P in string]: any }>;
	readonly message?: string;
}
export interface StatusCondition {
	readonly canonicalCode?: string;
	readonly code?: string;
	readonly message?: string;
}
export default {
	ProjectsLocationsOperations: ProjectsLocationsOperations,
};
