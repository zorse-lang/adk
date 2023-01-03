import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class LaunchProfile extends CfnResource<LaunchProfileComponentInputs> implements LaunchProfileComponentOutputs {
	constructor(entity: ADKEntity, options: LaunchProfileComponentInputs) {
		super(entity, options.LogicalId, "AWS::NimbleStudio::LaunchProfile", options);
	}
	public readonly LaunchProfileId: string;
}
export interface LaunchProfileComponentOutputs {
	readonly LaunchProfileId: string;
}
export interface LaunchProfileComponentInputs {
	readonly Ec2SubnetIds: string[];
	readonly LaunchProfileProtocolVersions: string[];
	readonly Name: string;
	readonly StreamConfiguration: StreamConfiguration;
	readonly StudioComponentIds: string[];
	readonly StudioId: string;
	readonly Description?: (string | undefined) | undefined;
	readonly Tags?: ({ [key: string]: string } | undefined) | undefined;
	readonly LogicalId: string;
}
export class StreamingImage extends CfnResource<StreamingImageComponentInputs> implements StreamingImageComponentOutputs {
	constructor(entity: ADKEntity, options: StreamingImageComponentInputs) {
		super(entity, options.LogicalId, "AWS::NimbleStudio::StreamingImage", options);
	}
	public readonly EncryptionConfigurationKeyArn: string;
	public readonly EncryptionConfigurationKeyType: string;
	public readonly EulaIds: string[];
	public readonly Owner: string;
	public readonly Platform: string;
	public readonly StreamingImageId: string;
}
export interface StreamingImageComponentOutputs {
	readonly EncryptionConfigurationKeyArn: string;
	readonly EncryptionConfigurationKeyType: string;
	readonly EulaIds: string[];
	readonly Owner: string;
	readonly Platform: string;
	readonly StreamingImageId: string;
}
export interface StreamingImageComponentInputs {
	readonly Ec2ImageId: string;
	readonly Name: string;
	readonly StudioId: string;
	readonly Description?: (string | undefined) | undefined;
	readonly Tags?: ({ [key: string]: string } | undefined) | undefined;
	readonly LogicalId: string;
}
export class Studio extends CfnResource<StudioComponentInputs> implements StudioComponentOutputs {
	constructor(entity: ADKEntity, options: StudioComponentInputs) {
		super(entity, options.LogicalId, "AWS::NimbleStudio::Studio", options);
	}
	public readonly HomeRegion: string;
	public readonly SsoClientId: string;
	public readonly StudioId: string;
	public readonly StudioUrl: string;
}
export interface StudioComponentOutputs {
	readonly HomeRegion: string;
	readonly SsoClientId: string;
	readonly StudioId: string;
	readonly StudioUrl: string;
}
export interface StudioComponentInputs {
	readonly AdminRoleArn: string;
	readonly DisplayName: string;
	readonly StudioName: string;
	readonly UserRoleArn: string;
	readonly StudioEncryptionConfiguration?: (StudioEncryptionConfiguration | undefined) | undefined;
	readonly Tags?: ({ [key: string]: string } | undefined) | undefined;
	readonly LogicalId: string;
}
export class StudioComponent
	extends CfnResource<StudioComponentComponentInputs>
	implements StudioComponentComponentOutputs
{
	constructor(entity: ADKEntity, options: StudioComponentComponentInputs) {
		super(entity, options.LogicalId, "AWS::NimbleStudio::StudioComponent", options);
	}
	public readonly StudioComponentId: string;
}
export interface StudioComponentComponentOutputs {
	readonly StudioComponentId: string;
}
export interface StudioComponentComponentInputs {
	readonly Name: string;
	readonly StudioId: string;
	readonly Type: string;
	readonly Configuration?: (StudioComponentConfiguration | undefined) | undefined;
	readonly Description?: (string | undefined) | undefined;
	readonly Ec2SecurityGroupIds?: (string[] | undefined) | undefined;
	readonly InitializationScripts?: (StudioComponentInitializationScript[] | undefined) | undefined;
	readonly ScriptParameters?: (ScriptParameterKeyValue[] | undefined) | undefined;
	readonly Subtype?: (string | undefined) | undefined;
	readonly Tags?: ({ [key: string]: string } | undefined) | undefined;
	readonly LogicalId: string;
}
export interface StreamConfiguration {
	readonly ClipboardMode: string;
	readonly Ec2InstanceTypes: string[];
	readonly MaxSessionLengthInMinutes?: (number | undefined) | undefined;
	readonly MaxStoppedSessionLengthInMinutes?: (number | undefined) | undefined;
	readonly SessionStorage?: (StreamConfigurationSessionStorage | undefined) | undefined;
	readonly StreamingImageIds: string[];
}
export interface StreamConfigurationSessionStorage {
	readonly Mode: string[];
	readonly Root?: (StreamingSessionStorageRoot | undefined) | undefined;
}
export interface StreamingSessionStorageRoot {
	readonly Linux?: (string | undefined) | undefined;
	readonly Windows?: (string | undefined) | undefined;
}
export interface StreamingImageEncryptionConfiguration {
	readonly KeyArn?: (string | undefined) | undefined;
	readonly KeyType: string;
}
export interface StudioEncryptionConfiguration {
	readonly KeyArn?: (string | undefined) | undefined;
	readonly KeyType: string;
}
export interface ActiveDirectoryComputerAttribute {
	readonly Name?: (string | undefined) | undefined;
	readonly Value?: (string | undefined) | undefined;
}
export interface ActiveDirectoryConfiguration {
	readonly ComputerAttributes?: (ActiveDirectoryComputerAttribute[] | undefined) | undefined;
	readonly DirectoryId?: (string | undefined) | undefined;
	readonly OrganizationalUnitDistinguishedName?: (string | undefined) | undefined;
}
export interface ComputeFarmConfiguration {
	readonly ActiveDirectoryUser?: (string | undefined) | undefined;
	readonly Endpoint?: (string | undefined) | undefined;
}
export interface LicenseServiceConfiguration {
	readonly Endpoint?: (string | undefined) | undefined;
}
export interface ScriptParameterKeyValue {
	readonly Key?: (string | undefined) | undefined;
	readonly Value?: (string | undefined) | undefined;
}
export interface SharedFileSystemConfiguration {
	readonly Endpoint?: (string | undefined) | undefined;
	readonly FileSystemId?: (string | undefined) | undefined;
	readonly LinuxMountPoint?: (string | undefined) | undefined;
	readonly ShareName?: (string | undefined) | undefined;
	readonly WindowsMountDrive?: (string | undefined) | undefined;
}
export interface StudioComponentConfiguration {
	readonly ActiveDirectoryConfiguration?: (ActiveDirectoryConfiguration | undefined) | undefined;
	readonly ComputeFarmConfiguration?: (ComputeFarmConfiguration | undefined) | undefined;
	readonly LicenseServiceConfiguration?: (LicenseServiceConfiguration | undefined) | undefined;
	readonly SharedFileSystemConfiguration?: (SharedFileSystemConfiguration | undefined) | undefined;
}
export interface StudioComponentInitializationScript {
	readonly LaunchProfileProtocolVersion?: (string | undefined) | undefined;
	readonly Platform?: (string | undefined) | undefined;
	readonly RunContext?: (string | undefined) | undefined;
	readonly Script?: (string | undefined) | undefined;
}
export default {
	LaunchProfile: LaunchProfile,
	StreamingImage: StreamingImage,
	Studio: Studio,
	StudioComponent: StudioComponent,
};
