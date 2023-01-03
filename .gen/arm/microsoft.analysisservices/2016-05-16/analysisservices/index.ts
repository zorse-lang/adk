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
	readonly properties?: AnalysisServicesServerProperties | undefined;
	readonly sku: ResourceSku;
	readonly tags?: ResourceTags | undefined;
}
export interface AnalysisServicesServerProperties {
	readonly asAdministrators?: ServerAdministrators | undefined;
	readonly backupBlobContainerUri?: string | undefined;
	readonly managedMode?: number | undefined;
	readonly provisioningState?:
		| (
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
				| "Updating"
		  )
		| undefined;
	readonly serverFullName?: string | undefined;
	readonly serverMonitorMode?: number | undefined;
	readonly state?:
		| (
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
				| "Updating"
		  )
		| undefined;
}
export interface ResourceSku {
	readonly capacity?: number | undefined;
	readonly name: string;
	readonly tier?: ("Basic" | "Development" | "Standard") | undefined;
}
export interface ResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface ServerAdministrators {
	readonly members?: string[] | undefined;
}
export default {
	servers: servers,
};
