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
	readonly etag?: string;
	readonly location?: string;
	readonly name: string;
	readonly properties?: GraphQueryProperties;
	readonly tags?: ResourceTags;
}
export interface GraphQueryProperties {
	readonly description?: string;
	readonly query: string;
	readonly resultKind?: "basic";
	readonly timeModified?: string;
}
export interface ResourceTags {
	readonly [key: string]: string;
}
export default {
	queries: queries,
};
