import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class ConnectorDefinition
	extends CfnResource<ConnectorDefinitionComponentInputs>
	implements ConnectorDefinitionComponentOutputs
{
	constructor(entity: ADKEntity, options: ConnectorDefinitionComponentInputs) {
		super(entity, options.LogicalId, "AWS::Greengrass::ConnectorDefinition", options);
	}
	public readonly Arn: string;
	public readonly Id: string;
	public readonly LatestVersionArn: string;
	public readonly Name: string;
}
export interface ConnectorDefinitionComponentOutputs {
	readonly Arn: string;
	readonly Id: string;
	readonly LatestVersionArn: string;
	readonly Name: string;
}
export interface ConnectorDefinitionComponentInputs {
	readonly Name: string;
	readonly InitialVersion?: ConnectorDefinitionVersion | undefined;
	readonly Tags?: any | undefined;
	readonly LogicalId: string;
}
export class ConnectorDefinitionVersion
	extends CfnResource<ConnectorDefinitionVersionComponentInputs>
	implements ConnectorDefinitionVersionComponentOutputs
{
	constructor(entity: ADKEntity, options: ConnectorDefinitionVersionComponentInputs) {
		super(entity, options.LogicalId, "AWS::Greengrass::ConnectorDefinitionVersion", options);
	}
}
export interface ConnectorDefinitionVersionComponentOutputs {}
export interface ConnectorDefinitionVersionComponentInputs {
	readonly ConnectorDefinitionId: string;
	readonly Connectors: Connector[];
	readonly LogicalId: string;
}
export class CoreDefinition extends CfnResource<CoreDefinitionComponentInputs> implements CoreDefinitionComponentOutputs {
	constructor(entity: ADKEntity, options: CoreDefinitionComponentInputs) {
		super(entity, options.LogicalId, "AWS::Greengrass::CoreDefinition", options);
	}
	public readonly Arn: string;
	public readonly Id: string;
	public readonly LatestVersionArn: string;
	public readonly Name: string;
}
export interface CoreDefinitionComponentOutputs {
	readonly Arn: string;
	readonly Id: string;
	readonly LatestVersionArn: string;
	readonly Name: string;
}
export interface CoreDefinitionComponentInputs {
	readonly Name: string;
	readonly InitialVersion?: CoreDefinitionVersion | undefined;
	readonly Tags?: any | undefined;
	readonly LogicalId: string;
}
export class CoreDefinitionVersion
	extends CfnResource<CoreDefinitionVersionComponentInputs>
	implements CoreDefinitionVersionComponentOutputs
{
	constructor(entity: ADKEntity, options: CoreDefinitionVersionComponentInputs) {
		super(entity, options.LogicalId, "AWS::Greengrass::CoreDefinitionVersion", options);
	}
}
export interface CoreDefinitionVersionComponentOutputs {}
export interface CoreDefinitionVersionComponentInputs {
	readonly CoreDefinitionId: string;
	readonly Cores: Core[];
	readonly LogicalId: string;
}
export class DeviceDefinition
	extends CfnResource<DeviceDefinitionComponentInputs>
	implements DeviceDefinitionComponentOutputs
{
	constructor(entity: ADKEntity, options: DeviceDefinitionComponentInputs) {
		super(entity, options.LogicalId, "AWS::Greengrass::DeviceDefinition", options);
	}
	public readonly Arn: string;
	public readonly Id: string;
	public readonly LatestVersionArn: string;
	public readonly Name: string;
}
export interface DeviceDefinitionComponentOutputs {
	readonly Arn: string;
	readonly Id: string;
	readonly LatestVersionArn: string;
	readonly Name: string;
}
export interface DeviceDefinitionComponentInputs {
	readonly Name: string;
	readonly InitialVersion?: DeviceDefinitionVersion | undefined;
	readonly Tags?: any | undefined;
	readonly LogicalId: string;
}
export class DeviceDefinitionVersion
	extends CfnResource<DeviceDefinitionVersionComponentInputs>
	implements DeviceDefinitionVersionComponentOutputs
{
	constructor(entity: ADKEntity, options: DeviceDefinitionVersionComponentInputs) {
		super(entity, options.LogicalId, "AWS::Greengrass::DeviceDefinitionVersion", options);
	}
}
export interface DeviceDefinitionVersionComponentOutputs {}
export interface DeviceDefinitionVersionComponentInputs {
	readonly DeviceDefinitionId: string;
	readonly Devices: Device[];
	readonly LogicalId: string;
}
export class FunctionDefinition
	extends CfnResource<FunctionDefinitionComponentInputs>
	implements FunctionDefinitionComponentOutputs
{
	constructor(entity: ADKEntity, options: FunctionDefinitionComponentInputs) {
		super(entity, options.LogicalId, "AWS::Greengrass::FunctionDefinition", options);
	}
	public readonly Arn: string;
	public readonly Id: string;
	public readonly LatestVersionArn: string;
	public readonly Name: string;
}
export interface FunctionDefinitionComponentOutputs {
	readonly Arn: string;
	readonly Id: string;
	readonly LatestVersionArn: string;
	readonly Name: string;
}
export interface FunctionDefinitionComponentInputs {
	readonly Name: string;
	readonly InitialVersion?: FunctionDefinitionVersion | undefined;
	readonly Tags?: any | undefined;
	readonly LogicalId: string;
}
export class FunctionDefinitionVersion
	extends CfnResource<FunctionDefinitionVersionComponentInputs>
	implements FunctionDefinitionVersionComponentOutputs
{
	constructor(entity: ADKEntity, options: FunctionDefinitionVersionComponentInputs) {
		super(entity, options.LogicalId, "AWS::Greengrass::FunctionDefinitionVersion", options);
	}
}
export interface FunctionDefinitionVersionComponentOutputs {}
export interface FunctionDefinitionVersionComponentInputs {
	readonly FunctionDefinitionId: string;
	readonly Functions: FunctionInstance[];
	readonly DefaultConfig?: DefaultConfig | undefined;
	readonly LogicalId: string;
}
export class Group extends CfnResource<GroupComponentInputs> implements GroupComponentOutputs {
	constructor(entity: ADKEntity, options: GroupComponentInputs) {
		super(entity, options.LogicalId, "AWS::Greengrass::Group", options);
	}
	public readonly Arn: string;
	public readonly Id: string;
	public readonly LatestVersionArn: string;
	public readonly Name: string;
	public readonly RoleAttachedAt: string;
}
export interface GroupComponentOutputs {
	readonly Arn: string;
	readonly Id: string;
	readonly LatestVersionArn: string;
	readonly Name: string;
	readonly RoleAttachedAt: string;
}
export interface GroupComponentInputs {
	readonly Name: string;
	readonly InitialVersion?: GroupVersion | undefined;
	readonly RoleArn?: string;
	readonly Tags?: any | undefined;
	readonly LogicalId: string;
}
export class GroupVersion extends CfnResource<GroupVersionComponentInputs> implements GroupVersionComponentOutputs {
	constructor(entity: ADKEntity, options: GroupVersionComponentInputs) {
		super(entity, options.LogicalId, "AWS::Greengrass::GroupVersion", options);
	}
}
export interface GroupVersionComponentOutputs {}
export interface GroupVersionComponentInputs {
	readonly GroupId: string;
	readonly ConnectorDefinitionVersionArn?: string | undefined;
	readonly CoreDefinitionVersionArn?: string | undefined;
	readonly DeviceDefinitionVersionArn?: string | undefined;
	readonly FunctionDefinitionVersionArn?: string | undefined;
	readonly LoggerDefinitionVersionArn?: string | undefined;
	readonly ResourceDefinitionVersionArn?: string | undefined;
	readonly SubscriptionDefinitionVersionArn?: string | undefined;
	readonly LogicalId: string;
}
export class LoggerDefinition
	extends CfnResource<LoggerDefinitionComponentInputs>
	implements LoggerDefinitionComponentOutputs
{
	constructor(entity: ADKEntity, options: LoggerDefinitionComponentInputs) {
		super(entity, options.LogicalId, "AWS::Greengrass::LoggerDefinition", options);
	}
	public readonly Arn: string;
	public readonly Id: string;
	public readonly LatestVersionArn: string;
	public readonly Name: string;
}
export interface LoggerDefinitionComponentOutputs {
	readonly Arn: string;
	readonly Id: string;
	readonly LatestVersionArn: string;
	readonly Name: string;
}
export interface LoggerDefinitionComponentInputs {
	readonly Name: string;
	readonly InitialVersion?: LoggerDefinitionVersion | undefined;
	readonly Tags?: any | undefined;
	readonly LogicalId: string;
}
export class LoggerDefinitionVersion
	extends CfnResource<LoggerDefinitionVersionComponentInputs>
	implements LoggerDefinitionVersionComponentOutputs
{
	constructor(entity: ADKEntity, options: LoggerDefinitionVersionComponentInputs) {
		super(entity, options.LogicalId, "AWS::Greengrass::LoggerDefinitionVersion", options);
	}
}
export interface LoggerDefinitionVersionComponentOutputs {}
export interface LoggerDefinitionVersionComponentInputs {
	readonly LoggerDefinitionId: string;
	readonly Loggers: Logger[];
	readonly LogicalId: string;
}
export class ResourceDefinition
	extends CfnResource<ResourceDefinitionComponentInputs>
	implements ResourceDefinitionComponentOutputs
{
	constructor(entity: ADKEntity, options: ResourceDefinitionComponentInputs) {
		super(entity, options.LogicalId, "AWS::Greengrass::ResourceDefinition", options);
	}
	public readonly Arn: string;
	public readonly Id: string;
	public readonly LatestVersionArn: string;
	public readonly Name: string;
}
export interface ResourceDefinitionComponentOutputs {
	readonly Arn: string;
	readonly Id: string;
	readonly LatestVersionArn: string;
	readonly Name: string;
}
export interface ResourceDefinitionComponentInputs {
	readonly Name: string;
	readonly InitialVersion?: ResourceDefinitionVersion | undefined;
	readonly Tags?: any | undefined;
	readonly LogicalId: string;
}
export class ResourceDefinitionVersion
	extends CfnResource<ResourceDefinitionVersionComponentInputs>
	implements ResourceDefinitionVersionComponentOutputs
{
	constructor(entity: ADKEntity, options: ResourceDefinitionVersionComponentInputs) {
		super(entity, options.LogicalId, "AWS::Greengrass::ResourceDefinitionVersion", options);
	}
}
export interface ResourceDefinitionVersionComponentOutputs {}
export interface ResourceDefinitionVersionComponentInputs {
	readonly ResourceDefinitionId: string;
	readonly Resources: ResourceInstance[];
	readonly LogicalId: string;
}
export class SubscriptionDefinition
	extends CfnResource<SubscriptionDefinitionComponentInputs>
	implements SubscriptionDefinitionComponentOutputs
{
	constructor(entity: ADKEntity, options: SubscriptionDefinitionComponentInputs) {
		super(entity, options.LogicalId, "AWS::Greengrass::SubscriptionDefinition", options);
	}
	public readonly Arn: string;
	public readonly Id: string;
	public readonly LatestVersionArn: string;
	public readonly Name: string;
}
export interface SubscriptionDefinitionComponentOutputs {
	readonly Arn: string;
	readonly Id: string;
	readonly LatestVersionArn: string;
	readonly Name: string;
}
export interface SubscriptionDefinitionComponentInputs {
	readonly Name: string;
	readonly InitialVersion?: SubscriptionDefinitionVersion | undefined;
	readonly Tags?: any | undefined;
	readonly LogicalId: string;
}
export class SubscriptionDefinitionVersion
	extends CfnResource<SubscriptionDefinitionVersionComponentInputs>
	implements SubscriptionDefinitionVersionComponentOutputs
{
	constructor(entity: ADKEntity, options: SubscriptionDefinitionVersionComponentInputs) {
		super(entity, options.LogicalId, "AWS::Greengrass::SubscriptionDefinitionVersion", options);
	}
}
export interface SubscriptionDefinitionVersionComponentOutputs {}
export interface SubscriptionDefinitionVersionComponentInputs {
	readonly SubscriptionDefinitionId: string;
	readonly Subscriptions: Subscription[];
	readonly LogicalId: string;
}
export interface Connector {
	readonly ConnectorArn: string;
	readonly Id: string;
	readonly Parameters?: any | undefined;
}
export interface ConnectorDefinitionVersion {
	readonly Connectors: Connector[];
}
export interface Core {
	readonly CertificateArn: string;
	readonly Id: string;
	readonly SyncShadow?: boolean | undefined;
	readonly ThingArn: string;
}
export interface CoreDefinitionVersion {
	readonly Cores: Core[];
}
export interface Device {
	readonly CertificateArn: string;
	readonly Id: string;
	readonly SyncShadow?: boolean | undefined;
	readonly ThingArn: string;
}
export interface DeviceDefinitionVersion {
	readonly Devices: Device[];
}
export interface DefaultConfig {
	readonly Execution: Execution;
}
export interface Environment {
	readonly AccessSysfs?: boolean | undefined;
	readonly Execution?: Execution | undefined;
	readonly ResourceAccessPolicies?: ResourceAccessPolicy[] | undefined;
	readonly Variables?: any | undefined;
}
export interface Execution {
	readonly IsolationMode?: string | undefined;
	readonly RunAs?: RunAs | undefined;
}
export interface FunctionInstance {
	readonly FunctionArn: string;
	readonly FunctionConfiguration: FunctionConfiguration;
	readonly Id: string;
}
export interface FunctionConfiguration {
	readonly EncodingType?: string | undefined;
	readonly Environment?: Environment | undefined;
	readonly ExecArgs?: string | undefined;
	readonly Executable?: string | undefined;
	readonly MemorySize?: number | undefined;
	readonly Pinned?: boolean | undefined;
	readonly Timeout?: number | undefined;
}
export interface FunctionDefinitionVersion {
	readonly DefaultConfig?: DefaultConfig | undefined;
	readonly Functions: FunctionInstance[];
}
export interface ResourceAccessPolicy {
	readonly Permission?: string | undefined;
	readonly ResourceId: string;
}
export interface RunAs {
	readonly Gid?: number | undefined;
	readonly Uid?: number | undefined;
}
export interface GroupVersion {
	readonly ConnectorDefinitionVersionArn?: string | undefined;
	readonly CoreDefinitionVersionArn?: string | undefined;
	readonly DeviceDefinitionVersionArn?: string | undefined;
	readonly FunctionDefinitionVersionArn?: string | undefined;
	readonly LoggerDefinitionVersionArn?: string | undefined;
	readonly ResourceDefinitionVersionArn?: string | undefined;
	readonly SubscriptionDefinitionVersionArn?: string | undefined;
}
export interface Logger {
	readonly Component: string;
	readonly Id: string;
	readonly Level: string;
	readonly Space?: number | undefined;
	readonly Type: string;
}
export interface LoggerDefinitionVersion {
	readonly Loggers: Logger[];
}
export interface GroupOwnerSetting {
	readonly AutoAddGroupOwner: boolean;
	readonly GroupOwner?: string | undefined;
}
export interface LocalDeviceResourceData {
	readonly GroupOwnerSetting?: GroupOwnerSetting | undefined;
	readonly SourcePath: string;
}
export interface LocalVolumeResourceData {
	readonly DestinationPath: string;
	readonly GroupOwnerSetting?: GroupOwnerSetting | undefined;
	readonly SourcePath: string;
}
export interface ResourceDataContainer {
	readonly LocalDeviceResourceData?: LocalDeviceResourceData | undefined;
	readonly LocalVolumeResourceData?: LocalVolumeResourceData | undefined;
	readonly S3MachineLearningModelResourceData?: S3MachineLearningModelResourceData | undefined;
	readonly SageMakerMachineLearningModelResourceData?: SageMakerMachineLearningModelResourceData | undefined;
	readonly SecretsManagerSecretResourceData?: SecretsManagerSecretResourceData | undefined;
}
export interface ResourceDefinitionVersion {
	readonly Resources: ResourceInstance[];
}
export interface ResourceDownloadOwnerSetting {
	readonly GroupOwner: string;
	readonly GroupPermission: string;
}
export interface ResourceInstance {
	readonly Id: string;
	readonly Name: string;
	readonly ResourceDataContainer: ResourceDataContainer;
}
export interface S3MachineLearningModelResourceData {
	readonly DestinationPath: string;
	readonly OwnerSetting?: ResourceDownloadOwnerSetting | undefined;
	readonly S3Uri: string;
}
export interface SageMakerMachineLearningModelResourceData {
	readonly DestinationPath: string;
	readonly OwnerSetting?: ResourceDownloadOwnerSetting | undefined;
	readonly SageMakerJobArn: string;
}
export interface SecretsManagerSecretResourceData {
	readonly ARN: string;
	readonly AdditionalStagingLabelsToDownload?: string[] | undefined;
}
export interface Subscription {
	readonly Id: string;
	readonly Source: string;
	readonly Subject: string;
	readonly Target: string;
}
export interface SubscriptionDefinitionVersion {
	readonly Subscriptions: Subscription[];
}
export default {
	ConnectorDefinition: ConnectorDefinition,
	ConnectorDefinitionVersion: ConnectorDefinitionVersion,
	CoreDefinition: CoreDefinition,
	CoreDefinitionVersion: CoreDefinitionVersion,
	DeviceDefinition: DeviceDefinition,
	DeviceDefinitionVersion: DeviceDefinitionVersion,
	FunctionDefinition: FunctionDefinition,
	FunctionDefinitionVersion: FunctionDefinitionVersion,
	Group: Group,
	GroupVersion: GroupVersion,
	LoggerDefinition: LoggerDefinition,
	LoggerDefinitionVersion: LoggerDefinitionVersion,
	ResourceDefinition: ResourceDefinition,
	ResourceDefinitionVersion: ResourceDefinitionVersion,
	SubscriptionDefinition: SubscriptionDefinition,
	SubscriptionDefinitionVersion: SubscriptionDefinitionVersion,
};
