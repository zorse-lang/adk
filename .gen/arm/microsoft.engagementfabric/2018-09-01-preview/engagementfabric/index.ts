import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class Accounts extends ArmResource<AccountsComponentInputs> implements AccountsComponentOutputs {
	constructor(entity: ADKEntity, options: AccountsComponentInputs) {
		super(entity, options.name, "Microsoft.EngagementFabric/Accounts", "2018-09-01-preview", options);
	}
	public readonly apiVersion: "2018-09-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.EngagementFabric/Accounts";
}
export interface AccountsComponentOutputs {
	readonly apiVersion: "2018-09-01-preview";
	readonly id: string;
	readonly type: "Microsoft.EngagementFabric/Accounts";
}
export interface AccountsComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly sku: SKU;
	readonly tags?: TrackedResourceTags;
}
export class Accounts_Channels
	extends ArmResource<Accounts_ChannelsComponentInputs>
	implements Accounts_ChannelsComponentOutputs
{
	constructor(entity: ADKEntity, options: Accounts_ChannelsComponentInputs) {
		super(entity, options.name, "Microsoft.EngagementFabric/Accounts/Channels", "2018-09-01-preview", options);
	}
	public readonly apiVersion: "2018-09-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.EngagementFabric/Accounts/Channels";
}
export interface Accounts_ChannelsComponentOutputs {
	readonly apiVersion: "2018-09-01-preview";
	readonly id: string;
	readonly type: "Microsoft.EngagementFabric/Accounts/Channels";
}
export interface Accounts_ChannelsComponentInputs {
	readonly name: string;
	readonly properties?: ChannelProperties;
}
export function listChannelTypes(resource: Accounts): ChannelTypeDescriptionList {
	if (resource.apiVersion !== "2018-09-01-preview") {
		throw new Error(`listChannelTypes is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.EngagementFabric/Accounts") {
		throw new Error(`listChannelTypes is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export function listKeys(resource: Accounts): KeyDescriptionList {
	if (resource.apiVersion !== "2018-09-01-preview") {
		throw new Error(`listKeys is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.EngagementFabric/Accounts") {
		throw new Error(`listKeys is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export interface ChannelProperties {
	readonly channelFunctions?: string[];
	readonly channelType: string;
	readonly credentials?: ChannelPropertiesCredentials;
}
export interface ChannelPropertiesCredentials {
	readonly [key: string]: string;
}
export interface ChannelTypeDescription {
	readonly channelDescription?: string;
	readonly channelFunctions?: string[];
	readonly channelType?: string;
}
export interface ChannelTypeDescriptionList {
	readonly value?: ChannelTypeDescription[];
}
export interface KeyDescription {
	readonly name?: string;
	readonly rank?: "PrimaryKey" | "SecondaryKey";
	readonly value?: string;
}
export interface KeyDescriptionList {
	readonly value?: KeyDescription[];
}
export interface SKU {
	readonly name: string;
	readonly tier?: string;
}
export interface TrackedResourceTags {
	readonly [key: string]: string;
}
export default {
	Accounts: Accounts,
	"Accounts/Channels": Accounts_Channels,
};
