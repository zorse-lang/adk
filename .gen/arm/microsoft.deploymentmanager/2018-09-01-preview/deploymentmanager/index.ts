import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class artifactSources
	extends ArmResource<artifactSourcesComponentInputs>
	implements artifactSourcesComponentOutputs
{
	constructor(entity: ADKEntity, options: artifactSourcesComponentInputs) {
		super(entity, options.name, "Microsoft.DeploymentManager/artifactSources", "2018-09-01-preview", options);
	}
	public readonly apiVersion: "2018-09-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.DeploymentManager/artifactSources";
}
export interface artifactSourcesComponentOutputs {
	readonly apiVersion: "2018-09-01-preview";
	readonly id: string;
	readonly type: "Microsoft.DeploymentManager/artifactSources";
}
export interface artifactSourcesComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: ArtifactSourceProperties;
	readonly tags?: TrackedResourceTags;
}
export class rollouts extends ArmResource<rolloutsComponentInputs> implements rolloutsComponentOutputs {
	constructor(entity: ADKEntity, options: rolloutsComponentInputs) {
		super(entity, options.name, "Microsoft.DeploymentManager/rollouts", "2018-09-01-preview", options);
	}
	public readonly apiVersion: "2018-09-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.DeploymentManager/rollouts";
}
export interface rolloutsComponentOutputs {
	readonly apiVersion: "2018-09-01-preview";
	readonly id: string;
	readonly type: "Microsoft.DeploymentManager/rollouts";
}
export interface rolloutsComponentInputs {
	readonly identity: Identity;
	readonly location: string;
	readonly name: string;
	readonly properties: RolloutRequestPropertiesOrRolloutProperties;
	readonly tags?: TrackedResourceTags;
}
export class serviceTopologies
	extends ArmResource<serviceTopologiesComponentInputs>
	implements serviceTopologiesComponentOutputs
{
	constructor(entity: ADKEntity, options: serviceTopologiesComponentInputs) {
		super(entity, options.name, "Microsoft.DeploymentManager/serviceTopologies", "2018-09-01-preview", options);
	}
	public readonly apiVersion: "2018-09-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.DeploymentManager/serviceTopologies";
}
export interface serviceTopologiesComponentOutputs {
	readonly apiVersion: "2018-09-01-preview";
	readonly id: string;
	readonly type: "Microsoft.DeploymentManager/serviceTopologies";
}
export interface serviceTopologiesComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties: ServiceTopologyResourceProperties;
	readonly tags?: TrackedResourceTags;
}
export class serviceTopologies_services
	extends ArmResource<serviceTopologies_servicesComponentInputs>
	implements serviceTopologies_servicesComponentOutputs
{
	constructor(entity: ADKEntity, options: serviceTopologies_servicesComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.DeploymentManager/serviceTopologies/services",
			"2018-09-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2018-09-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.DeploymentManager/serviceTopologies/services";
}
export interface serviceTopologies_servicesComponentOutputs {
	readonly apiVersion: "2018-09-01-preview";
	readonly id: string;
	readonly type: "Microsoft.DeploymentManager/serviceTopologies/services";
}
export interface serviceTopologies_servicesComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties: ServiceResourceProperties;
	readonly tags?: TrackedResourceTags;
}
export class serviceTopologies_services_serviceUnits
	extends ArmResource<serviceTopologies_services_serviceUnitsComponentInputs>
	implements serviceTopologies_services_serviceUnitsComponentOutputs
{
	constructor(entity: ADKEntity, options: serviceTopologies_services_serviceUnitsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.DeploymentManager/serviceTopologies/services/serviceUnits",
			"2018-09-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2018-09-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.DeploymentManager/serviceTopologies/services/serviceUnits";
}
export interface serviceTopologies_services_serviceUnitsComponentOutputs {
	readonly apiVersion: "2018-09-01-preview";
	readonly id: string;
	readonly type: "Microsoft.DeploymentManager/serviceTopologies/services/serviceUnits";
}
export interface serviceTopologies_services_serviceUnitsComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties: ServiceUnitResourceProperties;
	readonly tags?: TrackedResourceTags;
}
export class steps extends ArmResource<stepsComponentInputs> implements stepsComponentOutputs {
	constructor(entity: ADKEntity, options: stepsComponentInputs) {
		super(entity, options.name, "Microsoft.DeploymentManager/steps", "2018-09-01-preview", options);
	}
	public readonly apiVersion: "2018-09-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.DeploymentManager/steps";
}
export interface stepsComponentOutputs {
	readonly apiVersion: "2018-09-01-preview";
	readonly id: string;
	readonly type: "Microsoft.DeploymentManager/steps";
}
export interface stepsComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties: StepProperties;
	readonly tags?: TrackedResourceTags;
}
export interface ArtifactSourceProperties {
	readonly artifactRoot?: string;
	readonly authentication: Authentication;
	readonly sourceType: string;
}
export interface Authentication {}
export interface CloudErrorBody {
	readonly code?: string;
	readonly details?: CloudErrorBody[];
	readonly message?: string;
	readonly target?: string;
}
export interface Identity {
	readonly identityIds: string[];
	readonly type: string;
}
export interface Message {
	readonly message?: string;
	readonly timeStamp?: string;
}
export interface PrePostStep {
	readonly stepId: string;
}
export interface ResourceOperation {
	readonly operationId?: string;
	readonly provisioningState?: string;
	readonly resourceName?: string;
	readonly resourceType?: string;
	readonly statusCode?: string;
	readonly statusMessage?: string;
}
export interface RolloutOperationInfo {
	readonly endTime?: string;
	readonly error?: CloudErrorBody;
	readonly retryAttempt?: number;
	readonly skipSucceededOnRetry?: boolean;
	readonly startTime?: string;
}
export interface RolloutRequestPropertiesOrRolloutProperties {
	readonly artifactSourceId?: string;
	readonly buildVersion: string;
	readonly operationInfo?: RolloutOperationInfo;
	readonly services?: Service[];
	readonly status?: string;
	readonly stepGroups: Step[];
	readonly targetServiceTopologyId: string;
	readonly totalRetryAttempts?: number;
}
export interface RolloutStep {
	readonly messages?: Message[];
	readonly name: string;
	readonly operationInfo?: StepOperationInfo;
	readonly resourceOperations?: ResourceOperation[];
	readonly status?: string;
	readonly stepGroup?: string;
}
export interface SasProperties {
	readonly sasUri: string;
}
export interface Service {
	readonly name?: string;
	readonly serviceUnits?: ServiceUnit[];
	readonly targetLocation: string;
	readonly targetSubscriptionId: string;
}
export interface ServiceResourceProperties {
	readonly targetLocation: string;
	readonly targetSubscriptionId: string;
}
export interface ServiceTopologyResourceProperties {
	readonly artifactSourceId?: string;
}
export interface ServiceUnit {
	readonly artifacts?: ServiceUnitArtifacts;
	readonly deploymentMode: "Complete";
	readonly name?: string;
	readonly steps?: RolloutStep[];
	readonly targetResourceGroup: string;
}
export interface ServiceUnitArtifacts {
	readonly parametersArtifactSourceRelativePath?: string;
	readonly parametersUri?: string;
	readonly templateArtifactSourceRelativePath?: string;
	readonly templateUri?: string;
}
export interface ServiceUnitResourceProperties {
	readonly artifacts?: ServiceUnitArtifacts;
	readonly deploymentMode: "Complete";
	readonly targetResourceGroup: string;
}
export interface Step {
	readonly dependsOnStepGroups?: string[];
	readonly deploymentTargetId: string;
	readonly name: string;
	readonly postDeploymentSteps?: PrePostStep[];
	readonly preDeploymentSteps?: PrePostStep[];
}
export interface StepOperationInfo {
	readonly correlationId?: string;
	readonly deploymentName?: string;
	readonly endTime?: string;
	readonly error?: CloudErrorBody;
	readonly lastUpdatedTime?: string;
	readonly startTime?: string;
}
export interface StepProperties {}
export interface TrackedResourceTags {
	readonly [key: string]: string;
}
export interface WaitStepAttributes {
	readonly duration: string;
}
export default {
	artifactSources: artifactSources,
	rollouts: rollouts,
	serviceTopologies: serviceTopologies,
	"serviceTopologies/services": serviceTopologies_services,
	"serviceTopologies/services/serviceUnits": serviceTopologies_services_serviceUnits,
	steps: steps,
};
