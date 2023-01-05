import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class NodeTypes extends GdmResource<NodeTypesComponentInputs> implements NodeTypesComponentOutputs {
	constructor(entity: ADKEntity, options: NodeTypesComponentInputs) {
		super(entity, options.name, "compute.alpha.NodeTypes", options);
	}
	public readonly cpuPlatform?: string;
	public readonly creationTimestamp?: string;
	public readonly deprecated?: DeprecationStatus;
	public readonly description?: string;
	public readonly guestCpus?: number;
	public readonly id?: string;
	public readonly kind?: string;
	public readonly localSsdGb?: number;
	public readonly memoryMb?: number;
	public readonly selfLink?: string;
	public readonly selfLinkWithId?: string;
	public readonly zone?: string;
}
export interface NodeTypesComponentOutputs {
	readonly cpuPlatform?: string;
	readonly creationTimestamp?: string;
	readonly deprecated?: DeprecationStatus;
	readonly description?: string;
	readonly guestCpus?: number;
	readonly id?: string;
	readonly kind?: string;
	readonly localSsdGb?: number;
	readonly memoryMb?: number;
	readonly selfLink?: string;
	readonly selfLinkWithId?: string;
	readonly zone?: string;
}
export interface NodeTypesComponentInputs {
	readonly name: string;
}
export interface DeprecationStatus {
	readonly deleted?: string;
	readonly deprecated?: string;
	readonly obsolete?: string;
	readonly replacement?: string;
	readonly state?: string;
	readonly stateOverride?: RolloutPolicy;
}
export interface NodeType {
	readonly cpuPlatform?: string;
	readonly creationTimestamp?: string;
	readonly deprecated?: DeprecationStatus;
	readonly description?: string;
	readonly guestCpus?: number;
	readonly id?: string;
	readonly kind?: string;
	readonly localSsdGb?: number;
	readonly memoryMb?: number;
	readonly name?: string;
	readonly selfLink?: string;
	readonly selfLinkWithId?: string;
	readonly zone?: string;
}
export interface RolloutPolicy {
	readonly defaultRolloutTime?: string;
	readonly locationRolloutPolicies?: { [P in string]: string };
}
export default {
	NodeTypes: NodeTypes,
};
