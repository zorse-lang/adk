import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class Device extends CfnResource<DeviceComponentInputs> implements DeviceComponentOutputs {
	constructor(entity: ADKEntity, options: DeviceComponentInputs) {
		super(entity, options.LogicalId, "AWS::IoT1Click::Device", options);
	}
	public readonly Arn: string;
	public readonly DeviceId: string;
	public readonly Enabled: boolean;
}
export interface DeviceComponentOutputs {
	readonly Arn: string;
	readonly DeviceId: string;
	readonly Enabled: boolean;
}
export interface DeviceComponentInputs {
	readonly DeviceId: string;
	readonly Enabled: boolean;
	readonly LogicalId: string;
}
export class Placement extends CfnResource<PlacementComponentInputs> implements PlacementComponentOutputs {
	constructor(entity: ADKEntity, options: PlacementComponentInputs) {
		super(entity, options.LogicalId, "AWS::IoT1Click::Placement", options);
	}
	public readonly ProjectName: string;
}
export interface PlacementComponentOutputs {
	readonly ProjectName: string;
}
export interface PlacementComponentInputs {
	readonly ProjectName: string;
	readonly AssociatedDevices?: (any | undefined) | undefined;
	readonly Attributes?: (any | undefined) | undefined;
	readonly PlacementName?: string | undefined;
	readonly LogicalId: string;
}
export class Project extends CfnResource<ProjectComponentInputs> implements ProjectComponentOutputs {
	constructor(entity: ADKEntity, options: ProjectComponentInputs) {
		super(entity, options.LogicalId, "AWS::IoT1Click::Project", options);
	}
	public readonly Arn: string;
}
export interface ProjectComponentOutputs {
	readonly Arn: string;
}
export interface ProjectComponentInputs {
	readonly PlacementTemplate: PlacementTemplate;
	readonly Description?: (string | undefined) | undefined;
	readonly ProjectName?: string | undefined;
	readonly LogicalId: string;
}
export interface DeviceTemplate {
	readonly CallbackOverrides?: (any | undefined) | undefined;
	readonly DeviceType?: (string | undefined) | undefined;
}
export interface PlacementTemplate {
	readonly DefaultAttributes?: (any | undefined) | undefined;
	readonly DeviceTemplates?: ({ [key: string]: DeviceTemplate } | undefined) | undefined;
}
export default {
	Device: Device,
	Placement: Placement,
	Project: Project,
};
