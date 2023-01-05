import { RosResource, Entity as ADKEntity } from "@zorse/adk";

export class Table extends RosResource<TableComponentInputs> implements TableComponentOutputs {
	constructor(entity: ADKEntity, options: TableComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::MaxCompute::Table", options);
	}
}
export interface TableComponentOutputs {}
export interface TableComponentInputs {
	readonly Name: any | string;
	readonly Project: any | string;
	readonly Comment?: string | undefined;
	readonly IfNotExists?: boolean | undefined;
	readonly Lifecycle?: number | undefined;
	readonly Schema?: Schema | undefined;
	readonly StringSchema?: string | undefined;
	readonly LogicalId: string;
}
export interface Columns {
	readonly Comment?: string | undefined;
	readonly Type: string;
	readonly Name: string;
}
export interface Partitions {
	readonly Comment?: string | undefined;
	readonly Type: string;
	readonly Name: string;
}
export interface Schema {
	readonly Partitions?: Partitions[] | undefined;
	readonly Columns: Columns[];
}
export default {
	Table: Table,
};
