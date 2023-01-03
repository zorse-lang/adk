import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class queries extends ArmResource<queriesComponentInputs> implements queriesComponentOutputs {
	constructor(entity: ADKEntity, options: queriesComponentInputs) {
		super(entity, options.name, "Microsoft.ResourceGraph/queries", "2018-09-01-preview", options);
	}
	public readonly apiVersion: "2018-09-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ResourceGraph/queries";
}
export interface queriesComponentOutputs {
	readonly apiVersion: "2018-09-01-preview";
	readonly id: string;
	readonly type: "Microsoft.ResourceGraph/queries";
}
export interface queriesComponentInputs {
	readonly etag?: string | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: GraphQueryProperties | undefined;
	readonly tags?: ResourceTags | undefined;
}
export interface GraphQueryProperties {
	readonly description?: string | undefined;
	readonly query: string;
	readonly resultKind?: "basic" | undefined;
	readonly timeModified?: string | undefined;
}
export interface ResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export default {
	queries: queries,
};
