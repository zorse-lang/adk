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
	readonly Comments?: (string | undefined) | undefined;
	readonly DeletionForce?: (boolean | undefined) | undefined;
	readonly Policies?: (Policies[] | undefined) | undefined;
	readonly PolicyAttachments?: (PolicyAttachments | undefined) | undefined;
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
	readonly Description?: (string | undefined) | undefined;
	readonly Groups?: (any[] | undefined) | undefined;
	readonly PolicyDocument?: (PolicyDocument | undefined) | undefined;
	readonly PolicyDocumentUnchecked?: ({ [key: string]: any } | undefined) | undefined;
	readonly Roles?: (any[] | undefined) | undefined;
	readonly Users?: (any[] | undefined) | undefined;
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
	readonly DeletionForce?: (boolean | undefined) | undefined;
	readonly Description?: (string | undefined) | undefined;
	readonly MaxSessionDuration?: (number | undefined) | undefined;
	readonly Policies?: (Policies[] | undefined) | undefined;
	readonly PolicyAttachments?: (PolicyAttachments | undefined) | undefined;
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
	readonly Description?: (string | undefined) | undefined;
	readonly SAMLMetadataDocument?: (string | undefined) | undefined;
	readonly SAMLMetadataDocumentURL?: (string | undefined) | undefined;
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
	readonly AllowUserToChangePassword?: (any | boolean) | undefined;
	readonly AllowUserToManageAccessKeys?: (any | boolean) | undefined;
	readonly AllowUserToManageMFADevices?: (boolean | undefined) | undefined;
	readonly AllowUserToManagePublicKeys?: (any | boolean) | undefined;
	readonly EnableSaveMFATicket?: (boolean | undefined) | undefined;
	readonly LoginNetworkMasks?: (any | string) | undefined;
	readonly LoginSessionDuration?: (any | number) | undefined;
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
	readonly Comments?: (string | undefined) | undefined;
	readonly DeletionForce?: (boolean | undefined) | undefined;
	readonly DisplayName?: (string | undefined) | undefined;
	readonly Email?: (string | undefined) | undefined;
	readonly Groups?: (any[] | undefined) | undefined;
	readonly LoginProfile?: (LoginProfile | undefined) | undefined;
	readonly MobilePhone?: (string | undefined) | undefined;
	readonly Policies?: (Policies[] | undefined) | undefined;
	readonly PolicyAttachments?: (PolicyAttachments | undefined) | undefined;
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
	readonly Description?: (string | undefined) | undefined;
	readonly PolicyName: string;
	readonly PolicyDocument: PolicyDocument;
}
export interface PolicyAttachments {
	readonly Custom?: (string[] | undefined) | undefined;
	readonly System?: (string[] | undefined) | undefined;
}
export interface PolicyDocument {
	readonly Version: string;
	readonly Statement: Statement[];
}
export interface Statement {
	readonly Condition?: ({ [key: string]: any } | undefined) | undefined;
	readonly Action?: (any[] | undefined) | undefined;
	readonly Resource?: (any[] | undefined) | undefined;
	readonly Effect?: (string | undefined) | undefined;
}
export interface AssumeRolePolicyDocument {
	readonly Version: string;
	readonly Statement: Statement[];
}
export interface Condition {
	readonly NumericNotEquals?: ({ [key: string]: any } | undefined) | undefined;
	readonly StringEquals?: ({ [key: string]: any } | undefined) | undefined;
	readonly StringLike?: ({ [key: string]: any } | undefined) | undefined;
	readonly NumericLessThanEquals?: ({ [key: string]: any } | undefined) | undefined;
	readonly StringNotEquals?: ({ [key: string]: any } | undefined) | undefined;
	readonly StringNotEqualsIgnoreCase?: ({ [key: string]: any } | undefined) | undefined;
	readonly NumericLessThan?: ({ [key: string]: any } | undefined) | undefined;
	readonly NumericGreaterThan?: ({ [key: string]: any } | undefined) | undefined;
	readonly DateLessThanEquals?: ({ [key: string]: any } | undefined) | undefined;
	readonly DateGreaterThanEquals?: ({ [key: string]: any } | undefined) | undefined;
	readonly NumericEquals?: ({ [key: string]: any } | undefined) | undefined;
	readonly DateLessThan?: ({ [key: string]: any } | undefined) | undefined;
	readonly DateNotEquals?: ({ [key: string]: any } | undefined) | undefined;
	readonly StringNotLike?: ({ [key: string]: any } | undefined) | undefined;
	readonly NotIpAddress?: ({ [key: string]: any } | undefined) | undefined;
	readonly StringEqualsIgnoreCase?: ({ [key: string]: any } | undefined) | undefined;
	readonly Bool?: ({ [key: string]: any } | undefined) | undefined;
	readonly DateEquals?: ({ [key: string]: any } | undefined) | undefined;
	readonly DateGreaterThan?: ({ [key: string]: any } | undefined) | undefined;
	readonly NumericGreaterThanEquals?: ({ [key: string]: any } | undefined) | undefined;
	readonly IpAddress?: ({ [key: string]: any } | undefined) | undefined;
}
export interface PolicyDocumentStatement {
	readonly Condition?: ({ [key: string]: any } | undefined) | undefined;
	readonly Action?: (any[] | undefined) | undefined;
	readonly Resource?: (any[] | undefined) | undefined;
	readonly Effect?: (string | undefined) | undefined;
}
export interface Principal {
	readonly Service?: (any[] | undefined) | undefined;
	readonly Federated?: (any[] | undefined) | undefined;
	readonly RAM?: (any[] | undefined) | undefined;
}
export interface LoginProfile {
	readonly PasswordResetRequired?: (boolean | undefined) | undefined;
	readonly MFABindRequired?: (boolean | undefined) | undefined;
	readonly Password?: (string | undefined) | undefined;
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
