import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class VirtualCluster extends CfnResource<VirtualClusterComponentInputs> implements VirtualClusterComponentOutputs {
	constructor(entity: ADKEntity, options: VirtualClusterComponentInputs) {
		super(entity, options.LogicalId, "AWS::EMRContainers::VirtualCluster", options);
	}
	public readonly Arn: string;
	public readonly Id: string;
}
export interface VirtualClusterComponentOutputs {
	readonly Arn: string;
	readonly Id: string;
}
export interface VirtualClusterComponentInputs {
	readonly ContainerProvider: ContainerProvider;
	readonly Name: string;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export interface ContainerInfo {
	readonly EksInfo: EksInfo;
}
export interface ContainerProvider {
	readonly Id: string;
	readonly Info: ContainerInfo;
	readonly Type: string;
}
export interface EksInfo {
	readonly Namespace: string;
}
export default {
	VirtualCluster: VirtualCluster,
};
