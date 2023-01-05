import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class machines extends ArmResource<machinesComponentInputs> implements machinesComponentOutputs {
	constructor(entity: ADKEntity, options: machinesComponentInputs) {
		super(entity, options.name, "Microsoft.HybridCompute/machines", "2019-03-18-preview", options);
	}
	public readonly apiVersion: "2019-03-18-preview";
	public readonly id: string;
	public readonly type: "Microsoft.HybridCompute/machines";
}
export interface machinesComponentOutputs {
	readonly apiVersion: "2019-03-18-preview";
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
export interface MachineProperties {
	readonly agentVersion?: string;
	readonly clientPublicKey?: string;
	readonly displayName?: string;
	readonly errorDetails?: ErrorDetail[];
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
};
