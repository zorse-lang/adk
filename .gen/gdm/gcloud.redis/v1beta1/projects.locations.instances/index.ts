import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ProjectsLocationsInstances
	extends GdmResource<ProjectsLocationsInstancesComponentInputs>
	implements ProjectsLocationsInstancesComponentOutputs
{
	constructor(entity: ADKEntity, options: ProjectsLocationsInstancesComponentInputs) {
		super(entity, options.name, "redis.v1beta1.ProjectsLocationsInstances", options);
	}
	public readonly createTime?: string;
	public readonly currentLocationId?: string;
	public readonly host?: string;
	public readonly maintenanceSchedule?: MaintenanceSchedule;
	public readonly nodes?: NodeInfo[];
	public readonly persistenceIamIdentity?: string;
	public readonly port?: number;
	public readonly readEndpoint?: string;
	public readonly readEndpointPort?: number;
	public readonly serverCaCerts?: TlsCertificate[];
	public readonly state?: string;
	public readonly statusMessage?: string;
}
export interface ProjectsLocationsInstancesComponentOutputs {
	readonly createTime?: string;
	readonly currentLocationId?: string;
	readonly host?: string;
	readonly maintenanceSchedule?: MaintenanceSchedule;
	readonly nodes?: NodeInfo[];
	readonly persistenceIamIdentity?: string;
	readonly port?: number;
	readonly readEndpoint?: string;
	readonly readEndpointPort?: number;
	readonly serverCaCerts?: TlsCertificate[];
	readonly state?: string;
	readonly statusMessage?: string;
}
export interface ProjectsLocationsInstancesComponentInputs {
	readonly alternativeLocationId?: string;
	readonly authEnabled?: boolean;
	readonly authorizedNetwork?: string;
	readonly availableMaintenanceVersions?: string[];
	readonly connectMode?: string;
	readonly customerManagedKey?: string;
	readonly displayName?: string;
	readonly instanceId: string;
	readonly labels?: { [P in string]: string };
	readonly locationId?: string;
	readonly maintenancePolicy?: MaintenancePolicy;
	readonly maintenanceVersion?: string;
	readonly memorySizeGb: number;
	readonly name: string;
	readonly parent: string;
	readonly persistenceConfig?: PersistenceConfig;
	readonly readReplicasMode?: string;
	readonly redisConfigs?: { [P in string]: string };
	readonly redisVersion?: string;
	readonly replicaCount?: number;
	readonly reservedIpRange?: string;
	readonly secondaryIpRange?: string;
	readonly suspensionReasons?: string[];
	readonly tier: string;
	readonly transitEncryptionMode?: string;
}
export interface Instance {
	readonly alternativeLocationId?: string;
	readonly authEnabled?: boolean;
	readonly authorizedNetwork?: string;
	readonly availableMaintenanceVersions?: string[];
	readonly connectMode?: string;
	readonly createTime?: string;
	readonly currentLocationId?: string;
	readonly customerManagedKey?: string;
	readonly displayName?: string;
	readonly host?: string;
	readonly labels?: { [P in string]: string };
	readonly locationId?: string;
	readonly maintenancePolicy?: MaintenancePolicy;
	readonly maintenanceSchedule?: MaintenanceSchedule;
	readonly maintenanceVersion?: string;
	readonly memorySizeGb: number;
	readonly name: string;
	readonly nodes?: NodeInfo[];
	readonly persistenceConfig?: PersistenceConfig;
	readonly persistenceIamIdentity?: string;
	readonly port?: number;
	readonly readEndpoint?: string;
	readonly readEndpointPort?: number;
	readonly readReplicasMode?: string;
	readonly redisConfigs?: { [P in string]: string };
	readonly redisVersion?: string;
	readonly replicaCount?: number;
	readonly reservedIpRange?: string;
	readonly secondaryIpRange?: string;
	readonly serverCaCerts?: TlsCertificate[];
	readonly state?: string;
	readonly statusMessage?: string;
	readonly suspensionReasons?: string[];
	readonly tier: string;
	readonly transitEncryptionMode?: string;
}
export interface MaintenancePolicy {
	readonly createTime?: string;
	readonly description?: string;
	readonly updateTime?: string;
	readonly weeklyMaintenanceWindow?: WeeklyMaintenanceWindow[];
}
export interface MaintenanceSchedule {
	readonly canReschedule?: boolean;
	readonly endTime?: string;
	readonly scheduleDeadlineTime?: string;
	readonly startTime?: string;
}
export interface NodeInfo {
	readonly id?: string;
	readonly zone?: string;
}
export interface PersistenceConfig {
	readonly persistenceMode?: string;
	readonly rdbNextSnapshotTime?: string;
	readonly rdbSnapshotPeriod?: string;
	readonly rdbSnapshotStartTime?: string;
}
export interface TimeOfDay {
	readonly hours?: number;
	readonly minutes?: number;
	readonly nanos?: number;
	readonly seconds?: number;
}
export interface TlsCertificate {
	readonly cert?: string;
	readonly createTime?: string;
	readonly expireTime?: string;
	readonly serialNumber?: string;
	readonly sha1Fingerprint?: string;
}
export interface WeeklyMaintenanceWindow {
	readonly day: string;
	readonly duration?: string;
	readonly startTime: TimeOfDay;
}
export default {
	ProjectsLocationsInstances: ProjectsLocationsInstances,
};
