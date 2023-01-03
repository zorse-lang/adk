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
	readonly properties?: SourceControlConfigurationProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export interface ComplianceStatus {
	readonly complianceState?: ("Compliant" | "Failed" | "Installed" | "Noncompliant" | "Pending") | undefined;
	readonly lastConfigApplied?: string | undefined;
	readonly message?: string | undefined;
	readonly messageLevel?: ("Error" | "Information" | "Warning") | undefined;
}
export interface ConfigurationProtectedSettings {
	readonly "[ key: string ]"?: string | undefined;
}
export interface HelmOperatorProperties {
	readonly chartValues?: string | undefined;
	readonly chartVersion?: string | undefined;
}
export interface SourceControlConfigurationProperties {
	readonly complianceStatus?: ComplianceStatus | undefined;
	readonly configurationProtectedSettings?: ConfigurationProtectedSettings | undefined;
	readonly enableHelmOperator?: boolean | undefined;
	readonly helmOperatorProperties?: HelmOperatorProperties | undefined;
	readonly operatorInstanceName?: string | undefined;
	readonly operatorNamespace?: string | undefined;
	readonly operatorParams?: string | undefined;
	readonly operatorScope?: ("cluster" | "namespace") | undefined;
	readonly operatorType?: "Flux" | undefined;
	readonly provisioningState?: ("Accepted" | "Deleting" | "Failed" | "Running" | "Succeeded") | undefined;
	readonly repositoryPublicKey?: string | undefined;
	readonly repositoryUrl?: string | undefined;
	readonly sshKnownHostsContents?: string | undefined;
}
export interface SystemData {
	readonly createdAt?: string | undefined;
	readonly createdBy?: string | undefined;
	readonly createdByType?: string | undefined;
	readonly lastModifiedAt?: string | undefined;
	readonly lastModifiedBy?: string | undefined;
	readonly lastModifiedByType?: string | undefined;
}
export default {
	sourceControlConfigurations: sourceControlConfigurations,
};
