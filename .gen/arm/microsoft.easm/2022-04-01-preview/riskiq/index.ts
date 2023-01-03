import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class workspaces extends ArmResource<workspacesComponentInputs> implements workspacesComponentOutputs {
	constructor(entity: ADKEntity, options: workspacesComponentInputs) {
		super(entity, options.name, "Microsoft.Easm/workspaces", "2022-04-01-preview", options);
	}
	public readonly apiVersion: "2022-04-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Easm/workspaces";
}
export interface workspacesComponentOutputs {
	readonly apiVersion: "2022-04-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Easm/workspaces";
}
export interface workspacesComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: ResourceBaseProperties | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: TrackedResourceTags | undefined;
}
export class workspaces_labels
	extends ArmResource<workspaces_labelsComponentInputs>
	implements workspaces_labelsComponentOutputs
{
	constructor(entity: ADKEntity, options: workspaces_labelsComponentInputs) {
		super(entity, options.name, "Microsoft.Easm/workspaces/labels", "2022-04-01-preview", options);
	}
	public readonly apiVersion: "2022-04-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Easm/workspaces/labels";
}
export interface workspaces_labelsComponentOutputs {
	readonly apiVersion: "2022-04-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Easm/workspaces/labels";
}
export interface workspaces_labelsComponentInputs {
	readonly name: string;
	readonly properties?: LabelResourceProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export interface LabelResourceProperties {
	readonly color?: string | undefined;
	readonly displayName?: string | undefined;
	readonly provisioningState?:
		| (
				| "Accepted"
				| "Canceled"
				| "ConfiguringApplication"
				| "Creating"
				| "CreatingArtifacts"
				| "DeletingArtifacts"
				| "Failed"
				| "InstallingApplication"
				| "MigratingApplicationData"
				| "NotSpecified"
				| "ProvisioningResources"
				| "RunningValidations"
				| "Succeeded"
		  )
		| undefined;
}
export interface ResourceBaseProperties {
	readonly provisioningState?:
		| (
				| "Accepted"
				| "Canceled"
				| "ConfiguringApplication"
				| "Creating"
				| "CreatingArtifacts"
				| "DeletingArtifacts"
				| "Failed"
				| "InstallingApplication"
				| "MigratingApplicationData"
				| "NotSpecified"
				| "ProvisioningResources"
				| "RunningValidations"
				| "Succeeded"
		  )
		| undefined;
}
export interface SystemData {
	readonly createdAt?: string | undefined;
	readonly createdBy?: string | undefined;
	readonly createdByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
	readonly lastModifiedAt?: string | undefined;
	readonly lastModifiedBy?: string | undefined;
	readonly lastModifiedByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
}
export interface TrackedResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export default {
	workspaces: workspaces,
	"workspaces/labels": workspaces_labels,
};
