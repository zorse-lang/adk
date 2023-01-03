import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class NotificationRule
	extends CfnResource<NotificationRuleComponentInputs>
	implements NotificationRuleComponentOutputs
{
	constructor(entity: ADKEntity, options: NotificationRuleComponentInputs) {
		super(entity, options.LogicalId, "AWS::CodeStarNotifications::NotificationRule", options);
	}
	public readonly Arn: string;
}
export interface NotificationRuleComponentOutputs {
	readonly Arn: string;
}
export interface NotificationRuleComponentInputs {
	readonly DetailType: string;
	readonly EventTypeIds: string[];
	readonly Name: string;
	readonly Resource: string;
	readonly Targets: Target[];
	readonly CreatedBy?: (string | undefined) | undefined;
	readonly EventTypeId?: (string | undefined) | undefined;
	readonly Status?: (string | undefined) | undefined;
	readonly Tags?: (any | undefined) | undefined;
	readonly TargetAddress?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export interface Target {
	readonly TargetAddress: string;
	readonly TargetType: string;
}
export default {
	NotificationRule: NotificationRule,
};
