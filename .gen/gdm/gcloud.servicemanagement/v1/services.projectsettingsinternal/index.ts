import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ServicesProjectSettingsInternal
	extends GdmResource<ServicesProjectSettingsInternalComponentInputs>
	implements ServicesProjectSettingsInternalComponentOutputs
{
	constructor(entity: ADKEntity, options: ServicesProjectSettingsInternalComponentInputs) {
		super(entity, options.name, "servicemanagement.v1.ServicesProjectSettingsInternal", options);
	}
}
export interface ServicesProjectSettingsInternalComponentOutputs {}
export interface ServicesProjectSettingsInternalComponentInputs {
	readonly consumerProjectId?: string;
	readonly operations?: Operation[];
	readonly quotaSettings?: QuotaSettings;
	readonly serviceName?: string;
	readonly usageSettings?: UsageSettings;
	readonly visibilitySettings?: VisibilitySettings;
	readonly name: string;
}
export interface EffectiveQuotaGroup {
	readonly baseGroup?: QuotaGroup;
	readonly billingInteraction?: string;
	readonly quotas?: QuotaInfo[];
}
export interface EffectiveQuotaLimit {
	readonly baseLimit?: QuotaLimit;
	readonly effectiveLimit?: string;
	readonly key?: string;
	readonly maxConsumerOverrideAllowed?: string;
}
export interface EffectiveQuotaLimit2 {
	readonly allowAdminOverrides?: boolean;
	readonly baseLimit?: QuotaLimit;
	readonly defaultLimit?: QuotaLimit;
	readonly quotaBuckets?: QuotaBucket[];
}
export interface EffectiveQuotasForMetric {
	readonly effectiveLimits?: { [P in string]: EffectiveQuotaLimit2 };
	readonly metric?: MetricDescriptor;
}
export interface LabelDescriptor {
	readonly description?: string;
	readonly key?: string;
	readonly valueType?: string;
}
export interface LabelMapping {
	readonly destinationMetricLabel?: string;
	readonly destinationResourceLabel?: string;
	readonly sourceLabel?: string;
}
export interface MetricDescriptor {
	readonly description?: string;
	readonly displayName?: string;
	readonly labels?: LabelDescriptor[];
	readonly launchStage?: string;
	readonly metadata?: MetricDescriptorMetadata;
	readonly metricKind?: string;
	readonly monitoredResourceTypes?: string[];
	readonly monitoringMigration?: MonitoringMigration;
	readonly name?: string;
	readonly type?: string;
	readonly unit?: string;
	readonly valueType?: string;
	readonly visibilityRestriction?: string;
}
export interface MetricDescriptorMetadata {
	readonly ingestDelay?: string;
	readonly launchStage?: string;
	readonly samplePeriod?: string;
}
export interface MetricMapping {
	readonly labelMappings?: LabelMapping[];
	readonly metric?: string;
	readonly monitoredResource?: string;
}
export interface MonitoringMigration {
	readonly metricMappings?: MetricMapping;
	readonly monitoringBackend?: string;
}
export interface Operation {
	readonly done?: boolean;
	readonly error?: Status;
	readonly metadata?: { [P in string]: any };
	readonly name?: string;
	readonly response?: { [P in string]: any };
}
export interface ProjectSettings {
	readonly consumerProjectId?: string;
	readonly operations?: Operation[];
	readonly properties?: { [P in string]: any[] };
	readonly quotaSettings?: QuotaSettings;
	readonly serviceName?: string;
	readonly usageSettings?: UsageSettings;
	readonly visibilitySettings?: VisibilitySettings;
}
export interface QuotaBucket {
	readonly bucketId?: QuotaBucketId;
	readonly limitValue?: string;
	readonly maxConsumerOverrideAllowed?: string;
	readonly usage?: QuotaUsage;
}
export interface QuotaBucketId {
	readonly containerId?: string;
	readonly region?: string;
	readonly zone?: string;
}
export interface QuotaGroup {
	readonly billable?: boolean;
	readonly description?: string;
	readonly limits?: QuotaLimit[];
	readonly name?: string;
}
export interface QuotaInfo {
	readonly currentUsage?: QuotaUsage;
	readonly historicalUsage?: QuotaUsage[];
	readonly limit?: EffectiveQuotaLimit;
}
export interface QuotaLimit {
	readonly defaultLimit?: string;
	readonly description?: string;
	readonly displayName?: string;
	readonly duration?: string;
	readonly enablePerCellRateLimiting?: boolean;
	readonly freeTier?: string;
	readonly isConcurrent?: boolean;
	readonly isFixed?: boolean;
	readonly isPrecise?: boolean;
	readonly launchStage?: string;
	readonly limitBy?: string;
	readonly maxLimit?: string;
	readonly metric?: string;
	readonly name?: string;
	readonly supportedLocations?: string;
	readonly supportedRegions?: string;
	readonly unit?: string;
	readonly values?: { [P in string]: string };
	readonly visibilityRestriction?: string;
}
export interface QuotaLimitOverride {
	readonly limit?: string;
	readonly previousDefaultAsOverride?: boolean;
	readonly requesterResource?: string;
	readonly unlimited?: boolean;
}
export interface QuotaSettings {
	readonly adminOverrides?: { [P in string]: QuotaLimitOverride };
	readonly consumerOverrides?: { [P in string]: QuotaLimitOverride };
	readonly effectiveQuotaForMetrics?: EffectiveQuotasForMetric[];
	readonly effectiveQuotaGroups?: EffectiveQuotaGroup[];
	readonly effectiveQuotas?: { [P in string]: QuotaLimitOverride };
	readonly force?: boolean;
	readonly producerOverrides?: { [P in string]: QuotaLimitOverride };
	readonly variableTermQuotas?: VariableTermQuota[];
}
export interface QuotaUsage {
	readonly endTime?: string;
	readonly hierarchyLimitWarning?: string;
	readonly queryTime?: string;
	readonly startTime?: string;
	readonly usage?: string;
}
export interface Status {
	readonly code?: number;
	readonly details?: Array<{ [P in string]: any }>;
	readonly message?: string;
}
export interface UsageSettings {
	readonly consumerEnableStatus?: string;
}
export interface VariableTermQuota {
	readonly createTime?: string;
	readonly displayEndDate?: string;
	readonly endDate?: string;
	readonly groupName?: string;
	readonly limit?: string;
	readonly quotaUsage?: QuotaUsage;
	readonly startDate?: string;
}
export interface VisibilitySettings {
	readonly visibilityLabels?: string[];
}
export default {
	ServicesProjectSettingsInternal: ServicesProjectSettingsInternal,
};
