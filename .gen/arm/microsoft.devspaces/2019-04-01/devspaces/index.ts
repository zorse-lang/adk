import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class controllers extends ArmResource<controllersComponentInputs> implements controllersComponentOutputs {
	constructor(entity: ADKEntity, options: controllersComponentInputs) {
		super(entity, options.name, "Microsoft.DevSpaces/controllers", "2019-04-01", options);
	}
	public readonly apiVersion: "2019-04-01";
	public readonly id: string;
	public readonly type: "Microsoft.DevSpaces/controllers";
}
export interface controllersComponentOutputs {
	readonly apiVersion: "2019-04-01";
	readonly id: string;
	readonly type: "Microsoft.DevSpaces/controllers";
}
export interface controllersComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly properties: ControllerProperties;
	readonly sku: Sku;
	readonly tags?: TrackedResourceTags;
}
export function listConnectionDetails(
	resource: controllers,
	input: ListConnectionDetailsParameters,
): ControllerConnectionDetailsList {
	if (resource.apiVersion !== "2019-04-01") {
		throw new Error(`listConnectionDetails is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.DevSpaces/controllers") {
		throw new Error(`listConnectionDetails is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export interface ControllerConnectionDetails {
	readonly orchestratorSpecificConnectionDetails?: OrchestratorSpecificConnectionDetails;
}
export interface ControllerConnectionDetailsList {
	readonly connectionDetailsList?: ControllerConnectionDetails[];
}
export interface ControllerProperties {
	readonly dataPlaneFqdn?: string;
	readonly hostSuffix?: string;
	readonly provisioningState?: "Canceled" | "Creating" | "Deleted" | "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly targetContainerHostApiServerFqdn?: string;
	readonly targetContainerHostCredentialsBase64: string;
	readonly targetContainerHostResourceId: string;
}
export interface ListConnectionDetailsParameters {
	readonly targetContainerHostResourceId: string;
}
export interface OrchestratorSpecificConnectionDetails {}
export interface Sku {
	readonly name: "S1";
	readonly tier?: "Standard";
}
export interface TrackedResourceTags {
	readonly [key: string]: string;
}
export default {
	controllers: controllers,
};
