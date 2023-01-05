import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class emergingIssues extends ArmResource<emergingIssuesComponentInputs> implements emergingIssuesComponentOutputs {
	constructor(entity: ADKEntity, options: emergingIssuesComponentInputs) {
		super(entity, options.name, "Microsoft.ResourceHealth/emergingIssues", "2018-07-01", options);
	}
	public readonly apiVersion: "2018-07-01";
	public readonly id: string;
	public readonly type: "Microsoft.ResourceHealth/emergingIssues";
}
export interface emergingIssuesComponentOutputs {
	readonly apiVersion: "2018-07-01";
	readonly id: string;
	readonly type: "Microsoft.ResourceHealth/emergingIssues";
}
export interface emergingIssuesComponentInputs {
	readonly name: string;
	readonly properties?: EmergingIssue;
}
export class metadata extends ArmResource<metadataComponentInputs> implements metadataComponentOutputs {
	constructor(entity: ADKEntity, options: metadataComponentInputs) {
		super(entity, options.name, "Microsoft.ResourceHealth/metadata", "2018-07-01", options);
	}
	public readonly apiVersion: "2018-07-01";
	public readonly id: string;
	public readonly type: "Microsoft.ResourceHealth/metadata";
}
export interface metadataComponentOutputs {
	readonly apiVersion: "2018-07-01";
	readonly id: string;
	readonly type: "Microsoft.ResourceHealth/metadata";
}
export interface metadataComponentInputs {
	readonly name: string;
	readonly properties?: MetadataEntityProperties;
}
export interface EmergingIssue {
	readonly refreshTimestamp?: string;
	readonly statusActiveEvents?: StatusActiveEvent[];
	readonly statusBanners?: StatusBanner[];
}
export interface EmergingIssueImpact {
	readonly id?: string;
	readonly name?: string;
	readonly regions?: ImpactedRegion[];
}
export interface ImpactedRegion {
	readonly id?: string;
	readonly name?: string;
}
export interface MetadataEntityProperties {
	readonly applicableScenarios?: "Alerts"[];
	readonly dependsOn?: string[];
	readonly displayName?: string;
	readonly supportedValues?: MetadataSupportedValueDetail[];
}
export interface MetadataSupportedValueDetail {
	readonly displayName?: string;
	readonly id?: string;
}
export interface StatusActiveEvent {
	readonly cloud?: string;
	readonly description?: string;
	readonly impacts?: EmergingIssueImpact[];
	readonly lastModifiedTime?: string;
	readonly published?: boolean;
	readonly severity?: "Error" | "Information" | "Warning";
	readonly stage?: "Active" | "Archived" | "Resolve";
	readonly startTime?: string;
	readonly title?: string;
	readonly trackingId?: string;
}
export interface StatusBanner {
	readonly cloud?: string;
	readonly lastModifiedTime?: string;
	readonly message?: string;
	readonly title?: string;
}
export default {
	emergingIssues: emergingIssues,
	metadata: metadata,
};
