import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class OrganizationsExclusions
	extends GdmResource<OrganizationsExclusionsComponentInputs>
	implements OrganizationsExclusionsComponentOutputs
{
	constructor(entity: ADKEntity, options: OrganizationsExclusionsComponentInputs) {
		super(entity, options.name, "logging.v2.OrganizationsExclusions", options);
	}
	public readonly createTime?: string;
	public readonly updateTime?: string;
}
export interface OrganizationsExclusionsComponentOutputs {
	readonly createTime?: string;
	readonly updateTime?: string;
}
export interface OrganizationsExclusionsComponentInputs {
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
	OrganizationsExclusions: OrganizationsExclusions,
};
