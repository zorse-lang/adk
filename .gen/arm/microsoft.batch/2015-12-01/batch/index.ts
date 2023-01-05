import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class batchAccounts extends ArmResource<batchAccountsComponentInputs> implements batchAccountsComponentOutputs {
	constructor(entity: ADKEntity, options: batchAccountsComponentInputs) {
		super(entity, options.name, "Microsoft.Batch/batchAccounts", "2015-12-01", options);
	}
	public readonly apiVersion: "2015-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.Batch/batchAccounts";
}
export interface batchAccountsComponentOutputs {
	readonly apiVersion: "2015-12-01";
	readonly id: string;
	readonly type: "Microsoft.Batch/batchAccounts";
}
export interface batchAccountsComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: BatchAccountBasePropertiesOrBatchAccountProperties;
	readonly tags?: BatchAccountCreateParametersTags;
}
export class batchAccounts_applications
	extends ArmResource<batchAccounts_applicationsComponentInputs>
	implements batchAccounts_applicationsComponentOutputs
{
	constructor(entity: ADKEntity, options: batchAccounts_applicationsComponentInputs) {
		super(entity, options.name, "Microsoft.Batch/batchAccounts/applications", "2015-12-01", options);
	}
	public readonly apiVersion: "2015-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.Batch/batchAccounts/applications";
}
export interface batchAccounts_applicationsComponentOutputs {
	readonly apiVersion: "2015-12-01";
	readonly id: string;
	readonly type: "Microsoft.Batch/batchAccounts/applications";
}
export interface batchAccounts_applicationsComponentInputs {
	readonly allowUpdates?: boolean;
	readonly defaultVersion?: string;
	readonly displayName?: string;
	readonly name: string;
	readonly packages?: ApplicationPackage[];
}
export class batchAccounts_applications_versions
	extends ArmResource<batchAccounts_applications_versionsComponentInputs>
	implements batchAccounts_applications_versionsComponentOutputs
{
	constructor(entity: ADKEntity, options: batchAccounts_applications_versionsComponentInputs) {
		super(entity, options.name, "Microsoft.Batch/batchAccounts/applications/versions", "2015-12-01", options);
	}
	public readonly apiVersion: "2015-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.Batch/batchAccounts/applications/versions";
}
export interface batchAccounts_applications_versionsComponentOutputs {
	readonly apiVersion: "2015-12-01";
	readonly id: string;
	readonly type: "Microsoft.Batch/batchAccounts/applications/versions";
}
export interface batchAccounts_applications_versionsComponentInputs {
	readonly format?: string;
	readonly lastActivationTime?: string;
	readonly name: string;
	readonly state?: "active" | "pending";
	readonly storageUrl?: string;
	readonly storageUrlExpiry?: string;
	readonly version?: string;
}
export function listKeys(resource: batchAccounts): BatchAccountKeys {
	if (resource.apiVersion !== "2015-12-01") {
		throw new Error(`listKeys is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.Batch/batchAccounts") {
		throw new Error(`listKeys is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export interface ApplicationPackage {
	readonly format?: string;
	readonly id?: string;
	readonly lastActivationTime?: string;
	readonly state?: "active" | "pending";
	readonly storageUrl?: string;
	readonly storageUrlExpiry?: string;
	readonly version?: string;
}
export interface AutoStorageBasePropertiesOrAutoStorageProperties {
	readonly lastKeySync?: string;
	readonly storageAccountId: string;
}
export interface BatchAccountBasePropertiesOrBatchAccountProperties {
	readonly accountEndpoint?: string;
	readonly activeJobAndJobScheduleQuota?: number;
	readonly autoStorage?: AutoStorageBasePropertiesOrAutoStorageProperties;
	readonly coreQuota?: number;
	readonly poolQuota?: number;
	readonly provisioningState?: "Cancelled" | "Creating" | "Deleting" | "Failed" | "Invalid";
}
export interface BatchAccountCreateParametersTags {
	readonly [key: string]: string;
}
export interface BatchAccountKeys {
	readonly primary?: string;
	readonly secondary?: string;
}
export default {
	batchAccounts: batchAccounts,
	"batchAccounts/applications": batchAccounts_applications,
	"batchAccounts/applications/versions": batchAccounts_applications_versions,
};
