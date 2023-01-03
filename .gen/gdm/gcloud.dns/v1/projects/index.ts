import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class Projects extends GdmResource<ProjectsComponentInputs> implements ProjectsComponentOutputs {
	constructor(entity: ADKEntity, options: ProjectsComponentInputs) {
		super(entity, options.name, "dns.v1.Projects", options);
	}
	public readonly id?: string | undefined;
	public readonly number?: string | undefined;
	public readonly quota?: Quota | undefined;
}
export interface ProjectsComponentOutputs {
	readonly id?: string | undefined;
	readonly number?: string | undefined;
	readonly quota?: Quota | undefined;
}
export interface ProjectsComponentInputs {
	readonly kind?: string | undefined;
	readonly type: string;
	readonly name: string;
}
export interface DnsKeySpec {
	readonly algorithm?: string | undefined;
	readonly keyLength?: number | undefined;
	readonly keyType?: string | undefined;
	readonly kind?: string | undefined;
}
export interface Project {
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly number?: string | undefined;
	readonly quota?: Quota | undefined;
}
export interface Quota {
	readonly dnsKeysPerManagedZone?: number | undefined;
	readonly gkeClustersPerManagedZone?: number | undefined;
	readonly gkeClustersPerPolicy?: number | undefined;
	readonly gkeClustersPerResponsePolicy?: number | undefined;
	readonly itemsPerRoutingPolicy?: number | undefined;
	readonly kind?: string | undefined;
	readonly managedZones?: number | undefined;
	readonly managedZonesPerGkeCluster?: number | undefined;
	readonly managedZonesPerNetwork?: number | undefined;
	readonly networksPerManagedZone?: number | undefined;
	readonly networksPerPolicy?: number | undefined;
	readonly networksPerResponsePolicy?: number | undefined;
	readonly peeringZonesPerTargetNetwork?: number | undefined;
	readonly policies?: number | undefined;
	readonly resourceRecordsPerRrset?: number | undefined;
	readonly responsePolicies?: number | undefined;
	readonly responsePolicyRulesPerResponsePolicy?: number | undefined;
	readonly rrsetAdditionsPerChange?: number | undefined;
	readonly rrsetDeletionsPerChange?: number | undefined;
	readonly rrsetsPerManagedZone?: number | undefined;
	readonly targetNameServersPerManagedZone?: number | undefined;
	readonly targetNameServersPerPolicy?: number | undefined;
	readonly totalRrdataSizePerChange?: number | undefined;
	readonly whitelistedKeySpecs?: DnsKeySpec[] | undefined;
}
export default {
	Projects: Projects,
};
