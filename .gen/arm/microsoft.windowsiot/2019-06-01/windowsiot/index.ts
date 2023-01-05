import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class deviceServices extends ArmResource<deviceServicesComponentInputs> implements deviceServicesComponentOutputs {
	constructor(entity: ADKEntity, options: deviceServicesComponentInputs) {
		super(entity, options.name, "Microsoft.WindowsIoT/deviceServices", "2019-06-01", options);
	}
	public readonly apiVersion: "2019-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.WindowsIoT/deviceServices";
}
export interface deviceServicesComponentOutputs {
	readonly apiVersion: "2019-06-01";
	readonly id: string;
	readonly type: "Microsoft.WindowsIoT/deviceServices";
}
export interface deviceServicesComponentInputs {
	readonly etag?: string;
	readonly location?: string;
	readonly name: string;
	readonly properties?: DeviceServiceProperties;
	readonly tags?: TrackedResourceTags;
}
export interface DeviceServiceProperties {
	readonly adminDomainName?: string;
	readonly billingDomainName?: string;
	readonly notes?: string;
	readonly quantity?: number;
	readonly startDate?: string;
}
export interface TrackedResourceTags {
	readonly [key: string]: string;
}
export default {
	deviceServices: deviceServices,
};
