import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class AppsServicesVersionsInstances
	extends GdmResource<AppsServicesVersionsInstancesComponentInputs>
	implements AppsServicesVersionsInstancesComponentOutputs
{
	constructor(entity: ADKEntity, options: AppsServicesVersionsInstancesComponentInputs) {
		super(entity, options.name, "appengine.v1.AppsServicesVersionsInstances", options);
	}
	public readonly appEngineRelease?: string | undefined;
	public readonly availability?: string | undefined;
	public readonly averageLatency?: number | undefined;
	public readonly errors?: number | undefined;
	public readonly id?: string | undefined;
	public readonly memoryUsage?: string | undefined;
	public readonly qps?: number | undefined;
	public readonly requests?: number | undefined;
	public readonly startTime?: string | undefined;
	public readonly vmDebugEnabled?: boolean | undefined;
	public readonly vmId?: string | undefined;
	public readonly vmIp?: string | undefined;
	public readonly vmLiveness?: string | undefined;
	public readonly vmName?: string | undefined;
	public readonly vmStatus?: string | undefined;
	public readonly vmZoneName?: string | undefined;
}
export interface AppsServicesVersionsInstancesComponentOutputs {
	readonly appEngineRelease?: string | undefined;
	readonly availability?: string | undefined;
	readonly averageLatency?: number | undefined;
	readonly errors?: number | undefined;
	readonly id?: string | undefined;
	readonly memoryUsage?: string | undefined;
	readonly qps?: number | undefined;
	readonly requests?: number | undefined;
	readonly startTime?: string | undefined;
	readonly vmDebugEnabled?: boolean | undefined;
	readonly vmId?: string | undefined;
	readonly vmIp?: string | undefined;
	readonly vmLiveness?: string | undefined;
	readonly vmName?: string | undefined;
	readonly vmStatus?: string | undefined;
	readonly vmZoneName?: string | undefined;
}
export interface AppsServicesVersionsInstancesComponentInputs {
	readonly name: string;
	readonly type: string;
}
export interface Instance {
	readonly appEngineRelease?: string | undefined;
	readonly availability?: string | undefined;
	readonly averageLatency?: number | undefined;
	readonly errors?: number | undefined;
	readonly id?: string | undefined;
	readonly memoryUsage?: string | undefined;
	readonly name?: string | undefined;
	readonly qps?: number | undefined;
	readonly requests?: number | undefined;
	readonly startTime?: string | undefined;
	readonly vmDebugEnabled?: boolean | undefined;
	readonly vmId?: string | undefined;
	readonly vmIp?: string | undefined;
	readonly vmLiveness?: string | undefined;
	readonly vmName?: string | undefined;
	readonly vmStatus?: string | undefined;
	readonly vmZoneName?: string | undefined;
}
export default {
	AppsServicesVersionsInstances: AppsServicesVersionsInstances,
};
