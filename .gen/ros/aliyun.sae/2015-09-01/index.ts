import { RosResource, Entity as ADKEntity } from "@zorse/adk";

export class Application extends RosResource<ApplicationComponentInputs> implements ApplicationComponentOutputs {
	constructor(entity: ADKEntity, options: ApplicationComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::SAE::Application", options);
	}
	public readonly AppId: any;
	public readonly ChangeOrderId: any;
}
export interface ApplicationComponentOutputs {
	readonly AppId: any;
	readonly ChangeOrderId: any;
}
export interface ApplicationComponentInputs {
	readonly AppName: string;
	readonly Cpu: number;
	readonly Memory: number;
	readonly NamespaceId: string;
	readonly PackageType: string;
	readonly Replicas: number;
	readonly AppDescription?: string | undefined;
	readonly Command?: string | undefined;
	readonly CommandArgs?: string | undefined;
	readonly CustomHostAlias?: string | undefined;
	readonly Deploy?: boolean | undefined;
	readonly EdasContainerVersion?: string | undefined;
	readonly Envs?: string | undefined;
	readonly ImageUrl?: string | undefined;
	readonly JarStartArgs?: string | undefined;
	readonly JarStartOptions?: string | undefined;
	readonly Jdk?: string | undefined;
	readonly Liveness?: string | undefined;
	readonly MountDesc?: string | undefined;
	readonly MountHost?: string | undefined;
	readonly NasId?: string | undefined;
	readonly PackageUrl?: string | undefined;
	readonly PackageVersion?: string | undefined;
	readonly PostStart?: string | undefined;
	readonly PreStop?: string | undefined;
	readonly Readiness?: string | undefined;
	readonly SecurityGroupId?: string | undefined;
	readonly SlsConfigs?: string | undefined;
	readonly Tags?: Tags[] | undefined;
	readonly Timezone?: string | undefined;
	readonly VpcId?: string | undefined;
	readonly VSwitchId?: string | undefined;
	readonly WarStartOptions?: string | undefined;
	readonly WebContainer?: string | undefined;
	readonly LogicalId: string;
}
export class Namespace extends RosResource<NamespaceComponentInputs> implements NamespaceComponentOutputs {
	constructor(entity: ADKEntity, options: NamespaceComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::SAE::Namespace", options);
	}
}
export interface NamespaceComponentOutputs {}
export interface NamespaceComponentInputs {
	readonly NamespaceId: any | string;
	readonly NamespaceName: string;
	readonly NamespaceDescription?: string | undefined;
	readonly LogicalId: string;
}
export class SlbBinding extends RosResource<SlbBindingComponentInputs> implements SlbBindingComponentOutputs {
	constructor(entity: ADKEntity, options: SlbBindingComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::SAE::SlbBinding", options);
	}
	public readonly ChangeOrderId: any;
}
export interface SlbBindingComponentOutputs {
	readonly ChangeOrderId: any;
}
export interface SlbBindingComponentInputs {
	readonly AppId: any | string;
	readonly Internet?: string | undefined;
	readonly InternetSlbId?: string | undefined;
	readonly Intranet?: string | undefined;
	readonly IntranetSlbId?: string | undefined;
	readonly LogicalId: string;
}
export interface Tags {
	readonly Value?: string | undefined;
	readonly Key: string;
}
export default {
	Application: Application,
	Namespace: Namespace,
	SlbBinding: SlbBinding,
};
