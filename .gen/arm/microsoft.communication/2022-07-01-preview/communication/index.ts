import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class communicationServices
	extends ArmResource<communicationServicesComponentInputs>
	implements communicationServicesComponentOutputs
{
	constructor(entity: ADKEntity, options: communicationServicesComponentInputs) {
		super(entity, options.name, "Microsoft.Communication/communicationServices", "2022-07-01-preview", options);
	}
	public readonly apiVersion: "2022-07-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Communication/communicationServices";
}
export interface communicationServicesComponentOutputs {
	readonly apiVersion: "2022-07-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Communication/communicationServices";
}
export interface communicationServicesComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: CommunicationServiceProperties | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: TrackedResourceTags | undefined;
}
export class emailServices extends ArmResource<emailServicesComponentInputs> implements emailServicesComponentOutputs {
	constructor(entity: ADKEntity, options: emailServicesComponentInputs) {
		super(entity, options.name, "Microsoft.Communication/emailServices", "2022-07-01-preview", options);
	}
	public readonly apiVersion: "2022-07-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Communication/emailServices";
}
export interface emailServicesComponentOutputs {
	readonly apiVersion: "2022-07-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Communication/emailServices";
}
export interface emailServicesComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: EmailServiceProperties | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: TrackedResourceTags | undefined;
}
export class emailServices_domains
	extends ArmResource<emailServices_domainsComponentInputs>
	implements emailServices_domainsComponentOutputs
{
	constructor(entity: ADKEntity, options: emailServices_domainsComponentInputs) {
		super(entity, options.name, "Microsoft.Communication/emailServices/domains", "2022-07-01-preview", options);
	}
	public readonly apiVersion: "2022-07-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Communication/emailServices/domains";
}
export interface emailServices_domainsComponentOutputs {
	readonly apiVersion: "2022-07-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Communication/emailServices/domains";
}
export interface emailServices_domainsComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: DomainProperties | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: TrackedResourceTags | undefined;
}
export function listKeys(resource: communicationServices): CommunicationServiceKeys {
	if (resource.apiVersion !== "2022-07-01-preview") {
		throw new Error(`listKeys is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.Communication/communicationServices") {
		throw new Error(`listKeys is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export interface CommunicationServiceKeys {
	readonly primaryConnectionString?: string | undefined;
	readonly primaryKey?: string | undefined;
	readonly secondaryConnectionString?: string | undefined;
	readonly secondaryKey?: string | undefined;
}
export interface CommunicationServiceProperties {
	readonly dataLocation: string;
	readonly hostName?: string | undefined;
	readonly immutableResourceId?: string | undefined;
	readonly linkedDomains?: string[] | undefined;
	readonly notificationHubId?: string | undefined;
	readonly provisioningState?:
		| ("Canceled" | "Creating" | "Deleting" | "Failed" | "Moving" | "Running" | "Succeeded" | "Unknown" | "Updating")
		| undefined;
	readonly version?: string | undefined;
}
export interface DnsRecord {
	readonly name?: string | undefined;
	readonly ttl?: number | undefined;
	readonly type?: string | undefined;
	readonly value?: string | undefined;
}
export interface DomainProperties {
	readonly dataLocation?: string | undefined;
	readonly domainManagement: "AzureManaged" | "CustomerManaged" | "CustomerManagedInExchangeOnline";
	readonly fromSenderDomain?: string | undefined;
	readonly mailFromSenderDomain?: string | undefined;
	readonly provisioningState?:
		| ("Canceled" | "Creating" | "Deleting" | "Failed" | "Moving" | "Running" | "Succeeded" | "Unknown" | "Updating")
		| undefined;
	readonly userEngagementTracking?: ("Disabled" | "Enabled") | undefined;
	readonly validSenderUsernames?: ValidSenderUsernameCollection | undefined;
	readonly verificationRecords?: DomainPropertiesVerificationRecords | undefined;
	readonly verificationStates?: DomainPropertiesVerificationStates | undefined;
}
export interface DomainPropertiesVerificationRecords {
	readonly DKIM?: DnsRecord | undefined;
	readonly DKIM2?: DnsRecord | undefined;
	readonly DMARC?: DnsRecord | undefined;
	readonly Domain?: DnsRecord | undefined;
	readonly SPF?: DnsRecord | undefined;
}
export interface DomainPropertiesVerificationStates {
	readonly DKIM?: VerificationStatusRecord | undefined;
	readonly DKIM2?: VerificationStatusRecord | undefined;
	readonly DMARC?: VerificationStatusRecord | undefined;
	readonly Domain?: VerificationStatusRecord | undefined;
	readonly SPF?: VerificationStatusRecord | undefined;
}
export interface EmailServiceProperties {
	readonly dataLocation: string;
	readonly provisioningState?:
		| ("Canceled" | "Creating" | "Deleting" | "Failed" | "Moving" | "Running" | "Succeeded" | "Unknown" | "Updating")
		| undefined;
}
export interface SystemData {
	readonly createdAt?: string | undefined;
	readonly createdBy?: string | undefined;
	readonly createdByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
	readonly lastModifiedAt?: string | undefined;
	readonly lastModifiedBy?: string | undefined;
	readonly lastModifiedByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
}
export interface TrackedResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface ValidSenderUsernameCollection {
	readonly "[ key: string ]"?: string | undefined;
}
export interface VerificationStatusRecord {
	readonly errorCode?: string | undefined;
	readonly status?:
		| (
				| "CancellationRequested"
				| "NotStarted"
				| "VerificationFailed"
				| "VerificationInProgress"
				| "VerificationRequested"
				| "Verified"
		  )
		| undefined;
}
export default {
	communicationServices: communicationServices,
	emailServices: emailServices,
	"emailServices/domains": emailServices_domains,
};
