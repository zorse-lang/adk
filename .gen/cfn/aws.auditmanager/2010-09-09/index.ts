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
	readonly AssessmentReportsDestination?: AssessmentReportsDestination | undefined;
	readonly AwsAccount?: AWSAccount | undefined;
	readonly Description?: string | undefined;
	readonly FrameworkId?: string | undefined;
	readonly Name?: string | undefined;
	readonly Roles?: Role[] | undefined;
	readonly Scope?: Scope | undefined;
	readonly Status?: string | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export interface AWSAccount {
	readonly EmailAddress?: string | undefined;
	readonly Id?: string | undefined;
	readonly Name?: string | undefined;
}
export interface AWSService {
	readonly ServiceName?: string | undefined;
}
export interface AssessmentReportsDestination {
	readonly Destination?: string | undefined;
	readonly DestinationType?: string | undefined;
}
export interface Delegation {
	readonly AssessmentId?: string | undefined;
	readonly AssessmentName?: string | undefined;
	readonly Comment?: string | undefined;
	readonly ControlSetId?: string | undefined;
	readonly CreatedBy?: string | undefined;
	readonly CreationTime?: number | undefined;
	readonly Id?: string | undefined;
	readonly LastUpdated?: number | undefined;
	readonly RoleArn?: string | undefined;
	readonly RoleType?: string | undefined;
	readonly Status?: string | undefined;
}
export interface Role {
	readonly RoleArn?: string | undefined;
	readonly RoleType?: string | undefined;
}
export interface Scope {
	readonly AwsAccounts?: AWSAccount[] | undefined;
	readonly AwsServices?: AWSService[] | undefined;
}
export default {
	Assessment: Assessment,
};
