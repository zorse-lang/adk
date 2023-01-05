import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class changes extends ArmResource<changesComponentInputs> implements changesComponentOutputs {
	constructor(entity: ADKEntity, options: changesComponentInputs) {
		super(entity, options.name, "Microsoft.Resources/changes", "2022-03-01-preview", options);
	}
	public readonly apiVersion: "2022-03-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Resources/changes";
}
export interface changesComponentOutputs {
	readonly apiVersion: "2022-03-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Resources/changes";
}
export interface changesComponentInputs {
	readonly name: string;
	readonly properties?: ChangeProperties;
}
export interface ChangeAttributes {
	readonly changesCount?: number;
	readonly correlationId?: string;
	readonly newResourceSnapshotId?: string;
	readonly previousResourceSnapshotId?: string;
	readonly timestamp?: string;
}
export interface ChangeBase {
	readonly changeCategory?: "Create" | "System";
	readonly newValue?: string;
	readonly previousValue?: string;
	readonly propertyChangeType?: "Insert" | "Remove";
}
export interface ChangeProperties {
	readonly changeAttributes?: ChangeAttributes;
	readonly changes?: ChangesDictionary;
	readonly changeType?: "Create" | "Delete";
	readonly targetResourceId?: string;
	readonly targetResourceType?: string;
}
export interface ChangesDictionary {
	readonly [key: string]: ChangeBase;
}
export default {
	changes: changes,
};
