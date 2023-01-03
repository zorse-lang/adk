import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class XpnHostList extends GdmResource<XpnHostListComponentInputs> implements XpnHostListComponentOutputs {
	constructor(entity: ADKEntity, options: XpnHostListComponentInputs) {
		super(entity, options.name, "compute.alpha.XpnHostList", options);
	}
	public readonly id?: string | undefined;
	public readonly items?: Project[] | undefined;
	public readonly kind?: string | undefined;
	public readonly nextPageToken?: string | undefined;
	public readonly selfLink?: string | undefined;
	public readonly warning?:
		| { code?: string; data?: Array<{ key?: string; value?: string }>; message?: string }
		| undefined;
}
export interface XpnHostListComponentOutputs {
	readonly id?: string | undefined;
	readonly items?: Project[] | undefined;
	readonly kind?: string | undefined;
	readonly nextPageToken?: string | undefined;
	readonly selfLink?: string | undefined;
	readonly warning?: { code?: string; data?: Array<{ key?: string; value?: string }>; message?: string } | undefined;
}
export interface XpnHostListComponentInputs {
	readonly type: string;
	readonly name: string;
}
export interface Metadata {
	readonly fingerprint?: string | undefined;
	readonly items?: Array<{ key?: string; value?: string }> | undefined;
	readonly kind?: string | undefined;
}
export interface Project {
	readonly commonInstanceMetadata?: Metadata | undefined;
	readonly creationTimestamp?: string | undefined;
	readonly defaultNetworkTier?: string | undefined;
	readonly defaultServiceAccount?: string | undefined;
	readonly description?: string | undefined;
	readonly enabledFeatures?: string[] | undefined;
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly name?: string | undefined;
	readonly quotas?: Quota[] | undefined;
	readonly selfLink?: string | undefined;
	readonly usageExportLocation?: UsageExportLocation | undefined;
	readonly vmDnsSetting?: string | undefined;
	readonly xpnProjectStatus?: string | undefined;
}
export interface Quota {
	readonly limit?: number | undefined;
	readonly metric?: string | undefined;
	readonly owner?: string | undefined;
	readonly usage?: number | undefined;
}
export interface UsageExportLocation {
	readonly bucketName?: string | undefined;
	readonly reportNamePrefix?: string | undefined;
}
export default {
	XpnHostList: XpnHostList,
};
