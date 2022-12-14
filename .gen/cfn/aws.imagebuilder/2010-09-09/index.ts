import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class Component extends CfnResource<ComponentComponentInputs> implements ComponentComponentOutputs {
	constructor(entity: ADKEntity, options: ComponentComponentInputs) {
		super(entity, options.LogicalId, "AWS::ImageBuilder::Component", options);
	}
	public readonly Arn: string;
	public readonly Encrypted: boolean;
	public readonly Name: string;
	public readonly Type: string;
}
export interface ComponentComponentOutputs {
	readonly Arn: string;
	readonly Encrypted: boolean;
	readonly Name: string;
	readonly Type: string;
}
export interface ComponentComponentInputs {
	readonly Name: string;
	readonly Platform: string;
	readonly Version: string;
	readonly ChangeDescription?: string | undefined;
	readonly Data?: string | undefined;
	readonly Description?: string | undefined;
	readonly KmsKeyId?: string | undefined;
	readonly SupportedOsVersions?: string[] | undefined;
	readonly Tags?: { [key: string]: string } | undefined;
	readonly Uri?: string | undefined;
	readonly LogicalId: string;
}
export class ContainerRecipe
	extends CfnResource<ContainerRecipeComponentInputs>
	implements ContainerRecipeComponentOutputs
{
	constructor(entity: ADKEntity, options: ContainerRecipeComponentInputs) {
		super(entity, options.LogicalId, "AWS::ImageBuilder::ContainerRecipe", options);
	}
	public readonly Arn: string;
	public readonly Name: string;
}
export interface ContainerRecipeComponentOutputs {
	readonly Arn: string;
	readonly Name: string;
}
export interface ContainerRecipeComponentInputs {
	readonly Components: ComponentConfiguration[];
	readonly ContainerType: string;
	readonly Name: string;
	readonly ParentImage: string;
	readonly TargetRepository: TargetContainerRepository;
	readonly Version: string;
	readonly Description?: string | undefined;
	readonly DockerfileTemplateData?: string | undefined;
	readonly DockerfileTemplateUri?: string | undefined;
	readonly ImageOsVersionOverride?: string | undefined;
	readonly InstanceConfiguration?: InstanceConfiguration | undefined;
	readonly KmsKeyId?: string | undefined;
	readonly PlatformOverride?: string | undefined;
	readonly Tags?: { [key: string]: string } | undefined;
	readonly WorkingDirectory?: string | undefined;
	readonly LogicalId: string;
}
export class DistributionConfiguration
	extends CfnResource<DistributionConfigurationComponentInputs>
	implements DistributionConfigurationComponentOutputs
{
	constructor(entity: ADKEntity, options: DistributionConfigurationComponentInputs) {
		super(entity, options.LogicalId, "AWS::ImageBuilder::DistributionConfiguration", options);
	}
	public readonly Arn: string;
	public readonly Name: string;
}
export interface DistributionConfigurationComponentOutputs {
	readonly Arn: string;
	readonly Name: string;
}
export interface DistributionConfigurationComponentInputs {
	readonly Distributions: Distribution[];
	readonly Name: string;
	readonly Description?: string | undefined;
	readonly Tags?: { [key: string]: string } | undefined;
	readonly LogicalId: string;
}
export class Image extends CfnResource<ImageComponentInputs> implements ImageComponentOutputs {
	constructor(entity: ADKEntity, options: ImageComponentInputs) {
		super(entity, options.LogicalId, "AWS::ImageBuilder::Image", options);
	}
	public readonly Arn: string;
	public readonly ImageId: string;
	public readonly ImageUri: string;
	public readonly Name: string;
}
export interface ImageComponentOutputs {
	readonly Arn: string;
	readonly ImageId: string;
	readonly ImageUri: string;
	readonly Name: string;
}
export interface ImageComponentInputs {
	readonly InfrastructureConfigurationArn: string;
	readonly ContainerRecipeArn?: string | undefined;
	readonly DistributionConfigurationArn?: string | undefined;
	readonly EnhancedImageMetadataEnabled?: boolean | undefined;
	readonly ImageRecipeArn?: string | undefined;
	readonly ImageTestsConfiguration?: ImageTestsConfiguration | undefined;
	readonly Tags?: { [key: string]: string } | undefined;
	readonly LogicalId: string;
}
export class ImagePipeline extends CfnResource<ImagePipelineComponentInputs> implements ImagePipelineComponentOutputs {
	constructor(entity: ADKEntity, options: ImagePipelineComponentInputs) {
		super(entity, options.LogicalId, "AWS::ImageBuilder::ImagePipeline", options);
	}
	public readonly Arn: string;
	public readonly Name: string;
}
export interface ImagePipelineComponentOutputs {
	readonly Arn: string;
	readonly Name: string;
}
export interface ImagePipelineComponentInputs {
	readonly InfrastructureConfigurationArn: string;
	readonly Name: string;
	readonly ContainerRecipeArn?: string | undefined;
	readonly Description?: string | undefined;
	readonly DistributionConfigurationArn?: string | undefined;
	readonly EnhancedImageMetadataEnabled?: boolean | undefined;
	readonly ImageRecipeArn?: string | undefined;
	readonly ImageTestsConfiguration?: ImageTestsConfiguration | undefined;
	readonly Schedule?: Schedule | undefined;
	readonly Status?: string | undefined;
	readonly Tags?: { [key: string]: string } | undefined;
	readonly LogicalId: string;
}
export class ImageRecipe extends CfnResource<ImageRecipeComponentInputs> implements ImageRecipeComponentOutputs {
	constructor(entity: ADKEntity, options: ImageRecipeComponentInputs) {
		super(entity, options.LogicalId, "AWS::ImageBuilder::ImageRecipe", options);
	}
	public readonly Arn: string;
	public readonly Name: string;
}
export interface ImageRecipeComponentOutputs {
	readonly Arn: string;
	readonly Name: string;
}
export interface ImageRecipeComponentInputs {
	readonly Components: ComponentConfiguration[];
	readonly Name: string;
	readonly ParentImage: string;
	readonly Version: string;
	readonly AdditionalInstanceConfiguration?: AdditionalInstanceConfiguration | undefined;
	readonly BlockDeviceMappings?: InstanceBlockDeviceMapping[] | undefined;
	readonly Description?: string | undefined;
	readonly Tags?: { [key: string]: string } | undefined;
	readonly WorkingDirectory?: string | undefined;
	readonly LogicalId: string;
}
export class InfrastructureConfiguration
	extends CfnResource<InfrastructureConfigurationComponentInputs>
	implements InfrastructureConfigurationComponentOutputs
{
	constructor(entity: ADKEntity, options: InfrastructureConfigurationComponentInputs) {
		super(entity, options.LogicalId, "AWS::ImageBuilder::InfrastructureConfiguration", options);
	}
	public readonly Arn: string;
	public readonly Name: string;
}
export interface InfrastructureConfigurationComponentOutputs {
	readonly Arn: string;
	readonly Name: string;
}
export interface InfrastructureConfigurationComponentInputs {
	readonly InstanceProfileName: string;
	readonly Name: string;
	readonly Description?: string | undefined;
	readonly InstanceMetadataOptions?: InstanceMetadataOptions | undefined;
	readonly InstanceTypes?: string[] | undefined;
	readonly KeyPair?: string | undefined;
	readonly Logging?: Logging | undefined;
	readonly ResourceTags?: { [key: string]: string } | undefined;
	readonly SecurityGroupIds?: string[] | undefined;
	readonly SnsTopicArn?: string | undefined;
	readonly SubnetId?: string | undefined;
	readonly Tags?: { [key: string]: string } | undefined;
	readonly TerminateInstanceOnFailure?: boolean | undefined;
	readonly LogicalId: string;
}
export interface ComponentConfiguration {
	readonly ComponentArn?: string | undefined;
	readonly Parameters?: ComponentParameter[] | undefined;
}
export interface ComponentParameter {
	readonly Name: string;
	readonly Value: string[];
}
export interface EbsInstanceBlockDeviceSpecification {
	readonly DeleteOnTermination?: boolean | undefined;
	readonly Encrypted?: boolean | undefined;
	readonly Iops?: number | undefined;
	readonly KmsKeyId?: string | undefined;
	readonly SnapshotId?: string | undefined;
	readonly Throughput?: number | undefined;
	readonly VolumeSize?: number | undefined;
	readonly VolumeType?: string | undefined;
}
export interface InstanceBlockDeviceMapping {
	readonly DeviceName?: string | undefined;
	readonly Ebs?: EbsInstanceBlockDeviceSpecification | undefined;
	readonly NoDevice?: string | undefined;
	readonly VirtualName?: string | undefined;
}
export interface InstanceConfiguration {
	readonly BlockDeviceMappings?: InstanceBlockDeviceMapping[] | undefined;
	readonly Image?: string | undefined;
}
export interface TargetContainerRepository {
	readonly RepositoryName?: string | undefined;
	readonly Service?: string | undefined;
}
export interface AmiDistributionConfiguration {
	readonly AmiTags?: { [key: string]: string } | undefined;
	readonly Description?: string | undefined;
	readonly KmsKeyId?: string | undefined;
	readonly LaunchPermissionConfiguration?: LaunchPermissionConfiguration | undefined;
	readonly Name?: string | undefined;
	readonly TargetAccountIds?: string[] | undefined;
}
export interface ContainerDistributionConfiguration {
	readonly ContainerTags?: string[] | undefined;
	readonly Description?: string | undefined;
	readonly TargetRepository?: TargetContainerRepository | undefined;
}
export interface Distribution {
	readonly AmiDistributionConfiguration?: any | undefined;
	readonly ContainerDistributionConfiguration?: any | undefined;
	readonly FastLaunchConfigurations?: FastLaunchConfiguration[] | undefined;
	readonly LaunchTemplateConfigurations?: LaunchTemplateConfiguration[] | undefined;
	readonly LicenseConfigurationArns?: string[] | undefined;
	readonly Region: string;
}
export interface FastLaunchConfiguration {
	readonly AccountId?: string | undefined;
	readonly Enabled?: boolean | undefined;
	readonly LaunchTemplate?: FastLaunchLaunchTemplateSpecification | undefined;
	readonly MaxParallelLaunches?: number | undefined;
	readonly SnapshotConfiguration?: FastLaunchSnapshotConfiguration | undefined;
}
export interface FastLaunchLaunchTemplateSpecification {
	readonly LaunchTemplateId?: string | undefined;
	readonly LaunchTemplateName?: string | undefined;
	readonly LaunchTemplateVersion?: string | undefined;
}
export interface FastLaunchSnapshotConfiguration {
	readonly TargetResourceCount?: number | undefined;
}
export interface LaunchPermissionConfiguration {
	readonly OrganizationArns?: string[] | undefined;
	readonly OrganizationalUnitArns?: string[] | undefined;
	readonly UserGroups?: string[] | undefined;
	readonly UserIds?: string[] | undefined;
}
export interface LaunchTemplateConfiguration {
	readonly AccountId?: string | undefined;
	readonly LaunchTemplateId?: string | undefined;
	readonly SetDefaultVersion?: boolean | undefined;
}
export interface ImageTestsConfiguration {
	readonly ImageTestsEnabled?: boolean | undefined;
	readonly TimeoutMinutes?: number | undefined;
}
export interface Schedule {
	readonly PipelineExecutionStartCondition?: string | undefined;
	readonly ScheduleExpression?: string | undefined;
}
export interface AdditionalInstanceConfiguration {
	readonly SystemsManagerAgent?: SystemsManagerAgent | undefined;
	readonly UserDataOverride?: string | undefined;
}
export interface SystemsManagerAgent {
	readonly UninstallAfterBuild?: boolean | undefined;
}
export interface InstanceMetadataOptions {
	readonly HttpPutResponseHopLimit?: number | undefined;
	readonly HttpTokens?: string | undefined;
}
export interface Logging {
	readonly S3Logs?: S3Logs | undefined;
}
export interface S3Logs {
	readonly S3BucketName?: string | undefined;
	readonly S3KeyPrefix?: string | undefined;
}
export default {
	Component: Component,
	ContainerRecipe: ContainerRecipe,
	DistributionConfiguration: DistributionConfiguration,
	Image: Image,
	ImagePipeline: ImagePipeline,
	ImageRecipe: ImageRecipe,
	InfrastructureConfiguration: InfrastructureConfiguration,
};
