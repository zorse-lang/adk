import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class controller extends ArmResource<controllerComponentInputs> implements controllerComponentOutputs {
	constructor(entity: ADKEntity, options: controllerComponentInputs) {
		super(entity, options.name, "Microsoft.DelegatedNetwork/controller", "2020-08-08-preview", options);
	}
	public readonly apiVersion: "2020-08-08-preview";
	public readonly id: string;
	public readonly type: "Microsoft.DelegatedNetwork/controller";
}
export interface controllerComponentOutputs {
	readonly apiVersion: "2020-08-08-preview";
	readonly id: string;
	readonly type: "Microsoft.DelegatedNetwork/controller";
}
export interface controllerComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly properties?: DelegatedControllerProperties;
	readonly tags?: ControllerResourceTags;
}
export class delegatedSubnets
	extends ArmResource<delegatedSubnetsComponentInputs>
	implements delegatedSubnetsComponentOutputs
{
	constructor(entity: ADKEntity, options: delegatedSubnetsComponentInputs) {
		super(entity, options.name, "Microsoft.DelegatedNetwork/delegatedSubnets", "2020-08-08-preview", options);
	}
	public readonly apiVersion: "2020-08-08-preview";
	public readonly id: string;
	public readonly type: "Microsoft.DelegatedNetwork/delegatedSubnets";
}
export interface delegatedSubnetsComponentOutputs {
	readonly apiVersion: "2020-08-08-preview";
	readonly id: string;
	readonly type: "Microsoft.DelegatedNetwork/delegatedSubnets";
}
export interface delegatedSubnetsComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly properties?: DelegatedSubnetProperties;
	readonly tags?: DelegatedSubnetResourceTags;
}
export class orchestrators extends ArmResource<orchestratorsComponentInputs> implements orchestratorsComponentOutputs {
	constructor(entity: ADKEntity, options: orchestratorsComponentInputs) {
		super(entity, options.name, "Microsoft.DelegatedNetwork/orchestrators", "2020-08-08-preview", options);
	}
	public readonly apiVersion: "2020-08-08-preview";
	public readonly id: string;
	public readonly type: "Microsoft.DelegatedNetwork/orchestrators";
}
export interface orchestratorsComponentOutputs {
	readonly apiVersion: "2020-08-08-preview";
	readonly id: string;
	readonly type: "Microsoft.DelegatedNetwork/orchestrators";
}
export interface orchestratorsComponentInputs {
	readonly identity?: OrchestratorIdentity;
	readonly kind: "Kubernetes";
	readonly location?: string;
	readonly name: string;
	readonly properties?: OrchestratorResourceProperties;
	readonly tags?: OrchestratorResourceTags;
}
export interface ControllerDetails {
	readonly id?: string;
}
export interface ControllerResourceTags {
	readonly [key: string]: string;
}
export interface DelegatedControllerProperties {
	readonly dncAppId?: string;
	readonly dncEndpoint?: string;
	readonly dncTenantId?: string;
	readonly provisioningState?: "Deleting" | "Failed" | "Provisioning" | "Succeeded";
	readonly resourceGuid?: string;
}
export interface DelegatedSubnetProperties {
	readonly controllerDetails?: ControllerDetails;
	readonly provisioningState?: "Deleting" | "Failed" | "Provisioning" | "Succeeded";
	readonly resourceGuid?: string;
	readonly subnetDetails?: SubnetDetails;
}
export interface DelegatedSubnetResourceTags {
	readonly [key: string]: string;
}
export interface OrchestratorIdentity {
	readonly principalId?: string;
	readonly tenantId?: string;
	readonly type?: "None";
}
export interface OrchestratorResourceProperties {
	readonly apiServerEndpoint?: string;
	readonly clusterRootCA?: string;
	readonly controllerDetails: ControllerDetails;
	readonly orchestratorAppId?: string;
	readonly orchestratorTenantId?: string;
	readonly provisioningState?: "Deleting" | "Failed" | "Provisioning" | "Succeeded";
	readonly resourceGuid?: string;
}
export interface OrchestratorResourceTags {
	readonly [key: string]: string;
}
export interface SubnetDetails {
	readonly id?: string;
}
export default {
	controller: controller,
	delegatedSubnets: delegatedSubnets,
	orchestrators: orchestrators,
};
