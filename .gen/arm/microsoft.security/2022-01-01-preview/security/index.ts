import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class assessments_governanceAssignments
	extends ArmResource<assessments_governanceAssignmentsComponentInputs>
	implements assessments_governanceAssignmentsComponentOutputs
{
	constructor(entity: ADKEntity, options: assessments_governanceAssignmentsComponentInputs) {
		super(entity, options.name, "Microsoft.Security/assessments/governanceAssignments", "2022-01-01-preview", options);
	}
	public readonly apiVersion: "2022-01-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Security/assessments/governanceAssignments";
}
export interface assessments_governanceAssignmentsComponentOutputs {
	readonly apiVersion: "2022-01-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Security/assessments/governanceAssignments";
}
export interface assessments_governanceAssignmentsComponentInputs {
	readonly name: string;
	readonly properties?: GovernanceAssignmentProperties | undefined;
}
export class governanceRules
	extends ArmResource<governanceRulesComponentInputs>
	implements governanceRulesComponentOutputs
{
	constructor(entity: ADKEntity, options: governanceRulesComponentInputs) {
		super(entity, options.name, "Microsoft.Security/governanceRules", "2022-01-01-preview", options);
	}
	public readonly apiVersion: "2022-01-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Security/governanceRules";
}
export interface governanceRulesComponentOutputs {
	readonly apiVersion: "2022-01-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Security/governanceRules";
}
export interface governanceRulesComponentInputs {
	readonly name: string;
	readonly properties?: GovernanceRuleProperties | undefined;
}
export interface GovernanceAssignmentAdditionalData {
	readonly ticketLink?: string | undefined;
	readonly ticketNumber?: number | undefined;
	readonly ticketStatus?: string | undefined;
}
export interface GovernanceAssignmentProperties {
	readonly additionalData?: GovernanceAssignmentAdditionalData | undefined;
	readonly governanceEmailNotification?: GovernanceEmailNotification | undefined;
	readonly isGracePeriod?: boolean | undefined;
	readonly owner?: string | undefined;
	readonly remediationDueDate: string;
	readonly remediationEta?: RemediationEta | undefined;
}
export interface GovernanceEmailNotification {
	readonly disableManagerEmailNotification?: boolean | undefined;
	readonly disableOwnerEmailNotification?: boolean | undefined;
}
export interface GovernanceRuleEmailNotification {
	readonly disableManagerEmailNotification?: boolean | undefined;
	readonly disableOwnerEmailNotification?: boolean | undefined;
}
export interface GovernanceRuleOwnerSource {
	readonly type?: ("ByTag" | "Manually") | undefined;
	readonly value?: string | undefined;
}
export interface GovernanceRuleProperties {
	readonly conditionSets: any[];
	readonly description?: string | undefined;
	readonly displayName: string;
	readonly governanceEmailNotification?: GovernanceRuleEmailNotification | undefined;
	readonly isDisabled?: boolean | undefined;
	readonly isGracePeriod?: boolean | undefined;
	readonly ownerSource: GovernanceRuleOwnerSource;
	readonly remediationTimeframe?: string | undefined;
	readonly rulePriority: number;
	readonly ruleType: "Integrated" | "ServiceNow";
	readonly sourceResourceType: "Assessments";
}
export interface RemediationEta {
	readonly eta: string;
	readonly justification: string;
}
export default {
	"assessments/governanceAssignments": assessments_governanceAssignments,
	governanceRules: governanceRules,
};
