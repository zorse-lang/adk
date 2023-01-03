import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class mediaservices extends ArmResource<mediaservicesComponentInputs> implements mediaservicesComponentOutputs {
	constructor(entity: ADKEntity, options: mediaservicesComponentInputs) {
		super(entity, options.name, "Microsoft.Media/mediaservices", "2015-10-01", options);
	}
	public readonly apiVersion: "2015-10-01";
	public readonly id: string;
	public readonly type: "Microsoft.Media/mediaservices";
}
export interface mediaservicesComponentOutputs {
	readonly apiVersion: "2015-10-01";
	readonly id: string;
	readonly type: "Microsoft.Media/mediaservices";
}
export interface mediaservicesComponentInputs {
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: MediaServiceProperties | undefined;
	readonly tags?: ResourceTags | undefined;
}
export function listKeys(resource: mediaservices): ServiceKeys {
	if (resource.apiVersion !== "2015-10-01") {
		throw new Error(`listKeys is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.Media/mediaservices") {
		throw new Error(`listKeys is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export interface ApiEndpoint {
	readonly endpoint?: string | undefined;
	readonly majorVersion?: string | undefined;
}
export interface MediaServiceProperties {
	readonly apiEndpoints?: ApiEndpoint[] | undefined;
	readonly storageAccounts?: StorageAccount[] | undefined;
}
export interface ResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface ServiceKeys {
	readonly primaryAuthEndpoint?: string | undefined;
	readonly primaryKey?: string | undefined;
	readonly scope?: string | undefined;
	readonly secondaryAuthEndpoint?: string | undefined;
	readonly secondaryKey?: string | undefined;
}
export interface StorageAccount {
	readonly id: string;
	readonly isPrimary: boolean;
}
export default {
	mediaservices: mediaservices,
};
