import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class configurations extends ArmResource<configurationsComponentInputs> implements configurationsComponentOutputs {
	constructor(entity: ADKEntity, options: configurationsComponentInputs) {
		super(entity, options.name, "Microsoft.Advisor/configurations", "2022-09-01", options);
	}
	public readonly apiVersion: "2022-09-01";
	public readonly id: string;
	public readonly type: "Microsoft.Advisor/configurations";
}
export interface configurationsComponentOutputs {
	readonly apiVersion: "2022-09-01";
	readonly id: string;
	readonly type: "Microsoft.Advisor/configurations";
}
export interface configurationsComponentInputs {
	readonly name: string;
	readonly properties?: ConfigDataProperties | undefined;
}
export class recommendations
	extends ArmResource<recommendationsComponentInputs>
	implements recommendationsComponentOutputs
{
	constructor(entity: ADKEntity, options: recommendationsComponentInputs) {
		super(entity, options.name, "Microsoft.Advisor/recommendations", "2022-09-01", options);
	}
	public readonly apiVersion: "2022-09-01";
	public readonly id: string;
	public readonly type: "Microsoft.Advisor/recommendations";
}
export interface recommendationsComponentOutputs {
	readonly apiVersion: "2022-09-01";
	readonly id: string;
	readonly type: "Microsoft.Advisor/recommendations";
}
export interface recommendationsComponentInputs {
	readonly name: string;
	readonly properties?: RecommendationProperties | undefined;
}
export class recommendations_suppressions
	extends ArmResource<recommendations_suppressionsComponentInputs>
	implements recommendations_suppressionsComponentOutputs
{
	constructor(entity: ADKEntity, options: recommendations_suppressionsComponentInputs) {
		super(entity, options.name, "Microsoft.Advisor/recommendations/suppressions", "2022-09-01", options);
	}
	public readonly apiVersion: "2022-09-01";
	public readonly id: string;
	public readonly type: "Microsoft.Advisor/recommendations/suppressions";
}
export interface recommendations_suppressionsComponentOutputs {
	readonly apiVersion: "2022-09-01";
	readonly id: string;
	readonly type: "Microsoft.Advisor/recommendations/suppressions";
}
export interface recommendations_suppressionsComponentInputs {
	readonly name: string;
	readonly properties?: SuppressionProperties | undefined;
}
export interface ConfigDataProperties {
	readonly digests?: DigestConfig[] | undefined;
	readonly duration?: ("14" | "21" | "30" | "60" | "7" | "90") | undefined;
	readonly exclude?: boolean | undefined;
	readonly lowCpuThreshold?: ("10" | "15" | "20" | "5") | undefined;
}
export interface DigestConfig {
	readonly actionGroupResourceId?: string | undefined;
	readonly categories?:
		| ("Cost" | "HighAvailability" | "OperationalExcellence" | "Performance" | "Security"[])
		| undefined;
	readonly frequency?: number | undefined;
	readonly language?: string | undefined;
	readonly name?: string | undefined;
	readonly state?: ("Active" | "Disabled") | undefined;
}
export interface RecommendationProperties {
	readonly actions?: RecommendationPropertiesActionsItem[] | undefined;
	readonly category?: ("Cost" | "HighAvailability" | "OperationalExcellence" | "Performance" | "Security") | undefined;
	readonly description?: string | undefined;
	readonly exposedMetadataProperties?: RecommendationPropertiesExposedMetadataProperties | undefined;
	readonly extendedProperties?: RecommendationPropertiesExtendedProperties | undefined;
	readonly impact?: ("High" | "Low" | "Medium") | undefined;
	readonly impactedField?: string | undefined;
	readonly impactedValue?: string | undefined;
	readonly label?: string | undefined;
	readonly lastUpdated?: string | undefined;
	readonly learnMoreLink?: string | undefined;
	readonly metadata?: RecommendationPropertiesMetadata | undefined;
	readonly potentialBenefits?: string | undefined;
	readonly recommendationTypeId?: string | undefined;
	readonly remediation?: RecommendationPropertiesRemediation | undefined;
	readonly resourceMetadata?: ResourceMetadata | undefined;
	readonly risk?: ("Error" | "None" | "Warning") | undefined;
	readonly shortDescription?: ShortDescription | undefined;
	readonly suppressionIds?: string[] | undefined;
}
export interface RecommendationPropertiesActionsItem {
	readonly "[ key: string ]"?: any | undefined;
}
export interface RecommendationPropertiesExposedMetadataProperties {
	readonly "[ key: string ]"?: any | undefined;
}
export interface RecommendationPropertiesExtendedProperties {
	readonly "[ key: string ]"?: string | undefined;
}
export interface RecommendationPropertiesMetadata {
	readonly "[ key: string ]"?: any | undefined;
}
export interface RecommendationPropertiesRemediation {
	readonly "[ key: string ]"?: any | undefined;
}
export interface ResourceMetadata {
	readonly action?: ResourceMetadataAction | undefined;
	readonly plural?: string | undefined;
	readonly resourceId?: string | undefined;
	readonly singular?: string | undefined;
	readonly source?: string | undefined;
}
export interface ResourceMetadataAction {
	readonly "[ key: string ]"?: any | undefined;
}
export interface ShortDescription {
	readonly problem?: string | undefined;
	readonly solution?: string | undefined;
}
export interface SuppressionProperties {
	readonly expirationTimeStamp?: string | undefined;
	readonly suppressionId?: string | undefined;
	readonly ttl?: string | undefined;
}
export default {
	configurations: configurations,
	recommendations: recommendations,
	"recommendations/suppressions": recommendations_suppressions,
};
