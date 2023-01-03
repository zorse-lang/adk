import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class energyServices extends ArmResource<energyServicesComponentInputs> implements energyServicesComponentOutputs {
	constructor(entity: ADKEntity, options: energyServicesComponentInputs) {
		super(entity, options.name, "Microsoft.OpenEnergyPlatform/energyServices", "2021-06-01-preview", options);
	}
	public readonly apiVersion: "2021-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.OpenEnergyPlatform/energyServices";
}
export interface energyServicesComponentOutputs {
	readonly apiVersion: "2021-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.OpenEnergyPlatform/energyServices";
}
export interface energyServicesComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: EnergyServiceProperties | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: EnergyServiceTags | undefined;
}
export interface DataPartitionNames {
	readonly name?: string | undefined;
}
export interface EnergyServiceProperties {
	readonly authAppId?: string | undefined;
	readonly dataPartitionNames?: DataPartitionNames[] | undefined;
	readonly dnsName?: string | undefined;
	readonly provisioningState?:
		| ("Canceled" | "Creating" | "Deleting" | "Failed" | "Succeeded" | "Unknown" | "Updating")
		| undefined;
}
export interface EnergyServiceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface SystemData {
	readonly createdAt?: string | undefined;
	readonly createdBy?: string | undefined;
	readonly createdByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
	readonly lastModifiedAt?: string | undefined;
	readonly lastModifiedBy?: string | undefined;
	readonly lastModifiedByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
}
export default {
	energyServices: energyServices,
};
