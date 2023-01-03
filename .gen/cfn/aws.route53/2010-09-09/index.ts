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
	readonly Locations?: (Location[] | undefined) | undefined;
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
	readonly HealthCheckTags?: (HealthCheckTag[] | undefined) | undefined;
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
	readonly HostedZoneConfig?: (HostedZoneConfig | undefined) | undefined;
	readonly HostedZoneTags?: (HostedZoneTag[] | undefined) | undefined;
	readonly Name?: (string | undefined) | undefined;
	readonly QueryLoggingConfig?: (QueryLoggingConfig | undefined) | undefined;
	readonly VPCs?: (VPC[] | undefined) | undefined;
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
	readonly AliasTarget?: (AliasTarget | undefined) | undefined;
	readonly CidrRoutingConfig?: (CidrRoutingConfig | undefined) | undefined;
	readonly Comment?: (string | undefined) | undefined;
	readonly Failover?: (string | undefined) | undefined;
	readonly GeoLocation?: (GeoLocation | undefined) | undefined;
	readonly HealthCheckId?: (string | undefined) | undefined;
	readonly HostedZoneId?: (string | undefined) | undefined;
	readonly HostedZoneName?: (string | undefined) | undefined;
	readonly MultiValueAnswer?: (boolean | undefined) | undefined;
	readonly Region?: (string | undefined) | undefined;
	readonly ResourceRecords?: (string[] | undefined) | undefined;
	readonly SetIdentifier?: (string | undefined) | undefined;
	readonly TTL?: (string | undefined) | undefined;
	readonly Weight?: (number | undefined) | undefined;
	readonly LogicalId: string;
}
export class RecordSetGroup extends CfnResource<RecordSetGroupComponentInputs> implements RecordSetGroupComponentOutputs {
	constructor(entity: ADKEntity, options: RecordSetGroupComponentInputs) {
		super(entity, options.LogicalId, "AWS::Route53::RecordSetGroup", options);
	}
}
export interface RecordSetGroupComponentOutputs {}
export interface RecordSetGroupComponentInputs {
	readonly Comment?: (string | undefined) | undefined;
	readonly HostedZoneId?: (string | undefined) | undefined;
	readonly HostedZoneName?: (string | undefined) | undefined;
	readonly RecordSets?: (RecordSet[] | undefined) | undefined;
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
	readonly AlarmIdentifier?: (AlarmIdentifier | undefined) | undefined;
	readonly ChildHealthChecks?: (string[] | undefined) | undefined;
	readonly EnableSNI?: (boolean | undefined) | undefined;
	readonly FailureThreshold?: (number | undefined) | undefined;
	readonly FullyQualifiedDomainName?: (string | undefined) | undefined;
	readonly HealthThreshold?: (number | undefined) | undefined;
	readonly IPAddress?: (string | undefined) | undefined;
	readonly InsufficientDataHealthStatus?: (string | undefined) | undefined;
	readonly Inverted?: (boolean | undefined) | undefined;
	readonly MeasureLatency?: (boolean | undefined) | undefined;
	readonly Port?: (number | undefined) | undefined;
	readonly Regions?: (string[] | undefined) | undefined;
	readonly RequestInterval?: (number | undefined) | undefined;
	readonly ResourcePath?: (string | undefined) | undefined;
	readonly RoutingControlArn?: (string | undefined) | undefined;
	readonly SearchString?: (string | undefined) | undefined;
	readonly Type: string;
}
export interface HealthCheckTag {
	readonly Key: string;
	readonly Value: string;
}
export interface HostedZoneConfig {
	readonly Comment?: (string | undefined) | undefined;
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
	readonly EvaluateTargetHealth?: (boolean | undefined) | undefined;
	readonly HostedZoneId: string;
}
export interface CidrRoutingConfig {
	readonly CollectionId: string;
	readonly LocationName: string;
}
export interface GeoLocation {
	readonly ContinentCode?: (string | undefined) | undefined;
	readonly CountryCode?: (string | undefined) | undefined;
	readonly SubdivisionCode?: (string | undefined) | undefined;
}
export interface RecordSet {
	readonly AliasTarget?: (AliasTarget | undefined) | undefined;
	readonly CidrRoutingConfig?: (CidrRoutingConfig | undefined) | undefined;
	readonly Failover?: (string | undefined) | undefined;
	readonly GeoLocation?: (GeoLocation | undefined) | undefined;
	readonly HealthCheckId?: (string | undefined) | undefined;
	readonly HostedZoneId?: (string | undefined) | undefined;
	readonly HostedZoneName?: (string | undefined) | undefined;
	readonly MultiValueAnswer?: (boolean | undefined) | undefined;
	readonly Name: string;
	readonly Region?: (string | undefined) | undefined;
	readonly ResourceRecords?: (string[] | undefined) | undefined;
	readonly SetIdentifier?: (string | undefined) | undefined;
	readonly TTL?: (string | undefined) | undefined;
	readonly Type: string;
	readonly Weight?: (number | undefined) | undefined;
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
