import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class HttpHealthChecks
	extends GdmResource<HttpHealthChecksComponentInputs>
	implements HttpHealthChecksComponentOutputs
{
	constructor(entity: ADKEntity, options: HttpHealthChecksComponentInputs) {
		super(entity, options.name, "compute.v1.HttpHealthChecks", options);
	}
	public readonly creationTimestamp?: string;
	public readonly id?: string;
	public readonly kind?: string;
	public readonly selfLink?: string;
}
export interface HttpHealthChecksComponentOutputs {
	readonly creationTimestamp?: string;
	readonly id?: string;
	readonly kind?: string;
	readonly selfLink?: string;
}
export interface HttpHealthChecksComponentInputs {
	readonly checkIntervalSec?: number;
	readonly description?: string;
	readonly healthyThreshold?: number;
	readonly host?: string;
	readonly name: string;
	readonly port?: number;
	readonly requestId?: string;
	readonly requestPath?: string;
	readonly timeoutSec?: number;
	readonly unhealthyThreshold?: number;
}
export interface HttpHealthCheck {
	readonly checkIntervalSec?: number;
	readonly creationTimestamp?: string;
	readonly description?: string;
	readonly healthyThreshold?: number;
	readonly host?: string;
	readonly id?: string;
	readonly kind?: string;
	readonly name?: string;
	readonly port?: number;
	readonly requestPath?: string;
	readonly selfLink?: string;
	readonly timeoutSec?: number;
	readonly unhealthyThreshold?: number;
}
export default {
	HttpHealthChecks: HttpHealthChecks,
};
