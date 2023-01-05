import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class jobs extends ArmResource<jobsComponentInputs> implements jobsComponentOutputs {
	constructor(entity: ADKEntity, options: jobsComponentInputs) {
		super(entity, options.name, "Microsoft.ImportExport/jobs", "2020-08-01", options);
	}
	public readonly apiVersion: "2020-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.ImportExport/jobs";
}
export interface jobsComponentOutputs {
	readonly apiVersion: "2020-08-01";
	readonly id: string;
	readonly type: "Microsoft.ImportExport/jobs";
}
export interface jobsComponentInputs {
	readonly identity?: IdentityDetails;
	readonly location?: string;
	readonly name: string;
	readonly properties?: JobDetails;
	readonly systemData?: SystemData;
	readonly tags?: any;
}
export function listBitLockerKeys(resource: jobs): GetBitLockerKeysResponse {
	if (resource.apiVersion !== "2020-08-01") {
		throw new Error(`listBitLockerKeys is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.ImportExport/jobs") {
		throw new Error(`listBitLockerKeys is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export interface DeliveryPackageInformation {
	readonly carrierName: string;
	readonly driveCount?: number;
	readonly shipDate?: string;
	readonly trackingNumber: string;
}
export interface DriveBitLockerKey {
	readonly bitLockerKey?: string;
	readonly driveId?: string;
}
export interface DriveStatus {
	readonly bitLockerKey?: string;
	readonly bytesSucceeded?: number;
	readonly copyStatus?: string;
	readonly driveHeaderHash?: string;
	readonly driveId?: string;
	readonly errorLogUri?: string;
	readonly manifestFile?: string;
	readonly manifestHash?: string;
	readonly manifestUri?: string;
	readonly percentComplete?: number;
	readonly state?:
		| "Completed"
		| "CompletedMoreInfo"
		| "NeverReceived"
		| "Received"
		| "ShippedBack"
		| "Specified"
		| "Transferring";
	readonly verboseLogUri?: string;
}
export interface EncryptionKeyDetails {
	readonly kekType?: "CustomerManaged" | "MicrosoftManaged";
	readonly kekUrl?: string;
	readonly kekVaultResourceID?: string;
}
export interface Export {
	readonly blobList?: ExportBlobList;
	readonly blobListBlobPath?: string;
}
export interface ExportBlobList {
	readonly blobPath?: string[];
	readonly blobPathPrefix?: string[];
}
export interface GetBitLockerKeysResponse {
	readonly value?: DriveBitLockerKey[];
}
export interface IdentityDetails {
	readonly principalId?: string;
	readonly tenantId?: string;
	readonly type?: "None" | "SystemAssigned" | "UserAssigned";
}
export interface JobDetails {
	readonly backupDriveManifest?: boolean;
	readonly cancelRequested?: boolean;
	readonly deliveryPackage?: DeliveryPackageInformation;
	readonly diagnosticsPath?: string;
	readonly driveList?: DriveStatus[];
	readonly encryptionKey?: EncryptionKeyDetails;
	readonly export?: Export;
	readonly incompleteBlobListUri?: string;
	readonly jobType?: string;
	readonly logLevel?: string;
	readonly percentComplete?: number;
	readonly provisioningState?: string;
	readonly returnAddress?: ReturnAddress;
	readonly returnPackage?: PackageInformation;
	readonly returnShipping?: ReturnShipping;
	readonly shippingInformation?: ShippingInformation;
	readonly state?: string;
	readonly storageAccountId?: string;
}
export interface PackageInformation {
	readonly carrierName: string;
	readonly driveCount: number;
	readonly shipDate: string;
	readonly trackingNumber: string;
}
export interface ReturnAddress {
	readonly city: string;
	readonly countryOrRegion: string;
	readonly email: string;
	readonly phone: string;
	readonly postalCode: string;
	readonly recipientName: string;
	readonly stateOrProvince?: string;
	readonly streetAddress1: string;
	readonly streetAddress2?: string;
}
export interface ReturnShipping {
	readonly carrierAccountNumber: string;
	readonly carrierName: string;
}
export interface ShippingInformation {
	readonly additionalInformation?: string;
	readonly city?: string;
	readonly countryOrRegion?: string;
	readonly phone?: string;
	readonly postalCode?: string;
	readonly recipientName?: string;
	readonly stateOrProvince?: string;
	readonly streetAddress1?: string;
	readonly streetAddress2?: string;
}
export interface SystemData {
	readonly createdAt?: string;
	readonly createdBy?: string;
	readonly createdByType?: "Application" | "Key" | "ManagedIdentity" | "User";
	readonly lastModifiedAt?: string;
	readonly lastModifiedBy?: string;
	readonly lastModifiedByType?: "Application" | "Key" | "ManagedIdentity" | "User";
}
export default {
	jobs: jobs,
};
