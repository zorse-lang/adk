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
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties: DscCompilationJobCreatePropertiesOrDscCompilationJobProperties;
	readonly tags?: DscCompilationJobCreateParametersTags | undefined;
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
	readonly properties?:
		| DscNodeConfigurationCreateOrUpdateParametersPropertiesOrDscNodeConfigurationProperties
		| undefined;
	readonly tags?: DscNodeConfigurationCreateOrUpdateParametersTags | undefined;
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
	readonly properties?: DscNodeProperties | undefined;
}
export interface ContentHash {
	readonly algorithm: string;
	readonly value: string;
}
export interface ContentSourceOrDscNodeConfigurationPropertiesSource {
	readonly hash?: ContentHash | undefined;
	readonly type?: ("embeddedContent" | "uri") | undefined;
	readonly value?: string | undefined;
	readonly version?: string | undefined;
}
export interface DscCompilationJobCreateParametersTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface DscCompilationJobCreatePropertiesOrDscCompilationJobProperties {
	readonly configuration: DscConfigurationAssociationProperty;
	readonly creationTime?: string | undefined;
	readonly endTime?: string | undefined;
	readonly exception?: string | undefined;
	readonly incrementNodeConfigurationBuild?: boolean | undefined;
	readonly jobId?: string | undefined;
	readonly lastModifiedTime?: string | undefined;
	readonly lastStatusModifiedTime?: string | undefined;
	readonly parameters?: DscCompilationJobCreatePropertiesParameters | undefined;
	readonly provisioningState?: ("Failed" | "Processing" | "Succeeded" | "Suspended") | undefined;
	readonly runOn?: string | undefined;
	readonly startedBy?: string | undefined;
	readonly startTime?: string | undefined;
	readonly status?:
		| (
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
				| "Suspending"
		  )
		| undefined;
	readonly statusDetails?: string | undefined;
}
export interface DscCompilationJobCreatePropertiesParameters {
	readonly "[ key: string ]"?: string | undefined;
}
export interface DscConfigurationAssociationProperty {
	readonly name?: string | undefined;
}
export interface DscNodeConfigurationAssociationProperty {
	readonly name?: string | undefined;
}
export interface DscNodeConfigurationCreateOrUpdateParametersPropertiesOrDscNodeConfigurationProperties {
	readonly configuration: DscConfigurationAssociationProperty;
	readonly creationTime?: string | undefined;
	readonly incrementNodeConfigurationBuild?: boolean | undefined;
	readonly lastModifiedTime?: string | undefined;
	readonly nodeCount?: number | undefined;
	readonly source: ContentSourceOrDscNodeConfigurationPropertiesSource;
}
export interface DscNodeConfigurationCreateOrUpdateParametersTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface DscNodeExtensionHandlerAssociationProperty {
	readonly name?: string | undefined;
	readonly version?: string | undefined;
}
export interface DscNodeProperties {
	readonly accountId?: string | undefined;
	readonly etag?: string | undefined;
	readonly extensionHandler?: DscNodeExtensionHandlerAssociationProperty[] | undefined;
	readonly ip?: string | undefined;
	readonly lastSeen?: string | undefined;
	readonly nodeConfiguration?: DscNodeConfigurationAssociationProperty | undefined;
	readonly nodeId?: string | undefined;
	readonly registrationTime?: string | undefined;
	readonly status?: string | undefined;
	readonly totalCount?: number | undefined;
}
export default {
	"automationAccounts/compilationjobs": automationAccounts_compilationjobs,
	"automationAccounts/nodeConfigurations": automationAccounts_nodeConfigurations,
	"automationAccounts/nodes": automationAccounts_nodes,
};
