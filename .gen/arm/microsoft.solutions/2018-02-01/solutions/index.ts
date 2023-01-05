import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class applicationDefinitions
	extends ArmResource<applicationDefinitionsComponentInputs>
	implements applicationDefinitionsComponentOutputs
{
	constructor(entity: ADKEntity, options: applicationDefinitionsComponentInputs) {
		super(entity, options.name, "Microsoft.Solutions/applicationDefinitions", "2018-02-01", options);
	}
	public readonly apiVersion: "2018-02-01";
	public readonly id: string;
	public readonly type: "Microsoft.Solutions/applicationDefinitions";
}
export interface applicationDefinitionsComponentOutputs {
	readonly apiVersion: "2018-02-01";
	readonly id: string;
	readonly type: "Microsoft.Solutions/applicationDefinitions";
}
export interface applicationDefinitionsComponentInputs {
	readonly location?: string;
	readonly managedBy?: string;
	readonly name: string;
	readonly properties: ApplicationDefinitionProperties;
	readonly sku?: Sku;
	readonly tags?: ResourceTags;
}
export class applications extends ArmResource<applicationsComponentInputs> implements applicationsComponentOutputs {
	constructor(entity: ADKEntity, options: applicationsComponentInputs) {
		super(entity, options.name, "Microsoft.Solutions/applications", "2018-02-01", options);
	}
	public readonly apiVersion: "2018-02-01";
	public readonly id: string;
	public readonly type: "Microsoft.Solutions/applications";
}
export interface applicationsComponentOutputs {
	readonly apiVersion: "2018-02-01";
	readonly id: string;
	readonly type: "Microsoft.Solutions/applications";
}
export interface applicationsComponentInputs {
	readonly identity?: Identity;
	readonly kind: string;
	readonly location?: string;
	readonly managedBy?: string;
	readonly name: string;
	readonly plan?: Plan;
	readonly properties: ApplicationProperties;
	readonly sku?: Sku;
	readonly tags?: ResourceTags;
}
export interface ApplicationArtifact {
	readonly name: "Authorizations" | "CustomRoleDefinition" | "NotSpecified" | "ViewDefinition";
	readonly type: "Custom" | "NotSpecified";
	readonly uri: string;
}
export interface ApplicationAuthorization {
	readonly principalId: string;
	readonly roleDefinitionId: string;
}
export interface ApplicationBillingDetailsDefinition {
	readonly resourceUsageId?: string;
}
export interface ApplicationClientDetails {
	readonly applicationId?: string;
	readonly oid?: string;
	readonly puid?: string;
}
export interface ApplicationDefinitionArtifact {
	readonly name: "ApplicationResourceTemplate" | "CreateUiDefinition" | "MainTemplateParameters" | "NotSpecified";
	readonly type: "Custom" | "NotSpecified";
	readonly uri: string;
}
export interface ApplicationDefinitionProperties {
	readonly artifacts?: ApplicationDefinitionArtifact[];
	readonly authorizations?: ApplicationAuthorization[];
	readonly createUiDefinition?: any;
	readonly description?: string;
	readonly displayName?: string;
	readonly isEnabled?: boolean;
	readonly lockLevel: "CanNotDelete" | "None";
	readonly mainTemplate?: any;
	readonly packageFileUri?: string;
	readonly policies?: ApplicationPolicy[];
}
export interface ApplicationPackageContact {
	readonly contactName?: string;
	readonly email: string;
	readonly phone: string;
}
export interface ApplicationPackageSupportUrls {
	readonly governmentCloud?: string;
	readonly publicAzure?: string;
}
export interface ApplicationPolicy {
	readonly name?: string;
	readonly parameters?: string;
	readonly policyDefinitionId?: string;
}
export interface ApplicationProperties {
	readonly applicationDefinitionId?: string;
	readonly artifacts?: ApplicationArtifact[];
	readonly authorizations?: ApplicationAuthorization[];
	readonly billingDetails?: ApplicationBillingDetailsDefinition;
	readonly createdBy?: ApplicationClientDetails;
	readonly customerSupport?: ApplicationPackageContact;
	readonly managedResourceGroupId?: string;
	readonly outputs?: any;
	readonly parameters?: any;
	readonly provisioningState?:
		| "Accepted"
		| "Canceled"
		| "Created"
		| "Creating"
		| "Deleted"
		| "Deleting"
		| "Failed"
		| "NotSpecified"
		| "Ready"
		| "Running"
		| "Succeeded"
		| "Updating";
	readonly publisherPackageId?: string;
	readonly publisherTenantId?: string;
	readonly supportUrls?: ApplicationPackageSupportUrls;
	readonly updatedBy?: ApplicationClientDetails;
}
export interface Identity {
	readonly principalId?: string;
	readonly tenantId?: string;
	readonly type?: "None" | "SystemAssigned" | "SystemAssigned, UserAssigned";
	readonly userAssignedIdentities?: IdentityUserAssignedIdentities;
}
export interface IdentityUserAssignedIdentities {
	readonly [key: string]: UserAssignedResourceIdentity;
}
export interface Plan {
	readonly name: string;
	readonly product: string;
	readonly promotionCode?: string;
	readonly publisher: string;
	readonly version: string;
}
export interface ResourceTags {
	readonly [key: string]: string;
}
export interface Sku {
	readonly capacity?: number;
	readonly family?: string;
	readonly model?: string;
	readonly name: string;
	readonly size?: string;
	readonly tier?: string;
}
export interface UserAssignedResourceIdentity {
	readonly principalId?: string;
	readonly tenantId?: string;
}
export default {
	applicationDefinitions: applicationDefinitions,
	applications: applications,
};
