import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class AssessmentTarget
	extends CfnResource<AssessmentTargetComponentInputs>
	implements AssessmentTargetComponentOutputs
{
	constructor(entity: ADKEntity, options: AssessmentTargetComponentInputs) {
		super(entity, options.LogicalId, "AWS::Inspector::AssessmentTarget", options);
	}
	public readonly Arn: string;
}
export interface AssessmentTargetComponentOutputs {
	readonly Arn: string;
}
export interface AssessmentTargetComponentInputs {
	readonly AssessmentTargetName?: string | undefined;
	readonly ResourceGroupArn?: string | undefined;
	readonly LogicalId: string;
}
export class AssessmentTemplate
	extends CfnResource<AssessmentTemplateComponentInputs>
	implements AssessmentTemplateComponentOutputs
{
	constructor(entity: ADKEntity, options: AssessmentTemplateComponentInputs) {
		super(entity, options.LogicalId, "AWS::Inspector::AssessmentTemplate", options);
	}
	public readonly Arn: string;
}
export interface AssessmentTemplateComponentOutputs {
	readonly Arn: string;
}
export interface AssessmentTemplateComponentInputs {
	readonly AssessmentTargetArn: string;
	readonly DurationInSeconds: number;
	readonly RulesPackageArns: string[];
	readonly AssessmentTemplateName?: string | undefined;
	readonly UserAttributesForFindings?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export class ResourceGroup extends CfnResource<ResourceGroupComponentInputs> implements ResourceGroupComponentOutputs {
	constructor(entity: ADKEntity, options: ResourceGroupComponentInputs) {
		super(entity, options.LogicalId, "AWS::Inspector::ResourceGroup", options);
	}
	public readonly Arn: string;
}
export interface ResourceGroupComponentOutputs {
	readonly Arn: string;
}
export interface ResourceGroupComponentInputs {
	readonly ResourceGroupTags: { key: string; value: string }[];
	readonly LogicalId: string;
}
export default {
	AssessmentTarget: AssessmentTarget,
	AssessmentTemplate: AssessmentTemplate,
	ResourceGroup: ResourceGroup,
};
