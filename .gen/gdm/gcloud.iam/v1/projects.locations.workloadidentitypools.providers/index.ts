import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ProjectsLocationsWorkloadIdentityPoolsProviders
	extends GdmResource<ProjectsLocationsWorkloadIdentityPoolsProvidersComponentInputs>
	implements ProjectsLocationsWorkloadIdentityPoolsProvidersComponentOutputs
{
	constructor(entity: ADKEntity, options: ProjectsLocationsWorkloadIdentityPoolsProvidersComponentInputs) {
		super(entity, options.name, "iam.v1.ProjectsLocationsWorkloadIdentityPoolsProviders", options);
	}
	public readonly state?: string;
}
export interface ProjectsLocationsWorkloadIdentityPoolsProvidersComponentOutputs {
	readonly state?: string;
}
export interface ProjectsLocationsWorkloadIdentityPoolsProvidersComponentInputs {
	readonly attributeCondition?: string;
	readonly attributeMapping?: { [P in string]: string };
	readonly aws?: Aws;
	readonly description?: string;
	readonly disabled?: boolean;
	readonly displayName?: string;
	readonly name: string;
	readonly oidc?: Oidc;
	readonly parent: string;
	readonly saml?: Saml;
	readonly workloadIdentityPoolProviderId: string;
}
export interface Aws {
	readonly accountId: string;
}
export interface Oidc {
	readonly allowedAudiences?: string[];
	readonly issuerUri: string;
}
export interface Saml {
	readonly idpMetadataXml: string;
}
export interface WorkloadIdentityPoolProvider {
	readonly attributeCondition?: string;
	readonly attributeMapping?: { [P in string]: string };
	readonly aws?: Aws;
	readonly description?: string;
	readonly disabled?: boolean;
	readonly displayName?: string;
	readonly name?: string;
	readonly oidc?: Oidc;
	readonly saml?: Saml;
	readonly state?: string;
}
export default {
	ProjectsLocationsWorkloadIdentityPoolsProviders: ProjectsLocationsWorkloadIdentityPoolsProviders,
};
