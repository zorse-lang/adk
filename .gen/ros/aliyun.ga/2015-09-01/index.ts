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
	readonly AcceleratorName?: any | string;
	readonly AutoPay?: any | string;
	readonly AutoUseCoupon?: any | string;
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
	readonly AutoPay?: any | boolean;
	readonly AutoUseCoupon?: any | string;
	readonly BandwidthType?: any | string;
	readonly BillingType?: any | string;
	readonly CbnGeographicRegionIdA?: any | string;
	readonly CbnGeographicRegionIdB?: any | string;
	readonly ChargeType?: any | string;
	readonly Duration?: string | undefined;
	readonly PricingCycle?: string | undefined;
	readonly Ratio?: any | string;
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
	readonly Description?: string | undefined;
	readonly EndpointGroupType?: string | undefined;
	readonly EndpointRequestProtocol?: string | undefined;
	readonly HealthCheckEnabled?: boolean | undefined;
	readonly HealthCheckIntervalSeconds?: number | undefined;
	readonly HealthCheckPath?: string | undefined;
	readonly HealthCheckPort?: number | undefined;
	readonly HealthCheckProtocol?: string | undefined;
	readonly Name?: string | undefined;
	readonly ThresholdCount?: number | undefined;
	readonly TrafficPercentage?: number | undefined;
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
	readonly Certificates?: Certificates[] | undefined;
	readonly ClientAffinity?: string | undefined;
	readonly Description?: string | undefined;
	readonly Name?: string | undefined;
	readonly ProxyProtocol?: boolean | undefined;
	readonly SecurityPolicyId?: string | undefined;
	readonly XForwardedForConfig?: XForwardedForConfig | undefined;
	readonly LogicalId: string;
}
export interface EndpointConfigurations {
	readonly EnableProxyProtocol?: boolean | undefined;
	readonly Type: string;
	readonly Endpoint: string;
	readonly EnableClientIPPreservation?: boolean | undefined;
	readonly Weight: number;
}
export interface AccelerateRegion {
	readonly IpVersion?: string | undefined;
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
	readonly XForwardedForGaApEnabled?: boolean | undefined;
	readonly XForwardedForProtoEnabled?: boolean | undefined;
	readonly XRealIpEnabled?: boolean | undefined;
	readonly XForwardedForPortEnabled?: boolean | undefined;
	readonly XForwardedForGaIdEnabled?: boolean | undefined;
}
export default {
	Accelerator: Accelerator,
	BandwidthPackage: BandwidthPackage,
	BandwidthPackageAcceleratorAddition: BandwidthPackageAcceleratorAddition,
	EndpointGroup: EndpointGroup,
	IpSets: IpSets,
	Listener: Listener,
};
