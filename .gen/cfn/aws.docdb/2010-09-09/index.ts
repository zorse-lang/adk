import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class DBCluster extends CfnResource<DBClusterComponentInputs> implements DBClusterComponentOutputs {
	constructor(entity: ADKEntity, options: DBClusterComponentInputs) {
		super(entity, options.LogicalId, "AWS::DocDB::DBCluster", options);
	}
	public readonly ClusterResourceId: string;
	public readonly Endpoint: string;
	public readonly ReadEndpoint: string;
}
export interface DBClusterComponentOutputs {
	readonly ClusterResourceId: string;
	readonly Endpoint: string;
	readonly ReadEndpoint: string;
}
export interface DBClusterComponentInputs {
	readonly AvailabilityZones?: (string[] | undefined) | undefined;
	readonly BackupRetentionPeriod?: (number | undefined) | undefined;
	readonly CopyTagsToSnapshot?: (boolean | undefined) | undefined;
	readonly DBClusterIdentifier?: (string | undefined) | undefined;
	readonly DBClusterParameterGroupName?: (string | undefined) | undefined;
	readonly DBSubnetGroupName?: (string | undefined) | undefined;
	readonly DeletionProtection?: (boolean | undefined) | undefined;
	readonly EnableCloudwatchLogsExports?: (string[] | undefined) | undefined;
	readonly EngineVersion?: (string | undefined) | undefined;
	readonly KmsKeyId?: (string | undefined) | undefined;
	readonly MasterUsername?: (string | undefined) | undefined;
	readonly MasterUserPassword?: (string | undefined) | undefined;
	readonly Port?: (number | string) | undefined;
	readonly PreferredBackupWindow?: (string | undefined) | undefined;
	readonly PreferredMaintenanceWindow?: (string | undefined) | undefined;
	readonly RestoreToTime?: (string | undefined) | undefined;
	readonly RestoreType?: (string | undefined) | undefined;
	readonly SnapshotIdentifier?: (string | undefined) | undefined;
	readonly SourceDBClusterIdentifier?: (string | undefined) | undefined;
	readonly StorageEncrypted?: (boolean | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly UseLatestRestorableTime?: (boolean | undefined) | undefined;
	readonly VpcSecurityGroupIds?: (string[] | undefined) | undefined;
	readonly LogicalId: string;
}
export class DBClusterParameterGroup
	extends CfnResource<DBClusterParameterGroupComponentInputs>
	implements DBClusterParameterGroupComponentOutputs
{
	constructor(entity: ADKEntity, options: DBClusterParameterGroupComponentInputs) {
		super(entity, options.LogicalId, "AWS::DocDB::DBClusterParameterGroup", options);
	}
}
export interface DBClusterParameterGroupComponentOutputs {}
export interface DBClusterParameterGroupComponentInputs {
	readonly Description: string;
	readonly Family: string;
	readonly Parameters: any;
	readonly Name?: (string | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly LogicalId: string;
}
export class DBInstance extends CfnResource<DBInstanceComponentInputs> implements DBInstanceComponentOutputs {
	constructor(entity: ADKEntity, options: DBInstanceComponentInputs) {
		super(entity, options.LogicalId, "AWS::DocDB::DBInstance", options);
	}
	public readonly Endpoint: string;
	public readonly Port: string;
}
export interface DBInstanceComponentOutputs {
	readonly Endpoint: string;
	readonly Port: string;
}
export interface DBInstanceComponentInputs {
	readonly DBClusterIdentifier: string;
	readonly DBInstanceClass: string;
	readonly AutoMinorVersionUpgrade?: (boolean | undefined) | undefined;
	readonly AvailabilityZone?: (string | undefined) | undefined;
	readonly DBInstanceIdentifier?: (string | undefined) | undefined;
	readonly EnablePerformanceInsights?: (boolean | undefined) | undefined;
	readonly PreferredMaintenanceWindow?: (string | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly LogicalId: string;
}
export class DBSubnetGroup extends CfnResource<DBSubnetGroupComponentInputs> implements DBSubnetGroupComponentOutputs {
	constructor(entity: ADKEntity, options: DBSubnetGroupComponentInputs) {
		super(entity, options.LogicalId, "AWS::DocDB::DBSubnetGroup", options);
	}
}
export interface DBSubnetGroupComponentOutputs {}
export interface DBSubnetGroupComponentInputs {
	readonly DBSubnetGroupDescription: string;
	readonly SubnetIds: string[];
	readonly DBSubnetGroupName?: (string | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly LogicalId: string;
}
export default {
	DBCluster: DBCluster,
	DBClusterParameterGroup: DBClusterParameterGroup,
	DBInstance: DBInstance,
	DBSubnetGroup: DBSubnetGroup,
};