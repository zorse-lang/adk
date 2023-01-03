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
	readonly AccessLoggingPolicy?: (AccessLoggingPolicy | undefined) | undefined;
	readonly AppCookieStickinessPolicy?: (AppCookieStickinessPolicy[] | undefined) | undefined;
	readonly AvailabilityZones?: (string[] | undefined) | undefined;
	readonly ConnectionDrainingPolicy?: (ConnectionDrainingPolicy | undefined) | undefined;
	readonly ConnectionSettings?: (ConnectionSettings | undefined) | undefined;
	readonly CrossZone?: (boolean | undefined) | undefined;
	readonly HealthCheck?: (HealthCheck | undefined) | undefined;
	readonly Instances?: (string[] | undefined) | undefined;
	readonly LBCookieStickinessPolicy?: (LBCookieStickinessPolicy[] | undefined) | undefined;
	readonly LoadBalancerName?: (string | undefined) | undefined;
	readonly Policies?: (Policies[] | undefined) | undefined;
	readonly Scheme?: (string | undefined) | undefined;
	readonly SecurityGroups?: (string[] | undefined) | undefined;
	readonly Subnets?: (string[] | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly LogicalId: string;
}
export interface AccessLoggingPolicy {
	readonly EmitInterval?: (number | undefined) | undefined;
	readonly Enabled: boolean;
	readonly S3BucketName: string;
	readonly S3BucketPrefix?: (string | undefined) | undefined;
}
export interface AppCookieStickinessPolicy {
	readonly CookieName: string;
	readonly PolicyName: string;
}
export interface ConnectionDrainingPolicy {
	readonly Enabled: boolean;
	readonly Timeout?: (number | undefined) | undefined;
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
	readonly CookieExpirationPeriod?: (string | undefined) | undefined;
	readonly PolicyName?: (string | undefined) | undefined;
}
export interface Listeners {
	readonly InstancePort: string;
	readonly InstanceProtocol?: (string | undefined) | undefined;
	readonly LoadBalancerPort: string;
	readonly PolicyNames?: (string[] | undefined) | undefined;
	readonly Protocol: string;
	readonly SSLCertificateId?: (string | undefined) | undefined;
}
export interface Policies {
	readonly Attributes: any[];
	readonly InstancePorts?: (string[] | undefined) | undefined;
	readonly LoadBalancerPorts?: (string[] | undefined) | undefined;
	readonly PolicyName: string;
	readonly PolicyType: string;
}
export default {
	LoadBalancer: LoadBalancer,
};
