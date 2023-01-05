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
	readonly properties?: ConfigDataProperties;
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
	readonly properties?: RecommendationProperties;
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
	readonly properties?: SuppressionProperties;
}
export interface ConfigDataProperties {
	readonly digests?: DigestConfig[];
	readonly duration?: "14" | "21" | "30" | "60" | "7" | "90";
	readonly exclude?: boolean;
	readonly lowCpuThreshold?: "10" | "15" | "20" | "5";
}
export interface DigestConfig {
	readonly actionGroupResourceId?: string;
	readonly categories?: "Cost" | "HighAvailability" | "OperationalExcellence" | "Performance" | "Security"[];
	readonly frequency?: number;
	readonly language?: string;
	readonly name?: string;
	readonly state?: "Active" | "Disabled";
}
export interface RecommendationProperties {
	readonly actions?: RecommendationPropertiesActionsItem[];
	readonly category?: "Cost" | "HighAvailability" | "OperationalExcellence" | "Performance" | "Security";
	readonly description?: string;
	readonly exposedMetadataProperties?: RecommendationPropertiesExposedMetadataProperties;
	readonly extendedProperties?: RecommendationPropertiesExtendedProperties;
	readonly impact?: "High" | "Low" | "Medium";
	readonly impactedField?: string;
	readonly impactedValue?: string;
	readonly label?: string;
	readonly lastUpdated?: string;
	readonly learnMoreLink?: string;
	readonly metadata?: RecommendationPropertiesMetadata;
	readonly potentialBenefits?: string;
	readonly recommendationTypeId?: string;
	readonly remediation?: RecommendationPropertiesRemediation;
	readonly resourceMetadata?: ResourceMetadata;
	readonly risk?: "Error" | "None" | "Warning";
	readonly shortDescription?: ShortDescription;
	readonly suppressionIds?: string[];
}
export interface RecommendationPropertiesActionsItem {
	readonly [key: string]: any;
}
export interface RecommendationPropertiesExposedMetadataProperties {
	readonly [key: string]: any;
}
export interface RecommendationPropertiesExtendedProperties {
	readonly [key: string]: string;
}
export interface RecommendationPropertiesMetadata {
	readonly [key: string]: any;
}
export interface RecommendationPropertiesRemediation {
	readonly [key: string]: any;
}
export interface ResourceMetadata {
	readonly action?: ResourceMetadataAction;
	readonly plural?: string;
	readonly resourceId?: string;
	readonly singular?: string;
	readonly source?: string;
}
export interface ResourceMetadataAction {
	readonly [key: string]: any;
}
export interface ShortDescription {
	readonly problem?: string;
	readonly solution?: string;
}
export interface SuppressionProperties {
	readonly expirationTimeStamp?: string;
	readonly suppressionId?: string;
	readonly ttl?: string;
}
export default {
	configurations: configurations,
	recommendations: recommendations,
	"recommendations/suppressions": recommendations_suppressions,
};
