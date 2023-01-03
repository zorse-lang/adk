import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class NetworkEndpointGroups
	extends GdmResource<NetworkEndpointGroupsComponentInputs>
	implements NetworkEndpointGroupsComponentOutputs
{
	constructor(entity: ADKEntity, options: NetworkEndpointGroupsComponentInputs) {
		super(entity, options.name, "compute.v1.NetworkEndpointGroups", options);
	}
	public readonly creationTimestamp?: string | undefined;
	public readonly id?: string | undefined;
	public readonly kind?: string | undefined;
	public readonly region?: string | undefined;
	public readonly selfLink?: string | undefined;
	public readonly size?: number | undefined;
	public readonly zone?: string | undefined;
}
export interface NetworkEndpointGroupsComponentOutputs {
	readonly creationTimestamp?: string | undefined;
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly region?: string | undefined;
	readonly selfLink?: string | undefined;
	readonly size?: number | undefined;
	readonly zone?: string | undefined;
}
export interface NetworkEndpointGroupsComponentInputs {
	readonly annotations?: { [P in string]: string } | undefined;
	readonly appEngine?: NetworkEndpointGroupAppEngine | undefined;
	readonly cloudFunction?: NetworkEndpointGroupCloudFunction | undefined;
	readonly cloudRun?: NetworkEndpointGroupCloudRun | undefined;
	readonly defaultPort?: number | undefined;
	readonly description?: string | undefined;
	readonly name: string;
	readonly network?: string | undefined;
	readonly networkEndpointType?: string | undefined;
	readonly pscData?: NetworkEndpointGroupPscData | undefined;
	readonly pscTargetService?: string | undefined;
	readonly requestId?: string | undefined;
	readonly subnetwork?: string | undefined;
	readonly type: string;
}
export interface NetworkEndpointGroup {
	readonly annotations?: { [P in string]: string } | undefined;
	readonly appEngine?: NetworkEndpointGroupAppEngine | undefined;
	readonly cloudFunction?: NetworkEndpointGroupCloudFunction | undefined;
	readonly cloudRun?: NetworkEndpointGroupCloudRun | undefined;
	readonly creationTimestamp?: string | undefined;
	readonly defaultPort?: number | undefined;
	readonly description?: string | undefined;
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly name?: string | undefined;
	readonly network?: string | undefined;
	readonly networkEndpointType?: string | undefined;
	readonly pscData?: NetworkEndpointGroupPscData | undefined;
	readonly pscTargetService?: string | undefined;
	readonly region?: string | undefined;
	readonly selfLink?: string | undefined;
	readonly size?: number | undefined;
	readonly subnetwork?: string | undefined;
	readonly zone?: string | undefined;
}
export interface NetworkEndpointGroupAppEngine {
	readonly service?: string | undefined;
	readonly urlMask?: string | undefined;
	readonly version?: string | undefined;
}
export interface NetworkEndpointGroupCloudFunction {
	readonly function?: string | undefined;
	readonly urlMask?: string | undefined;
}
export interface NetworkEndpointGroupCloudRun {
	readonly service?: string | undefined;
	readonly tag?: string | undefined;
	readonly urlMask?: string | undefined;
}
export interface NetworkEndpointGroupPscData {
	readonly consumerPscAddress?: string | undefined;
	readonly pscConnectionId?: string | undefined;
	readonly pscConnectionStatus?: string | undefined;
}
export default {
	NetworkEndpointGroups: NetworkEndpointGroups,
};
