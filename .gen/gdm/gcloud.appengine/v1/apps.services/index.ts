import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class AppsServices extends GdmResource<AppsServicesComponentInputs> implements AppsServicesComponentOutputs {
	constructor(entity: ADKEntity, options: AppsServicesComponentInputs) {
		super(entity, options.name, "appengine.v1.AppsServices", options);
	}
}
export interface AppsServicesComponentOutputs {}
export interface AppsServicesComponentInputs {
	readonly id?: string;
	readonly labels?: { [P in string]: string };
	readonly name: string;
	readonly networkSettings?: NetworkSettings;
	readonly split?: TrafficSplit;
}
export interface NetworkSettings {
	readonly ingressTrafficAllowed?: string;
}
export interface Service {
	readonly id?: string;
	readonly labels?: { [P in string]: string };
	readonly name?: string;
	readonly networkSettings?: NetworkSettings;
	readonly split?: TrafficSplit;
}
export interface TrafficSplit {
	readonly allocations?: { [P in string]: number };
	readonly shardBy?: string;
}
export default {
	AppsServices: AppsServices,
};
