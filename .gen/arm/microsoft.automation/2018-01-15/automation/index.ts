import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class automationAccounts_compilationjobs
	extends ArmResource<automationAccounts_compilationjobsComponentInputs>
	implements automationAccounts_compilationjobsComponentOutputs
{
	constructor(entity: ADKEntity, options: automationAccounts_compilationjobsComponentInputs) {
		super(entity, options.name, "Microsoft.Automation/automationAccounts/compilationjobs", "2018-01-15", options);
	}
	public readonly apiVersion: "2018-01-15";
	public readonly id: string;
	public readonly type: "Microsoft.Automation/automationAccounts/compilationjobs";
}
export interface automationAccounts_compilationjobsComponentOutputs {
	readonly apiVersion: "2018-01-15";
	readonly id: string;
	readonly type: "Microsoft.Automation/automationAccounts/compilationjobs";
}
export interface automationAccounts_compilationjobsComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly properties: DscCompilationJobCreatePropertiesOrDscCompilationJobProperties;
	readonly tags?: DscCompilationJobCreateParametersTags;
}
export class automationAccounts_nodeConfigurations
	extends ArmResource<automationAccounts_nodeConfigurationsComponentInputs>
	implements automationAccounts_nodeConfigurationsComponentOutputs
{
	constructor(entity: ADKEntity, options: automationAccounts_nodeConfigurationsComponentInputs) {
		super(entity, options.name, "Microsoft.Automation/automationAccounts/nodeConfigurations", "2018-01-15", options);
	}
	public readonly apiVersion: "2018-01-15";
	public readonly id: string;
	public readonly type: "Microsoft.Automation/automationAccounts/nodeConfigurations";
}
export interface automationAccounts_nodeConfigurationsComponentOutputs {
	readonly apiVersion: "2018-01-15";
	readonly id: string;
	readonly type: "Microsoft.Automation/automationAccounts/nodeConfigurations";
}
export interface automationAccounts_nodeConfigurationsComponentInputs {
	readonly name: string;
	readonly properties?: DscNodeConfigurationCreateOrUpdateParametersPropertiesOrDscNodeConfigurationProperties;
	readonly tags?: DscNodeConfigurationCreateOrUpdateParametersTags;
}
export class automationAccounts_nodes
	extends ArmResource<automationAccounts_nodesComponentInputs>
	implements automationAccounts_nodesComponentOutputs
{
	constructor(entity: ADKEntity, options: automationAccounts_nodesComponentInputs) {
		super(entity, options.name, "Microsoft.Automation/automationAccounts/nodes", "2018-01-15", options);
	}
	public readonly apiVersion: "2018-01-15";
	public readonly id: string;
	public readonly type: "Microsoft.Automation/automationAccounts/nodes";
}
export interface automationAccounts_nodesComponentOutputs {
	readonly apiVersion: "2018-01-15";
	readonly id: string;
	readonly type: "Microsoft.Automation/automationAccounts/nodes";
}
export interface automationAccounts_nodesComponentInputs {
	readonly name: string;
	readonly properties?: DscNodeProperties;
}
export interface ContentHash {
	readonly algorithm: string;
	readonly value: string;
}
export interface ContentSourceOrDscNodeConfigurationPropertiesSource {
	readonly hash?: ContentHash;
	readonly type?: "embeddedContent" | "uri";
	readonly value?: string;
	readonly version?: string;
}
export interface DscCompilationJobCreateParametersTags {
	readonly [key: string]: string;
}
export interface DscCompilationJobCreatePropertiesOrDscCompilationJobProperties {
	readonly configuration: DscConfigurationAssociationProperty;
	readonly creationTime?: string;
	readonly endTime?: string;
	readonly exception?: string;
	readonly incrementNodeConfigurationBuild?: boolean;
	readonly jobId?: string;
	readonly lastModifiedTime?: string;
	readonly lastStatusModifiedTime?: string;
	readonly parameters?: DscCompilationJobCreatePropertiesParameters;
	readonly provisioningState?: "Failed" | "Processing" | "Succeeded" | "Suspended";
	readonly runOn?: string;
	readonly startedBy?: string;
	readonly startTime?: string;
	readonly status?:
		| "Activating"
		| "Blocked"
		| "Completed"
		| "Disconnected"
		| "Failed"
		| "New"
		| "Removing"
		| "Resuming"
		| "Running"
		| "Stopped"
		| "Stopping"
		| "Suspended"
		| "Suspending";
	readonly statusDetails?: string;
}
export interface DscCompilationJobCreatePropertiesParameters {
	readonly [key: string]: string;
}
export interface DscConfigurationAssociationProperty {
	readonly name?: string;
}
export interface DscNodeConfigurationAssociationProperty {
	readonly name?: string;
}
export interface DscNodeConfigurationCreateOrUpdateParametersPropertiesOrDscNodeConfigurationProperties {
	readonly configuration: DscConfigurationAssociationProperty;
	readonly creationTime?: string;
	readonly incrementNodeConfigurationBuild?: boolean;
	readonly lastModifiedTime?: string;
	readonly nodeCount?: number;
	readonly source: ContentSourceOrDscNodeConfigurationPropertiesSource;
}
export interface DscNodeConfigurationCreateOrUpdateParametersTags {
	readonly [key: string]: string;
}
export interface DscNodeExtensionHandlerAssociationProperty {
	readonly name?: string;
	readonly version?: string;
}
export interface DscNodeProperties {
	readonly accountId?: string;
	readonly etag?: string;
	readonly extensionHandler?: DscNodeExtensionHandlerAssociationProperty[];
	readonly ip?: string;
	readonly lastSeen?: string;
	readonly nodeConfiguration?: DscNodeConfigurationAssociationProperty;
	readonly nodeId?: string;
	readonly registrationTime?: string;
	readonly status?: string;
	readonly totalCount?: number;
}
export default {
	"automationAccounts/compilationjobs": automationAccounts_compilationjobs,
	"automationAccounts/nodeConfigurations": automationAccounts_nodeConfigurations,
	"automationAccounts/nodes": automationAccounts_nodes,
};
