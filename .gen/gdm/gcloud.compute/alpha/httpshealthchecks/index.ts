import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class HttpsHealthChecks
	extends GdmResource<HttpsHealthChecksComponentInputs>
	implements HttpsHealthChecksComponentOutputs
{
	constructor(entity: ADKEntity, options: HttpsHealthChecksComponentInputs) {
		super(entity, options.name, "compute.alpha.HttpsHealthChecks", options);
	}
	public readonly creationTimestamp?: string | undefined;
	public readonly id?: string | undefined;
	public readonly selfLink?: string | undefined;
	public readonly selfLinkWithId?: string | undefined;
}
export interface HttpsHealthChecksComponentOutputs {
	readonly creationTimestamp?: string | undefined;
	readonly id?: string | undefined;
	readonly selfLink?: string | undefined;
	readonly selfLinkWithId?: string | undefined;
}
export interface HttpsHealthChecksComponentInputs {
	readonly checkIntervalSec?: number | undefined;
	readonly description?: string | undefined;
	readonly healthyThreshold?: number | undefined;
	readonly host?: string | undefined;
	readonly kind?: string | undefined;
	readonly name: string;
	readonly port?: number | undefined;
	readonly requestId?: string | undefined;
	readonly requestPath?: string | undefined;
	readonly timeoutSec?: number | undefined;
	readonly unhealthyThreshold?: number | undefined;
	readonly type: string;
}
export interface HttpsHealthCheck {
	readonly checkIntervalSec?: number | undefined;
	readonly creationTimestamp?: string | undefined;
	readonly description?: string | undefined;
	readonly healthyThreshold?: number | undefined;
	readonly host?: string | undefined;
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly name?: string | undefined;
	readonly port?: number | undefined;
	readonly requestPath?: string | undefined;
	readonly selfLink?: string | undefined;
	readonly selfLinkWithId?: string | undefined;
	readonly timeoutSec?: number | undefined;
	readonly unhealthyThreshold?: number | undefined;
}
export default {
	HttpsHealthChecks: HttpsHealthChecks,
};
