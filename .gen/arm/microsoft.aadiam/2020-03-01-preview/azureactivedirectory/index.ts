import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class privateLinkForAzureAd
	extends ArmResource<privateLinkForAzureAdComponentInputs>
	implements privateLinkForAzureAdComponentOutputs
{
	constructor(entity: ADKEntity, options: privateLinkForAzureAdComponentInputs) {
		super(entity, options.name, "microsoft.aadiam/privateLinkForAzureAd", "2020-03-01-preview", options);
	}
	public readonly apiVersion: "2020-03-01-preview";
	public readonly id: string;
	public readonly type: "microsoft.aadiam/privateLinkForAzureAd";
}
export interface privateLinkForAzureAdComponentOutputs {
	readonly apiVersion: "2020-03-01-preview";
	readonly id: string;
	readonly type: "microsoft.aadiam/privateLinkForAzureAd";
}
export interface privateLinkForAzureAdComponentInputs {
	readonly allTenants?: boolean | undefined;
	readonly name: string;
	readonly ownerTenantId?: string | undefined;
	readonly resourceGroup?: string | undefined;
	readonly resourceName?: string | undefined;
	readonly subscriptionId?: string | undefined;
	readonly tags?: PrivateLinkPolicyTags | undefined;
	readonly tenants?: string[] | undefined;
}
export class privateLinkForAzureAd_privateLinkResources
	extends ArmResource<privateLinkForAzureAd_privateLinkResourcesComponentInputs>
	implements privateLinkForAzureAd_privateLinkResourcesComponentOutputs
{
	constructor(entity: ADKEntity, options: privateLinkForAzureAd_privateLinkResourcesComponentInputs) {
		super(
			entity,
			options.name,
			"microsoft.aadiam/privateLinkForAzureAd/privateLinkResources",
			"2020-03-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2020-03-01-preview";
	public readonly id: string;
	public readonly type: "microsoft.aadiam/privateLinkForAzureAd/privateLinkResources";
}
export interface privateLinkForAzureAd_privateLinkResourcesComponentOutputs {
	readonly apiVersion: "2020-03-01-preview";
	readonly id: string;
	readonly type: "microsoft.aadiam/privateLinkForAzureAd/privateLinkResources";
}
export interface privateLinkForAzureAd_privateLinkResourcesComponentInputs {
	readonly name: string;
	readonly properties?: PrivateLinkResourceProperties | undefined;
}
export interface PrivateLinkPolicyTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface PrivateLinkResourceProperties {
	readonly groupId?: string | undefined;
	readonly requiredMembers?: string[] | undefined;
}
export default {
	privateLinkForAzureAd: privateLinkForAzureAd,
	"privateLinkForAzureAd/privateLinkResources": privateLinkForAzureAd_privateLinkResources,
};
