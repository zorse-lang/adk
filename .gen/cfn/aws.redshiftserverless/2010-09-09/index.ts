import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class Namespace extends CfnResource<NamespaceComponentInputs> implements NamespaceComponentOutputs {
	constructor(entity: ADKEntity, options: NamespaceComponentInputs) {
		super(entity, options.LogicalId, "AWS::RedshiftServerless::Namespace", options);
	}
	public readonly NamespaceAdminUsername: string;
	public readonly NamespaceCreationDate: string;
	public readonly NamespaceDbName: string;
	public readonly NamespaceDefaultIamRoleArn: string;
	public readonly NamespaceIamRoles: string[];
	public readonly NamespaceKmsKeyId: string;
	public readonly NamespaceLogExports: string[];
	public readonly NamespaceNamespaceArn: string;
	public readonly NamespaceNamespaceId: string;
	public readonly NamespaceNamespaceName: string;
	public readonly NamespaceStatus: string;
}
export interface NamespaceComponentOutputs {
	readonly NamespaceAdminUsername: string;
	readonly NamespaceCreationDate: string;
	readonly NamespaceDbName: string;
	readonly NamespaceDefaultIamRoleArn: string;
	readonly NamespaceIamRoles: string[];
	readonly NamespaceKmsKeyId: string;
	readonly NamespaceLogExports: string[];
	readonly NamespaceNamespaceArn: string;
	readonly NamespaceNamespaceId: string;
	readonly NamespaceNamespaceName: string;
	readonly NamespaceStatus: string;
}
export interface NamespaceComponentInputs {
	readonly NamespaceName: string;
	readonly AdminUsername?: string | undefined;
	readonly AdminUserPassword?: string | undefined;
	readonly DbName?: string | undefined;
	readonly DefaultIamRoleArn?: string | undefined;
	readonly FinalSnapshotName?: string | undefined;
	readonly FinalSnapshotRetentionPeriod?: number | undefined;
	readonly IamRoles?: string[] | undefined;
	readonly KmsKeyId?: string | undefined;
	readonly LogExports?: string[] | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export class Workgroup extends CfnResource<WorkgroupComponentInputs> implements WorkgroupComponentOutputs {
	constructor(entity: ADKEntity, options: WorkgroupComponentInputs) {
		super(entity, options.LogicalId, "AWS::RedshiftServerless::Workgroup", options);
	}
	public readonly WorkgroupBaseCapacity: number;
	public readonly WorkgroupConfigParameters: Map<string, ConfigParameter>;
	public readonly WorkgroupCreationDate: string;
	public readonly WorkgroupEndpointAddress: string;
	public readonly WorkgroupEndpointPort: number;
	public readonly WorkgroupEndpointVpcEndpoints: Map<string, VpcEndpoint>;
	public readonly WorkgroupEnhancedVpcRouting: boolean;
	public readonly WorkgroupNamespaceName: string;
	public readonly WorkgroupPubliclyAccessible: boolean;
	public readonly WorkgroupSecurityGroupIds: string[];
	public readonly WorkgroupStatus: string;
	public readonly WorkgroupSubnetIds: string[];
	public readonly WorkgroupWorkgroupArn: string;
	public readonly WorkgroupWorkgroupId: string;
	public readonly WorkgroupWorkgroupName: string;
}
export interface WorkgroupComponentOutputs {
	readonly WorkgroupBaseCapacity: number;
	readonly WorkgroupConfigParameters: Map<string, ConfigParameter>;
	readonly WorkgroupCreationDate: string;
	readonly WorkgroupEndpointAddress: string;
	readonly WorkgroupEndpointPort: number;
	readonly WorkgroupEndpointVpcEndpoints: Map<string, VpcEndpoint>;
	readonly WorkgroupEnhancedVpcRouting: boolean;
	readonly WorkgroupNamespaceName: string;
	readonly WorkgroupPubliclyAccessible: boolean;
	readonly WorkgroupSecurityGroupIds: string[];
	readonly WorkgroupStatus: string;
	readonly WorkgroupSubnetIds: string[];
	readonly WorkgroupWorkgroupArn: string;
	readonly WorkgroupWorkgroupId: string;
	readonly WorkgroupWorkgroupName: string;
}
export interface WorkgroupComponentInputs {
	readonly WorkgroupName: string;
	readonly BaseCapacity?: number | undefined;
	readonly ConfigParameters?: ConfigParameter[] | undefined;
	readonly EnhancedVpcRouting?: boolean | undefined;
	readonly NamespaceName?: string | undefined;
	readonly PubliclyAccessible?: boolean | undefined;
	readonly SecurityGroupIds?: string[] | undefined;
	readonly SubnetIds?: string[] | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export interface Namespace {
	readonly AdminUsername?: string | undefined;
	readonly CreationDate?: string | undefined;
	readonly DbName?: string | undefined;
	readonly DefaultIamRoleArn?: string | undefined;
	readonly IamRoles?: string[] | undefined;
	readonly KmsKeyId?: string | undefined;
	readonly LogExports?: string[] | undefined;
	readonly NamespaceArn?: string | undefined;
	readonly NamespaceId?: string | undefined;
	readonly NamespaceName?: string | undefined;
	readonly Status?: string | undefined;
}
export interface ConfigParameter {
	readonly ParameterKey?: string | undefined;
	readonly ParameterValue?: string | undefined;
}
export interface Endpoint {
	readonly Address?: string | undefined;
	readonly Port?: number | undefined;
	readonly VpcEndpoints?: VpcEndpoint[] | undefined;
}
export interface NetworkInterface {
	readonly AvailabilityZone?: string | undefined;
	readonly NetworkInterfaceId?: string | undefined;
	readonly PrivateIpAddress?: string | undefined;
	readonly SubnetId?: string | undefined;
}
export interface VpcEndpoint {
	readonly NetworkInterfaces?: NetworkInterface[] | undefined;
	readonly VpcEndpointId?: string | undefined;
	readonly VpcId?: string | undefined;
}
export interface Workgroup {
	readonly BaseCapacity?: number | undefined;
	readonly ConfigParameters?: ConfigParameter[] | undefined;
	readonly CreationDate?: string | undefined;
	readonly Endpoint?: Endpoint | undefined;
	readonly EnhancedVpcRouting?: boolean | undefined;
	readonly NamespaceName?: string | undefined;
	readonly PubliclyAccessible?: boolean | undefined;
	readonly SecurityGroupIds?: string[] | undefined;
	readonly Status?: string | undefined;
	readonly SubnetIds?: string[] | undefined;
	readonly WorkgroupArn?: string | undefined;
	readonly WorkgroupId?: string | undefined;
	readonly WorkgroupName?: string | undefined;
}
export default {
	Namespace: Namespace,
	Workgroup: Workgroup,
};
