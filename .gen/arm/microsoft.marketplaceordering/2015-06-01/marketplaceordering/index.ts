import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class agreements_offers_plans
	extends ArmResource<agreements_offers_plansComponentInputs>
	implements agreements_offers_plansComponentOutputs
{
	constructor(entity: ADKEntity, options: agreements_offers_plansComponentInputs) {
		super(entity, options.name, "Microsoft.MarketplaceOrdering/agreements/offers/plans", "2015-06-01", options);
	}
	public readonly apiVersion: "2015-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.MarketplaceOrdering/agreements/offers/plans";
}
export interface agreements_offers_plansComponentOutputs {
	readonly apiVersion: "2015-06-01";
	readonly id: string;
	readonly type: "Microsoft.MarketplaceOrdering/agreements/offers/plans";
}
export interface agreements_offers_plansComponentInputs {
	readonly name: string;
	readonly properties?: OldAgreementProperties;
}
export class offerTypes_publishers_offers_plans_agreements
	extends ArmResource<offerTypes_publishers_offers_plans_agreementsComponentInputs>
	implements offerTypes_publishers_offers_plans_agreementsComponentOutputs
{
	constructor(entity: ADKEntity, options: offerTypes_publishers_offers_plans_agreementsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.MarketplaceOrdering/offerTypes/publishers/offers/plans/agreements",
			"2015-06-01",
			options,
		);
	}
	public readonly apiVersion: "2015-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.MarketplaceOrdering/offerTypes/publishers/offers/plans/agreements";
}
export interface offerTypes_publishers_offers_plans_agreementsComponentOutputs {
	readonly apiVersion: "2015-06-01";
	readonly id: string;
	readonly type: "Microsoft.MarketplaceOrdering/offerTypes/publishers/offers/plans/agreements";
}
export interface offerTypes_publishers_offers_plans_agreementsComponentInputs {
	readonly name: string;
	readonly properties?: AgreementProperties;
}
export interface AgreementProperties {
	readonly accepted?: boolean;
	readonly licenseTextLink?: string;
	readonly plan?: string;
	readonly privacyPolicyLink?: string;
	readonly product?: string;
	readonly publisher?: string;
	readonly retrieveDatetime?: string;
	readonly signature?: string;
}
export interface OldAgreementProperties {
	readonly cancelDate?: string;
	readonly id?: string;
	readonly offer?: string;
	readonly publisher?: string;
	readonly signDate?: string;
	readonly state?: "Active" | "Canceled";
}
export default {
	"agreements/offers/plans": agreements_offers_plans,
	"offerTypes/publishers/offers/plans/agreements": offerTypes_publishers_offers_plans_agreements,
};
