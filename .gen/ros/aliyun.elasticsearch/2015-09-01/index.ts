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
	readonly Description?: (string | undefined) | undefined;
	readonly EnableKibanaPrivate?: (boolean | undefined) | undefined;
	readonly EnableKibanaPublic?: (boolean | undefined) | undefined;
	readonly EnablePublic?: (boolean | undefined) | undefined;
	readonly InstanceChargeType?: (any | string) | undefined;
	readonly KibanaNode?: (KibanaNode | undefined) | undefined;
	readonly KibanaWhitelist?: (any[] | undefined) | undefined;
	readonly MasterNode?: (MasterNode | undefined) | undefined;
	readonly Period?: (number | undefined) | undefined;
	readonly PeriodUnit?: (string | undefined) | undefined;
	readonly PrivateWhitelist?: (any[] | undefined) | undefined;
	readonly PublicWhitelist?: (any[] | undefined) | undefined;
	readonly ResourceGroupId?: (string | undefined) | undefined;
	readonly Tags?: (Tags[] | undefined) | undefined;
	readonly YMLConfig?: (YMLConfig | undefined) | undefined;
	readonly ZoneCount?: (number | undefined) | undefined;
	readonly ZoneId?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export interface DataNode {
	readonly DiskType: string;
	readonly DiskEncryption?: (boolean | undefined) | undefined;
	readonly PerformanceLevel?: (string | undefined) | undefined;
	readonly Amount: number;
	readonly DiskSize: number;
	readonly Spec: string;
}
export interface KibanaNode {
	readonly Spec: string;
}
export interface MasterNode {
	readonly DiskType?: (string | undefined) | undefined;
	readonly Amount?: (number | undefined) | undefined;
	readonly DiskSize?: (number | undefined) | undefined;
	readonly Spec: string;
}
export interface Tags {
	readonly Value?: (string | undefined) | undefined;
	readonly Key: string;
}
export interface YMLConfig {
	readonly CreateIndex?: (string | undefined) | undefined;
	readonly DestructiveRequiresName?: (boolean | undefined) | undefined;
	readonly OtherConfigs?: ({ [key: string]: any } | undefined) | undefined;
	readonly Watcher?: (boolean | undefined) | undefined;
	readonly AuditLog?: (boolean | undefined) | undefined;
}
export default {
	Instance: Instance,
};
