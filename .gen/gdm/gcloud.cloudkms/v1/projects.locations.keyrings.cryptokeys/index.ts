import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ProjectsLocationsKeyRingsCryptoKeys
	extends GdmResource<ProjectsLocationsKeyRingsCryptoKeysComponentInputs>
	implements ProjectsLocationsKeyRingsCryptoKeysComponentOutputs
{
	constructor(entity: ADKEntity, options: ProjectsLocationsKeyRingsCryptoKeysComponentInputs) {
		super(entity, options.name, "cloudkms.v1.ProjectsLocationsKeyRingsCryptoKeys", options);
	}
	public readonly createTime?: string;
	public readonly primary?: CryptoKeyVersion;
}
export interface ProjectsLocationsKeyRingsCryptoKeysComponentOutputs {
	readonly createTime?: string;
	readonly primary?: CryptoKeyVersion;
}
export interface ProjectsLocationsKeyRingsCryptoKeysComponentInputs {
	readonly cryptoKeyBackend?: string;
	readonly cryptoKeyId: string;
	readonly destroyScheduledDuration?: string;
	readonly importOnly?: boolean;
	readonly labels?: { [P in string]: string };
	readonly name: string;
	readonly nextRotationTime?: string;
	readonly parent: string;
	readonly purpose?: string;
	readonly rotationPeriod?: string;
	readonly skipInitialVersionCreation?: boolean;
	readonly versionTemplate?: CryptoKeyVersionTemplate;
}
export interface CertificateChains {
	readonly caviumCerts?: string[];
	readonly googleCardCerts?: string[];
	readonly googlePartitionCerts?: string[];
}
export interface CryptoKey {
	readonly createTime?: string;
	readonly cryptoKeyBackend?: string;
	readonly destroyScheduledDuration?: string;
	readonly importOnly?: boolean;
	readonly labels?: { [P in string]: string };
	readonly name?: string;
	readonly nextRotationTime?: string;
	readonly primary?: CryptoKeyVersion;
	readonly purpose?: string;
	readonly rotationPeriod?: string;
	readonly versionTemplate?: CryptoKeyVersionTemplate;
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
export interface CryptoKeyVersionTemplate {
	readonly algorithm: string;
	readonly protectionLevel?: string;
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
	ProjectsLocationsKeyRingsCryptoKeys: ProjectsLocationsKeyRingsCryptoKeys,
};
