import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class Server extends CfnResource<ServerComponentInputs> implements ServerComponentOutputs {
	constructor(entity: ADKEntity, options: ServerComponentInputs) {
		super(entity, options.LogicalId, "AWS::OpsWorksCM::Server", options);
	}
	public readonly Arn: string;
	public readonly Endpoint: string;
	public readonly Id: string;
}
export interface ServerComponentOutputs {
	readonly Arn: string;
	readonly Endpoint: string;
	readonly Id: string;
}
export interface ServerComponentInputs {
	readonly InstanceProfileArn: string;
	readonly InstanceType: string;
	readonly ServiceRoleArn: string;
	readonly AssociatePublicIpAddress?: boolean | undefined;
	readonly BackupId?: string | undefined;
	readonly BackupRetentionCount?: number | undefined;
	readonly CustomCertificate?: string | undefined;
	readonly CustomDomain?: string | undefined;
	readonly CustomPrivateKey?: string | undefined;
	readonly DisableAutomatedBackup?: boolean | undefined;
	readonly Engine?: string | undefined;
	readonly EngineAttributes?: EngineAttribute[] | undefined;
	readonly EngineModel?: string | undefined;
	readonly EngineVersion?: string | undefined;
	readonly KeyPair?: string | undefined;
	readonly PreferredBackupWindow?: string | undefined;
	readonly PreferredMaintenanceWindow?: string | undefined;
	readonly SecurityGroupIds?: string[] | undefined;
	readonly ServerName?: string | undefined;
	readonly SubnetIds?: string[] | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export interface EngineAttribute {
	readonly Name?: string | undefined;
	readonly Value?: string | undefined;
}
export default {
	Server: Server,
};
