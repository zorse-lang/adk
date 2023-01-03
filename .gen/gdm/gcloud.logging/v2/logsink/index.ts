import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class LogSink extends GdmResource<LogSinkComponentInputs> implements LogSinkComponentOutputs {
	constructor(entity: ADKEntity, options: LogSinkComponentInputs) {
		super(entity, options.name, "logging.v2.LogSink", options);
	}
	public readonly createTime?: string | undefined;
	public readonly updateTime?: string | undefined;
	public readonly writerIdentity?: string | undefined;
}
export interface LogSinkComponentOutputs {
	readonly createTime?: string | undefined;
	readonly updateTime?: string | undefined;
	readonly writerIdentity?: string | undefined;
}
export interface LogSinkComponentInputs {
	readonly bigqueryOptions?: BigQueryOptions | undefined;
	readonly description?: string | undefined;
	readonly destination: string;
	readonly disabled?: boolean | undefined;
	readonly exclusions?: LogExclusion[] | undefined;
	readonly filter?: string | undefined;
	readonly includeChildren?: boolean | undefined;
	readonly name: string;
	readonly outputVersionFormat?: string | undefined;
	readonly type: string;
}
export interface BigQueryOptions {
	readonly usePartitionedTables?: boolean | undefined;
	readonly usesTimestampColumnPartitioning?: boolean | undefined;
}
export interface LogExclusion {
	readonly createTime?: string | undefined;
	readonly description?: string | undefined;
	readonly disabled?: boolean | undefined;
	readonly filter: string;
	readonly name: string;
	readonly updateTime?: string | undefined;
}
export default {
	LogSink: LogSink,
};
