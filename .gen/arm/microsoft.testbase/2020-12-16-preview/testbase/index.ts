import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class testBaseAccounts
	extends ArmResource<testBaseAccountsComponentInputs>
	implements testBaseAccountsComponentOutputs
{
	constructor(entity: ADKEntity, options: testBaseAccountsComponentInputs) {
		super(entity, options.name, "Microsoft.TestBase/testBaseAccounts", "2020-12-16-preview", options);
	}
	public readonly apiVersion: "2020-12-16-preview";
	public readonly id: string;
	public readonly type: "Microsoft.TestBase/testBaseAccounts";
}
export interface testBaseAccountsComponentOutputs {
	readonly apiVersion: "2020-12-16-preview";
	readonly id: string;
	readonly type: "Microsoft.TestBase/testBaseAccounts";
}
export interface testBaseAccountsComponentInputs {
	readonly etag?: string | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties?: TestBaseAccountResourceProperties | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: Tags | undefined;
}
export class testBaseAccounts_availableOSs
	extends ArmResource<testBaseAccounts_availableOSsComponentInputs>
	implements testBaseAccounts_availableOSsComponentOutputs
{
	constructor(entity: ADKEntity, options: testBaseAccounts_availableOSsComponentInputs) {
		super(entity, options.name, "Microsoft.TestBase/testBaseAccounts/availableOSs", "2020-12-16-preview", options);
	}
	public readonly apiVersion: "2020-12-16-preview";
	public readonly id: string;
	public readonly type: "Microsoft.TestBase/testBaseAccounts/availableOSs";
}
export interface testBaseAccounts_availableOSsComponentOutputs {
	readonly apiVersion: "2020-12-16-preview";
	readonly id: string;
	readonly type: "Microsoft.TestBase/testBaseAccounts/availableOSs";
}
export interface testBaseAccounts_availableOSsComponentInputs {
	readonly name: string;
	readonly properties?: AvailableOSProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export class testBaseAccounts_customerEvents
	extends ArmResource<testBaseAccounts_customerEventsComponentInputs>
	implements testBaseAccounts_customerEventsComponentOutputs
{
	constructor(entity: ADKEntity, options: testBaseAccounts_customerEventsComponentInputs) {
		super(entity, options.name, "Microsoft.TestBase/testBaseAccounts/customerEvents", "2020-12-16-preview", options);
	}
	public readonly apiVersion: "2020-12-16-preview";
	public readonly id: string;
	public readonly type: "Microsoft.TestBase/testBaseAccounts/customerEvents";
}
export interface testBaseAccounts_customerEventsComponentOutputs {
	readonly apiVersion: "2020-12-16-preview";
	readonly id: string;
	readonly type: "Microsoft.TestBase/testBaseAccounts/customerEvents";
}
export interface testBaseAccounts_customerEventsComponentInputs {
	readonly name: string;
	readonly properties?: CustomerEventProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export class testBaseAccounts_emailEvents
	extends ArmResource<testBaseAccounts_emailEventsComponentInputs>
	implements testBaseAccounts_emailEventsComponentOutputs
{
	constructor(entity: ADKEntity, options: testBaseAccounts_emailEventsComponentInputs) {
		super(entity, options.name, "Microsoft.TestBase/testBaseAccounts/emailEvents", "2020-12-16-preview", options);
	}
	public readonly apiVersion: "2020-12-16-preview";
	public readonly id: string;
	public readonly type: "Microsoft.TestBase/testBaseAccounts/emailEvents";
}
export interface testBaseAccounts_emailEventsComponentOutputs {
	readonly apiVersion: "2020-12-16-preview";
	readonly id: string;
	readonly type: "Microsoft.TestBase/testBaseAccounts/emailEvents";
}
export interface testBaseAccounts_emailEventsComponentInputs {
	readonly name: string;
	readonly properties?: EmailEventProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export class testBaseAccounts_flightingRings
	extends ArmResource<testBaseAccounts_flightingRingsComponentInputs>
	implements testBaseAccounts_flightingRingsComponentOutputs
{
	constructor(entity: ADKEntity, options: testBaseAccounts_flightingRingsComponentInputs) {
		super(entity, options.name, "Microsoft.TestBase/testBaseAccounts/flightingRings", "2020-12-16-preview", options);
	}
	public readonly apiVersion: "2020-12-16-preview";
	public readonly id: string;
	public readonly type: "Microsoft.TestBase/testBaseAccounts/flightingRings";
}
export interface testBaseAccounts_flightingRingsComponentOutputs {
	readonly apiVersion: "2020-12-16-preview";
	readonly id: string;
	readonly type: "Microsoft.TestBase/testBaseAccounts/flightingRings";
}
export interface testBaseAccounts_flightingRingsComponentInputs {
	readonly name: string;
	readonly properties?: FlightingRingProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export class testBaseAccounts_packages
	extends ArmResource<testBaseAccounts_packagesComponentInputs>
	implements testBaseAccounts_packagesComponentOutputs
{
	constructor(entity: ADKEntity, options: testBaseAccounts_packagesComponentInputs) {
		super(entity, options.name, "Microsoft.TestBase/testBaseAccounts/packages", "2020-12-16-preview", options);
	}
	public readonly apiVersion: "2020-12-16-preview";
	public readonly id: string;
	public readonly type: "Microsoft.TestBase/testBaseAccounts/packages";
}
export interface testBaseAccounts_packagesComponentOutputs {
	readonly apiVersion: "2020-12-16-preview";
	readonly id: string;
	readonly type: "Microsoft.TestBase/testBaseAccounts/packages";
}
export interface testBaseAccounts_packagesComponentInputs {
	readonly etag?: string | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties?: PackageProperties | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: Tags | undefined;
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
			"2020-12-16-preview",
			options,
		);
	}
	public readonly apiVersion: "2020-12-16-preview";
	public readonly id: string;
	public readonly type: "Microsoft.TestBase/testBaseAccounts/packages/favoriteProcesses";
}
export interface testBaseAccounts_packages_favoriteProcessesComponentOutputs {
	readonly apiVersion: "2020-12-16-preview";
	readonly id: string;
	readonly type: "Microsoft.TestBase/testBaseAccounts/packages/favoriteProcesses";
}
export interface testBaseAccounts_packages_favoriteProcessesComponentInputs {
	readonly name: string;
	readonly properties?: FavoriteProcessProperties | undefined;
	readonly systemData?: SystemData | undefined;
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
			"2020-12-16-preview",
			options,
		);
	}
	public readonly apiVersion: "2020-12-16-preview";
	public readonly id: string;
	public readonly type: "Microsoft.TestBase/testBaseAccounts/packages/osUpdates";
}
export interface testBaseAccounts_packages_osUpdatesComponentOutputs {
	readonly apiVersion: "2020-12-16-preview";
	readonly id: string;
	readonly type: "Microsoft.TestBase/testBaseAccounts/packages/osUpdates";
}
export interface testBaseAccounts_packages_osUpdatesComponentInputs {
	readonly name: string;
	readonly properties?: OSUpdateProperties | undefined;
	readonly systemData?: SystemData | undefined;
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
			"2020-12-16-preview",
			options,
		);
	}
	public readonly apiVersion: "2020-12-16-preview";
	public readonly id: string;
	public readonly type: "Microsoft.TestBase/testBaseAccounts/packages/testResults";
}
export interface testBaseAccounts_packages_testResultsComponentOutputs {
	readonly apiVersion: "2020-12-16-preview";
	readonly id: string;
	readonly type: "Microsoft.TestBase/testBaseAccounts/packages/testResults";
}
export interface testBaseAccounts_packages_testResultsComponentInputs {
	readonly name: string;
	readonly properties?: TestResultProperties | undefined;
	readonly systemData?: SystemData | undefined;
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
			"2020-12-16-preview",
			options,
		);
	}
	public readonly apiVersion: "2020-12-16-preview";
	public readonly id: string;
	public readonly type: "Microsoft.TestBase/testBaseAccounts/packages/testResults/analysisResults";
}
export interface testBaseAccounts_packages_testResults_analysisResultsComponentOutputs {
	readonly apiVersion: "2020-12-16-preview";
	readonly id: string;
	readonly type: "Microsoft.TestBase/testBaseAccounts/packages/testResults/analysisResults";
}
export interface testBaseAccounts_packages_testResults_analysisResultsComponentInputs {
	readonly name: string;
	readonly properties?: AnalysisResultSingletonResourceProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export class testBaseAccounts_testSummaries
	extends ArmResource<testBaseAccounts_testSummariesComponentInputs>
	implements testBaseAccounts_testSummariesComponentOutputs
{
	constructor(entity: ADKEntity, options: testBaseAccounts_testSummariesComponentInputs) {
		super(entity, options.name, "Microsoft.TestBase/testBaseAccounts/testSummaries", "2020-12-16-preview", options);
	}
	public readonly apiVersion: "2020-12-16-preview";
	public readonly id: string;
	public readonly type: "Microsoft.TestBase/testBaseAccounts/testSummaries";
}
export interface testBaseAccounts_testSummariesComponentOutputs {
	readonly apiVersion: "2020-12-16-preview";
	readonly id: string;
	readonly type: "Microsoft.TestBase/testBaseAccounts/testSummaries";
}
export interface testBaseAccounts_testSummariesComponentInputs {
	readonly name: string;
	readonly properties?: TestSummaryProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export class testBaseAccounts_testTypes
	extends ArmResource<testBaseAccounts_testTypesComponentInputs>
	implements testBaseAccounts_testTypesComponentOutputs
{
	constructor(entity: ADKEntity, options: testBaseAccounts_testTypesComponentInputs) {
		super(entity, options.name, "Microsoft.TestBase/testBaseAccounts/testTypes", "2020-12-16-preview", options);
	}
	public readonly apiVersion: "2020-12-16-preview";
	public readonly id: string;
	public readonly type: "Microsoft.TestBase/testBaseAccounts/testTypes";
}
export interface testBaseAccounts_testTypesComponentOutputs {
	readonly apiVersion: "2020-12-16-preview";
	readonly id: string;
	readonly type: "Microsoft.TestBase/testBaseAccounts/testTypes";
}
export interface testBaseAccounts_testTypesComponentInputs {
	readonly name: string;
	readonly properties?: TestTypeProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export interface AnalysisResultSingletonResourceProperties {
	readonly grade?: ("Fail" | "None" | "NotAvailable" | "Pass") | undefined;
}
export interface AvailableOSProperties {
	readonly insiderChannel?: string | undefined;
	readonly osId?: string | undefined;
	readonly osName?: string | undefined;
	readonly osPlatform?: string | undefined;
	readonly osUpdateType?: string | undefined;
	readonly osVersion?: string | undefined;
}
export interface Command {
	readonly action: "Close" | "Custom" | "Install" | "Launch" | "Uninstall";
	readonly alwaysRun?: boolean | undefined;
	readonly applyUpdateBefore?: boolean | undefined;
	readonly content: string;
	readonly contentType: "File" | "Inline" | "Path";
	readonly maxRunTime?: number | undefined;
	readonly name: string;
	readonly restartAfter?: boolean | undefined;
	readonly runAsInteractive?: boolean | undefined;
	readonly runElevated?: boolean | undefined;
}
export interface CustomerEventProperties {
	readonly eventName: string;
	readonly receivers: NotificationEventReceiver[];
}
export interface DistributionGroupListReceiverValue {
	readonly distributionGroups?: string[] | undefined;
}
export interface EmailEventProperties {
	readonly displayName?: string | undefined;
	readonly eventId?: string | undefined;
	readonly eventName?: string | undefined;
}
export interface FavoriteProcessProperties {
	readonly actualProcessName: string;
}
export interface FlightingRingProperties {
	readonly actualFlightingRingName?: string | undefined;
}
export interface IdentifiedFailure {
	readonly category?: ("Infrastructure" | "None" | "OSUpdate" | "Package" | "Unidentified") | undefined;
	readonly errorMessage?: string | undefined;
	readonly failureId?: string | undefined;
	readonly guidance?: string | undefined;
}
export interface NotificationEventReceiver {
	readonly receiverType?: string | undefined;
	readonly receiverValue?: NotificationReceiverValue | undefined;
}
export interface NotificationReceiverValue {
	readonly distributionGroupListReceiverValue?: DistributionGroupListReceiverValue | undefined;
	readonly subscriptionReceiverValue?: SubscriptionReceiverValue | undefined;
	readonly userObjectReceiverValue?: UserObjectReceiverValue | undefined;
}
export interface OSUpdateProperties {
	readonly buildRevision?: string | undefined;
	readonly buildVersion?: string | undefined;
	readonly flightingRing?: string | undefined;
	readonly osName?: string | undefined;
	readonly release?: string | undefined;
	readonly releaseVersionDate?: string | undefined;
	readonly type?: ("FeatureUpdate" | "SecurityUpdate") | undefined;
}
export interface OSUpdatesTestSummary {
	readonly executionStatus?:
		| ("Completed" | "Failed" | "InProgress" | "Incomplete" | "None" | "NotExecuted" | "Processing" | "Succeeded")
		| undefined;
	readonly grade?: ("Fail" | "None" | "NotAvailable" | "Pass") | undefined;
	readonly osUpdateTestSummaries?: OSUpdateTestSummary[] | undefined;
	readonly testRunTime?: string | undefined;
	readonly testStatus?:
		| (
				| "Completed"
				| "DataProcessing"
				| "InfrastructureFailure"
				| "None"
				| "TestAndUpdateFailure"
				| "TestExecutionInProgress"
				| "TestFailure"
				| "UpdateFailure"
		  )
		| undefined;
}
export interface OSUpdateTestSummary {
	readonly buildRevision?: string | undefined;
	readonly buildVersion?: string | undefined;
	readonly executionStatus?:
		| ("Completed" | "Failed" | "InProgress" | "Incomplete" | "None" | "NotExecuted" | "Processing" | "Succeeded")
		| undefined;
	readonly flightingRing?: string | undefined;
	readonly grade?: ("Fail" | "None" | "NotAvailable" | "Pass") | undefined;
	readonly osName?: string | undefined;
	readonly releaseName?: string | undefined;
	readonly releaseVersionDate?: string | undefined;
	readonly testRunTime?: string | undefined;
	readonly testStatus?:
		| (
				| "Completed"
				| "DataProcessing"
				| "InfrastructureFailure"
				| "None"
				| "TestAndUpdateFailure"
				| "TestExecutionInProgress"
				| "TestFailure"
				| "UpdateFailure"
		  )
		| undefined;
	readonly testType?: string | undefined;
}
export interface PackageProperties {
	readonly applicationName: string;
	readonly blobPath: string;
	readonly flightingRing: string;
	readonly isEnabled?: boolean | undefined;
	readonly lastModifiedTime?: string | undefined;
	readonly packageStatus?:
		| (
				| "Deleted"
				| "Error"
				| "PreValidationCheckPass"
				| "Ready"
				| "Registered"
				| "Unknown"
				| "ValidatingPackage"
				| "ValidationLongerThanUsual"
				| "VerifyingPackage"
		  )
		| undefined;
	readonly provisioningState?:
		| ("Cancelled" | "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating")
		| undefined;
	readonly targetOSList: TargetOSInfo[];
	readonly tests: Test[];
	readonly testTypes?: ("FunctionalTest" | "OutOfBoxTest"[]) | undefined;
	readonly validationResults?: PackageValidationResult[] | undefined;
	readonly version: string;
}
export interface PackageValidationResult {
	readonly errors?: string[] | undefined;
	readonly isValid?: boolean | undefined;
	readonly validationName?: string | undefined;
}
export interface RegressionResult {
	readonly details?: string | undefined;
	readonly diff?: number | undefined;
	readonly fileName?: string | undefined;
	readonly grade?: ("Fail" | "None" | "NotAvailable" | "Pass") | undefined;
	readonly isRegressed?: boolean | undefined;
}
export interface RegressionTestDetails {
	readonly diff?: number | undefined;
	readonly isRegressed?: boolean | undefined;
}
export interface ReliabilityResult {
	readonly crashCount?: number | undefined;
	readonly crashRegressionGrade?: ("Fail" | "None" | "NotAvailable" | "Pass") | undefined;
	readonly crashRegressionTestDetails?: RegressionTestDetails | undefined;
	readonly fileName?: string | undefined;
	readonly hangCount?: number | undefined;
	readonly hangRegressionGrade?: ("Fail" | "None" | "NotAvailable" | "Pass") | undefined;
	readonly hangRegressionTestDetails?: RegressionTestDetails | undefined;
	readonly launchCount?: number | undefined;
	readonly regressionGrade?: ("Fail" | "None" | "NotAvailable" | "Pass") | undefined;
}
export interface ScriptExecutionResult {
	readonly endTime?: string | undefined;
	readonly exitCode?: number | undefined;
	readonly scriptName?: string | undefined;
	readonly startTime?: string | undefined;
	readonly timedOut?: boolean | undefined;
}
export interface SubscriptionReceiverValue {
	readonly role?: string | undefined;
	readonly subscriptionId?: string | undefined;
	readonly subscriptionName?: string | undefined;
}
export interface SystemData {
	readonly createdAt?: string | undefined;
	readonly createdBy?: string | undefined;
	readonly createdByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
	readonly lastModifiedAt?: string | undefined;
	readonly lastModifiedBy?: string | undefined;
	readonly lastModifiedByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
}
export interface Tags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface TargetOSInfo {
	readonly osUpdateType: string;
	readonly targetOSs: string[];
}
export interface Test {
	readonly commands: Command[];
	readonly isActive?: boolean | undefined;
	readonly testType: "FunctionalTest" | "OutOfBoxTest";
	readonly validationRunStatus?: ("Failed" | "Passed" | "Pending" | "Unknown") | undefined;
}
export interface TestAnalysisResult {
	readonly blobData?: string | undefined;
	readonly identifiedFailures?: IdentifiedFailure[] | undefined;
	readonly testAnalysisStatus?: ("Analyzing" | "Completed" | "Failed" | "None") | undefined;
}
export interface TestBaseAccountResourceProperties {
	readonly accessLevel?: string | undefined;
	readonly provisioningState?:
		| ("Cancelled" | "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating")
		| undefined;
	readonly sku: TestBaseAccountSKU;
}
export interface TestBaseAccountSKU {
	readonly capabilities?: TestBaseAccountSKUCapability[] | undefined;
	readonly locations?: string[] | undefined;
	readonly name: string;
	readonly resourceType?: string | undefined;
	readonly tier: "Standard";
}
export interface TestBaseAccountSKUCapability {
	readonly name: string;
	readonly value: string;
}
export interface TestResultAnalysisSummary {
	readonly analysisStatus?:
		| ("Available" | "Completed" | "Failed" | "InProgress" | "None" | "NotAvailable" | "Succeeded")
		| undefined;
	readonly grade?: ("Fail" | "None" | "NotAvailable" | "Pass") | undefined;
	readonly name?: string | undefined;
}
export interface TestResultProperties {
	readonly analysisSummaries?: TestResultAnalysisSummary[] | undefined;
	readonly applicationName?: string | undefined;
	readonly applicationVersion?: string | undefined;
	readonly baselineTestResultId?: string | undefined;
	readonly buildRevision?: string | undefined;
	readonly buildVersion?: string | undefined;
	readonly executionStatus?:
		| ("Completed" | "Failed" | "InProgress" | "Incomplete" | "None" | "NotExecuted" | "Processing" | "Succeeded")
		| undefined;
	readonly flightingRing?: string | undefined;
	readonly grade?: ("Fail" | "None" | "NotAvailable" | "Pass") | undefined;
	readonly isDownloadDataAvailable?: boolean | undefined;
	readonly isVideoAvailable?: boolean | undefined;
	readonly kbNumber?: string | undefined;
	readonly osName?: string | undefined;
	readonly packageId?: string | undefined;
	readonly packageVersion?: string | undefined;
	readonly releaseName?: string | undefined;
	readonly releaseVersionDate?: string | undefined;
	readonly testRunTime?: string | undefined;
	readonly testStatus?:
		| (
				| "Completed"
				| "DataProcessing"
				| "InfrastructureFailure"
				| "None"
				| "TestAndUpdateFailure"
				| "TestExecutionInProgress"
				| "TestFailure"
				| "UpdateFailure"
		  )
		| undefined;
	readonly testType?: string | undefined;
}
export interface TestSummaryProperties {
	readonly applicationName?: string | undefined;
	readonly applicationVersion?: string | undefined;
	readonly executionStatus?:
		| ("Completed" | "Failed" | "InProgress" | "Incomplete" | "None" | "NotExecuted" | "Processing" | "Succeeded")
		| undefined;
	readonly featureUpdatesTestSummary?: OSUpdatesTestSummary | undefined;
	readonly grade?: ("Fail" | "None" | "NotAvailable" | "Pass") | undefined;
	readonly packageId?: string | undefined;
	readonly securityUpdatesTestSummary?: OSUpdatesTestSummary | undefined;
	readonly testRunTime?: string | undefined;
	readonly testStatus?:
		| (
				| "Completed"
				| "DataProcessing"
				| "InfrastructureFailure"
				| "None"
				| "TestAndUpdateFailure"
				| "TestExecutionInProgress"
				| "TestFailure"
				| "UpdateFailure"
		  )
		| undefined;
	readonly testSummaryId?: string | undefined;
}
export interface TestTypeProperties {
	readonly actualTestTypeName?: string | undefined;
}
export interface UserObjectReceiverValue {
	readonly userObjectIds?: string[] | undefined;
}
export interface UtilizationBound {
	readonly percentile?: number | undefined;
	readonly value?: number | undefined;
}
export interface UtilizationEntry {
	readonly timestamp?: string | undefined;
	readonly value?: number | undefined;
}
export interface UtilizationResult {
	readonly lowerBound?: UtilizationBound | undefined;
	readonly process?: string | undefined;
	readonly upperBound?: UtilizationBound | undefined;
	readonly utilization?: UtilizationEntry[] | undefined;
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
