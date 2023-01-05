import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class DBCluster extends CfnResource<DBClusterComponentInputs> implements DBClusterComponentOutputs {
	constructor(entity: ADKEntity, options: DBClusterComponentInputs) {
		super(entity, options.LogicalId, "AWS::Neptune::DBCluster", options);
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
	readonly AssociatedRoles?: DBClusterRole[] | undefined;
	readonly AvailabilityZones?: string[] | undefined;
	readonly BackupRetentionPeriod?: number | undefined;
	readonly DBClusterIdentifier?: string | undefined;
	readonly DBClusterParameterGroupName?: string | undefined;
	readonly DBSubnetGroupName?: string | undefined;
	readonly DeletionProtection?: boolean | undefined;
	readonly EnableCloudwatchLogsExports?: string[] | undefined;
	readonly EngineVersion?: string | undefined;
	readonly IamAuthEnabled?: boolean | undefined;
	readonly KmsKeyId?: string | undefined;
	readonly Port?: number | string;
	readonly PreferredBackupWindow?: string | undefined;
	readonly PreferredMaintenanceWindow?: string | undefined;
	readonly RestoreToTime?: string | undefined;
	readonly RestoreType?: string | undefined;
	readonly SnapshotIdentifier?: string | undefined;
	readonly SourceDBClusterIdentifier?: string | undefined;
	readonly StorageEncrypted?: boolean | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly UseLatestRestorableTime?: boolean | undefined;
	readonly VpcSecurityGroupIds?: string[] | undefined;
	readonly LogicalId: string;
}
export class DBClusterParameterGroup
	extends CfnResource<DBClusterParameterGroupComponentInputs>
	implements DBClusterParameterGroupComponentOutputs
{
	constructor(entity: ADKEntity, options: DBClusterParameterGroupComponentInputs) {
		super(entity, options.LogicalId, "AWS::Neptune::DBClusterParameterGroup", options);
	}
}
export interface DBClusterParameterGroupComponentOutputs {}
export interface DBClusterParameterGroupComponentInputs {
	readonly Description: string;
	readonly Family: string;
	readonly Parameters: any;
	readonly Name?: string | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export class DBInstance extends CfnResource<DBInstanceComponentInputs> implements DBInstanceComponentOutputs {
	constructor(entity: ADKEntity, options: DBInstanceComponentInputs) {
		super(entity, options.LogicalId, "AWS::Neptune::DBInstance", options);
	}
	public readonly Endpoint: string;
	public readonly Port: string;
}
export interface DBInstanceComponentOutputs {
	readonly Endpoint: string;
	readonly Port: string;
}
export interface DBInstanceComponentInputs {
	readonly DBInstanceClass: string;
	readonly AllowMajorVersionUpgrade?: boolean | undefined;
	readonly AutoMinorVersionUpgrade?: boolean | undefined;
	readonly AvailabilityZone?: string | undefined;
	readonly DBClusterIdentifier?: string | undefined;
	readonly DBInstanceIdentifier?: string | undefined;
	readonly DBParameterGroupName?: string | undefined;
	readonly DBSnapshotIdentifier?: string | undefined;
	readonly DBSubnetGroupName?: string | undefined;
	readonly PreferredMaintenanceWindow?: string | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export class DBParameterGroup
	extends CfnResource<DBParameterGroupComponentInputs>
	implements DBParameterGroupComponentOutputs
{
	constructor(entity: ADKEntity, options: DBParameterGroupComponentInputs) {
		super(entity, options.LogicalId, "AWS::Neptune::DBParameterGroup", options);
	}
}
export interface DBParameterGroupComponentOutputs {}
export interface DBParameterGroupComponentInputs {
	readonly Description: string;
	readonly Family: string;
	readonly Parameters: any;
	readonly Name?: string | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export class DBSubnetGroup extends CfnResource<DBSubnetGroupComponentInputs> implements DBSubnetGroupComponentOutputs {
	constructor(entity: ADKEntity, options: DBSubnetGroupComponentInputs) {
		super(entity, options.LogicalId, "AWS::Neptune::DBSubnetGroup", options);
	}
}
export interface DBSubnetGroupComponentOutputs {}
export interface DBSubnetGroupComponentInputs {
	readonly DBSubnetGroupDescription: string;
	readonly SubnetIds: string[];
	readonly DBSubnetGroupName?: string | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export interface DBClusterRole {
	readonly FeatureName?: string | undefined;
	readonly RoleArn: string;
}
export default {
	DBCluster: DBCluster,
	DBClusterParameterGroup: DBClusterParameterGroup,
	DBInstance: DBInstance,
	DBParameterGroup: DBParameterGroup,
	DBSubnetGroup: DBSubnetGroup,
};
