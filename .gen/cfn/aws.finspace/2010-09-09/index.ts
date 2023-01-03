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
	readonly DataBundles?: (string[] | undefined) | undefined;
	readonly Description?: (string | undefined) | undefined;
	readonly FederationMode?: (string | undefined) | undefined;
	readonly FederationParameters?: (FederationParameters | undefined) | undefined;
	readonly KmsKeyId?: (string | undefined) | undefined;
	readonly SuperuserParameters?: (SuperuserParameters | undefined) | undefined;
	readonly LogicalId: string;
}
export interface FederationParameters {
	readonly ApplicationCallBackURL?: (string | undefined) | undefined;
	readonly AttributeMap?: (any | undefined) | undefined;
	readonly FederationProviderName?: (string | undefined) | undefined;
	readonly FederationURN?: (string | undefined) | undefined;
	readonly SamlMetadataDocument?: (string | undefined) | undefined;
	readonly SamlMetadataURL?: (string | undefined) | undefined;
}
export interface SuperuserParameters {
	readonly EmailAddress?: (string | undefined) | undefined;
	readonly FirstName?: (string | undefined) | undefined;
	readonly LastName?: (string | undefined) | undefined;
}
export default {
	Environment: Environment,
};
