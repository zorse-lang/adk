import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class experiments extends ArmResource<experimentsComponentInputs> implements experimentsComponentOutputs {
	constructor(entity: ADKEntity, options: experimentsComponentInputs) {
		super(entity, options.name, "Microsoft.Chaos/experiments", "2021-09-15-preview", options);
	}
	public readonly apiVersion: "2021-09-15-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Chaos/experiments";
}
export interface experimentsComponentOutputs {
	readonly apiVersion: "2021-09-15-preview";
	readonly id: string;
	readonly type: "Microsoft.Chaos/experiments";
}
export interface experimentsComponentInputs {
	readonly identity?: ResourceIdentity | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties: ExperimentProperties;
	readonly systemData?: SystemData | undefined;
	readonly tags?: TrackedResourceTags | undefined;
}
export class locations_targetTypes
	extends ArmResource<locations_targetTypesComponentInputs>
	implements locations_targetTypesComponentOutputs
{
	constructor(entity: ADKEntity, options: locations_targetTypesComponentInputs) {
		super(entity, options.name, "Microsoft.Chaos/locations/targetTypes", "2021-09-15-preview", options);
	}
	public readonly apiVersion: "2021-09-15-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Chaos/locations/targetTypes";
}
export interface locations_targetTypesComponentOutputs {
	readonly apiVersion: "2021-09-15-preview";
	readonly id: string;
	readonly type: "Microsoft.Chaos/locations/targetTypes";
}
export interface locations_targetTypesComponentInputs {
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: TargetTypeProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export class locations_targetTypes_capabilityTypes
	extends ArmResource<locations_targetTypes_capabilityTypesComponentInputs>
	implements locations_targetTypes_capabilityTypesComponentOutputs
{
	constructor(entity: ADKEntity, options: locations_targetTypes_capabilityTypesComponentInputs) {
		super(entity, options.name, "Microsoft.Chaos/locations/targetTypes/capabilityTypes", "2021-09-15-preview", options);
	}
	public readonly apiVersion: "2021-09-15-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Chaos/locations/targetTypes/capabilityTypes";
}
export interface locations_targetTypes_capabilityTypesComponentOutputs {
	readonly apiVersion: "2021-09-15-preview";
	readonly id: string;
	readonly type: "Microsoft.Chaos/locations/targetTypes/capabilityTypes";
}
export interface locations_targetTypes_capabilityTypesComponentInputs {
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: CapabilityTypeProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export class targets extends ArmResource<targetsComponentInputs> implements targetsComponentOutputs {
	constructor(entity: ADKEntity, options: targetsComponentInputs) {
		super(entity, options.name, "Microsoft.Chaos/targets", "2021-09-15-preview", options);
	}
	public readonly apiVersion: "2021-09-15-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Chaos/targets";
}
export interface targetsComponentOutputs {
	readonly apiVersion: "2021-09-15-preview";
	readonly id: string;
	readonly type: "Microsoft.Chaos/targets";
}
export interface targetsComponentInputs {
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties: TargetProperties;
	readonly systemData?: SystemData | undefined;
}
export class targets_capabilities
	extends ArmResource<targets_capabilitiesComponentInputs>
	implements targets_capabilitiesComponentOutputs
{
	constructor(entity: ADKEntity, options: targets_capabilitiesComponentInputs) {
		super(entity, options.name, "Microsoft.Chaos/targets/capabilities", "2021-09-15-preview", options);
	}
	public readonly apiVersion: "2021-09-15-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Chaos/targets/capabilities";
}
export interface targets_capabilitiesComponentOutputs {
	readonly apiVersion: "2021-09-15-preview";
	readonly id: string;
	readonly type: "Microsoft.Chaos/targets/capabilities";
}
export interface targets_capabilitiesComponentInputs {
	readonly name: string;
	readonly properties?: CapabilityProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export interface Action {
	readonly name: string;
}
export interface Branch {
	readonly actions: Action[];
	readonly name: string;
}
export interface CapabilityProperties {
	readonly description?: string | undefined;
	readonly parametersSchema?: string | undefined;
	readonly publisher?: string | undefined;
	readonly targetType?: string | undefined;
	readonly urn?: string | undefined;
}
export interface CapabilityTypeProperties {
	readonly description?: string | undefined;
	readonly displayName?: string | undefined;
	readonly parametersSchema?: string | undefined;
	readonly publisher?: string | undefined;
	readonly targetType?: string | undefined;
	readonly urn?: string | undefined;
}
export interface ExperimentProperties {
	readonly selectors: Selector[];
	readonly startOnCreation?: boolean | undefined;
	readonly steps: Step[];
}
export interface KeyValuePair {
	readonly key: string;
	readonly value: string;
}
export interface ResourceIdentity {
	readonly principalId?: string | undefined;
	readonly tenantId?: string | undefined;
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
	readonly createdAt?: string | undefined;
	readonly createdBy?: string | undefined;
	readonly createdByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
	readonly lastModifiedAt?: string | undefined;
	readonly lastModifiedBy?: string | undefined;
	readonly lastModifiedByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
}
export interface TargetProperties {
	readonly "[ key: string ]"?: any | undefined;
}
export interface TargetReference {
	readonly id: string;
	readonly type: "ChaosTarget";
}
export interface TargetTypeProperties {
	readonly description?: string | undefined;
	readonly displayName?: string | undefined;
	readonly propertiesSchema?: string | undefined;
	readonly resourceTypes?: string[] | undefined;
}
export interface TrackedResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export default {
	experiments: experiments,
	"locations/targetTypes": locations_targetTypes,
	"locations/targetTypes/capabilityTypes": locations_targetTypes_capabilityTypes,
	targets: targets,
	"targets/capabilities": targets_capabilities,
};
