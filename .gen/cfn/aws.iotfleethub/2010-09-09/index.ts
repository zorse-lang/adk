import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class Application extends CfnResource<ApplicationComponentInputs> implements ApplicationComponentOutputs {
	constructor(entity: ADKEntity, options: ApplicationComponentInputs) {
		super(entity, options.LogicalId, "AWS::IoTFleetHub::Application", options);
	}
	public readonly ApplicationArn: string;
	public readonly ApplicationCreationDate: number;
	public readonly ApplicationId: string;
	public readonly ApplicationLastUpdateDate: number;
	public readonly ApplicationState: string;
	public readonly ApplicationUrl: string;
	public readonly ErrorMessage: string;
	public readonly SsoClientId: string;
}
export interface ApplicationComponentOutputs {
	readonly ApplicationArn: string;
	readonly ApplicationCreationDate: number;
	readonly ApplicationId: string;
	readonly ApplicationLastUpdateDate: number;
	readonly ApplicationState: string;
	readonly ApplicationUrl: string;
	readonly ErrorMessage: string;
	readonly SsoClientId: string;
}
export interface ApplicationComponentInputs {
	readonly ApplicationName: string;
	readonly RoleArn: string;
	readonly ApplicationDescription?: (string | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly LogicalId: string;
}
export default {
	Application: Application,
};
