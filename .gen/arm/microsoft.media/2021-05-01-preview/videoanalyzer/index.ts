import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class videoAnalyzers extends ArmResource<videoAnalyzersComponentInputs> implements videoAnalyzersComponentOutputs {
	constructor(entity: ADKEntity, options: videoAnalyzersComponentInputs) {
		super(entity, options.name, "Microsoft.Media/videoAnalyzers", "2021-05-01-preview", options);
	}
	public readonly apiVersion: "2021-05-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Media/videoAnalyzers";
}
export interface videoAnalyzersComponentOutputs {
	readonly apiVersion: "2021-05-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Media/videoAnalyzers";
}
export interface videoAnalyzersComponentInputs {
	readonly identity?: VideoAnalyzerIdentity;
	readonly location: string;
	readonly name: string;
	readonly properties?: VideoAnalyzerProperties;
	readonly systemData?: SystemData;
	readonly tags?: TrackedResourceTags;
}
export class videoAnalyzers_accessPolicies
	extends ArmResource<videoAnalyzers_accessPoliciesComponentInputs>
	implements videoAnalyzers_accessPoliciesComponentOutputs
{
	constructor(entity: ADKEntity, options: videoAnalyzers_accessPoliciesComponentInputs) {
		super(entity, options.name, "Microsoft.Media/videoAnalyzers/accessPolicies", "2021-05-01-preview", options);
	}
	public readonly apiVersion: "2021-05-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Media/videoAnalyzers/accessPolicies";
}
export interface videoAnalyzers_accessPoliciesComponentOutputs {
	readonly apiVersion: "2021-05-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Media/videoAnalyzers/accessPolicies";
}
export interface videoAnalyzers_accessPoliciesComponentInputs {
	readonly name: string;
	readonly properties?: AccessPolicyProperties;
	readonly systemData?: SystemData;
}
export class videoAnalyzers_edgeModules
	extends ArmResource<videoAnalyzers_edgeModulesComponentInputs>
	implements videoAnalyzers_edgeModulesComponentOutputs
{
	constructor(entity: ADKEntity, options: videoAnalyzers_edgeModulesComponentInputs) {
		super(entity, options.name, "Microsoft.Media/videoAnalyzers/edgeModules", "2021-05-01-preview", options);
	}
	public readonly apiVersion: "2021-05-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Media/videoAnalyzers/edgeModules";
}
export interface videoAnalyzers_edgeModulesComponentOutputs {
	readonly apiVersion: "2021-05-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Media/videoAnalyzers/edgeModules";
}
export interface videoAnalyzers_edgeModulesComponentInputs {
	readonly name: string;
	readonly properties?: EdgeModuleProperties;
	readonly systemData?: SystemData;
}
export class videoAnalyzers_videos
	extends ArmResource<videoAnalyzers_videosComponentInputs>
	implements videoAnalyzers_videosComponentOutputs
{
	constructor(entity: ADKEntity, options: videoAnalyzers_videosComponentInputs) {
		super(entity, options.name, "Microsoft.Media/videoAnalyzers/videos", "2021-05-01-preview", options);
	}
	public readonly apiVersion: "2021-05-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Media/videoAnalyzers/videos";
}
export interface videoAnalyzers_videosComponentOutputs {
	readonly apiVersion: "2021-05-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Media/videoAnalyzers/videos";
}
export interface videoAnalyzers_videosComponentInputs {
	readonly name: string;
	readonly properties?: VideoProperties;
	readonly systemData?: SystemData;
}
export function listProvisioningToken(
	resource: videoAnalyzers_edgeModules,
	input: ListProvisioningTokenInput,
): EdgeModuleProvisioningToken {
	if (resource.apiVersion !== "2021-05-01-preview") {
		throw new Error(`listProvisioningToken is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.Media/videoAnalyzers/edgeModules") {
		throw new Error(`listProvisioningToken is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export function listStreamingToken(resource: videoAnalyzers_videos): VideoStreamingToken {
	if (resource.apiVersion !== "2021-05-01-preview") {
		throw new Error(`listStreamingToken is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.Media/videoAnalyzers/videos") {
		throw new Error(`listStreamingToken is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export interface AccessPolicyProperties {
	readonly authentication?: AuthenticationBase;
	readonly role?: "Reader";
}
export interface AccountEncryption {
	readonly identity?: ResourceIdentity;
	readonly keyVaultProperties?: KeyVaultProperties;
	readonly status?: string;
	readonly type: "CustomerKey" | "SystemKey";
}
export interface AuthenticationBase {}
export interface EdgeModuleProperties {
	readonly edgeModuleId?: string;
}
export interface EdgeModuleProvisioningToken {
	readonly expirationDate?: string;
	readonly token?: string;
}
export interface Endpoint {
	readonly endpointUrl?: string;
	readonly type: "ClientApi";
}
export interface KeyVaultProperties {
	readonly currentKeyIdentifier?: string;
	readonly keyIdentifier: string;
}
export interface ListProvisioningTokenInput {
	readonly expirationDate: string;
}
export interface ResourceIdentity {
	readonly userAssignedIdentity: string;
}
export interface StorageAccount {
	readonly id?: string;
	readonly identity?: ResourceIdentity;
	readonly status?: string;
}
export interface SystemData {
	readonly createdAt?: string;
	readonly createdBy?: string;
	readonly createdByType?: "Application" | "Key" | "ManagedIdentity" | "User";
	readonly lastModifiedAt?: string;
	readonly lastModifiedBy?: string;
	readonly lastModifiedByType?: "Application" | "Key" | "ManagedIdentity" | "User";
}
export interface TokenClaim {
	readonly name: string;
	readonly value: string;
}
export interface TokenKey {
	readonly kid: string;
}
export interface TrackedResourceTags {
	readonly [key: string]: string;
}
export interface UserAssignedManagedIdentities {
	readonly [key: string]: UserAssignedManagedIdentity;
}
export interface UserAssignedManagedIdentity {
	readonly clientId?: string;
	readonly principalId?: string;
}
export interface VideoAnalyzerIdentity {
	readonly type: string;
	readonly userAssignedIdentities?: UserAssignedManagedIdentities;
}
export interface VideoAnalyzerProperties {
	readonly encryption?: AccountEncryption;
	readonly endpoints?: Endpoint[];
	readonly storageAccounts?: StorageAccount[];
}
export interface VideoFlags {
	readonly canStream: boolean;
	readonly hasData: boolean;
	readonly isRecording: boolean;
}
export interface VideoMediaInfo {
	readonly segmentLength?: string;
}
export interface VideoProperties {
	readonly description?: string;
	readonly flags?: VideoFlags;
	readonly mediaInfo?: VideoMediaInfo;
	readonly streaming?: VideoStreaming;
	readonly title?: string;
	readonly type?: "Archive";
}
export interface VideoStreaming {
	readonly archiveBaseUrl?: string;
}
export interface VideoStreamingToken {
	readonly expirationDate?: string;
	readonly token?: string;
}
export default {
	videoAnalyzers: videoAnalyzers,
	"videoAnalyzers/accessPolicies": videoAnalyzers_accessPolicies,
	"videoAnalyzers/edgeModules": videoAnalyzers_edgeModules,
	"videoAnalyzers/videos": videoAnalyzers_videos,
};
