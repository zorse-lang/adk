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
	readonly properties?: PutAliasRequestPropertiesOrSubscriptionAliasResponseProperties;
	readonly systemData?: SystemData;
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
	readonly blockSubscriptionsIntoTenant?: boolean;
	readonly blockSubscriptionsLeavingTenant?: boolean;
	readonly exemptedPrincipals?: string[];
	readonly name: string;
	readonly properties?: TenantPolicy;
	readonly systemData?: SystemData;
}
export interface PutAliasRequestAdditionalProperties {
	readonly managementGroupId?: string;
	readonly subscriptionOwnerId?: string;
	readonly subscriptionTenantId?: string;
	readonly tags?: PutAliasRequestAdditionalPropertiesTags;
}
export interface PutAliasRequestAdditionalPropertiesTags {
	readonly [key: string]: string;
}
export interface PutAliasRequestPropertiesOrSubscriptionAliasResponseProperties {
	readonly acceptOwnershipState?: "Completed" | "Expired" | "Pending";
	readonly acceptOwnershipUrl?: string;
	readonly additionalProperties?: PutAliasRequestAdditionalProperties;
	readonly billingScope?: string;
	readonly createdTime?: string;
	readonly displayName?: string;
	readonly managementGroupId?: string;
	readonly provisioningState?: "Accepted" | "Failed" | "Succeeded";
	readonly resellerId?: string;
	readonly subscriptionId?: string;
	readonly subscriptionOwnerId?: string;
	readonly tags?: SubscriptionAliasResponsePropertiesTags;
	readonly workload?: "DevTest" | "Production";
}
export interface SubscriptionAliasResponsePropertiesTags {
	readonly [key: string]: string;
}
export interface SystemData {
	readonly createdAt?: string;
	readonly createdBy?: string;
	readonly createdByType?: "Application" | "Key" | "ManagedIdentity" | "User";
	readonly lastModifiedAt?: string;
	readonly lastModifiedBy?: string;
	readonly lastModifiedByType?: "Application" | "Key" | "ManagedIdentity" | "User";
}
export interface TenantPolicy {
	readonly blockSubscriptionsIntoTenant?: boolean;
	readonly blockSubscriptionsLeavingTenant?: boolean;
	readonly exemptedPrincipals?: string[];
	readonly policyId?: string;
}
export default {
	aliases: aliases,
	policies: policies,
};
