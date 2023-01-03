import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class applicationDefinitions
	extends ArmResource<applicationDefinitionsComponentInputs>
	implements applicationDefinitionsComponentOutputs
{
	constructor(entity: ADKEntity, options: applicationDefinitionsComponentInputs) {
		super(entity, options.name, "Microsoft.Solutions/applicationDefinitions", "2021-02-01-preview", options);
	}
	public readonly apiVersion: "2021-02-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Solutions/applicationDefinitions";
}
export interface applicationDefinitionsComponentOutputs {
	readonly apiVersion: "2021-02-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Solutions/applicationDefinitions";
}
export interface applicationDefinitionsComponentInputs {
	readonly location?: string | undefined;
	readonly managedBy?: string | undefined;
	readonly name: string;
	readonly properties: ApplicationDefinitionProperties;
	readonly sku?: Sku | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: ResourceTags | undefined;
}
export class applications extends ArmResource<applicationsComponentInputs> implements applicationsComponentOutputs {
	constructor(entity: ADKEntity, options: applicationsComponentInputs) {
		super(entity, options.name, "Microsoft.Solutions/applications", "2021-02-01-preview", options);
	}
	public readonly apiVersion: "2021-02-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Solutions/applications";
}
export interface applicationsComponentOutputs {
	readonly apiVersion: "2021-02-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Solutions/applications";
}
export interface applicationsComponentInputs {
	readonly identity?: Identity | undefined;
	readonly kind: string;
	readonly location?: string | undefined;
	readonly managedBy?: string | undefined;
	readonly name: string;
	readonly plan?: Plan | undefined;
	readonly properties: ApplicationProperties;
	readonly sku?: Sku | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: ResourceTags | undefined;
}
export class jitRequests extends ArmResource<jitRequestsComponentInputs> implements jitRequestsComponentOutputs {
	constructor(entity: ADKEntity, options: jitRequestsComponentInputs) {
		super(entity, options.name, "Microsoft.Solutions/jitRequests", "2021-02-01-preview", options);
	}
	public readonly apiVersion: "2021-02-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Solutions/jitRequests";
}
export interface jitRequestsComponentOutputs {
	readonly apiVersion: "2021-02-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Solutions/jitRequests";
}
export interface jitRequestsComponentInputs {
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: JitRequestProperties | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: ResourceTags | undefined;
}
export function listAllowedUpgradePlans(resource: applications): AllowedUpgradePlansResult {
	if (resource.apiVersion !== "2021-02-01-preview") {
		throw new Error(`listAllowedUpgradePlans is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.Solutions/applications") {
		throw new Error(`listAllowedUpgradePlans is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export function listTokens(resource: applications, input: ListTokenRequest): ManagedIdentityTokenResult {
	if (resource.apiVersion !== "2021-02-01-preview") {
		throw new Error(`listTokens is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.Solutions/applications") {
		throw new Error(`listTokens is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export interface AllowedUpgradePlansResult {
	readonly value?: Plan[] | undefined;
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
	readonly resourceUsageId?: string | undefined;
}
export interface ApplicationClientDetails {
	readonly applicationId?: string | undefined;
	readonly oid?: string | undefined;
	readonly puid?: string | undefined;
}
export interface ApplicationDefinitionArtifact {
	readonly name: "ApplicationResourceTemplate" | "CreateUiDefinition" | "MainTemplateParameters" | "NotSpecified";
	readonly type: "Custom" | "NotSpecified";
	readonly uri: string;
}
export interface ApplicationDefinitionProperties {
	readonly artifacts?: ApplicationDefinitionArtifact[] | undefined;
	readonly authorizations?: ApplicationAuthorization[] | undefined;
	readonly createUiDefinition?: any | undefined;
	readonly deploymentPolicy?: ApplicationDeploymentPolicy | undefined;
	readonly description?: string | undefined;
	readonly displayName?: string | undefined;
	readonly isEnabled?: boolean | undefined;
	readonly lockingPolicy?: ApplicationPackageLockingPolicyDefinition | undefined;
	readonly lockLevel: "CanNotDelete" | "None";
	readonly mainTemplate?: any | undefined;
	readonly managementPolicy?: ApplicationManagementPolicy | undefined;
	readonly notificationPolicy?: ApplicationNotificationPolicy | undefined;
	readonly packageFileUri?: string | undefined;
	readonly policies?: ApplicationPolicy[] | undefined;
	readonly storageAccountId?: string | undefined;
}
export interface ApplicationDeploymentPolicy {
	readonly deploymentMode: "Complete" | "Incremental" | "NotSpecified";
}
export interface ApplicationJitAccessPolicy {
	readonly jitAccessEnabled: boolean;
	readonly jitApprovalMode?: ("AutoApprove" | "ManualApprove" | "NotSpecified") | undefined;
	readonly jitApprovers?: JitApproverDefinition[] | undefined;
	readonly maximumJitAccessDuration?: string | undefined;
}
export interface ApplicationManagementPolicy {
	readonly mode?: ("Managed" | "NotSpecified" | "Unmanaged") | undefined;
}
export interface ApplicationNotificationEndpoint {
	readonly uri: string;
}
export interface ApplicationNotificationPolicy {
	readonly notificationEndpoints: ApplicationNotificationEndpoint[];
}
export interface ApplicationPackageContact {
	readonly contactName?: string | undefined;
	readonly email: string;
	readonly phone: string;
}
export interface ApplicationPackageLockingPolicyDefinition {
	readonly allowedActions?: string[] | undefined;
	readonly allowedDataActions?: string[] | undefined;
}
export interface ApplicationPackageSupportUrls {
	readonly governmentCloud?: string | undefined;
	readonly publicAzure?: string | undefined;
}
export interface ApplicationPolicy {
	readonly name?: string | undefined;
	readonly parameters?: string | undefined;
	readonly policyDefinitionId?: string | undefined;
}
export interface ApplicationProperties {
	readonly applicationDefinitionId?: string | undefined;
	readonly artifacts?: ApplicationArtifact[] | undefined;
	readonly authorizations?: ApplicationAuthorization[] | undefined;
	readonly billingDetails?: ApplicationBillingDetailsDefinition | undefined;
	readonly createdBy?: ApplicationClientDetails | undefined;
	readonly customerSupport?: ApplicationPackageContact | undefined;
	readonly jitAccessPolicy?: ApplicationJitAccessPolicy | undefined;
	readonly managedResourceGroupId?: string | undefined;
	readonly managementMode?: ("Managed" | "NotSpecified" | "Unmanaged") | undefined;
	readonly outputs?: any | undefined;
	readonly parameters?: any | undefined;
	readonly provisioningState?:
		| (
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
				| "Updating"
		  )
		| undefined;
	readonly publisherTenantId?: string | undefined;
	readonly supportUrls?: ApplicationPackageSupportUrls | undefined;
	readonly updatedBy?: ApplicationClientDetails | undefined;
}
export interface Identity {
	readonly principalId?: string | undefined;
	readonly tenantId?: string | undefined;
	readonly type?: ("None" | "SystemAssigned" | "SystemAssigned, UserAssigned") | undefined;
	readonly userAssignedIdentities?: IdentityUserAssignedIdentities | undefined;
}
export interface IdentityUserAssignedIdentities {
	readonly "[ key: string ]"?: UserAssignedResourceIdentity | undefined;
}
export interface JitApproverDefinition {
	readonly displayName?: string | undefined;
	readonly id: string;
	readonly type?: ("group" | "user") | undefined;
}
export interface JitAuthorizationPolicies {
	readonly principalId: string;
	readonly roleDefinitionId: string;
}
export interface JitRequestProperties {
	readonly applicationResourceId: string;
	readonly createdBy?: ApplicationClientDetails | undefined;
	readonly jitAuthorizationPolicies: JitAuthorizationPolicies[];
	readonly jitRequestState?:
		| ("Approved" | "Canceled" | "Denied" | "Expired" | "Failed" | "NotSpecified" | "Pending" | "Timeout")
		| undefined;
	readonly jitSchedulingPolicy: JitSchedulingPolicy;
	readonly provisioningState?:
		| (
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
				| "Updating"
		  )
		| undefined;
	readonly publisherTenantId?: string | undefined;
	readonly updatedBy?: ApplicationClientDetails | undefined;
}
export interface JitSchedulingPolicy {
	readonly duration: string;
	readonly startTime: string;
	readonly type: "NotSpecified" | "Once" | "Recurring";
}
export interface ListTokenRequest {
	readonly authorizationAudience?: string | undefined;
	readonly userAssignedIdentities?: string[] | undefined;
}
export interface ManagedIdentityToken {
	readonly accessToken?: string | undefined;
	readonly authorizationAudience?: string | undefined;
	readonly expiresIn?: string | undefined;
	readonly expiresOn?: string | undefined;
	readonly notBefore?: string | undefined;
	readonly resourceId?: string | undefined;
	readonly tokenType?: string | undefined;
}
export interface ManagedIdentityTokenResult {
	readonly value?: ManagedIdentityToken[] | undefined;
}
export interface Plan {
	readonly name: string;
	readonly product: string;
	readonly promotionCode?: string | undefined;
	readonly publisher: string;
	readonly version: string;
}
export interface ResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface Sku {
	readonly capacity?: number | undefined;
	readonly family?: string | undefined;
	readonly model?: string | undefined;
	readonly name: string;
	readonly size?: string | undefined;
	readonly tier?: string | undefined;
}
export interface SystemData {
	readonly createdAt?: string | undefined;
	readonly createdBy?: string | undefined;
	readonly createdByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
	readonly lastModifiedAt?: string | undefined;
	readonly lastModifiedBy?: string | undefined;
	readonly lastModifiedByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
}
export interface UserAssignedResourceIdentity {
	readonly principalId?: string | undefined;
	readonly tenantId?: string | undefined;
}
export default {
	applicationDefinitions: applicationDefinitions,
	applications: applications,
	jitRequests: jitRequests,
};
