import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersions
	extends GdmResource<ProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsComponentInputs>
	implements ProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsComponentOutputs
{
	constructor(entity: ADKEntity, options: ProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsComponentInputs) {
		super(entity, options.name, "cloudkms.v1.ProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersions", options);
	}
	public readonly algorithm?: string;
	public readonly attestation?: KeyOperationAttestation;
	public readonly createTime?: string;
	public readonly destroyEventTime?: string;
	public readonly destroyTime?: string;
	public readonly generateTime?: string;
	public readonly importFailureReason?: string;
	public readonly importJob?: string;
	public readonly importTime?: string;
	public readonly protectionLevel?: string;
	public readonly reimportEligible?: boolean;
}
export interface ProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsComponentOutputs {
	readonly algorithm?: string;
	readonly attestation?: KeyOperationAttestation;
	readonly createTime?: string;
	readonly destroyEventTime?: string;
	readonly destroyTime?: string;
	readonly generateTime?: string;
	readonly importFailureReason?: string;
	readonly importJob?: string;
	readonly importTime?: string;
	readonly protectionLevel?: string;
	readonly reimportEligible?: boolean;
}
export interface ProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsComponentInputs {
	readonly externalProtectionLevelOptions?: ExternalProtectionLevelOptions;
	readonly name: string;
	readonly parent: string;
	readonly state?: string;
}
export interface CertificateChains {
	readonly caviumCerts?: string[];
	readonly googleCardCerts?: string[];
	readonly googlePartitionCerts?: string[];
}
export interface CryptoKeyVersion {
	readonly algorithm?: string;
	readonly attestation?: KeyOperationAttestation;
	readonly createTime?: string;
	readonly destroyEventTime?: string;
	readonly destroyTime?: string;
	readonly externalProtectionLevelOptions?: ExternalProtectionLevelOptions;
	readonly generateTime?: string;
	readonly importFailureReason?: string;
	readonly importJob?: string;
	readonly importTime?: string;
	readonly name?: string;
	readonly protectionLevel?: string;
	readonly reimportEligible?: boolean;
	readonly state?: string;
}
export interface ExternalProtectionLevelOptions {
	readonly ekmConnectionKeyPath?: string;
	readonly externalKeyUri?: string;
}
export interface KeyOperationAttestation {
	readonly certChains?: CertificateChains;
	readonly content?: string;
	readonly format?: string;
}
export default {
	ProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersions: ProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersions,
};
