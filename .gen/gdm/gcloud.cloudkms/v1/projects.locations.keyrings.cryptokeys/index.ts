import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ProjectsLocationsKeyRingsCryptoKeys
	extends GdmResource<ProjectsLocationsKeyRingsCryptoKeysComponentInputs>
	implements ProjectsLocationsKeyRingsCryptoKeysComponentOutputs
{
	constructor(entity: ADKEntity, options: ProjectsLocationsKeyRingsCryptoKeysComponentInputs) {
		super(entity, options.name, "cloudkms.v1.ProjectsLocationsKeyRingsCryptoKeys", options);
	}
	public readonly createTime?: string | undefined;
	public readonly primary?: CryptoKeyVersion | undefined;
}
export interface ProjectsLocationsKeyRingsCryptoKeysComponentOutputs {
	readonly createTime?: string | undefined;
	readonly primary?: CryptoKeyVersion | undefined;
}
export interface ProjectsLocationsKeyRingsCryptoKeysComponentInputs {
	readonly cryptoKeyBackend?: string | undefined;
	readonly cryptoKeyId: string;
	readonly destroyScheduledDuration?: string | undefined;
	readonly importOnly?: boolean | undefined;
	readonly labels?: { [P in string]: string } | undefined;
	readonly name: string;
	readonly nextRotationTime?: string | undefined;
	readonly parent: string;
	readonly purpose?: string | undefined;
	readonly rotationPeriod?: string | undefined;
	readonly skipInitialVersionCreation?: boolean | undefined;
	readonly versionTemplate?: CryptoKeyVersionTemplate | undefined;
	readonly type: string;
}
export interface CertificateChains {
	readonly caviumCerts?: string[] | undefined;
	readonly googleCardCerts?: string[] | undefined;
	readonly googlePartitionCerts?: string[] | undefined;
}
export interface CryptoKey {
	readonly createTime?: string | undefined;
	readonly cryptoKeyBackend?: string | undefined;
	readonly destroyScheduledDuration?: string | undefined;
	readonly importOnly?: boolean | undefined;
	readonly labels?: { [P in string]: string } | undefined;
	readonly name?: string | undefined;
	readonly nextRotationTime?: string | undefined;
	readonly primary?: CryptoKeyVersion | undefined;
	readonly purpose?: string | undefined;
	readonly rotationPeriod?: string | undefined;
	readonly versionTemplate?: CryptoKeyVersionTemplate | undefined;
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
export interface CryptoKeyVersionTemplate {
	readonly algorithm: string;
	readonly protectionLevel?: string | undefined;
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
	ProjectsLocationsKeyRingsCryptoKeys: ProjectsLocationsKeyRingsCryptoKeys,
};
