import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class apiCollections extends ArmResource<apiCollectionsComponentInputs> implements apiCollectionsComponentOutputs {
	constructor(entity: ADKEntity, options: apiCollectionsComponentInputs) {
		super(entity, options.name, "Microsoft.Security/apiCollections", "2022-11-20-preview", options);
	}
	public readonly apiVersion: "2022-11-20-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Security/apiCollections";
}
export interface apiCollectionsComponentOutputs {
	readonly apiVersion: "2022-11-20-preview";
	readonly id: string;
	readonly type: "Microsoft.Security/apiCollections";
}
export interface apiCollectionsComponentInputs {
	readonly name: string;
	readonly properties?: ApiCollectionProperties | undefined;
}
export interface ApiCollectionProperties {
	readonly additionalData?: ApiCollectionPropertiesAdditionalData | undefined;
	readonly displayName?: string | undefined;
}
export interface ApiCollectionPropertiesAdditionalData {
	readonly "[ key: string ]"?: string | undefined;
}
export default {
	apiCollections: apiCollections,
};
