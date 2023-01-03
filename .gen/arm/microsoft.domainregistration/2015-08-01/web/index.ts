import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class domains extends ArmResource<domainsComponentInputs> implements domainsComponentOutputs {
	constructor(entity: ADKEntity, options: domainsComponentInputs) {
		super(entity, options.name, "Microsoft.DomainRegistration/domains", "2015-08-01", options);
	}
	public readonly apiVersion: "2015-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.DomainRegistration/domains";
}
export interface domainsComponentOutputs {
	readonly apiVersion: "2015-08-01";
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
export class domains_operationresults
	extends ArmResource<domains_operationresultsComponentInputs>
	implements domains_operationresultsComponentOutputs
{
	constructor(entity: ADKEntity, options: domains_operationresultsComponentInputs) {
		super(entity, options.name, "Microsoft.DomainRegistration/domains/operationresults", "2015-08-01", options);
	}
	public readonly apiVersion: "2015-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.DomainRegistration/domains/operationresults";
}
export interface domains_operationresultsComponentOutputs {
	readonly apiVersion: "2015-08-01";
	readonly id: string;
	readonly type: "Microsoft.DomainRegistration/domains/operationresults";
}
export interface domains_operationresultsComponentInputs {
	readonly kind?: string | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: DomainProperties | undefined;
	readonly tags?: ResourceTags | undefined;
}
export class topLevelDomains
	extends ArmResource<topLevelDomainsComponentInputs>
	implements topLevelDomainsComponentOutputs
{
	constructor(entity: ADKEntity, options: topLevelDomainsComponentInputs) {
		super(entity, options.name, "Microsoft.DomainRegistration/topLevelDomains", "2015-08-01", options);
	}
	public readonly apiVersion: "2015-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.DomainRegistration/topLevelDomains";
}
export interface topLevelDomainsComponentOutputs {
	readonly apiVersion: "2015-08-01";
	readonly id: string;
	readonly type: "Microsoft.DomainRegistration/topLevelDomains";
}
export interface topLevelDomainsComponentInputs {
	readonly kind?: string | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: TopLevelDomainProperties | undefined;
	readonly tags?: ResourceTags | undefined;
}
export function listAgreements(
	resource: topLevelDomains,
	input: TopLevelDomainAgreementOption,
): TldLegalAgreementCollection {
	if (resource.apiVersion !== "2015-08-01") {
		throw new Error(`listAgreements is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.DomainRegistration/topLevelDomains") {
		throw new Error(`listAgreements is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export interface Address {
	readonly address1?: string | undefined;
	readonly address2?: string | undefined;
	readonly city?: string | undefined;
	readonly country?: string | undefined;
	readonly postalCode?: string | undefined;
	readonly state?: string | undefined;
}
export interface Contact {
	readonly addressMailing?: Address | undefined;
	readonly email?: string | undefined;
	readonly fax?: string | undefined;
	readonly jobTitle?: string | undefined;
	readonly nameFirst?: string | undefined;
	readonly nameLast?: string | undefined;
	readonly nameMiddle?: string | undefined;
	readonly organization?: string | undefined;
	readonly phone?: string | undefined;
}
export interface DomainProperties {
	readonly autoRenew?: boolean | undefined;
	readonly consent?: DomainPurchaseConsent | undefined;
	readonly contactAdmin?: Contact | undefined;
	readonly contactBilling?: Contact | undefined;
	readonly contactRegistrant?: Contact | undefined;
	readonly contactTech?: Contact | undefined;
	readonly createdTime?: string | undefined;
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
	readonly agreementKey?: string | undefined;
	readonly content?: string | undefined;
	readonly title?: string | undefined;
	readonly url?: string | undefined;
}
export interface TldLegalAgreementCollection {
	readonly nextLink?: string | undefined;
	readonly value?: TldLegalAgreement[] | undefined;
}
export interface TopLevelDomainAgreementOption {
	readonly includePrivacy?: boolean | undefined;
}
export interface TopLevelDomainProperties {
	readonly name?: string | undefined;
	readonly privacy?: boolean | undefined;
}
export default {
	domains: domains,
	"domains/operationresults": domains_operationresults,
	topLevelDomains: topLevelDomains,
};
