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
	readonly AccessLoggingEnabled?: (boolean | undefined) | undefined;
	readonly CorsPolicy?: (CorsRule[] | undefined) | undefined;
	readonly LifecyclePolicy?: (string | undefined) | undefined;
	readonly MetricPolicy?: (MetricPolicy | undefined) | undefined;
	readonly Policy?: (string | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly LogicalId: string;
}
export interface CorsRule {
	readonly AllowedHeaders?: (string[] | undefined) | undefined;
	readonly AllowedMethods?: (string[] | undefined) | undefined;
	readonly AllowedOrigins?: (string[] | undefined) | undefined;
	readonly ExposeHeaders?: (string[] | undefined) | undefined;
	readonly MaxAgeSeconds?: (number | undefined) | undefined;
}
export interface MetricPolicy {
	readonly ContainerLevelMetrics: string;
	readonly MetricPolicyRules?: (MetricPolicyRule[] | undefined) | undefined;
}
export interface MetricPolicyRule {
	readonly ObjectGroup: string;
	readonly ObjectGroupName: string;
}
export default {
	Container: Container,
};
