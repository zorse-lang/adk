import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class workspaces_savedSearches
	extends ArmResource<workspaces_savedSearchesComponentInputs>
	implements workspaces_savedSearchesComponentOutputs
{
	constructor(entity: ADKEntity, options: workspaces_savedSearchesComponentInputs) {
		super(entity, options.name, "Microsoft.OperationalInsights/workspaces/savedSearches", "2015-03-20", options);
	}
	public readonly apiVersion: "2015-03-20";
	public readonly id: string;
	public readonly type: "Microsoft.OperationalInsights/workspaces/savedSearches";
}
export interface workspaces_savedSearchesComponentOutputs {
	readonly apiVersion: "2015-03-20";
	readonly id: string;
	readonly type: "Microsoft.OperationalInsights/workspaces/savedSearches";
}
export interface workspaces_savedSearchesComponentInputs {
	readonly eTag?: string;
	readonly name: string;
	readonly properties: SavedSearchProperties;
}
export class workspaces_storageInsightConfigs
	extends ArmResource<workspaces_storageInsightConfigsComponentInputs>
	implements workspaces_storageInsightConfigsComponentOutputs
{
	constructor(entity: ADKEntity, options: workspaces_storageInsightConfigsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.OperationalInsights/workspaces/storageInsightConfigs",
			"2015-03-20",
			options,
		);
	}
	public readonly apiVersion: "2015-03-20";
	public readonly id: string;
	public readonly type: "Microsoft.OperationalInsights/workspaces/storageInsightConfigs";
}
export interface workspaces_storageInsightConfigsComponentOutputs {
	readonly apiVersion: "2015-03-20";
	readonly id: string;
	readonly type: "Microsoft.OperationalInsights/workspaces/storageInsightConfigs";
}
export interface workspaces_storageInsightConfigsComponentInputs {
	readonly eTag?: string;
	readonly name: string;
	readonly properties?: StorageInsightProperties;
	readonly tags?: ProxyResourceTags;
}
export function listKeys(resource: ArmResource): SharedKeys {
	if (resource.apiVersion !== "2015-03-20") {
		throw new Error(`listKeys is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.OperationalInsights/workspaces") {
		throw new Error(`listKeys is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export interface ProxyResourceTags {
	readonly [key: string]: string;
}
export interface SavedSearchProperties {
	readonly category: string;
	readonly displayName: string;
	readonly query: string;
	readonly tags?: Tag[];
	readonly version?: number;
}
export interface SharedKeys {
	readonly primarySharedKey?: string;
	readonly secondarySharedKey?: string;
}
export interface StorageAccount {
	readonly id: string;
	readonly key: string;
}
export interface StorageInsightProperties {
	readonly containers?: string[];
	readonly status?: StorageInsightStatus;
	readonly storageAccount: StorageAccount;
	readonly tables?: string[];
}
export interface StorageInsightStatus {
	readonly description?: string;
	readonly state: "ERROR" | "OK";
}
export interface Tag {
	readonly name: string;
	readonly value: string;
}
export default {
	"workspaces/savedSearches": workspaces_savedSearches,
	"workspaces/storageInsightConfigs": workspaces_storageInsightConfigs,
};
