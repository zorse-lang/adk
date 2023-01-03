import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class Destination extends CfnResource<DestinationComponentInputs> implements DestinationComponentOutputs {
	constructor(entity: ADKEntity, options: DestinationComponentInputs) {
		super(entity, options.LogicalId, "AWS::Logs::Destination", options);
	}
	public readonly Arn: string;
}
export interface DestinationComponentOutputs {
	readonly Arn: string;
}
export interface DestinationComponentInputs {
	readonly DestinationName: string;
	readonly RoleArn: string;
	readonly TargetArn: string;
	readonly DestinationPolicy?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export class LogGroup extends CfnResource<LogGroupComponentInputs> implements LogGroupComponentOutputs {
	constructor(entity: ADKEntity, options: LogGroupComponentInputs) {
		super(entity, options.LogicalId, "AWS::Logs::LogGroup", options);
	}
	public readonly Arn: string;
}
export interface LogGroupComponentOutputs {
	readonly Arn: string;
}
export interface LogGroupComponentInputs {
	readonly DataProtectionPolicy?: (any | undefined) | undefined;
	readonly KmsKeyId?: (string | undefined) | undefined;
	readonly LogGroupName?: (string | undefined) | undefined;
	readonly RetentionInDays?: (number | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly LogicalId: string;
}
export class LogStream extends CfnResource<LogStreamComponentInputs> implements LogStreamComponentOutputs {
	constructor(entity: ADKEntity, options: LogStreamComponentInputs) {
		super(entity, options.LogicalId, "AWS::Logs::LogStream", options);
	}
}
export interface LogStreamComponentOutputs {}
export interface LogStreamComponentInputs {
	readonly LogGroupName: string;
	readonly LogStreamName?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export class MetricFilter extends CfnResource<MetricFilterComponentInputs> implements MetricFilterComponentOutputs {
	constructor(entity: ADKEntity, options: MetricFilterComponentInputs) {
		super(entity, options.LogicalId, "AWS::Logs::MetricFilter", options);
	}
}
export interface MetricFilterComponentOutputs {}
export interface MetricFilterComponentInputs {
	readonly FilterPattern: string;
	readonly LogGroupName: string;
	readonly MetricTransformations: MetricTransformation[];
	readonly FilterName?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export class QueryDefinition
	extends CfnResource<QueryDefinitionComponentInputs>
	implements QueryDefinitionComponentOutputs
{
	constructor(entity: ADKEntity, options: QueryDefinitionComponentInputs) {
		super(entity, options.LogicalId, "AWS::Logs::QueryDefinition", options);
	}
	public readonly QueryDefinitionId: string;
}
export interface QueryDefinitionComponentOutputs {
	readonly QueryDefinitionId: string;
}
export interface QueryDefinitionComponentInputs {
	readonly Name: string;
	readonly QueryString: string;
	readonly LogGroupNames?: (string[] | undefined) | undefined;
	readonly LogicalId: string;
}
export class ResourcePolicy extends CfnResource<ResourcePolicyComponentInputs> implements ResourcePolicyComponentOutputs {
	constructor(entity: ADKEntity, options: ResourcePolicyComponentInputs) {
		super(entity, options.LogicalId, "AWS::Logs::ResourcePolicy", options);
	}
}
export interface ResourcePolicyComponentOutputs {}
export interface ResourcePolicyComponentInputs {
	readonly PolicyDocument: string;
	readonly PolicyName: string;
	readonly LogicalId: string;
}
export class SubscriptionFilter
	extends CfnResource<SubscriptionFilterComponentInputs>
	implements SubscriptionFilterComponentOutputs
{
	constructor(entity: ADKEntity, options: SubscriptionFilterComponentInputs) {
		super(entity, options.LogicalId, "AWS::Logs::SubscriptionFilter", options);
	}
	public readonly FilterName: string;
}
export interface SubscriptionFilterComponentOutputs {
	readonly FilterName: string;
}
export interface SubscriptionFilterComponentInputs {
	readonly DestinationArn: string;
	readonly FilterPattern: string;
	readonly LogGroupName: string;
	readonly RoleArn?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export interface Dimension {
	readonly Key: string;
	readonly Value: string;
}
export interface MetricTransformation {
	readonly DefaultValue?: (number | undefined) | undefined;
	readonly Dimensions?: (Dimension[] | undefined) | undefined;
	readonly MetricName: string;
	readonly MetricNamespace: string;
	readonly MetricValue: string;
	readonly Unit?: (string | undefined) | undefined;
}
export default {
	Destination: Destination,
	LogGroup: LogGroup,
	LogStream: LogStream,
	MetricFilter: MetricFilter,
	QueryDefinition: QueryDefinition,
	ResourcePolicy: ResourcePolicy,
	SubscriptionFilter: SubscriptionFilter,
};
