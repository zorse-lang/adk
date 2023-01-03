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
	readonly properties?: StorageMoverProperties | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: TrackedResourceTags | undefined;
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
	readonly systemData?: SystemData | undefined;
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
	readonly systemData?: SystemData | undefined;
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
	readonly properties?: ProjectProperties | undefined;
	readonly systemData?: SystemData | undefined;
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
	readonly systemData?: SystemData | undefined;
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
	readonly properties?: JobRunProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export interface AgentProperties {
	readonly agentStatus?:
		| ("Executing" | "Offline" | "Online" | "Registering" | "RequiresAttention" | "Unregistering")
		| undefined;
	readonly agentVersion?: string | undefined;
	readonly arcResourceId: string;
	readonly arcVmUuid: string;
	readonly description?: string | undefined;
	readonly errorDetails?: AgentPropertiesErrorDetails | undefined;
	readonly lastStatusUpdate?: string | undefined;
	readonly localIPAddress?: string | undefined;
	readonly memoryInMB?: number | undefined;
	readonly numberOfCores?: number | undefined;
	readonly provisioningState?: "Succeeded" | undefined;
	readonly uptimeInSeconds?: number | undefined;
}
export interface AgentPropertiesErrorDetails {
	readonly code?: string | undefined;
	readonly message?: string | undefined;
}
export interface EndpointBaseProperties {
	readonly description?: string | undefined;
	readonly provisioningState?: "Succeeded" | undefined;
}
export interface JobDefinitionProperties {
	readonly agentName?: string | undefined;
	readonly agentResourceId?: string | undefined;
	readonly copyMode: "Additive" | "Mirror";
	readonly description?: string | undefined;
	readonly latestJobRunName?: string | undefined;
	readonly latestJobRunResourceId?: string | undefined;
	readonly latestJobRunStatus?:
		| ("CancelRequested" | "Canceled" | "Canceling" | "Failed" | "Queued" | "Running" | "Started" | "Succeeded")
		| undefined;
	readonly provisioningState?: "Succeeded" | undefined;
	readonly sourceName: string;
	readonly sourceResourceId?: string | undefined;
	readonly sourceSubpath?: string | undefined;
	readonly targetName: string;
	readonly targetResourceId?: string | undefined;
	readonly targetSubpath?: string | undefined;
}
export interface JobRunError {
	readonly code?: string | undefined;
	readonly message?: string | undefined;
	readonly target?: string | undefined;
}
export interface JobRunProperties {
	readonly agentName?: string | undefined;
	readonly agentResourceId?: string | undefined;
	readonly bytesExcluded?: number | undefined;
	readonly bytesFailed?: number | undefined;
	readonly bytesNoTransferNeeded?: number | undefined;
	readonly bytesScanned?: number | undefined;
	readonly bytesTransferred?: number | undefined;
	readonly bytesUnsupported?: number | undefined;
	readonly error?: JobRunError | undefined;
	readonly executionEndTime?: string | undefined;
	readonly executionStartTime?: string | undefined;
	readonly itemsExcluded?: number | undefined;
	readonly itemsFailed?: number | undefined;
	readonly itemsNoTransferNeeded?: number | undefined;
	readonly itemsScanned?: number | undefined;
	readonly itemsTransferred?: number | undefined;
	readonly itemsUnsupported?: number | undefined;
	readonly jobDefinitionProperties?: any | undefined;
	readonly lastStatusUpdate?: string | undefined;
	readonly provisioningState?: "Succeeded" | undefined;
	readonly scanStatus?: ("Completed" | "NotStarted" | "Scanning") | undefined;
	readonly sourceName?: string | undefined;
	readonly sourceProperties?: any | undefined;
	readonly sourceResourceId?: string | undefined;
	readonly status?:
		| ("CancelRequested" | "Canceled" | "Canceling" | "Failed" | "Queued" | "Running" | "Started" | "Succeeded")
		| undefined;
	readonly targetName?: string | undefined;
	readonly targetProperties?: any | undefined;
	readonly targetResourceId?: string | undefined;
}
export interface ProjectProperties {
	readonly description?: string | undefined;
	readonly provisioningState?: "Succeeded" | undefined;
}
export interface StorageMoverProperties {
	readonly description?: string | undefined;
	readonly provisioningState?: "Succeeded" | undefined;
}
export interface SystemData {
	readonly createdAt?: string | undefined;
	readonly createdBy?: string | undefined;
	readonly createdByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
	readonly lastModifiedAt?: string | undefined;
	readonly lastModifiedBy?: string | undefined;
	readonly lastModifiedByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
}
export interface TrackedResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export default {
	storageMovers: storageMovers,
	"storageMovers/agents": storageMovers_agents,
	"storageMovers/endpoints": storageMovers_endpoints,
	"storageMovers/projects": storageMovers_projects,
	"storageMovers/projects/jobDefinitions": storageMovers_projects_jobDefinitions,
	"storageMovers/projects/jobDefinitions/jobRuns": storageMovers_projects_jobDefinitions_jobRuns,
};
