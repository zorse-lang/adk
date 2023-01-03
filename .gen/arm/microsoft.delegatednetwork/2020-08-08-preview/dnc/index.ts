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
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: DelegatedControllerProperties | undefined;
	readonly tags?: ControllerResourceTags | undefined;
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
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: DelegatedSubnetProperties | undefined;
	readonly tags?: DelegatedSubnetResourceTags | undefined;
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
	readonly identity?: OrchestratorIdentity | undefined;
	readonly kind: "Kubernetes";
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: OrchestratorResourceProperties | undefined;
	readonly tags?: OrchestratorResourceTags | undefined;
}
export interface ControllerDetails {
	readonly id?: string | undefined;
}
export interface ControllerResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface DelegatedControllerProperties {
	readonly dncAppId?: string | undefined;
	readonly dncEndpoint?: string | undefined;
	readonly dncTenantId?: string | undefined;
	readonly provisioningState?: ("Deleting" | "Failed" | "Provisioning" | "Succeeded") | undefined;
	readonly resourceGuid?: string | undefined;
}
export interface DelegatedSubnetProperties {
	readonly controllerDetails?: ControllerDetails | undefined;
	readonly provisioningState?: ("Deleting" | "Failed" | "Provisioning" | "Succeeded") | undefined;
	readonly resourceGuid?: string | undefined;
	readonly subnetDetails?: SubnetDetails | undefined;
}
export interface DelegatedSubnetResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface OrchestratorIdentity {
	readonly principalId?: string | undefined;
	readonly tenantId?: string | undefined;
	readonly type?: "None" | undefined;
}
export interface OrchestratorResourceProperties {
	readonly apiServerEndpoint?: string | undefined;
	readonly clusterRootCA?: string | undefined;
	readonly controllerDetails: ControllerDetails;
	readonly orchestratorAppId?: string | undefined;
	readonly orchestratorTenantId?: string | undefined;
	readonly provisioningState?: ("Deleting" | "Failed" | "Provisioning" | "Succeeded") | undefined;
	readonly resourceGuid?: string | undefined;
}
export interface OrchestratorResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface SubnetDetails {
	readonly id?: string | undefined;
}
export default {
	controller: controller,
	delegatedSubnets: delegatedSubnets,
	orchestrators: orchestrators,
};
