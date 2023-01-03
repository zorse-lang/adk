import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class ingestionSettings
	extends ArmResource<ingestionSettingsComponentInputs>
	implements ingestionSettingsComponentOutputs
{
	constructor(entity: ADKEntity, options: ingestionSettingsComponentInputs) {
		super(entity, options.name, "Microsoft.Security/ingestionSettings", "2021-01-15-preview", options);
	}
	public readonly apiVersion: "2021-01-15-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Security/ingestionSettings";
}
export interface ingestionSettingsComponentOutputs {
	readonly apiVersion: "2021-01-15-preview";
	readonly id: string;
	readonly type: "Microsoft.Security/ingestionSettings";
}
export interface ingestionSettingsComponentInputs {
	readonly name: string;
	readonly properties?: any | undefined;
}
export function listConnectionStrings(resource: ingestionSettings): ConnectionStrings {
	if (resource.apiVersion !== "2021-01-15-preview") {
		throw new Error(`listConnectionStrings is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.Security/ingestionSettings") {
		throw new Error(`listConnectionStrings is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export function listTokens(resource: ingestionSettings): IngestionSettingToken {
	if (resource.apiVersion !== "2021-01-15-preview") {
		throw new Error(`listTokens is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.Security/ingestionSettings") {
		throw new Error(`listTokens is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export interface ConnectionStrings {
	readonly value: IngestionConnectionString[];
}
export interface IngestionConnectionString {
	readonly location?: string | undefined;
	readonly value?: string | undefined;
}
export interface IngestionSettingToken {
	readonly token?: string | undefined;
}
export default {
	ingestionSettings: ingestionSettings,
};
