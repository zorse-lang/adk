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
	readonly identity?: Identity;
	readonly location: string;
	readonly name: string;
	readonly properties?: MachineProperties;
	readonly tags?: ResourceTags;
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
	readonly identity?: Identity;
	readonly location: string;
	readonly name: string;
	readonly properties?: MachineExtensionProperties;
	readonly tags?: ResourceTags;
}
export interface ErrorDetail {
	readonly code: string;
	readonly details?: ErrorDetail[];
	readonly message: string;
	readonly target?: string;
}
export interface Identity {
	readonly principalId?: string;
	readonly tenantId?: string;
	readonly type?: string;
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
	readonly level?: "Error" | "Info";
	readonly message?: string;
	readonly time?: string;
}
export interface MachineExtensionProperties {
	readonly autoUpgradeMinorVersion?: boolean;
	readonly forceUpdateTag?: string;
	readonly instanceView?: MachineExtensionInstanceView;
	readonly protectedSettings?: any;
	readonly provisioningState?: string;
	readonly publisher?: string;
	readonly settings?: any;
	readonly type?: string;
	readonly typeHandlerVersion?: string;
}
export interface MachineProperties {
	readonly agentVersion?: string;
	readonly clientPublicKey?: string;
	readonly displayName?: string;
	readonly errorDetails?: ErrorDetail[];
	readonly extensions?: MachineExtensionInstanceView[];
	readonly lastStatusChange?: string;
	readonly machineFqdn?: string;
	readonly osName?: string;
	readonly osProfile?: OSProfile;
	readonly osVersion?: string;
	readonly physicalLocation?: string;
	readonly provisioningState?: string;
	readonly status?: "Connected" | "Disconnected";
	readonly vmId?: string;
}
export interface OSProfile {
	readonly computerName?: string;
}
export interface ResourceTags {
	readonly [key: string]: string;
}
export default {
	machines: machines,
	"machines/extensions": machines_extensions,
};
