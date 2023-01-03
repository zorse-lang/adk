import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ProjectsLocationsInstances
	extends GdmResource<ProjectsLocationsInstancesComponentInputs>
	implements ProjectsLocationsInstancesComponentOutputs
{
	constructor(entity: ADKEntity, options: ProjectsLocationsInstancesComponentInputs) {
		super(entity, options.name, "redis.v1.ProjectsLocationsInstances", options);
	}
	public readonly createTime?: string | undefined;
	public readonly currentLocationId?: string | undefined;
	public readonly host?: string | undefined;
	public readonly maintenanceSchedule?: MaintenanceSchedule | undefined;
	public readonly nodes?: NodeInfo[] | undefined;
	public readonly persistenceIamIdentity?: string | undefined;
	public readonly port?: number | undefined;
	public readonly readEndpoint?: string | undefined;
	public readonly readEndpointPort?: number | undefined;
	public readonly serverCaCerts?: TlsCertificate[] | undefined;
	public readonly state?: string | undefined;
	public readonly statusMessage?: string | undefined;
}
export interface ProjectsLocationsInstancesComponentOutputs {
	readonly createTime?: string | undefined;
	readonly currentLocationId?: string | undefined;
	readonly host?: string | undefined;
	readonly maintenanceSchedule?: MaintenanceSchedule | undefined;
	readonly nodes?: NodeInfo[] | undefined;
	readonly persistenceIamIdentity?: string | undefined;
	readonly port?: number | undefined;
	readonly readEndpoint?: string | undefined;
	readonly readEndpointPort?: number | undefined;
	readonly serverCaCerts?: TlsCertificate[] | undefined;
	readonly state?: string | undefined;
	readonly statusMessage?: string | undefined;
}
export interface ProjectsLocationsInstancesComponentInputs {
	readonly alternativeLocationId?: string | undefined;
	readonly authEnabled?: boolean | undefined;
	readonly authorizedNetwork?: string | undefined;
	readonly connectMode?: string | undefined;
	readonly customerManagedKey?: string | undefined;
	readonly displayName?: string | undefined;
	readonly instanceId: string;
	readonly labels?: { [P in string]: string } | undefined;
	readonly locationId?: string | undefined;
	readonly maintenancePolicy?: MaintenancePolicy | undefined;
	readonly memorySizeGb: number;
	readonly name: string;
	readonly parent: string;
	readonly persistenceConfig?: PersistenceConfig | undefined;
	readonly readReplicasMode?: string | undefined;
	readonly redisConfigs?: { [P in string]: string } | undefined;
	readonly redisVersion?: string | undefined;
	readonly replicaCount?: number | undefined;
	readonly reservedIpRange?: string | undefined;
	readonly secondaryIpRange?: string | undefined;
	readonly suspensionReasons?: string[] | undefined;
	readonly tier: string;
	readonly transitEncryptionMode?: string | undefined;
	readonly type: string;
}
export interface Instance {
	readonly alternativeLocationId?: string | undefined;
	readonly authEnabled?: boolean | undefined;
	readonly authorizedNetwork?: string | undefined;
	readonly connectMode?: string | undefined;
	readonly createTime?: string | undefined;
	readonly currentLocationId?: string | undefined;
	readonly customerManagedKey?: string | undefined;
	readonly displayName?: string | undefined;
	readonly host?: string | undefined;
	readonly labels?: { [P in string]: string } | undefined;
	readonly locationId?: string | undefined;
	readonly maintenancePolicy?: MaintenancePolicy | undefined;
	readonly maintenanceSchedule?: MaintenanceSchedule | undefined;
	readonly memorySizeGb: number;
	readonly name: string;
	readonly nodes?: NodeInfo[] | undefined;
	readonly persistenceConfig?: PersistenceConfig | undefined;
	readonly persistenceIamIdentity?: string | undefined;
	readonly port?: number | undefined;
	readonly readEndpoint?: string | undefined;
	readonly readEndpointPort?: number | undefined;
	readonly readReplicasMode?: string | undefined;
	readonly redisConfigs?: { [P in string]: string } | undefined;
	readonly redisVersion?: string | undefined;
	readonly replicaCount?: number | undefined;
	readonly reservedIpRange?: string | undefined;
	readonly secondaryIpRange?: string | undefined;
	readonly serverCaCerts?: TlsCertificate[] | undefined;
	readonly state?: string | undefined;
	readonly statusMessage?: string | undefined;
	readonly suspensionReasons?: string[] | undefined;
	readonly tier: string;
	readonly transitEncryptionMode?: string | undefined;
}
export interface MaintenancePolicy {
	readonly createTime?: string | undefined;
	readonly description?: string | undefined;
	readonly updateTime?: string | undefined;
	readonly weeklyMaintenanceWindow?: WeeklyMaintenanceWindow[] | undefined;
}
export interface MaintenanceSchedule {
	readonly canReschedule?: boolean | undefined;
	readonly endTime?: string | undefined;
	readonly scheduleDeadlineTime?: string | undefined;
	readonly startTime?: string | undefined;
}
export interface NodeInfo {
	readonly id?: string | undefined;
	readonly zone?: string | undefined;
}
export interface PersistenceConfig {
	readonly persistenceMode?: string | undefined;
	readonly rdbNextSnapshotTime?: string | undefined;
	readonly rdbSnapshotPeriod?: string | undefined;
	readonly rdbSnapshotStartTime?: string | undefined;
}
export interface TimeOfDay {
	readonly hours?: number | undefined;
	readonly minutes?: number | undefined;
	readonly nanos?: number | undefined;
	readonly seconds?: number | undefined;
}
export interface TlsCertificate {
	readonly cert?: string | undefined;
	readonly createTime?: string | undefined;
	readonly expireTime?: string | undefined;
	readonly serialNumber?: string | undefined;
	readonly sha1Fingerprint?: string | undefined;
}
export interface WeeklyMaintenanceWindow {
	readonly day: string;
	readonly duration?: string | undefined;
	readonly startTime: TimeOfDay;
}
export default {
	ProjectsLocationsInstances: ProjectsLocationsInstances,
};
