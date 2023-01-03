import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class NetworkExperimentProfiles
	extends ArmResource<NetworkExperimentProfilesComponentInputs>
	implements NetworkExperimentProfilesComponentOutputs
{
	constructor(entity: ADKEntity, options: NetworkExperimentProfilesComponentInputs) {
		super(entity, options.name, "Microsoft.Network/NetworkExperimentProfiles", "2019-11-01", options);
	}
	public readonly apiVersion: "2019-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/NetworkExperimentProfiles";
}
export interface NetworkExperimentProfilesComponentOutputs {
	readonly apiVersion: "2019-11-01";
	readonly id: string;
	readonly type: "Microsoft.Network/NetworkExperimentProfiles";
}
export interface NetworkExperimentProfilesComponentInputs {
	readonly etag?: string | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: ProfileProperties | undefined;
	readonly tags?: ResourceTags | undefined;
}
export class NetworkExperimentProfiles_Experiments
	extends ArmResource<NetworkExperimentProfiles_ExperimentsComponentInputs>
	implements NetworkExperimentProfiles_ExperimentsComponentOutputs
{
	constructor(entity: ADKEntity, options: NetworkExperimentProfiles_ExperimentsComponentInputs) {
		super(entity, options.name, "Microsoft.Network/NetworkExperimentProfiles/Experiments", "2019-11-01", options);
	}
	public readonly apiVersion: "2019-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/NetworkExperimentProfiles/Experiments";
}
export interface NetworkExperimentProfiles_ExperimentsComponentOutputs {
	readonly apiVersion: "2019-11-01";
	readonly id: string;
	readonly type: "Microsoft.Network/NetworkExperimentProfiles/Experiments";
}
export interface NetworkExperimentProfiles_ExperimentsComponentInputs {
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: ExperimentProperties | undefined;
	readonly tags?: ResourceTags | undefined;
}
export interface Endpoint {
	readonly endpoint?: string | undefined;
	readonly name?: string | undefined;
}
export interface ExperimentProperties {
	readonly description?: string | undefined;
	readonly enabledState?: ("Disabled" | "Enabled") | undefined;
	readonly endpointA?: Endpoint | undefined;
	readonly endpointB?: Endpoint | undefined;
	readonly resourceState?: ("Creating" | "Deleting" | "Disabled" | "Disabling" | "Enabled" | "Enabling") | undefined;
	readonly scriptFileUri?: string | undefined;
	readonly status?: string | undefined;
}
export interface ProfileProperties {
	readonly enabledState?: ("Disabled" | "Enabled") | undefined;
	readonly resourceState?: ("Creating" | "Deleting" | "Disabled" | "Disabling" | "Enabled" | "Enabling") | undefined;
}
export interface ResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export default {
	NetworkExperimentProfiles: NetworkExperimentProfiles,
	"NetworkExperimentProfiles/Experiments": NetworkExperimentProfiles_Experiments,
};
