import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class LogSink extends GdmResource<LogSinkComponentInputs> implements LogSinkComponentOutputs {
	constructor(entity: ADKEntity, options: LogSinkComponentInputs) {
		super(entity, options.name, "logging.v2.LogSink", options);
	}
	public readonly createTime?: string;
	public readonly updateTime?: string;
	public readonly writerIdentity?: string;
}
export interface LogSinkComponentOutputs {
	readonly createTime?: string;
	readonly updateTime?: string;
	readonly writerIdentity?: string;
}
export interface LogSinkComponentInputs {
	readonly bigqueryOptions?: BigQueryOptions;
	readonly description?: string;
	readonly destination: string;
	readonly disabled?: boolean;
	readonly exclusions?: LogExclusion[];
	readonly filter?: string;
	readonly includeChildren?: boolean;
	readonly name: string;
	readonly outputVersionFormat?: string;
}
export interface BigQueryOptions {
	readonly usePartitionedTables?: boolean;
	readonly usesTimestampColumnPartitioning?: boolean;
}
export interface LogExclusion {
	readonly createTime?: string;
	readonly description?: string;
	readonly disabled?: boolean;
	readonly filter: string;
	readonly name: string;
	readonly updateTime?: string;
}
export default {
	LogSink: LogSink,
};
