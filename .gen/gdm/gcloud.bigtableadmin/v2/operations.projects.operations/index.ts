import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class OperationsProjectsOperations
	extends GdmResource<OperationsProjectsOperationsComponentInputs>
	implements OperationsProjectsOperationsComponentOutputs
{
	constructor(entity: ADKEntity, options: OperationsProjectsOperationsComponentInputs) {
		super(entity, options.name, "bigtableadmin.v2.OperationsProjectsOperations", options);
	}
}
export interface OperationsProjectsOperationsComponentOutputs {}
export interface OperationsProjectsOperationsComponentInputs {
	readonly type: string;
	readonly name: string;
}
export default {
	OperationsProjectsOperations: OperationsProjectsOperations,
};
