import { RosResource, Entity as ADKEntity } from "@zorse/adk";

export class Desktops extends RosResource<DesktopsComponentInputs> implements DesktopsComponentOutputs {
	constructor(entity: ADKEntity, options: DesktopsComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::ECD::Desktops", options);
	}
	public readonly DesktopId: any;
	public readonly OrderId: any;
}
export interface DesktopsComponentOutputs {
	readonly DesktopId: any;
	readonly OrderId: any;
}
export interface DesktopsComponentInputs {
	readonly BundleId: string;
	readonly OfficeSiteId: string;
	readonly PolicyGroupId: string;
	readonly Amount?: (number | undefined) | undefined;
	readonly AutoPay?: (boolean | undefined) | undefined;
	readonly AutoRenew?: (boolean | undefined) | undefined;
	readonly ChargeType?: (string | undefined) | undefined;
	readonly DesktopName?: (string | undefined) | undefined;
	readonly DesktopNameSuffix?: (boolean | undefined) | undefined;
	readonly DirectoryId?: (string | undefined) | undefined;
	readonly EndUserId?: (any[] | undefined) | undefined;
	readonly GroupId?: (string | undefined) | undefined;
	readonly Hostname?: (string | undefined) | undefined;
	readonly Period?: (number | undefined) | undefined;
	readonly PeriodUnit?: (string | undefined) | undefined;
	readonly PromotionId?: (string | undefined) | undefined;
	readonly Tags?: (Tags[] | undefined) | undefined;
	readonly UserAssignMode?: (string | undefined) | undefined;
	readonly UserName?: (string | undefined) | undefined;
	readonly VolumeEncryptionEnabled?: (boolean | undefined) | undefined;
	readonly VolumeEncryptionKey?: (string | undefined) | undefined;
	readonly VpcId?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export interface Tags {
	readonly Value?: (string | undefined) | undefined;
	readonly Key: string;
}
export default {
	Desktops: Desktops,
};
