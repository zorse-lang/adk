import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ProjectsLocationsInstances
	extends GdmResource<ProjectsLocationsInstancesComponentInputs>
	implements ProjectsLocationsInstancesComponentOutputs
{
	constructor(entity: ADKEntity, options: ProjectsLocationsInstancesComponentInputs) {
		super(entity, options.name, "file.v1beta1.ProjectsLocationsInstances", options);
	}
	public readonly capacityStepSizeGb?: string;
	public readonly createTime?: string;
	public readonly maxCapacityGb?: string;
	public readonly maxShareCount?: string;
	public readonly satisfiesPzs?: boolean;
	public readonly state?: string;
	public readonly statusMessage?: string;
	public readonly suspensionReasons?: string[];
}
export interface ProjectsLocationsInstancesComponentOutputs {
	readonly capacityStepSizeGb?: string;
	readonly createTime?: string;
	readonly maxCapacityGb?: string;
	readonly maxShareCount?: string;
	readonly satisfiesPzs?: boolean;
	readonly state?: string;
	readonly statusMessage?: string;
	readonly suspensionReasons?: string[];
}
export interface ProjectsLocationsInstancesComponentInputs {
	readonly capacityGb?: string;
	readonly description?: string;
	readonly etag?: string;
	readonly fileShares?: FileShareConfig[];
	readonly instanceId: string;
	readonly kmsKeyName?: string;
	readonly labels?: { [P in string]: string };
	readonly multiShareEnabled?: boolean;
	readonly name: string;
	readonly networks?: NetworkConfig[];
	readonly parent: string;
	readonly tier?: string;
}
export interface FileShareConfig {
	readonly capacityGb?: string;
	readonly name?: string;
	readonly nfsExportOptions?: NfsExportOptions[];
	readonly sourceBackup?: string;
}
export interface Instance {
	readonly capacityGb?: string;
	readonly capacityStepSizeGb?: string;
	readonly createTime?: string;
	readonly description?: string;
	readonly etag?: string;
	readonly fileShares?: FileShareConfig[];
	readonly kmsKeyName?: string;
	readonly labels?: { [P in string]: string };
	readonly maxCapacityGb?: string;
	readonly maxShareCount?: string;
	readonly multiShareEnabled?: boolean;
	readonly name?: string;
	readonly networks?: NetworkConfig[];
	readonly satisfiesPzs?: boolean;
	readonly state?: string;
	readonly statusMessage?: string;
	readonly suspensionReasons?: string[];
	readonly tier?: string;
}
export interface NetworkConfig {
	readonly connectMode?: string;
	readonly ipAddresses?: string[];
	readonly modes?: string[];
	readonly network?: string;
	readonly reservedIpRange?: string;
}
export interface NfsExportOptions {
	readonly accessMode?: string;
	readonly anonGid?: string;
	readonly anonUid?: string;
	readonly ipRanges?: string[];
	readonly squashMode?: string;
}
export default {
	ProjectsLocationsInstances: ProjectsLocationsInstances,
};
