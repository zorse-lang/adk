import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class agreements extends ArmResource<agreementsComponentInputs> implements agreementsComponentOutputs {
	constructor(entity: ADKEntity, options: agreementsComponentInputs) {
		super(entity, options.name, "Microsoft.Confluent/agreements", "2021-09-01-preview", options);
	}
	public readonly apiVersion: "2021-09-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Confluent/agreements";
}
export interface agreementsComponentOutputs {
	readonly apiVersion: "2021-09-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Confluent/agreements";
}
export interface agreementsComponentInputs {
	readonly name: string;
	readonly properties?: ConfluentAgreementProperties;
	readonly systemData?: SystemData;
}
export class organizations extends ArmResource<organizationsComponentInputs> implements organizationsComponentOutputs {
	constructor(entity: ADKEntity, options: organizationsComponentInputs) {
		super(entity, options.name, "Microsoft.Confluent/organizations", "2021-09-01-preview", options);
	}
	public readonly apiVersion: "2021-09-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Confluent/organizations";
}
export interface organizationsComponentOutputs {
	readonly apiVersion: "2021-09-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Confluent/organizations";
}
export interface organizationsComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly properties: OrganizationResourceProperties;
	readonly systemData?: SystemData;
	readonly tags?: OrganizationResourceTags;
}
export interface ConfluentAgreementProperties {
	readonly accepted?: boolean;
	readonly licenseTextLink?: string;
	readonly plan?: string;
	readonly privacyPolicyLink?: string;
	readonly product?: string;
	readonly publisher?: string;
	readonly retrieveDatetime?: string;
	readonly signature?: string;
}
export interface OfferDetail {
	readonly id: string;
	readonly planId: string;
	readonly planName: string;
	readonly publisherId: string;
	readonly status?:
		| "Failed"
		| "InProgress"
		| "PendingFulfillmentStart"
		| "Reinstated"
		| "Started"
		| "Subscribed"
		| "Succeeded"
		| "Suspended"
		| "Unsubscribed"
		| "Updating";
	readonly termUnit: string;
}
export interface OrganizationResourceProperties {
	readonly createdTime?: string;
	readonly offerDetail: OfferDetail;
	readonly organizationId?: string;
	readonly provisioningState?:
		| "Accepted"
		| "Canceled"
		| "Creating"
		| "Deleted"
		| "Deleting"
		| "Failed"
		| "NotSpecified"
		| "Succeeded"
		| "Updating";
	readonly ssoUrl?: string;
	readonly userDetail: UserDetail;
}
export interface OrganizationResourceTags {
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
export interface UserDetail {
	readonly emailAddress: string;
	readonly firstName?: string;
	readonly lastName?: string;
}
export default {
	agreements: agreements,
	organizations: organizations,
};
