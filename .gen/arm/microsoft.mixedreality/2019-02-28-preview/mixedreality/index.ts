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
	readonly identity?: Identity | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties?: SpatialAnchorsAccountProperties | undefined;
	readonly tags?: TrackedResourceTags | undefined;
}
export interface Identity {
	readonly principalId?: string | undefined;
	readonly tenantId?: string | undefined;
	readonly type?: "SystemAssigned" | undefined;
}
export interface SpatialAnchorsAccountProperties {
	readonly accountDomain?: string | undefined;
	readonly accountId?: string | undefined;
}
export interface TrackedResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export default {
	spatialAnchorsAccounts: spatialAnchorsAccounts,
};
