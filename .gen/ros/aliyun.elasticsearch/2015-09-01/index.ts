import { RosResource, Entity as ADKEntity } from "@zorse/adk";

export class Instance extends RosResource<InstanceComponentInputs> implements InstanceComponentOutputs {
	constructor(entity: ADKEntity, options: InstanceComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::ElasticSearch::Instance", options);
	}
	public readonly Status: any;
	public readonly InstanceId: any;
	public readonly KibanaPort: any;
	public readonly Port: any;
	public readonly Domain: any;
	public readonly KibanaDomain: any;
	public readonly PublicDomain: any;
}
export interface InstanceComponentOutputs {
	readonly Status: any;
	readonly InstanceId: any;
	readonly KibanaPort: any;
	readonly Port: any;
	readonly Domain: any;
	readonly KibanaDomain: any;
	readonly PublicDomain: any;
}
export interface InstanceComponentInputs {
	readonly DataNode: DataNode;
	readonly Password: string;
	readonly Version: any | string;
	readonly VSwitchId: any | string;
	readonly Description?: string | undefined;
	readonly EnableKibanaPrivate?: boolean | undefined;
	readonly EnableKibanaPublic?: boolean | undefined;
	readonly EnablePublic?: boolean | undefined;
	readonly InstanceChargeType?: any | string;
	readonly KibanaNode?: KibanaNode | undefined;
	readonly KibanaWhitelist?: any[] | undefined;
	readonly MasterNode?: MasterNode | undefined;
	readonly Period?: number | undefined;
	readonly PeriodUnit?: string | undefined;
	readonly PrivateWhitelist?: any[] | undefined;
	readonly PublicWhitelist?: any[] | undefined;
	readonly ResourceGroupId?: string | undefined;
	readonly Tags?: Tags[] | undefined;
	readonly YMLConfig?: YMLConfig | undefined;
	readonly ZoneCount?: number | undefined;
	readonly ZoneId?: string | undefined;
	readonly LogicalId: string;
}
export interface DataNode {
	readonly DiskType: string;
	readonly DiskEncryption?: boolean | undefined;
	readonly PerformanceLevel?: string | undefined;
	readonly Amount: number;
	readonly DiskSize: number;
	readonly Spec: string;
}
export interface KibanaNode {
	readonly Spec: string;
}
export interface MasterNode {
	readonly DiskType?: string | undefined;
	readonly Amount?: number | undefined;
	readonly DiskSize?: number | undefined;
	readonly Spec: string;
}
export interface Tags {
	readonly Value?: string | undefined;
	readonly Key: string;
}
export interface YMLConfig {
	readonly CreateIndex?: string | undefined;
	readonly DestructiveRequiresName?: boolean | undefined;
	readonly OtherConfigs?: { [key: string]: any } | undefined;
	readonly Watcher?: boolean | undefined;
	readonly AuditLog?: boolean | undefined;
}
export default {
	Instance: Instance,
};
