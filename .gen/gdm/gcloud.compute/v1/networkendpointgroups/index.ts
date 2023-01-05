import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class NetworkEndpointGroups
	extends GdmResource<NetworkEndpointGroupsComponentInputs>
	implements NetworkEndpointGroupsComponentOutputs
{
	constructor(entity: ADKEntity, options: NetworkEndpointGroupsComponentInputs) {
		super(entity, options.name, "compute.v1.NetworkEndpointGroups", options);
	}
	public readonly creationTimestamp?: string;
	public readonly id?: string;
	public readonly kind?: string;
	public readonly region?: string;
	public readonly selfLink?: string;
	public readonly size?: number;
	public readonly zone?: string;
}
export interface NetworkEndpointGroupsComponentOutputs {
	readonly creationTimestamp?: string;
	readonly id?: string;
	readonly kind?: string;
	readonly region?: string;
	readonly selfLink?: string;
	readonly size?: number;
	readonly zone?: string;
}
export interface NetworkEndpointGroupsComponentInputs {
	readonly annotations?: { [P in string]: string };
	readonly appEngine?: NetworkEndpointGroupAppEngine;
	readonly cloudFunction?: NetworkEndpointGroupCloudFunction;
	readonly cloudRun?: NetworkEndpointGroupCloudRun;
	readonly defaultPort?: number;
	readonly description?: string;
	readonly name: string;
	readonly network?: string;
	readonly networkEndpointType?: string;
	readonly pscData?: NetworkEndpointGroupPscData;
	readonly pscTargetService?: string;
	readonly requestId?: string;
	readonly subnetwork?: string;
}
export interface NetworkEndpointGroup {
	readonly annotations?: { [P in string]: string };
	readonly appEngine?: NetworkEndpointGroupAppEngine;
	readonly cloudFunction?: NetworkEndpointGroupCloudFunction;
	readonly cloudRun?: NetworkEndpointGroupCloudRun;
	readonly creationTimestamp?: string;
	readonly defaultPort?: number;
	readonly description?: string;
	readonly id?: string;
	readonly kind?: string;
	readonly name?: string;
	readonly network?: string;
	readonly networkEndpointType?: string;
	readonly pscData?: NetworkEndpointGroupPscData;
	readonly pscTargetService?: string;
	readonly region?: string;
	readonly selfLink?: string;
	readonly size?: number;
	readonly subnetwork?: string;
	readonly zone?: string;
}
export interface NetworkEndpointGroupAppEngine {
	readonly service?: string;
	readonly urlMask?: string;
	readonly version?: string;
}
export interface NetworkEndpointGroupCloudFunction {
	readonly function?: string;
	readonly urlMask?: string;
}
export interface NetworkEndpointGroupCloudRun {
	readonly service?: string;
	readonly tag?: string;
	readonly urlMask?: string;
}
export interface NetworkEndpointGroupPscData {
	readonly consumerPscAddress?: string;
	readonly pscConnectionId?: string;
	readonly pscConnectionStatus?: string;
}
export default {
	NetworkEndpointGroups: NetworkEndpointGroups,
};
