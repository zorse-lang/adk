import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ProjectsLocationsWorkloadIdentityPoolsProviders
	extends GdmResource<ProjectsLocationsWorkloadIdentityPoolsProvidersComponentInputs>
	implements ProjectsLocationsWorkloadIdentityPoolsProvidersComponentOutputs
{
	constructor(entity: ADKEntity, options: ProjectsLocationsWorkloadIdentityPoolsProvidersComponentInputs) {
		super(entity, options.name, "iam.v1.ProjectsLocationsWorkloadIdentityPoolsProviders", options);
	}
	public readonly state?: string | undefined;
}
export interface ProjectsLocationsWorkloadIdentityPoolsProvidersComponentOutputs {
	readonly state?: string | undefined;
}
export interface ProjectsLocationsWorkloadIdentityPoolsProvidersComponentInputs {
	readonly attributeCondition?: string | undefined;
	readonly attributeMapping?: { [P in string]: string } | undefined;
	readonly aws?: Aws | undefined;
	readonly description?: string | undefined;
	readonly disabled?: boolean | undefined;
	readonly displayName?: string | undefined;
	readonly name: string;
	readonly oidc?: Oidc | undefined;
	readonly parent: string;
	readonly saml?: Saml | undefined;
	readonly workloadIdentityPoolProviderId: string;
	readonly type: string;
}
export interface Aws {
	readonly accountId: string;
}
export interface Oidc {
	readonly allowedAudiences?: string[] | undefined;
	readonly issuerUri: string;
}
export interface Saml {
	readonly idpMetadataXml: string;
}
export interface WorkloadIdentityPoolProvider {
	readonly attributeCondition?: string | undefined;
	readonly attributeMapping?: { [P in string]: string } | undefined;
	readonly aws?: Aws | undefined;
	readonly description?: string | undefined;
	readonly disabled?: boolean | undefined;
	readonly displayName?: string | undefined;
	readonly name?: string | undefined;
	readonly oidc?: Oidc | undefined;
	readonly saml?: Saml | undefined;
	readonly state?: string | undefined;
}
export default {
	ProjectsLocationsWorkloadIdentityPoolsProviders: ProjectsLocationsWorkloadIdentityPoolsProviders,
};
