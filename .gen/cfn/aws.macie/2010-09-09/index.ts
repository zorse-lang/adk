import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class AllowList extends CfnResource<AllowListComponentInputs> implements AllowListComponentOutputs {
	constructor(entity: ADKEntity, options: AllowListComponentInputs) {
		super(entity, options.LogicalId, "AWS::Macie::AllowList", options);
	}
	public readonly Arn: string;
	public readonly Id: string;
	public readonly Status: string;
}
export interface AllowListComponentOutputs {
	readonly Arn: string;
	readonly Id: string;
	readonly Status: string;
}
export interface AllowListComponentInputs {
	readonly Criteria: Criteria;
	readonly Name: string;
	readonly Description?: string | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export class CustomDataIdentifier
	extends CfnResource<CustomDataIdentifierComponentInputs>
	implements CustomDataIdentifierComponentOutputs
{
	constructor(entity: ADKEntity, options: CustomDataIdentifierComponentInputs) {
		super(entity, options.LogicalId, "AWS::Macie::CustomDataIdentifier", options);
	}
	public readonly Arn: string;
	public readonly Id: string;
}
export interface CustomDataIdentifierComponentOutputs {
	readonly Arn: string;
	readonly Id: string;
}
export interface CustomDataIdentifierComponentInputs {
	readonly Name: string;
	readonly Regex: string;
	readonly Description?: string | undefined;
	readonly IgnoreWords?: string[] | undefined;
	readonly Keywords?: string[] | undefined;
	readonly MaximumMatchDistance?: number | undefined;
	readonly LogicalId: string;
}
export class FindingsFilter extends CfnResource<FindingsFilterComponentInputs> implements FindingsFilterComponentOutputs {
	constructor(entity: ADKEntity, options: FindingsFilterComponentInputs) {
		super(entity, options.LogicalId, "AWS::Macie::FindingsFilter", options);
	}
	public readonly Arn: string;
	public readonly FindingsFilterListItems: any[];
	public readonly Id: string;
}
export interface FindingsFilterComponentOutputs {
	readonly Arn: string;
	readonly FindingsFilterListItems: any[];
	readonly Id: string;
}
export interface FindingsFilterComponentInputs {
	readonly FindingCriteria: FindingCriteria;
	readonly Name: string;
	readonly Action?: string | undefined;
	readonly Description?: string | undefined;
	readonly Position?: number | undefined;
	readonly LogicalId: string;
}
export class Session extends CfnResource<SessionComponentInputs> implements SessionComponentOutputs {
	constructor(entity: ADKEntity, options: SessionComponentInputs) {
		super(entity, options.LogicalId, "AWS::Macie::Session", options);
	}
	public readonly AwsAccountId: string;
	public readonly ServiceRole: string;
}
export interface SessionComponentOutputs {
	readonly AwsAccountId: string;
	readonly ServiceRole: string;
}
export interface SessionComponentInputs {
	readonly FindingPublishingFrequency?: string | undefined;
	readonly Status?: string | undefined;
	readonly LogicalId: string;
}
export interface Criteria {
	readonly Regex?: string | undefined;
	readonly S3WordsList?: S3WordsList | undefined;
}
export interface S3WordsList {
	readonly BucketName: string;
	readonly ObjectKey: string;
}
export interface CriterionAdditionalProperties {
	readonly eq?: string[] | undefined;
	readonly gt?: number | undefined;
	readonly gte?: number | undefined;
	readonly lt?: number | undefined;
	readonly lte?: number | undefined;
	readonly neq?: string[] | undefined;
}
export interface FindingCriteria {
	readonly Criterion?: { [key: string]: CriterionAdditionalProperties } | undefined;
}
export interface FindingsFilterListItem {
	readonly Id?: string | undefined;
	readonly Name?: string | undefined;
}
export default {
	AllowList: AllowList,
	CustomDataIdentifier: CustomDataIdentifier,
	FindingsFilter: FindingsFilter,
	Session: Session,
};
