import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class complianceResults
	extends ArmResource<complianceResultsComponentInputs>
	implements complianceResultsComponentOutputs
{
	constructor(entity: ADKEntity, options: complianceResultsComponentInputs) {
		super(entity, options.name, "Microsoft.Security/complianceResults", "2017-08-01", options);
	}
	public readonly apiVersion: "2017-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.Security/complianceResults";
}
export interface complianceResultsComponentOutputs {
	readonly apiVersion: "2017-08-01";
	readonly id: string;
	readonly type: "Microsoft.Security/complianceResults";
}
export interface complianceResultsComponentInputs {
	readonly name: string;
	readonly properties?: ComplianceResultProperties;
}
export interface ComplianceResultProperties {
	readonly resourceStatus?: "Healthy" | "NotApplicable" | "NotHealthy" | "OffByPolicy";
}
export default {
	complianceResults: complianceResults,
};
