import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class agreements extends ArmResource<agreementsComponentInputs> implements agreementsComponentOutputs {
	constructor(entity: ADKEntity, options: agreementsComponentInputs) {
		super(entity, options.name, "Microsoft.Confluent/agreements", "2020-03-01", options);
	}
	public readonly apiVersion: "2020-03-01";
	public readonly id: string;
	public readonly type: "Microsoft.Confluent/agreements";
}
export interface agreementsComponentOutputs {
	readonly apiVersion: "2020-03-01";
	readonly id: string;
	readonly type: "Microsoft.Confluent/agreements";
}
export interface agreementsComponentInputs {
	readonly name: string;
	readonly properties?: ConfluentAgreementProperties | undefined;
}
export class organizations extends ArmResource<organizationsComponentInputs> implements organizationsComponentOutputs {
	constructor(entity: ADKEntity, options: organizationsComponentInputs) {
		super(entity, options.name, "Microsoft.Confluent/organizations", "2020-03-01", options);
	}
	public readonly apiVersion: "2020-03-01";
	public readonly id: string;
	public readonly type: "Microsoft.Confluent/organizations";
}
export interface organizationsComponentOutputs {
	readonly apiVersion: "2020-03-01";
	readonly id: string;
	readonly type: "Microsoft.Confluent/organizations";
}
export interface organizationsComponentInputs {
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: OrganizationResourceProperties | undefined;
	readonly tags?: OrganizationResourceTags | undefined;
}
export interface ConfluentAgreementProperties {
	readonly accepted?: boolean | undefined;
	readonly licenseTextLink?: string | undefined;
	readonly plan?: string | undefined;
	readonly privacyPolicyLink?: string | undefined;
	readonly product?: string | undefined;
	readonly publisher?: string | undefined;
	readonly retrieveDatetime?: string | undefined;
	readonly signature?: string | undefined;
}
export interface OrganizationResourceProperties {
	readonly createdTime?: string | undefined;
	readonly offerDetail?: OrganizationResourcePropertiesOfferDetail | undefined;
	readonly organizationId?: string | undefined;
	readonly provisioningState?:
		| (
				| "Accepted"
				| "Canceled"
				| "Creating"
				| "Deleted"
				| "Deleting"
				| "Failed"
				| "NotSpecified"
				| "Succeeded"
				| "Updating"
		  )
		| undefined;
	readonly ssoUrl?: string | undefined;
	readonly userDetail?: OrganizationResourcePropertiesUserDetail | undefined;
}
export interface OrganizationResourcePropertiesOfferDetail {
	readonly id?: string | undefined;
	readonly planId?: string | undefined;
	readonly planName?: string | undefined;
	readonly publisherId?: string | undefined;
	readonly status?:
		| (
				| "Failed"
				| "InProgress"
				| "PendingFulfillmentStart"
				| "Reinstated"
				| "Started"
				| "Subscribed"
				| "Succeeded"
				| "Suspended"
				| "Unsubscribed"
				| "Updating"
		  )
		| undefined;
	readonly termUnit?: string | undefined;
}
export interface OrganizationResourcePropertiesUserDetail {
	readonly emailAddress?: string | undefined;
	readonly firstName?: string | undefined;
	readonly lastName?: string | undefined;
}
export interface OrganizationResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export default {
	agreements: agreements,
	organizations: organizations,
};
