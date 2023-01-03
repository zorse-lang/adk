import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class Activity extends CfnResource<ActivityComponentInputs> implements ActivityComponentOutputs {
	constructor(entity: ADKEntity, options: ActivityComponentInputs) {
		super(entity, options.LogicalId, "AWS::StepFunctions::Activity", options);
	}
	public readonly Arn: string;
	public readonly Name: string;
}
export interface ActivityComponentOutputs {
	readonly Arn: string;
	readonly Name: string;
}
export interface ActivityComponentInputs {
	readonly Name: string;
	readonly Tags?: (TagsEntry[] | undefined) | undefined;
	readonly LogicalId: string;
}
export class StateMachine extends CfnResource<StateMachineComponentInputs> implements StateMachineComponentOutputs {
	constructor(entity: ADKEntity, options: StateMachineComponentInputs) {
		super(entity, options.LogicalId, "AWS::StepFunctions::StateMachine", options);
	}
	public readonly Arn: string;
	public readonly Name: string;
}
export interface StateMachineComponentOutputs {
	readonly Arn: string;
	readonly Name: string;
}
export interface StateMachineComponentInputs {
	readonly RoleArn: string;
	readonly Definition?: (any | undefined) | undefined;
	readonly DefinitionS3Location?: (S3Location | undefined) | undefined;
	readonly DefinitionString?: (string | undefined) | undefined;
	readonly DefinitionSubstitutions?: ({ [key: string]: string } | undefined) | undefined;
	readonly LoggingConfiguration?: (LoggingConfiguration | undefined) | undefined;
	readonly StateMachineName?: (string | undefined) | undefined;
	readonly StateMachineType?: (string | undefined) | undefined;
	readonly Tags?: (TagsEntry[] | undefined) | undefined;
	readonly TracingConfiguration?: (TracingConfiguration | undefined) | undefined;
	readonly LogicalId: string;
}
export interface TagsEntry {
	readonly Key: string;
	readonly Value: string;
}
export interface CloudWatchLogsLogGroup {
	readonly LogGroupArn?: (string | undefined) | undefined;
}
export interface LogDestination {
	readonly CloudWatchLogsLogGroup?: (CloudWatchLogsLogGroup | undefined) | undefined;
}
export interface LoggingConfiguration {
	readonly Destinations?: (LogDestination[] | undefined) | undefined;
	readonly IncludeExecutionData?: (boolean | undefined) | undefined;
	readonly Level?: (string | undefined) | undefined;
}
export interface S3Location {
	readonly Bucket: string;
	readonly Key: string;
	readonly Version?: (string | undefined) | undefined;
}
export interface TracingConfiguration {
	readonly Enabled?: (boolean | undefined) | undefined;
}
export default {
	Activity: Activity,
	StateMachine: StateMachine,
};
