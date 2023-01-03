import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class domains extends ArmResource<domainsComponentInputs> implements domainsComponentOutputs {
	constructor(entity: ADKEntity, options: domainsComponentInputs) {
		super(entity, options.name, "Microsoft.DomainRegistration/domains", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.DomainRegistration/domains";
}
export interface domainsComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.DomainRegistration/domains";
}
export interface domainsComponentInputs {
	readonly kind?: string | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties?: DomainProperties | undefined;
	readonly tags?: ResourceTags | undefined;
}
export class domains_domainOwnershipIdentifiers
	extends ArmResource<domains_domainOwnershipIdentifiersComponentInputs>
	implements domains_domainOwnershipIdentifiersComponentOutputs
{
	constructor(entity: ADKEntity, options: domains_domainOwnershipIdentifiersComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.DomainRegistration/domains/domainOwnershipIdentifiers",
			"2020-12-01",
			options,
		);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.DomainRegistration/domains/domainOwnershipIdentifiers";
}
export interface domains_domainOwnershipIdentifiersComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.DomainRegistration/domains/domainOwnershipIdentifiers";
}
export interface domains_domainOwnershipIdentifiersComponentInputs {
	readonly kind?: string | undefined;
	readonly name: string;
	readonly properties?: DomainOwnershipIdentifierProperties | undefined;
}
export class topLevelDomains
	extends ArmResource<topLevelDomainsComponentInputs>
	implements topLevelDomainsComponentOutputs
{
	constructor(entity: ADKEntity, options: topLevelDomainsComponentInputs) {
		super(entity, options.name, "Microsoft.DomainRegistration/topLevelDomains", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.DomainRegistration/topLevelDomains";
}
export interface topLevelDomainsComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.DomainRegistration/topLevelDomains";
}
export interface topLevelDomainsComponentInputs {
	readonly kind?: string | undefined;
	readonly name: string;
	readonly properties?: TopLevelDomainProperties | undefined;
}
export function listAgreements(
	resource: topLevelDomains,
	input: TopLevelDomainAgreementOption,
): TldLegalAgreementCollection {
	if (resource.apiVersion !== "2020-12-01") {
		throw new Error(`listAgreements is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.DomainRegistration/topLevelDomains") {
		throw new Error(`listAgreements is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export interface Address {
	readonly address1: string;
	readonly address2?: string | undefined;
	readonly city: string;
	readonly country: string;
	readonly postalCode: string;
	readonly state: string;
}
export interface Contact {
	readonly addressMailing?: Address | undefined;
	readonly email: string;
	readonly fax?: string | undefined;
	readonly jobTitle?: string | undefined;
	readonly nameFirst: string;
	readonly nameLast: string;
	readonly nameMiddle?: string | undefined;
	readonly organization?: string | undefined;
	readonly phone: string;
}
export interface DomainOwnershipIdentifierProperties {
	readonly ownershipId?: string | undefined;
}
export interface DomainProperties {
	readonly authCode?: string | undefined;
	readonly autoRenew?: boolean | undefined;
	readonly consent: DomainPurchaseConsent;
	readonly contactAdmin: Contact;
	readonly contactBilling: Contact;
	readonly contactRegistrant: Contact;
	readonly contactTech: Contact;
	readonly createdTime?: string | undefined;
	readonly dnsType?: "AzureDns" | undefined;
	readonly dnsZoneId?: string | undefined;
	readonly domainNotRenewableReasons?:
		| ("ExpirationNotInRenewalTimeRange" | "RegistrationStatusNotSupportedForRenewal" | "SubscriptionNotActive"[])
		| undefined;
	readonly expirationTime?: string | undefined;
	readonly lastRenewedTime?: string | undefined;
	readonly managedHostNames?: HostName[] | undefined;
	readonly nameServers?: string[] | undefined;
	readonly privacy?: boolean | undefined;
	readonly provisioningState?: ("Canceled" | "Deleting" | "Failed" | "InProgress") | undefined;
	readonly readyForDnsRecordManagement?: boolean | undefined;
	readonly registrationStatus?:
		| (
				| "Active"
				| "Awaiting"
				| "Cancelled"
				| "Confiscated"
				| "Disabled"
				| "Excluded"
				| "Expired"
				| "Failed"
				| "Held"
				| "JsonConverterFailed"
				| "Locked"
				| "Parked"
				| "Pending"
				| "Reserved"
				| "Reverted"
				| "Suspended"
				| "Transferred"
				| "Unknown"
				| "Unlocked"
				| "Unparked"
		  )
		| undefined;
	readonly targetDnsType?: "AzureDns" | undefined;
}
export interface DomainPurchaseConsent {
	readonly agreedAt?: string | undefined;
	readonly agreedBy?: string | undefined;
	readonly agreementKeys?: string[] | undefined;
}
export interface HostName {
	readonly azureResourceName?: string | undefined;
	readonly azureResourceType?: "TrafficManager" | undefined;
	readonly customHostNameDnsRecordType?: "A" | undefined;
	readonly hostNameType?: "Managed" | undefined;
	readonly name?: string | undefined;
	readonly siteNames?: string[] | undefined;
}
export interface ResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface TldLegalAgreement {
	readonly agreementKey: string;
	readonly content: string;
	readonly title: string;
	readonly url?: string | undefined;
}
export interface TldLegalAgreementCollection {
	readonly nextLink?: string | undefined;
	readonly value: TldLegalAgreement[];
}
export interface TopLevelDomainAgreementOption {
	readonly forTransfer?: boolean | undefined;
	readonly includePrivacy?: boolean | undefined;
}
export interface TopLevelDomainProperties {
	readonly privacy?: boolean | undefined;
}
export default {
	domains: domains,
	"domains/domainOwnershipIdentifiers": domains_domainOwnershipIdentifiers,
	topLevelDomains: topLevelDomains,
};
