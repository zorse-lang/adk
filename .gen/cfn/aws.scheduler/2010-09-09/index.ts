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
	readonly Description?: string | undefined;
	readonly EndDate?: string | undefined;
	readonly GroupName?: string | undefined;
	readonly KmsKeyArn?: string | undefined;
	readonly Name?: string | undefined;
	readonly ScheduleExpressionTimezone?: string | undefined;
	readonly StartDate?: string | undefined;
	readonly State?: string | undefined;
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
	readonly Name?: string | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export interface AwsVpcConfiguration {
	readonly AssignPublicIp?: string | undefined;
	readonly SecurityGroups?: string[] | undefined;
	readonly Subnets: string[];
}
export interface CapacityProviderStrategyItem {
	readonly Base?: number | undefined;
	readonly CapacityProvider: string;
	readonly Weight?: number | undefined;
}
export interface DeadLetterConfig {
	readonly Arn?: string | undefined;
}
export interface EcsParameters {
	readonly CapacityProviderStrategy?: CapacityProviderStrategyItem[] | undefined;
	readonly EnableECSManagedTags?: boolean | undefined;
	readonly EnableExecuteCommand?: boolean | undefined;
	readonly Group?: string | undefined;
	readonly LaunchType?: string | undefined;
	readonly NetworkConfiguration?: NetworkConfiguration | undefined;
	readonly PlacementConstraints?: PlacementConstraint[] | undefined;
	readonly PlacementStrategy?: PlacementStrategy[] | undefined;
	readonly PlatformVersion?: string | undefined;
	readonly PropagateTags?: string | undefined;
	readonly ReferenceId?: string | undefined;
	readonly Tags?: any | undefined;
	readonly TaskCount?: number | undefined;
	readonly TaskDefinitionArn: string;
}
export interface EventBridgeParameters {
	readonly DetailType: string;
	readonly Source: string;
}
export interface FlexibleTimeWindow {
	readonly MaximumWindowInMinutes?: number | undefined;
	readonly Mode: string;
}
export interface KinesisParameters {
	readonly PartitionKey: string;
}
export interface NetworkConfiguration {
	readonly AwsvpcConfiguration?: AwsVpcConfiguration | undefined;
}
export interface PlacementConstraint {
	readonly Expression?: string | undefined;
	readonly Type?: string | undefined;
}
export interface PlacementStrategy {
	readonly Field?: string | undefined;
	readonly Type?: string | undefined;
}
export interface RetryPolicy {
	readonly MaximumEventAgeInSeconds?: number | undefined;
	readonly MaximumRetryAttempts?: number | undefined;
}
export interface SageMakerPipelineParameter {
	readonly Name: string;
	readonly Value: string;
}
export interface SageMakerPipelineParameters {
	readonly PipelineParameterList?: SageMakerPipelineParameter[] | undefined;
}
export interface SqsParameters {
	readonly MessageGroupId?: string | undefined;
}
export interface Target {
	readonly Arn: string;
	readonly DeadLetterConfig?: DeadLetterConfig | undefined;
	readonly EcsParameters?: EcsParameters | undefined;
	readonly EventBridgeParameters?: EventBridgeParameters | undefined;
	readonly Input?: string | undefined;
	readonly KinesisParameters?: KinesisParameters | undefined;
	readonly RetryPolicy?: RetryPolicy | undefined;
	readonly RoleArn: string;
	readonly SageMakerPipelineParameters?: SageMakerPipelineParameters | undefined;
	readonly SqsParameters?: SqsParameters | undefined;
}
export default {
	Schedule: Schedule,
	ScheduleGroup: ScheduleGroup,
};
