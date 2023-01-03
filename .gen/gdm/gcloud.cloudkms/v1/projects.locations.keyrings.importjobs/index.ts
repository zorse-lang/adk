import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ProjectsLocationsKeyRingsImportJobs
	extends GdmResource<ProjectsLocationsKeyRingsImportJobsComponentInputs>
	implements ProjectsLocationsKeyRingsImportJobsComponentOutputs
{
	constructor(entity: ADKEntity, options: ProjectsLocationsKeyRingsImportJobsComponentInputs) {
		super(entity, options.name, "cloudkms.v1.ProjectsLocationsKeyRingsImportJobs", options);
	}
	public readonly attestation?: KeyOperationAttestation | undefined;
	public readonly createTime?: string | undefined;
	public readonly expireEventTime?: string | undefined;
	public readonly expireTime?: string | undefined;
	public readonly generateTime?: string | undefined;
	public readonly publicKey?: WrappingPublicKey | undefined;
	public readonly state?: string | undefined;
}
export interface ProjectsLocationsKeyRingsImportJobsComponentOutputs {
	readonly attestation?: KeyOperationAttestation | undefined;
	readonly createTime?: string | undefined;
	readonly expireEventTime?: string | undefined;
	readonly expireTime?: string | undefined;
	readonly generateTime?: string | undefined;
	readonly publicKey?: WrappingPublicKey | undefined;
	readonly state?: string | undefined;
}
export interface ProjectsLocationsKeyRingsImportJobsComponentInputs {
	readonly importJobId: string;
	readonly importMethod: string;
	readonly name: string;
	readonly parent: string;
	readonly protectionLevel: string;
	readonly type: string;
}
export interface CertificateChains {
	readonly caviumCerts?: string[] | undefined;
	readonly googleCardCerts?: string[] | undefined;
	readonly googlePartitionCerts?: string[] | undefined;
}
export interface ImportJob {
	readonly attestation?: KeyOperationAttestation | undefined;
	readonly createTime?: string | undefined;
	readonly expireEventTime?: string | undefined;
	readonly expireTime?: string | undefined;
	readonly generateTime?: string | undefined;
	readonly importMethod: string;
	readonly name?: string | undefined;
	readonly protectionLevel: string;
	readonly publicKey?: WrappingPublicKey | undefined;
	readonly state?: string | undefined;
}
export interface KeyOperationAttestation {
	readonly certChains?: CertificateChains | undefined;
	readonly content?: string | undefined;
	readonly format?: string | undefined;
}
export interface WrappingPublicKey {
	readonly pem?: string | undefined;
}
export default {
	ProjectsLocationsKeyRingsImportJobs: ProjectsLocationsKeyRingsImportJobs,
};
