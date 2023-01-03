import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class Group extends CfnResource<GroupComponentInputs> implements GroupComponentOutputs {
	constructor(entity: ADKEntity, options: GroupComponentInputs) {
		super(entity, options.LogicalId, "AWS::IdentityStore::Group", options);
	}
	public readonly GroupId: string;
}
export interface GroupComponentOutputs {
	readonly GroupId: string;
}
export interface GroupComponentInputs {
	readonly DisplayName: string;
	readonly IdentityStoreId: string;
	readonly Description?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export class GroupMembership
	extends CfnResource<GroupMembershipComponentInputs>
	implements GroupMembershipComponentOutputs
{
	constructor(entity: ADKEntity, options: GroupMembershipComponentInputs) {
		super(entity, options.LogicalId, "AWS::IdentityStore::GroupMembership", options);
	}
	public readonly MembershipId: string;
}
export interface GroupMembershipComponentOutputs {
	readonly MembershipId: string;
}
export interface GroupMembershipComponentInputs {
	readonly GroupId: string;
	readonly IdentityStoreId: string;
	readonly MemberId: MemberId;
	readonly LogicalId: string;
}
export interface MemberId {
	readonly UserId: string;
}
export default {
	Group: Group,
	GroupMembership: GroupMembership,
};
