import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class BillingAccountsExclusions
	extends GdmResource<BillingAccountsExclusionsComponentInputs>
	implements BillingAccountsExclusionsComponentOutputs
{
	constructor(entity: ADKEntity, options: BillingAccountsExclusionsComponentInputs) {
		super(entity, options.name, "logging.v2.BillingAccountsExclusions", options);
	}
	public readonly createTime?: string;
	public readonly updateTime?: string;
}
export interface BillingAccountsExclusionsComponentOutputs {
	readonly createTime?: string;
	readonly updateTime?: string;
}
export interface BillingAccountsExclusionsComponentInputs {
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
	BillingAccountsExclusions: BillingAccountsExclusions,
};
