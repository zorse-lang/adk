import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class recommendations
	extends ArmResource<recommendationsComponentInputs>
	implements recommendationsComponentOutputs
{
	constructor(entity: ADKEntity, options: recommendationsComponentInputs) {
		super(entity, options.name, "Microsoft.Advisor/recommendations", "2017-04-19", options);
	}
	public readonly apiVersion: "2017-04-19";
	public readonly id: string;
	public readonly type: "Microsoft.Advisor/recommendations";
}
export interface recommendationsComponentOutputs {
	readonly apiVersion: "2017-04-19";
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
		super(entity, options.name, "Microsoft.Advisor/recommendations/suppressions", "2017-04-19", options);
	}
	public readonly apiVersion: "2017-04-19";
	public readonly id: string;
	public readonly type: "Microsoft.Advisor/recommendations/suppressions";
}
export interface recommendations_suppressionsComponentOutputs {
	readonly apiVersion: "2017-04-19";
	readonly id: string;
	readonly type: "Microsoft.Advisor/recommendations/suppressions";
}
export interface recommendations_suppressionsComponentInputs {
	readonly name: string;
	readonly properties?: SuppressionProperties | undefined;
}
export interface RecommendationProperties {
	readonly category?: ("Cost" | "HighAvailability" | "OperationalExcellence" | "Performance" | "Security") | undefined;
	readonly extendedProperties?: RecommendationPropertiesExtendedProperties | undefined;
	readonly impact?: ("High" | "Low" | "Medium") | undefined;
	readonly impactedField?: string | undefined;
	readonly impactedValue?: string | undefined;
	readonly lastUpdated?: string | undefined;
	readonly metadata?: RecommendationPropertiesMetadata | undefined;
	readonly recommendationTypeId?: string | undefined;
	readonly risk?: ("Error" | "None" | "Warning") | undefined;
	readonly shortDescription?: ShortDescription | undefined;
	readonly suppressionIds?: string[] | undefined;
}
export interface RecommendationPropertiesExtendedProperties {
	readonly "[ key: string ]"?: string | undefined;
}
export interface RecommendationPropertiesMetadata {
	readonly "[ key: string ]"?: any | undefined;
}
export interface ShortDescription {
	readonly problem?: string | undefined;
	readonly solution?: string | undefined;
}
export interface SuppressionProperties {
	readonly suppressionId?: string | undefined;
	readonly ttl?: string | undefined;
}
export default {
	recommendations: recommendations,
	"recommendations/suppressions": recommendations_suppressions,
};
