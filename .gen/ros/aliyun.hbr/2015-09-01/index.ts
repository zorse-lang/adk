import { RosResource, Entity as ADKEntity } from "@zorse/adk";

export class BackupClients extends RosResource<BackupClientsComponentInputs> implements BackupClientsComponentOutputs {
	constructor(entity: ADKEntity, options: BackupClientsComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::HBR::BackupClients", options);
	}
	public readonly ClientIds: any;
}
export interface BackupClientsComponentOutputs {
	readonly ClientIds: any;
}
export interface BackupClientsComponentInputs {
	readonly InstanceIds: any | string[];
	readonly Tags?: (Tags[] | undefined) | undefined;
	readonly LogicalId: string;
}
export class DbAgent extends RosResource<DbAgentComponentInputs> implements DbAgentComponentOutputs {
	constructor(entity: ADKEntity, options: DbAgentComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::HBR::DbAgent", options);
	}
	public readonly UniBackupInstances: any;
	public readonly TaskId: any;
	public readonly UniBackupInstanceDetails: any;
	public readonly InstanceIds: any;
}
export interface DbAgentComponentOutputs {
	readonly UniBackupInstances: any;
	readonly TaskId: any;
	readonly UniBackupInstanceDetails: any;
	readonly InstanceIds: any;
}
export interface DbAgentComponentInputs {
	readonly InstanceInfo: InstanceInfo[];
	readonly LogicalId: string;
}
export class DbPlan extends RosResource<DbPlanComponentInputs> implements DbPlanComponentOutputs {
	constructor(entity: ADKEntity, options: DbPlanComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::HBR::DbPlan", options);
	}
	public readonly CumulativeUuid: any;
	public readonly PlanId: any;
	public readonly LogUuid: any;
	public readonly IncUuid: any;
	public readonly Target: any;
	public readonly ContinuousUuid: any;
	public readonly FullUuid: any;
}
export interface DbPlanComponentOutputs {
	readonly CumulativeUuid: any;
	readonly PlanId: any;
	readonly LogUuid: any;
	readonly IncUuid: any;
	readonly Target: any;
	readonly ContinuousUuid: any;
	readonly FullUuid: any;
}
export interface DbPlanComponentInputs {
	readonly DbPlanName: any | string;
	readonly HostUuid: any | string;
	readonly SourceType: any | string;
	readonly VaultId: any | string;
	readonly ContinuousPlan?: (any | string) | undefined;
	readonly CumulativePlan?: (any | string) | undefined;
	readonly FullPlan?: (any | string) | undefined;
	readonly IncPlan?: (any | string) | undefined;
	readonly InstanceUuid?: (any | string) | undefined;
	readonly LogPlan?: (any | string) | undefined;
	readonly MaxRateLimit?: (any | number) | undefined;
	readonly MaxRetrySeconds?: (any | number) | undefined;
	readonly Options?: (any | string) | undefined;
	readonly Source?: (Source | undefined) | undefined;
	readonly LogicalId: string;
}
export class DbVault extends RosResource<DbVaultComponentInputs> implements DbVaultComponentOutputs {
	constructor(entity: ADKEntity, options: DbVaultComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::HBR::DbVault", options);
	}
	public readonly VaultId: any;
}
export interface DbVaultComponentOutputs {
	readonly VaultId: any;
}
export interface DbVaultComponentInputs {
	readonly RetentionDays: any | number;
	readonly VaultName: any | string;
	readonly VaultRegionId: any | string;
	readonly Description?: (any | string) | undefined;
	readonly Tags?: (Tags[] | undefined) | undefined;
	readonly LogicalId: string;
}
export class RestoreJob extends RosResource<RestoreJobComponentInputs> implements RestoreJobComponentOutputs {
	constructor(entity: ADKEntity, options: RestoreJobComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::HBR::RestoreJob", options);
	}
	public readonly Status: any;
	public readonly RestoreId: any;
	public readonly ErrorMessage: any;
}
export interface RestoreJobComponentOutputs {
	readonly Status: any;
	readonly RestoreId: any;
	readonly ErrorMessage: any;
}
export interface RestoreJobComponentInputs {
	readonly RestoreType: any | string;
	readonly SnapshotId: string;
	readonly SourceClientId: string;
	readonly SourceInstanceId: string;
	readonly SourceType: any | string;
	readonly TargetClientId: string;
	readonly TargetInstanceId: string;
	readonly TargetPath: string;
	readonly VaultId: string;
	readonly LogicalId: string;
}
export interface Tags {
	readonly Value?: (string | undefined) | undefined;
	readonly Key: string;
}
export interface InstanceInfo {
	readonly UserName?: (string | undefined) | undefined;
	readonly InstanceId: string;
	readonly SourceType: string;
	readonly Password?: (string | undefined) | undefined;
	readonly AuthenticationType?: (string | undefined) | undefined;
}
export interface Source {
	readonly Entries?: (string[] | undefined) | undefined;
}
export default {
	BackupClients: BackupClients,
	DbAgent: DbAgent,
	DbPlan: DbPlan,
	DbVault: DbVault,
	RestoreJob: RestoreJob,
};
