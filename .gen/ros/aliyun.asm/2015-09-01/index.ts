import { RosResource, Entity as ADKEntity } from "@zorse/adk";

export class ServiceMesh extends RosResource<ServiceMeshComponentInputs> implements ServiceMeshComponentOutputs {
	constructor(entity: ADKEntity, options: ServiceMeshComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::ASM::ServiceMesh", options);
	}
	public readonly ServiceMeshId: any;
}
export interface ServiceMeshComponentOutputs {
	readonly ServiceMeshId: any;
}
export interface ServiceMeshComponentInputs {
	readonly VpcId: string;
	readonly VSwitches: any[];
	readonly ApiServerPublicEip?: boolean | undefined;
	readonly AuditProject?: string | undefined;
	readonly CustomizedZipkin?: boolean | undefined;
	readonly EnableAudit?: boolean | undefined;
	readonly IncludeIPRanges?: string | undefined;
	readonly IstioVersion?: string | undefined;
	readonly LocalityLoadBalancing?: boolean | undefined;
	readonly Name?: string | undefined;
	readonly OPA?: OPA | undefined;
	readonly OutboundTrafficPolicy?: string | undefined;
	readonly PilotPublicEip?: boolean | undefined;
	readonly Proxy?: Proxy | undefined;
	readonly Telemetry?: boolean | undefined;
	readonly TraceSampling?: number | undefined;
	readonly Tracing?: boolean | undefined;
	readonly LogicalId: string;
}
export interface OPA {
	readonly OPARequestCPU?: string | undefined;
	readonly OpenAgentPolicy?: boolean | undefined;
	readonly OPALogLevel?: string | undefined;
	readonly OPALimitCPU?: string | undefined;
	readonly OPALimitMemory?: string | undefined;
	readonly OPARequestMemory?: string | undefined;
}
export interface Proxy {
	readonly ClusterDomain?: string | undefined;
	readonly ProxyLimitCPU?: string | undefined;
	readonly ProxyLimitMemory?: string | undefined;
	readonly ProxyRequestCPU?: string | undefined;
	readonly ProxyRequestMemory?: string | undefined;
}
export default {
	ServiceMesh: ServiceMesh,
};
