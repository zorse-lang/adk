import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class myWorkbooks extends ArmResource<myWorkbooksComponentInputs> implements myWorkbooksComponentOutputs {
	constructor(entity: ADKEntity, options: myWorkbooksComponentInputs) {
		super(entity, options.name, "Microsoft.Insights/myWorkbooks", "2021-03-08", options);
	}
	public readonly apiVersion: "2021-03-08";
	public readonly id: string;
	public readonly type: "Microsoft.Insights/myWorkbooks";
}
export interface myWorkbooksComponentOutputs {
	readonly apiVersion: "2021-03-08";
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
	readonly systemData?: SystemData | undefined;
	readonly tags?: MyWorkbookResourceTags | undefined;
}
export class workbooks extends ArmResource<workbooksComponentInputs> implements workbooksComponentOutputs {
	constructor(entity: ADKEntity, options: workbooksComponentInputs) {
		super(entity, options.name, "Microsoft.Insights/workbooks", "2021-03-08", options);
	}
	public readonly apiVersion: "2021-03-08";
	public readonly id: string;
	public readonly type: "Microsoft.Insights/workbooks";
}
export interface workbooksComponentOutputs {
	readonly apiVersion: "2021-03-08";
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
	readonly systemData?: SystemData | undefined;
	readonly tags?: ResourceTags | undefined;
}
export class workbooks_revisions
	extends ArmResource<workbooks_revisionsComponentInputs>
	implements workbooks_revisionsComponentOutputs
{
	constructor(entity: ADKEntity, options: workbooks_revisionsComponentInputs) {
		super(entity, options.name, "Microsoft.Insights/workbooks/revisions", "2021-03-08", options);
	}
	public readonly apiVersion: "2021-03-08";
	public readonly id: string;
	public readonly type: "Microsoft.Insights/workbooks/revisions";
}
export interface workbooks_revisionsComponentOutputs {
	readonly apiVersion: "2021-03-08";
	readonly id: string;
	readonly type: "Microsoft.Insights/workbooks/revisions";
}
export interface workbooks_revisionsComponentInputs {
	readonly etag?: ResourceEtag | undefined;
	readonly identity?: WorkbookManagedIdentity | undefined;
	readonly kind?: ("shared" | "user") | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: WorkbookProperties | undefined;
	readonly systemData?: SystemData | undefined;
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
export interface SystemData {
	readonly createdAt?: string | undefined;
	readonly createdBy?: string | undefined;
	readonly createdByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
	readonly lastModifiedAt?: string | undefined;
	readonly lastModifiedBy?: string | undefined;
	readonly lastModifiedByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
}
export interface WorkbookManagedIdentity {
	readonly type?: ("None" | "UserAssigned") | undefined;
	readonly userAssignedIdentities?: WorkbookUserAssignedIdentities | undefined;
}
export interface WorkbookProperties {
	readonly category: string;
	readonly description?: string | undefined;
	readonly displayName: string;
	readonly revision?: string | undefined;
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
	"workbooks/revisions": workbooks_revisions,
};
