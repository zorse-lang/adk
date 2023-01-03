import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ProjectsLocationsAutoscalingPolicies
	extends GdmResource<ProjectsLocationsAutoscalingPoliciesComponentInputs>
	implements ProjectsLocationsAutoscalingPoliciesComponentOutputs
{
	constructor(entity: ADKEntity, options: ProjectsLocationsAutoscalingPoliciesComponentInputs) {
		super(entity, options.name, "dataproc.v1.ProjectsLocationsAutoscalingPolicies", options);
	}
}
export interface ProjectsLocationsAutoscalingPoliciesComponentOutputs {}
export interface ProjectsLocationsAutoscalingPoliciesComponentInputs {
	readonly basicAlgorithm?: BasicAutoscalingAlgorithm | undefined;
	readonly id: string;
	readonly labels?: { [P in string]: string } | undefined;
	readonly name: string;
	readonly parent: string;
	readonly secondaryWorkerConfig?: InstanceGroupAutoscalingPolicyConfig | undefined;
	readonly workerConfig: InstanceGroupAutoscalingPolicyConfig;
	readonly type: string;
}
export interface AutoscalingPolicy {
	readonly basicAlgorithm?: BasicAutoscalingAlgorithm | undefined;
	readonly id: string;
	readonly labels?: { [P in string]: string } | undefined;
	readonly name?: string | undefined;
	readonly secondaryWorkerConfig?: InstanceGroupAutoscalingPolicyConfig | undefined;
	readonly workerConfig: InstanceGroupAutoscalingPolicyConfig;
}
export interface BasicAutoscalingAlgorithm {
	readonly cooldownPeriod?: string | undefined;
	readonly sparkStandaloneConfig?: SparkStandaloneAutoscalingConfig | undefined;
	readonly yarnConfig?: BasicYarnAutoscalingConfig | undefined;
}
export interface BasicYarnAutoscalingConfig {
	readonly gracefulDecommissionTimeout: string;
	readonly scaleDownFactor: number;
	readonly scaleDownMinWorkerFraction?: number | undefined;
	readonly scaleUpFactor: number;
	readonly scaleUpMinWorkerFraction?: number | undefined;
}
export interface InstanceGroupAutoscalingPolicyConfig {
	readonly maxInstances: number;
	readonly minInstances?: number | undefined;
	readonly weight?: number | undefined;
}
export interface SparkStandaloneAutoscalingConfig {
	readonly gracefulDecommissionTimeout: string;
	readonly scaleDownFactor: number;
	readonly scaleDownMinWorkerFraction?: number | undefined;
	readonly scaleUpFactor: number;
	readonly scaleUpMinWorkerFraction?: number | undefined;
}
export default {
	ProjectsLocationsAutoscalingPolicies: ProjectsLocationsAutoscalingPolicies,
};
