import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class Graph extends CfnResource<GraphComponentInputs> implements GraphComponentOutputs {
	constructor(entity: ADKEntity, options: GraphComponentInputs) {
		super(entity, options.LogicalId, "AWS::Detective::Graph", options);
	}
	public readonly Arn: string;
}
export interface GraphComponentOutputs {
	readonly Arn: string;
}
export interface GraphComponentInputs {
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly LogicalId: string;
}
export class MemberInvitation
	extends CfnResource<MemberInvitationComponentInputs>
	implements MemberInvitationComponentOutputs
{
	constructor(entity: ADKEntity, options: MemberInvitationComponentInputs) {
		super(entity, options.LogicalId, "AWS::Detective::MemberInvitation", options);
	}
}
export interface MemberInvitationComponentOutputs {}
export interface MemberInvitationComponentInputs {
	readonly GraphArn: string;
	readonly MemberEmailAddress: string;
	readonly MemberId: string;
	readonly DisableEmailNotification?: (boolean | undefined) | undefined;
	readonly Message?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export default {
	Graph: Graph,
	MemberInvitation: MemberInvitation,
};
