import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class Detector extends CfnResource<DetectorComponentInputs> implements DetectorComponentOutputs {
	constructor(entity: ADKEntity, options: DetectorComponentInputs) {
		super(entity, options.LogicalId, "AWS::GuardDuty::Detector", options);
	}
}
export interface DetectorComponentOutputs {}
export interface DetectorComponentInputs {
	readonly Enable: boolean;
	readonly DataSources?: (CFNDataSourceConfigurations | undefined) | undefined;
	readonly FindingPublishingFrequency?: (string | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
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
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
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
	readonly Name?: (string | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
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
	readonly InvitationId?: (string | undefined) | undefined;
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
	readonly DisableEmailNotification?: (boolean | undefined) | undefined;
	readonly Message?: (string | undefined) | undefined;
	readonly Status?: (string | undefined) | undefined;
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
	readonly Name?: (string | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly LogicalId: string;
}
export interface CFNDataSourceConfigurations {
	readonly Kubernetes?: (CFNKubernetesConfiguration | undefined) | undefined;
	readonly MalwareProtection?: (CFNMalwareProtectionConfiguration | undefined) | undefined;
	readonly S3Logs?: (CFNS3LogsConfiguration | undefined) | undefined;
}
export interface CFNKubernetesAuditLogsConfiguration {
	readonly Enable?: (boolean | undefined) | undefined;
}
export interface CFNKubernetesConfiguration {
	readonly AuditLogs?: (CFNKubernetesAuditLogsConfiguration | undefined) | undefined;
}
export interface CFNMalwareProtectionConfiguration {
	readonly ScanEc2InstanceWithFindings?: (CFNScanEc2InstanceWithFindingsConfiguration | undefined) | undefined;
}
export interface CFNS3LogsConfiguration {
	readonly Enable?: (boolean | undefined) | undefined;
}
export interface CFNScanEc2InstanceWithFindingsConfiguration {
	readonly EbsVolumes?: (boolean | undefined) | undefined;
}
export interface Condition {
	readonly Eq?: (string[] | undefined) | undefined;
	readonly Equals?: (string[] | undefined) | undefined;
	readonly GreaterThan?: (number | undefined) | undefined;
	readonly GreaterThanOrEqual?: (number | undefined) | undefined;
	readonly Gt?: (number | undefined) | undefined;
	readonly Gte?: (number | undefined) | undefined;
	readonly LessThan?: (number | undefined) | undefined;
	readonly LessThanOrEqual?: (number | undefined) | undefined;
	readonly Lt?: (number | undefined) | undefined;
	readonly Lte?: (number | undefined) | undefined;
	readonly Neq?: (string[] | undefined) | undefined;
	readonly NotEquals?: (string[] | undefined) | undefined;
}
export interface FindingCriteria {
	readonly Criterion?: (any | undefined) | undefined;
	readonly ItemType?: (Condition | undefined) | undefined;
}
export default {
	Detector: Detector,
	Filter: Filter,
	IPSet: IPSet,
	Master: Master,
	Member: Member,
	ThreatIntelSet: ThreatIntelSet,
};
