import { RosResource, Entity as ADKEntity } from "@zorse/adk";

export class VpcEndpoint extends RosResource<VpcEndpointComponentInputs> implements VpcEndpointComponentOutputs {
	constructor(entity: ADKEntity, options: VpcEndpointComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::PrivateLink::VpcEndpoint", options);
	}
	public readonly EndpointDomain: any;
	public readonly Bandwidth: any;
	public readonly EndpointId: any;
	public readonly ZoneDomains: any;
}
export interface VpcEndpointComponentOutputs {
	readonly EndpointDomain: any;
	readonly Bandwidth: any;
	readonly EndpointId: any;
	readonly ZoneDomains: any;
}
export interface VpcEndpointComponentInputs {
	readonly SecurityGroupId: string[];
	readonly VpcId: any | string;
	readonly EndpointDescription?: string | undefined;
	readonly EndpointName?: any | string;
	readonly EndpointType?: string | undefined;
	readonly ProtectedEnabled?: boolean | undefined;
	readonly ServiceId?: any | string;
	readonly ServiceName?: any | string;
	readonly Zone?: Zone[] | undefined;
	readonly ZonePrivateIpAddressCount?: number | undefined;
	readonly LogicalId: string;
}
export class VpcEndpointService
	extends RosResource<VpcEndpointServiceComponentInputs>
	implements VpcEndpointServiceComponentOutputs
{
	constructor(entity: ADKEntity, options: VpcEndpointServiceComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::PrivateLink::VpcEndpointService", options);
	}
	public readonly ServiceName: any;
	public readonly MaxBandwidth: any;
	public readonly ServiceDomain: any;
	public readonly MinBandwidth: any;
	public readonly ServiceId: any;
}
export interface VpcEndpointServiceComponentOutputs {
	readonly ServiceName: any;
	readonly MaxBandwidth: any;
	readonly ServiceDomain: any;
	readonly MinBandwidth: any;
	readonly ServiceId: any;
}
export interface VpcEndpointServiceComponentInputs {
	readonly AutoAcceptEnabled?: boolean | undefined;
	readonly ConnectBandwidth?: number | undefined;
	readonly Payer?: string | undefined;
	readonly Resource?: Resource[] | undefined;
	readonly ServiceDescription?: any | string;
	readonly ServiceResourceType?: string | undefined;
	readonly User?: string[] | undefined;
	readonly ZoneAffinityEnabled?: boolean | undefined;
	readonly LogicalId: string;
}
export class VpcEndpointServiceAttachment
	extends RosResource<VpcEndpointServiceAttachmentComponentInputs>
	implements VpcEndpointServiceAttachmentComponentOutputs
{
	constructor(entity: ADKEntity, options: VpcEndpointServiceAttachmentComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::PrivateLink::VpcEndpointServiceAttachment", options);
	}
}
export interface VpcEndpointServiceAttachmentComponentOutputs {}
export interface VpcEndpointServiceAttachmentComponentInputs {
	readonly ResourceId: any | string;
	readonly ResourceType: any | string;
	readonly ServiceId: any | string;
	readonly LogicalId: string;
}
export interface Zone {
	readonly ZoneId?: string | undefined;
	readonly Ip?: string | undefined;
	readonly VSwitchId?: string | undefined;
}
export interface Resource {
	readonly ZoneId: string;
	readonly ResourceId: string;
	readonly ResourceType: string;
}
export default {
	VpcEndpoint: VpcEndpoint,
	VpcEndpointService: VpcEndpointService,
	VpcEndpointServiceAttachment: VpcEndpointServiceAttachment,
};
