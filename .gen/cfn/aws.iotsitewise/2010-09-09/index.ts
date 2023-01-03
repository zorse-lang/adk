import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class AccessPolicy extends CfnResource<AccessPolicyComponentInputs> implements AccessPolicyComponentOutputs {
	constructor(entity: ADKEntity, options: AccessPolicyComponentInputs) {
		super(entity, options.LogicalId, "AWS::IoTSiteWise::AccessPolicy", options);
	}
	public readonly AccessPolicyArn: string;
	public readonly AccessPolicyId: string;
}
export interface AccessPolicyComponentOutputs {
	readonly AccessPolicyArn: string;
	readonly AccessPolicyId: string;
}
export interface AccessPolicyComponentInputs {
	readonly AccessPolicyIdentity: AccessPolicyIdentity;
	readonly AccessPolicyPermission: string;
	readonly AccessPolicyResource: AccessPolicyResource;
	readonly LogicalId: string;
}
export class Asset extends CfnResource<AssetComponentInputs> implements AssetComponentOutputs {
	constructor(entity: ADKEntity, options: AssetComponentInputs) {
		super(entity, options.LogicalId, "AWS::IoTSiteWise::Asset", options);
	}
	public readonly AssetArn: string;
	public readonly AssetId: string;
}
export interface AssetComponentOutputs {
	readonly AssetArn: string;
	readonly AssetId: string;
}
export interface AssetComponentInputs {
	readonly AssetModelId: string;
	readonly AssetName: string;
	readonly AssetDescription?: (string | undefined) | undefined;
	readonly AssetHierarchies?: (AssetHierarchy[] | undefined) | undefined;
	readonly AssetProperties?: (Asset[] | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly LogicalId: string;
}
export class AssetModel extends CfnResource<AssetModelComponentInputs> implements AssetModelComponentOutputs {
	constructor(entity: ADKEntity, options: AssetModelComponentInputs) {
		super(entity, options.LogicalId, "AWS::IoTSiteWise::AssetModel", options);
	}
	public readonly AssetModelArn: string;
	public readonly AssetModelId: string;
}
export interface AssetModelComponentOutputs {
	readonly AssetModelArn: string;
	readonly AssetModelId: string;
}
export interface AssetModelComponentInputs {
	readonly AssetModelName: string;
	readonly AssetModelCompositeModels?: (AssetModelCompositeModel[] | undefined) | undefined;
	readonly AssetModelDescription?: (string | undefined) | undefined;
	readonly AssetModelHierarchies?: (AssetModelHierarchy[] | undefined) | undefined;
	readonly AssetModelProperties?: (AssetModel[] | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly LogicalId: string;
}
export class Dashboard extends CfnResource<DashboardComponentInputs> implements DashboardComponentOutputs {
	constructor(entity: ADKEntity, options: DashboardComponentInputs) {
		super(entity, options.LogicalId, "AWS::IoTSiteWise::Dashboard", options);
	}
	public readonly DashboardArn: string;
	public readonly DashboardId: string;
}
export interface DashboardComponentOutputs {
	readonly DashboardArn: string;
	readonly DashboardId: string;
}
export interface DashboardComponentInputs {
	readonly DashboardDefinition: string;
	readonly DashboardDescription: string;
	readonly DashboardName: string;
	readonly ProjectId?: (string | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly LogicalId: string;
}
export class Gateway extends CfnResource<GatewayComponentInputs> implements GatewayComponentOutputs {
	constructor(entity: ADKEntity, options: GatewayComponentInputs) {
		super(entity, options.LogicalId, "AWS::IoTSiteWise::Gateway", options);
	}
	public readonly GatewayId: string;
}
export interface GatewayComponentOutputs {
	readonly GatewayId: string;
}
export interface GatewayComponentInputs {
	readonly GatewayName: string;
	readonly GatewayPlatform: GatewayPlatform;
	readonly GatewayCapabilitySummaries?: (GatewayCapabilitySummary[] | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly LogicalId: string;
}
export class Portal extends CfnResource<PortalComponentInputs> implements PortalComponentOutputs {
	constructor(entity: ADKEntity, options: PortalComponentInputs) {
		super(entity, options.LogicalId, "AWS::IoTSiteWise::Portal", options);
	}
	public readonly PortalArn: string;
	public readonly PortalClientId: string;
	public readonly PortalId: string;
	public readonly PortalStartUrl: string;
}
export interface PortalComponentOutputs {
	readonly PortalArn: string;
	readonly PortalClientId: string;
	readonly PortalId: string;
	readonly PortalStartUrl: string;
}
export interface PortalComponentInputs {
	readonly PortalContactEmail: string;
	readonly PortalName: string;
	readonly RoleArn: string;
	readonly Alarms?: (Alarms | undefined) | undefined;
	readonly NotificationSenderEmail?: (string | undefined) | undefined;
	readonly PortalAuthMode?: (string | undefined) | undefined;
	readonly PortalDescription?: (string | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly LogicalId: string;
}
export class Project extends CfnResource<ProjectComponentInputs> implements ProjectComponentOutputs {
	constructor(entity: ADKEntity, options: ProjectComponentInputs) {
		super(entity, options.LogicalId, "AWS::IoTSiteWise::Project", options);
	}
	public readonly ProjectArn: string;
	public readonly ProjectId: string;
}
export interface ProjectComponentOutputs {
	readonly ProjectArn: string;
	readonly ProjectId: string;
}
export interface ProjectComponentInputs {
	readonly PortalId: string;
	readonly ProjectName: string;
	readonly AssetIds?: (string[] | undefined) | undefined;
	readonly ProjectDescription?: (string | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly LogicalId: string;
}
export interface AccessPolicyIdentity {
	readonly IamRole?: (IamRole | undefined) | undefined;
	readonly IamUser?: (IamUser | undefined) | undefined;
	readonly User?: (User | undefined) | undefined;
}
export interface AccessPolicyResource {
	readonly Portal?: (Portal | undefined) | undefined;
	readonly Project?: (Project | undefined) | undefined;
}
export interface IamRole {
	readonly arn?: (string | undefined) | undefined;
}
export interface IamUser {
	readonly arn?: (string | undefined) | undefined;
}
export interface Portal {
	readonly id?: (string | undefined) | undefined;
}
export interface Project {
	readonly id?: (string | undefined) | undefined;
}
export interface User {
	readonly id?: (string | undefined) | undefined;
}
export interface AssetHierarchy {
	readonly ChildAssetId: string;
	readonly LogicalId: string;
}
export interface Asset {
	readonly Alias?: (string | undefined) | undefined;
	readonly LogicalId: string;
	readonly NotificationState?: (string | undefined) | undefined;
	readonly Unit?: (string | undefined) | undefined;
}
export interface AssetModelCompositeModel {
	readonly CompositeModelProperties?: (AssetModel[] | undefined) | undefined;
	readonly Description?: (string | undefined) | undefined;
	readonly Name: string;
	readonly Type: string;
}
export interface AssetModelHierarchy {
	readonly ChildAssetModelId: string;
	readonly LogicalId: string;
	readonly Name: string;
}
export interface AssetModel {
	readonly DataType: string;
	readonly DataTypeSpec?: (string | undefined) | undefined;
	readonly LogicalId: string;
	readonly Name: string;
	readonly Type: PropertyType;
	readonly Unit?: (string | undefined) | undefined;
}
export interface Attribute {
	readonly DefaultValue?: (string | undefined) | undefined;
}
export interface ExpressionVariable {
	readonly Name: string;
	readonly Value: VariableValue;
}
export interface Metric {
	readonly Expression: string;
	readonly Variables: ExpressionVariable[];
	readonly Window: MetricWindow;
}
export interface MetricWindow {
	readonly Tumbling?: (TumblingWindow | undefined) | undefined;
}
export interface PropertyType {
	readonly Attribute?: (Attribute | undefined) | undefined;
	readonly Metric?: (Metric | undefined) | undefined;
	readonly Transform?: (Transform | undefined) | undefined;
	readonly TypeName: string;
}
export interface Transform {
	readonly Expression: string;
	readonly Variables: ExpressionVariable[];
}
export interface TumblingWindow {
	readonly Interval: string;
	readonly Offset?: (string | undefined) | undefined;
}
export interface VariableValue {
	readonly HierarchyLogicalId?: (string | undefined) | undefined;
	readonly PropertyLogicalId: string;
}
export interface GatewayCapabilitySummary {
	readonly CapabilityConfiguration?: (string | undefined) | undefined;
	readonly CapabilityNamespace: string;
}
export interface GatewayPlatform {
	readonly Greengrass?: (Greengrass | undefined) | undefined;
	readonly GreengrassV2?: (GreengrassV2 | undefined) | undefined;
}
export interface Greengrass {
	readonly GroupArn: string;
}
export interface GreengrassV2 {
	readonly CoreDeviceThingName: string;
}
export interface Alarms {
	readonly AlarmRoleArn?: (string | undefined) | undefined;
	readonly NotificationLambdaArn?: (string | undefined) | undefined;
}
export default {
	AccessPolicy: AccessPolicy,
	Asset: Asset,
	AssetModel: AssetModel,
	Dashboard: Dashboard,
	Gateway: Gateway,
	Portal: Portal,
	Project: Project,
};
