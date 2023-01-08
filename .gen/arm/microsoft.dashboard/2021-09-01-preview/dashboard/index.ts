import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class grafana extends ArmResource<grafanaComponentInputs> implements grafanaComponentOutputs {
	constructor(entity: ADKEntity, options: grafanaComponentInputs) {
		super(entity, options.name, "Microsoft.Dashboard/grafana", "2021-09-01-preview", options);
	}
	public readonly apiVersion: "2021-09-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Dashboard/grafana";
}
export interface grafanaComponentOutputs {
	readonly apiVersion: "2021-09-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Dashboard/grafana";
}
export interface grafanaComponentInputs {
	readonly identity?: ManagedIdentity;
	readonly location?: string;
	readonly name: string;
	readonly properties?: ManagedGrafanaProperties;
	readonly sku?: ResourceSku;
	readonly systemData?: SystemData;
	readonly tags?: ManagedGrafanaTags;
}
export interface ManagedGrafanaProperties {
	readonly autoGeneratedDomainNameLabelScope?: "TenantReuse";
	readonly endpoint?: string;
	readonly grafanaVersion?: string;
	readonly provisioningState?:
		| "Accepted"
		| "Canceled"
		| "Creating"
		| "Deleted"
		| "Deleting"
		| "Failed"
		| "NotSpecified"
		| "Succeeded"
		| "Updating";
	readonly zoneRedundancy?: "Disabled" | "Enabled";
}
export interface ManagedGrafanaTags {
	readonly [key: string]: string;
}
export interface ManagedIdentity {
	readonly principalId?: string;
	readonly tenantId?: string;
	readonly type?: "None" | "SystemAssigned";
	readonly userAssignedIdentities?: ManagedIdentityUserAssignedIdentities;
}
export interface ManagedIdentityUserAssignedIdentities {
	readonly [key: string]: UserAssignedIdentity;
}
export interface ResourceSku {
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
export interface UserAssignedIdentity {
	readonly clientId?: string;
	readonly principalId?: string;
}
export default {
	grafana: grafana,
};