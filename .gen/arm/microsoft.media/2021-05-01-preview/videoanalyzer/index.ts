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
	readonly identity?: VideoAnalyzerIdentity | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties?: VideoAnalyzerProperties | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: TrackedResourceTags | undefined;
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
	readonly properties?: AccessPolicyProperties | undefined;
	readonly systemData?: SystemData | undefined;
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
	readonly properties?: EdgeModuleProperties | undefined;
	readonly systemData?: SystemData | undefined;
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
	readonly properties?: VideoProperties | undefined;
	readonly systemData?: SystemData | undefined;
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
	readonly authentication?: AuthenticationBase | undefined;
	readonly role?: "Reader" | undefined;
}
export interface AccountEncryption {
	readonly identity?: ResourceIdentity | undefined;
	readonly keyVaultProperties?: KeyVaultProperties | undefined;
	readonly status?: string | undefined;
	readonly type: "CustomerKey" | "SystemKey";
}
export interface AuthenticationBase {}
export interface EdgeModuleProperties {
	readonly edgeModuleId?: string | undefined;
}
export interface EdgeModuleProvisioningToken {
	readonly expirationDate?: string | undefined;
	readonly token?: string | undefined;
}
export interface Endpoint {
	readonly endpointUrl?: string | undefined;
	readonly type: "ClientApi";
}
export interface KeyVaultProperties {
	readonly currentKeyIdentifier?: string | undefined;
	readonly keyIdentifier: string;
}
export interface ListProvisioningTokenInput {
	readonly expirationDate: string;
}
export interface ResourceIdentity {
	readonly userAssignedIdentity: string;
}
export interface StorageAccount {
	readonly id?: string | undefined;
	readonly identity?: ResourceIdentity | undefined;
	readonly status?: string | undefined;
}
export interface SystemData {
	readonly createdAt?: string | undefined;
	readonly createdBy?: string | undefined;
	readonly createdByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
	readonly lastModifiedAt?: string | undefined;
	readonly lastModifiedBy?: string | undefined;
	readonly lastModifiedByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
}
export interface TokenClaim {
	readonly name: string;
	readonly value: string;
}
export interface TokenKey {
	readonly kid: string;
}
export interface TrackedResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface UserAssignedManagedIdentities {
	readonly "[ key: string ]"?: UserAssignedManagedIdentity | undefined;
}
export interface UserAssignedManagedIdentity {
	readonly clientId?: string | undefined;
	readonly principalId?: string | undefined;
}
export interface VideoAnalyzerIdentity {
	readonly type: string;
	readonly userAssignedIdentities?: UserAssignedManagedIdentities | undefined;
}
export interface VideoAnalyzerProperties {
	readonly encryption?: AccountEncryption | undefined;
	readonly endpoints?: Endpoint[] | undefined;
	readonly storageAccounts?: StorageAccount[] | undefined;
}
export interface VideoFlags {
	readonly canStream: boolean;
	readonly hasData: boolean;
	readonly isRecording: boolean;
}
export interface VideoMediaInfo {
	readonly segmentLength?: string | undefined;
}
export interface VideoProperties {
	readonly description?: string | undefined;
	readonly flags?: VideoFlags | undefined;
	readonly mediaInfo?: VideoMediaInfo | undefined;
	readonly streaming?: VideoStreaming | undefined;
	readonly title?: string | undefined;
	readonly type?: "Archive" | undefined;
}
export interface VideoStreaming {
	readonly archiveBaseUrl?: string | undefined;
}
export interface VideoStreamingToken {
	readonly expirationDate?: string | undefined;
	readonly token?: string | undefined;
}
export default {
	videoAnalyzers: videoAnalyzers,
	"videoAnalyzers/accessPolicies": videoAnalyzers_accessPolicies,
	"videoAnalyzers/edgeModules": videoAnalyzers_edgeModules,
	"videoAnalyzers/videos": videoAnalyzers_videos,
};
