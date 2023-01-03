import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class GeofenceCollection
	extends CfnResource<GeofenceCollectionComponentInputs>
	implements GeofenceCollectionComponentOutputs
{
	constructor(entity: ADKEntity, options: GeofenceCollectionComponentInputs) {
		super(entity, options.LogicalId, "AWS::Location::GeofenceCollection", options);
	}
	public readonly Arn: string;
	public readonly CollectionArn: string;
	public readonly CreateTime: string;
	public readonly UpdateTime: string;
}
export interface GeofenceCollectionComponentOutputs {
	readonly Arn: string;
	readonly CollectionArn: string;
	readonly CreateTime: string;
	readonly UpdateTime: string;
}
export interface GeofenceCollectionComponentInputs {
	readonly CollectionName: string;
	readonly Description?: (string | undefined) | undefined;
	readonly KmsKeyId?: (string | undefined) | undefined;
	readonly PricingPlan?: (string | undefined) | undefined;
	readonly PricingPlanDataSource?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export class Map extends CfnResource<MapComponentInputs> implements MapComponentOutputs {
	constructor(entity: ADKEntity, options: MapComponentInputs) {
		super(entity, options.LogicalId, "AWS::Location::Map", options);
	}
	public readonly Arn: string;
	public readonly CreateTime: string;
	public readonly DataSource: string;
	public readonly MapArn: string;
	public readonly UpdateTime: string;
}
export interface MapComponentOutputs {
	readonly Arn: string;
	readonly CreateTime: string;
	readonly DataSource: string;
	readonly MapArn: string;
	readonly UpdateTime: string;
}
export interface MapComponentInputs {
	readonly Configuration: MapConfiguration;
	readonly MapName: string;
	readonly Description?: (string | undefined) | undefined;
	readonly PricingPlan?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export class PlaceIndex extends CfnResource<PlaceIndexComponentInputs> implements PlaceIndexComponentOutputs {
	constructor(entity: ADKEntity, options: PlaceIndexComponentInputs) {
		super(entity, options.LogicalId, "AWS::Location::PlaceIndex", options);
	}
	public readonly Arn: string;
	public readonly CreateTime: string;
	public readonly IndexArn: string;
	public readonly UpdateTime: string;
}
export interface PlaceIndexComponentOutputs {
	readonly Arn: string;
	readonly CreateTime: string;
	readonly IndexArn: string;
	readonly UpdateTime: string;
}
export interface PlaceIndexComponentInputs {
	readonly DataSource: string;
	readonly IndexName: string;
	readonly DataSourceConfiguration?: (DataSourceConfiguration | undefined) | undefined;
	readonly Description?: (string | undefined) | undefined;
	readonly PricingPlan?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export class RouteCalculator
	extends CfnResource<RouteCalculatorComponentInputs>
	implements RouteCalculatorComponentOutputs
{
	constructor(entity: ADKEntity, options: RouteCalculatorComponentInputs) {
		super(entity, options.LogicalId, "AWS::Location::RouteCalculator", options);
	}
	public readonly Arn: string;
	public readonly CalculatorArn: string;
	public readonly CreateTime: string;
	public readonly UpdateTime: string;
}
export interface RouteCalculatorComponentOutputs {
	readonly Arn: string;
	readonly CalculatorArn: string;
	readonly CreateTime: string;
	readonly UpdateTime: string;
}
export interface RouteCalculatorComponentInputs {
	readonly CalculatorName: string;
	readonly DataSource: string;
	readonly Description?: (string | undefined) | undefined;
	readonly PricingPlan?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export class Tracker extends CfnResource<TrackerComponentInputs> implements TrackerComponentOutputs {
	constructor(entity: ADKEntity, options: TrackerComponentInputs) {
		super(entity, options.LogicalId, "AWS::Location::Tracker", options);
	}
	public readonly Arn: string;
	public readonly CreateTime: string;
	public readonly TrackerArn: string;
	public readonly UpdateTime: string;
}
export interface TrackerComponentOutputs {
	readonly Arn: string;
	readonly CreateTime: string;
	readonly TrackerArn: string;
	readonly UpdateTime: string;
}
export interface TrackerComponentInputs {
	readonly TrackerName: string;
	readonly Description?: (string | undefined) | undefined;
	readonly KmsKeyId?: (string | undefined) | undefined;
	readonly PositionFiltering?: (string | undefined) | undefined;
	readonly PricingPlan?: (string | undefined) | undefined;
	readonly PricingPlanDataSource?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export class TrackerConsumer
	extends CfnResource<TrackerConsumerComponentInputs>
	implements TrackerConsumerComponentOutputs
{
	constructor(entity: ADKEntity, options: TrackerConsumerComponentInputs) {
		super(entity, options.LogicalId, "AWS::Location::TrackerConsumer", options);
	}
}
export interface TrackerConsumerComponentOutputs {}
export interface TrackerConsumerComponentInputs {
	readonly ConsumerArn: string;
	readonly TrackerName: string;
	readonly LogicalId: string;
}
export interface MapConfiguration {
	readonly Style: string;
}
export interface DataSourceConfiguration {
	readonly IntendedUse?: (string | undefined) | undefined;
}
export default {
	GeofenceCollection: GeofenceCollection,
	Map: Map,
	PlaceIndex: PlaceIndex,
	RouteCalculator: RouteCalculator,
	Tracker: Tracker,
	TrackerConsumer: TrackerConsumer,
};
