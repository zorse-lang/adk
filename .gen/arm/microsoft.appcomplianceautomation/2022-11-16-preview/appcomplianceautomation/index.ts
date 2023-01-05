import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class reports extends ArmResource<reportsComponentInputs> implements reportsComponentOutputs {
	constructor(entity: ADKEntity, options: reportsComponentInputs) {
		super(entity, options.name, "Microsoft.AppComplianceAutomation/reports", "2022-11-16-preview", options);
	}
	public readonly apiVersion: "2022-11-16-preview";
	public readonly id: string;
	public readonly type: "Microsoft.AppComplianceAutomation/reports";
}
export interface reportsComponentOutputs {
	readonly apiVersion: "2022-11-16-preview";
	readonly id: string;
	readonly type: "Microsoft.AppComplianceAutomation/reports";
}
export interface reportsComponentInputs {
	readonly name: string;
	readonly properties: ReportProperties;
	readonly systemData?: SystemData;
}
export class reports_snapshots
	extends ArmResource<reports_snapshotsComponentInputs>
	implements reports_snapshotsComponentOutputs
{
	constructor(entity: ADKEntity, options: reports_snapshotsComponentInputs) {
		super(entity, options.name, "Microsoft.AppComplianceAutomation/reports/snapshots", "2022-11-16-preview", options);
	}
	public readonly apiVersion: "2022-11-16-preview";
	public readonly id: string;
	public readonly type: "Microsoft.AppComplianceAutomation/reports/snapshots";
}
export interface reports_snapshotsComponentOutputs {
	readonly apiVersion: "2022-11-16-preview";
	readonly id: string;
	readonly type: "Microsoft.AppComplianceAutomation/reports/snapshots";
}
export interface reports_snapshotsComponentInputs {
	readonly name: string;
	readonly properties?: SnapshotProperties;
	readonly systemData?: SystemData;
}
export interface Assessment {
	readonly description?: string;
	readonly isPass?: "False" | "True";
	readonly name?: string;
	readonly policyId?: string;
	readonly remediation?: string;
	readonly resourceList?: AssessmentResource[];
	readonly severity?: "High" | "Low" | "Medium";
}
export interface AssessmentResource {
	readonly reason?: string;
	readonly resourceId?: string;
	readonly resourceStatus?: "Healthy" | "NotApplicable" | "Unhealthy";
	readonly statusChangeDate?: string;
}
export interface Category {
	readonly categoryName?: string;
	readonly categoryStatus?: "Healthy" | "Unhealthy";
	readonly categoryType?: "FullyAutomated" | "Manual" | "PartiallyAutomated";
	readonly controlFamilies?: ControlFamily[];
}
export interface ComplianceResult {
	readonly categories?: Category[];
	readonly complianceName?: string;
}
export interface Control {
	readonly assessments?: Assessment[];
	readonly controlDescription?: string;
	readonly controlDescriptionHyperLink?: string;
	readonly controlFullName?: string;
	readonly controlId?: string;
	readonly controlShortName?: string;
	readonly controlStatus?: "Failed" | "NotApplicable" | "Passed";
	readonly controlType?: "FullyAutomated" | "Manual" | "PartiallyAutomated";
}
export interface ControlFamily {
	readonly controls?: Control[];
	readonly familyName?: string;
	readonly familyStatus?: "Healthy" | "Unhealthy";
	readonly familyType?: "FullyAutomated" | "Manual" | "PartiallyAutomated";
}
export interface OverviewStatus {
	readonly failedCount?: number;
	readonly manualCount?: number;
	readonly passedCount?: number;
}
export interface ReportComplianceStatus {
	readonly m365?: OverviewStatus;
}
export interface ReportProperties {
	readonly complianceStatus?: ReportComplianceStatus;
	readonly id?: string;
	readonly lastTriggerTime?: string;
	readonly nextTriggerTime?: string;
	readonly offerGuid?: string;
	readonly provisioningState?: "Canceled" | "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly reportName?: string;
	readonly resources: ResourceMetadata[];
	readonly status?: "Active" | "Disabled" | "Failed";
	readonly subscriptions?: string[];
	readonly tenantId?: string;
	readonly timeZone: string;
	readonly triggerTime: string;
}
export interface ResourceMetadata {
	readonly resourceId: string;
	readonly resourceKind?: string;
	readonly resourceName?: string;
	readonly resourceType?: string;
	readonly tags?: ResourceMetadataTags;
}
export interface ResourceMetadataTags {
	readonly [key: string]: string;
}
export interface SnapshotProperties {
	readonly complianceResults?: ComplianceResult[];
	readonly createdAt?: string;
	readonly id?: string;
	readonly provisioningState?: "Canceled" | "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly reportProperties?: ReportProperties;
	readonly reportSystemData?: SystemData;
	readonly snapshotName?: string;
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
	reports: reports,
	"reports/snapshots": reports_snapshots,
};
