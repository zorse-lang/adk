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
	readonly Amount?: number | undefined;
	readonly AutoPay?: boolean | undefined;
	readonly AutoRenew?: boolean | undefined;
	readonly ChargeType?: string | undefined;
	readonly DesktopName?: string | undefined;
	readonly DesktopNameSuffix?: boolean | undefined;
	readonly DirectoryId?: string | undefined;
	readonly EndUserId?: any[] | undefined;
	readonly GroupId?: string | undefined;
	readonly Hostname?: string | undefined;
	readonly Period?: number | undefined;
	readonly PeriodUnit?: string | undefined;
	readonly PromotionId?: string | undefined;
	readonly Tags?: Tags[] | undefined;
	readonly UserAssignMode?: string | undefined;
	readonly UserName?: string | undefined;
	readonly VolumeEncryptionEnabled?: boolean | undefined;
	readonly VolumeEncryptionKey?: string | undefined;
	readonly VpcId?: string | undefined;
	readonly LogicalId: string;
}
export interface Tags {
	readonly Value?: string | undefined;
	readonly Key: string;
}
export default {
	Desktops: Desktops,
};
