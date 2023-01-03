import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class TypeProviders extends GdmResource<TypeProvidersComponentInputs> implements TypeProvidersComponentOutputs {
	constructor(entity: ADKEntity, options: TypeProvidersComponentInputs) {
		super(entity, options.name, "deploymentmanager.v2beta.TypeProviders", options);
	}
	public readonly id?: string | undefined;
	public readonly insertTime?: string | undefined;
	public readonly operation?: Operation | undefined;
	public readonly selfLink?: string | undefined;
}
export interface TypeProvidersComponentOutputs {
	readonly id?: string | undefined;
	readonly insertTime?: string | undefined;
	readonly operation?: Operation | undefined;
	readonly selfLink?: string | undefined;
}
export interface TypeProvidersComponentInputs {
	readonly collectionOverrides?: CollectionOverride[] | undefined;
	readonly credential?: Credential | undefined;
	readonly customCertificateAuthorityRoots?: string[] | undefined;
	readonly description?: string | undefined;
	readonly descriptorUrl?: string | undefined;
	readonly labels?: TypeProviderLabelEntry[] | undefined;
	readonly name: string;
	readonly options?: Options | undefined;
	readonly type: string;
}
export interface AsyncOptions {
	readonly methodMatch?: string | undefined;
	readonly pollingOptions?: PollingOptions | undefined;
}
export interface BasicAuth {
	readonly password?: string | undefined;
	readonly user?: string | undefined;
}
export interface CollectionOverride {
	readonly collection?: string | undefined;
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
	readonly validationOptions?: ValidationOptions | undefined;
	readonly virtualProperties?: string | undefined;
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
export interface TypeProvider {
	readonly collectionOverrides?: CollectionOverride[] | undefined;
	readonly credential?: Credential | undefined;
	readonly customCertificateAuthorityRoots?: string[] | undefined;
	readonly description?: string | undefined;
	readonly descriptorUrl?: string | undefined;
	readonly id?: string | undefined;
	readonly insertTime?: string | undefined;
	readonly labels?: TypeProviderLabelEntry[] | undefined;
	readonly name?: string | undefined;
	readonly operation?: Operation | undefined;
	readonly options?: Options | undefined;
	readonly selfLink?: string | undefined;
}
export interface TypeProviderLabelEntry {
	readonly key?: string | undefined;
	readonly value?: string | undefined;
}
export interface ValidationOptions {
	readonly schemaValidation?: string | undefined;
	readonly undeclaredProperties?: string | undefined;
}
export default {
	TypeProviders: TypeProviders,
};
