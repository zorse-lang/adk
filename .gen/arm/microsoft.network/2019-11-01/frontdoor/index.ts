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
	readonly etag?: string;
	readonly location?: string;
	readonly name: string;
	readonly properties?: ProfileProperties;
	readonly tags?: ResourceTags;
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
	readonly location?: string;
	readonly name: string;
	readonly properties?: ExperimentProperties;
	readonly tags?: ResourceTags;
}
export interface Endpoint {
	readonly endpoint?: string;
	readonly name?: string;
}
export interface ExperimentProperties {
	readonly description?: string;
	readonly enabledState?: "Disabled" | "Enabled";
	readonly endpointA?: Endpoint;
	readonly endpointB?: Endpoint;
	readonly resourceState?: "Creating" | "Deleting" | "Disabled" | "Disabling" | "Enabled" | "Enabling";
	readonly scriptFileUri?: string;
	readonly status?: string;
}
export interface ProfileProperties {
	readonly enabledState?: "Disabled" | "Enabled";
	readonly resourceState?: "Creating" | "Deleting" | "Disabled" | "Disabling" | "Enabled" | "Enabling";
}
export interface ResourceTags {
	readonly [key: string]: string;
}
export default {
	NetworkExperimentProfiles: NetworkExperimentProfiles,
	"NetworkExperimentProfiles/Experiments": NetworkExperimentProfiles_Experiments,
};
