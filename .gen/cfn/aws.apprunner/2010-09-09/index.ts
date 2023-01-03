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
	readonly ObservabilityConfigurationName?: (string | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly TraceConfiguration?: (TraceConfiguration | undefined) | undefined;
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
	readonly AutoScalingConfigurationArn?: (string | undefined) | undefined;
	readonly EncryptionConfiguration?: (EncryptionConfiguration | undefined) | undefined;
	readonly HealthCheckConfiguration?: (HealthCheckConfiguration | undefined) | undefined;
	readonly InstanceConfiguration?: (InstanceConfiguration | undefined) | undefined;
	readonly NetworkConfiguration?: (NetworkConfiguration | undefined) | undefined;
	readonly ObservabilityConfiguration?: (ServiceObservabilityConfiguration | undefined) | undefined;
	readonly ServiceName?: (string | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
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
	readonly SecurityGroups?: (string[] | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly VpcConnectorName?: (string | undefined) | undefined;
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
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly VpcIngressConnectionName?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export interface TraceConfiguration {
	readonly Vendor: string;
}
export interface AuthenticationConfiguration {
	readonly AccessRoleArn?: (string | undefined) | undefined;
	readonly ConnectionArn?: (string | undefined) | undefined;
}
export interface CodeConfiguration {
	readonly CodeConfigurationValues?: (CodeConfigurationValues | undefined) | undefined;
	readonly ConfigurationSource: string;
}
export interface CodeConfigurationValues {
	readonly BuildCommand?: (string | undefined) | undefined;
	readonly Port?: (string | undefined) | undefined;
	readonly Runtime: string;
	readonly RuntimeEnvironmentVariables?: (KeyValuePair[] | undefined) | undefined;
	readonly StartCommand?: (string | undefined) | undefined;
}
export interface CodeRepository {
	readonly CodeConfiguration?: (CodeConfiguration | undefined) | undefined;
	readonly RepositoryUrl: string;
	readonly SourceCodeVersion: SourceCodeVersion;
}
export interface EgressConfiguration {
	readonly EgressType: string;
	readonly VpcConnectorArn?: (string | undefined) | undefined;
}
export interface EncryptionConfiguration {
	readonly KmsKey: string;
}
export interface HealthCheckConfiguration {
	readonly HealthyThreshold?: (number | undefined) | undefined;
	readonly Interval?: (number | undefined) | undefined;
	readonly Path?: (string | undefined) | undefined;
	readonly Protocol?: (string | undefined) | undefined;
	readonly Timeout?: (number | undefined) | undefined;
	readonly UnhealthyThreshold?: (number | undefined) | undefined;
}
export interface ImageConfiguration {
	readonly Port?: (string | undefined) | undefined;
	readonly RuntimeEnvironmentVariables?: (KeyValuePair[] | undefined) | undefined;
	readonly StartCommand?: (string | undefined) | undefined;
}
export interface ImageRepository {
	readonly ImageConfiguration?: (ImageConfiguration | undefined) | undefined;
	readonly ImageIdentifier: string;
	readonly ImageRepositoryType: string;
}
export interface IngressConfiguration {
	readonly IsPubliclyAccessible: boolean;
}
export interface InstanceConfiguration {
	readonly Cpu?: (string | undefined) | undefined;
	readonly InstanceRoleArn?: (string | undefined) | undefined;
	readonly Memory?: (string | undefined) | undefined;
}
export interface KeyValuePair {
	readonly Name?: (string | undefined) | undefined;
	readonly Value?: (string | undefined) | undefined;
}
export interface NetworkConfiguration {
	readonly EgressConfiguration?: (EgressConfiguration | undefined) | undefined;
	readonly IngressConfiguration?: (IngressConfiguration | undefined) | undefined;
}
export interface ServiceObservabilityConfiguration {
	readonly ObservabilityConfigurationArn?: (string | undefined) | undefined;
	readonly ObservabilityEnabled: boolean;
}
export interface SourceCodeVersion {
	readonly Type: string;
	readonly Value: string;
}
export interface SourceConfiguration {
	readonly AuthenticationConfiguration?: (AuthenticationConfiguration | undefined) | undefined;
	readonly AutoDeploymentsEnabled?: (boolean | undefined) | undefined;
	readonly CodeRepository?: (CodeRepository | undefined) | undefined;
	readonly ImageRepository?: (ImageRepository | undefined) | undefined;
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
