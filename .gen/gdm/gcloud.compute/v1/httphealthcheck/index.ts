import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class HTTPHealthCheck
	extends GdmResource<HTTPHealthCheckComponentInputs>
	implements HTTPHealthCheckComponentOutputs
{
	constructor(entity: ADKEntity, options: HTTPHealthCheckComponentInputs) {
		super(entity, options.name, "compute.v1.httpHealthCheck", options);
	}
}
export interface HTTPHealthCheckComponentOutputs {}
export interface HTTPHealthCheckComponentInputs {
	readonly host?: string | undefined;
	readonly port?: number | undefined;
	readonly portName?: string | undefined;
	readonly portSpecification?: string | undefined;
	readonly proxyHeader?: string | undefined;
	readonly requestPath?: string | undefined;
	readonly response?: string | undefined;
	readonly type: string;
	readonly name: string;
}
export default {
	HTTPHealthCheck: HTTPHealthCheck,
};
