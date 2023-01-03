import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class featureProviders_subscriptionFeatureRegistrations
	extends ArmResource<featureProviders_subscriptionFeatureRegistrationsComponentInputs>
	implements featureProviders_subscriptionFeatureRegistrationsComponentOutputs
{
	constructor(entity: ADKEntity, options: featureProviders_subscriptionFeatureRegistrationsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.Features/featureProviders/subscriptionFeatureRegistrations",
			"2021-07-01",
			options,
		);
	}
	public readonly apiVersion: "2021-07-01";
	public readonly id: string;
	public readonly type: "Microsoft.Features/featureProviders/subscriptionFeatureRegistrations";
}
export interface featureProviders_subscriptionFeatureRegistrationsComponentOutputs {
	readonly apiVersion: "2021-07-01";
	readonly id: string;
	readonly type: "Microsoft.Features/featureProviders/subscriptionFeatureRegistrations";
}
export interface featureProviders_subscriptionFeatureRegistrationsComponentInputs {
	readonly name: string;
	readonly properties?: SubscriptionFeatureRegistrationProperties | undefined;
}
export interface AuthorizationProfile {
	readonly approvedTime?: string | undefined;
	readonly approver?: string | undefined;
	readonly requestedTime?: string | undefined;
	readonly requester?: string | undefined;
	readonly requesterObjectId?: string | undefined;
}
export interface SubscriptionFeatureRegistrationProperties {
	readonly approvalType?: ("ApprovalRequired" | "AutoApproval" | "NotSpecified") | undefined;
	readonly authorizationProfile?: AuthorizationProfile | undefined;
	readonly description?: string | undefined;
	readonly displayName?: string | undefined;
	readonly documentationLink?: string | undefined;
	readonly featureName?: string | undefined;
	readonly metadata?: SubscriptionFeatureRegistrationPropertiesMetadata | undefined;
	readonly providerNamespace?: string | undefined;
	readonly registrationDate?: string | undefined;
	readonly releaseDate?: string | undefined;
	readonly shouldFeatureDisplayInPortal?: boolean | undefined;
	readonly state?:
		| ("NotRegistered" | "NotSpecified" | "Pending" | "Registered" | "Registering" | "Unregistered" | "Unregistering")
		| undefined;
	readonly subscriptionId?: string | undefined;
	readonly tenantId?: string | undefined;
}
export interface SubscriptionFeatureRegistrationPropertiesMetadata {
	readonly "[ key: string ]"?: string | undefined;
}
export default {
	"featureProviders/subscriptionFeatureRegistrations": featureProviders_subscriptionFeatureRegistrations,
};
