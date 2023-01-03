import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ProjectsLocationsInstances
	extends GdmResource<ProjectsLocationsInstancesComponentInputs>
	implements ProjectsLocationsInstancesComponentOutputs
{
	constructor(entity: ADKEntity, options: ProjectsLocationsInstancesComponentInputs) {
		super(entity, options.name, "file.v1beta1.ProjectsLocationsInstances", options);
	}
	public readonly capacityStepSizeGb?: string | undefined;
	public readonly createTime?: string | undefined;
	public readonly maxCapacityGb?: string | undefined;
	public readonly maxShareCount?: string | undefined;
	public readonly satisfiesPzs?: boolean | undefined;
	public readonly state?: string | undefined;
	public readonly statusMessage?: string | undefined;
	public readonly suspensionReasons?: string[] | undefined;
}
export interface ProjectsLocationsInstancesComponentOutputs {
	readonly capacityStepSizeGb?: string | undefined;
	readonly createTime?: string | undefined;
	readonly maxCapacityGb?: string | undefined;
	readonly maxShareCount?: string | undefined;
	readonly satisfiesPzs?: boolean | undefined;
	readonly state?: string | undefined;
	readonly statusMessage?: string | undefined;
	readonly suspensionReasons?: string[] | undefined;
}
export interface ProjectsLocationsInstancesComponentInputs {
	readonly capacityGb?: string | undefined;
	readonly description?: string | undefined;
	readonly etag?: string | undefined;
	readonly fileShares?: FileShareConfig[] | undefined;
	readonly instanceId: string;
	readonly kmsKeyName?: string | undefined;
	readonly labels?: { [P in string]: string } | undefined;
	readonly multiShareEnabled?: boolean | undefined;
	readonly name: string;
	readonly networks?: NetworkConfig[] | undefined;
	readonly parent: string;
	readonly tier?: string | undefined;
	readonly type: string;
}
export interface FileShareConfig {
	readonly capacityGb?: string | undefined;
	readonly name?: string | undefined;
	readonly nfsExportOptions?: NfsExportOptions[] | undefined;
	readonly sourceBackup?: string | undefined;
}
export interface Instance {
	readonly capacityGb?: string | undefined;
	readonly capacityStepSizeGb?: string | undefined;
	readonly createTime?: string | undefined;
	readonly description?: string | undefined;
	readonly etag?: string | undefined;
	readonly fileShares?: FileShareConfig[] | undefined;
	readonly kmsKeyName?: string | undefined;
	readonly labels?: { [P in string]: string } | undefined;
	readonly maxCapacityGb?: string | undefined;
	readonly maxShareCount?: string | undefined;
	readonly multiShareEnabled?: boolean | undefined;
	readonly name?: string | undefined;
	readonly networks?: NetworkConfig[] | undefined;
	readonly satisfiesPzs?: boolean | undefined;
	readonly state?: string | undefined;
	readonly statusMessage?: string | undefined;
	readonly suspensionReasons?: string[] | undefined;
	readonly tier?: string | undefined;
}
export interface NetworkConfig {
	readonly connectMode?: string | undefined;
	readonly ipAddresses?: string[] | undefined;
	readonly modes?: string[] | undefined;
	readonly network?: string | undefined;
	readonly reservedIpRange?: string | undefined;
}
export interface NfsExportOptions {
	readonly accessMode?: string | undefined;
	readonly anonGid?: string | undefined;
	readonly anonUid?: string | undefined;
	readonly ipRanges?: string[] | undefined;
	readonly squashMode?: string | undefined;
}
export default {
	ProjectsLocationsInstances: ProjectsLocationsInstances,
};
