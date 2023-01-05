import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class HttpNamespace extends CfnResource<HttpNamespaceComponentInputs> implements HttpNamespaceComponentOutputs {
	constructor(entity: ADKEntity, options: HttpNamespaceComponentInputs) {
		super(entity, options.LogicalId, "AWS::ServiceDiscovery::HttpNamespace", options);
	}
	public readonly Arn: string;
	public readonly Id: string;
}
export interface HttpNamespaceComponentOutputs {
	readonly Arn: string;
	readonly Id: string;
}
export interface HttpNamespaceComponentInputs {
	readonly Name: string;
	readonly Description?: string | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export class Instance extends CfnResource<InstanceComponentInputs> implements InstanceComponentOutputs {
	constructor(entity: ADKEntity, options: InstanceComponentInputs) {
		super(entity, options.LogicalId, "AWS::ServiceDiscovery::Instance", options);
	}
}
export interface InstanceComponentOutputs {}
export interface InstanceComponentInputs {
	readonly InstanceAttributes: any;
	readonly ServiceId: string;
	readonly InstanceId?: string | undefined;
	readonly LogicalId: string;
}
export class PrivateDnsNamespace
	extends CfnResource<PrivateDnsNamespaceComponentInputs>
	implements PrivateDnsNamespaceComponentOutputs
{
	constructor(entity: ADKEntity, options: PrivateDnsNamespaceComponentInputs) {
		super(entity, options.LogicalId, "AWS::ServiceDiscovery::PrivateDnsNamespace", options);
	}
	public readonly Arn: string;
	public readonly HostedZoneId: string;
	public readonly Id: string;
}
export interface PrivateDnsNamespaceComponentOutputs {
	readonly Arn: string;
	readonly HostedZoneId: string;
	readonly Id: string;
}
export interface PrivateDnsNamespaceComponentInputs {
	readonly Name: string;
	readonly Vpc: string;
	readonly Description?: string | undefined;
	readonly Properties?: Properties | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export class PublicDnsNamespace
	extends CfnResource<PublicDnsNamespaceComponentInputs>
	implements PublicDnsNamespaceComponentOutputs
{
	constructor(entity: ADKEntity, options: PublicDnsNamespaceComponentInputs) {
		super(entity, options.LogicalId, "AWS::ServiceDiscovery::PublicDnsNamespace", options);
	}
	public readonly Arn: string;
	public readonly HostedZoneId: string;
	public readonly Id: string;
}
export interface PublicDnsNamespaceComponentOutputs {
	readonly Arn: string;
	readonly HostedZoneId: string;
	readonly Id: string;
}
export interface PublicDnsNamespaceComponentInputs {
	readonly Name: string;
	readonly Description?: string | undefined;
	readonly Properties?: Properties | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export class Service extends CfnResource<ServiceComponentInputs> implements ServiceComponentOutputs {
	constructor(entity: ADKEntity, options: ServiceComponentInputs) {
		super(entity, options.LogicalId, "AWS::ServiceDiscovery::Service", options);
	}
	public readonly Arn: string;
	public readonly Id: string;
}
export interface ServiceComponentOutputs {
	readonly Arn: string;
	readonly Id: string;
}
export interface ServiceComponentInputs {
	readonly Description?: string | undefined;
	readonly DnsConfig?: DnsConfig | undefined;
	readonly HealthCheckConfig?: HealthCheckConfig | undefined;
	readonly HealthCheckCustomConfig?: HealthCheckCustomConfig | undefined;
	readonly Name?: string;
	readonly NamespaceId?: string | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly Type?: string | undefined;
	readonly LogicalId: string;
}
export interface PrivateDnsPropertiesMutable {
	readonly SOA?: SOA | undefined;
}
export interface Properties {
	readonly DnsProperties?: PrivateDnsPropertiesMutable | undefined;
}
export interface SOA {
	readonly TTL?: number | undefined;
}
export interface PublicDnsPropertiesMutable {
	readonly SOA?: SOA | undefined;
}
export interface DnsConfig {
	readonly DnsRecords: DnsRecord[];
	readonly NamespaceId?: string | undefined;
	readonly RoutingPolicy?: string | undefined;
}
export interface DnsRecord {
	readonly TTL: number;
	readonly Type: string;
}
export interface HealthCheckConfig {
	readonly FailureThreshold?: number | undefined;
	readonly ResourcePath?: string | undefined;
	readonly Type: string;
}
export interface HealthCheckCustomConfig {
	readonly FailureThreshold?: number | undefined;
}
export default {
	HttpNamespace: HttpNamespace,
	Instance: Instance,
	PrivateDnsNamespace: PrivateDnsNamespace,
	PublicDnsNamespace: PublicDnsNamespace,
	Service: Service,
};
