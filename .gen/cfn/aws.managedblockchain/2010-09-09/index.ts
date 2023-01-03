import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class Member extends CfnResource<MemberComponentInputs> implements MemberComponentOutputs {
	constructor(entity: ADKEntity, options: MemberComponentInputs) {
		super(entity, options.LogicalId, "AWS::ManagedBlockchain::Member", options);
	}
	public readonly MemberId: string;
}
export interface MemberComponentOutputs {
	readonly MemberId: string;
}
export interface MemberComponentInputs {
	readonly MemberConfiguration: MemberConfiguration;
	readonly InvitationId?: (string | undefined) | undefined;
	readonly NetworkConfiguration?: (NetworkConfiguration | undefined) | undefined;
	readonly NetworkId?: string | undefined;
	readonly LogicalId: string;
}
export class Node extends CfnResource<NodeComponentInputs> implements NodeComponentOutputs {
	constructor(entity: ADKEntity, options: NodeComponentInputs) {
		super(entity, options.LogicalId, "AWS::ManagedBlockchain::Node", options);
	}
	public readonly Arn: string;
	public readonly NetworkId: string;
	public readonly NodeId: string;
}
export interface NodeComponentOutputs {
	readonly Arn: string;
	readonly NetworkId: string;
	readonly NodeId: string;
}
export interface NodeComponentInputs {
	readonly NetworkId: string;
	readonly NodeConfiguration: NodeConfiguration;
	readonly MemberId?: string | undefined;
	readonly LogicalId: string;
}
export interface ApprovalThresholdPolicy {
	readonly ProposalDurationInHours?: (number | undefined) | undefined;
	readonly ThresholdComparator?: (string | undefined) | undefined;
	readonly ThresholdPercentage?: (number | undefined) | undefined;
}
export interface MemberConfiguration {
	readonly Description?: (string | undefined) | undefined;
	readonly MemberFrameworkConfiguration?: (MemberFrameworkConfiguration | undefined) | undefined;
	readonly Name: string;
}
export interface MemberFabricConfiguration {
	readonly AdminPassword: string;
	readonly AdminUsername: string;
}
export interface MemberFrameworkConfiguration {
	readonly MemberFabricConfiguration?: (MemberFabricConfiguration | undefined) | undefined;
}
export interface NetworkConfiguration {
	readonly Description?: (string | undefined) | undefined;
	readonly Framework: string;
	readonly FrameworkVersion: string;
	readonly Name: string;
	readonly NetworkFrameworkConfiguration?: (NetworkFrameworkConfiguration | undefined) | undefined;
	readonly VotingPolicy: VotingPolicy;
}
export interface NetworkFabricConfiguration {
	readonly Edition: string;
}
export interface NetworkFrameworkConfiguration {
	readonly NetworkFabricConfiguration?: (NetworkFabricConfiguration | undefined) | undefined;
}
export interface VotingPolicy {
	readonly ApprovalThresholdPolicy?: (ApprovalThresholdPolicy | undefined) | undefined;
}
export interface NodeConfiguration {
	readonly AvailabilityZone: string;
	readonly InstanceType: string;
}
export default {
	Member: Member,
	Node: Node,
};
