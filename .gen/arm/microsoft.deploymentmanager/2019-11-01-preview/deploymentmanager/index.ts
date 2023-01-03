import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class artifactSources
	extends ArmResource<artifactSourcesComponentInputs>
	implements artifactSourcesComponentOutputs
{
	constructor(entity: ADKEntity, options: artifactSourcesComponentInputs) {
		super(entity, options.name, "Microsoft.DeploymentManager/artifactSources", "2019-11-01-preview", options);
	}
	public readonly apiVersion: "2019-11-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.DeploymentManager/artifactSources";
}
export interface artifactSourcesComponentOutputs {
	readonly apiVersion: "2019-11-01-preview";
	readonly id: string;
	readonly type: "Microsoft.DeploymentManager/artifactSources";
}
export interface artifactSourcesComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: ArtifactSourceProperties | undefined;
	readonly tags?: TrackedResourceTags | undefined;
}
export class rollouts extends ArmResource<rolloutsComponentInputs> implements rolloutsComponentOutputs {
	constructor(entity: ADKEntity, options: rolloutsComponentInputs) {
		super(entity, options.name, "Microsoft.DeploymentManager/rollouts", "2019-11-01-preview", options);
	}
	public readonly apiVersion: "2019-11-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.DeploymentManager/rollouts";
}
export interface rolloutsComponentOutputs {
	readonly apiVersion: "2019-11-01-preview";
	readonly id: string;
	readonly type: "Microsoft.DeploymentManager/rollouts";
}
export interface rolloutsComponentInputs {
	readonly identity: Identity;
	readonly location: string;
	readonly name: string;
	readonly properties: RolloutRequestPropertiesOrRolloutProperties;
	readonly tags?: TrackedResourceTags | undefined;
}
export class serviceTopologies
	extends ArmResource<serviceTopologiesComponentInputs>
	implements serviceTopologiesComponentOutputs
{
	constructor(entity: ADKEntity, options: serviceTopologiesComponentInputs) {
		super(entity, options.name, "Microsoft.DeploymentManager/serviceTopologies", "2019-11-01-preview", options);
	}
	public readonly apiVersion: "2019-11-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.DeploymentManager/serviceTopologies";
}
export interface serviceTopologiesComponentOutputs {
	readonly apiVersion: "2019-11-01-preview";
	readonly id: string;
	readonly type: "Microsoft.DeploymentManager/serviceTopologies";
}
export interface serviceTopologiesComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties: ServiceTopologyResourceProperties;
	readonly tags?: TrackedResourceTags | undefined;
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
			"2019-11-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2019-11-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.DeploymentManager/serviceTopologies/services";
}
export interface serviceTopologies_servicesComponentOutputs {
	readonly apiVersion: "2019-11-01-preview";
	readonly id: string;
	readonly type: "Microsoft.DeploymentManager/serviceTopologies/services";
}
export interface serviceTopologies_servicesComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties: ServiceResourceProperties;
	readonly tags?: TrackedResourceTags | undefined;
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
			"2019-11-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2019-11-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.DeploymentManager/serviceTopologies/services/serviceUnits";
}
export interface serviceTopologies_services_serviceUnitsComponentOutputs {
	readonly apiVersion: "2019-11-01-preview";
	readonly id: string;
	readonly type: "Microsoft.DeploymentManager/serviceTopologies/services/serviceUnits";
}
export interface serviceTopologies_services_serviceUnitsComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties: ServiceUnitResourceProperties;
	readonly tags?: TrackedResourceTags | undefined;
}
export class steps extends ArmResource<stepsComponentInputs> implements stepsComponentOutputs {
	constructor(entity: ADKEntity, options: stepsComponentInputs) {
		super(entity, options.name, "Microsoft.DeploymentManager/steps", "2019-11-01-preview", options);
	}
	public readonly apiVersion: "2019-11-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.DeploymentManager/steps";
}
export interface stepsComponentOutputs {
	readonly apiVersion: "2019-11-01-preview";
	readonly id: string;
	readonly type: "Microsoft.DeploymentManager/steps";
}
export interface stepsComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties: StepProperties;
	readonly tags?: TrackedResourceTags | undefined;
}
export interface ArtifactSourceProperties {
	readonly artifactRoot?: string | undefined;
	readonly authentication: Authentication;
	readonly sourceType: string;
}
export interface Authentication {}
export interface CloudErrorBody {
	readonly code?: string | undefined;
	readonly details?: CloudErrorBody[] | undefined;
	readonly message?: string | undefined;
	readonly target?: string | undefined;
}
export interface HealthCheckStepAttributes {
	readonly healthyStateDuration: string;
	readonly maxElasticDuration?: string | undefined;
	readonly waitDuration?: string | undefined;
}
export interface Identity {
	readonly identityIds: string[];
	readonly type: string;
}
export interface Message {
	readonly message?: string | undefined;
	readonly timeStamp?: string | undefined;
}
export interface PrePostStep {
	readonly stepId: string;
}
export interface ResourceOperation {
	readonly operationId?: string | undefined;
	readonly provisioningState?: string | undefined;
	readonly resourceName?: string | undefined;
	readonly resourceType?: string | undefined;
	readonly statusCode?: string | undefined;
	readonly statusMessage?: string | undefined;
}
export interface RestHealthCheck {
	readonly name: string;
	readonly request: RestRequest;
	readonly response?: RestResponse | undefined;
}
export interface RestParameters {
	readonly healthChecks: RestHealthCheck[];
}
export interface RestRequest {
	readonly authentication: RestRequestAuthentication;
	readonly method: "GET";
	readonly uri: string;
}
export interface RestRequestAuthentication {}
export interface RestResponse {
	readonly regex?: RestResponseRegex | undefined;
	readonly successStatusCodes?: string[] | undefined;
}
export interface RestResponseRegex {
	readonly matches?: string[] | undefined;
	readonly matchQuantifier?: "All" | undefined;
}
export interface RolloutOperationInfo {
	readonly endTime?: string | undefined;
	readonly error?: CloudErrorBody | undefined;
	readonly retryAttempt?: number | undefined;
	readonly skipSucceededOnRetry?: boolean | undefined;
	readonly startTime?: string | undefined;
}
export interface RolloutRequestPropertiesOrRolloutProperties {
	readonly artifactSourceId?: string | undefined;
	readonly buildVersion: string;
	readonly operationInfo?: RolloutOperationInfo | undefined;
	readonly services?: Service[] | undefined;
	readonly status?: string | undefined;
	readonly stepGroups: StepGroup[];
	readonly targetServiceTopologyId: string;
	readonly totalRetryAttempts?: number | undefined;
}
export interface RolloutStep {
	readonly messages?: Message[] | undefined;
	readonly name: string;
	readonly operationInfo?: StepOperationInfo | undefined;
	readonly resourceOperations?: ResourceOperation[] | undefined;
	readonly status?: string | undefined;
	readonly stepGroup?: string | undefined;
}
export interface SasProperties {
	readonly sasUri: string;
}
export interface Service {
	readonly name?: string | undefined;
	readonly serviceUnits?: ServiceUnit[] | undefined;
	readonly targetLocation: string;
	readonly targetSubscriptionId: string;
}
export interface ServiceResourceProperties {
	readonly targetLocation: string;
	readonly targetSubscriptionId: string;
}
export interface ServiceTopologyResourceProperties {
	readonly artifactSourceId?: string | undefined;
}
export interface ServiceUnit {
	readonly artifacts?: ServiceUnitArtifacts | undefined;
	readonly deploymentMode: "Complete";
	readonly name?: string | undefined;
	readonly steps?: RolloutStep[] | undefined;
	readonly targetResourceGroup: string;
}
export interface ServiceUnitArtifacts {
	readonly parametersArtifactSourceRelativePath?: string | undefined;
	readonly parametersUri?: string | undefined;
	readonly templateArtifactSourceRelativePath?: string | undefined;
	readonly templateUri?: string | undefined;
}
export interface ServiceUnitResourceProperties {
	readonly artifacts?: ServiceUnitArtifacts | undefined;
	readonly deploymentMode: "Complete";
	readonly targetResourceGroup: string;
}
export interface StepGroup {
	readonly dependsOnStepGroups?: string[] | undefined;
	readonly deploymentTargetId: string;
	readonly name: string;
	readonly postDeploymentSteps?: PrePostStep[] | undefined;
	readonly preDeploymentSteps?: PrePostStep[] | undefined;
}
export interface StepOperationInfo {
	readonly correlationId?: string | undefined;
	readonly deploymentName?: string | undefined;
	readonly endTime?: string | undefined;
	readonly error?: CloudErrorBody | undefined;
	readonly lastUpdatedTime?: string | undefined;
	readonly startTime?: string | undefined;
}
export interface StepProperties {}
export interface TrackedResourceTags {
	readonly "[ key: string ]"?: string | undefined;
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
