import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class HealthChecks extends GdmResource<HealthChecksComponentInputs> implements HealthChecksComponentOutputs {
	constructor(entity: ADKEntity, options: HealthChecksComponentInputs) {
		super(entity, options.name, "compute.alpha.HealthChecks", options);
	}
	public readonly creationTimestamp?: string;
	public readonly id?: string;
	public readonly region?: string;
	public readonly selfLink?: string;
	public readonly selfLinkWithId?: string;
}
export interface HealthChecksComponentOutputs {
	readonly creationTimestamp?: string;
	readonly id?: string;
	readonly region?: string;
	readonly selfLink?: string;
	readonly selfLinkWithId?: string;
}
export interface HealthChecksComponentInputs {
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
	readonly requestId?: string;
	readonly sslHealthCheck?: SSLHealthCheck;
	readonly tcpHealthCheck?: TCPHealthCheck;
	readonly timeoutSec?: number;
	readonly udpHealthCheck?: UDPHealthCheck;
	readonly unhealthyThreshold?: number;
}
export interface GRPCHealthCheck {
	readonly grpcServiceName?: string;
	readonly port?: number;
	readonly portName?: string;
	readonly portSpecification?: string;
}
export interface HealthCheck {
	readonly checkIntervalSec?: number;
	readonly creationTimestamp?: string;
	readonly description?: string;
	readonly grpcHealthCheck?: GRPCHealthCheck;
	readonly healthyThreshold?: number;
	readonly http2HealthCheck?: HTTP2HealthCheck;
	readonly httpHealthCheck?: HTTPHealthCheck;
	readonly httpsHealthCheck?: HTTPSHealthCheck;
	readonly id?: string;
	readonly kind?: string;
	readonly logConfig?: HealthCheckLogConfig;
	readonly name?: string;
	readonly region?: string;
	readonly selfLink?: string;
	readonly selfLinkWithId?: string;
	readonly sslHealthCheck?: SSLHealthCheck;
	readonly tcpHealthCheck?: TCPHealthCheck;
	readonly timeoutSec?: number;
	readonly type?: string;
	readonly udpHealthCheck?: UDPHealthCheck;
	readonly unhealthyThreshold?: number;
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
	readonly weightReportMode?: string;
}
export interface HTTPHealthCheck {
	readonly host?: string;
	readonly port?: number;
	readonly portName?: string;
	readonly portSpecification?: string;
	readonly proxyHeader?: string;
	readonly requestPath?: string;
	readonly response?: string;
	readonly weightReportMode?: string;
}
export interface HTTPSHealthCheck {
	readonly host?: string;
	readonly port?: number;
	readonly portName?: string;
	readonly portSpecification?: string;
	readonly proxyHeader?: string;
	readonly requestPath?: string;
	readonly response?: string;
	readonly weightReportMode?: string;
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
export interface UDPHealthCheck {
	readonly port?: number;
	readonly portName?: string;
	readonly request?: string;
	readonly response?: string;
}
export default {
	HealthChecks: HealthChecks,
};
