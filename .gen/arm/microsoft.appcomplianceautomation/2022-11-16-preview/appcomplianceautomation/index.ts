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
	readonly systemData?: SystemData | undefined;
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
	readonly properties?: SnapshotProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export interface Assessment {
	readonly description?: string | undefined;
	readonly isPass?: ("False" | "True") | undefined;
	readonly name?: string | undefined;
	readonly policyId?: string | undefined;
	readonly remediation?: string | undefined;
	readonly resourceList?: AssessmentResource[] | undefined;
	readonly severity?: ("High" | "Low" | "Medium") | undefined;
}
export interface AssessmentResource {
	readonly reason?: string | undefined;
	readonly resourceId?: string | undefined;
	readonly resourceStatus?: ("Healthy" | "NotApplicable" | "Unhealthy") | undefined;
	readonly statusChangeDate?: string | undefined;
}
export interface Category {
	readonly categoryName?: string | undefined;
	readonly categoryStatus?: ("Healthy" | "Unhealthy") | undefined;
	readonly categoryType?: ("FullyAutomated" | "Manual" | "PartiallyAutomated") | undefined;
	readonly controlFamilies?: ControlFamily[] | undefined;
}
export interface ComplianceResult {
	readonly categories?: Category[] | undefined;
	readonly complianceName?: string | undefined;
}
export interface Control {
	readonly assessments?: Assessment[] | undefined;
	readonly controlDescription?: string | undefined;
	readonly controlDescriptionHyperLink?: string | undefined;
	readonly controlFullName?: string | undefined;
	readonly controlId?: string | undefined;
	readonly controlShortName?: string | undefined;
	readonly controlStatus?: ("Failed" | "NotApplicable" | "Passed") | undefined;
	readonly controlType?: ("FullyAutomated" | "Manual" | "PartiallyAutomated") | undefined;
}
export interface ControlFamily {
	readonly controls?: Control[] | undefined;
	readonly familyName?: string | undefined;
	readonly familyStatus?: ("Healthy" | "Unhealthy") | undefined;
	readonly familyType?: ("FullyAutomated" | "Manual" | "PartiallyAutomated") | undefined;
}
export interface OverviewStatus {
	readonly failedCount?: number | undefined;
	readonly manualCount?: number | undefined;
	readonly passedCount?: number | undefined;
}
export interface ReportComplianceStatus {
	readonly m365?: OverviewStatus | undefined;
}
export interface ReportProperties {
	readonly complianceStatus?: ReportComplianceStatus | undefined;
	readonly id?: string | undefined;
	readonly lastTriggerTime?: string | undefined;
	readonly nextTriggerTime?: string | undefined;
	readonly offerGuid?: string | undefined;
	readonly provisioningState?: ("Canceled" | "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly reportName?: string | undefined;
	readonly resources: ResourceMetadata[];
	readonly status?: ("Active" | "Disabled" | "Failed") | undefined;
	readonly subscriptions?: string[] | undefined;
	readonly tenantId?: string | undefined;
	readonly timeZone: string;
	readonly triggerTime: string;
}
export interface ResourceMetadata {
	readonly resourceId: string;
	readonly resourceKind?: string | undefined;
	readonly resourceName?: string | undefined;
	readonly resourceType?: string | undefined;
	readonly tags?: ResourceMetadataTags | undefined;
}
export interface ResourceMetadataTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface SnapshotProperties {
	readonly complianceResults?: ComplianceResult[] | undefined;
	readonly createdAt?: string | undefined;
	readonly id?: string | undefined;
	readonly provisioningState?: ("Canceled" | "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly reportProperties?: ReportProperties | undefined;
	readonly reportSystemData?: SystemData | undefined;
	readonly snapshotName?: string | undefined;
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
	reports: reports,
	"reports/snapshots": reports_snapshots,
};
