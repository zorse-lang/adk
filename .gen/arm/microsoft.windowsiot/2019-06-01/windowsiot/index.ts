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
	readonly etag?: string | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: DeviceServiceProperties | undefined;
	readonly tags?: TrackedResourceTags | undefined;
}
export interface DeviceServiceProperties {
	readonly adminDomainName?: string | undefined;
	readonly billingDomainName?: string | undefined;
	readonly notes?: string | undefined;
	readonly quantity?: number | undefined;
	readonly startDate?: string | undefined;
}
export interface TrackedResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export default {
	deviceServices: deviceServices,
};
