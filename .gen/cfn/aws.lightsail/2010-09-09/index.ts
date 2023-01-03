import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class Alarm extends CfnResource<AlarmComponentInputs> implements AlarmComponentOutputs {
	constructor(entity: ADKEntity, options: AlarmComponentInputs) {
		super(entity, options.LogicalId, "AWS::Lightsail::Alarm", options);
	}
	public readonly AlarmArn: string;
	public readonly State: string;
}
export interface AlarmComponentOutputs {
	readonly AlarmArn: string;
	readonly State: string;
}
export interface AlarmComponentInputs {
	readonly AlarmName: string;
	readonly ComparisonOperator: string;
	readonly EvaluationPeriods: number;
	readonly MetricName: string;
	readonly MonitoredResourceName: string;
	readonly Threshold: number;
	readonly ContactProtocols?: (string[] | undefined) | undefined;
	readonly DatapointsToAlarm?: (number | undefined) | undefined;
	readonly NotificationEnabled?: (boolean | undefined) | undefined;
	readonly NotificationTriggers?: (string[] | undefined) | undefined;
	readonly TreatMissingData?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export class Bucket extends CfnResource<BucketComponentInputs> implements BucketComponentOutputs {
	constructor(entity: ADKEntity, options: BucketComponentInputs) {
		super(entity, options.LogicalId, "AWS::Lightsail::Bucket", options);
	}
	public readonly AbleToUpdateBundle: boolean;
	public readonly BucketArn: string;
	public readonly Url: string;
}
export interface BucketComponentOutputs {
	readonly AbleToUpdateBundle: boolean;
	readonly BucketArn: string;
	readonly Url: string;
}
export interface BucketComponentInputs {
	readonly BucketName: string;
	readonly BundleId: string;
	readonly AccessRules?: (AccessRules | undefined) | undefined;
	readonly ObjectVersioning?: (boolean | undefined) | undefined;
	readonly ReadOnlyAccessAccounts?: (string[] | undefined) | undefined;
	readonly ResourcesReceivingAccess?: (string[] | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly LogicalId: string;
}
export class Certificate extends CfnResource<CertificateComponentInputs> implements CertificateComponentOutputs {
	constructor(entity: ADKEntity, options: CertificateComponentInputs) {
		super(entity, options.LogicalId, "AWS::Lightsail::Certificate", options);
	}
	public readonly CertificateArn: string;
	public readonly Status: string;
}
export interface CertificateComponentOutputs {
	readonly CertificateArn: string;
	readonly Status: string;
}
export interface CertificateComponentInputs {
	readonly CertificateName: string;
	readonly DomainName: string;
	readonly SubjectAlternativeNames?: (string[] | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly LogicalId: string;
}
export class Container extends CfnResource<ContainerComponentInputs> implements ContainerComponentOutputs {
	constructor(entity: ADKEntity, options: ContainerComponentInputs) {
		super(entity, options.LogicalId, "AWS::Lightsail::Container", options);
	}
	public readonly ContainerArn: string;
	public readonly Url: string;
}
export interface ContainerComponentOutputs {
	readonly ContainerArn: string;
	readonly Url: string;
}
export interface ContainerComponentInputs {
	readonly Power: string;
	readonly Scale: number;
	readonly ServiceName: string;
	readonly ContainerServiceDeployment?: (ContainerServiceDeployment | undefined) | undefined;
	readonly IsDisabled?: (boolean | undefined) | undefined;
	readonly PublicDomainNames?: (PublicDomainName[] | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly LogicalId: string;
}
export class Database extends CfnResource<DatabaseComponentInputs> implements DatabaseComponentOutputs {
	constructor(entity: ADKEntity, options: DatabaseComponentInputs) {
		super(entity, options.LogicalId, "AWS::Lightsail::Database", options);
	}
	public readonly DatabaseArn: string;
}
export interface DatabaseComponentOutputs {
	readonly DatabaseArn: string;
}
export interface DatabaseComponentInputs {
	readonly MasterDatabaseName: string;
	readonly MasterUsername: string;
	readonly RelationalDatabaseBlueprintId: string;
	readonly RelationalDatabaseBundleId: string;
	readonly RelationalDatabaseName: string;
	readonly AvailabilityZone?: (string | undefined) | undefined;
	readonly BackupRetention?: (boolean | undefined) | undefined;
	readonly CaCertificateIdentifier?: (string | undefined) | undefined;
	readonly MasterUserPassword?: (string | undefined) | undefined;
	readonly PreferredBackupWindow?: (string | undefined) | undefined;
	readonly PreferredMaintenanceWindow?: (string | undefined) | undefined;
	readonly PubliclyAccessible?: (boolean | undefined) | undefined;
	readonly RelationalDatabaseParameters?: (RelationalDatabaseParameter[] | undefined) | undefined;
	readonly RotateMasterUserPassword?: (boolean | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly LogicalId: string;
}
export class Disk extends CfnResource<DiskComponentInputs> implements DiskComponentOutputs {
	constructor(entity: ADKEntity, options: DiskComponentInputs) {
		super(entity, options.LogicalId, "AWS::Lightsail::Disk", options);
	}
	public readonly AttachedTo: string;
	public readonly AttachmentState: string;
	public readonly DiskArn: string;
	public readonly Iops: number;
	public readonly IsAttached: boolean;
	public readonly LocationAvailabilityZone: string;
	public readonly LocationRegionName: string;
	public readonly Path: string;
	public readonly ResourceType: string;
	public readonly State: string;
	public readonly SupportCode: string;
}
export interface DiskComponentOutputs {
	readonly AttachedTo: string;
	readonly AttachmentState: string;
	readonly DiskArn: string;
	readonly Iops: number;
	readonly IsAttached: boolean;
	readonly LocationAvailabilityZone: string;
	readonly LocationRegionName: string;
	readonly Path: string;
	readonly ResourceType: string;
	readonly State: string;
	readonly SupportCode: string;
}
export interface DiskComponentInputs {
	readonly DiskName: string;
	readonly SizeInGb: number;
	readonly AddOns?: (AddOn[] | undefined) | undefined;
	readonly AvailabilityZone?: (string | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly LogicalId: string;
}
export class Distribution extends CfnResource<DistributionComponentInputs> implements DistributionComponentOutputs {
	constructor(entity: ADKEntity, options: DistributionComponentInputs) {
		super(entity, options.LogicalId, "AWS::Lightsail::Distribution", options);
	}
	public readonly AbleToUpdateBundle: boolean;
	public readonly DistributionArn: string;
	public readonly Status: string;
}
export interface DistributionComponentOutputs {
	readonly AbleToUpdateBundle: boolean;
	readonly DistributionArn: string;
	readonly Status: string;
}
export interface DistributionComponentInputs {
	readonly BundleId: string;
	readonly DefaultCacheBehavior: CacheBehavior;
	readonly DistributionName: string;
	readonly Origin: InputOrigin;
	readonly CacheBehaviors?: (CacheBehaviorPerPath[] | undefined) | undefined;
	readonly CacheBehaviorSettings?: (CacheSettings | undefined) | undefined;
	readonly CertificateName?: (string | undefined) | undefined;
	readonly IpAddressType?: (string | undefined) | undefined;
	readonly IsEnabled?: (boolean | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly LogicalId: string;
}
export class Instance extends CfnResource<InstanceComponentInputs> implements InstanceComponentOutputs {
	constructor(entity: ADKEntity, options: InstanceComponentInputs) {
		super(entity, options.LogicalId, "AWS::Lightsail::Instance", options);
	}
	public readonly HardwareCpuCount: number;
	public readonly HardwareRamSizeInGb: number;
	public readonly InstanceArn: string;
	public readonly IsStaticIp: boolean;
	public readonly LocationAvailabilityZone: string;
	public readonly LocationRegionName: string;
	public readonly NetworkingMonthlyTransferGbPerMonthAllocated: string;
	public readonly PrivateIpAddress: string;
	public readonly PublicIpAddress: string;
	public readonly ResourceType: string;
	public readonly SshKeyName: string;
	public readonly StateCode: number;
	public readonly StateName: string;
	public readonly SupportCode: string;
	public readonly UserName: string;
}
export interface InstanceComponentOutputs {
	readonly HardwareCpuCount: number;
	readonly HardwareRamSizeInGb: number;
	readonly InstanceArn: string;
	readonly IsStaticIp: boolean;
	readonly LocationAvailabilityZone: string;
	readonly LocationRegionName: string;
	readonly NetworkingMonthlyTransferGbPerMonthAllocated: string;
	readonly PrivateIpAddress: string;
	readonly PublicIpAddress: string;
	readonly ResourceType: string;
	readonly SshKeyName: string;
	readonly StateCode: number;
	readonly StateName: string;
	readonly SupportCode: string;
	readonly UserName: string;
}
export interface InstanceComponentInputs {
	readonly BlueprintId: string;
	readonly BundleId: string;
	readonly InstanceName: string;
	readonly AddOns?: (AddOn[] | undefined) | undefined;
	readonly AvailabilityZone?: (string | undefined) | undefined;
	readonly Hardware?: (Hardware | undefined) | undefined;
	readonly KeyPairName?: (string | undefined) | undefined;
	readonly Location?: (Location | undefined) | undefined;
	readonly Networking?: (Networking | undefined) | undefined;
	readonly State?: (State | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly UserData?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export class LoadBalancer extends CfnResource<LoadBalancerComponentInputs> implements LoadBalancerComponentOutputs {
	constructor(entity: ADKEntity, options: LoadBalancerComponentInputs) {
		super(entity, options.LogicalId, "AWS::Lightsail::LoadBalancer", options);
	}
	public readonly LoadBalancerArn: string;
}
export interface LoadBalancerComponentOutputs {
	readonly LoadBalancerArn: string;
}
export interface LoadBalancerComponentInputs {
	readonly InstancePort: number;
	readonly LoadBalancerName: string;
	readonly AttachedInstances?: (string[] | undefined) | undefined;
	readonly HealthCheckPath?: (string | undefined) | undefined;
	readonly IpAddressType?: (string | undefined) | undefined;
	readonly SessionStickinessEnabled?: (boolean | undefined) | undefined;
	readonly SessionStickinessLBCookieDurationSeconds?: (string | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly TlsPolicyName?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export class LoadBalancerTlsCertificate
	extends CfnResource<LoadBalancerTlsCertificateComponentInputs>
	implements LoadBalancerTlsCertificateComponentOutputs
{
	constructor(entity: ADKEntity, options: LoadBalancerTlsCertificateComponentInputs) {
		super(entity, options.LogicalId, "AWS::Lightsail::LoadBalancerTlsCertificate", options);
	}
	public readonly LoadBalancerTlsCertificateArn: string;
	public readonly Status: string;
}
export interface LoadBalancerTlsCertificateComponentOutputs {
	readonly LoadBalancerTlsCertificateArn: string;
	readonly Status: string;
}
export interface LoadBalancerTlsCertificateComponentInputs {
	readonly CertificateDomainName: string;
	readonly CertificateName: string;
	readonly LoadBalancerName: string;
	readonly CertificateAlternativeNames?: (string[] | undefined) | undefined;
	readonly HttpsRedirectionEnabled?: (boolean | undefined) | undefined;
	readonly IsAttached?: (boolean | undefined) | undefined;
	readonly LogicalId: string;
}
export class StaticIp extends CfnResource<StaticIpComponentInputs> implements StaticIpComponentOutputs {
	constructor(entity: ADKEntity, options: StaticIpComponentInputs) {
		super(entity, options.LogicalId, "AWS::Lightsail::StaticIp", options);
	}
	public readonly IpAddress: string;
	public readonly IsAttached: boolean;
	public readonly StaticIpArn: string;
}
export interface StaticIpComponentOutputs {
	readonly IpAddress: string;
	readonly IsAttached: boolean;
	readonly StaticIpArn: string;
}
export interface StaticIpComponentInputs {
	readonly StaticIpName: string;
	readonly AttachedTo?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export interface AccessRules {
	readonly AllowPublicOverrides?: (boolean | undefined) | undefined;
	readonly GetObject?: (string | undefined) | undefined;
}
export interface Container {
	readonly Command?: (string[] | undefined) | undefined;
	readonly ContainerName?: (string | undefined) | undefined;
	readonly Environment?: (EnvironmentVariable[] | undefined) | undefined;
	readonly Image?: (string | undefined) | undefined;
	readonly Ports?: (PortInfo[] | undefined) | undefined;
}
export interface ContainerServiceDeployment {
	readonly Containers?: (Container[] | undefined) | undefined;
	readonly PublicEndpoint?: (PublicEndpoint | undefined) | undefined;
}
export interface EnvironmentVariable {
	readonly Value?: (string | undefined) | undefined;
	readonly Variable?: (string | undefined) | undefined;
}
export interface HealthCheckConfig {
	readonly HealthyThreshold?: (number | undefined) | undefined;
	readonly IntervalSeconds?: (number | undefined) | undefined;
	readonly Path?: (string | undefined) | undefined;
	readonly SuccessCodes?: (string | undefined) | undefined;
	readonly TimeoutSeconds?: (number | undefined) | undefined;
	readonly UnhealthyThreshold?: (number | undefined) | undefined;
}
export interface PortInfo {
	readonly Port?: (string | undefined) | undefined;
	readonly Protocol?: (string | undefined) | undefined;
}
export interface PublicDomainName {
	readonly CertificateName?: (string | undefined) | undefined;
	readonly DomainNames?: (string[] | undefined) | undefined;
}
export interface PublicEndpoint {
	readonly ContainerName?: (string | undefined) | undefined;
	readonly ContainerPort?: (number | undefined) | undefined;
	readonly HealthCheckConfig?: (HealthCheckConfig | undefined) | undefined;
}
export interface RelationalDatabaseParameter {
	readonly AllowedValues?: (string | undefined) | undefined;
	readonly ApplyMethod?: (string | undefined) | undefined;
	readonly ApplyType?: (string | undefined) | undefined;
	readonly DataType?: (string | undefined) | undefined;
	readonly Description?: (string | undefined) | undefined;
	readonly IsModifiable?: (boolean | undefined) | undefined;
	readonly ParameterName?: (string | undefined) | undefined;
	readonly ParameterValue?: (string | undefined) | undefined;
}
export interface AddOn {
	readonly AddOnType: string;
	readonly AutoSnapshotAddOnRequest?: (AutoSnapshotAddOn | undefined) | undefined;
	readonly Status?: (string | undefined) | undefined;
}
export interface AutoSnapshotAddOn {
	readonly SnapshotTimeOfDay?: (string | undefined) | undefined;
}
export interface Location {
	readonly AvailabilityZone?: (string | undefined) | undefined;
	readonly RegionName?: (string | undefined) | undefined;
}
export interface CacheBehavior {
	readonly Behavior?: (string | undefined) | undefined;
}
export interface CacheBehaviorPerPath {
	readonly Behavior?: (string | undefined) | undefined;
	readonly Path?: (string | undefined) | undefined;
}
export interface CacheSettings {
	readonly AllowedHTTPMethods?: (string | undefined) | undefined;
	readonly CachedHTTPMethods?: (string | undefined) | undefined;
	readonly DefaultTTL?: (number | undefined) | undefined;
	readonly ForwardedCookies?: (CookieObject | undefined) | undefined;
	readonly ForwardedHeaders?: (HeaderObject | undefined) | undefined;
	readonly ForwardedQueryStrings?: (QueryStringObject | undefined) | undefined;
	readonly MaximumTTL?: (number | undefined) | undefined;
	readonly MinimumTTL?: (number | undefined) | undefined;
}
export interface CookieObject {
	readonly CookiesAllowList?: (string[] | undefined) | undefined;
	readonly Option?: (string | undefined) | undefined;
}
export interface HeaderObject {
	readonly HeadersAllowList?: (string[] | undefined) | undefined;
	readonly Option?: (string | undefined) | undefined;
}
export interface InputOrigin {
	readonly Name?: (string | undefined) | undefined;
	readonly ProtocolPolicy?: (string | undefined) | undefined;
	readonly RegionName?: (string | undefined) | undefined;
}
export interface QueryStringObject {
	readonly Option?: (boolean | undefined) | undefined;
	readonly QueryStringsAllowList?: (string[] | undefined) | undefined;
}
export interface DiskOptions {
	readonly AttachedTo?: (string | undefined) | undefined;
	readonly AttachmentState?: (string | undefined) | undefined;
	readonly DiskName: string;
	readonly IOPS?: (number | undefined) | undefined;
	readonly IsSystemDisk?: (boolean | undefined) | undefined;
	readonly Path: string;
	readonly SizeInGb?: (string | undefined) | undefined;
}
export interface Hardware {
	readonly CpuCount?: (number | undefined) | undefined;
	readonly Disks?: (Disk[] | undefined) | undefined;
	readonly RamSizeInGb?: (number | undefined) | undefined;
}
export interface MonthlyTransfer {
	readonly GbPerMonthAllocated?: (string | undefined) | undefined;
}
export interface Networking {
	readonly MonthlyTransfer?: (number | undefined) | undefined;
	readonly Ports: Port[];
}
export interface Port {
	readonly AccessDirection?: (string | undefined) | undefined;
	readonly AccessFrom?: (string | undefined) | undefined;
	readonly AccessType?: (string | undefined) | undefined;
	readonly CidrListAliases?: (string[] | undefined) | undefined;
	readonly Cidrs?: (string[] | undefined) | undefined;
	readonly CommonName?: (string | undefined) | undefined;
	readonly FromPort?: (number | undefined) | undefined;
	readonly Ipv6Cidrs?: (string[] | undefined) | undefined;
	readonly Protocol?: (string | undefined) | undefined;
	readonly ToPort?: (number | undefined) | undefined;
}
export interface State {
	readonly Code?: (number | undefined) | undefined;
	readonly Name?: (string | undefined) | undefined;
}
export default {
	Alarm: Alarm,
	Bucket: Bucket,
	Certificate: Certificate,
	Container: Container,
	Database: Database,
	Disk: Disk,
	Distribution: Distribution,
	Instance: Instance,
	LoadBalancer: LoadBalancer,
	LoadBalancerTlsCertificate: LoadBalancerTlsCertificate,
	StaticIp: StaticIp,
};
