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
	readonly properties?: ProviderRegistrationProperties | undefined;
	readonly systemData?: SystemData | undefined;
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
	readonly systemData?: SystemData | undefined;
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
	readonly properties?: DefaultRolloutProperties | undefined;
	readonly systemData?: SystemData | undefined;
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
	readonly properties?: NotificationRegistrationProperties | undefined;
	readonly systemData?: SystemData | undefined;
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
	readonly properties?: OperationsPutContentProperties | undefined;
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
	readonly properties?: ResourceTypeRegistrationProperties | undefined;
	readonly systemData?: SystemData | undefined;
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
	readonly properties?: SkuResourceProperties | undefined;
	readonly systemData?: SystemData | undefined;
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
	readonly properties?: SkuResourceProperties | undefined;
	readonly systemData?: SystemData | undefined;
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
	readonly properties?: SkuResourceProperties | undefined;
	readonly systemData?: SystemData | undefined;
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
	readonly properties?: SkuResourceProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export interface AuthorizationActionMapping {
	readonly desired?: string | undefined;
	readonly original?: string | undefined;
}
export interface CustomRolloutProperties {
	readonly provisioningState?:
		| (
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
				| "TransientFailure"
		  )
		| undefined;
	readonly specification: CustomRolloutPropertiesSpecification;
	readonly status?: CustomRolloutPropertiesStatus | undefined;
}
export interface CustomRolloutPropertiesSpecification {
	readonly canary: CustomRolloutSpecificationCanary;
	readonly providerRegistration?: CustomRolloutSpecificationProviderRegistration | undefined;
	readonly resourceTypeRegistrations?: ResourceTypeRegistration[] | undefined;
}
export interface CustomRolloutPropertiesStatus {
	readonly completedRegions?: string[] | undefined;
	readonly failedOrSkippedRegions?: CustomRolloutStatusFailedOrSkippedRegions | undefined;
}
export interface CustomRolloutSpecificationCanary {
	readonly regions?: string[] | undefined;
}
export interface CustomRolloutSpecificationProviderRegistration {
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: ProviderRegistrationProperties | undefined;
	readonly systemData?: SystemData | undefined;
	readonly type?: string | undefined;
}
export interface CustomRolloutStatusFailedOrSkippedRegions {
	readonly "[ key: string ]"?: ExtendedErrorInfo | undefined;
}
export interface DefaultRolloutProperties {
	readonly provisioningState?:
		| (
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
				| "TransientFailure"
		  )
		| undefined;
	readonly specification?: DefaultRolloutPropertiesSpecification | undefined;
	readonly status?: DefaultRolloutPropertiesStatus | undefined;
}
export interface DefaultRolloutPropertiesSpecification {
	readonly canary?: DefaultRolloutSpecificationCanary | undefined;
	readonly expeditedRollout?: DefaultRolloutSpecificationExpeditedRollout | undefined;
	readonly highTraffic?: DefaultRolloutSpecificationHighTraffic | undefined;
	readonly lowTraffic?: DefaultRolloutSpecificationLowTraffic | undefined;
	readonly mediumTraffic?: DefaultRolloutSpecificationMediumTraffic | undefined;
	readonly providerRegistration?: DefaultRolloutSpecificationProviderRegistration | undefined;
	readonly resourceTypeRegistrations?: ResourceTypeRegistration[] | undefined;
	readonly restOfTheWorldGroupOne?: DefaultRolloutSpecificationRestOfTheWorldGroupOne | undefined;
	readonly restOfTheWorldGroupTwo?: DefaultRolloutSpecificationRestOfTheWorldGroupTwo | undefined;
}
export interface DefaultRolloutPropertiesStatus {
	readonly completedRegions?: string[] | undefined;
	readonly failedOrSkippedRegions?: RolloutStatusBaseFailedOrSkippedRegions | undefined;
	readonly nextTrafficRegion?:
		| (
				| "Canary"
				| "HighTraffic"
				| "LowTraffic"
				| "MediumTraffic"
				| "None"
				| "NotSpecified"
				| "RestOfTheWorldGroupOne"
				| "RestOfTheWorldGroupTwo"
		  )
		| undefined;
	readonly nextTrafficRegionScheduledTime?: string | undefined;
	readonly subscriptionReregistrationResult?:
		| ("ConditionalUpdate" | "Failed" | "ForcedUpdate" | "NotApplicable")
		| undefined;
}
export interface DefaultRolloutSpecificationCanary {
	readonly regions?: string[] | undefined;
	readonly skipRegions?: string[] | undefined;
}
export interface DefaultRolloutSpecificationExpeditedRollout {
	readonly enabled?: boolean | undefined;
}
export interface DefaultRolloutSpecificationHighTraffic {
	readonly regions?: string[] | undefined;
	readonly waitDuration?: string | undefined;
}
export interface DefaultRolloutSpecificationLowTraffic {
	readonly regions?: string[] | undefined;
	readonly waitDuration?: string | undefined;
}
export interface DefaultRolloutSpecificationMediumTraffic {
	readonly regions?: string[] | undefined;
	readonly waitDuration?: string | undefined;
}
export interface DefaultRolloutSpecificationProviderRegistration {
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: ProviderRegistrationProperties | undefined;
	readonly systemData?: SystemData | undefined;
	readonly type?: string | undefined;
}
export interface DefaultRolloutSpecificationRestOfTheWorldGroupOne {
	readonly regions?: string[] | undefined;
	readonly waitDuration?: string | undefined;
}
export interface DefaultRolloutSpecificationRestOfTheWorldGroupTwo {
	readonly regions?: string[] | undefined;
	readonly waitDuration?: string | undefined;
}
export interface ExtendedErrorInfo {
	readonly additionalInfo?: TypedErrorInfo[] | undefined;
	readonly code?: string | undefined;
	readonly details?: ExtendedErrorInfo[] | undefined;
	readonly message?: string | undefined;
	readonly target?: string | undefined;
}
export interface ExtendedLocationOptions {
	readonly supportedPolicy?: string | undefined;
	readonly type?: string | undefined;
}
export interface LightHouseAuthorization {
	readonly principalId: string;
	readonly roleDefinitionId: string;
}
export interface LinkedAccessCheck {
	readonly actionName?: string | undefined;
	readonly linkedAction?: string | undefined;
	readonly linkedActionVerb?: string | undefined;
	readonly linkedProperty?: string | undefined;
	readonly linkedType?: string | undefined;
}
export interface LocalizedOperationDefinition {
	readonly actionType?: ("Internal" | "NotSpecified") | undefined;
	readonly display: LocalizedOperationDefinitionDisplay;
	readonly isDataAction?: boolean | undefined;
	readonly name: string;
	readonly origin?: ("NotSpecified" | "System" | "User") | undefined;
	readonly properties?: any | undefined;
}
export interface LocalizedOperationDefinitionDisplay {
	readonly cs?: LocalizedOperationDisplayDefinitionCs | undefined;
	readonly de?: LocalizedOperationDisplayDefinitionDe | undefined;
	readonly default: LocalizedOperationDisplayDefinitionDefault;
	readonly en?: LocalizedOperationDisplayDefinitionEn | undefined;
	readonly es?: LocalizedOperationDisplayDefinitionEs | undefined;
	readonly fr?: LocalizedOperationDisplayDefinitionFr | undefined;
	readonly hu?: LocalizedOperationDisplayDefinitionHu | undefined;
	readonly it?: LocalizedOperationDisplayDefinitionIt | undefined;
	readonly ja?: LocalizedOperationDisplayDefinitionJa | undefined;
	readonly ko?: LocalizedOperationDisplayDefinitionKo | undefined;
	readonly nl?: LocalizedOperationDisplayDefinitionNl | undefined;
	readonly pl?: LocalizedOperationDisplayDefinitionPl | undefined;
	readonly ptBR?: LocalizedOperationDisplayDefinitionPtBR | undefined;
	readonly ptPT?: LocalizedOperationDisplayDefinitionPt | undefined;
	readonly ru?: LocalizedOperationDisplayDefinitionRu | undefined;
	readonly sv?: LocalizedOperationDisplayDefinitionSv | undefined;
	readonly zhHans?: LocalizedOperationDisplayDefinitionZhHans | undefined;
	readonly zhHant?: LocalizedOperationDisplayDefinitionZhHant | undefined;
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
	readonly hiddenPropertyPaths?: LoggingRuleHiddenPropertyPaths | undefined;
}
export interface LoggingRuleHiddenPropertyPaths {
	readonly hiddenPathsOnRequest?: string[] | undefined;
	readonly hiddenPathsOnResponse?: string[] | undefined;
}
export interface NotificationEndpoint {
	readonly locations?: string[] | undefined;
	readonly notificationDestination?: string | undefined;
}
export interface NotificationRegistrationProperties {
	readonly includedEvents?: string[] | undefined;
	readonly messageScope?: ("NotSpecified" | "RegisteredSubscriptions") | undefined;
	readonly notificationEndpoints?: NotificationEndpoint[] | undefined;
	readonly notificationMode?: ("EventHub" | "NotSpecified" | "WebHook") | undefined;
	readonly provisioningState?:
		| (
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
				| "TransientFailure"
		  )
		| undefined;
}
export interface OpenApiConfiguration {
	readonly validation?: OpenApiValidation | undefined;
}
export interface OpenApiValidation {
	readonly allowNoncompliantCollectionResponse?: boolean | undefined;
}
export interface OperationsPutContentProperties {
	readonly contents?: LocalizedOperationDefinition[] | undefined;
}
export interface ProviderHubMetadataProviderAuthentication {
	readonly allowedAudiences: string[];
}
export interface ProviderHubMetadataThirdPartyProviderAuthorization {
	readonly authorizations?: LightHouseAuthorization[] | undefined;
	readonly managedByTenantId?: string | undefined;
}
export interface ProviderRegistrationProperties {
	readonly capabilities?: ResourceProviderCapabilities[] | undefined;
	readonly featuresRule?: ResourceProviderManifestPropertiesFeaturesRule | undefined;
	readonly management?: ResourceProviderManifestPropertiesManagement | undefined;
	readonly metadata?: any | undefined;
	readonly namespace?: string | undefined;
	readonly providerAuthentication?: ResourceProviderManifestPropertiesProviderAuthentication | undefined;
	readonly providerAuthorizations?: ResourceProviderAuthorization[] | undefined;
	readonly providerHubMetadata?: ProviderRegistrationPropertiesProviderHubMetadata | undefined;
	readonly providerType?:
		| (
				| "AuthorizationFree"
				| "External"
				| "Hidden"
				| "Internal"
				| "LegacyRegistrationRequired"
				| "NotSpecified"
				| "RegistrationFree"
				| "TenantOnly"
		  )
		| undefined;
	readonly providerVersion?: string | undefined;
	readonly provisioningState?:
		| (
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
				| "TransientFailure"
		  )
		| undefined;
	readonly requestHeaderOptions?: ResourceProviderManifestPropertiesRequestHeaderOptions | undefined;
	readonly requiredFeatures?: string[] | undefined;
	readonly subscriptionLifecycleNotificationSpecifications?:
		| ProviderRegistrationPropertiesSubscriptionLifecycleNotificationSpecifications
		| undefined;
	readonly templateDeploymentOptions?: ResourceProviderManifestPropertiesTemplateDeploymentOptions | undefined;
}
export interface ProviderRegistrationPropertiesProviderHubMetadata {
	readonly providerAuthentication?: ProviderHubMetadataProviderAuthentication | undefined;
	readonly providerAuthorizations?: ResourceProviderAuthorization[] | undefined;
	readonly thirdPartyProviderAuthorization?: ProviderHubMetadataThirdPartyProviderAuthorization | undefined;
}
export interface ProviderRegistrationPropertiesSubscriptionLifecycleNotificationSpecifications {
	readonly softDeleteTTL?: string | undefined;
	readonly subscriptionStateOverrideActions?: SubscriptionStateOverrideAction[] | undefined;
}
export interface ResourceConcurrencyControlOption {
	readonly policy?: ("NotSpecified" | "SynchronizeBeginExtension") | undefined;
}
export interface ResourceProviderAuthorization {
	readonly applicationId?: string | undefined;
	readonly managedByRoleDefinitionId?: string | undefined;
	readonly roleDefinitionId?: string | undefined;
}
export interface ResourceProviderCapabilities {
	readonly effect: "Allow" | "Disallow" | "NotSpecified";
	readonly quotaId: string;
	readonly requiredFeatures?: string[] | undefined;
}
export interface ResourceProviderManifestPropertiesFeaturesRule {
	readonly requiredFeaturesPolicy: "All" | "any";
}
export interface ResourceProviderManifestPropertiesManagement {
	readonly incidentContactEmail?: string | undefined;
	readonly incidentRoutingService?: string | undefined;
	readonly incidentRoutingTeam?: string | undefined;
	readonly manifestOwners?: string[] | undefined;
	readonly resourceAccessPolicy?: ("AcisActionAllowed" | "AcisReadAllowed" | "NotSpecified") | undefined;
	readonly resourceAccessRoles?: any[] | undefined;
	readonly schemaOwners?: string[] | undefined;
	readonly serviceTreeInfos?: ServiceTreeInfo[] | undefined;
}
export interface ResourceProviderManifestPropertiesProviderAuthentication {
	readonly allowedAudiences: string[];
}
export interface ResourceProviderManifestPropertiesRequestHeaderOptions {
	readonly optInHeaders?:
		| (
				| "ClientGroupMembership"
				| "NotSpecified"
				| "SignedAuxiliaryTokens"
				| "SignedUserToken"
				| "UnboundedClientGroupMembership"
		  )
		| undefined;
}
export interface ResourceProviderManifestPropertiesTemplateDeploymentOptions {
	readonly preflightOptions?: ("ContinueDeploymentOnFailure" | "DefaultValidationOnly" | "None"[]) | undefined;
	readonly preflightSupported?: boolean | undefined;
}
export interface ResourceTypeEndpoint {
	readonly apiVersions?: string[] | undefined;
	readonly enabled?: boolean | undefined;
	readonly endpointType?: ("Canary" | "NotSpecified" | "Production" | "TestInProduction") | undefined;
	readonly extensions?: ResourceTypeExtension[] | undefined;
	readonly featuresRule?: ResourceTypeEndpointFeaturesRule | undefined;
	readonly locations?: string[] | undefined;
	readonly requiredFeatures?: string[] | undefined;
	readonly timeout?: string | undefined;
}
export interface ResourceTypeEndpointFeaturesRule {
	readonly requiredFeaturesPolicy: "All" | "any";
}
export interface ResourceTypeExtension {
	readonly endpointUri?: string | undefined;
	readonly extensionCategories?:
		| (
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
				| "SubscriptionLifecycleNotification"[]
		  )
		| undefined;
	readonly timeout?: string | undefined;
}
export interface ResourceTypeExtensionOptionsResourceCreationBegin {
	readonly request?:
		| ("DoNotMergeExistingReadOnlyAndSecretProperties" | "IncludeInternalMetadata" | "NotSpecified"[])
		| undefined;
	readonly response?:
		| ("DoNotMergeExistingReadOnlyAndSecretProperties" | "IncludeInternalMetadata" | "NotSpecified"[])
		| undefined;
}
export interface ResourceTypeRegistration {
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: ResourceTypeRegistrationProperties | undefined;
	readonly systemData?: SystemData | undefined;
	readonly type?: string | undefined;
}
export interface ResourceTypeRegistrationProperties {
	readonly allowedUnauthorizedActions?: string[] | undefined;
	readonly authorizationActionMappings?: AuthorizationActionMapping[] | undefined;
	readonly checkNameAvailabilitySpecifications?:
		| ResourceTypeRegistrationPropertiesCheckNameAvailabilitySpecifications
		| undefined;
	readonly defaultApiVersion?: string | undefined;
	readonly disallowedActionVerbs?: string[] | undefined;
	readonly enableAsyncOperation?: boolean | undefined;
	readonly enableThirdPartyS2S?: boolean | undefined;
	readonly endpoints?: ResourceTypeEndpoint[] | undefined;
	readonly extendedLocations?: ExtendedLocationOptions[] | undefined;
	readonly extensionOptions?: ResourceTypeRegistrationPropertiesExtensionOptions | undefined;
	readonly featuresRule?: ResourceTypeRegistrationPropertiesFeaturesRule | undefined;
	readonly identityManagement?: ResourceTypeRegistrationPropertiesIdentityManagement | undefined;
	readonly isPureProxy?: boolean | undefined;
	readonly linkedAccessChecks?: LinkedAccessCheck[] | undefined;
	readonly loggingRules?: LoggingRule[] | undefined;
	readonly management?: ResourceTypeRegistrationPropertiesManagement | undefined;
	readonly marketplaceType?: ("AddOn" | "Bypass" | "NotSpecified" | "Store") | undefined;
	readonly openApiConfiguration?: OpenApiConfiguration | undefined;
	readonly provisioningState?:
		| (
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
				| "TransientFailure"
		  )
		| undefined;
	readonly regionality?: ("Global" | "NotSpecified" | "Regional") | undefined;
	readonly requestHeaderOptions?: ResourceTypeRegistrationPropertiesRequestHeaderOptions | undefined;
	readonly requiredFeatures?: string[] | undefined;
	readonly resourceConcurrencyControlOptions?:
		| ResourceTypeRegistrationPropertiesResourceConcurrencyControlOptions
		| undefined;
	readonly resourceDeletionPolicy?:
		| ("CascadeDeleteAll" | "CascadeDeleteProxyOnlyChildren" | "NotSpecified")
		| undefined;
	readonly resourceGraphConfiguration?: ResourceTypeRegistrationPropertiesResourceGraphConfiguration | undefined;
	readonly resourceMovePolicy?: ResourceTypeRegistrationPropertiesResourceMovePolicy | undefined;
	readonly routingType?:
		| (
				| "CascadeExtension"
				| "Default"
				| "Extension"
				| "Failover"
				| "Fanout"
				| "HostBased"
				| "LocationBased"
				| "ProxyOnly"
				| "Tenant"
		  )
		| undefined;
	readonly serviceTreeInfos?: ServiceTreeInfo[] | undefined;
	readonly subscriptionLifecycleNotificationSpecifications?:
		| ResourceTypeRegistrationPropertiesSubscriptionLifecycleNotificationSpecifications
		| undefined;
	readonly subscriptionStateRules?: SubscriptionStateRule[] | undefined;
	readonly swaggerSpecifications?: SwaggerSpecification[] | undefined;
	readonly templateDeploymentOptions?: ResourceTypeRegistrationPropertiesTemplateDeploymentOptions | undefined;
	readonly throttlingRules?: ThrottlingRule[] | undefined;
}
export interface ResourceTypeRegistrationPropertiesCheckNameAvailabilitySpecifications {
	readonly enableDefaultValidation?: boolean | undefined;
	readonly resourceTypesWithCustomValidation?: string[] | undefined;
}
export interface ResourceTypeRegistrationPropertiesExtensionOptions {
	readonly resourceCreationBegin?: ResourceTypeExtensionOptionsResourceCreationBegin | undefined;
}
export interface ResourceTypeRegistrationPropertiesFeaturesRule {
	readonly requiredFeaturesPolicy: "All" | "any";
}
export interface ResourceTypeRegistrationPropertiesIdentityManagement {
	readonly applicationId?: string | undefined;
	readonly type?:
		| ("Actor" | "DelegatedResourceIdentity" | "NotSpecified" | "SystemAssigned" | "UserAssigned")
		| undefined;
}
export interface ResourceTypeRegistrationPropertiesManagement {
	readonly incidentContactEmail?: string | undefined;
	readonly incidentRoutingService?: string | undefined;
	readonly incidentRoutingTeam?: string | undefined;
	readonly manifestOwners?: string[] | undefined;
	readonly resourceAccessPolicy?: ("AcisActionAllowed" | "AcisReadAllowed" | "NotSpecified") | undefined;
	readonly resourceAccessRoles?: any[] | undefined;
	readonly schemaOwners?: string[] | undefined;
	readonly serviceTreeInfos?: ServiceTreeInfo[] | undefined;
}
export interface ResourceTypeRegistrationPropertiesRequestHeaderOptions {
	readonly optInHeaders?:
		| (
				| "ClientGroupMembership"
				| "NotSpecified"
				| "SignedAuxiliaryTokens"
				| "SignedUserToken"
				| "UnboundedClientGroupMembership"
		  )
		| undefined;
}
export interface ResourceTypeRegistrationPropertiesResourceConcurrencyControlOptions {
	readonly "[ key: string ]"?: ResourceConcurrencyControlOption | undefined;
}
export interface ResourceTypeRegistrationPropertiesResourceGraphConfiguration {
	readonly apiVersion?: string | undefined;
	readonly enabled?: boolean | undefined;
}
export interface ResourceTypeRegistrationPropertiesResourceMovePolicy {
	readonly crossResourceGroupMoveEnabled?: boolean | undefined;
	readonly crossSubscriptionMoveEnabled?: boolean | undefined;
	readonly validationRequired?: boolean | undefined;
}
export interface ResourceTypeRegistrationPropertiesSubscriptionLifecycleNotificationSpecifications {
	readonly softDeleteTTL?: string | undefined;
	readonly subscriptionStateOverrideActions?: SubscriptionStateOverrideAction[] | undefined;
}
export interface ResourceTypeRegistrationPropertiesTemplateDeploymentOptions {
	readonly preflightOptions?: ("ContinueDeploymentOnFailure" | "DefaultValidationOnly" | "None"[]) | undefined;
	readonly preflightSupported?: boolean | undefined;
}
export interface RolloutStatusBaseFailedOrSkippedRegions {
	readonly "[ key: string ]"?: ExtendedErrorInfo | undefined;
}
export interface ServiceTreeInfo {
	readonly componentId?: string | undefined;
	readonly readiness?:
		| (
				| "ClosingDown"
				| "Deprecated"
				| "GA"
				| "InDevelopment"
				| "InternalOnly"
				| "PrivatePreview"
				| "PublicPreview"
				| "RemovedFromARM"
				| "Retired"
		  )
		| undefined;
	readonly serviceId?: string | undefined;
}
export interface SkuCapability {
	readonly name: string;
	readonly value: string;
}
export interface SkuCost {
	readonly extendedUnit?: string | undefined;
	readonly meterId: string;
	readonly quantity?: number | undefined;
}
export interface SkuLocationInfo {
	readonly extendedLocations?: string[] | undefined;
	readonly location: string;
	readonly type?: ("ArcZone" | "EdgeZone" | "NotSpecified") | undefined;
	readonly zoneDetails?: SkuZoneDetail[] | undefined;
	readonly zones?: string[] | undefined;
}
export interface SkuResourceProperties {
	readonly provisioningState?:
		| (
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
				| "TransientFailure"
		  )
		| undefined;
	readonly skuSettings: SkuSetting[];
}
export interface SkuSetting {
	readonly capabilities?: SkuCapability[] | undefined;
	readonly capacity?: SkuSettingCapacity | undefined;
	readonly costs?: SkuCost[] | undefined;
	readonly family?: string | undefined;
	readonly kind?: string | undefined;
	readonly locationInfo?: SkuLocationInfo[] | undefined;
	readonly locations?: string[] | undefined;
	readonly name: string;
	readonly requiredFeatures?: string[] | undefined;
	readonly requiredQuotaIds?: string[] | undefined;
	readonly size?: string | undefined;
	readonly tier?: string | undefined;
}
export interface SkuSettingCapacity {
	readonly default?: number | undefined;
	readonly maximum?: number | undefined;
	readonly minimum: number;
	readonly scaleType?: ("Automatic" | "Manual" | "None") | undefined;
}
export interface SkuZoneDetail {
	readonly capabilities?: SkuCapability[] | undefined;
	readonly name?: string[] | undefined;
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
	readonly allowedActions?: string[] | undefined;
	readonly state?: ("Deleted" | "Disabled" | "Enabled" | "NotDefined" | "PastDue" | "Warned") | undefined;
}
export interface SwaggerSpecification {
	readonly apiVersions?: string[] | undefined;
	readonly swaggerSpecFolderUri?: string | undefined;
}
export interface SystemData {
	readonly createdAt?: string | undefined;
	readonly createdBy?: string | undefined;
	readonly createdByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
	readonly lastModifiedAt?: string | undefined;
	readonly lastModifiedBy?: string | undefined;
	readonly lastModifiedByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
}
export interface ThrottlingMetric {
	readonly interval?: string | undefined;
	readonly limit: number;
	readonly type: "NotSpecified" | "NumberOfRequests" | "NumberOfResources";
}
export interface ThrottlingRule {
	readonly action: string;
	readonly metrics: ThrottlingMetric[];
	readonly requiredFeatures?: string[] | undefined;
}
export interface TypedErrorInfo {
	readonly info?: any | undefined;
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
