import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class applicationDefinitions
	extends ArmResource<applicationDefinitionsComponentInputs>
	implements applicationDefinitionsComponentOutputs
{
	constructor(entity: ADKEntity, options: applicationDefinitionsComponentInputs) {
		super(entity, options.name, "Microsoft.Solutions/applicationDefinitions", "2019-07-01", options);
	}
	public readonly apiVersion: "2019-07-01";
	public readonly id: string;
	public readonly type: "Microsoft.Solutions/applicationDefinitions";
}
export interface applicationDefinitionsComponentOutputs {
	readonly apiVersion: "2019-07-01";
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
		super(entity, options.name, "Microsoft.Solutions/applications", "2019-07-01", options);
	}
	public readonly apiVersion: "2019-07-01";
	public readonly id: string;
	public readonly type: "Microsoft.Solutions/applications";
}
export interface applicationsComponentOutputs {
	readonly apiVersion: "2019-07-01";
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
export class jitRequests extends ArmResource<jitRequestsComponentInputs> implements jitRequestsComponentOutputs {
	constructor(entity: ADKEntity, options: jitRequestsComponentInputs) {
		super(entity, options.name, "Microsoft.Solutions/jitRequests", "2019-07-01", options);
	}
	public readonly apiVersion: "2019-07-01";
	public readonly id: string;
	public readonly type: "Microsoft.Solutions/jitRequests";
}
export interface jitRequestsComponentOutputs {
	readonly apiVersion: "2019-07-01";
	readonly id: string;
	readonly type: "Microsoft.Solutions/jitRequests";
}
export interface jitRequestsComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly properties?: JitRequestProperties;
	readonly tags?: ResourceTags;
}
export function listAllowedUpgradePlans(resource: applications): AllowedUpgradePlansResult {
	if (resource.apiVersion !== "2019-07-01") {
		throw new Error(`listAllowedUpgradePlans is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.Solutions/applications") {
		throw new Error(`listAllowedUpgradePlans is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export function listTokens(resource: applications, input: ListTokenRequest): ManagedIdentityTokenResult {
	if (resource.apiVersion !== "2019-07-01") {
		throw new Error(`listTokens is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.Solutions/applications") {
		throw new Error(`listTokens is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export interface AllowedUpgradePlansResult {
	readonly value?: Plan[];
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
	readonly deploymentPolicy?: ApplicationDeploymentPolicy;
	readonly description?: string;
	readonly displayName?: string;
	readonly isEnabled?: boolean;
	readonly lockingPolicy?: ApplicationPackageLockingPolicyDefinition;
	readonly lockLevel: "CanNotDelete" | "None";
	readonly mainTemplate?: any;
	readonly managementPolicy?: ApplicationManagementPolicy;
	readonly notificationPolicy?: ApplicationNotificationPolicy;
	readonly packageFileUri?: string;
	readonly policies?: ApplicationPolicy[];
	readonly storageAccountId?: string;
}
export interface ApplicationDeploymentPolicy {
	readonly deploymentMode: "Complete" | "Incremental" | "NotSpecified";
}
export interface ApplicationJitAccessPolicy {
	readonly jitAccessEnabled: boolean;
	readonly jitApprovalMode?: "AutoApprove" | "ManualApprove" | "NotSpecified";
	readonly jitApprovers?: JitApproverDefinition[];
	readonly maximumJitAccessDuration?: string;
}
export interface ApplicationManagementPolicy {
	readonly mode?: "Managed" | "NotSpecified" | "Unmanaged";
}
export interface ApplicationNotificationEndpoint {
	readonly uri: string;
}
export interface ApplicationNotificationPolicy {
	readonly notificationEndpoints: ApplicationNotificationEndpoint[];
}
export interface ApplicationPackageContact {
	readonly contactName?: string;
	readonly email: string;
	readonly phone: string;
}
export interface ApplicationPackageLockingPolicyDefinition {
	readonly allowedActions?: string[];
	readonly allowedDataActions?: string[];
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
	readonly jitAccessPolicy?: ApplicationJitAccessPolicy;
	readonly managedResourceGroupId?: string;
	readonly managementMode?: "Managed" | "NotSpecified" | "Unmanaged";
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
export interface JitApproverDefinition {
	readonly displayName?: string;
	readonly id: string;
	readonly type?: "group" | "user";
}
export interface JitAuthorizationPolicies {
	readonly principalId: string;
	readonly roleDefinitionId: string;
}
export interface JitRequestProperties {
	readonly applicationResourceId: string;
	readonly createdBy?: ApplicationClientDetails;
	readonly jitAuthorizationPolicies: JitAuthorizationPolicies[];
	readonly jitRequestState?:
		| "Approved"
		| "Canceled"
		| "Denied"
		| "Expired"
		| "Failed"
		| "NotSpecified"
		| "Pending"
		| "Timeout";
	readonly jitSchedulingPolicy: JitSchedulingPolicy;
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
	readonly publisherTenantId?: string;
	readonly updatedBy?: ApplicationClientDetails;
}
export interface JitSchedulingPolicy {
	readonly duration: string;
	readonly startTime: string;
	readonly type: "NotSpecified" | "Once" | "Recurring";
}
export interface ListTokenRequest {
	readonly authorizationAudience?: string;
	readonly userAssignedIdentities?: string[];
}
export interface ManagedIdentityToken {
	readonly accessToken?: string;
	readonly authorizationAudience?: string;
	readonly expiresIn?: string;
	readonly expiresOn?: string;
	readonly notBefore?: string;
	readonly resourceId?: string;
	readonly tokenType?: string;
}
export interface ManagedIdentityTokenResult {
	readonly value?: ManagedIdentityToken[];
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
	jitRequests: jitRequests,
};
