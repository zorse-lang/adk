import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ProjectsRegionsAutoscalingPolicies
	extends GdmResource<ProjectsRegionsAutoscalingPoliciesComponentInputs>
	implements ProjectsRegionsAutoscalingPoliciesComponentOutputs
{
	constructor(entity: ADKEntity, options: ProjectsRegionsAutoscalingPoliciesComponentInputs) {
		super(entity, options.name, "dataproc.v1.ProjectsRegionsAutoscalingPolicies", options);
	}
}
export interface ProjectsRegionsAutoscalingPoliciesComponentOutputs {}
export interface ProjectsRegionsAutoscalingPoliciesComponentInputs {
	readonly basicAlgorithm?: BasicAutoscalingAlgorithm;
	readonly id: string;
	readonly labels?: { [P in string]: string };
	readonly name: string;
	readonly parent: string;
	readonly secondaryWorkerConfig?: InstanceGroupAutoscalingPolicyConfig;
	readonly workerConfig: InstanceGroupAutoscalingPolicyConfig;
}
export interface AutoscalingPolicy {
	readonly basicAlgorithm?: BasicAutoscalingAlgorithm;
	readonly id: string;
	readonly labels?: { [P in string]: string };
	readonly name?: string;
	readonly secondaryWorkerConfig?: InstanceGroupAutoscalingPolicyConfig;
	readonly workerConfig: InstanceGroupAutoscalingPolicyConfig;
}
export interface BasicAutoscalingAlgorithm {
	readonly cooldownPeriod?: string;
	readonly sparkStandaloneConfig?: SparkStandaloneAutoscalingConfig;
	readonly yarnConfig?: BasicYarnAutoscalingConfig;
}
export interface BasicYarnAutoscalingConfig {
	readonly gracefulDecommissionTimeout: string;
	readonly scaleDownFactor: number;
	readonly scaleDownMinWorkerFraction?: number;
	readonly scaleUpFactor: number;
	readonly scaleUpMinWorkerFraction?: number;
}
export interface InstanceGroupAutoscalingPolicyConfig {
	readonly maxInstances: number;
	readonly minInstances?: number;
	readonly weight?: number;
}
export interface SparkStandaloneAutoscalingConfig {
	readonly gracefulDecommissionTimeout: string;
	readonly scaleDownFactor: number;
	readonly scaleDownMinWorkerFraction?: number;
	readonly scaleUpFactor: number;
	readonly scaleUpMinWorkerFraction?: number;
}
export default {
	ProjectsRegionsAutoscalingPolicies: ProjectsRegionsAutoscalingPolicies,
};
