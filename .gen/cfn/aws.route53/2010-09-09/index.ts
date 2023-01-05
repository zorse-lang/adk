import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class CidrCollection extends CfnResource<CidrCollectionComponentInputs> implements CidrCollectionComponentOutputs {
	constructor(entity: ADKEntity, options: CidrCollectionComponentInputs) {
		super(entity, options.LogicalId, "AWS::Route53::CidrCollection", options);
	}
	public readonly Arn: string;
	public readonly Id: string;
}
export interface CidrCollectionComponentOutputs {
	readonly Arn: string;
	readonly Id: string;
}
export interface CidrCollectionComponentInputs {
	readonly Name: string;
	readonly Locations?: Location[] | undefined;
	readonly LogicalId: string;
}
export class DNSSEC extends CfnResource<DNSSECComponentInputs> implements DNSSECComponentOutputs {
	constructor(entity: ADKEntity, options: DNSSECComponentInputs) {
		super(entity, options.LogicalId, "AWS::Route53::DNSSEC", options);
	}
}
export interface DNSSECComponentOutputs {}
export interface DNSSECComponentInputs {
	readonly HostedZoneId: string;
	readonly LogicalId: string;
}
export class HealthCheck extends CfnResource<HealthCheckComponentInputs> implements HealthCheckComponentOutputs {
	constructor(entity: ADKEntity, options: HealthCheckComponentInputs) {
		super(entity, options.LogicalId, "AWS::Route53::HealthCheck", options);
	}
	public readonly HealthCheckId: string;
}
export interface HealthCheckComponentOutputs {
	readonly HealthCheckId: string;
}
export interface HealthCheckComponentInputs {
	readonly HealthCheckConfig: HealthCheckConfig;
	readonly HealthCheckTags?: HealthCheckTag[] | undefined;
	readonly LogicalId: string;
}
export class HostedZone extends CfnResource<HostedZoneComponentInputs> implements HostedZoneComponentOutputs {
	constructor(entity: ADKEntity, options: HostedZoneComponentInputs) {
		super(entity, options.LogicalId, "AWS::Route53::HostedZone", options);
	}
	public readonly Id: string;
	public readonly NameServers: string[];
}
export interface HostedZoneComponentOutputs {
	readonly Id: string;
	readonly NameServers: string[];
}
export interface HostedZoneComponentInputs {
	readonly HostedZoneConfig?: HostedZoneConfig | undefined;
	readonly HostedZoneTags?: HostedZoneTag[] | undefined;
	readonly Name?: string | undefined;
	readonly QueryLoggingConfig?: QueryLoggingConfig | undefined;
	readonly VPCs?: VPC[] | undefined;
	readonly LogicalId: string;
}
export class KeySigningKey extends CfnResource<KeySigningKeyComponentInputs> implements KeySigningKeyComponentOutputs {
	constructor(entity: ADKEntity, options: KeySigningKeyComponentInputs) {
		super(entity, options.LogicalId, "AWS::Route53::KeySigningKey", options);
	}
}
export interface KeySigningKeyComponentOutputs {}
export interface KeySigningKeyComponentInputs {
	readonly HostedZoneId: string;
	readonly KeyManagementServiceArn: string;
	readonly Name: string;
	readonly Status: string;
	readonly LogicalId: string;
}
export class RecordSet extends CfnResource<RecordSetComponentInputs> implements RecordSetComponentOutputs {
	constructor(entity: ADKEntity, options: RecordSetComponentInputs) {
		super(entity, options.LogicalId, "AWS::Route53::RecordSet", options);
	}
}
export interface RecordSetComponentOutputs {}
export interface RecordSetComponentInputs {
	readonly Name: string;
	readonly Type: string;
	readonly AliasTarget?: AliasTarget | undefined;
	readonly CidrRoutingConfig?: CidrRoutingConfig | undefined;
	readonly Comment?: string | undefined;
	readonly Failover?: string | undefined;
	readonly GeoLocation?: GeoLocation | undefined;
	readonly HealthCheckId?: string | undefined;
	readonly HostedZoneId?: string | undefined;
	readonly HostedZoneName?: string | undefined;
	readonly MultiValueAnswer?: boolean | undefined;
	readonly Region?: string | undefined;
	readonly ResourceRecords?: string[] | undefined;
	readonly SetIdentifier?: string | undefined;
	readonly TTL?: string | undefined;
	readonly Weight?: number | undefined;
	readonly LogicalId: string;
}
export class RecordSetGroup extends CfnResource<RecordSetGroupComponentInputs> implements RecordSetGroupComponentOutputs {
	constructor(entity: ADKEntity, options: RecordSetGroupComponentInputs) {
		super(entity, options.LogicalId, "AWS::Route53::RecordSetGroup", options);
	}
}
export interface RecordSetGroupComponentOutputs {}
export interface RecordSetGroupComponentInputs {
	readonly Comment?: string | undefined;
	readonly HostedZoneId?: string | undefined;
	readonly HostedZoneName?: string | undefined;
	readonly RecordSets?: RecordSet[] | undefined;
	readonly LogicalId: string;
}
export interface Location {
	readonly CidrList: string[];
	readonly LocationName: string;
}
export interface AlarmIdentifier {
	readonly Name: string;
	readonly Region: string;
}
export interface HealthCheckConfig {
	readonly AlarmIdentifier?: AlarmIdentifier | undefined;
	readonly ChildHealthChecks?: string[] | undefined;
	readonly EnableSNI?: boolean | undefined;
	readonly FailureThreshold?: number | undefined;
	readonly FullyQualifiedDomainName?: string | undefined;
	readonly HealthThreshold?: number | undefined;
	readonly IPAddress?: string | undefined;
	readonly InsufficientDataHealthStatus?: string | undefined;
	readonly Inverted?: boolean | undefined;
	readonly MeasureLatency?: boolean | undefined;
	readonly Port?: number | undefined;
	readonly Regions?: string[] | undefined;
	readonly RequestInterval?: number | undefined;
	readonly ResourcePath?: string | undefined;
	readonly RoutingControlArn?: string | undefined;
	readonly SearchString?: string | undefined;
	readonly Type: string;
}
export interface HealthCheckTag {
	readonly Key: string;
	readonly Value: string;
}
export interface HostedZoneConfig {
	readonly Comment?: string | undefined;
}
export interface HostedZoneTag {
	readonly Key: string;
	readonly Value: string;
}
export interface QueryLoggingConfig {
	readonly CloudWatchLogsLogGroupArn: string;
}
export interface VPC {
	readonly VPCId: string;
	readonly VPCRegion: string;
}
export interface AliasTarget {
	readonly DNSName: string;
	readonly EvaluateTargetHealth?: boolean | undefined;
	readonly HostedZoneId: string;
}
export interface CidrRoutingConfig {
	readonly CollectionId: string;
	readonly LocationName: string;
}
export interface GeoLocation {
	readonly ContinentCode?: string | undefined;
	readonly CountryCode?: string | undefined;
	readonly SubdivisionCode?: string | undefined;
}
export interface RecordSet {
	readonly AliasTarget?: AliasTarget | undefined;
	readonly CidrRoutingConfig?: CidrRoutingConfig | undefined;
	readonly Failover?: string | undefined;
	readonly GeoLocation?: GeoLocation | undefined;
	readonly HealthCheckId?: string | undefined;
	readonly HostedZoneId?: string | undefined;
	readonly HostedZoneName?: string | undefined;
	readonly MultiValueAnswer?: boolean | undefined;
	readonly Name: string;
	readonly Region?: string | undefined;
	readonly ResourceRecords?: string[] | undefined;
	readonly SetIdentifier?: string | undefined;
	readonly TTL?: string | undefined;
	readonly Type: string;
	readonly Weight?: number | undefined;
}
export default {
	CidrCollection: CidrCollection,
	DNSSEC: DNSSEC,
	HealthCheck: HealthCheck,
	HostedZone: HostedZone,
	KeySigningKey: KeySigningKey,
	RecordSet: RecordSet,
	RecordSetGroup: RecordSetGroup,
};
