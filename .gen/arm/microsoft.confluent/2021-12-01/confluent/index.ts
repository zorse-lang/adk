import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class agreements extends ArmResource<agreementsComponentInputs> implements agreementsComponentOutputs {
	constructor(entity: ADKEntity, options: agreementsComponentInputs) {
		super(entity, options.name, "Microsoft.Confluent/agreements", "2021-12-01", options);
	}
	public readonly apiVersion: "2021-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.Confluent/agreements";
}
export interface agreementsComponentOutputs {
	readonly apiVersion: "2021-12-01";
	readonly id: string;
	readonly type: "Microsoft.Confluent/agreements";
}
export interface agreementsComponentInputs {
	readonly name: string;
	readonly properties?: ConfluentAgreementProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export class organizations extends ArmResource<organizationsComponentInputs> implements organizationsComponentOutputs {
	constructor(entity: ADKEntity, options: organizationsComponentInputs) {
		super(entity, options.name, "Microsoft.Confluent/organizations", "2021-12-01", options);
	}
	public readonly apiVersion: "2021-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.Confluent/organizations";
}
export interface organizationsComponentOutputs {
	readonly apiVersion: "2021-12-01";
	readonly id: string;
	readonly type: "Microsoft.Confluent/organizations";
}
export interface organizationsComponentInputs {
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties: OrganizationResourceProperties;
	readonly systemData?: SystemData | undefined;
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
export interface OfferDetail {
	readonly id: string;
	readonly planId: string;
	readonly planName: string;
	readonly publisherId: string;
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
	readonly termUnit: string;
}
export interface OrganizationResourceProperties {
	readonly createdTime?: string | undefined;
	readonly offerDetail: OfferDetail;
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
	readonly userDetail: UserDetail;
}
export interface OrganizationResourceTags {
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
export interface UserDetail {
	readonly emailAddress: string;
	readonly firstName?: string | undefined;
	readonly lastName?: string | undefined;
}
export default {
	agreements: agreements,
	organizations: organizations,
};
