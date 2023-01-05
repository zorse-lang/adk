import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class profile extends ArmResource<profileComponentInputs> implements profileComponentOutputs {
	constructor(entity: ADKEntity, options: profileComponentInputs) {
		super(entity, options.name, "Microsoft.ChangeAnalysis/profile", "2020-04-01-preview", options);
	}
	public readonly apiVersion: "2020-04-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ChangeAnalysis/profile";
}
export interface profileComponentOutputs {
	readonly apiVersion: "2020-04-01-preview";
	readonly id: string;
	readonly type: "Microsoft.ChangeAnalysis/profile";
}
export interface profileComponentInputs {
	readonly identity?: ResourceIdentity;
	readonly location?: string;
	readonly name: string;
	readonly properties?: ConfigurationProfileResourceProperties;
	readonly systemData?: SystemData;
}
export interface AzureMonitorWorkspaceProperties {
	readonly includeChangeDetails?: "Exclude" | "Include" | "None";
	readonly workspaceId?: string;
	readonly workspaceResourceId?: string;
}
export interface ConfigurationProfileResourceProperties {
	readonly notifications?: NotificationSettings;
}
export interface NotificationSettings {
	readonly activationState?: "Disabled" | "Enabled" | "None";
	readonly azureMonitorWorkspaceProperties?: AzureMonitorWorkspaceProperties;
}
export interface ResourceIdentity {
	readonly principalId?: string;
	readonly tenantId?: string;
	readonly type?: "None" | "SystemAssigned";
}
export interface SystemData {
	readonly createdAt?: string;
	readonly createdBy?: string;
	readonly createdByType?: string;
	readonly lastModifiedAt?: string;
	readonly lastModifiedBy?: string;
	readonly lastModifiedByType?: string;
}
export default {
	profile: profile,
};
