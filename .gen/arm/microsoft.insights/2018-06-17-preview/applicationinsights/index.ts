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
	readonly kind?: ("shared" | "user") | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: WorkbookProperties | undefined;
	readonly tags?: ResourceTags | undefined;
}
export interface ResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface WorkbookProperties {
	readonly category: string;
	readonly displayName: string;
	readonly serializedData: string;
	readonly sourceId?: string | undefined;
	readonly tags?: string[] | undefined;
	readonly timeModified?: string | undefined;
	readonly userId?: string | undefined;
	readonly version?: string | undefined;
}
export default {
	workbooks: workbooks,
};
