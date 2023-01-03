import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class Sinks extends GdmResource<SinksComponentInputs> implements SinksComponentOutputs {
	constructor(entity: ADKEntity, options: SinksComponentInputs) {
		super(entity, options.name, "logging.v2.Sinks", options);
	}
	public readonly createTime?: string | undefined;
	public readonly deleteTime?: string | undefined;
	public readonly updateTime?: string | undefined;
	public readonly writerIdentity?: string | undefined;
}
export interface SinksComponentOutputs {
	readonly createTime?: string | undefined;
	readonly deleteTime?: string | undefined;
	readonly updateTime?: string | undefined;
	readonly writerIdentity?: string | undefined;
}
export interface SinksComponentInputs {
	readonly bigqueryOptions?: BigQueryOptions | undefined;
	readonly customWriterIdentity?: string | undefined;
	readonly description?: string | undefined;
	readonly destination: string;
	readonly disabled?: boolean | undefined;
	readonly exclusions?: LogExclusion[] | undefined;
	readonly filter?: string | undefined;
	readonly gcsOptions?: GcsOptions | undefined;
	readonly includeChildren?: boolean | undefined;
	readonly name: string;
	readonly outputVersionFormat?: string | undefined;
	readonly parent: string;
	readonly uniqueWriterIdentity?: boolean | undefined;
	readonly type: string;
}
export interface BigQueryOptions {
	readonly clusteredFields?: string[] | undefined;
	readonly usePartitionedTables?: boolean | undefined;
	readonly usesTimestampColumnPartitioning?: boolean | undefined;
}
export interface GcsOptions {
	readonly exportWindowSize?: string | undefined;
}
export interface LogExclusion {
	readonly createTime?: string | undefined;
	readonly description?: string | undefined;
	readonly disabled?: boolean | undefined;
	readonly filter: string;
	readonly name: string;
	readonly updateTime?: string | undefined;
}
export interface LogSink {
	readonly bigqueryOptions?: BigQueryOptions | undefined;
	readonly createTime?: string | undefined;
	readonly deleteTime?: string | undefined;
	readonly description?: string | undefined;
	readonly destination: string;
	readonly disabled?: boolean | undefined;
	readonly exclusions?: LogExclusion[] | undefined;
	readonly filter?: string | undefined;
	readonly gcsOptions?: GcsOptions | undefined;
	readonly includeChildren?: boolean | undefined;
	readonly name: string;
	readonly outputVersionFormat?: string | undefined;
	readonly updateTime?: string | undefined;
	readonly writerIdentity?: string | undefined;
}
export default {
	Sinks: Sinks,
};
