import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class HttpsHealthCheck
	extends GdmResource<HttpsHealthCheckComponentInputs>
	implements HttpsHealthCheckComponentOutputs
{
	constructor(entity: ADKEntity, options: HttpsHealthCheckComponentInputs) {
		super(entity, options.name, "compute.beta.httpsHealthCheck", options);
	}
	public readonly creationTimestamp?: string;
	public readonly id?: string;
	public readonly selfLink?: string;
}
export interface HttpsHealthCheckComponentOutputs {
	readonly creationTimestamp?: string;
	readonly id?: string;
	readonly selfLink?: string;
}
export interface HttpsHealthCheckComponentInputs {
	readonly checkIntervalSec?: number;
	readonly description?: string;
	readonly healthyThreshold?: number;
	readonly host?: string;
	readonly kind?: string;
	readonly name: string;
	readonly port?: number;
	readonly requestPath?: string;
	readonly timeoutSec?: number;
	readonly unhealthyThreshold?: number;
}
export default {
	HttpsHealthCheck: HttpsHealthCheck,
};
