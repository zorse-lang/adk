import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class RegionNetworkEndpointGroups
	extends GdmResource<RegionNetworkEndpointGroupsComponentInputs>
	implements RegionNetworkEndpointGroupsComponentOutputs
{
	constructor(entity: ADKEntity, options: RegionNetworkEndpointGroupsComponentInputs) {
		super(entity, options.name, "compute.alpha.RegionNetworkEndpointGroups", options);
	}
	public readonly creationTimestamp?: string | undefined;
	public readonly id?: string | undefined;
	public readonly kind?: string | undefined;
	public readonly region?: string | undefined;
	public readonly selfLink?: string | undefined;
	public readonly selfLinkWithId?: string | undefined;
	public readonly size?: number | undefined;
	public readonly zone?: string | undefined;
}
export interface RegionNetworkEndpointGroupsComponentOutputs {
	readonly creationTimestamp?: string | undefined;
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly region?: string | undefined;
	readonly selfLink?: string | undefined;
	readonly selfLinkWithId?: string | undefined;
	readonly size?: number | undefined;
	readonly zone?: string | undefined;
}
export interface RegionNetworkEndpointGroupsComponentInputs {
	readonly annotations?: { [P in string]: string } | undefined;
	readonly appEngine?: NetworkEndpointGroupAppEngine | undefined;
	readonly cloudFunction?: NetworkEndpointGroupCloudFunction | undefined;
	readonly cloudRun?: NetworkEndpointGroupCloudRun | undefined;
	readonly defaultPort?: number | undefined;
	readonly description?: string | undefined;
	readonly loadBalancer?: NetworkEndpointGroupLbNetworkEndpointGroup | undefined;
	readonly name: string;
	readonly network?: string | undefined;
	readonly networkEndpointType?: string | undefined;
	readonly pscData?: NetworkEndpointGroupPscData | undefined;
	readonly pscTargetService?: string | undefined;
	readonly requestId?: string | undefined;
	readonly serverlessDeployment?: NetworkEndpointGroupServerlessDeployment | undefined;
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
	readonly loadBalancer?: NetworkEndpointGroupLbNetworkEndpointGroup | undefined;
	readonly name?: string | undefined;
	readonly network?: string | undefined;
	readonly networkEndpointType?: string | undefined;
	readonly pscData?: NetworkEndpointGroupPscData | undefined;
	readonly pscTargetService?: string | undefined;
	readonly region?: string | undefined;
	readonly selfLink?: string | undefined;
	readonly selfLinkWithId?: string | undefined;
	readonly serverlessDeployment?: NetworkEndpointGroupServerlessDeployment | undefined;
	readonly size?: number | undefined;
	readonly subnetwork?: string | undefined;
	readonly type?: string | undefined;
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
export interface NetworkEndpointGroupLbNetworkEndpointGroup {
	readonly defaultPort?: number | undefined;
	readonly network?: string | undefined;
	readonly subnetwork?: string | undefined;
	readonly zone?: string | undefined;
}
export interface NetworkEndpointGroupPscData {
	readonly consumerPscAddress?: string | undefined;
	readonly pscConnectionId?: string | undefined;
	readonly pscConnectionStatus?: string | undefined;
}
export interface NetworkEndpointGroupServerlessDeployment {
	readonly platform?: string | undefined;
	readonly resource?: string | undefined;
	readonly urlMask?: string | undefined;
	readonly version?: string | undefined;
}
export default {
	RegionNetworkEndpointGroups: RegionNetworkEndpointGroups,
};
