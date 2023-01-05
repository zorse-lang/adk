import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class Cell extends CfnResource<CellComponentInputs> implements CellComponentOutputs {
	constructor(entity: ADKEntity, options: CellComponentInputs) {
		super(entity, options.LogicalId, "AWS::Route53RecoveryReadiness::Cell", options);
	}
	public readonly CellArn: string;
	public readonly ParentReadinessScopes: string[];
}
export interface CellComponentOutputs {
	readonly CellArn: string;
	readonly ParentReadinessScopes: string[];
}
export interface CellComponentInputs {
	readonly CellName?: string | undefined;
	readonly Cells?: string[] | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export class ReadinessCheck extends CfnResource<ReadinessCheckComponentInputs> implements ReadinessCheckComponentOutputs {
	constructor(entity: ADKEntity, options: ReadinessCheckComponentInputs) {
		super(entity, options.LogicalId, "AWS::Route53RecoveryReadiness::ReadinessCheck", options);
	}
	public readonly ReadinessCheckArn: string;
}
export interface ReadinessCheckComponentOutputs {
	readonly ReadinessCheckArn: string;
}
export interface ReadinessCheckComponentInputs {
	readonly ReadinessCheckName?: string | undefined;
	readonly ResourceSetName?: string | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export class RecoveryGroup extends CfnResource<RecoveryGroupComponentInputs> implements RecoveryGroupComponentOutputs {
	constructor(entity: ADKEntity, options: RecoveryGroupComponentInputs) {
		super(entity, options.LogicalId, "AWS::Route53RecoveryReadiness::RecoveryGroup", options);
	}
	public readonly RecoveryGroupArn: string;
}
export interface RecoveryGroupComponentOutputs {
	readonly RecoveryGroupArn: string;
}
export interface RecoveryGroupComponentInputs {
	readonly Cells?: string[] | undefined;
	readonly RecoveryGroupName?: string | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export class ResourceSet extends CfnResource<ResourceSetComponentInputs> implements ResourceSetComponentOutputs {
	constructor(entity: ADKEntity, options: ResourceSetComponentInputs) {
		super(entity, options.LogicalId, "AWS::Route53RecoveryReadiness::ResourceSet", options);
	}
	public readonly ResourceSetArn: string;
}
export interface ResourceSetComponentOutputs {
	readonly ResourceSetArn: string;
}
export interface ResourceSetComponentInputs {
	readonly Resources: Resource[];
	readonly ResourceSetType: string;
	readonly ResourceSetName?: string | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export interface DNSTargetResource {
	readonly DomainName?: string | undefined;
	readonly HostedZoneArn?: string | undefined;
	readonly RecordSetId?: string | undefined;
	readonly RecordType?: string | undefined;
	readonly TargetResource?: TargetResource | undefined;
}
export interface NLBResource {
	readonly Arn?: string | undefined;
}
export interface R53ResourceRecord {
	readonly DomainName?: string | undefined;
	readonly RecordSetId?: string | undefined;
}
export interface Resource {
	readonly ComponentId?: string | undefined;
	readonly DnsTargetResource?: DNSTargetResource | undefined;
	readonly ReadinessScopes?: string[] | undefined;
	readonly ResourceArn?: string | undefined;
}
export interface TargetResource {
	readonly NLBResource?: NLBResource | undefined;
	readonly R53Resource?: R53ResourceRecord | undefined;
}
export default {
	Cell: Cell,
	ReadinessCheck: ReadinessCheck,
	RecoveryGroup: RecoveryGroup,
	ResourceSet: ResourceSet,
};
