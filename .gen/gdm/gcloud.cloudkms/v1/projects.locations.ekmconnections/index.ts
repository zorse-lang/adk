import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ProjectsLocationsEkmConnections
	extends GdmResource<ProjectsLocationsEkmConnectionsComponentInputs>
	implements ProjectsLocationsEkmConnectionsComponentOutputs
{
	constructor(entity: ADKEntity, options: ProjectsLocationsEkmConnectionsComponentInputs) {
		super(entity, options.name, "cloudkms.v1.ProjectsLocationsEkmConnections", options);
	}
	public readonly createTime?: string;
}
export interface ProjectsLocationsEkmConnectionsComponentOutputs {
	readonly createTime?: string;
}
export interface ProjectsLocationsEkmConnectionsComponentInputs {
	readonly ekmConnectionId: string;
	readonly etag?: string;
	readonly name: string;
	readonly parent: string;
	readonly serviceResolvers?: ServiceResolver[];
}
export interface Certificate {
	readonly issuer?: string;
	readonly notAfterTime?: string;
	readonly notBeforeTime?: string;
	readonly parsed?: boolean;
	readonly rawDer: string;
	readonly serialNumber?: string;
	readonly sha256Fingerprint?: string;
	readonly subject?: string;
	readonly subjectAlternativeDnsNames?: string[];
}
export interface EkmConnection {
	readonly createTime?: string;
	readonly etag?: string;
	readonly name?: string;
	readonly serviceResolvers?: ServiceResolver[];
}
export interface ServiceResolver {
	readonly endpointFilter?: string;
	readonly hostname: string;
	readonly serverCertificates: Certificate[];
	readonly serviceDirectoryService: string;
}
export default {
	ProjectsLocationsEkmConnections: ProjectsLocationsEkmConnections,
};
