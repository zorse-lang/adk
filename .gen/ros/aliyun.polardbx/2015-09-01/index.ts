import { RosResource, Entity as ADKEntity } from "@zorse/adk";

export class DBInstance extends RosResource<DBInstanceComponentInputs> implements DBInstanceComponentOutputs {
	constructor(entity: ADKEntity, options: DBInstanceComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::PolarDBX::DBInstance", options);
	}
	public readonly OrderId: any;
	public readonly DbInstanceName: any;
}
export interface DBInstanceComponentOutputs {
	readonly OrderId: any;
	readonly DbInstanceName: any;
}
export interface DBInstanceComponentInputs {
	readonly DBNodeClass: string;
	readonly DBNodeCount: number;
	readonly EngineVersion: string;
	readonly PrimaryZone: string;
	readonly TopologyType: string;
	readonly VPCId: string;
	readonly VSwitchId: string;
	readonly AutoRenew?: boolean | undefined;
	readonly DBInstanceDescription?: string | undefined;
	readonly PayType?: string | undefined;
	readonly Period?: string | undefined;
	readonly ResourceGroupId?: string | undefined;
	readonly SecondaryZone?: string | undefined;
	readonly TertiaryZone?: string | undefined;
	readonly UsedTime?: number | undefined;
	readonly LogicalId: string;
}
export default {
	DBInstance: DBInstance,
};
