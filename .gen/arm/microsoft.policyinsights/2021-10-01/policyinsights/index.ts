import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class remediations extends ArmResource<remediationsComponentInputs> implements remediationsComponentOutputs {
	constructor(entity: ADKEntity, options: remediationsComponentInputs) {
		super(entity, options.name, "Microsoft.PolicyInsights/remediations", "2021-10-01", options);
	}
	public readonly apiVersion: "2021-10-01";
	public readonly id: string;
	public readonly type: "Microsoft.PolicyInsights/remediations";
}
export interface remediationsComponentOutputs {
	readonly apiVersion: "2021-10-01";
	readonly id: string;
	readonly type: "Microsoft.PolicyInsights/remediations";
}
export interface remediationsComponentInputs {
	readonly name: string;
	readonly properties?: RemediationProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export function listDeployments(resource: remediations): RemediationDeploymentsListResult {
	if (resource.apiVersion !== "2021-10-01") {
		throw new Error(`listDeployments is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.PolicyInsights/remediations") {
		throw new Error(`listDeployments is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export interface ErrorDefinition {
	readonly additionalInfo?: TypedErrorInfo[] | undefined;
	readonly code?: string | undefined;
	readonly details?: ErrorDefinition[] | undefined;
	readonly message?: string | undefined;
	readonly target?: string | undefined;
}
export interface RemediationDeployment {
	readonly createdOn?: string | undefined;
	readonly deploymentId?: string | undefined;
	readonly error?: ErrorDefinition | undefined;
	readonly lastUpdatedOn?: string | undefined;
	readonly remediatedResourceId?: string | undefined;
	readonly resourceLocation?: string | undefined;
	readonly status?: string | undefined;
}
export interface RemediationDeploymentsListResult {
	readonly nextLink?: string | undefined;
	readonly value?: RemediationDeployment[] | undefined;
}
export interface RemediationDeploymentSummary {
	readonly failedDeployments?: number | undefined;
	readonly successfulDeployments?: number | undefined;
	readonly totalDeployments?: number | undefined;
}
export interface RemediationFilters {
	readonly locations?: string[] | undefined;
}
export interface RemediationProperties {
	readonly correlationId?: string | undefined;
	readonly createdOn?: string | undefined;
	readonly deploymentStatus?: RemediationDeploymentSummary | undefined;
	readonly failureThreshold?: RemediationPropertiesFailureThreshold | undefined;
	readonly filters?: RemediationFilters | undefined;
	readonly lastUpdatedOn?: string | undefined;
	readonly parallelDeployments?: number | undefined;
	readonly policyAssignmentId?: string | undefined;
	readonly policyDefinitionReferenceId?: string | undefined;
	readonly provisioningState?: string | undefined;
	readonly resourceCount?: number | undefined;
	readonly resourceDiscoveryMode?: ("ExistingNonCompliant" | "ReEvaluateCompliance") | undefined;
	readonly statusMessage?: string | undefined;
}
export interface RemediationPropertiesFailureThreshold {
	readonly percentage?: number | undefined;
}
export interface SystemData {
	readonly createdAt?: string | undefined;
	readonly createdBy?: string | undefined;
	readonly createdByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
	readonly lastModifiedAt?: string | undefined;
	readonly lastModifiedBy?: string | undefined;
	readonly lastModifiedByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
}
export interface TypedErrorInfo {
	readonly info?: any | undefined;
	readonly type?: string | undefined;
}
export default {
	remediations: remediations,
};
