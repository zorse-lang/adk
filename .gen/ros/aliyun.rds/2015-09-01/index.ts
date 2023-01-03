import { RosResource, Entity as ADKEntity } from "@zorse/adk";

export class ADInfo extends RosResource<ADInfoComponentInputs> implements ADInfoComponentOutputs {
	constructor(entity: ADKEntity, options: ADInfoComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::RDS::ADInfo", options);
	}
	public readonly Addns: any;
	public readonly DbInstanceId: any;
}
export interface ADInfoComponentOutputs {
	readonly Addns: any;
	readonly DbInstanceId: any;
}
export interface ADInfoComponentInputs {
	readonly ADAccountName: string;
	readonly ADDNS: string;
	readonly ADPassword: string;
	readonly ADServerIpAddress: string;
	readonly DBInstanceId: string;
	readonly LogicalId: string;
}
export class Account extends RosResource<AccountComponentInputs> implements AccountComponentOutputs {
	constructor(entity: ADKEntity, options: AccountComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::RDS::Account", options);
	}
}
export interface AccountComponentOutputs {}
export interface AccountComponentInputs {
	readonly AccountName: any | string;
	readonly AccountPassword: string;
	readonly DBInstanceId: string;
	readonly AccountDescription?: (string | undefined) | undefined;
	readonly AccountType?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export class AccountPrivilege
	extends RosResource<AccountPrivilegeComponentInputs>
	implements AccountPrivilegeComponentOutputs
{
	constructor(entity: ADKEntity, options: AccountPrivilegeComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::RDS::AccountPrivilege", options);
	}
}
export interface AccountPrivilegeComponentOutputs {}
export interface AccountPrivilegeComponentInputs {
	readonly AccountName: string;
	readonly AccountPrivilege: string;
	readonly DBInstanceId: string;
	readonly DBName: string;
	readonly LogicalId: string;
}
export class DBInstance extends RosResource<DBInstanceComponentInputs> implements DBInstanceComponentOutputs {
	constructor(entity: ADKEntity, options: DBInstanceComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::RDS::DBInstance", options);
	}
	public readonly InnerConnectionString: any;
	public readonly DbInstanceId: any;
	public readonly InnerIpAddress: any;
	public readonly PublicConnectionString: any;
	public readonly PublicIpAddress: any;
	public readonly PublicPort: any;
	public readonly InnerPort: any;
}
export interface DBInstanceComponentOutputs {
	readonly InnerConnectionString: any;
	readonly DbInstanceId: any;
	readonly InnerIpAddress: any;
	readonly PublicConnectionString: any;
	readonly PublicIpAddress: any;
	readonly PublicPort: any;
	readonly InnerPort: any;
}
export interface DBInstanceComponentInputs {
	readonly DBInstanceClass: string;
	readonly DBInstanceStorage: number;
	readonly Engine: string;
	readonly EngineVersion: string;
	readonly SecurityIPList: string;
	readonly AllocatePublicConnection?: (boolean | undefined) | undefined;
	readonly ArchiveBackupKeepCount?: (number | undefined) | undefined;
	readonly ArchiveBackupKeepPolicy?: (string | undefined) | undefined;
	readonly ArchiveBackupRetentionPeriod?: (number | undefined) | undefined;
	readonly AutoRenew?: (boolean | undefined) | undefined;
	readonly BackUpCategory?: (string | undefined) | undefined;
	readonly BackupPolicyMode?: (string | undefined) | undefined;
	readonly BackupRetentionPeriod?: (number | undefined) | undefined;
	readonly Category?: (string | undefined) | undefined;
	readonly CompressType?: (number | undefined) | undefined;
	readonly ConnectionMode?: (string | undefined) | undefined;
	readonly ConnectionStringPrefix?: (string | undefined) | undefined;
	readonly ConnectionStringType?: (string | undefined) | undefined;
	readonly DBInstanceDescription?: (string | undefined) | undefined;
	readonly DBInstanceNetType?: (string | undefined) | undefined;
	readonly DBInstanceStorageType?: (string | undefined) | undefined;
	readonly DBIsIgnoreCase?: (number | undefined) | undefined;
	readonly DBMappings?: (DBMappings[] | undefined) | undefined;
	readonly DBParamGroupId?: (string | undefined) | undefined;
	readonly DBTimeZone?: (string | undefined) | undefined;
	readonly DedicatedHostGroupId?: (string | undefined) | undefined;
	readonly EnableBackupLog?: (boolean | undefined) | undefined;
	readonly EncryptionKey?: (string | undefined) | undefined;
	readonly HighSpaceUsageProtection?: (string | undefined) | undefined;
	readonly LocalLogRetentionHours?: (number | undefined) | undefined;
	readonly LocalLogRetentionSpace?: (number | undefined) | undefined;
	readonly LogBackupFrequency?: (string | undefined) | undefined;
	readonly LogBackupLocalRetentionNumber?: (number | undefined) | undefined;
	readonly LogBackupRetentionPeriod?: (number | undefined) | undefined;
	readonly MaintainTime?: (string | undefined) | undefined;
	readonly MasterUsername?: (string | undefined) | undefined;
	readonly MasterUserPassword?: (string | undefined) | undefined;
	readonly MasterUserType?: (string | undefined) | undefined;
	readonly MultiAZ?: (boolean | undefined) | undefined;
	readonly PayType?: (string | undefined) | undefined;
	readonly Period?: (number | undefined) | undefined;
	readonly PeriodType?: (string | undefined) | undefined;
	readonly Port?: (number | undefined) | undefined;
	readonly PreferredBackupPeriod?: (any[] | undefined) | undefined;
	readonly PreferredBackupTime?: (string | undefined) | undefined;
	readonly PrivateIpAddress?: (string | undefined) | undefined;
	readonly ReleasedKeepPolicy?: (string | undefined) | undefined;
	readonly ResourceGroupId?: (string | undefined) | undefined;
	readonly RoleARN?: (string | undefined) | undefined;
	readonly SecurityGroupId?: (string | undefined) | undefined;
	readonly ServerlessConfig?: (ServerlessConfig | undefined) | undefined;
	readonly SlaveZoneIds?: (string[] | undefined) | undefined;
	readonly SQLCollectorStatus?: (string | undefined) | undefined;
	readonly SSLSetting?: (string | undefined) | undefined;
	readonly Tags?: ({ [key: string]: any } | undefined) | undefined;
	readonly TargetDedicatedHostIdForLog?: (string | undefined) | undefined;
	readonly TargetDedicatedHostIdForMaster?: (string | undefined) | undefined;
	readonly TargetDedicatedHostIdForSlave?: (string | undefined) | undefined;
	readonly VpcId?: (string | undefined) | undefined;
	readonly VSwitchId?: (string | undefined) | undefined;
	readonly ZoneId?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export class DBInstanceClone
	extends RosResource<DBInstanceCloneComponentInputs>
	implements DBInstanceCloneComponentOutputs
{
	constructor(entity: ADKEntity, options: DBInstanceCloneComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::RDS::DBInstanceClone", options);
	}
	public readonly InnerConnectionString: any;
	public readonly DbInstanceId: any;
	public readonly InnerIpAddress: any;
	public readonly PublicConnectionString: any;
	public readonly PublicIpAddress: any;
	public readonly PublicPort: any;
	public readonly InnerPort: any;
}
export interface DBInstanceCloneComponentOutputs {
	readonly InnerConnectionString: any;
	readonly DbInstanceId: any;
	readonly InnerIpAddress: any;
	readonly PublicConnectionString: any;
	readonly PublicIpAddress: any;
	readonly PublicPort: any;
	readonly InnerPort: any;
}
export interface DBInstanceCloneComponentInputs {
	readonly DBInstanceId: string;
	readonly PayType: string;
	readonly AllocatePublicConnection?: (boolean | undefined) | undefined;
	readonly BackupId?: (string | undefined) | undefined;
	readonly BackupRetentionPeriod?: (number | undefined) | undefined;
	readonly BackupType?: (string | undefined) | undefined;
	readonly Category?: (string | undefined) | undefined;
	readonly ConnectionStringPrefix?: (string | undefined) | undefined;
	readonly ConnectionStringType?: (string | undefined) | undefined;
	readonly DBInstanceClass?: (string | undefined) | undefined;
	readonly DBInstanceDescription?: (string | undefined) | undefined;
	readonly DBInstanceStorage?: (number | undefined) | undefined;
	readonly DBInstanceStorageType?: (string | undefined) | undefined;
	readonly DBMappings?: (DBMappings[] | undefined) | undefined;
	readonly DbNames?: (string | undefined) | undefined;
	readonly DedicatedHostGroupId?: (string | undefined) | undefined;
	readonly InstanceNetworkType?: (string | undefined) | undefined;
	readonly MaintainTime?: (string | undefined) | undefined;
	readonly MasterUsername?: (string | undefined) | undefined;
	readonly MasterUserPassword?: (string | undefined) | undefined;
	readonly MasterUserType?: (string | undefined) | undefined;
	readonly Period?: (number | undefined) | undefined;
	readonly PeriodType?: (string | undefined) | undefined;
	readonly Port?: (number | undefined) | undefined;
	readonly PreferredBackupPeriod?: (any[] | undefined) | undefined;
	readonly PreferredBackupTime?: (string | undefined) | undefined;
	readonly PrivateIpAddress?: (string | undefined) | undefined;
	readonly RestoreTable?: (string | undefined) | undefined;
	readonly RestoreTime?: (string | undefined) | undefined;
	readonly SecurityGroupId?: (string | undefined) | undefined;
	readonly SecurityIPList?: (string | undefined) | undefined;
	readonly SlaveZoneIds?: (string[] | undefined) | undefined;
	readonly SQLCollectorStatus?: (string | undefined) | undefined;
	readonly SSLSetting?: (string | undefined) | undefined;
	readonly TableMeta?: (TableMeta[] | undefined) | undefined;
	readonly Tags?: ({ [key: string]: any } | undefined) | undefined;
	readonly TimeoutInMinutes?: (number | undefined) | undefined;
	readonly VpcId?: (string | undefined) | undefined;
	readonly VSwitchId?: (string | undefined) | undefined;
	readonly ZoneId?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export class DBInstanceParameterGroup
	extends RosResource<DBInstanceParameterGroupComponentInputs>
	implements DBInstanceParameterGroupComponentOutputs
{
	constructor(entity: ADKEntity, options: DBInstanceParameterGroupComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::RDS::DBInstanceParameterGroup", options);
	}
}
export interface DBInstanceParameterGroupComponentOutputs {}
export interface DBInstanceParameterGroupComponentInputs {
	readonly DBInstanceId: string;
	readonly Parameters: Parameters[];
	readonly Forcerestart?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export class DBInstanceSecurityIps
	extends RosResource<DBInstanceSecurityIpsComponentInputs>
	implements DBInstanceSecurityIpsComponentOutputs
{
	constructor(entity: ADKEntity, options: DBInstanceSecurityIpsComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::RDS::DBInstanceSecurityIps", options);
	}
	public readonly SecurityIps: any;
}
export interface DBInstanceSecurityIpsComponentOutputs {
	readonly SecurityIps: any;
}
export interface DBInstanceSecurityIpsComponentInputs {
	readonly DBInstanceId: string;
	readonly DBInstanceIPArrayAttribute: string;
	readonly DBInstanceIPArrayName?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export class Database extends RosResource<DatabaseComponentInputs> implements DatabaseComponentOutputs {
	constructor(entity: ADKEntity, options: DatabaseComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::RDS::Database", options);
	}
	public readonly DbInstanceId: any;
	public readonly DbName: any;
}
export interface DatabaseComponentOutputs {
	readonly DbInstanceId: any;
	readonly DbName: any;
}
export interface DatabaseComponentInputs {
	readonly CharacterSetName: string;
	readonly DBInstanceId: string;
	readonly DBName: string;
	readonly DBDescription?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export class MigrateTask extends RosResource<MigrateTaskComponentInputs> implements MigrateTaskComponentOutputs {
	constructor(entity: ADKEntity, options: MigrateTaskComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::RDS::MigrateTask", options);
	}
	public readonly MigrateTaskId: any;
	public readonly DbName: any;
}
export interface MigrateTaskComponentOutputs {
	readonly MigrateTaskId: any;
	readonly DbName: any;
}
export interface MigrateTaskComponentInputs {
	readonly BackupMode: string;
	readonly DBInstanceId: string;
	readonly DBName: string;
	readonly IsOnlineDB: boolean;
	readonly CheckDBMode?: (string | undefined) | undefined;
	readonly OssObjectPositions?: (string | undefined) | undefined;
	readonly OSSUrls?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export class PrepayDBInstance
	extends RosResource<PrepayDBInstanceComponentInputs>
	implements PrepayDBInstanceComponentOutputs
{
	constructor(entity: ADKEntity, options: PrepayDBInstanceComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::RDS::PrepayDBInstance", options);
	}
	public readonly InnerConnectionString: any;
	public readonly DbInstanceId: any;
	public readonly InnerIpAddress: any;
	public readonly PublicConnectionString: any;
	public readonly PublicIpAddress: any;
	public readonly OrderId: any;
	public readonly PublicPort: any;
	public readonly InnerPort: any;
}
export interface PrepayDBInstanceComponentOutputs {
	readonly InnerConnectionString: any;
	readonly DbInstanceId: any;
	readonly InnerIpAddress: any;
	readonly PublicConnectionString: any;
	readonly PublicIpAddress: any;
	readonly OrderId: any;
	readonly PublicPort: any;
	readonly InnerPort: any;
}
export interface PrepayDBInstanceComponentInputs {
	readonly CommodityCode: string;
	readonly DBInstanceClass: string;
	readonly DBInstanceStorage: number;
	readonly Engine: string;
	readonly EngineVersion: string;
	readonly Period: number;
	readonly PeriodType: string;
	readonly AllocatePublicConnection?: (boolean | undefined) | undefined;
	readonly ArchiveBackupKeepCount?: (number | undefined) | undefined;
	readonly ArchiveBackupKeepPolicy?: (string | undefined) | undefined;
	readonly ArchiveBackupRetentionPeriod?: (number | undefined) | undefined;
	readonly AutoPay?: (boolean | undefined) | undefined;
	readonly AutoRenew?: (boolean | undefined) | undefined;
	readonly BackUpCategory?: (string | undefined) | undefined;
	readonly BackupPolicyMode?: (string | undefined) | undefined;
	readonly BackupRetentionPeriod?: (number | undefined) | undefined;
	readonly Category?: (string | undefined) | undefined;
	readonly CompressType?: (number | undefined) | undefined;
	readonly ConnectionMode?: (string | undefined) | undefined;
	readonly ConnectionStringPrefix?: (string | undefined) | undefined;
	readonly ConnectionStringType?: (string | undefined) | undefined;
	readonly CouponCode?: (string | undefined) | undefined;
	readonly DBInstanceDescription?: (string | undefined) | undefined;
	readonly DBInstanceNetType?: (string | undefined) | undefined;
	readonly DBInstanceStorageType?: (string | undefined) | undefined;
	readonly DBIsIgnoreCase?: (number | undefined) | undefined;
	readonly DBMappings?: (DBMappings[] | undefined) | undefined;
	readonly DBParamGroupId?: (string | undefined) | undefined;
	readonly DBTimeZone?: (string | undefined) | undefined;
	readonly DedicatedHostGroupId?: (string | undefined) | undefined;
	readonly EnableBackupLog?: (boolean | undefined) | undefined;
	readonly EncryptionKey?: (string | undefined) | undefined;
	readonly HighSpaceUsageProtection?: (string | undefined) | undefined;
	readonly LocalLogRetentionHours?: (number | undefined) | undefined;
	readonly LocalLogRetentionSpace?: (number | undefined) | undefined;
	readonly LogBackupFrequency?: (string | undefined) | undefined;
	readonly LogBackupLocalRetentionNumber?: (number | undefined) | undefined;
	readonly LogBackupRetentionPeriod?: (number | undefined) | undefined;
	readonly MaintainTime?: (string | undefined) | undefined;
	readonly MasterUsername?: (string | undefined) | undefined;
	readonly MasterUserPassword?: (string | undefined) | undefined;
	readonly MasterUserType?: (string | undefined) | undefined;
	readonly MultiAZ?: (boolean | undefined) | undefined;
	readonly Port?: (number | undefined) | undefined;
	readonly PreferredBackupPeriod?: (any[] | undefined) | undefined;
	readonly PreferredBackupTime?: (string | undefined) | undefined;
	readonly PrivateIpAddress?: (string | undefined) | undefined;
	readonly Quantity?: (number | undefined) | undefined;
	readonly ReleasedKeepPolicy?: (string | undefined) | undefined;
	readonly ResourceGroupId?: (string | undefined) | undefined;
	readonly RoleARN?: (string | undefined) | undefined;
	readonly SecurityGroupId?: (string | undefined) | undefined;
	readonly ServerlessConfig?: (ServerlessConfig | undefined) | undefined;
	readonly SlaveZoneIds?: (string[] | undefined) | undefined;
	readonly SQLCollectorStatus?: (string | undefined) | undefined;
	readonly SSLSetting?: (string | undefined) | undefined;
	readonly Tags?: ({ [key: string]: any } | undefined) | undefined;
	readonly TargetDedicatedHostIdForLog?: (string | undefined) | undefined;
	readonly TargetDedicatedHostIdForMaster?: (string | undefined) | undefined;
	readonly TargetDedicatedHostIdForSlave?: (string | undefined) | undefined;
	readonly VpcId?: (string | undefined) | undefined;
	readonly VSwitchId?: (string | undefined) | undefined;
	readonly ZoneId?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export class ReadOnlyDBInstance
	extends RosResource<ReadOnlyDBInstanceComponentInputs>
	implements ReadOnlyDBInstanceComponentOutputs
{
	constructor(entity: ADKEntity, options: ReadOnlyDBInstanceComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::RDS::ReadOnlyDBInstance", options);
	}
	public readonly DbInstanceId: any;
	public readonly Port: any;
	public readonly ConnectionString: any;
}
export interface ReadOnlyDBInstanceComponentOutputs {
	readonly DbInstanceId: any;
	readonly Port: any;
	readonly ConnectionString: any;
}
export interface ReadOnlyDBInstanceComponentInputs {
	readonly DBInstanceClass: string;
	readonly DBInstanceId: string;
	readonly DBInstanceStorage: number;
	readonly EngineVersion: string;
	readonly ZoneId: string;
	readonly AutoRenew?: (boolean | undefined) | undefined;
	readonly Category?: (string | undefined) | undefined;
	readonly DBInstanceDescription?: (string | undefined) | undefined;
	readonly DBInstanceStorageType?: (string | undefined) | undefined;
	readonly PayType?: (string | undefined) | undefined;
	readonly Period?: (number | undefined) | undefined;
	readonly PeriodType?: (string | undefined) | undefined;
	readonly PrivateIpAddress?: (string | undefined) | undefined;
	readonly ResourceGroupId?: (string | undefined) | undefined;
	readonly Tags?: ({ [key: string]: any } | undefined) | undefined;
	readonly VPCId?: (string | undefined) | undefined;
	readonly VSwitchId?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export interface DBMappings {
	readonly CharacterSetName: string;
	readonly DBDescription?: (string | undefined) | undefined;
	readonly DBName: string;
}
export interface ServerlessConfig {
	readonly SwitchForce?: (boolean | undefined) | undefined;
	readonly MinCapacity: number;
	readonly AutoPause?: (boolean | undefined) | undefined;
	readonly MaxCapacity: number;
}
export interface TableMeta {
	readonly Type?: (string | undefined) | undefined;
	readonly Tables?: (Tables[] | undefined) | undefined;
	readonly NewName?: (string | undefined) | undefined;
	readonly Name?: (string | undefined) | undefined;
}
export interface Tables {
	readonly Type?: (string | undefined) | undefined;
	readonly NewName?: (string | undefined) | undefined;
	readonly Name?: (string | undefined) | undefined;
}
export interface Parameters {
	readonly Value: string;
	readonly Key: string;
}
export default {
	ADInfo: ADInfo,
	Account: Account,
	AccountPrivilege: AccountPrivilege,
	DBInstance: DBInstance,
	DBInstanceClone: DBInstanceClone,
	DBInstanceParameterGroup: DBInstanceParameterGroup,
	DBInstanceSecurityIps: DBInstanceSecurityIps,
	Database: Database,
	MigrateTask: MigrateTask,
	PrepayDBInstance: PrepayDBInstance,
	ReadOnlyDBInstance: ReadOnlyDBInstance,
};
