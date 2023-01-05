import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class Projects extends GdmResource<ProjectsComponentInputs> implements ProjectsComponentOutputs {
	constructor(entity: ADKEntity, options: ProjectsComponentInputs) {
		super(entity, options.name, "compute.alpha.Projects", options);
	}
	public readonly creationTimestamp?: string;
	public readonly defaultServiceAccount?: string;
	public readonly id?: string;
	public readonly kind?: string;
	public readonly quotas?: Quota[];
	public readonly selfLink?: string;
	public readonly vmDnsSetting?: string;
	public readonly xpnProjectStatus?: string;
}
export interface ProjectsComponentOutputs {
	readonly creationTimestamp?: string;
	readonly defaultServiceAccount?: string;
	readonly id?: string;
	readonly kind?: string;
	readonly quotas?: Quota[];
	readonly selfLink?: string;
	readonly vmDnsSetting?: string;
	readonly xpnProjectStatus?: string;
}
export interface ProjectsComponentInputs {
	readonly commonInstanceMetadata?: Metadata;
	readonly defaultNetworkTier?: string;
	readonly description?: string;
	readonly enabledFeatures?: string[];
	readonly name: string;
	readonly usageExportLocation?: UsageExportLocation;
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
	Projects: Projects,
};
