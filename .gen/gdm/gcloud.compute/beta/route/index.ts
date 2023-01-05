import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class Route extends GdmResource<RouteComponentInputs> implements RouteComponentOutputs {
	constructor(entity: ADKEntity, options: RouteComponentInputs) {
		super(entity, options.name, "compute.beta.route", options);
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
export interface RouteComponentOutputs {
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
export interface RouteComponentInputs {
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
	readonly tags?: string[];
}
export interface RouteAsPath {
	readonly asLists?: number[];
	readonly pathSegmentType?: string;
}
export default {
	Route: Route,
};
