import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class Filter extends CfnResource<FilterComponentInputs> implements FilterComponentOutputs {
	constructor(entity: ADKEntity, options: FilterComponentInputs) {
		super(entity, options.LogicalId, "AWS::InspectorV2::Filter", options);
	}
	public readonly Arn: string;
}
export interface FilterComponentOutputs {
	readonly Arn: string;
}
export interface FilterComponentInputs {
	readonly FilterAction: string;
	readonly FilterCriteria: FilterCriteria;
	readonly Name: string;
	readonly Description?: string | undefined;
	readonly LogicalId: string;
}
export interface DateFilter {
	readonly EndInclusive?: number | undefined;
	readonly StartInclusive?: number | undefined;
}
export interface FilterCriteria {
	readonly AwsAccountId?: StringFilter[] | undefined;
	readonly ComponentId?: StringFilter[] | undefined;
	readonly ComponentType?: StringFilter[] | undefined;
	readonly Ec2InstanceImageId?: StringFilter[] | undefined;
	readonly Ec2InstanceSubnetId?: StringFilter[] | undefined;
	readonly Ec2InstanceVpcId?: StringFilter[] | undefined;
	readonly EcrImageArchitecture?: StringFilter[] | undefined;
	readonly EcrImageHash?: StringFilter[] | undefined;
	readonly EcrImagePushedAt?: DateFilter[] | undefined;
	readonly EcrImageRegistry?: StringFilter[] | undefined;
	readonly EcrImageRepositoryName?: StringFilter[] | undefined;
	readonly EcrImageTags?: StringFilter[] | undefined;
	readonly FindingArn?: StringFilter[] | undefined;
	readonly FindingStatus?: StringFilter[] | undefined;
	readonly FindingType?: StringFilter[] | undefined;
	readonly FirstObservedAt?: DateFilter[] | undefined;
	readonly InspectorScore?: NumberFilter[] | undefined;
	readonly LastObservedAt?: DateFilter[] | undefined;
	readonly NetworkProtocol?: StringFilter[] | undefined;
	readonly PortRange?: PortRangeFilter[] | undefined;
	readonly RelatedVulnerabilities?: StringFilter[] | undefined;
	readonly ResourceId?: StringFilter[] | undefined;
	readonly ResourceTags?: MapFilter[] | undefined;
	readonly ResourceType?: StringFilter[] | undefined;
	readonly Severity?: StringFilter[] | undefined;
	readonly Title?: StringFilter[] | undefined;
	readonly UpdatedAt?: DateFilter[] | undefined;
	readonly VendorSeverity?: StringFilter[] | undefined;
	readonly VulnerabilityId?: StringFilter[] | undefined;
	readonly VulnerabilitySource?: StringFilter[] | undefined;
	readonly VulnerablePackages?: PackageFilter[] | undefined;
}
export interface MapFilter {
	readonly Comparison: string;
	readonly Key?: string | undefined;
	readonly Value?: string | undefined;
}
export interface NumberFilter {
	readonly LowerInclusive?: number | undefined;
	readonly UpperInclusive?: number | undefined;
}
export interface PackageFilter {
	readonly Architecture?: StringFilter | undefined;
	readonly Epoch?: NumberFilter | undefined;
	readonly Name?: StringFilter | undefined;
	readonly Release?: StringFilter | undefined;
	readonly SourceLayerHash?: StringFilter | undefined;
	readonly Version?: StringFilter | undefined;
}
export interface PortRangeFilter {
	readonly BeginInclusive?: number | undefined;
	readonly EndInclusive?: number | undefined;
}
export interface StringFilter {
	readonly Comparison: string;
	readonly Value: string;
}
export default {
	Filter: Filter,
};
