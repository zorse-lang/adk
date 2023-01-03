import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class ConnectionAlias
	extends CfnResource<ConnectionAliasComponentInputs>
	implements ConnectionAliasComponentOutputs
{
	constructor(entity: ADKEntity, options: ConnectionAliasComponentInputs) {
		super(entity, options.LogicalId, "AWS::WorkSpaces::ConnectionAlias", options);
	}
	public readonly AliasId: string;
	public readonly Associations: Map<string, ConnectionAliasAssociation>;
	public readonly ConnectionAliasState: string;
}
export interface ConnectionAliasComponentOutputs {
	readonly AliasId: string;
	readonly Associations: Map<string, ConnectionAliasAssociation>;
	readonly ConnectionAliasState: string;
}
export interface ConnectionAliasComponentInputs {
	readonly ConnectionString: string;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly LogicalId: string;
}
export class Workspace extends CfnResource<WorkspaceComponentInputs> implements WorkspaceComponentOutputs {
	constructor(entity: ADKEntity, options: WorkspaceComponentInputs) {
		super(entity, options.LogicalId, "AWS::WorkSpaces::Workspace", options);
	}
}
export interface WorkspaceComponentOutputs {}
export interface WorkspaceComponentInputs {
	readonly BundleId: string;
	readonly DirectoryId: string;
	readonly UserName: string;
	readonly RootVolumeEncryptionEnabled?: (boolean | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly UserVolumeEncryptionEnabled?: (boolean | undefined) | undefined;
	readonly VolumeEncryptionKey?: (string | undefined) | undefined;
	readonly WorkspaceProperties?: (WorkspaceProperties | undefined) | undefined;
	readonly LogicalId: string;
}
export interface ConnectionAliasAssociation {
	readonly AssociatedAccountId?: (string | undefined) | undefined;
	readonly AssociationStatus?: (string | undefined) | undefined;
	readonly ConnectionIdentifier?: (string | undefined) | undefined;
	readonly ResourceId?: (string | undefined) | undefined;
}
export interface WorkspaceProperties {
	readonly ComputeTypeName?: (string | undefined) | undefined;
	readonly RootVolumeSizeGib?: (number | undefined) | undefined;
	readonly RunningMode?: (string | undefined) | undefined;
	readonly RunningModeAutoStopTimeoutInMinutes?: (number | undefined) | undefined;
	readonly UserVolumeSizeGib?: (number | undefined) | undefined;
}
export default {
	ConnectionAlias: ConnectionAlias,
	Workspace: Workspace,
};
