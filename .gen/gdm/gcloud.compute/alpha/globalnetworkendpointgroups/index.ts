import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class GlobalNetworkEndpointGroups
	extends GdmResource<GlobalNetworkEndpointGroupsComponentInputs>
	implements GlobalNetworkEndpointGroupsComponentOutputs
{
	constructor(entity: ADKEntity, options: GlobalNetworkEndpointGroupsComponentInputs) {
		super(entity, options.name, "compute.alpha.GlobalNetworkEndpointGroups", options);
	}
	public readonly creationTimestamp?: string;
	public readonly id?: string;
	public readonly kind?: string;
	public readonly region?: string;
	public readonly selfLink?: string;
	public readonly selfLinkWithId?: string;
	public readonly size?: number;
	public readonly zone?: string;
}
export interface GlobalNetworkEndpointGroupsComponentOutputs {
	readonly creationTimestamp?: string;
	readonly id?: string;
	readonly kind?: string;
	readonly region?: string;
	readonly selfLink?: string;
	readonly selfLinkWithId?: string;
	readonly size?: number;
	readonly zone?: string;
}
export interface GlobalNetworkEndpointGroupsComponentInputs {
	readonly annotations?: { [P in string]: string };
	readonly appEngine?: NetworkEndpointGroupAppEngine;
	readonly cloudFunction?: NetworkEndpointGroupCloudFunction;
	readonly cloudRun?: NetworkEndpointGroupCloudRun;
	readonly defaultPort?: number;
	readonly description?: string;
	readonly loadBalancer?: NetworkEndpointGroupLbNetworkEndpointGroup;
	readonly name: string;
	readonly network?: string;
	readonly networkEndpointType?: string;
	readonly pscData?: NetworkEndpointGroupPscData;
	readonly pscTargetService?: string;
	readonly requestId?: string;
	readonly serverlessDeployment?: NetworkEndpointGroupServerlessDeployment;
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
	readonly loadBalancer?: NetworkEndpointGroupLbNetworkEndpointGroup;
	readonly name?: string;
	readonly network?: string;
	readonly networkEndpointType?: string;
	readonly pscData?: NetworkEndpointGroupPscData;
	readonly pscTargetService?: string;
	readonly region?: string;
	readonly selfLink?: string;
	readonly selfLinkWithId?: string;
	readonly serverlessDeployment?: NetworkEndpointGroupServerlessDeployment;
	readonly size?: number;
	readonly subnetwork?: string;
	readonly type?: string;
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
export interface NetworkEndpointGroupLbNetworkEndpointGroup {
	readonly defaultPort?: number;
	readonly network?: string;
	readonly subnetwork?: string;
	readonly zone?: string;
}
export interface NetworkEndpointGroupPscData {
	readonly consumerPscAddress?: string;
	readonly pscConnectionId?: string;
	readonly pscConnectionStatus?: string;
}
export interface NetworkEndpointGroupServerlessDeployment {
	readonly platform?: string;
	readonly resource?: string;
	readonly urlMask?: string;
	readonly version?: string;
}
export default {
	GlobalNetworkEndpointGroups: GlobalNetworkEndpointGroups,
};
