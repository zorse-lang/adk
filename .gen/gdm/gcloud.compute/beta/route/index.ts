import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class Route extends GdmResource<RouteComponentInputs> implements RouteComponentOutputs {
	constructor(entity: ADKEntity, options: RouteComponentInputs) {
		super(entity, options.name, "compute.beta.route", options);
	}
	public readonly asPaths?: RouteAsPath[] | undefined;
	public readonly creationTimestamp?: string | undefined;
	public readonly id?: string | undefined;
	public readonly kind?: string | undefined;
	public readonly nextHopInterconnectAttachment?: string | undefined;
	public readonly nextHopPeering?: string | undefined;
	public readonly routeStatus?: string | undefined;
	public readonly routeType?: string | undefined;
	public readonly selfLink?: string | undefined;
	public readonly warnings?:
		| Array<{ code?: string; data?: Array<{ key?: string; value?: string }>; message?: string }>
		| undefined;
}
export interface RouteComponentOutputs {
	readonly asPaths?: RouteAsPath[] | undefined;
	readonly creationTimestamp?: string | undefined;
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly nextHopInterconnectAttachment?: string | undefined;
	readonly nextHopPeering?: string | undefined;
	readonly routeStatus?: string | undefined;
	readonly routeType?: string | undefined;
	readonly selfLink?: string | undefined;
	readonly warnings?:
		| Array<{ code?: string; data?: Array<{ key?: string; value?: string }>; message?: string }>
		| undefined;
}
export interface RouteComponentInputs {
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
	readonly tags?: string[] | undefined;
	readonly type: string;
}
export interface RouteAsPath {
	readonly asLists?: number[] | undefined;
	readonly pathSegmentType?: string | undefined;
}
export default {
	Route: Route,
};
