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
	readonly properties?: EmergingIssue | undefined;
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
	readonly properties?: MetadataEntityProperties | undefined;
}
export interface EmergingIssue {
	readonly refreshTimestamp?: string | undefined;
	readonly statusActiveEvents?: StatusActiveEvent[] | undefined;
	readonly statusBanners?: StatusBanner[] | undefined;
}
export interface EmergingIssueImpact {
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly regions?: ImpactedRegion[] | undefined;
}
export interface ImpactedRegion {
	readonly id?: string | undefined;
	readonly name?: string | undefined;
}
export interface MetadataEntityProperties {
	readonly applicableScenarios?: "Alerts"[] | undefined;
	readonly dependsOn?: string[] | undefined;
	readonly displayName?: string | undefined;
	readonly supportedValues?: MetadataSupportedValueDetail[] | undefined;
}
export interface MetadataSupportedValueDetail {
	readonly displayName?: string | undefined;
	readonly id?: string | undefined;
}
export interface StatusActiveEvent {
	readonly cloud?: string | undefined;
	readonly description?: string | undefined;
	readonly impacts?: EmergingIssueImpact[] | undefined;
	readonly lastModifiedTime?: string | undefined;
	readonly published?: boolean | undefined;
	readonly severity?: ("Error" | "Information" | "Warning") | undefined;
	readonly stage?: ("Active" | "Archived" | "Resolve") | undefined;
	readonly startTime?: string | undefined;
	readonly title?: string | undefined;
	readonly trackingId?: string | undefined;
}
export interface StatusBanner {
	readonly cloud?: string | undefined;
	readonly lastModifiedTime?: string | undefined;
	readonly message?: string | undefined;
	readonly title?: string | undefined;
}
export default {
	emergingIssues: emergingIssues,
	metadata: metadata,
};
