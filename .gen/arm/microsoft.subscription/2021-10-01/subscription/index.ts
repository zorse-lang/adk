import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class aliases extends ArmResource<aliasesComponentInputs> implements aliasesComponentOutputs {
	constructor(entity: ADKEntity, options: aliasesComponentInputs) {
		super(entity, options.name, "Microsoft.Subscription/aliases", "2021-10-01", options);
	}
	public readonly apiVersion: "2021-10-01";
	public readonly id: string;
	public readonly type: "Microsoft.Subscription/aliases";
}
export interface aliasesComponentOutputs {
	readonly apiVersion: "2021-10-01";
	readonly id: string;
	readonly type: "Microsoft.Subscription/aliases";
}
export interface aliasesComponentInputs {
	readonly name: string;
	readonly properties?: PutAliasRequestPropertiesOrSubscriptionAliasResponseProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export class policies extends ArmResource<policiesComponentInputs> implements policiesComponentOutputs {
	constructor(entity: ADKEntity, options: policiesComponentInputs) {
		super(entity, options.name, "Microsoft.Subscription/policies", "2021-10-01", options);
	}
	public readonly apiVersion: "2021-10-01";
	public readonly id: string;
	public readonly type: "Microsoft.Subscription/policies";
}
export interface policiesComponentOutputs {
	readonly apiVersion: "2021-10-01";
	readonly id: string;
	readonly type: "Microsoft.Subscription/policies";
}
export interface policiesComponentInputs {
	readonly blockSubscriptionsIntoTenant?: boolean | undefined;
	readonly blockSubscriptionsLeavingTenant?: boolean | undefined;
	readonly exemptedPrincipals?: string[] | undefined;
	readonly name: string;
	readonly properties?: TenantPolicy | undefined;
	readonly systemData?: SystemData | undefined;
}
export interface PutAliasRequestAdditionalProperties {
	readonly managementGroupId?: string | undefined;
	readonly subscriptionOwnerId?: string | undefined;
	readonly subscriptionTenantId?: string | undefined;
	readonly tags?: PutAliasRequestAdditionalPropertiesTags | undefined;
}
export interface PutAliasRequestAdditionalPropertiesTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface PutAliasRequestPropertiesOrSubscriptionAliasResponseProperties {
	readonly acceptOwnershipState?: ("Completed" | "Expired" | "Pending") | undefined;
	readonly acceptOwnershipUrl?: string | undefined;
	readonly additionalProperties?: PutAliasRequestAdditionalProperties | undefined;
	readonly billingScope?: string | undefined;
	readonly createdTime?: string | undefined;
	readonly displayName?: string | undefined;
	readonly managementGroupId?: string | undefined;
	readonly provisioningState?: ("Accepted" | "Failed" | "Succeeded") | undefined;
	readonly resellerId?: string | undefined;
	readonly subscriptionId?: string | undefined;
	readonly subscriptionOwnerId?: string | undefined;
	readonly tags?: SubscriptionAliasResponsePropertiesTags | undefined;
	readonly workload?: ("DevTest" | "Production") | undefined;
}
export interface SubscriptionAliasResponsePropertiesTags {
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
export interface TenantPolicy {
	readonly blockSubscriptionsIntoTenant?: boolean | undefined;
	readonly blockSubscriptionsLeavingTenant?: boolean | undefined;
	readonly exemptedPrincipals?: string[] | undefined;
	readonly policyId?: string | undefined;
}
export default {
	aliases: aliases,
	policies: policies,
};
