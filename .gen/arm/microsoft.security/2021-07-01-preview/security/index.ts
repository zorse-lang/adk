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
	readonly properties?: CustomAssessmentAutomationRequestPropertiesOrCustomAssessmentAutomationProperties | undefined;
	readonly systemData?: SystemData | undefined;
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
	readonly properties?: CustomEntityStoreAssignmentRequestPropertiesOrCustomEntityStoreAssignmentProperties | undefined;
	readonly systemData?: SystemData | undefined;
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
	readonly etag?: string | undefined;
	readonly kind?: string | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: SecurityConnectorProperties | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: Tags | undefined;
}
export interface CloudOffering {
	readonly description?: string | undefined;
}
export interface CspmMonitorAwsOfferingNativeCloudConnection {
	readonly cloudRoleArn?: string | undefined;
}
export interface CustomAssessmentAutomationRequestPropertiesOrCustomAssessmentAutomationProperties {
	readonly assessmentKey?: string | undefined;
	readonly compressedQuery?: string | undefined;
	readonly description?: string | undefined;
	readonly displayName?: string | undefined;
	readonly remediationDescription?: string | undefined;
	readonly severity?: ("High" | "Low" | "Medium") | undefined;
	readonly supportedCloud?: ("AWS" | "GCP") | undefined;
}
export interface CustomEntityStoreAssignmentRequestPropertiesOrCustomEntityStoreAssignmentProperties {
	readonly entityStoreDatabaseLink?: string | undefined;
	readonly principal?: string | undefined;
}
export interface DefenderForContainersAwsOfferingCloudWatchToKinesis {
	readonly cloudRoleArn?: string | undefined;
}
export interface DefenderForContainersAwsOfferingKinesisToS3 {
	readonly cloudRoleArn?: string | undefined;
}
export interface DefenderForContainersAwsOfferingKubernetesScubaReader {
	readonly cloudRoleArn?: string | undefined;
}
export interface DefenderForContainersAwsOfferingKubernetesService {
	readonly cloudRoleArn?: string | undefined;
}
export interface DefenderForServersAwsOfferingArcAutoProvisioning {
	readonly enabled?: boolean | undefined;
	readonly servicePrincipalSecretMetadata?:
		| DefenderForServersAwsOfferingArcAutoProvisioningServicePrincipalSecretMetadata
		| undefined;
}
export interface DefenderForServersAwsOfferingArcAutoProvisioningServicePrincipalSecretMetadata {
	readonly expiryDate?: string | undefined;
	readonly parameterNameInStore?: string | undefined;
	readonly parameterStoreRegion?: string | undefined;
}
export interface DefenderForServersAwsOfferingDefenderForServers {
	readonly cloudRoleArn?: string | undefined;
}
export interface InformationProtectionAwsOfferingInformationProtection {
	readonly cloudRoleArn?: string | undefined;
}
export interface SecurityConnectorProperties {
	readonly cloudName?: ("AWS" | "Azure" | "GCP") | undefined;
	readonly hierarchyIdentifier?: string | undefined;
	readonly offerings?: CloudOffering[] | undefined;
	readonly organizationalData?: SecurityConnectorPropertiesOrganizationalData | undefined;
}
export interface SecurityConnectorPropertiesOrganizationalData {
	readonly excludedAccountIds?: string[] | undefined;
	readonly organizationMembershipType?: ("Member" | "Organization") | undefined;
	readonly parentHierarchyId?: string | undefined;
	readonly stacksetName?: string | undefined;
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
export default {
	customAssessmentAutomations: customAssessmentAutomations,
	customEntityStoreAssignments: customEntityStoreAssignments,
	securityConnectors: securityConnectors,
};
