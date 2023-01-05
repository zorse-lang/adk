import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class remediations extends ArmResource<remediationsComponentInputs> implements remediationsComponentOutputs {
	constructor(entity: ADKEntity, options: remediationsComponentInputs) {
		super(entity, options.name, "Microsoft.PolicyInsights/remediations", "2019-07-01", options);
	}
	public readonly apiVersion: "2019-07-01";
	public readonly id: string;
	public readonly type: "Microsoft.PolicyInsights/remediations";
}
export interface remediationsComponentOutputs {
	readonly apiVersion: "2019-07-01";
	readonly id: string;
	readonly type: "Microsoft.PolicyInsights/remediations";
}
export interface remediationsComponentInputs {
	readonly name: string;
	readonly properties?: RemediationProperties;
}
export function listDeployments(resource: remediations): RemediationDeploymentsListResult {
	if (resource.apiVersion !== "2019-07-01") {
		throw new Error(`listDeployments is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.PolicyInsights/remediations") {
		throw new Error(`listDeployments is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export interface ErrorDefinition {
	readonly additionalInfo?: TypedErrorInfo[];
	readonly code?: string;
	readonly details?: ErrorDefinition[];
	readonly message?: string;
	readonly target?: string;
}
export interface RemediationDeployment {
	readonly createdOn?: string;
	readonly deploymentId?: string;
	readonly error?: ErrorDefinition;
	readonly lastUpdatedOn?: string;
	readonly remediatedResourceId?: string;
	readonly resourceLocation?: string;
	readonly status?: string;
}
export interface RemediationDeploymentsListResult {
	readonly nextLink?: string;
	readonly value?: RemediationDeployment[];
}
export interface RemediationDeploymentSummary {
	readonly failedDeployments?: number;
	readonly successfulDeployments?: number;
	readonly totalDeployments?: number;
}
export interface RemediationFilters {
	readonly locations?: string[];
}
export interface RemediationProperties {
	readonly createdOn?: string;
	readonly deploymentStatus?: RemediationDeploymentSummary;
	readonly filters?: RemediationFilters;
	readonly lastUpdatedOn?: string;
	readonly policyAssignmentId?: string;
	readonly policyDefinitionReferenceId?: string;
	readonly provisioningState?: string;
	readonly resourceDiscoveryMode?: "ExistingNonCompliant" | "ReEvaluateCompliance";
}
export interface TypedErrorInfo {
	readonly info?: any;
	readonly type?: string;
}
export default {
	remediations: remediations,
};
