import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class TypeProviders extends GdmResource<TypeProvidersComponentInputs> implements TypeProvidersComponentOutputs {
	constructor(entity: ADKEntity, options: TypeProvidersComponentInputs) {
		super(entity, options.name, "deploymentmanager.v2beta.TypeProviders", options);
	}
	public readonly id?: string;
	public readonly insertTime?: string;
	public readonly operation?: Operation;
	public readonly selfLink?: string;
}
export interface TypeProvidersComponentOutputs {
	readonly id?: string;
	readonly insertTime?: string;
	readonly operation?: Operation;
	readonly selfLink?: string;
}
export interface TypeProvidersComponentInputs {
	readonly collectionOverrides?: CollectionOverride[];
	readonly credential?: Credential;
	readonly customCertificateAuthorityRoots?: string[];
	readonly description?: string;
	readonly descriptorUrl?: string;
	readonly labels?: TypeProviderLabelEntry[];
	readonly name: string;
	readonly options?: Options;
}
export interface AsyncOptions {
	readonly methodMatch?: string;
	readonly pollingOptions?: PollingOptions;
}
export interface BasicAuth {
	readonly password?: string;
	readonly user?: string;
}
export interface CollectionOverride {
	readonly collection?: string;
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
	readonly validationOptions?: ValidationOptions;
	readonly virtualProperties?: string;
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
export interface TypeProvider {
	readonly collectionOverrides?: CollectionOverride[];
	readonly credential?: Credential;
	readonly customCertificateAuthorityRoots?: string[];
	readonly description?: string;
	readonly descriptorUrl?: string;
	readonly id?: string;
	readonly insertTime?: string;
	readonly labels?: TypeProviderLabelEntry[];
	readonly name?: string;
	readonly operation?: Operation;
	readonly options?: Options;
	readonly selfLink?: string;
}
export interface TypeProviderLabelEntry {
	readonly key?: string;
	readonly value?: string;
}
export interface ValidationOptions {
	readonly schemaValidation?: string;
	readonly undeclaredProperties?: string;
}
export default {
	TypeProviders: TypeProviders,
};
