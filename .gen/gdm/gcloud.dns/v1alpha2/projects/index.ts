import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class Projects extends GdmResource<ProjectsComponentInputs> implements ProjectsComponentOutputs {
	constructor(entity: ADKEntity, options: ProjectsComponentInputs) {
		super(entity, options.name, "dns.v1alpha2.Projects", options);
	}
	public readonly id?: string;
	public readonly number?: string;
	public readonly quota?: Quota;
	public readonly whitelistedFeatures?: string[];
}
export interface ProjectsComponentOutputs {
	readonly id?: string;
	readonly number?: string;
	readonly quota?: Quota;
	readonly whitelistedFeatures?: string[];
}
export interface ProjectsComponentInputs {
	readonly kind?: string;
	readonly name: string;
}
export interface DnsKeySpec {
	readonly algorithm?: string;
	readonly keyLength?: number;
	readonly keyType?: string;
	readonly kind?: string;
}
export interface Project {
	readonly id?: string;
	readonly kind?: string;
	readonly number?: string;
	readonly quota?: Quota;
	readonly whitelistedFeatures?: string[];
}
export interface Quota {
	readonly dnsKeysPerManagedZone?: number;
	readonly gkeClustersPerManagedZone?: number;
	readonly gkeClustersPerPolicy?: number;
	readonly gkeClustersPerResponsePolicy?: number;
	readonly itemsPerRoutingPolicy?: number;
	readonly kind?: string;
	readonly managedZones?: number;
	readonly managedZonesPerGkeCluster?: number;
	readonly managedZonesPerNetwork?: number;
	readonly networksPerManagedZone?: number;
	readonly networksPerPolicy?: number;
	readonly networksPerResponsePolicy?: number;
	readonly peeringZonesPerTargetNetwork?: number;
	readonly policies?: number;
	readonly resourceRecordsPerRrset?: number;
	readonly responsePolicies?: number;
	readonly responsePolicyRulesPerResponsePolicy?: number;
	readonly rrsetAdditionsPerChange?: number;
	readonly rrsetDeletionsPerChange?: number;
	readonly rrsetsPerManagedZone?: number;
	readonly targetNameServersPerManagedZone?: number;
	readonly targetNameServersPerPolicy?: number;
	readonly totalRrdataSizePerChange?: number;
	readonly whitelistedKeySpecs?: DnsKeySpec[];
}
export default {
	Projects: Projects,
};
