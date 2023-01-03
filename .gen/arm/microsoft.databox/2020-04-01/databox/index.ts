import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class jobs extends ArmResource<jobsComponentInputs> implements jobsComponentOutputs {
	constructor(entity: ADKEntity, options: jobsComponentInputs) {
		super(entity, options.name, "Microsoft.DataBox/jobs", "2020-04-01", options);
	}
	public readonly apiVersion: "2020-04-01";
	public readonly id: string;
	public readonly type: "Microsoft.DataBox/jobs";
}
export interface jobsComponentOutputs {
	readonly apiVersion: "2020-04-01";
	readonly id: string;
	readonly type: "Microsoft.DataBox/jobs";
}
export interface jobsComponentInputs {
	readonly identity?: ResourceIdentity | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties: JobProperties;
	readonly sku: Sku;
	readonly tags?: ResourceTags | undefined;
}
export function listCredentials(resource: jobs): UnencryptedCredentialsList {
	if (resource.apiVersion !== "2020-04-01") {
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
	readonly dataAccountType?: "ManagedDisk" | undefined;
	readonly shareCredentialDetails?: ShareCredentialDetails[] | undefined;
}
export interface AdditionalErrorInfo {
	readonly info?: any | undefined;
	readonly type?: string | undefined;
}
export interface ApplianceNetworkConfiguration {
	readonly macAddress?: string | undefined;
	readonly name?: string | undefined;
}
export interface AzureFileFilterDetails {
	readonly filePathList?: string[] | undefined;
	readonly filePrefixList?: string[] | undefined;
	readonly fileShareList?: string[] | undefined;
}
export interface BlobFilterDetails {
	readonly blobPathList?: string[] | undefined;
	readonly blobPrefixList?: string[] | undefined;
	readonly containerList?: string[] | undefined;
}
export interface CloudError {
	readonly additionalInfo?: AdditionalErrorInfo[] | undefined;
	readonly code?: string | undefined;
	readonly details?: CloudError[] | undefined;
	readonly message?: string | undefined;
	readonly target?: string | undefined;
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
	readonly bytesProcessed?: number | undefined;
	readonly dataAccountType?: "ManagedDisk" | undefined;
	readonly directoriesErroredOut?: number | undefined;
	readonly filesErroredOut?: number | undefined;
	readonly filesProcessed?: number | undefined;
	readonly invalidDirectoriesProcessed?: number | undefined;
	readonly invalidFileBytesUploaded?: number | undefined;
	readonly invalidFilesProcessed?: number | undefined;
	readonly isEnumerationInProgress?: boolean | undefined;
	readonly renamedContainerCount?: number | undefined;
	readonly storageAccountName?: string | undefined;
	readonly totalBytesToProcess?: number | undefined;
	readonly totalFilesToProcess?: number | undefined;
	readonly transferType?: "ExportFromAzure" | undefined;
}
export interface DataAccountDetails {
	readonly sharePassword?: string | undefined;
}
export interface DataBoxDiskCopyProgress {
	readonly bytesCopied?: number | undefined;
	readonly percentComplete?: number | undefined;
	readonly serialNumber?: string | undefined;
	readonly status?:
		| (
				| "Completed"
				| "CompletedWithErrors"
				| "DeviceFormatted"
				| "DeviceMetadataModified"
				| "Failed"
				| "HardwareError"
				| "InProgress"
				| "NotReturned"
				| "NotStarted"
				| "StorageAccountNotAccessible"
		  )
		| undefined;
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
export interface DataExportDetails {
	readonly accountDetails: DataAccountDetails;
	readonly logCollectionLevel?: "Error" | undefined;
	readonly transferConfiguration: TransferConfiguration;
}
export interface DataImportDetails {
	readonly accountDetails: DataAccountDetails;
}
export interface DcAccessSecurityCode {
	readonly forwardDCAccessCode?: string | undefined;
	readonly reverseDCAccessCode?: string | undefined;
}
export interface DiskSecret {
	readonly bitLockerKey?: string | undefined;
	readonly diskSerialNumber?: string | undefined;
}
export interface FilterFileDetails {
	readonly filterFilePath: string;
	readonly filterFileType: "AzureBlob";
}
export interface JobDeliveryInfo {
	readonly scheduledDateTime?: string | undefined;
}
export interface JobDetails {
	readonly chainOfCustodySasKey?: string | undefined;
	readonly contactDetails: ContactDetails;
	readonly copyLogDetails?: CopyLogDetails[] | undefined;
	readonly dataExportDetails?: DataExportDetails[] | undefined;
	readonly dataImportDetails?: DataImportDetails[] | undefined;
	readonly deliveryPackage?: PackageShippingDetails | undefined;
	readonly expectedDataSizeInTeraBytes?: number | undefined;
	readonly jobStages?: JobStages[] | undefined;
	readonly keyEncryptionKey?: KeyEncryptionKey | undefined;
	readonly preferences?: Preferences | undefined;
	readonly returnPackage?: PackageShippingDetails | undefined;
	readonly reverseShipmentLabelSasKey?: string | undefined;
	readonly shippingAddress?: ShippingAddress | undefined;
}
export interface JobProperties {
	readonly cancellationReason?: string | undefined;
	readonly deliveryInfo?: JobDeliveryInfo | undefined;
	readonly deliveryType?: "NonScheduled" | undefined;
	readonly details?: JobDetails | undefined;
	readonly error?: CloudError | undefined;
	readonly isCancellable?: boolean | undefined;
	readonly isCancellableWithoutFee?: boolean | undefined;
	readonly isDeletable?: boolean | undefined;
	readonly isPrepareToShipEnabled?: boolean | undefined;
	readonly isShippingAddressEditable?: boolean | undefined;
	readonly startTime?: string | undefined;
	readonly status?:
		| (
				| "Aborted"
				| "AtAzureDC"
				| "Cancelled"
				| "Completed"
				| "CompletedWithErrors"
				| "CompletedWithWarnings"
				| "DataCopy"
				| "Delivered"
				| "DeviceOrdered"
				| "DevicePrepared"
				| "Dispatched"
				| "Failed_IssueDetectedAtAzureDC"
				| "Failed_IssueReportedAtCustomer"
				| "PickedUp"
				| "ReadyToDispatchFromAzureDC"
		  )
		| undefined;
	readonly transferType: "ExportFromAzure";
}
export interface JobSecrets {
	readonly dcAccessSecurityCode?: DcAccessSecurityCode | undefined;
	readonly error?: CloudError | undefined;
}
export interface JobStages {
	readonly displayName?: string | undefined;
	readonly jobStageDetails?: any | undefined;
	readonly stageName?:
		| (
				| "Aborted"
				| "AtAzureDC"
				| "Cancelled"
				| "Completed"
				| "CompletedWithErrors"
				| "CompletedWithWarnings"
				| "DataCopy"
				| "Delivered"
				| "DeviceOrdered"
				| "DevicePrepared"
				| "Dispatched"
				| "Failed_IssueDetectedAtAzureDC"
				| "Failed_IssueReportedAtCustomer"
				| "PickedUp"
				| "ReadyToDispatchFromAzureDC"
		  )
		| undefined;
	readonly stageStatus?:
		| (
				| "Cancelled"
				| "Cancelling"
				| "Failed"
				| "InProgress"
				| "None"
				| "Succeeded"
				| "SucceededWithErrors"
				| "SucceededWithWarnings"
		  )
		| undefined;
	readonly stageTime?: string | undefined;
}
export interface KeyEncryptionKey {
	readonly kekType: "CustomerManaged";
	readonly kekUrl?: string | undefined;
	readonly kekVaultResourceID?: string | undefined;
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
	readonly transportPreferences?: TransportPreferences | undefined;
}
export interface ResourceIdentity {
	readonly principalId?: string | undefined;
	readonly tenantId?: string | undefined;
	readonly type?: string | undefined;
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
export interface TransferAllDetails {
	readonly dataAccountType: "ManagedDisk";
	readonly transferAllBlobs?: boolean | undefined;
	readonly transferAllFiles?: boolean | undefined;
}
export interface TransferConfiguration {
	readonly transferAllDetails?: TransferConfigurationTransferAllDetails | undefined;
	readonly transferConfigurationType: "TransferAll";
	readonly transferFilterDetails?: TransferConfigurationTransferFilterDetails | undefined;
}
export interface TransferConfigurationTransferAllDetails {
	readonly include?: TransferAllDetails | undefined;
}
export interface TransferConfigurationTransferFilterDetails {
	readonly include?: TransferFilterDetails | undefined;
}
export interface TransferFilterDetails {
	readonly azureFileFilterDetails?: AzureFileFilterDetails | undefined;
	readonly blobFilterDetails?: BlobFilterDetails | undefined;
	readonly dataAccountType: "ManagedDisk";
	readonly filterFileDetails?: FilterFileDetails[] | undefined;
}
export interface TransportPreferences {
	readonly preferredShipmentType: "CustomerManaged";
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
