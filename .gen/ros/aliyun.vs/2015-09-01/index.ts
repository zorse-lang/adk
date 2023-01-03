import { RosResource, Entity as ADKEntity } from "@zorse/adk";

export class Group extends RosResource<GroupComponentInputs> implements GroupComponentOutputs {
	constructor(entity: ADKEntity, options: GroupComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::VS::Group", options);
	}
	public readonly GbIp: any;
	public readonly GbId: any;
	public readonly Id: any;
	public readonly GbPort: any;
}
export interface GroupComponentOutputs {
	readonly GbIp: any;
	readonly GbId: any;
	readonly Id: any;
	readonly GbPort: any;
}
export interface GroupComponentInputs {
	readonly InProtocol: string;
	readonly Name: string;
	readonly OutProtocol: string;
	readonly PlayDomain: string;
	readonly PushDomain: string;
	readonly Region: string;
	readonly App?: (string | undefined) | undefined;
	readonly Callback?: (string | undefined) | undefined;
	readonly Description?: (string | undefined) | undefined;
	readonly Enabled?: (boolean | undefined) | undefined;
	readonly LazyPull?: (boolean | undefined) | undefined;
	readonly LogicalId: string;
}
export default {
	Group: Group,
};
