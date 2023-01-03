import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ProjectsLocationsNodes
	extends GdmResource<ProjectsLocationsNodesComponentInputs>
	implements ProjectsLocationsNodesComponentOutputs
{
	constructor(entity: ADKEntity, options: ProjectsLocationsNodesComponentInputs) {
		super(entity, options.name, "tpu.v1alpha1.ProjectsLocationsNodes", options);
	}
	public readonly apiVersion?: string | undefined;
	public readonly createTime?: string | undefined;
	public readonly healthDescription?: string | undefined;
	public readonly ipAddress?: string | undefined;
	public readonly networkEndpoints?: NetworkEndpoint[] | undefined;
	public readonly port?: string | undefined;
	public readonly serviceAccount?: string | undefined;
	public readonly state?: string | undefined;
	public readonly symptoms?: Symptom[] | undefined;
}
export interface ProjectsLocationsNodesComponentOutputs {
	readonly apiVersion?: string | undefined;
	readonly createTime?: string | undefined;
	readonly healthDescription?: string | undefined;
	readonly ipAddress?: string | undefined;
	readonly networkEndpoints?: NetworkEndpoint[] | undefined;
	readonly port?: string | undefined;
	readonly serviceAccount?: string | undefined;
	readonly state?: string | undefined;
	readonly symptoms?: Symptom[] | undefined;
}
export interface ProjectsLocationsNodesComponentInputs {
	readonly acceleratorType: string;
	readonly cidrBlock?: string | undefined;
	readonly description?: string | undefined;
	readonly health?: string | undefined;
	readonly labels?: { [P in string]: string } | undefined;
	readonly name: string;
	readonly network?: string | undefined;
	readonly nodeId?: string | undefined;
	readonly parent: string;
	readonly requestId?: string | undefined;
	readonly schedulingConfig?: SchedulingConfig | undefined;
	readonly tensorflowVersion: string;
	readonly useServiceNetworking?: boolean | undefined;
	readonly type: string;
}
export interface NetworkEndpoint {
	readonly ipAddress?: string | undefined;
	readonly port?: number | undefined;
}
export interface Node {
	readonly acceleratorType: string;
	readonly apiVersion?: string | undefined;
	readonly cidrBlock?: string | undefined;
	readonly createTime?: string | undefined;
	readonly description?: string | undefined;
	readonly health?: string | undefined;
	readonly healthDescription?: string | undefined;
	readonly ipAddress?: string | undefined;
	readonly labels?: { [P in string]: string } | undefined;
	readonly name?: string | undefined;
	readonly network?: string | undefined;
	readonly networkEndpoints?: NetworkEndpoint[] | undefined;
	readonly port?: string | undefined;
	readonly schedulingConfig?: SchedulingConfig | undefined;
	readonly serviceAccount?: string | undefined;
	readonly state?: string | undefined;
	readonly symptoms?: Symptom[] | undefined;
	readonly tensorflowVersion: string;
	readonly useServiceNetworking?: boolean | undefined;
}
export interface SchedulingConfig {
	readonly preemptible?: boolean | undefined;
	readonly reserved?: boolean | undefined;
}
export interface Symptom {
	readonly createTime?: string | undefined;
	readonly details?: string | undefined;
	readonly symptomType?: string | undefined;
	readonly workerId?: string | undefined;
}
export default {
	ProjectsLocationsNodes: ProjectsLocationsNodes,
};
