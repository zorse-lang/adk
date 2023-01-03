import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class BillingAccountsExclusions
	extends GdmResource<BillingAccountsExclusionsComponentInputs>
	implements BillingAccountsExclusionsComponentOutputs
{
	constructor(entity: ADKEntity, options: BillingAccountsExclusionsComponentInputs) {
		super(entity, options.name, "logging.v2.BillingAccountsExclusions", options);
	}
	public readonly createTime?: string | undefined;
	public readonly updateTime?: string | undefined;
}
export interface BillingAccountsExclusionsComponentOutputs {
	readonly createTime?: string | undefined;
	readonly updateTime?: string | undefined;
}
export interface BillingAccountsExclusionsComponentInputs {
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
	BillingAccountsExclusions: BillingAccountsExclusions,
};
