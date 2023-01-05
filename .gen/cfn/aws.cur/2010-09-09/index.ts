import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class ReportDefinition
	extends CfnResource<ReportDefinitionComponentInputs>
	implements ReportDefinitionComponentOutputs
{
	constructor(entity: ADKEntity, options: ReportDefinitionComponentInputs) {
		super(entity, options.LogicalId, "AWS::CUR::ReportDefinition", options);
	}
}
export interface ReportDefinitionComponentOutputs {}
export interface ReportDefinitionComponentInputs {
	readonly Compression: string;
	readonly Format: string;
	readonly RefreshClosedReports: boolean;
	readonly ReportName: string;
	readonly ReportVersioning: string;
	readonly S3Bucket: string;
	readonly S3Prefix: string;
	readonly S3Region: string;
	readonly TimeUnit: string;
	readonly AdditionalArtifacts?: string[] | undefined;
	readonly AdditionalSchemaElements?: string[] | undefined;
	readonly BillingViewArn?: string | undefined;
	readonly LogicalId: string;
}
export default {
	ReportDefinition: ReportDefinition,
};
