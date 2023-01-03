import { RosResource, Entity as ADKEntity } from "@zorse/adk";

export class Account extends RosResource<AccountComponentInputs> implements AccountComponentOutputs {
	constructor(entity: ADKEntity, options: AccountComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::POLARDB::Account", options);
	}
}
export interface AccountComponentOutputs {}
export interface AccountComponentInputs {
	readonly AccountName: string;
	readonly AccountPassword: string;
	readonly DBClusterId: string;
	readonly AccountDescription?: (string | undefined) | undefined;
	readonly AccountPrivilege?: (string | undefined) | undefined;
	readonly AccountType?: (string | undefined) | undefined;
	readonly DBName?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export class AccountPrivilege
	extends RosResource<AccountPrivilegeComponentInputs>
	implements AccountPrivilegeComponentOutputs
{
	constructor(entity: ADKEntity, options: AccountPrivilegeComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::POLARDB::AccountPrivilege", options);
	}
}
export interface AccountPrivilegeComponentOutputs {}
export interface AccountPrivilegeComponentInputs {
	readonly AccountName: string;
	readonly AccountPrivilege: string;
	readonly DBClusterId: string;
	readonly DBName: string;
	readonly LogicalId: string;
}
export class DBCluster extends RosResource<DBClusterComponentInputs> implements DBClusterComponentOutputs {
	constructor(entity: ADKEntity, options: DBClusterComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::POLARDB::DBCluster", options);
	}
	public readonly DbNodeIds: any;
	public readonly PrimaryConnectionString: any;
	public readonly ClusterConnectionString: any;
	public readonly ClusterEndpointId: any;
	public readonly DbClusterId: any;
	public readonly CustomEndpointIds: any;
	public readonly PrimaryEndpointId: any;
	public readonly OrderId: any;
	public readonly CustomConnectionStrings: any;
}
export interface DBClusterComponentOutputs {
	readonly DbNodeIds: any;
	readonly PrimaryConnectionString: any;
	readonly ClusterConnectionString: any;
	readonly ClusterEndpointId: any;
	readonly DbClusterId: any;
	readonly CustomEndpointIds: any;
	readonly PrimaryEndpointId: any;
	readonly OrderId: any;
	readonly CustomConnectionStrings: any;
}
export interface DBClusterComponentInputs {
	readonly DBNodeClass: string;
	readonly DBType: string;
	readonly DBVersion: string;
	readonly PayType: string;
	readonly AllowShutDown?: (boolean | undefined) | undefined;
	readonly AutoRenewPeriod?: (number | undefined) | undefined;
	readonly BackupRetentionPolicyOnClusterDeletion?: (string | undefined) | undefined;
	readonly CloneDataPoint?: (string | undefined) | undefined;
	readonly ClusterNetworkType?: (string | undefined) | undefined;
	readonly CreationCategory?: (string | undefined) | undefined;
	readonly CreationOption?: (string | undefined) | undefined;
	readonly DBClusterDescription?: (string | undefined) | undefined;
	readonly DBClusterParameters?: (DBClusterParameters | undefined) | undefined;
	readonly DefaultTimeZone?: (string | undefined) | undefined;
	readonly GDNId?: (string | undefined) | undefined;
	readonly LowerCaseTableNames?: (number | undefined) | undefined;
	readonly MaintainTime?: (string | undefined) | undefined;
	readonly Period?: (number | undefined) | undefined;
	readonly PeriodUnit?: (string | undefined) | undefined;
	readonly RenewalStatus?: (string | undefined) | undefined;
	readonly ResourceGroupId?: (string | undefined) | undefined;
	readonly ScaleMax?: (number | undefined) | undefined;
	readonly ScaleMin?: (number | undefined) | undefined;
	readonly ScaleRoNumMax?: (number | undefined) | undefined;
	readonly ScaleRoNumMin?: (number | undefined) | undefined;
	readonly SecurityGroupIds?: (string[] | undefined) | undefined;
	readonly SecurityIPList?: (string | undefined) | undefined;
	readonly ServerlessType?: (string | undefined) | undefined;
	readonly SourceResourceId?: (string | undefined) | undefined;
	readonly Tags?: (Tags[] | undefined) | undefined;
	readonly TDEStatus?: (boolean | undefined) | undefined;
	readonly VpcId?: (string | undefined) | undefined;
	readonly VSwitchId?: (string | undefined) | undefined;
	readonly ZoneId?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export class DBClusterAccessWhiteList
	extends RosResource<DBClusterAccessWhiteListComponentInputs>
	implements DBClusterAccessWhiteListComponentOutputs
{
	constructor(entity: ADKEntity, options: DBClusterAccessWhiteListComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::POLARDB::DBClusterAccessWhiteList", options);
	}
	public readonly DbClusterId: any;
}
export interface DBClusterAccessWhiteListComponentOutputs {
	readonly DbClusterId: any;
}
export interface DBClusterAccessWhiteListComponentInputs {
	readonly DBClusterId: string;
	readonly SecurityIps: string;
	readonly DBClusterIPArrayName?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export class DBClusterEndpoint
	extends RosResource<DBClusterEndpointComponentInputs>
	implements DBClusterEndpointComponentOutputs
{
	constructor(entity: ADKEntity, options: DBClusterEndpointComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::POLARDB::DBClusterEndpoint", options);
	}
	public readonly Addresses: any;
	public readonly DbEndpointId: any;
	public readonly ConnectionString: any;
}
export interface DBClusterEndpointComponentOutputs {
	readonly Addresses: any;
	readonly DbEndpointId: any;
	readonly ConnectionString: any;
}
export interface DBClusterEndpointComponentInputs {
	readonly DBClusterId: string;
	readonly AutoAddNewNodes?: (string | undefined) | undefined;
	readonly EndpointConfig?: (EndpointConfig | undefined) | undefined;
	readonly EndpointType?: (string | undefined) | undefined;
	readonly Nodes?: (any[] | undefined) | undefined;
	readonly ReadWriteMode?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export class DBClusterEndpointAddress
	extends RosResource<DBClusterEndpointAddressComponentInputs>
	implements DBClusterEndpointAddressComponentOutputs
{
	constructor(entity: ADKEntity, options: DBClusterEndpointAddressComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::POLARDB::DBClusterEndpointAddress", options);
	}
	public readonly Address: any;
	public readonly ConnectionString: any;
}
export interface DBClusterEndpointAddressComponentOutputs {
	readonly Address: any;
	readonly ConnectionString: any;
}
export interface DBClusterEndpointAddressComponentInputs {
	readonly DBClusterId: string;
	readonly DBEndpointId: string;
	readonly ConnectionStringPrefix?: (string | undefined) | undefined;
	readonly NetType?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export class DBInstance extends RosResource<DBInstanceComponentInputs> implements DBInstanceComponentOutputs {
	constructor(entity: ADKEntity, options: DBInstanceComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::POLARDB::DBInstance", options);
	}
}
export interface DBInstanceComponentOutputs {}
export interface DBInstanceComponentInputs {
	readonly CharacterSetName: string;
	readonly DBClusterId: string;
	readonly DBName: string;
	readonly AccountName?: (string | undefined) | undefined;
	readonly AccountPrivilege?: (string | undefined) | undefined;
	readonly DBDescription?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export class DBNodes extends RosResource<DBNodesComponentInputs> implements DBNodesComponentOutputs {
	constructor(entity: ADKEntity, options: DBNodesComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::POLARDB::DBNodes", options);
	}
	public readonly DbNodeIds: any;
	public readonly OrderIds: any;
}
export interface DBNodesComponentOutputs {
	readonly DbNodeIds: any;
	readonly OrderIds: any;
}
export interface DBNodesComponentInputs {
	readonly Amount: number;
	readonly DBClusterId: string;
	readonly ImciSwitch?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export interface DBClusterParameters {
	readonly Parameters?: (string | undefined) | undefined;
	readonly EffectiveTime?: (string | undefined) | undefined;
}
export interface Tags {
	readonly Value?: (string | undefined) | undefined;
	readonly Key: string;
}
export interface EndpointConfig {
	readonly ConsistLevel?: (string | undefined) | undefined;
}
export default {
	Account: Account,
	AccountPrivilege: AccountPrivilege,
	DBCluster: DBCluster,
	DBClusterAccessWhiteList: DBClusterAccessWhiteList,
	DBClusterEndpoint: DBClusterEndpoint,
	DBClusterEndpointAddress: DBClusterEndpointAddress,
	DBInstance: DBInstance,
	DBNodes: DBNodes,
};
