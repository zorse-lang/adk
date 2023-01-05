import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class HTTPSHealthCheck
	extends GdmResource<HTTPSHealthCheckComponentInputs>
	implements HTTPSHealthCheckComponentOutputs
{
	constructor(entity: ADKEntity, options: HTTPSHealthCheckComponentInputs) {
		super(entity, options.name, "compute.v1.httpsHealthCheck", options);
	}
}
export interface HTTPSHealthCheckComponentOutputs {}
export interface HTTPSHealthCheckComponentInputs {
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
	HTTPSHealthCheck: HTTPSHealthCheck,
};
