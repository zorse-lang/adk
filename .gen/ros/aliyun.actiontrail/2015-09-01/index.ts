import { RosResource, Entity as ADKEntity } from "@zorse/adk";

export class Trail extends RosResource<TrailComponentInputs> implements TrailComponentOutputs {
	constructor(entity: ADKEntity, options: TrailComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::ACTIONTRAIL::Trail", options);
	}
}
export interface TrailComponentOutputs {}
export interface TrailComponentInputs {
	readonly Name: any | string;
	readonly OssBucketName: string;
	readonly RoleName: string;
	readonly EventRW?: (string | undefined) | undefined;
	readonly OssKeyPrefix?: (string | undefined) | undefined;
	readonly SlsProjectArn?: (string | undefined) | undefined;
	readonly SlsWriteRoleArn?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export class TrailLogging extends RosResource<TrailLoggingComponentInputs> implements TrailLoggingComponentOutputs {
	constructor(entity: ADKEntity, options: TrailLoggingComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::ACTIONTRAIL::TrailLogging", options);
	}
	public readonly StartLoggingTime: any;
	public readonly LatestDeliveryError: any;
	public readonly StopLoggingTime: any;
	public readonly IsLogging: any;
	public readonly LatestDeliveryTime: any;
}
export interface TrailLoggingComponentOutputs {
	readonly StartLoggingTime: any;
	readonly LatestDeliveryError: any;
	readonly StopLoggingTime: any;
	readonly IsLogging: any;
	readonly LatestDeliveryTime: any;
}
export interface TrailLoggingComponentInputs {
	readonly Enable: boolean;
	readonly Name: string;
	readonly LogicalId: string;
}
export default {
	Trail: Trail,
	TrailLogging: TrailLogging,
};
