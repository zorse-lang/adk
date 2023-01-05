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
	readonly Tags?: { key: string; value: string }[] | undefined;
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
	readonly RootVolumeEncryptionEnabled?: boolean | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly UserVolumeEncryptionEnabled?: boolean | undefined;
	readonly VolumeEncryptionKey?: string | undefined;
	readonly WorkspaceProperties?: WorkspaceProperties | undefined;
	readonly LogicalId: string;
}
export interface ConnectionAliasAssociation {
	readonly AssociatedAccountId?: string | undefined;
	readonly AssociationStatus?: string | undefined;
	readonly ConnectionIdentifier?: string | undefined;
	readonly ResourceId?: string | undefined;
}
export interface WorkspaceProperties {
	readonly ComputeTypeName?: string | undefined;
	readonly RootVolumeSizeGib?: number | undefined;
	readonly RunningMode?: string | undefined;
	readonly RunningModeAutoStopTimeoutInMinutes?: number | undefined;
	readonly UserVolumeSizeGib?: number | undefined;
}
export default {
	ConnectionAlias: ConnectionAlias,
	Workspace: Workspace,
};
