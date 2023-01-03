import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class workbooks extends ArmResource<workbooksComponentInputs> implements workbooksComponentOutputs {
	constructor(entity: ADKEntity, options: workbooksComponentInputs) {
		super(entity, options.name, "Microsoft.Insights/workbooks", "2021-08-01", options);
	}
	public readonly apiVersion: "2021-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.Insights/workbooks";
}
export interface workbooksComponentOutputs {
	readonly apiVersion: "2021-08-01";
	readonly id: string;
	readonly type: "Microsoft.Insights/workbooks";
}
export interface workbooksComponentInputs {
	readonly etag?: string | undefined;
	readonly identity?: WorkbookResourceIdentity | undefined;
	readonly kind?: ("shared" | "user") | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties?: WorkbookProperties | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: TrackedResourceTags | undefined;
}
export class workbooks_revisions
	extends ArmResource<workbooks_revisionsComponentInputs>
	implements workbooks_revisionsComponentOutputs
{
	constructor(entity: ADKEntity, options: workbooks_revisionsComponentInputs) {
		super(entity, options.name, "Microsoft.Insights/workbooks/revisions", "2021-08-01", options);
	}
	public readonly apiVersion: "2021-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.Insights/workbooks/revisions";
}
export interface workbooks_revisionsComponentOutputs {
	readonly apiVersion: "2021-08-01";
	readonly id: string;
	readonly type: "Microsoft.Insights/workbooks/revisions";
}
export interface workbooks_revisionsComponentInputs {
	readonly etag?: string | undefined;
	readonly identity?: WorkbookResourceIdentity | undefined;
	readonly kind?: ("shared" | "user") | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: WorkbookProperties | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: TrackedResourceTags | undefined;
}
export interface SystemData {
	readonly createdAt?: string | undefined;
	readonly createdBy?: string | undefined;
	readonly createdByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
	readonly lastModifiedAt?: string | undefined;
	readonly lastModifiedBy?: string | undefined;
	readonly lastModifiedByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
}
export interface TrackedResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface UserAssignedIdentities {
	readonly "[ key: string ]"?: UserAssignedIdentity | undefined;
}
export interface UserAssignedIdentity {
	readonly clientId?: string | undefined;
	readonly principalId?: string | undefined;
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
export interface WorkbookResourceIdentity {
	readonly principalId?: string | undefined;
	readonly tenantId?: string | undefined;
	readonly type: "None" | "SystemAssigned" | "SystemAssigned,UserAssigned" | "UserAssigned";
	readonly userAssignedIdentities?: UserAssignedIdentities | undefined;
}
export default {
	workbooks: workbooks,
	"workbooks/revisions": workbooks_revisions,
};
