import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class NodeTypes extends GdmResource<NodeTypesComponentInputs> implements NodeTypesComponentOutputs {
	constructor(entity: ADKEntity, options: NodeTypesComponentInputs) {
		super(entity, options.name, "compute.beta.NodeTypes", options);
	}
	public readonly cpuPlatform?: string | undefined;
	public readonly creationTimestamp?: string | undefined;
	public readonly deprecated?: DeprecationStatus | undefined;
	public readonly description?: string | undefined;
	public readonly guestCpus?: number | undefined;
	public readonly id?: string | undefined;
	public readonly kind?: string | undefined;
	public readonly localSsdGb?: number | undefined;
	public readonly memoryMb?: number | undefined;
	public readonly selfLink?: string | undefined;
	public readonly zone?: string | undefined;
}
export interface NodeTypesComponentOutputs {
	readonly cpuPlatform?: string | undefined;
	readonly creationTimestamp?: string | undefined;
	readonly deprecated?: DeprecationStatus | undefined;
	readonly description?: string | undefined;
	readonly guestCpus?: number | undefined;
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly localSsdGb?: number | undefined;
	readonly memoryMb?: number | undefined;
	readonly selfLink?: string | undefined;
	readonly zone?: string | undefined;
}
export interface NodeTypesComponentInputs {
	readonly name: string;
	readonly type: string;
}
export interface DeprecationStatus {
	readonly deleted?: string | undefined;
	readonly deprecated?: string | undefined;
	readonly obsolete?: string | undefined;
	readonly replacement?: string | undefined;
	readonly state?: string | undefined;
	readonly stateOverride?: RolloutPolicy | undefined;
}
export interface NodeType {
	readonly cpuPlatform?: string | undefined;
	readonly creationTimestamp?: string | undefined;
	readonly deprecated?: DeprecationStatus | undefined;
	readonly description?: string | undefined;
	readonly guestCpus?: number | undefined;
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly localSsdGb?: number | undefined;
	readonly memoryMb?: number | undefined;
	readonly name?: string | undefined;
	readonly selfLink?: string | undefined;
	readonly zone?: string | undefined;
}
export interface RolloutPolicy {
	readonly defaultRolloutTime?: string | undefined;
	readonly locationRolloutPolicies?: { [P in string]: string } | undefined;
}
export default {
	NodeTypes: NodeTypes,
};
