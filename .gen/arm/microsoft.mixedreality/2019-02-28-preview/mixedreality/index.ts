import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class spatialAnchorsAccounts
	extends ArmResource<spatialAnchorsAccountsComponentInputs>
	implements spatialAnchorsAccountsComponentOutputs
{
	constructor(entity: ADKEntity, options: spatialAnchorsAccountsComponentInputs) {
		super(entity, options.name, "Microsoft.MixedReality/spatialAnchorsAccounts", "2019-02-28-preview", options);
	}
	public readonly apiVersion: "2019-02-28-preview";
	public readonly id: string;
	public readonly type: "Microsoft.MixedReality/spatialAnchorsAccounts";
}
export interface spatialAnchorsAccountsComponentOutputs {
	readonly apiVersion: "2019-02-28-preview";
	readonly id: string;
	readonly type: "Microsoft.MixedReality/spatialAnchorsAccounts";
}
export interface spatialAnchorsAccountsComponentInputs {
	readonly identity?: Identity;
	readonly location: string;
	readonly name: string;
	readonly properties?: SpatialAnchorsAccountProperties;
	readonly tags?: TrackedResourceTags;
}
export interface Identity {
	readonly principalId?: string;
	readonly tenantId?: string;
	readonly type?: "SystemAssigned";
}
export interface SpatialAnchorsAccountProperties {
	readonly accountDomain?: string;
	readonly accountId?: string;
}
export interface TrackedResourceTags {
	readonly [key: string]: string;
}
export default {
	spatialAnchorsAccounts: spatialAnchorsAccounts,
};
