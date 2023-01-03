import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ProjectsServiceAccountsKeys
	extends GdmResource<ProjectsServiceAccountsKeysComponentInputs>
	implements ProjectsServiceAccountsKeysComponentOutputs
{
	constructor(entity: ADKEntity, options: ProjectsServiceAccountsKeysComponentInputs) {
		super(entity, options.name, "iam.v1.ProjectsServiceAccountsKeys", options);
	}
}
export interface ProjectsServiceAccountsKeysComponentOutputs {}
export interface ProjectsServiceAccountsKeysComponentInputs {
	readonly disabled?: boolean | undefined;
	readonly keyAlgorithm?: string | undefined;
	readonly keyOrigin?: string | undefined;
	readonly keyType?: string | undefined;
	readonly name: string;
	readonly privateKeyData?: string | undefined;
	readonly privateKeyType?: string | undefined;
	readonly publicKeyData?: string | undefined;
	readonly validAfterTime?: string | undefined;
	readonly validBeforeTime?: string | undefined;
	readonly type: string;
}
export interface CreateServiceAccountKeyRequest {
	readonly keyAlgorithm?: string | undefined;
	readonly privateKeyType?: string | undefined;
}
export interface ServiceAccountKey {
	readonly disabled?: boolean | undefined;
	readonly keyAlgorithm?: string | undefined;
	readonly keyOrigin?: string | undefined;
	readonly keyType?: string | undefined;
	readonly name?: string | undefined;
	readonly privateKeyData?: string | undefined;
	readonly privateKeyType?: string | undefined;
	readonly publicKeyData?: string | undefined;
	readonly validAfterTime?: string | undefined;
	readonly validBeforeTime?: string | undefined;
}
export default {
	ProjectsServiceAccountsKeys: ProjectsServiceAccountsKeys,
};
