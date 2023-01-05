import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class workbooks extends ArmResource<workbooksComponentInputs> implements workbooksComponentOutputs {
	constructor(entity: ADKEntity, options: workbooksComponentInputs) {
		super(entity, options.name, "microsoft.insights/workbooks", "2018-06-17-preview", options);
	}
	public readonly apiVersion: "2018-06-17-preview";
	public readonly id: string;
	public readonly type: "microsoft.insights/workbooks";
}
export interface workbooksComponentOutputs {
	readonly apiVersion: "2018-06-17-preview";
	readonly id: string;
	readonly type: "microsoft.insights/workbooks";
}
export interface workbooksComponentInputs {
	readonly kind?: "shared" | "user";
	readonly location?: string;
	readonly name: string;
	readonly properties?: WorkbookProperties;
	readonly tags?: ResourceTags;
}
export interface ResourceTags {
	readonly [key: string]: string;
}
export interface WorkbookProperties {
	readonly category: string;
	readonly displayName: string;
	readonly serializedData: string;
	readonly sourceId?: string;
	readonly tags?: string[];
	readonly timeModified?: string;
	readonly userId?: string;
	readonly version?: string;
}
export default {
	workbooks: workbooks,
};
