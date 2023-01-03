import { RosResource, Entity as ADKEntity } from "@zorse/adk";

export class Accelerator extends RosResource<AcceleratorComponentInputs> implements AcceleratorComponentOutputs {
	constructor(entity: ADKEntity, options: AcceleratorComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::GA::Accelerator", options);
	}
	public readonly PaymentType: any;
	public readonly OrderId: any;
	public readonly AcceleratorId: any;
}
export interface AcceleratorComponentOutputs {
	readonly PaymentType: any;
	readonly OrderId: any;
	readonly AcceleratorId: any;
}
export interface AcceleratorComponentInputs {
	readonly Duration: any | string;
	readonly PricingCycle: any | string;
	readonly Spec: any | string;
	readonly AcceleratorName?: (any | string) | undefined;
	readonly AutoPay?: (any | string) | undefined;
	readonly AutoUseCoupon?: (any | string) | undefined;
	readonly LogicalId: string;
}
export class BandwidthPackage
	extends RosResource<BandwidthPackageComponentInputs>
	implements BandwidthPackageComponentOutputs
{
	constructor(entity: ADKEntity, options: BandwidthPackageComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::GA::BandwidthPackage", options);
	}
	public readonly BandwidthPackageName: any;
	public readonly PaymentType: any;
	public readonly BandwidthPackageId: any;
}
export interface BandwidthPackageComponentOutputs {
	readonly BandwidthPackageName: any;
	readonly PaymentType: any;
	readonly BandwidthPackageId: any;
}
export interface BandwidthPackageComponentInputs {
	readonly Bandwidth: any | number;
	readonly Type: any | string;
	readonly AutoPay?: (any | boolean) | undefined;
	readonly AutoUseCoupon?: (any | string) | undefined;
	readonly BandwidthType?: (any | string) | undefined;
	readonly BillingType?: (any | string) | undefined;
	readonly CbnGeographicRegionIdA?: (any | string) | undefined;
	readonly CbnGeographicRegionIdB?: (any | string) | undefined;
	readonly ChargeType?: (any | string) | undefined;
	readonly Duration?: (string | undefined) | undefined;
	readonly PricingCycle?: (string | undefined) | undefined;
	readonly Ratio?: (any | string) | undefined;
	readonly LogicalId: string;
}
export class BandwidthPackageAcceleratorAddition
	extends RosResource<BandwidthPackageAcceleratorAdditionComponentInputs>
	implements BandwidthPackageAcceleratorAdditionComponentOutputs
{
	constructor(entity: ADKEntity, options: BandwidthPackageAcceleratorAdditionComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::GA::BandwidthPackageAcceleratorAddition", options);
	}
}
export interface BandwidthPackageAcceleratorAdditionComponentOutputs {}
export interface BandwidthPackageAcceleratorAdditionComponentInputs {
	readonly AcceleratorId: any | string;
	readonly BandwidthPackageId: any | string;
	readonly LogicalId: string;
}
export class EndpointGroup extends RosResource<EndpointGroupComponentInputs> implements EndpointGroupComponentOutputs {
	constructor(entity: ADKEntity, options: EndpointGroupComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::GA::EndpointGroup", options);
	}
	public readonly EndpointGroupId: any;
}
export interface EndpointGroupComponentOutputs {
	readonly EndpointGroupId: any;
}
export interface EndpointGroupComponentInputs {
	readonly AcceleratorId: string;
	readonly EndpointConfigurations: EndpointConfigurations[];
	readonly EndpointGroupRegion: string;
	readonly ListenerId: string;
	readonly Description?: (string | undefined) | undefined;
	readonly EndpointGroupType?: (string | undefined) | undefined;
	readonly EndpointRequestProtocol?: (string | undefined) | undefined;
	readonly HealthCheckEnabled?: (boolean | undefined) | undefined;
	readonly HealthCheckIntervalSeconds?: (number | undefined) | undefined;
	readonly HealthCheckPath?: (string | undefined) | undefined;
	readonly HealthCheckPort?: (number | undefined) | undefined;
	readonly HealthCheckProtocol?: (string | undefined) | undefined;
	readonly Name?: (string | undefined) | undefined;
	readonly ThresholdCount?: (number | undefined) | undefined;
	readonly TrafficPercentage?: (number | undefined) | undefined;
	readonly LogicalId: string;
}
export class IpSets extends RosResource<IpSetsComponentInputs> implements IpSetsComponentOutputs {
	constructor(entity: ADKEntity, options: IpSetsComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::GA::IpSets", options);
	}
	public readonly AccelerateRegionIds: any;
	public readonly IpVersions: any;
	public readonly IpSetIds: any;
}
export interface IpSetsComponentOutputs {
	readonly AccelerateRegionIds: any;
	readonly IpVersions: any;
	readonly IpSetIds: any;
}
export interface IpSetsComponentInputs {
	readonly AccelerateRegion: AccelerateRegion[];
	readonly AcceleratorId: string;
	readonly LogicalId: string;
}
export class Listener extends RosResource<ListenerComponentInputs> implements ListenerComponentOutputs {
	constructor(entity: ADKEntity, options: ListenerComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::GA::Listener", options);
	}
	public readonly ListenerId: any;
}
export interface ListenerComponentOutputs {
	readonly ListenerId: any;
}
export interface ListenerComponentInputs {
	readonly AcceleratorId: string;
	readonly PortRanges: PortRanges[];
	readonly Protocol: string;
	readonly Certificates?: (Certificates[] | undefined) | undefined;
	readonly ClientAffinity?: (string | undefined) | undefined;
	readonly Description?: (string | undefined) | undefined;
	readonly Name?: (string | undefined) | undefined;
	readonly ProxyProtocol?: (boolean | undefined) | undefined;
	readonly SecurityPolicyId?: (string | undefined) | undefined;
	readonly XForwardedForConfig?: (XForwardedForConfig | undefined) | undefined;
	readonly LogicalId: string;
}
export interface EndpointConfigurations {
	readonly EnableProxyProtocol?: (boolean | undefined) | undefined;
	readonly Type: string;
	readonly Endpoint: string;
	readonly EnableClientIPPreservation?: (boolean | undefined) | undefined;
	readonly Weight: number;
}
export interface AccelerateRegion {
	readonly IpVersion?: (string | undefined) | undefined;
	readonly Bandwidth: number;
	readonly AccelerateRegionId: string;
}
export interface Certificates {
	readonly Id: string;
}
export interface PortRanges {
	readonly FromPort: number;
	readonly ToPort: number;
}
export interface XForwardedForConfig {
	readonly XForwardedForGaApEnabled?: (boolean | undefined) | undefined;
	readonly XForwardedForProtoEnabled?: (boolean | undefined) | undefined;
	readonly XRealIpEnabled?: (boolean | undefined) | undefined;
	readonly XForwardedForPortEnabled?: (boolean | undefined) | undefined;
	readonly XForwardedForGaIdEnabled?: (boolean | undefined) | undefined;
}
export default {
	Accelerator: Accelerator,
	BandwidthPackage: BandwidthPackage,
	BandwidthPackageAcceleratorAddition: BandwidthPackageAcceleratorAddition,
	EndpointGroup: EndpointGroup,
	IpSets: IpSets,
	Listener: Listener,
};
