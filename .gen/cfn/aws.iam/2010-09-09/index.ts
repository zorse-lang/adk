import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class AccessKey extends CfnResource<AccessKeyComponentInputs> implements AccessKeyComponentOutputs {
	constructor(entity: ADKEntity, options: AccessKeyComponentInputs) {
		super(entity, options.LogicalId, "AWS::IAM::AccessKey", options);
	}
	public readonly SecretAccessKey: string;
}
export interface AccessKeyComponentOutputs {
	readonly SecretAccessKey: string;
}
export interface AccessKeyComponentInputs {
	readonly UserName: string;
	readonly Serial?: number | undefined;
	readonly Status?: string | undefined;
	readonly LogicalId: string;
}
export class Group extends CfnResource<GroupComponentInputs> implements GroupComponentOutputs {
	constructor(entity: ADKEntity, options: GroupComponentInputs) {
		super(entity, options.LogicalId, "AWS::IAM::Group", options);
	}
	public readonly Arn: string;
}
export interface GroupComponentOutputs {
	readonly Arn: string;
}
export interface GroupComponentInputs {
	readonly GroupName?: string | undefined;
	readonly ManagedPolicyArns?: string[] | undefined;
	readonly Path?: string | undefined;
	readonly Policies?: Policy[] | undefined;
	readonly LogicalId: string;
}
export class InstanceProfile
	extends CfnResource<InstanceProfileComponentInputs>
	implements InstanceProfileComponentOutputs
{
	constructor(entity: ADKEntity, options: InstanceProfileComponentInputs) {
		super(entity, options.LogicalId, "AWS::IAM::InstanceProfile", options);
	}
	public readonly Arn: string;
}
export interface InstanceProfileComponentOutputs {
	readonly Arn: string;
}
export interface InstanceProfileComponentInputs {
	readonly Roles: string[];
	readonly InstanceProfileName?: string | undefined;
	readonly Path?: string | undefined;
	readonly LogicalId: string;
}
export class ManagedPolicy extends CfnResource<ManagedPolicyComponentInputs> implements ManagedPolicyComponentOutputs {
	constructor(entity: ADKEntity, options: ManagedPolicyComponentInputs) {
		super(entity, options.LogicalId, "AWS::IAM::ManagedPolicy", options);
	}
}
export interface ManagedPolicyComponentOutputs {}
export interface ManagedPolicyComponentInputs {
	readonly PolicyDocument: any;
	readonly Description?: string | undefined;
	readonly Groups?: string[] | undefined;
	readonly ManagedPolicyName?: string | undefined;
	readonly Path?: string | undefined;
	readonly Roles?: string[] | undefined;
	readonly Users?: string[] | undefined;
	readonly LogicalId: string;
}
export class OIDCProvider extends CfnResource<OIDCProviderComponentInputs> implements OIDCProviderComponentOutputs {
	constructor(entity: ADKEntity, options: OIDCProviderComponentInputs) {
		super(entity, options.LogicalId, "AWS::IAM::OIDCProvider", options);
	}
	public readonly Arn: string;
}
export interface OIDCProviderComponentOutputs {
	readonly Arn: string;
}
export interface OIDCProviderComponentInputs {
	readonly ThumbprintList: string[];
	readonly ClientIdList?: string[] | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly Url?: string | undefined;
	readonly LogicalId: string;
}
export class Policy extends CfnResource<PolicyComponentInputs> implements PolicyComponentOutputs {
	constructor(entity: ADKEntity, options: PolicyComponentInputs) {
		super(entity, options.LogicalId, "AWS::IAM::Policy", options);
	}
}
export interface PolicyComponentOutputs {}
export interface PolicyComponentInputs {
	readonly PolicyDocument: any;
	readonly PolicyName: string;
	readonly Groups?: string[] | undefined;
	readonly Roles?: string[] | undefined;
	readonly Users?: string[] | undefined;
	readonly LogicalId: string;
}
export class Role extends CfnResource<RoleComponentInputs> implements RoleComponentOutputs {
	constructor(entity: ADKEntity, options: RoleComponentInputs) {
		super(entity, options.LogicalId, "AWS::IAM::Role", options);
	}
	public readonly Arn: string;
	public readonly RoleId: string;
}
export interface RoleComponentOutputs {
	readonly Arn: string;
	readonly RoleId: string;
}
export interface RoleComponentInputs {
	readonly AssumeRolePolicyDocument: any;
	readonly Description?: string | undefined;
	readonly ManagedPolicyArns?: string[] | undefined;
	readonly MaxSessionDuration?: number | undefined;
	readonly Path?: string | undefined;
	readonly PermissionsBoundary?: string | undefined;
	readonly Policies?: Policy[] | undefined;
	readonly RoleName?: string | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export class SAMLProvider extends CfnResource<SAMLProviderComponentInputs> implements SAMLProviderComponentOutputs {
	constructor(entity: ADKEntity, options: SAMLProviderComponentInputs) {
		super(entity, options.LogicalId, "AWS::IAM::SAMLProvider", options);
	}
	public readonly Arn: string;
}
export interface SAMLProviderComponentOutputs {
	readonly Arn: string;
}
export interface SAMLProviderComponentInputs {
	readonly SamlMetadataDocument: string;
	readonly Name?: string | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export class ServerCertificate
	extends CfnResource<ServerCertificateComponentInputs>
	implements ServerCertificateComponentOutputs
{
	constructor(entity: ADKEntity, options: ServerCertificateComponentInputs) {
		super(entity, options.LogicalId, "AWS::IAM::ServerCertificate", options);
	}
	public readonly Arn: string;
}
export interface ServerCertificateComponentOutputs {
	readonly Arn: string;
}
export interface ServerCertificateComponentInputs {
	readonly CertificateBody?: string | undefined;
	readonly CertificateChain?: string | undefined;
	readonly Path?: string | undefined;
	readonly PrivateKey?: string | undefined;
	readonly ServerCertificateName?: string | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export class ServiceLinkedRole
	extends CfnResource<ServiceLinkedRoleComponentInputs>
	implements ServiceLinkedRoleComponentOutputs
{
	constructor(entity: ADKEntity, options: ServiceLinkedRoleComponentInputs) {
		super(entity, options.LogicalId, "AWS::IAM::ServiceLinkedRole", options);
	}
}
export interface ServiceLinkedRoleComponentOutputs {}
export interface ServiceLinkedRoleComponentInputs {
	readonly AWSServiceName: string;
	readonly CustomSuffix?: string | undefined;
	readonly Description?: string | undefined;
	readonly LogicalId: string;
}
export class User extends CfnResource<UserComponentInputs> implements UserComponentOutputs {
	constructor(entity: ADKEntity, options: UserComponentInputs) {
		super(entity, options.LogicalId, "AWS::IAM::User", options);
	}
	public readonly Arn: string;
}
export interface UserComponentOutputs {
	readonly Arn: string;
}
export interface UserComponentInputs {
	readonly Groups?: string[] | undefined;
	readonly LoginProfile?: LoginProfile | undefined;
	readonly ManagedPolicyArns?: string[] | undefined;
	readonly Path?: string | undefined;
	readonly PermissionsBoundary?: string | undefined;
	readonly Policies?: Policy[] | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly UserName?: string | undefined;
	readonly LogicalId: string;
}
export class UserToGroupAddition
	extends CfnResource<UserToGroupAdditionComponentInputs>
	implements UserToGroupAdditionComponentOutputs
{
	constructor(entity: ADKEntity, options: UserToGroupAdditionComponentInputs) {
		super(entity, options.LogicalId, "AWS::IAM::UserToGroupAddition", options);
	}
}
export interface UserToGroupAdditionComponentOutputs {}
export interface UserToGroupAdditionComponentInputs {
	readonly GroupName: string;
	readonly Users: string[];
	readonly LogicalId: string;
}
export class VirtualMFADevice
	extends CfnResource<VirtualMFADeviceComponentInputs>
	implements VirtualMFADeviceComponentOutputs
{
	constructor(entity: ADKEntity, options: VirtualMFADeviceComponentInputs) {
		super(entity, options.LogicalId, "AWS::IAM::VirtualMFADevice", options);
	}
	public readonly SerialNumber: string;
}
export interface VirtualMFADeviceComponentOutputs {
	readonly SerialNumber: string;
}
export interface VirtualMFADeviceComponentInputs {
	readonly Users: string[];
	readonly Path?: string | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly VirtualMfaDeviceName?: string | undefined;
	readonly LogicalId: string;
}
export interface Policy {
	readonly PolicyDocument: any;
	readonly PolicyName: string;
}
export interface LoginProfile {
	readonly Password: string;
	readonly PasswordResetRequired?: boolean | undefined;
}
export default {
	AccessKey: AccessKey,
	Group: Group,
	InstanceProfile: InstanceProfile,
	ManagedPolicy: ManagedPolicy,
	OIDCProvider: OIDCProvider,
	Policy: Policy,
	Role: Role,
	SAMLProvider: SAMLProvider,
	ServerCertificate: ServerCertificate,
	ServiceLinkedRole: ServiceLinkedRole,
	User: User,
	UserToGroupAddition: UserToGroupAddition,
	VirtualMFADevice: VirtualMFADevice,
};
