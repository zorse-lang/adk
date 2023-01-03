import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class RegionHealthChecks
	extends GdmResource<RegionHealthChecksComponentInputs>
	implements RegionHealthChecksComponentOutputs
{
	constructor(entity: ADKEntity, options: RegionHealthChecksComponentInputs) {
		super(entity, options.name, "compute.v1.RegionHealthChecks", options);
	}
	public readonly creationTimestamp?: string | undefined;
	public readonly id?: string | undefined;
	public readonly region?: string | undefined;
	public readonly selfLink?: string | undefined;
}
export interface RegionHealthChecksComponentOutputs {
	readonly creationTimestamp?: string | undefined;
	readonly id?: string | undefined;
	readonly region?: string | undefined;
	readonly selfLink?: string | undefined;
}
export interface RegionHealthChecksComponentInputs {
	readonly checkIntervalSec?: number | undefined;
	readonly description?: string | undefined;
	readonly grpcHealthCheck?: GRPCHealthCheck | undefined;
	readonly healthyThreshold?: number | undefined;
	readonly http2HealthCheck?: HTTP2HealthCheck | undefined;
	readonly httpHealthCheck?: HTTPHealthCheck | undefined;
	readonly httpsHealthCheck?: HTTPSHealthCheck | undefined;
	readonly kind?: string | undefined;
	readonly logConfig?: HealthCheckLogConfig | undefined;
	readonly name: string;
	readonly requestId?: string | undefined;
	readonly sslHealthCheck?: SSLHealthCheck | undefined;
	readonly tcpHealthCheck?: TCPHealthCheck | undefined;
	readonly timeoutSec?: number | undefined;
	readonly type: string;
	readonly unhealthyThreshold?: number | undefined;
}
export interface GRPCHealthCheck {
	readonly grpcServiceName?: string | undefined;
	readonly port?: number | undefined;
	readonly portName?: string | undefined;
	readonly portSpecification?: string | undefined;
}
export interface HealthCheck {
	readonly checkIntervalSec?: number | undefined;
	readonly creationTimestamp?: string | undefined;
	readonly description?: string | undefined;
	readonly grpcHealthCheck?: GRPCHealthCheck | undefined;
	readonly healthyThreshold?: number | undefined;
	readonly http2HealthCheck?: HTTP2HealthCheck | undefined;
	readonly httpHealthCheck?: HTTPHealthCheck | undefined;
	readonly httpsHealthCheck?: HTTPSHealthCheck | undefined;
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly logConfig?: HealthCheckLogConfig | undefined;
	readonly name?: string | undefined;
	readonly region?: string | undefined;
	readonly selfLink?: string | undefined;
	readonly sslHealthCheck?: SSLHealthCheck | undefined;
	readonly tcpHealthCheck?: TCPHealthCheck | undefined;
	readonly timeoutSec?: number | undefined;
	readonly type?: string | undefined;
	readonly unhealthyThreshold?: number | undefined;
}
export interface HealthCheckLogConfig {
	readonly enable?: boolean | undefined;
}
export interface HTTP2HealthCheck {
	readonly host?: string | undefined;
	readonly port?: number | undefined;
	readonly portName?: string | undefined;
	readonly portSpecification?: string | undefined;
	readonly proxyHeader?: string | undefined;
	readonly requestPath?: string | undefined;
	readonly response?: string | undefined;
}
export interface HTTPHealthCheck {
	readonly host?: string | undefined;
	readonly port?: number | undefined;
	readonly portName?: string | undefined;
	readonly portSpecification?: string | undefined;
	readonly proxyHeader?: string | undefined;
	readonly requestPath?: string | undefined;
	readonly response?: string | undefined;
}
export interface HTTPSHealthCheck {
	readonly host?: string | undefined;
	readonly port?: number | undefined;
	readonly portName?: string | undefined;
	readonly portSpecification?: string | undefined;
	readonly proxyHeader?: string | undefined;
	readonly requestPath?: string | undefined;
	readonly response?: string | undefined;
}
export interface SSLHealthCheck {
	readonly port?: number | undefined;
	readonly portName?: string | undefined;
	readonly portSpecification?: string | undefined;
	readonly proxyHeader?: string | undefined;
	readonly request?: string | undefined;
	readonly response?: string | undefined;
}
export interface TCPHealthCheck {
	readonly port?: number | undefined;
	readonly portName?: string | undefined;
	readonly portSpecification?: string | undefined;
	readonly proxyHeader?: string | undefined;
	readonly request?: string | undefined;
	readonly response?: string | undefined;
}
export default {
	RegionHealthChecks: RegionHealthChecks,
};
