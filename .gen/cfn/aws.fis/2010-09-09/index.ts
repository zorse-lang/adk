import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class ExperimentTemplate
	extends CfnResource<ExperimentTemplateComponentInputs>
	implements ExperimentTemplateComponentOutputs
{
	constructor(entity: ADKEntity, options: ExperimentTemplateComponentInputs) {
		super(entity, options.LogicalId, "AWS::FIS::ExperimentTemplate", options);
	}
	public readonly Id: string;
}
export interface ExperimentTemplateComponentOutputs {
	readonly Id: string;
}
export interface ExperimentTemplateComponentInputs {
	readonly Description: string;
	readonly RoleArn: string;
	readonly StopConditions: ExperimentTemplateStopCondition[];
	readonly Tags: { [key: string]: string };
	readonly Targets: { [key: string]: ExperimentTemplateTarget };
	readonly Actions?: { [key: string]: ExperimentTemplateAction } | undefined;
	readonly LogConfiguration?: ExperimentTemplateLogConfiguration | undefined;
	readonly LogicalId: string;
}
export interface CloudWatchLogsConfiguration {
	readonly LogGroupArn: string;
}
export interface ExperimentTemplateAction {
	readonly ActionId: string;
	readonly Description?: string | undefined;
	readonly Parameters?: { [key: string]: string } | undefined;
	readonly StartAfter?: string[] | undefined;
	readonly Targets?: { [key: string]: string } | undefined;
}
export interface ExperimentTemplateLogConfiguration {
	readonly CloudWatchLogsConfiguration?: CloudWatchLogsConfiguration | undefined;
	readonly LogSchemaVersion: number;
	readonly S3Configuration?: S3Configuration | undefined;
}
export interface ExperimentTemplateStopCondition {
	readonly Source: string;
	readonly Value?: string | undefined;
}
export interface ExperimentTemplateTarget {
	readonly Filters?: ExperimentTemplateTargetFilter[] | undefined;
	readonly Parameters?: { [key: string]: string } | undefined;
	readonly ResourceArns?: string[] | undefined;
	readonly ResourceTags?: { [key: string]: string } | undefined;
	readonly ResourceType: string;
	readonly SelectionMode: string;
}
export interface ExperimentTemplateTargetFilter {
	readonly Path: string;
	readonly Values: string[];
}
export interface S3Configuration {
	readonly BucketName: string;
	readonly Prefix?: string | undefined;
}
export default {
	ExperimentTemplate: ExperimentTemplate,
};
