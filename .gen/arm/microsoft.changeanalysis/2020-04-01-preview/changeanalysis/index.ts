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
	readonly identity?: ResourceIdentity | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: ConfigurationProfileResourceProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export interface AzureMonitorWorkspaceProperties {
	readonly includeChangeDetails?: ("Exclude" | "Include" | "None") | undefined;
	readonly workspaceId?: string | undefined;
	readonly workspaceResourceId?: string | undefined;
}
export interface ConfigurationProfileResourceProperties {
	readonly notifications?: NotificationSettings | undefined;
}
export interface NotificationSettings {
	readonly activationState?: ("Disabled" | "Enabled" | "None") | undefined;
	readonly azureMonitorWorkspaceProperties?: AzureMonitorWorkspaceProperties | undefined;
}
export interface ResourceIdentity {
	readonly principalId?: string | undefined;
	readonly tenantId?: string | undefined;
	readonly type?: ("None" | "SystemAssigned") | undefined;
}
export interface SystemData {
	readonly createdAt?: string | undefined;
	readonly createdBy?: string | undefined;
	readonly createdByType?: string | undefined;
	readonly lastModifiedAt?: string | undefined;
	readonly lastModifiedBy?: string | undefined;
	readonly lastModifiedByType?: string | undefined;
}
export default {
	profile: profile,
};
