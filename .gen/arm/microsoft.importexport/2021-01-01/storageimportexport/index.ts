import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class jobs extends ArmResource<jobsComponentInputs> implements jobsComponentOutputs {
	constructor(entity: ADKEntity, options: jobsComponentInputs) {
		super(entity, options.name, "Microsoft.ImportExport/jobs", "2021-01-01", options);
	}
	public readonly apiVersion: "2021-01-01";
	public readonly id: string;
	public readonly type: "Microsoft.ImportExport/jobs";
}
export interface jobsComponentOutputs {
	readonly apiVersion: "2021-01-01";
	readonly id: string;
	readonly type: "Microsoft.ImportExport/jobs";
}
export interface jobsComponentInputs {
	readonly identity?: IdentityDetails | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: JobDetails | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: any | undefined;
}
export function listBitLockerKeys(resource: jobs): GetBitLockerKeysResponse {
	if (resource.apiVersion !== "2021-01-01") {
		throw new Error(`listBitLockerKeys is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.ImportExport/jobs") {
		throw new Error(`listBitLockerKeys is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export interface DeliveryPackageInformation {
	readonly carrierName: string;
	readonly driveCount?: number | undefined;
	readonly shipDate?: string | undefined;
	readonly trackingNumber: string;
}
export interface DriveBitLockerKey {
	readonly bitLockerKey?: string | undefined;
	readonly driveId?: string | undefined;
}
export interface DriveStatus {
	readonly bitLockerKey?: string | undefined;
	readonly bytesSucceeded?: number | undefined;
	readonly copyStatus?: string | undefined;
	readonly driveHeaderHash?: string | undefined;
	readonly driveId?: string | undefined;
	readonly errorLogUri?: string | undefined;
	readonly manifestFile?: string | undefined;
	readonly manifestHash?: string | undefined;
	readonly manifestUri?: string | undefined;
	readonly percentComplete?: number | undefined;
	readonly state?:
		| ("Completed" | "CompletedMoreInfo" | "NeverReceived" | "Received" | "ShippedBack" | "Specified" | "Transferring")
		| undefined;
	readonly verboseLogUri?: string | undefined;
}
export interface EncryptionKeyDetails {
	readonly kekType?: ("CustomerManaged" | "MicrosoftManaged") | undefined;
	readonly kekUrl?: string | undefined;
	readonly kekVaultResourceID?: string | undefined;
}
export interface Export {
	readonly blobList?: ExportBlobList | undefined;
	readonly blobListBlobPath?: string | undefined;
}
export interface ExportBlobList {
	readonly blobPath?: string[] | undefined;
	readonly blobPathPrefix?: string[] | undefined;
}
export interface GetBitLockerKeysResponse {
	readonly value?: DriveBitLockerKey[] | undefined;
}
export interface IdentityDetails {
	readonly principalId?: string | undefined;
	readonly tenantId?: string | undefined;
	readonly type?: ("None" | "SystemAssigned" | "UserAssigned") | undefined;
}
export interface JobDetails {
	readonly backupDriveManifest?: boolean | undefined;
	readonly cancelRequested?: boolean | undefined;
	readonly deliveryPackage?: DeliveryPackageInformation | undefined;
	readonly diagnosticsPath?: string | undefined;
	readonly driveList?: DriveStatus[] | undefined;
	readonly encryptionKey?: EncryptionKeyDetails | undefined;
	readonly export?: Export | undefined;
	readonly incompleteBlobListUri?: string | undefined;
	readonly jobType?: string | undefined;
	readonly logLevel?: string | undefined;
	readonly percentComplete?: number | undefined;
	readonly provisioningState?: string | undefined;
	readonly returnAddress?: ReturnAddress | undefined;
	readonly returnPackage?: PackageInformation | undefined;
	readonly returnShipping?: ReturnShipping | undefined;
	readonly shippingInformation?: ShippingInformation | undefined;
	readonly state?: string | undefined;
	readonly storageAccountId?: string | undefined;
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
	readonly stateOrProvince?: string | undefined;
	readonly streetAddress1: string;
	readonly streetAddress2?: string | undefined;
}
export interface ReturnShipping {
	readonly carrierAccountNumber: string;
	readonly carrierName: string;
}
export interface ShippingInformation {
	readonly additionalInformation?: string | undefined;
	readonly city?: string | undefined;
	readonly countryOrRegion?: string | undefined;
	readonly phone?: string | undefined;
	readonly postalCode?: string | undefined;
	readonly recipientName?: string | undefined;
	readonly stateOrProvince?: string | undefined;
	readonly streetAddress1?: string | undefined;
	readonly streetAddress2?: string | undefined;
}
export interface SystemData {
	readonly createdAt?: string | undefined;
	readonly createdBy?: string | undefined;
	readonly createdByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
	readonly lastModifiedAt?: string | undefined;
	readonly lastModifiedBy?: string | undefined;
	readonly lastModifiedByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
}
export default {
	jobs: jobs,
};
