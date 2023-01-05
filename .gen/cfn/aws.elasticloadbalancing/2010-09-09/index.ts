import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class LoadBalancer extends CfnResource<LoadBalancerComponentInputs> implements LoadBalancerComponentOutputs {
	constructor(entity: ADKEntity, options: LoadBalancerComponentInputs) {
		super(entity, options.LogicalId, "AWS::ElasticLoadBalancing::LoadBalancer", options);
	}
	public readonly CanonicalHostedZoneName: string;
	public readonly CanonicalHostedZoneNameId: string;
	public readonly DnsName: string;
	public readonly SourceSecurityGroupGroupName: string;
	public readonly SourceSecurityGroupOwnerAlias: string;
}
export interface LoadBalancerComponentOutputs {
	readonly CanonicalHostedZoneName: string;
	readonly CanonicalHostedZoneNameId: string;
	readonly DnsName: string;
	readonly SourceSecurityGroupGroupName: string;
	readonly SourceSecurityGroupOwnerAlias: string;
}
export interface LoadBalancerComponentInputs {
	readonly Listeners: Listeners[];
	readonly AccessLoggingPolicy?: AccessLoggingPolicy | undefined;
	readonly AppCookieStickinessPolicy?: AppCookieStickinessPolicy[] | undefined;
	readonly AvailabilityZones?: string[] | undefined;
	readonly ConnectionDrainingPolicy?: ConnectionDrainingPolicy | undefined;
	readonly ConnectionSettings?: ConnectionSettings | undefined;
	readonly CrossZone?: boolean | undefined;
	readonly HealthCheck?: HealthCheck | undefined;
	readonly Instances?: string[] | undefined;
	readonly LBCookieStickinessPolicy?: LBCookieStickinessPolicy[] | undefined;
	readonly LoadBalancerName?: string | undefined;
	readonly Policies?: Policies[] | undefined;
	readonly Scheme?: string | undefined;
	readonly SecurityGroups?: string[] | undefined;
	readonly Subnets?: string[] | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export interface AccessLoggingPolicy {
	readonly EmitInterval?: number | undefined;
	readonly Enabled: boolean;
	readonly S3BucketName: string;
	readonly S3BucketPrefix?: string | undefined;
}
export interface AppCookieStickinessPolicy {
	readonly CookieName: string;
	readonly PolicyName: string;
}
export interface ConnectionDrainingPolicy {
	readonly Enabled: boolean;
	readonly Timeout?: number | undefined;
}
export interface ConnectionSettings {
	readonly IdleTimeout: number;
}
export interface HealthCheck {
	readonly HealthyThreshold: string;
	readonly Interval: string;
	readonly Target: string;
	readonly Timeout: string;
	readonly UnhealthyThreshold: string;
}
export interface LBCookieStickinessPolicy {
	readonly CookieExpirationPeriod?: string | undefined;
	readonly PolicyName?: string | undefined;
}
export interface Listeners {
	readonly InstancePort: string;
	readonly InstanceProtocol?: string | undefined;
	readonly LoadBalancerPort: string;
	readonly PolicyNames?: string[] | undefined;
	readonly Protocol: string;
	readonly SSLCertificateId?: string | undefined;
}
export interface Policies {
	readonly Attributes: any[];
	readonly InstancePorts?: string[] | undefined;
	readonly LoadBalancerPorts?: string[] | undefined;
	readonly PolicyName: string;
	readonly PolicyType: string;
}
export default {
	LoadBalancer: LoadBalancer,
};
