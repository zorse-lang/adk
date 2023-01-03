import { RosResource, Entity as ADKEntity } from "@zorse/adk";

export class InstanceEndpointAclPolicy
	extends RosResource<InstanceEndpointAclPolicyComponentInputs>
	implements InstanceEndpointAclPolicyComponentOutputs
{
	constructor(entity: ADKEntity, options: InstanceEndpointAclPolicyComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::CR::InstanceEndpointAclPolicy", options);
	}
}
export interface InstanceEndpointAclPolicyComponentOutputs {}
export interface InstanceEndpointAclPolicyComponentInputs {
	readonly Entry: any | string;
	readonly InstanceId: any | string;
	readonly Comment?: (string | undefined) | undefined;
	readonly EndpointType?: (string | undefined) | undefined;
	readonly ModuleName?: (string | undefined) | undefined;
	readonly RegionId?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export class Namespace extends RosResource<NamespaceComponentInputs> implements NamespaceComponentOutputs {
	constructor(entity: ADKEntity, options: NamespaceComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::CR::Namespace", options);
	}
	public readonly NamespaceId: any;
}
export interface NamespaceComponentOutputs {
	readonly NamespaceId: any;
}
export interface NamespaceComponentInputs {
	readonly Namespace: any | string;
	readonly AutoCreate?: (boolean | undefined) | undefined;
	readonly DefaultVisibility?: (string | undefined) | undefined;
	readonly InstanceId?: (any | string) | undefined;
	readonly LogicalId: string;
}
export class Repository extends RosResource<RepositoryComponentInputs> implements RepositoryComponentOutputs {
	constructor(entity: ADKEntity, options: RepositoryComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::CR::Repository", options);
	}
	public readonly RepoId: any;
}
export interface RepositoryComponentOutputs {
	readonly RepoId: any;
}
export interface RepositoryComponentInputs {
	readonly RepoName: any | string;
	readonly RepoNamespace: any | string;
	readonly RepoType: any | string;
	readonly Summary: string;
	readonly Detail?: (string | undefined) | undefined;
	readonly InstanceId?: (any | string) | undefined;
	readonly RepoSource?: (RepoSource | undefined) | undefined;
	readonly TagImmutability?: (boolean | undefined) | undefined;
	readonly LogicalId: string;
}
export class UserInfo extends RosResource<UserInfoComponentInputs> implements UserInfoComponentOutputs {
	constructor(entity: ADKEntity, options: UserInfoComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::CR::UserInfo", options);
	}
	public readonly LoginName: any;
	public readonly UserId: any;
}
export interface UserInfoComponentOutputs {
	readonly LoginName: any;
	readonly UserId: any;
}
export interface UserInfoComponentInputs {
	readonly User: User;
	readonly LogicalId: string;
}
export interface RepoSource {
	readonly IsAutoBuild: boolean;
	readonly SourceRepoName: string;
	readonly SourceRepoNamespace: string;
	readonly IsOversea: boolean;
	readonly SourceRepoType: string;
	readonly IsDisableCache: boolean;
}
export interface User {
	readonly Password: string;
}
export default {
	InstanceEndpointAclPolicy: InstanceEndpointAclPolicy,
	Namespace: Namespace,
	Repository: Repository,
	UserInfo: UserInfo,
};
