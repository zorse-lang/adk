import { RosResource, Entity as ADKEntity } from "@zorse/adk";

export class Flow extends RosResource<FlowComponentInputs> implements FlowComponentOutputs {
	constructor(entity: ADKEntity, options: FlowComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::FNF::Flow", options);
	}
	public readonly CreatedTime: any;
	public readonly LastModifiedTime: any;
	public readonly Id: any;
}
export interface FlowComponentOutputs {
	readonly CreatedTime: any;
	readonly LastModifiedTime: any;
	readonly Id: any;
}
export interface FlowComponentInputs {
	readonly Definition: string;
	readonly Name: any | string;
	readonly Description?: string | undefined;
	readonly RequestId?: string | undefined;
	readonly RoleArn?: string | undefined;
	readonly LogicalId: string;
}
export class Schedule extends RosResource<ScheduleComponentInputs> implements ScheduleComponentOutputs {
	constructor(entity: ADKEntity, options: ScheduleComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::FNF::Schedule", options);
	}
	public readonly ScheduleId: any;
}
export interface ScheduleComponentOutputs {
	readonly ScheduleId: any;
}
export interface ScheduleComponentInputs {
	readonly CronExpression: string;
	readonly FlowName: any | string;
	readonly ScheduleName: any | string;
	readonly Description?: string | undefined;
	readonly Enable?: boolean | undefined;
	readonly Payload?: string | undefined;
	readonly LogicalId: string;
}
export default {
	Flow: Flow,
	Schedule: Schedule,
};
