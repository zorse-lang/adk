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
	readonly etag?: string;
	readonly identity?: WorkbookResourceIdentity;
	readonly kind?: "shared" | "user";
	readonly location: string;
	readonly name: string;
	readonly properties?: WorkbookProperties;
	readonly systemData?: SystemData;
	readonly tags?: TrackedResourceTags;
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
	readonly etag?: string;
	readonly identity?: WorkbookResourceIdentity;
	readonly kind?: "shared" | "user";
	readonly location?: string;
	readonly name: string;
	readonly properties?: WorkbookProperties;
	readonly systemData?: SystemData;
	readonly tags?: TrackedResourceTags;
}
export interface SystemData {
	readonly createdAt?: string;
	readonly createdBy?: string;
	readonly createdByType?: "Application" | "Key" | "ManagedIdentity" | "User";
	readonly lastModifiedAt?: string;
	readonly lastModifiedBy?: string;
	readonly lastModifiedByType?: "Application" | "Key" | "ManagedIdentity" | "User";
}
export interface TrackedResourceTags {
	readonly [key: string]: string;
}
export interface UserAssignedIdentities {
	readonly [key: string]: UserAssignedIdentity;
}
export interface UserAssignedIdentity {
	readonly clientId?: string;
	readonly principalId?: string;
}
export interface WorkbookProperties {
	readonly category: string;
	readonly description?: string;
	readonly displayName: string;
	readonly revision?: string;
	readonly serializedData: string;
	readonly sourceId?: string;
	readonly storageUri?: string;
	readonly tags?: string[];
	readonly timeModified?: string;
	readonly userId?: string;
	readonly version?: string;
}
export interface WorkbookResourceIdentity {
	readonly principalId?: string;
	readonly tenantId?: string;
	readonly type: "None" | "SystemAssigned" | "SystemAssigned,UserAssigned" | "UserAssigned";
	readonly userAssignedIdentities?: UserAssignedIdentities;
}
export default {
	workbooks: workbooks,
	"workbooks/revisions": workbooks_revisions,
};
