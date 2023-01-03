import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class machines extends ArmResource<machinesComponentInputs> implements machinesComponentOutputs {
	constructor(entity: ADKEntity, options: machinesComponentInputs) {
		super(entity, options.name, "Microsoft.HybridCompute/machines", "2019-08-02-preview", options);
	}
	public readonly apiVersion: "2019-08-02-preview";
	public readonly id: string;
	public readonly type: "Microsoft.HybridCompute/machines";
}
export interface machinesComponentOutputs {
	readonly apiVersion: "2019-08-02-preview";
	readonly id: string;
	readonly type: "Microsoft.HybridCompute/machines";
}
export interface machinesComponentInputs {
	readonly identity?: Identity | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties?: MachineProperties | undefined;
	readonly tags?: ResourceTags | undefined;
}
export class machines_extensions
	extends ArmResource<machines_extensionsComponentInputs>
	implements machines_extensionsComponentOutputs
{
	constructor(entity: ADKEntity, options: machines_extensionsComponentInputs) {
		super(entity, options.name, "Microsoft.HybridCompute/machines/extensions", "2019-08-02-preview", options);
	}
	public readonly apiVersion: "2019-08-02-preview";
	public readonly id: string;
	public readonly type: "Microsoft.HybridCompute/machines/extensions";
}
export interface machines_extensionsComponentOutputs {
	readonly apiVersion: "2019-08-02-preview";
	readonly id: string;
	readonly type: "Microsoft.HybridCompute/machines/extensions";
}
export interface machines_extensionsComponentInputs {
	readonly identity?: Identity | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties?: MachineExtensionProperties | undefined;
	readonly tags?: ResourceTags | undefined;
}
export interface ErrorDetail {
	readonly code: string;
	readonly details?: ErrorDetail[] | undefined;
	readonly message: string;
	readonly target?: string | undefined;
}
export interface Identity {
	readonly principalId?: string | undefined;
	readonly tenantId?: string | undefined;
	readonly type?: string | undefined;
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
	readonly level?: ("Error" | "Info") | undefined;
	readonly message?: string | undefined;
	readonly time?: string | undefined;
}
export interface MachineExtensionProperties {
	readonly autoUpgradeMinorVersion?: boolean | undefined;
	readonly forceUpdateTag?: string | undefined;
	readonly instanceView?: MachineExtensionInstanceView | undefined;
	readonly protectedSettings?: any | undefined;
	readonly provisioningState?: string | undefined;
	readonly publisher?: string | undefined;
	readonly settings?: any | undefined;
	readonly type?: string | undefined;
	readonly typeHandlerVersion?: string | undefined;
}
export interface MachineProperties {
	readonly agentVersion?: string | undefined;
	readonly clientPublicKey?: string | undefined;
	readonly displayName?: string | undefined;
	readonly errorDetails?: ErrorDetail[] | undefined;
	readonly extensions?: MachineExtensionInstanceView[] | undefined;
	readonly lastStatusChange?: string | undefined;
	readonly machineFqdn?: string | undefined;
	readonly osName?: string | undefined;
	readonly osProfile?: OSProfile | undefined;
	readonly osVersion?: string | undefined;
	readonly physicalLocation?: string | undefined;
	readonly provisioningState?: string | undefined;
	readonly status?: ("Connected" | "Disconnected") | undefined;
	readonly vmId?: string | undefined;
}
export interface OSProfile {
	readonly computerName?: string | undefined;
}
export interface ResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export default {
	machines: machines,
	"machines/extensions": machines_extensions,
};
