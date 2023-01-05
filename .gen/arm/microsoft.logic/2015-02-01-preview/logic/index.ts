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
	readonly location?: string;
	readonly name: string;
	readonly properties?: WorkflowProperties;
	readonly tags?: ResourceTags;
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
	readonly properties?: WorkflowAccessKeyProperties;
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
	readonly properties?: WorkflowRunProperties;
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
	readonly properties?: WorkflowRunActionProperties;
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
	readonly properties?: WorkflowTriggerProperties;
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
	readonly properties?: WorkflowTriggerHistoryProperties;
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
	readonly location?: string;
	readonly name: string;
	readonly properties?: WorkflowVersionProperties;
	readonly tags?: ResourceTags;
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
	readonly algorithm?: string;
	readonly value?: string;
}
export interface ContentLink {
	readonly contentHash?: ContentHash;
	readonly contentSize?: number;
	readonly contentVersion?: string;
	readonly metadata?: any;
	readonly uri?: string;
}
export interface ResourceReference {
	readonly id?: string;
	readonly name?: string;
	readonly type?: string;
}
export interface ResourceTags {
	readonly [key: string]: string;
}
export interface Sku {
	readonly name?: "Basic" | "Free" | "NotSpecified" | "Premium" | "Shared";
	readonly plan?: ResourceReference;
}
export interface WorkflowAccessKeyProperties {
	readonly notAfter?: string;
	readonly notBefore?: string;
}
export interface WorkflowOutputParameter {
	readonly error?: any;
	readonly metadata?: any;
	readonly type?: "Array" | "Bool" | "Float" | "Int" | "NotSpecified" | "Object" | "SecureObject" | "SecureString";
	readonly value?: any;
}
export interface WorkflowParameter {
	readonly metadata?: any;
	readonly type?: "Array" | "Bool" | "Float" | "Int" | "NotSpecified" | "Object" | "SecureObject" | "SecureString";
	readonly value?: any;
}
export interface WorkflowProperties {
	readonly accessEndpoint?: string;
	readonly changedTime?: string;
	readonly createdTime?: string;
	readonly definition?: any;
	readonly definitionLink?: ContentLink;
	readonly parameters?: WorkflowPropertiesParameters;
	readonly parametersLink?: ContentLink;
	readonly provisioningState?: "Moving" | "NotSpecified";
	readonly sku?: Sku;
	readonly state?: "Deleted" | "Disabled" | "Enabled" | "NotSpecified";
	readonly version?: string;
}
export interface WorkflowPropertiesParameters {
	readonly [key: string]: WorkflowParameter;
}
export interface WorkflowRunActionProperties {
	readonly code?: string;
	readonly endTime?: string;
	readonly error?: any;
	readonly inputsLink?: ContentLink;
	readonly outputsLink?: ContentLink;
	readonly startTime?: string;
	readonly status?:
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
		| "TimedOut";
	readonly trackingId?: string;
}
export interface WorkflowRunProperties {
	readonly code?: string;
	readonly correlationId?: string;
	readonly endTime?: string;
	readonly error?: any;
	readonly outputs?: WorkflowRunPropertiesOutputs;
	readonly startTime?: string;
	readonly status?:
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
		| "TimedOut";
	readonly trigger?: WorkflowRunTrigger;
	readonly workflow?: ResourceReference;
}
export interface WorkflowRunPropertiesOutputs {
	readonly [key: string]: WorkflowOutputParameter;
}
export interface WorkflowRunTrigger {
	readonly code?: string;
	readonly endTime?: string;
	readonly error?: any;
	readonly inputs?: any;
	readonly inputsLink?: ContentLink;
	readonly name?: string;
	readonly outputs?: any;
	readonly outputsLink?: ContentLink;
	readonly startTime?: string;
	readonly status?:
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
		| "TimedOut";
	readonly trackingId?: string;
}
export interface WorkflowSecretKeys {
	readonly primarySecretKey?: string;
	readonly secondarySecretKey?: string;
}
export interface WorkflowTriggerHistoryProperties {
	readonly code?: string;
	readonly endTime?: string;
	readonly error?: any;
	readonly fired?: boolean;
	readonly inputsLink?: ContentLink;
	readonly outputsLink?: ContentLink;
	readonly run?: ResourceReference;
	readonly startTime?: string;
	readonly status?:
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
		| "TimedOut";
	readonly trackingId?: string;
}
export interface WorkflowTriggerProperties {
	readonly changedTime?: string;
	readonly createdTime?: string;
	readonly lastExecutionTime?: string;
	readonly nextExecutionTime?: string;
	readonly provisioningState?: "Creating" | "NotSpecified" | "Succeeded";
	readonly recurrence?: WorkflowTriggerRecurrence;
	readonly state?: "Deleted" | "Disabled" | "Enabled" | "NotSpecified";
	readonly status?:
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
		| "TimedOut";
	readonly workflow?: ResourceReference;
}
export interface WorkflowTriggerRecurrence {
	readonly frequency?: "Day" | "Hour" | "Minute" | "Month" | "Second" | "Week";
	readonly interval?: number;
	readonly startTime?: string;
	readonly timeZone?: string;
}
export interface WorkflowVersionProperties {
	readonly accessEndpoint?: string;
	readonly changedTime?: string;
	readonly createdTime?: string;
	readonly definition?: any;
	readonly definitionLink?: ContentLink;
	readonly parameters?: WorkflowVersionPropertiesParameters;
	readonly parametersLink?: ContentLink;
	readonly sku?: Sku;
	readonly state?: "Deleted" | "Disabled" | "Enabled" | "NotSpecified";
	readonly version?: string;
}
export interface WorkflowVersionPropertiesParameters {
	readonly [key: string]: WorkflowParameter;
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
