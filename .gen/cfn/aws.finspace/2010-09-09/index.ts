import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class Environment extends CfnResource<EnvironmentComponentInputs> implements EnvironmentComponentOutputs {
	constructor(entity: ADKEntity, options: EnvironmentComponentInputs) {
		super(entity, options.LogicalId, "AWS::FinSpace::Environment", options);
	}
	public readonly AwsAccountId: string;
	public readonly DedicatedServiceAccountId: string;
	public readonly EnvironmentArn: string;
	public readonly EnvironmentId: string;
	public readonly EnvironmentUrl: string;
	public readonly SageMakerStudioDomainUrl: string;
	public readonly Status: string;
}
export interface EnvironmentComponentOutputs {
	readonly AwsAccountId: string;
	readonly DedicatedServiceAccountId: string;
	readonly EnvironmentArn: string;
	readonly EnvironmentId: string;
	readonly EnvironmentUrl: string;
	readonly SageMakerStudioDomainUrl: string;
	readonly Status: string;
}
export interface EnvironmentComponentInputs {
	readonly Name: string;
	readonly DataBundles?: string[] | undefined;
	readonly Description?: string | undefined;
	readonly FederationMode?: string | undefined;
	readonly FederationParameters?: FederationParameters | undefined;
	readonly KmsKeyId?: string | undefined;
	readonly SuperuserParameters?: SuperuserParameters | undefined;
	readonly LogicalId: string;
}
export interface FederationParameters {
	readonly ApplicationCallBackURL?: string | undefined;
	readonly AttributeMap?: any | undefined;
	readonly FederationProviderName?: string | undefined;
	readonly FederationURN?: string | undefined;
	readonly SamlMetadataDocument?: string | undefined;
	readonly SamlMetadataURL?: string | undefined;
}
export interface SuperuserParameters {
	readonly EmailAddress?: string | undefined;
	readonly FirstName?: string | undefined;
	readonly LastName?: string | undefined;
}
export default {
	Environment: Environment,
};
