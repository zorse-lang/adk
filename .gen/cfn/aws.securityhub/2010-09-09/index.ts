import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class Hub extends CfnResource<HubComponentInputs> implements HubComponentOutputs {
	constructor(entity: ADKEntity, options: HubComponentInputs) {
		super(entity, options.LogicalId, "AWS::SecurityHub::Hub", options);
	}
}
export interface HubComponentOutputs {}
export interface HubComponentInputs {
	readonly Tags?: any | undefined;
	readonly LogicalId: string;
}
export default {
	Hub: Hub,
};
