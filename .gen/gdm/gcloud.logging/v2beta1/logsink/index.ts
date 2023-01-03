import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class LogSink extends GdmResource<LogSinkComponentInputs> implements LogSinkComponentOutputs {
	constructor(entity: ADKEntity, options: LogSinkComponentInputs) {
		super(entity, options.name, "logging.v2beta1.LogSink", options);
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
	readonly destination: string;
	readonly filter?: string | undefined;
	readonly includeChildren?: boolean | undefined;
	readonly name: string;
	readonly outputVersionFormat?: string | undefined;
	readonly type: string;
}
export default {
	LogSink: LogSink,
};
