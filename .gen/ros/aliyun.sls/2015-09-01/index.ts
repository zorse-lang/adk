import { RosResource, Entity as ADKEntity } from "@zorse/adk";

export class Alert extends RosResource<AlertComponentInputs> implements AlertComponentOutputs {
	constructor(entity: ADKEntity, options: AlertComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::SLS::Alert", options);
	}
	public readonly Name: any;
}
export interface AlertComponentOutputs {
	readonly Name: any;
}
export interface AlertComponentInputs {
	readonly Detail: Detail;
	readonly Project: string;
	readonly LogicalId: string;
}
export class ApplyConfigToMachineGroup
	extends RosResource<ApplyConfigToMachineGroupComponentInputs>
	implements ApplyConfigToMachineGroupComponentOutputs
{
	constructor(entity: ADKEntity, options: ApplyConfigToMachineGroupComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::SLS::ApplyConfigToMachineGroup", options);
	}
}
export interface ApplyConfigToMachineGroupComponentOutputs {}
export interface ApplyConfigToMachineGroupComponentInputs {
	readonly ConfigName?: (string | undefined) | undefined;
	readonly GroupName?: (string | undefined) | undefined;
	readonly ProjectName?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export class Audit extends RosResource<AuditComponentInputs> implements AuditComponentOutputs {
	constructor(entity: ADKEntity, options: AuditComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::SLS::Audit", options);
	}
}
export interface AuditComponentOutputs {}
export interface AuditComponentInputs {
	readonly DisplayName: any | string;
	readonly VariableMap: VariableMap;
	readonly MultiAccount?: (string[] | undefined) | undefined;
	readonly LogicalId: string;
}
export class Dashboard extends RosResource<DashboardComponentInputs> implements DashboardComponentOutputs {
	constructor(entity: ADKEntity, options: DashboardComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::SLS::Dashboard", options);
	}
}
export interface DashboardComponentOutputs {}
export interface DashboardComponentInputs {
	readonly Charts: any;
	readonly DashboardName: any | string;
	readonly ProjectName: string;
	readonly Description?: (string | undefined) | undefined;
	readonly DisplayName?: (any | string) | undefined;
	readonly LogicalId: string;
}
export class Etl extends RosResource<EtlComponentInputs> implements EtlComponentOutputs {
	constructor(entity: ADKEntity, options: EtlComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::SLS::Etl", options);
	}
}
export interface EtlComponentOutputs {}
export interface EtlComponentInputs {
	readonly Configuration: Configuration;
	readonly DisplayName: string;
	readonly Name: any | string;
	readonly ProjectName: string;
	readonly Schedule: Schedule;
	readonly Description?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export class Index extends RosResource<IndexComponentInputs> implements IndexComponentOutputs {
	constructor(entity: ADKEntity, options: IndexComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::SLS::Index", options);
	}
}
export interface IndexComponentOutputs {}
export interface IndexComponentInputs {
	readonly FullTextIndex: FullTextIndex;
	readonly LogstoreName: string;
	readonly ProjectName: string;
	readonly KeyIndices?: (KeyIndices[] | undefined) | undefined;
	readonly LogReduce?: (boolean | undefined) | undefined;
	readonly LogicalId: string;
}
export class Logstore extends RosResource<LogstoreComponentInputs> implements LogstoreComponentOutputs {
	constructor(entity: ADKEntity, options: LogstoreComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::SLS::Logstore", options);
	}
}
export interface LogstoreComponentOutputs {}
export interface LogstoreComponentInputs {
	readonly LogstoreName: any | string;
	readonly ProjectName: string;
	readonly AppendMeta?: (boolean | undefined) | undefined;
	readonly AutoSplit?: (boolean | undefined) | undefined;
	readonly EnableTracking?: (boolean | undefined) | undefined;
	readonly EncryptConf?: (EncryptConf | undefined) | undefined;
	readonly MaxSplitShard?: (number | undefined) | undefined;
	readonly PreserveStorage?: (boolean | undefined) | undefined;
	readonly ShardCount?: (number | undefined) | undefined;
	readonly TTL?: (number | undefined) | undefined;
	readonly LogicalId: string;
}
export class LogtailConfig extends RosResource<LogtailConfigComponentInputs> implements LogtailConfigComponentOutputs {
	constructor(entity: ADKEntity, options: LogtailConfigComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::SLS::LogtailConfig", options);
	}
	public readonly Endpoint: any;
	public readonly AppliedMachineGroups: any;
}
export interface LogtailConfigComponentOutputs {
	readonly Endpoint: any;
	readonly AppliedMachineGroups: any;
}
export interface LogtailConfigComponentInputs {
	readonly LogstoreName: string;
	readonly LogtailConfigName: any | string;
	readonly ProjectName: string;
	readonly CloneFrom?: (CloneFrom | undefined) | undefined;
	readonly RawConfigData?: ({ [key: string]: any } | undefined) | undefined;
	readonly LogicalId: string;
}
export class MachineGroup extends RosResource<MachineGroupComponentInputs> implements MachineGroupComponentOutputs {
	constructor(entity: ADKEntity, options: MachineGroupComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::SLS::MachineGroup", options);
	}
}
export interface MachineGroupComponentOutputs {}
export interface MachineGroupComponentInputs {
	readonly GroupAttribute?: (string | undefined) | undefined;
	readonly GroupName?: (any | string) | undefined;
	readonly GroupType?: (string | undefined) | undefined;
	readonly MachineIdentifyType?: (string | undefined) | undefined;
	readonly MachineList?: (any[] | undefined) | undefined;
	readonly ProjectName?: (any | string) | undefined;
	readonly LogicalId: string;
}
export class MetricStore extends RosResource<MetricStoreComponentInputs> implements MetricStoreComponentOutputs {
	constructor(entity: ADKEntity, options: MetricStoreComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::SLS::MetricStore", options);
	}
}
export interface MetricStoreComponentOutputs {}
export interface MetricStoreComponentInputs {
	readonly LogstoreName: any | string;
	readonly ProjectName: string;
	readonly PreserveStorage?: (boolean | undefined) | undefined;
	readonly ShardCount?: (number | undefined) | undefined;
	readonly TTL?: (number | undefined) | undefined;
	readonly LogicalId: string;
}
export class Project extends RosResource<ProjectComponentInputs> implements ProjectComponentOutputs {
	constructor(entity: ADKEntity, options: ProjectComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::SLS::Project", options);
	}
}
export interface ProjectComponentOutputs {}
export interface ProjectComponentInputs {
	readonly Name: any | string;
	readonly Description?: (string | undefined) | undefined;
	readonly Tags?: (Tags[] | undefined) | undefined;
	readonly LogicalId: string;
}
export class Savedsearch extends RosResource<SavedsearchComponentInputs> implements SavedsearchComponentOutputs {
	constructor(entity: ADKEntity, options: SavedsearchComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::SLS::Savedsearch", options);
	}
	public readonly SavedsearchName: any;
}
export interface SavedsearchComponentOutputs {
	readonly SavedsearchName: any;
}
export interface SavedsearchComponentInputs {
	readonly Detail: Detail;
	readonly Project: string;
	readonly LogicalId: string;
}
export interface Annotations {
	readonly Value: string;
	readonly Key: string;
}
export interface Configuration {
	readonly Throttling?: (string | undefined) | undefined;
	readonly Condition?: (string | undefined) | undefined;
	readonly AutoAnnotation?: (boolean | undefined) | undefined;
	readonly SeverityConfigurations?: (SeverityConfigurations[] | undefined) | undefined;
	readonly NoDataFire?: (boolean | undefined) | undefined;
	readonly NotificationList?: (NotificationList[] | undefined) | undefined;
	readonly NotifyThreshold?: (number | undefined) | undefined;
	readonly MuteUntil?: (number | undefined) | undefined;
	readonly Dashboard: string;
	readonly Labels?: (Labels[] | undefined) | undefined;
	readonly GroupConfiguration?: (GroupConfiguration | undefined) | undefined;
	readonly NoDataSeverity?: (number | undefined) | undefined;
	readonly Type?: (string | undefined) | undefined;
	readonly Annotations?: (Annotations[] | undefined) | undefined;
	readonly Version?: (string | undefined) | undefined;
	readonly JoinConfigurations?: (JoinConfigurations[] | undefined) | undefined;
	readonly PolicyConfiguration?: (PolicyConfiguration | undefined) | undefined;
	readonly QueryList: QueryList[];
	readonly SendResolved?: (boolean | undefined) | undefined;
	readonly Threshold?: (number | undefined) | undefined;
}
export interface Detail {
	readonly Type?: (string | undefined) | undefined;
	readonly Description?: (string | undefined) | undefined;
	readonly Configuration: Configuration;
	readonly State?: (string | undefined) | undefined;
	readonly Schedule: Schedule;
	readonly DisplayName: string;
	readonly Name: string;
}
export interface EvalCondition {
	readonly Condition?: (string | undefined) | undefined;
	readonly CountCondition?: (string | undefined) | undefined;
}
export interface GroupConfiguration {
	readonly Type: string;
	readonly Fields?: (string[] | undefined) | undefined;
}
export interface JoinConfigurations {
	readonly Condition?: (string | undefined) | undefined;
	readonly Type: string;
}
export interface Labels {
	readonly Value: string;
	readonly Key: string;
}
export interface NotificationList {
	readonly Type: string;
	readonly MobileList?: (any[] | undefined) | undefined;
	readonly ServiceUri?: (string | undefined) | undefined;
	readonly Content?: (string | undefined) | undefined;
	readonly Headers?: ({ [key: string]: any } | undefined) | undefined;
	readonly EmailList?: (any[] | undefined) | undefined;
	readonly Method?: (string | undefined) | undefined;
}
export interface PolicyConfiguration {
	readonly AlertPolicyId?: (string | undefined) | undefined;
	readonly ActionPolicyId?: (string | undefined) | undefined;
	readonly UseDefault?: (boolean | undefined) | undefined;
	readonly RepeatInterval?: (string | undefined) | undefined;
}
export interface QueryList {
	readonly Query: string;
	readonly LogStore?: (string | undefined) | undefined;
	readonly Start: string;
	readonly TimeSpanType: string;
	readonly PowerSqlMode?: (string | undefined) | undefined;
	readonly Store?: (string | undefined) | undefined;
	readonly DashboardId?: (string | undefined) | undefined;
	readonly RoleArn?: (string | undefined) | undefined;
	readonly StoreType?: (string | undefined) | undefined;
	readonly Project?: (string | undefined) | undefined;
	readonly Region?: (string | undefined) | undefined;
	readonly End: string;
	readonly ChartTitle?: (string | undefined) | undefined;
}
export interface Schedule {
	readonly DayOfWeek?: (number | undefined) | undefined;
	readonly Type: string;
	readonly RunImmediately?: (boolean | undefined) | undefined;
	readonly Hour?: (number | undefined) | undefined;
	readonly CronExpression?: (string | undefined) | undefined;
	readonly Delay?: (number | undefined) | undefined;
	readonly Interval?: (string | undefined) | undefined;
}
export interface SeverityConfigurations {
	readonly Severity: number;
	readonly EvalCondition?: (EvalCondition | undefined) | undefined;
}
export interface VariableMap {
	readonly PolardbPerfPolicySetting?: (any[] | undefined) | undefined;
	readonly WafEnabled?: (boolean | undefined) | undefined;
	readonly RdsPerfEnabled?: (boolean | undefined) | undefined;
	readonly CpsCallbackCollectionPolicy?: (string | undefined) | undefined;
	readonly RedisAuditTiEnabled?: (boolean | undefined) | undefined;
	readonly RdsPerfTiEnabled?: (boolean | undefined) | undefined;
	readonly RdsSlowPolicySetting?: (any[] | undefined) | undefined;
	readonly K8sIngressTtl?: (number | undefined) | undefined;
	readonly OssSyncEnabled?: (boolean | undefined) | undefined;
	readonly RdsAuditCollectionPolicy?: (string | undefined) | undefined;
	readonly BastionAuditCollectionPolicy?: (string | undefined) | undefined;
	readonly BastionEnabled?: (boolean | undefined) | undefined;
	readonly RedisSyncTtl?: (number | undefined) | undefined;
	readonly RdsEnabled?: (boolean | undefined) | undefined;
	readonly SasSessionEnabled?: (boolean | undefined) | undefined;
	readonly RdsAuditPolicySetting?: (any[] | undefined) | undefined;
	readonly DdosCooAccessTtl?: (number | undefined) | undefined;
	readonly BastionTtl?: (number | undefined) | undefined;
	readonly RdsSlowEnabled?: (boolean | undefined) | undefined;
	readonly WafAccessCollectionPolicy?: (string | undefined) | undefined;
	readonly K8sAuditTtl?: (number | undefined) | undefined;
	readonly PolardbTtl?: (number | undefined) | undefined;
	readonly DrdsAuditCollectionPolicy?: (string | undefined) | undefined;
	readonly SlbAccessCollectionPolicy?: (string | undefined) | undefined;
	readonly SasSnapshotPortEnabled?: (boolean | undefined) | undefined;
	readonly RdsSlowTtl?: (number | undefined) | undefined;
	readonly PolardbEnabled?: (boolean | undefined) | undefined;
	readonly SasSnapshotProcessEnabled?: (boolean | undefined) | undefined;
	readonly ActiontrailTiEnabled?: (boolean | undefined) | undefined;
	readonly NasTiEnabled?: (boolean | undefined) | undefined;
	readonly AppconnectTiEnabled?: (boolean | undefined) | undefined;
	readonly CpsTtl?: (number | undefined) | undefined;
	readonly SlbSyncTtl?: (number | undefined) | undefined;
	readonly CloudfirewallAccessCollectionPolicy?: (string | undefined) | undefined;
	readonly DdosCooAccessEnabled?: (boolean | undefined) | undefined;
	readonly K8sIngressTiEnabled?: (boolean | undefined) | undefined;
	readonly DrdsAuditTiEnabled?: (boolean | undefined) | undefined;
	readonly SasSecurityVulEnabled?: (boolean | undefined) | undefined;
	readonly PolardbSlowPolicySetting?: (any[] | undefined) | undefined;
	readonly K8sIngressCollectionPolicy?: (string | undefined) | undefined;
	readonly ApigatewayTtl?: (number | undefined) | undefined;
	readonly CpsEnabled?: (boolean | undefined) | undefined;
	readonly RdsSlowCollectionPolicy?: (string | undefined) | undefined;
	readonly ActiontrailOpenapiCollectionPolicy?: (string | undefined) | undefined;
	readonly RdsPerfPolicySetting?: (any[] | undefined) | undefined;
	readonly CloudfirewallAccessPolicySetting?: (any[] | undefined) | undefined;
	readonly OssAccessEnabled?: (boolean | undefined) | undefined;
	readonly CpsCallbackPolicySetting?: (any[] | undefined) | undefined;
	readonly SlbAccessTtl?: (number | undefined) | undefined;
	readonly WafAccessPolicySetting?: (any[] | undefined) | undefined;
	readonly PolardbPerfTiEnabled?: (boolean | undefined) | undefined;
	readonly SasLocalDnsEnabled?: (boolean | undefined) | undefined;
	readonly OssAccessTtl?: (number | undefined) | undefined;
	readonly OssMeteringPolicySetting?: (any[] | undefined) | undefined;
	readonly SasHttpEnabled?: (boolean | undefined) | undefined;
	readonly OssMeteringEnabled?: (boolean | undefined) | undefined;
	readonly CloudfirewallEnabled?: (boolean | undefined) | undefined;
	readonly SlbAccessTiEnabled?: (boolean | undefined) | undefined;
	readonly DrdsSyncTtl?: (number | undefined) | undefined;
	readonly K8sEventPolicySetting?: (any[] | undefined) | undefined;
	readonly NasTtl?: (number | undefined) | undefined;
	readonly SasLoginEnabled?: (boolean | undefined) | undefined;
	readonly WafTtl?: (number | undefined) | undefined;
	readonly NasAuditPolicySetting?: (any[] | undefined) | undefined;
	readonly RdsTtl?: (number | undefined) | undefined;
	readonly K8sIngressEnabled?: (boolean | undefined) | undefined;
	readonly CloudfirewallTiEnabled?: (boolean | undefined) | undefined;
	readonly K8sEventCollectionPolicy?: (string | undefined) | undefined;
	readonly ActiontrailEnabled?: (boolean | undefined) | undefined;
	readonly DrdsSyncEnabled?: (boolean | undefined) | undefined;
	readonly ApigatewayEnabled?: (boolean | undefined) | undefined;
	readonly SasCrackEnabled?: (boolean | undefined) | undefined;
	readonly CpsTiEnabled?: (boolean | undefined) | undefined;
	readonly K8sEventEnabled?: (boolean | undefined) | undefined;
	readonly OssSyncTtl?: (number | undefined) | undefined;
	readonly RdsPerfTtl?: (number | undefined) | undefined;
	readonly SasSnapshotAccountEnabled?: (boolean | undefined) | undefined;
	readonly SlbSyncEnabled?: (boolean | undefined) | undefined;
	readonly BastionTiEnabled?: (boolean | undefined) | undefined;
	readonly OssAccessPolicySetting?: (any[] | undefined) | undefined;
	readonly SasTiEnabled?: (boolean | undefined) | undefined;
	readonly DrdsAuditTtl?: (number | undefined) | undefined;
	readonly RedisAuditCollectionPolicy?: (string | undefined) | undefined;
	readonly PolardbPerfEnabled?: (boolean | undefined) | undefined;
	readonly DdosCooAccessCollectionPolicy?: (string | undefined) | undefined;
	readonly K8sAuditEnabled?: (boolean | undefined) | undefined;
	readonly OssMeteringTiEnabled?: (boolean | undefined) | undefined;
	readonly PolardbPerfTtl?: (number | undefined) | undefined;
	readonly ApigatewayAccessPolicySetting?: (any[] | undefined) | undefined;
	readonly NasEnabled?: (boolean | undefined) | undefined;
	readonly SasDnsEnabled?: (boolean | undefined) | undefined;
	readonly NasAuditCollectionPolicy?: (string | undefined) | undefined;
	readonly PolardbSlowCollectionPolicy?: (string | undefined) | undefined;
	readonly AppconnectTtl?: (number | undefined) | undefined;
	readonly OssMeteringTtl?: (number | undefined) | undefined;
	readonly SasSecurityHcEnabled?: (boolean | undefined) | undefined;
	readonly K8sAuditCollectionPolicy?: (string | undefined) | undefined;
	readonly DdosCooAccessTiEnabled?: (boolean | undefined) | undefined;
	readonly AppconnectOpCollectionPolicy?: (string | undefined) | undefined;
	readonly AppconnectOpPolicySetting?: (any[] | undefined) | undefined;
	readonly PolardbTiEnabled?: (boolean | undefined) | undefined;
	readonly RedisAuditTtl?: (number | undefined) | undefined;
	readonly RdsSlowTiEnabled?: (boolean | undefined) | undefined;
	readonly SasTtl?: (number | undefined) | undefined;
	readonly ActiontrailTtl?: (number | undefined) | undefined;
	readonly RdsPerfCollectionPolicy?: (string | undefined) | undefined;
	readonly OssAccessCollectionPolicy?: (string | undefined) | undefined;
	readonly RedisAuditEnabled?: (boolean | undefined) | undefined;
	readonly WafTiEnabled?: (boolean | undefined) | undefined;
	readonly RedisSyncEnabled?: (boolean | undefined) | undefined;
	readonly K8sAuditTiEnabled?: (boolean | undefined) | undefined;
	readonly SasProcessEnabled?: (boolean | undefined) | undefined;
	readonly RedisAuditPolicySetting?: (any[] | undefined) | undefined;
	readonly AppconnectEnabled?: (boolean | undefined) | undefined;
	readonly DrdsAuditPolicySetting?: (any[] | undefined) | undefined;
	readonly K8sEventTiEnabled?: (boolean | undefined) | undefined;
	readonly PolardbAuditCollectionPolicy?: (string | undefined) | undefined;
	readonly DdosCooAccessPolicySetting?: (any[] | undefined) | undefined;
	readonly K8sEventTtl?: (number | undefined) | undefined;
	readonly PolardbSlowEnabled?: (boolean | undefined) | undefined;
	readonly SasSecurityAlertEnabled?: (boolean | undefined) | undefined;
	readonly SlbAccessEnabled?: (boolean | undefined) | undefined;
	readonly DrdsAuditEnabled?: (boolean | undefined) | undefined;
	readonly SasNetworkEnabled?: (boolean | undefined) | undefined;
	readonly K8sIngressPolicySetting?: (any[] | undefined) | undefined;
	readonly OssMeteringCollectionPolicy?: (string | undefined) | undefined;
	readonly PolardbSlowTiEnabled?: (boolean | undefined) | undefined;
	readonly PolardbSlowTtl?: (number | undefined) | undefined;
	readonly OssAccessTiEnabled?: (boolean | undefined) | undefined;
	readonly PolardbPerfCollectionPolicy?: (string | undefined) | undefined;
	readonly ActiontrailOpenapiPolicySetting?: (any[] | undefined) | undefined;
	readonly ApigatewayTiEnabled?: (boolean | undefined) | undefined;
	readonly BastionAuditPolicySetting?: (any[] | undefined) | undefined;
	readonly SlbAccessPolicySetting?: (any[] | undefined) | undefined;
	readonly RdsTiEnabled?: (boolean | undefined) | undefined;
	readonly ApigatewayAccessCollectionPolicy?: (string | undefined) | undefined;
	readonly CloudfirewallTtl?: (number | undefined) | undefined;
	readonly PolardbAuditPolicySetting?: (any[] | undefined) | undefined;
	readonly K8sAuditPolicySetting?: (any[] | undefined) | undefined;
}
export interface Sinks {
	readonly Project: string;
	readonly Type?: (string | undefined) | undefined;
	readonly Endpoint?: (string | undefined) | undefined;
	readonly Logstore: string;
	readonly RoleArn?: (string | undefined) | undefined;
	readonly Name: string;
}
export interface FullTextIndex {
	readonly Delimiter?: (string | undefined) | undefined;
	readonly IncludeChinese?: (boolean | undefined) | undefined;
	readonly CaseSensitive?: (boolean | undefined) | undefined;
	readonly Enable: boolean;
}
export interface JsonKeyIndices {
	readonly Type: string;
	readonly Alias?: (string | undefined) | undefined;
	readonly EnableAnalytics?: (boolean | undefined) | undefined;
	readonly Name: string;
}
export interface KeyIndices {
	readonly Type: string;
	readonly JsonKeyIndices?: (JsonKeyIndices[] | undefined) | undefined;
	readonly Delimiter?: (string | undefined) | undefined;
	readonly IncludeChinese?: (boolean | undefined) | undefined;
	readonly Alias?: (string | undefined) | undefined;
	readonly EnableAnalytics?: (boolean | undefined) | undefined;
	readonly CaseSensitive?: (boolean | undefined) | undefined;
	readonly Name: string;
}
export interface EncryptConf {
	readonly EncryptType: string;
	readonly Enable: boolean;
	readonly UserCmkInfo?: (UserCmkInfo | undefined) | undefined;
}
export interface UserCmkInfo {
	readonly CmkKeyId: string;
	readonly RegionId: string;
	readonly Arn: string;
}
export interface CloneFrom {
	readonly LogtailConfigName: string;
	readonly ProjectName: string;
}
export interface Tags {
	readonly Value?: (string | undefined) | undefined;
	readonly Key: string;
}
export default {
	Alert: Alert,
	ApplyConfigToMachineGroup: ApplyConfigToMachineGroup,
	Audit: Audit,
	Dashboard: Dashboard,
	Etl: Etl,
	Index: Index,
	Logstore: Logstore,
	LogtailConfig: LogtailConfig,
	MachineGroup: MachineGroup,
	MetricStore: MetricStore,
	Project: Project,
	Savedsearch: Savedsearch,
};
