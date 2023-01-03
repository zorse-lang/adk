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
	readonly etag?: string | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: NetworkSecurityPerimeterProperties | undefined;
	readonly tags?: ResourceTags | undefined;
}
export interface NetworkSecurityPerimeterProperties {
	readonly description?: string | undefined;
	readonly displayName?: string | undefined;
	readonly provisioningState?: ("Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
}
export interface ResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export default {
	networkSecurityPerimeters: networkSecurityPerimeters,
};
