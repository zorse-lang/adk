import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class OrganizationsExclusions
	extends GdmResource<OrganizationsExclusionsComponentInputs>
	implements OrganizationsExclusionsComponentOutputs
{
	constructor(entity: ADKEntity, options: OrganizationsExclusionsComponentInputs) {
		super(entity, options.name, "logging.v2.OrganizationsExclusions", options);
	}
	public readonly createTime?: string | undefined;
	public readonly updateTime?: string | undefined;
}
export interface OrganizationsExclusionsComponentOutputs {
	readonly createTime?: string | undefined;
	readonly updateTime?: string | undefined;
}
export interface OrganizationsExclusionsComponentInputs {
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
	OrganizationsExclusions: OrganizationsExclusions,
};
