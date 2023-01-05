import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class communicationServices
	extends ArmResource<communicationServicesComponentInputs>
	implements communicationServicesComponentOutputs
{
	constructor(entity: ADKEntity, options: communicationServicesComponentInputs) {
		super(entity, options.name, "Microsoft.Communication/communicationServices", "2021-10-01-preview", options);
	}
	public readonly apiVersion: "2021-10-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Communication/communicationServices";
}
export interface communicationServicesComponentOutputs {
	readonly apiVersion: "2021-10-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Communication/communicationServices";
}
export interface communicationServicesComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: CommunicationServiceProperties;
	readonly systemData?: SystemData;
	readonly tags?: TrackedResourceTags;
}
export class emailServices extends ArmResource<emailServicesComponentInputs> implements emailServicesComponentOutputs {
	constructor(entity: ADKEntity, options: emailServicesComponentInputs) {
		super(entity, options.name, "Microsoft.Communication/emailServices", "2021-10-01-preview", options);
	}
	public readonly apiVersion: "2021-10-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Communication/emailServices";
}
export interface emailServicesComponentOutputs {
	readonly apiVersion: "2021-10-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Communication/emailServices";
}
export interface emailServicesComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: EmailServiceProperties;
	readonly systemData?: SystemData;
	readonly tags?: TrackedResourceTags;
}
export class emailServices_domains
	extends ArmResource<emailServices_domainsComponentInputs>
	implements emailServices_domainsComponentOutputs
{
	constructor(entity: ADKEntity, options: emailServices_domainsComponentInputs) {
		super(entity, options.name, "Microsoft.Communication/emailServices/domains", "2021-10-01-preview", options);
	}
	public readonly apiVersion: "2021-10-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Communication/emailServices/domains";
}
export interface emailServices_domainsComponentOutputs {
	readonly apiVersion: "2021-10-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Communication/emailServices/domains";
}
export interface emailServices_domainsComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: DomainProperties;
	readonly systemData?: SystemData;
	readonly tags?: TrackedResourceTags;
}
export function listKeys(resource: communicationServices): CommunicationServiceKeys {
	if (resource.apiVersion !== "2021-10-01-preview") {
		throw new Error(`listKeys is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.Communication/communicationServices") {
		throw new Error(`listKeys is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export interface CommunicationServiceKeys {
	readonly primaryConnectionString?: string;
	readonly primaryKey?: string;
	readonly secondaryConnectionString?: string;
	readonly secondaryKey?: string;
}
export interface CommunicationServiceProperties {
	readonly dataLocation: string;
	readonly hostName?: string;
	readonly immutableResourceId?: string;
	readonly linkedDomains?: string[];
	readonly notificationHubId?: string;
	readonly provisioningState?:
		| "Canceled"
		| "Creating"
		| "Deleting"
		| "Failed"
		| "Moving"
		| "Running"
		| "Succeeded"
		| "Unknown"
		| "Updating";
	readonly version?: string;
}
export interface DnsRecord {
	readonly name?: string;
	readonly ttl?: number;
	readonly type?: string;
	readonly value?: string;
}
export interface DomainProperties {
	readonly dataLocation?: string;
	readonly domainManagement: "AzureManaged" | "CustomerManaged" | "CustomerManagedInExchangeOnline";
	readonly fromSenderDomain?: string;
	readonly mailFromSenderDomain?: string;
	readonly provisioningState?:
		| "Canceled"
		| "Creating"
		| "Deleting"
		| "Failed"
		| "Moving"
		| "Running"
		| "Succeeded"
		| "Unknown"
		| "Updating";
	readonly userEngagementTracking?: "Disabled" | "Enabled";
	readonly validSenderUsernames?: ValidSenderUsernameCollection;
	readonly verificationRecords?: DomainPropertiesVerificationRecords;
	readonly verificationStates?: DomainPropertiesVerificationStates;
}
export interface DomainPropertiesVerificationRecords {
	readonly DKIM?: DnsRecord;
	readonly DKIM2?: DnsRecord;
	readonly DMARC?: DnsRecord;
	readonly Domain?: DnsRecord;
	readonly SPF?: DnsRecord;
}
export interface DomainPropertiesVerificationStates {
	readonly DKIM?: VerificationStatusRecord;
	readonly DKIM2?: VerificationStatusRecord;
	readonly DMARC?: VerificationStatusRecord;
	readonly Domain?: VerificationStatusRecord;
	readonly SPF?: VerificationStatusRecord;
}
export interface EmailServiceProperties {
	readonly dataLocation: string;
	readonly provisioningState?:
		| "Canceled"
		| "Creating"
		| "Deleting"
		| "Failed"
		| "Moving"
		| "Running"
		| "Succeeded"
		| "Unknown"
		| "Updating";
}
export interface SystemData {
	readonly createdAt?: string;
	readonly createdBy?: string;
	readonly createdByType?: "Application" | "Key" | "ManagedIdentity" | "User";
	readonly lastModifiedAt?: string;
	readonly lastModifiedBy?: string;
	readonly lastModifiedByType?: "Application" | "Key" | "ManagedIdentity" | "User";
}
export interface TrackedResourceTags {
	readonly [key: string]: string;
}
export interface ValidSenderUsernameCollection {
	readonly [key: string]: string;
}
export interface VerificationStatusRecord {
	readonly errorCode?: string;
	readonly status?:
		| "CancellationRequested"
		| "NotStarted"
		| "VerificationFailed"
		| "VerificationInProgress"
		| "VerificationRequested"
		| "Verified";
}
export default {
	communicationServices: communicationServices,
	emailServices: emailServices,
	"emailServices/domains": emailServices_domains,
};
