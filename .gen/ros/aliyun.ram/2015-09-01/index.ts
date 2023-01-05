import { RosResource, Entity as ADKEntity } from "@zorse/adk";

export class AccessKey extends RosResource<AccessKeyComponentInputs> implements AccessKeyComponentOutputs {
	constructor(entity: ADKEntity, options: AccessKeyComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::RAM::AccessKey", options);
	}
	public readonly Status: any;
	public readonly AccessKeyId: any;
	public readonly AccessKeySecret: any;
}
export interface AccessKeyComponentOutputs {
	readonly Status: any;
	readonly AccessKeyId: any;
	readonly AccessKeySecret: any;
}
export interface AccessKeyComponentInputs {
	readonly UserName: string;
	readonly LogicalId: string;
}
export class AttachPolicyToRole
	extends RosResource<AttachPolicyToRoleComponentInputs>
	implements AttachPolicyToRoleComponentOutputs
{
	constructor(entity: ADKEntity, options: AttachPolicyToRoleComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::RAM::AttachPolicyToRole", options);
	}
}
export interface AttachPolicyToRoleComponentOutputs {}
export interface AttachPolicyToRoleComponentInputs {
	readonly PolicyName: string;
	readonly PolicyType: string;
	readonly RoleName: string;
	readonly LogicalId: string;
}
export class AttachPolicyToUser
	extends RosResource<AttachPolicyToUserComponentInputs>
	implements AttachPolicyToUserComponentOutputs
{
	constructor(entity: ADKEntity, options: AttachPolicyToUserComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::RAM::AttachPolicyToUser", options);
	}
}
export interface AttachPolicyToUserComponentOutputs {}
export interface AttachPolicyToUserComponentInputs {
	readonly PolicyName: string;
	readonly PolicyType: string;
	readonly UserName: string;
	readonly LogicalId: string;
}
export class Group extends RosResource<GroupComponentInputs> implements GroupComponentOutputs {
	constructor(entity: ADKEntity, options: GroupComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::RAM::Group", options);
	}
}
export interface GroupComponentOutputs {}
export interface GroupComponentInputs {
	readonly GroupName: any | string;
	readonly Comments?: string | undefined;
	readonly DeletionForce?: boolean | undefined;
	readonly Policies?: Policies[] | undefined;
	readonly PolicyAttachments?: PolicyAttachments | undefined;
	readonly LogicalId: string;
}
export class ManagedPolicy extends RosResource<ManagedPolicyComponentInputs> implements ManagedPolicyComponentOutputs {
	constructor(entity: ADKEntity, options: ManagedPolicyComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::RAM::ManagedPolicy", options);
	}
}
export interface ManagedPolicyComponentOutputs {}
export interface ManagedPolicyComponentInputs {
	readonly PolicyName: any | string;
	readonly Description?: string | undefined;
	readonly Groups?: any[] | undefined;
	readonly PolicyDocument?: PolicyDocument | undefined;
	readonly PolicyDocumentUnchecked?: { [key: string]: any } | undefined;
	readonly Roles?: any[] | undefined;
	readonly Users?: any[] | undefined;
	readonly LogicalId: string;
}
export class RamAccountAlias
	extends RosResource<RamAccountAliasComponentInputs>
	implements RamAccountAliasComponentOutputs
{
	constructor(entity: ADKEntity, options: RamAccountAliasComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::RAM::RamAccountAlias", options);
	}
}
export interface RamAccountAliasComponentOutputs {}
export interface RamAccountAliasComponentInputs {
	readonly AccountAlias: any | string;
	readonly LogicalId: string;
}
export class Role extends RosResource<RoleComponentInputs> implements RoleComponentOutputs {
	constructor(entity: ADKEntity, options: RoleComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::RAM::Role", options);
	}
	public readonly Arn: any;
	public readonly RoleId: any;
}
export interface RoleComponentOutputs {
	readonly Arn: any;
	readonly RoleId: any;
}
export interface RoleComponentInputs {
	readonly AssumeRolePolicyDocument: AssumeRolePolicyDocument;
	readonly RoleName: any | string;
	readonly DeletionForce?: boolean | undefined;
	readonly Description?: string | undefined;
	readonly MaxSessionDuration?: number | undefined;
	readonly Policies?: Policies[] | undefined;
	readonly PolicyAttachments?: PolicyAttachments | undefined;
	readonly LogicalId: string;
}
export class SAMLProvider extends RosResource<SAMLProviderComponentInputs> implements SAMLProviderComponentOutputs {
	constructor(entity: ADKEntity, options: SAMLProviderComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::RAM::SAMLProvider", options);
	}
	public readonly SamlProviderName: any;
	public readonly Arn: any;
}
export interface SAMLProviderComponentOutputs {
	readonly SamlProviderName: any;
	readonly Arn: any;
}
export interface SAMLProviderComponentInputs {
	readonly SAMLProviderName: string;
	readonly Description?: string | undefined;
	readonly SAMLMetadataDocument?: string | undefined;
	readonly SAMLMetadataDocumentURL?: string | undefined;
	readonly LogicalId: string;
}
export class SecurityPreference
	extends RosResource<SecurityPreferenceComponentInputs>
	implements SecurityPreferenceComponentOutputs
{
	constructor(entity: ADKEntity, options: SecurityPreferenceComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::RAM::SecurityPreference", options);
	}
	public readonly AllowUserToManageMfaDevices: any;
	public readonly EnableSaveMfaTicket: any;
}
export interface SecurityPreferenceComponentOutputs {
	readonly AllowUserToManageMfaDevices: any;
	readonly EnableSaveMfaTicket: any;
}
export interface SecurityPreferenceComponentInputs {
	readonly AllowUserToChangePassword?: any | boolean;
	readonly AllowUserToManageAccessKeys?: any | boolean;
	readonly AllowUserToManageMFADevices?: boolean | undefined;
	readonly AllowUserToManagePublicKeys?: any | boolean;
	readonly EnableSaveMFATicket?: boolean | undefined;
	readonly LoginNetworkMasks?: any | string;
	readonly LoginSessionDuration?: any | number;
	readonly LogicalId: string;
}
export class User extends RosResource<UserComponentInputs> implements UserComponentOutputs {
	constructor(entity: ADKEntity, options: UserComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::RAM::User", options);
	}
	public readonly UserId: any;
	public readonly LastLoginDate: any;
	public readonly CreateDate: any;
}
export interface UserComponentOutputs {
	readonly UserId: any;
	readonly LastLoginDate: any;
	readonly CreateDate: any;
}
export interface UserComponentInputs {
	readonly UserName: any | string;
	readonly Comments?: string | undefined;
	readonly DeletionForce?: boolean | undefined;
	readonly DisplayName?: string | undefined;
	readonly Email?: string | undefined;
	readonly Groups?: any[] | undefined;
	readonly LoginProfile?: LoginProfile | undefined;
	readonly MobilePhone?: string | undefined;
	readonly Policies?: Policies[] | undefined;
	readonly PolicyAttachments?: PolicyAttachments | undefined;
	readonly LogicalId: string;
}
export class UserToGroupAddition
	extends RosResource<UserToGroupAdditionComponentInputs>
	implements UserToGroupAdditionComponentOutputs
{
	constructor(entity: ADKEntity, options: UserToGroupAdditionComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::RAM::UserToGroupAddition", options);
	}
}
export interface UserToGroupAdditionComponentOutputs {}
export interface UserToGroupAdditionComponentInputs {
	readonly GroupName: string;
	readonly Users: any[];
	readonly LogicalId: string;
}
export interface Policies {
	readonly Description?: string | undefined;
	readonly PolicyName: string;
	readonly PolicyDocument: PolicyDocument;
}
export interface PolicyAttachments {
	readonly Custom?: string[] | undefined;
	readonly System?: string[] | undefined;
}
export interface PolicyDocument {
	readonly Version: string;
	readonly Statement: Statement[];
}
export interface Statement {
	readonly Condition?: { [key: string]: any } | undefined;
	readonly Action?: any[] | undefined;
	readonly Resource?: any[] | undefined;
	readonly Effect?: string | undefined;
}
export interface AssumeRolePolicyDocument {
	readonly Version: string;
	readonly Statement: Statement[];
}
export interface Condition {
	readonly NumericNotEquals?: { [key: string]: any } | undefined;
	readonly StringEquals?: { [key: string]: any } | undefined;
	readonly StringLike?: { [key: string]: any } | undefined;
	readonly NumericLessThanEquals?: { [key: string]: any } | undefined;
	readonly StringNotEquals?: { [key: string]: any } | undefined;
	readonly StringNotEqualsIgnoreCase?: { [key: string]: any } | undefined;
	readonly NumericLessThan?: { [key: string]: any } | undefined;
	readonly NumericGreaterThan?: { [key: string]: any } | undefined;
	readonly DateLessThanEquals?: { [key: string]: any } | undefined;
	readonly DateGreaterThanEquals?: { [key: string]: any } | undefined;
	readonly NumericEquals?: { [key: string]: any } | undefined;
	readonly DateLessThan?: { [key: string]: any } | undefined;
	readonly DateNotEquals?: { [key: string]: any } | undefined;
	readonly StringNotLike?: { [key: string]: any } | undefined;
	readonly NotIpAddress?: { [key: string]: any } | undefined;
	readonly StringEqualsIgnoreCase?: { [key: string]: any } | undefined;
	readonly Bool?: { [key: string]: any } | undefined;
	readonly DateEquals?: { [key: string]: any } | undefined;
	readonly DateGreaterThan?: { [key: string]: any } | undefined;
	readonly NumericGreaterThanEquals?: { [key: string]: any } | undefined;
	readonly IpAddress?: { [key: string]: any } | undefined;
}
export interface PolicyDocumentStatement {
	readonly Condition?: { [key: string]: any } | undefined;
	readonly Action?: any[] | undefined;
	readonly Resource?: any[] | undefined;
	readonly Effect?: string | undefined;
}
export interface Principal {
	readonly Service?: any[] | undefined;
	readonly Federated?: any[] | undefined;
	readonly RAM?: any[] | undefined;
}
export interface LoginProfile {
	readonly PasswordResetRequired?: boolean | undefined;
	readonly MFABindRequired?: boolean | undefined;
	readonly Password?: string | undefined;
}
export default {
	AccessKey: AccessKey,
	AttachPolicyToRole: AttachPolicyToRole,
	AttachPolicyToUser: AttachPolicyToUser,
	Group: Group,
	ManagedPolicy: ManagedPolicy,
	RamAccountAlias: RamAccountAlias,
	Role: Role,
	SAMLProvider: SAMLProvider,
	SecurityPreference: SecurityPreference,
	User: User,
	UserToGroupAddition: UserToGroupAddition,
};
