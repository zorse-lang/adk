import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class Sinks extends GdmResource<SinksComponentInputs> implements SinksComponentOutputs {
	constructor(entity: ADKEntity, options: SinksComponentInputs) {
		super(entity, options.name, "logging.v2.Sinks", options);
	}
	public readonly createTime?: string;
	public readonly deleteTime?: string;
	public readonly updateTime?: string;
	public readonly writerIdentity?: string;
}
export interface SinksComponentOutputs {
	readonly createTime?: string;
	readonly deleteTime?: string;
	readonly updateTime?: string;
	readonly writerIdentity?: string;
}
export interface SinksComponentInputs {
	readonly bigqueryOptions?: BigQueryOptions;
	readonly customWriterIdentity?: string;
	readonly description?: string;
	readonly destination: string;
	readonly disabled?: boolean;
	readonly exclusions?: LogExclusion[];
	readonly filter?: string;
	readonly gcsOptions?: GcsOptions;
	readonly includeChildren?: boolean;
	readonly name: string;
	readonly outputVersionFormat?: string;
	readonly parent: string;
	readonly uniqueWriterIdentity?: boolean;
}
export interface BigQueryOptions {
	readonly clusteredFields?: string[];
	readonly usePartitionedTables?: boolean;
	readonly usesTimestampColumnPartitioning?: boolean;
}
export interface GcsOptions {
	readonly exportWindowSize?: string;
}
export interface LogExclusion {
	readonly createTime?: string;
	readonly description?: string;
	readonly disabled?: boolean;
	readonly filter: string;
	readonly name: string;
	readonly updateTime?: string;
}
export interface LogSink {
	readonly bigqueryOptions?: BigQueryOptions;
	readonly createTime?: string;
	readonly deleteTime?: string;
	readonly description?: string;
	readonly destination: string;
	readonly disabled?: boolean;
	readonly exclusions?: LogExclusion[];
	readonly filter?: string;
	readonly gcsOptions?: GcsOptions;
	readonly includeChildren?: boolean;
	readonly name: string;
	readonly outputVersionFormat?: string;
	readonly updateTime?: string;
	readonly writerIdentity?: string;
}
export default {
	Sinks: Sinks,
};
