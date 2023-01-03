import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class EnabledControl extends CfnResource<EnabledControlComponentInputs> implements EnabledControlComponentOutputs {
	constructor(entity: ADKEntity, options: EnabledControlComponentInputs) {
		super(entity, options.LogicalId, "AWS::ControlTower::EnabledControl", options);
	}
}
export interface EnabledControlComponentOutputs {}
export interface EnabledControlComponentInputs {
	readonly ControlIdentifier: string;
	readonly TargetIdentifier: string;
	readonly LogicalId: string;
}
export default {
	EnabledControl: EnabledControl,
};
