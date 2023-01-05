import { RosResource, Entity as ADKEntity } from "@zorse/adk";

export class Account extends RosResource<AccountComponentInputs> implements AccountComponentOutputs {
	constructor(entity: ADKEntity, options: AccountComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::ResourceManager::Account", options);
	}
	public readonly JoinMethod: any;
	public readonly ResourceDirectoryId: any;
	public readonly Type: any;
	public readonly AccountId: any;
}
export interface AccountComponentOutputs {
	readonly JoinMethod: any;
	readonly ResourceDirectoryId: any;
	readonly Type: any;
	readonly AccountId: any;
}
export interface AccountComponentInputs {
	readonly DisplayName: any | string;
	readonly FolderId?: any | string;
	readonly PayerAccountId?: string | undefined;
	readonly LogicalId: string;
}
export class ControlPolicy extends RosResource<ControlPolicyComponentInputs> implements ControlPolicyComponentOutputs {
	constructor(entity: ADKEntity, options: ControlPolicyComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::ResourceManager::ControlPolicy", options);
	}
	public readonly PolicyType: any;
	public readonly AttachmentCount: any;
	public readonly PolicyId: any;
}
export interface ControlPolicyComponentOutputs {
	readonly PolicyType: any;
	readonly AttachmentCount: any;
	readonly PolicyId: any;
}
export interface ControlPolicyComponentInputs {
	readonly ControlPolicyName: any | string;
	readonly EffectScope: any | string;
	readonly PolicyDocument: any | string;
	readonly Description?: any | string;
	readonly LogicalId: string;
}
export class ControlPolicyAttachment
	extends RosResource<ControlPolicyAttachmentComponentInputs>
	implements ControlPolicyAttachmentComponentOutputs
{
	constructor(entity: ADKEntity, options: ControlPolicyAttachmentComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::ResourceManager::ControlPolicyAttachment", options);
	}
	public readonly PolicyType: any;
	public readonly Description: any;
	public readonly AttachDate: any;
	public readonly PolicyName: any;
}
export interface ControlPolicyAttachmentComponentOutputs {
	readonly PolicyType: any;
	readonly Description: any;
	readonly AttachDate: any;
	readonly PolicyName: any;
}
export interface ControlPolicyAttachmentComponentInputs {
	readonly PolicyId: any | string;
	readonly TargetId: any | string;
	readonly LogicalId: string;
}
export class Folder extends RosResource<FolderComponentInputs> implements FolderComponentOutputs {
	constructor(entity: ADKEntity, options: FolderComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::ResourceManager::Folder", options);
	}
	public readonly FolderId: any;
}
export interface FolderComponentOutputs {
	readonly FolderId: any;
}
export interface FolderComponentInputs {
	readonly FolderName: any | string;
	readonly ParentFolderId?: any | string;
	readonly LogicalId: string;
}
export class Handshake extends RosResource<HandshakeComponentInputs> implements HandshakeComponentOutputs {
	constructor(entity: ADKEntity, options: HandshakeComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::ResourceManager::Handshake", options);
	}
	public readonly ResourceDirectoryId: any;
	public readonly HandshakeId: any;
	public readonly MasterAccountName: any;
	public readonly MasterAccountId: any;
}
export interface HandshakeComponentOutputs {
	readonly ResourceDirectoryId: any;
	readonly HandshakeId: any;
	readonly MasterAccountName: any;
	readonly MasterAccountId: any;
}
export interface HandshakeComponentInputs {
	readonly TargetEntity: any | string;
	readonly TargetType: any | string;
	readonly Note?: any | string;
	readonly LogicalId: string;
}
export class PolicyAttachment
	extends RosResource<PolicyAttachmentComponentInputs>
	implements PolicyAttachmentComponentOutputs
{
	constructor(entity: ADKEntity, options: PolicyAttachmentComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::ResourceManager::PolicyAttachment", options);
	}
	public readonly Description: any;
	public readonly AttachDate: any;
}
export interface PolicyAttachmentComponentOutputs {
	readonly Description: any;
	readonly AttachDate: any;
}
export interface PolicyAttachmentComponentInputs {
	readonly PolicyName: any | string;
	readonly PolicyType: any | string;
	readonly PrincipalName: any | string;
	readonly PrincipalType: any | string;
	readonly ResourceGroupId: any | string;
	readonly LogicalId: string;
}
export class ResourceDirectory
	extends RosResource<ResourceDirectoryComponentInputs>
	implements ResourceDirectoryComponentOutputs
{
	constructor(entity: ADKEntity, options: ResourceDirectoryComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::ResourceManager::ResourceDirectory", options);
	}
	public readonly ResourceDirectoryId: any;
	public readonly RootFolderId: any;
	public readonly MasterAccountName: any;
	public readonly MasterAccountId: any;
}
export interface ResourceDirectoryComponentOutputs {
	readonly ResourceDirectoryId: any;
	readonly RootFolderId: any;
	readonly MasterAccountName: any;
	readonly MasterAccountId: any;
}
export interface ResourceDirectoryComponentInputs {
	readonly LogicalId: string;
}
export class ResourceGroup extends RosResource<ResourceGroupComponentInputs> implements ResourceGroupComponentOutputs {
	constructor(entity: ADKEntity, options: ResourceGroupComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::ResourceManager::ResourceGroup", options);
	}
	public readonly RegionStatuses: any;
	public readonly AccountId: any;
	public readonly Id: any;
}
export interface ResourceGroupComponentOutputs {
	readonly RegionStatuses: any;
	readonly AccountId: any;
	readonly Id: any;
}
export interface ResourceGroupComponentInputs {
	readonly DisplayName: any | string;
	readonly Name: any | string;
	readonly LogicalId: string;
}
export class ResourceShare extends RosResource<ResourceShareComponentInputs> implements ResourceShareComponentOutputs {
	constructor(entity: ADKEntity, options: ResourceShareComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::ResourceManager::ResourceShare", options);
	}
	public readonly ResourceShareId: any;
}
export interface ResourceShareComponentOutputs {
	readonly ResourceShareId: any;
}
export interface ResourceShareComponentInputs {
	readonly ResourceShareName: string;
	readonly Resources?: Resources[] | undefined;
	readonly Targets?: string[] | undefined;
	readonly LogicalId: string;
}
export interface Resources {
	readonly ResourceId: string;
	readonly ResourceType: string;
}
export default {
	Account: Account,
	ControlPolicy: ControlPolicy,
	ControlPolicyAttachment: ControlPolicyAttachment,
	Folder: Folder,
	Handshake: Handshake,
	PolicyAttachment: PolicyAttachment,
	ResourceDirectory: ResourceDirectory,
	ResourceGroup: ResourceGroup,
	ResourceShare: ResourceShare,
};
