import { RosResource, Entity as ADKEntity } from "@zorse/adk";

export class DiskReplicaPairAddition
	extends RosResource<DiskReplicaPairAdditionComponentInputs>
	implements DiskReplicaPairAdditionComponentOutputs
{
	constructor(entity: ADKEntity, options: DiskReplicaPairAdditionComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::EBS::DiskReplicaPairAddition", options);
	}
}
export interface DiskReplicaPairAdditionComponentOutputs {}
export interface DiskReplicaPairAdditionComponentInputs {
	readonly ReplicaGroupId: any | string;
	readonly ReplicaPairId: any | string;
	readonly LogicalId: string;
}
export default {
	DiskReplicaPairAddition: DiskReplicaPairAddition,
};
