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
	readonly ResourceSpec?: ResourceSpec | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
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
	readonly KernelGatewayImageConfig?: KernelGatewayImageConfig | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
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
	readonly CodeRepositoryName?: string;
	readonly Tags?: { key: string; value: string }[] | undefined;
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
	readonly DataQualityBaselineConfig?: DataQualityBaselineConfig | undefined;
	readonly EndpointName?: string | undefined;
	readonly JobDefinitionName?: string | undefined;
	readonly NetworkConfig?: NetworkConfig | undefined;
	readonly StoppingCondition?: StoppingCondition | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
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
	readonly Device?: Device | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
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
	readonly Description?: string | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
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
	readonly AppNetworkAccessType?: string | undefined;
	readonly AppSecurityGroupManagement?: string | undefined;
	readonly DomainSettings?: DomainSettings | undefined;
	readonly KmsKeyId?: string | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
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
	readonly DeploymentConfig?: DeploymentConfig | undefined;
	readonly EndpointName?: string;
	readonly ExcludeRetainedVariantProperties?: Variant[] | undefined;
	readonly RetainAllVariantProperties?: boolean | undefined;
	readonly RetainDeploymentConfig?: boolean | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
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
	readonly AsyncInferenceConfig?: AsyncInferenceConfig | undefined;
	readonly DataCaptureConfig?: DataCaptureConfig | undefined;
	readonly EndpointConfigName?: string;
	readonly ExplainerConfig?: ExplainerConfig | undefined;
	readonly KmsKeyId?: string | undefined;
	readonly ShadowProductionVariants?: ProductionVariant[] | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
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
	readonly Description?: string | undefined;
	readonly OfflineStoreConfig?: OfflineStoreConfig | undefined;
	readonly OnlineStoreConfig?: OnlineStoreConfig | undefined;
	readonly RoleArn?: string | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
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
	readonly ImageDescription?: string | undefined;
	readonly ImageDisplayName?: string | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
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
	readonly Containers?: ContainerDefinition[] | undefined;
	readonly EnableNetworkIsolation?: boolean | undefined;
	readonly InferenceExecutionConfig?: InferenceExecutionConfig | undefined;
	readonly ModelName?: string;
	readonly PrimaryContainer?: ContainerDefinition | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly VpcConfig?: VpcConfig | undefined;
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
	readonly EndpointName?: string | undefined;
	readonly JobDefinitionName?: string | undefined;
	readonly ModelBiasBaselineConfig?: ModelBiasBaselineConfig | undefined;
	readonly NetworkConfig?: NetworkConfig | undefined;
	readonly StoppingCondition?: StoppingCondition | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
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
	readonly EndpointName?: string | undefined;
	readonly JobDefinitionName?: string | undefined;
	readonly ModelExplainabilityBaselineConfig?: ModelExplainabilityBaselineConfig | undefined;
	readonly NetworkConfig?: NetworkConfig | undefined;
	readonly StoppingCondition?: StoppingCondition | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
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
	readonly AdditionalInferenceSpecificationDefinition?: AdditionalInferenceSpecificationDefinition | undefined;
	readonly AdditionalInferenceSpecifications?: AdditionalInferenceSpecificationDefinition[] | undefined;
	readonly AdditionalInferenceSpecificationsToAdd?: AdditionalInferenceSpecificationDefinition[] | undefined;
	readonly ApprovalDescription?: string | undefined;
	readonly CertifyForMarketplace?: boolean | undefined;
	readonly ClientToken?: string | undefined;
	readonly CreatedBy?: UserContext | undefined;
	readonly CustomerMetadataProperties?: { [key: string]: string } | undefined;
	readonly Domain?: string | undefined;
	readonly DriftCheckBaselines?: DriftCheckBaselines | undefined;
	readonly Environment?: { [key: string]: string } | undefined;
	readonly InferenceSpecification?: InferenceSpecification | undefined;
	readonly LastModifiedBy?: UserContext | undefined;
	readonly LastModifiedTime?: string | undefined;
	readonly MetadataProperties?: MetadataProperties | undefined;
	readonly ModelApprovalStatus?: string | undefined;
	readonly ModelMetrics?: ModelMetrics | undefined;
	readonly ModelPackageDescription?: string | undefined;
	readonly ModelPackageGroupName?: string | undefined;
	readonly ModelPackageName?: string | undefined;
	readonly ModelPackageStatusDetails?: ModelPackageStatusDetails | undefined;
	readonly ModelPackageStatusItem?: ModelPackageStatusItem | undefined;
	readonly ModelPackageVersion?: number | undefined;
	readonly SamplePayloadUrl?: string | undefined;
	readonly SourceAlgorithmSpecification?: SourceAlgorithmSpecification | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly Task?: string | undefined;
	readonly ValidationSpecification?: ValidationSpecification | undefined;
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
	readonly ModelPackageGroupDescription?: string | undefined;
	readonly ModelPackageGroupPolicy?: any | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
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
	readonly EndpointName?: string | undefined;
	readonly JobDefinitionName?: string | undefined;
	readonly ModelQualityBaselineConfig?: ModelQualityBaselineConfig | undefined;
	readonly NetworkConfig?: NetworkConfig | undefined;
	readonly StoppingCondition?: StoppingCondition | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
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
	readonly EndpointName?: string | undefined;
	readonly FailureReason?: string | undefined;
	readonly LastMonitoringExecutionSummary?: MonitoringExecutionSummary | undefined;
	readonly MonitoringScheduleStatus?: string | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
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
	readonly AcceleratorTypes?: string[] | undefined;
	readonly AdditionalCodeRepositories?: string[] | undefined;
	readonly DefaultCodeRepository?: string | undefined;
	readonly DirectInternetAccess?: string | undefined;
	readonly InstanceMetadataServiceConfiguration?: InstanceMetadataServiceConfiguration | undefined;
	readonly KmsKeyId?: string | undefined;
	readonly LifecycleConfigName?: string | undefined;
	readonly NotebookInstanceName?: string;
	readonly PlatformIdentifier?: string | undefined;
	readonly RootAccess?: string | undefined;
	readonly SecurityGroupIds?: string[] | undefined;
	readonly SubnetId?: string | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly VolumeSizeInGB?: number | undefined;
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
	readonly NotebookInstanceLifecycleConfigName?: string;
	readonly OnCreate?: NotebookInstanceLifecycleHook[] | undefined;
	readonly OnStart?: NotebookInstanceLifecycleHook[] | undefined;
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
	readonly ParallelismConfiguration?: ParallelismConfiguration | undefined;
	readonly PipelineDescription?: string | undefined;
	readonly PipelineDisplayName?: string | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
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
	readonly ProjectDescription?: string | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
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
	readonly SingleSignOnUserIdentifier?: string | undefined;
	readonly SingleSignOnUserValue?: string | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly UserSettings?: UserSettings | undefined;
	readonly LogicalId: string;
}
export class Workteam extends CfnResource<WorkteamComponentInputs> implements WorkteamComponentOutputs {
	constructor(entity: ADKEntity, options: WorkteamComponentInputs) {
		super(entity, options.LogicalId, "AWS::SageMaker::Workteam", options);
	}
}
export interface WorkteamComponentOutputs {}
export interface WorkteamComponentInputs {
	readonly Description?: string | undefined;
	readonly MemberDefinitions?: MemberDefinition[] | undefined;
	readonly NotificationConfiguration?: NotificationConfiguration | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly WorkforceName?: string | undefined;
	readonly WorkteamName?: string;
	readonly LogicalId: string;
}
export interface ResourceSpec {
	readonly InstanceType?: string | undefined;
	readonly SageMakerImageArn?: string | undefined;
	readonly SageMakerImageVersionArn?: string | undefined;
}
export interface FileSystemConfig {
	readonly DefaultGid?: number | undefined;
	readonly DefaultUid?: number | undefined;
	readonly MountPath?: string | undefined;
}
export interface KernelGatewayImageConfig {
	readonly FileSystemConfig?: FileSystemConfig | undefined;
	readonly KernelSpecs: KernelSpec[];
}
export interface KernelSpec {
	readonly DisplayName?: string | undefined;
	readonly Name: string;
}
export interface GitConfig {
	readonly Branch?: string | undefined;
	readonly RepositoryUrl: string;
	readonly SecretArn?: string | undefined;
}
export interface BatchTransformInput {
	readonly DataCapturedDestinationS3Uri: string;
	readonly DatasetFormat: DatasetFormat;
	readonly LocalPath: string;
	readonly S3DataDistributionType?: string | undefined;
	readonly S3InputMode?: string | undefined;
}
export interface ClusterConfig {
	readonly InstanceCount: number;
	readonly InstanceType: string;
	readonly VolumeKmsKeyId?: string | undefined;
	readonly VolumeSizeInGB: number;
}
export interface ConstraintsResource {
	readonly S3Uri?: string | undefined;
}
export interface Csv {
	readonly Header?: boolean | undefined;
}
export interface DataQualityAppSpecification {
	readonly ContainerArguments?: string[] | undefined;
	readonly ContainerEntrypoint?: string[] | undefined;
	readonly Environment?: { [key: string]: string } | undefined;
	readonly ImageUri: string;
	readonly PostAnalyticsProcessorSourceUri?: string | undefined;
	readonly RecordPreprocessorSourceUri?: string | undefined;
}
export interface DataQualityBaselineConfig {
	readonly BaseliningJobName?: string | undefined;
	readonly ConstraintsResource?: ConstraintsResource | undefined;
	readonly StatisticsResource?: StatisticsResource | undefined;
}
export interface DataQualityJobInput {
	readonly BatchTransformInput?: BatchTransformInput | undefined;
	readonly EndpointInput?: EndpointInput | undefined;
}
export interface DatasetFormat {
	readonly Csv?: Csv | undefined;
	readonly Json?: any | undefined;
	readonly Parquet?: boolean | undefined;
}
export interface EndpointInput {
	readonly EndpointName: string;
	readonly LocalPath: string;
	readonly S3DataDistributionType?: string | undefined;
	readonly S3InputMode?: string | undefined;
}
export interface Json {
	readonly Line?: boolean | undefined;
}
export interface MonitoringOutput {
	readonly S3Output: S3Output;
}
export interface MonitoringOutputConfig {
	readonly KmsKeyId?: string | undefined;
	readonly MonitoringOutputs: MonitoringOutput[];
}
export interface MonitoringResources {
	readonly ClusterConfig: ClusterConfig;
}
export interface NetworkConfig {
	readonly EnableInterContainerTrafficEncryption?: boolean | undefined;
	readonly EnableNetworkIsolation?: boolean | undefined;
	readonly VpcConfig?: VpcConfig | undefined;
}
export interface S3Output {
	readonly LocalPath: string;
	readonly S3UploadMode?: string | undefined;
	readonly S3Uri: string;
}
export interface StatisticsResource {
	readonly S3Uri?: string | undefined;
}
export interface StoppingCondition {
	readonly MaxRuntimeInSeconds: number;
}
export interface VpcConfig {
	readonly SecurityGroupIds: string[];
	readonly Subnets: string[];
}
export interface Device {
	readonly Description?: string | undefined;
	readonly DeviceName: string;
	readonly IotThingName?: string | undefined;
}
export interface EdgeOutputConfig {
	readonly KmsKeyId?: string | undefined;
	readonly S3OutputLocation: string;
}
export interface CustomImage {
	readonly AppImageConfigName: string;
	readonly ImageName: string;
	readonly ImageVersionNumber?: number | undefined;
}
export interface DomainSettings {
	readonly RStudioServerProDomainSettings?: RStudioServerProDomainSettings | undefined;
	readonly SecurityGroupIds?: string[] | undefined;
}
export interface JupyterServerAppSettings {
	readonly DefaultResourceSpec?: ResourceSpec | undefined;
}
export interface KernelGatewayAppSettings {
	readonly CustomImages?: CustomImage[] | undefined;
	readonly DefaultResourceSpec?: ResourceSpec | undefined;
}
export interface RSessionAppSettings {
	readonly CustomImages?: CustomImage[] | undefined;
	readonly DefaultResourceSpec?: ResourceSpec | undefined;
}
export interface RStudioServerProAppSettings {
	readonly AccessStatus?: string | undefined;
	readonly UserGroup?: string | undefined;
}
export interface RStudioServerProDomainSettings {
	readonly DefaultResourceSpec?: ResourceSpec | undefined;
	readonly DomainExecutionRoleArn: string;
	readonly RStudioConnectUrl?: string | undefined;
	readonly RStudioPackageManagerUrl?: string | undefined;
}
export interface SharingSettings {
	readonly NotebookOutputOption?: string | undefined;
	readonly S3KmsKeyId?: string | undefined;
	readonly S3OutputPath?: string | undefined;
}
export interface UserSettings {
	readonly ExecutionRole?: string | undefined;
	readonly JupyterServerAppSettings?: JupyterServerAppSettings | undefined;
	readonly KernelGatewayAppSettings?: KernelGatewayAppSettings | undefined;
	readonly RSessionAppSettings?: RSessionAppSettings | undefined;
	readonly RStudioServerProAppSettings?: RStudioServerProAppSettings | undefined;
	readonly SecurityGroups?: string[] | undefined;
	readonly SharingSettings?: SharingSettings | undefined;
}
export interface Alarm {
	readonly AlarmName: string;
}
export interface AutoRollbackConfig {
	readonly Alarms: Alarm[];
}
export interface BlueGreenUpdatePolicy {
	readonly MaximumExecutionTimeoutInSeconds?: number | undefined;
	readonly TerminationWaitInSeconds?: number | undefined;
	readonly TrafficRoutingConfiguration: TrafficRoutingConfig;
}
export interface CapacitySize {
	readonly Type: string;
	readonly Value: number;
}
export interface DeploymentConfig {
	readonly AutoRollbackConfiguration?: AutoRollbackConfig | undefined;
	readonly BlueGreenUpdatePolicy: BlueGreenUpdatePolicy;
}
export interface TrafficRoutingConfig {
	readonly CanarySize?: CapacitySize | undefined;
	readonly LinearStepSize?: CapacitySize | undefined;
	readonly Type: string;
	readonly WaitIntervalInSeconds?: number | undefined;
}
export interface Variant {
	readonly VariantPropertyType?: string | undefined;
}
export interface AsyncInferenceClientConfig {
	readonly MaxConcurrentInvocationsPerInstance?: number | undefined;
}
export interface AsyncInferenceConfig {
	readonly ClientConfig?: AsyncInferenceClientConfig | undefined;
	readonly OutputConfig: AsyncInferenceOutputConfig;
}
export interface AsyncInferenceNotificationConfig {
	readonly ErrorTopic?: string | undefined;
	readonly SuccessTopic?: string | undefined;
}
export interface AsyncInferenceOutputConfig {
	readonly KmsKeyId?: string | undefined;
	readonly NotificationConfig?: AsyncInferenceNotificationConfig | undefined;
	readonly S3OutputPath: string;
}
export interface CaptureContentTypeHeader {
	readonly CsvContentTypes?: string[] | undefined;
	readonly JsonContentTypes?: string[] | undefined;
}
export interface CaptureOption {
	readonly CaptureMode: string;
}
export interface ClarifyExplainerConfig {
	readonly EnableExplanations?: string | undefined;
	readonly InferenceConfig?: ClarifyInferenceConfig | undefined;
	readonly ShapConfig: ClarifyShapConfig;
}
export interface ClarifyInferenceConfig {
	readonly ContentTemplate?: string | undefined;
	readonly FeatureHeaders?: string[] | undefined;
	readonly FeatureTypes?: string[] | undefined;
	readonly FeaturesAttribute?: string | undefined;
	readonly LabelAttribute?: string | undefined;
	readonly LabelHeaders?: string[] | undefined;
	readonly LabelIndex?: number | undefined;
	readonly MaxPayloadInMB?: number | undefined;
	readonly MaxRecordCount?: number | undefined;
	readonly ProbabilityAttribute?: string | undefined;
	readonly ProbabilityIndex?: number | undefined;
}
export interface ClarifyShapBaselineConfig {
	readonly MimeType?: string | undefined;
	readonly ShapBaseline?: string | undefined;
	readonly ShapBaselineUri?: string | undefined;
}
export interface ClarifyShapConfig {
	readonly NumberOfSamples?: number | undefined;
	readonly Seed?: number | undefined;
	readonly ShapBaselineConfig: ClarifyShapBaselineConfig;
	readonly TextConfig?: ClarifyTextConfig | undefined;
	readonly UseLogit?: boolean | undefined;
}
export interface ClarifyTextConfig {
	readonly Granularity: string;
	readonly Language: string;
}
export interface DataCaptureConfig {
	readonly CaptureContentTypeHeader?: CaptureContentTypeHeader | undefined;
	readonly CaptureOptions: CaptureOption[];
	readonly DestinationS3Uri: string;
	readonly EnableCapture?: boolean | undefined;
	readonly InitialSamplingPercentage: number;
	readonly KmsKeyId?: string | undefined;
}
export interface ExplainerConfig {
	readonly ClarifyExplainerConfig?: ClarifyExplainerConfig | undefined;
}
export interface ProductionVariant {
	readonly AcceleratorType?: string | undefined;
	readonly ContainerStartupHealthCheckTimeoutInSeconds?: number | undefined;
	readonly InitialInstanceCount?: number | undefined;
	readonly InitialVariantWeight: number;
	readonly InstanceType?: string | undefined;
	readonly ModelDataDownloadTimeoutInSeconds?: number | undefined;
	readonly ModelName: string;
	readonly ServerlessConfig?: ServerlessConfig | undefined;
	readonly VariantName: string;
	readonly VolumeSizeInGB?: number | undefined;
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
	readonly DataCatalogConfig?: DataCatalogConfig | undefined;
	readonly DisableGlueTableCreation?: boolean | undefined;
	readonly S3StorageConfig: S3StorageConfig;
	readonly TableFormat?: string | undefined;
}
export interface OnlineStoreConfig {
	readonly EnableOnlineStore?: boolean | undefined;
	readonly SecurityConfig?: OnlineStoreSecurityConfig | undefined;
}
export interface OnlineStoreSecurityConfig {
	readonly KmsKeyId?: string | undefined;
}
export interface S3StorageConfig {
	readonly KmsKeyId?: string | undefined;
	readonly S3Uri: string;
}
export interface ContainerDefinition {
	readonly ContainerHostname?: string | undefined;
	readonly Environment?: any | undefined;
	readonly Image?: string | undefined;
	readonly ImageConfig?: ImageConfig | undefined;
	readonly InferenceSpecificationName?: string | undefined;
	readonly Mode?: string | undefined;
	readonly ModelDataUrl?: string | undefined;
	readonly ModelPackageName?: string | undefined;
	readonly MultiModelConfig?: MultiModelConfig | undefined;
}
export interface ImageConfig {
	readonly RepositoryAccessMode: string;
	readonly RepositoryAuthConfig?: RepositoryAuthConfig | undefined;
}
export interface InferenceExecutionConfig {
	readonly Mode: string;
}
export interface MultiModelConfig {
	readonly ModelCacheSetting?: string | undefined;
}
export interface RepositoryAuthConfig {
	readonly RepositoryCredentialsProviderArn: string;
}
export interface ModelBiasAppSpecification {
	readonly ConfigUri: string;
	readonly Environment?: { [key: string]: string } | undefined;
	readonly ImageUri: string;
}
export interface ModelBiasBaselineConfig {
	readonly BaseliningJobName?: string | undefined;
	readonly ConstraintsResource?: ConstraintsResource | undefined;
}
export interface ModelBiasJobInput {
	readonly BatchTransformInput?: BatchTransformInput | undefined;
	readonly EndpointInput?: EndpointInput | undefined;
	readonly GroundTruthS3Input: MonitoringGroundTruthS3Input;
}
export interface MonitoringGroundTruthS3Input {
	readonly S3Uri: string;
}
export interface ModelExplainabilityAppSpecification {
	readonly ConfigUri: string;
	readonly Environment?: { [key: string]: string } | undefined;
	readonly ImageUri: string;
}
export interface ModelExplainabilityBaselineConfig {
	readonly BaseliningJobName?: string | undefined;
	readonly ConstraintsResource?: ConstraintsResource | undefined;
}
export interface ModelExplainabilityJobInput {
	readonly BatchTransformInput?: BatchTransformInput | undefined;
	readonly EndpointInput?: EndpointInput | undefined;
}
export interface AdditionalInferenceSpecificationDefinition {
	readonly Containers: ModelPackageContainerDefinition[];
	readonly Description?: string | undefined;
	readonly Name: string;
	readonly SupportedContentTypes?: string[] | undefined;
	readonly SupportedRealtimeInferenceInstanceTypes?: string[] | undefined;
	readonly SupportedResponseMIMETypes?: string[] | undefined;
	readonly SupportedTransformInstanceTypes?: string[] | undefined;
}
export interface Bias {
	readonly PostTrainingReport?: MetricsSource | undefined;
	readonly PreTrainingReport?: MetricsSource | undefined;
	readonly Report?: MetricsSource | undefined;
}
export interface DataSource {
	readonly S3DataSource: S3DataSource;
}
export interface DriftCheckBaselines {
	readonly Bias?: DriftCheckBias | undefined;
	readonly Explainability?: DriftCheckExplainability | undefined;
	readonly ModelDataQuality?: DriftCheckModelDataQuality | undefined;
	readonly ModelQuality?: DriftCheckModelQuality | undefined;
}
export interface DriftCheckBias {
	readonly ConfigFile?: FileSource | undefined;
	readonly PostTrainingConstraints?: MetricsSource | undefined;
	readonly PreTrainingConstraints?: MetricsSource | undefined;
}
export interface DriftCheckExplainability {
	readonly ConfigFile?: FileSource | undefined;
	readonly Constraints?: MetricsSource | undefined;
}
export interface DriftCheckModelDataQuality {
	readonly Constraints?: MetricsSource | undefined;
	readonly Statistics?: MetricsSource | undefined;
}
export interface DriftCheckModelQuality {
	readonly Constraints?: MetricsSource | undefined;
	readonly Statistics?: MetricsSource | undefined;
}
export interface Explainability {
	readonly Report?: MetricsSource | undefined;
}
export interface FileSource {
	readonly ContentDigest?: string | undefined;
	readonly ContentType?: string | undefined;
	readonly S3Uri: string;
}
export interface InferenceSpecification {
	readonly Containers: ModelPackageContainerDefinition[];
	readonly SupportedContentTypes: string[];
	readonly SupportedRealtimeInferenceInstanceTypes?: string[] | undefined;
	readonly SupportedResponseMIMETypes: string[];
	readonly SupportedTransformInstanceTypes?: string[] | undefined;
}
export interface MetadataProperties {
	readonly CommitId?: string | undefined;
	readonly GeneratedBy?: string | undefined;
	readonly ProjectId?: string | undefined;
	readonly Repository?: string | undefined;
}
export interface MetricsSource {
	readonly ContentDigest?: string | undefined;
	readonly ContentType: string;
	readonly S3Uri: string;
}
export interface ModelDataQuality {
	readonly Constraints?: MetricsSource | undefined;
	readonly Statistics?: MetricsSource | undefined;
}
export interface ModelInput {
	readonly DataInputConfig: string;
}
export interface ModelMetrics {
	readonly Bias?: Bias | undefined;
	readonly Explainability?: Explainability | undefined;
	readonly ModelDataQuality?: ModelDataQuality | undefined;
	readonly ModelQuality?: ModelQuality | undefined;
}
export interface ModelPackageContainerDefinition {
	readonly ContainerHostname?: string | undefined;
	readonly Environment?: { [key: string]: string } | undefined;
	readonly Framework?: string | undefined;
	readonly FrameworkVersion?: string | undefined;
	readonly Image: string;
	readonly ImageDigest?: string | undefined;
	readonly ModelDataUrl?: string | undefined;
	readonly ModelInput?: ModelInput | undefined;
	readonly NearestModelName?: string | undefined;
	readonly ProductId?: string | undefined;
}
export interface ModelPackageStatusDetails {
	readonly ImageScanStatuses?: ModelPackageStatusItem[] | undefined;
	readonly ValidationStatuses: ModelPackageStatusItem[];
}
export interface ModelPackageStatusItem {
	readonly FailureReason?: string | undefined;
	readonly Name: string;
	readonly Status: string;
}
export interface ModelQuality {
	readonly Constraints?: MetricsSource | undefined;
	readonly Statistics?: MetricsSource | undefined;
}
export interface S3DataSource {
	readonly S3DataType: string;
	readonly S3Uri: string;
}
export interface SourceAlgorithm {
	readonly AlgorithmName: string;
	readonly ModelDataUrl?: string | undefined;
}
export interface SourceAlgorithmSpecification {
	readonly SourceAlgorithms: SourceAlgorithm[];
}
export interface TransformInput {
	readonly CompressionType?: string | undefined;
	readonly ContentType?: string | undefined;
	readonly DataSource: DataSource;
	readonly SplitType?: string | undefined;
}
export interface TransformJobDefinition {
	readonly BatchStrategy?: string | undefined;
	readonly Environment?: { [key: string]: string } | undefined;
	readonly MaxConcurrentTransforms?: number | undefined;
	readonly MaxPayloadInMB?: number | undefined;
	readonly TransformInput: TransformInput;
	readonly TransformOutput: TransformOutput;
	readonly TransformResources: TransformResources;
}
export interface TransformOutput {
	readonly Accept?: string | undefined;
	readonly AssembleWith?: string | undefined;
	readonly KmsKeyId?: string | undefined;
	readonly S3OutputPath: string;
}
export interface TransformResources {
	readonly InstanceCount: number;
	readonly InstanceType: string;
	readonly VolumeKmsKeyId?: string | undefined;
}
export interface UserContext {
	readonly DomainId?: string | undefined;
	readonly UserProfileArn?: string | undefined;
	readonly UserProfileName?: string | undefined;
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
	readonly ContainerArguments?: string[] | undefined;
	readonly ContainerEntrypoint?: string[] | undefined;
	readonly Environment?: { [key: string]: string } | undefined;
	readonly ImageUri: string;
	readonly PostAnalyticsProcessorSourceUri?: string | undefined;
	readonly ProblemType: string;
	readonly RecordPreprocessorSourceUri?: string | undefined;
}
export interface ModelQualityBaselineConfig {
	readonly BaseliningJobName?: string | undefined;
	readonly ConstraintsResource?: ConstraintsResource | undefined;
}
export interface ModelQualityJobInput {
	readonly BatchTransformInput?: BatchTransformInput | undefined;
	readonly EndpointInput?: EndpointInput | undefined;
	readonly GroundTruthS3Input: MonitoringGroundTruthS3Input;
}
export interface BaselineConfig {
	readonly ConstraintsResource?: ConstraintsResource | undefined;
	readonly StatisticsResource?: StatisticsResource | undefined;
}
export interface MonitoringAppSpecification {
	readonly ContainerArguments?: string[] | undefined;
	readonly ContainerEntrypoint?: string[] | undefined;
	readonly ImageUri: string;
	readonly PostAnalyticsProcessorSourceUri?: string | undefined;
	readonly RecordPreprocessorSourceUri?: string | undefined;
}
export interface MonitoringExecutionSummary {
	readonly CreationTime: string;
	readonly EndpointName?: string | undefined;
	readonly FailureReason?: string | undefined;
	readonly LastModifiedTime: string;
	readonly MonitoringExecutionStatus: string;
	readonly MonitoringScheduleName: string;
	readonly ProcessingJobArn?: string | undefined;
	readonly ScheduledTime: string;
}
export interface MonitoringInput {
	readonly BatchTransformInput?: BatchTransformInput | undefined;
	readonly EndpointInput?: EndpointInput | undefined;
}
export interface MonitoringJobDefinition {
	readonly BaselineConfig?: BaselineConfig | undefined;
	readonly Environment?: { [key: string]: string } | undefined;
	readonly MonitoringAppSpecification: MonitoringAppSpecification;
	readonly MonitoringInputs: MonitoringInput[];
	readonly MonitoringOutputConfig: MonitoringOutputConfig;
	readonly MonitoringResources: MonitoringResources;
	readonly NetworkConfig?: NetworkConfig | undefined;
	readonly RoleArn: string;
	readonly StoppingCondition?: StoppingCondition | undefined;
}
export interface MonitoringScheduleConfig {
	readonly MonitoringJobDefinition?: MonitoringJobDefinition | undefined;
	readonly MonitoringJobDefinitionName?: string | undefined;
	readonly MonitoringType?: string | undefined;
	readonly ScheduleConfig?: ScheduleConfig | undefined;
}
export interface ScheduleConfig {
	readonly ScheduleExpression: string;
}
export interface InstanceMetadataServiceConfiguration {
	readonly MinimumInstanceMetadataServiceVersion: string;
}
export interface NotebookInstanceLifecycleHook {
	readonly Content?: string | undefined;
}
export interface ParallelismConfiguration {
	readonly MaxParallelExecutionSteps: number;
}
export interface PipelineDefinition {
	readonly PipelineDefinitionBody?: string | undefined;
	readonly PipelineDefinitionS3Location?: S3Location | undefined;
}
export interface S3Location {
	readonly Bucket: string;
	readonly ETag?: string | undefined;
	readonly Key: string;
	readonly Version?: string | undefined;
}
export interface ProvisioningParameter {
	readonly Key: string;
	readonly Value: string;
}
export interface ServiceCatalogProvisionedProductDetails {
	readonly ProvisionedProductId?: string | undefined;
	readonly ProvisionedProductStatusMessage?: string | undefined;
}
export interface ServiceCatalogProvisioningDetails {
	readonly PathId?: string | undefined;
	readonly ProductId: string;
	readonly ProvisioningArtifactId?: string | undefined;
	readonly ProvisioningParameters?: ProvisioningParameter[] | undefined;
}
export interface CognitoMemberDefinition {
	readonly CognitoClientId: string;
	readonly CognitoUserGroup: string;
	readonly CognitoUserPool: string;
}
export interface MemberDefinition {
	readonly CognitoMemberDefinition?: CognitoMemberDefinition | undefined;
	readonly OidcMemberDefinition?: OidcMemberDefinition | undefined;
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
