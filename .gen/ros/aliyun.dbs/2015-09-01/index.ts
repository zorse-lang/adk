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
	readonly BackupGatewayId?: number | undefined;
	readonly BackupSetId?: string | undefined;
	readonly DestinationEndpointDatabaseName?: string | undefined;
	readonly DestinationEndpointInstanceID?: string | undefined;
	readonly DestinationEndpointIP?: string | undefined;
	readonly DestinationEndpointOracleSID?: string | undefined;
	readonly DestinationEndpointPassword?: string | undefined;
	readonly DestinationEndpointPort?: number | undefined;
	readonly DestinationEndpointRegion?: string | undefined;
	readonly DestinationEndpointUserName?: string | undefined;
	readonly DuplicateConflict?: string | undefined;
	readonly RestoreDir?: string | undefined;
	readonly RestoreHome?: string | undefined;
	readonly RestoreObjects?: string | undefined;
	readonly RestoreTime?: number | undefined;
	readonly StartTask?: boolean | undefined;
	readonly LogicalId: string;
}
export default {
	RestoreTask: RestoreTask,
};
