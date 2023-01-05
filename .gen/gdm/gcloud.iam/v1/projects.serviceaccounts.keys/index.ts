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
	readonly disabled?: boolean;
	readonly keyAlgorithm?: string;
	readonly keyOrigin?: string;
	readonly keyType?: string;
	readonly name: string;
	readonly privateKeyData?: string;
	readonly privateKeyType?: string;
	readonly publicKeyData?: string;
	readonly validAfterTime?: string;
	readonly validBeforeTime?: string;
}
export interface CreateServiceAccountKeyRequest {
	readonly keyAlgorithm?: string;
	readonly privateKeyType?: string;
}
export interface ServiceAccountKey {
	readonly disabled?: boolean;
	readonly keyAlgorithm?: string;
	readonly keyOrigin?: string;
	readonly keyType?: string;
	readonly name?: string;
	readonly privateKeyData?: string;
	readonly privateKeyType?: string;
	readonly publicKeyData?: string;
	readonly validAfterTime?: string;
	readonly validBeforeTime?: string;
}
export default {
	ProjectsServiceAccountsKeys: ProjectsServiceAccountsKeys,
};
