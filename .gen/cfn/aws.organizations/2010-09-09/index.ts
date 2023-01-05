import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class Account extends CfnResource<AccountComponentInputs> implements AccountComponentOutputs {
	constructor(entity: ADKEntity, options: AccountComponentInputs) {
		super(entity, options.LogicalId, "AWS::Organizations::Account", options);
	}
	public readonly AccountId: string;
	public readonly Arn: string;
	public readonly JoinedMethod: string;
	public readonly JoinedTimestamp: string;
	public readonly Status: string;
}
export interface AccountComponentOutputs {
	readonly AccountId: string;
	readonly Arn: string;
	readonly JoinedMethod: string;
	readonly JoinedTimestamp: string;
	readonly Status: string;
}
export interface AccountComponentInputs {
	readonly AccountName: string;
	readonly Email: string;
	readonly ParentIds?: string[] | undefined;
	readonly RoleName?: string | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export class OrganizationalUnit
	extends CfnResource<OrganizationalUnitComponentInputs>
	implements OrganizationalUnitComponentOutputs
{
	constructor(entity: ADKEntity, options: OrganizationalUnitComponentInputs) {
		super(entity, options.LogicalId, "AWS::Organizations::OrganizationalUnit", options);
	}
	public readonly Arn: string;
	public readonly Id: string;
}
export interface OrganizationalUnitComponentOutputs {
	readonly Arn: string;
	readonly Id: string;
}
export interface OrganizationalUnitComponentInputs {
	readonly Name: string;
	readonly ParentId: string;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export class Policy extends CfnResource<PolicyComponentInputs> implements PolicyComponentOutputs {
	constructor(entity: ADKEntity, options: PolicyComponentInputs) {
		super(entity, options.LogicalId, "AWS::Organizations::Policy", options);
	}
	public readonly Arn: string;
	public readonly AwsManaged: boolean;
	public readonly Id: string;
}
export interface PolicyComponentOutputs {
	readonly Arn: string;
	readonly AwsManaged: boolean;
	readonly Id: string;
}
export interface PolicyComponentInputs {
	readonly Content: string;
	readonly Name: string;
	readonly Type: string;
	readonly Description?: string | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly TargetIds?: string[] | undefined;
	readonly LogicalId: string;
}
export default {
	Account: Account,
	OrganizationalUnit: OrganizationalUnit,
	Policy: Policy,
};
