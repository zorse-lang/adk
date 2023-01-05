import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class HttpsHealthChecks
	extends GdmResource<HttpsHealthChecksComponentInputs>
	implements HttpsHealthChecksComponentOutputs
{
	constructor(entity: ADKEntity, options: HttpsHealthChecksComponentInputs) {
		super(entity, options.name, "compute.alpha.HttpsHealthChecks", options);
	}
	public readonly creationTimestamp?: string;
	public readonly id?: string;
	public readonly selfLink?: string;
	public readonly selfLinkWithId?: string;
}
export interface HttpsHealthChecksComponentOutputs {
	readonly creationTimestamp?: string;
	readonly id?: string;
	readonly selfLink?: string;
	readonly selfLinkWithId?: string;
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
	readonly selfLinkWithId?: string;
	readonly timeoutSec?: number;
	readonly unhealthyThreshold?: number;
}
export default {
	HttpsHealthChecks: HttpsHealthChecks,
};
