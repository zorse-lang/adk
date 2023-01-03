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
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties: ControllerProperties;
	readonly sku: Sku;
	readonly tags?: TrackedResourceTags | undefined;
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
	readonly orchestratorSpecificConnectionDetails?: OrchestratorSpecificConnectionDetails | undefined;
}
export interface ControllerConnectionDetailsList {
	readonly connectionDetailsList?: ControllerConnectionDetails[] | undefined;
}
export interface ControllerProperties {
	readonly dataPlaneFqdn?: string | undefined;
	readonly hostSuffix?: string | undefined;
	readonly provisioningState?:
		| ("Canceled" | "Creating" | "Deleted" | "Deleting" | "Failed" | "Succeeded" | "Updating")
		| undefined;
	readonly targetContainerHostApiServerFqdn?: string | undefined;
	readonly targetContainerHostCredentialsBase64: string;
	readonly targetContainerHostResourceId: string;
}
export interface ListConnectionDetailsParameters {
	readonly targetContainerHostResourceId: string;
}
export interface OrchestratorSpecificConnectionDetails {}
export interface Sku {
	readonly name: "S1";
	readonly tier?: "Standard" | undefined;
}
export interface TrackedResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export default {
	controllers: controllers,
};
