import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class App extends CfnResource<AppComponentInputs> implements AppComponentOutputs {
	constructor(entity: ADKEntity, options: AppComponentInputs) {
		super(entity, options.LogicalId, "AWS::SageMaker::App", options);
	}
	public readonly AppArn: string;
}
export interface AppComponentOutputs {
	readonly AppArn: string;
}
export interface AppComponentInputs {
	readonly AppName: string;
	readonly AppType: string;
	readonly DomainId: string;
	readonly UserProfileName: string;
	readonly ResourceSpec?: (ResourceSpec | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly LogicalId: string;
}
export class AppImageConfig extends CfnResource<AppImageConfigComponentInputs> implements AppImageConfigComponentOutputs {
	constructor(entity: ADKEntity, options: AppImageConfigComponentInputs) {
		super(entity, options.LogicalId, "AWS::SageMaker::AppImageConfig", options);
	}
	public readonly AppImageConfigArn: string;
}
export interface AppImageConfigComponentOutputs {
	readonly AppImageConfigArn: string;
}
export interface AppImageConfigComponentInputs {
	readonly AppImageConfigName: string;
	readonly KernelGatewayImageConfig?: (KernelGatewayImageConfig | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly LogicalId: string;
}
export class CodeRepository extends CfnResource<CodeRepositoryComponentInputs> implements CodeRepositoryComponentOutputs {
	constructor(entity: ADKEntity, options: CodeRepositoryComponentInputs) {
		super(entity, options.LogicalId, "AWS::SageMaker::CodeRepository", options);
	}
}
export interface CodeRepositoryComponentOutputs {}
export interface CodeRepositoryComponentInputs {
	readonly GitConfig: GitConfig;
	readonly CodeRepositoryName?: string | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly LogicalId: string;
}
export class DataQualityJobDefinition
	extends CfnResource<DataQualityJobDefinitionComponentInputs>
	implements DataQualityJobDefinitionComponentOutputs
{
	constructor(entity: ADKEntity, options: DataQualityJobDefinitionComponentInputs) {
		super(entity, options.LogicalId, "AWS::SageMaker::DataQualityJobDefinition", options);
	}
	public readonly CreationTime: string;
	public readonly JobDefinitionArn: string;
}
export interface DataQualityJobDefinitionComponentOutputs {
	readonly CreationTime: string;
	readonly JobDefinitionArn: string;
}
export interface DataQualityJobDefinitionComponentInputs {
	readonly DataQualityAppSpecification: DataQualityAppSpecification;
	readonly DataQualityJobInput: DataQualityJobInput;
	readonly DataQualityJobOutputConfig: MonitoringOutputConfig;
	readonly JobResources: MonitoringResources;
	readonly RoleArn: string;
	readonly DataQualityBaselineConfig?: (DataQualityBaselineConfig | undefined) | undefined;
	readonly EndpointName?: (string | undefined) | undefined;
	readonly JobDefinitionName?: (string | undefined) | undefined;
	readonly NetworkConfig?: (NetworkConfig | undefined) | undefined;
	readonly StoppingCondition?: (StoppingCondition | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly LogicalId: string;
}
export class Device extends CfnResource<DeviceComponentInputs> implements DeviceComponentOutputs {
	constructor(entity: ADKEntity, options: DeviceComponentInputs) {
		super(entity, options.LogicalId, "AWS::SageMaker::Device", options);
	}
}
export interface DeviceComponentOutputs {}
export interface DeviceComponentInputs {
	readonly DeviceFleetName: string;
	readonly Device?: (Device | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly LogicalId: string;
}
export class DeviceFleet extends CfnResource<DeviceFleetComponentInputs> implements DeviceFleetComponentOutputs {
	constructor(entity: ADKEntity, options: DeviceFleetComponentInputs) {
		super(entity, options.LogicalId, "AWS::SageMaker::DeviceFleet", options);
	}
}
export interface DeviceFleetComponentOutputs {}
export interface DeviceFleetComponentInputs {
	readonly DeviceFleetName: string;
	readonly OutputConfig: EdgeOutputConfig;
	readonly RoleArn: string;
	readonly Description?: (string | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly LogicalId: string;
}
export class Domain extends CfnResource<DomainComponentInputs> implements DomainComponentOutputs {
	constructor(entity: ADKEntity, options: DomainComponentInputs) {
		super(entity, options.LogicalId, "AWS::SageMaker::Domain", options);
	}
	public readonly DomainArn: string;
	public readonly DomainId: string;
	public readonly HomeEfsFileSystemId: string;
	public readonly SecurityGroupIdForDomainBoundary: string;
	public readonly SingleSignOnManagedApplicationInstanceId: string;
	public readonly Url: string;
}
export interface DomainComponentOutputs {
	readonly DomainArn: string;
	readonly DomainId: string;
	readonly HomeEfsFileSystemId: string;
	readonly SecurityGroupIdForDomainBoundary: string;
	readonly SingleSignOnManagedApplicationInstanceId: string;
	readonly Url: string;
}
export interface DomainComponentInputs {
	readonly AuthMode: string;
	readonly DefaultUserSettings: UserSettings;
	readonly DomainName: string;
	readonly SubnetIds: string[];
	readonly VpcId: string;
	readonly AppNetworkAccessType?: (string | undefined) | undefined;
	readonly AppSecurityGroupManagement?: (string | undefined) | undefined;
	readonly DomainSettings?: (DomainSettings | undefined) | undefined;
	readonly KmsKeyId?: (string | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly LogicalId: string;
}
export class Endpoint extends CfnResource<EndpointComponentInputs> implements EndpointComponentOutputs {
	constructor(entity: ADKEntity, options: EndpointComponentInputs) {
		super(entity, options.LogicalId, "AWS::SageMaker::Endpoint", options);
	}
}
export interface EndpointComponentOutputs {}
export interface EndpointComponentInputs {
	readonly EndpointConfigName: string;
	readonly DeploymentConfig?: (DeploymentConfig | undefined) | undefined;
	readonly EndpointName?: string | undefined;
	readonly ExcludeRetainedVariantProperties?: (Variant[] | undefined) | undefined;
	readonly RetainAllVariantProperties?: (boolean | undefined) | undefined;
	readonly RetainDeploymentConfig?: (boolean | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly LogicalId: string;
}
export class EndpointConfig extends CfnResource<EndpointConfigComponentInputs> implements EndpointConfigComponentOutputs {
	constructor(entity: ADKEntity, options: EndpointConfigComponentInputs) {
		super(entity, options.LogicalId, "AWS::SageMaker::EndpointConfig", options);
	}
}
export interface EndpointConfigComponentOutputs {}
export interface EndpointConfigComponentInputs {
	readonly ProductionVariants: ProductionVariant[];
	readonly AsyncInferenceConfig?: (AsyncInferenceConfig | undefined) | undefined;
	readonly DataCaptureConfig?: (DataCaptureConfig | undefined) | undefined;
	readonly EndpointConfigName?: string | undefined;
	readonly ExplainerConfig?: (ExplainerConfig | undefined) | undefined;
	readonly KmsKeyId?: (string | undefined) | undefined;
	readonly ShadowProductionVariants?: (ProductionVariant[] | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly LogicalId: string;
}
export class FeatureGroup extends CfnResource<FeatureGroupComponentInputs> implements FeatureGroupComponentOutputs {
	constructor(entity: ADKEntity, options: FeatureGroupComponentInputs) {
		super(entity, options.LogicalId, "AWS::SageMaker::FeatureGroup", options);
	}
}
export interface FeatureGroupComponentOutputs {}
export interface FeatureGroupComponentInputs {
	readonly EventTimeFeatureName: string;
	readonly FeatureDefinitions: FeatureDefinition[];
	readonly FeatureGroupName: string;
	readonly RecordIdentifierFeatureName: string;
	readonly Description?: (string | undefined) | undefined;
	readonly OfflineStoreConfig?: (OfflineStoreConfig | undefined) | undefined;
	readonly OnlineStoreConfig?: (OnlineStoreConfig | undefined) | undefined;
	readonly RoleArn?: (string | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly LogicalId: string;
}
export class Image extends CfnResource<ImageComponentInputs> implements ImageComponentOutputs {
	constructor(entity: ADKEntity, options: ImageComponentInputs) {
		super(entity, options.LogicalId, "AWS::SageMaker::Image", options);
	}
	public readonly ImageArn: string;
}
export interface ImageComponentOutputs {
	readonly ImageArn: string;
}
export interface ImageComponentInputs {
	readonly ImageName: string;
	readonly ImageRoleArn: string;
	readonly ImageDescription?: (string | undefined) | undefined;
	readonly ImageDisplayName?: (string | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly LogicalId: string;
}
export class ImageVersion extends CfnResource<ImageVersionComponentInputs> implements ImageVersionComponentOutputs {
	constructor(entity: ADKEntity, options: ImageVersionComponentInputs) {
		super(entity, options.LogicalId, "AWS::SageMaker::ImageVersion", options);
	}
	public readonly ContainerImage: string;
	public readonly ImageArn: string;
	public readonly ImageVersionArn: string;
	public readonly Version: number;
}
export interface ImageVersionComponentOutputs {
	readonly ContainerImage: string;
	readonly ImageArn: string;
	readonly ImageVersionArn: string;
	readonly Version: number;
}
export interface ImageVersionComponentInputs {
	readonly BaseImage: string;
	readonly ImageName: string;
	readonly LogicalId: string;
}
export class Model extends CfnResource<ModelComponentInputs> implements ModelComponentOutputs {
	constructor(entity: ADKEntity, options: ModelComponentInputs) {
		super(entity, options.LogicalId, "AWS::SageMaker::Model", options);
	}
}
export interface ModelComponentOutputs {}
export interface ModelComponentInputs {
	readonly ExecutionRoleArn: string;
	readonly Containers?: (ContainerDefinition[] | undefined) | undefined;
	readonly EnableNetworkIsolation?: (boolean | undefined) | undefined;
	readonly InferenceExecutionConfig?: (InferenceExecutionConfig | undefined) | undefined;
	readonly ModelName?: string | undefined;
	readonly PrimaryContainer?: (ContainerDefinition | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly VpcConfig?: (VpcConfig | undefined) | undefined;
	readonly LogicalId: string;
}
export class ModelBiasJobDefinition
	extends CfnResource<ModelBiasJobDefinitionComponentInputs>
	implements ModelBiasJobDefinitionComponentOutputs
{
	constructor(entity: ADKEntity, options: ModelBiasJobDefinitionComponentInputs) {
		super(entity, options.LogicalId, "AWS::SageMaker::ModelBiasJobDefinition", options);
	}
	public readonly CreationTime: string;
	public readonly JobDefinitionArn: string;
}
export interface ModelBiasJobDefinitionComponentOutputs {
	readonly CreationTime: string;
	readonly JobDefinitionArn: string;
}
export interface ModelBiasJobDefinitionComponentInputs {
	readonly JobResources: MonitoringResources;
	readonly ModelBiasAppSpecification: ModelBiasAppSpecification;
	readonly ModelBiasJobInput: ModelBiasJobInput;
	readonly ModelBiasJobOutputConfig: MonitoringOutputConfig;
	readonly RoleArn: string;
	readonly EndpointName?: (string | undefined) | undefined;
	readonly JobDefinitionName?: (string | undefined) | undefined;
	readonly ModelBiasBaselineConfig?: (ModelBiasBaselineConfig | undefined) | undefined;
	readonly NetworkConfig?: (NetworkConfig | undefined) | undefined;
	readonly StoppingCondition?: (StoppingCondition | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly LogicalId: string;
}
export class ModelExplainabilityJobDefinition
	extends CfnResource<ModelExplainabilityJobDefinitionComponentInputs>
	implements ModelExplainabilityJobDefinitionComponentOutputs
{
	constructor(entity: ADKEntity, options: ModelExplainabilityJobDefinitionComponentInputs) {
		super(entity, options.LogicalId, "AWS::SageMaker::ModelExplainabilityJobDefinition", options);
	}
	public readonly CreationTime: string;
	public readonly JobDefinitionArn: string;
}
export interface ModelExplainabilityJobDefinitionComponentOutputs {
	readonly CreationTime: string;
	readonly JobDefinitionArn: string;
}
export interface ModelExplainabilityJobDefinitionComponentInputs {
	readonly JobResources: MonitoringResources;
	readonly ModelExplainabilityAppSpecification: ModelExplainabilityAppSpecification;
	readonly ModelExplainabilityJobInput: ModelExplainabilityJobInput;
	readonly ModelExplainabilityJobOutputConfig: MonitoringOutputConfig;
	readonly RoleArn: string;
	readonly EndpointName?: (string | undefined) | undefined;
	readonly JobDefinitionName?: (string | undefined) | undefined;
	readonly ModelExplainabilityBaselineConfig?: (ModelExplainabilityBaselineConfig | undefined) | undefined;
	readonly NetworkConfig?: (NetworkConfig | undefined) | undefined;
	readonly StoppingCondition?: (StoppingCondition | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly LogicalId: string;
}
export class ModelPackage extends CfnResource<ModelPackageComponentInputs> implements ModelPackageComponentOutputs {
	constructor(entity: ADKEntity, options: ModelPackageComponentInputs) {
		super(entity, options.LogicalId, "AWS::SageMaker::ModelPackage", options);
	}
	public readonly CreationTime: string;
	public readonly ModelPackageArn: string;
	public readonly ModelPackageStatus: string;
}
export interface ModelPackageComponentOutputs {
	readonly CreationTime: string;
	readonly ModelPackageArn: string;
	readonly ModelPackageStatus: string;
}
export interface ModelPackageComponentInputs {
	readonly AdditionalInferenceSpecificationDefinition?:
		| (AdditionalInferenceSpecificationDefinition | undefined)
		| undefined;
	readonly AdditionalInferenceSpecifications?: (AdditionalInferenceSpecificationDefinition[] | undefined) | undefined;
	readonly AdditionalInferenceSpecificationsToAdd?:
		| (AdditionalInferenceSpecificationDefinition[] | undefined)
		| undefined;
	readonly ApprovalDescription?: (string | undefined) | undefined;
	readonly CertifyForMarketplace?: (boolean | undefined) | undefined;
	readonly ClientToken?: (string | undefined) | undefined;
	readonly CreatedBy?: (UserContext | undefined) | undefined;
	readonly CustomerMetadataProperties?: ({ [key: string]: string } | undefined) | undefined;
	readonly Domain?: (string | undefined) | undefined;
	readonly DriftCheckBaselines?: (DriftCheckBaselines | undefined) | undefined;
	readonly Environment?: ({ [key: string]: string } | undefined) | undefined;
	readonly InferenceSpecification?: (InferenceSpecification | undefined) | undefined;
	readonly LastModifiedBy?: (UserContext | undefined) | undefined;
	readonly LastModifiedTime?: (string | undefined) | undefined;
	readonly MetadataProperties?: (MetadataProperties | undefined) | undefined;
	readonly ModelApprovalStatus?: (string | undefined) | undefined;
	readonly ModelMetrics?: (ModelMetrics | undefined) | undefined;
	readonly ModelPackageDescription?: (string | undefined) | undefined;
	readonly ModelPackageGroupName?: (string | undefined) | undefined;
	readonly ModelPackageName?: (string | undefined) | undefined;
	readonly ModelPackageStatusDetails?: (ModelPackageStatusDetails | undefined) | undefined;
	readonly ModelPackageStatusItem?: (ModelPackageStatusItem | undefined) | undefined;
	readonly ModelPackageVersion?: (number | undefined) | undefined;
	readonly SamplePayloadUrl?: (string | undefined) | undefined;
	readonly SourceAlgorithmSpecification?: (SourceAlgorithmSpecification | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly Task?: (string | undefined) | undefined;
	readonly ValidationSpecification?: (ValidationSpecification | undefined) | undefined;
	readonly LogicalId: string;
}
export class ModelPackageGroup
	extends CfnResource<ModelPackageGroupComponentInputs>
	implements ModelPackageGroupComponentOutputs
{
	constructor(entity: ADKEntity, options: ModelPackageGroupComponentInputs) {
		super(entity, options.LogicalId, "AWS::SageMaker::ModelPackageGroup", options);
	}
	public readonly CreationTime: string;
	public readonly ModelPackageGroupArn: string;
	public readonly ModelPackageGroupStatus: string;
}
export interface ModelPackageGroupComponentOutputs {
	readonly CreationTime: string;
	readonly ModelPackageGroupArn: string;
	readonly ModelPackageGroupStatus: string;
}
export interface ModelPackageGroupComponentInputs {
	readonly ModelPackageGroupName: string;
	readonly ModelPackageGroupDescription?: (string | undefined) | undefined;
	readonly ModelPackageGroupPolicy?: (any | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly LogicalId: string;
}
export class ModelQualityJobDefinition
	extends CfnResource<ModelQualityJobDefinitionComponentInputs>
	implements ModelQualityJobDefinitionComponentOutputs
{
	constructor(entity: ADKEntity, options: ModelQualityJobDefinitionComponentInputs) {
		super(entity, options.LogicalId, "AWS::SageMaker::ModelQualityJobDefinition", options);
	}
	public readonly CreationTime: string;
	public readonly JobDefinitionArn: string;
}
export interface ModelQualityJobDefinitionComponentOutputs {
	readonly CreationTime: string;
	readonly JobDefinitionArn: string;
}
export interface ModelQualityJobDefinitionComponentInputs {
	readonly JobResources: MonitoringResources;
	readonly ModelQualityAppSpecification: ModelQualityAppSpecification;
	readonly ModelQualityJobInput: ModelQualityJobInput;
	readonly ModelQualityJobOutputConfig: MonitoringOutputConfig;
	readonly RoleArn: string;
	readonly EndpointName?: (string | undefined) | undefined;
	readonly JobDefinitionName?: (string | undefined) | undefined;
	readonly ModelQualityBaselineConfig?: (ModelQualityBaselineConfig | undefined) | undefined;
	readonly NetworkConfig?: (NetworkConfig | undefined) | undefined;
	readonly StoppingCondition?: (StoppingCondition | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly LogicalId: string;
}
export class MonitoringSchedule
	extends CfnResource<MonitoringScheduleComponentInputs>
	implements MonitoringScheduleComponentOutputs
{
	constructor(entity: ADKEntity, options: MonitoringScheduleComponentInputs) {
		super(entity, options.LogicalId, "AWS::SageMaker::MonitoringSchedule", options);
	}
	public readonly CreationTime: string;
	public readonly LastModifiedTime: string;
	public readonly MonitoringScheduleArn: string;
}
export interface MonitoringScheduleComponentOutputs {
	readonly CreationTime: string;
	readonly LastModifiedTime: string;
	readonly MonitoringScheduleArn: string;
}
export interface MonitoringScheduleComponentInputs {
	readonly MonitoringScheduleConfig: MonitoringScheduleConfig;
	readonly MonitoringScheduleName: string;
	readonly EndpointName?: (string | undefined) | undefined;
	readonly FailureReason?: (string | undefined) | undefined;
	readonly LastMonitoringExecutionSummary?: (MonitoringExecutionSummary | undefined) | undefined;
	readonly MonitoringScheduleStatus?: (string | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly LogicalId: string;
}
export class NotebookInstance
	extends CfnResource<NotebookInstanceComponentInputs>
	implements NotebookInstanceComponentOutputs
{
	constructor(entity: ADKEntity, options: NotebookInstanceComponentInputs) {
		super(entity, options.LogicalId, "AWS::SageMaker::NotebookInstance", options);
	}
}
export interface NotebookInstanceComponentOutputs {}
export interface NotebookInstanceComponentInputs {
	readonly InstanceType: string;
	readonly RoleArn: string;
	readonly AcceleratorTypes?: (string[] | undefined) | undefined;
	readonly AdditionalCodeRepositories?: (string[] | undefined) | undefined;
	readonly DefaultCodeRepository?: (string | undefined) | undefined;
	readonly DirectInternetAccess?: (string | undefined) | undefined;
	readonly InstanceMetadataServiceConfiguration?: (InstanceMetadataServiceConfiguration | undefined) | undefined;
	readonly KmsKeyId?: (string | undefined) | undefined;
	readonly LifecycleConfigName?: (string | undefined) | undefined;
	readonly NotebookInstanceName?: string | undefined;
	readonly PlatformIdentifier?: (string | undefined) | undefined;
	readonly RootAccess?: (string | undefined) | undefined;
	readonly SecurityGroupIds?: (string[] | undefined) | undefined;
	readonly SubnetId?: (string | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly VolumeSizeInGB?: (number | undefined) | undefined;
	readonly LogicalId: string;
}
export class NotebookInstanceLifecycleConfig
	extends CfnResource<NotebookInstanceLifecycleConfigComponentInputs>
	implements NotebookInstanceLifecycleConfigComponentOutputs
{
	constructor(entity: ADKEntity, options: NotebookInstanceLifecycleConfigComponentInputs) {
		super(entity, options.LogicalId, "AWS::SageMaker::NotebookInstanceLifecycleConfig", options);
	}
}
export interface NotebookInstanceLifecycleConfigComponentOutputs {}
export interface NotebookInstanceLifecycleConfigComponentInputs {
	readonly NotebookInstanceLifecycleConfigName?: string | undefined;
	readonly OnCreate?: (NotebookInstanceLifecycleHook[] | undefined) | undefined;
	readonly OnStart?: (NotebookInstanceLifecycleHook[] | undefined) | undefined;
	readonly LogicalId: string;
}
export class Pipeline extends CfnResource<PipelineComponentInputs> implements PipelineComponentOutputs {
	constructor(entity: ADKEntity, options: PipelineComponentInputs) {
		super(entity, options.LogicalId, "AWS::SageMaker::Pipeline", options);
	}
}
export interface PipelineComponentOutputs {}
export interface PipelineComponentInputs {
	readonly PipelineDefinition: PipelineDefinition;
	readonly PipelineName: string;
	readonly RoleArn: string;
	readonly ParallelismConfiguration?: (ParallelismConfiguration | undefined) | undefined;
	readonly PipelineDescription?: (string | undefined) | undefined;
	readonly PipelineDisplayName?: (string | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly LogicalId: string;
}
export class Project extends CfnResource<ProjectComponentInputs> implements ProjectComponentOutputs {
	constructor(entity: ADKEntity, options: ProjectComponentInputs) {
		super(entity, options.LogicalId, "AWS::SageMaker::Project", options);
	}
	public readonly CreationTime: string;
	public readonly ProjectArn: string;
	public readonly ProjectId: string;
	public readonly ProjectStatus: string;
	public readonly ServiceCatalogProvisionedProductDetailsProvisionedProductId: string;
	public readonly ServiceCatalogProvisionedProductDetailsProvisionedProductStatusMessage: string;
}
export interface ProjectComponentOutputs {
	readonly CreationTime: string;
	readonly ProjectArn: string;
	readonly ProjectId: string;
	readonly ProjectStatus: string;
	readonly ServiceCatalogProvisionedProductDetailsProvisionedProductId: string;
	readonly ServiceCatalogProvisionedProductDetailsProvisionedProductStatusMessage: string;
}
export interface ProjectComponentInputs {
	readonly ProjectName: string;
	readonly ServiceCatalogProvisioningDetails: ServiceCatalogProvisioningDetails;
	readonly ProjectDescription?: (string | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly LogicalId: string;
}
export class UserProfile extends CfnResource<UserProfileComponentInputs> implements UserProfileComponentOutputs {
	constructor(entity: ADKEntity, options: UserProfileComponentInputs) {
		super(entity, options.LogicalId, "AWS::SageMaker::UserProfile", options);
	}
	public readonly UserProfileArn: string;
}
export interface UserProfileComponentOutputs {
	readonly UserProfileArn: string;
}
export interface UserProfileComponentInputs {
	readonly DomainId: string;
	readonly UserProfileName: string;
	readonly SingleSignOnUserIdentifier?: (string | undefined) | undefined;
	readonly SingleSignOnUserValue?: (string | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly UserSettings?: (UserSettings | undefined) | undefined;
	readonly LogicalId: string;
}
export class Workteam extends CfnResource<WorkteamComponentInputs> implements WorkteamComponentOutputs {
	constructor(entity: ADKEntity, options: WorkteamComponentInputs) {
		super(entity, options.LogicalId, "AWS::SageMaker::Workteam", options);
	}
}
export interface WorkteamComponentOutputs {}
export interface WorkteamComponentInputs {
	readonly Description?: (string | undefined) | undefined;
	readonly MemberDefinitions?: (MemberDefinition[] | undefined) | undefined;
	readonly NotificationConfiguration?: (NotificationConfiguration | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly WorkforceName?: (string | undefined) | undefined;
	readonly WorkteamName?: string | undefined;
	readonly LogicalId: string;
}
export interface ResourceSpec {
	readonly InstanceType?: (string | undefined) | undefined;
	readonly SageMakerImageArn?: (string | undefined) | undefined;
	readonly SageMakerImageVersionArn?: (string | undefined) | undefined;
}
export interface FileSystemConfig {
	readonly DefaultGid?: (number | undefined) | undefined;
	readonly DefaultUid?: (number | undefined) | undefined;
	readonly MountPath?: (string | undefined) | undefined;
}
export interface KernelGatewayImageConfig {
	readonly FileSystemConfig?: (FileSystemConfig | undefined) | undefined;
	readonly KernelSpecs: KernelSpec[];
}
export interface KernelSpec {
	readonly DisplayName?: (string | undefined) | undefined;
	readonly Name: string;
}
export interface GitConfig {
	readonly Branch?: (string | undefined) | undefined;
	readonly RepositoryUrl: string;
	readonly SecretArn?: (string | undefined) | undefined;
}
export interface BatchTransformInput {
	readonly DataCapturedDestinationS3Uri: string;
	readonly DatasetFormat: DatasetFormat;
	readonly LocalPath: string;
	readonly S3DataDistributionType?: (string | undefined) | undefined;
	readonly S3InputMode?: (string | undefined) | undefined;
}
export interface ClusterConfig {
	readonly InstanceCount: number;
	readonly InstanceType: string;
	readonly VolumeKmsKeyId?: (string | undefined) | undefined;
	readonly VolumeSizeInGB: number;
}
export interface ConstraintsResource {
	readonly S3Uri?: (string | undefined) | undefined;
}
export interface Csv {
	readonly Header?: (boolean | undefined) | undefined;
}
export interface DataQualityAppSpecification {
	readonly ContainerArguments?: (string[] | undefined) | undefined;
	readonly ContainerEntrypoint?: (string[] | undefined) | undefined;
	readonly Environment?: ({ [key: string]: string } | undefined) | undefined;
	readonly ImageUri: string;
	readonly PostAnalyticsProcessorSourceUri?: (string | undefined) | undefined;
	readonly RecordPreprocessorSourceUri?: (string | undefined) | undefined;
}
export interface DataQualityBaselineConfig {
	readonly BaseliningJobName?: (string | undefined) | undefined;
	readonly ConstraintsResource?: (ConstraintsResource | undefined) | undefined;
	readonly StatisticsResource?: (StatisticsResource | undefined) | undefined;
}
export interface DataQualityJobInput {
	readonly BatchTransformInput?: (BatchTransformInput | undefined) | undefined;
	readonly EndpointInput?: (EndpointInput | undefined) | undefined;
}
export interface DatasetFormat {
	readonly Csv?: (Csv | undefined) | undefined;
	readonly Json?: (any | undefined) | undefined;
	readonly Parquet?: (boolean | undefined) | undefined;
}
export interface EndpointInput {
	readonly EndpointName: string;
	readonly LocalPath: string;
	readonly S3DataDistributionType?: (string | undefined) | undefined;
	readonly S3InputMode?: (string | undefined) | undefined;
}
export interface Json {
	readonly Line?: (boolean | undefined) | undefined;
}
export interface MonitoringOutput {
	readonly S3Output: S3Output;
}
export interface MonitoringOutputConfig {
	readonly KmsKeyId?: (string | undefined) | undefined;
	readonly MonitoringOutputs: MonitoringOutput[];
}
export interface MonitoringResources {
	readonly ClusterConfig: ClusterConfig;
}
export interface NetworkConfig {
	readonly EnableInterContainerTrafficEncryption?: (boolean | undefined) | undefined;
	readonly EnableNetworkIsolation?: (boolean | undefined) | undefined;
	readonly VpcConfig?: (VpcConfig | undefined) | undefined;
}
export interface S3Output {
	readonly LocalPath: string;
	readonly S3UploadMode?: (string | undefined) | undefined;
	readonly S3Uri: string;
}
export interface StatisticsResource {
	readonly S3Uri?: (string | undefined) | undefined;
}
export interface StoppingCondition {
	readonly MaxRuntimeInSeconds: number;
}
export interface VpcConfig {
	readonly SecurityGroupIds: string[];
	readonly Subnets: string[];
}
export interface Device {
	readonly Description?: (string | undefined) | undefined;
	readonly DeviceName: string;
	readonly IotThingName?: (string | undefined) | undefined;
}
export interface EdgeOutputConfig {
	readonly KmsKeyId?: (string | undefined) | undefined;
	readonly S3OutputLocation: string;
}
export interface CustomImage {
	readonly AppImageConfigName: string;
	readonly ImageName: string;
	readonly ImageVersionNumber?: (number | undefined) | undefined;
}
export interface DomainSettings {
	readonly RStudioServerProDomainSettings?: (RStudioServerProDomainSettings | undefined) | undefined;
	readonly SecurityGroupIds?: (string[] | undefined) | undefined;
}
export interface JupyterServerAppSettings {
	readonly DefaultResourceSpec?: (ResourceSpec | undefined) | undefined;
}
export interface KernelGatewayAppSettings {
	readonly CustomImages?: (CustomImage[] | undefined) | undefined;
	readonly DefaultResourceSpec?: (ResourceSpec | undefined) | undefined;
}
export interface RSessionAppSettings {
	readonly CustomImages?: (CustomImage[] | undefined) | undefined;
	readonly DefaultResourceSpec?: (ResourceSpec | undefined) | undefined;
}
export interface RStudioServerProAppSettings {
	readonly AccessStatus?: (string | undefined) | undefined;
	readonly UserGroup?: (string | undefined) | undefined;
}
export interface RStudioServerProDomainSettings {
	readonly DefaultResourceSpec?: (ResourceSpec | undefined) | undefined;
	readonly DomainExecutionRoleArn: string;
	readonly RStudioConnectUrl?: (string | undefined) | undefined;
	readonly RStudioPackageManagerUrl?: (string | undefined) | undefined;
}
export interface SharingSettings {
	readonly NotebookOutputOption?: (string | undefined) | undefined;
	readonly S3KmsKeyId?: (string | undefined) | undefined;
	readonly S3OutputPath?: (string | undefined) | undefined;
}
export interface UserSettings {
	readonly ExecutionRole?: (string | undefined) | undefined;
	readonly JupyterServerAppSettings?: (JupyterServerAppSettings | undefined) | undefined;
	readonly KernelGatewayAppSettings?: (KernelGatewayAppSettings | undefined) | undefined;
	readonly RSessionAppSettings?: (RSessionAppSettings | undefined) | undefined;
	readonly RStudioServerProAppSettings?: (RStudioServerProAppSettings | undefined) | undefined;
	readonly SecurityGroups?: (string[] | undefined) | undefined;
	readonly SharingSettings?: (SharingSettings | undefined) | undefined;
}
export interface Alarm {
	readonly AlarmName: string;
}
export interface AutoRollbackConfig {
	readonly Alarms: Alarm[];
}
export interface BlueGreenUpdatePolicy {
	readonly MaximumExecutionTimeoutInSeconds?: (number | undefined) | undefined;
	readonly TerminationWaitInSeconds?: (number | undefined) | undefined;
	readonly TrafficRoutingConfiguration: TrafficRoutingConfig;
}
export interface CapacitySize {
	readonly Type: string;
	readonly Value: number;
}
export interface DeploymentConfig {
	readonly AutoRollbackConfiguration?: (AutoRollbackConfig | undefined) | undefined;
	readonly BlueGreenUpdatePolicy: BlueGreenUpdatePolicy;
}
export interface TrafficRoutingConfig {
	readonly CanarySize?: (CapacitySize | undefined) | undefined;
	readonly LinearStepSize?: (CapacitySize | undefined) | undefined;
	readonly Type: string;
	readonly WaitIntervalInSeconds?: (number | undefined) | undefined;
}
export interface Variant {
	readonly VariantPropertyType?: (string | undefined) | undefined;
}
export interface AsyncInferenceClientConfig {
	readonly MaxConcurrentInvocationsPerInstance?: (number | undefined) | undefined;
}
export interface AsyncInferenceConfig {
	readonly ClientConfig?: (AsyncInferenceClientConfig | undefined) | undefined;
	readonly OutputConfig: AsyncInferenceOutputConfig;
}
export interface AsyncInferenceNotificationConfig {
	readonly ErrorTopic?: (string | undefined) | undefined;
	readonly SuccessTopic?: (string | undefined) | undefined;
}
export interface AsyncInferenceOutputConfig {
	readonly KmsKeyId?: (string | undefined) | undefined;
	readonly NotificationConfig?: (AsyncInferenceNotificationConfig | undefined) | undefined;
	readonly S3OutputPath: string;
}
export interface CaptureContentTypeHeader {
	readonly CsvContentTypes?: (string[] | undefined) | undefined;
	readonly JsonContentTypes?: (string[] | undefined) | undefined;
}
export interface CaptureOption {
	readonly CaptureMode: string;
}
export interface ClarifyExplainerConfig {
	readonly EnableExplanations?: (string | undefined) | undefined;
	readonly InferenceConfig?: (ClarifyInferenceConfig | undefined) | undefined;
	readonly ShapConfig: ClarifyShapConfig;
}
export interface ClarifyInferenceConfig {
	readonly ContentTemplate?: (string | undefined) | undefined;
	readonly FeatureHeaders?: (string[] | undefined) | undefined;
	readonly FeatureTypes?: (string[] | undefined) | undefined;
	readonly FeaturesAttribute?: (string | undefined) | undefined;
	readonly LabelAttribute?: (string | undefined) | undefined;
	readonly LabelHeaders?: (string[] | undefined) | undefined;
	readonly LabelIndex?: (number | undefined) | undefined;
	readonly MaxPayloadInMB?: (number | undefined) | undefined;
	readonly MaxRecordCount?: (number | undefined) | undefined;
	readonly ProbabilityAttribute?: (string | undefined) | undefined;
	readonly ProbabilityIndex?: (number | undefined) | undefined;
}
export interface ClarifyShapBaselineConfig {
	readonly MimeType?: (string | undefined) | undefined;
	readonly ShapBaseline?: (string | undefined) | undefined;
	readonly ShapBaselineUri?: (string | undefined) | undefined;
}
export interface ClarifyShapConfig {
	readonly NumberOfSamples?: (number | undefined) | undefined;
	readonly Seed?: (number | undefined) | undefined;
	readonly ShapBaselineConfig: ClarifyShapBaselineConfig;
	readonly TextConfig?: (ClarifyTextConfig | undefined) | undefined;
	readonly UseLogit?: (boolean | undefined) | undefined;
}
export interface ClarifyTextConfig {
	readonly Granularity: string;
	readonly Language: string;
}
export interface DataCaptureConfig {
	readonly CaptureContentTypeHeader?: (CaptureContentTypeHeader | undefined) | undefined;
	readonly CaptureOptions: CaptureOption[];
	readonly DestinationS3Uri: string;
	readonly EnableCapture?: (boolean | undefined) | undefined;
	readonly InitialSamplingPercentage: number;
	readonly KmsKeyId?: (string | undefined) | undefined;
}
export interface ExplainerConfig {
	readonly ClarifyExplainerConfig?: (ClarifyExplainerConfig | undefined) | undefined;
}
export interface ProductionVariant {
	readonly AcceleratorType?: (string | undefined) | undefined;
	readonly ContainerStartupHealthCheckTimeoutInSeconds?: (number | undefined) | undefined;
	readonly InitialInstanceCount?: (number | undefined) | undefined;
	readonly InitialVariantWeight: number;
	readonly InstanceType?: (string | undefined) | undefined;
	readonly ModelDataDownloadTimeoutInSeconds?: (number | undefined) | undefined;
	readonly ModelName: string;
	readonly ServerlessConfig?: (ServerlessConfig | undefined) | undefined;
	readonly VariantName: string;
	readonly VolumeSizeInGB?: (number | undefined) | undefined;
}
export interface ServerlessConfig {
	readonly MaxConcurrency: number;
	readonly MemorySizeInMB: number;
}
export interface DataCatalogConfig {
	readonly Catalog: string;
	readonly Database: string;
	readonly TableName: string;
}
export interface FeatureDefinition {
	readonly FeatureName: string;
	readonly FeatureType: string;
}
export interface OfflineStoreConfig {
	readonly DataCatalogConfig?: (DataCatalogConfig | undefined) | undefined;
	readonly DisableGlueTableCreation?: (boolean | undefined) | undefined;
	readonly S3StorageConfig: S3StorageConfig;
	readonly TableFormat?: (string | undefined) | undefined;
}
export interface OnlineStoreConfig {
	readonly EnableOnlineStore?: (boolean | undefined) | undefined;
	readonly SecurityConfig?: (OnlineStoreSecurityConfig | undefined) | undefined;
}
export interface OnlineStoreSecurityConfig {
	readonly KmsKeyId?: (string | undefined) | undefined;
}
export interface S3StorageConfig {
	readonly KmsKeyId?: (string | undefined) | undefined;
	readonly S3Uri: string;
}
export interface ContainerDefinition {
	readonly ContainerHostname?: (string | undefined) | undefined;
	readonly Environment?: (any | undefined) | undefined;
	readonly Image?: (string | undefined) | undefined;
	readonly ImageConfig?: (ImageConfig | undefined) | undefined;
	readonly InferenceSpecificationName?: (string | undefined) | undefined;
	readonly Mode?: (string | undefined) | undefined;
	readonly ModelDataUrl?: (string | undefined) | undefined;
	readonly ModelPackageName?: (string | undefined) | undefined;
	readonly MultiModelConfig?: (MultiModelConfig | undefined) | undefined;
}
export interface ImageConfig {
	readonly RepositoryAccessMode: string;
	readonly RepositoryAuthConfig?: (RepositoryAuthConfig | undefined) | undefined;
}
export interface InferenceExecutionConfig {
	readonly Mode: string;
}
export interface MultiModelConfig {
	readonly ModelCacheSetting?: (string | undefined) | undefined;
}
export interface RepositoryAuthConfig {
	readonly RepositoryCredentialsProviderArn: string;
}
export interface ModelBiasAppSpecification {
	readonly ConfigUri: string;
	readonly Environment?: ({ [key: string]: string } | undefined) | undefined;
	readonly ImageUri: string;
}
export interface ModelBiasBaselineConfig {
	readonly BaseliningJobName?: (string | undefined) | undefined;
	readonly ConstraintsResource?: (ConstraintsResource | undefined) | undefined;
}
export interface ModelBiasJobInput {
	readonly BatchTransformInput?: (BatchTransformInput | undefined) | undefined;
	readonly EndpointInput?: (EndpointInput | undefined) | undefined;
	readonly GroundTruthS3Input: MonitoringGroundTruthS3Input;
}
export interface MonitoringGroundTruthS3Input {
	readonly S3Uri: string;
}
export interface ModelExplainabilityAppSpecification {
	readonly ConfigUri: string;
	readonly Environment?: ({ [key: string]: string } | undefined) | undefined;
	readonly ImageUri: string;
}
export interface ModelExplainabilityBaselineConfig {
	readonly BaseliningJobName?: (string | undefined) | undefined;
	readonly ConstraintsResource?: (ConstraintsResource | undefined) | undefined;
}
export interface ModelExplainabilityJobInput {
	readonly BatchTransformInput?: (BatchTransformInput | undefined) | undefined;
	readonly EndpointInput?: (EndpointInput | undefined) | undefined;
}
export interface AdditionalInferenceSpecificationDefinition {
	readonly Containers: ModelPackageContainerDefinition[];
	readonly Description?: (string | undefined) | undefined;
	readonly Name: string;
	readonly SupportedContentTypes?: (string[] | undefined) | undefined;
	readonly SupportedRealtimeInferenceInstanceTypes?: (string[] | undefined) | undefined;
	readonly SupportedResponseMIMETypes?: (string[] | undefined) | undefined;
	readonly SupportedTransformInstanceTypes?: (string[] | undefined) | undefined;
}
export interface Bias {
	readonly PostTrainingReport?: (MetricsSource | undefined) | undefined;
	readonly PreTrainingReport?: (MetricsSource | undefined) | undefined;
	readonly Report?: (MetricsSource | undefined) | undefined;
}
export interface DataSource {
	readonly S3DataSource: S3DataSource;
}
export interface DriftCheckBaselines {
	readonly Bias?: (DriftCheckBias | undefined) | undefined;
	readonly Explainability?: (DriftCheckExplainability | undefined) | undefined;
	readonly ModelDataQuality?: (DriftCheckModelDataQuality | undefined) | undefined;
	readonly ModelQuality?: (DriftCheckModelQuality | undefined) | undefined;
}
export interface DriftCheckBias {
	readonly ConfigFile?: (FileSource | undefined) | undefined;
	readonly PostTrainingConstraints?: (MetricsSource | undefined) | undefined;
	readonly PreTrainingConstraints?: (MetricsSource | undefined) | undefined;
}
export interface DriftCheckExplainability {
	readonly ConfigFile?: (FileSource | undefined) | undefined;
	readonly Constraints?: (MetricsSource | undefined) | undefined;
}
export interface DriftCheckModelDataQuality {
	readonly Constraints?: (MetricsSource | undefined) | undefined;
	readonly Statistics?: (MetricsSource | undefined) | undefined;
}
export interface DriftCheckModelQuality {
	readonly Constraints?: (MetricsSource | undefined) | undefined;
	readonly Statistics?: (MetricsSource | undefined) | undefined;
}
export interface Explainability {
	readonly Report?: (MetricsSource | undefined) | undefined;
}
export interface FileSource {
	readonly ContentDigest?: (string | undefined) | undefined;
	readonly ContentType?: (string | undefined) | undefined;
	readonly S3Uri: string;
}
export interface InferenceSpecification {
	readonly Containers: ModelPackageContainerDefinition[];
	readonly SupportedContentTypes: string[];
	readonly SupportedRealtimeInferenceInstanceTypes?: (string[] | undefined) | undefined;
	readonly SupportedResponseMIMETypes: string[];
	readonly SupportedTransformInstanceTypes?: (string[] | undefined) | undefined;
}
export interface MetadataProperties {
	readonly CommitId?: (string | undefined) | undefined;
	readonly GeneratedBy?: (string | undefined) | undefined;
	readonly ProjectId?: (string | undefined) | undefined;
	readonly Repository?: (string | undefined) | undefined;
}
export interface MetricsSource {
	readonly ContentDigest?: (string | undefined) | undefined;
	readonly ContentType: string;
	readonly S3Uri: string;
}
export interface ModelDataQuality {
	readonly Constraints?: (MetricsSource | undefined) | undefined;
	readonly Statistics?: (MetricsSource | undefined) | undefined;
}
export interface ModelInput {
	readonly DataInputConfig: string;
}
export interface ModelMetrics {
	readonly Bias?: (Bias | undefined) | undefined;
	readonly Explainability?: (Explainability | undefined) | undefined;
	readonly ModelDataQuality?: (ModelDataQuality | undefined) | undefined;
	readonly ModelQuality?: (ModelQuality | undefined) | undefined;
}
export interface ModelPackageContainerDefinition {
	readonly ContainerHostname?: (string | undefined) | undefined;
	readonly Environment?: ({ [key: string]: string } | undefined) | undefined;
	readonly Framework?: (string | undefined) | undefined;
	readonly FrameworkVersion?: (string | undefined) | undefined;
	readonly Image: string;
	readonly ImageDigest?: (string | undefined) | undefined;
	readonly ModelDataUrl?: (string | undefined) | undefined;
	readonly ModelInput?: (ModelInput | undefined) | undefined;
	readonly NearestModelName?: (string | undefined) | undefined;
	readonly ProductId?: (string | undefined) | undefined;
}
export interface ModelPackageStatusDetails {
	readonly ImageScanStatuses?: (ModelPackageStatusItem[] | undefined) | undefined;
	readonly ValidationStatuses: ModelPackageStatusItem[];
}
export interface ModelPackageStatusItem {
	readonly FailureReason?: (string | undefined) | undefined;
	readonly Name: string;
	readonly Status: string;
}
export interface ModelQuality {
	readonly Constraints?: (MetricsSource | undefined) | undefined;
	readonly Statistics?: (MetricsSource | undefined) | undefined;
}
export interface S3DataSource {
	readonly S3DataType: string;
	readonly S3Uri: string;
}
export interface SourceAlgorithm {
	readonly AlgorithmName: string;
	readonly ModelDataUrl?: (string | undefined) | undefined;
}
export interface SourceAlgorithmSpecification {
	readonly SourceAlgorithms: SourceAlgorithm[];
}
export interface TransformInput {
	readonly CompressionType?: (string | undefined) | undefined;
	readonly ContentType?: (string | undefined) | undefined;
	readonly DataSource: DataSource;
	readonly SplitType?: (string | undefined) | undefined;
}
export interface TransformJobDefinition {
	readonly BatchStrategy?: (string | undefined) | undefined;
	readonly Environment?: ({ [key: string]: string } | undefined) | undefined;
	readonly MaxConcurrentTransforms?: (number | undefined) | undefined;
	readonly MaxPayloadInMB?: (number | undefined) | undefined;
	readonly TransformInput: TransformInput;
	readonly TransformOutput: TransformOutput;
	readonly TransformResources: TransformResources;
}
export interface TransformOutput {
	readonly Accept?: (string | undefined) | undefined;
	readonly AssembleWith?: (string | undefined) | undefined;
	readonly KmsKeyId?: (string | undefined) | undefined;
	readonly S3OutputPath: string;
}
export interface TransformResources {
	readonly InstanceCount: number;
	readonly InstanceType: string;
	readonly VolumeKmsKeyId?: (string | undefined) | undefined;
}
export interface UserContext {
	readonly DomainId?: (string | undefined) | undefined;
	readonly UserProfileArn?: (string | undefined) | undefined;
	readonly UserProfileName?: (string | undefined) | undefined;
}
export interface ValidationProfile {
	readonly ProfileName: string;
	readonly TransformJobDefinition: TransformJobDefinition;
}
export interface ValidationSpecification {
	readonly ValidationProfiles: ValidationProfile[];
	readonly ValidationRole: string;
}
export interface ModelQualityAppSpecification {
	readonly ContainerArguments?: (string[] | undefined) | undefined;
	readonly ContainerEntrypoint?: (string[] | undefined) | undefined;
	readonly Environment?: ({ [key: string]: string } | undefined) | undefined;
	readonly ImageUri: string;
	readonly PostAnalyticsProcessorSourceUri?: (string | undefined) | undefined;
	readonly ProblemType: string;
	readonly RecordPreprocessorSourceUri?: (string | undefined) | undefined;
}
export interface ModelQualityBaselineConfig {
	readonly BaseliningJobName?: (string | undefined) | undefined;
	readonly ConstraintsResource?: (ConstraintsResource | undefined) | undefined;
}
export interface ModelQualityJobInput {
	readonly BatchTransformInput?: (BatchTransformInput | undefined) | undefined;
	readonly EndpointInput?: (EndpointInput | undefined) | undefined;
	readonly GroundTruthS3Input: MonitoringGroundTruthS3Input;
}
export interface BaselineConfig {
	readonly ConstraintsResource?: (ConstraintsResource | undefined) | undefined;
	readonly StatisticsResource?: (StatisticsResource | undefined) | undefined;
}
export interface MonitoringAppSpecification {
	readonly ContainerArguments?: (string[] | undefined) | undefined;
	readonly ContainerEntrypoint?: (string[] | undefined) | undefined;
	readonly ImageUri: string;
	readonly PostAnalyticsProcessorSourceUri?: (string | undefined) | undefined;
	readonly RecordPreprocessorSourceUri?: (string | undefined) | undefined;
}
export interface MonitoringExecutionSummary {
	readonly CreationTime: string;
	readonly EndpointName?: (string | undefined) | undefined;
	readonly FailureReason?: (string | undefined) | undefined;
	readonly LastModifiedTime: string;
	readonly MonitoringExecutionStatus: string;
	readonly MonitoringScheduleName: string;
	readonly ProcessingJobArn?: (string | undefined) | undefined;
	readonly ScheduledTime: string;
}
export interface MonitoringInput {
	readonly BatchTransformInput?: (BatchTransformInput | undefined) | undefined;
	readonly EndpointInput?: (EndpointInput | undefined) | undefined;
}
export interface MonitoringJobDefinition {
	readonly BaselineConfig?: (BaselineConfig | undefined) | undefined;
	readonly Environment?: ({ [key: string]: string } | undefined) | undefined;
	readonly MonitoringAppSpecification: MonitoringAppSpecification;
	readonly MonitoringInputs: MonitoringInput[];
	readonly MonitoringOutputConfig: MonitoringOutputConfig;
	readonly MonitoringResources: MonitoringResources;
	readonly NetworkConfig?: (NetworkConfig | undefined) | undefined;
	readonly RoleArn: string;
	readonly StoppingCondition?: (StoppingCondition | undefined) | undefined;
}
export interface MonitoringScheduleConfig {
	readonly MonitoringJobDefinition?: (MonitoringJobDefinition | undefined) | undefined;
	readonly MonitoringJobDefinitionName?: (string | undefined) | undefined;
	readonly MonitoringType?: (string | undefined) | undefined;
	readonly ScheduleConfig?: (ScheduleConfig | undefined) | undefined;
}
export interface ScheduleConfig {
	readonly ScheduleExpression: string;
}
export interface InstanceMetadataServiceConfiguration {
	readonly MinimumInstanceMetadataServiceVersion: string;
}
export interface NotebookInstanceLifecycleHook {
	readonly Content?: (string | undefined) | undefined;
}
export interface ParallelismConfiguration {
	readonly MaxParallelExecutionSteps: number;
}
export interface PipelineDefinition {
	readonly PipelineDefinitionBody?: (string | undefined) | undefined;
	readonly PipelineDefinitionS3Location?: (S3Location | undefined) | undefined;
}
export interface S3Location {
	readonly Bucket: string;
	readonly ETag?: (string | undefined) | undefined;
	readonly Key: string;
	readonly Version?: (string | undefined) | undefined;
}
export interface ProvisioningParameter {
	readonly Key: string;
	readonly Value: string;
}
export interface ServiceCatalogProvisionedProductDetails {
	readonly ProvisionedProductId?: (string | undefined) | undefined;
	readonly ProvisionedProductStatusMessage?: (string | undefined) | undefined;
}
export interface ServiceCatalogProvisioningDetails {
	readonly PathId?: (string | undefined) | undefined;
	readonly ProductId: string;
	readonly ProvisioningArtifactId?: (string | undefined) | undefined;
	readonly ProvisioningParameters?: (ProvisioningParameter[] | undefined) | undefined;
}
export interface CognitoMemberDefinition {
	readonly CognitoClientId: string;
	readonly CognitoUserGroup: string;
	readonly CognitoUserPool: string;
}
export interface MemberDefinition {
	readonly CognitoMemberDefinition?: (CognitoMemberDefinition | undefined) | undefined;
	readonly OidcMemberDefinition?: (OidcMemberDefinition | undefined) | undefined;
}
export interface NotificationConfiguration {
	readonly NotificationTopicArn: string;
}
export interface OidcMemberDefinition {
	readonly OidcGroups: string[];
}
export default {
	App: App,
	AppImageConfig: AppImageConfig,
	CodeRepository: CodeRepository,
	DataQualityJobDefinition: DataQualityJobDefinition,
	Device: Device,
	DeviceFleet: DeviceFleet,
	Domain: Domain,
	Endpoint: Endpoint,
	EndpointConfig: EndpointConfig,
	FeatureGroup: FeatureGroup,
	Image: Image,
	ImageVersion: ImageVersion,
	Model: Model,
	ModelBiasJobDefinition: ModelBiasJobDefinition,
	ModelExplainabilityJobDefinition: ModelExplainabilityJobDefinition,
	ModelPackage: ModelPackage,
	ModelPackageGroup: ModelPackageGroup,
	ModelQualityJobDefinition: ModelQualityJobDefinition,
	MonitoringSchedule: MonitoringSchedule,
	NotebookInstance: NotebookInstance,
	NotebookInstanceLifecycleConfig: NotebookInstanceLifecycleConfig,
	Pipeline: Pipeline,
	Project: Project,
	UserProfile: UserProfile,
	Workteam: Workteam,
};
