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
	readonly Description?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export interface DateFilter {
	readonly EndInclusive?: (number | undefined) | undefined;
	readonly StartInclusive?: (number | undefined) | undefined;
}
export interface FilterCriteria {
	readonly AwsAccountId?: (StringFilter[] | undefined) | undefined;
	readonly ComponentId?: (StringFilter[] | undefined) | undefined;
	readonly ComponentType?: (StringFilter[] | undefined) | undefined;
	readonly Ec2InstanceImageId?: (StringFilter[] | undefined) | undefined;
	readonly Ec2InstanceSubnetId?: (StringFilter[] | undefined) | undefined;
	readonly Ec2InstanceVpcId?: (StringFilter[] | undefined) | undefined;
	readonly EcrImageArchitecture?: (StringFilter[] | undefined) | undefined;
	readonly EcrImageHash?: (StringFilter[] | undefined) | undefined;
	readonly EcrImagePushedAt?: (DateFilter[] | undefined) | undefined;
	readonly EcrImageRegistry?: (StringFilter[] | undefined) | undefined;
	readonly EcrImageRepositoryName?: (StringFilter[] | undefined) | undefined;
	readonly EcrImageTags?: (StringFilter[] | undefined) | undefined;
	readonly FindingArn?: (StringFilter[] | undefined) | undefined;
	readonly FindingStatus?: (StringFilter[] | undefined) | undefined;
	readonly FindingType?: (StringFilter[] | undefined) | undefined;
	readonly FirstObservedAt?: (DateFilter[] | undefined) | undefined;
	readonly InspectorScore?: (NumberFilter[] | undefined) | undefined;
	readonly LastObservedAt?: (DateFilter[] | undefined) | undefined;
	readonly NetworkProtocol?: (StringFilter[] | undefined) | undefined;
	readonly PortRange?: (PortRangeFilter[] | undefined) | undefined;
	readonly RelatedVulnerabilities?: (StringFilter[] | undefined) | undefined;
	readonly ResourceId?: (StringFilter[] | undefined) | undefined;
	readonly ResourceTags?: (MapFilter[] | undefined) | undefined;
	readonly ResourceType?: (StringFilter[] | undefined) | undefined;
	readonly Severity?: (StringFilter[] | undefined) | undefined;
	readonly Title?: (StringFilter[] | undefined) | undefined;
	readonly UpdatedAt?: (DateFilter[] | undefined) | undefined;
	readonly VendorSeverity?: (StringFilter[] | undefined) | undefined;
	readonly VulnerabilityId?: (StringFilter[] | undefined) | undefined;
	readonly VulnerabilitySource?: (StringFilter[] | undefined) | undefined;
	readonly VulnerablePackages?: (PackageFilter[] | undefined) | undefined;
}
export interface MapFilter {
	readonly Comparison: string;
	readonly Key?: (string | undefined) | undefined;
	readonly Value?: (string | undefined) | undefined;
}
export interface NumberFilter {
	readonly LowerInclusive?: (number | undefined) | undefined;
	readonly UpperInclusive?: (number | undefined) | undefined;
}
export interface PackageFilter {
	readonly Architecture?: (StringFilter | undefined) | undefined;
	readonly Epoch?: (NumberFilter | undefined) | undefined;
	readonly Name?: (StringFilter | undefined) | undefined;
	readonly Release?: (StringFilter | undefined) | undefined;
	readonly SourceLayerHash?: (StringFilter | undefined) | undefined;
	readonly Version?: (StringFilter | undefined) | undefined;
}
export interface PortRangeFilter {
	readonly BeginInclusive?: (number | undefined) | undefined;
	readonly EndInclusive?: (number | undefined) | undefined;
}
export interface StringFilter {
	readonly Comparison: string;
	readonly Value: string;
}
export default {
	Filter: Filter,
};
