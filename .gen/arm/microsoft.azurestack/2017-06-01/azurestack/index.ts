import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class cloudManifestFiles
	extends ArmResource<cloudManifestFilesComponentInputs>
	implements cloudManifestFilesComponentOutputs
{
	constructor(entity: ADKEntity, options: cloudManifestFilesComponentInputs) {
		super(entity, options.name, "Microsoft.AzureStack/cloudManifestFiles", "2017-06-01", options);
	}
	public readonly apiVersion: "2017-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.AzureStack/cloudManifestFiles";
}
export interface cloudManifestFilesComponentOutputs {
	readonly apiVersion: "2017-06-01";
	readonly id: string;
	readonly type: "Microsoft.AzureStack/cloudManifestFiles";
}
export interface cloudManifestFilesComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly properties?: CloudManifestFileProperties | undefined;
}
export class registrations extends ArmResource<registrationsComponentInputs> implements registrationsComponentOutputs {
	constructor(entity: ADKEntity, options: registrationsComponentInputs) {
		super(entity, options.name, "Microsoft.AzureStack/registrations", "2017-06-01", options);
	}
	public readonly apiVersion: "2017-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.AzureStack/registrations";
}
export interface registrationsComponentOutputs {
	readonly apiVersion: "2017-06-01";
	readonly id: string;
	readonly type: "Microsoft.AzureStack/registrations";
}
export interface registrationsComponentInputs {
	readonly etag?: string | undefined;
	readonly location: "global";
	readonly name: string;
	readonly properties: RegistrationParameterPropertiesOrRegistrationProperties;
	readonly tags?: TrackedResourceTags | undefined;
}
export class registrations_customerSubscriptions
	extends ArmResource<registrations_customerSubscriptionsComponentInputs>
	implements registrations_customerSubscriptionsComponentOutputs
{
	constructor(entity: ADKEntity, options: registrations_customerSubscriptionsComponentInputs) {
		super(entity, options.name, "Microsoft.AzureStack/registrations/customerSubscriptions", "2017-06-01", options);
	}
	public readonly apiVersion: "2017-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.AzureStack/registrations/customerSubscriptions";
}
export interface registrations_customerSubscriptionsComponentOutputs {
	readonly apiVersion: "2017-06-01";
	readonly id: string;
	readonly type: "Microsoft.AzureStack/registrations/customerSubscriptions";
}
export interface registrations_customerSubscriptionsComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly properties?: CustomerSubscriptionProperties | undefined;
}
export class registrations_products
	extends ArmResource<registrations_productsComponentInputs>
	implements registrations_productsComponentOutputs
{
	constructor(entity: ADKEntity, options: registrations_productsComponentInputs) {
		super(entity, options.name, "Microsoft.AzureStack/registrations/products", "2017-06-01", options);
	}
	public readonly apiVersion: "2017-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.AzureStack/registrations/products";
}
export interface registrations_productsComponentOutputs {
	readonly apiVersion: "2017-06-01";
	readonly id: string;
	readonly type: "Microsoft.AzureStack/registrations/products";
}
export interface registrations_productsComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly properties?: ProductNestedProperties | undefined;
}
export function listDetails(resource: registrations_products): ExtendedProduct {
	if (resource.apiVersion !== "2017-06-01") {
		throw new Error(`listDetails is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.AzureStack/registrations/products") {
		throw new Error(`listDetails is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export function listProducts(resource: registrations_products, input: DeviceConfiguration): ProductList {
	if (resource.apiVersion !== "2017-06-01") {
		throw new Error(`listProducts is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.AzureStack/registrations/products") {
		throw new Error(`listProducts is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export interface CloudManifestFileDeploymentData {
	readonly customCloudVerificationKey?: string | undefined;
	readonly customEnvironmentEndpoints?: CloudManifestFileEnvironmentEndpoints | undefined;
	readonly externalDsmsCertificates?: string | undefined;
}
export interface CloudManifestFileEnvironmentEndpoints {
	readonly customCloudArmEndpoint?: string | undefined;
	readonly externalDsmsEndpoint?: string | undefined;
}
export interface CloudManifestFileProperties {
	readonly deploymentData?: CloudManifestFileDeploymentData | undefined;
	readonly signature?: string | undefined;
}
export interface Compatibility {
	readonly description?: string | undefined;
	readonly isCompatible?: boolean | undefined;
	readonly issues?:
		| (
				| "ADFSIdentitySystemRequired"
				| "AzureADIdentitySystemRequired"
				| "CapacityBillingModelRequired"
				| "ConnectionToAzureRequired"
				| "ConnectionToInternetRequired"
				| "DevelopmentBillingModelRequired"
				| "DisconnectedEnvironmentRequired"
				| "HigherDeviceVersionRequired"
				| "LowerDeviceVersionRequired"
				| "PayAsYouGoBillingModelRequired"[]
		  )
		| undefined;
	readonly message?: string | undefined;
}
export interface CustomerSubscriptionProperties {
	readonly tenantId?: string | undefined;
}
export interface DataDiskImage {
	readonly lun?: number | undefined;
	readonly sourceBlobSasUri?: string | undefined;
}
export interface DeviceConfiguration {
	readonly deviceVersion?: string | undefined;
	readonly identitySystem?: ("ADFS" | "AzureAD") | undefined;
}
export interface ExtendedProduct {
	readonly galleryPackageBlobSasUri?: string | undefined;
	readonly productKind?: string | undefined;
	readonly properties?: ExtendedProductProperties | undefined;
}
export interface ExtendedProductProperties {
	readonly computeRole?: ("IaaS" | "None" | "PaaS") | undefined;
	readonly dataDiskImages?: DataDiskImage[] | undefined;
	readonly isSystemExtension?: boolean | undefined;
	readonly osDiskImage?: OsDiskImage | undefined;
	readonly sourceBlob?: Uri | undefined;
	readonly supportMultipleExtensions?: boolean | undefined;
	readonly version?: string | undefined;
	readonly vmOsType?: ("Linux" | "None" | "Windows") | undefined;
	readonly vmScaleSetEnabled?: boolean | undefined;
}
export interface IconUris {
	readonly hero?: string | undefined;
	readonly large?: string | undefined;
	readonly medium?: string | undefined;
	readonly small?: string | undefined;
	readonly wide?: string | undefined;
}
export interface OsDiskImage {
	readonly operatingSystem?: ("Linux" | "None" | "Windows") | undefined;
	readonly sourceBlobSasUri?: string | undefined;
}
export interface Product {
	readonly etag?: string | undefined;
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: ProductNestedProperties | undefined;
	readonly type?: string | undefined;
}
export interface ProductLink {
	readonly displayName?: string | undefined;
	readonly uri?: string | undefined;
}
export interface ProductList {
	readonly nextLink?: string | undefined;
	readonly value?: Product[] | undefined;
}
export interface ProductNestedProperties {
	readonly billingPartNumber?: string | undefined;
	readonly compatibility?: Compatibility | undefined;
	readonly description?: string | undefined;
	readonly displayName?: string | undefined;
	readonly galleryItemIdentity?: string | undefined;
	readonly iconUris?: IconUris | undefined;
	readonly legalTerms?: string | undefined;
	readonly links?: ProductLink[] | undefined;
	readonly offer?: string | undefined;
	readonly offerVersion?: string | undefined;
	readonly payloadLength?: number | undefined;
	readonly privacyPolicy?: string | undefined;
	readonly productKind?: string | undefined;
	readonly productProperties?: ProductProperties | undefined;
	readonly publisherDisplayName?: string | undefined;
	readonly publisherIdentifier?: string | undefined;
	readonly sku?: string | undefined;
	readonly vmExtensionType?: string | undefined;
}
export interface ProductProperties {
	readonly version?: string | undefined;
}
export interface RegistrationParameterPropertiesOrRegistrationProperties {
	readonly billingModel?: string | undefined;
	readonly cloudId?: string | undefined;
	readonly objectId?: string | undefined;
	readonly registrationToken: string;
}
export interface TrackedResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface Uri {
	readonly uri?: string | undefined;
}
export default {
	cloudManifestFiles: cloudManifestFiles,
	registrations: registrations,
	"registrations/customerSubscriptions": registrations_customerSubscriptions,
	"registrations/products": registrations_products,
};
