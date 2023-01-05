import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class experiments extends ArmResource<experimentsComponentInputs> implements experimentsComponentOutputs {
	constructor(entity: ADKEntity, options: experimentsComponentInputs) {
		super(entity, options.name, "Microsoft.Chaos/experiments", "2022-07-01-preview", options);
	}
	public readonly apiVersion: "2022-07-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Chaos/experiments";
}
export interface experimentsComponentOutputs {
	readonly apiVersion: "2022-07-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Chaos/experiments";
}
export interface experimentsComponentInputs {
	readonly identity?: ResourceIdentity;
	readonly location: string;
	readonly name: string;
	readonly properties: ExperimentProperties;
	readonly systemData?: SystemData;
	readonly tags?: TrackedResourceTags;
}
export class locations_targetTypes
	extends ArmResource<locations_targetTypesComponentInputs>
	implements locations_targetTypesComponentOutputs
{
	constructor(entity: ADKEntity, options: locations_targetTypesComponentInputs) {
		super(entity, options.name, "Microsoft.Chaos/locations/targetTypes", "2022-07-01-preview", options);
	}
	public readonly apiVersion: "2022-07-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Chaos/locations/targetTypes";
}
export interface locations_targetTypesComponentOutputs {
	readonly apiVersion: "2022-07-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Chaos/locations/targetTypes";
}
export interface locations_targetTypesComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly properties?: TargetTypeProperties;
	readonly systemData?: SystemData;
}
export class locations_targetTypes_capabilityTypes
	extends ArmResource<locations_targetTypes_capabilityTypesComponentInputs>
	implements locations_targetTypes_capabilityTypesComponentOutputs
{
	constructor(entity: ADKEntity, options: locations_targetTypes_capabilityTypesComponentInputs) {
		super(entity, options.name, "Microsoft.Chaos/locations/targetTypes/capabilityTypes", "2022-07-01-preview", options);
	}
	public readonly apiVersion: "2022-07-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Chaos/locations/targetTypes/capabilityTypes";
}
export interface locations_targetTypes_capabilityTypesComponentOutputs {
	readonly apiVersion: "2022-07-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Chaos/locations/targetTypes/capabilityTypes";
}
export interface locations_targetTypes_capabilityTypesComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly properties?: CapabilityTypeProperties;
	readonly systemData?: SystemData;
}
export class targets extends ArmResource<targetsComponentInputs> implements targetsComponentOutputs {
	constructor(entity: ADKEntity, options: targetsComponentInputs) {
		super(entity, options.name, "Microsoft.Chaos/targets", "2022-07-01-preview", options);
	}
	public readonly apiVersion: "2022-07-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Chaos/targets";
}
export interface targetsComponentOutputs {
	readonly apiVersion: "2022-07-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Chaos/targets";
}
export interface targetsComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly properties: TargetProperties;
	readonly systemData?: SystemData;
}
export class targets_capabilities
	extends ArmResource<targets_capabilitiesComponentInputs>
	implements targets_capabilitiesComponentOutputs
{
	constructor(entity: ADKEntity, options: targets_capabilitiesComponentInputs) {
		super(entity, options.name, "Microsoft.Chaos/targets/capabilities", "2022-07-01-preview", options);
	}
	public readonly apiVersion: "2022-07-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Chaos/targets/capabilities";
}
export interface targets_capabilitiesComponentOutputs {
	readonly apiVersion: "2022-07-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Chaos/targets/capabilities";
}
export interface targets_capabilitiesComponentInputs {
	readonly name: string;
	readonly properties?: CapabilityProperties;
	readonly systemData?: SystemData;
}
export interface Action {
	readonly name: string;
}
export interface Branch {
	readonly actions: Action[];
	readonly name: string;
}
export interface CapabilityProperties {
	readonly description?: string;
	readonly parametersSchema?: string;
	readonly publisher?: string;
	readonly targetType?: string;
	readonly urn?: string;
}
export interface CapabilityTypeProperties {
	readonly description?: string;
	readonly displayName?: string;
	readonly kind?: string;
	readonly parametersSchema?: string;
	readonly publisher?: string;
	readonly runtimeProperties?: CapabilityTypePropertiesRuntimeProperties;
	readonly targetType?: string;
	readonly urn?: string;
}
export interface CapabilityTypePropertiesRuntimeProperties {
	readonly kind?: string;
}
export interface ExperimentProperties {
	readonly selectors: Selector[];
	readonly startOnCreation?: boolean;
	readonly steps: Step[];
}
export interface KeyValuePair {
	readonly key: string;
	readonly value: string;
}
export interface ResourceIdentity {
	readonly principalId?: string;
	readonly tenantId?: string;
	readonly type: "None";
}
export interface Selector {
	readonly id: string;
	readonly targets: TargetReference[];
	readonly type: "List" | "Percent" | "Random";
}
export interface Step {
	readonly branches: Branch[];
	readonly name: string;
}
export interface SystemData {
	readonly createdAt?: string;
	readonly createdBy?: string;
	readonly createdByType?: "Application" | "Key" | "ManagedIdentity" | "User";
	readonly lastModifiedAt?: string;
	readonly lastModifiedBy?: string;
	readonly lastModifiedByType?: "Application" | "Key" | "ManagedIdentity" | "User";
}
export interface TargetProperties {
	readonly [key: string]: any;
}
export interface TargetReference {
	readonly id: string;
	readonly type: "ChaosTarget";
}
export interface TargetTypeProperties {
	readonly description?: string;
	readonly displayName?: string;
	readonly propertiesSchema?: string;
	readonly resourceTypes?: string[];
}
export interface TrackedResourceTags {
	readonly [key: string]: string;
}
export default {
	experiments: experiments,
	"locations/targetTypes": locations_targetTypes,
	"locations/targetTypes/capabilityTypes": locations_targetTypes_capabilityTypes,
	targets: targets,
	"targets/capabilities": targets_capabilities,
};
