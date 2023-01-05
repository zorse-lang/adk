import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class Types extends GdmResource<TypesComponentInputs> implements TypesComponentOutputs {
	constructor(entity: ADKEntity, options: TypesComponentInputs) {
		super(entity, options.name, "deploymentmanager.alpha.Types", options);
	}
	public readonly insertTime?: string;
	public readonly operation?: Operation;
	public readonly selfLink?: string;
}
export interface TypesComponentOutputs {
	readonly insertTime?: string;
	readonly operation?: Operation;
	readonly selfLink?: string;
}
export interface TypesComponentInputs {
	readonly base?: BaseType;
	readonly description?: string;
	readonly id?: string;
	readonly labels?: TypeLabelEntry[];
	readonly name: string;
}
export interface AsyncOptions {
	readonly methodMatch?: string;
	readonly pollingOptions?: PollingOptions;
}
export interface BaseType {
	readonly collectionOverrides?: CollectionOverride[];
	readonly credential?: Credential;
	readonly descriptorUrl?: string;
	readonly options?: Options;
}
export interface BasicAuth {
	readonly password?: string;
	readonly user?: string;
}
export interface CollectionOverride {
	readonly collection?: string;
	readonly methodMap?: MethodMap;
	readonly options?: Options;
}
export interface Credential {
	readonly basicAuth?: BasicAuth;
	readonly serviceAccount?: ServiceAccount;
	readonly useProjectDefault?: boolean;
}
export interface Diagnostic {
	readonly field?: string;
	readonly level?: string;
}
export interface InputMapping {
	readonly fieldName?: string;
	readonly location?: string;
	readonly methodMatch?: string;
	readonly value?: string;
}
export interface MethodMap {
	readonly create?: string;
	readonly delete?: string;
	readonly get?: string;
	readonly setIamPolicy?: string;
	readonly update?: string;
}
export interface Operation {
	readonly clientOperationId?: string;
	readonly creationTimestamp?: string;
	readonly description?: string;
	readonly endTime?: string;
	readonly error?: { errors?: Array<{ code?: string; location?: string; message?: string }> };
	readonly httpErrorMessage?: string;
	readonly httpErrorStatusCode?: number;
	readonly id?: string;
	readonly insertTime?: string;
	readonly kind?: string;
	readonly name?: string;
	readonly operationGroupId?: string;
	readonly operationType?: string;
	readonly progress?: number;
	readonly region?: string;
	readonly selfLink?: string;
	readonly startTime?: string;
	readonly status?: string;
	readonly statusMessage?: string;
	readonly targetId?: string;
	readonly targetLink?: string;
	readonly user?: string;
	readonly warnings?: Array<{ code?: string; data?: Array<{ key?: string; value?: string }>; message?: string }>;
	readonly zone?: string;
}
export interface Options {
	readonly asyncOptions?: AsyncOptions[];
	readonly inputMappings?: InputMapping[];
	readonly nameProperty?: string;
	readonly validationOptions?: ValidationOptions;
}
export interface PollingOptions {
	readonly diagnostics?: Diagnostic[];
	readonly failCondition?: string;
	readonly finishCondition?: string;
	readonly pollingLink?: string;
	readonly targetLink?: string;
}
export interface ServiceAccount {
	readonly email?: string;
}
export interface Type {
	readonly base?: BaseType;
	readonly description?: string;
	readonly id?: string;
	readonly insertTime?: string;
	readonly labels?: TypeLabelEntry[];
	readonly name?: string;
	readonly operation?: Operation;
	readonly selfLink?: string;
}
export interface TypeLabelEntry {
	readonly key?: string;
	readonly value?: string;
}
export interface ValidationOptions {
	readonly schemaValidation?: string;
	readonly undeclaredProperties?: string;
}
export default {
	Types: Types,
};
