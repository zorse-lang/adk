import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class RegionNotificationEndpoints
	extends GdmResource<RegionNotificationEndpointsComponentInputs>
	implements RegionNotificationEndpointsComponentOutputs
{
	constructor(entity: ADKEntity, options: RegionNotificationEndpointsComponentInputs) {
		super(entity, options.name, "compute.v1.RegionNotificationEndpoints", options);
	}
	public readonly creationTimestamp?: string;
	public readonly id?: string;
	public readonly kind?: string;
	public readonly region?: string;
	public readonly selfLink?: string;
}
export interface RegionNotificationEndpointsComponentOutputs {
	readonly creationTimestamp?: string;
	readonly id?: string;
	readonly kind?: string;
	readonly region?: string;
	readonly selfLink?: string;
}
export interface RegionNotificationEndpointsComponentInputs {
	readonly description?: string;
	readonly grpcSettings?: NotificationEndpointGrpcSettings;
	readonly name: string;
	readonly requestId?: string;
}
export interface Duration {
	readonly nanos?: number;
	readonly seconds?: string;
}
export interface NotificationEndpoint {
	readonly creationTimestamp?: string;
	readonly description?: string;
	readonly grpcSettings?: NotificationEndpointGrpcSettings;
	readonly id?: string;
	readonly kind?: string;
	readonly name?: string;
	readonly region?: string;
	readonly selfLink?: string;
}
export interface NotificationEndpointGrpcSettings {
	readonly authority?: string;
	readonly endpoint?: string;
	readonly payloadName?: string;
	readonly resendInterval?: Duration;
	readonly retryDurationSec?: number;
}
export default {
	RegionNotificationEndpoints: RegionNotificationEndpoints,
};
