import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class Instance extends GdmResource<InstanceComponentInputs> implements InstanceComponentOutputs {
	constructor(entity: ADKEntity, options: InstanceComponentInputs) {
		super(entity, options.name, "spanner.v1.instance", options);
	}
	public readonly createTime?: string;
	public readonly state?: string;
	public readonly updateTime?: string;
}
export interface InstanceComponentOutputs {
	readonly createTime?: string;
	readonly state?: string;
	readonly updateTime?: string;
}
export interface InstanceComponentInputs {
	readonly config: string;
	readonly displayName: string;
	readonly endpointUris?: string[];
	readonly freeInstanceMetadata?: FreeInstanceMetadata;
	readonly instanceType?: string;
	readonly labels?: { [P in string]: string };
	readonly name: string;
	readonly nodeCount?: number;
	readonly processingUnits?: number;
}
export interface FreeInstanceMetadata {
	readonly expireBehavior?: string;
	readonly expireTime?: string;
	readonly upgradeTime?: string;
}
export default {
	Instance: Instance,
};
