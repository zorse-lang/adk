import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class ApplicationInstance
	extends CfnResource<ApplicationInstanceComponentInputs>
	implements ApplicationInstanceComponentOutputs
{
	constructor(entity: ADKEntity, options: ApplicationInstanceComponentInputs) {
		super(entity, options.LogicalId, "AWS::Panorama::ApplicationInstance", options);
	}
	public readonly ApplicationInstanceId: string;
	public readonly Arn: string;
	public readonly CreatedTime: number;
	public readonly DefaultRuntimeContextDeviceName: string;
	public readonly HealthStatus: string;
	public readonly LastUpdatedTime: number;
	public readonly Status: string;
	public readonly StatusDescription: string;
}
export interface ApplicationInstanceComponentOutputs {
	readonly ApplicationInstanceId: string;
	readonly Arn: string;
	readonly CreatedTime: number;
	readonly DefaultRuntimeContextDeviceName: string;
	readonly HealthStatus: string;
	readonly LastUpdatedTime: number;
	readonly Status: string;
	readonly StatusDescription: string;
}
export interface ApplicationInstanceComponentInputs {
	readonly DefaultRuntimeContextDevice: string;
	readonly ManifestPayload: ManifestPayload;
	readonly ApplicationInstanceIdToReplace?: (string | undefined) | undefined;
	readonly Description?: (string | undefined) | undefined;
	readonly DeviceId?: (string | undefined) | undefined;
	readonly ManifestOverridesPayload?: (ManifestOverridesPayload | undefined) | undefined;
	readonly Name?: (string | undefined) | undefined;
	readonly RuntimeRoleArn?: (string | undefined) | undefined;
	readonly StatusFilter?: (string | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly LogicalId: string;
}
export class Package extends CfnResource<PackageComponentInputs> implements PackageComponentOutputs {
	constructor(entity: ADKEntity, options: PackageComponentInputs) {
		super(entity, options.LogicalId, "AWS::Panorama::Package", options);
	}
	public readonly Arn: string;
	public readonly CreatedTime: number;
	public readonly PackageId: string;
	public readonly StorageLocationBinaryPrefixLocation: string;
	public readonly StorageLocationBucket: string;
	public readonly StorageLocationGeneratedPrefixLocation: string;
	public readonly StorageLocationManifestPrefixLocation: string;
	public readonly StorageLocationRepoPrefixLocation: string;
}
export interface PackageComponentOutputs {
	readonly Arn: string;
	readonly CreatedTime: number;
	readonly PackageId: string;
	readonly StorageLocationBinaryPrefixLocation: string;
	readonly StorageLocationBucket: string;
	readonly StorageLocationGeneratedPrefixLocation: string;
	readonly StorageLocationManifestPrefixLocation: string;
	readonly StorageLocationRepoPrefixLocation: string;
}
export interface PackageComponentInputs {
	readonly PackageName: string;
	readonly StorageLocation?: (StorageLocation | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly LogicalId: string;
}
export class PackageVersion extends CfnResource<PackageVersionComponentInputs> implements PackageVersionComponentOutputs {
	constructor(entity: ADKEntity, options: PackageVersionComponentInputs) {
		super(entity, options.LogicalId, "AWS::Panorama::PackageVersion", options);
	}
	public readonly IsLatestPatch: boolean;
	public readonly PackageArn: string;
	public readonly PackageName: string;
	public readonly RegisteredTime: number;
	public readonly Status: string;
	public readonly StatusDescription: string;
}
export interface PackageVersionComponentOutputs {
	readonly IsLatestPatch: boolean;
	readonly PackageArn: string;
	readonly PackageName: string;
	readonly RegisteredTime: number;
	readonly Status: string;
	readonly StatusDescription: string;
}
export interface PackageVersionComponentInputs {
	readonly PackageId: string;
	readonly PackageVersion: string;
	readonly PatchVersion: string;
	readonly MarkLatest?: (boolean | undefined) | undefined;
	readonly OwnerAccount?: (string | undefined) | undefined;
	readonly UpdatedLatestPatchVersion?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export interface ManifestOverridesPayload {
	readonly PayloadData?: (string | undefined) | undefined;
}
export interface ManifestPayload {
	readonly PayloadData?: (string | undefined) | undefined;
}
export interface StorageLocation {
	readonly BinaryPrefixLocation?: (string | undefined) | undefined;
	readonly Bucket?: (string | undefined) | undefined;
	readonly GeneratedPrefixLocation?: (string | undefined) | undefined;
	readonly ManifestPrefixLocation?: (string | undefined) | undefined;
	readonly RepoPrefixLocation?: (string | undefined) | undefined;
}
export default {
	ApplicationInstance: ApplicationInstance,
	Package: Package,
	PackageVersion: PackageVersion,
};
