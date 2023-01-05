import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class servers extends ArmResource<serversComponentInputs> implements serversComponentOutputs {
	constructor(entity: ADKEntity, options: serversComponentInputs) {
		super(entity, options.name, "Microsoft.AnalysisServices/servers", "2016-05-16", options);
	}
	public readonly apiVersion: "2016-05-16";
	public readonly id: string;
	public readonly type: "Microsoft.AnalysisServices/servers";
}
export interface serversComponentOutputs {
	readonly apiVersion: "2016-05-16";
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
export interface AnalysisServicesServerProperties {
	readonly asAdministrators?: ServerAdministrators;
	readonly backupBlobContainerUri?: string;
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
export interface ResourceSku {
	readonly capacity?: number;
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
