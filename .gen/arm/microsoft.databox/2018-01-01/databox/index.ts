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
	readonly tags?: ResourceTags | undefined;
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
	readonly accountConnectionString?: string | undefined;
	readonly accountName?: string | undefined;
	readonly shareCredentialDetails?: ShareCredentialDetails[] | undefined;
}
export interface ApplianceNetworkConfiguration {
	readonly macAddress?: string | undefined;
	readonly name?: string | undefined;
}
export interface ContactDetails {
	readonly contactName: string;
	readonly emailList: string[];
	readonly mobile?: string | undefined;
	readonly notificationPreference?: NotificationPreference[] | undefined;
	readonly phone: string;
	readonly phoneExtension?: string | undefined;
}
export interface CopyLogDetails {}
export interface CopyProgress {
	readonly accountId?: string | undefined;
	readonly bytesSentToCloud?: number | undefined;
	readonly filesProcessed?: number | undefined;
	readonly storageAccountName?: string | undefined;
	readonly totalBytesToProcess?: number | undefined;
	readonly totalFilesToProcess?: number | undefined;
}
export interface DataBoxDiskCopyProgress {
	readonly bytesCopied?: number | undefined;
	readonly percentComplete?: number | undefined;
	readonly serialNumber?: string | undefined;
	readonly status?: ("Completed" | "CompletedWithErrors" | "Failed" | "InProgress" | "NotReturned") | undefined;
}
export interface DataBoxDiskJobDetailsDisksAndSizeDetails {
	readonly "[ key: string ]"?: number | undefined;
}
export interface DataBoxDiskJobDetailsPreferredDisks {
	readonly "[ key: string ]"?: number | undefined;
}
export interface DataBoxHeavySecret {
	readonly accountCredentialDetails?: AccountCredentialDetails[] | undefined;
	readonly devicePassword?: string | undefined;
	readonly deviceSerialNumber?: string | undefined;
	readonly encodedValidationCertPubKey?: string | undefined;
	readonly networkConfigurations?: ApplianceNetworkConfiguration[] | undefined;
}
export interface DataBoxSecret {
	readonly accountCredentialDetails?: AccountCredentialDetails[] | undefined;
	readonly devicePassword?: string | undefined;
	readonly deviceSerialNumber?: string | undefined;
	readonly encodedValidationCertPubKey?: string | undefined;
	readonly networkConfigurations?: ApplianceNetworkConfiguration[] | undefined;
}
export interface DestinationAccountDetails {
	readonly accountId?: string | undefined;
}
export interface DiskSecret {
	readonly bitLockerKey?: string | undefined;
	readonly diskSerialNumber?: string | undefined;
}
export interface Error {
	readonly code?: string | undefined;
	readonly message?: string | undefined;
}
export interface JobDetails {
	readonly chainOfCustodySasKey?: string | undefined;
	readonly contactDetails: ContactDetails;
	readonly copyLogDetails?: CopyLogDetails[] | undefined;
	readonly deliveryPackage?: PackageShippingDetails | undefined;
	readonly destinationAccountDetails: DestinationAccountDetails[];
	readonly errorDetails?: JobErrorDetails[] | undefined;
	readonly expectedDataSizeInTeraBytes?: number | undefined;
	readonly jobStages?: JobStages[] | undefined;
	readonly preferences?: Preferences | undefined;
	readonly returnPackage?: PackageShippingDetails | undefined;
	readonly reverseShipmentLabelSasKey?: string | undefined;
	readonly shippingAddress: ShippingAddress;
}
export interface JobErrorDetails {
	readonly errorCode?: number | undefined;
	readonly errorMessage?: string | undefined;
	readonly exceptionMessage?: string | undefined;
	readonly recommendedAction?: string | undefined;
}
export interface JobProperties {
	readonly cancellationReason?: string | undefined;
	readonly details?: JobDetails | undefined;
	readonly error?: Error | undefined;
	readonly isCancellable?: boolean | undefined;
	readonly isDeletable?: boolean | undefined;
	readonly isShippingAddressEditable?: boolean | undefined;
	readonly startTime?: string | undefined;
	readonly status?:
		| (
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
				| "Failed_IssueReportedAtCustomer"
		  )
		| undefined;
}
export interface JobSecrets {}
export interface JobStages {
	readonly displayName?: string | undefined;
	readonly errorDetails?: JobErrorDetails[] | undefined;
	readonly jobStageDetails?: any | undefined;
	readonly stageName?:
		| (
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
				| "Failed_IssueReportedAtCustomer"
		  )
		| undefined;
	readonly stageStatus?: ("Cancelled" | "Cancelling" | "Failed" | "InProgress" | "None" | "Succeeded") | undefined;
	readonly stageTime?: string | undefined;
}
export interface NotificationPreference {
	readonly sendNotification: boolean;
	readonly stageName: "AtAzureDC" | "DataCopy" | "Delivered" | "DevicePrepared" | "Dispatched";
}
export interface PackageShippingDetails {
	readonly carrierName?: string | undefined;
	readonly trackingId?: string | undefined;
	readonly trackingUrl?: string | undefined;
}
export interface Preferences {
	readonly preferredDataCenterRegion?: string[] | undefined;
}
export interface ResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface ShareCredentialDetails {
	readonly password?: string | undefined;
	readonly shareName?: string | undefined;
	readonly shareType?: ("AzureFile" | "BlockBlob" | "HCS" | "ManagedDisk" | "PageBlob") | undefined;
	readonly supportedAccessProtocols?: "NFS"[] | undefined;
	readonly userName?: string | undefined;
}
export interface ShippingAddress {
	readonly addressType?: ("Commercial" | "None") | undefined;
	readonly city?: string | undefined;
	readonly companyName?: string | undefined;
	readonly country: string;
	readonly postalCode: string;
	readonly stateOrProvince?: string | undefined;
	readonly streetAddress1: string;
	readonly streetAddress2?: string | undefined;
	readonly streetAddress3?: string | undefined;
	readonly zipExtendedCode?: string | undefined;
}
export interface Sku {
	readonly displayName?: string | undefined;
	readonly family?: string | undefined;
	readonly name: "DataBox" | "DataBoxDisk";
}
export interface UnencryptedCredentials {
	readonly jobName?: string | undefined;
	readonly jobSecrets?: JobSecrets | undefined;
}
export interface UnencryptedCredentialsList {
	readonly nextLink?: string | undefined;
	readonly value?: UnencryptedCredentials[] | undefined;
}
export default {
	jobs: jobs,
};
