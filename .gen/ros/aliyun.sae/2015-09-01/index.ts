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
	readonly AppDescription?: (string | undefined) | undefined;
	readonly Command?: (string | undefined) | undefined;
	readonly CommandArgs?: (string | undefined) | undefined;
	readonly CustomHostAlias?: (string | undefined) | undefined;
	readonly Deploy?: (boolean | undefined) | undefined;
	readonly EdasContainerVersion?: (string | undefined) | undefined;
	readonly Envs?: (string | undefined) | undefined;
	readonly ImageUrl?: (string | undefined) | undefined;
	readonly JarStartArgs?: (string | undefined) | undefined;
	readonly JarStartOptions?: (string | undefined) | undefined;
	readonly Jdk?: (string | undefined) | undefined;
	readonly Liveness?: (string | undefined) | undefined;
	readonly MountDesc?: (string | undefined) | undefined;
	readonly MountHost?: (string | undefined) | undefined;
	readonly NasId?: (string | undefined) | undefined;
	readonly PackageUrl?: (string | undefined) | undefined;
	readonly PackageVersion?: (string | undefined) | undefined;
	readonly PostStart?: (string | undefined) | undefined;
	readonly PreStop?: (string | undefined) | undefined;
	readonly Readiness?: (string | undefined) | undefined;
	readonly SecurityGroupId?: (string | undefined) | undefined;
	readonly SlsConfigs?: (string | undefined) | undefined;
	readonly Tags?: (Tags[] | undefined) | undefined;
	readonly Timezone?: (string | undefined) | undefined;
	readonly VpcId?: (string | undefined) | undefined;
	readonly VSwitchId?: (string | undefined) | undefined;
	readonly WarStartOptions?: (string | undefined) | undefined;
	readonly WebContainer?: (string | undefined) | undefined;
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
	readonly NamespaceDescription?: (string | undefined) | undefined;
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
	readonly Internet?: (string | undefined) | undefined;
	readonly InternetSlbId?: (string | undefined) | undefined;
	readonly Intranet?: (string | undefined) | undefined;
	readonly IntranetSlbId?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export interface Tags {
	readonly Value?: (string | undefined) | undefined;
	readonly Key: string;
}
export default {
	Application: Application,
	Namespace: Namespace,
	SlbBinding: SlbBinding,
};
