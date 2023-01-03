import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class ProfilingGroup extends CfnResource<ProfilingGroupComponentInputs> implements ProfilingGroupComponentOutputs {
	constructor(entity: ADKEntity, options: ProfilingGroupComponentInputs) {
		super(entity, options.LogicalId, "AWS::CodeGuruProfiler::ProfilingGroup", options);
	}
	public readonly Arn: string;
}
export interface ProfilingGroupComponentOutputs {
	readonly Arn: string;
}
export interface ProfilingGroupComponentInputs {
	readonly ProfilingGroupName: string;
	readonly AgentPermissions?: (AgentPermissions | undefined) | undefined;
	readonly AnomalyDetectionNotificationConfiguration?: (Channel[] | undefined) | undefined;
	readonly ComputePlatform?: (string | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly LogicalId: string;
}
export interface AgentPermissions {
	readonly Principals: string[];
}
export interface Channel {
	readonly channelId?: (string | undefined) | undefined;
	readonly channelUri: string;
}
export default {
	ProfilingGroup: ProfilingGroup,
};
