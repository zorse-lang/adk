import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class locks extends ArmResource<locksComponentInputs> implements locksComponentOutputs {
	constructor(entity: ADKEntity, options: locksComponentInputs) {
		super(entity, options.name, "Microsoft.Authorization/locks", "2017-04-01", options);
	}
	public readonly apiVersion: "2017-04-01";
	public readonly id: string;
	public readonly type: "Microsoft.Authorization/locks";
}
export interface locksComponentOutputs {
	readonly apiVersion: "2017-04-01";
	readonly id: string;
	readonly type: "Microsoft.Authorization/locks";
}
export interface locksComponentInputs {
	readonly name: string;
	readonly properties: ManagementLockProperties;
}
export interface ManagementLockOwner {
	readonly applicationId?: string;
}
export interface ManagementLockProperties {
	readonly level: "CanNotDelete" | "NotSpecified" | "ReadOnly";
	readonly notes?: string;
	readonly owners?: ManagementLockOwner[];
}
export default {
	locks: locks,
};
