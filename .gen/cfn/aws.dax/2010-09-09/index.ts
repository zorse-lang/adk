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
	readonly AvailabilityZones?: string[] | undefined;
	readonly ClusterEndpointEncryptionType?: string | undefined;
	readonly ClusterName?: string | undefined;
	readonly Description?: string | undefined;
	readonly NotificationTopicARN?: string | undefined;
	readonly ParameterGroupName?: string | undefined;
	readonly PreferredMaintenanceWindow?: string | undefined;
	readonly SecurityGroupIds?: string[] | undefined;
	readonly SSESpecification?: SSESpecification | undefined;
	readonly SubnetGroupName?: string | undefined;
	readonly Tags?: any | undefined;
	readonly LogicalId: string;
}
export class ParameterGroup extends CfnResource<ParameterGroupComponentInputs> implements ParameterGroupComponentOutputs {
	constructor(entity: ADKEntity, options: ParameterGroupComponentInputs) {
		super(entity, options.LogicalId, "AWS::DAX::ParameterGroup", options);
	}
}
export interface ParameterGroupComponentOutputs {}
export interface ParameterGroupComponentInputs {
	readonly Description?: string | undefined;
	readonly ParameterGroupName?: string | undefined;
	readonly ParameterNameValues?: any | undefined;
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
	readonly Description?: string | undefined;
	readonly SubnetGroupName?: string | undefined;
	readonly LogicalId: string;
}
export interface SSESpecification {
	readonly SSEEnabled?: boolean | undefined;
}
export default {
	Cluster: Cluster,
	ParameterGroup: ParameterGroup,
	SubnetGroup: SubnetGroup,
};
