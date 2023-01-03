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
	readonly identity?: Identity | undefined;
	readonly kind?: Sku | undefined;
	readonly location: string;
	readonly name: string;
	readonly plan?: Identity | undefined;
	readonly properties?: MixedRealityAccountProperties | undefined;
	readonly sku?: Sku | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: TrackedResourceTags | undefined;
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
	readonly primaryKey?: string | undefined;
	readonly secondaryKey?: string | undefined;
}
export interface Identity {
	readonly principalId?: string | undefined;
	readonly tenantId?: string | undefined;
	readonly type?: "SystemAssigned" | undefined;
}
export interface MixedRealityAccountProperties {
	readonly accountDomain?: string | undefined;
	readonly accountId?: string | undefined;
	readonly storageAccountName?: string | undefined;
}
export interface Sku {
	readonly capacity?: number | undefined;
	readonly family?: string | undefined;
	readonly name: string;
	readonly size?: string | undefined;
	readonly tier?: ("Basic" | "Free" | "Premium") | undefined;
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
export default {
	remoteRenderingAccounts: remoteRenderingAccounts,
};
