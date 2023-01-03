import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class Fleet extends CfnResource<FleetComponentInputs> implements FleetComponentOutputs {
	constructor(entity: ADKEntity, options: FleetComponentInputs) {
		super(entity, options.LogicalId, "AWS::RoboMaker::Fleet", options);
	}
	public readonly Arn: string;
}
export interface FleetComponentOutputs {
	readonly Arn: string;
}
export interface FleetComponentInputs {
	readonly Name?: (string | undefined) | undefined;
	readonly Tags?: ({ [key: string]: string } | undefined) | undefined;
	readonly LogicalId: string;
}
export class Robot extends CfnResource<RobotComponentInputs> implements RobotComponentOutputs {
	constructor(entity: ADKEntity, options: RobotComponentInputs) {
		super(entity, options.LogicalId, "AWS::RoboMaker::Robot", options);
	}
	public readonly Arn: string;
}
export interface RobotComponentOutputs {
	readonly Arn: string;
}
export interface RobotComponentInputs {
	readonly Architecture: string;
	readonly GreengrassGroupId: string;
	readonly Fleet?: (string | undefined) | undefined;
	readonly Name?: (string | undefined) | undefined;
	readonly Tags?: ({ [key: string]: string } | undefined) | undefined;
	readonly LogicalId: string;
}
export class RobotApplication
	extends CfnResource<RobotApplicationComponentInputs>
	implements RobotApplicationComponentOutputs
{
	constructor(entity: ADKEntity, options: RobotApplicationComponentInputs) {
		super(entity, options.LogicalId, "AWS::RoboMaker::RobotApplication", options);
	}
	public readonly Arn: string;
}
export interface RobotApplicationComponentOutputs {
	readonly Arn: string;
}
export interface RobotApplicationComponentInputs {
	readonly RobotSoftwareSuite: RobotSoftwareSuite;
	readonly CurrentRevisionId?: string | undefined;
	readonly Environment?: (string | undefined) | undefined;
	readonly Name?: (string | undefined) | undefined;
	readonly Sources?: (SourceConfig[] | undefined) | undefined;
	readonly Tags?: ({ [key: string]: string } | undefined) | undefined;
	readonly LogicalId: string;
}
export class RobotApplicationVersion
	extends CfnResource<RobotApplicationVersionComponentInputs>
	implements RobotApplicationVersionComponentOutputs
{
	constructor(entity: ADKEntity, options: RobotApplicationVersionComponentInputs) {
		super(entity, options.LogicalId, "AWS::RoboMaker::RobotApplicationVersion", options);
	}
	public readonly ApplicationVersion: string;
	public readonly Arn: string;
}
export interface RobotApplicationVersionComponentOutputs {
	readonly ApplicationVersion: string;
	readonly Arn: string;
}
export interface RobotApplicationVersionComponentInputs {
	readonly Application: string;
	readonly CurrentRevisionId?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export class SimulationApplication
	extends CfnResource<SimulationApplicationComponentInputs>
	implements SimulationApplicationComponentOutputs
{
	constructor(entity: ADKEntity, options: SimulationApplicationComponentInputs) {
		super(entity, options.LogicalId, "AWS::RoboMaker::SimulationApplication", options);
	}
	public readonly Arn: string;
}
export interface SimulationApplicationComponentOutputs {
	readonly Arn: string;
}
export interface SimulationApplicationComponentInputs {
	readonly RobotSoftwareSuite: RobotSoftwareSuite;
	readonly SimulationSoftwareSuite: SimulationSoftwareSuite;
	readonly CurrentRevisionId?: string | undefined;
	readonly Environment?: (string | undefined) | undefined;
	readonly Name?: (string | undefined) | undefined;
	readonly RenderingEngine?: (RenderingEngine | undefined) | undefined;
	readonly Sources?: (SourceConfig[] | undefined) | undefined;
	readonly Tags?: ({ [key: string]: string } | undefined) | undefined;
	readonly LogicalId: string;
}
export class SimulationApplicationVersion
	extends CfnResource<SimulationApplicationVersionComponentInputs>
	implements SimulationApplicationVersionComponentOutputs
{
	constructor(entity: ADKEntity, options: SimulationApplicationVersionComponentInputs) {
		super(entity, options.LogicalId, "AWS::RoboMaker::SimulationApplicationVersion", options);
	}
	public readonly ApplicationVersion: string;
	public readonly Arn: string;
}
export interface SimulationApplicationVersionComponentOutputs {
	readonly ApplicationVersion: string;
	readonly Arn: string;
}
export interface SimulationApplicationVersionComponentInputs {
	readonly Application: string;
	readonly CurrentRevisionId?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export interface RobotSoftwareSuite {
	readonly Name: string;
	readonly Version?: (string | undefined) | undefined;
}
export interface SourceConfig {
	readonly Architecture: string;
	readonly S3Bucket: string;
	readonly S3Key: string;
}
export interface RenderingEngine {
	readonly Name: string;
	readonly Version: string;
}
export interface SimulationSoftwareSuite {
	readonly Name: string;
	readonly Version?: (string | undefined) | undefined;
}
export default {
	Fleet: Fleet,
	Robot: Robot,
	RobotApplication: RobotApplication,
	RobotApplicationVersion: RobotApplicationVersion,
	SimulationApplication: SimulationApplication,
	SimulationApplicationVersion: SimulationApplicationVersion,
};
