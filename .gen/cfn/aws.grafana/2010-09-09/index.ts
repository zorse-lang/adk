import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class Workspace extends CfnResource<WorkspaceComponentInputs> implements WorkspaceComponentOutputs {
	constructor(entity: ADKEntity, options: WorkspaceComponentInputs) {
		super(entity, options.LogicalId, "AWS::Grafana::Workspace", options);
	}
	public readonly CreationTimestamp: string;
	public readonly Endpoint: string;
	public readonly GrafanaVersion: string;
	public readonly Id: string;
	public readonly ModificationTimestamp: string;
	public readonly SamlConfigurationStatus: string;
	public readonly SsoClientId: string;
	public readonly Status: string;
}
export interface WorkspaceComponentOutputs {
	readonly CreationTimestamp: string;
	readonly Endpoint: string;
	readonly GrafanaVersion: string;
	readonly Id: string;
	readonly ModificationTimestamp: string;
	readonly SamlConfigurationStatus: string;
	readonly SsoClientId: string;
	readonly Status: string;
}
export interface WorkspaceComponentInputs {
	readonly AccountAccessType?: string | undefined;
	readonly AuthenticationProviders?: string[] | undefined;
	readonly ClientToken?: string | undefined;
	readonly DataSources?: string[] | undefined;
	readonly Description?: string | undefined;
	readonly Name?: string | undefined;
	readonly NotificationDestinations?: string[] | undefined;
	readonly OrganizationalUnits?: string[] | undefined;
	readonly OrganizationRoleName?: string | undefined;
	readonly PermissionType?: string | undefined;
	readonly RoleArn?: string | undefined;
	readonly SamlConfiguration?: SamlConfiguration | undefined;
	readonly StackSetName?: string | undefined;
	readonly LogicalId: string;
}
export interface AssertionAttributes {
	readonly Email?: string | undefined;
	readonly Groups?: string | undefined;
	readonly Login?: string | undefined;
	readonly Name?: string | undefined;
	readonly Org?: string | undefined;
	readonly Role?: string | undefined;
}
export interface IdpMetadata {
	readonly Url?: string | undefined;
	readonly Xml?: string | undefined;
}
export interface RoleValues {
	readonly Admin?: string[] | undefined;
	readonly Editor?: string[] | undefined;
}
export interface SamlConfiguration {
	readonly AllowedOrganizations?: string[] | undefined;
	readonly AssertionAttributes?: AssertionAttributes | undefined;
	readonly IdpMetadata: IdpMetadata;
	readonly LoginValidityDuration?: number | undefined;
	readonly RoleValues?: RoleValues | undefined;
}
export default {
	Workspace: Workspace,
};
