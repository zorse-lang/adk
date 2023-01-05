import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class recommendations
	extends ArmResource<recommendationsComponentInputs>
	implements recommendationsComponentOutputs
{
	constructor(entity: ADKEntity, options: recommendationsComponentInputs) {
		super(entity, options.name, "Microsoft.Advisor/recommendations", "2017-03-31", options);
	}
	public readonly apiVersion: "2017-03-31";
	public readonly id: string;
	public readonly type: "Microsoft.Advisor/recommendations";
}
export interface recommendationsComponentOutputs {
	readonly apiVersion: "2017-03-31";
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
		super(entity, options.name, "Microsoft.Advisor/recommendations/suppressions", "2017-03-31", options);
	}
	public readonly apiVersion: "2017-03-31";
	public readonly id: string;
	public readonly type: "Microsoft.Advisor/recommendations/suppressions";
}
export interface recommendations_suppressionsComponentOutputs {
	readonly apiVersion: "2017-03-31";
	readonly id: string;
	readonly type: "Microsoft.Advisor/recommendations/suppressions";
}
export interface recommendations_suppressionsComponentInputs {
	readonly name: string;
	readonly properties?: SuppressionProperties;
}
export interface RecommendationProperties {
	readonly category?: "Cost" | "HighAvailability" | "OperationalExcellence" | "Performance" | "Security";
	readonly impact?: "High" | "Low" | "Medium";
	readonly impactedField?: string;
	readonly impactedValue?: string;
	readonly lastUpdated?: string;
	readonly metadata?: RecommendationPropertiesMetadata;
	readonly recommendationTypeId?: string;
	readonly risk?: "Error" | "None" | "Warning";
	readonly shortDescription?: ShortDescription;
	readonly suppressionIds?: string[];
}
export interface RecommendationPropertiesMetadata {
	readonly [key: string]: any;
}
export interface ShortDescription {
	readonly problem?: string;
	readonly solution?: string;
}
export interface SuppressionProperties {
	readonly suppressionId?: string;
	readonly ttl?: string;
}
export default {
	recommendations: recommendations,
	"recommendations/suppressions": recommendations_suppressions,
};
