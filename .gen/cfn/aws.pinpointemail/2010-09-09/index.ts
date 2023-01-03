import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class ConfigurationSet
	extends CfnResource<ConfigurationSetComponentInputs>
	implements ConfigurationSetComponentOutputs
{
	constructor(entity: ADKEntity, options: ConfigurationSetComponentInputs) {
		super(entity, options.LogicalId, "AWS::PinpointEmail::ConfigurationSet", options);
	}
}
export interface ConfigurationSetComponentOutputs {}
export interface ConfigurationSetComponentInputs {
	readonly Name: string;
	readonly DeliveryOptions?: (DeliveryOptions | undefined) | undefined;
	readonly ReputationOptions?: (ReputationOptions | undefined) | undefined;
	readonly SendingOptions?: (SendingOptions | undefined) | undefined;
	readonly Tags?: (Tags[] | undefined) | undefined;
	readonly TrackingOptions?: (TrackingOptions | undefined) | undefined;
	readonly LogicalId: string;
}
export class ConfigurationSetEventDestination
	extends CfnResource<ConfigurationSetEventDestinationComponentInputs>
	implements ConfigurationSetEventDestinationComponentOutputs
{
	constructor(entity: ADKEntity, options: ConfigurationSetEventDestinationComponentInputs) {
		super(entity, options.LogicalId, "AWS::PinpointEmail::ConfigurationSetEventDestination", options);
	}
}
export interface ConfigurationSetEventDestinationComponentOutputs {}
export interface ConfigurationSetEventDestinationComponentInputs {
	readonly ConfigurationSetName: string;
	readonly EventDestinationName: string;
	readonly EventDestination?: (EventDestination | undefined) | undefined;
	readonly LogicalId: string;
}
export class DedicatedIpPool
	extends CfnResource<DedicatedIpPoolComponentInputs>
	implements DedicatedIpPoolComponentOutputs
{
	constructor(entity: ADKEntity, options: DedicatedIpPoolComponentInputs) {
		super(entity, options.LogicalId, "AWS::PinpointEmail::DedicatedIpPool", options);
	}
}
export interface DedicatedIpPoolComponentOutputs {}
export interface DedicatedIpPoolComponentInputs {
	readonly PoolName?: (string | undefined) | undefined;
	readonly Tags?: (Tags[] | undefined) | undefined;
	readonly LogicalId: string;
}
export class Identity extends CfnResource<IdentityComponentInputs> implements IdentityComponentOutputs {
	constructor(entity: ADKEntity, options: IdentityComponentInputs) {
		super(entity, options.LogicalId, "AWS::PinpointEmail::Identity", options);
	}
	public readonly IdentityDnsRecordName1: string;
	public readonly IdentityDnsRecordName2: string;
	public readonly IdentityDnsRecordName3: string;
	public readonly IdentityDnsRecordValue1: string;
	public readonly IdentityDnsRecordValue2: string;
	public readonly IdentityDnsRecordValue3: string;
}
export interface IdentityComponentOutputs {
	readonly IdentityDnsRecordName1: string;
	readonly IdentityDnsRecordName2: string;
	readonly IdentityDnsRecordName3: string;
	readonly IdentityDnsRecordValue1: string;
	readonly IdentityDnsRecordValue2: string;
	readonly IdentityDnsRecordValue3: string;
}
export interface IdentityComponentInputs {
	readonly Name: string;
	readonly DkimSigningEnabled?: (boolean | undefined) | undefined;
	readonly FeedbackForwardingEnabled?: (boolean | undefined) | undefined;
	readonly MailFromAttributes?: (MailFromAttributes | undefined) | undefined;
	readonly Tags?: (Tags[] | undefined) | undefined;
	readonly LogicalId: string;
}
export interface DeliveryOptions {
	readonly SendingPoolName?: (string | undefined) | undefined;
}
export interface ReputationOptions {
	readonly ReputationMetricsEnabled?: (boolean | undefined) | undefined;
}
export interface SendingOptions {
	readonly SendingEnabled?: (boolean | undefined) | undefined;
}
export interface Tags {
	readonly Key?: (string | undefined) | undefined;
	readonly Value?: (string | undefined) | undefined;
}
export interface TrackingOptions {
	readonly CustomRedirectDomain?: (string | undefined) | undefined;
}
export interface CloudWatchDestination {
	readonly DimensionConfigurations?: (DimensionConfiguration[] | undefined) | undefined;
}
export interface DimensionConfiguration {
	readonly DefaultDimensionValue: string;
	readonly DimensionName: string;
	readonly DimensionValueSource: string;
}
export interface EventDestination {
	readonly CloudWatchDestination?: (CloudWatchDestination | undefined) | undefined;
	readonly Enabled?: (boolean | undefined) | undefined;
	readonly KinesisFirehoseDestination?: (KinesisFirehoseDestination | undefined) | undefined;
	readonly MatchingEventTypes: string[];
	readonly PinpointDestination?: (PinpointDestination | undefined) | undefined;
	readonly SnsDestination?: (SnsDestination | undefined) | undefined;
}
export interface KinesisFirehoseDestination {
	readonly DeliveryStreamArn: string;
	readonly IamRoleArn: string;
}
export interface PinpointDestination {
	readonly ApplicationArn?: (string | undefined) | undefined;
}
export interface SnsDestination {
	readonly TopicArn: string;
}
export interface MailFromAttributes {
	readonly BehaviorOnMxFailure?: (string | undefined) | undefined;
	readonly MailFromDomain?: (string | undefined) | undefined;
}
export default {
	ConfigurationSet: ConfigurationSet,
	ConfigurationSetEventDestination: ConfigurationSetEventDestination,
	DedicatedIpPool: DedicatedIpPool,
	Identity: Identity,
};
