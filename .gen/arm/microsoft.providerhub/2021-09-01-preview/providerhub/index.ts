import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class providerRegistrations
	extends ArmResource<providerRegistrationsComponentInputs>
	implements providerRegistrationsComponentOutputs
{
	constructor(entity: ADKEntity, options: providerRegistrationsComponentInputs) {
		super(entity, options.name, "Microsoft.ProviderHub/providerRegistrations", "2021-09-01-preview", options);
	}
	public readonly apiVersion: "2021-09-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ProviderHub/providerRegistrations";
}
export interface providerRegistrationsComponentOutputs {
	readonly apiVersion: "2021-09-01-preview";
	readonly id: string;
	readonly type: "Microsoft.ProviderHub/providerRegistrations";
}
export interface providerRegistrationsComponentInputs {
	readonly name: string;
	readonly properties?: ProviderRegistrationProperties;
	readonly systemData?: SystemData;
}
export class providerRegistrations_customRollouts
	extends ArmResource<providerRegistrations_customRolloutsComponentInputs>
	implements providerRegistrations_customRolloutsComponentOutputs
{
	constructor(entity: ADKEntity, options: providerRegistrations_customRolloutsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.ProviderHub/providerRegistrations/customRollouts",
			"2021-09-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2021-09-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ProviderHub/providerRegistrations/customRollouts";
}
export interface providerRegistrations_customRolloutsComponentOutputs {
	readonly apiVersion: "2021-09-01-preview";
	readonly id: string;
	readonly type: "Microsoft.ProviderHub/providerRegistrations/customRollouts";
}
export interface providerRegistrations_customRolloutsComponentInputs {
	readonly name: string;
	readonly properties: CustomRolloutProperties;
	readonly systemData?: SystemData;
}
export class providerRegistrations_defaultRollouts
	extends ArmResource<providerRegistrations_defaultRolloutsComponentInputs>
	implements providerRegistrations_defaultRolloutsComponentOutputs
{
	constructor(entity: ADKEntity, options: providerRegistrations_defaultRolloutsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.ProviderHub/providerRegistrations/defaultRollouts",
			"2021-09-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2021-09-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ProviderHub/providerRegistrations/defaultRollouts";
}
export interface providerRegistrations_defaultRolloutsComponentOutputs {
	readonly apiVersion: "2021-09-01-preview";
	readonly id: string;
	readonly type: "Microsoft.ProviderHub/providerRegistrations/defaultRollouts";
}
export interface providerRegistrations_defaultRolloutsComponentInputs {
	readonly name: string;
	readonly properties?: DefaultRolloutProperties;
	readonly systemData?: SystemData;
}
export class providerRegistrations_notificationRegistrations
	extends ArmResource<providerRegistrations_notificationRegistrationsComponentInputs>
	implements providerRegistrations_notificationRegistrationsComponentOutputs
{
	constructor(entity: ADKEntity, options: providerRegistrations_notificationRegistrationsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.ProviderHub/providerRegistrations/notificationRegistrations",
			"2021-09-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2021-09-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ProviderHub/providerRegistrations/notificationRegistrations";
}
export interface providerRegistrations_notificationRegistrationsComponentOutputs {
	readonly apiVersion: "2021-09-01-preview";
	readonly id: string;
	readonly type: "Microsoft.ProviderHub/providerRegistrations/notificationRegistrations";
}
export interface providerRegistrations_notificationRegistrationsComponentInputs {
	readonly name: string;
	readonly properties?: NotificationRegistrationProperties;
	readonly systemData?: SystemData;
}
export class providerRegistrations_operations
	extends ArmResource<providerRegistrations_operationsComponentInputs>
	implements providerRegistrations_operationsComponentOutputs
{
	constructor(entity: ADKEntity, options: providerRegistrations_operationsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.ProviderHub/providerRegistrations/operations",
			"2021-09-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2021-09-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ProviderHub/providerRegistrations/operations";
}
export interface providerRegistrations_operationsComponentOutputs {
	readonly apiVersion: "2021-09-01-preview";
	readonly id: string;
	readonly type: "Microsoft.ProviderHub/providerRegistrations/operations";
}
export interface providerRegistrations_operationsComponentInputs {
	readonly name: string;
	readonly properties?: OperationsPutContentProperties;
}
export class providerRegistrations_resourcetypeRegistrations
	extends ArmResource<providerRegistrations_resourcetypeRegistrationsComponentInputs>
	implements providerRegistrations_resourcetypeRegistrationsComponentOutputs
{
	constructor(entity: ADKEntity, options: providerRegistrations_resourcetypeRegistrationsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.ProviderHub/providerRegistrations/resourcetypeRegistrations",
			"2021-09-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2021-09-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ProviderHub/providerRegistrations/resourcetypeRegistrations";
}
export interface providerRegistrations_resourcetypeRegistrationsComponentOutputs {
	readonly apiVersion: "2021-09-01-preview";
	readonly id: string;
	readonly type: "Microsoft.ProviderHub/providerRegistrations/resourcetypeRegistrations";
}
export interface providerRegistrations_resourcetypeRegistrationsComponentInputs {
	readonly name: string;
	readonly properties?: ResourceTypeRegistrationProperties;
	readonly systemData?: SystemData;
}
export class providerRegistrations_resourcetypeRegistrations_resourcetypeRegistrations_resourcetypeRegistrations_resourcetypeRegistrations_skus
	extends ArmResource<providerRegistrations_resourcetypeRegistrations_resourcetypeRegistrations_resourcetypeRegistrations_resourcetypeRegistrations_skusComponentInputs>
	implements
		providerRegistrations_resourcetypeRegistrations_resourcetypeRegistrations_resourcetypeRegistrations_resourcetypeRegistrations_skusComponentOutputs
{
	constructor(
		entity: ADKEntity,
		options: providerRegistrations_resourcetypeRegistrations_resourcetypeRegistrations_resourcetypeRegistrations_resourcetypeRegistrations_skusComponentInputs,
	) {
		super(
			entity,
			options.name,
			"Microsoft.ProviderHub/providerRegistrations/resourcetypeRegistrations/resourcetypeRegistrations/resourcetypeRegistrations/resourcetypeRegistrations/skus",
			"2021-09-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2021-09-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ProviderHub/providerRegistrations/resourcetypeRegistrations/resourcetypeRegistrations/resourcetypeRegistrations/resourcetypeRegistrations/skus";
}
export interface providerRegistrations_resourcetypeRegistrations_resourcetypeRegistrations_resourcetypeRegistrations_resourcetypeRegistrations_skusComponentOutputs {
	readonly apiVersion: "2021-09-01-preview";
	readonly id: string;
	readonly type: "Microsoft.ProviderHub/providerRegistrations/resourcetypeRegistrations/resourcetypeRegistrations/resourcetypeRegistrations/resourcetypeRegistrations/skus";
}
export interface providerRegistrations_resourcetypeRegistrations_resourcetypeRegistrations_resourcetypeRegistrations_resourcetypeRegistrations_skusComponentInputs {
	readonly name: string;
	readonly properties?: SkuResourceProperties;
	readonly systemData?: SystemData;
}
export class providerRegistrations_resourcetypeRegistrations_resourcetypeRegistrations_resourcetypeRegistrations_skus
	extends ArmResource<providerRegistrations_resourcetypeRegistrations_resourcetypeRegistrations_resourcetypeRegistrations_skusComponentInputs>
	implements
		providerRegistrations_resourcetypeRegistrations_resourcetypeRegistrations_resourcetypeRegistrations_skusComponentOutputs
{
	constructor(
		entity: ADKEntity,
		options: providerRegistrations_resourcetypeRegistrations_resourcetypeRegistrations_resourcetypeRegistrations_skusComponentInputs,
	) {
		super(
			entity,
			options.name,
			"Microsoft.ProviderHub/providerRegistrations/resourcetypeRegistrations/resourcetypeRegistrations/resourcetypeRegistrations/skus",
			"2021-09-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2021-09-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ProviderHub/providerRegistrations/resourcetypeRegistrations/resourcetypeRegistrations/resourcetypeRegistrations/skus";
}
export interface providerRegistrations_resourcetypeRegistrations_resourcetypeRegistrations_resourcetypeRegistrations_skusComponentOutputs {
	readonly apiVersion: "2021-09-01-preview";
	readonly id: string;
	readonly type: "Microsoft.ProviderHub/providerRegistrations/resourcetypeRegistrations/resourcetypeRegistrations/resourcetypeRegistrations/skus";
}
export interface providerRegistrations_resourcetypeRegistrations_resourcetypeRegistrations_resourcetypeRegistrations_skusComponentInputs {
	readonly name: string;
	readonly properties?: SkuResourceProperties;
	readonly systemData?: SystemData;
}
export class providerRegistrations_resourcetypeRegistrations_resourcetypeRegistrations_skus
	extends ArmResource<providerRegistrations_resourcetypeRegistrations_resourcetypeRegistrations_skusComponentInputs>
	implements providerRegistrations_resourcetypeRegistrations_resourcetypeRegistrations_skusComponentOutputs
{
	constructor(
		entity: ADKEntity,
		options: providerRegistrations_resourcetypeRegistrations_resourcetypeRegistrations_skusComponentInputs,
	) {
		super(
			entity,
			options.name,
			"Microsoft.ProviderHub/providerRegistrations/resourcetypeRegistrations/resourcetypeRegistrations/skus",
			"2021-09-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2021-09-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ProviderHub/providerRegistrations/resourcetypeRegistrations/resourcetypeRegistrations/skus";
}
export interface providerRegistrations_resourcetypeRegistrations_resourcetypeRegistrations_skusComponentOutputs {
	readonly apiVersion: "2021-09-01-preview";
	readonly id: string;
	readonly type: "Microsoft.ProviderHub/providerRegistrations/resourcetypeRegistrations/resourcetypeRegistrations/skus";
}
export interface providerRegistrations_resourcetypeRegistrations_resourcetypeRegistrations_skusComponentInputs {
	readonly name: string;
	readonly properties?: SkuResourceProperties;
	readonly systemData?: SystemData;
}
export class providerRegistrations_resourcetypeRegistrations_skus
	extends ArmResource<providerRegistrations_resourcetypeRegistrations_skusComponentInputs>
	implements providerRegistrations_resourcetypeRegistrations_skusComponentOutputs
{
	constructor(entity: ADKEntity, options: providerRegistrations_resourcetypeRegistrations_skusComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.ProviderHub/providerRegistrations/resourcetypeRegistrations/skus",
			"2021-09-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2021-09-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ProviderHub/providerRegistrations/resourcetypeRegistrations/skus";
}
export interface providerRegistrations_resourcetypeRegistrations_skusComponentOutputs {
	readonly apiVersion: "2021-09-01-preview";
	readonly id: string;
	readonly type: "Microsoft.ProviderHub/providerRegistrations/resourcetypeRegistrations/skus";
}
export interface providerRegistrations_resourcetypeRegistrations_skusComponentInputs {
	readonly name: string;
	readonly properties?: SkuResourceProperties;
	readonly systemData?: SystemData;
}
export interface AuthorizationActionMapping {
	readonly desired?: string;
	readonly original?: string;
}
export interface CustomRolloutProperties {
	readonly provisioningState?:
		| "Accepted"
		| "Canceled"
		| "Created"
		| "Creating"
		| "Deleted"
		| "Deleting"
		| "Failed"
		| "MovingResources"
		| "NotSpecified"
		| "RolloutInProgress"
		| "Running"
		| "Succeeded"
		| "TransientFailure";
	readonly specification: CustomRolloutPropertiesSpecification;
	readonly status?: CustomRolloutPropertiesStatus;
}
export interface CustomRolloutPropertiesSpecification {
	readonly canary: CustomRolloutSpecificationCanary;
	readonly providerRegistration?: CustomRolloutSpecificationProviderRegistration;
	readonly resourceTypeRegistrations?: ResourceTypeRegistration[];
}
export interface CustomRolloutPropertiesStatus {
	readonly completedRegions?: string[];
	readonly failedOrSkippedRegions?: CustomRolloutStatusFailedOrSkippedRegions;
}
export interface CustomRolloutSpecificationCanary {
	readonly regions?: string[];
}
export interface CustomRolloutSpecificationProviderRegistration {
	readonly id?: string;
	readonly name?: string;
	readonly properties?: ProviderRegistrationProperties;
	readonly systemData?: SystemData;
	readonly type?: string;
}
export interface CustomRolloutStatusFailedOrSkippedRegions {
	readonly [key: string]: ExtendedErrorInfo;
}
export interface DefaultRolloutProperties {
	readonly provisioningState?:
		| "Accepted"
		| "Canceled"
		| "Created"
		| "Creating"
		| "Deleted"
		| "Deleting"
		| "Failed"
		| "MovingResources"
		| "NotSpecified"
		| "RolloutInProgress"
		| "Running"
		| "Succeeded"
		| "TransientFailure";
	readonly specification?: DefaultRolloutPropertiesSpecification;
	readonly status?: DefaultRolloutPropertiesStatus;
}
export interface DefaultRolloutPropertiesSpecification {
	readonly canary?: DefaultRolloutSpecificationCanary;
	readonly expeditedRollout?: DefaultRolloutSpecificationExpeditedRollout;
	readonly highTraffic?: DefaultRolloutSpecificationHighTraffic;
	readonly lowTraffic?: DefaultRolloutSpecificationLowTraffic;
	readonly mediumTraffic?: DefaultRolloutSpecificationMediumTraffic;
	readonly providerRegistration?: DefaultRolloutSpecificationProviderRegistration;
	readonly resourceTypeRegistrations?: ResourceTypeRegistration[];
	readonly restOfTheWorldGroupOne?: DefaultRolloutSpecificationRestOfTheWorldGroupOne;
	readonly restOfTheWorldGroupTwo?: DefaultRolloutSpecificationRestOfTheWorldGroupTwo;
}
export interface DefaultRolloutPropertiesStatus {
	readonly completedRegions?: string[];
	readonly failedOrSkippedRegions?: RolloutStatusBaseFailedOrSkippedRegions;
	readonly nextTrafficRegion?:
		| "Canary"
		| "HighTraffic"
		| "LowTraffic"
		| "MediumTraffic"
		| "None"
		| "NotSpecified"
		| "RestOfTheWorldGroupOne"
		| "RestOfTheWorldGroupTwo";
	readonly nextTrafficRegionScheduledTime?: string;
	readonly subscriptionReregistrationResult?: "ConditionalUpdate" | "Failed" | "ForcedUpdate" | "NotApplicable";
}
export interface DefaultRolloutSpecificationCanary {
	readonly regions?: string[];
	readonly skipRegions?: string[];
}
export interface DefaultRolloutSpecificationExpeditedRollout {
	readonly enabled?: boolean;
}
export interface DefaultRolloutSpecificationHighTraffic {
	readonly regions?: string[];
	readonly waitDuration?: string;
}
export interface DefaultRolloutSpecificationLowTraffic {
	readonly regions?: string[];
	readonly waitDuration?: string;
}
export interface DefaultRolloutSpecificationMediumTraffic {
	readonly regions?: string[];
	readonly waitDuration?: string;
}
export interface DefaultRolloutSpecificationProviderRegistration {
	readonly id?: string;
	readonly name?: string;
	readonly properties?: ProviderRegistrationProperties;
	readonly systemData?: SystemData;
	readonly type?: string;
}
export interface DefaultRolloutSpecificationRestOfTheWorldGroupOne {
	readonly regions?: string[];
	readonly waitDuration?: string;
}
export interface DefaultRolloutSpecificationRestOfTheWorldGroupTwo {
	readonly regions?: string[];
	readonly waitDuration?: string;
}
export interface ExtendedErrorInfo {
	readonly additionalInfo?: TypedErrorInfo[];
	readonly code?: string;
	readonly details?: ExtendedErrorInfo[];
	readonly message?: string;
	readonly target?: string;
}
export interface ExtendedLocationOptions {
	readonly supportedPolicy?: string;
	readonly type?: string;
}
export interface LightHouseAuthorization {
	readonly principalId: string;
	readonly roleDefinitionId: string;
}
export interface LinkedAccessCheck {
	readonly actionName?: string;
	readonly linkedAction?: string;
	readonly linkedActionVerb?: string;
	readonly linkedProperty?: string;
	readonly linkedType?: string;
}
export interface LocalizedOperationDefinition {
	readonly actionType?: "Internal" | "NotSpecified";
	readonly display: LocalizedOperationDefinitionDisplay;
	readonly isDataAction?: boolean;
	readonly name: string;
	readonly origin?: "NotSpecified" | "System" | "User";
	readonly properties?: any;
}
export interface LocalizedOperationDefinitionDisplay {
	readonly cs?: LocalizedOperationDisplayDefinitionCs;
	readonly de?: LocalizedOperationDisplayDefinitionDe;
	readonly default: LocalizedOperationDisplayDefinitionDefault;
	readonly en?: LocalizedOperationDisplayDefinitionEn;
	readonly es?: LocalizedOperationDisplayDefinitionEs;
	readonly fr?: LocalizedOperationDisplayDefinitionFr;
	readonly hu?: LocalizedOperationDisplayDefinitionHu;
	readonly it?: LocalizedOperationDisplayDefinitionIt;
	readonly ja?: LocalizedOperationDisplayDefinitionJa;
	readonly ko?: LocalizedOperationDisplayDefinitionKo;
	readonly nl?: LocalizedOperationDisplayDefinitionNl;
	readonly pl?: LocalizedOperationDisplayDefinitionPl;
	readonly ptBR?: LocalizedOperationDisplayDefinitionPtBR;
	readonly ptPT?: LocalizedOperationDisplayDefinitionPt;
	readonly ru?: LocalizedOperationDisplayDefinitionRu;
	readonly sv?: LocalizedOperationDisplayDefinitionSv;
	readonly zhHans?: LocalizedOperationDisplayDefinitionZhHans;
	readonly zhHant?: LocalizedOperationDisplayDefinitionZhHant;
}
export interface LocalizedOperationDisplayDefinitionCs {
	readonly description: string;
	readonly operation: string;
	readonly provider: string;
	readonly resource: string;
}
export interface LocalizedOperationDisplayDefinitionDe {
	readonly description: string;
	readonly operation: string;
	readonly provider: string;
	readonly resource: string;
}
export interface LocalizedOperationDisplayDefinitionDefault {
	readonly description: string;
	readonly operation: string;
	readonly provider: string;
	readonly resource: string;
}
export interface LocalizedOperationDisplayDefinitionEn {
	readonly description: string;
	readonly operation: string;
	readonly provider: string;
	readonly resource: string;
}
export interface LocalizedOperationDisplayDefinitionEs {
	readonly description: string;
	readonly operation: string;
	readonly provider: string;
	readonly resource: string;
}
export interface LocalizedOperationDisplayDefinitionFr {
	readonly description: string;
	readonly operation: string;
	readonly provider: string;
	readonly resource: string;
}
export interface LocalizedOperationDisplayDefinitionHu {
	readonly description: string;
	readonly operation: string;
	readonly provider: string;
	readonly resource: string;
}
export interface LocalizedOperationDisplayDefinitionIt {
	readonly description: string;
	readonly operation: string;
	readonly provider: string;
	readonly resource: string;
}
export interface LocalizedOperationDisplayDefinitionJa {
	readonly description: string;
	readonly operation: string;
	readonly provider: string;
	readonly resource: string;
}
export interface LocalizedOperationDisplayDefinitionKo {
	readonly description: string;
	readonly operation: string;
	readonly provider: string;
	readonly resource: string;
}
export interface LocalizedOperationDisplayDefinitionNl {
	readonly description: string;
	readonly operation: string;
	readonly provider: string;
	readonly resource: string;
}
export interface LocalizedOperationDisplayDefinitionPl {
	readonly description: string;
	readonly operation: string;
	readonly provider: string;
	readonly resource: string;
}
export interface LocalizedOperationDisplayDefinitionPt {
	readonly description: string;
	readonly operation: string;
	readonly provider: string;
	readonly resource: string;
}
export interface LocalizedOperationDisplayDefinitionPtBR {
	readonly description: string;
	readonly operation: string;
	readonly provider: string;
	readonly resource: string;
}
export interface LocalizedOperationDisplayDefinitionRu {
	readonly description: string;
	readonly operation: string;
	readonly provider: string;
	readonly resource: string;
}
export interface LocalizedOperationDisplayDefinitionSv {
	readonly description: string;
	readonly operation: string;
	readonly provider: string;
	readonly resource: string;
}
export interface LocalizedOperationDisplayDefinitionZhHans {
	readonly description: string;
	readonly operation: string;
	readonly provider: string;
	readonly resource: string;
}
export interface LocalizedOperationDisplayDefinitionZhHant {
	readonly description: string;
	readonly operation: string;
	readonly provider: string;
	readonly resource: string;
}
export interface LoggingRule {
	readonly action: string;
	readonly detailLevel: "Body" | "None";
	readonly direction: "None" | "Request" | "Response";
	readonly hiddenPropertyPaths?: LoggingRuleHiddenPropertyPaths;
}
export interface LoggingRuleHiddenPropertyPaths {
	readonly hiddenPathsOnRequest?: string[];
	readonly hiddenPathsOnResponse?: string[];
}
export interface NotificationEndpoint {
	readonly locations?: string[];
	readonly notificationDestination?: string;
}
export interface NotificationRegistrationProperties {
	readonly includedEvents?: string[];
	readonly messageScope?: "NotSpecified" | "RegisteredSubscriptions";
	readonly notificationEndpoints?: NotificationEndpoint[];
	readonly notificationMode?: "EventHub" | "NotSpecified" | "WebHook";
	readonly provisioningState?:
		| "Accepted"
		| "Canceled"
		| "Created"
		| "Creating"
		| "Deleted"
		| "Deleting"
		| "Failed"
		| "MovingResources"
		| "NotSpecified"
		| "RolloutInProgress"
		| "Running"
		| "Succeeded"
		| "TransientFailure";
}
export interface OpenApiConfiguration {
	readonly validation?: OpenApiValidation;
}
export interface OpenApiValidation {
	readonly allowNoncompliantCollectionResponse?: boolean;
}
export interface OperationsPutContentProperties {
	readonly contents?: LocalizedOperationDefinition[];
}
export interface ProviderHubMetadataProviderAuthentication {
	readonly allowedAudiences: string[];
}
export interface ProviderHubMetadataThirdPartyProviderAuthorization {
	readonly authorizations?: LightHouseAuthorization[];
	readonly managedByTenantId?: string;
}
export interface ProviderRegistrationProperties {
	readonly capabilities?: ResourceProviderCapabilities[];
	readonly featuresRule?: ResourceProviderManifestPropertiesFeaturesRule;
	readonly management?: ResourceProviderManifestPropertiesManagement;
	readonly metadata?: any;
	readonly namespace?: string;
	readonly providerAuthentication?: ResourceProviderManifestPropertiesProviderAuthentication;
	readonly providerAuthorizations?: ResourceProviderAuthorization[];
	readonly providerHubMetadata?: ProviderRegistrationPropertiesProviderHubMetadata;
	readonly providerType?:
		| "AuthorizationFree"
		| "External"
		| "Hidden"
		| "Internal"
		| "LegacyRegistrationRequired"
		| "NotSpecified"
		| "RegistrationFree"
		| "TenantOnly";
	readonly providerVersion?: string;
	readonly provisioningState?:
		| "Accepted"
		| "Canceled"
		| "Created"
		| "Creating"
		| "Deleted"
		| "Deleting"
		| "Failed"
		| "MovingResources"
		| "NotSpecified"
		| "RolloutInProgress"
		| "Running"
		| "Succeeded"
		| "TransientFailure";
	readonly requestHeaderOptions?: ResourceProviderManifestPropertiesRequestHeaderOptions;
	readonly requiredFeatures?: string[];
	readonly subscriptionLifecycleNotificationSpecifications?: ProviderRegistrationPropertiesSubscriptionLifecycleNotificationSpecifications;
	readonly templateDeploymentOptions?: ResourceProviderManifestPropertiesTemplateDeploymentOptions;
}
export interface ProviderRegistrationPropertiesProviderHubMetadata {
	readonly providerAuthentication?: ProviderHubMetadataProviderAuthentication;
	readonly providerAuthorizations?: ResourceProviderAuthorization[];
	readonly thirdPartyProviderAuthorization?: ProviderHubMetadataThirdPartyProviderAuthorization;
}
export interface ProviderRegistrationPropertiesSubscriptionLifecycleNotificationSpecifications {
	readonly softDeleteTTL?: string;
	readonly subscriptionStateOverrideActions?: SubscriptionStateOverrideAction[];
}
export interface ResourceConcurrencyControlOption {
	readonly policy?: "NotSpecified" | "SynchronizeBeginExtension";
}
export interface ResourceProviderAuthorization {
	readonly applicationId?: string;
	readonly managedByRoleDefinitionId?: string;
	readonly roleDefinitionId?: string;
}
export interface ResourceProviderCapabilities {
	readonly effect: "Allow" | "Disallow" | "NotSpecified";
	readonly quotaId: string;
	readonly requiredFeatures?: string[];
}
export interface ResourceProviderManifestPropertiesFeaturesRule {
	readonly requiredFeaturesPolicy: "All" | "any";
}
export interface ResourceProviderManifestPropertiesManagement {
	readonly incidentContactEmail?: string;
	readonly incidentRoutingService?: string;
	readonly incidentRoutingTeam?: string;
	readonly manifestOwners?: string[];
	readonly resourceAccessPolicy?: "AcisActionAllowed" | "AcisReadAllowed" | "NotSpecified";
	readonly resourceAccessRoles?: any[];
	readonly schemaOwners?: string[];
	readonly serviceTreeInfos?: ServiceTreeInfo[];
}
export interface ResourceProviderManifestPropertiesProviderAuthentication {
	readonly allowedAudiences: string[];
}
export interface ResourceProviderManifestPropertiesRequestHeaderOptions {
	readonly optInHeaders?:
		| "ClientGroupMembership"
		| "NotSpecified"
		| "SignedAuxiliaryTokens"
		| "SignedUserToken"
		| "UnboundedClientGroupMembership";
}
export interface ResourceProviderManifestPropertiesTemplateDeploymentOptions {
	readonly preflightOptions?: "ContinueDeploymentOnFailure" | "DefaultValidationOnly" | "None"[];
	readonly preflightSupported?: boolean;
}
export interface ResourceTypeEndpoint {
	readonly apiVersions?: string[];
	readonly enabled?: boolean;
	readonly endpointType?: "Canary" | "NotSpecified" | "Production" | "TestInProduction";
	readonly extensions?: ResourceTypeExtension[];
	readonly featuresRule?: ResourceTypeEndpointFeaturesRule;
	readonly locations?: string[];
	readonly requiredFeatures?: string[];
	readonly timeout?: string;
}
export interface ResourceTypeEndpointFeaturesRule {
	readonly requiredFeaturesPolicy: "All" | "any";
}
export interface ResourceTypeExtension {
	readonly endpointUri?: string;
	readonly extensionCategories?:
		| "NotSpecified"
		| "ResourceCreationBegin"
		| "ResourceCreationCompleted"
		| "ResourceCreationValidate"
		| "ResourceDeletionBegin"
		| "ResourceDeletionCompleted"
		| "ResourceDeletionValidate"
		| "ResourceMoveBegin"
		| "ResourceMoveCompleted"
		| "ResourcePatchBegin"
		| "ResourcePatchCompleted"
		| "ResourcePatchValidate"
		| "ResourcePostAction"
		| "ResourceReadBegin"
		| "ResourceReadValidate"
		| "SubscriptionLifecycleNotification"[];
	readonly timeout?: string;
}
export interface ResourceTypeExtensionOptionsResourceCreationBegin {
	readonly request?: "DoNotMergeExistingReadOnlyAndSecretProperties" | "IncludeInternalMetadata" | "NotSpecified"[];
	readonly response?: "DoNotMergeExistingReadOnlyAndSecretProperties" | "IncludeInternalMetadata" | "NotSpecified"[];
}
export interface ResourceTypeRegistration {
	readonly id?: string;
	readonly name?: string;
	readonly properties?: ResourceTypeRegistrationProperties;
	readonly systemData?: SystemData;
	readonly type?: string;
}
export interface ResourceTypeRegistrationProperties {
	readonly allowedUnauthorizedActions?: string[];
	readonly authorizationActionMappings?: AuthorizationActionMapping[];
	readonly checkNameAvailabilitySpecifications?: ResourceTypeRegistrationPropertiesCheckNameAvailabilitySpecifications;
	readonly defaultApiVersion?: string;
	readonly disallowedActionVerbs?: string[];
	readonly enableAsyncOperation?: boolean;
	readonly enableThirdPartyS2S?: boolean;
	readonly endpoints?: ResourceTypeEndpoint[];
	readonly extendedLocations?: ExtendedLocationOptions[];
	readonly extensionOptions?: ResourceTypeRegistrationPropertiesExtensionOptions;
	readonly featuresRule?: ResourceTypeRegistrationPropertiesFeaturesRule;
	readonly identityManagement?: ResourceTypeRegistrationPropertiesIdentityManagement;
	readonly isPureProxy?: boolean;
	readonly linkedAccessChecks?: LinkedAccessCheck[];
	readonly loggingRules?: LoggingRule[];
	readonly management?: ResourceTypeRegistrationPropertiesManagement;
	readonly marketplaceType?: "AddOn" | "Bypass" | "NotSpecified" | "Store";
	readonly openApiConfiguration?: OpenApiConfiguration;
	readonly provisioningState?:
		| "Accepted"
		| "Canceled"
		| "Created"
		| "Creating"
		| "Deleted"
		| "Deleting"
		| "Failed"
		| "MovingResources"
		| "NotSpecified"
		| "RolloutInProgress"
		| "Running"
		| "Succeeded"
		| "TransientFailure";
	readonly regionality?: "Global" | "NotSpecified" | "Regional";
	readonly requestHeaderOptions?: ResourceTypeRegistrationPropertiesRequestHeaderOptions;
	readonly requiredFeatures?: string[];
	readonly resourceConcurrencyControlOptions?: ResourceTypeRegistrationPropertiesResourceConcurrencyControlOptions;
	readonly resourceDeletionPolicy?: "CascadeDeleteAll" | "CascadeDeleteProxyOnlyChildren" | "NotSpecified";
	readonly resourceGraphConfiguration?: ResourceTypeRegistrationPropertiesResourceGraphConfiguration;
	readonly resourceMovePolicy?: ResourceTypeRegistrationPropertiesResourceMovePolicy;
	readonly routingType?:
		| "CascadeExtension"
		| "Default"
		| "Extension"
		| "Failover"
		| "Fanout"
		| "HostBased"
		| "LocationBased"
		| "ProxyOnly"
		| "Tenant";
	readonly serviceTreeInfos?: ServiceTreeInfo[];
	readonly subscriptionLifecycleNotificationSpecifications?: ResourceTypeRegistrationPropertiesSubscriptionLifecycleNotificationSpecifications;
	readonly subscriptionStateRules?: SubscriptionStateRule[];
	readonly swaggerSpecifications?: SwaggerSpecification[];
	readonly templateDeploymentOptions?: ResourceTypeRegistrationPropertiesTemplateDeploymentOptions;
	readonly throttlingRules?: ThrottlingRule[];
}
export interface ResourceTypeRegistrationPropertiesCheckNameAvailabilitySpecifications {
	readonly enableDefaultValidation?: boolean;
	readonly resourceTypesWithCustomValidation?: string[];
}
export interface ResourceTypeRegistrationPropertiesExtensionOptions {
	readonly resourceCreationBegin?: ResourceTypeExtensionOptionsResourceCreationBegin;
}
export interface ResourceTypeRegistrationPropertiesFeaturesRule {
	readonly requiredFeaturesPolicy: "All" | "any";
}
export interface ResourceTypeRegistrationPropertiesIdentityManagement {
	readonly applicationId?: string;
	readonly type?: "Actor" | "DelegatedResourceIdentity" | "NotSpecified" | "SystemAssigned" | "UserAssigned";
}
export interface ResourceTypeRegistrationPropertiesManagement {
	readonly incidentContactEmail?: string;
	readonly incidentRoutingService?: string;
	readonly incidentRoutingTeam?: string;
	readonly manifestOwners?: string[];
	readonly resourceAccessPolicy?: "AcisActionAllowed" | "AcisReadAllowed" | "NotSpecified";
	readonly resourceAccessRoles?: any[];
	readonly schemaOwners?: string[];
	readonly serviceTreeInfos?: ServiceTreeInfo[];
}
export interface ResourceTypeRegistrationPropertiesRequestHeaderOptions {
	readonly optInHeaders?:
		| "ClientGroupMembership"
		| "NotSpecified"
		| "SignedAuxiliaryTokens"
		| "SignedUserToken"
		| "UnboundedClientGroupMembership";
}
export interface ResourceTypeRegistrationPropertiesResourceConcurrencyControlOptions {
	readonly [key: string]: ResourceConcurrencyControlOption;
}
export interface ResourceTypeRegistrationPropertiesResourceGraphConfiguration {
	readonly apiVersion?: string;
	readonly enabled?: boolean;
}
export interface ResourceTypeRegistrationPropertiesResourceMovePolicy {
	readonly crossResourceGroupMoveEnabled?: boolean;
	readonly crossSubscriptionMoveEnabled?: boolean;
	readonly validationRequired?: boolean;
}
export interface ResourceTypeRegistrationPropertiesSubscriptionLifecycleNotificationSpecifications {
	readonly softDeleteTTL?: string;
	readonly subscriptionStateOverrideActions?: SubscriptionStateOverrideAction[];
}
export interface ResourceTypeRegistrationPropertiesTemplateDeploymentOptions {
	readonly preflightOptions?: "ContinueDeploymentOnFailure" | "DefaultValidationOnly" | "None"[];
	readonly preflightSupported?: boolean;
}
export interface RolloutStatusBaseFailedOrSkippedRegions {
	readonly [key: string]: ExtendedErrorInfo;
}
export interface ServiceTreeInfo {
	readonly componentId?: string;
	readonly readiness?:
		| "ClosingDown"
		| "Deprecated"
		| "GA"
		| "InDevelopment"
		| "InternalOnly"
		| "PrivatePreview"
		| "PublicPreview"
		| "RemovedFromARM"
		| "Retired";
	readonly serviceId?: string;
}
export interface SkuCapability {
	readonly name: string;
	readonly value: string;
}
export interface SkuCost {
	readonly extendedUnit?: string;
	readonly meterId: string;
	readonly quantity?: number;
}
export interface SkuLocationInfo {
	readonly extendedLocations?: string[];
	readonly location: string;
	readonly type?: "ArcZone" | "EdgeZone" | "NotSpecified";
	readonly zoneDetails?: SkuZoneDetail[];
	readonly zones?: string[];
}
export interface SkuResourceProperties {
	readonly provisioningState?:
		| "Accepted"
		| "Canceled"
		| "Created"
		| "Creating"
		| "Deleted"
		| "Deleting"
		| "Failed"
		| "MovingResources"
		| "NotSpecified"
		| "RolloutInProgress"
		| "Running"
		| "Succeeded"
		| "TransientFailure";
	readonly skuSettings: SkuSetting[];
}
export interface SkuSetting {
	readonly capabilities?: SkuCapability[];
	readonly capacity?: SkuSettingCapacity;
	readonly costs?: SkuCost[];
	readonly family?: string;
	readonly kind?: string;
	readonly locationInfo?: SkuLocationInfo[];
	readonly locations?: string[];
	readonly name: string;
	readonly requiredFeatures?: string[];
	readonly requiredQuotaIds?: string[];
	readonly size?: string;
	readonly tier?: string;
}
export interface SkuSettingCapacity {
	readonly default?: number;
	readonly maximum?: number;
	readonly minimum: number;
	readonly scaleType?: "Automatic" | "Manual" | "None";
}
export interface SkuZoneDetail {
	readonly capabilities?: SkuCapability[];
	readonly name?: string[];
}
export interface SubscriptionStateOverrideAction {
	readonly action:
		| "BillingCancellation"
		| "DeleteAllResources"
		| "NoOp"
		| "NotDefined"
		| "SoftDeleteAllResources"
		| "UndoSoftDelete";
	readonly state:
		| "Deleted"
		| "Registered"
		| "Suspended"
		| "SuspendedToDeleted"
		| "SuspendedToRegistered"
		| "SuspendedToUnregistered"
		| "SuspendedToWarned"
		| "Unregistered"
		| "Warned"
		| "WarnedToDeleted"
		| "WarnedToRegistered"
		| "WarnedToSuspended"
		| "WarnedToUnregistered";
}
export interface SubscriptionStateRule {
	readonly allowedActions?: string[];
	readonly state?: "Deleted" | "Disabled" | "Enabled" | "NotDefined" | "PastDue" | "Warned";
}
export interface SwaggerSpecification {
	readonly apiVersions?: string[];
	readonly swaggerSpecFolderUri?: string;
}
export interface SystemData {
	readonly createdAt?: string;
	readonly createdBy?: string;
	readonly createdByType?: "Application" | "Key" | "ManagedIdentity" | "User";
	readonly lastModifiedAt?: string;
	readonly lastModifiedBy?: string;
	readonly lastModifiedByType?: "Application" | "Key" | "ManagedIdentity" | "User";
}
export interface ThrottlingMetric {
	readonly interval?: string;
	readonly limit: number;
	readonly type: "NotSpecified" | "NumberOfRequests" | "NumberOfResources";
}
export interface ThrottlingRule {
	readonly action: string;
	readonly metrics: ThrottlingMetric[];
	readonly requiredFeatures?: string[];
}
export interface TypedErrorInfo {
	readonly info?: any;
	readonly type: string;
}
export default {
	providerRegistrations: providerRegistrations,
	"providerRegistrations/customRollouts": providerRegistrations_customRollouts,
	"providerRegistrations/defaultRollouts": providerRegistrations_defaultRollouts,
	"providerRegistrations/notificationRegistrations": providerRegistrations_notificationRegistrations,
	"providerRegistrations/operations": providerRegistrations_operations,
	"providerRegistrations/resourcetypeRegistrations": providerRegistrations_resourcetypeRegistrations,
	"providerRegistrations/resourcetypeRegistrations/resourcetypeRegistrations/resourcetypeRegistrations/resourcetypeRegistrations/skus":
		providerRegistrations_resourcetypeRegistrations_resourcetypeRegistrations_resourcetypeRegistrations_resourcetypeRegistrations_skus,
	"providerRegistrations/resourcetypeRegistrations/resourcetypeRegistrations/resourcetypeRegistrations/skus":
		providerRegistrations_resourcetypeRegistrations_resourcetypeRegistrations_resourcetypeRegistrations_skus,
	"providerRegistrations/resourcetypeRegistrations/resourcetypeRegistrations/skus":
		providerRegistrations_resourcetypeRegistrations_resourcetypeRegistrations_skus,
	"providerRegistrations/resourcetypeRegistrations/skus": providerRegistrations_resourcetypeRegistrations_skus,
};
