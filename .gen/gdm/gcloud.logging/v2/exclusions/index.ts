import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class Exclusions extends GdmResource<ExclusionsComponentInputs> implements ExclusionsComponentOutputs {
	constructor(entity: ADKEntity, options: ExclusionsComponentInputs) {
		super(entity, options.name, "logging.v2.Exclusions", options);
	}
	public readonly createTime?: string | undefined;
	public readonly updateTime?: string | undefined;
}
export interface ExclusionsComponentOutputs {
	readonly createTime?: string | undefined;
	readonly updateTime?: string | undefined;
}
export interface ExclusionsComponentInputs {
	readonly description?: string | undefined;
	readonly disabled?: boolean | undefined;
	readonly filter: string;
	readonly name: string;
	readonly parent: string;
	readonly type: string;
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
	Exclusions: Exclusions,
};
