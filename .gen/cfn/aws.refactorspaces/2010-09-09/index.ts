import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class Application extends CfnResource<ApplicationComponentInputs> implements ApplicationComponentOutputs {
	constructor(entity: ADKEntity, options: ApplicationComponentInputs) {
		super(entity, options.LogicalId, "AWS::RefactorSpaces::Application", options);
	}
	public readonly ApiGatewayId: string;
	public readonly ApplicationIdentifier: string;
	public readonly Arn: string;
	public readonly NlbArn: string;
	public readonly NlbName: string;
	public readonly ProxyUrl: string;
	public readonly StageName: string;
	public readonly VpcLinkId: string;
}
export interface ApplicationComponentOutputs {
	readonly ApiGatewayId: string;
	readonly ApplicationIdentifier: string;
	readonly Arn: string;
	readonly NlbArn: string;
	readonly NlbName: string;
	readonly ProxyUrl: string;
	readonly StageName: string;
	readonly VpcLinkId: string;
}
export interface ApplicationComponentInputs {
	readonly ApiGatewayProxy?: (ApiGatewayProxyInput | undefined) | undefined;
	readonly EnvironmentIdentifier?: (string | undefined) | undefined;
	readonly Name?: (string | undefined) | undefined;
	readonly ProxyType?: (string | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly VpcId?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export class Environment extends CfnResource<EnvironmentComponentInputs> implements EnvironmentComponentOutputs {
	constructor(entity: ADKEntity, options: EnvironmentComponentInputs) {
		super(entity, options.LogicalId, "AWS::RefactorSpaces::Environment", options);
	}
	public readonly Arn: string;
	public readonly EnvironmentIdentifier: string;
	public readonly TransitGatewayId: string;
}
export interface EnvironmentComponentOutputs {
	readonly Arn: string;
	readonly EnvironmentIdentifier: string;
	readonly TransitGatewayId: string;
}
export interface EnvironmentComponentInputs {
	readonly Description?: (string | undefined) | undefined;
	readonly Name?: (string | undefined) | undefined;
	readonly NetworkFabricType?: (string | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly LogicalId: string;
}
export class Route extends CfnResource<RouteComponentInputs> implements RouteComponentOutputs {
	constructor(entity: ADKEntity, options: RouteComponentInputs) {
		super(entity, options.LogicalId, "AWS::RefactorSpaces::Route", options);
	}
	public readonly Arn: string;
	public readonly PathResourceToId: string;
	public readonly RouteIdentifier: string;
}
export interface RouteComponentOutputs {
	readonly Arn: string;
	readonly PathResourceToId: string;
	readonly RouteIdentifier: string;
}
export interface RouteComponentInputs {
	readonly ApplicationIdentifier: string;
	readonly EnvironmentIdentifier: string;
	readonly ServiceIdentifier: string;
	readonly DefaultRoute?: (DefaultRouteInput | undefined) | undefined;
	readonly RouteType?: (string | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly UriPathRoute?: (UriPathRouteInput | undefined) | undefined;
	readonly LogicalId: string;
}
export class Service extends CfnResource<ServiceComponentInputs> implements ServiceComponentOutputs {
	constructor(entity: ADKEntity, options: ServiceComponentInputs) {
		super(entity, options.LogicalId, "AWS::RefactorSpaces::Service", options);
	}
	public readonly Arn: string;
	public readonly ServiceIdentifier: string;
}
export interface ServiceComponentOutputs {
	readonly Arn: string;
	readonly ServiceIdentifier: string;
}
export interface ServiceComponentInputs {
	readonly ApplicationIdentifier: string;
	readonly EnvironmentIdentifier: string;
	readonly Description?: (string | undefined) | undefined;
	readonly EndpointType?: (string | undefined) | undefined;
	readonly LambdaEndpoint?: (LambdaEndpointInput | undefined) | undefined;
	readonly Name?: (string | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly UrlEndpoint?: (UrlEndpointInput | undefined) | undefined;
	readonly VpcId?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export interface ApiGatewayProxyInput {
	readonly EndpointType?: (string | undefined) | undefined;
	readonly StageName?: (string | undefined) | undefined;
}
export interface DefaultRouteInput {
	readonly ActivationState: string;
}
export interface UriPathRouteInput {
	readonly ActivationState: string;
	readonly IncludeChildPaths?: (boolean | undefined) | undefined;
	readonly Methods?: (string[] | undefined) | undefined;
	readonly SourcePath?: (string | undefined) | undefined;
}
export interface LambdaEndpointInput {
	readonly Arn: string;
}
export interface UrlEndpointInput {
	readonly HealthUrl?: (string | undefined) | undefined;
	readonly Url: string;
}
export default {
	Application: Application,
	Environment: Environment,
	Route: Route,
	Service: Service,
};
