import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class App extends CfnResource<AppComponentInputs> implements AppComponentOutputs {
	constructor(entity: ADKEntity, options: AppComponentInputs) {
		super(entity, options.LogicalId, "AWS::ResilienceHub::App", options);
	}
	public readonly AppArn: string;
}
export interface AppComponentOutputs {
	readonly AppArn: string;
}
export interface AppComponentInputs {
	readonly AppTemplateBody: string;
	readonly Name: string;
	readonly ResourceMappings: ResourceMapping[];
	readonly AppAssessmentSchedule?: string | undefined;
	readonly Description?: string | undefined;
	readonly ResiliencyPolicyArn?: string | undefined;
	readonly Tags?: { [key: string]: string } | undefined;
	readonly LogicalId: string;
}
export class ResiliencyPolicy
	extends CfnResource<ResiliencyPolicyComponentInputs>
	implements ResiliencyPolicyComponentOutputs
{
	constructor(entity: ADKEntity, options: ResiliencyPolicyComponentInputs) {
		super(entity, options.LogicalId, "AWS::ResilienceHub::ResiliencyPolicy", options);
	}
	public readonly PolicyArn: string;
}
export interface ResiliencyPolicyComponentOutputs {
	readonly PolicyArn: string;
}
export interface ResiliencyPolicyComponentInputs {
	readonly Policy: { [key: string]: FailurePolicy };
	readonly PolicyName: string;
	readonly Tier: string;
	readonly DataLocationConstraint?: string | undefined;
	readonly PolicyDescription?: string | undefined;
	readonly Tags?: { [key: string]: string } | undefined;
	readonly LogicalId: string;
}
export interface PhysicalResourceId {
	readonly AwsAccountId?: string | undefined;
	readonly AwsRegion?: string | undefined;
	readonly Identifier: string;
	readonly Type: string;
}
export interface ResourceMapping {
	readonly LogicalStackName?: string | undefined;
	readonly MappingType: string;
	readonly PhysicalResourceId: PhysicalResourceId;
	readonly ResourceName?: string | undefined;
	readonly TerraformSourceName?: string | undefined;
}
export interface FailurePolicy {
	readonly RpoInSecs: number;
	readonly RtoInSecs: number;
}
export default {
	App: App,
	ResiliencyPolicy: ResiliencyPolicy,
};
