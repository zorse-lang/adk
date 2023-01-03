import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class EnvironmentEC2 extends CfnResource<EnvironmentEC2ComponentInputs> implements EnvironmentEC2ComponentOutputs {
	constructor(entity: ADKEntity, options: EnvironmentEC2ComponentInputs) {
		super(entity, options.LogicalId, "AWS::Cloud9::EnvironmentEC2", options);
	}
	public readonly Arn: string;
}
export interface EnvironmentEC2ComponentOutputs {
	readonly Arn: string;
}
export interface EnvironmentEC2ComponentInputs {
	readonly InstanceType: string;
	readonly AutomaticStopTimeMinutes?: (number | undefined) | undefined;
	readonly ConnectionType?: (string | undefined) | undefined;
	readonly Description?: (string | undefined) | undefined;
	readonly ImageId?: (string | undefined) | undefined;
	readonly Name?: string | undefined;
	readonly OwnerArn?: (string | undefined) | undefined;
	readonly Repositories?: (Repository[] | undefined) | undefined;
	readonly SubnetId?: (string | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly LogicalId: string;
}
export interface Repository {
	readonly PathComponent: string;
	readonly RepositoryUrl: string;
}
export default {
	EnvironmentEC2: EnvironmentEC2,
};
