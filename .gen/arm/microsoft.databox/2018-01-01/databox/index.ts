import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class jobs extends ArmResource<jobsComponentInputs> implements jobsComponentOutputs {
	constructor(entity: ADKEntity, options: jobsComponentInputs) {
		super(entity, options.name, "Microsoft.DataBox/jobs", "2018-01-01", options);
	}
	public readonly apiVersion: "2018-01-01";
	public readonly id: string;
	public readonly type: "Microsoft.DataBox/jobs";
}
export interface jobsComponentOutputs {
	readonly apiVersion: "2018-01-01";
	readonly id: string;
	readonly type: "Microsoft.DataBox/jobs";
}
export interface jobsComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties: JobProperties;
	readonly sku: Sku;
	readonly tags?: ResourceTags;
}
export function listCredentials(resource: jobs): UnencryptedCredentialsList {
	if (resource.apiVersion !== "2018-01-01") {
		throw new Error(`listCredentials is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.DataBox/jobs") {
		throw new Error(`listCredentials is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export interface AccountCredentialDetails {
	readonly accountConnectionString?: string;
	readonly accountName?: string;
	readonly shareCredentialDetails?: ShareCredentialDetails[];
}
export interface ApplianceNetworkConfiguration {
	readonly macAddress?: string;
	readonly name?: string;
}
export interface ContactDetails {
	readonly contactName: string;
	readonly emailList: string[];
	readonly mobile?: string;
	readonly notificationPreference?: NotificationPreference[];
	readonly phone: string;
	readonly phoneExtension?: string;
}
export interface CopyLogDetails {}
export interface CopyProgress {
	readonly accountId?: string;
	readonly bytesSentToCloud?: number;
	readonly filesProcessed?: number;
	readonly storageAccountName?: string;
	readonly totalBytesToProcess?: number;
	readonly totalFilesToProcess?: number;
}
export interface DataBoxDiskCopyProgress {
	readonly bytesCopied?: number;
	readonly percentComplete?: number;
	readonly serialNumber?: string;
	readonly status?: "Completed" | "CompletedWithErrors" | "Failed" | "InProgress" | "NotReturned";
}
export interface DataBoxDiskJobDetailsDisksAndSizeDetails {
	readonly [key: string]: number;
}
export interface DataBoxDiskJobDetailsPreferredDisks {
	readonly [key: string]: number;
}
export interface DataBoxHeavySecret {
	readonly accountCredentialDetails?: AccountCredentialDetails[];
	readonly devicePassword?: string;
	readonly deviceSerialNumber?: string;
	readonly encodedValidationCertPubKey?: string;
	readonly networkConfigurations?: ApplianceNetworkConfiguration[];
}
export interface DataBoxSecret {
	readonly accountCredentialDetails?: AccountCredentialDetails[];
	readonly devicePassword?: string;
	readonly deviceSerialNumber?: string;
	readonly encodedValidationCertPubKey?: string;
	readonly networkConfigurations?: ApplianceNetworkConfiguration[];
}
export interface DestinationAccountDetails {
	readonly accountId?: string;
}
export interface DiskSecret {
	readonly bitLockerKey?: string;
	readonly diskSerialNumber?: string;
}
export interface Error {
	readonly code?: string;
	readonly message?: string;
}
export interface JobDetails {
	readonly chainOfCustodySasKey?: string;
	readonly contactDetails: ContactDetails;
	readonly copyLogDetails?: CopyLogDetails[];
	readonly deliveryPackage?: PackageShippingDetails;
	readonly destinationAccountDetails: DestinationAccountDetails[];
	readonly errorDetails?: JobErrorDetails[];
	readonly expectedDataSizeInTeraBytes?: number;
	readonly jobStages?: JobStages[];
	readonly preferences?: Preferences;
	readonly returnPackage?: PackageShippingDetails;
	readonly reverseShipmentLabelSasKey?: string;
	readonly shippingAddress: ShippingAddress;
}
export interface JobErrorDetails {
	readonly errorCode?: number;
	readonly errorMessage?: string;
	readonly exceptionMessage?: string;
	readonly recommendedAction?: string;
}
export interface JobProperties {
	readonly cancellationReason?: string;
	readonly details?: JobDetails;
	readonly error?: Error;
	readonly isCancellable?: boolean;
	readonly isDeletable?: boolean;
	readonly isShippingAddressEditable?: boolean;
	readonly startTime?: string;
	readonly status?:
		| "Aborted"
		| "AtAzureDC"
		| "Cancelled"
		| "Completed"
		| "CompletedWithErrors"
		| "DataCopy"
		| "Delivered"
		| "DeviceOrdered"
		| "DevicePrepared"
		| "Dispatched"
		| "Failed_IssueDetectedAtAzureDC"
		| "Failed_IssueReportedAtCustomer";
}
export interface JobSecrets {}
export interface JobStages {
	readonly displayName?: string;
	readonly errorDetails?: JobErrorDetails[];
	readonly jobStageDetails?: any;
	readonly stageName?:
		| "Aborted"
		| "AtAzureDC"
		| "Cancelled"
		| "Completed"
		| "CompletedWithErrors"
		| "DataCopy"
		| "Delivered"
		| "DeviceOrdered"
		| "DevicePrepared"
		| "Dispatched"
		| "Failed_IssueDetectedAtAzureDC"
		| "Failed_IssueReportedAtCustomer";
	readonly stageStatus?: "Cancelled" | "Cancelling" | "Failed" | "InProgress" | "None" | "Succeeded";
	readonly stageTime?: string;
}
export interface NotificationPreference {
	readonly sendNotification: boolean;
	readonly stageName: "AtAzureDC" | "DataCopy" | "Delivered" | "DevicePrepared" | "Dispatched";
}
export interface PackageShippingDetails {
	readonly carrierName?: string;
	readonly trackingId?: string;
	readonly trackingUrl?: string;
}
export interface Preferences {
	readonly preferredDataCenterRegion?: string[];
}
export interface ResourceTags {
	readonly [key: string]: string;
}
export interface ShareCredentialDetails {
	readonly password?: string;
	readonly shareName?: string;
	readonly shareType?: "AzureFile" | "BlockBlob" | "HCS" | "ManagedDisk" | "PageBlob";
	readonly supportedAccessProtocols?: "NFS"[];
	readonly userName?: string;
}
export interface ShippingAddress {
	readonly addressType?: "Commercial" | "None";
	readonly city?: string;
	readonly companyName?: string;
	readonly country: string;
	readonly postalCode: string;
	readonly stateOrProvince?: string;
	readonly streetAddress1: string;
	readonly streetAddress2?: string;
	readonly streetAddress3?: string;
	readonly zipExtendedCode?: string;
}
export interface Sku {
	readonly displayName?: string;
	readonly family?: string;
	readonly name: "DataBox" | "DataBoxDisk";
}
export interface UnencryptedCredentials {
	readonly jobName?: string;
	readonly jobSecrets?: JobSecrets;
}
export interface UnencryptedCredentialsList {
	readonly nextLink?: string;
	readonly value?: UnencryptedCredentials[];
}
export default {
	jobs: jobs,
};
