import { RosResource, Entity as ADKEntity } from "@zorse/adk";

export class Host extends RosResource<HostComponentInputs> implements HostComponentOutputs {
	constructor(entity: ADKEntity, options: HostComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::BastionHost::Host", options);
	}
	public readonly HostId: any;
}
export interface HostComponentOutputs {
	readonly HostId: any;
}
export interface HostComponentInputs {
	readonly ActiveAddressType: string;
	readonly HostName: string;
	readonly InstanceId: string;
	readonly OSType: string;
	readonly Source: string;
	readonly Comment?: (string | undefined) | undefined;
	readonly HostPrivateAddress?: (string | undefined) | undefined;
	readonly HostPublicAddress?: (string | undefined) | undefined;
	readonly InstanceRegionId?: (string | undefined) | undefined;
	readonly SourceInstanceId?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export default {
	Host: Host,
};
