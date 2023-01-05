import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class NodeTemplates extends GdmResource<NodeTemplatesComponentInputs> implements NodeTemplatesComponentOutputs {
	constructor(entity: ADKEntity, options: NodeTemplatesComponentInputs) {
		super(entity, options.name, "compute.v1.NodeTemplates", options);
	}
	public readonly creationTimestamp?: string;
	public readonly id?: string;
	public readonly kind?: string;
	public readonly region?: string;
	public readonly selfLink?: string;
	public readonly status?: string;
	public readonly statusMessage?: string;
}
export interface NodeTemplatesComponentOutputs {
	readonly creationTimestamp?: string;
	readonly id?: string;
	readonly kind?: string;
	readonly region?: string;
	readonly selfLink?: string;
	readonly status?: string;
	readonly statusMessage?: string;
}
export interface NodeTemplatesComponentInputs {
	readonly accelerators?: AcceleratorConfig[];
	readonly cpuOvercommitType?: string;
	readonly description?: string;
	readonly disks?: LocalDisk[];
	readonly name: string;
	readonly nodeAffinityLabels?: { [P in string]: string };
	readonly nodeType?: string;
	readonly nodeTypeFlexibility?: NodeTemplateNodeTypeFlexibility;
	readonly requestId?: string;
	readonly serverBinding?: ServerBinding;
}
export interface AcceleratorConfig {
	readonly acceleratorCount?: number;
	readonly acceleratorType?: string;
}
export interface LocalDisk {
	readonly diskCount?: number;
	readonly diskSizeGb?: number;
	readonly diskType?: string;
}
export interface NodeTemplate {
	readonly accelerators?: AcceleratorConfig[];
	readonly cpuOvercommitType?: string;
	readonly creationTimestamp?: string;
	readonly description?: string;
	readonly disks?: LocalDisk[];
	readonly id?: string;
	readonly kind?: string;
	readonly name?: string;
	readonly nodeAffinityLabels?: { [P in string]: string };
	readonly nodeType?: string;
	readonly nodeTypeFlexibility?: NodeTemplateNodeTypeFlexibility;
	readonly region?: string;
	readonly selfLink?: string;
	readonly serverBinding?: ServerBinding;
	readonly status?: string;
	readonly statusMessage?: string;
}
export interface NodeTemplateNodeTypeFlexibility {
	readonly cpus?: string;
	readonly localSsd?: string;
	readonly memory?: string;
}
export interface ServerBinding {
	readonly type?: string;
}
export default {
	NodeTemplates: NodeTemplates,
};
