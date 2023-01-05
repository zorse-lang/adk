import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class remoteRenderingAccounts
	extends ArmResource<remoteRenderingAccountsComponentInputs>
	implements remoteRenderingAccountsComponentOutputs
{
	constructor(entity: ADKEntity, options: remoteRenderingAccountsComponentInputs) {
		super(entity, options.name, "Microsoft.MixedReality/remoteRenderingAccounts", "2020-04-06-preview", options);
	}
	public readonly apiVersion: "2020-04-06-preview";
	public readonly id: string;
	public readonly type: "Microsoft.MixedReality/remoteRenderingAccounts";
}
export interface remoteRenderingAccountsComponentOutputs {
	readonly apiVersion: "2020-04-06-preview";
	readonly id: string;
	readonly type: "Microsoft.MixedReality/remoteRenderingAccounts";
}
export interface remoteRenderingAccountsComponentInputs {
	readonly identity?: Identity;
	readonly kind?: Sku;
	readonly location: string;
	readonly name: string;
	readonly plan?: Identity;
	readonly properties?: MixedRealityAccountProperties;
	readonly sku?: Sku;
	readonly systemData?: SystemData;
	readonly tags?: TrackedResourceTags;
}
export function listKeys(resource: remoteRenderingAccounts): AccountKeys {
	if (resource.apiVersion !== "2020-04-06-preview") {
		throw new Error(`listKeys is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.MixedReality/remoteRenderingAccounts") {
		throw new Error(`listKeys is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export interface AccountKeys {
	readonly primaryKey?: string;
	readonly secondaryKey?: string;
}
export interface Identity {
	readonly principalId?: string;
	readonly tenantId?: string;
	readonly type?: "SystemAssigned";
}
export interface MixedRealityAccountProperties {
	readonly accountDomain?: string;
	readonly accountId?: string;
	readonly storageAccountName?: string;
}
export interface Sku {
	readonly capacity?: number;
	readonly family?: string;
	readonly name: string;
	readonly size?: string;
	readonly tier?: "Basic" | "Free" | "Premium";
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
export default {
	remoteRenderingAccounts: remoteRenderingAccounts,
};
