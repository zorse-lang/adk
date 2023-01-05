import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class jobs extends ArmResource<jobsComponentInputs> implements jobsComponentOutputs {
	constructor(entity: ADKEntity, options: jobsComponentInputs) {
		super(entity, options.name, "Microsoft.DataBox/jobs", "2021-05-01", options);
	}
	public readonly apiVersion: "2021-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.DataBox/jobs";
}
export interface jobsComponentOutputs {
	readonly apiVersion: "2021-05-01";
	readonly id: string;
	readonly type: "Microsoft.DataBox/jobs";
}
export interface jobsComponentInputs {
	readonly identity?: ResourceIdentity;
	readonly location: string;
	readonly name: string;
	readonly properties: JobProperties;
	readonly sku: Sku;
	readonly systemData?: SystemData;
	readonly tags?: ResourceTags;
}
export function listCredentials(resource: jobs): UnencryptedCredentialsList {
	if (resource.apiVersion !== "2021-05-01") {
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
	readonly dataAccountType?: "ManagedDisk";
	readonly shareCredentialDetails?: ShareCredentialDetails[];
}
export interface AdditionalErrorInfo {
	readonly info?: any;
	readonly type?: string;
}
export interface ApplianceNetworkConfiguration {
	readonly macAddress?: string;
	readonly name?: string;
}
export interface AzureFileFilterDetails {
	readonly filePathList?: string[];
	readonly filePrefixList?: string[];
	readonly fileShareList?: string[];
}
export interface BlobFilterDetails {
	readonly blobPathList?: string[];
	readonly blobPrefixList?: string[];
	readonly containerList?: string[];
}
export interface CloudError {
	readonly additionalInfo?: AdditionalErrorInfo[];
	readonly code?: string;
	readonly details?: CloudError[];
	readonly message?: string;
	readonly target?: string;
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
	readonly bytesProcessed?: number;
	readonly dataAccountType?: "ManagedDisk";
	readonly directoriesErroredOut?: number;
	readonly filesErroredOut?: number;
	readonly filesProcessed?: number;
	readonly invalidDirectoriesProcessed?: number;
	readonly invalidFileBytesUploaded?: number;
	readonly invalidFilesProcessed?: number;
	readonly isEnumerationInProgress?: boolean;
	readonly renamedContainerCount?: number;
	readonly storageAccountName?: string;
	readonly totalBytesToProcess?: number;
	readonly totalFilesToProcess?: number;
	readonly transferType?: "ExportFromAzure";
}
export interface DataAccountDetails {
	readonly sharePassword?: string;
}
export interface DataBoxDiskCopyProgress {
	readonly bytesCopied?: number;
	readonly percentComplete?: number;
	readonly serialNumber?: string;
	readonly status?:
		| "Completed"
		| "CompletedWithErrors"
		| "DeviceFormatted"
		| "DeviceMetadataModified"
		| "Failed"
		| "HardwareError"
		| "InProgress"
		| "NotReturned"
		| "NotStarted"
		| "StorageAccountNotAccessible";
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
export interface DataExportDetails {
	readonly accountDetails: DataAccountDetails;
	readonly logCollectionLevel?: "Error";
	readonly transferConfiguration: TransferConfiguration;
}
export interface DataImportDetails {
	readonly accountDetails: DataAccountDetails;
}
export interface DcAccessSecurityCode {
	readonly forwardDCAccessCode?: string;
	readonly reverseDCAccessCode?: string;
}
export interface DiskSecret {
	readonly bitLockerKey?: string;
	readonly diskSerialNumber?: string;
}
export interface EncryptionPreferences {
	readonly doubleEncryption?: "Disabled";
}
export interface FilterFileDetails {
	readonly filterFilePath: string;
	readonly filterFileType: "AzureBlob";
}
export interface IdentityProperties {
	readonly type?: string;
	readonly userAssigned?: UserAssignedProperties;
}
export interface JobDeliveryInfo {
	readonly scheduledDateTime?: string;
}
export interface JobDetails {
	readonly actions?: "MoveToCleanUpDevice" | "None"[];
	readonly chainOfCustodySasKey?: string;
	readonly contactDetails: ContactDetails;
	readonly copyLogDetails?: CopyLogDetails[];
	readonly dataExportDetails?: DataExportDetails[];
	readonly dataImportDetails?: DataImportDetails[];
	readonly deliveryPackage?: PackageShippingDetails;
	readonly expectedDataSizeInTeraBytes?: number;
	readonly jobStages?: JobStages[];
	readonly keyEncryptionKey?: KeyEncryptionKey;
	readonly lastMitigationActionOnJob?: LastMitigationActionOnJob;
	readonly preferences?: Preferences;
	readonly returnPackage?: PackageShippingDetails;
	readonly reverseShipmentLabelSasKey?: string;
	readonly shippingAddress?: ShippingAddress;
}
export interface JobProperties {
	readonly cancellationReason?: string;
	readonly deliveryInfo?: JobDeliveryInfo;
	readonly deliveryType?: "NonScheduled";
	readonly details?: JobDetails;
	readonly error?: CloudError;
	readonly isCancellable?: boolean;
	readonly isCancellableWithoutFee?: boolean;
	readonly isDeletable?: boolean;
	readonly isPrepareToShipEnabled?: boolean;
	readonly isShippingAddressEditable?: boolean;
	readonly startTime?: string;
	readonly status?:
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
		| "ReadyToDispatchFromAzureDC";
	readonly transferType: "ExportFromAzure";
}
export interface JobSecrets {
	readonly dcAccessSecurityCode?: DcAccessSecurityCode;
	readonly error?: CloudError;
}
export interface JobStages {
	readonly displayName?: string;
	readonly jobStageDetails?: any;
	readonly stageName?:
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
		| "ReadyToDispatchFromAzureDC";
	readonly stageStatus?:
		| "Cancelled"
		| "Cancelling"
		| "CustomerActionPerformedForCleanUp"
		| "Failed"
		| "InProgress"
		| "None"
		| "Succeeded"
		| "SucceededWithErrors"
		| "SucceededWithWarnings"
		| "WaitingForCustomerAction"
		| "WaitingForCustomerActionForCleanUp";
	readonly stageTime?: string;
}
export interface KeyEncryptionKey {
	readonly identityProperties?: IdentityProperties;
	readonly kekType: "CustomerManaged";
	readonly kekUrl?: string;
	readonly kekVaultResourceID?: string;
}
export interface LastMitigationActionOnJob {
	readonly actionDateTimeInUtc?: string;
	readonly customerResolution?: "MoveToCleanUpDevice" | "None";
	readonly isPerformedByCustomer?: boolean;
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
	readonly encryptionPreferences?: EncryptionPreferences;
	readonly preferredDataCenterRegion?: string[];
	readonly transportPreferences?: TransportPreferences;
}
export interface ResourceIdentity {
	readonly principalId?: string;
	readonly tenantId?: string;
	readonly type?: string;
	readonly userAssignedIdentities?: ResourceIdentityUserAssignedIdentities;
}
export interface ResourceIdentityUserAssignedIdentities {
	readonly [key: string]: UserAssignedIdentity;
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
	readonly postalCode?: string;
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
export interface SystemData {
	readonly createdAt?: string;
	readonly createdBy?: string;
	readonly createdByType?: string;
	readonly lastModifiedAt?: string;
	readonly lastModifiedBy?: string;
	readonly lastModifiedByType?: string;
}
export interface TransferAllDetails {
	readonly dataAccountType: "ManagedDisk";
	readonly transferAllBlobs?: boolean;
	readonly transferAllFiles?: boolean;
}
export interface TransferConfiguration {
	readonly transferAllDetails?: TransferConfigurationTransferAllDetails;
	readonly transferConfigurationType: "TransferAll";
	readonly transferFilterDetails?: TransferConfigurationTransferFilterDetails;
}
export interface TransferConfigurationTransferAllDetails {
	readonly include?: TransferAllDetails;
}
export interface TransferConfigurationTransferFilterDetails {
	readonly include?: TransferFilterDetails;
}
export interface TransferFilterDetails {
	readonly azureFileFilterDetails?: AzureFileFilterDetails;
	readonly blobFilterDetails?: BlobFilterDetails;
	readonly dataAccountType: "ManagedDisk";
	readonly filterFileDetails?: FilterFileDetails[];
}
export interface TransportPreferences {
	readonly preferredShipmentType: "CustomerManaged";
}
export interface UnencryptedCredentials {
	readonly jobName?: string;
	readonly jobSecrets?: JobSecrets;
}
export interface UnencryptedCredentialsList {
	readonly nextLink?: string;
	readonly value?: UnencryptedCredentials[];
}
export interface UserAssignedIdentity {
	readonly clientId?: string;
	readonly principalId?: string;
}
export interface UserAssignedProperties {
	readonly resourceId?: string;
}
export default {
	jobs: jobs,
};
