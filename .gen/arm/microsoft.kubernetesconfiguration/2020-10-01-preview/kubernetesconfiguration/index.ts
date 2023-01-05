import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class sourceControlConfigurations
	extends ArmResource<sourceControlConfigurationsComponentInputs>
	implements sourceControlConfigurationsComponentOutputs
{
	constructor(entity: ADKEntity, options: sourceControlConfigurationsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.KubernetesConfiguration/sourceControlConfigurations",
			"2020-10-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2020-10-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.KubernetesConfiguration/sourceControlConfigurations";
}
export interface sourceControlConfigurationsComponentOutputs {
	readonly apiVersion: "2020-10-01-preview";
	readonly id: string;
	readonly type: "Microsoft.KubernetesConfiguration/sourceControlConfigurations";
}
export interface sourceControlConfigurationsComponentInputs {
	readonly name: string;
	readonly properties?: SourceControlConfigurationProperties;
	readonly systemData?: SystemData;
}
export interface ComplianceStatus {
	readonly complianceState?: "Compliant" | "Failed" | "Installed" | "Noncompliant" | "Pending";
	readonly lastConfigApplied?: string;
	readonly message?: string;
	readonly messageLevel?: "Error" | "Information" | "Warning";
}
export interface ConfigurationProtectedSettings {
	readonly [key: string]: string;
}
export interface HelmOperatorProperties {
	readonly chartValues?: string;
	readonly chartVersion?: string;
}
export interface SourceControlConfigurationProperties {
	readonly complianceStatus?: ComplianceStatus;
	readonly configurationProtectedSettings?: ConfigurationProtectedSettings;
	readonly enableHelmOperator?: boolean;
	readonly helmOperatorProperties?: HelmOperatorProperties;
	readonly operatorInstanceName?: string;
	readonly operatorNamespace?: string;
	readonly operatorParams?: string;
	readonly operatorScope?: "cluster" | "namespace";
	readonly operatorType?: "Flux";
	readonly provisioningState?: "Accepted" | "Deleting" | "Failed" | "Running" | "Succeeded";
	readonly repositoryPublicKey?: string;
	readonly repositoryUrl?: string;
	readonly sshKnownHostsContents?: string;
}
export interface SystemData {
	readonly createdAt?: string;
	readonly createdBy?: string;
	readonly createdByType?: string;
	readonly lastModifiedAt?: string;
	readonly lastModifiedBy?: string;
	readonly lastModifiedByType?: string;
}
export default {
	sourceControlConfigurations: sourceControlConfigurations,
};
