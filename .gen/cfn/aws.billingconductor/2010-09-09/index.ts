import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class BillingGroup extends CfnResource<BillingGroupComponentInputs> implements BillingGroupComponentOutputs {
	constructor(entity: ADKEntity, options: BillingGroupComponentInputs) {
		super(entity, options.LogicalId, "AWS::BillingConductor::BillingGroup", options);
	}
	public readonly Arn: string;
	public readonly CreationTime: number;
	public readonly LastModifiedTime: number;
	public readonly Size: number;
	public readonly Status: string;
	public readonly StatusReason: string;
}
export interface BillingGroupComponentOutputs {
	readonly Arn: string;
	readonly CreationTime: number;
	readonly LastModifiedTime: number;
	readonly Size: number;
	readonly Status: string;
	readonly StatusReason: string;
}
export interface BillingGroupComponentInputs {
	readonly AccountGrouping: AccountGrouping;
	readonly ComputationPreference: ComputationPreference;
	readonly Name: string;
	readonly PrimaryAccountId: string;
	readonly Description?: string | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export class CustomLineItem extends CfnResource<CustomLineItemComponentInputs> implements CustomLineItemComponentOutputs {
	constructor(entity: ADKEntity, options: CustomLineItemComponentInputs) {
		super(entity, options.LogicalId, "AWS::BillingConductor::CustomLineItem", options);
	}
	public readonly Arn: string;
	public readonly AssociationSize: number;
	public readonly CreationTime: number;
	public readonly CurrencyCode: string;
	public readonly LastModifiedTime: number;
	public readonly ProductCode: string;
}
export interface CustomLineItemComponentOutputs {
	readonly Arn: string;
	readonly AssociationSize: number;
	readonly CreationTime: number;
	readonly CurrencyCode: string;
	readonly LastModifiedTime: number;
	readonly ProductCode: string;
}
export interface CustomLineItemComponentInputs {
	readonly BillingGroupArn: string;
	readonly Name: string;
	readonly BillingPeriodRange?: BillingPeriodRange | undefined;
	readonly CustomLineItemChargeDetails?: CustomLineItemChargeDetails | undefined;
	readonly Description?: string | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export class PricingPlan extends CfnResource<PricingPlanComponentInputs> implements PricingPlanComponentOutputs {
	constructor(entity: ADKEntity, options: PricingPlanComponentInputs) {
		super(entity, options.LogicalId, "AWS::BillingConductor::PricingPlan", options);
	}
	public readonly Arn: string;
	public readonly CreationTime: number;
	public readonly LastModifiedTime: number;
	public readonly Size: number;
}
export interface PricingPlanComponentOutputs {
	readonly Arn: string;
	readonly CreationTime: number;
	readonly LastModifiedTime: number;
	readonly Size: number;
}
export interface PricingPlanComponentInputs {
	readonly Name: string;
	readonly Description?: string | undefined;
	readonly PricingRuleArns?: string[] | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export class PricingRule extends CfnResource<PricingRuleComponentInputs> implements PricingRuleComponentOutputs {
	constructor(entity: ADKEntity, options: PricingRuleComponentInputs) {
		super(entity, options.LogicalId, "AWS::BillingConductor::PricingRule", options);
	}
	public readonly Arn: string;
	public readonly AssociatedPricingPlanCount: number;
	public readonly CreationTime: number;
	public readonly LastModifiedTime: number;
}
export interface PricingRuleComponentOutputs {
	readonly Arn: string;
	readonly AssociatedPricingPlanCount: number;
	readonly CreationTime: number;
	readonly LastModifiedTime: number;
}
export interface PricingRuleComponentInputs {
	readonly Name: string;
	readonly Scope: string;
	readonly Type: string;
	readonly BillingEntity?: string | undefined;
	readonly Description?: string | undefined;
	readonly ModifierPercentage?: number | undefined;
	readonly Service?: string | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly Tiering?: Tiering | undefined;
	readonly LogicalId: string;
}
export interface AccountGrouping {
	readonly LinkedAccountIds: string[];
}
export interface ComputationPreference {
	readonly PricingPlanArn: string;
}
export interface BillingPeriodRange {
	readonly ExclusiveEndBillingPeriod?: string | undefined;
	readonly InclusiveStartBillingPeriod?: string | undefined;
}
export interface CustomLineItemChargeDetails {
	readonly Flat?: CustomLineItemFlatChargeDetails | undefined;
	readonly Percentage?: CustomLineItemPercentageChargeDetails | undefined;
	readonly Type: string;
}
export interface CustomLineItemFlatChargeDetails {
	readonly ChargeValue: number;
}
export interface CustomLineItemPercentageChargeDetails {
	readonly ChildAssociatedResources?: string[] | undefined;
	readonly PercentageValue: number;
}
export interface FreeTier {
	readonly Activated: boolean;
}
export interface Tiering {
	readonly FreeTier?: FreeTier | undefined;
}
export default {
	BillingGroup: BillingGroup,
	CustomLineItem: CustomLineItem,
	PricingPlan: PricingPlan,
	PricingRule: PricingRule,
};
