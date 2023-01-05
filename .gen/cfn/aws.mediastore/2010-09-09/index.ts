import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class Container extends CfnResource<ContainerComponentInputs> implements ContainerComponentOutputs {
	constructor(entity: ADKEntity, options: ContainerComponentInputs) {
		super(entity, options.LogicalId, "AWS::MediaStore::Container", options);
	}
	public readonly Endpoint: string;
}
export interface ContainerComponentOutputs {
	readonly Endpoint: string;
}
export interface ContainerComponentInputs {
	readonly ContainerName: string;
	readonly AccessLoggingEnabled?: boolean | undefined;
	readonly CorsPolicy?: CorsRule[] | undefined;
	readonly LifecyclePolicy?: string | undefined;
	readonly MetricPolicy?: MetricPolicy | undefined;
	readonly Policy?: string | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export interface CorsRule {
	readonly AllowedHeaders?: string[] | undefined;
	readonly AllowedMethods?: string[] | undefined;
	readonly AllowedOrigins?: string[] | undefined;
	readonly ExposeHeaders?: string[] | undefined;
	readonly MaxAgeSeconds?: number | undefined;
}
export interface MetricPolicy {
	readonly ContainerLevelMetrics: string;
	readonly MetricPolicyRules?: MetricPolicyRule[] | undefined;
}
export interface MetricPolicyRule {
	readonly ObjectGroup: string;
	readonly ObjectGroupName: string;
}
export default {
	Container: Container,
};
