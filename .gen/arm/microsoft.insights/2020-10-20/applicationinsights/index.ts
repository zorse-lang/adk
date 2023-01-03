import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class myWorkbooks extends ArmResource<myWorkbooksComponentInputs> implements myWorkbooksComponentOutputs {
	constructor(entity: ADKEntity, options: myWorkbooksComponentInputs) {
		super(entity, options.name, "Microsoft.Insights/myWorkbooks", "2020-10-20", options);
	}
	public readonly apiVersion: "2020-10-20";
	public readonly id: string;
	public readonly type: "Microsoft.Insights/myWorkbooks";
}
export interface myWorkbooksComponentOutputs {
	readonly apiVersion: "2020-10-20";
	readonly id: string;
	readonly type: "Microsoft.Insights/myWorkbooks";
}
export interface myWorkbooksComponentInputs {
	readonly etag?: MyWorkbookResourceEtag | undefined;
	readonly identity?: MyWorkbookManagedIdentity | undefined;
	readonly kind?: ("shared" | "user") | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: MyWorkbookProperties | undefined;
	readonly tags?: MyWorkbookResourceTags | undefined;
}
export class workbooks extends ArmResource<workbooksComponentInputs> implements workbooksComponentOutputs {
	constructor(entity: ADKEntity, options: workbooksComponentInputs) {
		super(entity, options.name, "Microsoft.Insights/workbooks", "2020-10-20", options);
	}
	public readonly apiVersion: "2020-10-20";
	public readonly id: string;
	public readonly type: "Microsoft.Insights/workbooks";
}
export interface workbooksComponentOutputs {
	readonly apiVersion: "2020-10-20";
	readonly id: string;
	readonly type: "Microsoft.Insights/workbooks";
}
export interface workbooksComponentInputs {
	readonly etag?: ResourceEtag | undefined;
	readonly identity?: WorkbookManagedIdentity | undefined;
	readonly kind?: ("shared" | "user") | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: WorkbookProperties | undefined;
	readonly tags?: ResourceTags | undefined;
}
export interface MyWorkbookManagedIdentity {
	readonly type?: ("None" | "UserAssigned") | undefined;
	readonly userAssignedIdentities?: MyWorkbookUserAssignedIdentities | undefined;
}
export interface MyWorkbookProperties {
	readonly category: string;
	readonly displayName: string;
	readonly serializedData: string;
	readonly sourceId?: string | undefined;
	readonly storageUri?: string | undefined;
	readonly tags?: string[] | undefined;
	readonly timeModified?: string | undefined;
	readonly userId?: string | undefined;
	readonly version?: string | undefined;
}
export interface MyWorkbookResourceEtag {
	readonly "[ key: string ]"?: string | undefined;
}
export interface MyWorkbookResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface MyWorkbookUserAssignedIdentities {
	readonly principalId?: string | undefined;
	readonly tenantId?: string | undefined;
}
export interface ResourceEtag {
	readonly "[ key: string ]"?: string | undefined;
}
export interface ResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface WorkbookManagedIdentity {
	readonly type?: ("None" | "UserAssigned") | undefined;
	readonly userAssignedIdentities?: WorkbookUserAssignedIdentities | undefined;
}
export interface WorkbookProperties {
	readonly category: string;
	readonly displayName: string;
	readonly serializedData: string;
	readonly sourceId?: string | undefined;
	readonly storageUri?: string | undefined;
	readonly tags?: string[] | undefined;
	readonly timeModified?: string | undefined;
	readonly userId?: string | undefined;
	readonly version?: string | undefined;
}
export interface WorkbookUserAssignedIdentities {
	readonly clientId?: string | undefined;
	readonly principalId?: string | undefined;
	readonly tenantId?: string | undefined;
}
export default {
	myWorkbooks: myWorkbooks,
	workbooks: workbooks,
};
