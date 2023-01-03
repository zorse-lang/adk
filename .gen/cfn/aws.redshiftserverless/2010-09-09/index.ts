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
	readonly AdminUsername?: (string | undefined) | undefined;
	readonly AdminUserPassword?: (string | undefined) | undefined;
	readonly DbName?: (string | undefined) | undefined;
	readonly DefaultIamRoleArn?: (string | undefined) | undefined;
	readonly FinalSnapshotName?: (string | undefined) | undefined;
	readonly FinalSnapshotRetentionPeriod?: (number | undefined) | undefined;
	readonly IamRoles?: (string[] | undefined) | undefined;
	readonly KmsKeyId?: (string | undefined) | undefined;
	readonly LogExports?: (string[] | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
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
	readonly BaseCapacity?: (number | undefined) | undefined;
	readonly ConfigParameters?: (ConfigParameter[] | undefined) | undefined;
	readonly EnhancedVpcRouting?: (boolean | undefined) | undefined;
	readonly NamespaceName?: (string | undefined) | undefined;
	readonly PubliclyAccessible?: (boolean | undefined) | undefined;
	readonly SecurityGroupIds?: (string[] | undefined) | undefined;
	readonly SubnetIds?: (string[] | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly LogicalId: string;
}
export interface Namespace {
	readonly AdminUsername?: (string | undefined) | undefined;
	readonly CreationDate?: (string | undefined) | undefined;
	readonly DbName?: (string | undefined) | undefined;
	readonly DefaultIamRoleArn?: (string | undefined) | undefined;
	readonly IamRoles?: (string[] | undefined) | undefined;
	readonly KmsKeyId?: (string | undefined) | undefined;
	readonly LogExports?: (string[] | undefined) | undefined;
	readonly NamespaceArn?: (string | undefined) | undefined;
	readonly NamespaceId?: (string | undefined) | undefined;
	readonly NamespaceName?: (string | undefined) | undefined;
	readonly Status?: (string | undefined) | undefined;
}
export interface ConfigParameter {
	readonly ParameterKey?: (string | undefined) | undefined;
	readonly ParameterValue?: (string | undefined) | undefined;
}
export interface Endpoint {
	readonly Address?: (string | undefined) | undefined;
	readonly Port?: (number | undefined) | undefined;
	readonly VpcEndpoints?: (VpcEndpoint[] | undefined) | undefined;
}
export interface NetworkInterface {
	readonly AvailabilityZone?: (string | undefined) | undefined;
	readonly NetworkInterfaceId?: (string | undefined) | undefined;
	readonly PrivateIpAddress?: (string | undefined) | undefined;
	readonly SubnetId?: (string | undefined) | undefined;
}
export interface VpcEndpoint {
	readonly NetworkInterfaces?: (NetworkInterface[] | undefined) | undefined;
	readonly VpcEndpointId?: (string | undefined) | undefined;
	readonly VpcId?: (string | undefined) | undefined;
}
export interface Workgroup {
	readonly BaseCapacity?: (number | undefined) | undefined;
	readonly ConfigParameters?: (ConfigParameter[] | undefined) | undefined;
	readonly CreationDate?: (string | undefined) | undefined;
	readonly Endpoint?: (Endpoint | undefined) | undefined;
	readonly EnhancedVpcRouting?: (boolean | undefined) | undefined;
	readonly NamespaceName?: (string | undefined) | undefined;
	readonly PubliclyAccessible?: (boolean | undefined) | undefined;
	readonly SecurityGroupIds?: (string[] | undefined) | undefined;
	readonly Status?: (string | undefined) | undefined;
	readonly SubnetIds?: (string[] | undefined) | undefined;
	readonly WorkgroupArn?: (string | undefined) | undefined;
	readonly WorkgroupId?: (string | undefined) | undefined;
	readonly WorkgroupName?: (string | undefined) | undefined;
}
export default {
	Namespace: Namespace,
	Workgroup: Workgroup,
};
