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
	readonly eTag?: string | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: MigrateProjectProperties | undefined;
	readonly tags?: MigrateProjectTags | undefined;
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
	readonly etag?: string | undefined;
	readonly name: string;
	readonly properties?: SolutionProperties | undefined;
}
export interface MigrateProjectProperties {
	readonly lastSummaryRefreshedTime?: string | undefined;
	readonly provisioningState?: ("Accepted" | "Creating" | "Deleting" | "Failed" | "Moving" | "Succeeded") | undefined;
	readonly refreshSummaryState?: ("Completed" | "Failed" | "InProgress" | "Started") | undefined;
	readonly registeredTools?:
		| (
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
				| "Zerto"[]
		  )
		| undefined;
	readonly summary?: MigrateProjectPropertiesSummary | undefined;
}
export interface MigrateProjectPropertiesSummary {
	readonly "[ key: string ]"?: ProjectSummary | undefined;
}
export interface MigrateProjectTags {
	readonly additionalProperties?: string | undefined;
}
export interface ProjectSummary {
	readonly extendedSummary?: ProjectSummaryExtendedSummary | undefined;
	readonly lastSummaryRefreshedTime?: string | undefined;
	readonly refreshSummaryState?: ("Completed" | "Failed" | "InProgress" | "Started") | undefined;
}
export interface ProjectSummaryExtendedSummary {
	readonly "[ key: string ]"?: string | undefined;
}
export interface SolutionDetails {
	readonly assessmentCount?: number | undefined;
	readonly extendedDetails?: SolutionDetailsExtendedDetails | undefined;
	readonly groupCount?: number | undefined;
}
export interface SolutionDetailsExtendedDetails {
	readonly "[ key: string ]"?: string | undefined;
}
export interface SolutionProperties {
	readonly cleanupState?: ("Completed" | "Failed" | "InProgress" | "None" | "Started") | undefined;
	readonly details?: SolutionDetails | undefined;
	readonly goal?: ("Databases" | "Servers") | undefined;
	readonly purpose?: ("Assessment" | "Discovery" | "Migration") | undefined;
	readonly status?: ("Active" | "Inactive") | undefined;
	readonly summary?: SolutionSummary | undefined;
	readonly tool?:
		| (
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
				| "Zerto"
		  )
		| undefined;
}
export interface SolutionSummary {}
export default {
	migrateProjects: migrateProjects,
	"migrateProjects/solutions": migrateProjects_solutions,
};
