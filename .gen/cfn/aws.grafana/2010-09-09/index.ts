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
	readonly AccountAccessType?: (string | undefined) | undefined;
	readonly AuthenticationProviders?: (string[] | undefined) | undefined;
	readonly ClientToken?: (string | undefined) | undefined;
	readonly DataSources?: (string[] | undefined) | undefined;
	readonly Description?: (string | undefined) | undefined;
	readonly Name?: (string | undefined) | undefined;
	readonly NotificationDestinations?: (string[] | undefined) | undefined;
	readonly OrganizationalUnits?: (string[] | undefined) | undefined;
	readonly OrganizationRoleName?: (string | undefined) | undefined;
	readonly PermissionType?: (string | undefined) | undefined;
	readonly RoleArn?: (string | undefined) | undefined;
	readonly SamlConfiguration?: (SamlConfiguration | undefined) | undefined;
	readonly StackSetName?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export interface AssertionAttributes {
	readonly Email?: (string | undefined) | undefined;
	readonly Groups?: (string | undefined) | undefined;
	readonly Login?: (string | undefined) | undefined;
	readonly Name?: (string | undefined) | undefined;
	readonly Org?: (string | undefined) | undefined;
	readonly Role?: (string | undefined) | undefined;
}
export interface IdpMetadata {
	readonly Url?: (string | undefined) | undefined;
	readonly Xml?: (string | undefined) | undefined;
}
export interface RoleValues {
	readonly Admin?: (string[] | undefined) | undefined;
	readonly Editor?: (string[] | undefined) | undefined;
}
export interface SamlConfiguration {
	readonly AllowedOrganizations?: (string[] | undefined) | undefined;
	readonly AssertionAttributes?: (AssertionAttributes | undefined) | undefined;
	readonly IdpMetadata: IdpMetadata;
	readonly LoginValidityDuration?: (number | undefined) | undefined;
	readonly RoleValues?: (RoleValues | undefined) | undefined;
}
export default {
	Workspace: Workspace,
};
