import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class Domain extends CfnResource<DomainComponentInputs> implements DomainComponentOutputs {
	constructor(entity: ADKEntity, options: DomainComponentInputs) {
		super(entity, options.LogicalId, "AWS::VoiceID::Domain", options);
	}
	public readonly DomainId: string;
}
export interface DomainComponentOutputs {
	readonly DomainId: string;
}
export interface DomainComponentInputs {
	readonly Name: string;
	readonly ServerSideEncryptionConfiguration: ServerSideEncryptionConfiguration;
	readonly Description?: (string | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly LogicalId: string;
}
export interface ServerSideEncryptionConfiguration {
	readonly KmsKeyId: string;
}
export default {
	Domain: Domain,
};
