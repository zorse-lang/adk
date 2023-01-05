import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class Exclusions extends GdmResource<ExclusionsComponentInputs> implements ExclusionsComponentOutputs {
	constructor(entity: ADKEntity, options: ExclusionsComponentInputs) {
		super(entity, options.name, "logging.v2.Exclusions", options);
	}
	public readonly createTime?: string;
	public readonly updateTime?: string;
}
export interface ExclusionsComponentOutputs {
	readonly createTime?: string;
	readonly updateTime?: string;
}
export interface ExclusionsComponentInputs {
	readonly description?: string;
	readonly disabled?: boolean;
	readonly filter: string;
	readonly name: string;
	readonly parent: string;
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
	Exclusions: Exclusions,
};
