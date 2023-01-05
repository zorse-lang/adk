import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class customAssessmentAutomations
	extends ArmResource<customAssessmentAutomationsComponentInputs>
	implements customAssessmentAutomationsComponentOutputs
{
	constructor(entity: ADKEntity, options: customAssessmentAutomationsComponentInputs) {
		super(entity, options.name, "Microsoft.Security/customAssessmentAutomations", "2021-07-01-preview", options);
	}
	public readonly apiVersion: "2021-07-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Security/customAssessmentAutomations";
}
export interface customAssessmentAutomationsComponentOutputs {
	readonly apiVersion: "2021-07-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Security/customAssessmentAutomations";
}
export interface customAssessmentAutomationsComponentInputs {
	readonly name: string;
	readonly properties?: CustomAssessmentAutomationRequestPropertiesOrCustomAssessmentAutomationProperties;
	readonly systemData?: SystemData;
}
export class customEntityStoreAssignments
	extends ArmResource<customEntityStoreAssignmentsComponentInputs>
	implements customEntityStoreAssignmentsComponentOutputs
{
	constructor(entity: ADKEntity, options: customEntityStoreAssignmentsComponentInputs) {
		super(entity, options.name, "Microsoft.Security/customEntityStoreAssignments", "2021-07-01-preview", options);
	}
	public readonly apiVersion: "2021-07-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Security/customEntityStoreAssignments";
}
export interface customEntityStoreAssignmentsComponentOutputs {
	readonly apiVersion: "2021-07-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Security/customEntityStoreAssignments";
}
export interface customEntityStoreAssignmentsComponentInputs {
	readonly name: string;
	readonly properties?: CustomEntityStoreAssignmentRequestPropertiesOrCustomEntityStoreAssignmentProperties;
	readonly systemData?: SystemData;
}
export class securityConnectors
	extends ArmResource<securityConnectorsComponentInputs>
	implements securityConnectorsComponentOutputs
{
	constructor(entity: ADKEntity, options: securityConnectorsComponentInputs) {
		super(entity, options.name, "Microsoft.Security/securityConnectors", "2021-07-01-preview", options);
	}
	public readonly apiVersion: "2021-07-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Security/securityConnectors";
}
export interface securityConnectorsComponentOutputs {
	readonly apiVersion: "2021-07-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Security/securityConnectors";
}
export interface securityConnectorsComponentInputs {
	readonly etag?: string;
	readonly kind?: string;
	readonly location?: string;
	readonly name: string;
	readonly properties?: SecurityConnectorProperties;
	readonly systemData?: SystemData;
	readonly tags?: Tags;
}
export interface CloudOffering {
	readonly description?: string;
}
export interface CspmMonitorAwsOfferingNativeCloudConnection {
	readonly cloudRoleArn?: string;
}
export interface CustomAssessmentAutomationRequestPropertiesOrCustomAssessmentAutomationProperties {
	readonly assessmentKey?: string;
	readonly compressedQuery?: string;
	readonly description?: string;
	readonly displayName?: string;
	readonly remediationDescription?: string;
	readonly severity?: "High" | "Low" | "Medium";
	readonly supportedCloud?: "AWS" | "GCP";
}
export interface CustomEntityStoreAssignmentRequestPropertiesOrCustomEntityStoreAssignmentProperties {
	readonly entityStoreDatabaseLink?: string;
	readonly principal?: string;
}
export interface DefenderForContainersAwsOfferingCloudWatchToKinesis {
	readonly cloudRoleArn?: string;
}
export interface DefenderForContainersAwsOfferingKinesisToS3 {
	readonly cloudRoleArn?: string;
}
export interface DefenderForContainersAwsOfferingKubernetesScubaReader {
	readonly cloudRoleArn?: string;
}
export interface DefenderForContainersAwsOfferingKubernetesService {
	readonly cloudRoleArn?: string;
}
export interface DefenderForServersAwsOfferingArcAutoProvisioning {
	readonly enabled?: boolean;
	readonly servicePrincipalSecretMetadata?: DefenderForServersAwsOfferingArcAutoProvisioningServicePrincipalSecretMetadata;
}
export interface DefenderForServersAwsOfferingArcAutoProvisioningServicePrincipalSecretMetadata {
	readonly expiryDate?: string;
	readonly parameterNameInStore?: string;
	readonly parameterStoreRegion?: string;
}
export interface DefenderForServersAwsOfferingDefenderForServers {
	readonly cloudRoleArn?: string;
}
export interface InformationProtectionAwsOfferingInformationProtection {
	readonly cloudRoleArn?: string;
}
export interface SecurityConnectorProperties {
	readonly cloudName?: "AWS" | "Azure" | "GCP";
	readonly hierarchyIdentifier?: string;
	readonly offerings?: CloudOffering[];
	readonly organizationalData?: SecurityConnectorPropertiesOrganizationalData;
}
export interface SecurityConnectorPropertiesOrganizationalData {
	readonly excludedAccountIds?: string[];
	readonly organizationMembershipType?: "Member" | "Organization";
	readonly parentHierarchyId?: string;
	readonly stacksetName?: string;
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
export default {
	customAssessmentAutomations: customAssessmentAutomations,
	customEntityStoreAssignments: customEntityStoreAssignments,
	securityConnectors: securityConnectors,
};
