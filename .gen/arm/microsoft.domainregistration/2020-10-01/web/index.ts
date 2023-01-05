import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class domains extends ArmResource<domainsComponentInputs> implements domainsComponentOutputs {
	constructor(entity: ADKEntity, options: domainsComponentInputs) {
		super(entity, options.name, "Microsoft.DomainRegistration/domains", "2020-10-01", options);
	}
	public readonly apiVersion: "2020-10-01";
	public readonly id: string;
	public readonly type: "Microsoft.DomainRegistration/domains";
}
export interface domainsComponentOutputs {
	readonly apiVersion: "2020-10-01";
	readonly id: string;
	readonly type: "Microsoft.DomainRegistration/domains";
}
export interface domainsComponentInputs {
	readonly kind?: string;
	readonly location: string;
	readonly name: string;
	readonly properties?: DomainProperties;
	readonly systemData?: SystemData;
	readonly tags?: ResourceTags;
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
			"2020-10-01",
			options,
		);
	}
	public readonly apiVersion: "2020-10-01";
	public readonly id: string;
	public readonly type: "Microsoft.DomainRegistration/domains/domainOwnershipIdentifiers";
}
export interface domains_domainOwnershipIdentifiersComponentOutputs {
	readonly apiVersion: "2020-10-01";
	readonly id: string;
	readonly type: "Microsoft.DomainRegistration/domains/domainOwnershipIdentifiers";
}
export interface domains_domainOwnershipIdentifiersComponentInputs {
	readonly kind?: string;
	readonly name: string;
	readonly properties?: DomainOwnershipIdentifierProperties;
	readonly systemData?: SystemData;
}
export class topLevelDomains
	extends ArmResource<topLevelDomainsComponentInputs>
	implements topLevelDomainsComponentOutputs
{
	constructor(entity: ADKEntity, options: topLevelDomainsComponentInputs) {
		super(entity, options.name, "Microsoft.DomainRegistration/topLevelDomains", "2020-10-01", options);
	}
	public readonly apiVersion: "2020-10-01";
	public readonly id: string;
	public readonly type: "Microsoft.DomainRegistration/topLevelDomains";
}
export interface topLevelDomainsComponentOutputs {
	readonly apiVersion: "2020-10-01";
	readonly id: string;
	readonly type: "Microsoft.DomainRegistration/topLevelDomains";
}
export interface topLevelDomainsComponentInputs {
	readonly kind?: string;
	readonly name: string;
	readonly properties?: TopLevelDomainProperties;
	readonly systemData?: SystemData;
}
export function listAgreements(
	resource: topLevelDomains,
	input: TopLevelDomainAgreementOption,
): TldLegalAgreementCollection {
	if (resource.apiVersion !== "2020-10-01") {
		throw new Error(`listAgreements is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.DomainRegistration/topLevelDomains") {
		throw new Error(`listAgreements is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export interface Address {
	readonly address1: string;
	readonly address2?: string;
	readonly city: string;
	readonly country: string;
	readonly postalCode: string;
	readonly state: string;
}
export interface Contact {
	readonly addressMailing?: Address;
	readonly email: string;
	readonly fax?: string;
	readonly jobTitle?: string;
	readonly nameFirst: string;
	readonly nameLast: string;
	readonly nameMiddle?: string;
	readonly organization?: string;
	readonly phone: string;
}
export interface DomainOwnershipIdentifierProperties {
	readonly ownershipId?: string;
}
export interface DomainProperties {
	readonly authCode?: string;
	readonly autoRenew?: boolean;
	readonly consent: DomainPurchaseConsent;
	readonly contactAdmin: Contact;
	readonly contactBilling: Contact;
	readonly contactRegistrant: Contact;
	readonly contactTech: Contact;
	readonly createdTime?: string;
	readonly dnsType?: "AzureDns";
	readonly dnsZoneId?: string;
	readonly domainNotRenewableReasons?:
		| "ExpirationNotInRenewalTimeRange"
		| "RegistrationStatusNotSupportedForRenewal"
		| "SubscriptionNotActive"[];
	readonly expirationTime?: string;
	readonly lastRenewedTime?: string;
	readonly managedHostNames?: HostName[];
	readonly nameServers?: string[];
	readonly privacy?: boolean;
	readonly provisioningState?: "Canceled" | "Deleting" | "Failed" | "InProgress";
	readonly readyForDnsRecordManagement?: boolean;
	readonly registrationStatus?:
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
		| "Unparked";
	readonly targetDnsType?: "AzureDns";
}
export interface DomainPurchaseConsent {
	readonly agreedAt?: string;
	readonly agreedBy?: string;
	readonly agreementKeys?: string[];
}
export interface HostName {
	readonly azureResourceName?: string;
	readonly azureResourceType?: "TrafficManager";
	readonly customHostNameDnsRecordType?: "A";
	readonly hostNameType?: "Managed";
	readonly name?: string;
	readonly siteNames?: string[];
}
export interface ResourceTags {
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
export interface TldLegalAgreement {
	readonly agreementKey: string;
	readonly content: string;
	readonly title: string;
	readonly url?: string;
}
export interface TldLegalAgreementCollection {
	readonly nextLink?: string;
	readonly value: TldLegalAgreement[];
}
export interface TopLevelDomainAgreementOption {
	readonly forTransfer?: boolean;
	readonly includePrivacy?: boolean;
}
export interface TopLevelDomainProperties {
	readonly privacy?: boolean;
}
export default {
	domains: domains,
	"domains/domainOwnershipIdentifiers": domains_domainOwnershipIdentifiers,
	topLevelDomains: topLevelDomains,
};
