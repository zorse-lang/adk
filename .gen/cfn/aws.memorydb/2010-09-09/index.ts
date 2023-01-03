import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class ACL extends CfnResource<ACLComponentInputs> implements ACLComponentOutputs {
	constructor(entity: ADKEntity, options: ACLComponentInputs) {
		super(entity, options.LogicalId, "AWS::MemoryDB::ACL", options);
	}
	public readonly Arn: string;
	public readonly Status: string;
}
export interface ACLComponentOutputs {
	readonly Arn: string;
	readonly Status: string;
}
export interface ACLComponentInputs {
	readonly ACLName: string;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly UserNames?: (string[] | undefined) | undefined;
	readonly LogicalId: string;
}
export class Cluster extends CfnResource<ClusterComponentInputs> implements ClusterComponentOutputs {
	constructor(entity: ADKEntity, options: ClusterComponentInputs) {
		super(entity, options.LogicalId, "AWS::MemoryDB::Cluster", options);
	}
	public readonly Arn: string;
	public readonly ClusterEndpointAddress: string;
	public readonly ClusterEndpointPort: number;
	public readonly ParameterGroupStatus: string;
	public readonly Status: string;
}
export interface ClusterComponentOutputs {
	readonly Arn: string;
	readonly ClusterEndpointAddress: string;
	readonly ClusterEndpointPort: number;
	readonly ParameterGroupStatus: string;
	readonly Status: string;
}
export interface ClusterComponentInputs {
	readonly ACLName: string;
	readonly ClusterName: string;
	readonly NodeType: string;
	readonly AutoMinorVersionUpgrade?: (boolean | undefined) | undefined;
	readonly ClusterEndpoint?: (Endpoint | undefined) | undefined;
	readonly DataTiering?: (string | undefined) | undefined;
	readonly Description?: (string | undefined) | undefined;
	readonly EngineVersion?: (string | undefined) | undefined;
	readonly FinalSnapshotName?: (string | undefined) | undefined;
	readonly KmsKeyId?: (string | undefined) | undefined;
	readonly MaintenanceWindow?: (string | undefined) | undefined;
	readonly NumReplicasPerShard?: (number | undefined) | undefined;
	readonly NumShards?: (number | undefined) | undefined;
	readonly ParameterGroupName?: (string | undefined) | undefined;
	readonly Port?: (number | undefined) | undefined;
	readonly SecurityGroupIds?: (string[] | undefined) | undefined;
	readonly SnapshotArns?: (string[] | undefined) | undefined;
	readonly SnapshotName?: (string | undefined) | undefined;
	readonly SnapshotRetentionLimit?: (number | undefined) | undefined;
	readonly SnapshotWindow?: (string | undefined) | undefined;
	readonly SnsTopicArn?: (string | undefined) | undefined;
	readonly SnsTopicStatus?: (string | undefined) | undefined;
	readonly SubnetGroupName?: (string | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly TLSEnabled?: (boolean | undefined) | undefined;
	readonly LogicalId: string;
}
export class ParameterGroup extends CfnResource<ParameterGroupComponentInputs> implements ParameterGroupComponentOutputs {
	constructor(entity: ADKEntity, options: ParameterGroupComponentInputs) {
		super(entity, options.LogicalId, "AWS::MemoryDB::ParameterGroup", options);
	}
	public readonly Arn: string;
}
export interface ParameterGroupComponentOutputs {
	readonly Arn: string;
}
export interface ParameterGroupComponentInputs {
	readonly Family: string;
	readonly ParameterGroupName: string;
	readonly Description?: (string | undefined) | undefined;
	readonly Parameters?: (any | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly LogicalId: string;
}
export class SubnetGroup extends CfnResource<SubnetGroupComponentInputs> implements SubnetGroupComponentOutputs {
	constructor(entity: ADKEntity, options: SubnetGroupComponentInputs) {
		super(entity, options.LogicalId, "AWS::MemoryDB::SubnetGroup", options);
	}
	public readonly Arn: string;
}
export interface SubnetGroupComponentOutputs {
	readonly Arn: string;
}
export interface SubnetGroupComponentInputs {
	readonly SubnetGroupName: string;
	readonly SubnetIds: string[];
	readonly Description?: (string | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly LogicalId: string;
}
export class User extends CfnResource<UserComponentInputs> implements UserComponentOutputs {
	constructor(entity: ADKEntity, options: UserComponentInputs) {
		super(entity, options.LogicalId, "AWS::MemoryDB::User", options);
	}
	public readonly Arn: string;
	public readonly Status: string;
}
export interface UserComponentOutputs {
	readonly Arn: string;
	readonly Status: string;
}
export interface UserComponentInputs {
	readonly AccessString: string;
	readonly AuthenticationMode: AuthenticationMode;
	readonly UserName: string;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly LogicalId: string;
}
export interface Endpoint {
	readonly Address?: (string | undefined) | undefined;
	readonly Port?: (number | undefined) | undefined;
}
export interface AuthenticationMode {
	readonly Passwords?: (string[] | undefined) | undefined;
	readonly Type?: (string | undefined) | undefined;
}
export default {
	ACL: ACL,
	Cluster: Cluster,
	ParameterGroup: ParameterGroup,
	SubnetGroup: SubnetGroup,
	User: User,
};
