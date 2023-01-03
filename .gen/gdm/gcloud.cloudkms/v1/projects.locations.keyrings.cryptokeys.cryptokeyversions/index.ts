import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersions
	extends GdmResource<ProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsComponentInputs>
	implements ProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsComponentOutputs
{
	constructor(entity: ADKEntity, options: ProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsComponentInputs) {
		super(entity, options.name, "cloudkms.v1.ProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersions", options);
	}
	public readonly algorithm?: string | undefined;
	public readonly attestation?: KeyOperationAttestation | undefined;
	public readonly createTime?: string | undefined;
	public readonly destroyEventTime?: string | undefined;
	public readonly destroyTime?: string | undefined;
	public readonly generateTime?: string | undefined;
	public readonly importFailureReason?: string | undefined;
	public readonly importJob?: string | undefined;
	public readonly importTime?: string | undefined;
	public readonly protectionLevel?: string | undefined;
	public readonly reimportEligible?: boolean | undefined;
}
export interface ProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsComponentOutputs {
	readonly algorithm?: string | undefined;
	readonly attestation?: KeyOperationAttestation | undefined;
	readonly createTime?: string | undefined;
	readonly destroyEventTime?: string | undefined;
	readonly destroyTime?: string | undefined;
	readonly generateTime?: string | undefined;
	readonly importFailureReason?: string | undefined;
	readonly importJob?: string | undefined;
	readonly importTime?: string | undefined;
	readonly protectionLevel?: string | undefined;
	readonly reimportEligible?: boolean | undefined;
}
export interface ProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsComponentInputs {
	readonly externalProtectionLevelOptions?: ExternalProtectionLevelOptions | undefined;
	readonly name: string;
	readonly parent: string;
	readonly state?: string | undefined;
	readonly type: string;
}
export interface CertificateChains {
	readonly caviumCerts?: string[] | undefined;
	readonly googleCardCerts?: string[] | undefined;
	readonly googlePartitionCerts?: string[] | undefined;
}
export interface CryptoKeyVersion {
	readonly algorithm?: string | undefined;
	readonly attestation?: KeyOperationAttestation | undefined;
	readonly createTime?: string | undefined;
	readonly destroyEventTime?: string | undefined;
	readonly destroyTime?: string | undefined;
	readonly externalProtectionLevelOptions?: ExternalProtectionLevelOptions | undefined;
	readonly generateTime?: string | undefined;
	readonly importFailureReason?: string | undefined;
	readonly importJob?: string | undefined;
	readonly importTime?: string | undefined;
	readonly name?: string | undefined;
	readonly protectionLevel?: string | undefined;
	readonly reimportEligible?: boolean | undefined;
	readonly state?: string | undefined;
}
export interface ExternalProtectionLevelOptions {
	readonly ekmConnectionKeyPath?: string | undefined;
	readonly externalKeyUri?: string | undefined;
}
export interface KeyOperationAttestation {
	readonly certChains?: CertificateChains | undefined;
	readonly content?: string | undefined;
	readonly format?: string | undefined;
}
export default {
	ProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersions: ProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersions,
};
