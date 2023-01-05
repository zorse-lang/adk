import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class Alias extends CfnResource<AliasComponentInputs> implements AliasComponentOutputs {
	constructor(entity: ADKEntity, options: AliasComponentInputs) {
		super(entity, options.LogicalId, "AWS::GameLift::Alias", options);
	}
	public readonly AliasId: string;
}
export interface AliasComponentOutputs {
	readonly AliasId: string;
}
export interface AliasComponentInputs {
	readonly Name: string;
	readonly RoutingStrategy: RoutingStrategy;
	readonly Description?: string | undefined;
	readonly LogicalId: string;
}
export class Build extends CfnResource<BuildComponentInputs> implements BuildComponentOutputs {
	constructor(entity: ADKEntity, options: BuildComponentInputs) {
		super(entity, options.LogicalId, "AWS::GameLift::Build", options);
	}
}
export interface BuildComponentOutputs {}
export interface BuildComponentInputs {
	readonly Name?: string | undefined;
	readonly OperatingSystem?: string | undefined;
	readonly StorageLocation?: S3Location | undefined;
	readonly Version?: string | undefined;
	readonly LogicalId: string;
}
export class Fleet extends CfnResource<FleetComponentInputs> implements FleetComponentOutputs {
	constructor(entity: ADKEntity, options: FleetComponentInputs) {
		super(entity, options.LogicalId, "AWS::GameLift::Fleet", options);
	}
	public readonly FleetId: string;
}
export interface FleetComponentOutputs {
	readonly FleetId: string;
}
export interface FleetComponentInputs {
	readonly Name: string;
	readonly AnywhereConfiguration?: anywhereConfiguration | undefined;
	readonly BuildId?: string | undefined;
	readonly CertificateConfiguration?: CertificateConfiguration | undefined;
	readonly ComputeType?: string | undefined;
	readonly Description?: string | undefined;
	readonly DesiredEC2Instances?: number | undefined;
	readonly EC2InboundPermissions?: IpPermission[] | undefined;
	readonly EC2InstanceType?: string | undefined;
	readonly FleetType?: string | undefined;
	readonly InstanceRoleARN?: string | undefined;
	readonly Locations?: LocationConfiguration[] | undefined;
	readonly MaxSize?: number | undefined;
	readonly MetricGroups?: string[] | undefined;
	readonly MinSize?: number | undefined;
	readonly NewGameSessionProtectionPolicy?: string | undefined;
	readonly PeerVpcAwsAccountId?: string | undefined;
	readonly PeerVpcId?: string | undefined;
	readonly ResourceCreationLimitPolicy?: ResourceCreationLimitPolicy | undefined;
	readonly RuntimeConfiguration?: RuntimeConfiguration | undefined;
	readonly ScriptId?: string | undefined;
	readonly LogicalId: string;
}
export class GameServerGroup
	extends CfnResource<GameServerGroupComponentInputs>
	implements GameServerGroupComponentOutputs
{
	constructor(entity: ADKEntity, options: GameServerGroupComponentInputs) {
		super(entity, options.LogicalId, "AWS::GameLift::GameServerGroup", options);
	}
	public readonly AutoScalingGroupArn: string;
	public readonly GameServerGroupArn: string;
}
export interface GameServerGroupComponentOutputs {
	readonly AutoScalingGroupArn: string;
	readonly GameServerGroupArn: string;
}
export interface GameServerGroupComponentInputs {
	readonly GameServerGroupName: string;
	readonly InstanceDefinitions: InstanceDefinition[];
	readonly LaunchTemplate: LaunchTemplate;
	readonly RoleArn: string;
	readonly AutoScalingPolicy?: AutoScalingPolicy | undefined;
	readonly BalancingStrategy?: string | undefined;
	readonly DeleteOption?: string | undefined;
	readonly GameServerProtectionPolicy?: string | undefined;
	readonly MaxSize?: number | undefined;
	readonly MinSize?: number | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly VpcSubnets?: string[] | undefined;
	readonly LogicalId: string;
}
export class GameSessionQueue
	extends CfnResource<GameSessionQueueComponentInputs>
	implements GameSessionQueueComponentOutputs
{
	constructor(entity: ADKEntity, options: GameSessionQueueComponentInputs) {
		super(entity, options.LogicalId, "AWS::GameLift::GameSessionQueue", options);
	}
	public readonly Arn: string;
	public readonly Name: string;
}
export interface GameSessionQueueComponentOutputs {
	readonly Arn: string;
	readonly Name: string;
}
export interface GameSessionQueueComponentInputs {
	readonly Name: string;
	readonly CustomEventData?: string | undefined;
	readonly Destinations?: Destination[] | undefined;
	readonly FilterConfiguration?: FilterConfiguration | undefined;
	readonly NotificationTarget?: string | undefined;
	readonly PlayerLatencyPolicies?: PlayerLatencyPolicy[] | undefined;
	readonly PriorityConfiguration?: PriorityConfiguration | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly TimeoutInSeconds?: number | undefined;
	readonly LogicalId: string;
}
export class Location extends CfnResource<LocationComponentInputs> implements LocationComponentOutputs {
	constructor(entity: ADKEntity, options: LocationComponentInputs) {
		super(entity, options.LogicalId, "AWS::GameLift::Location", options);
	}
	public readonly LocationArn: string;
}
export interface LocationComponentOutputs {
	readonly LocationArn: string;
}
export interface LocationComponentInputs {
	readonly LocationName: string;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export class MatchmakingConfiguration
	extends CfnResource<MatchmakingConfigurationComponentInputs>
	implements MatchmakingConfigurationComponentOutputs
{
	constructor(entity: ADKEntity, options: MatchmakingConfigurationComponentInputs) {
		super(entity, options.LogicalId, "AWS::GameLift::MatchmakingConfiguration", options);
	}
	public readonly Arn: string;
	public readonly Name: string;
}
export interface MatchmakingConfigurationComponentOutputs {
	readonly Arn: string;
	readonly Name: string;
}
export interface MatchmakingConfigurationComponentInputs {
	readonly AcceptanceRequired: boolean;
	readonly Name: string;
	readonly RequestTimeoutSeconds: number;
	readonly RuleSetName: string;
	readonly AcceptanceTimeoutSeconds?: number | undefined;
	readonly AdditionalPlayerCount?: number | undefined;
	readonly BackfillMode?: string | undefined;
	readonly CustomEventData?: string | undefined;
	readonly Description?: string | undefined;
	readonly FlexMatchMode?: string | undefined;
	readonly GameProperties?: Game[] | undefined;
	readonly GameSessionData?: string | undefined;
	readonly GameSessionQueueArns?: string[] | undefined;
	readonly NotificationTarget?: string | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export class MatchmakingRuleSet
	extends CfnResource<MatchmakingRuleSetComponentInputs>
	implements MatchmakingRuleSetComponentOutputs
{
	constructor(entity: ADKEntity, options: MatchmakingRuleSetComponentInputs) {
		super(entity, options.LogicalId, "AWS::GameLift::MatchmakingRuleSet", options);
	}
	public readonly Arn: string;
	public readonly Name: string;
}
export interface MatchmakingRuleSetComponentOutputs {
	readonly Arn: string;
	readonly Name: string;
}
export interface MatchmakingRuleSetComponentInputs {
	readonly Name: string;
	readonly RuleSetBody: string;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export class Script extends CfnResource<ScriptComponentInputs> implements ScriptComponentOutputs {
	constructor(entity: ADKEntity, options: ScriptComponentInputs) {
		super(entity, options.LogicalId, "AWS::GameLift::Script", options);
	}
	public readonly Arn: string;
	public readonly Id: string;
}
export interface ScriptComponentOutputs {
	readonly Arn: string;
	readonly Id: string;
}
export interface ScriptComponentInputs {
	readonly StorageLocation: S3Location;
	readonly Name?: string | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly Version?: string | undefined;
	readonly LogicalId: string;
}
export interface RoutingStrategy {
	readonly FleetId?: string | undefined;
	readonly Message?: string | undefined;
	readonly Type: string;
}
export interface S3Location {
	readonly Bucket: string;
	readonly Key: string;
	readonly ObjectVersion?: string | undefined;
	readonly RoleArn: string;
}
export interface anywhereConfiguration {
	readonly Cost: string;
}
export interface CertificateConfiguration {
	readonly CertificateType: string;
}
export interface IpPermission {
	readonly FromPort: number;
	readonly IpRange: string;
	readonly Protocol: string;
	readonly ToPort: number;
}
export interface LocationCapacity {
	readonly DesiredEC2Instances: number;
	readonly MaxSize: number;
	readonly MinSize: number;
}
export interface LocationConfiguration {
	readonly Location: string;
	readonly LocationCapacity?: LocationCapacity | undefined;
}
export interface ResourceCreationLimitPolicy {
	readonly NewGameSessionsPerCreator?: number | undefined;
	readonly PolicyPeriodInMinutes?: number | undefined;
}
export interface RuntimeConfiguration {
	readonly GameSessionActivationTimeoutSeconds?: number | undefined;
	readonly MaxConcurrentGameSessionActivations?: number | undefined;
	readonly ServerProcesses?: ServerProcess[] | undefined;
}
export interface ServerProcess {
	readonly ConcurrentExecutions: number;
	readonly LaunchPath: string;
	readonly Parameters?: string | undefined;
}
export interface AutoScalingPolicy {
	readonly EstimatedInstanceWarmup?: number | undefined;
	readonly TargetTrackingConfiguration: TargetTrackingConfiguration;
}
export interface InstanceDefinition {
	readonly InstanceType: string;
	readonly WeightedCapacity?: string | undefined;
}
export interface LaunchTemplate {
	readonly LaunchTemplateId?: string | undefined;
	readonly LaunchTemplateName?: string | undefined;
	readonly Version?: string | undefined;
}
export interface TargetTrackingConfiguration {
	readonly TargetValue: number;
}
export interface Destination {
	readonly DestinationArn?: string | undefined;
}
export interface FilterConfiguration {
	readonly AllowedLocations?: string[] | undefined;
}
export interface PlayerLatencyPolicy {
	readonly MaximumIndividualPlayerLatencyMilliseconds?: number | undefined;
	readonly PolicyDurationSeconds?: number | undefined;
}
export interface PriorityConfiguration {
	readonly LocationOrder?: string[] | undefined;
	readonly PriorityOrder?: string[] | undefined;
}
export interface Game {
	readonly Key: string;
	readonly Value: string;
}
export default {
	Alias: Alias,
	Build: Build,
	Fleet: Fleet,
	GameServerGroup: GameServerGroup,
	GameSessionQueue: GameSessionQueue,
	Location: Location,
	MatchmakingConfiguration: MatchmakingConfiguration,
	MatchmakingRuleSet: MatchmakingRuleSet,
	Script: Script,
};
