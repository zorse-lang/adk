import { RosResource, Entity as ADKEntity } from "@zorse/adk";

export class AlertContact extends RosResource<AlertContactComponentInputs> implements AlertContactComponentOutputs {
	constructor(entity: ADKEntity, options: AlertContactComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::ARMS::AlertContact", options);
	}
	public readonly ContactId: any;
}
export interface AlertContactComponentOutputs {
	readonly ContactId: any;
}
export interface AlertContactComponentInputs {
	readonly ContactName: string;
	readonly DingRobotWebhookUrl?: (string | undefined) | undefined;
	readonly Email?: (string | undefined) | undefined;
	readonly PhoneNum?: (string | undefined) | undefined;
	readonly ProxyUserId?: (string | undefined) | undefined;
	readonly RegionId?: (string | undefined) | undefined;
	readonly SystemNoc?: (boolean | undefined) | undefined;
	readonly LogicalId: string;
}
export class AlertContactGroup
	extends RosResource<AlertContactGroupComponentInputs>
	implements AlertContactGroupComponentOutputs
{
	constructor(entity: ADKEntity, options: AlertContactGroupComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::ARMS::AlertContactGroup", options);
	}
	public readonly ContactGroupId: any;
}
export interface AlertContactGroupComponentOutputs {
	readonly ContactGroupId: any;
}
export interface AlertContactGroupComponentInputs {
	readonly ContactGroupName: string;
	readonly ContactIds: number[];
	readonly ProxyUserId?: (string | undefined) | undefined;
	readonly RegionId?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export class RetcodeApp extends RosResource<RetcodeAppComponentInputs> implements RetcodeAppComponentOutputs {
	constructor(entity: ADKEntity, options: RetcodeAppComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::ARMS::RetcodeApp", options);
	}
	public readonly AppId: any;
	public readonly Pid: any;
}
export interface RetcodeAppComponentOutputs {
	readonly AppId: any;
	readonly Pid: any;
}
export interface RetcodeAppComponentInputs {
	readonly RegionId: string;
	readonly RetcodeAppName: string;
	readonly RetcodeAppType: string;
	readonly LogicalId: string;
}
export default {
	AlertContact: AlertContact,
	AlertContactGroup: AlertContactGroup,
	RetcodeApp: RetcodeApp,
};
