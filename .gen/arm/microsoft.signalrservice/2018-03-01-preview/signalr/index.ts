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
	readonly properties?: SignalRCreateOrUpdatePropertiesOrSignalRProperties | undefined;
	readonly sku?: ResourceSku | undefined;
	readonly tags?: SignalRUpdateParametersTags | undefined;
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
	readonly capacity?: number | undefined;
	readonly family?: string | undefined;
	readonly name: string;
	readonly size?: string | undefined;
	readonly tier?: ("Basic" | "Free" | "Premium" | "Standard") | undefined;
}
export interface SignalRCreateOrUpdatePropertiesOrSignalRProperties {
	readonly externalIP?: string | undefined;
	readonly hostName?: string | undefined;
	readonly hostNamePrefix?: string | undefined;
	readonly provisioningState?:
		| ("Canceled" | "Creating" | "Deleting" | "Failed" | "Moving" | "Running" | "Succeeded" | "Unknown" | "Updating")
		| undefined;
	readonly publicPort?: number | undefined;
	readonly serverPort?: number | undefined;
	readonly version?: string | undefined;
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
	SignalR: SignalR,
};
