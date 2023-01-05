import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class migrateProjects
	extends ArmResource<migrateProjectsComponentInputs>
	implements migrateProjectsComponentOutputs
{
	constructor(entity: ADKEntity, options: migrateProjectsComponentInputs) {
		super(entity, options.name, "Microsoft.Migrate/migrateProjects", "2018-09-01-preview", options);
	}
	public readonly apiVersion: "2018-09-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Migrate/migrateProjects";
}
export interface migrateProjectsComponentOutputs {
	readonly apiVersion: "2018-09-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Migrate/migrateProjects";
}
export interface migrateProjectsComponentInputs {
	readonly eTag?: string;
	readonly location?: string;
	readonly name: string;
	readonly properties?: MigrateProjectProperties;
	readonly tags?: MigrateProjectTags;
}
export class migrateProjects_solutions
	extends ArmResource<migrateProjects_solutionsComponentInputs>
	implements migrateProjects_solutionsComponentOutputs
{
	constructor(entity: ADKEntity, options: migrateProjects_solutionsComponentInputs) {
		super(entity, options.name, "Microsoft.Migrate/migrateProjects/solutions", "2018-09-01-preview", options);
	}
	public readonly apiVersion: "2018-09-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Migrate/migrateProjects/solutions";
}
export interface migrateProjects_solutionsComponentOutputs {
	readonly apiVersion: "2018-09-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Migrate/migrateProjects/solutions";
}
export interface migrateProjects_solutionsComponentInputs {
	readonly etag?: string;
	readonly name: string;
	readonly properties?: SolutionProperties;
}
export interface MigrateProjectProperties {
	readonly lastSummaryRefreshedTime?: string;
	readonly provisioningState?: "Accepted" | "Creating" | "Deleting" | "Failed" | "Moving" | "Succeeded";
	readonly refreshSummaryState?: "Completed" | "Failed" | "InProgress" | "Started";
	readonly registeredTools?:
		| "Carbonite"
		| "Cloudamize"
		| "CorentTech"
		| "DataMigrationAssistant"
		| "DatabaseMigrationService"
		| "ServerAssessment"
		| "ServerAssessmentV1"
		| "ServerDiscovery"
		| "ServerMigration"
		| "ServerMigration_Replication"
		| "Turbonomic"
		| "Zerto"[];
	readonly summary?: MigrateProjectPropertiesSummary;
}
export interface MigrateProjectPropertiesSummary {
	readonly [key: string]: ProjectSummary;
}
export interface MigrateProjectTags {
	readonly additionalProperties?: string;
}
export interface ProjectSummary {
	readonly extendedSummary?: ProjectSummaryExtendedSummary;
	readonly lastSummaryRefreshedTime?: string;
	readonly refreshSummaryState?: "Completed" | "Failed" | "InProgress" | "Started";
}
export interface ProjectSummaryExtendedSummary {
	readonly [key: string]: string;
}
export interface SolutionDetails {
	readonly assessmentCount?: number;
	readonly extendedDetails?: SolutionDetailsExtendedDetails;
	readonly groupCount?: number;
}
export interface SolutionDetailsExtendedDetails {
	readonly [key: string]: string;
}
export interface SolutionProperties {
	readonly cleanupState?: "Completed" | "Failed" | "InProgress" | "None" | "Started";
	readonly details?: SolutionDetails;
	readonly goal?: "Databases" | "Servers";
	readonly purpose?: "Assessment" | "Discovery" | "Migration";
	readonly status?: "Active" | "Inactive";
	readonly summary?: SolutionSummary;
	readonly tool?:
		| "Carbonite"
		| "Cloudamize"
		| "CorentTech"
		| "DataMigrationAssistant"
		| "DatabaseMigrationService"
		| "ServerAssessment"
		| "ServerAssessmentV1"
		| "ServerDiscovery"
		| "ServerMigration"
		| "ServerMigration_Replication"
		| "Turbonomic"
		| "Zerto";
}
export interface SolutionSummary {}
export default {
	migrateProjects: migrateProjects,
	"migrateProjects/solutions": migrateProjects_solutions,
};
