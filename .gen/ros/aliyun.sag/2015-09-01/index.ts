import { RosResource, Entity as ADKEntity } from "@zorse/adk";

export class ACL extends RosResource<ACLComponentInputs> implements ACLComponentOutputs {
	constructor(entity: ADKEntity, options: ACLComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::SAG::ACL", options);
	}
	public readonly AclId: any;
}
export interface ACLComponentOutputs {
	readonly AclId: any;
}
export interface ACLComponentInputs {
	readonly Name: string;
	readonly LogicalId: string;
}
export class ACLAssociation extends RosResource<ACLAssociationComponentInputs> implements ACLAssociationComponentOutputs {
	constructor(entity: ADKEntity, options: ACLAssociationComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::SAG::ACLAssociation", options);
	}
}
export interface ACLAssociationComponentOutputs {}
export interface ACLAssociationComponentInputs {
	readonly AclId: string;
	readonly SmartAGId: string;
	readonly LogicalId: string;
}
export class ACLRule extends RosResource<ACLRuleComponentInputs> implements ACLRuleComponentOutputs {
	constructor(entity: ADKEntity, options: ACLRuleComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::SAG::ACLRule", options);
	}
	public readonly AcrId: any;
}
export interface ACLRuleComponentOutputs {
	readonly AcrId: any;
}
export interface ACLRuleComponentInputs {
	readonly AclId: string;
	readonly DestCidr: string;
	readonly DestPortRange: string;
	readonly Direction: string;
	readonly IpProtocol: string;
	readonly Policy: string;
	readonly SourceCidr: string;
	readonly SourcePortRange: string;
	readonly Description?: string | undefined;
	readonly DpiGroupIds?: string[] | undefined;
	readonly DpiSignatureIds?: string[] | undefined;
	readonly Name?: string | undefined;
	readonly Priority?: number | undefined;
	readonly Type?: string | undefined;
	readonly LogicalId: string;
}
export class App extends RosResource<AppComponentInputs> implements AppComponentOutputs {
	constructor(entity: ADKEntity, options: AppComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::SAG::App", options);
	}
	public readonly OrderId: any;
	public readonly SmartAgId: any;
}
export interface AppComponentOutputs {
	readonly OrderId: any;
	readonly SmartAgId: any;
}
export interface AppComponentInputs {
	readonly AutoPay: boolean;
	readonly DataPlan: number;
	readonly Period: number;
	readonly UserCount: number;
	readonly ChargeType?: string | undefined;
	readonly LogicalId: string;
}
export class AppUser extends RosResource<AppUserComponentInputs> implements AppUserComponentOutputs {
	constructor(entity: ADKEntity, options: AppUserComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::SAG::AppUser", options);
	}
	public readonly SmartAgId: any;
}
export interface AppUserComponentOutputs {
	readonly SmartAgId: any;
}
export interface AppUserComponentInputs {
	readonly Bandwidth: number;
	readonly SmartAGId: string;
	readonly UserMail: string;
	readonly ClientIp?: string | undefined;
	readonly Disable?: boolean | undefined;
	readonly Password?: string | undefined;
	readonly UserName?: any | string;
	readonly LogicalId: string;
}
export class CloudConnectNetwork
	extends RosResource<CloudConnectNetworkComponentInputs>
	implements CloudConnectNetworkComponentOutputs
{
	constructor(entity: ADKEntity, options: CloudConnectNetworkComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::SAG::CloudConnectNetwork", options);
	}
	public readonly CcnId: any;
}
export interface CloudConnectNetworkComponentOutputs {
	readonly CcnId: any;
}
export interface CloudConnectNetworkComponentInputs {
	readonly Description?: string | undefined;
	readonly IsDefault?: boolean | undefined;
	readonly Name?: string | undefined;
	readonly Tags?: Tags[] | undefined;
	readonly LogicalId: string;
}
export class GrantCcnToCen extends RosResource<GrantCcnToCenComponentInputs> implements GrantCcnToCenComponentOutputs {
	constructor(entity: ADKEntity, options: GrantCcnToCenComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::SAG::GrantCcnToCen", options);
	}
}
export interface GrantCcnToCenComponentOutputs {}
export interface GrantCcnToCenComponentInputs {
	readonly CcnInstanceId: any | string;
	readonly CenInstanceId: any | string;
	readonly CenUid: string;
	readonly LogicalId: string;
}
export class Qos extends RosResource<QosComponentInputs> implements QosComponentOutputs {
	constructor(entity: ADKEntity, options: QosComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::SAG::Qos", options);
	}
	public readonly QosId: any;
}
export interface QosComponentOutputs {
	readonly QosId: any;
}
export interface QosComponentInputs {
	readonly QosName: string;
	readonly QosDescription?: string | undefined;
	readonly LogicalId: string;
}
export class QosAssociation extends RosResource<QosAssociationComponentInputs> implements QosAssociationComponentOutputs {
	constructor(entity: ADKEntity, options: QosAssociationComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::SAG::QosAssociation", options);
	}
	public readonly SmartAgId: any;
}
export interface QosAssociationComponentOutputs {
	readonly SmartAgId: any;
}
export interface QosAssociationComponentInputs {
	readonly QosId: any | string;
	readonly SmartAGId: string;
	readonly LogicalId: string;
}
export class QosCar extends RosResource<QosCarComponentInputs> implements QosCarComponentOutputs {
	constructor(entity: ADKEntity, options: QosCarComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::SAG::QosCar", options);
	}
	public readonly QosCarId: any;
}
export interface QosCarComponentOutputs {
	readonly QosCarId: any;
}
export interface QosCarComponentInputs {
	readonly LimitType: string;
	readonly Priority: number;
	readonly QosId: string;
	readonly Description?: string | undefined;
	readonly MaxBandwidthAbs?: number | undefined;
	readonly MaxBandwidthPercent?: number | undefined;
	readonly MinBandwidthAbs?: number | undefined;
	readonly MinBandwidthPercent?: number | undefined;
	readonly Name?: string | undefined;
	readonly PercentSourceType?: string | undefined;
	readonly LogicalId: string;
}
export class QosPolicy extends RosResource<QosPolicyComponentInputs> implements QosPolicyComponentOutputs {
	constructor(entity: ADKEntity, options: QosPolicyComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::SAG::QosPolicy", options);
	}
	public readonly QosPolicyId: any;
}
export interface QosPolicyComponentOutputs {
	readonly QosPolicyId: any;
}
export interface QosPolicyComponentInputs {
	readonly DestCidr: string;
	readonly DestPortRange: string;
	readonly IpProtocol: string;
	readonly Priority: number;
	readonly QosId: string;
	readonly SourceCidr: string;
	readonly SourcePortRange: string;
	readonly Description?: string | undefined;
	readonly DpiGroupIds?: string[] | undefined;
	readonly DpiSignatureIds?: string[] | undefined;
	readonly EndTime?: string | undefined;
	readonly Name?: string | undefined;
	readonly StartTime?: string | undefined;
	readonly LogicalId: string;
}
export class SerialNumberBinding
	extends RosResource<SerialNumberBindingComponentInputs>
	implements SerialNumberBindingComponentOutputs
{
	constructor(entity: ADKEntity, options: SerialNumberBindingComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::SAG::SerialNumberBinding", options);
	}
	public readonly SmartAgId: any;
}
export interface SerialNumberBindingComponentOutputs {
	readonly SmartAgId: any;
}
export interface SerialNumberBindingComponentInputs {
	readonly SerialNumber: string;
	readonly SmartAGId: string;
	readonly LogicalId: string;
}
export class SmartAccessGateway
	extends RosResource<SmartAccessGatewayComponentInputs>
	implements SmartAccessGatewayComponentOutputs
{
	constructor(entity: ADKEntity, options: SmartAccessGatewayComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::SAG::SmartAccessGateway", options);
	}
	public readonly OrderId: any;
	public readonly SmartAgId: any;
}
export interface SmartAccessGatewayComponentOutputs {
	readonly OrderId: any;
	readonly SmartAgId: any;
}
export interface SmartAccessGatewayComponentInputs {
	readonly BuyerMessage: string;
	readonly ChargeType: string;
	readonly HardWareSpec: string;
	readonly HaType: string;
	readonly MaxBandWidth: number;
	readonly Period: number;
	readonly ReceiverAddress: string;
	readonly ReceiverCity: string;
	readonly ReceiverCountry: string;
	readonly ReceiverDistrict: string;
	readonly ReceiverEmail: string;
	readonly ReceiverMobile: string;
	readonly ReceiverName: string;
	readonly ReceiverState: string;
	readonly ReceiverTown: string;
	readonly ReceiverZip: string;
	readonly Activate?: boolean | undefined;
	readonly AlreadyHaveSag?: boolean | undefined;
	readonly AutoPay?: boolean | undefined;
	readonly CidrBlock?: string | undefined;
	readonly Description?: string | undefined;
	readonly Name?: string | undefined;
	readonly ReceiverPhone?: string | undefined;
	readonly RoutingStrategy?: string | undefined;
	readonly SecurityLockThreshold?: number | undefined;
	readonly LogicalId: string;
}
export class SmartAccessGatewayBinding
	extends RosResource<SmartAccessGatewayBindingComponentInputs>
	implements SmartAccessGatewayBindingComponentOutputs
{
	constructor(entity: ADKEntity, options: SmartAccessGatewayBindingComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::SAG::SmartAccessGatewayBinding", options);
	}
	public readonly SmartAgId: any;
}
export interface SmartAccessGatewayBindingComponentOutputs {
	readonly SmartAgId: any;
}
export interface SmartAccessGatewayBindingComponentInputs {
	readonly CcnId: string;
	readonly SmartAGId: string;
	readonly LogicalId: string;
}
export interface Tags {
	readonly Value?: string | undefined;
	readonly Key: string;
}
export default {
	ACL: ACL,
	ACLAssociation: ACLAssociation,
	ACLRule: ACLRule,
	App: App,
	AppUser: AppUser,
	CloudConnectNetwork: CloudConnectNetwork,
	GrantCcnToCen: GrantCcnToCen,
	Qos: Qos,
	QosAssociation: QosAssociation,
	QosCar: QosCar,
	QosPolicy: QosPolicy,
	SerialNumberBinding: SerialNumberBinding,
	SmartAccessGateway: SmartAccessGateway,
	SmartAccessGatewayBinding: SmartAccessGatewayBinding,
};
