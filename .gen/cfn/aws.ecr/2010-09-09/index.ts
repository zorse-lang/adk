import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class PublicRepository
	extends CfnResource<PublicRepositoryComponentInputs>
	implements PublicRepositoryComponentOutputs
{
	constructor(entity: ADKEntity, options: PublicRepositoryComponentInputs) {
		super(entity, options.LogicalId, "AWS::ECR::PublicRepository", options);
	}
	public readonly Arn: string;
}
export interface PublicRepositoryComponentOutputs {
	readonly Arn: string;
}
export interface PublicRepositoryComponentInputs {
	readonly RepositoryCatalogData?: RepositoryCatalogData | undefined;
	readonly RepositoryName?: string | undefined;
	readonly RepositoryPolicyText?: any | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export class PullThroughCacheRule
	extends CfnResource<PullThroughCacheRuleComponentInputs>
	implements PullThroughCacheRuleComponentOutputs
{
	constructor(entity: ADKEntity, options: PullThroughCacheRuleComponentInputs) {
		super(entity, options.LogicalId, "AWS::ECR::PullThroughCacheRule", options);
	}
}
export interface PullThroughCacheRuleComponentOutputs {}
export interface PullThroughCacheRuleComponentInputs {
	readonly EcrRepositoryPrefix?: string | undefined;
	readonly UpstreamRegistryUrl?: string | undefined;
	readonly LogicalId: string;
}
export class RegistryPolicy extends CfnResource<RegistryPolicyComponentInputs> implements RegistryPolicyComponentOutputs {
	constructor(entity: ADKEntity, options: RegistryPolicyComponentInputs) {
		super(entity, options.LogicalId, "AWS::ECR::RegistryPolicy", options);
	}
	public readonly RegistryId: string;
}
export interface RegistryPolicyComponentOutputs {
	readonly RegistryId: string;
}
export interface RegistryPolicyComponentInputs {
	readonly PolicyText: any;
	readonly LogicalId: string;
}
export class ReplicationConfiguration
	extends CfnResource<ReplicationConfigurationComponentInputs>
	implements ReplicationConfigurationComponentOutputs
{
	constructor(entity: ADKEntity, options: ReplicationConfigurationComponentInputs) {
		super(entity, options.LogicalId, "AWS::ECR::ReplicationConfiguration", options);
	}
	public readonly RegistryId: string;
}
export interface ReplicationConfigurationComponentOutputs {
	readonly RegistryId: string;
}
export interface ReplicationConfigurationComponentInputs {
	readonly ReplicationConfiguration: ReplicationConfiguration;
	readonly LogicalId: string;
}
export class Repository extends CfnResource<RepositoryComponentInputs> implements RepositoryComponentOutputs {
	constructor(entity: ADKEntity, options: RepositoryComponentInputs) {
		super(entity, options.LogicalId, "AWS::ECR::Repository", options);
	}
	public readonly Arn: string;
	public readonly RepositoryUri: string;
}
export interface RepositoryComponentOutputs {
	readonly Arn: string;
	readonly RepositoryUri: string;
}
export interface RepositoryComponentInputs {
	readonly EncryptionConfiguration?: EncryptionConfiguration | undefined;
	readonly ImageScanningConfiguration?: ImageScanningConfiguration | undefined;
	readonly ImageTagMutability?: string | undefined;
	readonly LifecyclePolicy?: LifecyclePolicy | undefined;
	readonly RepositoryName?: string | undefined;
	readonly RepositoryPolicyText?: any | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export interface RepositoryCatalogData {
	readonly AboutText?: string | undefined;
	readonly Architectures?: string[] | undefined;
	readonly OperatingSystems?: string[] | undefined;
	readonly RepositoryDescription?: string | undefined;
	readonly UsageText?: string | undefined;
}
export interface ReplicationConfiguration {
	readonly Rules: ReplicationRule[];
}
export interface ReplicationDestination {
	readonly Region: string;
	readonly RegistryId: string;
}
export interface ReplicationRule {
	readonly Destinations: ReplicationDestination[];
	readonly RepositoryFilters?: RepositoryFilter[] | undefined;
}
export interface RepositoryFilter {
	readonly Filter: string;
	readonly FilterType: string;
}
export interface EncryptionConfiguration {
	readonly EncryptionType: string;
	readonly KmsKey?: string | undefined;
}
export interface ImageScanningConfiguration {
	readonly ScanOnPush?: boolean | undefined;
}
export interface LifecyclePolicy {
	readonly LifecyclePolicyText?: string | undefined;
	readonly RegistryId?: string | undefined;
}
export default {
	PublicRepository: PublicRepository,
	PullThroughCacheRule: PullThroughCacheRule,
	RegistryPolicy: RegistryPolicy,
	ReplicationConfiguration: ReplicationConfiguration,
	Repository: Repository,
};
