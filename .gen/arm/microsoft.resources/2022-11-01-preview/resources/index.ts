import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class snapshots extends ArmResource<snapshotsComponentInputs> implements snapshotsComponentOutputs {
	constructor(entity: ADKEntity, options: snapshotsComponentInputs) {
		super(entity, options.name, "Microsoft.Resources/snapshots", "2022-11-01-preview", options);
	}
	public readonly apiVersion: "2022-11-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Resources/snapshots";
}
export interface snapshotsComponentOutputs {
	readonly apiVersion: "2022-11-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Resources/snapshots";
}
export interface snapshotsComponentInputs {
	readonly name: string;
	readonly properties?: SnapshotProperties | undefined;
}
export interface SnapshotProperties {
	readonly apiVersion?: string | undefined;
	readonly content?: SnapshotPropertiesContent | undefined;
}
export interface SnapshotPropertiesContent {
	readonly "[ key: string ]"?: any | undefined;
}
export default {
	snapshots: snapshots,
};
