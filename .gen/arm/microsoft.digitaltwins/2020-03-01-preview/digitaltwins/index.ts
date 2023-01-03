import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class digitalTwinsInstances
	extends ArmResource<digitalTwinsInstancesComponentInputs>
	implements digitalTwinsInstancesComponentOutputs
{
	constructor(entity: ADKEntity, options: digitalTwinsInstancesComponentInputs) {
		super(entity, options.name, "Microsoft.DigitalTwins/digitalTwinsInstances", "2020-03-01-preview", options);
	}
	public readonly apiVersion: "2020-03-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.DigitalTwins/digitalTwinsInstances";
}
export interface digitalTwinsInstancesComponentOutputs {
	readonly apiVersion: "2020-03-01-preview";
	readonly id: string;
	readonly type: "Microsoft.DigitalTwins/digitalTwinsInstances";
}
export interface digitalTwinsInstancesComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: DigitalTwinsProperties | undefined;
	readonly sku?: DigitalTwinsSkuInfo | undefined;
	readonly tags?: DigitalTwinsResourceTags | undefined;
}
export class digitalTwinsInstances_endpoints
	extends ArmResource<digitalTwinsInstances_endpointsComponentInputs>
	implements digitalTwinsInstances_endpointsComponentOutputs
{
	constructor(entity: ADKEntity, options: digitalTwinsInstances_endpointsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.DigitalTwins/digitalTwinsInstances/endpoints",
			"2020-03-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2020-03-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.DigitalTwins/digitalTwinsInstances/endpoints";
}
export interface digitalTwinsInstances_endpointsComponentOutputs {
	readonly apiVersion: "2020-03-01-preview";
	readonly id: string;
	readonly type: "Microsoft.DigitalTwins/digitalTwinsInstances/endpoints";
}
export interface digitalTwinsInstances_endpointsComponentInputs {
	readonly name: string;
	readonly properties?: DigitalTwinsEndpointResourceProperties | undefined;
}
export interface DigitalTwinsEndpointResourceProperties {
	readonly createdTime?: string | undefined;
	readonly provisioningState?: ("Canceled" | "Deleting" | "Failed" | "Provisioning" | "Succeeded") | undefined;
	readonly tags?: DigitalTwinsEndpointResourcePropertiesTags | undefined;
}
export interface DigitalTwinsEndpointResourcePropertiesTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface DigitalTwinsProperties {
	readonly createdTime?: string | undefined;
	readonly hostName?: string | undefined;
	readonly lastUpdatedTime?: string | undefined;
	readonly provisioningState?: ("Canceled" | "Deleting" | "Failed" | "Provisioning" | "Succeeded") | undefined;
}
export interface DigitalTwinsResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface DigitalTwinsSkuInfo {
	readonly name: "F1";
}
export default {
	digitalTwinsInstances: digitalTwinsInstances,
	"digitalTwinsInstances/endpoints": digitalTwinsInstances_endpoints,
};
