import { RosResource, Entity as ADKEntity } from "@zorse/adk";

export class CenBandwidthLimit
	extends RosResource<CenBandwidthLimitComponentInputs>
	implements CenBandwidthLimitComponentOutputs
{
	constructor(entity: ADKEntity, options: CenBandwidthLimitComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::CEN::CenBandwidthLimit", options);
	}
}
export interface CenBandwidthLimitComponentOutputs {}
export interface CenBandwidthLimitComponentInputs {
	readonly BandwidthLimit: number;
	readonly CenId: string;
	readonly LocalRegionId: string;
	readonly OppositeRegionId: string;
	readonly LogicalId: string;
}
export class CenBandwidthPackage
	extends RosResource<CenBandwidthPackageComponentInputs>
	implements CenBandwidthPackageComponentOutputs
{
	constructor(entity: ADKEntity, options: CenBandwidthPackageComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::CEN::CenBandwidthPackage", options);
	}
	public readonly CenBandwidthPackageId: any;
}
export interface CenBandwidthPackageComponentOutputs {
	readonly CenBandwidthPackageId: any;
}
export interface CenBandwidthPackageComponentInputs {
	readonly Bandwidth: number;
	readonly GeographicRegionAId: string;
	readonly GeographicRegionBId: string;
	readonly AutoPay?: boolean | undefined;
	readonly AutoRenew?: boolean | undefined;
	readonly AutoRenewDuration?: number | undefined;
	readonly BandwidthPackageChargeType?: string | undefined;
	readonly Description?: string | undefined;
	readonly Name?: string | undefined;
	readonly Period?: number | undefined;
	readonly PricingCycle?: string | undefined;
	readonly ResourceGroupId?: string | undefined;
	readonly LogicalId: string;
}
export class CenBandwidthPackageAssociation
	extends RosResource<CenBandwidthPackageAssociationComponentInputs>
	implements CenBandwidthPackageAssociationComponentOutputs
{
	constructor(entity: ADKEntity, options: CenBandwidthPackageAssociationComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::CEN::CenBandwidthPackageAssociation", options);
	}
}
export interface CenBandwidthPackageAssociationComponentOutputs {}
export interface CenBandwidthPackageAssociationComponentInputs {
	readonly CenBandwidthPackageId: string;
	readonly CenId: string;
	readonly LogicalId: string;
}
export class CenInstance extends RosResource<CenInstanceComponentInputs> implements CenInstanceComponentOutputs {
	constructor(entity: ADKEntity, options: CenInstanceComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::CEN::CenInstance", options);
	}
	public readonly CenId: any;
}
export interface CenInstanceComponentOutputs {
	readonly CenId: any;
}
export interface CenInstanceComponentInputs {
	readonly Description?: string | undefined;
	readonly Name?: string | undefined;
	readonly ProtectionLevel?: string | undefined;
	readonly ResourceGroupId?: string | undefined;
	readonly Tags?: Tags[] | undefined;
	readonly LogicalId: string;
}
export class CenInstanceAttachment
	extends RosResource<CenInstanceAttachmentComponentInputs>
	implements CenInstanceAttachmentComponentOutputs
{
	constructor(entity: ADKEntity, options: CenInstanceAttachmentComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::CEN::CenInstanceAttachment", options);
	}
}
export interface CenInstanceAttachmentComponentOutputs {}
export interface CenInstanceAttachmentComponentInputs {
	readonly CenId: string;
	readonly ChildInstanceId: string;
	readonly ChildInstanceRegionId: string;
	readonly ChildInstanceType: string;
	readonly ChildInstanceOwnerId?: number | undefined;
	readonly LogicalId: string;
}
export class CenRouteMap extends RosResource<CenRouteMapComponentInputs> implements CenRouteMapComponentOutputs {
	constructor(entity: ADKEntity, options: CenRouteMapComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::CEN::CenRouteMap", options);
	}
	public readonly RouteMapId: any;
}
export interface CenRouteMapComponentOutputs {
	readonly RouteMapId: any;
}
export interface CenRouteMapComponentInputs {
	readonly CenId: string;
	readonly CenRegionId: string;
	readonly MapResult: string;
	readonly Priority: number;
	readonly TransmitDirection: string;
	readonly AsPathMatchMode?: string | undefined;
	readonly CidrMatchMode?: string | undefined;
	readonly CommunityMatchMode?: string | undefined;
	readonly CommunityOperateMode?: string | undefined;
	readonly Description?: string | undefined;
	readonly DestinationChildInstanceTypes?: string[] | undefined;
	readonly DestinationCidrBlocks?: string[] | undefined;
	readonly DestinationInstanceIds?: string[] | undefined;
	readonly DestinationInstanceIdsReverseMatch?: boolean | undefined;
	readonly DestinationRouteTableIds?: string[] | undefined;
	readonly MatchAsns?: string[] | undefined;
	readonly MatchCommunitySet?: string[] | undefined;
	readonly NextPriority?: number | undefined;
	readonly OperateCommunitySet?: string[] | undefined;
	readonly Preference?: number | undefined;
	readonly PrependAsPath?: string[] | undefined;
	readonly RouteTypes?: string[] | undefined;
	readonly SourceChildInstanceTypes?: string[] | undefined;
	readonly SourceInstanceIds?: string[] | undefined;
	readonly SourceInstanceIdsReverseMatch?: boolean | undefined;
	readonly SourceRegionIds?: string[] | undefined;
	readonly SourceRouteTableIds?: string[] | undefined;
	readonly LogicalId: string;
}
export class CenRouteService
	extends RosResource<CenRouteServiceComponentInputs>
	implements CenRouteServiceComponentOutputs
{
	constructor(entity: ADKEntity, options: CenRouteServiceComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::CEN::CenRouteService", options);
	}
	public readonly Id: any;
}
export interface CenRouteServiceComponentOutputs {
	readonly Id: any;
}
export interface CenRouteServiceComponentInputs {
	readonly AccessRegionId: string;
	readonly CenId: string;
	readonly Host: string;
	readonly HostRegionId: string;
	readonly HostVpcId: string;
	readonly ConflictIgnore?: boolean | undefined;
	readonly Description?: string | undefined;
	readonly LogicalId: string;
}
export class CenVbrHealthCheck
	extends RosResource<CenVbrHealthCheckComponentInputs>
	implements CenVbrHealthCheckComponentOutputs
{
	constructor(entity: ADKEntity, options: CenVbrHealthCheckComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::CEN::CenVbrHealthCheck", options);
	}
}
export interface CenVbrHealthCheckComponentOutputs {}
export interface CenVbrHealthCheckComponentInputs {
	readonly CenId: any | string;
	readonly HealthCheckTargetIp: any | string;
	readonly VbrInstanceId: any | string;
	readonly VbrInstanceRegionId: any | string;
	readonly HealthCheckInterval?: any | number;
	readonly HealthCheckSourceIp?: any | string;
	readonly HealthyThreshold?: any | number;
	readonly VbrInstanceOwnerId?: any | number;
	readonly LogicalId: string;
}
export class ChildInstanceRouteEntryToAttachment
	extends RosResource<ChildInstanceRouteEntryToAttachmentComponentInputs>
	implements ChildInstanceRouteEntryToAttachmentComponentOutputs
{
	constructor(entity: ADKEntity, options: ChildInstanceRouteEntryToAttachmentComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::CEN::ChildInstanceRouteEntryToAttachment", options);
	}
}
export interface ChildInstanceRouteEntryToAttachmentComponentOutputs {}
export interface ChildInstanceRouteEntryToAttachmentComponentInputs {
	readonly CenId: any | string;
	readonly DestinationCidrBlock: any | string;
	readonly RouteTableId: any | string;
	readonly TransitRouterAttachmentId: any | string;
	readonly LogicalId: string;
}
export class RouteEntry extends RosResource<RouteEntryComponentInputs> implements RouteEntryComponentOutputs {
	constructor(entity: ADKEntity, options: RouteEntryComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::CEN::RouteEntry", options);
	}
}
export interface RouteEntryComponentOutputs {}
export interface RouteEntryComponentInputs {
	readonly CenId: string;
	readonly ChildInstanceId: string;
	readonly ChildInstanceRegionId: string;
	readonly ChildInstanceRouteTableId: string;
	readonly ChildInstanceType: string;
	readonly DestinationCidrBlock: string;
	readonly LogicalId: string;
}
export class TransitRouter extends RosResource<TransitRouterComponentInputs> implements TransitRouterComponentOutputs {
	constructor(entity: ADKEntity, options: TransitRouterComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::CEN::TransitRouter", options);
	}
	public readonly Type: any;
	public readonly SystemTransitRouterRouteTableId: any;
	public readonly TransitRouterId: any;
	public readonly AliUid: any;
}
export interface TransitRouterComponentOutputs {
	readonly Type: any;
	readonly SystemTransitRouterRouteTableId: any;
	readonly TransitRouterId: any;
	readonly AliUid: any;
}
export interface TransitRouterComponentInputs {
	readonly CenId: any | string;
	readonly TransitRouterDescription?: any | string;
	readonly TransitRouterName?: any | string;
	readonly LogicalId: string;
}
export class TransitRouterPeerAttachment
	extends RosResource<TransitRouterPeerAttachmentComponentInputs>
	implements TransitRouterPeerAttachmentComponentOutputs
{
	constructor(entity: ADKEntity, options: TransitRouterPeerAttachmentComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::CEN::TransitRouterPeerAttachment", options);
	}
	public readonly TransitRouterAttachmentId: any;
	public readonly GeographicSpanId: any;
	public readonly PeerTransitRouterOwnerId: any;
	public readonly ResourceType: any;
	public readonly ClientToken: any;
}
export interface TransitRouterPeerAttachmentComponentOutputs {
	readonly TransitRouterAttachmentId: any;
	readonly GeographicSpanId: any;
	readonly PeerTransitRouterOwnerId: any;
	readonly ResourceType: any;
	readonly ClientToken: any;
}
export interface TransitRouterPeerAttachmentComponentInputs {
	readonly PeerTransitRouterId: any | string;
	readonly AutoPublishRouteEnabled?: any | boolean;
	readonly Bandwidth?: any | number;
	readonly CenBandwidthPackageId?: any | string;
	readonly CenId?: any | string;
	readonly PeerTransitRouterRegionId?: any | string;
	readonly TransitRouterAttachmentDescription?: any | string;
	readonly TransitRouterAttachmentName?: any | string;
	readonly TransitRouterId?: any | string;
	readonly LogicalId: string;
}
export class TransitRouterRouteEntry
	extends RosResource<TransitRouterRouteEntryComponentInputs>
	implements TransitRouterRouteEntryComponentOutputs
{
	constructor(entity: ADKEntity, options: TransitRouterRouteEntryComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::CEN::TransitRouterRouteEntry", options);
	}
	public readonly TransitRouterRouteEntryType: any;
	public readonly TransitRouterRouteEntryId: any;
}
export interface TransitRouterRouteEntryComponentOutputs {
	readonly TransitRouterRouteEntryType: any;
	readonly TransitRouterRouteEntryId: any;
}
export interface TransitRouterRouteEntryComponentInputs {
	readonly TransitRouterRouteEntryDestinationCidrBlock: any | string;
	readonly TransitRouterRouteEntryNextHopType: any | string;
	readonly TransitRouterRouteTableId: any | string;
	readonly TransitRouterRouteEntryDescription?: any | string;
	readonly TransitRouterRouteEntryName?: any | string;
	readonly TransitRouterRouteEntryNextHopId?: any | string;
	readonly LogicalId: string;
}
export class TransitRouterRouteTable
	extends RosResource<TransitRouterRouteTableComponentInputs>
	implements TransitRouterRouteTableComponentOutputs
{
	constructor(entity: ADKEntity, options: TransitRouterRouteTableComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::CEN::TransitRouterRouteTable", options);
	}
	public readonly TransitRouterRouteTableId: any;
	public readonly TransitRouterRouteTableType: any;
	public readonly ClientToken: any;
}
export interface TransitRouterRouteTableComponentOutputs {
	readonly TransitRouterRouteTableId: any;
	readonly TransitRouterRouteTableType: any;
	readonly ClientToken: any;
}
export interface TransitRouterRouteTableComponentInputs {
	readonly TransitRouterId: any | string;
	readonly TransitRouterRouteTableDescription?: any | string;
	readonly TransitRouterRouteTableName?: any | string;
	readonly LogicalId: string;
}
export class TransitRouterRouteTableAssociation
	extends RosResource<TransitRouterRouteTableAssociationComponentInputs>
	implements TransitRouterRouteTableAssociationComponentOutputs
{
	constructor(entity: ADKEntity, options: TransitRouterRouteTableAssociationComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::CEN::TransitRouterRouteTableAssociation", options);
	}
	public readonly ResourceId: any;
	public readonly ResourceType: any;
}
export interface TransitRouterRouteTableAssociationComponentOutputs {
	readonly ResourceId: any;
	readonly ResourceType: any;
}
export interface TransitRouterRouteTableAssociationComponentInputs {
	readonly TransitRouterAttachmentId: any | string;
	readonly TransitRouterRouteTableId: any | string;
	readonly LogicalId: string;
}
export class TransitRouterRouteTablePropagation
	extends RosResource<TransitRouterRouteTablePropagationComponentInputs>
	implements TransitRouterRouteTablePropagationComponentOutputs
{
	constructor(entity: ADKEntity, options: TransitRouterRouteTablePropagationComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::CEN::TransitRouterRouteTablePropagation", options);
	}
	public readonly ResourceId: any;
	public readonly ResourceType: any;
}
export interface TransitRouterRouteTablePropagationComponentOutputs {
	readonly ResourceId: any;
	readonly ResourceType: any;
}
export interface TransitRouterRouteTablePropagationComponentInputs {
	readonly TransitRouterAttachmentId: any | string;
	readonly TransitRouterRouteTableId: any | string;
	readonly LogicalId: string;
}
export class TransitRouterVbrAttachment
	extends RosResource<TransitRouterVbrAttachmentComponentInputs>
	implements TransitRouterVbrAttachmentComponentOutputs
{
	constructor(entity: ADKEntity, options: TransitRouterVbrAttachmentComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::CEN::TransitRouterVbrAttachment", options);
	}
	public readonly TransitRouterAttachmentId: any;
	public readonly ResourceType: any;
	public readonly ClientToken: any;
}
export interface TransitRouterVbrAttachmentComponentOutputs {
	readonly TransitRouterAttachmentId: any;
	readonly ResourceType: any;
	readonly ClientToken: any;
}
export interface TransitRouterVbrAttachmentComponentInputs {
	readonly VbrId: any | string;
	readonly AutoPublishRouteEnabled?: any | boolean;
	readonly CenId?: any | string;
	readonly TransitRouterAttachmentDescription?: any | string;
	readonly TransitRouterAttachmentName?: any | string;
	readonly TransitRouterId?: any | string;
	readonly VbrOwnerId?: any | number;
	readonly LogicalId: string;
}
export class TransitRouterVpcAttachment
	extends RosResource<TransitRouterVpcAttachmentComponentInputs>
	implements TransitRouterVpcAttachmentComponentOutputs
{
	constructor(entity: ADKEntity, options: TransitRouterVpcAttachmentComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::CEN::TransitRouterVpcAttachment", options);
	}
	public readonly TransitRouterAttachmentId: any;
	public readonly ResourceType: any;
	public readonly ClientToken: any;
}
export interface TransitRouterVpcAttachmentComponentOutputs {
	readonly TransitRouterAttachmentId: any;
	readonly ResourceType: any;
	readonly ClientToken: any;
}
export interface TransitRouterVpcAttachmentComponentInputs {
	readonly VpcId: any | string;
	readonly ZoneMappings: ZoneMappings[];
	readonly AutoCreateVpcRoute?: boolean | undefined;
	readonly CenId?: any | string;
	readonly ChargeType?: string | undefined;
	readonly DeletionForce?: boolean | undefined;
	readonly RouteTableAssociationEnabled?: boolean | undefined;
	readonly RouteTablePropagationEnabled?: boolean | undefined;
	readonly TransitRouterAttachmentDescription?: any | string;
	readonly TransitRouterAttachmentName?: any | string;
	readonly TransitRouterId?: any | string;
	readonly VpcOwnerId?: any | number;
	readonly LogicalId: string;
}
export interface Tags {
	readonly Value?: string | undefined;
	readonly Key: string;
}
export interface ZoneMappings {
	readonly ZoneId: string;
	readonly VSwitchId: string;
}
export default {
	CenBandwidthLimit: CenBandwidthLimit,
	CenBandwidthPackage: CenBandwidthPackage,
	CenBandwidthPackageAssociation: CenBandwidthPackageAssociation,
	CenInstance: CenInstance,
	CenInstanceAttachment: CenInstanceAttachment,
	CenRouteMap: CenRouteMap,
	CenRouteService: CenRouteService,
	CenVbrHealthCheck: CenVbrHealthCheck,
	ChildInstanceRouteEntryToAttachment: ChildInstanceRouteEntryToAttachment,
	RouteEntry: RouteEntry,
	TransitRouter: TransitRouter,
	TransitRouterPeerAttachment: TransitRouterPeerAttachment,
	TransitRouterRouteEntry: TransitRouterRouteEntry,
	TransitRouterRouteTable: TransitRouterRouteTable,
	TransitRouterRouteTableAssociation: TransitRouterRouteTableAssociation,
	TransitRouterRouteTablePropagation: TransitRouterRouteTablePropagation,
	TransitRouterVbrAttachment: TransitRouterVbrAttachment,
	TransitRouterVpcAttachment: TransitRouterVpcAttachment,
};
