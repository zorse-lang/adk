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
	readonly allTenants?: boolean;
	readonly name: string;
	readonly ownerTenantId?: string;
	readonly resourceGroup?: string;
	readonly resourceName?: string;
	readonly subscriptionId?: string;
	readonly tags?: PrivateLinkPolicyTags;
	readonly tenants?: string[];
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
	readonly properties?: PrivateLinkResourceProperties;
}
export interface PrivateLinkPolicyTags {
	readonly [key: string]: string;
}
export interface PrivateLinkResourceProperties {
	readonly groupId?: string;
	readonly requiredMembers?: string[];
}
export default {
	privateLinkForAzureAd: privateLinkForAzureAd,
	"privateLinkForAzureAd/privateLinkResources": privateLinkForAzureAd_privateLinkResources,
};
