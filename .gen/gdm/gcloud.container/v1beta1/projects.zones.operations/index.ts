import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ProjectsZonesOperations
	extends GdmResource<ProjectsZonesOperationsComponentInputs>
	implements ProjectsZonesOperationsComponentOutputs
{
	constructor(entity: ADKEntity, options: ProjectsZonesOperationsComponentInputs) {
		super(entity, options.name, "container.v1beta1.ProjectsZonesOperations", options);
	}
	public readonly endTime?: string | undefined;
	public readonly location?: string | undefined;
	public readonly progress?: OperationProgress | undefined;
	public readonly startTime?: string | undefined;
	public readonly statusMessage?: string | undefined;
}
export interface ProjectsZonesOperationsComponentOutputs {
	readonly endTime?: string | undefined;
	readonly location?: string | undefined;
	readonly progress?: OperationProgress | undefined;
	readonly startTime?: string | undefined;
	readonly statusMessage?: string | undefined;
}
export interface ProjectsZonesOperationsComponentInputs {
	readonly clusterConditions?: StatusCondition[] | undefined;
	readonly detail?: string | undefined;
	readonly error?: Status | undefined;
	readonly name: string;
	readonly nodepoolConditions?: StatusCondition[] | undefined;
	readonly operationType?: string | undefined;
	readonly selfLink?: string | undefined;
	readonly status?: string | undefined;
	readonly targetLink?: string | undefined;
	readonly zone?: string | undefined;
	readonly type: string;
}
export interface Metric {
	readonly doubleValue?: number | undefined;
	readonly intValue?: string | undefined;
	readonly name: string;
	readonly stringValue?: string | undefined;
}
export interface Operation {
	readonly clusterConditions?: StatusCondition[] | undefined;
	readonly detail?: string | undefined;
	readonly endTime?: string | undefined;
	readonly error?: Status | undefined;
	readonly location?: string | undefined;
	readonly name?: string | undefined;
	readonly nodepoolConditions?: StatusCondition[] | undefined;
	readonly operationType?: string | undefined;
	readonly progress?: OperationProgress | undefined;
	readonly selfLink?: string | undefined;
	readonly startTime?: string | undefined;
	readonly status?: string | undefined;
	readonly statusMessage?: string | undefined;
	readonly targetLink?: string | undefined;
	readonly zone?: string | undefined;
}
export interface OperationProgress {
	readonly metrics?: Metric[] | undefined;
	readonly name?: string | undefined;
	readonly stages?: OperationProgress[] | undefined;
	readonly status?: string | undefined;
}
export interface Status {
	readonly code?: number | undefined;
	readonly details?: Array<{ [P in string]: any }> | undefined;
	readonly message?: string | undefined;
}
export interface StatusCondition {
	readonly canonicalCode?: string | undefined;
	readonly code?: string | undefined;
	readonly message?: string | undefined;
}
export default {
	ProjectsZonesOperations: ProjectsZonesOperations,
};
