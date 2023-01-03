import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class Types extends GdmResource<TypesComponentInputs> implements TypesComponentOutputs {
	constructor(entity: ADKEntity, options: TypesComponentInputs) {
		super(entity, options.name, "deploymentmanager.alpha.Types", options);
	}
	public readonly insertTime?: string | undefined;
	public readonly operation?: Operation | undefined;
	public readonly selfLink?: string | undefined;
}
export interface TypesComponentOutputs {
	readonly insertTime?: string | undefined;
	readonly operation?: Operation | undefined;
	readonly selfLink?: string | undefined;
}
export interface TypesComponentInputs {
	readonly base?: BaseType | undefined;
	readonly description?: string | undefined;
	readonly id?: string | undefined;
	readonly labels?: TypeLabelEntry[] | undefined;
	readonly name: string;
	readonly type: string;
}
export interface AsyncOptions {
	readonly methodMatch?: string | undefined;
	readonly pollingOptions?: PollingOptions | undefined;
}
export interface BaseType {
	readonly collectionOverrides?: CollectionOverride[] | undefined;
	readonly credential?: Credential | undefined;
	readonly descriptorUrl?: string | undefined;
	readonly options?: Options | undefined;
}
export interface BasicAuth {
	readonly password?: string | undefined;
	readonly user?: string | undefined;
}
export interface CollectionOverride {
	readonly collection?: string | undefined;
	readonly methodMap?: MethodMap | undefined;
	readonly options?: Options | undefined;
}
export interface Credential {
	readonly basicAuth?: BasicAuth | undefined;
	readonly serviceAccount?: ServiceAccount | undefined;
	readonly useProjectDefault?: boolean | undefined;
}
export interface Diagnostic {
	readonly field?: string | undefined;
	readonly level?: string | undefined;
}
export interface InputMapping {
	readonly fieldName?: string | undefined;
	readonly location?: string | undefined;
	readonly methodMatch?: string | undefined;
	readonly value?: string | undefined;
}
export interface MethodMap {
	readonly create?: string | undefined;
	readonly delete?: string | undefined;
	readonly get?: string | undefined;
	readonly setIamPolicy?: string | undefined;
	readonly update?: string | undefined;
}
export interface Operation {
	readonly clientOperationId?: string | undefined;
	readonly creationTimestamp?: string | undefined;
	readonly description?: string | undefined;
	readonly endTime?: string | undefined;
	readonly error?: { errors?: Array<{ code?: string; location?: string; message?: string }> } | undefined;
	readonly httpErrorMessage?: string | undefined;
	readonly httpErrorStatusCode?: number | undefined;
	readonly id?: string | undefined;
	readonly insertTime?: string | undefined;
	readonly kind?: string | undefined;
	readonly name?: string | undefined;
	readonly operationGroupId?: string | undefined;
	readonly operationType?: string | undefined;
	readonly progress?: number | undefined;
	readonly region?: string | undefined;
	readonly selfLink?: string | undefined;
	readonly startTime?: string | undefined;
	readonly status?: string | undefined;
	readonly statusMessage?: string | undefined;
	readonly targetId?: string | undefined;
	readonly targetLink?: string | undefined;
	readonly user?: string | undefined;
	readonly warnings?:
		| Array<{ code?: string; data?: Array<{ key?: string; value?: string }>; message?: string }>
		| undefined;
	readonly zone?: string | undefined;
}
export interface Options {
	readonly asyncOptions?: AsyncOptions[] | undefined;
	readonly inputMappings?: InputMapping[] | undefined;
	readonly nameProperty?: string | undefined;
	readonly validationOptions?: ValidationOptions | undefined;
}
export interface PollingOptions {
	readonly diagnostics?: Diagnostic[] | undefined;
	readonly failCondition?: string | undefined;
	readonly finishCondition?: string | undefined;
	readonly pollingLink?: string | undefined;
	readonly targetLink?: string | undefined;
}
export interface ServiceAccount {
	readonly email?: string | undefined;
}
export interface Type {
	readonly base?: BaseType | undefined;
	readonly description?: string | undefined;
	readonly id?: string | undefined;
	readonly insertTime?: string | undefined;
	readonly labels?: TypeLabelEntry[] | undefined;
	readonly name?: string | undefined;
	readonly operation?: Operation | undefined;
	readonly selfLink?: string | undefined;
}
export interface TypeLabelEntry {
	readonly key?: string | undefined;
	readonly value?: string | undefined;
}
export interface ValidationOptions {
	readonly schemaValidation?: string | undefined;
	readonly undeclaredProperties?: string | undefined;
}
export default {
	Types: Types,
};
