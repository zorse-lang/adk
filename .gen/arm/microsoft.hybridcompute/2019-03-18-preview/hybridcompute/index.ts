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
	readonly identity?: Identity | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties?: MachineProperties | undefined;
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
export interface MachineProperties {
	readonly agentVersion?: string | undefined;
	readonly clientPublicKey?: string | undefined;
	readonly displayName?: string | undefined;
	readonly errorDetails?: ErrorDetail[] | undefined;
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
};
