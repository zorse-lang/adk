import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class attestations extends ArmResource<attestationsComponentInputs> implements attestationsComponentOutputs {
	constructor(entity: ADKEntity, options: attestationsComponentInputs) {
		super(entity, options.name, "Microsoft.PolicyInsights/attestations", "2021-01-01", options);
	}
	public readonly apiVersion: "2021-01-01";
	public readonly id: string;
	public readonly type: "Microsoft.PolicyInsights/attestations";
}
export interface attestationsComponentOutputs {
	readonly apiVersion: "2021-01-01";
	readonly id: string;
	readonly type: "Microsoft.PolicyInsights/attestations";
}
export interface attestationsComponentInputs {
	readonly name: string;
	readonly properties: AttestationProperties;
	readonly systemData?: SystemData | undefined;
}
export interface AttestationEvidence {
	readonly description?: string | undefined;
	readonly sourceUri?: string | undefined;
}
export interface AttestationProperties {
	readonly comments?: string | undefined;
	readonly complianceState?: ("Compliant" | "NonCompliant" | "Unknown") | undefined;
	readonly evidence?: AttestationEvidence[] | undefined;
	readonly expiresOn?: string | undefined;
	readonly lastComplianceStateChangeAt?: string | undefined;
	readonly owner?: string | undefined;
	readonly policyAssignmentId: string;
	readonly policyDefinitionReferenceId?: string | undefined;
	readonly provisioningState?: string | undefined;
}
export interface SystemData {
	readonly createdAt?: string | undefined;
	readonly createdBy?: string | undefined;
	readonly createdByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
	readonly lastModifiedAt?: string | undefined;
	readonly lastModifiedBy?: string | undefined;
	readonly lastModifiedByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
}
export default {
	attestations: attestations,
};
