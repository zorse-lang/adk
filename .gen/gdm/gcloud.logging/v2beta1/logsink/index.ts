import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class LogSink extends GdmResource<LogSinkComponentInputs> implements LogSinkComponentOutputs {
	constructor(entity: ADKEntity, options: LogSinkComponentInputs) {
		super(entity, options.name, "logging.v2beta1.LogSink", options);
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
	readonly destination: string;
	readonly filter?: string;
	readonly includeChildren?: boolean;
	readonly name: string;
	readonly outputVersionFormat?: string;
}
export default {
	LogSink: LogSink,
};
