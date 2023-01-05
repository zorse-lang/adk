import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class certificates extends ArmResource<certificatesComponentInputs> implements certificatesComponentOutputs {
	constructor(entity: ADKEntity, options: certificatesComponentInputs) {
		super(entity, options.name, "Microsoft.Web/certificates", "2016-03-01", options);
	}
	public readonly apiVersion: "2016-03-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/certificates";
}
export interface certificatesComponentOutputs {
	readonly apiVersion: "2016-03-01";
	readonly id: string;
	readonly type: "Microsoft.Web/certificates";
}
export interface certificatesComponentInputs {
	readonly kind?: string;
	readonly location: string;
	readonly name: string;
	readonly properties?: CertificateProperties;
	readonly tags?: ResourceTags;
}
export class hostingEnvironments_detectors
	extends ArmResource<hostingEnvironments_detectorsComponentInputs>
	implements hostingEnvironments_detectorsComponentOutputs
{
	constructor(entity: ADKEntity, options: hostingEnvironments_detectorsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/hostingEnvironments/detectors", "2016-03-01", options);
	}
	public readonly apiVersion: "2016-03-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/hostingEnvironments/detectors";
}
export interface hostingEnvironments_detectorsComponentOutputs {
	readonly apiVersion: "2016-03-01";
	readonly id: string;
	readonly type: "Microsoft.Web/hostingEnvironments/detectors";
}
export interface hostingEnvironments_detectorsComponentInputs {
	readonly kind?: string;
	readonly name: string;
	readonly properties?: DetectorResponseProperties;
}
export class publishingUsers
	extends ArmResource<publishingUsersComponentInputs>
	implements publishingUsersComponentOutputs
{
	constructor(entity: ADKEntity, options: publishingUsersComponentInputs) {
		super(entity, options.name, "Microsoft.Web/publishingUsers", "2016-03-01", options);
	}
	public readonly apiVersion: "2016-03-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/publishingUsers";
}
export interface publishingUsersComponentOutputs {
	readonly apiVersion: "2016-03-01";
	readonly id: string;
	readonly type: "Microsoft.Web/publishingUsers";
}
export interface publishingUsersComponentInputs {
	readonly kind?: string;
	readonly name: string;
	readonly properties?: UserProperties;
}
export class sites_detectors
	extends ArmResource<sites_detectorsComponentInputs>
	implements sites_detectorsComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_detectorsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/detectors", "2016-03-01", options);
	}
	public readonly apiVersion: "2016-03-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/detectors";
}
export interface sites_detectorsComponentOutputs {
	readonly apiVersion: "2016-03-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/detectors";
}
export interface sites_detectorsComponentInputs {
	readonly kind?: string;
	readonly name: string;
	readonly properties?: DetectorResponseProperties;
}
export class sites_diagnostics
	extends ArmResource<sites_diagnosticsComponentInputs>
	implements sites_diagnosticsComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_diagnosticsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/diagnostics", "2016-03-01", options);
	}
	public readonly apiVersion: "2016-03-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/diagnostics";
}
export interface sites_diagnosticsComponentOutputs {
	readonly apiVersion: "2016-03-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/diagnostics";
}
export interface sites_diagnosticsComponentInputs {
	readonly kind?: string;
	readonly name: string;
	readonly properties?: DiagnosticCategoryProperties;
}
export class sites_diagnostics_analyses
	extends ArmResource<sites_diagnostics_analysesComponentInputs>
	implements sites_diagnostics_analysesComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_diagnostics_analysesComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/diagnostics/analyses", "2016-03-01", options);
	}
	public readonly apiVersion: "2016-03-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/diagnostics/analyses";
}
export interface sites_diagnostics_analysesComponentOutputs {
	readonly apiVersion: "2016-03-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/diagnostics/analyses";
}
export interface sites_diagnostics_analysesComponentInputs {
	readonly kind?: string;
	readonly name: string;
	readonly properties?: DiagnosticAnalysisProperties;
}
export class sites_recommendations
	extends ArmResource<sites_recommendationsComponentInputs>
	implements sites_recommendationsComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_recommendationsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/recommendations", "2016-03-01", options);
	}
	public readonly apiVersion: "2016-03-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/recommendations";
}
export interface sites_recommendationsComponentOutputs {
	readonly apiVersion: "2016-03-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/recommendations";
}
export interface sites_recommendationsComponentInputs {
	readonly kind?: string;
	readonly name: string;
	readonly properties?: RecommendationRuleProperties;
}
export class sites_resourceHealthMetadata
	extends ArmResource<sites_resourceHealthMetadataComponentInputs>
	implements sites_resourceHealthMetadataComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_resourceHealthMetadataComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/resourceHealthMetadata", "2016-03-01", options);
	}
	public readonly apiVersion: "2016-03-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/resourceHealthMetadata";
}
export interface sites_resourceHealthMetadataComponentOutputs {
	readonly apiVersion: "2016-03-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/resourceHealthMetadata";
}
export interface sites_resourceHealthMetadataComponentInputs {
	readonly kind?: string;
	readonly name: string;
	readonly properties?: ResourceHealthMetadataProperties;
}
export class sites_slots_detectors
	extends ArmResource<sites_slots_detectorsComponentInputs>
	implements sites_slots_detectorsComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_slots_detectorsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/slots/detectors", "2016-03-01", options);
	}
	public readonly apiVersion: "2016-03-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/detectors";
}
export interface sites_slots_detectorsComponentOutputs {
	readonly apiVersion: "2016-03-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/slots/detectors";
}
export interface sites_slots_detectorsComponentInputs {
	readonly kind?: string;
	readonly name: string;
	readonly properties?: DetectorResponseProperties;
}
export class sites_slots_diagnostics
	extends ArmResource<sites_slots_diagnosticsComponentInputs>
	implements sites_slots_diagnosticsComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_slots_diagnosticsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/slots/diagnostics", "2016-03-01", options);
	}
	public readonly apiVersion: "2016-03-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/diagnostics";
}
export interface sites_slots_diagnosticsComponentOutputs {
	readonly apiVersion: "2016-03-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/slots/diagnostics";
}
export interface sites_slots_diagnosticsComponentInputs {
	readonly kind?: string;
	readonly name: string;
	readonly properties?: DiagnosticCategoryProperties;
}
export class sites_slots_diagnostics_analyses
	extends ArmResource<sites_slots_diagnostics_analysesComponentInputs>
	implements sites_slots_diagnostics_analysesComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_slots_diagnostics_analysesComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/slots/diagnostics/analyses", "2016-03-01", options);
	}
	public readonly apiVersion: "2016-03-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/diagnostics/analyses";
}
export interface sites_slots_diagnostics_analysesComponentOutputs {
	readonly apiVersion: "2016-03-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/slots/diagnostics/analyses";
}
export interface sites_slots_diagnostics_analysesComponentInputs {
	readonly kind?: string;
	readonly name: string;
	readonly properties?: DiagnosticAnalysisProperties;
}
export class sites_slots_resourceHealthMetadata
	extends ArmResource<sites_slots_resourceHealthMetadataComponentInputs>
	implements sites_slots_resourceHealthMetadataComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_slots_resourceHealthMetadataComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/slots/resourceHealthMetadata", "2016-03-01", options);
	}
	public readonly apiVersion: "2016-03-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/resourceHealthMetadata";
}
export interface sites_slots_resourceHealthMetadataComponentOutputs {
	readonly apiVersion: "2016-03-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/slots/resourceHealthMetadata";
}
export interface sites_slots_resourceHealthMetadataComponentInputs {
	readonly kind?: string;
	readonly name: string;
	readonly properties?: ResourceHealthMetadataProperties;
}
export class sourcecontrols extends ArmResource<sourcecontrolsComponentInputs> implements sourcecontrolsComponentOutputs {
	constructor(entity: ADKEntity, options: sourcecontrolsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sourcecontrols", "2016-03-01", options);
	}
	public readonly apiVersion: "2016-03-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sourcecontrols";
}
export interface sourcecontrolsComponentOutputs {
	readonly apiVersion: "2016-03-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sourcecontrols";
}
export interface sourcecontrolsComponentInputs {
	readonly kind?: string;
	readonly name: string;
	readonly properties?: SourceControlProperties;
}
export interface AbnormalTimePeriod {
	readonly endTime?: string;
	readonly events?: DetectorAbnormalTimePeriod[];
	readonly solutions?: Solution[];
	readonly startTime?: string;
}
export interface AnalysisData {
	readonly data?: NameValuePair[][];
	readonly detectorDefinition?: DetectorDefinition;
	readonly detectorMetaData?: ResponseMetaData;
	readonly metrics?: DiagnosticMetricSet[];
	readonly source?: string;
}
export interface CertificateProperties {
	readonly cerBlob?: any;
	readonly expirationDate?: string;
	readonly friendlyName?: string;
	readonly geoRegion?: string;
	readonly hostingEnvironmentProfile?: HostingEnvironmentProfile;
	readonly hostNames?: string[];
	readonly issueDate?: string;
	readonly issuer?: string;
	readonly keyVaultId?: string;
	readonly keyVaultSecretName?: string;
	readonly keyVaultSecretStatus?:
		| "AzureServiceUnauthorizedToAccessKeyVault"
		| "CertificateOrderFailed"
		| "ExternalPrivateKey"
		| "Initialized"
		| "KeyVaultDoesNotExist"
		| "KeyVaultSecretDoesNotExist"
		| "OperationNotPermittedOnKeyVault"
		| "Succeeded"
		| "Unknown"
		| "UnknownError";
	readonly password: string;
	readonly pfxBlob?: any;
	readonly publicKeyHash?: string;
	readonly selfLink?: string;
	readonly serverFarmId?: string;
	readonly siteName?: string;
	readonly subjectName?: string;
	readonly thumbprint?: string;
	readonly valid?: boolean;
}
export interface DataSource {
	readonly dataSourceUri?: NameValuePair[];
	readonly instructions?: string[];
}
export interface DataTableResponseColumn {
	readonly columnName?: string;
	readonly columnType?: string;
	readonly dataType?: string;
}
export interface DataTableResponseObject {
	readonly columns?: DataTableResponseColumn[];
	readonly rows?: string[][];
	readonly tableName?: string;
}
export interface DetectorAbnormalTimePeriod {
	readonly endTime?: string;
	readonly message?: string;
	readonly metaData?: NameValuePair[][];
	readonly priority?: number;
	readonly solutions?: Solution[];
	readonly source?: string;
	readonly startTime?: string;
	readonly type?:
		| "AppCrash"
		| "AppDeployment"
		| "AseDeployment"
		| "Other"
		| "PlatformIssue"
		| "RuntimeIssueDetected"
		| "ServiceIncident";
}
export interface DetectorDefinition {
	readonly id?: string;
	readonly kind?: string;
	readonly name?: string;
	readonly properties?: DetectorDefinitionProperties;
	readonly type?: string;
}
export interface DetectorDefinitionProperties {
	readonly description?: string;
	readonly displayName?: string;
	readonly isEnabled?: boolean;
	readonly rank?: number;
}
export interface DetectorInfo {
	readonly category?: string;
	readonly description?: string;
	readonly subCategory?: string;
	readonly supportTopicId?: string;
}
export interface DetectorResponseProperties {
	readonly dataset?: DiagnosticData[];
	readonly metadata?: DetectorInfo;
}
export interface DiagnosticAnalysisProperties {
	readonly abnormalTimePeriods?: AbnormalTimePeriod[];
	readonly endTime?: string;
	readonly nonCorrelatedDetectors?: DetectorDefinition[];
	readonly payload?: AnalysisData[];
	readonly startTime?: string;
}
export interface DiagnosticCategoryProperties {
	readonly description?: string;
}
export interface DiagnosticData {
	readonly renderingProperties?: Rendering;
	readonly table?: DataTableResponseObject;
}
export interface DiagnosticMetricSample {
	readonly isAggregated?: boolean;
	readonly maximum?: number;
	readonly minimum?: number;
	readonly roleInstance?: string;
	readonly timestamp?: string;
	readonly total?: number;
}
export interface DiagnosticMetricSet {
	readonly endTime?: string;
	readonly name?: string;
	readonly startTime?: string;
	readonly timeGrain?: string;
	readonly unit?: string;
	readonly values?: DiagnosticMetricSample[];
}
export interface HostingEnvironmentProfile {
	readonly id?: string;
	readonly name?: string;
	readonly type?: string;
}
export interface NameValuePair {
	readonly name?: string;
	readonly value?: string;
}
export interface RecommendationRuleProperties {
	readonly actionName?: string;
	readonly bladeName?: string;
	readonly channels?: "All" | "Api" | "Email" | "Notification";
	readonly description?: string;
	readonly displayName?: string;
	readonly extensionName?: string;
	readonly forwardLink?: string;
	readonly isDynamic?: boolean;
	readonly level?: "Critical" | "Information" | "NonUrgentSuggestion";
	readonly message?: string;
	readonly name?: string;
	readonly recommendationId?: string;
	readonly tags?: string[];
}
export interface Rendering {
	readonly description?: string;
	readonly renderingType?: "NoGraph" | "Table" | "TimeSeries";
	readonly title?: string;
}
export interface ResourceHealthMetadataProperties {
	readonly category?: string;
	readonly signalAvailability?: boolean;
}
export interface ResourceTags {
	readonly [key: string]: string;
}
export interface ResponseMetaData {
	readonly dataSource?: DataSource;
}
export interface Solution {
	readonly data?: NameValuePair[][];
	readonly description?: string;
	readonly displayName?: string;
	readonly id?: number;
	readonly metadata?: NameValuePair[][];
	readonly order?: number;
	readonly type?: "BestPractices" | "DeepInvestigation";
}
export interface SourceControlProperties {
	readonly expirationTime?: string;
	readonly name?: string;
	readonly refreshToken?: string;
	readonly token?: string;
	readonly tokenSecret?: string;
}
export interface UserProperties {
	readonly name?: string;
	readonly publishingPassword?: string;
	readonly publishingPasswordHash?: string;
	readonly publishingPasswordHashSalt?: string;
	readonly publishingUserName: string;
}
export default {
	certificates: certificates,
	"hostingEnvironments/detectors": hostingEnvironments_detectors,
	publishingUsers: publishingUsers,
	"sites/detectors": sites_detectors,
	"sites/diagnostics": sites_diagnostics,
	"sites/diagnostics/analyses": sites_diagnostics_analyses,
	"sites/recommendations": sites_recommendations,
	"sites/resourceHealthMetadata": sites_resourceHealthMetadata,
	"sites/slots/detectors": sites_slots_detectors,
	"sites/slots/diagnostics": sites_slots_diagnostics,
	"sites/slots/diagnostics/analyses": sites_slots_diagnostics_analyses,
	"sites/slots/resourceHealthMetadata": sites_slots_resourceHealthMetadata,
	sourcecontrols: sourcecontrols,
};
