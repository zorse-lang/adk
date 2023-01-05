import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class energyServices extends ArmResource<energyServicesComponentInputs> implements energyServicesComponentOutputs {
	constructor(entity: ADKEntity, options: energyServicesComponentInputs) {
		super(entity, options.name, "Microsoft.OpenEnergyPlatform/energyServices", "2022-04-04-preview", options);
	}
	public readonly apiVersion: "2022-04-04-preview";
	public readonly id: string;
	public readonly type: "Microsoft.OpenEnergyPlatform/energyServices";
}
export interface energyServicesComponentOutputs {
	readonly apiVersion: "2022-04-04-preview";
	readonly id: string;
	readonly type: "Microsoft.OpenEnergyPlatform/energyServices";
}
export interface energyServicesComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: EnergyServiceProperties;
	readonly systemData?: SystemData;
	readonly tags?: EnergyServiceTags;
}
export function listPartitions(resource: energyServices): DataPartitionsListResult {
	if (resource.apiVersion !== "2022-04-04-preview") {
		throw new Error(`listPartitions is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.OpenEnergyPlatform/energyServices") {
		throw new Error(`listPartitions is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export interface DataPartitionNames {
	readonly name?: string;
}
export interface DataPartitionProperties {
	readonly name?: string;
	readonly provisioningState?: string;
}
export interface DataPartitionsListResult {
	readonly dataPartitionInfo?: DataPartitionProperties[];
}
export interface EnergyServiceProperties {
	readonly authAppId?: string;
	readonly dataPartitionNames?: DataPartitionNames[];
	readonly dnsName?: string;
	readonly provisioningState?: "Canceled" | "Creating" | "Deleting" | "Failed" | "Succeeded" | "Unknown" | "Updating";
}
export interface EnergyServiceTags {
	readonly [key: string]: string;
}
export interface SystemData {
	readonly createdAt?: string;
	readonly createdBy?: string;
	readonly createdByType?: "Application" | "Key" | "ManagedIdentity" | "User";
	readonly lastModifiedAt?: string;
	readonly lastModifiedBy?: string;
	readonly lastModifiedByType?: "Application" | "Key" | "ManagedIdentity" | "User";
}
export default {
	energyServices: energyServices,
};
