import { RosResource, Entity as ADKEntity } from "@zorse/adk";

export class Cluster extends RosResource<ClusterComponentInputs> implements ClusterComponentOutputs {
	constructor(entity: ADKEntity, options: ClusterComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::MSE::Cluster", options);
	}
	public readonly McpEnabled: any;
	public readonly InternetAddress: any;
	public readonly Cpu: any;
	public readonly InternetPort: any;
	public readonly ConfigAuthEnabled: any;
	public readonly IntranetPort: any;
	public readonly AppVersion: any;
	public readonly PayInfo: any;
	public readonly ConfigSecretEnabled: any;
	public readonly ClusterName: any;
	public readonly IntranetDomain: any;
	public readonly InstanceId: any;
	public readonly ClusterId: any;
	public readonly InternetDomain: any;
	public readonly AclId: any;
	public readonly HealthStatus: any;
	public readonly MemoryCapacity: any;
	public readonly IntranetAddress: any;
	public readonly DiskCapacity: any;
}
export interface ClusterComponentOutputs {
	readonly McpEnabled: any;
	readonly InternetAddress: any;
	readonly Cpu: any;
	readonly InternetPort: any;
	readonly ConfigAuthEnabled: any;
	readonly IntranetPort: any;
	readonly AppVersion: any;
	readonly PayInfo: any;
	readonly ConfigSecretEnabled: any;
	readonly ClusterName: any;
	readonly IntranetDomain: any;
	readonly InstanceId: any;
	readonly ClusterId: any;
	readonly InternetDomain: any;
	readonly AclId: any;
	readonly HealthStatus: any;
	readonly MemoryCapacity: any;
	readonly IntranetAddress: any;
	readonly DiskCapacity: any;
}
export interface ClusterComponentInputs {
	readonly ClusterSpecification: any | string;
	readonly ClusterType: any | string;
	readonly ClusterVersion: any | string;
	readonly InstanceCount: any | number;
	readonly NetType: any | string;
	readonly AcceptLanguage?: string | undefined;
	readonly AclEntryList?: any | string[];
	readonly ClusterAliasName?: any | string;
	readonly ConnectionType?: any | string;
	readonly DiskType?: any | string;
	readonly MseVersion?: any | string;
	readonly PrivateSlbSpecification?: string | undefined;
	readonly PubNetworkFlow?: any | string;
	readonly PubSlbSpecification?: string | undefined;
	readonly RequestPars?: string | undefined;
	readonly VpcId?: any | string;
	readonly VSwitchId?: any | string;
	readonly LogicalId: string;
}
export class Gateway extends RosResource<GatewayComponentInputs> implements GatewayComponentOutputs {
	constructor(entity: ADKEntity, options: GatewayComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::MSE::Gateway", options);
	}
	public readonly GatewayUniqueId: any;
	public readonly PaymentType: any;
}
export interface GatewayComponentOutputs {
	readonly GatewayUniqueId: any;
	readonly PaymentType: any;
}
export interface GatewayComponentInputs {
	readonly Replica: any | number;
	readonly Spec: any | string;
	readonly VpcId: any | string;
	readonly VSwitchId: any | string;
	readonly BackupVSwitchId?: any | string;
	readonly EnterpriseSecurityGroup?: string | undefined;
	readonly InternetSlbSpec?: string | undefined;
	readonly Name?: string | undefined;
	readonly SlbSpec?: string | undefined;
	readonly LogicalId: string;
}
export default {
	Cluster: Cluster,
	Gateway: Gateway,
};
