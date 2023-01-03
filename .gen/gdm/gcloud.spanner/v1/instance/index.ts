import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class Instance extends GdmResource<InstanceComponentInputs> implements InstanceComponentOutputs {
	constructor(entity: ADKEntity, options: InstanceComponentInputs) {
		super(entity, options.name, "spanner.v1.instance", options);
	}
	public readonly createTime?: string | undefined;
	public readonly state?: string | undefined;
	public readonly updateTime?: string | undefined;
}
export interface InstanceComponentOutputs {
	readonly createTime?: string | undefined;
	readonly state?: string | undefined;
	readonly updateTime?: string | undefined;
}
export interface InstanceComponentInputs {
	readonly config: string;
	readonly displayName: string;
	readonly endpointUris?: string[] | undefined;
	readonly freeInstanceMetadata?: FreeInstanceMetadata | undefined;
	readonly instanceType?: string | undefined;
	readonly labels?: { [P in string]: string } | undefined;
	readonly name: string;
	readonly nodeCount?: number | undefined;
	readonly processingUnits?: number | undefined;
	readonly type: string;
}
export interface FreeInstanceMetadata {
	readonly expireBehavior?: string | undefined;
	readonly expireTime?: string | undefined;
	readonly upgradeTime?: string | undefined;
}
export default {
	Instance: Instance,
};
