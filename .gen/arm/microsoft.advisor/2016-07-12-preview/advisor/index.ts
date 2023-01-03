import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class recommendations_suppressions
	extends ArmResource<recommendations_suppressionsComponentInputs>
	implements recommendations_suppressionsComponentOutputs
{
	constructor(entity: ADKEntity, options: recommendations_suppressionsComponentInputs) {
		super(entity, options.name, "Microsoft.Advisor/recommendations/suppressions", "2016-07-12-preview", options);
	}
	public readonly apiVersion: "2016-07-12-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Advisor/recommendations/suppressions";
}
export interface recommendations_suppressionsComponentOutputs {
	readonly apiVersion: "2016-07-12-preview";
	readonly id: string;
	readonly type: "Microsoft.Advisor/recommendations/suppressions";
}
export interface recommendations_suppressionsComponentInputs {
	readonly location?: string | undefined;
	readonly name: string;
	readonly suppressionId?: string | undefined;
	readonly tags?: ResourceTags | undefined;
	readonly ttl?: string | undefined;
}
export interface ResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export default {
	"recommendations/suppressions": recommendations_suppressions,
};
