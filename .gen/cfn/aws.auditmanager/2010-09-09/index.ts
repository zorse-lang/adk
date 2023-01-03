import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class Assessment extends CfnResource<AssessmentComponentInputs> implements AssessmentComponentOutputs {
	constructor(entity: ADKEntity, options: AssessmentComponentInputs) {
		super(entity, options.LogicalId, "AWS::AuditManager::Assessment", options);
	}
	public readonly Arn: string;
	public readonly AssessmentId: string;
	public readonly CreationTime: number;
	public readonly Delegations: Map<string, Delegation>;
}
export interface AssessmentComponentOutputs {
	readonly Arn: string;
	readonly AssessmentId: string;
	readonly CreationTime: number;
	readonly Delegations: Map<string, Delegation>;
}
export interface AssessmentComponentInputs {
	readonly AssessmentReportsDestination?: (AssessmentReportsDestination | undefined) | undefined;
	readonly AwsAccount?: (AWSAccount | undefined) | undefined;
	readonly Description?: (string | undefined) | undefined;
	readonly FrameworkId?: (string | undefined) | undefined;
	readonly Name?: (string | undefined) | undefined;
	readonly Roles?: (Role[] | undefined) | undefined;
	readonly Scope?: (Scope | undefined) | undefined;
	readonly Status?: (string | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly LogicalId: string;
}
export interface AWSAccount {
	readonly EmailAddress?: (string | undefined) | undefined;
	readonly Id?: (string | undefined) | undefined;
	readonly Name?: (string | undefined) | undefined;
}
export interface AWSService {
	readonly ServiceName?: (string | undefined) | undefined;
}
export interface AssessmentReportsDestination {
	readonly Destination?: (string | undefined) | undefined;
	readonly DestinationType?: (string | undefined) | undefined;
}
export interface Delegation {
	readonly AssessmentId?: (string | undefined) | undefined;
	readonly AssessmentName?: (string | undefined) | undefined;
	readonly Comment?: (string | undefined) | undefined;
	readonly ControlSetId?: (string | undefined) | undefined;
	readonly CreatedBy?: (string | undefined) | undefined;
	readonly CreationTime?: (number | undefined) | undefined;
	readonly Id?: (string | undefined) | undefined;
	readonly LastUpdated?: (number | undefined) | undefined;
	readonly RoleArn?: (string | undefined) | undefined;
	readonly RoleType?: (string | undefined) | undefined;
	readonly Status?: (string | undefined) | undefined;
}
export interface Role {
	readonly RoleArn?: (string | undefined) | undefined;
	readonly RoleType?: (string | undefined) | undefined;
}
export interface Scope {
	readonly AwsAccounts?: (AWSAccount[] | undefined) | undefined;
	readonly AwsServices?: (AWSService[] | undefined) | undefined;
}
export default {
	Assessment: Assessment,
};
