import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class Detector extends CfnResource<DetectorComponentInputs> implements DetectorComponentOutputs {
	constructor(entity: ADKEntity, options: DetectorComponentInputs) {
		super(entity, options.LogicalId, "AWS::GuardDuty::Detector", options);
	}
}
export interface DetectorComponentOutputs {}
export interface DetectorComponentInputs {
	readonly Enable: boolean;
	readonly DataSources?: CFNDataSourceConfigurations | undefined;
	readonly FindingPublishingFrequency?: string | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export class Filter extends CfnResource<FilterComponentInputs> implements FilterComponentOutputs {
	constructor(entity: ADKEntity, options: FilterComponentInputs) {
		super(entity, options.LogicalId, "AWS::GuardDuty::Filter", options);
	}
}
export interface FilterComponentOutputs {}
export interface FilterComponentInputs {
	readonly Action: string;
	readonly Description: string;
	readonly DetectorId: string;
	readonly FindingCriteria: FindingCriteria;
	readonly Name: string;
	readonly Rank: number;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export class IPSet extends CfnResource<IPSetComponentInputs> implements IPSetComponentOutputs {
	constructor(entity: ADKEntity, options: IPSetComponentInputs) {
		super(entity, options.LogicalId, "AWS::GuardDuty::IPSet", options);
	}
}
export interface IPSetComponentOutputs {}
export interface IPSetComponentInputs {
	readonly Activate: boolean;
	readonly DetectorId: string;
	readonly Format: string;
	readonly Location: string;
	readonly Name?: string | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export class Master extends CfnResource<MasterComponentInputs> implements MasterComponentOutputs {
	constructor(entity: ADKEntity, options: MasterComponentInputs) {
		super(entity, options.LogicalId, "AWS::GuardDuty::Master", options);
	}
}
export interface MasterComponentOutputs {}
export interface MasterComponentInputs {
	readonly DetectorId: string;
	readonly MasterId: string;
	readonly InvitationId?: string | undefined;
	readonly LogicalId: string;
}
export class Member extends CfnResource<MemberComponentInputs> implements MemberComponentOutputs {
	constructor(entity: ADKEntity, options: MemberComponentInputs) {
		super(entity, options.LogicalId, "AWS::GuardDuty::Member", options);
	}
}
export interface MemberComponentOutputs {}
export interface MemberComponentInputs {
	readonly DetectorId: string;
	readonly Email: string;
	readonly MemberId: string;
	readonly DisableEmailNotification?: boolean | undefined;
	readonly Message?: string | undefined;
	readonly Status?: string | undefined;
	readonly LogicalId: string;
}
export class ThreatIntelSet extends CfnResource<ThreatIntelSetComponentInputs> implements ThreatIntelSetComponentOutputs {
	constructor(entity: ADKEntity, options: ThreatIntelSetComponentInputs) {
		super(entity, options.LogicalId, "AWS::GuardDuty::ThreatIntelSet", options);
	}
}
export interface ThreatIntelSetComponentOutputs {}
export interface ThreatIntelSetComponentInputs {
	readonly Activate: boolean;
	readonly DetectorId: string;
	readonly Format: string;
	readonly Location: string;
	readonly Name?: string | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export interface CFNDataSourceConfigurations {
	readonly Kubernetes?: CFNKubernetesConfiguration | undefined;
	readonly MalwareProtection?: CFNMalwareProtectionConfiguration | undefined;
	readonly S3Logs?: CFNS3LogsConfiguration | undefined;
}
export interface CFNKubernetesAuditLogsConfiguration {
	readonly Enable?: boolean | undefined;
}
export interface CFNKubernetesConfiguration {
	readonly AuditLogs?: CFNKubernetesAuditLogsConfiguration | undefined;
}
export interface CFNMalwareProtectionConfiguration {
	readonly ScanEc2InstanceWithFindings?: CFNScanEc2InstanceWithFindingsConfiguration | undefined;
}
export interface CFNS3LogsConfiguration {
	readonly Enable?: boolean | undefined;
}
export interface CFNScanEc2InstanceWithFindingsConfiguration {
	readonly EbsVolumes?: boolean | undefined;
}
export interface Condition {
	readonly Eq?: string[] | undefined;
	readonly Equals?: string[] | undefined;
	readonly GreaterThan?: number | undefined;
	readonly GreaterThanOrEqual?: number | undefined;
	readonly Gt?: number | undefined;
	readonly Gte?: number | undefined;
	readonly LessThan?: number | undefined;
	readonly LessThanOrEqual?: number | undefined;
	readonly Lt?: number | undefined;
	readonly Lte?: number | undefined;
	readonly Neq?: string[] | undefined;
	readonly NotEquals?: string[] | undefined;
}
export interface FindingCriteria {
	readonly Criterion?: any | undefined;
	readonly ItemType?: Condition | undefined;
}
export default {
	Detector: Detector,
	Filter: Filter,
	IPSet: IPSet,
	Master: Master,
	Member: Member,
	ThreatIntelSet: ThreatIntelSet,
};
