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
	readonly properties?: SignalRCreateOrUpdatePropertiesOrSignalRProperties;
	readonly sku?: ResourceSku;
	readonly tags?: SignalRUpdateParametersTags;
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
	readonly capacity?: number;
}
export interface SignalRCorsSettings {
	readonly allowedOrigins?: string[];
}
export interface SignalRCreateOrUpdatePropertiesOrSignalRProperties {
	readonly cors?: SignalRCorsSettings;
	readonly externalIP?: string;
	readonly features?: SignalRFeature[];
}
export interface SignalRFeature {
	readonly flag: "EnableConnectivityLogs" | "ServiceMode";
}
export interface SignalRFeatureProperties {
	readonly [key: string]: string;
}
export interface SignalRKeys {
	readonly primaryConnectionString?: string;
	readonly primaryKey?: string;
	readonly secondaryConnectionString?: string;
	readonly secondaryKey?: string;
}
export interface SignalRUpdateParametersTags {
	readonly [key: string]: string;
}
export default {
	signalR: signalR,
};
