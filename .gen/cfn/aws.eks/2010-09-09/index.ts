import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class Addon extends CfnResource<AddonComponentInputs> implements AddonComponentOutputs {
	constructor(entity: ADKEntity, options: AddonComponentInputs) {
		super(entity, options.LogicalId, "AWS::EKS::Addon", options);
	}
	public readonly Arn: string;
}
export interface AddonComponentOutputs {
	readonly Arn: string;
}
export interface AddonComponentInputs {
	readonly AddonName: string;
	readonly ClusterName: string;
	readonly AddonVersion?: string | undefined;
	readonly ResolveConflicts?: string | undefined;
	readonly ServiceAccountRoleArn?: string | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export class Cluster extends CfnResource<ClusterComponentInputs> implements ClusterComponentOutputs {
	constructor(entity: ADKEntity, options: ClusterComponentInputs) {
		super(entity, options.LogicalId, "AWS::EKS::Cluster", options);
	}
	public readonly Arn: string;
	public readonly CertificateAuthorityData: string;
	public readonly ClusterSecurityGroupId: string;
	public readonly EncryptionConfigKeyArn: string;
	public readonly Endpoint: string;
	public readonly Id: string;
	public readonly KubernetesNetworkConfigServiceIpv6Cidr: string;
	public readonly OpenIdConnectIssuerUrl: string;
}
export interface ClusterComponentOutputs {
	readonly Arn: string;
	readonly CertificateAuthorityData: string;
	readonly ClusterSecurityGroupId: string;
	readonly EncryptionConfigKeyArn: string;
	readonly Endpoint: string;
	readonly Id: string;
	readonly KubernetesNetworkConfigServiceIpv6Cidr: string;
	readonly OpenIdConnectIssuerUrl: string;
}
export interface ClusterComponentInputs {
	readonly ResourcesVpcConfig: ResourcesVpcConfig;
	readonly RoleArn: string;
	readonly EncryptionConfig?: EncryptionConfig[] | undefined;
	readonly KubernetesNetworkConfig?: KubernetesNetworkConfig | undefined;
	readonly Logging?: Logging | undefined;
	readonly Name?: string | undefined;
	readonly OutpostConfig?: OutpostConfig | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly Version?: string | undefined;
	readonly LogicalId: string;
}
export class FargateProfile extends CfnResource<FargateProfileComponentInputs> implements FargateProfileComponentOutputs {
	constructor(entity: ADKEntity, options: FargateProfileComponentInputs) {
		super(entity, options.LogicalId, "AWS::EKS::FargateProfile", options);
	}
	public readonly Arn: string;
}
export interface FargateProfileComponentOutputs {
	readonly Arn: string;
}
export interface FargateProfileComponentInputs {
	readonly ClusterName: string;
	readonly PodExecutionRoleArn: string;
	readonly Selectors: Selector[];
	readonly FargateProfileName?: string | undefined;
	readonly Subnets?: string[] | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export class IdentityProviderConfig
	extends CfnResource<IdentityProviderConfigComponentInputs>
	implements IdentityProviderConfigComponentOutputs
{
	constructor(entity: ADKEntity, options: IdentityProviderConfigComponentInputs) {
		super(entity, options.LogicalId, "AWS::EKS::IdentityProviderConfig", options);
	}
	public readonly IdentityProviderConfigArn: string;
}
export interface IdentityProviderConfigComponentOutputs {
	readonly IdentityProviderConfigArn: string;
}
export interface IdentityProviderConfigComponentInputs {
	readonly ClusterName: string;
	readonly Type: string;
	readonly IdentityProviderConfigName?: string | undefined;
	readonly Oidc?: OidcIdentityProviderConfig | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export class Nodegroup extends CfnResource<NodegroupComponentInputs> implements NodegroupComponentOutputs {
	constructor(entity: ADKEntity, options: NodegroupComponentInputs) {
		super(entity, options.LogicalId, "AWS::EKS::Nodegroup", options);
	}
	public readonly Arn: string;
	public readonly ClusterName: string;
	public readonly Id: string;
}
export interface NodegroupComponentOutputs {
	readonly Arn: string;
	readonly ClusterName: string;
	readonly Id: string;
}
export interface NodegroupComponentInputs {
	readonly ClusterName: string;
	readonly NodeRole: string;
	readonly Subnets: string[];
	readonly AmiType?: string | undefined;
	readonly CapacityType?: string | undefined;
	readonly DiskSize?: number | undefined;
	readonly ForceUpdateEnabled?: boolean | undefined;
	readonly InstanceTypes?: string[] | undefined;
	readonly Labels?: any | undefined;
	readonly LaunchTemplate?: LaunchTemplateSpecification | undefined;
	readonly NodegroupName?: string;
	readonly ReleaseVersion?: string | undefined;
	readonly RemoteAccess?: RemoteAccess | undefined;
	readonly ScalingConfig?: ScalingConfig | undefined;
	readonly Tags?: any | undefined;
	readonly Taints?: Taint[] | undefined;
	readonly UpdateConfig?: UpdateConfig | undefined;
	readonly Version?: string | undefined;
	readonly LogicalId: string;
}
export interface ClusterLogging {
	readonly EnabledTypes?: LoggingTypeConfig[] | undefined;
}
export interface ControlPlanePlacement {
	readonly GroupName?: string | undefined;
}
export interface EncryptionConfig {
	readonly Provider?: Provider | undefined;
	readonly Resources?: string[] | undefined;
}
export interface KubernetesNetworkConfig {
	readonly IpFamily?: string | undefined;
	readonly ServiceIpv4Cidr?: string | undefined;
	readonly ServiceIpv6Cidr?: string | undefined;
}
export interface Logging {
	readonly ClusterLogging?: ClusterLogging | undefined;
}
export interface LoggingTypeConfig {
	readonly Type?: string | undefined;
}
export interface OutpostConfig {
	readonly ControlPlaneInstanceType: string;
	readonly ControlPlanePlacement?: ControlPlanePlacement | undefined;
	readonly OutpostArns: string[];
}
export interface Provider {
	readonly KeyArn?: string | undefined;
}
export interface ResourcesVpcConfig {
	readonly EndpointPrivateAccess?: boolean | undefined;
	readonly EndpointPublicAccess?: boolean | undefined;
	readonly PublicAccessCidrs?: string[] | undefined;
	readonly SecurityGroupIds?: string[] | undefined;
	readonly SubnetIds: string[];
}
export interface LabelOptions {
	readonly Key: string;
	readonly Value: string;
}
export interface Selector {
	readonly Labels?: LabelOptions[];
	readonly Namespace: string;
}
export interface OidcIdentityProviderConfig {
	readonly ClientId: string;
	readonly GroupsClaim?: string | undefined;
	readonly GroupsPrefix?: string | undefined;
	readonly IssuerUrl: string;
	readonly RequiredClaims?: RequiredClaim[] | undefined;
	readonly UsernameClaim?: string | undefined;
	readonly UsernamePrefix?: string | undefined;
}
export interface RequiredClaim {
	readonly Key: string;
	readonly Value: string;
}
export interface LaunchTemplateSpecification {
	readonly Id?: string | undefined;
	readonly Name?: string | undefined;
	readonly Version?: string | undefined;
}
export interface RemoteAccess {
	readonly Ec2SshKey: string;
	readonly SourceSecurityGroups?: string[] | undefined;
}
export interface ScalingConfig {
	readonly DesiredSize?: number | undefined;
	readonly MaxSize?: number | undefined;
	readonly MinSize?: number | undefined;
}
export interface Taint {
	readonly Effect?: string | undefined;
	readonly Key?: string | undefined;
	readonly Value?: string | undefined;
}
export interface UpdateConfig {
	readonly MaxUnavailable?: number | undefined;
	readonly MaxUnavailablePercentage?: number | undefined;
}
export default {
	Addon: Addon,
	Cluster: Cluster,
	FargateProfile: FargateProfile,
	IdentityProviderConfig: IdentityProviderConfig,
	Nodegroup: Nodegroup,
};
