import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class HttpsHealthChecks
	extends GdmResource<HttpsHealthChecksComponentInputs>
	implements HttpsHealthChecksComponentOutputs
{
	constructor(entity: ADKEntity, options: HttpsHealthChecksComponentInputs) {
		super(entity, options.name, "compute.v1.HttpsHealthChecks", options);
	}
	public readonly creationTimestamp?: string;
	public readonly id?: string;
	public readonly selfLink?: string;
}
export interface HttpsHealthChecksComponentOutputs {
	readonly creationTimestamp?: string;
	readonly id?: string;
	readonly selfLink?: string;
}
export interface HttpsHealthChecksComponentInputs {
	readonly checkIntervalSec?: number;
	readonly description?: string;
	readonly healthyThreshold?: number;
	readonly host?: string;
	readonly kind?: string;
	readonly name: string;
	readonly port?: number;
	readonly requestId?: string;
	readonly requestPath?: string;
	readonly timeoutSec?: number;
	readonly unhealthyThreshold?: number;
}
export interface HttpsHealthCheck {
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
	HttpsHealthChecks: HttpsHealthChecks,
};
