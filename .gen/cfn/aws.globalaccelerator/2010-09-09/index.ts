import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class Accelerator extends CfnResource<AcceleratorComponentInputs> implements AcceleratorComponentOutputs {
	constructor(entity: ADKEntity, options: AcceleratorComponentInputs) {
		super(entity, options.LogicalId, "AWS::GlobalAccelerator::Accelerator", options);
	}
	public readonly AcceleratorArn: string;
	public readonly DnsName: string;
	public readonly DualStackDnsName: string;
	public readonly Ipv4Addresses: string[];
	public readonly Ipv6Addresses: string[];
}
export interface AcceleratorComponentOutputs {
	readonly AcceleratorArn: string;
	readonly DnsName: string;
	readonly DualStackDnsName: string;
	readonly Ipv4Addresses: string[];
	readonly Ipv6Addresses: string[];
}
export interface AcceleratorComponentInputs {
	readonly Name: string;
	readonly Enabled?: (boolean | undefined) | undefined;
	readonly IpAddresses?: (string[] | undefined) | undefined;
	readonly IpAddressType?: (string | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly LogicalId: string;
}
export class EndpointGroup extends CfnResource<EndpointGroupComponentInputs> implements EndpointGroupComponentOutputs {
	constructor(entity: ADKEntity, options: EndpointGroupComponentInputs) {
		super(entity, options.LogicalId, "AWS::GlobalAccelerator::EndpointGroup", options);
	}
	public readonly EndpointGroupArn: string;
}
export interface EndpointGroupComponentOutputs {
	readonly EndpointGroupArn: string;
}
export interface EndpointGroupComponentInputs {
	readonly EndpointGroupRegion: string;
	readonly ListenerArn: string;
	readonly EndpointConfigurations?: (EndpointConfiguration[] | undefined) | undefined;
	readonly HealthCheckIntervalSeconds?: (number | undefined) | undefined;
	readonly HealthCheckPath?: (string | undefined) | undefined;
	readonly HealthCheckPort?: (number | undefined) | undefined;
	readonly HealthCheckProtocol?: (string | undefined) | undefined;
	readonly PortOverrides?: (PortOverride[] | undefined) | undefined;
	readonly ThresholdCount?: (number | undefined) | undefined;
	readonly TrafficDialPercentage?: (number | undefined) | undefined;
	readonly LogicalId: string;
}
export class Listener extends CfnResource<ListenerComponentInputs> implements ListenerComponentOutputs {
	constructor(entity: ADKEntity, options: ListenerComponentInputs) {
		super(entity, options.LogicalId, "AWS::GlobalAccelerator::Listener", options);
	}
	public readonly ListenerArn: string;
}
export interface ListenerComponentOutputs {
	readonly ListenerArn: string;
}
export interface ListenerComponentInputs {
	readonly AcceleratorArn: string;
	readonly PortRanges: PortRange[];
	readonly Protocol: string;
	readonly ClientAffinity?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export interface EndpointConfiguration {
	readonly ClientIPPreservationEnabled?: (boolean | undefined) | undefined;
	readonly EndpointId: string;
	readonly Weight?: (number | undefined) | undefined;
}
export interface PortOverride {
	readonly EndpointPort: number;
	readonly ListenerPort: number;
}
export interface PortRange {
	readonly FromPort: number;
	readonly ToPort: number;
}
export default {
	Accelerator: Accelerator,
	EndpointGroup: EndpointGroup,
	Listener: Listener,
};
