import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class networkSecurityPerimeters
	extends ArmResource<networkSecurityPerimetersComponentInputs>
	implements networkSecurityPerimetersComponentOutputs
{
	constructor(entity: ADKEntity, options: networkSecurityPerimetersComponentInputs) {
		super(entity, options.name, "Microsoft.Network/networkSecurityPerimeters", "2021-03-01-preview", options);
	}
	public readonly apiVersion: "2021-03-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Network/networkSecurityPerimeters";
}
export interface networkSecurityPerimetersComponentOutputs {
	readonly apiVersion: "2021-03-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Network/networkSecurityPerimeters";
}
export interface networkSecurityPerimetersComponentInputs {
	readonly etag?: string;
	readonly location?: string;
	readonly name: string;
	readonly properties?: NetworkSecurityPerimeterProperties;
	readonly tags?: ResourceTags;
}
export interface NetworkSecurityPerimeterProperties {
	readonly description?: string;
	readonly displayName?: string;
	readonly provisioningState?: "Deleting" | "Failed" | "Succeeded" | "Updating";
}
export interface ResourceTags {
	readonly [key: string]: string;
}
export default {
	networkSecurityPerimeters: networkSecurityPerimeters,
};
