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
	readonly ChangeDescription?: (string | undefined) | undefined;
	readonly Data?: (string | undefined) | undefined;
	readonly Description?: (string | undefined) | undefined;
	readonly KmsKeyId?: (string | undefined) | undefined;
	readonly SupportedOsVersions?: (string[] | undefined) | undefined;
	readonly Tags?: ({ [key: string]: string } | undefined) | undefined;
	readonly Uri?: (string | undefined) | undefined;
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
	readonly Description?: (string | undefined) | undefined;
	readonly DockerfileTemplateData?: (string | undefined) | undefined;
	readonly DockerfileTemplateUri?: (string | undefined) | undefined;
	readonly ImageOsVersionOverride?: (string | undefined) | undefined;
	readonly InstanceConfiguration?: (InstanceConfiguration | undefined) | undefined;
	readonly KmsKeyId?: (string | undefined) | undefined;
	readonly PlatformOverride?: (string | undefined) | undefined;
	readonly Tags?: ({ [key: string]: string } | undefined) | undefined;
	readonly WorkingDirectory?: (string | undefined) | undefined;
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
	readonly Description?: (string | undefined) | undefined;
	readonly Tags?: ({ [key: string]: string } | undefined) | undefined;
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
	readonly ContainerRecipeArn?: (string | undefined) | undefined;
	readonly DistributionConfigurationArn?: (string | undefined) | undefined;
	readonly EnhancedImageMetadataEnabled?: (boolean | undefined) | undefined;
	readonly ImageRecipeArn?: (string | undefined) | undefined;
	readonly ImageTestsConfiguration?: (ImageTestsConfiguration | undefined) | undefined;
	readonly Tags?: ({ [key: string]: string } | undefined) | undefined;
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
	readonly ContainerRecipeArn?: (string | undefined) | undefined;
	readonly Description?: (string | undefined) | undefined;
	readonly DistributionConfigurationArn?: (string | undefined) | undefined;
	readonly EnhancedImageMetadataEnabled?: (boolean | undefined) | undefined;
	readonly ImageRecipeArn?: (string | undefined) | undefined;
	readonly ImageTestsConfiguration?: (ImageTestsConfiguration | undefined) | undefined;
	readonly Schedule?: (Schedule | undefined) | undefined;
	readonly Status?: (string | undefined) | undefined;
	readonly Tags?: ({ [key: string]: string } | undefined) | undefined;
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
	readonly AdditionalInstanceConfiguration?: (AdditionalInstanceConfiguration | undefined) | undefined;
	readonly BlockDeviceMappings?: (InstanceBlockDeviceMapping[] | undefined) | undefined;
	readonly Description?: (string | undefined) | undefined;
	readonly Tags?: ({ [key: string]: string } | undefined) | undefined;
	readonly WorkingDirectory?: (string | undefined) | undefined;
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
	readonly Description?: (string | undefined) | undefined;
	readonly InstanceMetadataOptions?: (InstanceMetadataOptions | undefined) | undefined;
	readonly InstanceTypes?: (string[] | undefined) | undefined;
	readonly KeyPair?: (string | undefined) | undefined;
	readonly Logging?: (Logging | undefined) | undefined;
	readonly ResourceTags?: ({ [key: string]: string } | undefined) | undefined;
	readonly SecurityGroupIds?: (string[] | undefined) | undefined;
	readonly SnsTopicArn?: (string | undefined) | undefined;
	readonly SubnetId?: (string | undefined) | undefined;
	readonly Tags?: ({ [key: string]: string } | undefined) | undefined;
	readonly TerminateInstanceOnFailure?: (boolean | undefined) | undefined;
	readonly LogicalId: string;
}
export interface ComponentConfiguration {
	readonly ComponentArn?: (string | undefined) | undefined;
	readonly Parameters?: (ComponentParameter[] | undefined) | undefined;
}
export interface ComponentParameter {
	readonly Name: string;
	readonly Value: string[];
}
export interface EbsInstanceBlockDeviceSpecification {
	readonly DeleteOnTermination?: (boolean | undefined) | undefined;
	readonly Encrypted?: (boolean | undefined) | undefined;
	readonly Iops?: (number | undefined) | undefined;
	readonly KmsKeyId?: (string | undefined) | undefined;
	readonly SnapshotId?: (string | undefined) | undefined;
	readonly Throughput?: (number | undefined) | undefined;
	readonly VolumeSize?: (number | undefined) | undefined;
	readonly VolumeType?: (string | undefined) | undefined;
}
export interface InstanceBlockDeviceMapping {
	readonly DeviceName?: (string | undefined) | undefined;
	readonly Ebs?: (EbsInstanceBlockDeviceSpecification | undefined) | undefined;
	readonly NoDevice?: (string | undefined) | undefined;
	readonly VirtualName?: (string | undefined) | undefined;
}
export interface InstanceConfiguration {
	readonly BlockDeviceMappings?: (InstanceBlockDeviceMapping[] | undefined) | undefined;
	readonly Image?: (string | undefined) | undefined;
}
export interface TargetContainerRepository {
	readonly RepositoryName?: (string | undefined) | undefined;
	readonly Service?: (string | undefined) | undefined;
}
export interface AmiDistributionConfiguration {
	readonly AmiTags?: ({ [key: string]: string } | undefined) | undefined;
	readonly Description?: (string | undefined) | undefined;
	readonly KmsKeyId?: (string | undefined) | undefined;
	readonly LaunchPermissionConfiguration?: (LaunchPermissionConfiguration | undefined) | undefined;
	readonly Name?: (string | undefined) | undefined;
	readonly TargetAccountIds?: (string[] | undefined) | undefined;
}
export interface ContainerDistributionConfiguration {
	readonly ContainerTags?: (string[] | undefined) | undefined;
	readonly Description?: (string | undefined) | undefined;
	readonly TargetRepository?: (TargetContainerRepository | undefined) | undefined;
}
export interface Distribution {
	readonly AmiDistributionConfiguration?: (any | undefined) | undefined;
	readonly ContainerDistributionConfiguration?: (any | undefined) | undefined;
	readonly FastLaunchConfigurations?: (FastLaunchConfiguration[] | undefined) | undefined;
	readonly LaunchTemplateConfigurations?: (LaunchTemplateConfiguration[] | undefined) | undefined;
	readonly LicenseConfigurationArns?: (string[] | undefined) | undefined;
	readonly Region: string;
}
export interface FastLaunchConfiguration {
	readonly AccountId?: (string | undefined) | undefined;
	readonly Enabled?: (boolean | undefined) | undefined;
	readonly LaunchTemplate?: (FastLaunchLaunchTemplateSpecification | undefined) | undefined;
	readonly MaxParallelLaunches?: (number | undefined) | undefined;
	readonly SnapshotConfiguration?: (FastLaunchSnapshotConfiguration | undefined) | undefined;
}
export interface FastLaunchLaunchTemplateSpecification {
	readonly LaunchTemplateId?: (string | undefined) | undefined;
	readonly LaunchTemplateName?: (string | undefined) | undefined;
	readonly LaunchTemplateVersion?: (string | undefined) | undefined;
}
export interface FastLaunchSnapshotConfiguration {
	readonly TargetResourceCount?: (number | undefined) | undefined;
}
export interface LaunchPermissionConfiguration {
	readonly OrganizationArns?: (string[] | undefined) | undefined;
	readonly OrganizationalUnitArns?: (string[] | undefined) | undefined;
	readonly UserGroups?: (string[] | undefined) | undefined;
	readonly UserIds?: (string[] | undefined) | undefined;
}
export interface LaunchTemplateConfiguration {
	readonly AccountId?: (string | undefined) | undefined;
	readonly LaunchTemplateId?: (string | undefined) | undefined;
	readonly SetDefaultVersion?: (boolean | undefined) | undefined;
}
export interface ImageTestsConfiguration {
	readonly ImageTestsEnabled?: (boolean | undefined) | undefined;
	readonly TimeoutMinutes?: (number | undefined) | undefined;
}
export interface Schedule {
	readonly PipelineExecutionStartCondition?: (string | undefined) | undefined;
	readonly ScheduleExpression?: (string | undefined) | undefined;
}
export interface AdditionalInstanceConfiguration {
	readonly SystemsManagerAgent?: (SystemsManagerAgent | undefined) | undefined;
	readonly UserDataOverride?: (string | undefined) | undefined;
}
export interface SystemsManagerAgent {
	readonly UninstallAfterBuild?: (boolean | undefined) | undefined;
}
export interface InstanceMetadataOptions {
	readonly HttpPutResponseHopLimit?: (number | undefined) | undefined;
	readonly HttpTokens?: (string | undefined) | undefined;
}
export interface Logging {
	readonly S3Logs?: (S3Logs | undefined) | undefined;
}
export interface S3Logs {
	readonly S3BucketName?: (string | undefined) | undefined;
	readonly S3KeyPrefix?: (string | undefined) | undefined;
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
