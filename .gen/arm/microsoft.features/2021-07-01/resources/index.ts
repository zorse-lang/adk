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
	readonly properties?: SubscriptionFeatureRegistrationProperties;
}
export interface AuthorizationProfile {
	readonly approvedTime?: string;
	readonly approver?: string;
	readonly requestedTime?: string;
	readonly requester?: string;
	readonly requesterObjectId?: string;
}
export interface SubscriptionFeatureRegistrationProperties {
	readonly approvalType?: "ApprovalRequired" | "AutoApproval" | "NotSpecified";
	readonly authorizationProfile?: AuthorizationProfile;
	readonly description?: string;
	readonly displayName?: string;
	readonly documentationLink?: string;
	readonly featureName?: string;
	readonly metadata?: SubscriptionFeatureRegistrationPropertiesMetadata;
	readonly providerNamespace?: string;
	readonly registrationDate?: string;
	readonly releaseDate?: string;
	readonly shouldFeatureDisplayInPortal?: boolean;
	readonly state?:
		| "NotRegistered"
		| "NotSpecified"
		| "Pending"
		| "Registered"
		| "Registering"
		| "Unregistered"
		| "Unregistering";
	readonly subscriptionId?: string;
	readonly tenantId?: string;
}
export interface SubscriptionFeatureRegistrationPropertiesMetadata {
	readonly [key: string]: string;
}
export default {
	"featureProviders/subscriptionFeatureRegistrations": featureProviders_subscriptionFeatureRegistrations,
};
