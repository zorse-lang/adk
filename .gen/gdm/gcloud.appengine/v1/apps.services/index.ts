import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class AppsServices extends GdmResource<AppsServicesComponentInputs> implements AppsServicesComponentOutputs {
	constructor(entity: ADKEntity, options: AppsServicesComponentInputs) {
		super(entity, options.name, "appengine.v1.AppsServices", options);
	}
}
export interface AppsServicesComponentOutputs {}
export interface AppsServicesComponentInputs {
	readonly id?: string | undefined;
	readonly labels?: { [P in string]: string } | undefined;
	readonly name: string;
	readonly networkSettings?: NetworkSettings | undefined;
	readonly split?: TrafficSplit | undefined;
	readonly type: string;
}
export interface NetworkSettings {
	readonly ingressTrafficAllowed?: string | undefined;
}
export interface Service {
	readonly id?: string | undefined;
	readonly labels?: { [P in string]: string } | undefined;
	readonly name?: string | undefined;
	readonly networkSettings?: NetworkSettings | undefined;
	readonly split?: TrafficSplit | undefined;
}
export interface TrafficSplit {
	readonly allocations?: { [P in string]: number } | undefined;
	readonly shardBy?: string | undefined;
}
export default {
	AppsServices: AppsServices,
};
