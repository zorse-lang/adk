import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class attestations extends ArmResource<attestationsComponentInputs> implements attestationsComponentOutputs {
	constructor(entity: ADKEntity, options: attestationsComponentInputs) {
		super(entity, options.name, "Microsoft.PolicyInsights/attestations", "2022-09-01", options);
	}
	public readonly apiVersion: "2022-09-01";
	public readonly id: string;
	public readonly type: "Microsoft.PolicyInsights/attestations";
}
export interface attestationsComponentOutputs {
	readonly apiVersion: "2022-09-01";
	readonly id: string;
	readonly type: "Microsoft.PolicyInsights/attestations";
}
export interface attestationsComponentInputs {
	readonly name: string;
	readonly properties: AttestationProperties;
	readonly systemData?: SystemData;
}
export interface AttestationEvidence {
	readonly description?: string;
	readonly sourceUri?: string;
}
export interface AttestationProperties {
	readonly assessmentDate?: string;
	readonly comments?: string;
	readonly complianceState?: "Compliant" | "NonCompliant" | "Unknown";
	readonly evidence?: AttestationEvidence[];
	readonly expiresOn?: string;
	readonly lastComplianceStateChangeAt?: string;
	readonly metadata?: any;
	readonly owner?: string;
	readonly policyAssignmentId: string;
	readonly policyDefinitionReferenceId?: string;
	readonly provisioningState?: string;
}
export interface SystemData {
	readonly createdAt?: string;
	readonly createdBy?: string;
	readonly createdByType?: "Application" | "Key" | "ManagedIdentity" | "User";
	readonly lastModifiedAt?: string;
	readonly lastModifiedBy?: string;
	readonly lastModifiedByType?: "Application" | "Key" | "ManagedIdentity" | "User";
}
export default {
	attestations: attestations,
};
