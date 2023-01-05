import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class ObservabilityConfiguration
	extends CfnResource<ObservabilityConfigurationComponentInputs>
	implements ObservabilityConfigurationComponentOutputs
{
	constructor(entity: ADKEntity, options: ObservabilityConfigurationComponentInputs) {
		super(entity, options.LogicalId, "AWS::AppRunner::ObservabilityConfiguration", options);
	}
	public readonly Latest: boolean;
	public readonly ObservabilityConfigurationArn: string;
	public readonly ObservabilityConfigurationRevision: number;
}
export interface ObservabilityConfigurationComponentOutputs {
	readonly Latest: boolean;
	readonly ObservabilityConfigurationArn: string;
	readonly ObservabilityConfigurationRevision: number;
}
export interface ObservabilityConfigurationComponentInputs {
	readonly ObservabilityConfigurationName?: string | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly TraceConfiguration?: TraceConfiguration | undefined;
	readonly LogicalId: string;
}
export class Service extends CfnResource<ServiceComponentInputs> implements ServiceComponentOutputs {
	constructor(entity: ADKEntity, options: ServiceComponentInputs) {
		super(entity, options.LogicalId, "AWS::AppRunner::Service", options);
	}
	public readonly ServiceArn: string;
	public readonly ServiceId: string;
	public readonly ServiceUrl: string;
	public readonly Status: string;
}
export interface ServiceComponentOutputs {
	readonly ServiceArn: string;
	readonly ServiceId: string;
	readonly ServiceUrl: string;
	readonly Status: string;
}
export interface ServiceComponentInputs {
	readonly SourceConfiguration: SourceConfiguration;
	readonly AutoScalingConfigurationArn?: string | undefined;
	readonly EncryptionConfiguration?: EncryptionConfiguration | undefined;
	readonly HealthCheckConfiguration?: HealthCheckConfiguration | undefined;
	readonly InstanceConfiguration?: InstanceConfiguration | undefined;
	readonly NetworkConfiguration?: NetworkConfiguration | undefined;
	readonly ObservabilityConfiguration?: ServiceObservabilityConfiguration | undefined;
	readonly ServiceName?: string | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export class VpcConnector extends CfnResource<VpcConnectorComponentInputs> implements VpcConnectorComponentOutputs {
	constructor(entity: ADKEntity, options: VpcConnectorComponentInputs) {
		super(entity, options.LogicalId, "AWS::AppRunner::VpcConnector", options);
	}
	public readonly VpcConnectorArn: string;
	public readonly VpcConnectorRevision: number;
}
export interface VpcConnectorComponentOutputs {
	readonly VpcConnectorArn: string;
	readonly VpcConnectorRevision: number;
}
export interface VpcConnectorComponentInputs {
	readonly Subnets: string[];
	readonly SecurityGroups?: string[] | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly VpcConnectorName?: string | undefined;
	readonly LogicalId: string;
}
export class VpcIngressConnection
	extends CfnResource<VpcIngressConnectionComponentInputs>
	implements VpcIngressConnectionComponentOutputs
{
	constructor(entity: ADKEntity, options: VpcIngressConnectionComponentInputs) {
		super(entity, options.LogicalId, "AWS::AppRunner::VpcIngressConnection", options);
	}
	public readonly DomainName: string;
	public readonly Status: string;
	public readonly VpcIngressConnectionArn: string;
}
export interface VpcIngressConnectionComponentOutputs {
	readonly DomainName: string;
	readonly Status: string;
	readonly VpcIngressConnectionArn: string;
}
export interface VpcIngressConnectionComponentInputs {
	readonly IngressVpcConfiguration: IngressVpcConfiguration;
	readonly ServiceArn: string;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly VpcIngressConnectionName?: string | undefined;
	readonly LogicalId: string;
}
export interface TraceConfiguration {
	readonly Vendor: string;
}
export interface AuthenticationConfiguration {
	readonly AccessRoleArn?: string | undefined;
	readonly ConnectionArn?: string | undefined;
}
export interface CodeConfiguration {
	readonly CodeConfigurationValues?: CodeConfigurationValues | undefined;
	readonly ConfigurationSource: string;
}
export interface CodeConfigurationValues {
	readonly BuildCommand?: string | undefined;
	readonly Port?: string | undefined;
	readonly Runtime: string;
	readonly RuntimeEnvironmentVariables?: KeyValuePair[] | undefined;
	readonly StartCommand?: string | undefined;
}
export interface CodeRepository {
	readonly CodeConfiguration?: CodeConfiguration | undefined;
	readonly RepositoryUrl: string;
	readonly SourceCodeVersion: SourceCodeVersion;
}
export interface EgressConfiguration {
	readonly EgressType: string;
	readonly VpcConnectorArn?: string | undefined;
}
export interface EncryptionConfiguration {
	readonly KmsKey: string;
}
export interface HealthCheckConfiguration {
	readonly HealthyThreshold?: number | undefined;
	readonly Interval?: number | undefined;
	readonly Path?: string | undefined;
	readonly Protocol?: string | undefined;
	readonly Timeout?: number | undefined;
	readonly UnhealthyThreshold?: number | undefined;
}
export interface ImageConfiguration {
	readonly Port?: string | undefined;
	readonly RuntimeEnvironmentVariables?: KeyValuePair[] | undefined;
	readonly StartCommand?: string | undefined;
}
export interface ImageRepository {
	readonly ImageConfiguration?: ImageConfiguration | undefined;
	readonly ImageIdentifier: string;
	readonly ImageRepositoryType: string;
}
export interface IngressConfiguration {
	readonly IsPubliclyAccessible: boolean;
}
export interface InstanceConfiguration {
	readonly Cpu?: string | undefined;
	readonly InstanceRoleArn?: string | undefined;
	readonly Memory?: string | undefined;
}
export interface KeyValuePair {
	readonly Name?: string | undefined;
	readonly Value?: string | undefined;
}
export interface NetworkConfiguration {
	readonly EgressConfiguration?: EgressConfiguration | undefined;
	readonly IngressConfiguration?: IngressConfiguration | undefined;
}
export interface ServiceObservabilityConfiguration {
	readonly ObservabilityConfigurationArn?: string | undefined;
	readonly ObservabilityEnabled: boolean;
}
export interface SourceCodeVersion {
	readonly Type: string;
	readonly Value: string;
}
export interface SourceConfiguration {
	readonly AuthenticationConfiguration?: AuthenticationConfiguration | undefined;
	readonly AutoDeploymentsEnabled?: boolean | undefined;
	readonly CodeRepository?: CodeRepository | undefined;
	readonly ImageRepository?: ImageRepository | undefined;
}
export interface IngressVpcConfiguration {
	readonly VpcEndpointId: string;
	readonly VpcId: string;
}
export default {
	ObservabilityConfiguration: ObservabilityConfiguration,
	Service: Service,
	VpcConnector: VpcConnector,
	VpcIngressConnection: VpcIngressConnection,
};
