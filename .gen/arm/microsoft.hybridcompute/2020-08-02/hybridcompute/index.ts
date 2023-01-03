import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class machines extends ArmResource<machinesComponentInputs> implements machinesComponentOutputs {
	constructor(entity: ADKEntity, options: machinesComponentInputs) {
		super(entity, options.name, "Microsoft.HybridCompute/machines", "2020-08-02", options);
	}
	public readonly apiVersion: "2020-08-02";
	public readonly id: string;
	public readonly type: "Microsoft.HybridCompute/machines";
}
export interface machinesComponentOutputs {
	readonly apiVersion: "2020-08-02";
	readonly id: string;
	readonly type: "Microsoft.HybridCompute/machines";
}
export interface machinesComponentInputs {
	readonly identity?: MachineIdentity | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties?: MachineProperties | undefined;
	readonly tags?: TrackedResourceTags | undefined;
}
export class machines_extensions
	extends ArmResource<machines_extensionsComponentInputs>
	implements machines_extensionsComponentOutputs
{
	constructor(entity: ADKEntity, options: machines_extensionsComponentInputs) {
		super(entity, options.name, "Microsoft.HybridCompute/machines/extensions", "2020-08-02", options);
	}
	public readonly apiVersion: "2020-08-02";
	public readonly id: string;
	public readonly type: "Microsoft.HybridCompute/machines/extensions";
}
export interface machines_extensionsComponentOutputs {
	readonly apiVersion: "2020-08-02";
	readonly id: string;
	readonly type: "Microsoft.HybridCompute/machines/extensions";
}
export interface machines_extensionsComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: MachineExtensionProperties | undefined;
	readonly tags?: TrackedResourceTags | undefined;
}
export interface ErrorDetail {
	readonly code: string;
	readonly details?: ErrorDetail[] | undefined;
	readonly message: string;
	readonly target?: string | undefined;
}
export interface LocationData {
	readonly city?: string | undefined;
	readonly countryOrRegion?: string | undefined;
	readonly district?: string | undefined;
	readonly name: string;
}
export interface MachineExtensionInstanceView {
	readonly name?: string | undefined;
	readonly status?: MachineExtensionInstanceViewStatus | undefined;
	readonly type?: string | undefined;
	readonly typeHandlerVersion?: string | undefined;
}
export interface MachineExtensionInstanceViewStatus {
	readonly code?: string | undefined;
	readonly displayStatus?: string | undefined;
	readonly level?: ("Error" | "Info" | "Warning") | undefined;
	readonly message?: string | undefined;
	readonly time?: string | undefined;
}
export interface MachineExtensionProperties {
	readonly autoUpgradeMinorVersion?: boolean | undefined;
	readonly forceUpdateTag?: string | undefined;
	readonly instanceView?: MachineExtensionPropertiesInstanceView | undefined;
	readonly protectedSettings?: any | undefined;
	readonly provisioningState?: string | undefined;
	readonly publisher?: string | undefined;
	readonly settings?: any | undefined;
	readonly type?: string | undefined;
	readonly typeHandlerVersion?: string | undefined;
}
export interface MachineExtensionPropertiesInstanceView {
	readonly name?: string | undefined;
	readonly status?: MachineExtensionInstanceViewStatus | undefined;
	readonly type?: string | undefined;
	readonly typeHandlerVersion?: string | undefined;
}
export interface MachineIdentity {
	readonly principalId?: string | undefined;
	readonly tenantId?: string | undefined;
	readonly type?: string | undefined;
}
export interface MachineProperties {
	readonly adFqdn?: string | undefined;
	readonly agentVersion?: string | undefined;
	readonly clientPublicKey?: string | undefined;
	readonly displayName?: string | undefined;
	readonly dnsFqdn?: string | undefined;
	readonly domainName?: string | undefined;
	readonly errorDetails?: ErrorDetail[] | undefined;
	readonly extensions?: MachineExtensionInstanceView[] | undefined;
	readonly lastStatusChange?: string | undefined;
	readonly locationData?: LocationData | undefined;
	readonly machineFqdn?: string | undefined;
	readonly osName?: string | undefined;
	readonly osProfile?: MachinePropertiesOsProfile | undefined;
	readonly osSku?: string | undefined;
	readonly osVersion?: string | undefined;
	readonly provisioningState?: string | undefined;
	readonly status?: ("Connected" | "Disconnected" | "Error") | undefined;
	readonly vmId?: string | undefined;
	readonly vmUuid?: string | undefined;
}
export interface MachinePropertiesOsProfile {
	readonly computerName?: string | undefined;
}
export interface TrackedResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export default {
	machines: machines,
	"machines/extensions": machines_extensions,
};
