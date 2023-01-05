import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ProjectsLocationsKeyRingsImportJobs
	extends GdmResource<ProjectsLocationsKeyRingsImportJobsComponentInputs>
	implements ProjectsLocationsKeyRingsImportJobsComponentOutputs
{
	constructor(entity: ADKEntity, options: ProjectsLocationsKeyRingsImportJobsComponentInputs) {
		super(entity, options.name, "cloudkms.v1.ProjectsLocationsKeyRingsImportJobs", options);
	}
	public readonly attestation?: KeyOperationAttestation;
	public readonly createTime?: string;
	public readonly expireEventTime?: string;
	public readonly expireTime?: string;
	public readonly generateTime?: string;
	public readonly publicKey?: WrappingPublicKey;
	public readonly state?: string;
}
export interface ProjectsLocationsKeyRingsImportJobsComponentOutputs {
	readonly attestation?: KeyOperationAttestation;
	readonly createTime?: string;
	readonly expireEventTime?: string;
	readonly expireTime?: string;
	readonly generateTime?: string;
	readonly publicKey?: WrappingPublicKey;
	readonly state?: string;
}
export interface ProjectsLocationsKeyRingsImportJobsComponentInputs {
	readonly importJobId: string;
	readonly importMethod: string;
	readonly name: string;
	readonly parent: string;
	readonly protectionLevel: string;
}
export interface CertificateChains {
	readonly caviumCerts?: string[];
	readonly googleCardCerts?: string[];
	readonly googlePartitionCerts?: string[];
}
export interface ImportJob {
	readonly attestation?: KeyOperationAttestation;
	readonly createTime?: string;
	readonly expireEventTime?: string;
	readonly expireTime?: string;
	readonly generateTime?: string;
	readonly importMethod: string;
	readonly name?: string;
	readonly protectionLevel: string;
	readonly publicKey?: WrappingPublicKey;
	readonly state?: string;
}
export interface KeyOperationAttestation {
	readonly certChains?: CertificateChains;
	readonly content?: string;
	readonly format?: string;
}
export interface WrappingPublicKey {
	readonly pem?: string;
}
export default {
	ProjectsLocationsKeyRingsImportJobs: ProjectsLocationsKeyRingsImportJobs,
};
