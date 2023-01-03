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
	readonly AssociatePublicIpAddress?: (boolean | undefined) | undefined;
	readonly BackupId?: (string | undefined) | undefined;
	readonly BackupRetentionCount?: (number | undefined) | undefined;
	readonly CustomCertificate?: (string | undefined) | undefined;
	readonly CustomDomain?: (string | undefined) | undefined;
	readonly CustomPrivateKey?: (string | undefined) | undefined;
	readonly DisableAutomatedBackup?: (boolean | undefined) | undefined;
	readonly Engine?: (string | undefined) | undefined;
	readonly EngineAttributes?: (EngineAttribute[] | undefined) | undefined;
	readonly EngineModel?: (string | undefined) | undefined;
	readonly EngineVersion?: (string | undefined) | undefined;
	readonly KeyPair?: (string | undefined) | undefined;
	readonly PreferredBackupWindow?: (string | undefined) | undefined;
	readonly PreferredMaintenanceWindow?: (string | undefined) | undefined;
	readonly SecurityGroupIds?: (string[] | undefined) | undefined;
	readonly ServerName?: (string | undefined) | undefined;
	readonly SubnetIds?: (string[] | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly LogicalId: string;
}
export interface EngineAttribute {
	readonly Name?: (string | undefined) | undefined;
	readonly Value?: (string | undefined) | undefined;
}
export default {
	Server: Server,
};
