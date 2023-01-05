import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class Services extends GdmResource<ServicesComponentInputs> implements ServicesComponentOutputs {
	constructor(entity: ADKEntity, options: ServicesComponentInputs) {
		super(entity, options.name, "monitoring.v3.Services", options);
	}
}
export interface ServicesComponentOutputs {}
export interface ServicesComponentInputs {
	readonly appEngine?: AppEngine;
	readonly basicService?: BasicService;
	readonly cloudEndpoints?: CloudEndpoints;
	readonly cloudRun?: CloudRun;
	readonly clusterIstio?: ClusterIstio;
	readonly custom?: any;
	readonly displayName?: string;
	readonly gkeNamespace?: GkeNamespace;
	readonly gkeService?: GkeService;
	readonly gkeWorkload?: GkeWorkload;
	readonly istioCanonicalService?: IstioCanonicalService;
	readonly meshIstio?: MeshIstio;
	readonly name: string;
	readonly parent: string;
	readonly serviceId?: string;
	readonly telemetry?: Telemetry;
	readonly userLabels?: { [P in string]: string };
}
export interface AppEngine {
	readonly moduleId?: string;
}
export interface BasicService {
	readonly serviceLabels?: { [P in string]: string };
	readonly serviceType?: string;
}
export interface CloudEndpoints {
	readonly service?: string;
}
export interface CloudRun {
	readonly location?: string;
	readonly serviceName?: string;
}
export interface ClusterIstio {
	readonly clusterName?: string;
	readonly location?: string;
	readonly serviceName?: string;
	readonly serviceNamespace?: string;
}
export interface Custom {}
export interface GkeNamespace {
	readonly clusterName?: string;
	readonly location?: string;
	readonly namespaceName?: string;
	readonly projectId?: string;
}
export interface GkeService {
	readonly clusterName?: string;
	readonly location?: string;
	readonly namespaceName?: string;
	readonly projectId?: string;
	readonly serviceName?: string;
}
export interface GkeWorkload {
	readonly clusterName?: string;
	readonly location?: string;
	readonly namespaceName?: string;
	readonly projectId?: string;
	readonly topLevelControllerName?: string;
	readonly topLevelControllerType?: string;
}
export interface IstioCanonicalService {
	readonly canonicalService?: string;
	readonly canonicalServiceNamespace?: string;
	readonly meshUid?: string;
}
export interface MeshIstio {
	readonly meshUid?: string;
	readonly serviceName?: string;
	readonly serviceNamespace?: string;
}
export interface Service {
	readonly appEngine?: AppEngine;
	readonly basicService?: BasicService;
	readonly cloudEndpoints?: CloudEndpoints;
	readonly cloudRun?: CloudRun;
	readonly clusterIstio?: ClusterIstio;
	readonly custom?: any;
	readonly displayName?: string;
	readonly gkeNamespace?: GkeNamespace;
	readonly gkeService?: GkeService;
	readonly gkeWorkload?: GkeWorkload;
	readonly istioCanonicalService?: IstioCanonicalService;
	readonly meshIstio?: MeshIstio;
	readonly name?: string;
	readonly telemetry?: Telemetry;
	readonly userLabels?: { [P in string]: string };
}
export interface Telemetry {
	readonly resourceName?: string;
}
export default {
	Services: Services,
};
