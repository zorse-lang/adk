import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class InstantSnapshots
	extends GdmResource<InstantSnapshotsComponentInputs>
	implements InstantSnapshotsComponentOutputs
{
	constructor(entity: ADKEntity, options: InstantSnapshotsComponentInputs) {
		super(entity, options.name, "compute.alpha.InstantSnapshots", options);
	}
	public readonly architecture?: string;
	public readonly creationTimestamp?: string;
	public readonly diskSizeGb?: string;
	public readonly id?: string;
	public readonly kind?: string;
	public readonly region?: string;
	public readonly resourceStatus?: InstantSnapshotResourceStatus;
	public readonly satisfiesPzs?: boolean;
	public readonly selfLink?: string;
	public readonly selfLinkWithId?: string;
	public readonly sourceDiskId?: string;
	public readonly status?: string;
	public readonly zone?: string;
}
export interface InstantSnapshotsComponentOutputs {
	readonly architecture?: string;
	readonly creationTimestamp?: string;
	readonly diskSizeGb?: string;
	readonly id?: string;
	readonly kind?: string;
	readonly region?: string;
	readonly resourceStatus?: InstantSnapshotResourceStatus;
	readonly satisfiesPzs?: boolean;
	readonly selfLink?: string;
	readonly selfLinkWithId?: string;
	readonly sourceDiskId?: string;
	readonly status?: string;
	readonly zone?: string;
}
export interface InstantSnapshotsComponentInputs {
	readonly description?: string;
	readonly guestFlush?: boolean;
	readonly labelFingerprint?: string;
	readonly labels?: { [P in string]: string };
	readonly name: string;
	readonly requestId?: string;
	readonly sourceDisk?: string;
}
export interface InstantSnapshot {
	readonly architecture?: string;
	readonly creationTimestamp?: string;
	readonly description?: string;
	readonly diskSizeGb?: string;
	readonly guestFlush?: boolean;
	readonly id?: string;
	readonly kind?: string;
	readonly labelFingerprint?: string;
	readonly labels?: { [P in string]: string };
	readonly name?: string;
	readonly region?: string;
	readonly resourceStatus?: InstantSnapshotResourceStatus;
	readonly satisfiesPzs?: boolean;
	readonly selfLink?: string;
	readonly selfLinkWithId?: string;
	readonly sourceDisk?: string;
	readonly sourceDiskId?: string;
	readonly status?: string;
	readonly zone?: string;
}
export interface InstantSnapshotResourceStatus {
	readonly storageSizeBytes?: string;
}
export default {
	InstantSnapshots: InstantSnapshots,
};
