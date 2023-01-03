import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class HTTPSHealthCheck
	extends GdmResource<HTTPSHealthCheckComponentInputs>
	implements HTTPSHealthCheckComponentOutputs
{
	constructor(entity: ADKEntity, options: HTTPSHealthCheckComponentInputs) {
		super(entity, options.name, "compute.beta.httpsHealthCheck", options);
	}
}
export interface HTTPSHealthCheckComponentOutputs {}
export interface HTTPSHealthCheckComponentInputs {
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
	HTTPSHealthCheck: HTTPSHealthCheck,
};
