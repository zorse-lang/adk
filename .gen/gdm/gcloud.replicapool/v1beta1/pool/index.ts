import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class Pool extends GdmResource<PoolComponentInputs> implements PoolComponentOutputs {
	constructor(entity: ADKEntity, options: PoolComponentInputs) {
		super(entity, options.name, "replicapool.v1beta1.pool", options);
	}
	public readonly currentNumReplicas?: number | undefined;
	public readonly selfLink?: string | undefined;
}
export interface PoolComponentOutputs {
	readonly currentNumReplicas?: number | undefined;
	readonly selfLink?: string | undefined;
}
export interface PoolComponentInputs {
	readonly autoRestart?: boolean | undefined;
	readonly baseInstanceName?: string | undefined;
	readonly description?: string | undefined;
	readonly healthChecks?: HealthCheck[] | undefined;
	readonly initialNumReplicas?: number | undefined;
	readonly labels?: Label[] | undefined;
	readonly name: string;
	readonly numReplicas?: number | undefined;
	readonly resourceViews?: string[] | undefined;
	readonly targetPool?: string | undefined;
	readonly targetPools?: string[] | undefined;
	readonly template?: Template | undefined;
	readonly type: string;
}
export interface AccessConfig {
	readonly name?: string | undefined;
	readonly natIp?: string | undefined;
	readonly type?: string | undefined;
}
export interface Action {
	readonly commands?: string[] | undefined;
	readonly envVariables?: EnvVariable[] | undefined;
	readonly timeoutMilliSeconds?: number | undefined;
}
export interface DiskAttachment {
	readonly deviceName?: string | undefined;
	readonly index?: number | undefined;
}
export interface EnvVariable {
	readonly hidden?: boolean | undefined;
	readonly name?: string | undefined;
	readonly value?: string | undefined;
}
export interface ExistingDisk {
	readonly attachment?: DiskAttachment | undefined;
	readonly source?: string | undefined;
}
export interface HealthCheck {
	readonly checkIntervalSec?: number | undefined;
	readonly description?: string | undefined;
	readonly healthyThreshold?: number | undefined;
	readonly host?: string | undefined;
	readonly name?: string | undefined;
	readonly path?: string | undefined;
	readonly port?: number | undefined;
	readonly timeoutSec?: number | undefined;
	readonly unhealthyThreshold?: number | undefined;
}
export interface Label {
	readonly key?: string | undefined;
	readonly value?: string | undefined;
}
export interface Metadata {
	readonly fingerPrint?: string | undefined;
	readonly items?: MetadataItem[] | undefined;
}
export interface MetadataItem {
	readonly key?: string | undefined;
	readonly value?: string | undefined;
}
export interface NetworkInterface {
	readonly accessConfigs?: AccessConfig[] | undefined;
	readonly network?: string | undefined;
	readonly networkIp?: string | undefined;
}
export interface NewDisk {
	readonly attachment?: DiskAttachment | undefined;
	readonly autoDelete?: boolean | undefined;
	readonly boot?: boolean | undefined;
	readonly initializeParams?: NewDiskInitializeParams | undefined;
}
export interface NewDiskInitializeParams {
	readonly diskSizeGb?: string | undefined;
	readonly diskType?: string | undefined;
	readonly sourceImage?: string | undefined;
}
export interface ServiceAccount {
	readonly email?: string | undefined;
	readonly scopes?: string[] | undefined;
}
export interface Tag {
	readonly fingerPrint?: string | undefined;
	readonly items?: string[] | undefined;
}
export interface Template {
	readonly action?: Action | undefined;
	readonly healthChecks?: HealthCheck[] | undefined;
	readonly version?: string | undefined;
	readonly vmParams?: VmParams | undefined;
}
export interface VmParams {
	readonly baseInstanceName?: string | undefined;
	readonly canIpForward?: boolean | undefined;
	readonly description?: string | undefined;
	readonly disksToAttach?: ExistingDisk[] | undefined;
	readonly disksToCreate?: NewDisk[] | undefined;
	readonly machineType?: string | undefined;
	readonly metadata?: Metadata | undefined;
	readonly networkInterfaces?: NetworkInterface[] | undefined;
	readonly onHostMaintenance?: string | undefined;
	readonly serviceAccounts?: ServiceAccount[] | undefined;
	readonly tags?: Tag | undefined;
}
export default {
	Pool: Pool,
};
