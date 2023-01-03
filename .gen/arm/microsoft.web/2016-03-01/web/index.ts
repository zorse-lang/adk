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
	readonly kind?: string | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties?: CertificateProperties | undefined;
	readonly tags?: ResourceTags | undefined;
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
	readonly kind?: string | undefined;
	readonly name: string;
	readonly properties?: DetectorResponseProperties | undefined;
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
	readonly kind?: string | undefined;
	readonly name: string;
	readonly properties?: UserProperties | undefined;
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
	readonly kind?: string | undefined;
	readonly name: string;
	readonly properties?: DetectorResponseProperties | undefined;
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
	readonly kind?: string | undefined;
	readonly name: string;
	readonly properties?: DiagnosticCategoryProperties | undefined;
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
	readonly kind?: string | undefined;
	readonly name: string;
	readonly properties?: DiagnosticAnalysisProperties | undefined;
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
	readonly kind?: string | undefined;
	readonly name: string;
	readonly properties?: RecommendationRuleProperties | undefined;
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
	readonly kind?: string | undefined;
	readonly name: string;
	readonly properties?: ResourceHealthMetadataProperties | undefined;
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
	readonly kind?: string | undefined;
	readonly name: string;
	readonly properties?: DetectorResponseProperties | undefined;
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
	readonly kind?: string | undefined;
	readonly name: string;
	readonly properties?: DiagnosticCategoryProperties | undefined;
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
	readonly kind?: string | undefined;
	readonly name: string;
	readonly properties?: DiagnosticAnalysisProperties | undefined;
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
	readonly kind?: string | undefined;
	readonly name: string;
	readonly properties?: ResourceHealthMetadataProperties | undefined;
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
	readonly kind?: string | undefined;
	readonly name: string;
	readonly properties?: SourceControlProperties | undefined;
}
export interface AbnormalTimePeriod {
	readonly endTime?: string | undefined;
	readonly events?: DetectorAbnormalTimePeriod[] | undefined;
	readonly solutions?: Solution[] | undefined;
	readonly startTime?: string | undefined;
}
export interface AnalysisData {
	readonly data?: NameValuePair[][] | undefined;
	readonly detectorDefinition?: DetectorDefinition | undefined;
	readonly detectorMetaData?: ResponseMetaData | undefined;
	readonly metrics?: DiagnosticMetricSet[] | undefined;
	readonly source?: string | undefined;
}
export interface CertificateProperties {
	readonly cerBlob?: any | undefined;
	readonly expirationDate?: string | undefined;
	readonly friendlyName?: string | undefined;
	readonly geoRegion?: string | undefined;
	readonly hostingEnvironmentProfile?: HostingEnvironmentProfile | undefined;
	readonly hostNames?: string[] | undefined;
	readonly issueDate?: string | undefined;
	readonly issuer?: string | undefined;
	readonly keyVaultId?: string | undefined;
	readonly keyVaultSecretName?: string | undefined;
	readonly keyVaultSecretStatus?:
		| (
				| "AzureServiceUnauthorizedToAccessKeyVault"
				| "CertificateOrderFailed"
				| "ExternalPrivateKey"
				| "Initialized"
				| "KeyVaultDoesNotExist"
				| "KeyVaultSecretDoesNotExist"
				| "OperationNotPermittedOnKeyVault"
				| "Succeeded"
				| "Unknown"
				| "UnknownError"
		  )
		| undefined;
	readonly password: string;
	readonly pfxBlob?: any | undefined;
	readonly publicKeyHash?: string | undefined;
	readonly selfLink?: string | undefined;
	readonly serverFarmId?: string | undefined;
	readonly siteName?: string | undefined;
	readonly subjectName?: string | undefined;
	readonly thumbprint?: string | undefined;
	readonly valid?: boolean | undefined;
}
export interface DataSource {
	readonly dataSourceUri?: NameValuePair[] | undefined;
	readonly instructions?: string[] | undefined;
}
export interface DataTableResponseColumn {
	readonly columnName?: string | undefined;
	readonly columnType?: string | undefined;
	readonly dataType?: string | undefined;
}
export interface DataTableResponseObject {
	readonly columns?: DataTableResponseColumn[] | undefined;
	readonly rows?: string[][] | undefined;
	readonly tableName?: string | undefined;
}
export interface DetectorAbnormalTimePeriod {
	readonly endTime?: string | undefined;
	readonly message?: string | undefined;
	readonly metaData?: NameValuePair[][] | undefined;
	readonly priority?: number | undefined;
	readonly solutions?: Solution[] | undefined;
	readonly source?: string | undefined;
	readonly startTime?: string | undefined;
	readonly type?:
		| (
				| "AppCrash"
				| "AppDeployment"
				| "AseDeployment"
				| "Other"
				| "PlatformIssue"
				| "RuntimeIssueDetected"
				| "ServiceIncident"
		  )
		| undefined;
}
export interface DetectorDefinition {
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: DetectorDefinitionProperties | undefined;
	readonly type?: string | undefined;
}
export interface DetectorDefinitionProperties {
	readonly description?: string | undefined;
	readonly displayName?: string | undefined;
	readonly isEnabled?: boolean | undefined;
	readonly rank?: number | undefined;
}
export interface DetectorInfo {
	readonly category?: string | undefined;
	readonly description?: string | undefined;
	readonly subCategory?: string | undefined;
	readonly supportTopicId?: string | undefined;
}
export interface DetectorResponseProperties {
	readonly dataset?: DiagnosticData[] | undefined;
	readonly metadata?: DetectorInfo | undefined;
}
export interface DiagnosticAnalysisProperties {
	readonly abnormalTimePeriods?: AbnormalTimePeriod[] | undefined;
	readonly endTime?: string | undefined;
	readonly nonCorrelatedDetectors?: DetectorDefinition[] | undefined;
	readonly payload?: AnalysisData[] | undefined;
	readonly startTime?: string | undefined;
}
export interface DiagnosticCategoryProperties {
	readonly description?: string | undefined;
}
export interface DiagnosticData {
	readonly renderingProperties?: Rendering | undefined;
	readonly table?: DataTableResponseObject | undefined;
}
export interface DiagnosticMetricSample {
	readonly isAggregated?: boolean | undefined;
	readonly maximum?: number | undefined;
	readonly minimum?: number | undefined;
	readonly roleInstance?: string | undefined;
	readonly timestamp?: string | undefined;
	readonly total?: number | undefined;
}
export interface DiagnosticMetricSet {
	readonly endTime?: string | undefined;
	readonly name?: string | undefined;
	readonly startTime?: string | undefined;
	readonly timeGrain?: string | undefined;
	readonly unit?: string | undefined;
	readonly values?: DiagnosticMetricSample[] | undefined;
}
export interface HostingEnvironmentProfile {
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly type?: string | undefined;
}
export interface NameValuePair {
	readonly name?: string | undefined;
	readonly value?: string | undefined;
}
export interface RecommendationRuleProperties {
	readonly actionName?: string | undefined;
	readonly bladeName?: string | undefined;
	readonly channels?: ("All" | "Api" | "Email" | "Notification") | undefined;
	readonly description?: string | undefined;
	readonly displayName?: string | undefined;
	readonly extensionName?: string | undefined;
	readonly forwardLink?: string | undefined;
	readonly isDynamic?: boolean | undefined;
	readonly level?: ("Critical" | "Information" | "NonUrgentSuggestion") | undefined;
	readonly message?: string | undefined;
	readonly name?: string | undefined;
	readonly recommendationId?: string | undefined;
	readonly tags?: string[] | undefined;
}
export interface Rendering {
	readonly description?: string | undefined;
	readonly renderingType?: ("NoGraph" | "Table" | "TimeSeries") | undefined;
	readonly title?: string | undefined;
}
export interface ResourceHealthMetadataProperties {
	readonly category?: string | undefined;
	readonly signalAvailability?: boolean | undefined;
}
export interface ResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface ResponseMetaData {
	readonly dataSource?: DataSource | undefined;
}
export interface Solution {
	readonly data?: NameValuePair[][] | undefined;
	readonly description?: string | undefined;
	readonly displayName?: string | undefined;
	readonly id?: number | undefined;
	readonly metadata?: NameValuePair[][] | undefined;
	readonly order?: number | undefined;
	readonly type?: ("BestPractices" | "DeepInvestigation") | undefined;
}
export interface SourceControlProperties {
	readonly expirationTime?: string | undefined;
	readonly name?: string | undefined;
	readonly refreshToken?: string | undefined;
	readonly token?: string | undefined;
	readonly tokenSecret?: string | undefined;
}
export interface UserProperties {
	readonly name?: string | undefined;
	readonly publishingPassword?: string | undefined;
	readonly publishingPasswordHash?: string | undefined;
	readonly publishingPasswordHashSalt?: string | undefined;
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
