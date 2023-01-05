import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class Link extends CfnResource<LinkComponentInputs> implements LinkComponentOutputs {
	constructor(entity: ADKEntity, options: LinkComponentInputs) {
		super(entity, options.LogicalId, "AWS::Oam::Link", options);
	}
	public readonly Arn: string;
	public readonly Label: string;
}
export interface LinkComponentOutputs {
	readonly Arn: string;
	readonly Label: string;
}
export interface LinkComponentInputs {
	readonly LabelTemplate: string;
	readonly ResourceTypes: string[];
	readonly SinkIdentifier: string;
	readonly Tags?: { [key: string]: string } | undefined;
	readonly LogicalId: string;
}
export class Sink extends CfnResource<SinkComponentInputs> implements SinkComponentOutputs {
	constructor(entity: ADKEntity, options: SinkComponentInputs) {
		super(entity, options.LogicalId, "AWS::Oam::Sink", options);
	}
	public readonly Arn: string;
}
export interface SinkComponentOutputs {
	readonly Arn: string;
}
export interface SinkComponentInputs {
	readonly Name: string;
	readonly Policy?: any | undefined;
	readonly Tags?: { [key: string]: string } | undefined;
	readonly LogicalId: string;
}
export default {
	Link: Link,
	Sink: Sink,
};
