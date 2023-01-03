import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class BatchScramSecret
	extends CfnResource<BatchScramSecretComponentInputs>
	implements BatchScramSecretComponentOutputs
{
	constructor(entity: ADKEntity, options: BatchScramSecretComponentInputs) {
		super(entity, options.LogicalId, "AWS::MSK::BatchScramSecret", options);
	}
}
export interface BatchScramSecretComponentOutputs {}
export interface BatchScramSecretComponentInputs {
	readonly ClusterArn: string;
	readonly SecretArnList?: (string[] | undefined) | undefined;
	readonly LogicalId: string;
}
export class Cluster extends CfnResource<ClusterComponentInputs> implements ClusterComponentOutputs {
	constructor(entity: ADKEntity, options: ClusterComponentInputs) {
		super(entity, options.LogicalId, "AWS::MSK::Cluster", options);
	}
	public readonly Arn: string;
}
export interface ClusterComponentOutputs {
	readonly Arn: string;
}
export interface ClusterComponentInputs {
	readonly BrokerNodeGroupInfo: BrokerNodeGroupInfo;
	readonly ClusterName: string;
	readonly KafkaVersion: string;
	readonly NumberOfBrokerNodes: number;
	readonly ClientAuthentication?: (ClientAuthentication | undefined) | undefined;
	readonly ConfigurationInfo?: (ConfigurationInfo | undefined) | undefined;
	readonly CurrentVersion?: (string | undefined) | undefined;
	readonly EncryptionInfo?: (EncryptionInfo | undefined) | undefined;
	readonly EnhancedMonitoring?: (string | undefined) | undefined;
	readonly LoggingInfo?: (LoggingInfo | undefined) | undefined;
	readonly OpenMonitoring?: (OpenMonitoring | undefined) | undefined;
	readonly StorageMode?: (string | undefined) | undefined;
	readonly Tags?: ({ [key: string]: string } | undefined) | undefined;
	readonly LogicalId: string;
}
export class Configuration extends CfnResource<ConfigurationComponentInputs> implements ConfigurationComponentOutputs {
	constructor(entity: ADKEntity, options: ConfigurationComponentInputs) {
		super(entity, options.LogicalId, "AWS::MSK::Configuration", options);
	}
	public readonly Arn: string;
}
export interface ConfigurationComponentOutputs {
	readonly Arn: string;
}
export interface ConfigurationComponentInputs {
	readonly Name: string;
	readonly ServerProperties: string;
	readonly Description?: (string | undefined) | undefined;
	readonly KafkaVersionsList?: (string[] | undefined) | undefined;
	readonly LogicalId: string;
}
export class ServerlessCluster
	extends CfnResource<ServerlessClusterComponentInputs>
	implements ServerlessClusterComponentOutputs
{
	constructor(entity: ADKEntity, options: ServerlessClusterComponentInputs) {
		super(entity, options.LogicalId, "AWS::MSK::ServerlessCluster", options);
	}
	public readonly Arn: string;
}
export interface ServerlessClusterComponentOutputs {
	readonly Arn: string;
}
export interface ServerlessClusterComponentInputs {
	readonly ClientAuthentication: ClientAuthentication;
	readonly ClusterName: string;
	readonly VpcConfigs: VpcConfig[];
	readonly Tags?: ({ [key: string]: string } | undefined) | undefined;
	readonly LogicalId: string;
}
export interface BrokerLogs {
	readonly CloudWatchLogs?: (CloudWatchLogs | undefined) | undefined;
	readonly Firehose?: (Firehose | undefined) | undefined;
	readonly S3?: (S3 | undefined) | undefined;
}
export interface BrokerNodeGroupInfo {
	readonly BrokerAZDistribution?: (string | undefined) | undefined;
	readonly ClientSubnets: string[];
	readonly ConnectivityInfo?: (ConnectivityInfo | undefined) | undefined;
	readonly InstanceType: string;
	readonly SecurityGroups?: (string[] | undefined) | undefined;
	readonly StorageInfo?: (StorageInfo | undefined) | undefined;
}
export interface ClientAuthentication {
	readonly Sasl?: (Sasl | undefined) | undefined;
	readonly Tls?: (Tls | undefined) | undefined;
	readonly Unauthenticated?: (Unauthenticated | undefined) | undefined;
}
export interface CloudWatchLogs {
	readonly Enabled: boolean;
	readonly LogGroup?: (string | undefined) | undefined;
}
export interface ConfigurationInfo {
	readonly Arn: string;
	readonly Revision: number;
}
export interface ConnectivityInfo {
	readonly PublicAccess?: (PublicAccess | undefined) | undefined;
	readonly VpcConnectivity?: (VpcConnectivity | undefined) | undefined;
}
export interface EBSStorageInfo {
	readonly ProvisionedThroughput?: (ProvisionedThroughput | undefined) | undefined;
	readonly VolumeSize?: (number | undefined) | undefined;
}
export interface EncryptionAtRest {
	readonly DataVolumeKMSKeyId: string;
}
export interface EncryptionInTransit {
	readonly ClientBroker?: (string | undefined) | undefined;
	readonly InCluster?: (boolean | undefined) | undefined;
}
export interface EncryptionInfo {
	readonly EncryptionAtRest?: (EncryptionAtRest | undefined) | undefined;
	readonly EncryptionInTransit?: (EncryptionInTransit | undefined) | undefined;
}
export interface Firehose {
	readonly DeliveryStream?: (string | undefined) | undefined;
	readonly Enabled: boolean;
}
export interface Iam {
	readonly Enabled: boolean;
}
export interface JmxExporter {
	readonly EnabledInBroker: boolean;
}
export interface LoggingInfo {
	readonly BrokerLogs: BrokerLogs;
}
export interface NodeExporter {
	readonly EnabledInBroker: boolean;
}
export interface OpenMonitoring {
	readonly Prometheus: Prometheus;
}
export interface Prometheus {
	readonly JmxExporter?: (JmxExporter | undefined) | undefined;
	readonly NodeExporter?: (NodeExporter | undefined) | undefined;
}
export interface ProvisionedThroughput {
	readonly Enabled?: (boolean | undefined) | undefined;
	readonly VolumeThroughput?: (number | undefined) | undefined;
}
export interface PublicAccess {
	readonly Type?: (string | undefined) | undefined;
}
export interface S3 {
	readonly Bucket?: (string | undefined) | undefined;
	readonly Enabled: boolean;
	readonly Prefix?: (string | undefined) | undefined;
}
export interface Sasl {
	readonly Iam?: (Iam | undefined) | undefined;
	readonly Scram?: (Scram | undefined) | undefined;
}
export interface Scram {
	readonly Enabled: boolean;
}
export interface StorageInfo {
	readonly EBSStorageInfo?: (EBSStorageInfo | undefined) | undefined;
}
export interface Tls {
	readonly CertificateAuthorityArnList?: (string[] | undefined) | undefined;
	readonly Enabled?: (boolean | undefined) | undefined;
}
export interface Unauthenticated {
	readonly Enabled: boolean;
}
export interface VpcConnectivity {
	readonly ClientAuthentication?: (VpcConnectivityClientAuthentication | undefined) | undefined;
}
export interface VpcConnectivityClientAuthentication {
	readonly Sasl?: (VpcConnectivitySasl | undefined) | undefined;
	readonly Tls?: (VpcConnectivityTls | undefined) | undefined;
}
export interface VpcConnectivityIam {
	readonly Enabled: boolean;
}
export interface VpcConnectivitySasl {
	readonly Iam?: (VpcConnectivityIam | undefined) | undefined;
	readonly Scram?: (VpcConnectivityScram | undefined) | undefined;
}
export interface VpcConnectivityScram {
	readonly Enabled: boolean;
}
export interface VpcConnectivityTls {
	readonly Enabled: boolean;
}
export interface VpcConfig {
	readonly SecurityGroups?: (string[] | undefined) | undefined;
	readonly SubnetIds: string[];
}
export default {
	BatchScramSecret: BatchScramSecret,
	Cluster: Cluster,
	Configuration: Configuration,
	ServerlessCluster: ServerlessCluster,
};
