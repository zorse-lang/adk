import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class Instance extends GdmResource<InstanceComponentInputs> implements InstanceComponentOutputs {
	constructor(entity: ADKEntity, options: InstanceComponentInputs) {
		super(entity, options.name, "bigtableadmin.v2.instance", options);
	}
	public readonly createTime?: string | undefined;
	public readonly satisfiesPzs?: boolean | undefined;
	public readonly state?: string | undefined;
}
export interface InstanceComponentOutputs {
	readonly createTime?: string | undefined;
	readonly satisfiesPzs?: boolean | undefined;
	readonly state?: string | undefined;
}
export interface InstanceComponentInputs {
	readonly displayName: string;
	readonly labels?: { [P in string]: string } | undefined;
	readonly name: string;
	readonly type: string;
}
export default {
	Instance: Instance,
};
