import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class signalR extends ArmResource<signalRComponentInputs> implements signalRComponentOutputs {
	constructor(entity: ADKEntity, options: signalRComponentInputs) {
		super(entity, options.name, "Microsoft.SignalRService/signalR", "2018-10-01", options);
	}
	public readonly apiVersion: "2018-10-01";
	public readonly id: string;
	public readonly type: "Microsoft.SignalRService/signalR";
}
export interface signalRComponentOutputs {
	readonly apiVersion: "2018-10-01";
	readonly id: string;
	readonly type: "Microsoft.SignalRService/signalR";
}
export interface signalRComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: SignalRCreateOrUpdatePropertiesOrSignalRProperties | undefined;
	readonly sku?: ResourceSku | undefined;
	readonly tags?: SignalRUpdateParametersTags | undefined;
}
export function listKeys(resource: ArmResource): SignalRKeys {
	if (resource.apiVersion !== "2018-10-01") {
		throw new Error(`listKeys is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.SignalRService/SignalR") {
		throw new Error(`listKeys is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export interface ResourceSku {
	readonly capacity?: number | undefined;
}
export interface SignalRCorsSettings {
	readonly allowedOrigins?: string[] | undefined;
}
export interface SignalRCreateOrUpdatePropertiesOrSignalRProperties {
	readonly cors?: SignalRCorsSettings | undefined;
	readonly externalIP?: string | undefined;
	readonly features?: SignalRFeature[] | undefined;
}
export interface SignalRFeature {
	readonly flag: "EnableConnectivityLogs" | "ServiceMode";
}
export interface SignalRFeatureProperties {
	readonly "[ key: string ]"?: string | undefined;
}
export interface SignalRKeys {
	readonly primaryConnectionString?: string | undefined;
	readonly primaryKey?: string | undefined;
	readonly secondaryConnectionString?: string | undefined;
	readonly secondaryKey?: string | undefined;
}
export interface SignalRUpdateParametersTags {
	readonly "[ key: string ]"?: string | undefined;
}
export default {
	signalR: signalR,
};
