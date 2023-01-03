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
	readonly Description?: (string | undefined) | undefined;
	readonly DisplayName?: (string | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
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
	readonly AttributesToDelete?: (string[] | undefined) | undefined;
	readonly Description?: (string | undefined) | undefined;
	readonly DisplayName?: (string | undefined) | undefined;
	readonly LaunchParameters?: (string | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly WorkingDirectory?: (string | undefined) | undefined;
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
	readonly CertificateBasedAuthProperties?: (CertificateBasedAuthProperties | undefined) | undefined;
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
	readonly Description?: (string | undefined) | undefined;
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
	readonly ComputeCapacity?: (ComputeCapacity | undefined) | undefined;
	readonly Description?: (string | undefined) | undefined;
	readonly DisconnectTimeoutInSeconds?: (number | undefined) | undefined;
	readonly DisplayName?: (string | undefined) | undefined;
	readonly DomainJoinInfo?: (DomainJoinInfo | undefined) | undefined;
	readonly EnableDefaultInternetAccess?: (boolean | undefined) | undefined;
	readonly FleetType?: (string | undefined) | undefined;
	readonly IamRoleArn?: (string | undefined) | undefined;
	readonly IdleDisconnectTimeoutInSeconds?: (number | undefined) | undefined;
	readonly ImageArn?: (string | undefined) | undefined;
	readonly ImageName?: (string | undefined) | undefined;
	readonly MaxConcurrentSessions?: (number | undefined) | undefined;
	readonly MaxUserDurationInSeconds?: (number | undefined) | undefined;
	readonly Platform?: (string | undefined) | undefined;
	readonly SessionScriptS3Location?: (S3Location | undefined) | undefined;
	readonly StreamView?: (string | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly UsbDeviceFilterStrings?: (string[] | undefined) | undefined;
	readonly VpcConfig?: (VpcConfig | undefined) | undefined;
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
	readonly AccessEndpoints?: (AccessEndpoint[] | undefined) | undefined;
	readonly AppstreamAgentVersion?: (string | undefined) | undefined;
	readonly Description?: (string | undefined) | undefined;
	readonly DisplayName?: (string | undefined) | undefined;
	readonly DomainJoinInfo?: (DomainJoinInfo | undefined) | undefined;
	readonly EnableDefaultInternetAccess?: (boolean | undefined) | undefined;
	readonly IamRoleArn?: (string | undefined) | undefined;
	readonly ImageArn?: (string | undefined) | undefined;
	readonly ImageName?: (string | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly VpcConfig?: (VpcConfig | undefined) | undefined;
	readonly LogicalId: string;
}
export class Stack extends CfnResource<StackComponentInputs> implements StackComponentOutputs {
	constructor(entity: ADKEntity, options: StackComponentInputs) {
		super(entity, options.LogicalId, "AWS::AppStream::Stack", options);
	}
}
export interface StackComponentOutputs {}
export interface StackComponentInputs {
	readonly AccessEndpoints?: (AccessEndpoint[] | undefined) | undefined;
	readonly ApplicationSettings?: (ApplicationSettings | undefined) | undefined;
	readonly AttributesToDelete?: (string[] | undefined) | undefined;
	readonly DeleteStorageConnectors?: (boolean | undefined) | undefined;
	readonly Description?: (string | undefined) | undefined;
	readonly DisplayName?: (string | undefined) | undefined;
	readonly EmbedHostDomains?: (string[] | undefined) | undefined;
	readonly FeedbackURL?: (string | undefined) | undefined;
	readonly Name?: (string | undefined) | undefined;
	readonly RedirectURL?: (string | undefined) | undefined;
	readonly StorageConnectors?: (StorageConnector[] | undefined) | undefined;
	readonly StreamingExperienceSettings?: (StreamingExperienceSettings | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly UserSettings?: (UserSetting[] | undefined) | undefined;
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
	readonly SendEmailNotification?: (boolean | undefined) | undefined;
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
	readonly FirstName?: (string | undefined) | undefined;
	readonly LastName?: (string | undefined) | undefined;
	readonly MessageAction?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export interface S3Location {
	readonly S3Bucket: string;
	readonly S3Key: string;
}
export interface ScriptDetails {
	readonly ExecutableParameters?: (string | undefined) | undefined;
	readonly ExecutablePath: string;
	readonly ScriptS3Location: S3Location;
	readonly TimeoutInSeconds: number;
}
export interface CertificateBasedAuthProperties {
	readonly CertificateAuthorityArn?: (string | undefined) | undefined;
	readonly Status?: (string | undefined) | undefined;
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
	readonly DirectoryName?: (string | undefined) | undefined;
	readonly OrganizationalUnitDistinguishedName?: (string | undefined) | undefined;
}
export interface VpcConfig {
	readonly SecurityGroupIds?: (string[] | undefined) | undefined;
	readonly SubnetIds?: (string[] | undefined) | undefined;
}
export interface AccessEndpoint {
	readonly EndpointType: string;
	readonly VpceId: string;
}
export interface ApplicationSettings {
	readonly Enabled: boolean;
	readonly SettingsGroup?: (string | undefined) | undefined;
}
export interface StorageConnector {
	readonly ConnectorType: string;
	readonly Domains?: (string[] | undefined) | undefined;
	readonly ResourceIdentifier?: (string | undefined) | undefined;
}
export interface StreamingExperienceSettings {
	readonly PreferredProtocol?: (string | undefined) | undefined;
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
