import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class AppsServicesVersionsInstances
	extends GdmResource<AppsServicesVersionsInstancesComponentInputs>
	implements AppsServicesVersionsInstancesComponentOutputs
{
	constructor(entity: ADKEntity, options: AppsServicesVersionsInstancesComponentInputs) {
		super(entity, options.name, "appengine.v1.AppsServicesVersionsInstances", options);
	}
	public readonly appEngineRelease?: string;
	public readonly availability?: string;
	public readonly averageLatency?: number;
	public readonly errors?: number;
	public readonly id?: string;
	public readonly memoryUsage?: string;
	public readonly qps?: number;
	public readonly requests?: number;
	public readonly startTime?: string;
	public readonly vmDebugEnabled?: boolean;
	public readonly vmId?: string;
	public readonly vmIp?: string;
	public readonly vmLiveness?: string;
	public readonly vmName?: string;
	public readonly vmStatus?: string;
	public readonly vmZoneName?: string;
}
export interface AppsServicesVersionsInstancesComponentOutputs {
	readonly appEngineRelease?: string;
	readonly availability?: string;
	readonly averageLatency?: number;
	readonly errors?: number;
	readonly id?: string;
	readonly memoryUsage?: string;
	readonly qps?: number;
	readonly requests?: number;
	readonly startTime?: string;
	readonly vmDebugEnabled?: boolean;
	readonly vmId?: string;
	readonly vmIp?: string;
	readonly vmLiveness?: string;
	readonly vmName?: string;
	readonly vmStatus?: string;
	readonly vmZoneName?: string;
}
export interface AppsServicesVersionsInstancesComponentInputs {
	readonly name: string;
}
export interface Instance {
	readonly appEngineRelease?: string;
	readonly availability?: string;
	readonly averageLatency?: number;
	readonly errors?: number;
	readonly id?: string;
	readonly memoryUsage?: string;
	readonly name?: string;
	readonly qps?: number;
	readonly requests?: number;
	readonly startTime?: string;
	readonly vmDebugEnabled?: boolean;
	readonly vmId?: string;
	readonly vmIp?: string;
	readonly vmLiveness?: string;
	readonly vmName?: string;
	readonly vmStatus?: string;
	readonly vmZoneName?: string;
}
export default {
	AppsServicesVersionsInstances: AppsServicesVersionsInstances,
};
