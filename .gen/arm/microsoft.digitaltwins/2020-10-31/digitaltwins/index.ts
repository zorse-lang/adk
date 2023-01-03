import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class digitalTwinsInstances
	extends ArmResource<digitalTwinsInstancesComponentInputs>
	implements digitalTwinsInstancesComponentOutputs
{
	constructor(entity: ADKEntity, options: digitalTwinsInstancesComponentInputs) {
		super(entity, options.name, "Microsoft.DigitalTwins/digitalTwinsInstances", "2020-10-31", options);
	}
	public readonly apiVersion: "2020-10-31";
	public readonly id: string;
	public readonly type: "Microsoft.DigitalTwins/digitalTwinsInstances";
}
export interface digitalTwinsInstancesComponentOutputs {
	readonly apiVersion: "2020-10-31";
	readonly id: string;
	readonly type: "Microsoft.DigitalTwins/digitalTwinsInstances";
}
export interface digitalTwinsInstancesComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: DigitalTwinsProperties | undefined;
	readonly tags?: DigitalTwinsResourceTags | undefined;
}
export class digitalTwinsInstances_endpoints
	extends ArmResource<digitalTwinsInstances_endpointsComponentInputs>
	implements digitalTwinsInstances_endpointsComponentOutputs
{
	constructor(entity: ADKEntity, options: digitalTwinsInstances_endpointsComponentInputs) {
		super(entity, options.name, "Microsoft.DigitalTwins/digitalTwinsInstances/endpoints", "2020-10-31", options);
	}
	public readonly apiVersion: "2020-10-31";
	public readonly id: string;
	public readonly type: "Microsoft.DigitalTwins/digitalTwinsInstances/endpoints";
}
export interface digitalTwinsInstances_endpointsComponentOutputs {
	readonly apiVersion: "2020-10-31";
	readonly id: string;
	readonly type: "Microsoft.DigitalTwins/digitalTwinsInstances/endpoints";
}
export interface digitalTwinsInstances_endpointsComponentInputs {
	readonly name: string;
	readonly properties: DigitalTwinsEndpointResourceProperties;
}
export interface DigitalTwinsEndpointResourceProperties {
	readonly createdTime?: string | undefined;
	readonly deadLetterSecret?: string | undefined;
	readonly provisioningState?:
		| (
				| "Canceled"
				| "Deleted"
				| "Deleting"
				| "Disabled"
				| "Failed"
				| "Moving"
				| "Provisioning"
				| "Restoring"
				| "Succeeded"
				| "Suspending"
				| "Warning"
		  )
		| undefined;
}
export interface DigitalTwinsProperties {
	readonly createdTime?: string | undefined;
	readonly hostName?: string | undefined;
	readonly lastUpdatedTime?: string | undefined;
	readonly provisioningState?:
		| (
				| "Canceled"
				| "Deleted"
				| "Deleting"
				| "Failed"
				| "Moving"
				| "Provisioning"
				| "Restoring"
				| "Succeeded"
				| "Suspending"
				| "Warning"
		  )
		| undefined;
}
export interface DigitalTwinsResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export default {
	digitalTwinsInstances: digitalTwinsInstances,
	"digitalTwinsInstances/endpoints": digitalTwinsInstances_endpoints,
};
