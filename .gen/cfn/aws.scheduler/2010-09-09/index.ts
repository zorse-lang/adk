import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class Schedule extends CfnResource<ScheduleComponentInputs> implements ScheduleComponentOutputs {
	constructor(entity: ADKEntity, options: ScheduleComponentInputs) {
		super(entity, options.LogicalId, "AWS::Scheduler::Schedule", options);
	}
	public readonly Arn: string;
}
export interface ScheduleComponentOutputs {
	readonly Arn: string;
}
export interface ScheduleComponentInputs {
	readonly FlexibleTimeWindow: FlexibleTimeWindow;
	readonly ScheduleExpression: string;
	readonly Target: Target;
	readonly Description?: (string | undefined) | undefined;
	readonly EndDate?: (string | undefined) | undefined;
	readonly GroupName?: (string | undefined) | undefined;
	readonly KmsKeyArn?: (string | undefined) | undefined;
	readonly Name?: (string | undefined) | undefined;
	readonly ScheduleExpressionTimezone?: (string | undefined) | undefined;
	readonly StartDate?: (string | undefined) | undefined;
	readonly State?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export class ScheduleGroup extends CfnResource<ScheduleGroupComponentInputs> implements ScheduleGroupComponentOutputs {
	constructor(entity: ADKEntity, options: ScheduleGroupComponentInputs) {
		super(entity, options.LogicalId, "AWS::Scheduler::ScheduleGroup", options);
	}
	public readonly Arn: string;
	public readonly CreationDate: string;
	public readonly LastModificationDate: string;
	public readonly State: string;
}
export interface ScheduleGroupComponentOutputs {
	readonly Arn: string;
	readonly CreationDate: string;
	readonly LastModificationDate: string;
	readonly State: string;
}
export interface ScheduleGroupComponentInputs {
	readonly Name?: (string | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly LogicalId: string;
}
export interface AwsVpcConfiguration {
	readonly AssignPublicIp?: (string | undefined) | undefined;
	readonly SecurityGroups?: (string[] | undefined) | undefined;
	readonly Subnets: string[];
}
export interface CapacityProviderStrategyItem {
	readonly Base?: (number | undefined) | undefined;
	readonly CapacityProvider: string;
	readonly Weight?: (number | undefined) | undefined;
}
export interface DeadLetterConfig {
	readonly Arn?: (string | undefined) | undefined;
}
export interface EcsParameters {
	readonly CapacityProviderStrategy?: (CapacityProviderStrategyItem[] | undefined) | undefined;
	readonly EnableECSManagedTags?: (boolean | undefined) | undefined;
	readonly EnableExecuteCommand?: (boolean | undefined) | undefined;
	readonly Group?: (string | undefined) | undefined;
	readonly LaunchType?: (string | undefined) | undefined;
	readonly NetworkConfiguration?: (NetworkConfiguration | undefined) | undefined;
	readonly PlacementConstraints?: (PlacementConstraint[] | undefined) | undefined;
	readonly PlacementStrategy?: (PlacementStrategy[] | undefined) | undefined;
	readonly PlatformVersion?: (string | undefined) | undefined;
	readonly PropagateTags?: (string | undefined) | undefined;
	readonly ReferenceId?: (string | undefined) | undefined;
	readonly Tags?: (any | undefined) | undefined;
	readonly TaskCount?: (number | undefined) | undefined;
	readonly TaskDefinitionArn: string;
}
export interface EventBridgeParameters {
	readonly DetailType: string;
	readonly Source: string;
}
export interface FlexibleTimeWindow {
	readonly MaximumWindowInMinutes?: (number | undefined) | undefined;
	readonly Mode: string;
}
export interface KinesisParameters {
	readonly PartitionKey: string;
}
export interface NetworkConfiguration {
	readonly AwsvpcConfiguration?: (AwsVpcConfiguration | undefined) | undefined;
}
export interface PlacementConstraint {
	readonly Expression?: (string | undefined) | undefined;
	readonly Type?: (string | undefined) | undefined;
}
export interface PlacementStrategy {
	readonly Field?: (string | undefined) | undefined;
	readonly Type?: (string | undefined) | undefined;
}
export interface RetryPolicy {
	readonly MaximumEventAgeInSeconds?: (number | undefined) | undefined;
	readonly MaximumRetryAttempts?: (number | undefined) | undefined;
}
export interface SageMakerPipelineParameter {
	readonly Name: string;
	readonly Value: string;
}
export interface SageMakerPipelineParameters {
	readonly PipelineParameterList?: (SageMakerPipelineParameter[] | undefined) | undefined;
}
export interface SqsParameters {
	readonly MessageGroupId?: (string | undefined) | undefined;
}
export interface Target {
	readonly Arn: string;
	readonly DeadLetterConfig?: (DeadLetterConfig | undefined) | undefined;
	readonly EcsParameters?: (EcsParameters | undefined) | undefined;
	readonly EventBridgeParameters?: (EventBridgeParameters | undefined) | undefined;
	readonly Input?: (string | undefined) | undefined;
	readonly KinesisParameters?: (KinesisParameters | undefined) | undefined;
	readonly RetryPolicy?: (RetryPolicy | undefined) | undefined;
	readonly RoleArn: string;
	readonly SageMakerPipelineParameters?: (SageMakerPipelineParameters | undefined) | undefined;
	readonly SqsParameters?: (SqsParameters | undefined) | undefined;
}
export default {
	Schedule: Schedule,
	ScheduleGroup: ScheduleGroup,
};
