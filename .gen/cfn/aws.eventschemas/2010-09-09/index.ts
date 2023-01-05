import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class Discoverer extends CfnResource<DiscovererComponentInputs> implements DiscovererComponentOutputs {
	constructor(entity: ADKEntity, options: DiscovererComponentInputs) {
		super(entity, options.LogicalId, "AWS::EventSchemas::Discoverer", options);
	}
	public readonly DiscovererArn: string;
	public readonly DiscovererId: string;
}
export interface DiscovererComponentOutputs {
	readonly DiscovererArn: string;
	readonly DiscovererId: string;
}
export interface DiscovererComponentInputs {
	readonly SourceArn: string;
	readonly CrossAccount?: boolean;
	readonly Description?: string | undefined;
	readonly Tags?: TagsEntry[] | undefined;
	readonly LogicalId: string;
}
export class Registry extends CfnResource<RegistryComponentInputs> implements RegistryComponentOutputs {
	constructor(entity: ADKEntity, options: RegistryComponentInputs) {
		super(entity, options.LogicalId, "AWS::EventSchemas::Registry", options);
	}
	public readonly RegistryArn: string;
}
export interface RegistryComponentOutputs {
	readonly RegistryArn: string;
}
export interface RegistryComponentInputs {
	readonly Description?: string | undefined;
	readonly RegistryName?: string;
	readonly Tags?: TagsEntry[] | undefined;
	readonly LogicalId: string;
}
export class RegistryPolicy extends CfnResource<RegistryPolicyComponentInputs> implements RegistryPolicyComponentOutputs {
	constructor(entity: ADKEntity, options: RegistryPolicyComponentInputs) {
		super(entity, options.LogicalId, "AWS::EventSchemas::RegistryPolicy", options);
	}
	public readonly Id: string;
}
export interface RegistryPolicyComponentOutputs {
	readonly Id: string;
}
export interface RegistryPolicyComponentInputs {
	readonly Policy: any;
	readonly RegistryName: string;
	readonly RevisionId?: string | undefined;
	readonly LogicalId: string;
}
export class Schema extends CfnResource<SchemaComponentInputs> implements SchemaComponentOutputs {
	constructor(entity: ADKEntity, options: SchemaComponentInputs) {
		super(entity, options.LogicalId, "AWS::EventSchemas::Schema", options);
	}
	public readonly SchemaArn: string;
	public readonly SchemaVersion: string;
}
export interface SchemaComponentOutputs {
	readonly SchemaArn: string;
	readonly SchemaVersion: string;
}
export interface SchemaComponentInputs {
	readonly Content: string;
	readonly RegistryName: string;
	readonly Type: string;
	readonly Description?: string | undefined;
	readonly SchemaName?: string;
	readonly Tags?: TagsEntry[] | undefined;
	readonly LogicalId: string;
}
export interface TagsEntry {
	readonly Key: string;
	readonly Value: string;
}
export default {
	Discoverer: Discoverer,
	Registry: Registry,
	RegistryPolicy: RegistryPolicy,
	Schema: Schema,
};
