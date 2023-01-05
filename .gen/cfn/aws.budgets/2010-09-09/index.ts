import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class Budget extends CfnResource<BudgetComponentInputs> implements BudgetComponentOutputs {
	constructor(entity: ADKEntity, options: BudgetComponentInputs) {
		super(entity, options.LogicalId, "AWS::Budgets::Budget", options);
	}
}
export interface BudgetComponentOutputs {}
export interface BudgetComponentInputs {
	readonly Budget: BudgetData;
	readonly NotificationsWithSubscribers?: NotificationWithSubscribers[] | undefined;
	readonly LogicalId: string;
}
export class BudgetsAction extends CfnResource<BudgetsActionComponentInputs> implements BudgetsActionComponentOutputs {
	constructor(entity: ADKEntity, options: BudgetsActionComponentInputs) {
		super(entity, options.LogicalId, "AWS::Budgets::BudgetsAction", options);
	}
	public readonly ActionId: string;
}
export interface BudgetsActionComponentOutputs {
	readonly ActionId: string;
}
export interface BudgetsActionComponentInputs {
	readonly ActionThreshold: ActionThreshold;
	readonly ActionType: string;
	readonly BudgetName: string;
	readonly Definition: Definition;
	readonly ExecutionRoleArn: string;
	readonly NotificationType: string;
	readonly Subscribers: Subscriber[];
	readonly ApprovalModel?: string | undefined;
	readonly LogicalId: string;
}
export interface AutoAdjustData {
	readonly AutoAdjustType: string;
	readonly HistoricalOptions?: HistoricalOptions | undefined;
}
export interface BudgetData {
	readonly AutoAdjustData?: AutoAdjustData | undefined;
	readonly BudgetLimit?: Spend | undefined;
	readonly BudgetName?: string | undefined;
	readonly BudgetType: string;
	readonly CostFilters?: any | undefined;
	readonly CostTypes?: CostTypes | undefined;
	readonly PlannedBudgetLimits?: any | undefined;
	readonly TimePeriod?: TimePeriod | undefined;
	readonly TimeUnit: string;
}
export interface CostTypes {
	readonly IncludeCredit?: boolean | undefined;
	readonly IncludeDiscount?: boolean | undefined;
	readonly IncludeOtherSubscription?: boolean | undefined;
	readonly IncludeRecurring?: boolean | undefined;
	readonly IncludeRefund?: boolean | undefined;
	readonly IncludeSubscription?: boolean | undefined;
	readonly IncludeSupport?: boolean | undefined;
	readonly IncludeTax?: boolean | undefined;
	readonly IncludeUpfront?: boolean | undefined;
	readonly UseAmortized?: boolean | undefined;
	readonly UseBlended?: boolean | undefined;
}
export interface HistoricalOptions {
	readonly BudgetAdjustmentPeriod: number;
}
export interface Notification {
	readonly ComparisonOperator: string;
	readonly NotificationType: string;
	readonly Threshold: number;
	readonly ThresholdType?: string | undefined;
}
export interface NotificationWithSubscribers {
	readonly Notification: Notification;
	readonly Subscribers: Subscriber[];
}
export interface Spend {
	readonly Amount: number;
	readonly Unit: string;
}
export interface Subscriber {
	readonly Address: string;
	readonly SubscriptionType: string;
}
export interface TimePeriod {
	readonly End?: string | undefined;
	readonly Start?: string | undefined;
}
export interface ActionThreshold {
	readonly Type: string;
	readonly Value: number;
}
export interface Definition {
	readonly IamActionDefinition?: IamActionDefinition | undefined;
	readonly ScpActionDefinition?: ScpActionDefinition | undefined;
	readonly SsmActionDefinition?: SsmActionDefinition | undefined;
}
export interface IamActionDefinition {
	readonly Groups?: string[] | undefined;
	readonly PolicyArn: string;
	readonly Roles?: string[] | undefined;
	readonly Users?: string[] | undefined;
}
export interface ScpActionDefinition {
	readonly PolicyId: string;
	readonly TargetIds: string[];
}
export interface SsmActionDefinition {
	readonly InstanceIds: string[];
	readonly Region: string;
	readonly Subtype: string;
}
export default {
	Budget: Budget,
	BudgetsAction: BudgetsAction,
};
