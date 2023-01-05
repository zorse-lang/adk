import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class servers extends ArmResource<serversComponentInputs> implements serversComponentOutputs {
	constructor(entity: ADKEntity, options: serversComponentInputs) {
		super(entity, options.name, "Microsoft.AnalysisServices/servers", "2017-07-14", options);
	}
	public readonly apiVersion: "2017-07-14";
	public readonly id: string;
	public readonly type: "Microsoft.AnalysisServices/servers";
}
export interface serversComponentOutputs {
	readonly apiVersion: "2017-07-14";
	readonly id: string;
	readonly type: "Microsoft.AnalysisServices/servers";
}
export interface serversComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: AnalysisServicesServerProperties;
	readonly sku: ResourceSku;
	readonly tags?: ResourceTags;
}
export function listGatewayStatus(resource: servers): GatewayListStatusLive {
	if (resource.apiVersion !== "2017-07-14") {
		throw new Error(`listGatewayStatus is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.AnalysisServices/servers") {
		throw new Error(`listGatewayStatus is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export interface AnalysisServicesServerProperties {
	readonly asAdministrators?: ServerAdministrators;
	readonly backupBlobContainerUri?: string;
	readonly gatewayDetails?: GatewayDetails;
	readonly managedMode?: number;
	readonly provisioningState?:
		| "Deleting"
		| "Failed"
		| "Paused"
		| "Pausing"
		| "Preparing"
		| "Provisioning"
		| "Resuming"
		| "Scaling"
		| "Succeeded"
		| "Suspended"
		| "Suspending"
		| "Updating";
	readonly serverFullName?: string;
	readonly serverMonitorMode?: number;
	readonly state?:
		| "Deleting"
		| "Failed"
		| "Paused"
		| "Pausing"
		| "Preparing"
		| "Provisioning"
		| "Resuming"
		| "Scaling"
		| "Succeeded"
		| "Suspended"
		| "Suspending"
		| "Updating";
}
export interface GatewayDetails {
	readonly dmtsClusterUri?: string;
	readonly gatewayObjectId?: string;
	readonly gatewayResourceId?: string;
}
export interface GatewayListStatusLive {
	readonly status?: "0";
}
export interface ResourceSku {
	readonly name: string;
	readonly tier?: "Basic" | "Development" | "Standard";
}
export interface ResourceTags {
	readonly [key: string]: string;
}
export interface ServerAdministrators {
	readonly members?: string[];
}
export default {
	servers: servers,
};
