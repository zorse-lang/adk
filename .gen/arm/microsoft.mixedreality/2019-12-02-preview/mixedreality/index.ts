import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class remoteRenderingAccounts
	extends ArmResource<remoteRenderingAccountsComponentInputs>
	implements remoteRenderingAccountsComponentOutputs
{
	constructor(entity: ADKEntity, options: remoteRenderingAccountsComponentInputs) {
		super(entity, options.name, "Microsoft.MixedReality/remoteRenderingAccounts", "2019-12-02-preview", options);
	}
	public readonly apiVersion: "2019-12-02-preview";
	public readonly id: string;
	public readonly type: "Microsoft.MixedReality/remoteRenderingAccounts";
}
export interface remoteRenderingAccountsComponentOutputs {
	readonly apiVersion: "2019-12-02-preview";
	readonly id: string;
	readonly type: "Microsoft.MixedReality/remoteRenderingAccounts";
}
export interface remoteRenderingAccountsComponentInputs {
	readonly identity?: Identity;
	readonly location: string;
	readonly name: string;
	readonly properties?: MixedRealityAccountProperties;
	readonly tags?: TrackedResourceTags;
}
export class spatialAnchorsAccounts
	extends ArmResource<spatialAnchorsAccountsComponentInputs>
	implements spatialAnchorsAccountsComponentOutputs
{
	constructor(entity: ADKEntity, options: spatialAnchorsAccountsComponentInputs) {
		super(entity, options.name, "Microsoft.MixedReality/spatialAnchorsAccounts", "2019-12-02-preview", options);
	}
	public readonly apiVersion: "2019-12-02-preview";
	public readonly id: string;
	public readonly type: "Microsoft.MixedReality/spatialAnchorsAccounts";
}
export interface spatialAnchorsAccountsComponentOutputs {
	readonly apiVersion: "2019-12-02-preview";
	readonly id: string;
	readonly type: "Microsoft.MixedReality/spatialAnchorsAccounts";
}
export interface spatialAnchorsAccountsComponentInputs {
	readonly identity?: Identity;
	readonly location: string;
	readonly name: string;
	readonly properties?: MixedRealityAccountProperties;
	readonly tags?: TrackedResourceTags;
}
export interface Identity {
	readonly principalId?: string;
	readonly tenantId?: string;
	readonly type?: "SystemAssigned";
}
export interface MixedRealityAccountProperties {
	readonly accountDomain?: string;
	readonly accountId?: string;
}
export interface TrackedResourceTags {
	readonly [key: string]: string;
}
export default {
	remoteRenderingAccounts: remoteRenderingAccounts,
	spatialAnchorsAccounts: spatialAnchorsAccounts,
};
