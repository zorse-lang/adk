import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class Pool extends GdmResource<PoolComponentInputs> implements PoolComponentOutputs {
	constructor(entity: ADKEntity, options: PoolComponentInputs) {
		super(entity, options.name, "replicapool.v1beta1.pool", options);
	}
	public readonly currentNumReplicas?: number;
	public readonly selfLink?: string;
}
export interface PoolComponentOutputs {
	readonly currentNumReplicas?: number;
	readonly selfLink?: string;
}
export interface PoolComponentInputs {
	readonly autoRestart?: boolean;
	readonly baseInstanceName?: string;
	readonly description?: string;
	readonly healthChecks?: HealthCheck[];
	readonly initialNumReplicas?: number;
	readonly labels?: Label[];
	readonly name: string;
	readonly numReplicas?: number;
	readonly resourceViews?: string[];
	readonly targetPool?: string;
	readonly targetPools?: string[];
	readonly template?: Template;
}
export interface AccessConfig {
	readonly name?: string;
	readonly natIp?: string;
	readonly type?: string;
}
export interface Action {
	readonly commands?: string[];
	readonly envVariables?: EnvVariable[];
	readonly timeoutMilliSeconds?: number;
}
export interface DiskAttachment {
	readonly deviceName?: string;
	readonly index?: number;
}
export interface EnvVariable {
	readonly hidden?: boolean;
	readonly name?: string;
	readonly value?: string;
}
export interface ExistingDisk {
	readonly attachment?: DiskAttachment;
	readonly source?: string;
}
export interface HealthCheck {
	readonly checkIntervalSec?: number;
	readonly description?: string;
	readonly healthyThreshold?: number;
	readonly host?: string;
	readonly name?: string;
	readonly path?: string;
	readonly port?: number;
	readonly timeoutSec?: number;
	readonly unhealthyThreshold?: number;
}
export interface Label {
	readonly key?: string;
	readonly value?: string;
}
export interface Metadata {
	readonly fingerPrint?: string;
	readonly items?: MetadataItem[];
}
export interface MetadataItem {
	readonly key?: string;
	readonly value?: string;
}
export interface NetworkInterface {
	readonly accessConfigs?: AccessConfig[];
	readonly network?: string;
	readonly networkIp?: string;
}
export interface NewDisk {
	readonly attachment?: DiskAttachment;
	readonly autoDelete?: boolean;
	readonly boot?: boolean;
	readonly initializeParams?: NewDiskInitializeParams;
}
export interface NewDiskInitializeParams {
	readonly diskSizeGb?: string;
	readonly diskType?: string;
	readonly sourceImage?: string;
}
export interface ServiceAccount {
	readonly email?: string;
	readonly scopes?: string[];
}
export interface Tag {
	readonly fingerPrint?: string;
	readonly items?: string[];
}
export interface Template {
	readonly action?: Action;
	readonly healthChecks?: HealthCheck[];
	readonly version?: string;
	readonly vmParams?: VmParams;
}
export interface VmParams {
	readonly baseInstanceName?: string;
	readonly canIpForward?: boolean;
	readonly description?: string;
	readonly disksToAttach?: ExistingDisk[];
	readonly disksToCreate?: NewDisk[];
	readonly machineType?: string;
	readonly metadata?: Metadata;
	readonly networkInterfaces?: NetworkInterface[];
	readonly onHostMaintenance?: string;
	readonly serviceAccounts?: ServiceAccount[];
	readonly tags?: Tag;
}
export default {
	Pool: Pool,
};
