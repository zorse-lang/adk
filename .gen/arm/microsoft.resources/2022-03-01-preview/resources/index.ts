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
	readonly properties?: ChangeProperties | undefined;
}
export interface ChangeAttributes {
	readonly changesCount?: number | undefined;
	readonly correlationId?: string | undefined;
	readonly newResourceSnapshotId?: string | undefined;
	readonly previousResourceSnapshotId?: string | undefined;
	readonly timestamp?: string | undefined;
}
export interface ChangeBase {
	readonly changeCategory?: ("Create" | "System") | undefined;
	readonly newValue?: string | undefined;
	readonly previousValue?: string | undefined;
	readonly propertyChangeType?: ("Insert" | "Remove") | undefined;
}
export interface ChangeProperties {
	readonly changeAttributes?: ChangeAttributes | undefined;
	readonly changes?: ChangesDictionary | undefined;
	readonly changeType?: ("Create" | "Delete") | undefined;
	readonly targetResourceId?: string | undefined;
	readonly targetResourceType?: string | undefined;
}
export interface ChangesDictionary {
	readonly "[ key: string ]"?: ChangeBase | undefined;
}
export default {
	changes: changes,
};
