import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class machines extends ArmResource<machinesComponentInputs> implements machinesComponentOutputs {
	constructor(entity: ADKEntity, options: machinesComponentInputs) {
		super(entity, options.name, "Microsoft.HybridCompute/machines", "2020-07-30-preview", options);
	}
	public readonly apiVersion: "2020-07-30-preview";
	public readonly id: string;
	public readonly type: "Microsoft.HybridCompute/machines";
}
export interface machinesComponentOutputs {
	readonly apiVersion: "2020-07-30-preview";
	readonly id: string;
	readonly type: "Microsoft.HybridCompute/machines";
}
export interface machinesComponentInputs {
	readonly identity?: MachineIdentity;
	readonly location: string;
	readonly name: string;
	readonly properties?: MachineProperties;
	readonly tags?: TrackedResourceTags;
}
export class machines_extensions
	extends ArmResource<machines_extensionsComponentInputs>
	implements machines_extensionsComponentOutputs
{
	constructor(entity: ADKEntity, options: machines_extensionsComponentInputs) {
		super(entity, options.name, "Microsoft.HybridCompute/machines/extensions", "2020-07-30-preview", options);
	}
	public readonly apiVersion: "2020-07-30-preview";
	public readonly id: string;
	public readonly type: "Microsoft.HybridCompute/machines/extensions";
}
export interface machines_extensionsComponentOutputs {
	readonly apiVersion: "2020-07-30-preview";
	readonly id: string;
	readonly type: "Microsoft.HybridCompute/machines/extensions";
}
export interface machines_extensionsComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: MachineExtensionProperties;
	readonly tags?: TrackedResourceTags;
}
export interface ErrorDetail {
	readonly code: string;
	readonly details?: ErrorDetail[];
	readonly message: string;
	readonly target?: string;
}
export interface LocationData {
	readonly city?: string;
	readonly countryOrRegion?: string;
	readonly district?: string;
	readonly name: string;
}
export interface MachineExtensionInstanceView {
	readonly name?: string;
	readonly status?: MachineExtensionInstanceViewStatus;
	readonly type?: string;
	readonly typeHandlerVersion?: string;
}
export interface MachineExtensionInstanceViewStatus {
	readonly code?: string;
	readonly displayStatus?: string;
	readonly level?: "Error" | "Info" | "Warning";
	readonly message?: string;
	readonly time?: string;
}
export interface MachineExtensionProperties {
	readonly autoUpgradeMinorVersion?: boolean;
	readonly forceUpdateTag?: string;
	readonly instanceView?: MachineExtensionPropertiesInstanceView;
	readonly protectedSettings?: any;
	readonly provisioningState?: string;
	readonly publisher?: string;
	readonly settings?: any;
	readonly type?: string;
	readonly typeHandlerVersion?: string;
}
export interface MachineExtensionPropertiesInstanceView {
	readonly name?: string;
	readonly status?: MachineExtensionInstanceViewStatus;
	readonly type?: string;
	readonly typeHandlerVersion?: string;
}
export interface MachineIdentity {
	readonly principalId?: string;
	readonly tenantId?: string;
	readonly type?: string;
}
export interface MachineProperties {
	readonly adFqdn?: string;
	readonly agentVersion?: string;
	readonly clientPublicKey?: string;
	readonly displayName?: string;
	readonly dnsFqdn?: string;
	readonly domainName?: string;
	readonly errorDetails?: ErrorDetail[];
	readonly extensions?: MachineExtensionInstanceView[];
	readonly lastStatusChange?: string;
	readonly locationData?: LocationData;
	readonly machineFqdn?: string;
	readonly osName?: string;
	readonly osProfile?: MachinePropertiesOsProfile;
	readonly osSku?: string;
	readonly osVersion?: string;
	readonly provisioningState?: string;
	readonly status?: "Connected" | "Disconnected" | "Error";
	readonly vmId?: string;
	readonly vmUuid?: string;
}
export interface MachinePropertiesOsProfile {
	readonly computerName?: string;
}
export interface TrackedResourceTags {
	readonly [key: string]: string;
}
export default {
	machines: machines,
	"machines/extensions": machines_extensions,
};
