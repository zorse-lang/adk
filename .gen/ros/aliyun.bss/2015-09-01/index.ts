import { RosResource, Entity as ADKEntity } from "@zorse/adk";

export class ResourcePackage
	extends RosResource<ResourcePackageComponentInputs>
	implements ResourcePackageComponentOutputs
{
	constructor(entity: ADKEntity, options: ResourcePackageComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::BSS::ResourcePackage", options);
	}
	public readonly InstanceId: any;
	public readonly OrderId: any;
}
export interface ResourcePackageComponentOutputs {
	readonly InstanceId: any;
	readonly OrderId: any;
}
export interface ResourcePackageComponentInputs {
	readonly Duration: number;
	readonly PackageType: string;
	readonly ProductCode: string;
	readonly Specification: string;
	readonly EffectiveDate?: string | undefined;
	readonly PricingCycle?: string | undefined;
	readonly LogicalId: string;
}
export class WaitOrder extends RosResource<WaitOrderComponentInputs> implements WaitOrderComponentOutputs {
	constructor(entity: ADKEntity, options: WaitOrderComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::BSS::WaitOrder", options);
	}
}
export interface WaitOrderComponentOutputs {}
export interface WaitOrderComponentInputs {
	readonly OrderIds: any[];
	readonly CancelOnDelete?: boolean | undefined;
	readonly WaitForOrderProduced?: boolean | undefined;
	readonly LogicalId: string;
}
export default {
	ResourcePackage: ResourcePackage,
	WaitOrder: WaitOrder,
};
