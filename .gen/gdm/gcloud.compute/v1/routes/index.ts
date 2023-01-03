import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class Routes extends GdmResource<RoutesComponentInputs> implements RoutesComponentOutputs {
	constructor(entity: ADKEntity, options: RoutesComponentInputs) {
		super(entity, options.name, "compute.v1.Routes", options);
	}
	public readonly asPaths?: RouteAsPath[] | undefined;
	public readonly creationTimestamp?: string | undefined;
	public readonly id?: string | undefined;
	public readonly kind?: string | undefined;
	public readonly nextHopPeering?: string | undefined;
	public readonly routeStatus?: string | undefined;
	public readonly routeType?: string | undefined;
	public readonly selfLink?: string | undefined;
	public readonly warnings?:
		| Array<{ code?: string; data?: Array<{ key?: string; value?: string }>; message?: string }>
		| undefined;
}
export interface RoutesComponentOutputs {
	readonly asPaths?: RouteAsPath[] | undefined;
	readonly creationTimestamp?: string | undefined;
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly nextHopPeering?: string | undefined;
	readonly routeStatus?: string | undefined;
	readonly routeType?: string | undefined;
	readonly selfLink?: string | undefined;
	readonly warnings?:
		| Array<{ code?: string; data?: Array<{ key?: string; value?: string }>; message?: string }>
		| undefined;
}
export interface RoutesComponentInputs {
	readonly description?: string | undefined;
	readonly destRange?: string | undefined;
	readonly name: string;
	readonly network?: string | undefined;
	readonly nextHopGateway?: string | undefined;
	readonly nextHopIlb?: string | undefined;
	readonly nextHopInstance?: string | undefined;
	readonly nextHopIp?: string | undefined;
	readonly nextHopNetwork?: string | undefined;
	readonly nextHopVpnTunnel?: string | undefined;
	readonly priority?: number | undefined;
	readonly requestId?: string | undefined;
	readonly tags?: string[] | undefined;
	readonly type: string;
}
export interface Route {
	readonly asPaths?: RouteAsPath[] | undefined;
	readonly creationTimestamp?: string | undefined;
	readonly description?: string | undefined;
	readonly destRange?: string | undefined;
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly name?: string | undefined;
	readonly network?: string | undefined;
	readonly nextHopGateway?: string | undefined;
	readonly nextHopIlb?: string | undefined;
	readonly nextHopInstance?: string | undefined;
	readonly nextHopIp?: string | undefined;
	readonly nextHopNetwork?: string | undefined;
	readonly nextHopPeering?: string | undefined;
	readonly nextHopVpnTunnel?: string | undefined;
	readonly priority?: number | undefined;
	readonly routeStatus?: string | undefined;
	readonly routeType?: string | undefined;
	readonly selfLink?: string | undefined;
	readonly tags?: string[] | undefined;
	readonly warnings?:
		| Array<{ code?: string; data?: Array<{ key?: string; value?: string }>; message?: string }>
		| undefined;
}
export interface RouteAsPath {
	readonly asLists?: number[] | undefined;
	readonly pathSegmentType?: string | undefined;
}
export default {
	Routes: Routes,
};
