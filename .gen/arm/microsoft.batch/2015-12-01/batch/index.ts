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
	readonly properties?: BatchAccountBasePropertiesOrBatchAccountProperties | undefined;
	readonly tags?: BatchAccountCreateParametersTags | undefined;
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
	readonly allowUpdates?: boolean | undefined;
	readonly defaultVersion?: string | undefined;
	readonly displayName?: string | undefined;
	readonly name: string;
	readonly packages?: ApplicationPackage[] | undefined;
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
	readonly format?: string | undefined;
	readonly lastActivationTime?: string | undefined;
	readonly name: string;
	readonly state?: ("active" | "pending") | undefined;
	readonly storageUrl?: string | undefined;
	readonly storageUrlExpiry?: string | undefined;
	readonly version?: string | undefined;
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
	readonly format?: string | undefined;
	readonly id?: string | undefined;
	readonly lastActivationTime?: string | undefined;
	readonly state?: ("active" | "pending") | undefined;
	readonly storageUrl?: string | undefined;
	readonly storageUrlExpiry?: string | undefined;
	readonly version?: string | undefined;
}
export interface AutoStorageBasePropertiesOrAutoStorageProperties {
	readonly lastKeySync?: string | undefined;
	readonly storageAccountId: string;
}
export interface BatchAccountBasePropertiesOrBatchAccountProperties {
	readonly accountEndpoint?: string | undefined;
	readonly activeJobAndJobScheduleQuota?: number | undefined;
	readonly autoStorage?: AutoStorageBasePropertiesOrAutoStorageProperties | undefined;
	readonly coreQuota?: number | undefined;
	readonly poolQuota?: number | undefined;
	readonly provisioningState?: ("Cancelled" | "Creating" | "Deleting" | "Failed" | "Invalid") | undefined;
}
export interface BatchAccountCreateParametersTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface BatchAccountKeys {
	readonly primary?: string | undefined;
	readonly secondary?: string | undefined;
}
export default {
	batchAccounts: batchAccounts,
	"batchAccounts/applications": batchAccounts_applications,
	"batchAccounts/applications/versions": batchAccounts_applications_versions,
};
