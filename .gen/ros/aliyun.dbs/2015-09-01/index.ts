import { RosResource, Entity as ADKEntity } from "@zorse/adk";

export class RestoreTask extends RosResource<RestoreTaskComponentInputs> implements RestoreTaskComponentOutputs {
	constructor(entity: ADKEntity, options: RestoreTaskComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::DBS::RestoreTask", options);
	}
	public readonly RestoreTaskId: any;
}
export interface RestoreTaskComponentOutputs {
	readonly RestoreTaskId: any;
}
export interface RestoreTaskComponentInputs {
	readonly BackupPlanId: string;
	readonly DestinationEndpointInstanceType: string;
	readonly RestoreTaskName: string;
	readonly BackupGatewayId?: (number | undefined) | undefined;
	readonly BackupSetId?: (string | undefined) | undefined;
	readonly DestinationEndpointDatabaseName?: (string | undefined) | undefined;
	readonly DestinationEndpointInstanceID?: (string | undefined) | undefined;
	readonly DestinationEndpointIP?: (string | undefined) | undefined;
	readonly DestinationEndpointOracleSID?: (string | undefined) | undefined;
	readonly DestinationEndpointPassword?: (string | undefined) | undefined;
	readonly DestinationEndpointPort?: (number | undefined) | undefined;
	readonly DestinationEndpointRegion?: (string | undefined) | undefined;
	readonly DestinationEndpointUserName?: (string | undefined) | undefined;
	readonly DuplicateConflict?: (string | undefined) | undefined;
	readonly RestoreDir?: (string | undefined) | undefined;
	readonly RestoreHome?: (string | undefined) | undefined;
	readonly RestoreObjects?: (string | undefined) | undefined;
	readonly RestoreTime?: (number | undefined) | undefined;
	readonly StartTask?: (boolean | undefined) | undefined;
	readonly LogicalId: string;
}
export default {
	RestoreTask: RestoreTask,
};
