import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class AppBlock extends CfnResource<AppBlockComponentInputs> implements AppBlockComponentOutputs {
	constructor(entity: ADKEntity, options: AppBlockComponentInputs) {
		super(entity, options.LogicalId, "AWS::AppStream::AppBlock", options);
	}
	public readonly Arn: string;
	public readonly CreatedTime: string;
}
export interface AppBlockComponentOutputs {
	readonly Arn: string;
	readonly CreatedTime: string;
}
export interface AppBlockComponentInputs {
	readonly Name: string;
	readonly SetupScriptDetails: ScriptDetails;
	readonly SourceS3Location: S3Location;
	readonly Description?: string | undefined;
	readonly DisplayName?: string | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export class Application extends CfnResource<ApplicationComponentInputs> implements ApplicationComponentOutputs {
	constructor(entity: ADKEntity, options: ApplicationComponentInputs) {
		super(entity, options.LogicalId, "AWS::AppStream::Application", options);
	}
	public readonly Arn: string;
	public readonly CreatedTime: string;
}
export interface ApplicationComponentOutputs {
	readonly Arn: string;
	readonly CreatedTime: string;
}
export interface ApplicationComponentInputs {
	readonly AppBlockArn: string;
	readonly IconS3Location: S3Location;
	readonly InstanceFamilies: string[];
	readonly LaunchPath: string;
	readonly Name: string;
	readonly Platforms: string[];
	readonly AttributesToDelete?: string[] | undefined;
	readonly Description?: string | undefined;
	readonly DisplayName?: string | undefined;
	readonly LaunchParameters?: string | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly WorkingDirectory?: string | undefined;
	readonly LogicalId: string;
}
export class ApplicationEntitlementAssociation
	extends CfnResource<ApplicationEntitlementAssociationComponentInputs>
	implements ApplicationEntitlementAssociationComponentOutputs
{
	constructor(entity: ADKEntity, options: ApplicationEntitlementAssociationComponentInputs) {
		super(entity, options.LogicalId, "AWS::AppStream::ApplicationEntitlementAssociation", options);
	}
}
export interface ApplicationEntitlementAssociationComponentOutputs {}
export interface ApplicationEntitlementAssociationComponentInputs {
	readonly ApplicationIdentifier: string;
	readonly EntitlementName: string;
	readonly StackName: string;
	readonly LogicalId: string;
}
export class ApplicationFleetAssociation
	extends CfnResource<ApplicationFleetAssociationComponentInputs>
	implements ApplicationFleetAssociationComponentOutputs
{
	constructor(entity: ADKEntity, options: ApplicationFleetAssociationComponentInputs) {
		super(entity, options.LogicalId, "AWS::AppStream::ApplicationFleetAssociation", options);
	}
}
export interface ApplicationFleetAssociationComponentOutputs {}
export interface ApplicationFleetAssociationComponentInputs {
	readonly ApplicationArn: string;
	readonly FleetName: string;
	readonly LogicalId: string;
}
export class DirectoryConfig
	extends CfnResource<DirectoryConfigComponentInputs>
	implements DirectoryConfigComponentOutputs
{
	constructor(entity: ADKEntity, options: DirectoryConfigComponentInputs) {
		super(entity, options.LogicalId, "AWS::AppStream::DirectoryConfig", options);
	}
}
export interface DirectoryConfigComponentOutputs {}
export interface DirectoryConfigComponentInputs {
	readonly DirectoryName: string;
	readonly OrganizationalUnitDistinguishedNames: string[];
	readonly ServiceAccountCredentials: ServiceAccountCredentials;
	readonly CertificateBasedAuthProperties?: CertificateBasedAuthProperties | undefined;
	readonly LogicalId: string;
}
export class Entitlement extends CfnResource<EntitlementComponentInputs> implements EntitlementComponentOutputs {
	constructor(entity: ADKEntity, options: EntitlementComponentInputs) {
		super(entity, options.LogicalId, "AWS::AppStream::Entitlement", options);
	}
	public readonly CreatedTime: string;
	public readonly LastModifiedTime: string;
}
export interface EntitlementComponentOutputs {
	readonly CreatedTime: string;
	readonly LastModifiedTime: string;
}
export interface EntitlementComponentInputs {
	readonly AppVisibility: string;
	readonly Attributes: Attribute[];
	readonly Name: string;
	readonly StackName: string;
	readonly Description?: string | undefined;
	readonly LogicalId: string;
}
export class Fleet extends CfnResource<FleetComponentInputs> implements FleetComponentOutputs {
	constructor(entity: ADKEntity, options: FleetComponentInputs) {
		super(entity, options.LogicalId, "AWS::AppStream::Fleet", options);
	}
}
export interface FleetComponentOutputs {}
export interface FleetComponentInputs {
	readonly InstanceType: string;
	readonly Name: string;
	readonly ComputeCapacity?: ComputeCapacity | undefined;
	readonly Description?: string | undefined;
	readonly DisconnectTimeoutInSeconds?: number | undefined;
	readonly DisplayName?: string | undefined;
	readonly DomainJoinInfo?: DomainJoinInfo | undefined;
	readonly EnableDefaultInternetAccess?: boolean | undefined;
	readonly FleetType?: string | undefined;
	readonly IamRoleArn?: string | undefined;
	readonly IdleDisconnectTimeoutInSeconds?: number | undefined;
	readonly ImageArn?: string | undefined;
	readonly ImageName?: string | undefined;
	readonly MaxConcurrentSessions?: number | undefined;
	readonly MaxUserDurationInSeconds?: number | undefined;
	readonly Platform?: string | undefined;
	readonly SessionScriptS3Location?: S3Location | undefined;
	readonly StreamView?: string | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly UsbDeviceFilterStrings?: string[] | undefined;
	readonly VpcConfig?: VpcConfig | undefined;
	readonly LogicalId: string;
}
export class ImageBuilder extends CfnResource<ImageBuilderComponentInputs> implements ImageBuilderComponentOutputs {
	constructor(entity: ADKEntity, options: ImageBuilderComponentInputs) {
		super(entity, options.LogicalId, "AWS::AppStream::ImageBuilder", options);
	}
	public readonly StreamingUrl: string;
}
export interface ImageBuilderComponentOutputs {
	readonly StreamingUrl: string;
}
export interface ImageBuilderComponentInputs {
	readonly InstanceType: string;
	readonly Name: string;
	readonly AccessEndpoints?: AccessEndpoint[] | undefined;
	readonly AppstreamAgentVersion?: string | undefined;
	readonly Description?: string | undefined;
	readonly DisplayName?: string | undefined;
	readonly DomainJoinInfo?: DomainJoinInfo | undefined;
	readonly EnableDefaultInternetAccess?: boolean | undefined;
	readonly IamRoleArn?: string | undefined;
	readonly ImageArn?: string | undefined;
	readonly ImageName?: string | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly VpcConfig?: VpcConfig | undefined;
	readonly LogicalId: string;
}
export class Stack extends CfnResource<StackComponentInputs> implements StackComponentOutputs {
	constructor(entity: ADKEntity, options: StackComponentInputs) {
		super(entity, options.LogicalId, "AWS::AppStream::Stack", options);
	}
}
export interface StackComponentOutputs {}
export interface StackComponentInputs {
	readonly AccessEndpoints?: AccessEndpoint[] | undefined;
	readonly ApplicationSettings?: ApplicationSettings | undefined;
	readonly AttributesToDelete?: string[] | undefined;
	readonly DeleteStorageConnectors?: boolean | undefined;
	readonly Description?: string | undefined;
	readonly DisplayName?: string | undefined;
	readonly EmbedHostDomains?: string[] | undefined;
	readonly FeedbackURL?: string | undefined;
	readonly Name?: string | undefined;
	readonly RedirectURL?: string | undefined;
	readonly StorageConnectors?: StorageConnector[] | undefined;
	readonly StreamingExperienceSettings?: StreamingExperienceSettings | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly UserSettings?: UserSetting[] | undefined;
	readonly LogicalId: string;
}
export class StackFleetAssociation
	extends CfnResource<StackFleetAssociationComponentInputs>
	implements StackFleetAssociationComponentOutputs
{
	constructor(entity: ADKEntity, options: StackFleetAssociationComponentInputs) {
		super(entity, options.LogicalId, "AWS::AppStream::StackFleetAssociation", options);
	}
}
export interface StackFleetAssociationComponentOutputs {}
export interface StackFleetAssociationComponentInputs {
	readonly FleetName: string;
	readonly StackName: string;
	readonly LogicalId: string;
}
export class StackUserAssociation
	extends CfnResource<StackUserAssociationComponentInputs>
	implements StackUserAssociationComponentOutputs
{
	constructor(entity: ADKEntity, options: StackUserAssociationComponentInputs) {
		super(entity, options.LogicalId, "AWS::AppStream::StackUserAssociation", options);
	}
}
export interface StackUserAssociationComponentOutputs {}
export interface StackUserAssociationComponentInputs {
	readonly AuthenticationType: string;
	readonly StackName: string;
	readonly UserName: string;
	readonly SendEmailNotification?: boolean | undefined;
	readonly LogicalId: string;
}
export class User extends CfnResource<UserComponentInputs> implements UserComponentOutputs {
	constructor(entity: ADKEntity, options: UserComponentInputs) {
		super(entity, options.LogicalId, "AWS::AppStream::User", options);
	}
}
export interface UserComponentOutputs {}
export interface UserComponentInputs {
	readonly AuthenticationType: string;
	readonly UserName: string;
	readonly FirstName?: string | undefined;
	readonly LastName?: string | undefined;
	readonly MessageAction?: string | undefined;
	readonly LogicalId: string;
}
export interface S3Location {
	readonly S3Bucket: string;
	readonly S3Key: string;
}
export interface ScriptDetails {
	readonly ExecutableParameters?: string | undefined;
	readonly ExecutablePath: string;
	readonly ScriptS3Location: S3Location;
	readonly TimeoutInSeconds: number;
}
export interface CertificateBasedAuthProperties {
	readonly CertificateAuthorityArn?: string | undefined;
	readonly Status?: string | undefined;
}
export interface ServiceAccountCredentials {
	readonly AccountName: string;
	readonly AccountPassword: string;
}
export interface Attribute {
	readonly Name: string;
	readonly Value: string;
}
export interface ComputeCapacity {
	readonly DesiredInstances: number;
}
export interface DomainJoinInfo {
	readonly DirectoryName?: string | undefined;
	readonly OrganizationalUnitDistinguishedName?: string | undefined;
}
export interface VpcConfig {
	readonly SecurityGroupIds?: string[] | undefined;
	readonly SubnetIds?: string[] | undefined;
}
export interface AccessEndpoint {
	readonly EndpointType: string;
	readonly VpceId: string;
}
export interface ApplicationSettings {
	readonly Enabled: boolean;
	readonly SettingsGroup?: string | undefined;
}
export interface StorageConnector {
	readonly ConnectorType: string;
	readonly Domains?: string[] | undefined;
	readonly ResourceIdentifier?: string | undefined;
}
export interface StreamingExperienceSettings {
	readonly PreferredProtocol?: string | undefined;
}
export interface UserSetting {
	readonly Action: string;
	readonly Permission: string;
}
export default {
	AppBlock: AppBlock,
	Application: Application,
	ApplicationEntitlementAssociation: ApplicationEntitlementAssociation,
	ApplicationFleetAssociation: ApplicationFleetAssociation,
	DirectoryConfig: DirectoryConfig,
	Entitlement: Entitlement,
	Fleet: Fleet,
	ImageBuilder: ImageBuilder,
	Stack: Stack,
	StackFleetAssociation: StackFleetAssociation,
	StackUserAssociation: StackUserAssociation,
	User: User,
};
