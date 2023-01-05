import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class Connector extends CfnResource<ConnectorComponentInputs> implements ConnectorComponentOutputs {
	constructor(entity: ADKEntity, options: ConnectorComponentInputs) {
		super(entity, options.LogicalId, "AWS::KafkaConnect::Connector", options);
	}
	public readonly ConnectorArn: string;
}
export interface ConnectorComponentOutputs {
	readonly ConnectorArn: string;
}
export interface ConnectorComponentInputs {
	readonly Capacity: Capacity;
	readonly ConnectorConfiguration: { [key: string]: string };
	readonly ConnectorName: string;
	readonly KafkaCluster: KafkaCluster;
	readonly KafkaClusterClientAuthentication: KafkaClusterClientAuthentication;
	readonly KafkaClusterEncryptionInTransit: KafkaClusterEncryptionInTransit;
	readonly KafkaConnectVersion: string;
	readonly Plugins: Plugin[];
	readonly ServiceExecutionRoleArn: string;
	readonly ConnectorDescription?: string | undefined;
	readonly LogDelivery?: LogDelivery | undefined;
	readonly WorkerConfiguration?: WorkerConfiguration | undefined;
	readonly LogicalId: string;
}
export interface ApacheKafkaCluster {
	readonly BootstrapServers: string;
	readonly Vpc: Vpc;
}
export interface AutoScaling {
	readonly MaxWorkerCount: number;
	readonly McuCount: number;
	readonly MinWorkerCount: number;
	readonly ScaleInPolicy: ScaleInPolicy;
	readonly ScaleOutPolicy: ScaleOutPolicy;
}
export interface Capacity {
	readonly AutoScaling?: AutoScaling | undefined;
	readonly ProvisionedCapacity?: ProvisionedCapacity | undefined;
}
export interface CloudWatchLogsLogDelivery {
	readonly Enabled: boolean;
	readonly LogGroup?: string | undefined;
}
export interface CustomPlugin {
	readonly CustomPluginArn: string;
	readonly Revision: number;
}
export interface FirehoseLogDelivery {
	readonly DeliveryStream?: string | undefined;
	readonly Enabled: boolean;
}
export interface KafkaCluster {
	readonly ApacheKafkaCluster: ApacheKafkaCluster;
}
export interface KafkaClusterClientAuthentication {
	readonly AuthenticationType: string;
}
export interface KafkaClusterEncryptionInTransit {
	readonly EncryptionType: string;
}
export interface LogDelivery {
	readonly WorkerLogDelivery: WorkerLogDelivery;
}
export interface Plugin {
	readonly CustomPlugin: CustomPlugin;
}
export interface ProvisionedCapacity {
	readonly McuCount?: number | undefined;
	readonly WorkerCount: number;
}
export interface S3LogDelivery {
	readonly Bucket?: string | undefined;
	readonly Enabled: boolean;
	readonly Prefix?: string | undefined;
}
export interface ScaleInPolicy {
	readonly CpuUtilizationPercentage: number;
}
export interface ScaleOutPolicy {
	readonly CpuUtilizationPercentage: number;
}
export interface Vpc {
	readonly SecurityGroups: string[];
	readonly Subnets: string[];
}
export interface WorkerConfiguration {
	readonly Revision: number;
	readonly WorkerConfigurationArn: string;
}
export interface WorkerLogDelivery {
	readonly CloudWatchLogs?: CloudWatchLogsLogDelivery | undefined;
	readonly Firehose?: FirehoseLogDelivery | undefined;
	readonly S3?: S3LogDelivery | undefined;
}
export default {
	Connector: Connector,
};
