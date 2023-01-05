import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class HTTPHealthCheck
	extends GdmResource<HTTPHealthCheckComponentInputs>
	implements HTTPHealthCheckComponentOutputs
{
	constructor(entity: ADKEntity, options: HTTPHealthCheckComponentInputs) {
		super(entity, options.name, "compute.beta.httpHealthCheck", options);
	}
}
export interface HTTPHealthCheckComponentOutputs {}
export interface HTTPHealthCheckComponentInputs {
	readonly host?: string;
	readonly port?: number;
	readonly portName?: string;
	readonly portSpecification?: string;
	readonly proxyHeader?: string;
	readonly requestPath?: string;
	readonly response?: string;
	readonly name: string;
}
export default {
	HTTPHealthCheck: HTTPHealthCheck,
};
