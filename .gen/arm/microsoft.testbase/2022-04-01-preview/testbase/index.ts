import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class testBaseAccounts
	extends ArmResource<testBaseAccountsComponentInputs>
	implements testBaseAccountsComponentOutputs
{
	constructor(entity: ADKEntity, options: testBaseAccountsComponentInputs) {
		super(entity, options.name, "Microsoft.TestBase/testBaseAccounts", "2022-04-01-preview", options);
	}
	public readonly apiVersion: "2022-04-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.TestBase/testBaseAccounts";
}
export interface testBaseAccountsComponentOutputs {
	readonly apiVersion: "2022-04-01-preview";
	readonly id: string;
	readonly type: "Microsoft.TestBase/testBaseAccounts";
}
export interface testBaseAccountsComponentInputs {
	readonly etag?: string;
	readonly location: string;
	readonly name: string;
	readonly properties?: TestBaseAccountResourceProperties;
	readonly systemData?: SystemData;
	readonly tags?: Tags;
}
export class testBaseAccounts_availableOSs
	extends ArmResource<testBaseAccounts_availableOSsComponentInputs>
	implements testBaseAccounts_availableOSsComponentOutputs
{
	constructor(entity: ADKEntity, options: testBaseAccounts_availableOSsComponentInputs) {
		super(entity, options.name, "Microsoft.TestBase/testBaseAccounts/availableOSs", "2022-04-01-preview", options);
	}
	public readonly apiVersion: "2022-04-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.TestBase/testBaseAccounts/availableOSs";
}
export interface testBaseAccounts_availableOSsComponentOutputs {
	readonly apiVersion: "2022-04-01-preview";
	readonly id: string;
	readonly type: "Microsoft.TestBase/testBaseAccounts/availableOSs";
}
export interface testBaseAccounts_availableOSsComponentInputs {
	readonly name: string;
	readonly properties?: AvailableOSProperties;
	readonly systemData?: SystemData;
}
export class testBaseAccounts_customerEvents
	extends ArmResource<testBaseAccounts_customerEventsComponentInputs>
	implements testBaseAccounts_customerEventsComponentOutputs
{
	constructor(entity: ADKEntity, options: testBaseAccounts_customerEventsComponentInputs) {
		super(entity, options.name, "Microsoft.TestBase/testBaseAccounts/customerEvents", "2022-04-01-preview", options);
	}
	public readonly apiVersion: "2022-04-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.TestBase/testBaseAccounts/customerEvents";
}
export interface testBaseAccounts_customerEventsComponentOutputs {
	readonly apiVersion: "2022-04-01-preview";
	readonly id: string;
	readonly type: "Microsoft.TestBase/testBaseAccounts/customerEvents";
}
export interface testBaseAccounts_customerEventsComponentInputs {
	readonly name: string;
	readonly properties?: CustomerEventProperties;
	readonly systemData?: SystemData;
}
export class testBaseAccounts_emailEvents
	extends ArmResource<testBaseAccounts_emailEventsComponentInputs>
	implements testBaseAccounts_emailEventsComponentOutputs
{
	constructor(entity: ADKEntity, options: testBaseAccounts_emailEventsComponentInputs) {
		super(entity, options.name, "Microsoft.TestBase/testBaseAccounts/emailEvents", "2022-04-01-preview", options);
	}
	public readonly apiVersion: "2022-04-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.TestBase/testBaseAccounts/emailEvents";
}
export interface testBaseAccounts_emailEventsComponentOutputs {
	readonly apiVersion: "2022-04-01-preview";
	readonly id: string;
	readonly type: "Microsoft.TestBase/testBaseAccounts/emailEvents";
}
export interface testBaseAccounts_emailEventsComponentInputs {
	readonly name: string;
	readonly properties?: EmailEventProperties;
	readonly systemData?: SystemData;
}
export class testBaseAccounts_flightingRings
	extends ArmResource<testBaseAccounts_flightingRingsComponentInputs>
	implements testBaseAccounts_flightingRingsComponentOutputs
{
	constructor(entity: ADKEntity, options: testBaseAccounts_flightingRingsComponentInputs) {
		super(entity, options.name, "Microsoft.TestBase/testBaseAccounts/flightingRings", "2022-04-01-preview", options);
	}
	public readonly apiVersion: "2022-04-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.TestBase/testBaseAccounts/flightingRings";
}
export interface testBaseAccounts_flightingRingsComponentOutputs {
	readonly apiVersion: "2022-04-01-preview";
	readonly id: string;
	readonly type: "Microsoft.TestBase/testBaseAccounts/flightingRings";
}
export interface testBaseAccounts_flightingRingsComponentInputs {
	readonly name: string;
	readonly properties?: FlightingRingProperties;
	readonly systemData?: SystemData;
}
export class testBaseAccounts_packages
	extends ArmResource<testBaseAccounts_packagesComponentInputs>
	implements testBaseAccounts_packagesComponentOutputs
{
	constructor(entity: ADKEntity, options: testBaseAccounts_packagesComponentInputs) {
		super(entity, options.name, "Microsoft.TestBase/testBaseAccounts/packages", "2022-04-01-preview", options);
	}
	public readonly apiVersion: "2022-04-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.TestBase/testBaseAccounts/packages";
}
export interface testBaseAccounts_packagesComponentOutputs {
	readonly apiVersion: "2022-04-01-preview";
	readonly id: string;
	readonly type: "Microsoft.TestBase/testBaseAccounts/packages";
}
export interface testBaseAccounts_packagesComponentInputs {
	readonly etag?: string;
	readonly location: string;
	readonly name: string;
	readonly properties?: PackageProperties;
	readonly systemData?: SystemData;
	readonly tags?: Tags;
}
export class testBaseAccounts_packages_favoriteProcesses
	extends ArmResource<testBaseAccounts_packages_favoriteProcessesComponentInputs>
	implements testBaseAccounts_packages_favoriteProcessesComponentOutputs
{
	constructor(entity: ADKEntity, options: testBaseAccounts_packages_favoriteProcessesComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.TestBase/testBaseAccounts/packages/favoriteProcesses",
			"2022-04-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2022-04-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.TestBase/testBaseAccounts/packages/favoriteProcesses";
}
export interface testBaseAccounts_packages_favoriteProcessesComponentOutputs {
	readonly apiVersion: "2022-04-01-preview";
	readonly id: string;
	readonly type: "Microsoft.TestBase/testBaseAccounts/packages/favoriteProcesses";
}
export interface testBaseAccounts_packages_favoriteProcessesComponentInputs {
	readonly name: string;
	readonly properties?: FavoriteProcessProperties;
	readonly systemData?: SystemData;
}
export class testBaseAccounts_packages_osUpdates
	extends ArmResource<testBaseAccounts_packages_osUpdatesComponentInputs>
	implements testBaseAccounts_packages_osUpdatesComponentOutputs
{
	constructor(entity: ADKEntity, options: testBaseAccounts_packages_osUpdatesComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.TestBase/testBaseAccounts/packages/osUpdates",
			"2022-04-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2022-04-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.TestBase/testBaseAccounts/packages/osUpdates";
}
export interface testBaseAccounts_packages_osUpdatesComponentOutputs {
	readonly apiVersion: "2022-04-01-preview";
	readonly id: string;
	readonly type: "Microsoft.TestBase/testBaseAccounts/packages/osUpdates";
}
export interface testBaseAccounts_packages_osUpdatesComponentInputs {
	readonly name: string;
	readonly properties?: OSUpdateProperties;
	readonly systemData?: SystemData;
}
export class testBaseAccounts_packages_testResults
	extends ArmResource<testBaseAccounts_packages_testResultsComponentInputs>
	implements testBaseAccounts_packages_testResultsComponentOutputs
{
	constructor(entity: ADKEntity, options: testBaseAccounts_packages_testResultsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.TestBase/testBaseAccounts/packages/testResults",
			"2022-04-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2022-04-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.TestBase/testBaseAccounts/packages/testResults";
}
export interface testBaseAccounts_packages_testResultsComponentOutputs {
	readonly apiVersion: "2022-04-01-preview";
	readonly id: string;
	readonly type: "Microsoft.TestBase/testBaseAccounts/packages/testResults";
}
export interface testBaseAccounts_packages_testResultsComponentInputs {
	readonly name: string;
	readonly properties?: TestResultProperties;
	readonly systemData?: SystemData;
}
export class testBaseAccounts_packages_testResults_analysisResults
	extends ArmResource<testBaseAccounts_packages_testResults_analysisResultsComponentInputs>
	implements testBaseAccounts_packages_testResults_analysisResultsComponentOutputs
{
	constructor(entity: ADKEntity, options: testBaseAccounts_packages_testResults_analysisResultsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.TestBase/testBaseAccounts/packages/testResults/analysisResults",
			"2022-04-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2022-04-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.TestBase/testBaseAccounts/packages/testResults/analysisResults";
}
export interface testBaseAccounts_packages_testResults_analysisResultsComponentOutputs {
	readonly apiVersion: "2022-04-01-preview";
	readonly id: string;
	readonly type: "Microsoft.TestBase/testBaseAccounts/packages/testResults/analysisResults";
}
export interface testBaseAccounts_packages_testResults_analysisResultsComponentInputs {
	readonly name: string;
	readonly properties?: AnalysisResultSingletonResourceProperties;
	readonly systemData?: SystemData;
}
export class testBaseAccounts_testSummaries
	extends ArmResource<testBaseAccounts_testSummariesComponentInputs>
	implements testBaseAccounts_testSummariesComponentOutputs
{
	constructor(entity: ADKEntity, options: testBaseAccounts_testSummariesComponentInputs) {
		super(entity, options.name, "Microsoft.TestBase/testBaseAccounts/testSummaries", "2022-04-01-preview", options);
	}
	public readonly apiVersion: "2022-04-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.TestBase/testBaseAccounts/testSummaries";
}
export interface testBaseAccounts_testSummariesComponentOutputs {
	readonly apiVersion: "2022-04-01-preview";
	readonly id: string;
	readonly type: "Microsoft.TestBase/testBaseAccounts/testSummaries";
}
export interface testBaseAccounts_testSummariesComponentInputs {
	readonly name: string;
	readonly properties?: TestSummaryProperties;
	readonly systemData?: SystemData;
}
export class testBaseAccounts_testTypes
	extends ArmResource<testBaseAccounts_testTypesComponentInputs>
	implements testBaseAccounts_testTypesComponentOutputs
{
	constructor(entity: ADKEntity, options: testBaseAccounts_testTypesComponentInputs) {
		super(entity, options.name, "Microsoft.TestBase/testBaseAccounts/testTypes", "2022-04-01-preview", options);
	}
	public readonly apiVersion: "2022-04-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.TestBase/testBaseAccounts/testTypes";
}
export interface testBaseAccounts_testTypesComponentOutputs {
	readonly apiVersion: "2022-04-01-preview";
	readonly id: string;
	readonly type: "Microsoft.TestBase/testBaseAccounts/testTypes";
}
export interface testBaseAccounts_testTypesComponentInputs {
	readonly name: string;
	readonly properties?: TestTypeProperties;
	readonly systemData?: SystemData;
}
export interface AnalysisResultSingletonResourceProperties {
	readonly grade?: "Fail" | "None" | "NotAvailable" | "Pass";
}
export interface AvailableOSProperties {
	readonly insiderChannel?: string;
	readonly osId?: string;
	readonly osName?: string;
	readonly osPlatform?: string;
	readonly osUpdateType?: string;
	readonly osVersion?: string;
}
export interface Command {
	readonly action: "Close" | "Custom" | "Install" | "Launch" | "Uninstall";
	readonly alwaysRun?: boolean;
	readonly applyUpdateBefore?: boolean;
	readonly content: string;
	readonly contentType: "File" | "Inline" | "Path";
	readonly maxRunTime?: number;
	readonly name: string;
	readonly restartAfter?: boolean;
	readonly runAsInteractive?: boolean;
	readonly runElevated?: boolean;
}
export interface CustomerEventProperties {
	readonly eventName: string;
	readonly receivers: NotificationEventReceiver[];
}
export interface DistributionGroupListReceiverValue {
	readonly distributionGroups?: string[];
}
export interface EmailEventProperties {
	readonly displayName?: string;
	readonly eventId?: string;
	readonly eventName?: string;
}
export interface FavoriteProcessProperties {
	readonly actualProcessName: string;
}
export interface FlightingRingProperties {
	readonly actualFlightingRingName?: string;
}
export interface IdentifiedFailure {
	readonly category?: "Infrastructure" | "None" | "OSUpdate" | "Package" | "Unidentified";
	readonly errorMessage?: string;
	readonly failureId?: string;
	readonly guidance?: string;
}
export interface NotificationEventReceiver {
	readonly receiverType?: string;
	readonly receiverValue?: NotificationReceiverValue;
}
export interface NotificationReceiverValue {
	readonly distributionGroupListReceiverValue?: DistributionGroupListReceiverValue;
	readonly subscriptionReceiverValue?: SubscriptionReceiverValue;
	readonly userObjectReceiverValue?: UserObjectReceiverValue;
}
export interface OSUpdateProperties {
	readonly buildRevision?: string;
	readonly buildVersion?: string;
	readonly flightingRing?: string;
	readonly osName?: string;
	readonly release?: string;
	readonly releaseVersionDate?: string;
	readonly type?: "FeatureUpdate" | "SecurityUpdate";
}
export interface OSUpdatesTestSummary {
	readonly executionStatus?:
		| "Completed"
		| "Failed"
		| "InProgress"
		| "Incomplete"
		| "None"
		| "NotExecuted"
		| "Processing"
		| "Succeeded";
	readonly grade?: "Fail" | "None" | "NotAvailable" | "Pass";
	readonly osUpdateTestSummaries?: OSUpdateTestSummary[];
	readonly testRunTime?: string;
	readonly testStatus?:
		| "Completed"
		| "DataProcessing"
		| "InfrastructureFailure"
		| "None"
		| "TestAndUpdateFailure"
		| "TestExecutionInProgress"
		| "TestFailure"
		| "UpdateFailure";
}
export interface OSUpdateTestSummary {
	readonly buildRevision?: string;
	readonly buildVersion?: string;
	readonly executionStatus?:
		| "Completed"
		| "Failed"
		| "InProgress"
		| "Incomplete"
		| "None"
		| "NotExecuted"
		| "Processing"
		| "Succeeded";
	readonly flightingRing?: string;
	readonly grade?: "Fail" | "None" | "NotAvailable" | "Pass";
	readonly osName?: string;
	readonly releaseName?: string;
	readonly releaseVersionDate?: string;
	readonly testRunTime?: string;
	readonly testStatus?:
		| "Completed"
		| "DataProcessing"
		| "InfrastructureFailure"
		| "None"
		| "TestAndUpdateFailure"
		| "TestExecutionInProgress"
		| "TestFailure"
		| "UpdateFailure";
	readonly testType?: string;
}
export interface PackageProperties {
	readonly applicationName: string;
	readonly blobPath: string;
	readonly flightingRing: string;
	readonly isEnabled?: boolean;
	readonly lastModifiedTime?: string;
	readonly packageStatus?:
		| "Deleted"
		| "Error"
		| "PreValidationCheckPass"
		| "Ready"
		| "Registered"
		| "Unknown"
		| "ValidatingPackage"
		| "ValidationLongerThanUsual"
		| "VerifyingPackage";
	readonly provisioningState?: "Cancelled" | "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly targetOSList: TargetOSInfo[];
	readonly tests: Test[];
	readonly testTypes?: "FunctionalTest" | "OutOfBoxTest"[];
	readonly validationResults?: PackageValidationResult[];
	readonly version: string;
}
export interface PackageValidationResult {
	readonly errors?: string[];
	readonly isValid?: boolean;
	readonly validationName?: string;
}
export interface RegressionResult {
	readonly details?: string;
	readonly diff?: number;
	readonly fileName?: string;
	readonly grade?: "Fail" | "None" | "NotAvailable" | "Pass";
	readonly isRegressed?: boolean;
}
export interface RegressionTestDetails {
	readonly diff?: number;
	readonly isRegressed?: boolean;
}
export interface ReliabilityResult {
	readonly crashCount?: number;
	readonly crashRegressionGrade?: "Fail" | "None" | "NotAvailable" | "Pass";
	readonly crashRegressionTestDetails?: RegressionTestDetails;
	readonly fileName?: string;
	readonly hangCount?: number;
	readonly hangRegressionGrade?: "Fail" | "None" | "NotAvailable" | "Pass";
	readonly hangRegressionTestDetails?: RegressionTestDetails;
	readonly launchCount?: number;
	readonly regressionGrade?: "Fail" | "None" | "NotAvailable" | "Pass";
}
export interface ScriptExecutionResult {
	readonly endTime?: string;
	readonly exitCode?: number;
	readonly scriptName?: string;
	readonly startTime?: string;
	readonly stderrLogFileName?: string;
	readonly stdoutLogFileName?: string;
	readonly timedOut?: boolean;
}
export interface SubscriptionReceiverValue {
	readonly role?: string;
	readonly subscriptionId?: string;
	readonly subscriptionName?: string;
}
export interface SystemData {
	readonly createdAt?: string;
	readonly createdBy?: string;
	readonly createdByType?: "Application" | "Key" | "ManagedIdentity" | "User";
	readonly lastModifiedAt?: string;
	readonly lastModifiedBy?: string;
	readonly lastModifiedByType?: "Application" | "Key" | "ManagedIdentity" | "User";
}
export interface Tags {
	readonly [key: string]: string;
}
export interface TargetOSInfo {
	readonly baselineOSs?: string[];
	readonly osUpdateType: string;
	readonly targetOSs: string[];
}
export interface Test {
	readonly commands: Command[];
	readonly isActive?: boolean;
	readonly testType: "FunctionalTest" | "OutOfBoxTest";
	readonly validationResultId?: string;
	readonly validationRunStatus?: "Failed" | "Passed" | "Pending" | "Unknown";
}
export interface TestAnalysisResult {
	readonly blobData?: string;
	readonly identifiedFailures?: IdentifiedFailure[];
	readonly testAnalysisStatus?: "Analyzing" | "Completed" | "Failed" | "None";
}
export interface TestBaseAccountResourceProperties {
	readonly accessLevel?: string;
	readonly provisioningState?: "Cancelled" | "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly sku: TestBaseAccountSKU;
}
export interface TestBaseAccountSKU {
	readonly capabilities?: TestBaseAccountSKUCapability[];
	readonly locations?: string[];
	readonly name: string;
	readonly resourceType?: string;
	readonly tier: "Standard";
}
export interface TestBaseAccountSKUCapability {
	readonly name: string;
	readonly value: string;
}
export interface TestResultAnalysisSummary {
	readonly analysisStatus?: "Available" | "Completed" | "Failed" | "InProgress" | "None" | "NotAvailable" | "Succeeded";
	readonly grade?: "Fail" | "None" | "NotAvailable" | "Pass";
	readonly name?: string;
}
export interface TestResultProperties {
	readonly analysisSummaries?: TestResultAnalysisSummary[];
	readonly applicationName?: string;
	readonly applicationVersion?: string;
	readonly baselineTestResultId?: string;
	readonly buildRevision?: string;
	readonly buildVersion?: string;
	readonly executionStatus?:
		| "Completed"
		| "Failed"
		| "InProgress"
		| "Incomplete"
		| "None"
		| "NotExecuted"
		| "Processing"
		| "Succeeded";
	readonly flightingRing?: string;
	readonly grade?: "Fail" | "None" | "NotAvailable" | "Pass";
	readonly interopMediaType?: string;
	readonly interopMediaVersion?: string;
	readonly isDownloadDataAvailable?: boolean;
	readonly isVideoAvailable?: boolean;
	readonly kbNumber?: string;
	readonly osName?: string;
	readonly packageId?: string;
	readonly packageVersion?: string;
	readonly releaseName?: string;
	readonly releaseVersionDate?: string;
	readonly testRunTime?: string;
	readonly testStatus?:
		| "Completed"
		| "DataProcessing"
		| "InfrastructureFailure"
		| "None"
		| "TestAndUpdateFailure"
		| "TestExecutionInProgress"
		| "TestFailure"
		| "UpdateFailure";
	readonly testType?: string;
}
export interface TestSummaryProperties {
	readonly applicationName?: string;
	readonly applicationVersion?: string;
	readonly executionStatus?:
		| "Completed"
		| "Failed"
		| "InProgress"
		| "Incomplete"
		| "None"
		| "NotExecuted"
		| "Processing"
		| "Succeeded";
	readonly featureUpdatesTestSummary?: OSUpdatesTestSummary;
	readonly grade?: "Fail" | "None" | "NotAvailable" | "Pass";
	readonly packageId?: string;
	readonly packageTags?: Tags;
	readonly securityUpdatesTestSummary?: OSUpdatesTestSummary;
	readonly testRunTime?: string;
	readonly testStatus?:
		| "Completed"
		| "DataProcessing"
		| "InfrastructureFailure"
		| "None"
		| "TestAndUpdateFailure"
		| "TestExecutionInProgress"
		| "TestFailure"
		| "UpdateFailure";
	readonly testSummaryId?: string;
}
export interface TestTypeProperties {
	readonly actualTestTypeName?: string;
}
export interface UserObjectReceiverValue {
	readonly userObjectIds?: string[];
}
export interface UtilizationBound {
	readonly percentile?: number;
	readonly value?: number;
}
export interface UtilizationEntry {
	readonly timestamp?: string;
	readonly value?: number;
}
export interface UtilizationResult {
	readonly lowerBound?: UtilizationBound;
	readonly process?: string;
	readonly upperBound?: UtilizationBound;
	readonly utilization?: UtilizationEntry[];
}
export default {
	testBaseAccounts: testBaseAccounts,
	"testBaseAccounts/availableOSs": testBaseAccounts_availableOSs,
	"testBaseAccounts/customerEvents": testBaseAccounts_customerEvents,
	"testBaseAccounts/emailEvents": testBaseAccounts_emailEvents,
	"testBaseAccounts/flightingRings": testBaseAccounts_flightingRings,
	"testBaseAccounts/packages": testBaseAccounts_packages,
	"testBaseAccounts/packages/favoriteProcesses": testBaseAccounts_packages_favoriteProcesses,
	"testBaseAccounts/packages/osUpdates": testBaseAccounts_packages_osUpdates,
	"testBaseAccounts/packages/testResults": testBaseAccounts_packages_testResults,
	"testBaseAccounts/packages/testResults/analysisResults": testBaseAccounts_packages_testResults_analysisResults,
	"testBaseAccounts/testSummaries": testBaseAccounts_testSummaries,
	"testBaseAccounts/testTypes": testBaseAccounts_testTypes,
};
