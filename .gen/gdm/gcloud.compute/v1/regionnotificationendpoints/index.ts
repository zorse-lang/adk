import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class RegionNotificationEndpoints
	extends GdmResource<RegionNotificationEndpointsComponentInputs>
	implements RegionNotificationEndpointsComponentOutputs
{
	constructor(entity: ADKEntity, options: RegionNotificationEndpointsComponentInputs) {
		super(entity, options.name, "compute.v1.RegionNotificationEndpoints", options);
	}
	public readonly creationTimestamp?: string | undefined;
	public readonly id?: string | undefined;
	public readonly kind?: string | undefined;
	public readonly region?: string | undefined;
	public readonly selfLink?: string | undefined;
}
export interface RegionNotificationEndpointsComponentOutputs {
	readonly creationTimestamp?: string | undefined;
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly region?: string | undefined;
	readonly selfLink?: string | undefined;
}
export interface RegionNotificationEndpointsComponentInputs {
	readonly description?: string | undefined;
	readonly grpcSettings?: NotificationEndpointGrpcSettings | undefined;
	readonly name: string;
	readonly requestId?: string | undefined;
	readonly type: string;
}
export interface Duration {
	readonly nanos?: number | undefined;
	readonly seconds?: string | undefined;
}
export interface NotificationEndpoint {
	readonly creationTimestamp?: string | undefined;
	readonly description?: string | undefined;
	readonly grpcSettings?: NotificationEndpointGrpcSettings | undefined;
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly name?: string | undefined;
	readonly region?: string | undefined;
	readonly selfLink?: string | undefined;
}
export interface NotificationEndpointGrpcSettings {
	readonly authority?: string | undefined;
	readonly endpoint?: string | undefined;
	readonly payloadName?: string | undefined;
	readonly resendInterval?: Duration | undefined;
	readonly retryDurationSec?: number | undefined;
}
export default {
	RegionNotificationEndpoints: RegionNotificationEndpoints,
};
