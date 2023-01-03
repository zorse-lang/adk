import { RosResource, Entity as ADKEntity } from "@zorse/adk";

export class Configuration extends RosResource<ConfigurationComponentInputs> implements ConfigurationComponentOutputs {
	constructor(entity: ADKEntity, options: ConfigurationComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::ACM::Configuration", options);
	}
}
export interface ConfigurationComponentOutputs {}
export interface ConfigurationComponentInputs {
	readonly Content: string;
	readonly DataId: any | string;
	readonly NamespaceId: any | string;
	readonly AppName?: (string | undefined) | undefined;
	readonly Desc?: (string | undefined) | undefined;
	readonly Group?: (any | string) | undefined;
	readonly Tags?: (string | undefined) | undefined;
	readonly Type?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export class Namespace extends RosResource<NamespaceComponentInputs> implements NamespaceComponentOutputs {
	constructor(entity: ADKEntity, options: NamespaceComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::ACM::Namespace", options);
	}
	public readonly Endpoint: any;
	public readonly NamespaceId: any;
}
export interface NamespaceComponentOutputs {
	readonly Endpoint: any;
	readonly NamespaceId: any;
}
export interface NamespaceComponentInputs {
	readonly Name: string;
	readonly LogicalId: string;
}
export default {
	Configuration: Configuration,
	Namespace: Namespace,
};
