import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class containerServices
	extends ArmResource<containerServicesComponentInputs>
	implements containerServicesComponentOutputs
{
	constructor(entity: ADKEntity, options: containerServicesComponentInputs) {
		super(entity, options.name, "Microsoft.ContainerService/containerServices", "2016-09-30", options);
	}
	public readonly apiVersion: "2016-09-30";
	public readonly id: string;
	public readonly type: "Microsoft.ContainerService/containerServices";
}
export interface containerServicesComponentOutputs {
	readonly apiVersion: "2016-09-30";
	readonly id: string;
	readonly type: "Microsoft.ContainerService/containerServices";
}
export interface containerServicesComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: ContainerServiceProperties | undefined;
	readonly tags?: ResourceTags | undefined;
}
export interface ContainerServiceAgentPoolProfile {
	readonly count: number;
	readonly dnsPrefix: string;
	readonly fqdn?: string | undefined;
	readonly name: string;
	readonly vmSize:
		| "Standard_A0"
		| "Standard_A1"
		| "Standard_A10"
		| "Standard_A11"
		| "Standard_A2"
		| "Standard_A3"
		| "Standard_A4"
		| "Standard_A5"
		| "Standard_A6"
		| "Standard_A7"
		| "Standard_A8"
		| "Standard_A9"
		| "Standard_D1"
		| "Standard_D11"
		| "Standard_D11_v2"
		| "Standard_D12"
		| "Standard_D12_v2"
		| "Standard_D13"
		| "Standard_D13_v2"
		| "Standard_D14"
		| "Standard_D14_v2"
		| "Standard_D1_v2"
		| "Standard_D2"
		| "Standard_D2_v2"
		| "Standard_D3"
		| "Standard_D3_v2"
		| "Standard_D4"
		| "Standard_D4_v2"
		| "Standard_D5_v2"
		| "Standard_DS1"
		| "Standard_DS11"
		| "Standard_DS12"
		| "Standard_DS13"
		| "Standard_DS14"
		| "Standard_DS2"
		| "Standard_DS3"
		| "Standard_DS4"
		| "Standard_G1"
		| "Standard_G2"
		| "Standard_G3"
		| "Standard_G4"
		| "Standard_G5"
		| "Standard_GS1"
		| "Standard_GS2"
		| "Standard_GS3"
		| "Standard_GS4"
		| "Standard_GS5";
}
export interface ContainerServiceCustomProfile {
	readonly orchestrator: string;
}
export interface ContainerServiceDiagnosticsProfile {
	readonly vmDiagnostics: ContainerServiceVMDiagnostics;
}
export interface ContainerServiceLinuxProfile {
	readonly adminUsername: string;
	readonly ssh: ContainerServiceSshConfiguration;
}
export interface ContainerServiceMasterProfile {
	readonly count?: number | undefined;
	readonly dnsPrefix: string;
	readonly fqdn?: string | undefined;
}
export interface ContainerServiceOrchestratorProfile {
	readonly orchestratorType: "Custom" | "DCOS" | "Kubernetes";
}
export interface ContainerServicePrincipalProfile {
	readonly clientId: string;
	readonly secret: string;
}
export interface ContainerServiceProperties {
	readonly agentPoolProfiles: ContainerServiceAgentPoolProfile[];
	readonly customProfile?: ContainerServiceCustomProfile | undefined;
	readonly diagnosticsProfile?: ContainerServiceDiagnosticsProfile | undefined;
	readonly linuxProfile: ContainerServiceLinuxProfile;
	readonly masterProfile: ContainerServiceMasterProfile;
	readonly orchestratorProfile?: ContainerServiceOrchestratorProfile | undefined;
	readonly provisioningState?: string | undefined;
	readonly servicePrincipalProfile?: ContainerServicePrincipalProfile | undefined;
	readonly windowsProfile?: ContainerServiceWindowsProfile | undefined;
}
export interface ContainerServiceSshConfiguration {
	readonly publicKeys: ContainerServiceSshPublicKey[];
}
export interface ContainerServiceSshPublicKey {
	readonly keyData: string;
}
export interface ContainerServiceVMDiagnostics {
	readonly enabled: boolean;
	readonly storageUri?: string | undefined;
}
export interface ContainerServiceWindowsProfile {
	readonly adminPassword: string;
	readonly adminUsername: string;
}
export interface ResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export default {
	containerServices: containerServices,
};
