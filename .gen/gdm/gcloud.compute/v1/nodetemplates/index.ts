import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class NodeTemplates extends GdmResource<NodeTemplatesComponentInputs> implements NodeTemplatesComponentOutputs {
	constructor(entity: ADKEntity, options: NodeTemplatesComponentInputs) {
		super(entity, options.name, "compute.v1.NodeTemplates", options);
	}
	public readonly creationTimestamp?: string | undefined;
	public readonly id?: string | undefined;
	public readonly kind?: string | undefined;
	public readonly region?: string | undefined;
	public readonly selfLink?: string | undefined;
	public readonly status?: string | undefined;
	public readonly statusMessage?: string | undefined;
}
export interface NodeTemplatesComponentOutputs {
	readonly creationTimestamp?: string | undefined;
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly region?: string | undefined;
	readonly selfLink?: string | undefined;
	readonly status?: string | undefined;
	readonly statusMessage?: string | undefined;
}
export interface NodeTemplatesComponentInputs {
	readonly accelerators?: AcceleratorConfig[] | undefined;
	readonly cpuOvercommitType?: string | undefined;
	readonly description?: string | undefined;
	readonly disks?: LocalDisk[] | undefined;
	readonly name: string;
	readonly nodeAffinityLabels?: { [P in string]: string } | undefined;
	readonly nodeType?: string | undefined;
	readonly nodeTypeFlexibility?: NodeTemplateNodeTypeFlexibility | undefined;
	readonly requestId?: string | undefined;
	readonly serverBinding?: ServerBinding | undefined;
	readonly type: string;
}
export interface AcceleratorConfig {
	readonly acceleratorCount?: number | undefined;
	readonly acceleratorType?: string | undefined;
}
export interface LocalDisk {
	readonly diskCount?: number | undefined;
	readonly diskSizeGb?: number | undefined;
	readonly diskType?: string | undefined;
}
export interface NodeTemplate {
	readonly accelerators?: AcceleratorConfig[] | undefined;
	readonly cpuOvercommitType?: string | undefined;
	readonly creationTimestamp?: string | undefined;
	readonly description?: string | undefined;
	readonly disks?: LocalDisk[] | undefined;
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly name?: string | undefined;
	readonly nodeAffinityLabels?: { [P in string]: string } | undefined;
	readonly nodeType?: string | undefined;
	readonly nodeTypeFlexibility?: NodeTemplateNodeTypeFlexibility | undefined;
	readonly region?: string | undefined;
	readonly selfLink?: string | undefined;
	readonly serverBinding?: ServerBinding | undefined;
	readonly status?: string | undefined;
	readonly statusMessage?: string | undefined;
}
export interface NodeTemplateNodeTypeFlexibility {
	readonly cpus?: string | undefined;
	readonly localSsd?: string | undefined;
	readonly memory?: string | undefined;
}
export interface ServerBinding {
	readonly type?: string | undefined;
}
export default {
	NodeTemplates: NodeTemplates,
};
