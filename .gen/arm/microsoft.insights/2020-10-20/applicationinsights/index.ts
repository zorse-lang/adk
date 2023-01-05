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
	readonly etag?: MyWorkbookResourceEtag;
	readonly identity?: MyWorkbookManagedIdentity;
	readonly kind?: "shared" | "user";
	readonly location?: string;
	readonly name: string;
	readonly properties?: MyWorkbookProperties;
	readonly tags?: MyWorkbookResourceTags;
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
	readonly etag?: ResourceEtag;
	readonly identity?: WorkbookManagedIdentity;
	readonly kind?: "shared" | "user";
	readonly location?: string;
	readonly name: string;
	readonly properties?: WorkbookProperties;
	readonly tags?: ResourceTags;
}
export interface MyWorkbookManagedIdentity {
	readonly type?: "None" | "UserAssigned";
	readonly userAssignedIdentities?: MyWorkbookUserAssignedIdentities;
}
export interface MyWorkbookProperties {
	readonly category: string;
	readonly displayName: string;
	readonly serializedData: string;
	readonly sourceId?: string;
	readonly storageUri?: string;
	readonly tags?: string[];
	readonly timeModified?: string;
	readonly userId?: string;
	readonly version?: string;
}
export interface MyWorkbookResourceEtag {
	readonly [key: string]: string;
}
export interface MyWorkbookResourceTags {
	readonly [key: string]: string;
}
export interface MyWorkbookUserAssignedIdentities {
	readonly principalId?: string;
	readonly tenantId?: string;
}
export interface ResourceEtag {
	readonly [key: string]: string;
}
export interface ResourceTags {
	readonly [key: string]: string;
}
export interface WorkbookManagedIdentity {
	readonly type?: "None" | "UserAssigned";
	readonly userAssignedIdentities?: WorkbookUserAssignedIdentities;
}
export interface WorkbookProperties {
	readonly category: string;
	readonly displayName: string;
	readonly serializedData: string;
	readonly sourceId?: string;
	readonly storageUri?: string;
	readonly tags?: string[];
	readonly timeModified?: string;
	readonly userId?: string;
	readonly version?: string;
}
export interface WorkbookUserAssignedIdentities {
	readonly clientId?: string;
	readonly principalId?: string;
	readonly tenantId?: string;
}
export default {
	myWorkbooks: myWorkbooks,
	workbooks: workbooks,
};
