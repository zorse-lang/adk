import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class Cluster extends CfnResource<ClusterComponentInputs> implements ClusterComponentOutputs {
	constructor(entity: ADKEntity, options: ClusterComponentInputs) {
		super(entity, options.LogicalId, "AWS::Route53RecoveryControl::Cluster", options);
	}
	public readonly ClusterArn: string;
	public readonly ClusterEndpoints: Map<string, ClusterEndpoint>;
	public readonly Status: string;
}
export interface ClusterComponentOutputs {
	readonly ClusterArn: string;
	readonly ClusterEndpoints: Map<string, ClusterEndpoint>;
	readonly Status: string;
}
export interface ClusterComponentInputs {
	readonly Name?: string | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export class ControlPanel extends CfnResource<ControlPanelComponentInputs> implements ControlPanelComponentOutputs {
	constructor(entity: ADKEntity, options: ControlPanelComponentInputs) {
		super(entity, options.LogicalId, "AWS::Route53RecoveryControl::ControlPanel", options);
	}
	public readonly ControlPanelArn: string;
	public readonly DefaultControlPanel: boolean;
	public readonly RoutingControlCount: number;
	public readonly Status: string;
}
export interface ControlPanelComponentOutputs {
	readonly ControlPanelArn: string;
	readonly DefaultControlPanel: boolean;
	readonly RoutingControlCount: number;
	readonly Status: string;
}
export interface ControlPanelComponentInputs {
	readonly Name: string;
	readonly ClusterArn?: string | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export class RoutingControl extends CfnResource<RoutingControlComponentInputs> implements RoutingControlComponentOutputs {
	constructor(entity: ADKEntity, options: RoutingControlComponentInputs) {
		super(entity, options.LogicalId, "AWS::Route53RecoveryControl::RoutingControl", options);
	}
	public readonly RoutingControlArn: string;
	public readonly Status: string;
}
export interface RoutingControlComponentOutputs {
	readonly RoutingControlArn: string;
	readonly Status: string;
}
export interface RoutingControlComponentInputs {
	readonly Name: string;
	readonly ClusterArn?: string | undefined;
	readonly ControlPanelArn?: string | undefined;
	readonly LogicalId: string;
}
export class SafetyRule extends CfnResource<SafetyRuleComponentInputs> implements SafetyRuleComponentOutputs {
	constructor(entity: ADKEntity, options: SafetyRuleComponentInputs) {
		super(entity, options.LogicalId, "AWS::Route53RecoveryControl::SafetyRule", options);
	}
	public readonly SafetyRuleArn: string;
	public readonly Status: string;
}
export interface SafetyRuleComponentOutputs {
	readonly SafetyRuleArn: string;
	readonly Status: string;
}
export interface SafetyRuleComponentInputs {
	readonly ControlPanelArn: string;
	readonly Name: string;
	readonly RuleConfig: RuleConfig;
	readonly AssertionRule?: AssertionRule | undefined;
	readonly GatingRule?: GatingRule | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export interface ClusterEndpoint {
	readonly Endpoint?: string | undefined;
	readonly Region?: string | undefined;
}
export interface AssertionRule {
	readonly AssertedControls: string[];
	readonly WaitPeriodMs: number;
}
export interface GatingRule {
	readonly GatingControls: string[];
	readonly TargetControls: string[];
	readonly WaitPeriodMs: number;
}
export interface RuleConfig {
	readonly Inverted: boolean;
	readonly Threshold: number;
	readonly Type: string;
}
export default {
	Cluster: Cluster,
	ControlPanel: ControlPanel,
	RoutingControl: RoutingControl,
	SafetyRule: SafetyRule,
};
