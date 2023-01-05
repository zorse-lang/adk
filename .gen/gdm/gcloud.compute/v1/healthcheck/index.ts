import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class HealthCheck extends GdmResource<HealthCheckComponentInputs> implements HealthCheckComponentOutputs {
	constructor(entity: ADKEntity, options: HealthCheckComponentInputs) {
		super(entity, options.name, "compute.v1.healthCheck", options);
	}
	public readonly creationTimestamp?: string;
	public readonly id?: string;
	public readonly region?: string;
	public readonly selfLink?: string;
}
export interface HealthCheckComponentOutputs {
	readonly creationTimestamp?: string;
	readonly id?: string;
	readonly region?: string;
	readonly selfLink?: string;
}
export interface HealthCheckComponentInputs {
	readonly checkIntervalSec?: number;
	readonly description?: string;
	readonly grpcHealthCheck?: GRPCHealthCheck;
	readonly healthyThreshold?: number;
	readonly http2HealthCheck?: HTTP2HealthCheck;
	readonly httpHealthCheck?: HTTPHealthCheck;
	readonly httpsHealthCheck?: HTTPSHealthCheck;
	readonly kind?: string;
	readonly logConfig?: HealthCheckLogConfig;
	readonly name: string;
	readonly sslHealthCheck?: SSLHealthCheck;
	readonly tcpHealthCheck?: TCPHealthCheck;
	readonly timeoutSec?: number;
	readonly unhealthyThreshold?: number;
}
export interface GRPCHealthCheck {
	readonly grpcServiceName?: string;
	readonly port?: number;
	readonly portName?: string;
	readonly portSpecification?: string;
}
export interface HealthCheckLogConfig {
	readonly enable?: boolean;
}
export interface HTTP2HealthCheck {
	readonly host?: string;
	readonly port?: number;
	readonly portName?: string;
	readonly portSpecification?: string;
	readonly proxyHeader?: string;
	readonly requestPath?: string;
	readonly response?: string;
}
export interface HTTPHealthCheck {
	readonly host?: string;
	readonly port?: number;
	readonly portName?: string;
	readonly portSpecification?: string;
	readonly proxyHeader?: string;
	readonly requestPath?: string;
	readonly response?: string;
}
export interface HTTPSHealthCheck {
	readonly host?: string;
	readonly port?: number;
	readonly portName?: string;
	readonly portSpecification?: string;
	readonly proxyHeader?: string;
	readonly requestPath?: string;
	readonly response?: string;
}
export interface SSLHealthCheck {
	readonly port?: number;
	readonly portName?: string;
	readonly portSpecification?: string;
	readonly proxyHeader?: string;
	readonly request?: string;
	readonly response?: string;
}
export interface TCPHealthCheck {
	readonly port?: number;
	readonly portName?: string;
	readonly portSpecification?: string;
	readonly proxyHeader?: string;
	readonly request?: string;
	readonly response?: string;
}
export default {
	HealthCheck: HealthCheck,
};
