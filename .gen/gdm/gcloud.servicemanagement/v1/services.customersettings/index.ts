import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ServicesCustomerSettings
	extends GdmResource<ServicesCustomerSettingsComponentInputs>
	implements ServicesCustomerSettingsComponentOutputs
{
	constructor(entity: ADKEntity, options: ServicesCustomerSettingsComponentInputs) {
		super(entity, options.name, "servicemanagement.v1.ServicesCustomerSettings", options);
	}
}
export interface ServicesCustomerSettingsComponentOutputs {}
export interface ServicesCustomerSettingsComponentInputs {
	readonly customerId?: string | undefined;
	readonly quotaSettings?: QuotaSettings | undefined;
	readonly reputationTier?: string | undefined;
	readonly serviceName?: string | undefined;
	readonly type: string;
	readonly name: string;
}
export interface CustomerSettings {
	readonly customerId?: string | undefined;
	readonly quotaSettings?: QuotaSettings | undefined;
	readonly reputationTier?: string | undefined;
	readonly serviceName?: string | undefined;
}
export interface EffectiveQuotaGroup {
	readonly baseGroup?: QuotaGroup | undefined;
	readonly billingInteraction?: string | undefined;
	readonly quotas?: QuotaInfo[] | undefined;
}
export interface EffectiveQuotaLimit {
	readonly baseLimit?: QuotaLimit | undefined;
	readonly effectiveLimit?: string | undefined;
	readonly key?: string | undefined;
	readonly maxConsumerOverrideAllowed?: string | undefined;
}
export interface EffectiveQuotaLimit2 {
	readonly allowAdminOverrides?: boolean | undefined;
	readonly baseLimit?: QuotaLimit | undefined;
	readonly defaultLimit?: QuotaLimit | undefined;
	readonly quotaBuckets?: QuotaBucket[] | undefined;
}
export interface EffectiveQuotasForMetric {
	readonly effectiveLimits?: { [P in string]: EffectiveQuotaLimit2 } | undefined;
	readonly metric?: MetricDescriptor | undefined;
}
export interface LabelDescriptor {
	readonly description?: string | undefined;
	readonly key?: string | undefined;
	readonly valueType?: string | undefined;
}
export interface LabelMapping {
	readonly destinationMetricLabel?: string | undefined;
	readonly destinationResourceLabel?: string | undefined;
	readonly sourceLabel?: string | undefined;
}
export interface MetricDescriptor {
	readonly description?: string | undefined;
	readonly displayName?: string | undefined;
	readonly labels?: LabelDescriptor[] | undefined;
	readonly launchStage?: string | undefined;
	readonly metadata?: MetricDescriptorMetadata | undefined;
	readonly metricKind?: string | undefined;
	readonly monitoredResourceTypes?: string[] | undefined;
	readonly monitoringMigration?: MonitoringMigration | undefined;
	readonly name?: string | undefined;
	readonly type?: string | undefined;
	readonly unit?: string | undefined;
	readonly valueType?: string | undefined;
	readonly visibilityRestriction?: string | undefined;
}
export interface MetricDescriptorMetadata {
	readonly ingestDelay?: string | undefined;
	readonly launchStage?: string | undefined;
	readonly samplePeriod?: string | undefined;
}
export interface MetricMapping {
	readonly labelMappings?: LabelMapping[] | undefined;
	readonly metric?: string | undefined;
	readonly monitoredResource?: string | undefined;
}
export interface MonitoringMigration {
	readonly metricMappings?: MetricMapping | undefined;
	readonly monitoringBackend?: string | undefined;
}
export interface QuotaBucket {
	readonly bucketId?: QuotaBucketId | undefined;
	readonly limitValue?: string | undefined;
	readonly maxConsumerOverrideAllowed?: string | undefined;
	readonly usage?: QuotaUsage | undefined;
}
export interface QuotaBucketId {
	readonly containerId?: string | undefined;
	readonly region?: string | undefined;
	readonly zone?: string | undefined;
}
export interface QuotaGroup {
	readonly billable?: boolean | undefined;
	readonly description?: string | undefined;
	readonly limits?: QuotaLimit[] | undefined;
	readonly name?: string | undefined;
}
export interface QuotaInfo {
	readonly currentUsage?: QuotaUsage | undefined;
	readonly historicalUsage?: QuotaUsage[] | undefined;
	readonly limit?: EffectiveQuotaLimit | undefined;
}
export interface QuotaLimit {
	readonly defaultLimit?: string | undefined;
	readonly description?: string | undefined;
	readonly displayName?: string | undefined;
	readonly duration?: string | undefined;
	readonly enablePerCellRateLimiting?: boolean | undefined;
	readonly freeTier?: string | undefined;
	readonly isConcurrent?: boolean | undefined;
	readonly isFixed?: boolean | undefined;
	readonly isPrecise?: boolean | undefined;
	readonly launchStage?: string | undefined;
	readonly limitBy?: string | undefined;
	readonly maxLimit?: string | undefined;
	readonly metric?: string | undefined;
	readonly name?: string | undefined;
	readonly supportedLocations?: string | undefined;
	readonly supportedRegions?: string | undefined;
	readonly unit?: string | undefined;
	readonly values?: { [P in string]: string } | undefined;
	readonly visibilityRestriction?: string | undefined;
}
export interface QuotaLimitOverride {
	readonly limit?: string | undefined;
	readonly previousDefaultAsOverride?: boolean | undefined;
	readonly requesterResource?: string | undefined;
	readonly unlimited?: boolean | undefined;
}
export interface QuotaSettings {
	readonly adminOverrides?: { [P in string]: QuotaLimitOverride } | undefined;
	readonly consumerOverrides?: { [P in string]: QuotaLimitOverride } | undefined;
	readonly effectiveQuotaForMetrics?: EffectiveQuotasForMetric[] | undefined;
	readonly effectiveQuotaGroups?: EffectiveQuotaGroup[] | undefined;
	readonly effectiveQuotas?: { [P in string]: QuotaLimitOverride } | undefined;
	readonly force?: boolean | undefined;
	readonly producerOverrides?: { [P in string]: QuotaLimitOverride } | undefined;
	readonly variableTermQuotas?: VariableTermQuota[] | undefined;
}
export interface QuotaUsage {
	readonly endTime?: string | undefined;
	readonly hierarchyLimitWarning?: string | undefined;
	readonly queryTime?: string | undefined;
	readonly startTime?: string | undefined;
	readonly usage?: string | undefined;
}
export interface VariableTermQuota {
	readonly createTime?: string | undefined;
	readonly displayEndDate?: string | undefined;
	readonly endDate?: string | undefined;
	readonly groupName?: string | undefined;
	readonly limit?: string | undefined;
	readonly quotaUsage?: QuotaUsage | undefined;
	readonly startDate?: string | undefined;
}
export default {
	ServicesCustomerSettings: ServicesCustomerSettings,
};
