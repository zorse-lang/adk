import { RosResource, Entity as ADKEntity } from "@zorse/adk";

export class Instance extends RosResource<InstanceComponentInputs> implements InstanceComponentOutputs {
	constructor(entity: ADKEntity, options: InstanceComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::KAFKA::Instance", options);
	}
	public readonly SslDomainEndpoint: any;
	public readonly DomainEndpoint: any;
	public readonly Endpoint: any;
	public readonly InstanceId: any;
	public readonly SslEndpoint: any;
	public readonly OrderId: any;
	public readonly SaslDomainEndpoint: any;
	public readonly Name: any;
}
export interface InstanceComponentOutputs {
	readonly SslDomainEndpoint: any;
	readonly DomainEndpoint: any;
	readonly Endpoint: any;
	readonly InstanceId: any;
	readonly SslEndpoint: any;
	readonly OrderId: any;
	readonly SaslDomainEndpoint: any;
	readonly Name: any;
}
export interface InstanceComponentInputs {
	readonly DeployType: number;
	readonly DiskSize: number;
	readonly DiskType: string;
	readonly TopicQuota: number;
	readonly DeletionForce?: boolean | undefined;
	readonly DeployOption?: DeployOption | undefined;
	readonly EipMax?: number | undefined;
	readonly IoMax?: number | undefined;
	readonly IoMaxSpec?: string | undefined;
	readonly OpenConnector?: boolean | undefined;
	readonly PayType?: string | undefined;
	readonly SpecType?: string | undefined;
	readonly Tags?: Tags[] | undefined;
	readonly LogicalId: string;
}
export class Topic extends RosResource<TopicComponentInputs> implements TopicComponentOutputs {
	constructor(entity: ADKEntity, options: TopicComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::KAFKA::Topic", options);
	}
}
export interface TopicComponentOutputs {}
export interface TopicComponentInputs {
	readonly InstanceId: any | string;
	readonly Remark: string;
	readonly Topic: any | string;
	readonly CompactTopic?: boolean | undefined;
	readonly Config?: { [key: string]: any } | undefined;
	readonly LocalTopic?: boolean | undefined;
	readonly MinInsyncReplicas?: number | undefined;
	readonly PartitionNum?: number | undefined;
	readonly ReplicationFactor?: number | undefined;
	readonly Tags?: Tags[] | undefined;
	readonly LogicalId: string;
}
export interface DeployOption {
	readonly IsEipInner?: boolean | undefined;
	readonly VpcId?: string | undefined;
	readonly ZoneId?: string | undefined;
	readonly Username?: string | undefined;
	readonly Config?: { [key: string]: any } | undefined;
	readonly VSwitchId: string;
	readonly ServiceVersion?: string | undefined;
	readonly SecurityGroup?: string | undefined;
	readonly DeployModule: string;
	readonly IsSetUserAndPassword?: boolean | undefined;
	readonly Name?: string | undefined;
	readonly Password?: string | undefined;
}
export interface Tags {
	readonly Value?: string | undefined;
	readonly Key: string;
}
export default {
	Instance: Instance,
	Topic: Topic,
};
