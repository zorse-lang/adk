import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class InstantSnapshots
	extends GdmResource<InstantSnapshotsComponentInputs>
	implements InstantSnapshotsComponentOutputs
{
	constructor(entity: ADKEntity, options: InstantSnapshotsComponentInputs) {
		super(entity, options.name, "compute.alpha.InstantSnapshots", options);
	}
	public readonly architecture?: string | undefined;
	public readonly creationTimestamp?: string | undefined;
	public readonly diskSizeGb?: string | undefined;
	public readonly id?: string | undefined;
	public readonly kind?: string | undefined;
	public readonly region?: string | undefined;
	public readonly resourceStatus?: InstantSnapshotResourceStatus | undefined;
	public readonly satisfiesPzs?: boolean | undefined;
	public readonly selfLink?: string | undefined;
	public readonly selfLinkWithId?: string | undefined;
	public readonly sourceDiskId?: string | undefined;
	public readonly status?: string | undefined;
	public readonly zone?: string | undefined;
}
export interface InstantSnapshotsComponentOutputs {
	readonly architecture?: string | undefined;
	readonly creationTimestamp?: string | undefined;
	readonly diskSizeGb?: string | undefined;
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly region?: string | undefined;
	readonly resourceStatus?: InstantSnapshotResourceStatus | undefined;
	readonly satisfiesPzs?: boolean | undefined;
	readonly selfLink?: string | undefined;
	readonly selfLinkWithId?: string | undefined;
	readonly sourceDiskId?: string | undefined;
	readonly status?: string | undefined;
	readonly zone?: string | undefined;
}
export interface InstantSnapshotsComponentInputs {
	readonly description?: string | undefined;
	readonly guestFlush?: boolean | undefined;
	readonly labelFingerprint?: string | undefined;
	readonly labels?: { [P in string]: string } | undefined;
	readonly name: string;
	readonly requestId?: string | undefined;
	readonly sourceDisk?: string | undefined;
	readonly type: string;
}
export interface InstantSnapshot {
	readonly architecture?: string | undefined;
	readonly creationTimestamp?: string | undefined;
	readonly description?: string | undefined;
	readonly diskSizeGb?: string | undefined;
	readonly guestFlush?: boolean | undefined;
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly labelFingerprint?: string | undefined;
	readonly labels?: { [P in string]: string } | undefined;
	readonly name?: string | undefined;
	readonly region?: string | undefined;
	readonly resourceStatus?: InstantSnapshotResourceStatus | undefined;
	readonly satisfiesPzs?: boolean | undefined;
	readonly selfLink?: string | undefined;
	readonly selfLinkWithId?: string | undefined;
	readonly sourceDisk?: string | undefined;
	readonly sourceDiskId?: string | undefined;
	readonly status?: string | undefined;
	readonly zone?: string | undefined;
}
export interface InstantSnapshotResourceStatus {
	readonly storageSizeBytes?: string | undefined;
}
export default {
	InstantSnapshots: InstantSnapshots,
};
