import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class workflows extends ArmResource<workflowsComponentInputs> implements workflowsComponentOutputs {
	constructor(entity: ADKEntity, options: workflowsComponentInputs) {
		super(entity, options.name, "Microsoft.Logic/workflows", "2015-02-01-preview", options);
	}
	public readonly apiVersion: "2015-02-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Logic/workflows";
}
export interface workflowsComponentOutputs {
	readonly apiVersion: "2015-02-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Logic/workflows";
}
export interface workflowsComponentInputs {
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: WorkflowProperties | undefined;
	readonly tags?: ResourceTags | undefined;
}
export class workflows_accessKeys
	extends ArmResource<workflows_accessKeysComponentInputs>
	implements workflows_accessKeysComponentOutputs
{
	constructor(entity: ADKEntity, options: workflows_accessKeysComponentInputs) {
		super(entity, options.name, "Microsoft.Logic/workflows/accessKeys", "2015-02-01-preview", options);
	}
	public readonly apiVersion: "2015-02-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Logic/workflows/accessKeys";
}
export interface workflows_accessKeysComponentOutputs {
	readonly apiVersion: "2015-02-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Logic/workflows/accessKeys";
}
export interface workflows_accessKeysComponentInputs {
	readonly name: string;
	readonly properties?: WorkflowAccessKeyProperties | undefined;
}
export class workflows_runs extends ArmResource<workflows_runsComponentInputs> implements workflows_runsComponentOutputs {
	constructor(entity: ADKEntity, options: workflows_runsComponentInputs) {
		super(entity, options.name, "Microsoft.Logic/workflows/runs", "2015-02-01-preview", options);
	}
	public readonly apiVersion: "2015-02-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Logic/workflows/runs";
}
export interface workflows_runsComponentOutputs {
	readonly apiVersion: "2015-02-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Logic/workflows/runs";
}
export interface workflows_runsComponentInputs {
	readonly name: string;
	readonly properties?: WorkflowRunProperties | undefined;
}
export class workflows_runs_actions
	extends ArmResource<workflows_runs_actionsComponentInputs>
	implements workflows_runs_actionsComponentOutputs
{
	constructor(entity: ADKEntity, options: workflows_runs_actionsComponentInputs) {
		super(entity, options.name, "Microsoft.Logic/workflows/runs/actions", "2015-02-01-preview", options);
	}
	public readonly apiVersion: "2015-02-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Logic/workflows/runs/actions";
}
export interface workflows_runs_actionsComponentOutputs {
	readonly apiVersion: "2015-02-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Logic/workflows/runs/actions";
}
export interface workflows_runs_actionsComponentInputs {
	readonly name: string;
	readonly properties?: WorkflowRunActionProperties | undefined;
}
export class workflows_triggers
	extends ArmResource<workflows_triggersComponentInputs>
	implements workflows_triggersComponentOutputs
{
	constructor(entity: ADKEntity, options: workflows_triggersComponentInputs) {
		super(entity, options.name, "Microsoft.Logic/workflows/triggers", "2015-02-01-preview", options);
	}
	public readonly apiVersion: "2015-02-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Logic/workflows/triggers";
}
export interface workflows_triggersComponentOutputs {
	readonly apiVersion: "2015-02-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Logic/workflows/triggers";
}
export interface workflows_triggersComponentInputs {
	readonly name: string;
	readonly properties?: WorkflowTriggerProperties | undefined;
}
export class workflows_triggers_histories
	extends ArmResource<workflows_triggers_historiesComponentInputs>
	implements workflows_triggers_historiesComponentOutputs
{
	constructor(entity: ADKEntity, options: workflows_triggers_historiesComponentInputs) {
		super(entity, options.name, "Microsoft.Logic/workflows/triggers/histories", "2015-02-01-preview", options);
	}
	public readonly apiVersion: "2015-02-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Logic/workflows/triggers/histories";
}
export interface workflows_triggers_historiesComponentOutputs {
	readonly apiVersion: "2015-02-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Logic/workflows/triggers/histories";
}
export interface workflows_triggers_historiesComponentInputs {
	readonly name: string;
	readonly properties?: WorkflowTriggerHistoryProperties | undefined;
}
export class workflows_versions
	extends ArmResource<workflows_versionsComponentInputs>
	implements workflows_versionsComponentOutputs
{
	constructor(entity: ADKEntity, options: workflows_versionsComponentInputs) {
		super(entity, options.name, "Microsoft.Logic/workflows/versions", "2015-02-01-preview", options);
	}
	public readonly apiVersion: "2015-02-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Logic/workflows/versions";
}
export interface workflows_versionsComponentOutputs {
	readonly apiVersion: "2015-02-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Logic/workflows/versions";
}
export interface workflows_versionsComponentInputs {
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: WorkflowVersionProperties | undefined;
	readonly tags?: ResourceTags | undefined;
}
export function list(resource: workflows_accessKeys): WorkflowSecretKeys {
	if (resource.apiVersion !== "2015-02-01-preview") {
		throw new Error(`list is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.Logic/workflows/accessKeys") {
		throw new Error(`list is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export interface ContentHash {
	readonly algorithm?: string | undefined;
	readonly value?: string | undefined;
}
export interface ContentLink {
	readonly contentHash?: ContentHash | undefined;
	readonly contentSize?: number | undefined;
	readonly contentVersion?: string | undefined;
	readonly metadata?: any | undefined;
	readonly uri?: string | undefined;
}
export interface ResourceReference {
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly type?: string | undefined;
}
export interface ResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface Sku {
	readonly name?: ("Basic" | "Free" | "NotSpecified" | "Premium" | "Shared") | undefined;
	readonly plan?: ResourceReference | undefined;
}
export interface WorkflowAccessKeyProperties {
	readonly notAfter?: string | undefined;
	readonly notBefore?: string | undefined;
}
export interface WorkflowOutputParameter {
	readonly error?: any | undefined;
	readonly metadata?: any | undefined;
	readonly type?:
		| ("Array" | "Bool" | "Float" | "Int" | "NotSpecified" | "Object" | "SecureObject" | "SecureString")
		| undefined;
	readonly value?: any | undefined;
}
export interface WorkflowParameter {
	readonly metadata?: any | undefined;
	readonly type?:
		| ("Array" | "Bool" | "Float" | "Int" | "NotSpecified" | "Object" | "SecureObject" | "SecureString")
		| undefined;
	readonly value?: any | undefined;
}
export interface WorkflowProperties {
	readonly accessEndpoint?: string | undefined;
	readonly changedTime?: string | undefined;
	readonly createdTime?: string | undefined;
	readonly definition?: any | undefined;
	readonly definitionLink?: ContentLink | undefined;
	readonly parameters?: WorkflowPropertiesParameters | undefined;
	readonly parametersLink?: ContentLink | undefined;
	readonly provisioningState?: ("Moving" | "NotSpecified") | undefined;
	readonly sku?: Sku | undefined;
	readonly state?: ("Deleted" | "Disabled" | "Enabled" | "NotSpecified") | undefined;
	readonly version?: string | undefined;
}
export interface WorkflowPropertiesParameters {
	readonly "[ key: string ]"?: WorkflowParameter | undefined;
}
export interface WorkflowRunActionProperties {
	readonly code?: string | undefined;
	readonly endTime?: string | undefined;
	readonly error?: any | undefined;
	readonly inputsLink?: ContentLink | undefined;
	readonly outputsLink?: ContentLink | undefined;
	readonly startTime?: string | undefined;
	readonly status?:
		| (
				| "Aborted"
				| "Cancelled"
				| "Failed"
				| "Faulted"
				| "NotSpecified"
				| "Paused"
				| "Running"
				| "Skipped"
				| "Succeeded"
				| "Suspended"
				| "TimedOut"
		  )
		| undefined;
	readonly trackingId?: string | undefined;
}
export interface WorkflowRunProperties {
	readonly code?: string | undefined;
	readonly correlationId?: string | undefined;
	readonly endTime?: string | undefined;
	readonly error?: any | undefined;
	readonly outputs?: WorkflowRunPropertiesOutputs | undefined;
	readonly startTime?: string | undefined;
	readonly status?:
		| (
				| "Aborted"
				| "Cancelled"
				| "Failed"
				| "Faulted"
				| "NotSpecified"
				| "Paused"
				| "Running"
				| "Skipped"
				| "Succeeded"
				| "Suspended"
				| "TimedOut"
		  )
		| undefined;
	readonly trigger?: WorkflowRunTrigger | undefined;
	readonly workflow?: ResourceReference | undefined;
}
export interface WorkflowRunPropertiesOutputs {
	readonly "[ key: string ]"?: WorkflowOutputParameter | undefined;
}
export interface WorkflowRunTrigger {
	readonly code?: string | undefined;
	readonly endTime?: string | undefined;
	readonly error?: any | undefined;
	readonly inputs?: any | undefined;
	readonly inputsLink?: ContentLink | undefined;
	readonly name?: string | undefined;
	readonly outputs?: any | undefined;
	readonly outputsLink?: ContentLink | undefined;
	readonly startTime?: string | undefined;
	readonly status?:
		| (
				| "Aborted"
				| "Cancelled"
				| "Failed"
				| "Faulted"
				| "NotSpecified"
				| "Paused"
				| "Running"
				| "Skipped"
				| "Succeeded"
				| "Suspended"
				| "TimedOut"
		  )
		| undefined;
	readonly trackingId?: string | undefined;
}
export interface WorkflowSecretKeys {
	readonly primarySecretKey?: string | undefined;
	readonly secondarySecretKey?: string | undefined;
}
export interface WorkflowTriggerHistoryProperties {
	readonly code?: string | undefined;
	readonly endTime?: string | undefined;
	readonly error?: any | undefined;
	readonly fired?: boolean | undefined;
	readonly inputsLink?: ContentLink | undefined;
	readonly outputsLink?: ContentLink | undefined;
	readonly run?: ResourceReference | undefined;
	readonly startTime?: string | undefined;
	readonly status?:
		| (
				| "Aborted"
				| "Cancelled"
				| "Failed"
				| "Faulted"
				| "NotSpecified"
				| "Paused"
				| "Running"
				| "Skipped"
				| "Succeeded"
				| "Suspended"
				| "TimedOut"
		  )
		| undefined;
	readonly trackingId?: string | undefined;
}
export interface WorkflowTriggerProperties {
	readonly changedTime?: string | undefined;
	readonly createdTime?: string | undefined;
	readonly lastExecutionTime?: string | undefined;
	readonly nextExecutionTime?: string | undefined;
	readonly provisioningState?: ("Creating" | "NotSpecified" | "Succeeded") | undefined;
	readonly recurrence?: WorkflowTriggerRecurrence | undefined;
	readonly state?: ("Deleted" | "Disabled" | "Enabled" | "NotSpecified") | undefined;
	readonly status?:
		| (
				| "Aborted"
				| "Cancelled"
				| "Failed"
				| "Faulted"
				| "NotSpecified"
				| "Paused"
				| "Running"
				| "Skipped"
				| "Succeeded"
				| "Suspended"
				| "TimedOut"
		  )
		| undefined;
	readonly workflow?: ResourceReference | undefined;
}
export interface WorkflowTriggerRecurrence {
	readonly frequency?: ("Day" | "Hour" | "Minute" | "Month" | "Second" | "Week") | undefined;
	readonly interval?: number | undefined;
	readonly startTime?: string | undefined;
	readonly timeZone?: string | undefined;
}
export interface WorkflowVersionProperties {
	readonly accessEndpoint?: string | undefined;
	readonly changedTime?: string | undefined;
	readonly createdTime?: string | undefined;
	readonly definition?: any | undefined;
	readonly definitionLink?: ContentLink | undefined;
	readonly parameters?: WorkflowVersionPropertiesParameters | undefined;
	readonly parametersLink?: ContentLink | undefined;
	readonly sku?: Sku | undefined;
	readonly state?: ("Deleted" | "Disabled" | "Enabled" | "NotSpecified") | undefined;
	readonly version?: string | undefined;
}
export interface WorkflowVersionPropertiesParameters {
	readonly "[ key: string ]"?: WorkflowParameter | undefined;
}
export default {
	workflows: workflows,
	"workflows/accessKeys": workflows_accessKeys,
	"workflows/runs": workflows_runs,
	"workflows/runs/actions": workflows_runs_actions,
	"workflows/triggers": workflows_triggers,
	"workflows/triggers/histories": workflows_triggers_histories,
	"workflows/versions": workflows_versions,
};
