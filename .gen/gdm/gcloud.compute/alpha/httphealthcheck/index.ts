import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class HttpHealthCheck
	extends GdmResource<HttpHealthCheckComponentInputs>
	implements HttpHealthCheckComponentOutputs
{
	constructor(entity: ADKEntity, options: HttpHealthCheckComponentInputs) {
		super(entity, options.name, "compute.alpha.httpHealthCheck", options);
	}
	public readonly creationTimestamp?: string;
	public readonly id?: string;
	public readonly kind?: string;
	public readonly selfLink?: string;
	public readonly selfLinkWithId?: string;
}
export interface HttpHealthCheckComponentOutputs {
	readonly creationTimestamp?: string;
	readonly id?: string;
	readonly kind?: string;
	readonly selfLink?: string;
	readonly selfLinkWithId?: string;
}
export interface HttpHealthCheckComponentInputs {
	readonly checkIntervalSec?: number;
	readonly description?: string;
	readonly healthyThreshold?: number;
	readonly host?: string;
	readonly name: string;
	readonly port?: number;
	readonly requestPath?: string;
	readonly timeoutSec?: number;
	readonly unhealthyThreshold?: number;
}
export default {
	HttpHealthCheck: HttpHealthCheck,
};
