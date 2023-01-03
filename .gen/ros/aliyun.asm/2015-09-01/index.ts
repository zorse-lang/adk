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
	readonly ApiServerPublicEip?: (boolean | undefined) | undefined;
	readonly AuditProject?: (string | undefined) | undefined;
	readonly CustomizedZipkin?: (boolean | undefined) | undefined;
	readonly EnableAudit?: (boolean | undefined) | undefined;
	readonly IncludeIPRanges?: (string | undefined) | undefined;
	readonly IstioVersion?: (string | undefined) | undefined;
	readonly LocalityLoadBalancing?: (boolean | undefined) | undefined;
	readonly Name?: (string | undefined) | undefined;
	readonly OPA?: (OPA | undefined) | undefined;
	readonly OutboundTrafficPolicy?: (string | undefined) | undefined;
	readonly PilotPublicEip?: (boolean | undefined) | undefined;
	readonly Proxy?: (Proxy | undefined) | undefined;
	readonly Telemetry?: (boolean | undefined) | undefined;
	readonly TraceSampling?: (number | undefined) | undefined;
	readonly Tracing?: (boolean | undefined) | undefined;
	readonly LogicalId: string;
}
export interface OPA {
	readonly OPARequestCPU?: (string | undefined) | undefined;
	readonly OpenAgentPolicy?: (boolean | undefined) | undefined;
	readonly OPALogLevel?: (string | undefined) | undefined;
	readonly OPALimitCPU?: (string | undefined) | undefined;
	readonly OPALimitMemory?: (string | undefined) | undefined;
	readonly OPARequestMemory?: (string | undefined) | undefined;
}
export interface Proxy {
	readonly ClusterDomain?: (string | undefined) | undefined;
	readonly ProxyLimitCPU?: (string | undefined) | undefined;
	readonly ProxyLimitMemory?: (string | undefined) | undefined;
	readonly ProxyRequestCPU?: (string | undefined) | undefined;
	readonly ProxyRequestMemory?: (string | undefined) | undefined;
}
export default {
	ServiceMesh: ServiceMesh,
};
