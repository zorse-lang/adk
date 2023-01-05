import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class registrations extends ArmResource<registrationsComponentInputs> implements registrationsComponentOutputs {
	constructor(entity: ADKEntity, options: registrationsComponentInputs) {
		super(entity, options.name, "Microsoft.AzureStack/registrations", "2016-01-01", options);
	}
	public readonly apiVersion: "2016-01-01";
	public readonly id: string;
	public readonly type: "Microsoft.AzureStack/registrations";
}
export interface registrationsComponentOutputs {
	readonly apiVersion: "2016-01-01";
	readonly id: string;
	readonly type: "Microsoft.AzureStack/registrations";
}
export interface registrationsComponentInputs {
	readonly etag?: string;
	readonly location: "global";
	readonly name: string;
	readonly properties: RegistrationParameterPropertiesOrRegistrationProperties;
	readonly tags?: TrackedResourceTags;
}
export class registrations_products
	extends ArmResource<registrations_productsComponentInputs>
	implements registrations_productsComponentOutputs
{
	constructor(entity: ADKEntity, options: registrations_productsComponentInputs) {
		super(entity, options.name, "Microsoft.AzureStack/registrations/products", "2016-01-01", options);
	}
	public readonly apiVersion: "2016-01-01";
	public readonly id: string;
	public readonly type: "Microsoft.AzureStack/registrations/products";
}
export interface registrations_productsComponentOutputs {
	readonly apiVersion: "2016-01-01";
	readonly id: string;
	readonly type: "Microsoft.AzureStack/registrations/products";
}
export interface registrations_productsComponentInputs {
	readonly name: string;
	readonly properties?: ProductNestedProperties;
}
export function listDetails(resource: registrations_products): ExtendedProduct {
	if (resource.apiVersion !== "2016-01-01") {
		throw new Error(`listDetails is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.AzureStack/registrations/products") {
		throw new Error(`listDetails is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export function listProducts(resource: registrations_products, input: DeviceConfiguration): ProductList {
	if (resource.apiVersion !== "2016-01-01") {
		throw new Error(`listProducts is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.AzureStack/registrations/products") {
		throw new Error(`listProducts is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export interface Compatibility {
	readonly description?: string;
	readonly isCompatible?: boolean;
	readonly issues?:
		| "ADFSIdentitySystemRequired"
		| "AzureADIdentitySystemRequired"
		| "CapacityBillingModelRequired"
		| "ConnectionToAzureRequired"
		| "ConnectionToInternetRequired"
		| "DevelopmentBillingModelRequired"
		| "DisconnectedEnvironmentRequired"
		| "HigherDeviceVersionRequired"
		| "LowerDeviceVersionRequired"
		| "PayAsYouGoBillingModelRequired"[];
	readonly message?: string;
}
export interface DataDiskImage {
	readonly lun?: number;
	readonly sourceBlobSasUri?: string;
}
export interface DeviceConfiguration {
	readonly deviceVersion?: string;
	readonly identitySystem?: "ADFS" | "AzureAD";
}
export interface ExtendedProduct {
	readonly galleryPackageBlobSasUri?: string;
	readonly productKind?: string;
	readonly properties?: ExtendedProductProperties;
}
export interface ExtendedProductProperties {
	readonly computeRole?: "IaaS" | "None" | "PaaS";
	readonly dataDiskImages?: DataDiskImage[];
	readonly isSystemExtension?: boolean;
	readonly osDiskImage?: OsDiskImage;
	readonly sourceBlob?: Uri;
	readonly supportMultipleExtensions?: boolean;
	readonly version?: string;
	readonly vmOsType?: "Linux" | "None" | "Windows";
	readonly vmScaleSetEnabled?: boolean;
}
export interface IconUris {
	readonly hero?: string;
	readonly large?: string;
	readonly medium?: string;
	readonly small?: string;
	readonly wide?: string;
}
export interface OsDiskImage {
	readonly operatingSystem?: "Linux" | "None" | "Windows";
	readonly sourceBlobSasUri?: string;
}
export interface Product {
	readonly id?: string;
	readonly name?: string;
	readonly properties?: ProductNestedProperties;
	readonly type?: string;
}
export interface ProductLink {
	readonly displayName?: string;
	readonly uri?: string;
}
export interface ProductList {
	readonly nextLink?: string;
	readonly value?: Product[];
}
export interface ProductNestedProperties {
	readonly billingPartNumber?: string;
	readonly compatibility?: Compatibility;
	readonly description?: string;
	readonly displayName?: string;
	readonly galleryItemIdentity?: string;
	readonly iconUris?: IconUris;
	readonly legalTerms?: string;
	readonly links?: ProductLink[];
	readonly offer?: string;
	readonly offerVersion?: string;
	readonly payloadLength?: number;
	readonly privacyPolicy?: string;
	readonly productKind?: string;
	readonly productProperties?: ProductProperties;
	readonly publisherDisplayName?: string;
	readonly publisherIdentifier?: string;
	readonly sku?: string;
	readonly vmExtensionType?: string;
}
export interface ProductProperties {
	readonly version?: string;
}
export interface RegistrationParameterPropertiesOrRegistrationProperties {
	readonly billingModel?: string;
	readonly cloudId?: string;
	readonly objectId?: string;
	readonly registrationToken: string;
}
export interface TrackedResourceTags {
	readonly [key: string]: string;
}
export interface Uri {
	readonly uri?: string;
}
export default {
	registrations: registrations,
	"registrations/products": registrations_products,
};
