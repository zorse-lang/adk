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
	readonly AutomaticStopTimeMinutes?: number | undefined;
	readonly ConnectionType?: string | undefined;
	readonly Description?: string | undefined;
	readonly ImageId?: string | undefined;
	readonly Name?: string;
	readonly OwnerArn?: string | undefined;
	readonly Repositories?: Repository[] | undefined;
	readonly SubnetId?: string | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export interface Repository {
	readonly PathComponent: string;
	readonly RepositoryUrl: string;
}
export default {
	EnvironmentEC2: EnvironmentEC2,
};
