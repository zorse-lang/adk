import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ProjectsLocationsEkmConnections
	extends GdmResource<ProjectsLocationsEkmConnectionsComponentInputs>
	implements ProjectsLocationsEkmConnectionsComponentOutputs
{
	constructor(entity: ADKEntity, options: ProjectsLocationsEkmConnectionsComponentInputs) {
		super(entity, options.name, "cloudkms.v1.ProjectsLocationsEkmConnections", options);
	}
	public readonly createTime?: string | undefined;
}
export interface ProjectsLocationsEkmConnectionsComponentOutputs {
	readonly createTime?: string | undefined;
}
export interface ProjectsLocationsEkmConnectionsComponentInputs {
	readonly ekmConnectionId: string;
	readonly etag?: string | undefined;
	readonly name: string;
	readonly parent: string;
	readonly serviceResolvers?: ServiceResolver[] | undefined;
	readonly type: string;
}
export interface Certificate {
	readonly issuer?: string | undefined;
	readonly notAfterTime?: string | undefined;
	readonly notBeforeTime?: string | undefined;
	readonly parsed?: boolean | undefined;
	readonly rawDer: string;
	readonly serialNumber?: string | undefined;
	readonly sha256Fingerprint?: string | undefined;
	readonly subject?: string | undefined;
	readonly subjectAlternativeDnsNames?: string[] | undefined;
}
export interface EkmConnection {
	readonly createTime?: string | undefined;
	readonly etag?: string | undefined;
	readonly name?: string | undefined;
	readonly serviceResolvers?: ServiceResolver[] | undefined;
}
export interface ServiceResolver {
	readonly endpointFilter?: string | undefined;
	readonly hostname: string;
	readonly serverCertificates: Certificate[];
	readonly serviceDirectoryService: string;
}
export default {
	ProjectsLocationsEkmConnections: ProjectsLocationsEkmConnections,
};
