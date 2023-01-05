import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ProjectsLocationsNodes
	extends GdmResource<ProjectsLocationsNodesComponentInputs>
	implements ProjectsLocationsNodesComponentOutputs
{
	constructor(entity: ADKEntity, options: ProjectsLocationsNodesComponentInputs) {
		super(entity, options.name, "tpu.v1alpha1.ProjectsLocationsNodes", options);
	}
	public readonly apiVersion?: string;
	public readonly createTime?: string;
	public readonly healthDescription?: string;
	public readonly ipAddress?: string;
	public readonly networkEndpoints?: NetworkEndpoint[];
	public readonly port?: string;
	public readonly serviceAccount?: string;
	public readonly state?: string;
	public readonly symptoms?: Symptom[];
}
export interface ProjectsLocationsNodesComponentOutputs {
	readonly apiVersion?: string;
	readonly createTime?: string;
	readonly healthDescription?: string;
	readonly ipAddress?: string;
	readonly networkEndpoints?: NetworkEndpoint[];
	readonly port?: string;
	readonly serviceAccount?: string;
	readonly state?: string;
	readonly symptoms?: Symptom[];
}
export interface ProjectsLocationsNodesComponentInputs {
	readonly acceleratorType: string;
	readonly cidrBlock?: string;
	readonly description?: string;
	readonly health?: string;
	readonly labels?: { [P in string]: string };
	readonly name: string;
	readonly network?: string;
	readonly nodeId?: string;
	readonly parent: string;
	readonly requestId?: string;
	readonly schedulingConfig?: SchedulingConfig;
	readonly tensorflowVersion: string;
	readonly useServiceNetworking?: boolean;
}
export interface NetworkEndpoint {
	readonly ipAddress?: string;
	readonly port?: number;
}
export interface Node {
	readonly acceleratorType: string;
	readonly apiVersion?: string;
	readonly cidrBlock?: string;
	readonly createTime?: string;
	readonly description?: string;
	readonly health?: string;
	readonly healthDescription?: string;
	readonly ipAddress?: string;
	readonly labels?: { [P in string]: string };
	readonly name?: string;
	readonly network?: string;
	readonly networkEndpoints?: NetworkEndpoint[];
	readonly port?: string;
	readonly schedulingConfig?: SchedulingConfig;
	readonly serviceAccount?: string;
	readonly state?: string;
	readonly symptoms?: Symptom[];
	readonly tensorflowVersion: string;
	readonly useServiceNetworking?: boolean;
}
export interface SchedulingConfig {
	readonly preemptible?: boolean;
	readonly reserved?: boolean;
}
export interface Symptom {
	readonly createTime?: string;
	readonly details?: string;
	readonly symptomType?: string;
	readonly workerId?: string;
}
export default {
	ProjectsLocationsNodes: ProjectsLocationsNodes,
};
