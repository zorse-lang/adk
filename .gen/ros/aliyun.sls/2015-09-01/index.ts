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
	readonly ConfigName?: string | undefined;
	readonly GroupName?: string | undefined;
	readonly ProjectName?: string | undefined;
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
	readonly MultiAccount?: string[] | undefined;
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
	readonly Description?: string | undefined;
	readonly DisplayName?: any | string;
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
	readonly Description?: string | undefined;
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
	readonly KeyIndices?: KeyIndices[] | undefined;
	readonly LogReduce?: boolean | undefined;
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
	readonly AppendMeta?: boolean | undefined;
	readonly AutoSplit?: boolean | undefined;
	readonly EnableTracking?: boolean | undefined;
	readonly EncryptConf?: EncryptConf | undefined;
	readonly MaxSplitShard?: number | undefined;
	readonly PreserveStorage?: boolean | undefined;
	readonly ShardCount?: number | undefined;
	readonly TTL?: number | undefined;
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
	readonly CloneFrom?: CloneFrom | undefined;
	readonly RawConfigData?: { [key: string]: any } | undefined;
	readonly LogicalId: string;
}
export class MachineGroup extends RosResource<MachineGroupComponentInputs> implements MachineGroupComponentOutputs {
	constructor(entity: ADKEntity, options: MachineGroupComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::SLS::MachineGroup", options);
	}
}
export interface MachineGroupComponentOutputs {}
export interface MachineGroupComponentInputs {
	readonly GroupAttribute?: string | undefined;
	readonly GroupName?: any | string;
	readonly GroupType?: string | undefined;
	readonly MachineIdentifyType?: string | undefined;
	readonly MachineList?: any[] | undefined;
	readonly ProjectName?: any | string;
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
	readonly PreserveStorage?: boolean | undefined;
	readonly ShardCount?: number | undefined;
	readonly TTL?: number | undefined;
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
	readonly Description?: string | undefined;
	readonly Tags?: Tags[] | undefined;
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
	readonly Throttling?: string | undefined;
	readonly Condition?: string | undefined;
	readonly AutoAnnotation?: boolean | undefined;
	readonly SeverityConfigurations?: SeverityConfigurations[] | undefined;
	readonly NoDataFire?: boolean | undefined;
	readonly NotificationList?: NotificationList[] | undefined;
	readonly NotifyThreshold?: number | undefined;
	readonly MuteUntil?: number | undefined;
	readonly Dashboard: string;
	readonly Labels?: Labels[] | undefined;
	readonly GroupConfiguration?: GroupConfiguration | undefined;
	readonly NoDataSeverity?: number | undefined;
	readonly Type?: string | undefined;
	readonly Annotations?: Annotations[] | undefined;
	readonly Version?: string | undefined;
	readonly JoinConfigurations?: JoinConfigurations[] | undefined;
	readonly PolicyConfiguration?: PolicyConfiguration | undefined;
	readonly QueryList: QueryList[];
	readonly SendResolved?: boolean | undefined;
	readonly Threshold?: number | undefined;
}
export interface Detail {
	readonly Type?: string | undefined;
	readonly Description?: string | undefined;
	readonly Configuration: Configuration;
	readonly State?: string | undefined;
	readonly Schedule: Schedule;
	readonly DisplayName: string;
	readonly Name: string;
}
export interface EvalCondition {
	readonly Condition?: string | undefined;
	readonly CountCondition?: string | undefined;
}
export interface GroupConfiguration {
	readonly Type: string;
	readonly Fields?: string[] | undefined;
}
export interface JoinConfigurations {
	readonly Condition?: string | undefined;
	readonly Type: string;
}
export interface Labels {
	readonly Value: string;
	readonly Key: string;
}
export interface NotificationList {
	readonly Type: string;
	readonly MobileList?: any[] | undefined;
	readonly ServiceUri?: string | undefined;
	readonly Content?: string | undefined;
	readonly Headers?: { [key: string]: any } | undefined;
	readonly EmailList?: any[] | undefined;
	readonly Method?: string | undefined;
}
export interface PolicyConfiguration {
	readonly AlertPolicyId?: string | undefined;
	readonly ActionPolicyId?: string | undefined;
	readonly UseDefault?: boolean | undefined;
	readonly RepeatInterval?: string | undefined;
}
export interface QueryList {
	readonly Query: string;
	readonly LogStore?: string | undefined;
	readonly Start: string;
	readonly TimeSpanType: string;
	readonly PowerSqlMode?: string | undefined;
	readonly Store?: string | undefined;
	readonly DashboardId?: string | undefined;
	readonly RoleArn?: string | undefined;
	readonly StoreType?: string | undefined;
	readonly Project?: string | undefined;
	readonly Region?: string | undefined;
	readonly End: string;
	readonly ChartTitle?: string | undefined;
}
export interface Schedule {
	readonly DayOfWeek?: number | undefined;
	readonly Type: string;
	readonly RunImmediately?: boolean | undefined;
	readonly Hour?: number | undefined;
	readonly CronExpression?: string | undefined;
	readonly Delay?: number | undefined;
	readonly Interval?: string | undefined;
}
export interface SeverityConfigurations {
	readonly Severity: number;
	readonly EvalCondition?: EvalCondition | undefined;
}
export interface VariableMap {
	readonly PolardbPerfPolicySetting?: any[] | undefined;
	readonly WafEnabled?: boolean | undefined;
	readonly RdsPerfEnabled?: boolean | undefined;
	readonly CpsCallbackCollectionPolicy?: string | undefined;
	readonly RedisAuditTiEnabled?: boolean | undefined;
	readonly RdsPerfTiEnabled?: boolean | undefined;
	readonly RdsSlowPolicySetting?: any[] | undefined;
	readonly K8sIngressTtl?: number | undefined;
	readonly OssSyncEnabled?: boolean | undefined;
	readonly RdsAuditCollectionPolicy?: string | undefined;
	readonly BastionAuditCollectionPolicy?: string | undefined;
	readonly BastionEnabled?: boolean | undefined;
	readonly RedisSyncTtl?: number | undefined;
	readonly RdsEnabled?: boolean | undefined;
	readonly SasSessionEnabled?: boolean | undefined;
	readonly RdsAuditPolicySetting?: any[] | undefined;
	readonly DdosCooAccessTtl?: number | undefined;
	readonly BastionTtl?: number | undefined;
	readonly RdsSlowEnabled?: boolean | undefined;
	readonly WafAccessCollectionPolicy?: string | undefined;
	readonly K8sAuditTtl?: number | undefined;
	readonly PolardbTtl?: number | undefined;
	readonly DrdsAuditCollectionPolicy?: string | undefined;
	readonly SlbAccessCollectionPolicy?: string | undefined;
	readonly SasSnapshotPortEnabled?: boolean | undefined;
	readonly RdsSlowTtl?: number | undefined;
	readonly PolardbEnabled?: boolean | undefined;
	readonly SasSnapshotProcessEnabled?: boolean | undefined;
	readonly ActiontrailTiEnabled?: boolean | undefined;
	readonly NasTiEnabled?: boolean | undefined;
	readonly AppconnectTiEnabled?: boolean | undefined;
	readonly CpsTtl?: number | undefined;
	readonly SlbSyncTtl?: number | undefined;
	readonly CloudfirewallAccessCollectionPolicy?: string | undefined;
	readonly DdosCooAccessEnabled?: boolean | undefined;
	readonly K8sIngressTiEnabled?: boolean | undefined;
	readonly DrdsAuditTiEnabled?: boolean | undefined;
	readonly SasSecurityVulEnabled?: boolean | undefined;
	readonly PolardbSlowPolicySetting?: any[] | undefined;
	readonly K8sIngressCollectionPolicy?: string | undefined;
	readonly ApigatewayTtl?: number | undefined;
	readonly CpsEnabled?: boolean | undefined;
	readonly RdsSlowCollectionPolicy?: string | undefined;
	readonly ActiontrailOpenapiCollectionPolicy?: string | undefined;
	readonly RdsPerfPolicySetting?: any[] | undefined;
	readonly CloudfirewallAccessPolicySetting?: any[] | undefined;
	readonly OssAccessEnabled?: boolean | undefined;
	readonly CpsCallbackPolicySetting?: any[] | undefined;
	readonly SlbAccessTtl?: number | undefined;
	readonly WafAccessPolicySetting?: any[] | undefined;
	readonly PolardbPerfTiEnabled?: boolean | undefined;
	readonly SasLocalDnsEnabled?: boolean | undefined;
	readonly OssAccessTtl?: number | undefined;
	readonly OssMeteringPolicySetting?: any[] | undefined;
	readonly SasHttpEnabled?: boolean | undefined;
	readonly OssMeteringEnabled?: boolean | undefined;
	readonly CloudfirewallEnabled?: boolean | undefined;
	readonly SlbAccessTiEnabled?: boolean | undefined;
	readonly DrdsSyncTtl?: number | undefined;
	readonly K8sEventPolicySetting?: any[] | undefined;
	readonly NasTtl?: number | undefined;
	readonly SasLoginEnabled?: boolean | undefined;
	readonly WafTtl?: number | undefined;
	readonly NasAuditPolicySetting?: any[] | undefined;
	readonly RdsTtl?: number | undefined;
	readonly K8sIngressEnabled?: boolean | undefined;
	readonly CloudfirewallTiEnabled?: boolean | undefined;
	readonly K8sEventCollectionPolicy?: string | undefined;
	readonly ActiontrailEnabled?: boolean | undefined;
	readonly DrdsSyncEnabled?: boolean | undefined;
	readonly ApigatewayEnabled?: boolean | undefined;
	readonly SasCrackEnabled?: boolean | undefined;
	readonly CpsTiEnabled?: boolean | undefined;
	readonly K8sEventEnabled?: boolean | undefined;
	readonly OssSyncTtl?: number | undefined;
	readonly RdsPerfTtl?: number | undefined;
	readonly SasSnapshotAccountEnabled?: boolean | undefined;
	readonly SlbSyncEnabled?: boolean | undefined;
	readonly BastionTiEnabled?: boolean | undefined;
	readonly OssAccessPolicySetting?: any[] | undefined;
	readonly SasTiEnabled?: boolean | undefined;
	readonly DrdsAuditTtl?: number | undefined;
	readonly RedisAuditCollectionPolicy?: string | undefined;
	readonly PolardbPerfEnabled?: boolean | undefined;
	readonly DdosCooAccessCollectionPolicy?: string | undefined;
	readonly K8sAuditEnabled?: boolean | undefined;
	readonly OssMeteringTiEnabled?: boolean | undefined;
	readonly PolardbPerfTtl?: number | undefined;
	readonly ApigatewayAccessPolicySetting?: any[] | undefined;
	readonly NasEnabled?: boolean | undefined;
	readonly SasDnsEnabled?: boolean | undefined;
	readonly NasAuditCollectionPolicy?: string | undefined;
	readonly PolardbSlowCollectionPolicy?: string | undefined;
	readonly AppconnectTtl?: number | undefined;
	readonly OssMeteringTtl?: number | undefined;
	readonly SasSecurityHcEnabled?: boolean | undefined;
	readonly K8sAuditCollectionPolicy?: string | undefined;
	readonly DdosCooAccessTiEnabled?: boolean | undefined;
	readonly AppconnectOpCollectionPolicy?: string | undefined;
	readonly AppconnectOpPolicySetting?: any[] | undefined;
	readonly PolardbTiEnabled?: boolean | undefined;
	readonly RedisAuditTtl?: number | undefined;
	readonly RdsSlowTiEnabled?: boolean | undefined;
	readonly SasTtl?: number | undefined;
	readonly ActiontrailTtl?: number | undefined;
	readonly RdsPerfCollectionPolicy?: string | undefined;
	readonly OssAccessCollectionPolicy?: string | undefined;
	readonly RedisAuditEnabled?: boolean | undefined;
	readonly WafTiEnabled?: boolean | undefined;
	readonly RedisSyncEnabled?: boolean | undefined;
	readonly K8sAuditTiEnabled?: boolean | undefined;
	readonly SasProcessEnabled?: boolean | undefined;
	readonly RedisAuditPolicySetting?: any[] | undefined;
	readonly AppconnectEnabled?: boolean | undefined;
	readonly DrdsAuditPolicySetting?: any[] | undefined;
	readonly K8sEventTiEnabled?: boolean | undefined;
	readonly PolardbAuditCollectionPolicy?: string | undefined;
	readonly DdosCooAccessPolicySetting?: any[] | undefined;
	readonly K8sEventTtl?: number | undefined;
	readonly PolardbSlowEnabled?: boolean | undefined;
	readonly SasSecurityAlertEnabled?: boolean | undefined;
	readonly SlbAccessEnabled?: boolean | undefined;
	readonly DrdsAuditEnabled?: boolean | undefined;
	readonly SasNetworkEnabled?: boolean | undefined;
	readonly K8sIngressPolicySetting?: any[] | undefined;
	readonly OssMeteringCollectionPolicy?: string | undefined;
	readonly PolardbSlowTiEnabled?: boolean | undefined;
	readonly PolardbSlowTtl?: number | undefined;
	readonly OssAccessTiEnabled?: boolean | undefined;
	readonly PolardbPerfCollectionPolicy?: string | undefined;
	readonly ActiontrailOpenapiPolicySetting?: any[] | undefined;
	readonly ApigatewayTiEnabled?: boolean | undefined;
	readonly BastionAuditPolicySetting?: any[] | undefined;
	readonly SlbAccessPolicySetting?: any[] | undefined;
	readonly RdsTiEnabled?: boolean | undefined;
	readonly ApigatewayAccessCollectionPolicy?: string | undefined;
	readonly CloudfirewallTtl?: number | undefined;
	readonly PolardbAuditPolicySetting?: any[] | undefined;
	readonly K8sAuditPolicySetting?: any[] | undefined;
}
export interface Sinks {
	readonly Project: string;
	readonly Type?: string | undefined;
	readonly Endpoint?: string | undefined;
	readonly Logstore: string;
	readonly RoleArn?: string | undefined;
	readonly Name: string;
}
export interface FullTextIndex {
	readonly Delimiter?: string | undefined;
	readonly IncludeChinese?: boolean | undefined;
	readonly CaseSensitive?: boolean | undefined;
	readonly Enable: boolean;
}
export interface JsonKeyIndices {
	readonly Type: string;
	readonly Alias?: string | undefined;
	readonly EnableAnalytics?: boolean | undefined;
	readonly Name: string;
}
export interface KeyIndices {
	readonly Type: string;
	readonly JsonKeyIndices?: JsonKeyIndices[] | undefined;
	readonly Delimiter?: string | undefined;
	readonly IncludeChinese?: boolean | undefined;
	readonly Alias?: string | undefined;
	readonly EnableAnalytics?: boolean | undefined;
	readonly CaseSensitive?: boolean | undefined;
	readonly Name: string;
}
export interface EncryptConf {
	readonly EncryptType: string;
	readonly Enable: boolean;
	readonly UserCmkInfo?: UserCmkInfo | undefined;
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
	readonly Value?: string | undefined;
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
