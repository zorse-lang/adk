import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class RuleGroupsNamespace
	extends CfnResource<RuleGroupsNamespaceComponentInputs>
	implements RuleGroupsNamespaceComponentOutputs
{
	constructor(entity: ADKEntity, options: RuleGroupsNamespaceComponentInputs) {
		super(entity, options.LogicalId, "AWS::APS::RuleGroupsNamespace", options);
	}
	public readonly Arn: string;
}
export interface RuleGroupsNamespaceComponentOutputs {
	readonly Arn: string;
}
export interface RuleGroupsNamespaceComponentInputs {
	readonly Data: string;
	readonly Name: string;
	readonly Workspace: string;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export class Workspace extends CfnResource<WorkspaceComponentInputs> implements WorkspaceComponentOutputs {
	constructor(entity: ADKEntity, options: WorkspaceComponentInputs) {
		super(entity, options.LogicalId, "AWS::APS::Workspace", options);
	}
	public readonly Arn: string;
	public readonly PrometheusEndpoint: string;
	public readonly WorkspaceId: string;
}
export interface WorkspaceComponentOutputs {
	readonly Arn: string;
	readonly PrometheusEndpoint: string;
	readonly WorkspaceId: string;
}
export interface WorkspaceComponentInputs {
	readonly AlertManagerDefinition?: string | undefined;
	readonly Alias?: string | undefined;
	readonly LoggingConfiguration?: LoggingConfiguration | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export interface LoggingConfiguration {
	readonly LogGroupArn?: string | undefined;
}
export default {
	RuleGroupsNamespace: RuleGroupsNamespace,
	Workspace: Workspace,
};
