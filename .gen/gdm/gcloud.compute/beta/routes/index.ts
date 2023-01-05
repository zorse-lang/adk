import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class Routes extends GdmResource<RoutesComponentInputs> implements RoutesComponentOutputs {
	constructor(entity: ADKEntity, options: RoutesComponentInputs) {
		super(entity, options.name, "compute.beta.Routes", options);
	}
	public readonly asPaths?: RouteAsPath[];
	public readonly creationTimestamp?: string;
	public readonly id?: string;
	public readonly kind?: string;
	public readonly nextHopInterconnectAttachment?: string;
	public readonly nextHopPeering?: string;
	public readonly routeStatus?: string;
	public readonly routeType?: string;
	public readonly selfLink?: string;
	public readonly warnings?: Array<{ code?: string; data?: Array<{ key?: string; value?: string }>; message?: string }>;
}
export interface RoutesComponentOutputs {
	readonly asPaths?: RouteAsPath[];
	readonly creationTimestamp?: string;
	readonly id?: string;
	readonly kind?: string;
	readonly nextHopInterconnectAttachment?: string;
	readonly nextHopPeering?: string;
	readonly routeStatus?: string;
	readonly routeType?: string;
	readonly selfLink?: string;
	readonly warnings?: Array<{ code?: string; data?: Array<{ key?: string; value?: string }>; message?: string }>;
}
export interface RoutesComponentInputs {
	readonly description?: string;
	readonly destRange?: string;
	readonly name: string;
	readonly network?: string;
	readonly nextHopGateway?: string;
	readonly nextHopIlb?: string;
	readonly nextHopInstance?: string;
	readonly nextHopIp?: string;
	readonly nextHopNetwork?: string;
	readonly nextHopVpnTunnel?: string;
	readonly priority?: number;
	readonly requestId?: string;
	readonly tags?: string[];
}
export interface Route {
	readonly asPaths?: RouteAsPath[];
	readonly creationTimestamp?: string;
	readonly description?: string;
	readonly destRange?: string;
	readonly id?: string;
	readonly kind?: string;
	readonly name?: string;
	readonly network?: string;
	readonly nextHopGateway?: string;
	readonly nextHopIlb?: string;
	readonly nextHopInstance?: string;
	readonly nextHopInterconnectAttachment?: string;
	readonly nextHopIp?: string;
	readonly nextHopNetwork?: string;
	readonly nextHopPeering?: string;
	readonly nextHopVpnTunnel?: string;
	readonly priority?: number;
	readonly routeStatus?: string;
	readonly routeType?: string;
	readonly selfLink?: string;
	readonly tags?: string[];
	readonly warnings?: Array<{ code?: string; data?: Array<{ key?: string; value?: string }>; message?: string }>;
}
export interface RouteAsPath {
	readonly asLists?: number[];
	readonly pathSegmentType?: string;
}
export default {
	Routes: Routes,
};
