import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class SignalR extends ArmResource<SignalRComponentInputs> implements SignalRComponentOutputs {
	constructor(entity: ADKEntity, options: SignalRComponentInputs) {
		super(entity, options.name, "Microsoft.SignalRService/SignalR", "2018-03-01-preview", options);
	}
	public readonly apiVersion: "2018-03-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SignalRService/SignalR";
}
export interface SignalRComponentOutputs {
	readonly apiVersion: "2018-03-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SignalRService/SignalR";
}
export interface SignalRComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: SignalRCreateOrUpdatePropertiesOrSignalRProperties;
	readonly sku?: ResourceSku;
	readonly tags?: SignalRUpdateParametersTags;
}
export function listKeys(resource: SignalR): SignalRKeys {
	if (resource.apiVersion !== "2018-03-01-preview") {
		throw new Error(`listKeys is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.SignalRService/SignalR") {
		throw new Error(`listKeys is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export interface ResourceSku {
	readonly capacity?: number;
	readonly family?: string;
	readonly name: string;
	readonly size?: string;
	readonly tier?: "Basic" | "Free" | "Premium" | "Standard";
}
export interface SignalRCreateOrUpdatePropertiesOrSignalRProperties {
	readonly externalIP?: string;
	readonly hostName?: string;
	readonly hostNamePrefix?: string;
	readonly provisioningState?:
		| "Canceled"
		| "Creating"
		| "Deleting"
		| "Failed"
		| "Moving"
		| "Running"
		| "Succeeded"
		| "Unknown"
		| "Updating";
	readonly publicPort?: number;
	readonly serverPort?: number;
	readonly version?: string;
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
	SignalR: SignalR,
};
