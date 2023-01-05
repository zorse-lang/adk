import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class XpnHostList extends GdmResource<XpnHostListComponentInputs> implements XpnHostListComponentOutputs {
	constructor(entity: ADKEntity, options: XpnHostListComponentInputs) {
		super(entity, options.name, "compute.beta.XpnHostList", options);
	}
	public readonly id?: string;
	public readonly items?: Project[];
	public readonly kind?: string;
	public readonly nextPageToken?: string;
	public readonly selfLink?: string;
	public readonly warning?: { code?: string; data?: Array<{ key?: string; value?: string }>; message?: string };
}
export interface XpnHostListComponentOutputs {
	readonly id?: string;
	readonly items?: Project[];
	readonly kind?: string;
	readonly nextPageToken?: string;
	readonly selfLink?: string;
	readonly warning?: { code?: string; data?: Array<{ key?: string; value?: string }>; message?: string };
}
export interface XpnHostListComponentInputs {
	readonly name: string;
}
export interface Metadata {
	readonly fingerprint?: string;
	readonly items?: Array<{ key?: string; value?: string }>;
	readonly kind?: string;
}
export interface Project {
	readonly commonInstanceMetadata?: Metadata;
	readonly creationTimestamp?: string;
	readonly defaultNetworkTier?: string;
	readonly defaultServiceAccount?: string;
	readonly description?: string;
	readonly enabledFeatures?: string[];
	readonly id?: string;
	readonly kind?: string;
	readonly name?: string;
	readonly quotas?: Quota[];
	readonly selfLink?: string;
	readonly usageExportLocation?: UsageExportLocation;
	readonly vmDnsSetting?: string;
	readonly xpnProjectStatus?: string;
}
export interface Quota {
	readonly limit?: number;
	readonly metric?: string;
	readonly owner?: string;
	readonly usage?: number;
}
export interface UsageExportLocation {
	readonly bucketName?: string;
	readonly reportNamePrefix?: string;
}
export default {
	XpnHostList: XpnHostList,
};
