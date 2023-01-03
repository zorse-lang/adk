import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class Services extends GdmResource<ServicesComponentInputs> implements ServicesComponentOutputs {
	constructor(entity: ADKEntity, options: ServicesComponentInputs) {
		super(entity, options.name, "monitoring.v3.Services", options);
	}
}
export interface ServicesComponentOutputs {}
export interface ServicesComponentInputs {
	readonly appEngine?: AppEngine | undefined;
	readonly basicService?: BasicService | undefined;
	readonly cloudEndpoints?: CloudEndpoints | undefined;
	readonly cloudRun?: CloudRun | undefined;
	readonly clusterIstio?: ClusterIstio | undefined;
	readonly custom?: any | undefined;
	readonly displayName?: string | undefined;
	readonly gkeNamespace?: GkeNamespace | undefined;
	readonly gkeService?: GkeService | undefined;
	readonly gkeWorkload?: GkeWorkload | undefined;
	readonly istioCanonicalService?: IstioCanonicalService | undefined;
	readonly meshIstio?: MeshIstio | undefined;
	readonly name: string;
	readonly parent: string;
	readonly serviceId?: string | undefined;
	readonly telemetry?: Telemetry | undefined;
	readonly userLabels?: { [P in string]: string } | undefined;
	readonly type: string;
}
export interface AppEngine {
	readonly moduleId?: string | undefined;
}
export interface BasicService {
	readonly serviceLabels?: { [P in string]: string } | undefined;
	readonly serviceType?: string | undefined;
}
export interface CloudEndpoints {
	readonly service?: string | undefined;
}
export interface CloudRun {
	readonly location?: string | undefined;
	readonly serviceName?: string | undefined;
}
export interface ClusterIstio {
	readonly clusterName?: string | undefined;
	readonly location?: string | undefined;
	readonly serviceName?: string | undefined;
	readonly serviceNamespace?: string | undefined;
}
export interface Custom {}
export interface GkeNamespace {
	readonly clusterName?: string | undefined;
	readonly location?: string | undefined;
	readonly namespaceName?: string | undefined;
	readonly projectId?: string | undefined;
}
export interface GkeService {
	readonly clusterName?: string | undefined;
	readonly location?: string | undefined;
	readonly namespaceName?: string | undefined;
	readonly projectId?: string | undefined;
	readonly serviceName?: string | undefined;
}
export interface GkeWorkload {
	readonly clusterName?: string | undefined;
	readonly location?: string | undefined;
	readonly namespaceName?: string | undefined;
	readonly projectId?: string | undefined;
	readonly topLevelControllerName?: string | undefined;
	readonly topLevelControllerType?: string | undefined;
}
export interface IstioCanonicalService {
	readonly canonicalService?: string | undefined;
	readonly canonicalServiceNamespace?: string | undefined;
	readonly meshUid?: string | undefined;
}
export interface MeshIstio {
	readonly meshUid?: string | undefined;
	readonly serviceName?: string | undefined;
	readonly serviceNamespace?: string | undefined;
}
export interface Service {
	readonly appEngine?: AppEngine | undefined;
	readonly basicService?: BasicService | undefined;
	readonly cloudEndpoints?: CloudEndpoints | undefined;
	readonly cloudRun?: CloudRun | undefined;
	readonly clusterIstio?: ClusterIstio | undefined;
	readonly custom?: any | undefined;
	readonly displayName?: string | undefined;
	readonly gkeNamespace?: GkeNamespace | undefined;
	readonly gkeService?: GkeService | undefined;
	readonly gkeWorkload?: GkeWorkload | undefined;
	readonly istioCanonicalService?: IstioCanonicalService | undefined;
	readonly meshIstio?: MeshIstio | undefined;
	readonly name?: string | undefined;
	readonly telemetry?: Telemetry | undefined;
	readonly userLabels?: { [P in string]: string } | undefined;
}
export interface Telemetry {
	readonly resourceName?: string | undefined;
}
export default {
	Services: Services,
};
