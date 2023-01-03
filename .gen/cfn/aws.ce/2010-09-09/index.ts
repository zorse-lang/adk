import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class AnomalyMonitor extends CfnResource<AnomalyMonitorComponentInputs> implements AnomalyMonitorComponentOutputs {
	constructor(entity: ADKEntity, options: AnomalyMonitorComponentInputs) {
		super(entity, options.LogicalId, "AWS::CE::AnomalyMonitor", options);
	}
	public readonly CreationDate: string;
	public readonly DimensionalValueCount: number;
	public readonly LastEvaluatedDate: string;
	public readonly LastUpdatedDate: string;
	public readonly MonitorArn: string;
}
export interface AnomalyMonitorComponentOutputs {
	readonly CreationDate: string;
	readonly DimensionalValueCount: number;
	readonly LastEvaluatedDate: string;
	readonly LastUpdatedDate: string;
	readonly MonitorArn: string;
}
export interface AnomalyMonitorComponentInputs {
	readonly MonitorName: string;
	readonly MonitorType: string;
	readonly MonitorDimension?: (string | undefined) | undefined;
	readonly MonitorSpecification?: (string | undefined) | undefined;
	readonly ResourceTags?: (ResourceTag[] | undefined) | undefined;
	readonly LogicalId: string;
}
export class AnomalySubscription
	extends CfnResource<AnomalySubscriptionComponentInputs>
	implements AnomalySubscriptionComponentOutputs
{
	constructor(entity: ADKEntity, options: AnomalySubscriptionComponentInputs) {
		super(entity, options.LogicalId, "AWS::CE::AnomalySubscription", options);
	}
	public readonly AccountId: string;
	public readonly SubscriptionArn: string;
}
export interface AnomalySubscriptionComponentOutputs {
	readonly AccountId: string;
	readonly SubscriptionArn: string;
}
export interface AnomalySubscriptionComponentInputs {
	readonly Frequency: string;
	readonly MonitorArnList: string[];
	readonly Subscribers: Subscriber[];
	readonly SubscriptionName: string;
	readonly Threshold: number;
	readonly ResourceTags?: (ResourceTag[] | undefined) | undefined;
	readonly LogicalId: string;
}
export class CostCategory extends CfnResource<CostCategoryComponentInputs> implements CostCategoryComponentOutputs {
	constructor(entity: ADKEntity, options: CostCategoryComponentInputs) {
		super(entity, options.LogicalId, "AWS::CE::CostCategory", options);
	}
	public readonly Arn: string;
	public readonly EffectiveStart: string;
}
export interface CostCategoryComponentOutputs {
	readonly Arn: string;
	readonly EffectiveStart: string;
}
export interface CostCategoryComponentInputs {
	readonly Name: string;
	readonly Rules: string;
	readonly RuleVersion: string;
	readonly DefaultValue?: (string | undefined) | undefined;
	readonly SplitChargeRules?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export interface ResourceTag {
	readonly Key: string;
	readonly Value: string;
}
export interface Subscriber {
	readonly Address: string;
	readonly Status?: (string | undefined) | undefined;
	readonly Type: string;
}
export default {
	AnomalyMonitor: AnomalyMonitor,
	AnomalySubscription: AnomalySubscription,
	CostCategory: CostCategory,
};
