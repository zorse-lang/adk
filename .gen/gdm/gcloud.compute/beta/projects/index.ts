import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class Projects extends GdmResource<ProjectsComponentInputs> implements ProjectsComponentOutputs {
	constructor(entity: ADKEntity, options: ProjectsComponentInputs) {
		super(entity, options.name, "compute.beta.Projects", options);
	}
	public readonly creationTimestamp?: string | undefined;
	public readonly defaultServiceAccount?: string | undefined;
	public readonly id?: string | undefined;
	public readonly kind?: string | undefined;
	public readonly quotas?: Quota[] | undefined;
	public readonly selfLink?: string | undefined;
	public readonly vmDnsSetting?: string | undefined;
	public readonly xpnProjectStatus?: string | undefined;
}
export interface ProjectsComponentOutputs {
	readonly creationTimestamp?: string | undefined;
	readonly defaultServiceAccount?: string | undefined;
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly quotas?: Quota[] | undefined;
	readonly selfLink?: string | undefined;
	readonly vmDnsSetting?: string | undefined;
	readonly xpnProjectStatus?: string | undefined;
}
export interface ProjectsComponentInputs {
	readonly commonInstanceMetadata?: Metadata | undefined;
	readonly defaultNetworkTier?: string | undefined;
	readonly description?: string | undefined;
	readonly enabledFeatures?: string[] | undefined;
	readonly name: string;
	readonly usageExportLocation?: UsageExportLocation | undefined;
	readonly type: string;
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
	Projects: Projects,
};
