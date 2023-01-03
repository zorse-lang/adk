import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class Cluster extends CfnResource<ClusterComponentInputs> implements ClusterComponentOutputs {
	constructor(entity: ADKEntity, options: ClusterComponentInputs) {
		super(entity, options.LogicalId, "AWS::DAX::Cluster", options);
	}
	public readonly Arn: string;
	public readonly ClusterDiscoveryEndpoint: string;
	public readonly ClusterDiscoveryEndpointUrl: string;
}
export interface ClusterComponentOutputs {
	readonly Arn: string;
	readonly ClusterDiscoveryEndpoint: string;
	readonly ClusterDiscoveryEndpointUrl: string;
}
export interface ClusterComponentInputs {
	readonly IAMRoleARN: string;
	readonly NodeType: string;
	readonly ReplicationFactor: number;
	readonly AvailabilityZones?: (string[] | undefined) | undefined;
	readonly ClusterEndpointEncryptionType?: (string | undefined) | undefined;
	readonly ClusterName?: (string | undefined) | undefined;
	readonly Description?: (string | undefined) | undefined;
	readonly NotificationTopicARN?: (string | undefined) | undefined;
	readonly ParameterGroupName?: (string | undefined) | undefined;
	readonly PreferredMaintenanceWindow?: (string | undefined) | undefined;
	readonly SecurityGroupIds?: (string[] | undefined) | undefined;
	readonly SSESpecification?: (SSESpecification | undefined) | undefined;
	readonly SubnetGroupName?: (string | undefined) | undefined;
	readonly Tags?: (any | undefined) | undefined;
	readonly LogicalId: string;
}
export class ParameterGroup extends CfnResource<ParameterGroupComponentInputs> implements ParameterGroupComponentOutputs {
	constructor(entity: ADKEntity, options: ParameterGroupComponentInputs) {
		super(entity, options.LogicalId, "AWS::DAX::ParameterGroup", options);
	}
}
export interface ParameterGroupComponentOutputs {}
export interface ParameterGroupComponentInputs {
	readonly Description?: (string | undefined) | undefined;
	readonly ParameterGroupName?: (string | undefined) | undefined;
	readonly ParameterNameValues?: (any | undefined) | undefined;
	readonly LogicalId: string;
}
export class SubnetGroup extends CfnResource<SubnetGroupComponentInputs> implements SubnetGroupComponentOutputs {
	constructor(entity: ADKEntity, options: SubnetGroupComponentInputs) {
		super(entity, options.LogicalId, "AWS::DAX::SubnetGroup", options);
	}
}
export interface SubnetGroupComponentOutputs {}
export interface SubnetGroupComponentInputs {
	readonly SubnetIds: string[];
	readonly Description?: (string | undefined) | undefined;
	readonly SubnetGroupName?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export interface SSESpecification {
	readonly SSEEnabled?: (boolean | undefined) | undefined;
}
export default {
	Cluster: Cluster,
	ParameterGroup: ParameterGroup,
	SubnetGroup: SubnetGroup,
};
