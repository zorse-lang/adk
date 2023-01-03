import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class Domain extends CfnResource<DomainComponentInputs> implements DomainComponentOutputs {
	constructor(entity: ADKEntity, options: DomainComponentInputs) {
		super(entity, options.LogicalId, "AWS::SDB::Domain", options);
	}
}
export interface DomainComponentOutputs {}
export interface DomainComponentInputs {
	readonly Description?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export default {
	Domain: Domain,
};
