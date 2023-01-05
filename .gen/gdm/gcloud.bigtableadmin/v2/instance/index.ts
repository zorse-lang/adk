import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class Instance extends GdmResource<InstanceComponentInputs> implements InstanceComponentOutputs {
	constructor(entity: ADKEntity, options: InstanceComponentInputs) {
		super(entity, options.name, "bigtableadmin.v2.instance", options);
	}
	public readonly createTime?: string;
	public readonly satisfiesPzs?: boolean;
	public readonly state?: string;
}
export interface InstanceComponentOutputs {
	readonly createTime?: string;
	readonly satisfiesPzs?: boolean;
	readonly state?: string;
}
export interface InstanceComponentInputs {
	readonly displayName: string;
	readonly labels?: { [P in string]: string };
	readonly name: string;
}
export default {
	Instance: Instance,
};
