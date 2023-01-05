import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class storageMovers extends ArmResource<storageMoversComponentInputs> implements storageMoversComponentOutputs {
	constructor(entity: ADKEntity, options: storageMoversComponentInputs) {
		super(entity, options.name, "Microsoft.StorageMover/storageMovers", "2022-07-01-preview", options);
	}
	public readonly apiVersion: "2022-07-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.StorageMover/storageMovers";
}
export interface storageMoversComponentOutputs {
	readonly apiVersion: "2022-07-01-preview";
	readonly id: string;
	readonly type: "Microsoft.StorageMover/storageMovers";
}
export interface storageMoversComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: StorageMoverProperties;
	readonly systemData?: SystemData;
	readonly tags?: TrackedResourceTags;
}
export class storageMovers_agents
	extends ArmResource<storageMovers_agentsComponentInputs>
	implements storageMovers_agentsComponentOutputs
{
	constructor(entity: ADKEntity, options: storageMovers_agentsComponentInputs) {
		super(entity, options.name, "Microsoft.StorageMover/storageMovers/agents", "2022-07-01-preview", options);
	}
	public readonly apiVersion: "2022-07-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.StorageMover/storageMovers/agents";
}
export interface storageMovers_agentsComponentOutputs {
	readonly apiVersion: "2022-07-01-preview";
	readonly id: string;
	readonly type: "Microsoft.StorageMover/storageMovers/agents";
}
export interface storageMovers_agentsComponentInputs {
	readonly name: string;
	readonly properties: AgentProperties;
	readonly systemData?: SystemData;
}
export class storageMovers_endpoints
	extends ArmResource<storageMovers_endpointsComponentInputs>
	implements storageMovers_endpointsComponentOutputs
{
	constructor(entity: ADKEntity, options: storageMovers_endpointsComponentInputs) {
		super(entity, options.name, "Microsoft.StorageMover/storageMovers/endpoints", "2022-07-01-preview", options);
	}
	public readonly apiVersion: "2022-07-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.StorageMover/storageMovers/endpoints";
}
export interface storageMovers_endpointsComponentOutputs {
	readonly apiVersion: "2022-07-01-preview";
	readonly id: string;
	readonly type: "Microsoft.StorageMover/storageMovers/endpoints";
}
export interface storageMovers_endpointsComponentInputs {
	readonly name: string;
	readonly properties: EndpointBaseProperties;
	readonly systemData?: SystemData;
}
export class storageMovers_projects
	extends ArmResource<storageMovers_projectsComponentInputs>
	implements storageMovers_projectsComponentOutputs
{
	constructor(entity: ADKEntity, options: storageMovers_projectsComponentInputs) {
		super(entity, options.name, "Microsoft.StorageMover/storageMovers/projects", "2022-07-01-preview", options);
	}
	public readonly apiVersion: "2022-07-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.StorageMover/storageMovers/projects";
}
export interface storageMovers_projectsComponentOutputs {
	readonly apiVersion: "2022-07-01-preview";
	readonly id: string;
	readonly type: "Microsoft.StorageMover/storageMovers/projects";
}
export interface storageMovers_projectsComponentInputs {
	readonly name: string;
	readonly properties?: ProjectProperties;
	readonly systemData?: SystemData;
}
export class storageMovers_projects_jobDefinitions
	extends ArmResource<storageMovers_projects_jobDefinitionsComponentInputs>
	implements storageMovers_projects_jobDefinitionsComponentOutputs
{
	constructor(entity: ADKEntity, options: storageMovers_projects_jobDefinitionsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.StorageMover/storageMovers/projects/jobDefinitions",
			"2022-07-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2022-07-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.StorageMover/storageMovers/projects/jobDefinitions";
}
export interface storageMovers_projects_jobDefinitionsComponentOutputs {
	readonly apiVersion: "2022-07-01-preview";
	readonly id: string;
	readonly type: "Microsoft.StorageMover/storageMovers/projects/jobDefinitions";
}
export interface storageMovers_projects_jobDefinitionsComponentInputs {
	readonly name: string;
	readonly properties: JobDefinitionProperties;
	readonly systemData?: SystemData;
}
export class storageMovers_projects_jobDefinitions_jobRuns
	extends ArmResource<storageMovers_projects_jobDefinitions_jobRunsComponentInputs>
	implements storageMovers_projects_jobDefinitions_jobRunsComponentOutputs
{
	constructor(entity: ADKEntity, options: storageMovers_projects_jobDefinitions_jobRunsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.StorageMover/storageMovers/projects/jobDefinitions/jobRuns",
			"2022-07-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2022-07-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.StorageMover/storageMovers/projects/jobDefinitions/jobRuns";
}
export interface storageMovers_projects_jobDefinitions_jobRunsComponentOutputs {
	readonly apiVersion: "2022-07-01-preview";
	readonly id: string;
	readonly type: "Microsoft.StorageMover/storageMovers/projects/jobDefinitions/jobRuns";
}
export interface storageMovers_projects_jobDefinitions_jobRunsComponentInputs {
	readonly name: string;
	readonly properties?: JobRunProperties;
	readonly systemData?: SystemData;
}
export interface AgentProperties {
	readonly agentStatus?: "Executing" | "Offline" | "Online" | "Registering" | "RequiresAttention" | "Unregistering";
	readonly agentVersion?: string;
	readonly arcResourceId: string;
	readonly arcVmUuid: string;
	readonly description?: string;
	readonly errorDetails?: AgentPropertiesErrorDetails;
	readonly lastStatusUpdate?: string;
	readonly localIPAddress?: string;
	readonly memoryInMB?: number;
	readonly numberOfCores?: number;
	readonly provisioningState?: "Succeeded";
	readonly uptimeInSeconds?: number;
}
export interface AgentPropertiesErrorDetails {
	readonly code?: string;
	readonly message?: string;
}
export interface EndpointBaseProperties {
	readonly description?: string;
	readonly provisioningState?: "Succeeded";
}
export interface JobDefinitionProperties {
	readonly agentName?: string;
	readonly agentResourceId?: string;
	readonly copyMode: "Additive" | "Mirror";
	readonly description?: string;
	readonly latestJobRunName?: string;
	readonly latestJobRunResourceId?: string;
	readonly latestJobRunStatus?:
		| "CancelRequested"
		| "Canceled"
		| "Canceling"
		| "Failed"
		| "Queued"
		| "Running"
		| "Started"
		| "Succeeded";
	readonly provisioningState?: "Succeeded";
	readonly sourceName: string;
	readonly sourceResourceId?: string;
	readonly sourceSubpath?: string;
	readonly targetName: string;
	readonly targetResourceId?: string;
	readonly targetSubpath?: string;
}
export interface JobRunError {
	readonly code?: string;
	readonly message?: string;
	readonly target?: string;
}
export interface JobRunProperties {
	readonly agentName?: string;
	readonly agentResourceId?: string;
	readonly bytesExcluded?: number;
	readonly bytesFailed?: number;
	readonly bytesNoTransferNeeded?: number;
	readonly bytesScanned?: number;
	readonly bytesTransferred?: number;
	readonly bytesUnsupported?: number;
	readonly error?: JobRunError;
	readonly executionEndTime?: string;
	readonly executionStartTime?: string;
	readonly itemsExcluded?: number;
	readonly itemsFailed?: number;
	readonly itemsNoTransferNeeded?: number;
	readonly itemsScanned?: number;
	readonly itemsTransferred?: number;
	readonly itemsUnsupported?: number;
	readonly jobDefinitionProperties?: any;
	readonly lastStatusUpdate?: string;
	readonly provisioningState?: "Succeeded";
	readonly scanStatus?: "Completed" | "NotStarted" | "Scanning";
	readonly sourceName?: string;
	readonly sourceProperties?: any;
	readonly sourceResourceId?: string;
	readonly status?:
		| "CancelRequested"
		| "Canceled"
		| "Canceling"
		| "Failed"
		| "Queued"
		| "Running"
		| "Started"
		| "Succeeded";
	readonly targetName?: string;
	readonly targetProperties?: any;
	readonly targetResourceId?: string;
}
export interface ProjectProperties {
	readonly description?: string;
	readonly provisioningState?: "Succeeded";
}
export interface StorageMoverProperties {
	readonly description?: string;
	readonly provisioningState?: "Succeeded";
}
export interface SystemData {
	readonly createdAt?: string;
	readonly createdBy?: string;
	readonly createdByType?: "Application" | "Key" | "ManagedIdentity" | "User";
	readonly lastModifiedAt?: string;
	readonly lastModifiedBy?: string;
	readonly lastModifiedByType?: "Application" | "Key" | "ManagedIdentity" | "User";
}
export interface TrackedResourceTags {
	readonly [key: string]: string;
}
export default {
	storageMovers: storageMovers,
	"storageMovers/agents": storageMovers_agents,
	"storageMovers/endpoints": storageMovers_endpoints,
	"storageMovers/projects": storageMovers_projects,
	"storageMovers/projects/jobDefinitions": storageMovers_projects_jobDefinitions,
	"storageMovers/projects/jobDefinitions/jobRuns": storageMovers_projects_jobDefinitions_jobRuns,
};
